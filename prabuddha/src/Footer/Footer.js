import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Images/logo.jpg'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function Footer() {
    return (
      <>
      <div class="container">
    <footer class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom align-items-baseline">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
        <span class="fs-4"><img src={logo} className='logo' alt="..."></img></span>
        
      </a>
      
      <p>Copyright © 2025 Team Deadline Tech</p>
      <ul class="nav nav-pills ">
        <li class="nav-item"><a href="#" class="nav-link" aria-current="page"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        
        <li class="nav-item"><a href="#" class="nav-link"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
        
       
      </ul>

      
    </footer>
    </div>
      </>
    );
}

export default Footer;

