import '../../css/home.css';
import WhiteTower from '../../assets/whiteresize.mp4'
// https://youtu.be/EYspIWhuNLs
function HeroSection() {
  return (
    <div className="heroSectionContainer">
      {/* כאן תשים את הסרטון שלך */}
      <video 
        className="heroVideo" 
        autoPlay 
        loop 
        muted 
        playsInline
        src={WhiteTower} // תשנה לשם הסרטון שלך
        type="https://youtu.be/EYspIWhuNLs"
      >
        Your browser does not support the video tag.
      </video>

   
    </div>
  );
}

export default HeroSection;
