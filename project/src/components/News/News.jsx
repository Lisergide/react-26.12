import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import './News.css';

const ListGroupPage = props => {
    return (
        <MDBContainer>
            <MDBListGroup style={{ width: "22rem" }}>
            <h2>Новости</h2>
                <MDBListGroupItem active href="#" style={{ backgroundColor: '#F04539' }}>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small style={{ color: '#fff' }}>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.</p>
                    <small style={{ color: '#fff' }}>Donec id elit non mi porta.</small>
                </MDBListGroupItem>
                <MDBListGroupItem hover href="#">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </MDBListGroupItem>
                <MDBListGroupItem hover href="#">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </MDBListGroupItem>
                <MDBListGroupItem hover href="#">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </MDBListGroupItem>
                <MDBListGroupItem hover href="#">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </MDBListGroupItem>
                <MDBListGroupItem hover href="#">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </MDBListGroupItem>
            </MDBListGroup>
        </MDBContainer>
    );
};

export default ListGroupPage;