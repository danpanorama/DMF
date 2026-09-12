// import { useNavigate } from "react-router-dom";
// import "../css/jaffaUrbanRenewalPage.css";

// function JaffaDevelopmentPage() {
//   const navigate = useNavigate();

//   const keyData = [
//     {
//       value: "331",
//       suffix: "m²",
//       label: "Parcel Area"
//     },
//     {
//       value: "7023",
//       label: "Block"
//     },
//     {
//       value: "1",
//       label: "Parcel"
//     },
//     {
//       value: "Residential D",
//       label: "Land Use"
//     }
//   ];

//   const process = [
//     {
//       number: "01",
//       title: "Planning Review",
//       text:
//         "Analysis of the municipal planning framework, preservation status and applicable development rights."
//     },
//     {
//       number: "02",
//       title: "Ownership & Rights",
//       text:
//         "Review of the condominium structure, attached areas, common property and historical building-right arrangements."
//     },
//     {
//       number: "03",
//       title: "Development Strategy",
//       text:
//         "Assessment of the relationship between the existing asset, preservation constraints and future development potential."
//     },
//     {
//       number: "04",
//       title: "Feasibility",
//       text:
//         "Preparation for architectural, legal and appraisal analysis before advancing the opportunity."
//     }
//   ];

//   return (
//     <main className="renewalCaseStudy">

//       {/* HERO */}
//       <section className="renewalHero">

//         <img
//           src="/images/israel/7023/main.jpg"
//           alt="Yefet Street Development Opportunity"
//           className="renewalHeroImage"
//         />

//         <div className="renewalHeroOverlay" />

//         <button
//           className="renewalBackButton"
//           onClick={() => navigate("/israel")}
//         >
//           ← Israel Projects
//         </button>

//         <div className="renewalHeroContent">

//           <p className="renewalEyebrow">
//             DEVELOPMENT · TEL AVIV–JAFFA
//           </p>

//           <h1>
//             Yefet Street
//             <span>Development Opportunity.</span>
//           </h1>

//           <p className="renewalHeroSubtitle">
//             A preservation-sensitive development opportunity
//             combining an existing asset, planning rights
//             and long-term value creation in Jaffa.
//           </p>

//         </div>

//         <div className="renewalHeroMeta">

//           <div>
//             <span>BLOCK</span>
//             <strong>7023</strong>
//           </div>

//           <div>
//             <span>PARCEL</span>
//             <strong>1</strong>
//           </div>

//           <div>
//             <span>LOCATION</span>
//             <strong>Tel Aviv–Jaffa</strong>
//           </div>

//         </div>

//       </section>


//       {/* INTRO */}
//       <section className="renewalIntro">

//         <div className="renewalSectionLabel">
//           01 / PROJECT OVERVIEW
//         </div>

//         <div className="renewalIntroMain">

//           <p className="renewalSmallTitle">
//             DEVELOPMENT & VALUE CREATION
//           </p>

//           <h2>
//             An existing Jaffa asset
//             with a layered
//             <span> development story.</span>
//           </h2>

//           <div className="renewalIntroText">

//             <p>
//               The property is located at the intersection of
//               Yefet Street and Yehuda Hayamit in Jaffa, within
//               a central urban environment combining residential,
//               commercial and historic characteristics.
//             </p>

//             <p>
//               The opportunity is based on understanding the
//               relationship between the existing property,
//               planning rights, preservation limitations and
//               future development potential.
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* NUMBERS */}
//       <section className="renewalNumbers">

//         {keyData.map((item, index) => (
//           <div className="renewalNumber" key={index}>

//             <div className="renewalNumberValue">
//               {item.value}

//               {item.suffix && (
//                 <span>{item.suffix}</span>
//               )}
//             </div>

//             <p>{item.label}</p>

//           </div>
//         ))}

//       </section>


//       {/* EXISTING ASSET */}
//       <section className="renewalExisting">

//         <div className="renewalSectionLabel">
//           02 / EXISTING ASSET
//         </div>

//         <div className="renewalExistingHeader">

//           <h2>
//             Existing property.
//             <br />
//             Future potential.
//           </h2>

