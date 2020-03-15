import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class Btgl extends Component {

    render() {
        return (
            <div style={{height: '100%'}}>
                <img className="logoimg" src="/images/no.png" style={{height: '100%', width: '100%', margin: '0px'}}/>
            </div>
        );
    }
}
export default withRouter(Btgl);