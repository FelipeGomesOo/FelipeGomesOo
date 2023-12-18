import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import projectsDataPT from './data/projectsDataPT';
import projectsDataEN from './data/projectsDataEN';

i18n

  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        'pt': {
            translation: {
                homePage: {
                    metaData: {
                        title: 'Felipe Gomes | Designer e Desenvolvedor Front-end',
                        description: 'Eu sou Felipe e trabalho com criação de marcas, design de interfaces digitais e programação front-end. Aqui você também encontra projetos de UX, sinalização e papelaria.',
                    },
                    hero: {                
                        title: 'Oi! Me chamo Felipe.',
                        subtitle: 'Eu sou designer e desenvolvedor front-end.',
                    }                    
                },                
                projects:{
                    title: 'Projetos',
                    data: projectsDataPT,
                    next: 'Próximo projeto'
                },
                about:{
                    title: 'Sobre',
                    description: 'Trabalho com criação de marcas, design de interfaces digitais e programação frontend. Aqui você também encontra projetos de UX, sinalização, papelaria e embalagem.',
                    xp:{
                        title: 'Experiência',
                        pos: {
                            'arajara':'Gerente de Marketing',
                            'oowlish':'Frontend Designer',
                            'pds':'Designer Júnior',
                            'piloti':'Designer',
                            'onespacemedia':'Designer' 
                        }
                    },
                    acad:{
                        title: 'Formação Acadêmica',
                        course: {
                            '01':'MBA em Marketing',
                            '02':'Design da Experiência do Usuário',
                            '03':'Graduação em Design Gráfico' 
                        }
                    }                     
                },
                contact:{
                    title: 'Contato',
                    see_also: 'Outros'
                },
                projectPage:{
                    title: 'O projeto',
                    client: 'Cliente',
                    services: 'Serviços',
                    industry: 'Setor',
                    location: 'Localização',
                    resources: 'Ferramentas',
                    supervision: 'Direção',
                    liveButon: 'Confira o site',
                    githubButon: 'Repositório'
                },
                notFoundPage: {
                    title: 'Pagina não encontrada',
                    description: 'Desculpe, a página que você está tentando acessar não existe.',
                    see_also: 'Retornar para página inicial'
                }
            }
        },
        'en': {
            translation: {
                homePage: {
                    metaData: {
                        title: 'Felipe Gomes | Front-end designer & front-end developer',
                        description: "Hello, I'm Felipe, and I specialize in brand creation, digital interface design, and front-end programming. In my portfolio, you'll discover a diverse range of projects, including UX design, signage, and stationery design.",
                    },
                    hero: {  
                        title: "Hello. I'm Felipe.",
                        subtitle: "I'm a brazilian interdisciplinary designer & front-end developer.",
                    }
                },               
                projects:{
                    title: 'Work',
                    data: projectsDataEN,
                    next: 'Next project'
                },
                about:{
                    title: 'About',
                    description: 'I work with brand creation, digital interface design and frontend programming. Here you can find UX, signage, paper goods and packaging projects.',
                    xp:{
                        title: 'Experience',
                        pos: {
                            'arajara':'Gerente de Marketing',
                            'oowlish':'Frontend Designer',
                            'pds':'Designer Júnior',
                            'piloti':'Designer',
                            'onespacemedia':'Designer'  
                        }
                    },
                    acad:{
                        title: 'Academic Background',
                        course: {
                            '01':'MBA in Marketing',
                            '02':'User Experience Design',
                            '03':'Graphic Design BA (Hons)' 
                        }
                    }
                },
                contact:{
                    title: 'Contact',
                    see_also: 'See also'
                },
                projectPage:{
                    title: 'The assignment',
                    client: 'Client',
                    services: 'Services',
                    industry: 'Industry',
                    location: 'Location',
                    resources: 'Resources',
                    supervision: 'Supervision',
                    liveButon: 'Live version',
                    githubButon: 'Github repo'
                },                
                notFoundPage: {
                    title: 'Page not found',
                    description: 'Sorry, the page you are looking for does not exist.',
                    see_also: 'Return to homepage'
                }
            }
        }
    },
    fallbackLng: 'pt-br',
    debug: true,
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;