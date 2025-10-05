import '../css/about.css';
import PeupleVideo from '../assets/resizePeople.mp4';

function AboutUs() {
  return (
    <main className="aboutPageContainer">
      {/* Hero Video עם Overlay */}
      <section className="aboutHero">
        <video 
          className="aboutHeroVideo" 
          autoPlay 
          loop 
          muted 
          playsInline
          src={PeupleVideo}
          type="video/mp4"
        />
        <div className="aboutHeroOverlay">
          <h1>DMF Real Estate</h1>
          <p>Your trusted partner in Thessaloniki & Global Investments</p>
        </div>
      </section>

      {/* טקסט אודות */}
      <section className="aboutContent container flexCenter">
        <div className="aboutText">
          <h2>Who We Are</h2>
          <p>
            DMF has been guiding investors safely in Thessaloniki's real estate market 
            for over a decade. Our expertise, transparency, and dedication ensure that 
            every investment is secure and profitable.
          </p>
          <p>
            We offer premium properties worldwide, helping clients make smart, long-term investments.
          </p>
        </div>

        {/* סטטיסטיקות */}
        <div className="aboutStats">
          <div className="statCard">
            <h3>10+</h3>
            <p>Years in Market</p>
          </div>
          <div className="statCard">
            <h3>500+</h3>
            <p>Properties Listed</p>
          </div>
          <div className="statCard">
            <h3>100+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      {/* CTA חדש */}
<section className="aboutCTA flexCenter">
  <div className="ctaContent">
    <h2>Ready to take your investment to the next level?</h2>
    <a href="/contact" className="ctaButtonGradient">Contact Us</a>
  </div>
</section>

  
    </main>
  );
}

export default AboutUs;
