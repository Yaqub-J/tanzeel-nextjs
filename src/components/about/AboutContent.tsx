'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import { initPureCounter } from '@/utils/counter';
import { useLightbox } from '@/hooks/useLightbox';

const AboutContent = () => {
  // Initialize lightbox
  useLightbox();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Initialize PureCounter
    const initCounter = async () => {
      await initPureCounter();
    };
    initCounter();
  }, []);

  return (
    <>
      {/* History Section */}
      <section id="history" className="history section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-content" data-aos="fade-up" data-aos-delay="200">
                <h3>Our Story</h3>
                <h2>Educating Minds, Inspiring Hearts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae odio ac nisi tristique venenatis. Nullam feugiat ipsum vitae justo finibus, in sagittis dolor malesuada. Aenean vel fringilla est, a vulputate massa.</p>

                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>1965</h4>
                      <p>Etiam at tincidunt arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>1982</h4>
                      <p>Donec dignissim, odio ac imperdiet luctus, ante nisl accumsan justo, nec tempus augue mi in nulla.</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>1998</h4>
                      <p>Suspendisse potenti. Nullam lacinia dictum auctor. Phasellus euismod sem at dui imperdiet, ac tincidunt mi placerat.</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>2010</h4>
                      <p>Vestibulum ultrices magna ut faucibus sollicitudin. Sed eget venenatis enim, nec imperdiet ex.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image" data-aos="zoom-in" data-aos-delay="300">
                <Image
                  src="/assets/img/education/campus-5.webp"
                  alt="Campus"
                  width={600}
                  height={400}
                  className="img-fluid rounded"
                />

                <div className="mission-vision" data-aos="fade-up" data-aos-delay="400">
                  <div className="mission">
                    <h3>Our Mission</h3>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                  </div>

                  <div className="vision">
                    <h3>Our Vision</h3>
                    <p>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="core-values" data-aos="fade-up" data-aos-delay="500">
                <h3 className="text-center mb-4">Core Values</h3>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                  <div className="col">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="bi bi-book"></i>
                      </div>
                      <h4>Academic Excellence</h4>
                      <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="bi bi-people"></i>
                      </div>
                      <h4>Community Engagement</h4>
                      <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="bi bi-lightbulb"></i>
                      </div>
                      <h4>Innovation</h4>
                      <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="bi bi-globe"></i>
                      </div>
                      <h4>Global Perspective</h4>
                      <p>Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="leadership section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row mb-5">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <h3 className="section-subtitle">Meet Our Leadership</h3>
              <h2 className="section-heading">Dedicated Administration Guiding Our Educational Excellence</h2>
              <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus. Eu leo morbi massa sem faucibus nulla gravida vulputate adipiscing. Sed malesuada quam scelerisque amet commodo arcu mollis.</p>
              
              <div className="stats-container mt-4">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <div className="stat-item">
                      <h3 className="purecounter">25</h3>
                      <p>Years of Excellence</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="stat-item">
                      <h3 className="purecounter">45</h3>
                      <p>Faculty Members</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="stat-item">
                      <h3 className="purecounter">98</h3>
                      <p>Student Success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="about-image">
                <Image
                  src="/assets/img/education/teacher-1.webp"
                  alt="Our Leadership Team"
                  width={600}
                  height={400}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          <div className="leadership-team">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="leader-card">
                  <div className="leader-image">
                    <Image
                      src="/assets/img/person/person-m-2.webp"
                      alt="Principal"
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-envelope"></i></a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Dr. Michael Anderson</h4>
                    <p className="position">Principal</p>
                    <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="leader-card">
                  <div className="leader-image">
                    <Image
                      src="/assets/img/person/person-f-3.webp"
                      alt="Vice Principal"
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-envelope"></i></a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Dr. Sarah Johnson</h4>
                    <p className="position">Vice Principal</p>
                    <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                <div className="leader-card">
                  <div className="leader-image">
                    <Image
                      src="/assets/img/person/person-m-5.webp"
                      alt="Dean of Students"
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-envelope"></i></a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Prof. David Martinez</h4>
                    <p className="position">Dean of Students</p>
                    <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
                <div className="leader-card">
                  <div className="leader-image">
                    <Image
                      src="/assets/img/person/person-f-8.webp"
                      alt="Academic Director"
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-envelope"></i></a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Dr. Emily Chen</h4>
                    <p className="position">Academic Director</p>
                    <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="leader-card">
                  <div className="leader-image">
                    <Image
                      src="/assets/img/person/person-m-7.webp"
                      alt="Financial Director"
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-envelope"></i></a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Robert Wilson</h4>
                    <p className="position">Financial Director</p>
                    <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="leader-card">
                  <div className="leader-image">
                    <Image
                      src="/assets/img/person/person-f-10.webp"
                      alt="Head of Admissions"
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-envelope"></i></a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Jessica Parker</h4>
                    <p className="position">Head of Admissions</p>
                    <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                <div className="leader-card">
                  <div className="leader-image">
                    <Image
                      src="/assets/img/person/person-m-11.webp"
                      alt="IT Director"
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-envelope"></i></a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Thomas Lee</h4>
                    <p className="position">IT Director</p>
                    <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
                <div className="leader-card">
                  <div className="leader-image">
                    <Image
                      src="/assets/img/person/person-f-12.webp"
                      alt="Student Welfare Officer"
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-envelope"></i></a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Amanda Rodriguez</h4>
                    <p className="position">Student Welfare Officer</p>
                    <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent; 