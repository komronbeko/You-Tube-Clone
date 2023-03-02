import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Header, RecommendedVideos, SideBar } from "../../components";
import Systems from "../../components/Systems/Systems";
import { ContextApi } from "../../context/context";
import "./Home.css";

const Home = () => {
  const {state} = useContext(ContextApi)
  const [videoCards, setVideoCards] = useState();


  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      relatedToVideoId: "7ghhRHRP6t4",
      part: "id,snippet",
      type: "video",
      maxResults: "50"
    },
    headers: {
      "X-RapidAPI-Key": "21629d3aadmsh6591d32d797c2fap127146jsn264cd14236c2",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const getData = async() => {
    state.setLoading(true);
    try {
      await axios.request(options).then(function (response) {
        setVideoCards(response.data.items);
      });
    } catch (error) {
      state.setError(error.message)
    }
    finally{
      state.setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className="app__mainpage">
        <SideBar />
        {videoCards ? <RecommendedVideos videoCards={videoCards} /> : null}
      </div>
      <Systems/>
    </div>
  );
};

export default Home;
