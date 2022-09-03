import React from "react";

function Contact() {
  return (
    <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Get In Contact With Me</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg class="bi" width="1em" height="1em"><use href="#collection"></use></svg>
        </div>
        <h2>Discord Profile</h2>
        <p>@blockboy007#4057</p>
        <a href="https://discord.com/" class="icon-link d-inline-flex align-items-center">
          Discord Login
          <svg class="bi" width="1em" height="1em"><use href="#chevron-right"></use></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg class="bi" width="1em" height="1em"><use href="#people-circle"></use></svg>
        </div>
        <h2>Twitter</h2>
        <p>@Willbeebe007</p>
        <a href="https://twitter.com/willbeebe007" class="icon-link d-inline-flex align-items-center">
          Twitter
          <svg class="bi" width="1em" height="1em"><use href="#chevron-right"></use></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg class="bi" width="1em" height="1em"><use href="#toggles2"></use></svg>
        </div>
        <h2>Github Repository</h2>
        <p>@blockboy007</p>
        <a href="https://github.com/blockboy007?tab=repositories" class="icon-link d-inline-flex align-items-center">
          Github
          <svg class="bi" width="1em" height="1em"><use href="#chevron-right"></use></svg>
        </a>
      </div>
    </div>
  </div>
  );
}

export default Contact;
