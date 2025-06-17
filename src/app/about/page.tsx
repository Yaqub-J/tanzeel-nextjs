'use client';

import PageTitle from '@/components/common/PageTitle';
import AboutContent from '@/components/about/AboutContent';

const AboutPage = () => {
  return (
    <main className="main">
      <PageTitle 
        title="About Us"
        description="Learn about our mission, vision, and commitment to Islamic education"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]}
      />
      <AboutContent />
    </main>
  );
};

export default AboutPage; 