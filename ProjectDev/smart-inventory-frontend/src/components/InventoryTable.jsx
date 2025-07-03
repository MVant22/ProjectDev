import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './inventoryStyle.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const InventoryPage = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
    .then(res => setProducts(res.data))
    .catch(err => console.error('Error fetching products:', err))
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark sticky-top">
        <div className="container-fluid">
          <button className="btn btn-outline-light d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu">
            ☰
          </button>
          <a className="navbar-brand ms-2" href="#">Smart Inventory</a>
          <div className="d-flex align-items-center">
            <span className="text-white me-3">Admin</span>
          </div>
        </div>
      </nav>

      {/* Layout */}
      <div className="wrapper d-flex">
        {/* Sidebar */}
        <div className="offcanvas-lg offcanvas-start text-bg-dark" tabIndex="-1" id="sidebarMenu">
          <div className="offcanvas-body sidebar p-3">
            <h5>Navigation</h5>
            <Link to="/dashboard">Dashboard</Link><br />
            <Link to="/inventory">Inventory</Link><br />
            <a href="#">Transactions</a><br />
            <a href="#">Reports</a><br />
            <a href="#">Settings</a><br />
            <a href="#">Logout</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content w-100 p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Inventory</h2>
            <button className="btn btn-success">+ Add Product</button>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <span className={`badge ${product.quantity < 5 ? 'bg-danger' : 'bg-success'}`}>
                        {product.quantity < 5 ? 'Low Stock' : 'In Stock'}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary">Edit</button>{' '}
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {products.length === 0 && (
              <div className="text-muted text-center mt-4">No products found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
