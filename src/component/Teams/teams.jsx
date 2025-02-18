import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './teams.css';

const teams = [
    { id: 1, name: 'Manchester City', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg', description: 'Premier League champions.' },
    { id: 2, name: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg', description: 'Six-time Champions League winners.' },
    { id: 3, name: 'Chelsea', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg', description: 'FA Cup and Champions League winners.' },
    { id: 4, name: 'Manchester United', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg', description: '20-time league champions.' },
    { id: 5, name: 'Arsenal', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg', description: '13-time league champions.' },
    { id: 6, name: 'Tottenham Hotspur', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg', description: 'Known for attacking play.' },
    { id: 7, name: 'Leicester City', logo: 'https://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png', description: '2016 Premier League winners.' },
    { id: 8, name: 'West Ham United', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg', description: 'The Hammers.' },
];

const PremierLeagueTeams = () => {
    const navigate = useNavigate();
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const x = e.pageX;
        const y = e.pageY;
        setCursorPosition({ x, y });
    };

    const handleTeamClick = (team) => {
        localStorage.setItem('selectedTeam', JSON.stringify(team));
        navigate('/member');
    };

    useEffect(() => {
        if (isHovering) {
            window.addEventListener('mousemove', handleMouseMove);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
        }
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isHovering]);

    return (
        <div className="team-list">
            {teams.map((team) => (
                <div
                    key={team.id}
                    className="team-card"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => handleTeamClick(team)}
                >
                    <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />
                    <h3 className="team-name">{team.name}</h3>
                    <p className="team-description">{team.description}</p>
                </div>
            ))}
            {isHovering && (
                <div
                    className="cross-effect"
                    style={{
                        left: cursorPosition.x,
                        top: cursorPosition.y,
                    }}
                ></div>
            )}
        </div>
    );
};

export default PremierLeagueTeams;
