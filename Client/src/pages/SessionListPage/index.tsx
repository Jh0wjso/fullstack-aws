import React from 'react';
import SessionList from '../../components/SessionList';
import './styles.css';

const SessionListPage: React.FC = () => {
  return (
    <div className='sessionaListContainer'>
      <h1>All Game Sessions</h1>
      <SessionList />
    </div>
  );
};

export default SessionListPage;
