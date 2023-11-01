import React from 'react';  
import Projects from '../components/Projects';
import imgs from '../assets/images';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet'; 
 

export default function HomePage(){
    const currentYear = new Date().getFullYear();  
    const { t } = useTranslation();
    return(
        <div className="HomePage">
            <Helmet>
                <title>{t('homePage.metaData.title')}</title>
                <meta name="description" content={t('homePage.metaData.description')} />
            </Helmet>
            <section className="hero">
                <div className="row">
                    <div className="small-12 columns">
                        <h1>{t('homePage.hero.title')} <span>{t('homePage.hero.subtitle')}</span></h1>
                    </div> 
                </div>
            </section>             
            {<Projects />} 
            <section className="sobre" id="sobre">
                <div className="row">
                    <div className="small-12 columns"><h2>{t('about.title')}</h2></div>
                    <div className="small-12 medium-12 large-6 columns">
                        <h3>{t('about.description')}</h3>
                    </div>
                    <div className="small-12 medium-12 large-5 columns">
                        <div className="row">
                            <div className="small-12 medium-6 large-12 columns">
                                <h4>{t('about.xp.title')}</h4>
                                <ul>
                                    <li>2020 . 2023 - <a className='inline_link' target="_blank" rel="noreferrer" href="http://www.arajarapark.com.br/">Arajara Park</a> - {t('about.xp.pos.01')}</li>
                                    <li>2013 . 2017 - <a className='inline_link' target="_blank" rel="noreferrer" href="http://www.pedesonhos.com.br/">Pé de Sonhos</a> - {t('about.xp.pos.02')}</li>
                                    <li>2011 . 2011 - <a className='inline_link' target="_blank" rel="noreferrer" href="http://www.piloti.com.br/">Piloti Mobile & Internet</a> - {t('about.xp.pos.03')}</li>                                    
                                </ul>
                            </div>
                            <div className="small-12 medium-6 large-12   columns">
                                <h4>{t('about.acad.title')}</h4>
                                <ul>  
                                    <li>2021 - {t('about.acad.course.01')} - <a className='inline_link' target="_blank" rel="noreferrer" href="https://www.espm.br/">ESPM</a></li>
                                    <li>2016 - {t('about.acad.course.02')} - <a className='inline_link' target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1tcpddJqf4eTDqPeG7uyJCb_rnxr_BmkH/view">General Assembly</a></li>
                                    <li>2013 - {t('about.acad.course.03')} - <a className='inline_link' target="_blank" rel="noreferrer" href="https://www.anglia.ac.uk/study/undergraduate/graphic-design">Anglia Ruskin University</a></li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="contatos">
                <div className="row">
                    <div className="small-12 columns">
                        <h2>{t('contact.title')}</h2>
                    </div>
                </div>
                <div className="row">
                    <h3 className="small-12 large-6 columns">                         
                        <a className="email" href="mailto:contato@felipe-gomes.com">contato@felipe-gomes.com</a> 
                        <br /><img className="zap" width="22" src={imgs.whatsapp} alt=""/>
                        <span className="telefone">&nbsp;(21)&nbsp;99147-4675</span>                        
                    </h3>
                    <div className="small-12 large-5 columns">
                        <div className="row">
                            <div className="small-12 columns">
                                <h4>{t('contact.see_also')}</h4>                              
                                    <a className="behance inline_link" target="_blank" rel="noreferrer" href="https://www.behance.net/FelipeGomesO_o" >
                                        <span>Behance</span>
                                    </a>&nbsp;&nbsp;&nbsp;
                                    <a className="linkedin inline_link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/felipegomesoliveira/" >
                                        <span>Linkedin</span>
                                    </a>&nbsp;&nbsp;&nbsp;
                                    <a className="github inline_link" target="_blank" rel="noreferrer" href="https://github.com/FelipeGomesOo" >
                                        <span>Github</span>
                                    </a>                            
                            </div>
                        </div>
                    </div>
                </div>
        </footer>        
        <section className="copyright">
            <div className="row">
                <div className="small-12 columns">
                    <small>© {currentYear} – Felipe Gomes</small>
                </div>
            </div>
        </section>

    </div>
)}