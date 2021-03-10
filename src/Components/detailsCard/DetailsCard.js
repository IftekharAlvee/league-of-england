import React from 'react';
import maleImages from '../../assets/img/male.png';
import femaleImages from '../../assets/img/female.png';
import mixedImage from '../../assets/img/Rectangle 28.png';
import { Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { faMale , faFemale, faHourglassStart , faFlag , faFutbol, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer';

const DetailsCard = (props) => {
    const info = props.leagueInfo;
    const {intFormedYear,strCountry,strSport,strGender,strBanner,strDescriptionEN,strLeague,strBadge} = info;
        const gender = strGender;

        // Conditional Formatting with if-else
        let imgSrc;
        if (gender === "Male") {
              imgSrc= maleImages;
        }
        else if (gender === "Female") {
            imgSrc= femaleImages;
        }
        else if(gender === "Mixed") {
            imgSrc= mixedImage;
        }
        
        // img Style
        const imgStyle = {
            marginTop : "50px",
            marginBottom : "50px",
            textAlign : "center",
            color : "white"
        } 

    return (
        <div>

            <Container style={imgStyle}>
                <Image src={strBadge} fluid alt="Wait for loading or image not found, Try Another" />     
            </Container>
            

            <Container style={{backgroundColor: '#faf6f6', padding : '10px', borderRadius : '15px'}}>
                    <Row>
                        <Col sm={8}>
                            <ListGroup>
                                <ListGroup.Item> <FontAwesomeIcon icon={faStarOfLife} /> Name: {strLeague} </ListGroup.Item>
                                <ListGroup.Item> <FontAwesomeIcon icon={faHourglassStart} /> Founded: {intFormedYear} </ListGroup.Item>
                                <ListGroup.Item> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry} </ListGroup.Item>
                                <ListGroup.Item> <FontAwesomeIcon icon={faFutbol} /> Sports type: {strSport} </ListGroup.Item>
                                <ListGroup.Item> {gender === 'Male' ? <FontAwesomeIcon icon={faMale} /> : <FontAwesomeIcon icon={faFemale} /> }  Gender: {strGender} </ListGroup.Item>
                            </ListGroup>
                        </Col>

                        <Col sm={4}>     
                            <Image src={imgSrc} fluid />
                        </Col>
                    </Row>
            </Container>


            <Container style={imgStyle}>
                <Image src={strBanner} fluid alt="Wait for loading or image not found, Try Another" />     
            </Container>

            <Container style={{color: 'white', padding: '20px'}}>
                <div>
                    <h5>Description:</h5>
                    <p>{strDescriptionEN}</p>
                </div>
            </Container>

            <Footer></Footer>

        </div>
    );
};

export default DetailsCard;