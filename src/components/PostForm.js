import React, { useState } from 'react';
import "./PostForm.css";

// Create a navigation page that returns postform, then returns the get-data form under the same page
// the const (props) will be set already, and the routing at the bottom of the page, in 'return'
// will allow the data to be used in both instances.
// wallet = addr1qx2zcd86jaglrg6jqxavv3u78yu8xkjhpytsweprylyufkrvtqenlfxlc74e6ak9urzy9s4rlk5802xhq0a8tzhnxynqwv5c77

export default function PostForm(props) {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    dataFetch(value)
    setClicked(true);
    alert('A wallet was submitted: ' + value + ' and set clicked is ' + clicked + ' ' + items);
    // const res = fetch ('http://127.0.0.1:5000/add_address/' +value,
    // {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(value),
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res));
  };

  function handleValue(e) {
    setValue(e.target.value);
  };

  function dataFetch(value) {
      fetch('/add_address/' + value)
          .then((res) => res.json())
          .then((json) => {
              setItems(json);
              setDataIsLoaded(true);
          });
  };

  if (!clicked) {
    return (
      <section id="app" >
        <h2>Please input your ADA wallet address: </h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" onChange={handleValue} placeholder="Wallet Address"/>
          <button type="submit"> submit </button>
        </form>
      </section>
    );
  } else {
    return (
      <div className="dataPage">
          <h1> Fetch data from an api in react </h1>
          <h2 className="walletName">Wallet Address: { value }</h2>
               {
                 items.map((item) => (
                  <div key={item.id} className="carousel" data-bs-interval="1000000">
                    <div className="d-flex justify-content-center">
                      <img src={item.img} className="w-25" alt="..." />
                    </div>
                      <p className="lead mb-4 d-flex justify-content-center">Name: {item.asset_name}</p>
                      <p className="lead mb-4 d-flex justify-content-center">ADA Price: {item.nft_price}</p>
                      <p className="lead mb-4 d-flex justify-content-center">USD Price: {item.usd_price}</p>
                      <p className="lead mb-4 d-flex justify-content-center">Policy ID: {item.policy_id}</p>
                  </div>
                ))
              };
      </div>
    );
  };
}
