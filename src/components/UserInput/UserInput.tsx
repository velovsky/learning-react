import React from 'react';
import PropTypes from 'prop-types';
import './UserInput.scss';

interface UserInputProps {
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInput: React.FC<UserInputProps> = (props) => {
  return (
    <div className="user-input">
      <input onChange={props.change} type="text"></input>
    </div>
  );
};

UserInput.propTypes = {
  change: PropTypes.func.isRequired,
};

export default UserInput;
