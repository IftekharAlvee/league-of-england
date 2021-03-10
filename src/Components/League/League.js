
import React from 'react';
import { Button , Card } from 'react-bootstrap';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';

const League = (props) => {
    console.log(props.league);
    const {strLeague,strBadge,strSport,idLeague} = props.league;
    // const handleLeage = props.handleLeage;
    const history = useHistory();

    const getId = (id) => {
        const url = `/home/${id}`;
        history.push(url);
    }
    return (
        <div>
            <Card>
                <Card.Img variant="top" style={{width: ''}} src={strBadge} />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                        Sports type: {strSport}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={() => getId(idLeague)} variant="primary">Details  <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default League;