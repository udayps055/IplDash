import { React } from 'react';
import { Link } from 'react-router-dom';

export const MatchDetailCard = ({teamName, match}) => {
    if (!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    return (
        <div className="MatchDetailCard">
        <h1> Latest Matches</h1>
        <h2>vs <Link to = {otherTeamRoute}>{otherTeam}</Link></h2>
        <h3>{match.date}</h3>
        <h3>{match.venue}</h3>
        <h5>{match.winner} won by {match.resultMargin} {match.result}</h5>
        </div>
    );
}