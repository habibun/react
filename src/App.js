import React, { Component } from 'react';
import {incrementActions} from './actions/app-actions';
import {TodoStore} from './stores/count-store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: TodoStore.getCount()
    }
    this.increment = this.increment.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount(){
    console.log('component did mount start.');
    TodoStore.addChangeListener(this._onChange)
    console.log('component did mount end.');
  }

  componentWillUnmount(){
    console.log('component will unmount start.');
    TodoStore.removeChangeListener(this._onChange)
    console.log('component will unmount end.');
  }

  _onChange(){
    console.log('onchange mehtod start.');
      this.setState({
       count: TodoStore.getCount()
     })
     console.log('onchange mehtod end.');
  }

  increment(){
    console.log('increment method start.');
    console.log(this.state.count);
    incrementActions.incrementCount()
    console.log('increment method end.');
    console.log(this.state.count);    
  }

  render() {
    return (
      <div>
        {console.log('render start. '+ this.state.count )}
        <p> Count: {this.state.count}</p>
        <button onClick={this.increment}>increase count</button>
        {console.log('render end. '+ this.state.count )}
      </div>
      
    );
  }
}

export default App;
