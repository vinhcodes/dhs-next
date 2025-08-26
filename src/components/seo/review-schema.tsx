export function ReviewSchema() {
  const reviewData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Sarah Johnson'
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      reviewBody: 'Excellent work on our home exterior. Professional, clean, and finished on time. Highly recommend DHS Painting for anyone in Tampa Bay.',
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: 'DHS - Diverse Home Solution',
        image: 'https://diversehomesolution.com/images/logo.png',
        telephone: '(727) 614-5087',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tampa Bay',
          addressRegion: 'FL',
          addressCountry: 'US'
        }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Mike Rodriguez'
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      reviewBody: 'Outstanding interior painting service. Eugene and his team were professional, efficient, and the results exceeded our expectations.',
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: 'DHS - Diverse Home Solution',
        image: 'https://diversehomesolution.com/images/logo.png',
        telephone: '(727) 614-5087',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tampa Bay',
          addressRegion: 'FL',
          addressCountry: 'US'
        }
      }
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewData),
      }}
    />
  );
}