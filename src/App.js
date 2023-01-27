import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="main">
                <h2 className="main-header">React Crud Operations</h2>
                <div style={{ marginTop: 20 }}>
                    <Route exact path='/' component={Read} />
                </div>
                <div>
                    <Route exact path='/create' component={Create} />
                </div>
                <Route path='/update' component={Update} />
            </div>
        </Router>
    );
}

export default App;
