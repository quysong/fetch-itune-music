import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Modal } from "antd";
import { fetchIssueRequest } from "../../stores/issue/action";
import { issue } from "../../stores/issue/selector";
import Loading from "../common/loading";
import Error from "../common/error";
import NotFound from "../common/not-found";
import { arrGenre } from "../../utils/variables";
import "./styles.scss";

const IssueListComponent = () => {
  const [filter, setFilter] = useState({
    genre: arrGenre[0].value,
  });
  const [visible, setVisible] = useState(false)
  const [detail, setDetail] = useState({})

  const dispatch = useDispatch();
  const issueResp = useSelector((state) => issue(state));

  const onSelecteGenre = (genre) => {
    console.log(`issueResp`, issueResp)
    if(issueResp && issueResp.list && issueResp.list.length > 0) {
    }
    if (filter.genre === genre) {
      setFilter({
        genre: "",
      });
    } else {
      setFilter({
        genre,
      });
    }
  };

  const fetchData = useCallback(() => {
    dispatch(fetchIssueRequest({ genre: filter.genre }));
  }, [dispatch, filter]);

  const showDetail = (item) => {
    setDetail(item)
    console.log(`item`, item)
    setVisible(true)
  }

  useEffect(() => {
    fetchData();
  }, [filter, fetchData]);

  return (
    <div className="main-layout">
      <Row className="filter-block">
        <Col span={24}>
          <span className="title">Filter State</span>
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
      {issueResp?.loading ? (
        <Loading></Loading>
      ) : issueResp?.list && issueResp?.list.length > 0 ? (
        <>
          <Row className="result-block">
            <Col span={24}>
              <span className="title">
                Results ({(issueResp && issueResp.resultCount) || 0})
              </span>
            </Col>
            {issueResp.list.map((item, index) => {
              return (
                <Col
                  key={`result-item-${index}`}
                  className="item-col"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                >
                  <div className="item" onClick={() => showDetail(item)}>
                    <div className="state">
                      {item.state === "open" ? (
                        <div className="open">Open</div>
                      ) : (
                        <div className="close">Close</div>
                      )}
                    </div>

                    <div className="row">
                      <div className="title">{item.title}</div>
                      {item.labels?.length !== 0 &&
                        item.labels.map((label, index) => (
                          <div className="label" key={`item-label-${index}`}>
                            {label.name}
                          </div>
                        ))}
                    </div>
                    <div className="description">
                      <span>
                        {`#${item.number} ${
                          item.state === "open" ? "open" : "close"
                        } by ${item.user.login}`}
                      </span>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Modal
            title="Issue detail"
            visible={visible}
            onCancel={() => setVisible(false)}
            footer={[]}
          >
            <p>{detail.title}</p>
            <p>{detail.body}</p>
            <p>State: {detail.state}</p>
          </Modal>
        </>
      ) : (
        <>
          {issueResp?.error && <Error></Error>}
          <NotFound></NotFound>
        </>
      )}
    </div>
  );
};

export default IssueListComponent;
