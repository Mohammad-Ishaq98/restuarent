import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
const Navigation = () => {
  return (
    <div>
      <Navbar color='dark' className=''>
        <div className="row justify-content-start">
        <NavbarBrand href='/'>   Bohubrihi Restaurent</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;