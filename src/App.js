
import './App.css';
import Dashboard from './Dashboard';
import Container from 'react-bootstrap/Container';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Buttons from './buttons';
import { Button, Card } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CardsContainer from './cards';
import Colors from './color';
import { Border } from 'react-bootstrap-icons';
import Borders from './borders';
import Animations from './animations';
import Others from './others';
import Pages from './Pages';



function App() {
  const history = useHistory();
  
  return (
    <div className="main-container container-fluid">
      <div className="top-bar">
                <div className="search-bar">
                    <InputGroup className="search-field">
                        <Form.Control
                            placeholder="Search for..."
                        />
                        <Button className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></Button>
                    </InputGroup>
                </div>
                <div className="notifications">
                    Notifications
                </div>
            </div>
      <div className='side-bar'>
      <div className='inner-side-bar'>
        <h1> <i class="fas fa-laugh-wink"></i>SB ADMIN</h1>
        <span 
        className="nav-buttons side-bar-content"
        onClick={()=>history.push("/")
        }
        >DashBoard
        </span>
        <div className='nav-buttons side-bar-content' onClick={()=> document.querySelector('.collapse-components').classList.toggle('collapse-components-show')}>
          <span className='padding'>
          Components
          </span >
          <div className='collapse-components padding'>
          <span className='padding'
          onClick={()=>history.push("/buttons")
        }
        >Buttons
        </span>
        <span className='padding'
        onClick={()=>history.push("/cards-container")
        }
        >Cards
        </span>
        </div>
        </div> 
        <div className='utilities nav-buttons side-bar-content' onClick={()=> document.querySelector('.collapse-utilities').classList.toggle('collapse-utilities-show')}>
          <span className='padding'>
          Utilities
          </span>
          <div className='collapse-utilities'>
          <span className='padding'
           onClick={()=>history.push("/colors")
           }
        >Colors
        </span>
        <span className='padding'
        onClick={()=>history.push("/borders")
        }
        >Borders
        </span>
        <span className='padding'
        onClick={()=>history.push("/animations")
        }
        >Animations
        </span>
        <span className='padding'
        onClick={()=>history.push("/others")
        }
        >Others
        </span>
        </div>
        </div>
        <span 
        className="nav-buttons side-bar-content"
        onClick={()=>history.push("/pages")
        }
        >Pages
        </span>
        </div>
      </div> 
      
      <div className='sub-container'>
        <Switch>
          <Route exact path = "/">
            <Dashboard/>
          </Route>

          <Route exact path = "/buttons">
            <Buttons/>
          </Route>

          <Route exact path = "/cards-container">
            <CardsContainer/>
          </Route>

          <Route exact path = "/colors">
            <Colors/>
          </Route>

          <Route exact path = "/borders">
            <Borders/>
          </Route>

          <Route exact path = "/animations">
            <Animations/>
          </Route>

          <Route exact path = "/others">
            <Others/>
          </Route>

          <Route exact path = "/pages">
            <Pages/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

