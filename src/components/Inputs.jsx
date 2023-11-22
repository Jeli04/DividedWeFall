import '../App.css';
import React from 'react';

const Inputs = ({ ScrollClick }) => {

    return (
        <div id="input-container">
            <label id="explain">
            Twitter Link Entry
            </label>
            <hr id="main-title-bar"></hr>
            <form id="form-container">
                <input placeholder='Input Twitter Link' type="text" id="ip2"/>
            </form>
            <button onClick={ScrollClick} id="submit-button">Submit Link</button>
            
            <h3 id="main-title-sub2">Why Twitter Links?</h3>
            <p id="main-title-sub">
            The reason why we are asking for the twitter link is so we can determine political sentiment within the tweet. We train our model using datasets scrapped from twitter and the wider web. We use certain vocbulary from within the tweet to create an idea of what the political bias maybe within the tweet. We will also allow you to pivot the bias slider, which will allow you to adjust the tweet bias scale catering to your political preferences. We don't want the model to tell you what is what, so this will allow you to determine political sentiment on your OWN terms.
            </p>

            <div id="grid-container">
                <div id="column-1">
                    <div id="grid-1">Our Process</div>
                </div>
                <div id="column-2">
                    <div id="grid-2"></div>
                    <div id="grid-3"></div>
                    <div id="grid-4"></div>
                    <div id="grid-5"></div>

                </div>
            </div>  
        
     
        </div>

        
    
    )
};

export default Inputs;




