import React from 'react'

const Carousel = ({items}) => {
  return (
    <div>
      <h1> Fetch data from an api in react </h1>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000000">
            <div class="d-flex justify-content-center">
              // <img src="" class="w-25" alt="..."/>
            </div>
            <br/>
            <p class="lead mb-4 d-flex justify-content-center">Name: name</p>
            <p class="lead mb-4 d-flex justify-content-center">ADA Floor Price: </p>
            <p class="lead mb-4 d-flex justify-content-center">USD Floor Price: </p>
            <p class="lead mb-4 d-flex justify-content-center">Policy ID: </p>
          </div>
        {
          items.map((item) => (
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
          ))
        }
        </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>

          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" />
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
  )
};

export default Carousel
