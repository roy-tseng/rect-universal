import UI_LANG_TW from "./langTW"
import UI_LANG_US from "./langUS"

export const SupportedLang = {
    US : 'us',
    TW : 'tw'
}


const langFactory = (GlobalLang='tw') => {

    var langPack = null;

    switch(GlobalLang){
        case SupportedLang.TW : 
            langPack = UI_LANG_TW;
            break;
        case SupportedLang.US:
            langPack = UI_LANG_US;
            break;
        default:
            langPack = UI_LANG_TW;
            break;
    }

    return langPack;    
}

export default langFactory;
