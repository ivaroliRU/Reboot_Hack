import { translation } from './text.config';

var language = getCookie('language');

function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match){
    console.log(match[2]);   
    return match[2];
  }
  return 'eng';
}

export function changeLanguage(){
  if(language == 'eng'){
    language = 'is';
    document.cookie = "language=is;"; 
  }
  else{
    language = 'eng';
    document.cookie = "language=eng;";
  }
}

export function getTranslation(){
  if(language == 'eng'){
    return translation.en;
  }
  else{
    return translation.is;
  }
}