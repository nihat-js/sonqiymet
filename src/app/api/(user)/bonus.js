// pages/bonus.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const BonusPage = () => {
  const [hasCollected, setHasCollected] = useState<boolean | null>(null);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkBonusStatus = async () => {
      try {
        const response = await axios.get('/api/checkBonusStatus');
        setHasCollected(response.data.hasCollected);
      } catch (error) {
        setMessage('Error fetching bonus status');
      }
    };

    checkBonusStatus();
  }, []);

  const handleCollectBonus = async () => {
    try {
      const response = await axios.post('/api/collectBonus');
      setMessage(response.data.message);
      setHasCollected(true); // Bonus collected successfully
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Daily Bonus</h1>
      {hasCollected === null ? (
        <p>Loading...</p>
      ) : hasCollected ? (
        <p>You have already collected your bonus today!</p>
      ) : (
        <div>
          <button onClick={handleCollectBonus}>Collect 20 Stars</button>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default BonusPage;
