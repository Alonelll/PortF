import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './NavBar.css';  // Import your CSS file here
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn, MDBInputGroup, MDBIcon, MDBNavbarItem
} from 'mdb-react-ui-kit';

export default function NavBar() {
    return (
        <MDBNavbar fixed='top' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href=''>Home</MDBNavbarBrand>
                <div className="centered-container">
                    <img className='centered' src='./assets/result.png' width={60} height={60} alt='Dein Späti'/>
                </div>
                <MDBInputGroup tag="form" className='d-flex w-auto mb-3 ml-auto '>
                    <img src="/Users/ra7eem./Desktop/Projects/PortF/public/assets/result.png" alt=""/>
                    <input className='form-control' placeholder="Type query" aria-label="Search" type='Search'/>
                    <MDBBtn outline>Search</MDBBtn>
                </MDBInputGroup>
            </MDBContainer>
        </MDBNavbar>
    );
}
