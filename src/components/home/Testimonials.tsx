'use client';

import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "The comprehensive Islamic education at Tanzeel Academy has transformed my understanding of the Quran and Islamic studies. The teachers are knowledgeable and supportive.",
      name: "Ahmed Hassan",
      position: "Hifz Program Graduate",
      image: "/assets/img/person/person-m-7.webp"
    },
    {
      id: 2,
      content: "The personalized attention and structured curriculum have helped me excel in my Arabic language studies. The academy's commitment to excellence is truly remarkable.",
      name: "Fatima Ibrahim",
      position: "Arabic Language Student",
      image: "/assets/img/person/person-f-7.webp"
    },
    {
      id: 3,
      content: "As a parent, I'm impressed by the holistic approach to education. My children have grown not just academically, but spiritually as well.",
      name: "Umm Khalid",
      position: "Parent",
      image: "/assets/img/person/person-f-8.webp"
    },
    {
      id: 4,
      content: "The Islamic studies program provides deep insights into our faith. The teachers' dedication to authentic knowledge is commendable.",
      name: "Muhammad Ali",
      position: "Islamic Studies Student",
      image: "/assets/img/person/person-m-8.webp"
    },
    {
      id: 5,
      content: "The academy's focus on character development alongside academic excellence has helped shape my children into better Muslims and better human beings.",
      name: "Amina Yusuf",
      position: "Parent",
      image: "/assets/img/person/person-f-9.webp"
    },
    {
      id: 6,
      content: "The Quran memorization program is exceptional. The systematic approach and individual attention have made the journey of Hifz much more manageable.",
      name: "Ibrahim Abdullah",
      position: "Hifz Program Student",
      image: "/assets/img/person/person-m-13.webp"
    }
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Hear from our students and parents about their experience at Tanzeel Academy</p>
      </div>

      <div className="container">
        <div className="testimonial-masonry">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-item ${index % 2 === 1 ? 'highlight' : ''}`} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>{testimonial.content}</p>
                <div className="client-info">
                  <div className="client-image">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="client-details">
                    <h3>{testimonial.name}</h3>
                    <span className="position">{testimonial.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 