import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Header/>
      <div className="Body"/>
      <Footer/>
    </div>
  );
}
