import React from 'react';

const Impact = () => {
    return (
        <div className="container" style={{ padding: '40px 20px' }}>
            <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Impact Dashboard</h2>
                <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
                    At SyncBite, we believe that food should fill bellies, not landfills.
                    By connecting local restaurants with surplus food to NGOs and communities in need,
                    we are creating a sustainable cycle of giving. Every meal saved is a step towards
                    a hunger-free world and a healthier planet. Join us in making a difference today.
                </p>

                <div className="stats-grid" style={{ marginTop: '40px', textAlign: 'left' }}>
                    <div className="card stat-card" style={{ boxShadow: 'none', border: '1px solid #eee' }}>
                        <h3>Total Meals Saved</h3>
                        <div className="value">1,245</div>
                    </div>
                    <div className="card stat-card" style={{ boxShadow: 'none', border: '1px solid #eee' }}>
                        <h3>People Fed</h3>
                        <div className="value">3,500+</div>
                    </div>
                    <div className="card stat-card" style={{ boxShadow: 'none', border: '1px solid #eee' }}>
                        <h3>NGOs Connected</h3>
                        <div className="value">12</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impact;
