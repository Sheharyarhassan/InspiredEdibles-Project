import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../public/assets/Logo2.png'

function Header({ toggleTerminal }) {
   return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <Link href="/" className="nav-link btn active bg-secondary-subtle me-3 py-1 text-uppercase" aria-current="page">O</Link>
                  </li>
                  <li className="nav-item">
                     <Link href="/Blogmode" className="nav-link btn active bg-secondary-subtle me-3 py-1 text-uppercase" aria-current="page">[M] BLOG MODE</Link>
                  </li>
                  <li className="nav-item">
                     <Link href="/about" className="nav-link btn bg-secondary-subtle me-3 py-1 text-uppercase" >[D] Ignore</Link>
                  </li>
                  <li className="nav-item">
                     <Link href="/terminal" className="nav-link btn bg-secondary-subtle me-3 py-1 text-uppercase">[Y] Instagram</Link>
                  </li>
                  <li className="nav-item">
                     <Link href="/boomermode" className="nav-link btn bg-secondary-subtle me-3 py-1 text-uppercase">[B] Boomer mode</Link>
                  </li>
               </ul>
               <a className="navbar-brand" href="#">
                  <div className="col-xl-3 col-lg-6 text-center">
                     <Image src={Logo} alt="Stripe Logo" className="mw-100 h-auto"/>
                  </div>
               </a>
              <button className="btn bg-secondary-subtle py-1 text-uppercase" onClick={toggleTerminal}>[C] Console</button>
            </div>
         </div>
      </nav>
   );
}

export default Header;