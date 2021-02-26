import { ChangeLang } from '../types/Langue';

export const ChangeLanguage = (lang) => {
    if(lang === "uz"){
        return {
            type : ChangeLang.uz
        }
    }else{
        return{
            type : ChangeLang.ru
        }
    }
}