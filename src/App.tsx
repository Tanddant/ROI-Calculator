import React from 'react';
import './App.css';

export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = (props: React.PropsWithChildren<IAppProps>) => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          Test
        </header>
      </div>
    </>
  );
};

export default App;