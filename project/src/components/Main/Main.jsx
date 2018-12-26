import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { PureComponent } from 'react';
import ListGroupPage from '../News';
import SimpleTabs from '../TabsPage';
import ChartsPage from '../LineChart';
import CardSection from '../Card';
import './Main.css';

export default class Main extends PureComponent {
render() {
    return(
        <main>
            <h2 style={{marginBottom: "40px"}}>Мои ресурсы в облаке</h2>
        <MDBContainer>
                <SimpleTabs />
            <MDBRow>
                <MDBCol md="9">
                <ChartsPage />
                </MDBCol>
                <MDBCol md="3"><ListGroupPage /></MDBCol>
            </MDBRow>
        </MDBContainer>
        </main>
    )
}
}