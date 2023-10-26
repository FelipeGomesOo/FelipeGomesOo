import React from 'react';
import { useTranslation } from 'react-i18next';  
import { Link } from 'react-router-dom'; 
import { Helmet } from 'react-helmet'; 

export default function NotFoundPage(){ 
    const { t } = useTranslation();
    return( 
        <div className="NotFoundPage">
            <Helmet>
                <title>{t('notFoundPage.title')}</title>
                <meta name="description" content={t('notFoundPage.description')} />
            </Helmet>
            <section className="hero">
                <div className="row">
                    <div className="small-12 columns">
                        <h1>{t('notFoundPage.title')}</h1>
                        <h3>{t('notFoundPage.description')}</h3>
                        <Link className='inline_link' to={"/"}>{t('notFoundPage.see_also')}</Link>   
                    </div> 
                </div>
            </section>
        </div>
)}