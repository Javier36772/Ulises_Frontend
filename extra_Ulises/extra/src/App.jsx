import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "Auriculares Inalámbricos", price: 120, description: "Sonido de alta calidad" },
    { name: "Cargador Portátil", price: 45, description: "Compacto y potente" },
    { name: "Reloj Inteligente", price: 250, description: "Sigue tus metas de fitness" },
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.description) {
      setProducts([...products, { ...newProduct, price: parseFloat(newProduct.price) }]);
      setNewProduct({ name: "", price: "", description: "" });
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "20px", backgroundColor: "#1e293b", color: "#f1f5f9" }}>
      <header style={{ fontSize: "32px", fontWeight: "600", marginBottom: "20px", textAlign: "center" }}>Gestión de Productos</header>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", justifyContent: "center" }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={handleInputChange}
          style={{ padding: "10px", fontSize: "16px", borderRadius: "8px", border: "1px solid #64748b", width: "200px", backgroundColor: "#334155", color: "#f1f5f9" }}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={newProduct.price}
          onChange={handleInputChange}
          style={{ padding: "10px", fontSize: "16px", borderRadius: "8px", border: "1px solid #64748b", width: "120px", backgroundColor: "#334155", color: "#f1f5f9" }}
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={newProduct.description}
          onChange={handleInputChange}
          style={{ padding: "10px", fontSize: "16px", borderRadius: "8px", border: "1px solid #64748b", width: "300px", backgroundColor: "#334155", color: "#f1f5f9" }}
        />
        <button
          onClick={addProduct}
          style={{ padding: "10px 20px", backgroundColor: "#0ea5e9", color: "#f1f5f9", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}
        >
          Agregar
        </button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #64748b", padding: "12px", backgroundColor: "#0f172a", color: "#f1f5f9", textAlign: "left" }}>Nombre</th>
            <th style={{ border: "1px solid #64748b", padding: "12px", backgroundColor: "#0f172a", color: "#f1f5f9", textAlign: "left" }}>Precio</th>
            <th style={{ border: "1px solid #64748b", padding: "12px", backgroundColor: "#0f172a", color: "#f1f5f9", textAlign: "left" }}>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #64748b", padding: "12px", backgroundColor: "#1e293b" }}>{product.name}</td>
              <td style={{ border: "1px solid #64748b", padding: "12px", backgroundColor: "#1e293b" }}>${product.price.toFixed(2)}</td>
              <td style={{ border: "1px solid #64748b", padding: "12px", backgroundColor: "#1e293b" }}>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;