export default function Footer(props) {
  if (typeof window === "undefined") {
    return null;
  }

  const classes = {
    class:
      props.window === "fixed"
        ? "navbar fixed-bottom navbar-light bg-light"
        : "navbar bottom navbar-light bg-light",
  };

  return (
    <nav className={classes.class}>
      <div className="container">
        <div className="row">
          <h3>Credit</h3>{" "}
          <div className="col-lg-4">
            <p>Carosel: Clothing</p>
            <p>
              Photo by{" "}
              <a href="https://unsplash.com/@freestocks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                freestocks{" "}
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/shop-clothes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash{" "}
              </a>{" "}
            </p>
            <hr />
          </div>
          <div className="col-lg-4">
            <p>Carosel: Electronics</p>
            <p>
              Photo by{" "}
              <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Aaron Burden
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/electronics?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </p>
            <hr />
          </div>
          <div className="col-lg-4">
            <p>Carosel: Jewerly</p>
            <p>
              Photo by{" "}
              <a href="https://unsplash.com/@harpersunday?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Jess @ Harper Sunday
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/jewelry?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </p>
            <hr />
          </div>
          <div className="col-lg-4">
            <p>Icon: Shopping cart</p>
            <p>
              <span>
                Icons made by{" "}
                <a href="https://www.freepik.com" title="Freepik">
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </span>
            </p>
          </div>
          <div className="col-lg-4">
            <p>Icon: Search icon</p>
            <span>
              Icons made by{" "}
              <a href="" title="Dimitry Miroliubov">
                Dimitry Miroliubov
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </span>
          </div>
          <div className="col-lg-4">
            Copy Right All Rights Reserved Frontier 2021
            <br />
            Address: 1234 Main Ave Phoenix, AZ 85005
            <br />
            Tel: 555-555-1111
          </div>
        </div>
      </div>
    </nav>
  );
}
