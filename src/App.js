import {useState} from 'react';
import './App.css';
import NavigationBar from './components/Navigation-bar/Nav-bar';
import MainVideo from './components/MainVideo/Main-video';
import VideoDetails from './components/VideoDetails/VideoDetails';

import VideoList from './data/video-details.json';

function App() {
  const [videos, setVideos] = useState(VideoList);
  const [selectedVideo, setSelectedVideo] = useState(VideoList[0]);

  const clickHandler = (video) => {
    setSelectedVideo(video);
  }

  return (
    <>
      <NavigationBar />
      <MainVideo video={selectedVideo} />
      <VideoDetails video={selectedVideo} />
    </>
  );
}


export default App;
