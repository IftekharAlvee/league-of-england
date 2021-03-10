import React, { useEffect, useState } from 'react';
import { CardColumns,  Container } from 'react-bootstrap';
import League from '../League/League';


// Fetch data from API First time
const Home = () => {

    const [league, setLeague] = useState([]);
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.countrys))
    },[])

    
    return (
        <div>
            
            <Container>
                <CardColumns>
                        {
                            league.map(league => <League league={league} key={league.idLeague} ></League>)
                        }
                </CardColumns>
            </Container>
            
            
        </div>
    );
};

export default Home;