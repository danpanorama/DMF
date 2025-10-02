import '../../css/about.css';
import PeupleVideo from '../../assets/resizePeople.mp4'

function AboutUs() {
  return (
    <section className="aboutUsContainer">
      <div className="aboutText">
        <h2>Who We Are</h2>
        <p>
          DMF has been guiding investors safely in Thessaloniki's real estate market 
          for over a decade. Our expertise, transparency, and dedication ensure that 
          every investment is secure and profitable.
        </p>
      </div>
      {/* <div className="aboutImage">
        <img src="https://source.unsplash.com/400x300/?city,real-estate" alt="Thessaloniki city"/>
      </div> */}


       <div className="aboutSectionContainer">
            {/* כאן תשים את הסרטון שלך */}
            <video 
              className="heroVideoAbout" 
              autoPlay 
              loop 
              muted 
              playsInline
              src={PeupleVideo} // תשנה לשם הסרטון שלך
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
      
         
          </div>
    </section>
  ); 
}

export default AboutUs;
