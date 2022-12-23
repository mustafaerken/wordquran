import React from 'react';
import Positions from './data/Positions.json';
import ar from './data/languages/ar.json';
import tr from './data/languages/tr.json';
import en from './data/languages/en.json';
import bn from './data/languages/bn.json';
import fa from './data/languages/fa.json';
import hi from './data/languages/hi.json';
import id from './data/languages/id.json';
import inh from './data/languages/inh.json';
import ru from './data/languages/ru.json';
import ta from './data/languages/ta.json';
import ur from './data/languages/ur.json';
import de from './data/languages/de.json';

function LanguageFind(props, language){
  switch (language){
    case "ar": return ;
    case "tr": return tr[props+1];
    case "en": return en[props+1];
    case "ru": return ru[props+1];
    case "hi": return hi[props+1];
    case "DE": return de[props+1];
    case "ur": return ur[props+1];
    case "ta": return ta[props+1];
    case "inh": return inh[props+1];
    case "bn": return bn[props+1];
    case "id": return id[props+1];
    case "fa": return fa[props+1];
    default: return en[props+1];
  }
};

const Ayah=({position, language, duration, refA, onoff})=>{
  const Play=()=>{
    if(position.startTime<10000){refA.current.currentTime=position.startTime;}
  }

  let aNum;
  if(position.ayah!==Positions[position.id].ayah){
    let duraP="AyahNumberButton";
    if(duration >= position.startTime){
      duraP="AyahNumberButton2"
    }
    if(onoff){
        aNum =
        <div><button onClick={Play} className={duraP}>
          {"{"}{position.ayah}{"}"}
        </button></div>}
    else{
        aNum =
        <div><div className={"AyahNumber"}>
          {"{"}{position.ayah}{"}"}
        </div></div>
    }
  }

      return (
      <div className="Ayah">
        <div>
          {aNum}
        </div>
        <div className="WordsContanier">
          <div className="Arabian">
            {ar[position.id]}
          </div>
          <div className="Language">
            {LanguageFind(position.id-1, language)}
          </div>
        </div>
      </div>);
}

export default Ayah;
