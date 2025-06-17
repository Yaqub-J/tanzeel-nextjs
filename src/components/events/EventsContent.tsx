'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Event data
const events = [
  {
    id: 1,
    day: '15',
    month: 'JUN',
    title: 'Annual Quran Competition',
    time: '09:00 AM - 04:00 PM',
    location: 'Main Campus Auditorium',
    description: 'Join us for our annual Quran recitation competition where students showcase their memorization and tajweed skills. The event includes various categories and age groups.',
  },
  {
    id: 2,
    day: '22',
    month: 'JUN',
    title: 'Islamic Studies Workshop',
    time: '01:00 PM - 06:00 PM',
    location: 'Multiple Classrooms',
    description: 'A comprehensive workshop covering various aspects of Islamic studies, including fiqh, hadith, and Islamic history. Open to all students and community members.',
  },
  {
    id: 3,
    day: '30',
    month: 'JUN',
    title: 'Eid Celebration',
    time: '02:30 PM - 05:30 PM',
    location: 'Sports Complex',
    description: 'Join us for our annual Eid celebration featuring cultural performances, traditional food, and activities for the whole family.',
  },
  {
    id: 4,
    day: '05',
    month: 'JUL',
    title: 'Graduation Ceremony',
    time: '10:00 AM - 01:00 PM',
    location: 'Central Auditorium',
    description: 'Celebrate the achievements of our graduating class. The ceremony will include Quran recitation, speeches, and the awarding of certificates.',
  },
];

// Event categories
const categories = [
  { name: 'Academic', count: 12 },
  { name: 'Religious', count: 8 },
  { name: 'Cultural', count: 6 },
  { name: 'Workshops', count: 4 },
  { name: 'Conferences', count: 3 },
];

export default function EventsContent() {
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
          <h1>Events</h1>
          <p>Stay updated with our upcoming events, workshops, and special programs at Tanzeel Academy.</p>
          <nav className="breadcrumbs">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li className="current">Events</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Events Section */}
      <section id="events-2" className="events-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="events-list">
                {events.map((event) => (
                  <div key={event.id} className="event-item" data-aos="fade-up" data-aos-delay={event.id * 100}>
                    <div className="event-date">
                      <span className="day">{event.day}</span>
                      <span className="month">{event.month}</span>
                    </div>
                    <div className="event-content">
                      <h3>{event.title}</h3>
                      <div className="event-meta">
                        <p><i className="bi bi-clock"></i> {event.time}</p>
                        <p><i className="bi bi-geo-alt"></i> {event.location}</p>
                      </div>
                      <p>{event.description}</p>
                      <Link href={`/events/${event.id}`} className="btn-event">
                        Learn More <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pagination-wrapper" data-aos="fade-up" data-aos-delay="400">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}>
                      <i className="bi bi-chevron-left"></i>
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-item" data-aos="fade-up" data-aos-delay="100">
                  <h3 className="sidebar-title">Upcoming Events</h3>
                  <div className="event-calendar">
                    <div className="calendar-header">
                      <h4>June 2024</h4>
                    </div>
                    <div className="calendar-body">
                      <div className="weekdays">
                        <div>Su</div>
                        <div>Mo</div>
                        <div>Tu</div>
                        <div>We</div>
                        <div>Th</div>
                        <div>Fr</div>
                        <div>Sa</div>
                      </div>
                      <div className="days">
                        {/* Calendar days will be dynamically generated */}
                        {Array.from({ length: 35 }, (_, i) => (
                          <div
                            key={i}
                            className={`day ${i < 4 || i > 30 ? 'other-month' : ''} ${
                              [15, 22, 30].includes(i - 3) ? 'has-event' : ''
                            }`}
                          >
                            {i < 4 ? 28 + i : i > 30 ? i - 30 : i - 3}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-item featured-event" data-aos="fade-up" data-aos-delay="200">
                  <h3 className="sidebar-title">Featured Event</h3>
                  <div className="featured-event-content">
                    <Image
                      src="/assets/img/education/events-5.webp"
                      alt="Featured Event"
                      className="img-fluid"
                      width={400}
                      height={250}
                    />
                    <h4>Annual Islamic Arts Festival</h4>
                    <p><i className="bi bi-calendar-event"></i> July 15-17, 2024</p>
                    <p>Experience the beauty of Islamic arts through exhibitions, workshops, and cultural performances.</p>
                    <Link href="/events/register" className="btn-register">
                      Register Now
                    </Link>
                  </div>
                </div>

                <div className="sidebar-item" data-aos="fade-up" data-aos-delay="300">
                  <h3 className="sidebar-title">Event Categories</h3>
                  <div className="categories">
                    <ul>
                      {categories.map((category) => (
                        <li key={category.name}>
                          <Link href={`/events/category/${category.name.toLowerCase()}`}>
                            {category.name} <span>({category.count})</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 