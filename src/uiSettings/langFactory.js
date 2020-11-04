import UI_TITLE_TW from "./langTW"

export var GlobalLang = 'tw';

const langFactory = () => {

    var langPack = null;

    switch(GlobalLang){
        case 'tw' : 
            langPack = UI_TITLE_TW;
            break;
        default:
            langPack = UI_TITLE_TW;
            break;
    }

    return langPack;    
}

export default langFactory;
