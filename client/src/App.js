import React from 'react';
import Search from './components/Search';
import Navbar from './components/Navbar';
import FormEntry from "./components/FormEntry"
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';


class App extends React.Component {
 

    render() {
        return (
            <div className="ui container">
                <Router>
                    <Navbar />

                    <Route path="/review"
                    component={FormEntry}/>

                    <Route path="/search"
                    component={Search}/>
                    
                </Router>
            </div>

            
        );
    }
}

export default App;
