import React, { Component } from "react";
import '../error.css';
import { Link } from 'react-router-dom';

class Err401 extends Component {

    move = () => {
        var container = document.getElementById('container');
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

                <div id="container" onMouseMove={this.move}>
                    <div className="content">
                        <h2>401</h2>
                        <h4>Woah speedy slow down there</h4>
                        <p>Unauthorized please provide valid credentials to access this page</p>
                            <div>{ <Link to="/">Go Back</Link> }</div>
                    </div>
                </div>
            </>
        )
    }
}


export default Err401;