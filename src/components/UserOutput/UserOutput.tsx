import React from 'react';

interface UserOutputProps {
  username: string;
}

const UserOutput: React.FC<UserOutputProps> = (props: UserOutputProps) => {
  return (
    <div>
      <p>Paragraph 1: {props.username}</p>
      <p>Paragraph 2: {props.username}</p>
    </div>
  );
};

export default UserOutput;
