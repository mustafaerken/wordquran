import React from 'react';
import Surahs from '../data/Surah.json';

const SurahSelect=({surah,setSurah,setDuration})=>{
  const SelectSurah=(event)=>{
    setSurah(event.target.value)
    window.scrollTo(0,0);
    setDuration(0);
  }
      return (
        <div className="selectSurahContanier">
        <select className= "selectSurah" value={surah} onChange={SelectSurah}>
          {Surahs.map((item)=>(
            <option key={item.id} value={item.id}>{item.id} · {item.namet} {item.name} · {item.nAyah}</option>
          ))}
        </select>
        </div>
      );
}
const LanguageSelect=({language,setLanguage})=> {
const Select=(event)=>{
  setLanguage(event.target.value)
}
  return(
    <select className="selectLanguage" value={language} onChange={Select}>
      <option value="ar">No Language</option>
      <option value="tr">TR · Türkçe</option>
      <option value="en">EN · English</option>
      <option value="ru">RU · Русский </option>
      <option value="DE">DE · Deutsch</option>
      <option value="hi">HI · हिन्दी</option>
      <option value="id">ID · Indonesia</option>
      <option value="inh">INH · тоҷикӣ</option>
      <option value="fa">FA · فارسی</option>
      <option value="bn">BN · বাংলা</option>
      <option value="ta">TA · தமிழ்</option>
      <option value="ur">UR · اردو</option>
    </select>
  );
}

export {SurahSelect,LanguageSelect};
