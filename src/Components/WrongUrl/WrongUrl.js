import React from 'react';
import { Container } from 'react-bootstrap';

const WrongUrl = () => {
    const textStyle={
        textAlign: 'center',
        color: 'white', 
        fontWeight: 'bold',
        height: '50vh'
    }
    return (
        <div>
            <Container style={textStyle}>
                    <h1>You have entered a wrong Url!</h1>
                    <br/>
                    <small>Pleasr try a valid Url</small>
            </Container>
        </div>
    );
};

export default WrongUrl;