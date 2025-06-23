'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">Tanzeel Academy</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>Institute of Comprehensive Islamic Studies, Science and Arts</p>
              <p>Dutse, Nigeria</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+234 814 249 6038</span></p>
              <p><strong>WhatsApp:</strong> <span>+234 703 813 4572</span></p>
              <p><strong>Email:</strong> <span>info@tanzeelacademy.net</span></p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/admissions">Admissions</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Programs</h4>
            <ul>
              <li><Link href="/quran-programs">Quran Programs</Link></li>
              <li><Link href="/language-courses">Language Courses</Link></li>
              <li><Link href="/islamic-studies">Islamic Studies</Link></li>
              <li><Link href="/children-programs">Children&apos;s Programs</Link></li>
              <li><Link href="/specialization">Specialization Courses</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Stay updated with our latest programs and events</p>
            <form action="" method="post">
              <input type="email" name="email" placeholder="Enter your email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>&copy; <span>Copyright</span> <strong className="px-1">Leadex.ng</strong> <span>All Rights Reserved</span></p>
      </div>
    </footer>
  );
};

export default Footer;