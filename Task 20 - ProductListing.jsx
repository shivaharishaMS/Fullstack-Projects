import { useState } from "react";

function ProductListing() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Smartwatch", price: 250 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h2>🛒 Product Listing</h2>

        {/* Products */}
        <div style={styles.products}>
          {products.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <h4>{product.name}</h4>
              <p>Price: ${product.price}</p>
              <button
                style={styles.button}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div style={styles.cart}>
          <h3>🛍️ Cart ({cart.length})</h3>
          {cart.length === 0 && <p>No items in cart</p>}
          {cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              {item.name} - ${item.price}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #f7971e, #ffd200)",
    fontFamily: "Arial, sans-serif",
    padding: "15px",
  },
  container: {
    background: "#fff",
    width: "700px",
    borderRadius: "15px",
    padding: "25px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },
  products: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "space-between",
    marginBottom: "25px",
  },
  productCard: {
    flex: "1 1 calc(50% - 15px)",
    background: "#f4f4f4",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
  },
  button: {
    padding: "8px 15px",
    borderRadius: "8px",
    border: "none",
    background: "#f7971e",
    color: "#fff",
    cursor: "pointer",
    marginTop: "10px",
  },
  cart: {
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "10px",
  },
  cartItem: {
    padding: "5px 0",
    borderBottom: "1px solid #ddd",
  },
};

export default ProductListing;
