export default function Banner() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://res.cloudinary.com/frontndev/image/upload/c_scale,h_400,w_1200/v1613261526/banner_clothes_kcvvdr.jpg"
            className="d-block w-100"
            alt="clothing"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Clothing</h5>
            <p>Make a fashion statement.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/frontndev/image/upload/c_scale,h_400,w_1200/v1613261523/banner_electronics_sqz7tj.jpg"
            className="d-block w-100"
            alt="electronics"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Electronics</h5>
            <p>Find the latest tech.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/frontndev/image/upload/c_scale,h_400,w_1200/v1613261583/banner_jewerly_tdegqc.jpg"
            className="d-block w-100"
            alt="jewerly"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Jewerly</h5>
            <p>Get your shiny on, you deserve it.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
