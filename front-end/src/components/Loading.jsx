import React from "react";
import "./loading.css";

function Loading() {
  return (
    <>
    {/* only renders if its takes time to load the data from api */}
      <div className="container-fluid loading">
        <div
          className="loader__wrap"
          role="alertdialog"
          aria-busy="true"
          aria-live="polite"
          aria-label="Loading…"
        >
          <div className="loader" aria-hidden="true">
            <div className="loader__sq" />
            <div className="loader__sq" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
