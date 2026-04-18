import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

    let count=useSelector((state)=>state.cart.cartCount)

  return (
  <React.Fragment>

    <header className='bg-light shadow d-flex justify-content-between px-5 py-2 align-items-center sticky-top top-0'>

        <div>
            <span className='text-danger fw-bold'>Big</span>
            <span>Basket</span>
        </div>

        <div>
            <div className='input-group'>
            <span className='bi bi-search input-group-text text-success'></span>
            <input type='search' className='form-control' placeholder="Search Products" style={{width:"400px"}}/>
            </div>
            
        </div>

        <div>
            <Link className='btn btn-success m-1' to="/login">Admin Login</Link>
            <button className='btn btn-secondary m-1'>SignUp</button>
        </div>

        <div>
            <Link to="/cartitems" className='btn btn-danger position-relative'>Cart Items
            <span className='badge bg-success position-absolute translate-middle start-100 top-0 rounded-circle'>{count}</span>
            </Link>
            
        </div>

    </header>

  </React.Fragment>
  )
}

export default Header