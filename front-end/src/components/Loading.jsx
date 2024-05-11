import React from "react";
import "./loading.css";
import LoadingCard from "./LoadingCard";

function Loading() {
  return (
    <>
    <div className="col p-3">
     <div className="row">
      <div className="col-lg-3 p-3"><LoadingCard/></div>
      <div className="col-lg-3 p-3"><LoadingCard/></div>
      <div className="col-lg-3 p-3"><LoadingCard/></div>
      <div className="col-lg-3 p-3"><LoadingCard/></div>
     </div>
     <div className="row">
      <div className="col-lg-3 p-3"><LoadingCard/></div>
      <div className="col-lg-3 p-3"><LoadingCard/></div>
      <div className="col-lg-3 p-3"><LoadingCard/></div>
      <div className="col-lg-3 p-3"><LoadingCard/></div>
     </div>
     <div className="row">
      <div className="col-lg-3 p-3"><LoadingCard/></div>
      <div className="col-lg-3 p-3"><LoadingCard/></div>
      <div className="col-lg-3 p-3"><LoadingCard/></div>
      <div className="col-lg-3 p-3"><LoadingCard/></div>
     </div>

     </div>
    </>
  );
}

export default Loading;
