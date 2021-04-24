import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMusicRequest } from "../../stores/music/action";
import MusicSelector from "../../stores/music/selector";
import "./styles.scss";

function showTime() {
  var d = new Date();
  document.getElementById("clock1").innerHTML = d.toLocaleTimeString();
}

const MusicList = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [obj1, setObj1] = useState({ f1: "f1" });
  const dispatch = useDispatch();
  // const selector = useSelector();
  const musicList = useSelector((state) => MusicSelector.list(state));

  useEffect(() => {
    dispatch(fetchMusicRequest({ f1: 1234 }))
  }, []);

  useEffect(() => {
    console.log(`musicList`, musicList)
  }, [musicList]);

  return (
    <>
      <div className="classA">MusicList</div>
    </>
  );
};

export default MusicList;
