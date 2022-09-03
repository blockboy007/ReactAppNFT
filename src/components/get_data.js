import React, {Component} from 'react';
import wallet from './PostForm';






class App extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: [],
            DataisLoaded: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A wallet was submitted: ' + this.state.value);
      event.preventDefault();
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch('/add_address/'+ 'addr1qx2zcd86jaglrg6jqxavv3u78yu8xkjhpytsweprylyufkrvtqenlfxlc74e6ak9urzy9s4rlk5802xhq0a8tzhnxynqwv5c77')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>
            <h2> { wallet.name } </h2>
              {
                items.map((item) => (
                <ol key = { item.id } >
                    <li>NFT name: { item.asset_name } </li>
                    <li>Policy ID: { item.policy_id } </li>
                    <li>{ item.img }</li>
                </ol>
                ))
            }
        </div>
    );
}
}

export default App;
