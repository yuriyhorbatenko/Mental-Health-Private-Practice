import React, { Component } from "react";
import '../error.css';
import { Link } from 'react-router-dom';

class Err404 extends Component {

    move = () => {
        var container = document.getElementById('containerb');
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
                <div id="containerb" onMouseMove={this.move}>
                    <div className="content">
                        <h2>404</h2>
                        <h4>Oops the page youre looking for was lost in space</h4>
                        <p>Either the address is incorrect or the page was removed</p>
                        <div>{ <Link to="/">Go Back</Link> }</div>
                    </div>
                </div>
            </>
        )
    }
}
export default Err404;