//           <p>
//             The property forms part of an existing condominium
//             structure and includes built areas, common property,
//             attached areas and planning rights that require
//             coordinated legal and architectural analysis.
//           </p>

//         </div>

//         <div className="renewalParcelTable">

//           <div className="renewalParcelTableHeader">
//             <span>ITEM</span>
//             <span>DETAIL</span>
//             <span>STATUS</span>
//             <span>NOTES</span>
//           </div>

//           <div className="renewalParcelRow">
//             <strong>Block</strong>
//             <span>7023</span>
//             <span>Registered</span>
//             <span>Tel Aviv–Jaffa</span>
//           </div>

//           <div className="renewalParcelRow">
//             <strong>Parcel</strong>
//             <span>1</span>
//             <span>Registered</span>
//             <span>Approx. 331 m²</span>
//           </div>

//           <div className="renewalParcelRow">
//             <strong>Land Use</strong>
//             <span>Residential D</span>
//             <span>Planning Framework</span>
//             <span>Subject to applicable plans</span>
//           </div>

//         </div>

//       </section>


//       {/* IMAGE */}
//       <section className="renewalImageSection">

//         <img
//           src="/images/israel/7023/site.jpg"
//           alt="Yefet Street site"
//         />

//         <div className="renewalImageCaption">
//           <span>PROJECT LOCATION</span>
//           <p>Yefet St. / Yehuda Hayamit · Jaffa</p>
//         </div>

//       </section>


//       {/* PLANNING */}
//       <section className="renewalPlanning">

//         <div className="renewalSectionLabel light">
//           03 / PLANNING FRAMEWORK
//         </div>

//         <div className="renewalPlanningHeader">

//           <p className="renewalSmallTitle lightText">
//             DEVELOPMENT RIGHTS & CONSTRAINTS
//           </p>

//           <h2>
//             A planning framework shaped by
//             <span> rights, preservation and context.</span>
//           </h2>

//         </div>

//         <div className="renewalPlanningGrid">

//           <div className="renewalPlanningItem">
//             <span>01</span>

//             <h3>Residential D</h3>

//             <p>
//               The municipal planning framework identifies
//               the parcel within a Residential D land-use area.
//             </p>
//           </div>

//           <div className="renewalPlanningItem">
//             <span>02</span>

//             <h3>Preservation Context</h3>

//             <p>
//               The property is subject to preservation-related
//               planning considerations that affect the way
//               additional development can be approached.
//             </p>
//           </div>

//           <div className="renewalPlanningItem">
//             <span>03</span>

//             <h3>Commercial Frontage</h3>

//             <p>
//               The location along Yefet Street creates an
//               urban frontage with mixed-use and commercial
//               characteristics.
//             </p>
//           </div>

//         </div>

//       </section>


//       {/* POTENTIAL */}
//       <section className="renewalPotential">

//         <div className="renewalSectionLabel">
//           04 / DEVELOPMENT POTENTIAL
//         </div>

//         <div className="renewalPotentialContent">

//           <div>

//             <p className="renewalSmallTitle">
//               VALUE CREATION
//             </p>

//             <h2>
//               Unlocking value
//               within an existing
//               urban asset.
//             </h2>

//           </div>

//           <div className="renewalPotentialText">

//             <p>
//               The development opportunity is driven by the
//               combination of existing ownership, planning rights,
//               the site's urban location and the ability to
//               integrate new development within the existing context.
//             </p>

//             <p>
//               The next stage requires architectural massing,
//               preservation analysis and a detailed review of
//               how the approved planning rights can be implemented.
//             </p>

//             <div className="renewalScenario">

//               <span>PROJECT STRATEGY</span>

//               <strong>
//                 Existing Asset
//                 <small> + Development Rights</small>
//               </strong>

//               <p>
//                 Subject to architectural, preservation,
//                 legal and planning review.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* OWNERSHIP */}
//       <section className="renewalCritical">

//         <div className="renewalCriticalNumber">
//           7023
//         </div>

//         <div className="renewalCriticalContent">

//           <p>
//             OWNERSHIP & RIGHTS
//           </p>

//           <h2>
//             Understanding the
//             legal structure behind
//             the property.
//           </h2>

