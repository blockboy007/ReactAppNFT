import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <body class="d-flex h-100 text-center text-bg-dark py-5">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

        <main class="px-3 my-5">
          <h1>Welcome to the NFT Viewer App.</h1>
          <p class="lead">This page is all about NFTs!</p>
          <p class="lead">
            <Link to="/about">
              <button type="button" class="btn btn-lg btn-light fw-bold">Get Started</button>
            </Link>
          </p>
        </main>
      </div>
    </body>
  );
}

export default Home;
