import React from "react";
import bgImage from "../assets/BG.jpg";
import promoVideo from "../assets/bgvideo.mp4";
import service1 from "../assets/Treeremoval.jpg";
import service2 from "../assets/Trimming.jpg";
import service3 from "../assets/download.jpg";
import service4 from "../assets/pexels-kelly-1179532-3999647.jpg";
import service5 from "../assets/TreeAssesments.jpg";
import service6 from "../assets/images.jpg";
import log1 from "../assets/11049080.png";
import log2 from "../assets/images (1).jpg";
import log3 from "../assets/images (2).jpg";
import log4 from "../assets/icons8-happy-50.png";
import sign from "../assets/sign.png";
import ceoimg from "../assets/pexels-gary-barnes-6232016.jpg";
import Slider from "react-slick";
import { Users, ShieldCheck, DollarSign, Award } from "lucide-react";
import chainsawImage from "../assets/BG.jpg";

const testimonials = [
  {
    name: "Marilyn Aschner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Exceptional service! Fast, safe, and clean.fsfdfsLorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic quisquam aut harum, provident explicabo consequatur maxime a aspernatur veritatis magnam atque exercitationem in omnis distinctio animi consectetur accusantium. Quidem, nam? Quaerat, voluptates cumque!",
  },
  {
    name: "Charles Anthony",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Start to finish, smooth and professional.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic quisquam aut harum, provident explicabo consequatur maxime a aspernatur veritatis magnam atque exercitationem in omnis distinctio animi consectetur accusantium. Quidem, nam? Quaerat, voluptates cumque!",
  },
  {
    name: "Olivia",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Super efficient and experienced crew.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic quisquam aut harum, provident explicabo consequatur maxime a aspernatur veritatis magnam atque exercitationem in omnis distinctio animi consectetur accusantium. Quidem, nam? Quaerat, voluptates cumque!",
  },
  {
    name: "Mark Jeff",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    text: "Quick response, very clean job! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic quisquam aut harum, provident explicabo consequatur maxime a aspernatur veritatis magnam atque exercitationem in omnis distinctio animi consectetur accusantium. Quidem, nam? Quaerat, voluptates cumque!",
  },
  {
    name: "Sophia Blake",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Loved the detail and care they took.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic quisquam aut harum, provident explicabo consequatur maxime a aspernatur veritatis magnam atque exercitationem in omnis distinctio animi consectetur accusantium. Quidem, nam? Quaerat, voluptates cumque!",
  },
  {
    name: "Daniel Cruz",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "A+ service, will use again for sure!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic quisquam aut harum, provident explicabo consequatur maxime a aspernatur veritatis magnam atque exercitationem in omnis distinctio animi consectetur accusantium. Quidem, nam? Quaerat, voluptates cumque!",
  },
  {
    name: "Emily White",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    text: "They exceeded expectations!       Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus animi dicta sapiente autem eaque amet exercitationem neque consequatur dolorum at optio, est quaerat quidem quia eos, perspiciatis alias nobis quisquam reprehenderit. Placeat, laborum corrupti!",
  },
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Impressive tools and team!       Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus animi dicta sapiente autem eaque amet exercitationem neque consequatur dolorum at optio, est quaerat quidem quia eos, perspiciatis alias nobis quisquam reprehenderit. Placeat, laborum corrupti!",
  },
  {
    name: "Grace Lin",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
    text: "Prompt, professional and polite.      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus animi dicta sapiente autem eaque amet exercitationem neque consequatur dolorum at optio, est quaerat quidem quia eos, perspiciatis alias nobis quisquam reprehenderit. Placeat, laborum corrupti!",
  },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            {/* Left Content */}
            <div className="hero-text">
              <p className="label">Beautiful Landscapes.</p>
              <h1 className="title">Top-Quality Tree Cutting</h1>
              <p className="subtitle">
                Expert tree care, trimming, and removal
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <button className="btn-primary">
                  Book Today <span>🡺</span>
                </button>
                <a
                  href="#services"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  View All Services
                </a>
              </div>
            </div>

            {/* Right Promo Video */}
            <div className="video-wrapper">
              <video
                src={promoVideo}
                autoPlay
                muted
                loop
                className="promo-video"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <div id="services" className="services-wrapper">
        <div className="services-row">
          <div className="service-card">
            <img src={service1} alt="Tree Removal" />
            <div className="card-label">Tree Removal - Safe & Efficient</div>
          </div>
          <div className="service-card">
            <img src={service2} alt="Trimming / Pruning" />
            <div className="card-label">Expert Trimming & Pruning</div>
          </div>
          <div className="service-card">
            <img src={service3} alt="Stump Removal" />
            <div className="card-label">Stump Removal</div>
          </div>
        </div>

        <div className="services-row">
          <div className="service-card">
            <img src={service4} alt="Grass Cutting" />
            <div className="card-label">Professional Grass Cutting</div>
          </div>
          <div className="service-card">
            <img src={service5} alt="Tree Assessments" />
            <div className="card-label">Certified Tree Assessments</div>
          </div>
          <div className="service-card">
            <img src={service6} alt="Emergency" />
            <div className="card-label">Emergency</div>
          </div>
        </div>
      </div>

      {/* Full Width Service Description */}
      <div className="services-description-full">
        <div className="services-description-box">
          <div className="left">
            <p className="section-label">— Our Services:</p>
            <h2 className="section-title">TREE SERVICE</h2>
          </div>
          <div className="right">
            <p className="section-text">
              Since 1995, we’ve been offering expert tree cutting services that
              are safe, professional, and affordable. Let us help you shape your
              outdoor space today.
            </p>
            <a href="#services">
              <button className="btn-primary">View All Services 🡺</button>
            </a>
          </div>
        </div>
      </div>
      {/* Process Section */}

      <div className="process-section">
        <h3 className="process-heading">Here's How Our Process Works</h3>
        <div className="process-row">
          <div className="process-segment">
            <div className="process-item">
              <img src={log1} alt="Book Service" />
              <h4>Book Service</h4>
              <p>
                Book your tree services for expert care and quick scheduling.
              </p>
            </div>
            <div className="process-arrow">➜</div>
          </div>
          <div className="process-segment">
            <div className="process-item">
              <img src={log2} alt="Our Team" />
              <h4>Our Team Arrives</h4>
              <p>Our team arrives promptly, ready for exceptional service.</p>
            </div>
            <div className="process-arrow">➜</div>
          </div>
          <div className="process-segment">
            <div className="process-item">
              <img src={log3} alt="Cutting Process" />
              <h4>Cutting Process</h4>
              <p>Efficient cutting ensures precision, safety, and tree care.</p>
            </div>
            <div className="process-arrow">➜</div>
          </div>
          <div className="process-item" style={{ marginBottom: "30px" }}>
            <img src={log4} alt="Happy Client" />
            <h4>Happy Client</h4>
            <p>Clients love our reliable and professional tree services.</p>
          </div>
        </div>
      </div>

      {/* Service Slider */}
      <div className="service-slide-strip">
        <div className="slide-track">
          <span>
            <span className="check-icon" /> Pruning
          </span>
          <span>
            <span className="check-icon" /> Tree Relocation
          </span>
          <span>
            <span className="check-icon" /> Stump Removal
          </span>
          <span>
            <span className="check-icon" /> Grass Cutting
          </span>
          <span>
            <span className="check-icon" /> Emergency Services
          </span>

          {/* Duplicate for loop */}
          <span>
            <span className="check-icon" /> Pruning
          </span>
          <span>
            <span className="check-icon" /> Tree Relocation
          </span>
          <span>
            <span className="check-icon" /> Stump Removal
          </span>
          <span>
            <span className="check-icon" /> Grass Cutting
          </span>
          <span>
            <span className="check-icon" /> Emergency Services
          </span>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <div className="testimonial-top">
          <div
            className="testimonial-left-bg"
            style={{
              backgroundImage: `url(${service1})`,
            }}
          ></div>
          <div className="testimonial-right-content">
            <p className="testimonial-label"> Testimonial</p>
            <h2>
              What Our <span className="highlight-text">Clients Say</span>
            </h2>
            <p className="testimonial-subtext">
              Clients love our reliable, top-quality, and thorough services.
              Highly recommended!
            </p>
          </div>
        </div>

        <div className="testimonial-slider">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={3}
            arrows={false}
            autoplay={true}
            autoplaySpeed={3000} // 3 seconds per slide
            responsive={[
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {testimonials.map((item, index) => (
              <div className="testimonial-slide" key={index}>
                <div className="testimonial-card">
                  <div className="testimonial-user">
                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* about  */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h3>About Us</h3>
            <h2>
              Safe, Affordable. Protect <span>Your Landscape!</span>
            </h2>
            <p>
              Expert tree cutting services, amazing prices, efficient, and
              affordable tree trimming, pruning, and removal for your home or
              business.
            </p>
            <div className="signature">
              <p>
                <strong>Amy Alexander</strong> – CEO
              </p>
              <img src={sign} alt="CEO Signature" />
            </div>
            <a href="#about">
              <button className="about-btn">About Us</button>
            </a>
          </div>
          <div className="about-image">
            <img src={ceoimg} alt="Gardener trimming tree" />
          </div>
        </div>
      </section>

      <section className="why-choose-us-section">
        <div className="why-header">
          <p className="section-label">— Why Choose Us:</p>
          <h2 className="section-title">
            Trusted Tree Service with{" "}
            <span className="highlight-text">Experience</span>
          </h2>
        </div>

        <div className="image-container">
          <img src={chainsawImage} alt="Tree Cutting" className="why-image" />
        </div>

        <div className="info-grid">
          <div className="info-item">
            <Users className="icon" />
            <div>
              <h4>Expertise</h4>
              <p>Decades of service in tree care and cutting services.</p>
            </div>
          </div>
          <div className="info-item">
            <ShieldCheck className="icon" />
            <div>
              <h4>Safety First</h4>
              <p>We prioritize safety in every job we undertake.</p>
            </div>
          </div>
          <div className="info-item">
            <DollarSign className="icon" />
            <div>
              <h4>Affordability</h4>
              <p>Quality service at competitive rates.</p>
            </div>
          </div>
          <div className="info-item">
            <Award className="icon" />
            <div>
              <h4>45 Years Experience</h4>
              <p>Decades of expertise in tree care and cutting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + Footer Section */}
      <footer id="contact" className="footer-section">
        <div className="footer-top">
          <div className="footer-links">
            <ul>
              <li>
                <a
                  href="#top"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>TreeTop Experts</h4>
            <p>Brooklyn, NY 11201</p>
            <p>United States</p>
            <p>📞 (321) 242-0000</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 TreeTop Experts. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
