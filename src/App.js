import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color : '#fff'
};

class Aggregate extends Component{
  render() {
    return(
      <div className="aggregate" style={{...defaultStyle,width:"40%",display:'inline-block'}}>
      <h2 style={{...defaultStyle,width:"40%",display:'inline-block'}}>number text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return(
      <div>
        <img/>
        <input type ="text"/>
      </div>

    );
   }
}


class Playlist extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width:'25%', display :'inline-Block'}}> 
        <img/>
        <h3>Playlist name</h3>
        <ul>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
        </ul>
      </div>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor:'rgb(55,55,55)'}}>
        <h1>Title</h1>
        <Aggregate  />
        <Aggregate  />
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
