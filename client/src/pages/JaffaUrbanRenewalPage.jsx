import { useNavigate } from "react-router-dom";
import "../css/jaffaUrbanRenewalPage.css";

function JaffaUrbanRenewalPage() {
  const navigate = useNavigate();

  const keyData = [
    {
      value: "84",
      label: "Existing Residential Units"
    },
    {
      value: "3",
      label: "Core Parcels"
    },
    {
      value: "5,592",
      suffix: "m²",
      label: "Planning Lot Area"
    },
    {
      value: "706ו",
      label: "Urban Renewal Area"
    }
  ];

  const existingParcels = [
    {
      parcel: "214",
      units: "36",
      area: "2,291 m²",
      address: "Shivtei Israel 41 / Pestalozzi 2–12"
    },
    {
      parcel: "215",
      units: "12",
      area: "≈ 951 m²",
      address: "Shivtei Israel 43"
    },
    {
      parcel: "216",
      units: "36",
      area: "2,462 m²",
      address: "Shivtei Israel 45 / Romain Rolland 1–5"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Planning Feasibility",
      text:
        "Detailed architectural analysis of planning area 706ו, planning lot 2326 and the relationship with parcel 217."
    },
    {
      number: "02",
      title: "Site & Massing Study",
      text:
        "Preparation of an initial development massing study including building volumes, height, density and site circulation."
    },
    {
      number: "03",
      title: "Ownership Mapping",
      text:
        "Complete title and ownership review across the existing residential units and common property."
    },
    {
      number: "04",
      title: "Economic Feasibility",
      text:
        "Preliminary appraisal and feasibility analysis based on an architecturally supported development scenario."
    }
  ];

  return (
    <main className="renewalCaseStudy">

      {/* HERO */}
      <section className="renewalHero">

        <img
          src="/images/israel/7024/main.jpg"
          alt="Jaffa Urban Renewal Project"
          className="renewalHeroImage"
        />

        <div className="renewalHeroOverlay" />

        <button
          className="renewalBackButton"
          onClick={() => navigate("/israel")}
        >
          ← Israel Projects
        </button>

        <div className="renewalHeroContent">

          <p className="renewalEyebrow">
            URBAN RENEWAL · TEL AVIV–JAFFA
          </p>

          <h1>
            Shivtei Israel
            <span>Urban Renewal.</span>
          </h1>

          <p className="renewalHeroSubtitle">
            A multi-parcel residential regeneration opportunity
            in Jaffa.
          </p>

        </div>

        <div className="renewalHeroMeta">
          <div>
            <span>BLOCK</span>
            <strong>7024</strong>
          </div>

          <div>
            <span>PARCELS</span>
            <strong>214–216</strong>
          </div>

          <div>
            <span>LOCATION</span>
            <strong>Tel Aviv–Jaffa</strong>
          </div>
        </div>

      </section>


      {/* PROJECT INTRO */}
      <section className="renewalIntro">

        <div className="renewalSectionLabel">
          01 / PROJECT OVERVIEW
        </div>

        <div className="renewalIntroMain">

          <p className="renewalSmallTitle">
            URBAN REGENERATION OPPORTUNITY
          </p>

          <h2>
            Transforming an existing
            residential complex into a
            <span> new urban environment.</span>
          </h2>

          <div className="renewalIntroText">

            <p>
              The project consists of three adjacent residential
              parcels in the Shivtei Israel area of Jaffa,
              containing 84 existing residential units.
            </p>

            <p>
              The site is being examined as a potential urban
              renewal project, with emphasis on planning feasibility,
              ownership structure, development density and long-term
              value creation.
            </p>

          </div>

        </div>

      </section>


      {/* KEY NUMBERS */}
      <section className="renewalNumbers">

        {keyData.map((item, index) => (
          <div
            className="renewalNumber"
            key={index}
          >

            <div className="renewalNumberValue">
              {item.value}

              {item.suffix && (
                <span>{item.suffix}</span>
              )}
            </div>

            <p>{item.label}</p>

          </div>
        ))}

      </section>


      {/* EXISTING CONDITION */}
      <section className="renewalExisting">

        <div className="renewalSectionLabel">
          02 / EXISTING ASSET
        </div>

        <div className="renewalExistingHeader">

          <h2>
            The existing
            <br />
            residential complex.
          </h2>

          <p>
            The proposed project area currently contains
            84 residential units distributed across three
            registered parcels and several connected low-rise
            residential buildings.
          </p>

        </div>


        <div className="renewalParcelTable">

          <div className="renewalParcelTableHeader">
            <span>PARCEL</span>
            <span>EXISTING UNITS</span>
            <span>REGISTERED / CADASTRAL AREA</span>
            <span>LOCATION</span>
          </div>

          {existingParcels.map((item) => (
            <div
              className="renewalParcelRow"
              key={item.parcel}
            >

              <strong>{item.parcel}</strong>

              <span>{item.units}</span>

              <span>{item.area}</span>

              <span>{item.address}</span>

            </div>
          ))}

        </div>

      </section>


      {/* IMAGE SECTION */}
      <section className="renewalImageSection">

        <img
          src="/images/israel/7024/site.jpg"
          alt="Shivtei Israel Jaffa"
        />

        <div className="renewalImageCaption">
          <span>PROJECT AREA</span>
          <p>Shivtei Israel · Jaffa</p>
        </div>

      </section>


      {/* PLANNING */}
      <section className="renewalPlanning">

        <div className="renewalSectionLabel light">
          03 / PLANNING FRAMEWORK
        </div>

        <div className="renewalPlanningHeader">

          <p className="renewalSmallTitle lightText">
            TEL AVIV–JAFFA PLANNING FRAMEWORK
          </p>

          <h2>
            A site positioned within
            an evolving urban renewal
            <span> planning environment.</span>
          </h2>

        </div>


        <div className="renewalPlanningGrid">

          <div className="renewalPlanningItem">
            <span>01</span>

            <h3>Planning Lot 2326</h3>

            <p>
              The municipal planning information identifies
              planning lot 2326 with an area of approximately
              5,592.39 m² for planning-right calculations.
            </p>
          </div>


          <div className="renewalPlanningItem">
            <span>02</span>

            <h3>Urban Renewal Area 706ו</h3>

            <p>
              The Shivtei Israel housing complex appears within
              the urban renewal framework of the deposited
              TA/5500 master-plan update.
            </p>
          </div>


          <div className="renewalPlanningItem">
            <span>03</span>

            <h3>Metro-Oriented Area</h3>

            <p>
              Municipal planning information also identifies
              the area within a metro-oriented urban planning
              environment.
            </p>
          </div>

        </div>

      </section>


      {/* POTENTIAL */}
      <section className="renewalPotential">

        <div className="renewalSectionLabel">
          04 / DEVELOPMENT POTENTIAL
        </div>

        <div className="renewalPotentialContent">

          <div>

            <p className="renewalSmallTitle">
              FEASIBILITY SCENARIO
            </p>

            <h2>
              Exploring the next
              generation of the site.
            </h2>

          </div>


          <div className="renewalPotentialText">

            <p>
              Preliminary planning work is examining whether
              a significantly larger residential development
              can be achieved through a future detailed plan.
            </p>

            <p>
              An initial working scenario examines approximately
              200–220 new residential units, subject to architectural
              feasibility, detailed planning, public requirements,
              ownership arrangements and economic viability.
            </p>

            <div className="renewalScenario">

              <span>WORKING SCENARIO</span>

              <strong>
                200–220
                <small> potential new units</small>
              </strong>

              <p>
                Preliminary feasibility scenario only —
                not approved building rights.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CRITICAL ISSUE */}
      <section className="renewalCritical">

        <div className="renewalCriticalNumber">
          217
        </div>

        <div className="renewalCriticalContent">

          <p>
            KEY PLANNING QUESTION
          </p>

          <h2>
            The relationship
            with Parcel 217.
          </h2>

          <p className="renewalCriticalText">
            Planning lot 2326 originates from parcels
            214, 215, 216 and 217. Although parcel 217
            is not currently included in the proposed project,
            its planning and access relationship with the site
            requires professional examination.
          </p>

          <div className="renewalCriticalQuestion">
            Can parcels 214–216 advance independently,
            or will the future detailed plan require a broader
            planning solution involving parcel 217?
          </div>

        </div>

      </section>


      {/* MY ROLE / STRATEGY */}
      <section className="renewalStrategy">

        <div className="renewalSectionLabel">
          05 / DEVELOPMENT PROCESS
        </div>

        <div className="renewalStrategyHeader">

          <h2>
            Turning information
            into a development strategy.
          </h2>

          <p>
            The current stage is focused on structuring the
            opportunity before approaching the project as a
            fully formed development transaction.
          </p>

        </div>


        <div className="renewalProcess">

          {process.map((item) => (
            <div
              className="renewalProcessItem"
              key={item.number}
            >

              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </section>


      {/* STATUS */}
      <section className="renewalStatus">

        <div>

          <p className="renewalSmallTitle">
            CURRENT STATUS
          </p>

          <h2>
            Preliminary
            <br />
            feasibility stage.
          </h2>

        </div>


        <div className="renewalStatusRight">

          <div className="renewalStatusBadge">
            <span className="renewalStatusDot" />
            UNDER REVIEW
          </div>

          <p>
            The project is currently undergoing preliminary
            planning, ownership and economic feasibility analysis.
          </p>

          <p>
            Any future development scope remains subject to
            statutory planning procedures and professional
            architectural, legal and appraisal review.
          </p>

        </div>

      </section>


      {/* NEXT PROJECT */}
      <section
        className="renewalNextProject"
        onClick={() =>
          navigate("/israel/jaffa-development-7023")
        }
      >

        <p>NEXT CASE STUDY</p>

        <div className="renewalNextTitle">
          <h2>
            Yefet Street
          </h2>

          <span>→</span>
        </div>

        <p>
          Development Opportunity · Block 7023
        </p>

      </section>

    </main>
  );
}

export default JaffaUrbanRenewalPage;