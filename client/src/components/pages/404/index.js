import React, { Component } from "react";
import './404.css';

class Oops extends Component {
    render() {
        <div id="container">
            <div className="content">
                <h2>404</h2>
                <h4>Oops the page youre looking for was lost in space</h4>
                <p>Either the address is incorrect or the page was removed</p>
            </div>
        </div>

        var container = document.getElementById('container');
        window.onmousemove = function (e) {
            var x = - e.clientX / 5,
                y = - e.clientY / 5;
            container.style.backgroundPositionX = x + 'px';
            container.style.backgroundPositionY = y + 'px';

        }
    }
}


        // fourOfour = () => {
        //     var container = document.getElementById('container');
        //     window.onmousemove = function (e) {
        //         var x = - e.clientX / 5,
        //             y = - e.clientY / 5;
        //         container.style.backgroundPositionX = x + 'px';
        //         container.style.backgroundPositionY = y + 'px';
        //     }
        // }
        // fourOfour();