import React, { useState } from 'react';
import { createSession } from '../../services/api';

const SessionForm: React.FC = () => {
  const [hostname, setHostname] = useState('');
  const [players, setPlayers] = useState(1);
  const [map, setMap] = useState('');
  const [mode, setMode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createSession({ hostname, players, map, mode });
      alert('Sessão criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar a sessão:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Hostname:</label>
        <input
          type="text"
          value={hostname}
          onChange={(e) => setHostname(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Players:</label>
        <input
          type="number"
          value={players}
          onChange={(e) => setPlayers(Number(e.target.value))}
          min="1"
          required
        />
      </div>
      <div>
        <label>Map:</label>
        <input
          type="text"
          value={map}
          onChange={(e) => setMap(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Mode:</label>
        <input
          type="text"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Session</button>
    </form>
  );
};

export default SessionForm;
