
import './App.css';
import Page from './home';
import User from './user';
import Disp from './component/displaydetails'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div >
        <div >
          <ul>
            <li>
              <Link to="/home">HOME</Link>

            </li>
            <li>
              <Link to="/user">USER</Link>
            </li>
            <li>
              <Link to="/data">DETAILS</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path='/home' component={Page}></Route>
            <Route exact path='/user' component={User}></Route>
            <Route exact path='/data:id' component={Disp}></Route>
            {/* <Link to='/data' component={Disp}></Link> */}
          </Switch>
        </div>
      </div>
    </Router> 


  );
}

export default App;
