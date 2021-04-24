import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./styles.scss";

const MusicListComponent = () => {
  const [searchVal, setSearchVal] = useState("");
  const [responseList, setResponseList] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(-1);

  const arrGenre = [
    { value: "movie", name: "Movie" },
    { value: "podcast", name: "Podcast" },
    { value: "music", name: "Music" },
    { value: "musicVideo", name: "Music Video" },
    { value: "audioBook", name: "Audiobook" },
    { value: "shortFilm", name: "Short Film" },
    { value: "tvShow", name: "Tvshow" },
    { value: "software", name: "Software" },
    { value: "ebook", name: "Ebook" },
  ];

  const onSelecteGenre = (index) => {
    if (selectedGenre === index) {
      setSelectedGenre(-1);
    } else {
      setSelectedGenre(index);
    }
  };

  useEffect(() => {
    fetch("https://itunes.apple.com/search?term=jack%20johnson&media=all")
      .then((res) => res.json())
      .then((data) => {
        setResponseList(data);
      });
  }, []);

  return (
    <div className="song-layout">
      <Row className="search-block">
        <Col span={24}>
          <SearchOutlined className="search-icon" />
          <input
            placeholder="Search your entertainment"
            value={searchVal}
            className="search-input"
            onChange={(e) => setSearchVal(e.target.value)}
          ></input>
        </Col>
      </Row>
      <Row className="filter-block">
        <Col span={24}>
          <span className="title">Filter Genre</span>
        </Col>
        <Col span={24}>
          <div className="genre-list">
            {arrGenre &&
              arrGenre.length > 0 &&
              arrGenre.map((genre, index) => {
                return (
                  <div
                    key={`genre-item-${index}`}
                    onClick={() => onSelecteGenre(index)}
                    className={`genre-item ${
                      index === selectedGenre ? "active" : ""
                    }`}
                  >
                    {genre.value}
                  </div>
                );
              })}
          </div>
        </Col>
      </Row>
      <Row className="result-block">
        <Col span={24}>
          <span className="title">
            Results ({responseList && responseList.resultCount})
          </span>
        </Col>
      </Row>
      <Row className="result-block">
        {responseList &&
          responseList.results.length > 0 &&
          responseList.results.map((item, index) => {
            return (
              <Col
                key={`result-item-${index}`}
                className="song-item-col"
                xs={{ span: 12 }}
                sm={{ span: 4 }}
              >
                <div className="song-item">
                  <div className="thumb">
                    <img
                      src="https://via.placeholder.com/112x112"
                      alt="thumb-img"
                    />
                  </div>
                  <div className="label">Sucker</div>
                  <div className="singer">Jonas Brothers</div>
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default MusicListComponent;
