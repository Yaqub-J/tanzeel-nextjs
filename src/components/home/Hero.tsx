'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="hero-container">
        <video autoPlay muted loop playsInline className="video-background">
          <source src="/assets/img/education/video.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="zoom-out" data-aos-delay="100">
              <div className="hero-content">
                <h1>Nurturing Islamic Knowledge & Personal Growth</h1>
                <p>Join Tanzeel Academy for comprehensive Islamic studies, Quran memorization, and language proficiency programs designed to enrich your spiritual and academic journey.</p>
                <div className="cta-buttons">
                  <Link href="/admissions" className="btn-primary">Start Your Journey</Link>
                  <Link href="/programs" className="btn-secondary">Explore Programs</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5" data-aos="zoom-out" data-aos-delay="200">
              <div className="stats-card">
                <div className="stats-header">
                  <h3>Why Choose Tanzeel</h3>
                  <div className="decoration-line"></div>
                </div>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="bi bi-journal-bookmark"></i>
                    </div>
                    <div className="stat-content">
                      <h4>3+</h4>
                      <p>Quran Programs</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="bi bi-translate"></i>
                    </div>
                    <div className="stat-content">
                      <h4>3</h4>
                      <p>Language Courses</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="bi bi-mortarboard-fill"></i>
                    </div>
                    <div className="stat-content">
                      <h4>1:1</h4>
                      <p>Personalized Learning</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="bi bi-people-fill"></i>
                    </div>
                    <div className="stat-content">
                      <h4>7+</h4>
                      <p>Specialized Programs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="event-ticker">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6 col-xl-4 col-12 ticker-item">
              <span className="date">JUN 20</span>
              <span className="title">Registration Deadline</span>
              <Link href="/admissions" className="btn-register">Apply Now</Link>
            </div>
            <div className="col-md-6 col-12 col-xl-4 ticker-item">
              <span className="date">JUL 1</span>
              <span className="title">New Term Begins</span>
              <Link href="/programs" className="btn-register">Learn More</Link>
            </div>
            <div className="col-md-6 col-12 col-xl-4 ticker-item">
              <span className="date">JUL 15</span>
              <span className="title">Open House Day</span>
              <Link href="/contact" className="btn-register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 