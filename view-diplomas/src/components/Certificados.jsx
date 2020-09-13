import React from "react";
import { RViewer, RViewerTrigger } from "react-viewerjs";

const infoImgs = require("../assets/data/infoImgs.json");

function Carrousel() {
  return (
    <div className="container mt-5 mb-5">
      <h4 className="text-center"><strong>Certificados obtenidos</strong></h4>

      <RViewer imageUrls={imgURLS}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {infoImgs.map((img, index) => (
            <div className="card mb-4" key={index}>
              <RViewerTrigger index={index}>
                <img src={img.url} alt={img.title} className="card-img-top" />
              </RViewerTrigger>
                <p className="card-title text-center bg-light m-0 p-2">{img.title}</p>
            </div>
          ))}
        </div>
      </RViewer>
    </div>
  );
}

const imgURLS = [
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964454/diploma-prework-1_swwhng.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964453/diploma-fundamentos-javascript-1_ek0tm5.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964454/diploma-ecmascript-6-1_oghxab.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964454/diploma-javascript-profesional-1_lacryw.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964454/diploma-frontend-developer-1_osgc2b.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964454/diploma-react-ejs-1_oekevo.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964454/diploma-react-router-redux-1_pfvgix.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964453/diploma-asincronismo-js-1_s6strj.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964453/diploma-fundamentos-node-1_mbxrpr.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964454/diploma-passport-1_ohqkad.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964455/diploma-ssr-1_hn48y8.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964453/diploma-backend-nodejs-1_fhcmqw.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964453/diploma-basico-javascript-1_lualft.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964454/diploma-singlepage-app-1_l4nodc.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964453/diploma-html5-css3-1_lnv4ek.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964453/diploma-docker-1_ct7tfw.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964453/diploma-git-github-1_oujyjd.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964454/diploma-python-1_fnqtsy.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964454/diploma-lenguaje-c-2019-1_ygu23a.jpg",
  "https://res.cloudinary.com/duo6yoqmy/image/upload/v1599964454/diploma-python-cs-1_q3716j.jpg"
];

export default Carrousel;
