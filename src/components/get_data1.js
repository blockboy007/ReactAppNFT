import React, { useState, Component} from 'react';






export default function App() {
    // Constructor
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    const handleChange = (event) => {
      setValue(event.target.value);
    }

    const handleSubmit = (event) => {
      alert('A wallet was submitted: ' + value);
      event.preventDefault();
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch('/add_address/addr1qx2zcd86jaglrg6jqxavv3u78yu8xkjhpytsweprylyufkrvtqenlfxlc74e6ak9urzy9s4rlk5802xhq0a8tzhnxynqwv5c77')
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setDataIsLoaded(true);
            });
    };

    const dataLoading() {
        if (!dataIsLoaded) {
          return (<div>
            <h1> Please wait some time.... </h1>
            </div>
          );
        }
    };

    return (
      <div className = "App">
        <h1> Fetch data from an api in react </h1>
          { items.map((item) => (
              // <div>
              //   NFT name: { item.asset_name },
              //   Policy ID: { item.policy_id },
              //   { item.img }
              // </div>
              <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-item" data-bs-interval="1000000">
                  <div class="d-flex justify-content-center">
                    <img src={item.img} class="w-25" alt="..."/>
                  </div>
                    <br/>
                    <p class="lead mb-4 d-flex justify-content-center">Name: {item.asset_name}</p>
                    <p class="lead mb-4 d-flex justify-content-center">ADA Price: {item.nft_price}</p>
                    <p class="lead mb-4 d-flex justify-content-center">USD Price: {item.usd_price}</p>
                    <p class="lead mb-4 d-flex justify-content-center">Policy ID: {item.policy_id}</p>
                </div>
              </div>
            ))}
      </div>
    );
}
