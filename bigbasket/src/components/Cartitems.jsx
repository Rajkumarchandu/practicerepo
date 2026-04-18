import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from './cartslicer';

function Cartitems() {

let cartItems=useSelector((state)=>state.cart.cartitems);
let count=useSelector((state)=>state.cart.cartCount);
let dispatch=useDispatch();

let totalPrice=cartItems.reduce((sum,p)=>sum+p.price,0)

  return (
    <div className='container mt-5'>
        <h1>Shopping Cart</h1>

        <div style={{textAlign:"right"}}>
            <span className='fs-1'>Subtotal({count} item):<span className='fw-bold'> &#8377;{totalPrice}</span></span>
        </div>

        {
            cartItems.map((p)=>
                <div className='row shadow align-items-center'>
                    <div className='col-lg-3'>
                        <img src={p.thumbnail}/>
                    </div>

                    <div className='col-lg-6'>
                        <h4>{p.title}</h4>
                        <p>{p.category}</p>
                        <p className='text-truncate'>{p.description}</p>


                        <i class="bi bi-trash3 fs-2 text-danger" onClick={()=>{dispatch(deleteItem(p.dispatch))}} ></i>
                    </div>

                     <div className='col-lg-3'>
                        <span className='fs-1 fw-bold'>&#8377;{p.price}</span>
                    </div>

                    <div>
               
                    </div>

                   


                </div>
            )
        }
         <hr/>

    </div>
  )
}

export default Cartitems