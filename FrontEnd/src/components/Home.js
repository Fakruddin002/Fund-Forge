import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <header className="hero-banner">
        <h1>Empowering Ideas Through Community Support!</h1>
        <p>Join us to fund projects that matter and make a difference.</p>
        <div className="cta-buttons">
          <Link to="/start-campaign" className="btn-primary">Start a Campaign</Link>
          <Link to="/campaigns" className="btn-secondary">Explore Campaigns</Link>
        </div>
      </header>

      {/* Featured Campaigns */}
      <section className="highlighted-campaigns">
        <h2>Featured Campaigns</h2>
        <div className="campaign-grid">
          {[{
            title: "Save the Oceans",
            desc: "Help us clean the oceans and protect marine life.",
            img: "https://via.placeholder.com/300",
            progress: 75
          }, {
            title: "Education for All",
            desc: "Providing free education to underprivileged children.",
            img: "https://via.placeholder.com/300",
            progress: 60
          }].map((campaign, index) => (
            <div className="campaign-card" key={index}>
              <img src={campaign.img} alt={campaign.title} />
              <h3>{campaign.title}</h3>
              <p>{campaign.desc}</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${campaign.progress}%` }}></div>
              </div>
              <p>{campaign.progress}% funded</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          {["Start a Campaign", "Support a Cause", "Achieve Goals"].map((step, index) => (
            <div className="step" key={index}>
              <h3>{index + 1}. {step}</h3>
              <p>{[
                "Share your idea and set your funding goal.",
                "Browse campaigns and back the ones you care about.",
                "Watch ideas turn into reality with your support!"
              ][index]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Why Choose Us?</h2>
        <div className="benefits-grid">
          {["Global Reach", "Secure Transactions", "Easy to Use"].map((benefit, index) => (
            <div className="benefit" key={index}>
              <h3>{benefit}</h3>
              <p>{[
                "Access campaigns and backers from around the world.",
                "Enjoy a safe and reliable platform for crowdfunding.",
                "Launch your campaign in just a few clicks."
              ][index]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Campaigns */}
      <section className="explore-campaigns">
        <h2>Explore Campaigns</h2>
        <div className="filters">
          {['Most Funded', 'Ending Soon', 'Newly Launched'].map((filter, index) => (
            <button key={index}>{filter}</button>
          ))}
        </div>
        <input type="text" placeholder="Search campaigns..." className="search-bar" />
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonial-cards">
          {["Thanks to this platform, my project became a reality!", "Supporting causes has never been easier and more impactful."].map((quote, index) => (
            <div className="testimonial-card" key={index}>
              <p>"{quote}"</p>
              <h4>- {['Alex', 'Maria'][index]}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          {[{ number: "$10M+", text: "Funds Raised" },
            { number: "1,000+", text: "Successful Campaigns" },
            { number: "50K+", text: "Backers Worldwide" }].map((stat, index) => (
            <div className="stat" key={index}>
              <h3>{stat.number}</h3>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          {["About Us", "Contact Us", "FAQs", "Help & Support", "Privacy Policy", "Terms of Service"].map((link, index) => (
            <a href="#" key={index}>{link}</a>
          ))}
        </div>
        <p>&copy; 2025 FundForge Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
