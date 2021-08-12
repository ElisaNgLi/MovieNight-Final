import React, { useState, useEffect } from "react";

import Slider from "./Slider";
import FeatureMovie from "./FeatureMovie";
import FeatureTv from "./FeatureTv";
import ContentActor from "./ContentActor";
import ContentMovie from "./ContentMovie";
import SearchResult from "./SearchResult";

const HomePage = () => {
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState(allData);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const url = [
      { url: "http://localhost:5001/tv" },
      { url: "http://localhost:5001/movies" },
    ];
    const fetchStuff = async () => {
      const results = await Promise.all(url.map((type) => fetch(type.url)));
      const results2 = await Promise.all(results.map((res) => res.json()));
      const movies = [results2[0].body];
      const tv = [results2[1].body];
      const combine = movies.concat(tv);
      setAllData(combine);
      setFilterData(combine);
    };
    fetchStuff();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let value = e.target.value.toLowerCase();
    let result = [];
    let all = allData[0].concat(allData[1]);
    result = all.filter((data) => {
      return data.title.toLowerCase().search(value) !== -1;
    });
    setFilterData(result);
    setSearch(true);
  };

  return (
    <div className="container">
      <form className="d-flex my-5" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => handleSearch(event)}
        />
      </form>
      {search && (
        <div>
          {filterData.map((data, index) => (
            <div className="container">
              <div className="row">
                <div className="col my-2" key={data.id}>
                  <SearchResult
                    key={index}
                    title={data.title}
                    poster_path={data.poster_path}
                    id={data.id}
                    type={data.type}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!search && (
        <div>
          <Slider />
          <FeatureMovie />
          <ContentActor />
          <FeatureTv />
          <ContentMovie />
        </div>
      )}
    </div>
  );
};

export default HomePage;
