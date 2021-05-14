import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './../styles/NewsFeed.css';
import 'react-dropdown/style.css';
import { Link } from "react-router-dom";


import React from "react";

export default class Footer extends React.Component {
  render()  {
    return (
      <footer class="text-center text-lg-start bg-grey text-muted mt-4 mw-100">
 
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
  </section>
 
  <section class="">
    <div class="container text-center text-md-start mt-5">
     
      <div class="row mt-3">
      
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
          <img src="./logo.png" width="30" height="30"></img> Sondeju
          </h6>
          <p>
            Projet réalisé dans le cadre de l'UV d'HM40 
          </p>
        </div>
       
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            Navigation
          </h6>
          <p>
            <a href="/" class="text-reset">Créer un sondage</a>
          </p>
          <p>
            <a href="/" class="text-reset">Accéder au tutoriel</a>
          </p>
          <p>
            <a href="/" class="text-reset">Sondage au hasard</a>
          </p>
          <p>
            <a href="/" class="text-reset">Mon compte</a>
          </p>
        </div>
       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> Belfort, 90000 FR</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
             info@sondeju.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 09 69 39 40 20</p>
          <p><i class="fas fa-print me-3"></i> + 03 89 25 38 05</p>
        </div>
        
      </div>
      
    </div>
  </section>
  
  <div class="text-center p-4" >
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Sondeju.com</a>
  </div>
  
</footer>
    );
  }
}