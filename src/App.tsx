import React from 'react';

interface AppProps {
  message: string;
}

const App = ({ message }: AppProps ) => {
  // const { message } = props;
  return <div>{ message }</div>;
};

export default App;
