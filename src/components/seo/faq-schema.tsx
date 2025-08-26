export function FAQSchema() {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does house painting cost in Tampa Bay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'House painting costs in Tampa Bay vary based on size, materials, and complexity. Interior painting typically ranges from $2-6 per square foot, while exterior painting ranges from $3-7 per square foot. We provide free detailed estimates for all projects.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does it take to paint a house?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most residential painting projects take 3-7 days depending on size and weather conditions. Interior projects are typically faster (2-4 days), while exterior painting may take longer due to weather and preparation requirements.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide free painting estimates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide completely free, no-obligation painting estimates for all residential and commercial projects in Tampa Bay, St. Petersburg, Clearwater, and surrounding areas.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are you licensed and insured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, DHS Painting is fully licensed and insured in Florida. We carry comprehensive liability insurance and workers compensation to protect our clients and team members.'
        }
      },
      {
        '@type': 'Question',
        name: 'What type of paint do you use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use premium quality paints from leading brands like Sherwin-Williams, Benjamin Moore, and Behr. All paints are specifically chosen for Florida\'s climate with UV protection and moisture resistance.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer warranty on your painting work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide comprehensive warranties on all our painting services. Interior paint work is warranted for 2 years, and exterior painting comes with a 3-year warranty against peeling, cracking, and fading.'
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData),
      }}
    />
  );
}