import React from 'react';
import facebook from '../../assets/Icon/Facebook.png';
import twitter from '../../assets/Icon/Twitter.png';
import youtube from '../../assets/Icon/YouTube.png';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

    
    const imgStyle = {
        width: '10%',
        marginRight: '5px'
    }
    return (
        <Container>
            <div >
                <Link to="" ><Image style={imgStyle} src={twitter} fluid /></Link>
                <Link to="" ><Image style={imgStyle} src={facebook} fluid /></Link>
                <Link to="" ><Image style={imgStyle} src={youtube} fluid /></Link>
            </div>
        </Container>
    );
};

export default Footer;