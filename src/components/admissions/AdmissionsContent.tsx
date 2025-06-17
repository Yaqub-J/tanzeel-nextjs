'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initPureCounter } from '@/utils/counter';
import { useLightbox } from '@/hooks/useLightbox';

export default function AdmissionsContent() {
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
    <main className="main">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: 'url(/assets/img/education/showcase-1.webp)' }}>
        <div className="container position-relative">
          <h1>Admissions</h1>
          <p>Begin your journey of Islamic education and spiritual growth with Tanzeel Academy.</p>
          <nav className="breadcrumbs">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Admissions</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Admissions Section */}
      <section id="admissions" className="admissions section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5 g-lg-5">
            <div className="col-lg-6">
              <div className="admissions-info" data-aos="fade-up">
                <h2>Begin Your Islamic Education Journey Today</h2>
                <p>Join Tanzeel Academy and embark on a transformative journey of Islamic learning, spiritual growth, and academic excellence. Our comprehensive programs are designed to nurture both your religious and academic development.</p>

                <div className="admissions-steps mt-5">
                  <h3>How to Apply</h3>
                  <div className="steps-wrapper mt-4">
                    <div className="step-item" data-aos="fade-up" data-aos-delay="100">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>Submit Application</h4>
                        <p>Complete our online application form with your personal information and program preferences.</p>
                      </div>
                    </div>

                    <div className="step-item" data-aos="fade-up" data-aos-delay="200">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Send Documents</h4>
                        <p>Submit required documents including academic records, recommendation letters, and identification.</p>
                      </div>
                    </div>

                    <div className="step-item" data-aos="fade-up" data-aos-delay="300">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Interview Process</h4>
                        <p>Meet with our admissions committee to discuss your goals and assess program fit.</p>
                      </div>
                    </div>

                    <div className="step-item" data-aos="fade-up" data-aos-delay="400">
                      <div className="step-number">4</div>
                      <div className="step-content">
                        <h4>Receive Decision</h4>
                        <p>Get notified of your admission status and next steps for enrollment.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="deadlines mt-5" data-aos="fade-up">
                  <h3>Key Admission Deadlines</h3>
                  <div className="deadline-grid mt-4">
                    <div className="deadline-item">
                      <h4>Fall Semester</h4>
                      <div className="date">March 15, 2024</div>
                    </div>
                    <div className="deadline-item">
                      <h4>Spring Semester</h4>
                      <div className="date">October 1, 2024</div>
                    </div>
                    <div className="deadline-item">
                      <h4>Summer Session</h4>
                      <div className="date">January 30, 2025</div>
                    </div>
                    <div className="deadline-item">
                      <h4>Early Decision</h4>
                      <div className="date">November 15, 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="admissions-requirements" data-aos="fade-up">
                <h3>Admission Requirements</h3>
                <div className="requirements-list mt-4">
                  <div className="requirement-item" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon-box">
                      <i className="bi bi-mortarboard-fill"></i>
                    </div>
                    <div>
                      <h4>Academic Records</h4>
                      <p>Submit your previous academic transcripts and certificates for evaluation.</p>
                    </div>
                  </div>

                  <div className="requirement-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box">
                      <i className="bi bi-file-earmark-text"></i>
                    </div>
                    <div>
                      <h4>Recommendation Letters</h4>
                      <p>Provide letters of recommendation from teachers or community leaders.</p>
                    </div>
                  </div>

                  <div className="requirement-item" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box">
                      <i className="bi bi-journal-richtext"></i>
                    </div>
                    <div>
                      <h4>Personal Statement</h4>
                      <p>Write about your goals, interests, and why you want to join our academy.</p>
                    </div>
                  </div>

                  <div className="requirement-item" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon-box">
                      <i className="bi bi-graph-up"></i>
                    </div>
                    <div>
                      <h4>Islamic Knowledge Assessment</h4>
                      <p>Complete an assessment of your current Islamic knowledge and Arabic proficiency.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="request-info mt-5" data-aos="fade-up">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Request Information</h3>
                    <p>Have questions about our programs or admission process? Fill out this form and we'll get back to you.</p>

                    <form className="php-email-form mt-4" action="/api/contact" method="POST">
                      <div className="mb-3">
                        <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                      </div>
                      <div className="mb-3">
                        <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                      </div>
                      <div className="mb-3">
                        <input type="tel" name="phone" className="form-control" placeholder="Phone Number" />
                      </div>
                      <div className="mb-3">
                        <select name="program" className="form-select" required defaultValue="">
                          <option value="" disabled>Program of Interest</option>
                          <option value="Hifz">Hifz Program</option>
                          <option value="Arabic">Arabic Language</option>
                          <option value="Islamic Studies">Islamic Studies</option>
                          <option value="Quranic Studies">Quranic Studies</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <textarea name="message" className="form-control" rows={3} placeholder="Questions or Comments" required></textarea>
                      </div>
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your request has been sent. Thank you!</div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">Submit Request</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-wrapper mt-5" data-aos="fade-up">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="cta-item tour">
                  <i className="bi bi-building"></i>
                  <h3>Visit Our Campus</h3>
                  <p>Experience our facilities and meet our faculty. Schedule a tour to learn more about our programs.</p>
                  <a href="/contact" className="btn btn-secondary">Schedule a Tour</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cta-item apply">
                  <i className="bi bi-file-earmark-check"></i>
                  <h3>Ready to Apply?</h3>
                  <p>Start your application process today and take the first step towards your Islamic education.</p>
                  <a href="/apply" className="btn btn-primary">Start Application</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 