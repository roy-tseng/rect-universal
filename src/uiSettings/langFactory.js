import UI_TITLE_TW from "./langTW"
import UI_TITLE_US from "./langUS"

export const SupportedLang = {
    US : 'us',
    TW : 'tw'
}


const langFactory = (GlobalLang='tw') => {

    var langPack = null;

    switch(GlobalLang){
        case SupportedLang.TW : 
            langPack = UI_TITLE_TW;
            break;
        case SupportedLang.US:
            langPack = UI_TITLE_US;
            break;
        default:
            langPack = UI_TITLE_TW;
            break;
    }

    return langPack;    
}

export default langFactory;