//           <p className="renewalCriticalText">
//             The property is part of a registered condominium.
//             A key part of the opportunity is understanding the
//             relationship between the registered units, common
//             property, attached areas and historic agreements
//             concerning development rights.
//           </p>

//           <div className="renewalCriticalQuestion">
//             The development strategy depends not only on planning
//             rights, but also on accurately mapping who controls
//             the rights required to execute them.
//           </div>

//         </div>

//       </section>


//       {/* PROCESS */}
//       <section className="renewalStrategy">

//         <div className="renewalSectionLabel">
//           05 / DEVELOPMENT PROCESS
//         </div>

//         <div className="renewalStrategyHeader">

//           <h2>
//             From property analysis
//             to development strategy.
//           </h2>

//           <p>
//             The project requires a coordinated review of planning,
//             ownership, preservation and economic feasibility before
//             selecting the optimal development path.
//           </p>

//         </div>

//         <div className="renewalProcess">

//           {process.map((item) => (
//             <div
//               className="renewalProcessItem"
//               key={item.number}
//             >
//               <span>{item.number}</span>

//               <h3>{item.title}</h3>

//               <p>{item.text}</p>
//             </div>
//           ))}

//         </div>

//       </section>


//       {/* STATUS */}
//       <section className="renewalStatus">

//         <div>

//           <p className="renewalSmallTitle">
//             CURRENT STATUS
//           </p>

//           <h2>
//             Development
//             <br />
//             analysis stage.
//           </h2>

//         </div>

//         <div className="renewalStatusRight">

//           <div className="renewalStatusBadge">
//             <span className="renewalStatusDot" />
//             UNDER ANALYSIS
//           </div>

//           <p>
//             The property is being examined through planning,
//             ownership and development feasibility analysis.
//           </p>

//           <p>
//             Final development scope remains subject to detailed
//             architectural, legal, preservation and appraisal review.
//           </p>

//         </div>

//       </section>


//       {/* NEXT */}
//       <section
//         className="renewalNextProject"
//         onClick={() =>
//           navigate("/israel/jaffa-urban-renewal-7024")
//         }
//       >

//         <p>NEXT CASE STUDY</p>

//         <div className="renewalNextTitle">

//           <h2>
//             Shivtei Israel
//           </h2>

//           <span>→</span>

//         </div>

//         <p>
//           Urban Renewal · Block 7024
//         </p>

//       </section>

//     </main>
//   );
// }

// export default JaffaDevelopmentPage;






import { useNavigate } from "react-router-dom";
import israelProjects from "../database/israelProjects";
import "../css/jaffaUrbanRenewalPage.css";

