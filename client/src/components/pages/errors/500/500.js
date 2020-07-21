import React, { Component } from "react";
import '../error.css';
import { Link } from 'react-router-dom';

class Err500 extends Component {

    move = () => {
        var container = document.getElementById('containerc');
        window.onmousemove = function (e) {
            var x = - e.clientX / 5,
                y = - e.clientY / 5;
            container.style.backgroundPositionX = x + 'px';
            container.style.backgroundPositionY = y + 'px';
        }
    }
    render() {
        return (
            <>
                <div id="containerc" onMouseMove = {this.move}>
                        <div className="content">
                            <h2>500</h2>
                            <h4>Oops looks like an error on our part</h4>
                            <p>Server error try going back at trying again</p>
                            <div>{ <Link to="/">Go Back</Link> }</div>
                        </div>
                    </div>
            </>
        )
    }
}

export default Err500;