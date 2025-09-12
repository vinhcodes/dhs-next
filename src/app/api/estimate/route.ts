// src/app/api/estimate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Configure API route for larger file uploads (but still within Vercel limits)
export const maxDuration = 30 // 30 seconds timeout
export const dynamic = 'force-dynamic'

// Validation schema with YOUR services
const estimateSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  service: z.enum([
    'interior-painting',
    'exterior-painting', 
    'cabinet-makeover',
    'pool-painting',
    'fence-painting',
    'garage-floor-painting',
  ]),
  address: z.string().optional(),
  photos: z.any().optional(),
  squareFootage: z.string().optional()
})

type EstimateData = z.infer<typeof estimateSchema>

// Simple rate limiting
const rateLimit = new Map()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  const userLimit = rateLimit.get(ip)
  
  if (now > userLimit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (userLimit.count >= maxRequests) {
    return false
  }

  userLimit.count++
  return true
}

// Simple Gmail App Password setup
function createTransporter() {
  const emailUser = process.env.EMAIL_USER
  const emailPassword = process.env.EMAIL_APP_PASSWORD

  if (!emailUser || !emailPassword) {
    throw new Error('Email configuration missing. Please set EMAIL_USER and EMAIL_APP_PASSWORD in your .env.local file')
  }

  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  })
}

