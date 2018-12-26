import { MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './icon_bank-alfa_l_white.svg';
import './Header.css';

class FixedNavbarExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        const bgDark = { backgroundColor: '#1C2331' }
        const container = { height: 1300 }
        return (
            <div>
                <Router>
                    <header>

                        <MDBNavbar style={bgDark} dark expand="md" scrolling fixed="top">
                            <MDBContainer>
                                <MDBNavbarBrand href="/">
                                    <img src={logo} alt="alfa" />
                                    <strong>Cloud</strong>
                                </MDBNavbarBrand>
                                <MDBNavbarToggler onClick={this.onClick} />
                                <MDBCollapse isOpen={this.state.collapse} navbar>
                                    <MDBNavbarNav left>
                                        <MDBNavItem active>
                                            <MDBNavLink to="#">Подписки</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#">Управления VM</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#">Калькулятор</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#">Полезная информация</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#">Магазин</MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                    <MDBNavbarNav right>
                                        <MDBNavItem>
                                            <MDBNavLink to="#"><MDBIcon icon="cloud" /></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#"><MDBIcon icon="cog" /></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#"><MDBIcon icon="info-circle" /></MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                    </header>
                </Router>
                <MDBContainer style={container} className="text-center mt-5 pt-5">
                    <h2>This Navbar is fixed</h2>
                    <h5>It will always stay visible on the top, even when you scroll down</h5>
                    <br />
                    <p>Full page intro with background image will be always displayed in full screen mode, regardless of device</p>
                </MDBContainer>
            </div>
        );
    }
}

export default FixedNavbarExample;