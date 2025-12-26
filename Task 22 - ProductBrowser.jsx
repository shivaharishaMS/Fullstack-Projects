import { useState } from "react";

function ProductBrowser() {
  const [activeCategory, setActiveCategory] = useState("electronics");

  const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 1200 },
    { id: 2, name: "Smartphone", category: "electronics", price: 800 },
    { id: 3, name: "T-shirt", category: "clothing", price: 25 },
    { id: 4, name: "Jeans", category: "clothing", price: 50 },
    { id: 5, name: "Novel Book", category: "books", price: 15 },
    { id: 6, name: "Notebook", category: "books", price: 5 },
  ];

  const categories = ["electronics", "clothing", "books"];

  const filteredProducts = products.filter(
    (p) => p.category === activeCategory
  );

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h2>🛍️ Product Browser</h2>

        {/* Category Navigation */}
        <div style={styles.nav}>
          {categories.map((cat) => (
            <button
              key={cat}
              style={
                activeCategory === cat
                  ? styles.activeTab
                  : styles.tab
              }
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Display */}
        <div style={styles.products}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <h4>{product.name}</h4>
              <p>Price: ${product.price}</p>
            </div>
          ))}

          {filteredProducts.length === 0 && <p>No products in this category.</p>}
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
    alignItems: "flex-start",
    background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    fontFamily: "Arial, sans-serif",
    padding: "30px 0",
  },
  container: {
    background: "#fff",
    width: "700px",
    borderRadius: "15px",
    padding: "25px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },
  nav: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  tab: {
    flex: 1,
    padding: "10px",
    cursor: "pointer",
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "#f0f0f0",
  },
  activeTab: {
    flex: 1,
    padding: "10px",
    cursor: "pointer",
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "#fff",
    fontWeight: "bold",
  },
  products: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "space-between",
  },
  productCard: {
    flex: "1 1 calc(50% - 15px)",
    background: "#f4f4f4",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default ProductBrowser;
