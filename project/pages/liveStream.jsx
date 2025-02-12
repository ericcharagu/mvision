import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Paper, Typography, Slider, IconButton, Popover } from "@mui/material"; // Import Popover
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

const VideoPlayer = ({ src, type = "video/mp4", passengerCount = 0, vehicleReg = "Unknown" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [duration, setDuration] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  // Popover state
  const [anchorEl, setAnchorEl] = useState(null);
  const volumeOpen = Boolean(anchorEl);

  const videoRef = useRef(null);

    const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(error => {
        console.error("Error playing video:", error);
        setIsPlaying(false);
      });
    }
    setIsPlaying(!isPlaying);
  };


  const handleVolumeChange = (event, newValue) => {
    const video = videoRef.current;
    if (!video) return;

    setVolume(newValue);
    video.volume = newValue;
    setMuted(newValue === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    setMuted(!muted);
    video.muted = !muted;
     // Close the popover if we're muting
    if (!muted) {
        handleCloseVolume();
    }
  };


    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current && !isSeeking) {
            setVideoCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleSeekChange = (event, newValue) => {
      setIsSeeking(true);
      setVideoCurrentTime(newValue);
    };

    const handleSeekMouseUp = (event, newValue) => {
         if (videoRef.current) {
            videoRef.current.currentTime = newValue;
        }
        setIsSeeking(false);
    }


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.addEventListener("loadedmetadata", handleLoadedMetadata);
        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("ended", () => setIsPlaying(false));
        video.addEventListener("error", (e) => {
            console.error("Video error:", e, video.error);
            alert(`Video playback error. Code: ${video.error.code}; Message: ${video.error.message}`);
        });

        return () => {
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("ended", () => setIsPlaying(false));
            video.removeEventListener("error", (e) => { console.error("Video error:", video.error) });
        };
    }, []);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };


    const handleClickVolume = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCloseVolume = () => {
      setAnchorEl(null);
    };



  return (
    <div className="container-fluid" style={{ width: "98vw", margin: "10px" }} id="streamDiv">
      <Grid container spacing={2}>
        <Grid xs={8}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <video
                ref={videoRef}
                width="640"
                height="360"
                preload="metadata"
                style={{ width: '100%' }}
                >
              <source src={src} type={type} />
              Your browser does not support the video tag.
            </video>

            <div style={{width:"100%"}}>
                <IconButton onClick={togglePlay}>
                    {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
              {/* Volume adjustments */}
                {/* <IconButton onClick={muted ? toggleMute : handleClickVolume}>
                    {muted ? <VolumeOffIcon /> : (volume > 0.5 ? <VolumeUpIcon/> : <VolumeDownIcon/>)}
                </IconButton> */}

                 <Popover
                    open={volumeOpen}
                    anchorEl={anchorEl}
                    onClose={handleCloseVolume}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',  // Position relative to the button
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left', // Position of the popover itself
                    }}
                >
                    <div style={{ padding: '10px' }}>
                      <Slider
                        orientation="vertical"
                        value={volume}
                        onChange={handleVolumeChange}
                        min={0}
                        max={10}
                        step={1}
                        aria-labelledby="vertical-volume-slider"
                      />
                    </div>
              </Popover>

               <Slider
                    value={videoCurrentTime}
                    onChange={handleSeekChange}
                    onChangeCommitted={handleSeekMouseUp}
                    min={0}
                    max={duration}
                    step={0.01}
                    aria-labelledby="continuous-slider"
                    style={{width:"75%"}}
                />
              <Typography variant="caption">
                    {formatTime(videoCurrentTime)} / {formatTime(duration)}
                </Typography>

            </div>
          </div>
        </Grid>
        <Grid xs={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Paper elevation={4} sx={{ padding: "15px", margin: "15px" }}>
              <Typography variant="h5" component="div">
                Time: {currentTime}
              </Typography>
            </Paper>
            <Paper elevation={4} sx={{ padding: "15px", margin: "15px" }}>
              <Typography variant="h5" component="div">
                Passenger Count: <strong>{passengerCount}</strong>
              </Typography>
            </Paper>
            <Paper elevation={4} sx={{ padding: "15px", margin: "15px" }}>
              <Typography variant="h5" component="div">
                Vehicle Reg: <strong>{vehicleReg}</strong>
              </Typography>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoPlayer;