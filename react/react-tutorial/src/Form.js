import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialStaate = {
            name: '',
            job: '',
        };

        this.state = this.initialStaate;
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name] : value
        });
    }
}