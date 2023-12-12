import logo from './logo.svg';
import './App.css';
import { Context, createContext, useState } from 'react';
import React from 'react';
import { CodeContext, CodeProvider } from './context/context'
import { Display } from './components/display';
import Input from './components/input';

 const App = function() {
 
  return (
      <CodeProvider>
        <div className="App">
          <Input></Input>
          <Display></Display>
        </div>  
      </CodeProvider>
    
  );
};

export default App;