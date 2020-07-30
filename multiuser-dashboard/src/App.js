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
import Home from './components/Home'
import ComponentNotFound from './components/ComponentNotFound'

function App() {  
  return (
    <div className="App">
      <Provider store={store}>
      <ToastProvider>
      <BrowserRouter>
      <Switch>  
      
      <Route path='/' exact component={Login} />   
      <Route path='/home' exact component={Home} />   
     
      <Route path='*' component={ComponentNotFound} />
      </Switch>
      </BrowserRouter>
      </ToastProvider>
      </Provider>
    </div>
  );
}

export default App;
