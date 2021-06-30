import { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchDetailCard.scss';

export const MatchDetailCard = ({teamName, match}) => {
    if (!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const isMatchWon = teamName === match.winner;
    const otherTeamRoute = `/teams/${otherTeam}`;
    return (
        <div className= {isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard lost-card"}>
            <div className="first-section">
                <span className="vs">vs</span> 
                <h1><Link to = {otherTeamRoute}>{otherTeam}</Link></h1>
                <h3 className = "match-date">{match.date}</h3>
                <h3 className = "match-venue">{match.venue}</h3>
                <h5 className = "match-result">{match.winner} won by {match.resultMargin} {match.result}</h5>
            </div>
            <div className="second-section">
                <h3>First Inning</h3>
                <p>{match.team1}</p>
                <h3>Second Inning</h3>
                <p>{match.team2}</p>
                <h3>Man of the Match</h3>
                <p>{match.playerOfMatch}</p>
                <h3>Umpires</h3>
                <p>{match.umpire1}, {match.umpire2}</p>
            </div>
        </div>
    );
}