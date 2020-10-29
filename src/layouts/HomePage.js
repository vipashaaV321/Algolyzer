import React,{useState} from 'react'
import { Link} from 'react-router-dom'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
// import "./layout.css"
const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
      <>
       <Navbar dark expand="md" style={{backgroundColor:"#668cff"}}>
        <NavbarBrand href="/" style={{color:'#fff'}}>Algolyzer</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        {/* <Collapse isOpen={isOpen} navbar> */}
          {/* <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav> */}
          <NavbarText style={{marginLeft:"auto"}}>  <Link to="Algolyzer" > Go to Tutorials</Link></NavbarText>
        {/* </Collapse> */}
      </Navbar> 
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              
              <div class="col-lg-6 order-2 order-lg-1 header-img">
                <img src="https://i.pinimg.com/564x/ac/5e/ca/ac5ecadbed61d81f917b22c84796f218.jpg" className="img-fluid animated" alt="home-img"/>
                {/* https://i.pinimg.com/564x/ac/5e/ca/ac5ecadbed61d81f917b22c84796f218.jpg */}
              </div>
              <div className="col-lg-6 pt-3 pt-lg-5 order-1 order-lg-2 d-flex justify-content-center flex-column text-center">
                
                <h1><strong className="brand-name text-center">Algolyzer</strong> </h1>
                <h6 className="my-3">
            A portal for Engineering & Computer Science Students,tech enthusiast, competitive exam Aspirants
                </h6>
                <div className="mt-3">
                 <Link to="Algolyzer" className="btn btn-lg" id="b" style={{backgroundColor:"#668cff",color:"#fff",borderRadius:"30px",paddingLeft:"30px",paddingRight:"30px",marginBottom:"10px"}}> Go to Tutorials</Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
    )
}

export default HomePage
