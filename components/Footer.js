export default function Footer() {
  return (
    // <nav className="navbar bottom navbar-light bg-light">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <p>
    //           Photo by{" "}
    //           <a href="https://unsplash.com/@freestocks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
    //             freestocks
    //           </a>{" "}
    //           on{" "}
    //           <a href="https://unsplash.com/s/photos/shop-clothes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
    //             Unsplash
    //           </a>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div
      className="container"
      style={{ padding: "1em", borderTop: "1px solid #CCC" }}
    >
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
        </div>
        <div className="col-lg-4">
          <p>Icon: Shopping cart</p>
          <p>
            <div>
              Icons made by{" "}
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
