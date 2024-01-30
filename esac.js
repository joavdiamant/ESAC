
const dictionary = {
  en: {
    KeyA:'a',
    KeyB:'b',
    KeyC:'c',
    KeyD:'d',
    KeyE:'e',
    KeyF:'f',
    KeyG:'g',
    KeyH:'h',
    KeyI:'i',
    KeyJ:'j',
    KeyK:'k',
    KeyL:'l',
    KeyM:'m',
    KeyN:'n',
    KeyO:'o',
    KeyP:'p',
    KeyQ:'q',
    KeyR:'r',
    KeyS:'s',
    KeyT:'t',
    KeyU:'u',
    KeyV:'v',
    KeyW:'w',
    KeyX:'x',
    KeyY:'y',
    KeyZ:'z',
    Comma:',',
    Period:'.',
    Slash:'/',
    Semicolon:';',
    Quote:`'`,
    BracketLeft:']',
    BracketRight:'[',
    Backquote:'`',

  },
  he: {
    KeyA:'ש',
    KeyB:'נ',
    KeyC:'ב',
    KeyD:'ג',
    KeyE:'ק',
    KeyF:'כ',
    KeyG:'ע',
    KeyH:'י',
    KeyI:'ן',
    KeyJ:'ח',
    KeyK:'ל',
    KeyL:'ך',
    KeyM:'צ',
    KeyN:'מ',
    KeyO:'ם',
    KeyP:'פ',
    KeyQ:'/',
    KeyR:'ר',
    KeyS:'ד',
    KeyT:'א',
    KeyU:'ו',
    KeyV:'ה',
    KeyW:"'",
    KeyX:'ס',
    KeyY:'ט',
    KeyZ:'ז',
    Comma:'ת',
    Period:'ץ',
    Slash:'.',
    Semicolon:'ף',
    Quote:',',
    BracketLeft:'[',
    BracketRight:']',
    Backquote:';',
  },
  ru: {
    KeyA:'ф',
    KeyB:'и',
    KeyC:'с',
    KeyD:'в',
    KeyE:'у',
    KeyF:'а',
    KeyG:'п',
    KeyH:'р',
    KeyI:'ш',
    KeyJ:'о',
    KeyK:'л',
    KeyL:'д',
    KeyM:'ь',
    KeyN:'т',
    KeyO:'щ',
    KeyP:'з',
    KeyQ:'й',
    KeyR:'к',
    KeyS:'ы',
    KeyT:'е',
    KeyU:'г',
    KeyV:'м',
    KeyW:'ц',
    KeyX:'ч',
    KeyY:'н',
    KeyZ:'я',
    Comma:'б',
    Period:'ю',
    Slash:'.',
    Semicolon:'ж',
    Quote:'э',
    BracketLeft:'х',
    BracketRight:'ъ',
    Backquote:'ё'
  },
  ar:{
    KeyA:'ش',
    KeyB:'لا',
    KeyC:'ؤ',
    KeyD:'ي',
    KeyE:'ث',
    KeyF:'ب',
    KeyG:'ل',
    KeyH:'ا',
    KeyI:'ه',
    KeyJ:'ت',
    KeyK:'ن',
    KeyL:'م',
    KeyM:'ة',
    KeyN:'ى',
    KeyO:'خ',
    KeyP:'ح',
    KeyQ:'ض',
    KeyR:'ق',
    KeyS:'س',
    KeyT:'ف',
    KeyU:'ع',
    KeyV:'ر',
    KeyW:'ص',
    KeyX:'ء',
    KeyY:'غ',
    KeyZ:'ئ',
    Comma:'و',
    Period:'ز',
    Slash:'ظ',
    Semicolon:'ك',
    Quote:'ط',
    BracketLeft:'ج',
    BracketRight:'د',
    Backquote:'ذ'
  },
  es:{
    KeyA:'a',
    KeyB:'b',
    KeyC:'c',
    KeyD:'d',
    KeyE:'e',
    KeyF:'f',
    KeyG:'g',
    KeyH:'h',
    KeyI:'i',
    KeyJ:'j',
    KeyK:'k',
    KeyL:'l',
    KeyM:'m',
    KeyN:'n',
    KeyO:'o',
    KeyP:'p',
    KeyQ:'q',
    KeyR:'r',
    KeyS:'s',
    KeyT:'t',
    KeyU:'u',
    KeyV:'v',
    KeyW:'w',
    KeyX:'x',
    KeyY:'y',
    KeyZ:'z',
    Comma:',',
    Period:'.',
    Slash:'-',
    Semicolon:'ñ',
    Quote:'´¨',
    BracketLeft:'`^',
    BracketRight:'+',
    Backquote:'ç'
  },
  de: {
    KeyA:'a',
    KeyB:'b',
    KeyC:'c',
    KeyD:'d',
    KeyE:'e',
    KeyF:'f',
    KeyG:'g',
    KeyH:'h',
    KeyI:'i',
    KeyJ:'j',
    KeyK:'k',
    KeyL:'l',
    KeyM:'m',
    KeyN:'n',
    KeyO:'o',
    KeyP:'p',
    KeyQ:'q',
    KeyR:'r',
    KeyS:'s',
    KeyT:'t',
    KeyU:'u',
    KeyV:'v',
    KeyW:'w',
    KeyX:'x',
    KeyY:'z',
    KeyZ:'y',
    Comma:'ä',
    Period:'.',
    Slash:'-',
    Semicolon:'ö',
    Quote:`ä`,
    BracketLeft:'+',
    BracketRight:'ü',
    Backquote:'#',

  },
  am: {
    KeyA:'አ',
    KeyB:'ብ',
    KeyC:'ች',
    KeyD:'ድ',
    KeyE:'እ',
    KeyF:'ፍ',
    KeyG:'ግ',
    KeyH:'ህ',
    KeyI:'ኢ',
    KeyJ:'ጅ',
    KeyK:'ክ',
    KeyL:'ል',
    KeyM:'ም',
    KeyN:'ን',
    KeyO:'ኦ',
    KeyP:'ፕ',
    KeyQ:'ቅ',
    KeyR:'ር',
    KeyS:'ስ',
    KeyT:'ት',
    KeyU:'ኡ',
    KeyV:'ቭ',
    KeyW:'ው',
    KeyX:'ሽ',
    KeyY:'ይ',
    KeyZ:'ዝ',
    Comma:'፣',
    Period:'።',
    Slash:'/',
    Semicolon:'፤',
    Quote:`'`,
    BracketLeft:']',
    BracketRight:'[',
    Backquote:'\\',

  },
  ch: {
    KeyA:'啊',
    KeyB:'吧',
    KeyC:'从',
    KeyD:'的',
    KeyE:'额',
    KeyF:'发',
    KeyG:'给',
    KeyH:'和',
    KeyI:'i',
    KeyJ:'就',
    KeyK:'看',
    KeyL:'了',
    KeyM:'吗',
    KeyN:'你',
    KeyO:'哦',
    KeyP:'怕',
    KeyQ:'去',
    KeyR:'人',
    KeyS:'是',
    KeyT:'他',
    KeyU:'u',
    KeyV:'v',
    KeyW:'我',
    KeyX:'下',
    KeyY:'有',
    KeyZ:'在',
    Comma:'，',
    Period:'。',
    Slash:'、',
    Semicolon:'；',
    Quote:`‘`,
    BracketLeft:'】',
    BracketRight:'【',
    Backquote:'、',

  },
  fr: {
    KeyA:'q',
    KeyB:'b',
    KeyC:'c',
    KeyD:'d',
    KeyE:'e',
    KeyF:'f',
    KeyG:'g',
    KeyH:'h',
    KeyI:'i',
    KeyJ:'j',
    KeyK:'k',
    KeyL:'l',
    KeyM:',',
    KeyN:'n',
    KeyO:'o',
    KeyP:'p',
    KeyQ:'a',
    KeyR:'r',
    KeyS:'s',
    KeyT:'t',
    KeyU:'u',
    KeyV:'v',
    KeyW:'z',
    KeyX:'x',
    KeyY:'y',
    KeyZ:'w',
    Comma:';',
    Period:':',
    Slash:'!',
    Semicolon:'m',
    Quote:`ù`,
    BracketLeft:'$',
    BracketRight:'',
    Backquote:'*',

  },

}

