import { useNavigate } from "react-router-dom";
import "../css/israelPage.css";

function IsraelPage() {
  const navigate = useNavigate();

  const projects = [
    {
      id: "jaffa-development-7023",
      number: "01",
      location: "TEL AVIV–JAFFA",
      title: "Jaffa Development Opportunity",
      subtitle: "Yefet St. / Yehuda Hayamit",
      block: "7023",
      parcel: "1",
      type: "Development & Value Creation",
      description:
        "A complex development opportunity in the heart of Jaffa, combining an existing property, planning rights, preservation considerations and long-term development potential.",
      image: "/yefet.png",
      stats: [
        { label: "Parcel", value: "331 m²" },
        { label: "Land Use", value: "Residential D" },
        { label: "Location", value: "Jaffa" },
      ],
    },
    {
      id: "jaffa-urban-renewal-7024",
      number: "02",
      location: "JAFFA",
      title: "Jaffa Urban Renewal",
      subtitle: "Urban Regeneration Project",
      block: "7024",
      parcel: "214–216",
      type: "Urban Renewal",
      description:
        "An urban renewal project involving multiple parcels in Jaffa, focused on understanding the existing ownership and planning framework and evaluating the site's future development potential.",
      image: "/images/israel/7024/main.jpg",
      stats: [
        { label: "Block", value: "7024" },
        { label: "Parcels", value: "214–216" },
        { label: "Strategy", value: "Urban Renewal" },
      ],
    },
  ];

  return (
    <main className="israelPage">

      {/* HERO */}
      <section className="israelHero">
        <div className="israelHeroOverlay" />

        <div className="israelHeroContent">
          <p className="israelEyebrow">
            REAL ESTATE DEVELOPMENT · ISRAEL
          </p>

          <h1>
            Israel
            <span>Projects.</span>
          </h1>

          <p className="israelHeroDescription">
            Selected real estate projects focused on development,
            urban renewal, planning and value creation.
          </p>
        </div>

        <div className="israelHeroBottom">
          <span>Tel Aviv — Jaffa</span>
          <span>↓ Explore</span>
        </div>
      </section>


      {/* INTRO */}
      <section className="israelIntro">

        <div className="israelIntroLabel">
          <span>01 / PORTFOLIO</span>
        </div>

        <div className="israelIntroContent">
          <h2>
            Identifying potential.
            <br />
            Understanding the land.
            <br />
            Creating value.
          </h2>

          <p>
            My activity in Israel focuses on real estate opportunities
            where planning, ownership structure and development potential
            can create significant long-term value.
          </p>
        </div>

      </section>


      {/* PROJECTS */}
      <section className="israelProjects">

        <div className="israelProjectsHeader">
          <p>SELECTED PROJECTS</p>
          <h2>Development Portfolio</h2>
        </div>

        {projects.map((project) => (
          <article
            className="israelProject"
            key={project.id}
            onClick={() => navigate(`/israel/${project.id}`)}
          >

            <div className="israelProjectImage">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="israelProjectNumber">
                {project.number}
              </div>

              <div className="israelProjectType">
                {project.type}
              </div>

            </div>


            <div className="israelProjectInfo">

              <div className="israelProjectLocation">
                {project.location}
              </div>

              <h2>{project.title}</h2>

              <h3>{project.subtitle}</h3>

              <p className="israelProjectDescription">
                {project.description}
              </p>


              <div className="israelProjectPlanning">

                <div>
                  <span>BLOCK</span>
                  <strong>{project.block}</strong>
                </div>

                <div>
                  <span>PARCEL</span>
                  <strong>{project.parcel}</strong>
                </div>

              </div>


              <div className="israelProjectStats">

                {project.stats.map((stat, index) => (
                  <div className="israelStat" key={index}>
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                ))}

              </div>


              <button className="israelViewProject">
                View Case Study
                <span>→</span>
              </button>

            </div>

          </article>
        ))}

      </section>


      {/* PHILOSOPHY */}
      <section className="israelApproach">

        <p className="israelApproachSmall">
          MY APPROACH
        </p>

        <h2>
          Real estate is not only
          <br />
          about what exists today.
          <br />
          <span>It's about what it can become.</span>
        </h2>

        <div className="israelApproachGrid">

          <div>
            <span>01</span>
            <h3>Identify</h3>
            <p>
              Finding assets and locations with unrealized potential.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Analyze</h3>
            <p>
              Understanding ownership, planning rights,
              constraints and development possibilities.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Create Value</h3>
            <p>
              Building a strategy designed to transform
              existing potential into long-term value.
            </p>
          </div>

        </div>

      </section>


      {/* NEXT MARKET */}
      <section
        className="israelNextMarket"
        onClick={() => navigate("/greece")}
      >
        <p>NEXT MARKET</p>

        <h2>
          Greece
          <span> →</span>
        </h2>

        <p className="israelNextSubtitle">
          Explore Thessaloniki Projects
        </p>
      </section>

    </main>
  );
}

export default IsraelPage;