import React from 'react';
import Search from './components/Search';
import Navbar from './components/Navbar';
import FormEntry from "./components/FormEntry"
import List from "./components/List";
import './App.css';

class App extends React.Component {
 

    render() {
        return (
            <div className="ui container">
                <Navbar />
                <Search />   
                <List/>
                <FormEntry/>
            </div>

            
        );
    }
}

export default App;
