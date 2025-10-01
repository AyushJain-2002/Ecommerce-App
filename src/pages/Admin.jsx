  // src/pages/Admin.jsx
  import React, { useState, useEffect ,useCallback} from "react";
  import { useNavigate } from "react-router-dom";
  import { getProducts, createProduct, updateProduct, deleteProduct } from "../api/userapi.js";

  const Admin = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ id: "", name: "", price: "", image: "" });
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fetch products
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setError(null);
      } catch {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchProducts();
    }, []);

    // Form change
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    // Submit form
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!form.name || !form.price) {
        setError("Name and price required");
        return;
      }

      try {
        setLoading(true);
        if (editing) {
          await updateProduct(form.id, form);
          setProducts(products.map((p) => (p.id === form.id ? form : p)));
          setEditing(false);
        } else {
          // Don't send id (JSON server will assign automatically)
        // const { id, ...productData } = form;
        // const newProduct = await createProduct(productData);
        // setProducts([...products, newProduct]);
        // Generate custom ID
      const maxIdNum = products.length > 0 
        ? Math.max(...products.map(p => parseInt(p.id.replace("PROD-", "")))) 
        : 0;
      const newId = `${maxIdNum + 1}`;
      const newProductData = { ...form, id: newId };
      const newProduct = await createProduct(newProductData);
      setProducts([...products, newProduct]);
        }
        setForm({ id: "", name: "", price: "", image: "" });
        setError(null);
      } catch {
        setError("Failed to save product");
      } finally {
        setLoading(false);
      }
    };

    // Edit product
    const handleEditClick = (product) => {
      setForm(product);
      setEditing(true);
    };

    // Delete product
    const handleDeleteClick = async (id) => {
      if (!window.confirm("Delete this product?")) return;
      try {
        setLoading(true);
        await deleteProduct(id);
        setProducts(products.filter((p) => p.id !== id));
      } catch {
        setError("Failed to delete product");
      } finally {
        setLoading(false);
      }
    };

    const handleCancel = () => {
      setForm({ id: "", name: "", price: "", image: "" });
      setEditing(false);
      setError(null);
    };

    return (
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="flex items-center justify-center  mb-6">
          <h1 className="cursor-default text-3xl border-2 border-solid p-3 rounded-xl  bg-blue-500 hover:bg-blue-600 font-semibold">Admin Panel</h1>
        </div>

        {/* Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl cursor-default font-semibold mb-4">{editing ? "Edit Product" : "Add Product"}</h2>
          {error && <div className="mb-4 text-red-600">{error}</div>}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={form.name}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL (optional)"
              value={form.image}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
          <div className="mt-4 space-x-2">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {editing ? "Update Product" : "Add Product"}
            </button>
            {editing && (
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* Product Table */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : products.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No products</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-center border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-2 px-4">ID</th>
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Image</th>
                    <th className="py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} className="border-b">
                      <td className="py-2 px-4">{p.id}</td>
                      <td className="py-2 px-4">{p.name}</td>
                      <td className="py-2 px-4">{p.price}</td>
                      <td className="py-2 px-4">
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-16 h-16 object-cover mx-auto rounded"
                          />
                        ) : (
                          <span className="text-gray-500">No image</span>
                        )}
                      </td>
                      <td className="py-2 px-4 space-x-2">
                        <button
                          onClick={() => handleEditClick(p)}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(p.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default Admin;
