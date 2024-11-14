import "../assets/products.css";
import { useEffect, useState, useCallback } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { AddCart } from "../features/AddCart/cartSlice";
import { fetchProduct } from "../features/Product/productSlice";
import SideCart from "../component/SideCart";

function Allproduct() {
  const dispatch = useDispatch();
  const { Allproduct } = useSelector((state) => state.product);

  const addCard = (data) => {
    dispatch(AddCart(data));
  };

  const [showModal, setShowModal] = useState(false);
  const handleCartModalClose = () => setShowModal(false);
  const handleCartModal = () => setShowModal(true);

  // Pagination state
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const [pageSize] = useState(8); // Fixed to show 5 products per page

  // Fetch products based on selected category and page
  useEffect(() => {
    setLoading(true);
    dispatch(fetchProduct(page, selectedCategory))
      .then((data) => {
        setLoading(false);
        if (data && data.products.length > 0) {
          setHasMoreProducts(data.products.length === pageSize);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, [dispatch, page, selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setPage(1);
  };

  // Load more products if available
  const loadMoreProducts = useCallback(() => {
    if (!loading && hasMoreProducts) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading, hasMoreProducts]);

  // Filter products by selected category
  const filteredProducts = selectedCategory
    ? Allproduct?.products?.filter((product) =>
        product.category_ids.some(
          (category) => category.id.toString() === selectedCategory
        )
      )
    : Allproduct?.products;

  // Display products based on current page and page size
  const displayedProducts = filteredProducts?.slice(
    (page - 1) * pageSize,
    page * pageSize
  ) || [];

  const totalPages = Math.ceil(filteredProducts?.length / pageSize);

  // Pagination handlers
  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const handlePrev = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5;
    let startPage = Math.max(page - Math.floor(maxPageNumbers / 2), 1);
    let endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);
    if (endPage - startPage + 1 < maxPageNumbers) {
      startPage = Math.max(endPage - maxPageNumbers + 1, 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <>
      {showModal && <SideCart handleCartModalClose={handleCartModalClose} />}

      <div className="allproducts">
        <div className="classic-product">
          <div className="sid_nav">
            <Sidebar
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          <div className="product-grid-product">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((data) => (
                <div key={data.id} className="product-card">
                  {data.discount > 0 && (
                    <div className="discount-badge">{data.discount}% OFF</div>
                  )}
                  <img
                    style={{ height: "200px" }}
                    src={`https://eye-care.developmentalphawizz.com/storage/app/public/product/thumbnail/${data.thumbnail}`}
                    alt={data.name}
                    className="product-image"
                  />
                  <div>
                    <h6 className="product-title">{data.name}</h6>
                    <div className="product-price-button">
                      <div className="product-pricing">
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          {data.unit_price !== undefined && (
                            <span className="original-price">
                              ₹{(data.unit_price || 0).toFixed(2)}
                            </span>
                          )}
                          <span className="discounted-price">
                            ₹{(data.purchase_price || 0).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="product-actions">
                        <button
                          className="cart-btn"
                          onClick={() => addCard(data)}
                        >
                          <FaShoppingCart /> Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>

        <div className="pagination" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePrev();
            }}
            style={{ visibility: page > 1 ? "visible" : "hidden" }}
          >
            &laquo;
          </a>
          {getPageNumbers().map((pageNumber) => (
            <a
              href="#"
              key={pageNumber}
              onClick={(e) => {
                e.preventDefault();
                setPage(pageNumber);
              }}
              style={{
                fontWeight: page === pageNumber ? "bold" : "normal",
                marginRight: "10px",
              }}
            >
              {pageNumber}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNext();
            }}
            style={{ visibility: page < totalPages ? "visible" : "hidden" }}
          >
            &raquo;
          </a>
        </div>
      </div>
    </>
  );
}

const Sidebar = ({ selectedCategory, onCategoryChange }) => (
  <div className="sidebar" style={{ padding: "20px" }}>
    <select
      className="category-select"
      value={selectedCategory}
      onChange={onCategoryChange}
    >
      <option value="">Select Products</option>
      <option value="10">Classic Eyeglasses</option>
      <option value="11">Premium Eyeglasses</option>
      <option value="12">Screen Eyeglasses</option>
    </select>
  </div>
);

export default Allproduct;
