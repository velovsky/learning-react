import React from 'react';
import './Box2.scss';

const Box2: React.FC = () => {
  const [count, setCount] = React.useState(5);

  React.useEffect(() => {
    console.log(count);
  }, []);

  return <div className="Box2">Box2 Component</div>;
};

export default Box2;
