import { CiSearch } from "react-icons/ci";

function Slider() {
  return (
    <div>
      <div>
        <div
          className="carosal-10"
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/ft-media/wysiwyg/Banner_1400X400-_.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/ft-media/wysiwyg/Vibes_3.o-web-banners_30_off_1400_400_1_.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/ft-media/wysiwyg/Web_banner_1400X400_copy.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* /* Input Box */}
      <div className="input-1">
        <h1>Get Your Bakery</h1>
        <p>
          Our curated collection features frames that are as unique as you are.
        </p>
        <div className="input-3">
          <input
            type="text"
            placeholder="search your product from here"
          ></input>
          <button>
          <i class="bi bi-search"></i>
           <span style={{marginLeft:"10px",fontSize:"17px",fontWeight:"700",marginTop:"-50px",}}>Search</span>
          </button>
        </div>
      </div>
      {/* /* Input Box And */}
    </div>
  );
}

export default Slider;

// <div>
// <div className="carosal-10" id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
// <div class="carousel-inner">
// <div class="carousel-item active">
// <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/ft-media/wysiwyg/Banner_1400X400-_.png" class="d-block w-100" alt="..."/>
// </div>
// <div class="carousel-item">
// <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/ft-media/wysiwyg/Vibes_3.o-web-banners_30_off_1400_400_1_.png" class="d-block w-100" alt="..."/>
// </div>
// <div class="carousel-item">
// <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/ft-media/wysiwyg/Web_banner_1400X400_copy.jpg" class="d-block w-100" alt="..."/>
// </div>
// </div>
// <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
// {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
// <span class="visually-hidden">Previous</span>
// </button>
// <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
// {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
// <span class="visually-hidden">Next</span>
// </button>
// </div>
// </div>
