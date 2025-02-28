import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Images/logo.jpg'

function Header() {
    return (
      <>
      <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom align-items-baseline">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
        <span class="fs-4"><img src={logo} className='logo' alt="..."></img></span>
        
      </a>

      <ul class="nav nav-pills ">
      <Link to="/register">
        <li class="nav-item"><a href="#" class="nav-link" aria-current="page">Register Now</a></li>
        </Link>
        <Link to="/event">
        <li class="nav-item"><a href="#" class="nav-link">View Events</a></li>
        </Link>
        
        
        {/* <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li> */}
        <Link to="/about">
            <li class="nav-item"><a href="#" class="nav-link">About us</a></li>
        </Link>

        <li class="nav-item"><a href="#" class="nav-link">contact us</a></li>

        {/* <li class="nav-item"><a href="#" class="nav-link">About us</a></li> */}
      </ul>
    </header>
    </div>
      </>
    );
}

export default Header;

