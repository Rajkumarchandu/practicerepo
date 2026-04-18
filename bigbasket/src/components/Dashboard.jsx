import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Dashboard() {

    const[form,setForm]=useState({
        pid:"",
        name:"",
        category:"",
        price:"",
        image:""
    })

    const navigate=useNavigate();
    function handleChange(e){

        setForm({
            ...form,
            [e.target.name]:e.target.value
            

        })

    }

 const loggedAdmin = localStorage.getItem("adminname");

 function handleSubmit(e){
    e.preventDefault();

    axios.post("http://localhost:4000/products",form)
    .then(()=>{alert("Product is added!!!"),navigate("/products"),
        setForm({

        pid:"",
        name:"",
        category:"",
        price:"",
        image:""

        })
    })
    .catch(()=>alert("Error"));
    


 }
    
   

    return (
        <div className='container mt-3'>

            <pre>
                {
                    JSON.stringify(form)
                }
            </pre>

            <h2>Dashboard</h2>
            <h5 className='text-secondary'>Welcome: {loggedAdmin}</h5>
            <p className='fs-5' style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam ducimus nulla nam deserunt dicta, ad adipisci ea veritatis, voluptatem soluta rerum voluptatum necessitatibus mollitia officia illum at! Natus obcaecati nihil mollitia officiis assumenda modi.</p>



            <form className='border-1 shadow p-4 w-50 m-auto' onSubmit={handleSubmit}>
                <div>
                    <h3 className='text-secondary'>Enter Product Details</h3>
                </div>

                <div className='mt-2'>
                    <input type='text' placeholder='Pid' name="pid" className='form-control' onChange={handleChange} value={form.pid}/>
                </div>

                 <div className='mt-2'>
                    <input type='text' placeholder='Pname' name="name" className='form-control' onChange={handleChange} value={form.name}/>
                </div>

                 <div className='mt-2'>
                    <input type='text' placeholder='Category' name="category" className='form-control' onChange={handleChange} value={form.category}/>
                </div>

                 <div className='mt-2'>
                    <input type='text' placeholder='Price' name="price" className='form-control' onChange={handleChange} value={form.price}/>
                </div>


                 <div className='mt-2'>
                    <input type='text' placeholder='Image' name="image" className='form-control' onChange={handleChange} value={form.image}/>
                </div>

                <div className='mt-2 d-flex justify-content-center align-items-center'>
                    <input  type='submit' value="Add to Product" className='btn btn-success'/>
                     <Link to="/products" className='btn btn-dark ms-2'>Show Products</Link>
                </div>


            </form>

            
         

        </div>
    )
}

export default Dashboard