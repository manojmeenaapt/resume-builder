import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import ResumerMaker from './components/resume-maker/ResumeMaker';
import './components/assets/css/layout.css';


function App() {
  return (
    <Provider store={store}>
    <div className="container-fluid">
        <ResumerMaker />
    </div>
    </Provider>
  );
}

export default App;
