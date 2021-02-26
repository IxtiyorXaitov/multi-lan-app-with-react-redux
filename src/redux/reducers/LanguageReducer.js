import {ChangeLang} from '../types/Langue';
import {ruLang} from '../LangRu';
import {uzLang} from '../LangUZ';


export const LanguageReducer = (state = ruLang, action) => {
    switch (action.type) {
        case ChangeLang.uz:
            return {
                state: uzLang
            };
        default:
            return {
                state: ruLang
            }
    }
}