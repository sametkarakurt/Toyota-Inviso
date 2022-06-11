import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';


import english from "./en/common.json";
import turkish from "./tr/common.json";


i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
    lng:'tr',
    resources: {
      tr:turkish,
      en:english,
    }, 
    react:{
      useSuspense:false,
    },
  });


export default i18next;