import React from 'react'
import { useTranslation } from 'react-i18next';



export default function HeaderDescription() {
    const { t  } = useTranslation();
    return (
        <>
        <h1 className ='myName'>{t('name')}</h1>
          <h3 className ='prefix'>{t("intro")}</h3>
        <p className ="description">
           {t('description_first')}
          <span class="outer">
              <div class="inner">
                <span>
                 {t("word_rotating_1")}<br/>
                 {t("word_rotating_2")}<br/>
                 {t("word_rotating_3")}<br/>
                 {t("word_rotating_4")}
                </span>
              </div>
            </span> <br /> {t('description_second')}
          </p>  
          </>  
        
    )
}
