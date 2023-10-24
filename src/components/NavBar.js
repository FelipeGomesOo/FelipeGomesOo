import React from 'react';
import imgs from '../assets/images';
import {Link} from 'react-router-dom';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export default function NavBar(){
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return(
    <header>
        <div className="row">
            <div className="small-6 columns">             
                <Link className="logotipo" to="/">
                    <img src={imgs.logo}  alt="logo Felipe Gomes" />
                </Link>              
            </div> 
            <nav className="small-6 columns">
                <ul className="show-for-large">
                    <li><a href="/#projetos">{t('projects.title')}</a></li>
                    <li><a href="/#sobre">{t('about.title')}</a></li>
                    <li><a href="/#contatos">{t('contact.title')}</a></li>
                    <button type="button" onClick={() => changeLanguage('pt')}>PT</button>
                    <button type="button" onClick={() => changeLanguage('en')}>EN</button>
                </ul>
                <div className="hide-for-large"></div>
            </nav>
        </div>
    </header>
)}
