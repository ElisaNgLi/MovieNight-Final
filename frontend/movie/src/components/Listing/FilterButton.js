import React from "react";

const FilterButton = () => {
  return (
    <div className="row text-center mb-4 mt-3">
      <div className="col">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => alert("Most Watch Click")}
        >
          Most Watched
        </button>
      </div>
      <div className="col">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => alert("Date Click")}
        >
          Release Date
        </button>
      </div>
      <div className="col">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => alert("Sort Click")}
        >
          Sort by Name
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
