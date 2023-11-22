import React from 'react';
import '../App.css';
import { forwardRef } from 'react';

const Analysis = ({text}, ref) => {
    return (
        <div id="main-container">
            <div id="title-container">
                <h1 ref={ref}>{text}</h1>
            </div>
            <hr id="under-bar"></hr>
            <div id="content-container">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet viverra diam. Etiam laoreet turpis a commodo ultrices. In velit tellus, pellentesque quis turpis ac, aliquet fringilla mi. Curabitur nec ligula vulputate, sagittis felis vitae, cursus mi. Vestibulum pellentesque magna eget urna facilisis aliquet. Quisque vitae iaculis enim, vel volutpat orci. Proin felis neque, interdum eget aliquam eu, efficitur eget justo. Aliquam eget velit lorem. Quisque at fringilla mauris. Vivamus egestas id purus sed elementum. Sed varius hendrerit lacinia. Integer egestas ipsum vel lorem aliquet faucibus.
                </p>
            </div>
            <div id="bias-container">
                <h3 id="bias-title">Bias Bar:</h3>
                <div id="rectangle"></div>

            </div>
        </div>
    )
};

export default forwardRef(Analysis);