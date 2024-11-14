import Image1 from "../Image/marquee/shopByShapeGlass1.9c6333f6.png";
import Image2 from "../Image/marquee/shopByShapeGlass2.17db8234.png";
import Image3 from "../Image/marquee/shopByShapeGlass3.97ee3d67 (1).png";
import Image4 from "../Image/marquee/shopByShapeGlass3.97ee3d67.png";
import Image5 from "../Image/marquee/shopByShapeGlass5.299ad172 (1).png";
import Image6 from "../Image/marquee/shopByShapeGlass5.299ad172 (2).png";
import Image7 from "../Image/marquee/shopByShapeGlass5.299ad172.png";
import Image8 from "../Image/marquee/shopByShapeGlass6.0.9a2a1b46.png";

// brandLogo
import brandLogo1 from "../Image/marquee/brandLogo1.webp";
import brandLogo2 from "../Image/marquee/brandLogo2.webp";
import brandLogo3 from "../Image/marquee/brandLogo3.webp";
import brandLogo4 from "../Image/marquee/brandLogo4.webp";
import brandLogo5 from "../Image/marquee/brandLogo5.webp";
import brandLogo6 from "../Image/marquee/brandLogo6.webp";
import brandLogo7 from "../Image/marquee/brandLogo7.webp";
import brandLogo8 from "../Image/marquee/brandLogo8.webp";

function Banner() {
  return (
    <div style={{width:"100%"}}>
      <div
        style={{
          height: "200px",
          paddingTop: "20px",
          backgroundColor: "#F3F4F9",
        }}
      >
        <div
          className="banner"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <div
              style={{
                borderTop: "1px solid gray",
                width: "540px",
                margin: "0 auto",
              }}
            ></div>
            <h2 style={{ fontWeight: "100", color: "rgb(25, 19, 54)" }}>
              WEAR THE TREND
            </h2>
            <div
              style={{
                borderTop: "1px solid gray",
                width: "500px",
                margin: "0 auto",
              }}
            ></div>
          </div>
        </div>
        <div class="marquee">
          <div class="marquee-content">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "110px",
              }}
            >
              <img src={Image1} alt="" />
              <h6>Contact Lenses</h6>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "110px",
              }}
            >
              <img src={Image2} alt="" />
              <h6>Contact Lenses</h6>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "110px",
              }}
            >
              <img src={Image3} alt="" />
              <h6>Contact Lenses</h6>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "110px",
              }}
            >
              <img src={Image4} alt="" />
              <h6>Contact Lenses</h6>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "110px",
              }}
            >
              <img src={Image5} alt="" />
              <h6>Contact Lenses</h6>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "110px",
              }}
            >
              <img src={Image6} alt="" />
              <h6>Contact Lenses</h6>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "110px",
              }}
            >
              <img src={Image7} alt="" />
              <h6>Contact Lenses</h6>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "110px",
              }}
            >
              <img src={Image8} alt="" />
              <h6>Contact Lenses</h6>
            </div>
          </div>
        </div>
      </div>

      {/* // */}
      <div
        style={{
          height: "280px",
          backgroundColor: "#F3F4F9",
        }}
      >
        <div
          className="banner"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                borderTop: "1px solid gray",
                width: "600px",
                margin: "0 auto",
              }}
            ></div>
            <h2 style={{ fontWeight: "100", color: "rgb(25, 19, 54)" }}>
              OUR BRAND
            </h2>
            <div
              style={{
                borderTop: "1px solid gray",
                width: "530px",
                margin: "0 auto",
              }}
            ></div>
          </div>
        </div>

        <div class="marquee-2">
          <div class="marquee-content-2">
            <div>
              <img src={brandLogo1} alt="" />
            </div>
            <div>
              <img src={brandLogo3} alt="" />
            </div>
            <div>
              <img src={brandLogo4} alt="" />
            </div>
            <div>
              <img src={brandLogo5} alt="" />
            </div>{" "}
            <div>
              <img src={brandLogo6} alt="" />
            </div>{" "}
            <div>
              <img src={brandLogo7} alt="" />
            </div>{" "}
            <div>
              <img src={brandLogo8} alt="" />
            </div>
            <div>
              <img src={brandLogo1} alt="" />
            </div>
            <div>
              <img src={brandLogo3} alt="" />
            </div>
  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
