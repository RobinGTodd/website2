import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.scss';
import './logo.svg';

// For custom styling, need to use non react-bootstrap nav components
function Navigation() {
  return (
    <div className='container'>
    <Navbar fixed='top' expand='md'>
        <Navbar.Brand href='/'>
          HomeIcon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/BlogPost'>Blog Post</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href ='/portfolio'>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>

    // <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">Navbar</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Link</a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //             Dropdown
    //           </a>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li><a className="dropdown-item" href="#">Action</a></li>
    //             <li><a className="dropdown-item" href="#">Another action</a></li>
    //             <li><hr className="dropdown-divider" /></li>
    //             <li><a className="dropdown-item" href="#">Something else here</a></li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled">Disabled</a>
    //         </li>
    //       </ul>
    //       <form className="d-flex">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  )


}

export default Navigation;