// Customer email template
function getCustomerEmailTemplate(data: EstimateData): string {
  const serviceName = data.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank You - DHS Services</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
          background: linear-gradient(135deg, #f97316, #ea580c); 
          color: white; 
          padding: 30px 20px; 
          text-align: center; 
        }
        .header h1 {
          margin: 0 0 10px 0;
          font-size: 28px;
        }
        .header h2 {
          margin: 0;
          font-size: 18px;
          font-weight: normal;
        }
        .content { 
          padding: 30px 20px; 
        }
        .info-box {
          background: #f8f9fa;
          border-left: 4px solid #f97316;
          padding: 15px;
          margin: 20px 0;
        }
        .footer { 
          background: #333; 
          color: white; 
          padding: 20px; 
          text-align: center; 
          font-size: 14px;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin-bottom: 8px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏠 DHS Services</h1>
          <h2>Thank You for Your Request!</h2>
        </div>
        <div class="content">
          <p>Dear ${data.firstName},</p>
          <p>Thank you for requesting a estimate from DHS Services! We've received your information and our team will contact you within 24 hours to schedule your consultation.</p>
          
          <div class="info-box">
            <h3>Your Request Details:</h3>
            <ul>
              <li><strong>Service:</strong> ${serviceName}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Phone:</strong> ${data.phone}</li>
              ${data.address ? `<li><strong>Address:</strong> ${data.address}</li>` : ''}
              ${data.squareFootage ? `<li><strong>Square Footage:</strong> ${data.squareFootage}</li>` : ''}
              ${data.photos ? `<li><strong>Photos:</strong> Included with request</li>` : ''}
            </ul>
          </div>
          
          <p>In the meantime, feel free to browse our previous work on our website or call us directly if you have any immediate questions.</p>
          
          <p><strong>Best regards,</strong><br>
          The DHS Services Team<br>
          <em>Your Trusted Home Service Professionals</em></p>
        </div>
        <div class="footer">
          <p>&copy; 2025 DHS Services. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Business notification email template
function getBusinessEmailTemplate(data: EstimateData, photoAttachments: Array<{cid: string, filename: string}>): string {
  const serviceName = data.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Estimate Request</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
          background: #1f2937; 
          color: white; 
          padding: 20px; 
          text-align: center; 
        }
        .urgent { 
          background: #fee2e2; 
          border-left: 4px solid #dc2626; 
          padding: 15px; 
          margin: 20px; 
          border-radius: 4px;
        }
        .info { 
          background: #f0f9ff; 
          border-left: 4px solid #f97316; 
          padding: 15px; 
          margin: 20px; 
          border-radius: 4px;
        }
        .contact-info {
          background: #f8f9fa;
          padding: 15px;
          margin: 20px;
          border-radius: 4px;
        }
        .contact-info a {
          color: #f97316;
          text-decoration: none;
        }
        .contact-info a:hover {
          text-decoration: underline;
        }
        h3 {
          margin-top: 0;
          color: #1f2937;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚨 New Estimate Request</h1>
          <p>Received: ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="urgent">
          <h3>⏰ Action Required</h3>
          <p><strong>Contact customer within 24 hours</strong></p>
        </div>
        
        <div class="contact-info">
          <h3>👤 Customer Information</h3>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          ${data.address ? `<p><strong>Address:</strong> ${data.address}</p>` : ''}
        </div>

        <div class="info">
          <h3>🏠 Service Requested</h3>
          <p><strong>${serviceName}</strong></p>
          ${data.squareFootage ? `<p><strong>Square Footage:</strong> ${data.squareFootage}</p>` : ''}
          ${data.photos ? `<p><strong>📷 Photos:</strong> Customer has uploaded ${photoAttachments.length} photos</p>` : ''}
        </div>

        ${photoAttachments.length > 0 ? `
        <div class="info">
          <h3>📸 Customer Photos</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin: 15px 0;">
            ${photoAttachments.map(photo => `
              <div style="text-align: center;">
                <img src="cid:${photo.cid}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" alt="${photo.filename}">
                <p style="font-size: 12px; color: #666; margin: 5px 0 0 0;">${photo.filename}</p>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

        <div class="contact-info">
          <h3>📋 Next Steps</h3>
          <ol>
            <li>Call the customer within 24 hours</li>
            <li>Schedule an in-person consultation</li>
            <li>Prepare detailed estimate</li>
            <li>Follow up within 48 hours of consultation</li>
          </ol>
        </div>
      </div>
    </body>
    </html>
  `
}

// GET handler for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'DHS Services Estimate API',
    status: 'running',
    timestamp: new Date().toISOString(),
    services: [
      'interior-painting',
      'exterior-painting', 
      'cabinet-makeover',
      'pool-painting',
      'fence-painting',
      'garage-floor-painting'
    ]
  })
}

// POST handler for form submissions
export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          error: 'Too many requests', 
          message: 'Please try again later' 
        },
        { status: 429 }
      )
    }

    // Handle both JSON and FormData
    let body: Record<string, unknown>
    const photoAttachments: Array<{
      filename: string;
      content: Buffer;
      contentType: string;
      cid: string;
    }> = []
    
    const contentType = request.headers.get('content-type')
    
    if (contentType?.includes('multipart/form-data')) {
      // Handle FormData with files
      const formData = await request.formData()
      body = {}
      
      // Check total size of files to prevent 413 errors
      let totalFileSize = 0
      const MAX_TOTAL_SIZE = 4 * 1024 * 1024 // 4MB total limit for Vercel
      
      // Extract form fields and process photos
      for (const [key, value] of formData.entries()) {
        if (key === 'photos' && value instanceof File) {
          // Check individual file size
          if (value.size > 2 * 1024 * 1024) { // 2MB per file
            return NextResponse.json(
              { 
                error: 'File too large', 
                message: 'Please reduce image size to under 2MB per file' 
              },
              { status: 413 }
            )
          }

          totalFileSize += value.size

          // Check total size
          if (totalFileSize > MAX_TOTAL_SIZE) {
            return NextResponse.json(
              { 
                error: 'Total file size too large', 
                message: 'Please reduce total image size to under 4MB' 
              },
              { status: 413 }
            )
          }
          
          // Process image file
          const arrayBuffer = await value.arrayBuffer()
          const buffer = Buffer.from(arrayBuffer)
          
          // Create unique content ID for embedding
          const cid = `photo_${photoAttachments.length + 1}_${Date.now()}`
          
          photoAttachments.push({
            filename: value.name,
            content: buffer,
            contentType: value.type,
            cid: cid
          })
        } else if (key !== 'photos') {
          body[key] = value
        }
      }
      
      // Set photos indicator for validation
      if (photoAttachments.length > 0) {
        body.photos = photoAttachments.length
      }
    } else {
      // Handle regular JSON
      body = await request.json()
    }
    
    const validatedData = estimateSchema.parse(body)

    // Create email transporter
    const transporter = createTransporter()
    const businessEmail = process.env.BUSINESS_EMAIL

    if (!businessEmail) {
      throw new Error('BUSINESS_EMAIL not configured in .env.local file')
    }

    // Send customer confirmation email
    await transporter.sendMail({
      from: {
        name: 'DHS Services',
        address: process.env.EMAIL_USER!,
      },
      to: validatedData.email,
      subject: 'Thank You for Your Estimate Request - DHS Services',
      html: getCustomerEmailTemplate(validatedData),
    })

    // Send business notification email
    await transporter.sendMail({
      from: {
        name: 'DHS Website Contact Form',
        address: process.env.EMAIL_USER!,
      },
      to: businessEmail,
      subject: `🚨 New Estimate Request - ${validatedData.service}${photoAttachments.length > 0 ? ` (${photoAttachments.length} photos)` : ''}`,
      html: getBusinessEmailTemplate(validatedData, photoAttachments.map(p => ({cid: p.cid, filename: p.filename}))),
      priority: 'high',
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
      },
      attachments: photoAttachments.map(photo => ({
        filename: photo.filename,
        content: photo.content,
        contentType: photo.contentType,
        cid: photo.cid
      }))
    })

    return NextResponse.json({
      success: true,
      message: 'Estimate request submitted successfully'
    })

  } catch (error) {
    console.error('Estimate submission error:', error instanceof Error ? error.message : 'Unknown error')

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: error.issues 
        },
        { status: 400 }
      )
    }

    // Handle configuration errors
    if (error instanceof Error && error.message.includes('configuration')) {
      return NextResponse.json(
        { 
          error: 'Server configuration error',
          message: 'Please check email configuration'
        },
        { status: 500 }
      )
    }

    // Handle email sending errors
    if (error instanceof Error && error.message.includes('BUSINESS_EMAIL')) {
      return NextResponse.json(
        { 
          error: 'Business email not configured',
          message: 'Please contact support'
        },
        { status: 500 }
      )
    }

    // Generic error response
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Please try again or contact us directly'
      },
      { status: 500 }
    )
  }
}