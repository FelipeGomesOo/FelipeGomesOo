import React  from "react"; 
import {Link} from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const projectsData =  t('projects.data', { returnObjects: true });
  return (   
    <section className="projetos" id="projetos">
      <div className="os-projetos">
        <div className="row">    
          {
            projectsData.map((proj, index) => {
            return (        
              <div key={index} className="small-12 medium-6 large-4 columns">
                <Link className="block" to={`/projects/${proj.name}`}>
                  <img src={proj.info.thumb} alt={proj.client.name} />
                  <div className="overlay">
                    <div className="inner">
                      <div className="nome-do-projeto">
                        <h3>{proj.client.name}</h3>
                        <h4 className="mg-0">{proj.info.tagline}</h4>
                      </div>
                    </div>
                    </div>
                </Link>
              </div>
            );})
          }
     </div>
  </div>
</section>
)}

 