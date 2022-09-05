import React, { useState } from 'react';
import "./PostForm.css";

// Create a navigation page that returns postform, then returns the get-data form under the same page
// the const (props) will be set already, and the routing at the bottom of the page, in 'return'
// will allow the data to be used in both instances.
// wallet = addr1qx2zcd86jaglrg6jqxavv3u78yu8xkjhpytsweprylyufkrvtqenlfxlc74e6ak9urzy9s4rlk5802xhq0a8tzhnxynqwv5c77
// addr1q9e96g3ctafpand3t8sa7p3sky8cuh03u6adkex4kjz39mt6s0wl2ej59gsmff47ak398r4hh9a2xp5hdyj6dgjdj64qq9rute

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
  const loading = (
    <h1 className="loading">Please wait while loading...</h1>
  );
  const fetchedData = (
    items.map((item) => (
     <div className="card mb-3" key={item.id}>
       <img src={item.img} className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">{item.asset_name}</h5>
         <p className="card-text">ADA price: {item.nft_price}</p>
         <p className="card-text">USD price: {item.usd_price}</p>
         <p className="card-text"><small className="text-muted">Policy ID: {item.policy_id}</small></p>
       </div>
     </div>
   ))
 );

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
          <h1>NFTs from your wallet address:</h1>
          <h2 className="walletName">{ value }</h2>
          {!dataIsLoaded ? loading : fetchedData}
      </div>
    );
  };
}
