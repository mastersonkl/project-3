import React from 'react';
import { useHistory } from "react-router-dom";


function Home() {

    let history = useHistory()

    return (

        <div class="ui container">


            <h1 class="ui center header"><div class="content">WELCOME TO RATE YOUR LANDLORD<div class="sub header">Choose what to do first!</div></div></h1>


            <button floated='right' className="ui massive yellow submit button"><i className="comment outline icon"></i> Rate a Landlord </button>
            <button floated='left' className="ui massive yellow submit button"><i className="building outline icon"></i>  Find a Landlord </button>



        </div>

    )
}

export default Home;