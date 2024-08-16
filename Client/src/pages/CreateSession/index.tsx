import React from 'react';
import SessionForm from '../../components/SessionForm';

const CreateSession: React.FC = () => {
  return (
    <div className='container'>
      <h1 style={{ color: 'black' }}
      >Create Game Session</h1>
      <SessionForm />
    </div>
  );
};

export default CreateSession;
