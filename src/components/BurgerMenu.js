import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useTranslation } from 'react-i18next';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import ChangeLanguage from './ChangeLanguage';
import imgs from '../assets/images';

export default function BurgerMenu() {
    const { t } = useTranslation();        
    const projectsData =  t('projects.data', { returnObjects: true });
    return (
        <div className="hide-for-large">
            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "root" } right customBurgerIcon={ <img alt="Menu" src={imgs.menuIcon} /> }  > 
                <h4>Menu</h4>   
                <ul> 
                    <li> 
                        <Dropdown buttonText={t('projects.title')}>{
                            projectsData.map((proj, index) => {              
                                return ( 
                                    proj.visible &&        
                                    <li key={index}>
                                        <Link to={`/projects/${proj.name}`}>
                                            {proj.client.name}
                                        </Link>
                                    </li>
                                );
                            })
                        }</Dropdown> 
                    </li>
                    <li><a href="/#sobre">{t('about.title')}</a></li>
                    <li><a href="/#contatos">{t('contact.title')}</a></li>                     
                </ul> 
                <hr />
                <ChangeLanguage />                
            </Menu> 
      </div>
    );
}
