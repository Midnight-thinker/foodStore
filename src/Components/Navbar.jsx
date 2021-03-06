import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-success-nav p-3">
        <div class="container-fluid">
          <a class="navbar-brand nav1" href="/">FoodStore</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <a class="nav-link active nav2" aria-current="page" href="/">Menu</a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
    )
}

export default Navbar
