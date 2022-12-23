import React from 'react';
import {SurahSelect, LanguageSelect} from './components/Selects';

const Navbar=({surah, setSurah, language,setLanguage,onoff,setOnoff,ayah,setAyah,setDuration})=>{
  const NextSurah=()=>{
    if(parseInt(surah)===114){alert("Click Other Arrow.")}
    else{
      setSurah(parseInt(surah)+1);
      window.scrollTo(0,0);
    }
  }
  const BackSurah=()=>{
    if(parseInt(surah)===1){alert("Click Other Arrow.")}
    else{
      setSurah(parseInt(surah)-1);
      window.scrollTo(0,0);
    }
  }


  const Show=()=>{
    setOnoff(!onoff)
  }
      return (
        <div className="navBar">
          <LanguageSelect
          language={language}
          setLanguage={setLanguage}/>
          <button className="buttonPass"onClick={NextSurah}/>
          <SurahSelect
          surah={surah}
          setSurah={setSurah}
          setDuration={setDuration}/>
          <button className="buttonPass2"onClick={BackSurah}/>
          <button className="buttonAudio"onClick={Show}>♫</button>
        </div>
      );
}

export default Navbar;
