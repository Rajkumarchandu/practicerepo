import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { addtoCart } from './cartslicer';
import { useDispatch } from 'react-redux';

function All() {

    const[all,setAll]=useState([]);
   const dispatch =useDispatch();

    function loadProducts(){

        axios.get("http://localhost:4000/products")
        .then((res)=>setAll(res.data))
        .catch((error)=>console.log(error))
    }

    useEffect(()=>{

        loadProducts();

    },[])


  return (
    <div className='container mt-5'>
        <h1>Show all Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore aliquid voluptates eum dignissimos ipsam qui eaque, iste consectetur perferendis repellendus quisquam vel tenetur aspernatur consequuntur, veritatis similique? Id accusantium necessitatibus facilis debitis nostrum quibusdam sunt. Tenetur eos optio commodi.</p>
        <div className='row'>
            {
                all.map((p)=>
                    <div className='col-lg-3 mt-2'>
                        <div className='card shadow '>
                            <img src={p.thumbnail}/>
                            <div className='card-header'>
                                <h5>{p.title}</h5>
                            </div>
                            <div className='card-body'>
                                <dt>Price</dt>
                                <dd className='fw-bold'>&#8377;{p.price}</dd>
                                <dt>Category</dt>
                                <dd className='text-capitalize'>{p.category}</dd>
                                  <dt>Rating</dt>
                                <dd className='text-capitalize badge bg-success'>{p.rating}</dd>
                            </div>

                            <div className='card-footer'>
                                <button className='btn btn-primary' onClick={()=>{dispatch(addtoCart(p))}}>Add To Cart</button>
                            </div>
                        </div>


                        

                    </div>
                )
            }

        </div>


    </div>
  )
}

export default All