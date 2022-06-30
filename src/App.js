import color from './colorchase.svg'
import table from './color.svg'
import palette from './palette.png'
import check from './check.png'
import red from './colors/reddot.svg'
import blue from './colors/bluedot.svg'
import yellow from './colors/yellowdot.svg'
import green from './colors/greendot.svg'
import purple from './colors/purpledot.svg'
import orange from './colors/orangedot.svg'
import dblue from './colors/dbluedot.svg'
import black from './colors/blackdot.svg'

import './App.css';

function App() {

  const colors = [ red, blue, green, yellow, purple, orange, dblue, black ]
  
  function random_color(colors){
    var bag = [];
    while (bag.length < 4) {
      bag.push(Math.floor(Math.random()*8))
     }
  return bag
  }
console.log(random_color(colors))

  return (
    <div className="App">
      <img className="items" src={color} style={{padding:'30px'}}></img>
      <img className="items" src={table} style={{height: '600px', paddingBottom: '10px'}} ></img>
      <div>   
          <img className="dots" src={red}></img>
          <img className="dots1" src={blue}></img>
          <img className="dots2" src={yellow}></img>
          <img className="dots3" src={green}></img>
          <img className="dots4" src={purple}></img>
          <img className="dots5" src={orange}></img>
          <img className="dots6" src={dblue}></img>
          <img className="dots7" src={black}></img>
      </div>
      <img className="items" src={palette}></img>
      <button className="button" src={check} style={{paddingTop: '5px', paddingBottom:'40px', width: '350px', height: '50px'}}><b>C H E C K</b></button>
    </div>
  );
}

export default App;
