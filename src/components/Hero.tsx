import Container from 'react-bootstrap/Container';

const Hero = () => {
  return (
    <section
      className="position-relative bg-primary d-flex align-items-md-center"
      style={{ minHeight: '656px' }}>
      <Container className="z-3 position-relative">
        <div className="row flex-lg-row align-items-center py-5">
          <div className="col-lg-8">
            <h1 className="display-1 fw-bold lh-1 mb-5 text-light">
              The magic of taste in every crumb
            </h1>
            <p className="lead text-light mb-5">
              Our recipes bring the sophistication of ingredients to life: aromatic natural butter,
              fresh cream, pure honey and selected flour. We carefully select each component of
              premium cookies, striving to give you true culinary pleasure.
            </p>
            <button type="button" className="btn btn-light btn-lg px-5 py-2 text-primary rounded-5">
              Buy
            </button>
          </div>
        </div>
      </Container>
      <img
        src="/src/assets/images/cookie.png"
        className="position-absolute z-2 end-0 bottom-0 img-fluid"
        alt="Cookie"
        width="700"
        height="500"
        loading="lazy"
      />
    </section>
  );
};

export default Hero;
