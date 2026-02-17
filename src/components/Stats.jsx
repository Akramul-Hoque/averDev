import React, { useState, useEffect } from 'react';

const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(end * percentage));

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
};

const Stats = () => {
    const clients = useCounter(120); // Random-ish number for clients
    const team = useCounter(25);     // Random-ish number for team

    return (
        <section className="section-padding bg-section-ash text-light" style={{ borderTop: '1px solid #333', borderBottom: '1px solid #333' }}>
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item">
                        <i className="fas fa-users" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1rem' }}></i>
                        <h2 style={{ fontSize: '3.5rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>{clients}+</h2>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)' }}>Happy Clients</p>
                    </div>
                    <div className="stat-item">
                        <i className="fas fa-user-shield" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1rem' }}></i>
                        <h2 style={{ fontSize: '3.5rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>{team}+</h2>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)' }}>Expert Team Members</p>
                    </div>
                    <div className="stat-item">
                        <i className="fas fa-project-diagram" style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1rem' }}></i>
                        <h2 style={{ fontSize: '3.5rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>{useCounter(50)}+</h2>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)' }}>Projects Completed</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 30px;
                    text-align: center;
                }
                .stat-item {
                    padding: 20px;
                    transition: transform 0.3s ease;
                }
                .stat-item:hover {
                    transform: translateY(-10px);
                }
            `}</style>
        </section>
    );
};

export default Stats;
