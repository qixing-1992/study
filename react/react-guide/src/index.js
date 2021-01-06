import React, { Component } from 'react'
import ReactDOM from 'react-dom';

/*
class HelloWorld extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'tylermcginnis'
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <div>
                Hello {this.state.username} <br />
                Change Name:
                <input
                    type="text"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                />
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<HelloWorld />, root);
*/

/*
class HelloUser extends Component {
    render() {
        return (
            <div> Hello, {this.props.name}</div>
        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(<HelloUser name="Tyler" />, root);
*/

class FriendsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tyler McGinnis',
            friends: [
                'Jake Lingwall',
                'Sarah Drasner',
                'Merrick Christensen'
            ],
        }

        this.addFriend = this.addFriend.bind(this)
    }

    addFriend(friend) {
        this.setState((state) => ({
            friends: state.friends.concat([friend])
        }))
    }

    render() {
        return (
            <div>
                <h3> Name: {this.state.name}</h3>
                <AddFriend addNew={this.addFriend} />
                <ShowList names={this.state.friends} />
            </div>
        )
    }
}

class ShowList extends Component {
    render() {
        return (
            <div>
                <h3> Friends </h3>
                <ul>
                    {this.props.names.map((friend) => {
                        return <li>{friend}</li>
                    })}
                </ul>
            </div>
        )
    }
}

class AddFriend extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newFriend: ''
        }

        this.updateNewFriend = this.updateNewFriend.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)
    }
    updateNewFriend(e) {
        this.setState({
            newFriend: e.target.value
        })
    }
    handleAddNew() {
        this.props.addNew(this.state.newFriend)
        this.setState({
            newFriend: ''
        })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.newFriend}
                    onChange={this.updateNewFriend}
                />
                <button onClick={this.handleAddNew}> Add Friend </button>
            </div>
        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(<FriendsContainer />, root);
