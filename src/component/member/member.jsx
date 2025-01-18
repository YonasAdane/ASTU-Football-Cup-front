import React, { useEffect, useState } from 'react';
import './member.css';

const Member = () => {
    const [players, setPlayers] = useState([]);
    const clubData = {
        name: "Software Engineering FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        coach: {
            name: "Pep Guardiola",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wyZ6LtR3CngFsJST2yv8zZfIuF7Ya5FddQ&s",
        },
    };

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch('https://astu-football-cup-api.onrender.com/api/v1/player');
                const data = await response.json();
                setPlayers(data); // Assuming the API returns an array of players
            } catch (error) {
                console.error("Error fetching players:", error);
            }
        };

        fetchPlayers();
    }, []);

    return (
        <div>
            <div id="header">
                <img src={clubData.logo} alt={`${clubData.name} Logo`} id="logo" />
                <h1 id="title">{clubData.name}</h1>
            </div>
            <section id="player-list">
                {/* Coach Card */}
                <div id="coach-card">
                    <img src={clubData.coach.image} alt={clubData.coach.name} />
                    <h3>{clubData.coach.name}</h3>
                    <p>Position: Head Coach</p>
                </div>

                {/* Player Cards */}
                {players.length > 0 ? (
                    players.map((player) => (
                        <div className="player-card" key={player._id}>
                            <img src={player.avatar.url} alt={player.name} />
                            <h3>{player.name}</h3>
                            <p>Position: {player.position}</p>
                            <p>Number: {player.jerseyNumber}</p>
                            
                        </div>
                    ))
                ) : (
                    <p>Loading players...</p>
                )}
            </section>
        </div>
    );
};

export default Member;
