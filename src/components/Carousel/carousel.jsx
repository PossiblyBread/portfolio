import styles from "./Carousel.module.css"; 

const Carousel = ({ slides, variant = "default", shadow = false }) => {
  return (
    <section className={styles.carouselSection}>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {slides.map((_, idx) => (
            <input
              key={idx}
              type="radio"
              name="slides"
              id={`slide-${idx + 1}`}
              defaultChecked={idx === 0}
            />
          ))}

          <ul className={styles.slides}>
            {slides.map((slide, idx) => (
              <li className={styles.slide} key={idx}>
                <figure className={styles.slideContent}>
                  <div className={styles.slideImage}>
                    <img src={slide.image} alt={slide.caption} />
                  </div>
                  <figcaption className={styles.slideText}>
                    <div
                      className={`${styles.card} ${styles[variant]} ${
                        shadow ? styles.shadow : ""
                      }`}
                    >
                      {slide.caption && (
                        <h2 className={styles.cardTitle}>{slide.caption}</h2>
                      )}
                      {slide.text && (
                        <p className={styles.cardText}>{slide.text}</p>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <ul className={styles.dots}>
            {slides.map((_, idx) => (
              <li key={idx}>
                <label
                  htmlFor={`slide-${idx + 1}`}
                  className={styles.dot}
                ></label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
