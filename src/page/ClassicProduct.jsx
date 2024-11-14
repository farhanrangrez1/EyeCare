import React, { useState } from "react";
import product1 from "../Image/product/2036MG2977-2_e39618b1-7aac-478d-8096-00b67f0ca421.webp"
import product2 from "../Image/product/2057MG3573-2.webp"
import product3 from "../Image/product/2186MG3620-2 (1).webp"
import product4 from "../Image/product/2186MG3620-2.webp"
import product5 from "../Image/product/2305MG3637-2.webp"
import product6 from "../Image/product/2_2d7a94d1-ef5b-4e51-81f2-2e829f15f5e4.webp"
import product8 from "../Image/product/3405MG3786-3_b01b7950-a630-4e4c-9231-c8de01d4f5fe (1).webp"
import product14 from "../Image/product/2305MG3637-2.webp"
import ProductPopup from "./ProductPopup";

const allProducts = [
  {
    image: product1,
    title: "The OG | Round Black Silver Su...",
    originalPrice: 2.0,
    discountedPrice: 1.6,
    discount: 20,
    category: "classic",
  },
  {
    image: product2,
    title: "Gradient Grey Wayfarer Sungla...",
    originalPrice: 1.0,
    discountedPrice: 0.6,
    discount: 40,
    category: "classic",
  },
  {
    image: product3,
    title: "Phantom | Black Wayfarer Sung...",
    originalPrice: 3.0,
    discountedPrice: 3.0,
    discount: 0,
    category: "premium",
  },
  {
    image: product4,
    title: "Silver Digger | Black & Silver Re...",
    originalPrice: 5.0,
    discountedPrice: 3.0,
    discount: 40,
    category: "screen",
  },
  {
    image: product5,
    title: "Silver Digger | Black & Silver Re...",
    originalPrice: 5.0,
    discountedPrice: 3.0,
    category: "screen",
  },
  {
    image: product6,
    title: "Silver Digger | Black & Silver Re...",
    originalPrice: 5.0,
    discountedPrice: 3.0,
    discount: 40,
    category: "screen",
  },
  {
    image: product14,
    title: "Silver Digger | Black & Silver Re...",
    originalPrice: 5.0,
    discountedPrice: 3.0,
    category: "screen",
  },
  {
    image: product8,
    title: "Silver Digger | Black & Silver Re...",
    originalPrice: 5.0,
    discountedPrice: 3.0,
    discount: 40,
    category: "screen",
  },
];

function ClassicProduct() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePopupProduct = () => {
    setShowPopup(true);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    <div className="classic-product">
      <div className="sid_nav">
        <Sidebar
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            showPopup={showPopup}
            handlePopupProduct={handlePopupProduct}
            handleClosePopup={handleClosePopup}
          />
        ))}
        <button
          style={{
            marginLeft: "480px",
            height: "50px",
            width: "100px",
            borderRadius: "8px",
            backgroundColor: "#1C88B8",
            color: "white",
            border: "none",
            fontWeight: "600",
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

const Sidebar = ({ selectedCategory, onCategoryChange }) => (
  <div className="sidebar" style={{ padding: "20px" }}>
    <select
      className="category-select"
      value={selectedCategory}
      onChange={onCategoryChange}
    >
      <option value="">Classic Eyeglasses</option>
      <option value="classic">Classic Eyeglasses</option>
      <option value="premium">Premium Eye Glasses</option>
      <option value="screen">Screen Eye Glasses</option>
    </select>

    <select
      style={{ color: "black" }}
      className="category-select"
      value={selectedCategory}
      onChange={onCategoryChange}
    >
      <option value="">Premium Eye Glasses</option>
      <option value="classic">Classic Eyeglasses</option>
      <option value="premium">Premium Eye Glasses</option>
      <option value="screen">Screen Eye Glasses</option>
    </select>
    <select
      style={{ color: "black" }}
      className="category-select"
      value={selectedCategory}
      onChange={onCategoryChange}
    >
      <option value="">Screen Eye Glasses</option>
      <option value="classic">Classic Eyeglasses</option>
      <option value="premium">Premium Eye Glasses</option>
      <option value="screen">Screen Eye Glasses</option>
    </select>
  </div>
);

const ProductCard = ({
  image,
  title,
  originalPrice,
  discountedPrice,
  discount,
  handlePopupProduct,
  showPopup,
  handleClosePopup,
}) => (
  <div className="product-card">
    {discount > 0 && <div className="discount-badge">{discount}%</div>}
    <img onClick={handlePopupProduct} src={image} alt={title} className="product-image" />
    <div
      style={{
        padding: "20px 10px 20px 10px",
      }}
    >
      <h6 className="product-title">{title}</h6>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 10px 10px 10px",
        }}
      >
        <div
          className="product-pricing"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {originalPrice !== discountedPrice && (
            <span className="original-price">₹{originalPrice.toFixed(2)}</span>
          )}
          <span className="discounted-price">₹{discountedPrice.toFixed(2)}</span>
        </div>
        <div className="product-actions">
          <button className="cart-btn">
            <svg
              style={{ height: "15px" }}
              viewBox="0 0 14.4 12"
            >
              <g transform="translate(-288 -413.89)">
                <path
                  fill="currentColor"
                  d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
                ></path>
              </g>
            </svg>
            Cart
          </button>
        </div>
      </div>
    </div>
    {showPopup && <ProductPopup handleClosePopup={handleClosePopup} />}
  </div>
);

export default ClassicProduct;
