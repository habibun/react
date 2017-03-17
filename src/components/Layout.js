import React from 'react';
import Data from './Data';
import Contact from './Contact';

class Layout extends React.Component {

    componentWillMount() {
        this.setState({
            contacts: Data
        })
    }

    netContact = () =>
            <div className="pure-g">
                <div className="pure-u-12-24">
                    <form className="pure-form" onSubmit={this.addContact.bind(this)}>
                        <fieldset>
                            <legend>New Contact</legend>

                            <input ref='email' type="email" placeholder="Email"/>
                            <input ref='name' type="text" placeholder="name"/>
                            <button type="submit" className="pure-button pure-button-primary">Add</button>
                        </fieldset>
                    </form>
                </div>
            </div>;


    addContact(e) {
        e.preventDefault();

        console.log(this.state.contacts);

        const contacts = this.state.contacts;
        const newId = contacts[contacts.length - 1].id + 1;

        this.setState({
            contacts: contacts.concat({
                id: newId, 
                name: this.refs.name.value, 
                email: this.refs.email.value,
            })
        });

        this.refs.name.value = null;
        this.refs.email.value = null;

        console.log("Clicked!!");
    }

    render() {
        return (
            <div id="layout">
                {this.netContact()}
                <div className="pure-g">
                    {this.state.contacts.map((info) =>
                        <Contact {...info} key={info.id}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Layout;