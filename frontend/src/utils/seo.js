export function pageTitle(title) {
  return `${title} | Trimurya Corporation`;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Trimurya Corporation',
    slogan: 'Empowering Businesses Through Innovation, Technology & Talent',
    url: 'https://trimuryacorporation.com',
    sameAs: ['https://www.linkedin.com/', 'https://www.facebook.com/', 'https://www.instagram.com/']
  };
}
