import React,{useRef} from 'react';
import Positions from './data/Positions.json';
import Ayah from './Ayah';
import Player from './components/Player';


function Besmele(surah){
  if((parseInt(surah))===1 || (parseInt(surah))===9){}
  else{return <div className="besmele">{"بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِـيمِ"}</div>}
}

const Surah=({surah, language, duration, setDuration,onoff})=>{
  const refA=useRef(null);
  function IsOnoff(){
    if(onoff)
      return(
        <Player surah={surah}
        setDuration={setDuration}
        refA={refA}/>
      );
  }

  var x = Positions.map((item)=>{
    let y;
    if(parseInt(item.surah)===parseInt(surah)){
      y = (
        <div key={item.id}>
          <Ayah
          position={item}
          language={language}
          duration={duration}
          refA={refA}
          onoff={onoff}
          />
        </div>)}
        return y;
  })

  return(
    <div className="sureView">
      {IsOnoff()}
      {Besmele(surah)}
      <div className="sureAyah">
        {x}
      </div>
    </div>
  )
}

export default Surah;
