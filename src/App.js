import React,{useState} from 'react';
import Surah from './Surah';
import Navbar from './Navbar';

const App=()=> {
  const [language, setLanguage]=useState((navigator.language).slice(0,-3));
  const [surah,setSurah]=useState(1);
  const [duration,setDuration]=useState(0);
  const [onoff,setOnoff]=useState(false);

  return(
    <div>
    <div className="duration"></div>
      <Navbar
      surah={surah}
      setSurah={setSurah}
      language={language}
      setLanguage={setLanguage}
      onoff={onoff}
      setOnoff={setOnoff}
      setDuration={setDuration}/>

      <div className="Surah">
        <Surah
        surah={surah}
        language={language}
        duration={duration}
        setDuration={setDuration}
        onoff={onoff}/>
      </div>
    </div>
  );
}

export default App;
