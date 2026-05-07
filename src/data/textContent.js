const textContent = {
  en: { 
    title: "Luján Quintero",
    subtitle: "Marketing Graduate",
    profile: {
      title: "PROFILE",
      content:
        "I'm 30 years old; I’m enthusiastic, optimistic and hardworking. I look forward to new challenges in order to continue growing personally and professionally. Personal interests:",
      interests: [
        { key: 'travel', label: 'Travel' },
        { key: 'languages', label: 'Languages' },
        { key: 'marketing', label: 'Marketing' },
      ],
    },
    contact: {
      title: "CONTACT INFORMATION",
      address: "Barrio Soles del Pilar, Buenos Aires, Argentina.",
      birthday: "March 4th, 1996.",
      phone: "+54 9 11 5794-8965",
      email: "lujan.quintero@gmail.com",
      linkedin: "Linkedin.com/in/lujanquintero",
    },
     menu: {
      title: "menu",
      items: [
        { key: 'work', label: 'Work experience'},
        { key: 'education', label: 'Education'},
        { key: 'studies', label: 'Complementary studies'},
        { key: 'languages', label: 'Languages'},
        { key: 'skills', label: 'Skills'},
      ]
    },
    languages: {
      title: "LANGUAGES",
      spanish: "Spanish",
      english: "English",
      french: "French",

      levels: {
        native: "Native",
        fluent: "Fluent",
        beginner: "Beginner",
      }
    },
    studies: {
      title: "COMPLEMENTARY STUDIES",
      categories: [
        { key: 'all', label:"All"}, 
        { key: 'english', label: "English"},
        { key: 'dev', label: "Web Development"},
        { key: 'other', label: "Other"},
      ],
      list: [
        {
          name: "Front-End Development Extended Program | 2023 - 2025",
          place: "NUCBA",
          description: "Content: HTML, CSS, Javascript, React and responsive design.",
          category: "dev",
        }, 
        {
          name: "Data Analytics Course | 2021",
          place: "Coderhouse",
          description: "Content: Power BI & SQL.",
          category: "other",
        }, 
        {
          name: "Web Development Course | 2020",
          place: "Coderhouse",
          description: "Front-End Development. Content: HTML & CSS.",
          category: "dev",
        }, 
        {
          name: "IB Diploma | 2013",
          place: "University of Cambridge",
          description: "International Baccalaureate. Mark: 28.",
          category: "english",
        },
       {
          name: "IGCSE Certificate | 2010",
          place: "University of Cambridge",
          description: "English as a first language, Extended Level. Mark: A.",
          category: "english",
        },
      ],
    },
    skills: {
      title: "SKILLS",
      categories: [
        { key: 'all', label:"All"}, 
        { key: 'dev', label: "Web Development"},
        { key: 'design', label: "Design"},
        { key: 'automation', label: "Automation"},
        { key: 'marketing', label: "Marketing"},
        { key: 'seo', label: "SEO"},
        { key: 'ads', label: "Ads"},
        { key: 'other', label: "Other"},
      ],
      list: [
        {
          name: "Microsoft Office",
          desc: "Excel/Word/Powerpoint",
          level: 90,
          categories: "other",
        },
        {
          name: "Google Ads",
          desc: "",
          level: 80,
          categories: ["marketing", "ads"],
        },
        {
          name: "Google Analytics & Tag Manager",
          desc: "",
          level: 70,
          categories: "marketing",
        },
         {
          name: "LinkedIn Ads",
          desc: "",
          level: 60,
          categories: ["marketing", "ads"],
        },
        {
          name: "Meta Ads",
          desc: "",
          level: 50,
          categories: ["marketing", "ads"],
        },
        {
          name: "Hubspot",
          desc: "Marketing/Sales/Service",
          level: 90,
          categories: ["marketing", "automation"],
        },
        {
          name: "Salesforce",
          desc: "Sales Cloud",
          level: 70,
          categories: ["marketing", "automation"],
        },
        {
          name: "6sense",
          desc: "ABM/Ads/Sales Intelligence",
          level: 80,
          categories: ["marketing", "automation", "ads"],
        },
        {
          name: "Zapier",
          desc: "",
          level: 50,
          categories: "automation",
        },
        {
          name: "Semrush",
          desc: "",
          level: 70,
          categories: ["marketing", "seo"],
        },
        {
          name: "HTML & CSS",
          desc: "",
          level: 90,
          categories: "dev",
        },
        {
          name: "Javascript & React",
          desc: "",
          level: 70,
          categories: "dev",
        },
        {
          name: "Looker Studio",
          desc: "",
          level: 80,
          categories: ["marketing", "automation"],
        },
        {
          name: "Illustrator & Photoshop",
          desc: "",
          level: 80,
          categories: "design",
        },
         {
          name: "Figma",
          desc: "",
          level: 80,
          categories: "design",
        },
      ],
    },
    education: {
      title: "EDUCATION",
      marketing: {
        degree: "Marketing Degree",
        school: "Universidad del Salvador",
        years: "2014 - 2017",
      },
      bac: {
        degree: "International Baccalaureate",
        school: "Saint Mary Of The Hills School",
        years: "2001 - 2013",
      },
    },
    work: {
      title: "WORK EXPERIENCE",
      jobs: [
        {
          role: "Marketing Manager",
          company: "PSignite",
          period: "Nov 2023 - Present",
          timeline: [
            {
              role: "Marketing Manager",
              period: "Nov 2023 – Present",
              desc: "Inbound and Tech Stack lead. Paid media campaigns: implementation, strategy and optimization. Hubspot automation and website optimization. Organic posts and strategy. Integrations between MAP, CRM and additional marketing tools. SEO strategy and optimization. Marketing budget planning and control."
            },
            {
              role: "Marketing Automation Specialist",
              period: "May 2023 – Oct 2023",
              desc: "Marketing automation implementation and web development in HubSpot. SEO research and optimization. Salesforce integration. ABM tools. Reporting and analysis."
            }
          ]
        },
        {
          role: "Marketing Acquisition Specialist",
          company: "Shipnow",
          period: "Dec 2022 - Apr 2023",
          desc: `Marketing acquisition strategy, campaign control and optimization, funnel reporting. Automation implementation.`,
        },
        {
          role: "Customer Success Manager",
          company: "Digifianz",
          period: "Aug 2021 - Jul 2022",
          desc: `Project management and strategic planning for several clients. Team management and supervision. Hubspot implementation: Marketing Hub, Sales Hub and Service Hub.`,
        },
        {
          role: "Senior Project Manager",
          company: "9th Wonder Agency",
          period: "Mar 2021 - Jul 2021",
          desc: `Project management for several US based clients such as Samsung and Honda Powersports among others. Coordination, control and follow up of tasks on track. In charge of design and web development team.`,
        },
        {
          role: "Senior Account Executive",
          company: "NSB Agency",
          period: "Dec 2019 - Mar 2021",
          desc: `In charge of Despegar's and Veritran’s account. Coordination and tracking, project planning, meetings with clients. Support to other accounts.`,
        },
        {
          role: "Marketing Responsible",
          company: "GCDC",
          period: "Jun 2016 - Dec 2019",
          timeline: [
            {
              role: "Marketing Responsible",
              period: "Dec 2017 – Dec 2019",
              desc: "In charge of FCA/Mercedes-Benz car dealership: reports and data analysis, graphic design of newsletters and ads, negotiation with agencies and managers, Facebook Ads and Google Ads campaigns, CRM management and workshops, event management and marketing plan.",
            },
            {
              role: "Marketing Intern",
              period: "Jun 2016 – Dec 2017",
              desc: "CRM management and workshops. Reporting and analysis."
            }
          ]
        },
      ],
    },
 },
  es: { 
    title: "Luján Quintero",
    subtitle: "Licenciada en Marketing",
    profile: {
      title: "PERFIL",
      content:
        "Tengo 30 años; soy entusiasta, optimista y trabajadora. Busco nuevos desafíos para continuar creciendo personal y profesionalmente. Intereses personales:",
      interests: [
        { key: 'travel', label: 'Viajar' },
        { key: 'languages', label: 'Idiomas' },
        { key: 'marketing', label: 'Marketing' },
      ]
    },
    contact: {
      title: "INFORMACIÓN DE CONTACTO",
      address: "Barrio Soles del Pilar, Buenos Aires, Argentina.",
      birthday: "4 de Marzo, 1996.",
      phone: "+54 9 11 5794-8965",
      email: "lujan.quintero@gmail.com",
      linkedin: "Linkedin.com/in/lujanquintero",
    },
    menu: {
      title: "menu",
      items: [
        { key: 'work', label: 'Experiencia laboral'},
        { key: 'education', label: 'Educación'},
        { key: 'studies', label: 'Estudios complementarios'},
        { key: 'languages', label: 'Idiomas'},
        { key: 'skills', label: 'Habilidades'},
      ]
    },
    languages: {
      title: "IDIOMAS",
      spanish: "Español",
      english: "Inglés",
      french: "Francés",

      levels: {
        native: "Nativo",
        fluent: "Bilingüe",
        beginner: "Principiante",
      }
    },
    studies: {
      title: "ESTUDIOS COMPLEMENTARIOS",
       categories: [
        { key: 'all', label:"Todos"}, 
        { key: 'english', label: "Inglés"},
        { key: 'dev', label: "Desarrollo Web"},
        { key: 'other', label: "Otros"},
      ],
      list: [
        {
          name: "Desarrollo Front-End Extendido | 2023 - 2025",
          place: "NUCBA",
          description: "Contenido: HTML, CSS, Javascript, React y diseño responsive.",
          category: "dev",
        }, 
        {
          name: "Curso de Data Analytics | 2021",
          place: "Coderhouse",
          description: "Contenido: Power BI y SQL.",
          category: "other",
        }, 
        {
          name: "Curso de Desarrollo Web | 2020",
          place: "Coderhouse",
          description: "Desarrollo Front-End. Contenido: HTML y CSS.",
          category: "dev",
        }, 
       {
        name: "Diploma IB | 2013",
        place: "Universidad de Cambridge",
        description: "Bachillerato Internacional. Nota: 28.",
        category: "english",
      },
      {
        name: "Certificado IGCSE | 2010",
        place: "Universidad de Cambridge",
        description: "Inglés como primera lengua, nivel extendido. Nota: A.",
        category: "english",
      },
    ],
    },
    skills: {
      title: "HABILIDADES",
      categories: [
        { key: 'all', label:"Todas"}, 
        { key: 'dev', label: "Desarrollo Web"},
        { key: 'design', label: "Diseño"},
        { key: 'automation', label: "Automatización"},
        { key: 'marketing', label: "Marketing"},
        { key: 'seo', label: "SEO"},
        { key: 'ads', label: "Ads"},
        { key: 'other', label: "Otras"},
      ],
      list: [
        {
          name: "Microsoft Office",
          desc: "Excel/Word/Powerpoint",
          level: 90,
          categories: "other",
        },
        {
          name: "Google Ads",
          desc: "",
          level: 80,
          categories: ["marketing", "ads"],
        },
        {
          name: "Google Analytics y Tag Manager",
          desc: "",
          level: 70,
          categories: "marketing",
        },
         {
          name: "LinkedIn Ads",
          desc: "",
          level: 60,
          categories: ["marketing", "ads"],
        },
        {
          name: "Meta Ads",
          desc: "",
          level: 50,
          categories: ["marketing", "ads"],
        },
        {
          name: "Hubspot",
          desc: "Marketing/Ventas/Servicio",
          level: 90,
          categories: ["marketing", "automation"],
        },
        {
          name: "Salesforce",
          desc: "Sales Cloud",
          level: 70,
          categories: ["marketing", "automation"],
        },
        {
          name: "6sense",
          desc: "ABM/Ads/Sales Intelligence",
          level: 80,
          categories: ["marketing", "automation", "ads"],
        },
        {
          name: "Zapier",
          desc: "",
          level: 50,
          categories: "automation",
        },
        {
          name: "Semrush",
          desc: "",
          level: 70,
          categories: ["marketing", "seo"],
        },
        {
          name: "HTML y CSS",
          desc: "",
          level: 90,
          categories: "dev",
        },
        {
          name: "Javascript y React",
          desc: "",
          level: 70,
          categories: "dev",
        },
        {
          name: "Looker Studio",
          desc: "",
          level: 80,
          categories: ["marketing", "automation"],
        },
        {
          name: "Illustrator y Photoshop",
          desc: "",
          level: 80,
          categories: "design",
        },
         {
          name: "Figma",
          desc: "",
          level: 80,
          categories: "design",
        },
      ],
    },
    education: {
      title: "EDUCACIÓN",
      marketing: {
        degree: "Licenciatura en Marketing",
        school: "Universidad del Salvador",
        years: "2014 - 2017",
      },
      bac: {
        degree: "Bachillerato Internacional",
        school: "Saint Mary Of The Hills School",
        years: "2001 - 2013",
      },
    },
    work: {
      title: "EXPERIENCIA LABORAL",
      jobs: [
        {
          role: "Marketing Manager",
          company: "PSignite",
          period: "Nov 2023 - Actualmente",
          timeline: [
            {
              role: "Marketing Manager",
              period: "Nov 2023 – Actualmente",
              desc: "Líder de Inbound y Tech Stack. Campañas de medios pagos: implementación, estrategia y optimización. Automatización en HubSpot y optimización del sitio web. Estrategia y publicaciones orgánicas. Integraciones entre MAP, CRM y otras herramientas de marketing. Estrategia y optimización SEO. Planificación y control del presupuesto de marketing.",
            },
            {
              role: "Marketing Automation Specialist",
              period: "May 2023 – Oct 2023",
              desc: "Implementación de automatización de marketing y desarrollo web en HubSpot. Investigación y optimización SEO. Integración de Salesforce. Herramientas ABM. Reportes y análisis.",
            }
          ]
        },
        {
          role: "Marketing Acquisition Specialist",
          company: "Shipnow",
          period: "Dic 2022 - Abr 2023",
          desc: `Estrategia de adquisición de marketing, control y optimización de campañas, informe de funnel. Implementación de automatización.`,
        },
        {
          role: "Customer Success Manager",
          company: "Digifianz",
          period: "Ago 2021 - Jul 2022",
          desc: `Gestión de proyectos y planificación estratégica para varios clientes. Gestión y supervisión de equipo. Implementación Hubspot: Marketing Hub, Sales Hub y Service Hub.`,
        },
        {
          role: "Senior Project Manager",
          company: "9th Wonder Agency",
          period: "Mar 2021 - Jul 2021",
          desc: `Gestión de proyectos para clientes en EE.UU. como Samsung y Honda Powersports, entre otros. Coordinación, control y seguimiento de tareas. A cargo del equipo de diseño y desarrollo web.`,
        },
        {
          role: "Senior Account Executive",
          company: "NSB Agency",
          period: "Dic 2019 - Mar 2021",
          desc: `Responsable de las cuentas de Despegar y Veritran. Coordinación y seguimiento, planificación de proyectos, reuniones con clientes. Soporte a otras cuentas.`,
        },
        {
          role: "Responsable de Marketing",
          company: "GCDC",
          period: "Jun 2016 - Dic 2019",
          timeline: [
            {
              role: "Responsable de Marketing",
              period: "Dic 2017 – Dic 2019",
              desc: "Responsable de marketing de concesionaria FCA/Mercedes-Benz: informes y análisis de datos, diseño gráfico de newsletters y anuncios, negociación con agencias y gerentes, campañas en Facebook Ads y Google Ads, gestión de CRM y capacitaciones, organización de eventos y plan de marketing.",
            },
            {
              role: "Pasante de Marketing",
              period: "Jun 2016 – Dic 2017",
              desc: "Gestión de CRM y capacitaciones. Reportes y análisis."
            }
          ]
        },
      ],
    },
  }
};

export default textContent;
