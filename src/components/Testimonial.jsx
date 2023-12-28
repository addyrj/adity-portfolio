import React from "react";
import image from "../assets/149071.png";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Nitesh"}
          feedback={"Your Last project which you have done is awesome ia have same alot time and money thanks "}
        />

        <TestimonialCard
          name={"Michel"}
          feedback={"My app is working smoothly and and after services is also good thanks a lot"}
        />

        <TestimonialCard
          name={"M.Noor Ahmad"}
          feedback={"When you get free i have a new project for you ...we will work together "}
        />
      </section>
    </div>
  );
};
const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img src={image} alt="User" />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
