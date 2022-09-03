import React from "react";
import PostForm from "./PostForm";


function About() {
  return (
    <body>
      <div class="container my-5 w-75">
          <div class="h-100  p-5 text-bg-dark rounded-5">
            <h2>About This App</h2>
            <p>This app was created by someone learning to become a software developer,
            and this is one of his first self-built applications using react.</p>
              <div class="postion-absolute top-50 start-50">
                <img class="w-50" src="https://images.unsplash.com/photo-1660318493547-8ed693a0c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"></img>
              </div>
          </div>
      </div>
      <PostForm />

    </body>
  );
}

export default About;
