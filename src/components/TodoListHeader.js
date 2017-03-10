import React, {Component} from 'react';

export default class TodoListHeader extends Component {
    render(){
        return(
            <thead>
              <tr>
                <th>Task</th>
                <th>Actions</th>
              </tr>
            </thead>
        )
    }
}
