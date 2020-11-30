import React from "react";
import { RViewer, RViewerTrigger } from "react-viewerjs";
import '../assets/styles/certificates.css';

const infoImgs = require("../assets/data/infoImgs.json");

const getImgUrls = () => {
  return infoImgs.map(({url}) => url);
}

function Carrousel() {
  getImgUrls();

  return (
    <div className="container mt-5 mb-5">
      <h4 className="text-center"><strong>Certificados obtenidos</strong></h4>

      <RViewer imageUrls={getImgUrls()}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {infoImgs.map((img, index) => (
            <div className="card mb-4" key={index}>
              <RViewerTrigger index={index}>
                <img src={img.url} alt={img.title} className="card-img-top c-pointer"/>
              </RViewerTrigger>
                <p className="card-title text-center bg-light m-0 p-2">{img.title}</p>
            </div>
          ))}
        </div>
      </RViewer>
    </div>
  );
}

export default Carrousel;
