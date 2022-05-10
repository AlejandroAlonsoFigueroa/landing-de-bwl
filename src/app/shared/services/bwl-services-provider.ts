import { Injectable } from "@angular/core";

interface carrusel{
    index: number;
    name: string;
    description: string;
    image: string;
    color: string;
    position: string;
    

}

interface IndividualService{
    serviceName: string;
    serviceTitle: string;
    serviceDescription: string;
    serviceUrl: string,
    serviceImage: string;
    elementosCarrusel: carrusel[];
    serviceDescription2: string;
  
           
  }

@Injectable()
export class BwlServicesProvider{
    constructor(){
        console.log("Servicio listo");
    }

    private bwlServices:IndividualService [] = [
        {

            serviceName: "Equipos de trabajo",
            serviceUrl: "equipos-de-desarrollo",
            serviceTitle: "Equipos de trabajo", 
            serviceDescription: "La capacitación y la experiencia son los elementos clave para el éxito de nuestros servicios. Nos incorporamos como parte del equipo de trabajo de nuestros clientes en el desarrollo de soluciones que se encuentran en proceso, así como brindamos nuestra asesoría para ofrecer las mejores arquitecturas en el diseño de soluciones.",
            serviceDescription2: "Se integran programadores en soluciones o desarrollos activos y en proceso. Se revisan los requerimientos, se define el equipo con el perfil más adecuado a la solución, se integra el equipo de desarrollo con el cliente y se gestiona y liderea por medio de un Scrum Master, se definen las actividades del equipo por spring de trabajo y se dan entregas de valor al cliente al cierre del mismo.",  
            serviceImage: "./assets/img/services/software-team.png", 
            elementosCarrusel: [
                {
                    index: 1,
                    name: 'Equipos de trabajo',
                    description: 'Se integran programadores en soluciones o desarrollos activos y en proceso. Se revisan los requerimientos, se define el equipo con el perfil más adecuado a la solución, se integra el equipo de desarrollo con el cliente y se gestiona y liderea por medio de un Scrum Master, se definen las actividades del equipo por spring de trabajo y se dan entregas de valor al cliente al cierre del mismo.',
                    image: './assets/img/mac/Apple Macbook Pro 15 Silver.png',
                    color: 'red',
                    position: 'justify-content-start'
                },
               
            ]
         
        },
        {
            serviceName: "Fábrica de software",
            serviceUrl: "desarrollo-productos",
            serviceTitle: "Fábrica de software", 
            serviceDescription: "Desarrollamos soluciones completas desde cero, basados en las mejores tecnologías y mas adecuadas a cada solución. Definimos equipos de trabajos dedicados al proyecto aplicando metodologías ágiles para entregar en tiempo y forma. Participa de forma activa nuestra área de centro creativo para dar a cada solución una presentación moderna y funcional a los usuarios finales.", 
            serviceDescription2: "Desarrollo de soluciones completas desde el análisis hasta la puesta en marcha. Se analizan los requerimientos del cliente, se definen los alcances a entregar y los tiempos de desarrollo, se establece un plan de desarrollo con entregas de valor en cada etapa definido por semanas o meses según la complejidad el proyecto, se realizan presentaciones de avances y fases de despliegue y, por último, se entrega y libera el proyecto.",
            serviceImage: "./assets/img/services/software-team.png",
            elementosCarrusel:[
                {
                    index: 1,
                    name: 'Fábrica de software',
                    description: 'Desarrollo de soluciones completas desde el análisis hasta la puesta en marcha. Se analizan los requerimientos del cliente, se definen los alcances a entregar y los tiempos de desarrollo, se establece un plan de desarrollo con entregas de valor en cada etapa definido por semanas o meses según la complejidad el proyecto, se realizan presentaciones de avances y fases de despliegue y, por último, se entrega y libera el proyecto.',
                    image: './assets/img/mac/Apple Macbook Pro 15 Silver.png',
                    color: 'red',
                    position: 'justify-content-start'
                },
              
            ]
        },

        {
            serviceName: "Transformación digital",
            serviceUrl: "transformacion-digital",
            serviceTitle: "Transformaciión digital", 
            serviceDescription: "Apoyamos a nuestros clientes para que sean más competitivos y mejoren sus resultados con herramientas tecnológicas adecuadas a su negocio. Transformamos sus procesos actuales y los migramos a las nuevas tecnologías basadas en servicios en la nube robustos como Amazon AWS y Google Cloud Platform para dar soporte y disponiblidad 24/7 a cada uno de sus procesos de trabajo.", 
            serviceDescription2: "Infraestructura, servidores y servicios en la nube; diseño, implementación e integración de API´s; integración de frameworks y seguridad en aplicaciones; manejo de información en tiempo real: Dashboards; implementación de Notificaciones: web y móvil; geolocalización de objetos y despliegue en mapas; integración de pagos en línea y TPV´s; aplicaciones en kioscos y pantallas touchscreen; análisis de comportamiento de una aplicación web y móvil; integración de medios de identificación: NFC, Códigos de barra y QR.",
            serviceImage: "./assets/img/services/software-team.png",
            elementosCarrusel:[
                {
                    index: 1,
                    name: 'Transformación digital',
                    description: 'Infraestructura, servidores y servicios en la nube; diseño, implementación e integración de API´s; integración de frameworks y seguridad en aplicaciones; manejo de información en tiempo real: Dashboards; implementación de Notificaciones: web y móvil; geolocalización de objetos y despliegue en mapas; integración de pagos en línea y TPV´s; aplicaciones en kioscos y pantallas touchscreen; análisis de comportamiento de una aplicación web y móvil; integración de medios de identificación: NFC, Códigos de barra y QR.',
                    image: './assets/img/mac/Apple Macbook Pro 15 Silver.png',
                    color: 'red',
                    position: 'justify-content-start'
                },

            ]
        },
        {
            serviceName: "Plataformas web",
            serviceUrl: "portales-web",
            serviceTitle: "Plataformas web", 
            serviceDescription: "Creamos las mejores plataformas web basadas en las tecnologías más adecuadas para cada solución. Utilizamos los entornos de trabajo más modernos como preparación para los retos del mañana. Entregamos sistemas robustos, modernos y elegantes que permitan optimizar los procesos de negocio de nuestros clientes.", 
            serviceDescription2 : "Aplicaciones web basadas en tecnologías Java, Node, Spring; modelado de bases de datos relacionales y no relacionales; servicios completos en la nube de Amazon AWS y Google Cloud Platform; integración con aplicaciones móviles; soluciones basadas en HTML, Angular, React, javaScript, typeScript; diseño e implementación de dashboards; manejo de mapas, gráficas, notificaciones y elementos audiovisuales.",
            serviceImage: "./assets/img/services/software-team.png",
            elementosCarrusel:[
                {
                    index: 1,
                    name: 'Plataformas web',
                    description: 'Aplicaciones web basadas en tecnologías Java, Node, Spring; modelado de bases de datos relacionales y no relacionales; servicios completos en la nube de Amazon AWS y Google Cloud Platform; integración con aplicaciones móviles; soluciones basadas en HTML, Angular, React, javaScript, typeScript; diseño e implementación de dashboards; manejo de mapas, gráficas, notificaciones y elementos audiovisuales.',
                    image: './assets/img/mac/Apple Macbook Pro 15 Silver.png',
                    color: 'red',
                    position: 'justify-content-start'
                },

            ]
        },
        {
            serviceName: "Aplicaciones móviles",
            serviceUrl: "aplicaciones-moviles",
            serviceTitle: "Aplicaciones móviles", 
            serviceDescription: "Diseñamos las mejores aplicaciones móviles para dar versatilidad y agilidad en la operación diaria de nuestros clientes. integramos lo último que ofrecen los servicios en la nube para potencializar la aplicación a las más exigentes reglas de negocio que se deban implementar.", 
            serviceDescription2 : "Desarrollamos cada aplicación para ser utilizada en dispositivos iOS y Android. Las aplicaciones móviles en conjunto con las plataformas web nos permiten crear las mejores herramientas de trabajo con lo último en tecnología mezclando un diseño UI/UX único en cada una para crear interfaces funcionales, intuitivas y agradables al usuario final. Desplegamos las aplicaciones en las tiendas App Store y Google Play así como ofrecemos servicios de actualización en las mejoras y políticas que cada tienda solicita.",
            serviceImage: "./assets/img/services/software-team.png",
            elementosCarrusel:[
                {
                    index: 1,
                    name: 'Aplicaciones móviles',
                    description: 'Desarrollamos cada aplicación para ser utilizada en dispositivos iOS y Android. Las aplicaciones móviles en conjunto con las plataformas web nos permiten crear las mejores herramientas de trabajo con lo último en tecnología mezclando un diseño UI/UX único en cada una para crear interfaces funcionales, intuitivas y agradables al usuario final. Desplegamos las aplicaciones en las tiendas App Store y Google Play así como ofrecemos servicios de actualización en las mejoras y políticas que cada tienda solicita.',
                    image: './assets/img/mac/Apple Macbook Pro 15 Silver.png',
                    color: 'red',
                    position: 'justify-content-start'
                },

            ]
        },
        /*{
            serviceName: "Soluciones en la nube",
            serviceUrl: "soluciones-nube",
            serviceTitle: "Soluciones en la nube", 
            serviceDescription: "", 
            serviceImage: "./assets/img/services/software-team.png",
            elementosCarrusel:[
                {
                    index: 1,
                    name: 'Lorem Ipsum dolor sit',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    image: './assets/img/mac/Apple Macbook Pro 15 Silver.png',
                    color: 'red',
                    position: 'justify-content-start'
                },

            ]
        },*/
        {
            serviceName: "Centro creativo",
            serviceUrl: "centro-creativo",
            serviceTitle: "Centro creativo", 
            serviceDescription: "Convertimos las ideas de nuestros clientes en diseños únicos e innovadores. Diseñamos interfaces con elementos visuales que permiten una navegación intuitiva y agradable, siguiendo las tendencias en experiencia de usuario.", 
            serviceDescription2 :"Interfaces simples y funcionales; elementos visuales únicos; identidad de imagen en la aplicación web/móvil; diseño del logo e iconografía exclusiva en cada aplicación; ilustraciones y fotografías; manejo de espacios y elementos gráficos; flujos y animaciones en la navegación de la aplicación.",
            serviceImage: "./assets/img/services/software-team.png",
            elementosCarrusel:[
                {
                    index: 1,
                    name: 'Centro creativo',
                    description: 'Interfaces simples y funcionales; elementos visuales únicos; identidad de imagen en la aplicación web/móvil; diseño del logo e iconografía exclusiva en cada aplicación; ilustraciones y fotografías; manejo de espacios y elementos gráficos; flujos y animaciones en la navegación de la aplicación.',
                    image: './assets/img/mac/Apple Macbook Pro 15 Silver.png',
                    color: 'red',
                    position: 'justify-content-start'
                },
               
            ]
        }
      ];

      getBwlServices(){
        return this.bwlServices;
      }

     getBwlService(id: number){
       return this.bwlServices[id];
     }
}