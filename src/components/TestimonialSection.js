import React from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Gaurav Sareen",
    title: "Campus Manager at Queen's College",
    image: `${process.env.PUBLIC_URL}/assets/gaurav.jpeg`,
    quote: `I had the pleasure of supervising Rahul, and I can confidently say he is one of the most versatile and dedicated team players I’ve worked with. His attention to detail and focus make him a standout professional, ensuring that every task is executed with precision and efficiency.

Rahul is not only proactive in tackling challenges but also plays a crucial role in team organization. He has an innate ability to streamline workflows, collaborate effectively, and contribute to a high-performance team environment. His ability to adapt and support various functions makes him an invaluable asset to any team.

I highly recommend Rahul to any organization looking for a driven and detail-oriented professional who consistently delivers results while fostering a strong team dynamic.`,
  },
  {
    name: "Daniel Felipe Gonzalez Salcedo",
    title: "Industrial Engineer at S&C Electric Company",
    image: `${process.env.PUBLIC_URL}/assets/daniel.jpeg`,
    quote: `I had the pleasure of working closely with Rahul at Queen's College. He was in the IT department, and I can confidently say that he was an invaluable asset to our team. Rahul was not only highly skilled in his role but also exceptionally friendly and approachable. Whenever I faced challenges or needed assistance, he was always ready to lend a hand without hesitation.

He consistently went above and beyond to ensure that everyone had the resources and support they needed to succeed. His proactive approach and willingness to help made him a key player in our team, contributing significantly to our success.`,
  },
  {
    name: "Meenu Tamang",
    title: "Outreach & Program Coordinator at University of Alberta",
    image: `${process.env.PUBLIC_URL}/assets/meenu.jpeg`,
    quote: `I've had the pleasure of working with Rahul on several IT promotional events when we worked together at Queen's College and his expertise is impressive. He consistently resolves issues efficiently and with great attention to detail. Beyond his technical skills, Rahul is a reliable team player who communicates effectively and is always ready to help. His dedication and proactive approach make him a valuable asset to any team.`,
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <div className="testimonial-text">
              <p className="testimonial-quote">"{t.quote}"</p>
              <p className="testimonial-name">{t.name}</p>
              <p className="testimonial-title">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
