import './App.css';
import NewMatche from './Components/NewMatche';
import Appbar from './Components/Appbar';
import Openers from './Components/Openers';
import LiveMatch from './Components/LiveMatch';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Game from './Components/Tictocgame';
import Byredux from './Components/Byredux';
import Form from './Components/Form';
import LiveMatchs from './Components/LiveMatchs';
import Scoreboard from './Components/Scoreboard';
import Retire from './Components/Retire';
import Fallofwicket from './Components/Fallofwicket';

const data = {
  "home" : {"homeHeading" : "Cricket",
  "homeSubheading" : "scrorer",},
  "openers":{"openersHeading":"Select Openers",},
  "graph":{"graph":"Analysis",}
  
}

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar />
        {/* <Fallofwicket /> */}

        {/* <Form />  */}
        {/* <Byredux /> */}
        {/* <Game /> */}
        <Routes>
          <Route path="/" element={<NewMatche data={data.home}/>} />
          <Route path="/retire" element={<Retire/>} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route exact path="/openers"  element={<Openers data={data.openers}/>} />
          <Route exact path="/livematch" element={<LiveMatch/>} />
          <Route exact path="/livematchs" element={<LiveMatchs/>} />
          <Route exact path="/fallofwicket" element={<Fallofwicket/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
