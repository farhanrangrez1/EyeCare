import { useEffect } from 'react';  
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { handleAddToCart } from '../features/cartSlice';
import { fetchCategory } from '../features/Allcategory/categorySlice';

function Allcategory() {
  const dispatch = useDispatch();

  // Fetch the category data from Redux store
  const { AallCategori } = useSelector((state) => state.categories);
  console.log(AallCategori);  // For debugging

  // Fetch categories when the component mounts
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <>
      <div className='card1-5'>
        {/* {
          AallCategori?.map((data, id) => (
            <div key={data.id} data={data} className='card1-3'>
              <img 
                src={`https://eye-care.developmentalphawizz.com/storage/app/public/category/${data.icon}`} 
                alt={data.name} 
                // onClick={() => handleModal()}  // Add Modal handler if necessary
              />
              <span>{data.name}</span>
              <div className='card1-4'>
                <strike>RS:232</strike>
                <button onClick={() => dispatch(handleAddToCart(data))}>
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          ))
        } */}
      </div>

      <div className="products" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px", padding: "20px" }}>
        {AallCategori && AallCategori.length > 0 ? (
          AallCategori.map((data) => (
            <div key={data.id} className="product-card">
              {/* Discount Badge */}
              {data.discount > 0 && (
                <div className="discount-badge">{data.discount}% OFF</div>
              )}

              {/* Product Image */}
              <img
                style={{height:"200px"}}
                src={`https://eye-care.developmentalphawizz.com/storage/app/public/category/${data.icon}`} 
                  alt={data.name}
                className="product-image"
              />

              <div style={{ padding: "20px 10px 20px 10px" }}>
                <h6 className="product-title">{data.name}</h6>
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
                    {/* Conditional price rendering */}
                    {data.originalPrice !== undefined && (
                      <span className="original-price">
                        ₹{(data.originalPrice || 0).toFixed(2)}
                      </span>
                    )}
                    <span className="discounted-price">
                      ₹{(data.discountedPrice || 0).toFixed(2)}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="product-actions">
                    <button
                      className="cart-btn"
                    
                      onClick={() => dispatch(handleAddToCart(data))} // Corrected to use dispatch
                    >
                      <svg
                        style={{ height: "15px" }}
                        className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"
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
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </>
  );
}

export default Allcategory;
