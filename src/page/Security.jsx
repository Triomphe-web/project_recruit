import React from "react";
import SecImage from '../img/security.jpg'
import Header from "../components/Header";

export default function Security() {
  return (
    <>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="mt-5">Security :</h1>
          <p>
            Pour le bienfait de nos clients , nous privilegions grandement la
            securite de vos donnée et nous nous engagons a ne pas utiliser vos
            donnée persnelle
          </p>
          <hr />

          <h1>Rules :</h1>
          <ul className="text-light">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, in
              iusto veniam maiores excepturi beatae perspiciatis numquam. Vel
              porro earum, eligendi reprehenderit ullam aspernatur voluptas quo,
              eveniet fugiat consectetur suscipit?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi, magnam porro. Maxime, vero atque odit voluptate, impedit
              aperiam consectetur quis sint corrupti laudantium labore itaque
              explicabo. A odio vero numquam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              dignissimos iusto optio reprehenderit voluptatum laborum sint
              facere sequi doloribus libero est, ex repudiandae consequatur a
              sunt vitae inventore maxime tempora.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, in
              iusto veniam maiores excepturi beatae perspiciatis numquam. Vel
              porro earum, eligendi reprehenderit ullam aspernatur voluptas quo,
              eveniet fugiat consectetur suscipit?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi, magnam porro. Maxime, vero atque odit voluptate, impedit
              aperiam consectetur quis sint corrupti laudantium labore itaque
              explicabo. A odio vero numquam!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              dignissimos iusto optio reprehenderit voluptatum laborum sint
              facere sequi doloribus libero est, ex repudiandae consequatur a
              sunt vitae inventore maxime tempora.
            </li>
          </ul>
        </div>
        <div className="col-6">
            <img className="img-fluid mt-5" src={SecImage} alt="iamge" />
        </div>
      </div>
    </div>
    </>
  );
}
