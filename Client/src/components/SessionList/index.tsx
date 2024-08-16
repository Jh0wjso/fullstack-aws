import React, { useEffect, useState } from "react";
import { fakeSessions } from "../../services/mockdata";
import "./styles.css";

interface Session {
  sessionId: string;
  hostname: string;
  players: number;
  map: string;
  mode: string;
}

const SessionList: React.FC = () => {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    // Simulando a busca dos dados fakes
    const fetchSessions = () => {
      setSessions(fakeSessions);
    };

    fetchSessions();
  }, []);

  return (
    <div className="sessionListTable">
      <table className="table">
        <thead className="thead-dark">
          <tr className="tableHeader">
            <th>Hostname</th>
            <th>Players</th>
            <th>Map</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {sessions.map((session) => (
            <tr key={session.sessionId} className="tableRow">
              <td>{session.hostname}</td>
              <td>{session.players}</td>
              <td>{session.map}</td>
              <td>{session.mode}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  );
};

export default SessionList;


/*import React, { useEffect, useState } from 'react';
import { getSessions } from '../../services/api';

interface Session {
  sessionId: string;
  hostname: string;
  players: number;
  map: string;
  mode: string;
}

const SessionList: React.FC = () => {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await getSessions();
        setSessions(response.data);
      } catch (error) {
        console.error('Erro ao buscar sessões:', error);
      }
    };

    fetchSessions();
  }, []);

  return (
    <div>
      <h2>Game Sessions</h2>
      <ul>
        {sessions.map((session) => (
          <li key={session.sessionId}>
            Hostname: {session.hostname}, Players: {session.players}, Map: {session.map}, Mode: {session.mode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionList;*/
