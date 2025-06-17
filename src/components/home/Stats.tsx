'use client';

import Image from 'next/image';
import Link from 'next/link';

const Stats = () => {
  const achievements = [
    {
      id: 1,
      title: "Top-Ranked Programs",
      description: "Our Quran memorization and Islamic studies programs are recognized for their excellence and comprehensive curriculum.",
      image: "/assets/img/education/education-1.webp"
    },
    {
      id: 2,
      title: "State-of-the-Art Facilities",
      description: "Modern classrooms, digital learning resources, and comfortable study spaces designed for optimal learning.",
      image: "/assets/img/education/education-2.webp"
    },
    {
      id: 3,
      title: "Global Alumni Network",
      description: "Join our growing network of graduates who are making positive contributions in their communities worldwide.",
      image: "/assets/img/education/education-3.webp"
    }
  ];

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-6">
            <div className="stats-overview" data-aos="fade-right" data-aos-delay="200">
              <h2 className="stats-title">Excellence in Islamic Education</h2>
              <p className="stats-description">
                Tanzeel Academy is committed to providing comprehensive Islamic education that combines traditional knowledge with modern teaching methods. Our focus on academic excellence, spiritual growth, and character development has made us a leading institution in Islamic education.
              </p>
              <div className="stats-cta">
                <Link href="/about" className="btn btn-primary">Learn More</Link>
                <Link href="/contact" className="btn btn-outline">Schedule a Visit</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="stats-card" data-aos="zoom-in" data-aos-delay="300">
                  <div className="stats-icon">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div className="stats-number">
                    <span data-purecounter-start="0" data-purecounter-end="95" data-purecounter-duration="1" className="purecounter"></span>%
                  </div>
                  <div className="stats-label">Student Satisfaction</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="stats-card" data-aos="zoom-in" data-aos-delay="400">
                  <div className="stats-icon">
                    <i className="bi bi-person-workspace"></i>
                  </div>
                  <div className="stats-number">
                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>:1
                  </div>
                  <div className="stats-label">Student-Teacher Ratio</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="stats-card" data-aos="zoom-in" data-aos-delay="500">
                  <div className="stats-icon">
                    <i className="bi bi-award"></i>
                  </div>
                  <div className="stats-number">
                    <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="1" className="purecounter"></span>+
                  </div>
                  <div className="stats-label">Specialized Programs</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="stats-card" data-aos="zoom-in" data-aos-delay="600">
                  <div className="stats-icon">
                    <i className="bi bi-mortarboard-fill"></i>
                  </div>
                  <div className="stats-number">
                    <span data-purecounter-start="0" data-purecounter-end="500" data-purecounter-duration="1" className="purecounter"></span>+
                  </div>
                  <div className="stats-label">Graduates</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="achievements-gallery" data-aos="fade-up" data-aos-delay="700">
              <div className="row g-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="col-md-4">
                    <div className="achievement-item">
                      <Image 
                        src={achievement.image} 
                        alt={achievement.title} 
                        className="img-fluid"
                        width={400}
                        height={300}
                      />
                      <div className="achievement-content">
                        <h4>{achievement.title}</h4>
                        <p>{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 