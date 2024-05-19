import React from 'react'
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow} from "mdb-react-ui-kit";

export default function Products() {
    return (
        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
            <MDBCol>
                <MDBCard>
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard>
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard>
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard>
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}
