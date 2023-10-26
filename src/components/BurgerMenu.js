import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useTranslation } from 'react-i18next';

export default function BurgerMenu() {
    const { t, i18n } = useTranslation();
const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};
  return (
      <div className="hide-for-large">
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "root" } right >    
            <ul> 
                <li><a href="/#projetos">{t('projects.title')}</a></li>
                <li><a href="/#sobre">{t('about.title')}</a></li>
                <li><a href="/#contatos">{t('contact.title')}</a></li> 
                <li className='language_select'> 
                    <a href="/#" onClick={(e) => {e.preventDefault() ; changeLanguage('pt')}}>PT</a>
                    <a href="/#" onClick={(e) => {e.preventDefault() ; changeLanguage('en')}}>EN</a>
                </li>
            </ul>                
      </Menu> 
      </div>
  );
}
