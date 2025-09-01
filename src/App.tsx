import React, { useState } from 'react';
import { MatchRequest } from './types';

function App() {
  const [requests, setRequests] = useState<MatchRequest[]>([]);
  const [team, setTeam] = useState('');
  const [datetime, setDatetime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const match = requests.find(r => r.datetime === datetime);
    if (match) {
      setMessage(`Matched ${team} with ${match.team} on ${new Date(datetime).toLocaleString()}`);
      setRequests(requests.filter(r => r.id !== match.id));
    } else {
      const newRequest: MatchRequest = {
        id: Date.now(),
        team,
        datetime,
      };
      setRequests([...requests, newRequest]);
      setMessage('Waiting for opponent...');
    }
    setTeam('');
    setDatetime('');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>MeetPoint</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Team Name:
            <input value={team} onChange={e => setTeam(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Date & Time:
            <input type="datetime-local" value={datetime} onChange={e => setDatetime(e.target.value)} required />
          </label>
        </div>
        <button type="submit">Find Match</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
