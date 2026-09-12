function RenovationGallery({
  label,
  title,
  text,
  images,
}) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="renovationGallery">

      <div className="renovationGalleryHeader">

        <p>
          {label}
        </p>

        <h2>
          {title}
        </h2>

        {text && (
          <span>
            {text}
          </span>
        )}

      </div>


      <div className="renovationGalleryGrid">
{/* 
        {images.map((image, index) => (
          <div
            className="renovationGalleryImage"
            key={`${image}-${index}`}
          >

            <img
              src={image}
              alt={`${title} ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))} */}



{images.map((media, index) => {
  const isVideo = /\.(mp4|webm|mov)$/i.test(media);

  return (
    <div
      className="renovationGalleryImage"
      key={`${media}-${index}`}
    >
      {isVideo ? (
        <video
          src={media}
          controls
          playsInline
          preload="metadata"
          autoPlay={true}
          muted
          loop
        />
      ) : (
        <img
          src={media}
          alt={`${title} ${index + 1}`}
          loading="lazy"
        />
      )}
    </div>
  );
})}

      </div>

    </section>
  );
}

export default RenovationGallery;