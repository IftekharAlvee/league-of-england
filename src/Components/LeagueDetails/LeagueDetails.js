import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailsCard from '../detailsCard/DetailsCard';

const LeagueDetails = () => {
    const {id} = useParams();

    const [leagueInfo, setLeagueInfo] = useState({});
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setLeagueInfo(data.leagues[0]);
            
        })
    },[id])
    console.log(leagueInfo);
    return (
        <div>
            <DetailsCard leagueInfo={leagueInfo}></DetailsCard>
        </div>
    );
};

export default LeagueDetails;