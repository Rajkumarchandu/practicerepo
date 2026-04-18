import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


  return (
    <div>


        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
               <Link class="nav-link active text-white" aria-current="page" to="/all">All</Link>
        </li>
      
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/grocery">Grocery</Link>
        </li>

 <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/beauty">Beauty</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar