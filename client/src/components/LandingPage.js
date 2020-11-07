import React from 'react';
import { useHistory } from "react-router-dom";


function Home() {

    let history = useHistory()

    return (
<div>
       
            
             <div class="ui centered column grid">
            <h1 className="ui center header"><div className="content">WELCOME TO RATE YOUR LANDLORD<div className="sub header">Choose what to do first!</div></div></h1>
            </div>



            <div class="ui centered column grid">
            <button onClick ={() => history.push("/review")} floated='right' className="ui massive yellow submit button"><i className="comment outline icon"></i> Rate a Landlord </button>
            <button onClick ={() => history.push("/search")} floated='left' className="ui massive yellow submit button"><i className="building outline icon"></i>  Find a Landlord </button>
            </div>
           

        </div>

    )
}

export default Home;