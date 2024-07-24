import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../services/recommendationService';
import { useAuth } from '../context/AuthContext';

const Recommendations = () => {
    const { user } = useAuth();
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const data = await getRecommendations(user.id);
                setRecommendations(data);
            } catch (error) {
                console.error('Failed to fetch recommendations:', error);
            }
        };

        if (user) {
            fetchRecommendations();
        }
    }, [user]);

    return (
        <div>
            <h2>Recommendations</h2>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;
