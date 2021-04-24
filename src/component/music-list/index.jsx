import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { fetchMusicRequest } from "../../stores/music/action";
import MusicSelector from "../../stores/music/selector";
import "./styles.scss";

const MusicListComponent = () => {
  const [searchVal, setSearchVal] = useState("");
  const [responseList, setResponseList] = useState(null);
  const [filter, setFilter] = useState({
    keyword: "",
    genre: "",
  });

  const dispatch = useDispatch();
  const musicResp = useSelector((state) => MusicSelector.music(state));

  const arrGenre = [
    { value: "movie", name: "Movie" },
    { value: "podcast", name: "Podcast" },
    { value: "music", name: "Music" },
    { value: "musicVideo", name: "Music Video" },
    { value: "audiobook", name: "Audiobook" },
    { value: "shortFilm", name: "Short Film" },
    { value: "tvShow", name: "Tvshow" },
    { value: "software", name: "Software" },
    { value: "ebook", name: "Ebook" },
  ];

  const onSelecteGenre = (genre) => {
    console.log(`genre`, genre);
    if (filter.genre === genre) {
      setFilter({
        keyword: searchVal,
        genre: "",
      });
    } else {
      setFilter({
        keyword: searchVal,
        genre,
      });
    }
  };

  const fetchData = () => {
    dispatch(
      fetchMusicRequest({ keyword: filter.keyword, genre: filter.genre })
    );
  };

  const handleSearch = (e) => {
    if (!e || e.key === "Enter") {
      setFilter({
        ...filter,
        keyword: searchVal,
      });
    }
  };

  const onChangeSearch = (value) => {
    setSearchVal(value);
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  useEffect(() => {
    if (musicResp.list) {
      setResponseList(musicResp.list);
    }

    if (musicResp.error) {
    }
  }, [musicResp]);

  return (
    <div className="song-layout">
      <Row className="search-block">
        <Col span={24}>
          <SearchOutlined
            className="search-icon"
            onClick={() => handleSearch(null)}
          />
          <input
            placeholder="Search your entertainment"
            value={searchVal}
            className="search-input"
            onChange={(e) => onChangeSearch(e.target.value)}
            onKeyDown={(e) => handleSearch(e)}
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
                    onClick={() => onSelecteGenre(genre.value)}
                    className={`genre-item ${
                      genre.value === filter.genre ? "active" : ""
                    }`}
                  >
                    {genre.name}
                  </div>
                );
              })}
          </div>
        </Col>
      </Row>
      {musicResp.loading ? (
        <Spin size="large" className="loading-block"></Spin>
      ) : responseList && responseList.length > 0 ? (
        <>
          <Row className="result-block">
            <Col span={24}>
              <span className="title">
                Results ({(musicResp && musicResp.resultCount) || 0})
              </span>
            </Col>
            {responseList.map((item, index) => {
              return (
                <Col
                  key={`result-item-${index}`}
                  className="song-item-col"
                  xs={{ span: 12 }}
                  sm={{ span: 4 }}
                >
                  <div className="song-item">
                    <div className="thumb">
                      <img src={item.artworkUrl100} alt="thumb-img" />
                    </div>
                    <div className="label">{item.trackName}</div>
                    <div className="singer">{item.artistName}</div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </>
      ) : (
        <>
          {musicResp.error && <div>Server internal error.</div>}
          <div>Cannot find any result you are looking for!</div>
        </>
      )}
    </div>
  );
};

export default MusicListComponent;
