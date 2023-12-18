import imgs from '../assets/images';

const projectsData = [
    {         
        name: 'primavera-dos-paes',
        visible: false,
        client: {
            name: 'Primavera dos Pães',
            site: 'http://www.primaveradospaes.com.br/',
            sector: 'Padaria',
            location: 'Rio de Janeiro, RJ'
        },
        info: {
            tagline: 'Branding',
            shortDescription: 'Marca para a Primavera dos Pães',
            description: 'A Primavera dos Pães é uma padaria artesanal que produz pães de fermentação natural, brioches e biscoitos com ingredientes orgânicos e nacionais',
            services:['UI Design','Front-end'],
            tools:['Branding','Papelaria','Sinalização'],
            thumb: imgs.thumb_primavera_dos_paes,
            mainImage: imgs.main_primavera_dos_paes            
        },
        sections: [
            {
                title: 'Propostas',             
                thumbs: 
                [
                    {
                        src: imgs.gallery_ana_opt_01, 
                        alt: 'Opção 01 - Caligráfica com simbolo do balão',
                        size: 4                     
                    }, 
                    {
                        src: imgs.gallery_ana_opt_02,
                        alt: 'Opção 02 - Alusão a fotografia dos pés',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ana_opt_03,
                        alt: 'Opção 03 - Símbolo do frame + abelha',
                        size: 4
                    } 
                ]
            },
            {
                title: 'Construção da marca',             
                thumbs: 
                [
                    {
                        src: imgs.gallery_ana_construcao_01, 
                        alt: 'Quem nunca viu uma dessas no instagram?',
                        size: 4                     
                    }, 
                    {
                        src: imgs.gallery_ana_construcao_02,
                        alt: 'Representação à lápis',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ana_construcao_03,
                        alt: 'Cores "abelhudas" Amarelo + Marrom',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ana_01,
                        alt: 'Versão final horizontal',
                        size: 12
                    } 
                ]
            },
            {
                title: 'Aplicações',             
                thumbs: 
                [      
                    
                    {
                        src: imgs.gallery_ana_06,                        
                        size: 6
                    },   
                    {
                        src: imgs.gallery_ana_05,                        
                        size: 6
                    },
                    {
                        src: imgs.gallery_ana_04,                        
                        size: 6
                    }, 
                    {
                        src: imgs.gallery_ana_07,                        
                        size: 6
                    },
                    {
                        src: imgs.gallery_ana_03,                        
                        size: 12
                    }
                ]
            }
        ]
    },
    {  
        name: 'jamming',
        visible: true,
        client: {
            name: 'Jamming',
            site: 'http://www.felipe-gomes.com/jamming/',
            sector: 'Música'
        },
        info: {
            tagline: 'Web app',
            shortDescription: 'Um aplicativo React para gerir playlists de músicas do Spotify',
            description: 'O jamming permite ao usuário pesquisar na biblioteca do Spotify, criar uma playlist personalizada e salvá-la em sua conta do Spotify. Inicialmente foi desenvolvido para fins de estudo e prática no curso Front-End Engineer da Codecademy, no entanto, foram implementadas funcionalidades que não estavam listadas no projeto.',
            services:['UI Design','Front-end'],
            tools: ['React', 'HTML', 'SASS', 'Javascript'], 
            thumb: imgs.thumb_jamming,
            mainImage: imgs.main_jamming,
            live: 'http://www.felipe-gomes.com/jamming/',
            githubRepo: 'https://github.com/FelipeGomesOo/react-jamming'
        },
        sections: [
            /* {
                video: {
                    width: '560',
                    height: '315',
                    src: 'https://www.youtube.com/embed/9NTWdvuK-Rw?si=II-6Icg7mmOaFbfp',
                    title: 'Jamming - Web app'
                }   
            }, */
            {
                title: 'Fluxo de dados',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_jamming_flow_pt_hor, 
                        size: 12
                    },
                      
                ]
            },
            {
                title: 'Telas',                
                thumbs: 
                [
                    
                    {
                        src: imgs.gallery_jamming_01, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_jamming_02, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_jamming_03, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_jamming_04, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_jamming_05, 
                        size: 12
                    },
                      
                ]
            }
            
        ]
    },
    {  
        name: 'findMyHat',
        visible: false,
        client: {
            name: 'Find my Hat',
            site: 'http://www.felipe-gomes.com/findMyHat/',
            sector: 'Video Game'
        },
        info: {
            tagline: 'Video Game',
            shortDescription: 'Um jogo no estilo 16 bits criado com React',
            description: '"Find My Hat" é um jogo onde o objetivo é localizar um chapéu sem cair em armadilhas. O cenário é gerado automaticamente e aleatoriamente a cada início, proporcionando uma experiência única a cada jogada. Inicialmente concebido como parte de um estudo de javascript e node.js do curso Front-End Developer da Codecademy, o projeto evoluiu e foi implementado em React de modo que pudesse ser jogado diretamente no navegador.',
            services:['UI Design','Front-end'],
            tools: ['React', 'HTML', 'SASS', 'Javascript'], 
            thumb: imgs.thumb_findMyHat,
            mainImage: imgs.main_findMyHat,
            live: 'http://www.felipe-gomes.com/findMyHat/',
            githubRepo: 'https://github.com/FelipeGomesOo/find-my-hat'        
        },
        sections: [
            {
                title: 'Uma visão geral do jogo',
                subtitle: 'Neste vídeo você vai saber um pouco mais sobre como o jogo funciona e como foi construído.',
                video: {
                         
                    width: '560',
                    height: '315',
                    src: 'https://www.youtube.com/embed/9NTWdvuK-Rw?si=II-6Icg7mmOaFbfp',
                    title: 'Find My Hat'
                }   
            },
        ]
    }, 
    {  
        name: 'ficou-pequeno',
        visible: true,
        client: {
            name: 'Ficou Pequeno',
            site: 'http://www.ficoupequeno.com/',
            sector: 'E-commerce',
            location: 'Rio de Janeiro, RJ'
        },
        info: {
            tagline: 'Aplicativo',
            shortDescription: 'Aplicativo android para o ecommerce preferido das mamães e papais do Brasil.',
            description: 'O Ficou Pequeno é um marketplace de artigos de segunda mão infatil. O site já conta com mais de 20 mil usuários cadastrados e chegou a hora e fazer um aplicativo para android.',
            services:['UI Design','Front-end'],
            tools: ['Photoshop', 'HTML', 'CSS', 'Javascript'], 
            thumb: imgs.thumb_ficou_pequeno_mobile,
            mainImage: imgs.main_ficou_pequeno_mobile,        
            direction: {
                name: 'Alexandre Fischer',
                company: 'Pé de Sonhos',
                url: 'https://www.pedesonhos.com.br' 
            },
            live: 'http://www.ficoupequeno.com/',
        },
        sections: [
            {
                title: 'Como fazer a girafinha caber na palma da mão?',
                subtitle: 'Organizarmos a jornada do usuário em 13 fluxos de aproximadamente 170 telas. Desde o cadastro, carrinho de compras, busca, casdatro de produto, gestão dos vendas, troca de mensagens. Ufa.',
                thumbs: 
                [
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_fp,
                        size: 4                         
                    }
                ]
            },
            {
                title: 'Comprinha no aplicativo',
                subtitle: 'Quero comprar um vestido para minha filha de 6 anos. Me acompanha?',
                thumbs: 
                [
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_01,
                        alt: 'Vou na sessão de produtos.',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_02,
                        alt: 'Roupas para meninas',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_03,
                        alt: 'Vestidos',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_04,
                        alt: 'Hummm... não sei',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_05,
                        alt: 'Produtos em destaque',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_06,
                        alt: 'Vou melhorar minha pesquisa',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_08,
                        alt: 'Meninas',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_09,
                        alt: '6 anos',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_07,
                        alt: 'De preferência nunca usado',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_10,
                        alt: 'Nessa faixa de preços',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_11,
                        alt: 'Quais marcas vou escolher?',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_12,
                        alt: 'Pronto. Acho que é isso.',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_13,
                        alt: 'Esse vermelho parece ótimo.',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_14,
                        alt: 'Acho que encontrei!',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_14_b,
                        alt: 'E a lojinha parece ótima!',
                        size: 4
                    }, 
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_15,
                        alt:  'Vou colocar no carrinho.',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_16,
                        alt:  'Meu endereço está correto.',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_16_2,
                        alt:  'Tudo parece estar certinho.',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_16_3,
                        alt:  'Crédito!',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_17,
                        alt:  'Só um minutinho...',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_18,
                        alt:  'Obaaa!',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_19,
                        alt:  'Vou conferir minhas compras',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_20,
                        alt:  'Preciso combinar a retirada',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_21,
                        alt:  'Combinar retirada',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_22,
                        alt:  'Espero que ela responda logo!',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_23,
                        alt:  'Rapidinho!',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_24,
                        alt:  'Essa lojinha merece um elogio!',
                        size: 3
                    },
                    {
                        src: imgs.gallery_ficou_pequeno_mobile_25,
                        alt:  'Gente, eu amei!',
                        size: 3
                    }
                ]
            } 
        ]
    },
    {
        name: 'oro',
        visible: true,
        client: {
            name: 'Oro Restaurante',
            site: 'http://ororestaurante.com.br/',
            sector: 'Gastronomia',
            location: 'Rio de Janeiro, RJ'
        },
        info: {
            tagline: 'Site institucional',
            shortDescription: 'Cozinha brasileira de vanguarda, feita no fogo.',
            description: 'Fundado em 2010 pelo chef Felipe Bronze, o Oro segue uma trajetória marcada por muitos prêmios, inovações e revoluções na cena gastronômica brasileira.',
            services:['UI Design','Front-end'],
            tools: ['Photoshop', 'Illustrator', 'Wordpress'], 
            thumb: imgs.thumb_oro,
            mainImage: imgs.main_oro,        
            direction: {
                name: 'Alexandre Fischer',
                company: 'Pé de Sonhos',
                url: 'https://www.pedesonhos.com.br' 
            },
            live: 'http://ororestaurante.com.br/'
        },
        sections: [
            {
                title: 'Telas',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_oro_01,
                        size: 12
                         
                    },
                    {
                        src: imgs.gallery_oro_02,
                        size: 12 
                         
                    }
                ]
            }
        ]
    },
    {
        name: 'ecobras',
        visible: true,
        client: {
            name: 'Ecobras',
            site: 'http://www.ecobras.com.br/',
            sector: 'Alimentício',
            location: 'Rio de Janeiro, RJ'
        },
        info: {
            tagline: 'Site institucional',
            shortDescription: 'Produtos naturais à base de soja, sem glútem, açúcar ou lactose.',
            description: 'A Ecobras é uma fábrica que processa soja orgânica e transforma em alimentos deliciosos e saudáveis. Minha missão era repaginar o antigo site para que fosse responsivo e otimizado para mecanismos de busca.',
            services:['UI Design','Front-end'],
            tools: ['Photoshop', 'Illustrator', 'Wordpress'], 
            thumb: imgs.thumb_ecobras,
            mainImage: imgs.main_ecobras,        
        },
        sections: [
            {
                title: 'Telas',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_ecobras_01,
                        size: 12                         
                    },
                    {
                        src: imgs.gallery_ecobras_02,
                        size: 12                         
                    },
                    {
                        src: imgs.gallery_ecobras_03,
                        size: 12                         
                    }
                ]
            }
        ]
    },
    {
        name: '4a',
        visible: true,
        client: {
            name: '4a',
            site: 'http://www.4a.pt/',
            sector: 'Imobiliário',
            location: 'Portugal'
        },
        info: {
            tagline: 'Aplicativo',
            shortDescription: 'Branding para a empresa que constrói incríveis experiências imobiliárias em Portugal',
            description: 'A 4A desenvolve empreendimentos imobiliários de alta qualidade em Portugal e precisou de uma marca para conquistar o público em Vila Nova de Gaia no Porto.',
            services:['Branding','UI Design','Front-end','Papelaria'],
            tools: ['Photoshop', 'HTML', 'CSS', 'Javascript'], 
            thumb: imgs.thumb_4a,
            mainImage: imgs.main_4a,        
        },
        sections: [
            {
                title: 'Propostas',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_4a_opt_01,
                        alt: "Opção 01",
                        size: 4
                         
                    },
                    {
                        src: imgs.gallery_4a_opt_02,
                        alt: "Opção 02",
                        size: 4
                         
                    },
                    {
                        src: imgs.gallery_4a_opt_03,
                        alt: "Opção 03",
                        size: 4
                         
                    },
                    {
                        src: imgs.gallery_4a_01, 
                        size: 12                        
                    }
                ]
            },
            {
                title: 'Aplicações',                
                thumbs: 
                [                     
                    {
                        src: imgs.gallery_4a_02 ,
                        size: 12                         
                    },
                    {
                        src: imgs.gallery_4a_03,
                        size: 12                          
                    },
                    {
                        src: imgs.gallery_4a_04,
                        size: 12
                    },
                    {
                        src: imgs.gallery_4a_05,
                        size: 12
                    },
                    {
                        src: imgs.gallery_4a_06,
                        size: 4
                    },
                    {
                        src: imgs.gallery_4a_07,
                        size: 4
                    },
                    {
                        src: imgs.gallery_4a_08,
                        size: 4
                    },
                    {
                        src: imgs.gallery_4a_09,
                        size: 12
                    }
                ]
            }
        ]

    },
    {
        name: 'simacontabil',
        visible: true,
        client: {
            name: 'Sima Contábil',
            site: 'https://www.simacontabil.com.br/',
            sector: 'Contabilidade',
            location: 'Rio de Janeiro, RJ'
        },
        info: {
            tagline: 'Site institucional',
            shortDescription: 'Site para um escritório de contabilidade no Rio',
            description: 'A Sima é um escritório de contabilidade no Rio de Janeiro e oferece soluções completas em consultoria e terceirização de atividades contábeis, financeiras, fiscais e trabalhistas. Eles precisavam de um novo site para comunicar seu portfolio de serviços.',
            services:['Conteúdo','UI Design','Front-end'],
            tools: ['Photoshop', 'HTML', 'CSS', 'Javascript', 'PHP'], 
            thumb: imgs.thumb_simacontabil,
            mainImage: imgs.main_simacontabil,
            live: 'https://www.simacontabil.com.br/',        
        },
        sections: [
            {
                title: 'Telas',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_sima_01,
                        size: 12                         
                    },
                    {
                        src: imgs.gallery_sima_02,
                        size: 12                         
                    },
                    {
                        src: imgs.gallery_sima_03,
                        size: 12                        
                    } 
                ]
            }
        ] 
    },
    {
        name: 'bpa',
        visible: true,
        client: {
            name: 'Boureau Przewodowski Advocacia',
            site: 'https://bpadvocacia.adv.br/',
            sector: 'Jurídico',
            location: 'Rio de Janeiro, RJ'
        },
        info: {
            tagline: 'Redesign',
            shortDescription: 'Repensar a marca de um escritório com mais de 40 anos de história.',
            description: 'Escritório novo, marca nova. A BPA que presta consultoria jurídica nacional e internacional passou por um reposicionamento e foi necessário pensar uma nova identidade visual.',
            services:['Branding','Papelaria','Sinalização','UI Design','Front-end'],
            tools: ['Photoshop','Illustrator', 'HTML', 'CSS', 'Javascript'], 
            thumb: imgs.thumb_bpa,
            mainImage: imgs.main_bpa,        
        },
        sections: [
            {
                title: 'Marca Anterior',   
                subtitle: "Havia uma percepção de que os tipos caligráficos não refletiam os valores do escritório. Além disso, é importante esclarecer que, após o início do projeto, houve uma mudança na composição do quadro societário, resultando na transição de 'Fernandes & Przewodowski Advocacia' para 'Bureau Przewodowski Advocacia'",             
                thumbs: 
                [
                    {
                        src: imgs.gallery_bpa_marca_antiga,
                        alt: 'Marca anterior ao reposicionamento',
                        size: 4                       
                    }
                ]
            },
            {
                title: 'Propostas',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_bpa_opt_01,
                        alt: "Opção 01",
                        size: 4                         
                    },
                    {
                        src: imgs.gallery_bpa_opt_02,
                        alt: "Opção 02",
                        size: 4                         
                    },
                    {
                        src: imgs.gallery_bpa_opt_03,
                        alt: "Opção 03",
                        size: 4                         
                    } 
                ]
            },
            {
                title: 'Construção da marca',                
                thumbs: 
                [
                    {
                        src: imgs.gallery_bpa_construcao_01,
                        alt: "Minimalismo",  
                        size: 4                       
                    },
                    {
                        src: imgs.gallery_bpa_construcao_02,
                        alt: "Monograma",
                        size: 4                         
                    },
                    {
                        src: imgs.gallery_bpa_construcao_03,
                        alt: "Vermelho Pontual",
                        size: 4                        
                    }, 
                    {
                        src: imgs.gallery_bpa_01,
                        size: 12                        
                    }
                ]
            },
            {
                title: 'Aplicações',                
                thumbs: 
                [
                     
                    {
                        src: imgs.gallery_bpa_02,
                        size: 12
                    },
                    {
                        src: imgs.gallery_bpa_03,
                        size: 6
                    },
                    {
                        src: imgs.gallery_bpa_04,
                        size: 6
                    },
                    {
                        src: imgs.gallery_bpa_05,
                        size: 12
                    },
                    {
                        src: imgs.gallery_bpa_06,
                        size: 6
                    },
                    {
                        src: imgs.gallery_bpa_07,
                        size: 6
                    },                    
                    {
                        src: imgs.gallery_bpa_10,
                        size: 12
                    },
                    {
                        src: imgs.gallery_bpa_08,
                        size: 4
                    },
                    {
                        src: imgs.gallery_bpa_09,
                        size: 4
                    },
                    {
                        src: imgs.gallery_bpa_12,
                        size: 4
                    },
                    {
                        src: imgs.gallery_bpa_11,
                        size: 12
                    },
                    {
                        src: imgs.gallery_bpa_13,
                        size: 12
                    }
                ]
            },
        ] 

    },
    {
        name: 'v2v',
        visible: true,
        client: {
            name: 'V2V',
            site: 'https://www.v2v.net/',
            sector: 'Voluntariado',
            location: 'Rio de Janeiro, RJ'
        },
        info: {
            tagline: 'Site institucional',
            shortDescription: 'Plataformas de mobilização social para empresas.',
            description: 'V2V - Volunteer to Volunteer - oferece portais corporativos de voluntariado com a missão de reunir empresas socialmente responsáveis.',
            services:['UI Design','Front-end'],
            tools: ['Photoshop', 'HTML', 'CSS', 'Javascript'], 
            thumb: imgs.thumb_v2v,
            mainImage: imgs.main_v2v,        
            direction: {
                name: 'Alexandre Fischer',
                company: 'Pé de Sonhos',
                url: 'https://www.pedesonhos.com.br' 
            }
        },
        sections: [
            {
                title: 'Telas',             
                thumbs: 
                [
                    {
                        src: imgs.gallery_v2v_01,
                        size: 12
                    },
                    {
                        src: imgs.gallery_v2v_02,
                        size: 12
                    },
                    {
                        src: imgs.gallery_v2v_03,
                        size: 12
                    },
                    {
                        src: imgs.gallery_v2v_04,
                        size: 12
                    } 
                ]
            }
        ]
    },
    {
        name: 'anamel',
        visible: true,
        client: {
            name: 'Anamel Castro',
            site: 'http://www.anamelcastro.com.br/',
            sector: 'Fotografia',
            location: 'Rio de Janeiro, RJ'
        },
        info: {
            tagline: 'Identidade Visual',
            shortDescription: 'Branding sob medida para uma fotógrafa de família.',
            description: 'Ana é especialista em fotografia de família: ensaios, nascimento, festas e batizados. Depois de alinharmos caminhos visuais foram apresentadas 3 propostas para sua identidade visual.',
            services:['Branding','Papelaria'],
            tools: ['Photoshop', 'HTML', 'CSS', 'Javascript'], 
            thumb: imgs.thumb_anamel,
            mainImage: imgs.main_anamel,        
        },
        sections: [
            {
                title: 'Propostas',             
                thumbs: 
                [
                    {
                        src: imgs.gallery_ana_opt_01, 
                        alt: 'Opção 01 - Caligráfica com simbolo do balão',
                        size: 4                     
                    }, 
                    {
                        src: imgs.gallery_ana_opt_02,
                        alt: 'Opção 02 - Alusão a fotografia dos pés',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ana_opt_03,
                        alt: 'Opção 03 - Símbolo do frame + abelha',
                        size: 4
                    } 
                ]
            },
            {
                title: 'Construção da marca',             
                thumbs: 
                [
                    {
                        src: imgs.gallery_ana_construcao_01, 
                        alt: 'Quem nunca viu uma dessas no instagram?',
                        size: 4                     
                    }, 
                    {
                        src: imgs.gallery_ana_construcao_02,
                        alt: 'Representação à lápis',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ana_construcao_03,
                        alt: 'Cores "abelhudas" Amarelo + Marrom',
                        size: 4
                    },
                    {
                        src: imgs.gallery_ana_01,
                        alt: 'Versão final horizontal',
                        size: 12
                    } 
                ]
            },
            {
                title: 'Aplicações',             
                thumbs: 
                [      
                    
                    {
                        src: imgs.gallery_ana_06,                        
                        size: 6
                    },   
                    {
                        src: imgs.gallery_ana_05,                        
                        size: 6
                    },
                    {
                        src: imgs.gallery_ana_04,                        
                        size: 6
                    }, 
                    {
                        src: imgs.gallery_ana_07,                        
                        size: 6
                    },
                    {
                        src: imgs.gallery_ana_03,                        
                        size: 12
                    }
                ]
            }
        ]
    },
    {
        name: 'amoras',
        visible: true,
        client: {
            name: 'Pousada das Amoras',
            site: 'http://www.amorasbuzios.com.br/',
            sector: 'Hoteleiro',
            location: 'Rio de Janeiro, RJ'
        },
        info: {
            tagline: 'Site institucional',
            shortDescription: 'Site para a pousada mais charmosa e tranquila de Búzios.',
            description: 'À 250m da praia, a pousada conta com 11 suítes decoradas com bom gosto e simplicidade, bem à moda buziana. Portanto o site precisava ser simples e refletir todo o conforto e sossego das Amoras.',
            services:['UI Design','Front-end'],
            tools: ['Photoshop', 'HTML', 'CSS', 'Javascript'], 
            thumb: imgs.thumb_amoras,
            mainImage: imgs.main_amoras,        
            direction: {
                name: 'Alexandre Fischer',
                company: 'Pé de Sonhos',
                url: 'https://www.pedesonhos.com.br' 
            }
        },
        sections: [
            {
                title: 'Telas',             
                thumbs: 
                [                     
                    {
                        src: imgs.gallery_amoras_02, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_amoras_03, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_amoras_04, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_amoras_05, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_amoras_06, 
                        size: 12
                    },
                    {
                        src: imgs.gallery_amoras_07, 
                        size: 12
                    }
                ]
            }
        ]
    }
]

export default projectsData;