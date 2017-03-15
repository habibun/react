/**
 * Created by habibun on 3/15/17.
 */
import './style.css'
import React from 'react';
import ReactDOM from 'react-dom';

class HelloReact extends React.Component {
    render() {
        return (
            <div id="helloReact">
                Hello from react!
            </div>
        );
    }
}

ReactDOM.render(
    <HelloReact/>,
    document.getElementById('root-app')
);