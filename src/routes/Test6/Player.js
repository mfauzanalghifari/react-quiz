import { useRef, useState } from "react";
import { cssVideo } from "./style";

const Player = () => {
  const videoPlayerRef = useRef(null);
  const [isPLaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [duration, setDuration] = useState({
    total: '00:00',
    current: '00:00',
    progress: 0,
  });

  const handleVideoSwitch = () => {
    if (isPLaying) {
      videoPlayerRef.current.pause()
    } else {
      videoPlayerRef.current.play()
    }  
    setIsPlaying(!isPLaying)
  }

  const handleMutedSwitch = () => {
    setIsMuted(!isMuted)
  }

  const handleLoadedMetadata = () => {
    if (!videoPlayerRef) return;
    setDuration({
      ...duration,
      total: secondToMinuteFormat(videoPlayerRef.current.duration)
    })
  };

  const handleOnTimeUpdate = () => {
    const progress = (videoPlayerRef.current.currentTime / videoPlayerRef.current.duration) * 100;
    setDuration({
      ...duration,
      current: secondToMinuteFormat(videoPlayerRef.current.currentTime),
      progress
    })
  }

  const secondToMinuteFormat = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = parseInt(time - minutes * 60)
    return `${addZero(minutes)}:${addZero(seconds)}`
  }

  const addZero = (time) => {
    if (time < 10) return `0${time}` 
    else return time 
  }

  const handleSliderChange = (newValue) => {
    videoPlayerRef.current.currentTime = (newValue/100) * videoPlayerRef.current.duration
    setDuration({
      ...duration,
      progress: newValue
    })
  }

  return(
    <div>
      <video
        className={cssVideo}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ref={videoPlayerRef}
        muted={isMuted}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleOnTimeUpdate}
      />
      <button onClick={handleVideoSwitch} type="button">{isPLaying ? 'Pause' : 'Play'}</button>
      <button onClick={handleMutedSwitch} type="button">{isMuted ? 'Unmute' : 'Mute'}</button>
      <input 
        type="range"
        min={0}
        max={100}
        value={duration.progress}
        onChange={(e) => handleSliderChange(e.target.value)}  
      />
      <span>{duration.current}/{duration.total}</span>
    </div>
  )
}

export default Player;
