'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/common/PageTitle';

const ProgramsPage = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const programs = [
    {
      id: 1,
      title: "Hifz Program",
      category: "quran",
      duration: "3-4 Years",
      credits: "Full-time",
      term: "Year-round",
      image: "/assets/img/education/education-1.webp",
      description: "Comprehensive Quran memorization program with tajweed and tafsir studies.",
      badge: "Quran Program"
    },
    {
      id: 2,
      title: "Arabic Language",
      category: "language",
      duration: "2 Years",
      credits: "Part-time",
      term: "Fall & Spring",
      image: "/assets/img/education/education-3.webp",
      description: "Master classical and modern Arabic with focus on reading, writing, and speaking.",
      badge: "Language Course"
    },
    {
      id: 3,
      title: "Islamic Studies",
      category: "islamic",
      duration: "4 Years",
      credits: "Full-time",
      term: "Fall & Spring",
      image: "/assets/img/education/education-5.webp",
      description: "Comprehensive study of Islamic sciences including fiqh, hadith, and seerah.",
      badge: "Islamic Studies"
    },
    {
      id: 4,
      title: "Tajweed Certification",
      category: "quran",
      duration: "1 Year",
      credits: "Part-time",
      term: "Year-round",
      image: "/assets/img/education/education-7.webp",
      description: "Master the rules of Quranic recitation with practical application.",
      badge: "Certificate"
    },
    {
      id: 5,
      title: "Islamic Finance",
      category: "islamic",
      duration: "2 Years",
      credits: "Part-time",
      term: "Fall & Spring",
      image: "/assets/img/education/education-9.webp",
      description: "Study of Islamic banking, finance, and economic principles.",
      badge: "Specialization"
    },
    {
      id: 6,
      title: "Quran Translation",
      category: "quran",
      duration: "6 Months",
      credits: "Part-time",
      term: "Year-round",
      image: "/assets/img/education/education-2.webp",
      description: "Understanding Quranic Arabic and translation studies.",
      badge: "Certificate"
    }
  ];

  const filteredPrograms = activeFilter === '*' 
    ? programs 
    : programs.filter(program => program.category === activeFilter);

  return (
    <main className="main">
      <PageTitle 
        title="Our Programs"
        description="Discover our comprehensive range of Islamic education programs designed to nurture knowledge and spiritual growth"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Programs', href: '/programs' }
        ]}
      />

      <section id="featured-programs" className="featured-programs section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul className="program-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li 
                className={activeFilter === '*' ? 'filter-active' : ''} 
                onClick={() => setActiveFilter('*')}
              >
                All Programs
              </li>
              <li 
                className={activeFilter === 'quran' ? 'filter-active' : ''} 
                onClick={() => setActiveFilter('quran')}
              >
                Quran Programs
              </li>
              <li 
                className={activeFilter === 'language' ? 'filter-active' : ''} 
                onClick={() => setActiveFilter('language')}
              >
                Language Courses
              </li>
              <li 
                className={activeFilter === 'islamic' ? 'filter-active' : ''} 
                onClick={() => setActiveFilter('islamic')}
              >
                Islamic Studies
              </li>
            </ul>

            <div className="row g-4 isotope-container">
              {filteredPrograms.map((program) => (
                <div 
                  key={program.id} 
                  className="col-lg-6 isotope-item" 
                  data-aos="zoom-in" 
                  data-aos-delay="100"
                >
                  <div className="program-item">
                    <div className="program-badge">{program.badge}</div>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className="program-image-wrapper">
                          <Image 
                            src={program.image} 
                            className="img-fluid" 
                            alt={program.title}
                            width={300}
                            height={200}
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="program-content">
                          <h3>{program.title}</h3>
                          <div className="program-highlights">
                            <span><i className="bi bi-clock"></i> {program.duration}</span>
                            <span><i className="bi bi-people-fill"></i> {program.credits}</span>
                            <span><i className="bi bi-calendar3"></i> {program.term}</span>
                          </div>
                          <p>{program.description}</p>
                          <Link href={`/programs/${program.id}`} className="program-btn">
                            <span>Learn More</span> <i className="bi bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramsPage; 