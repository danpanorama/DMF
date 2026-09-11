import "../../css/firstPage.css";

function AboutDeveloper() {
  return (
    <section className="fpAbout">
      <div className="fpAboutNumber">
        <span>ABOUT</span>
      </div>

      <div className="fpAboutContent">
        <p className="fpEyebrowDark">REAL ESTATE ENTREPRENEUR</p>

        <h2>
          From opportunity identification
          <br />
          to execution.
        </h2>

        <p>
          I focus on identifying real estate opportunities, understanding
          their potential, and creating value through acquisition,
          renovation, development and investment strategy.
        </p>

        <a href="/about">About Me →</a>
      </div>
    </section>
  );
}

export default AboutDeveloper;