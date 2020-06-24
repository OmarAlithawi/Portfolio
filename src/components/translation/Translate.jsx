import React from 'react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function Translate() {
    const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div>
        <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
          <button onClick={()=>handleClick('en')} >
            English
          </button>
          <button onClick={()=>handleClick('ar')} >
           Arabic
          </button>
        
        </nav>
         
          <p>
            <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
          </p>
        
    </div>
  );
}
