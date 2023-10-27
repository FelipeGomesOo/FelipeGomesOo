import React from 'react';
import imgs from '../assets/images';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from './ChangeLanguage';
export default function NavBar(){
    const { t  } = useTranslation();
    
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
                    <li><ChangeLanguage /></li>
                </ul>                
            </nav>
        </div>
    </header>
)}
