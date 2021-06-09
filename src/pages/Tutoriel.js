import React from "react";

import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import Breadcrumb from "../components/Breadcrumb";
import Layout from "../components/Layout";


export default class Tutoriel  extends React.Component {
    render() {
      return (
          <Layout>
            <Breadcrumb 
                actual={"Tutoriel"}
                links={[{url: "/", name: "Accueil"}]} />
                <div class="d-flex justify-content-center">

                <div class="containe">
                    <div class="row"><h1 class="text-center font-weight-bold blue-color col-12">Tutoriel</h1></div>
                    <div class="row"><ReactPlayer  class="mt-5 mb-5 col-12 " url='https://www.youtube.com/watch?v=JtMdyRATHuU' /></div>
                </div>
              </div>
          </Layout>
      );
    }
  }
