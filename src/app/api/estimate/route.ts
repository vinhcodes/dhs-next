// src/app/api/estimate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Validation schema with YOUR services
const estimateSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number'),
  service: z.enum([
    'interior-painting',
    'exterior-painting', 
    'cabinet-makeover',
    'gutters-cleaning',
    'window-washing',
    'pressure-washing',
  ])
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

  console.log('Using Gmail App Password for:', emailUser)
  
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
          <p>Thank you for requesting a free estimate from DHS Services! We've received your information and our team will contact you within 24 hours to schedule your consultation.</p>
          
          <div class="info-box">
            <h3>Your Request Details:</h3>
            <ul>
              <li><strong>Service:</strong> ${serviceName}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Phone:</strong> ${data.phone}</li>
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
function getBusinessEmailTemplate(data: EstimateData): string {
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
        </div>

        <div class="info">
          <h3>🏠 Service Requested</h3>
          <p><strong>${serviceName}</strong></p>
        </div>

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
      'gutters-cleaning',
      'window-washing',
      'pressure-washing'
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

    // Parse and validate request body
    const body = await request.json()
    const validatedData = estimateSchema.parse(body)

    // Create email transporter
    const transporter = createTransporter()
    const businessEmail = process.env.BUSINESS_EMAIL

    if (!businessEmail) {
      throw new Error('BUSINESS_EMAIL not configured in .env.local file')
    }

    console.log('Sending emails for estimate request:', {
      customer: validatedData.email,
      business: businessEmail,
      service: validatedData.service
    })

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
      subject: `🚨 New Estimate Request - ${validatedData.service}`,
      html: getBusinessEmailTemplate(validatedData),
      priority: 'high',
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
      },
    })

    // Log successful submission
    console.log('✅ Estimate request processed successfully:', {
      name: `${validatedData.firstName} ${validatedData.lastName}`,
      service: validatedData.service,
      timestamp: new Date().toISOString(),
      ip: ip
    })

    return NextResponse.json({
      success: true,
      message: 'Estimate request submitted successfully'
    })

  } catch (error) {
    console.error('❌ Estimate submission error:', error)

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