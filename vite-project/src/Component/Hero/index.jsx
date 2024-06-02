

  import { useState } from 'react';
  import './hero.css';


function Hero() {

  return (
    <>
     <div class="container my-2">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg hero">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3 mt-5">
        <h4 class="display-4 fw-bold">Mental health is not a destination, it’s a journey.</h4>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-4">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720" />
      </div>
    </div>
  </div>

    </>
  )
}

export default Hero
