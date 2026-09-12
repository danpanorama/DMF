import RenovationGallery from './productcomponents/RenovationGallery';
import './../../css/renovationStory.css';

function RenovationStory({ renovation }) {
  if (!renovation) {
    return null;
  }

  return (
    <section className="renovationStory">

      <div className="renovationStoryHeader">

        <p className="renovationEyebrow">
          {renovation.eyebrow}
        </p>

        <h2>
          {renovation.title}
        </h2>

        <p className="renovationIntro">
          {renovation.intro}
        </p>

      </div>


      <div className="renovationSteps">

        {renovation.steps?.map((step) => (
          <div
            className="renovationStep"
            key={step.number}
          >

            <span className="renovationStepNumber">
              {step.number}
            </span>

            <h3>
              {step.title}
            </h3>

            <p>
              {step.text}
            </p>

          </div>
        ))}

      </div>


      {renovation.beforeImages?.length > 0 && (
        <RenovationGallery
          label="BEFORE"
          title="Where we started."
          text="The original condition of the apartment before the renovation process began."
          images={renovation.beforeImages}
        />
      )}


      {renovation.duringImages?.length > 0 && (
        <RenovationGallery
          label="THE PROCESS"
          title="During the renovation."
          text="A look at the transformation while the apartment was being rebuilt and redesigned."
          images={renovation.duringImages}
        />
      )}

    </section>
  );
}

export default RenovationStory;