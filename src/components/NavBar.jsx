import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn, MDBInputGroup
} from 'mdb-react-ui-kit';

export default function NavBar() {
    return (
        <MDBNavbar fixed='top' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                    <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
                    <MDBBtn outline>Search</MDBBtn>
                </MDBInputGroup>
            </MDBContainer>
        </MDBNavbar>
    );
}