function JaffaDevelopmentPage() {
  const navigate = useNavigate();

  const project = israelProjects.find(
    (item) => item.id === "jaffa-development-7023"
  );

  if (!project || !project.caseStudy) {
    return null;
  }

  const caseStudy = project.caseStudy;

  return (
    <main className="renewalCaseStudy">

      {/* HERO */}
      <section className="renewalHero">

        <img
          src={project.image}
          alt={project.title}
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
            {caseStudy.eyebrow}
          </p>

          <h1>
            {caseStudy.heroTitle}
            <span>{caseStudy.heroTitleAccent}</span>
          </h1>

          <p className="renewalHeroSubtitle">
            {caseStudy.heroSubtitle}
          </p>

        </div>

        <div className="renewalHeroMeta">

          <div>
            <span>BLOCK</span>
            <strong>{project.block}</strong>
          </div>

          <div>
            <span>PARCEL</span>
            <strong>{project.parcel}</strong>
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
            {caseStudy.overviewLabel}
          </p>

          <h2>
            An existing Jaffa asset
            with a layered
            <span> development story.</span>
          </h2>

          <div className="renewalIntroText">

            {caseStudy.overview.map((text, index) => (
              <p key={index}>
                {text}
              </p>
            ))}

          </div>

        </div>

      </section>


      {/* KEY NUMBERS */}
      <section className="renewalNumbers">

        {caseStudy.keyData.map((item, index) => (
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


      {/* EXISTING ASSET */}
      <section className="renewalExisting">

        <div className="renewalSectionLabel">
          02 / EXISTING ASSET
        </div>

        <div className="renewalExistingHeader">

          <h2>
            Existing property.
            <br />
            Future potential.
          </h2>

          <p>
            {caseStudy.assetIntro}
          </p>

        </div>


        <div className="renewalParcelTable">

          <div className="renewalParcelTableHeader">
            <span>ITEM</span>
            <span>DETAIL</span>
            <span>STATUS</span>
            <span>NOTES</span>
          </div>

          {caseStudy.assetRows.map((row, index) => (
            <div
              className="renewalParcelRow"
              key={index}
            >
              <strong>{row.item}</strong>
              <span>{row.detail}</span>
              <span>{row.status}</span>
              <span>{row.notes}</span>
            </div>
          ))}

        </div>

      </section>


      {/* IMAGE */}
      <section className="renewalImageSection">

        <img
          src={caseStudy.secondaryImage}
          alt={`${project.title} site`}
        />

        <div className="renewalImageCaption">
          <span>PROJECT LOCATION</span>
          <p>{project.subtitle} · Jaffa</p>
        </div>

      </section>


      {/* PLANNING */}
      <section className="renewalPlanning">

        <div className="renewalSectionLabel light">
          03 / PLANNING FRAMEWORK
        </div>

        <div className="renewalPlanningHeader">

          <p className="renewalSmallTitle lightText">
            DEVELOPMENT RIGHTS & CONSTRAINTS
          </p>

          <h2>
            A planning framework shaped by
            <span> rights, preservation and context.</span>
          </h2>

        </div>


        <div className="renewalPlanningGrid">

          {caseStudy.planning.map((item) => (
            <div
              className="renewalPlanningItem"
              key={item.number}
            >

              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

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
              VALUE CREATION
            </p>

            <h2>
              {caseStudy.potentialTitle}
            </h2>

          </div>


          <div className="renewalPotentialText">

            {caseStudy.potentialText.map((text, index) => (
              <p key={index}>
                {text}
              </p>
            ))}

            <div className="renewalScenario">

              <span>
                {caseStudy.scenarioLabel}
              </span>

              <strong>
                {caseStudy.scenarioMain}

                <small>
                  {" "}
                  {caseStudy.scenarioSmall}
                </small>
              </strong>

              <p>
                {caseStudy.scenarioNote}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* OWNERSHIP / RIGHTS */}
      <section className="renewalCritical">

        <div className="renewalCriticalNumber">
          {caseStudy.criticalNumber}
        </div>

        <div className="renewalCriticalContent">

          <p>
            {caseStudy.criticalLabel}
          </p>

          <h2>
            {caseStudy.criticalTitle}
          </h2>

          <p className="renewalCriticalText">
            {caseStudy.criticalText}
          </p>

          <div className="renewalCriticalQuestion">
            {caseStudy.criticalQuestion}
          </div>

        </div>

      </section>


      {/* DEVELOPMENT PROCESS */}
      <section className="renewalStrategy">

        <div className="renewalSectionLabel">
          05 / DEVELOPMENT PROCESS
        </div>

        <div className="renewalStrategyHeader">

          <h2>
            From property analysis
            to development strategy.
          </h2>

          <p>
            The project requires a coordinated review of planning,
            ownership, preservation and economic feasibility before
            selecting the optimal development path.
          </p>

        </div>


        <div className="renewalProcess">

          {caseStudy.process.map((item) => (
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
            Development
            <br />
            analysis stage.
          </h2>

        </div>


        <div className="renewalStatusRight">

          <div className="renewalStatusBadge">
            <span className="renewalStatusDot" />
            {caseStudy.statusBadge}
          </div>

          {caseStudy.statusText.map((text, index) => (
            <p key={index}>
              {text}
            </p>
          ))}

        </div>

      </section>


      {/* NEXT PROJECT */}
      <section
        className="renewalNextProject"
        onClick={() =>
          navigate("/israel/jaffa-urban-renewal-7024")
        }
      >

        <p>NEXT CASE STUDY</p>

        <div className="renewalNextTitle">

          <h2>
            Shivtei Israel
          </h2>

          <span>→</span>

        </div>

        <p>
          Urban Renewal · Block 7024
        </p>

      </section>

    </main>
  );
}

export default JaffaDevelopmentPage;