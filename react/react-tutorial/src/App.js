import { Component } from "react";
import Table from "./Table";

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = (index) => {
        const { characters } = this.state;

        this.setState({
            charachters: characters.filter((character, i) => {
                return i !== index;
            })
        })
    }

    render() {
        const charachters = [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ];
        return (
            <div className="container">
                <Table
                    characterData={charachters} 
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}

export default App;
