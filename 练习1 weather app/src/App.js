import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3434569a412b78776bae4dcd5ae49345`;
  const searchLocation = (event) => {
    //当按下键盘回车键的时候，发送请求，将收到的数据设置给state，
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          //输入值就等于state中的location值；
          value={location}
          //只要输入值则调用函数将输入项存入state中
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          //按下键盘时触发搜索函数；
          onKeyPress={searchLocation}
          placeholder="Enter location"
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {/* 要记得查空 */}
            {data.main ? <h1>{data.main.temp.toFixed()}°C </h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main} </p> : null}
          </div>
        </div>

        {/*  若没有输入location则不显示bottom */}

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}</p>
              ) : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}</p> : null}
              <p>humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH </p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
