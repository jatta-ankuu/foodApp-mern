import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer class="pt-3 pb-1 footer text-info border-top bg-secondary"> 
      <ul class="nav justify-content-center   pb-3 mb-3"> 
        <li class="nav-item">
          <Link to="#" class="nav-link text-white px-2 ">Home</Link>
          </li> 
          <li class="nav-item">
            <Link to="#" class="nav-link text-white px-2 ">Features</Link>
            </li> 
            <li class="nav-item">
              <Link to="#" class="nav-link text-white px-2 ">Pricing</Link>
              </li> 
              <li class="nav-item">
                <Link to="#" class="nav-link text-white px-2">FAQs</Link>
                </li> 
                <li class="nav-item">
                  <Link to="#" class="nav-link text-white px-2 ">About</Link>
                  </li> 
                  </ul> <p class="text-center">© 2026<b> Malik-Food</b>, Inc</p> </footer>
                 
    </>

  )
}
