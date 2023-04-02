import React from 'react'

const Navbar = () => {
  return (
    <>
      <header>
        <nav class='navbar'>
          <div class='nav-center'>
            <div class='nav-header'>
              <h3 className='nav-logo'>LimitLess-Life</h3>
            </div>

            <ul class='nav-links' id='nav-links'>
              <li>
                <a href='#' class='nav-link scroll-link'>
                  home
                </a>
              </li>

              <li>
                <a href='#about' class='nav-link scroll-link'>
                  about
                </a>
              </li>

              <li>
                <a href='#featured' class='nav-link scroll-link'>
                  contact us
                </a>
              </li>

              <li>
                <a href='#sevices' class='nav-link scroll-link'>
                  services
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
