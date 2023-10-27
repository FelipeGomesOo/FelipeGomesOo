import { useTranslation } from 'react-i18next';
export default function ChangeLanguage() {
    const { i18n } = useTranslation();     
    const handleLanguageChange = (e, lng) => {
        e.preventDefault();         
        i18n.changeLanguage(lng)  
    } 
    return (
        <ul className='ChangeLanguage'>
            <li> 
                <a className={i18n.language === 'pt' && 'active'} href="/#" onClick={(e) => {handleLanguageChange(e,'pt')}}>PT</a>
            </li>
            <li> 
                <a className={i18n.language === 'en' && 'active'} href="/#" onClick={(e) => {handleLanguageChange(e,'en')}}>EN</a>
            </li>
        </ul>        
)}