'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row mb-5">
          <div className="col-lg-6 pe-lg-5" data-aos="fade-right" data-aos-delay="200">
            <h2 className="display-6 fw-bold mb-4">Comprehensive Islamic Education <span>for All Ages</span></h2>
            <p className="lead mb-4">Tanzeel Academy offers structured programs for lifelong learning and growth, combining Islamic studies with essential life skills and language proficiency.</p>
            <div className="d-flex flex-wrap gap-4 mb-4">
              <div className="stat-box">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">7+</span>
                <span className="stat-label">Programs</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">3</span>
                <span className="stat-label">Languages</span>
              </div>
            </div>
            <div className="d-flex align-items-center mt-4 signature-block">
              <div className="ms-3">
                <p className="mb-0 fw-bold">Tanzeel Academy</p>
                <p className="mb-0 text-muted">Institute of Comprehensive Islamic Studies</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="image-stack">
              <div className="image-stack-item image-stack-item-top" data-aos="zoom-in" data-aos-delay="400">
                <Image 
                  src="/assets/img/education/campus-4.webp" 
                  alt="Campus Life" 
                  className="img-fluid rounded-4 shadow-lg"
                  width={500}
                  height={300}
                />
              </div>
              <div className="image-stack-item image-stack-item-bottom" data-aos="zoom-in" data-aos-delay="500">
                <Image 
                  src="/assets/img/education/students-2.webp" 
                  alt="Students" 
                  className="img-fluid rounded-4 shadow-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mission-vision-row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="value-card h-100">
              <div className="card-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>
              <h3>Our Mission</h3>
              <p>To provide comprehensive Islamic education that nurtures spiritual growth, academic excellence, and character development, preparing students to be knowledgeable, ethical, and contributing members of society.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="value-card h-100">
              <div className="card-icon">
                <i className="bi bi-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>To be a leading institution in Islamic education, fostering a community of lifelong learners who embody Islamic values and contribute positively to the global society through knowledge, wisdom, and service.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="value-card h-100">
              <div className="card-icon">
                <i className="bi bi-star"></i>
              </div>
              <h3>Our Values</h3>
              <p>We uphold the values of excellence in education, integrity in character, compassion in service, and unity in diversity, guided by the principles of the Quran and the teachings of Prophet Muhammad (peace be upon him).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 