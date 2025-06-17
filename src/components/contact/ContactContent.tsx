'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactContent() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: 'url(/assets/img/education/showcase-1.webp)' }}>
        <div className="container position-relative">
          <h1>Contact</h1>
          <p>Get in touch with us for any questions about our programs, admissions, or general inquiries.</p>
          <nav className="breadcrumbs">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {/* Contact Info Boxes */}
          <div className="row gy-4 mb-5">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-info-box">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="info-content">
                  <h4>Our Address</h4>
                  <p>123 Islamic Center Drive</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-info-box">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="info-content">
                  <h4>Email Address</h4>
                  <p>info@tanzeelacademy.com</p>
                  <p>admissions@tanzeelacademy.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-info-box">
                <div className="icon-box">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="info-content">
                  <h4>Hours of Operation</h4>
                  <p>Monday-Friday: 8 AM - 6 PM</p>
                  <p>Saturday: 9 AM - 4 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps (Full Width) */}
        <div className="map-section" data-aos="fade-up" data-aos-delay="200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882426698!3d40.71277957138584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sWorld%20Trade%20Center!5e0!3m2!1sen!2sus!4v1709921234567!5m2!1sen!2sus" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form Section (Overlapping) */}
        <div className="container form-container-overlap">
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-10">
              <div className="contact-form-wrapper">
                <h2 className="text-center mb-4">Get in Touch</h2>

                <form action="/api/contact" method="post" className="php-email-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-with-icon">
                          <i className="bi bi-person"></i>
                          <input type="text" className="form-control" name="name" placeholder="Full Name" required />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-with-icon">
                          <i className="bi bi-envelope"></i>
                          <input type="email" className="form-control" name="email" placeholder="Email Address" required />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="input-with-icon">
                          <i className="bi bi-text-left"></i>
                          <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <div className="input-with-icon">
                          <i className="bi bi-chat-dots message-icon"></i>
                          <textarea 
                            className="form-control" 
                            name="message" 
                            placeholder="Write Message..." 
                            style={{ height: '180px' }} 
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary btn-submit">SEND MESSAGE</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 