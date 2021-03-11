import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';
import { Container } from 'react-bootstrap';
import WrongUrl from './Components/WrongUrl/WrongUrl';




function App() {
  return (
    <div>
      <Router>
            {/* Sticky part */}
              <Container className="topBanner" fluid>

                  <div className="main-div">
                    <div>
                        <h1>League's of England</h1>
                    </div>
                  </div>

              </Container>

            {/* Dynamic part */}
              <Container  className="preview" fluid>
                  <Switch>
                      <Route exact path="/home">
                      <Home></Home>
                    </Route>
                    <Route exact path="/">
                      <Home></Home>
                    </Route>
                    <Route path="/home/:id">
                        <LeagueDetails></LeagueDetails>
                    </Route>
                    <Route path="*">
                        <WrongUrl></WrongUrl>
                    </Route>
                  </Switch>
              </Container>  
      </Router>
        
    </div>
  );
}

export default App;
