import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { fetchMusicRequest } from "../../stores/music/action";
import { music } from "../../stores/music/selector";
import "./styles.scss";
import Loading from "../common/loading";
import Error from "../common/error";
import NotFound from "../common/not-found";
import { arrGenre } from "../../utils/variables";

const MusicListComponent = () => {
  const [searchVal, setSearchVal] = useState("");
  const [filter, setFilter] = useState({
    keyword: "",
    genre: arrGenre[0].value,
  });

  const dispatch = useDispatch();
  const musicResp = useSelector((state) => music(state));

  const onSelecteGenre = (genre) => {
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

  const fetchData = useCallback(() => {
    dispatch(
      fetchMusicRequest({ keyword: filter.keyword, genre: filter.genre })
    );
  }, [dispatch, filter]);

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
  }, [filter, fetchData]);

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
            id="search-input"
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
                    } genre-item__${genre.value}`}
                  >
                    {genre.name}
                  </div>
                );
              })}
          </div>
        </Col>
      </Row>
      {musicResp?.loading ? (
        <Loading></Loading>
      ) : musicResp?.list && musicResp?.list.length > 0 ? (
        <>
          <Row className="result-block">
            <Col span={24}>
              <span className="title">
                Results ({(musicResp && musicResp.resultCount) || 0})
              </span>
            </Col>
            {musicResp.list.map((item, index) => {
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
          {musicResp?.error && <Error></Error>}
          <NotFound></NotFound>
        </>
      )}
    </div>
  );
};

export default MusicListComponent;
