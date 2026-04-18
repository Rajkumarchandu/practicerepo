import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [admin, setAdmin] = useState({
        adminname: "",
        password: ""
    })
    let navigate = useNavigate();

    function handleChange(e) {
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {

        e.preventDefault();

        axios.get("http://localhost:4000/admin")
        .then((res) => {

            if (
                admin.adminname.trim() === res.data.adminname &&
                admin.password === res.data.password
            ) {
                localStorage.setItem("adminname", admin.adminname);
                navigate("/dashboard");
            }
            else {
                navigate("/error");
            }

        })
    }

    return (
        <div>
            <pre>
                {
                    JSON.stringify(admin)
                }
            </pre>

            <form className='shadow border p-4  m-auto mt-5' style={{ width: "400px" }} onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <h3 className='text-secondary'>Login Here</h3>
                </div>

                <div className='mt-2'>
                    <input type='text' placeholder='AdminName' name="adminname" className='form-control' onChange={handleChange} value={admin.adminname} />
                </div>

                <div className='mt-2'>
                    <input type='password' placeholder='Password' name="password" className='form-control' onChange={handleChange} value={admin.password} />
                </div>

                <div className='mt-2'>
                    <input type='submit' value="Login" className='btn btn-primary w-100' />
                </div>

            </form>

        </div>
    )
}

export default Login