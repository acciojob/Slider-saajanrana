import React from "react";

import Review from "./Review";

const App = () => {
  return (
    <section className="section">
      <div className="title">
        <h2 id="review-heading">
          <span>/</span>Reviews
        </h2>
      </div>
      <Review />

    </section>
  );
};

export default App;