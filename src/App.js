import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import ResumerMaker from './components/resume-maker/ResumeMaker';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <ResumerMaker />
    </div>
    </Provider>
  );
}

export default App;