const Regexes={
  en : /["a-zA-Z"]/,
  he : /["א-ת"]/,
  ar : /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]/,
  ru : /[\u0400-\u04FF]/,
  es : /[\u00C0-\u00ff\s]/,
  fr:  /[\u00C0-\u017F]/,
  ch: /^[\u4e00-\u9fa5]{0,}$/,
  am: /[\u1200-\u137F]/,
  chars:/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
}

const TranslateToTextLanguage =(text,language)=>{
    
    let defaultLanguage = dictionary[`${language}`]

    let word = text.toLowerCase()
    let checkWord = word[0]
    let newWord = ''
   
    for(let i=0;i<word.length;i++){
      if(!word[i].match(Regexes.chars)){
        checkWord=word[i]
        break;
      }
    }
    
    if(!word[0].match(Regexes.chars)){
            checkWord = word[0]
        }
    else{

    }

      if(!checkWord.match(Regexes[`${language}`]))
      {
        
        let currentLanguage = GetWordLanguage(checkWord)
        
        for(let i=0;i<word.length;i++){
         
                switch (word[i]) {
                case currentLanguage.KeyA:newWord+=defaultLanguage.KeyA
                break;
                case currentLanguage.KeyB:newWord+=defaultLanguage.KeyB
                break;
                case currentLanguage.KeyC:newWord+=defaultLanguage.KeyC
                break;
                case currentLanguage.KeyD:newWord+=defaultLanguage.KeyD
                break;
                case currentLanguage.KeyE:newWord+=defaultLanguage.KeyE
                break;
                case currentLanguage.KeyF:newWord+=defaultLanguage.KeyF
                break;
                case currentLanguage.KeyG:newWord+=defaultLanguage.KeyG
                break;
                case currentLanguage.KeyH:newWord+=defaultLanguage.KeyH
                break;
                case currentLanguage.KeyI:newWord+=defaultLanguage.KeyI
                break;
                case currentLanguage.KeyJ:newWord+=defaultLanguage.KeyJ
                break;
                case currentLanguage.KeyK:newWord+=defaultLanguage.KeyK
                break;
                case currentLanguage.KeyL:newWord+=defaultLanguage.KeyL
                break;
                case currentLanguage.KeyM:newWord+=defaultLanguage.KeyM
                break;
                case currentLanguage.KeyN:newWord+=defaultLanguage.KeyN
                break;
                case currentLanguage.KeyO:newWord+=defaultLanguage.KeyO
                break;
                case currentLanguage.KeyP:newWord+=defaultLanguage.KeyP
                break;
                case currentLanguage.KeyQ:newWord+=defaultLanguage.KeyQ
                break;
                case currentLanguage.KeyR:newWord+=defaultLanguage.KeyR
                break;
                case currentLanguage.KeyS:newWord+=defaultLanguage.KeyS
                break;
                case currentLanguage.KeyT:newWord+=defaultLanguage.KeyT
                break;
                case currentLanguage.KeyU:newWord+=defaultLanguage.KeyU
                break;
                case currentLanguage.KeyV:newWord+=defaultLanguage.KeyV
                break;
                case currentLanguage.KeyW:newWord+=defaultLanguage.KeyW
                break;
                case currentLanguage.KeyX:newWord+=defaultLanguage.KeyX
                break;
                case currentLanguage.KeyY:newWord+=defaultLanguage.KeyY
                break;
                case currentLanguage.KeyZ:newWord+=defaultLanguage.KeyZ
                break;
                case currentLanguage.Comma:newWord+=defaultLanguage.Comma
                break;
                case currentLanguage.Period:newWord+=defaultLanguage.Period
                break;
                case currentLanguage.Slash:newWord+=defaultLanguage.Slash
                break;
                case currentLanguage.Semicolon:newWord+=defaultLanguage.Semicolon
                break;
                case currentLanguage.Quote:newWord+=defaultLanguage.Quote
                break;
                case currentLanguage.BracketLeft:newWord+=defaultLanguage.BracketLeft
                break;
                case currentLanguage.BracketRight:newWord+=defaultLanguage.BracketRight
                break;
                case currentLanguage.Backquote:newWord+=defaultLanguage.Backquote
                break;
            default:
                newWord+= word[i]
        }
            }
      return newWord
    }
    else{
      return text
    }
    
}

const GetWordLanguage = (checkWord) =>{
    
        let currentLanguage =dictionary.en
        
          if(checkWord.match(Regexes.es)){
              currentLanguage=dictionary.es
          }
          else 
            if(checkWord.match(Regexes.he)){
                currentLanguage=dictionary.he
            }
          else 
            if(checkWord.match(Regexes.ar)){
                currentLanguage=dictionary.ar
            }
          else
            if(checkWord.match(Regexes.ru)){
              currentLanguage=dictionary.ru
            }
            else
              if(checkWord.match(Regexes.fr)){
                currentLanguage=dictionary.fr
              }
              else
                if(checkWord.match(Regexes.am)){
                  currentLanguage=dictionary.am
                }
                else{
                  if(checkWord.match(Regexes.ch)){
                      currentLanguage=dictionary.ch
                    }
          
          return currentLanguage;
}


export default TranslateToTextLanguage