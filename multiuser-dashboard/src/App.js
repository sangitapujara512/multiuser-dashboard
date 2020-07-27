import React from 'react';
import './App.css';
import Login from './components/Login'
import store from './store'
import { Provider } from 'react-redux';
import {
  Route,
  Switch,  
  BrowserRouter,
} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
// import PatientProfile from './components/PatientProfile'
// import PatientList from './components/PatientList'
import Home from './components/Home'
import ComponentNotFound from './components/ComponentNotFound'

function App() {  
  return (
    <div className="App externalContainer">
      <Provider store={store}>
      <ToastProvider>
      <BrowserRouter>
      <Switch>  
      
      <Route path='/' exact component={Login} />   
      <Route path='/home' exact component={Home} />   
      {/* <Route path='/patientprofile' exact component={PatientProfile} />
      <Route path='/patientlist' exact component={PatientList} /> */}
      <Route path='*' component={ComponentNotFound} />
      </Switch>
      </BrowserRouter>
      </ToastProvider>
      </Provider>
    </div>
  );
}

export default App;
