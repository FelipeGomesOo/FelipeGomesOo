import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';   
import {useParams, Navigate} from 'react-router-dom';  
import { useTranslation } from 'react-i18next'; 
import { Helmet } from 'react-helmet';
export default function ProjectPage(){
    const { t } = useTranslation();
    const projectsData =  t('projects.data', { returnObjects: true }).filter(objeto => objeto.visible === true);
    
    const {projectName} = useParams();
    const project = projectsData.find(proj => proj.name === projectName);

    if (!project) {
        return <Navigate to="/404" />
    } 

    const nextProject = projectsData[projectsData.indexOf(project) === projectsData.length - 1 ? 0 : projectsData.indexOf(project) + 1];

    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0); 
        }, []);      
        return null;
      }
    
    return(  
        <div className="ProjectsPage">
            <Helmet>
                <title>{`${project.client.name} | Felipe Gomes`}</title>
                <meta name="description" content={project.info.description} /> 
            </Helmet>
            <ScrollToTopOnMount />                 
            <section className="hero">
                <div className="row">                    
                    <div className="small-12 large-4 large-push-1 columns">                        
                        <div className="dados">                                
                            <h4>{project.info.tagline}</h4>
                            <h1>{project.client.name}</h1>                                    
                            <h3>{project.info.shortDescription}</h3>
                            { project.info.hasOwnProperty('live') && 
                             <Link rel='noopener noreferrer' target='_blank' alt={t('projectPage.liveButon')} className='inline_link' to={`${project.info.live}`}>{t('projectPage.liveButon')}</Link>
                            }
                            { project.info.hasOwnProperty('githubRepo') && 
                              <Link rel='noopener noreferrer' target='_blank' alt={t('projectPage.githubButon')} className='inline_link' to={`${project.info.githubRepo}`}>{t('projectPage.githubButon')}</Link>    
                            }
                        </div>                        
                    </div>
                    <div className="small-12 large-8 columns">
                        <img className="imagem-destaque" src={project.info.mainImage} alt={project.client.name} />
                    </div>
                </div> 
            </section>
            <div className="imagens-projeto">
                <div className="row">
                    <div className="small-12 columns">
                        <h2>{t('projectPage.title')}</h2>
                    </div>
                </div>  
                <article>
                    <div className="row">
                        <div className="small-12 medium-12 large-6 columns">
                            <h3>{project.info.description}</h3>
                        </div>
                        <div className="small-12 medium-12 large-5 columns">
                            <div className="row">
                                <div className="small-12 medium-6 columns">
                                    <h4>{t('projectPage.client')}</h4>
                                    <p><a className='inline_link' target="_blank" rel="noreferrer" href={project.client.site}>{project.client.name}</a></p>
                                </div>
                                <div className="small-12 medium-6 columns">
                                    <h4>{t('projectPage.services')}</h4>
                                    <p>{project.info.services.join(', ')}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="small-12 medium-6 columns">
                                    <h4>{t('projectPage.industry')}</h4>
                                    <p>{project.client.sector}</p>
                                </div>
                                { project.client.hasOwnProperty('location') &&
                                    <div className="small-12 medium-6 columns">
                                        <h4>{t('projectPage.location')}</h4>
                                        <p>{project.client.location}</p>
                                    </div>
                                }
                            </div>
                            <div className="row">
                                <div className="small-12 medium-6 columns">
                                    <h4>{t('projectPage.resources')}</h4>
                                    <p>{project.info.tools.join(', ')}</p>
                                </div>
                                {  project.info.hasOwnProperty('direction') && 
                                    <div className="small-12 medium-6 columns">
                                        <h4>{t('projectPage.supervision')}</h4>
                                        <p>{project.info.direction.name} da <a  className='inline_link' target="_blank" rel="noreferrer" href={project.info.direction.url}>{project.info.direction.company}</a></p>
                                    </div> 
                                }
                            </div>                             
                        </div>
                    </div>
                </article>                     
                {   project.sections.map((section, index) => {
                        let divider = ""; 
                         divider = section.thumbs ? (section.thumbs.length === 1 ? 'medium-5 ' : '') : ''; 
                        //console.log(section.video.length); 
                        
                        return (
                            <div className="row" key={index}>
                                <div className={`small-12 ${divider} columns`}>
                                    <h2>{section.title}</h2>
                                    <p>{section.subtitle}</p>
                                </div> 
                                {
                                    section.video && <div className={`small-12  columns `}>
                                        <div className="responsive-embed widescreen"> 
                                    <iframe type="text/html"  width={section.video.width} height={section.video.height} src={section.video.src} title={section.video.title}    allowFullScreen={true}></iframe>
                                    </div></div>
                                }                               
                                {section.thumbs && section.thumbs.map((thumb, index) => {
                                    return (
                                        <div className={`small-12 medium-${thumb.size} end columns`} key={index}>   
                                            <img src={thumb.src} alt={thumb.alt} />
                                            {thumb.hasOwnProperty('alt') && <figcaption>{thumb.alt}</figcaption>}
                                        </div>
                                    )
                                })}                                 
                            </div>
                        );
                    })}
            </div> 
            <section className="proximo-projeto ">
                <div className="prox-proj-header">
                    <div className="row">
                        <div className="small-12 columns">
                            <h2>{t('projects.next')}</h2>
                        </div>
                    </div>
                </div>
                <Link className="block hero" to={`/projects/${nextProject.name}`}>
                    <div className="row">                        
                        <div className="small-12 large-3 large-push-1 columns">                            
                            <div className="dados">
                                <h4>{nextProject.info.tagline}</h4>
                                <h1>{nextProject.client.name}</h1>
                                <h3>{nextProject.info.shortDescription}</h3>
                            </div>                            
                        </div>
                        <div className="small-12 large-8 columns">
                            <img className="imagem-destaque" src={nextProject.info.mainImage} alt={nextProject.client.name} />
                        </div>
                    </div>
                </Link> 
            </section>                       
        </div>
)}