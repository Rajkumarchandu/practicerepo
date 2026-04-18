import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Products() {

    const [products, setProducts] = useState([]);

    const [form, setForm] = useState({
        id: "",
        title: "",
        price: "",
        thumbnail: ""
    })

    const [editId, setEditId] = useState(null);

    function getProducts() {
        axios.get("http://localhost:4000/products")
            .then(res => setProducts(res.data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getProducts();
    }, [])

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (editId) {
            axios.put(`http://localhost:4000/products/${editId}`, form)
                .then(() => {
                    getProducts();
                    resetForm();
                })
        } else {
            axios.post("http://localhost:4000/products", form)
                .then(() => {
                    getProducts();
                    resetForm();
                })
        }
    }

    function resetForm() {
        setForm({
            id: "",
            title: "",
            price: "",
            thumbnail: ""
        });
        setEditId(null);
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:4000/products/${id}`)
            .then(() => getProducts())
            .catch(error => console.log(error));
    }

    function handleEdit(item) {
        setForm({
            id: item.id,
            title: item.title,
            price: item.price,
            thumbnail: item.thumbnail
        });
        setEditId(item.id);
    }

    return (
        <div className='container mt-3'>

            <h3>Product CRUD</h3>

            <form onSubmit={handleSubmit} className='mb-3'>

                <input
                    type="text"
                    name="id"
                    placeholder="Product Id"
                    value={form.id}
                    onChange={handleChange}
                    className="form-control mb-2"
                />

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    className="form-control mb-2"
                />

                <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    className="form-control mb-2"
                />

                <input
                    type="text"
                    name="thumbnail"
                    placeholder="Image URL"
                    value={form.thumbnail}
                    onChange={handleChange}
                    className="form-control mb-2"
                />

                <button className="btn btn-primary w-100">
                    {editId ? "Update Product" : "Add Product"}
                </button>
            </form>

            <Link to="/dashboard" className='btn btn-dark mb-4'>
                Back Dashboard
            </Link>

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Preview</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>₹{item.price}</td>
                            <td>
                                <img src={item.thumbnail} width="100" height="50" alt="" />
                            </td>
                            <td>
                                <button
                                    className='btn btn-warning btn-sm me-2'
                                    onClick={() => handleEdit(item)}
                                >
                                    Edit
                                </button>

                                <button
                                    className='btn btn-danger btn-sm'
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Products;