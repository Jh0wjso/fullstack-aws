import React from 'react';
import SessionList from '../../components/SessionList';

const SessionListPage: React.FC = () => {
  return (
    <div className='container'>
      <h1>All Game Sessions</h1>
      <SessionList />
    </div>
  );
};

export default SessionListPage;
