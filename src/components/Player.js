import React,{useState} from 'react';
import Audios from '../data/Audios.json';
import sur from '../data/Surah.json';

const Player=({surah,refA,setDuration})=>{
  const [playing,setPlaying]=useState(false);
  let x="play";
  if(playing){x="paused"}
  const Play=()=>{
    if(playing){
      refA.current.pause()
    }
    else {
      refA.current.play();}
    setPlaying(!playing);
  }
  const Reload=()=>{
    refA.current.currentTime=0;
  }
  const Pause=()=>{
    setPlaying(false);
  }
  return(
    <div className="player">
      <button className={x}  onClick={Play}/>
      <div className="playerSurahName">{sur[surah-1].namet}</div>
      <audio
      controls
      src={Audios[surah-1].link}
      ref={refA}
      onEnded={Pause}
      onEmptied={Pause}
      onTimeUpdate={(e)=>{setDuration(Math.round(e.target.currentTime))}}hidden/>
      <button className="playerReload" onClick={Reload}>↺</button>
    </div>
  );
}

export default Player;
