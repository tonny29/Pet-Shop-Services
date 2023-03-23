import React from "react";
import winone from "../../petImage/winone.jpg";
import wintwo from "../../petImage/wintwo.jpg";
import winthree from "../../petImage/winthree.jpg";
import winfour from "../../petImage/winfour.jpg";


const Aboutus = () => {
  return (
    // <div classNameName="services">
    //   <div>
    //     <h1>
    //       ABOUT <span style={{ color: "brown" }}>OUR FOOD</span> QUALITY
    //     </h1>
    //     <p>
    //       Pet food quality is difficult to define but is easily measured by the
    //       ultimate judge, the pets.Consumers often evaluate quality on the basis
    //       of <br /> ingredients, guaranteed analysis, palatability, physical
    //       form and appearance of ration, etc.{" "}
    //     </p>
    //     <div classNameName="row">
    //       <Col lg={3}>
    //         <div classNameName="services-style">
    //           <img
    //             src="https://image.freepik.com/free-photo/dry-cat-food-bowl-isolated-white-background_102618-2009.jpg"
    //             alt=""
    //           />
    //         </div>
    //       </Col>
    //       <Col lg={3}>
    //         <div classNameName="services-style">
    //           <img
    //             src="https://www.justrightpetfood.com/media/wysiwyg/bowl.png"
    //             alt=""
    //           />
    //         </div>
    //       </Col>
    //       <Col lg={3}>
    //         <div classNameName="services-style">
    //           <img
    //             src="https://freshpet.com/wp-content/uploads/2013/10/NF_DOG_WM_GrainFreeChickenwithCarrotsSpinach_5.png"
    //             alt=""
    //           />
    //         </div>
    //       </Col>
    //       <Col lg={3}>
    //         <div classNameName="services-style">
    //           <img
    //             src="https://image.freepik.com/free-photo/dry-cat-food-bowl-isolated-white-background_102618-2009.jpg"
    //             alt=""
    //           />
    //         </div>
    //       </Col>
    //     </div>
    //   </div>
    //   <br />
    //   <br />
    //   <br />
    //   <div>
    //     <h1>
    //       An <span style={{ color: "brown" }}>award-winning</span> pet food
    //     </h1>
    //     <p>
    //       Our whole-prey raw inspired recipes, chews and rewards are handcrafted
    //       in small <br /> batches using finest ingredients
    //     </p>
    //     <div classNameName="row">
    //       <Col lg={3}>
    //         <div classNameName="win-style">
    //           <img src={winone} alt="" />
    //         </div>
    //       </Col>
    //       <Col lg={3}>
    //         <div classNameName="win-style">
    //           <img src={wintwo} alt="" />
    //         </div>
    //       </Col>
    //       <Col lg={3}>
    //         <div classNameName="win-style">
    //           <img src={winthree} alt="" />
    //         </div>
    //       </Col>
    //       <Col lg={3}>
    //         <div classNameName="win-style">
    //           <img src={winfour} alt="" />
    //         </div>
    //       </Col>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
  <div className="row">
    <div className="col-lg-12">
      <h1>
        ABOUT <span >OUR FOOD</span> QUALITY
      </h1>
      <p>
        Pet food quality is difficult to define but is easily measured by the ultimate judge, the pets. Consumers often evaluate quality on the basis of ingredients, guaranteed analysis, palatability, physical form and appearance of ration, etc.
      </p>
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <img src="https://image.freepik.com/free-photo/dry-cat-food-bowl-isolated-white-background_102618-2009.jpg" alt="" className="img-fluid"/>
        </div>
        <div className="col-sm-6 col-md-3">
          <img src="https://www.justrightpetfood.com/media/wysiwyg/bowl.png" alt="" className="img-fluid"/>
        </div>
        <div className="col-sm-6 col-md-3">
          <img src="https://freshpet.com/wp-content/uploads/2013/10/NF_DOG_WM_GrainFreeChickenwithCarrotsSpinach_5.png" alt="" className="img-fluid"/>
        </div>
        <div className="col-sm-6 col-md-3">
          <img src="https://image.freepik.com/free-photo/dry-cat-food-bowl-isolated-white-background_102618-2009.jpg" alt="" className="img-fluid"/>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-lg-12">
      <h1>
        An <span>award-winning</span> pet food
      </h1>
      <p>
        Our whole-prey raw inspired recipes, chews and rewards are handcrafted in small batches using finest ingredients.
      </p>
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <img src={winfour} alt="" className="img-fluid"/>
        </div>
        <div className="col-sm-6 col-md-3">
          <img src={winthree} alt="" className="img-fluid"/>
        </div>
        <div className="col-sm-6 col-md-3">
          <img src={wintwo} alt="" className="img-fluid"/>
        </div>
        <div className="col-sm-6 col-md-3">
          <img src={winone} alt="" className="img-fluid"/>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Aboutus;
