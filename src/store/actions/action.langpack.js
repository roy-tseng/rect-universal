import {ChangeLanguagePackActions} from "../actionDef/actionDef"


export const ChangeLanguagePackActionsMaker = {

    TW : function (data) {
        return {type : ChangeLanguagePackActions.TW, payload: data};
    },

    US : function (data) {
        return {type : ChangeLanguagePackActions.US, payload: data};
    }
}