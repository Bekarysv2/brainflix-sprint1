import {useState} from 'react';
import './App.css';
import NavigationBar from './components/Navigation-bar/Nav-bar';
import MainVideo from './components/MainVideo/Main-video';
import VideoDetails from './components/VideoDetails/VideoDetails';
import Comments from './components/Comments/Comments';
import NewComment from './components/Add-Comment/New-comment';

import VideoList from './data/video-details.json';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(VideoList[0]);
  const [comments, setComments] = useState(VideoList);


  const clickHandler = (video) => {
    setSelectedVideo(video);
  }

  return (
    <>
      <NavigationBar />
      <MainVideo video={selectedVideo} />
      <VideoDetails video={selectedVideo} />
      <NewComment commentsCount={comments.length} />
      <Comments video={selectedVideo} />
    </>
  );
}


export default App;
