import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1 className="title">Welcome to Student Services</h1>
        <p>Get the help you need from talented students!</p>
      </header>
      <section>
        <h2>What We Offer</h2>
        <ul>
          <li>
            <h3>Academic Tutoring</h3>
            <p>
              Receive one-on-one tutoring in various subjects from
              top-performing students.
            </p>
          </li>
          <li>
            <h3>Graphic Design</h3>
            <p>
              Hire student graphic designers to create stunning visuals for your
              projects.
            </p>
          </li>
          <li>
            <h3>Web Development</h3>
            <p>
              Get your own website developed by skilled student web developers.
            </p>
          </li>
          {/* Add more services as needed */}
        </ul>
      </section>
      <section>
        <h2>How It Works</h2>
        <ol>
          <li>
            <h3>Browse Services</h3>
            <p>
              Explore the available services and find the one that matches your
              needs.
            </p>
          </li>
          <li>
            <h3>Contact the Student</h3>
            <p>
              Reach out to the student offering the service to discuss the
              details.
            </p>
          </li>
          <li>
            <h3>Get Quality Assistance</h3>
            <p>
              Receive high-quality assistance from talented student service
              providers.
            </p>
          </li>
        </ol>
      </section>
      <section>
        <h2>Why Choose Us</h2>
        <ul>
          <li>Qualified students with expertise in their respective fields.</li>
          <li>
            Affordable rates tailored for students and budget-conscious
            individuals.
          </li>
          <li>
            Flexible scheduling to accommodate your needs and availability.
          </li>
          <li>
            Supporting fellow students and fostering a collaborative community.
          </li>
        </ul>
      </section>
      <section>
        <h2>Ready to Get Started?</h2>
        <p>Find the perfect student service provider for your needs today!</p>
        
      </section>
      <footer>
        <p>&copy; 2023 Student Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
