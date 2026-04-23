export const COPY = {
  es: {
    nav: {
      link: "¿Por qué elegirnos?",
      linkTeam: "Equipo",
      linkCommunity: "Comunidad",
      cta: "Probar Gratis",
    },
    hero: {
      eyebrow: "Early Access · Sin tarjeta · Equipos QA",
      h1Main: "Su asistente de",
      h1Accent: "QA con IA",
      leadMain:
        "Describa qué quiere probar en lenguaje natural. Macaco genera tests automatizados reales y usted los ejecuta en su equipo tantas veces como quiera.",
      leadAccent: "Sin costo por ejecución. Sin vendor lock-in.",
      ctaPrimary: "Probar Gratis",
      ctaSecondary: "Ver Cómo Funciona",
      chips: [
        "Tests reales",
        "Código exportable",
        "100% local en su equipo",
        "Ejecuciones ilimitadas",
        "Sin costo adicional",
        "Sin vendor lock-in",
        "Integración con CI/CD",
        "Videos de cada ejecución",
        "Sin servidores externos",
        "Screenshots automáticos",
        "Soporte para regresión",
        "Early Access — Sin Tarjeta de Crédito",
      ],
    },
    why: {
      eyebrow: "¿Por qué elegirnos?",
      h2Line1: "El código que escribiría",
      h2Line2Accent: "un ingeniero de",
      h2Line3: "automatización senior.",
      lead: "Describa sus casos de prueba como se los explicaría a un colega. Macaco los convierte en tests automatizados que puede ejecutar en cada sprint sin reescribir nada.",
      features: [
        {
          title: "Tests reales, no grabaciones frágiles.",
          description:
            "Código de automatización profesional con Playwright. Inspeccione, edite o exporte — el mismo código que escribiría un ingeniero de automatización senior.",
        },
        {
          title: "Corre en su equipo. Sin límites.",
          description:
            "Ejecución local con un click. Sin servidores externos, sin costo por corrida, sin cuotas. Ideal para entornos con restricciones de cumplimiento.",
        },
        {
          title: "Su código. Su repositorio. Su CI/CD.",
          description:
            "Todo lo que Macaco genera es suyo. Expórtelo a su repositorio, integre con GitHub Actions o Jenkins. Si se va de Macaco, su suite sigue funcionando.",
        },
      ],
    },
    cta: {
      eyebrow: "Beta privada · Solo con invitación",
      h2Main: "Únase a la",
      h2Accent: "beta privada.",
      lead: "Estamos seleccionando a los primeros profesionales de QA para probar Macaco. Déjenos sus datos y nos pondremos en contacto a la brevedad.",
      submittedMarker: "Enviado",
      submittedLead:
        "Gracias. Estamos seleccionando los primeros beta testers y le enviaremos los pasos de acceso por email próximamente.",
      submittedChips: [
        "15 cupos disponibles",
        "Acceso solo por invitación",
        "Gratis para beta testers",
      ],
    },
    form: {
      labelEmail: "Correo electrónico *",
      placeholderEmail: "su@email.com",
      labelTool: "Herramienta de testing *",
      placeholderTool: "Seleccione su herramienta",
      optionToolManual: "Testing manual",
      optionToolOther: "Otra",
      labelOS: "Sistema operativo *",
      placeholderOS: "Seleccione su sistema operativo",
      labelVPN: "¿Los sistemas que prueba están detrás de una VPN? *",
      placeholderVPN: "Seleccione una opción",
      optionVPNNo: "No, son accesibles públicamente",
      optionVPNYes: "Sí, requieren acceso por VPN",
      optionVPNSome: "Algunos sí, otros no",
      optionVPNNotSure: "No estoy seguro",
      submit: "Obtener acceso",
      submitting: "Enviando...",
      errorGeneric: "No pudimos enviar el formulario. Por favor intente de nuevo.",
      errorNetwork: "Error de red. Revise su conexión e intente de nuevo.",
    },
    discord: {
      eyebrow: "Comunidad",
      h2Main: "¿Tiene dudas?",
      h2Accent: "Hable con nosotros",
      lead: "Estamos en Discord respondiendo preguntas y escuchando sus comentarios.",
      cta: "Únase a Discord",
    },
    team: {
      eyebrow: "Equipo",
      h2Main: "Creado por ingenieros que entienden",
      h2Accent: "las necesidades del sector QA",
      lead: "Llevamos años como profesionales construyendo sistemas backend, productos con IA y herramientas de automatización. Ahora utilizamos esa experiencia fusionando nuestro conocimiento del sector desde adentro con nuestra capacidad de desarrollo, para potenciar las capacidades del equipo de QA.",
      members: [
        {
          name: "Gastón Zárate",
          role: "CEO & Co-founder",
          bio: "+8 años como desarrollador Python y tech lead. Previamente creó herramientas de desarrollo con IA e infraestructura cloud en SleakOps.",
          photo: "/images/team/gaston.jpg",
          linkedin: "https://www.linkedin.com/in/gaston-zarate/",
        },
        {
          name: "Luciano Serra",
          role: "CTO & Co-founder",
          bio: "Especialista en GenAI y backend. Creó chatbots con IA que atienden 30K usuarios/mes en Moni. Experto en Python, Django, FastAPI y agentes LLM.",
          photo: "/images/team/luciano.jpg",
          linkedin: "https://www.linkedin.com/in/serra-luciano-martin/",
        },
      ],
    },
    footer: {
      linkTerms: "Términos de Servicio",
      linkPrivacy: "Política de Privacidad",
      taglineLine1: "© 2026 Macaco. Automatice su QA sin código.",
      taglineLine2: "Todos los derechos reservados.",
    },
    download: {
      eyebrow: "Beta privada · Acceso anticipado",
      h1Main: "Descargue",
      h1Accent: "Macaco",
      lead: "Gracias por sumarse a la beta. Elija su plataforma para empezar.",
      cards: {
        windows: { platform: "Windows", description: "Instalador .exe" },
        mac: { platform: "macOS", description: "Instalador .dmg" },
        linux: { platform: "Linux", description: "AppImage" },
      },
      download: "Descargar",
      loading: "Cargando…",
      unavailable: "No disponible",
      help: {
        title: "Primeros pasos",
        step1: "1. Descargue e instale Macaco para su plataforma.",
        step2: "2. Inicie sesión con su cuenta de Google.",
        step3: "3. Cree su primer proyecto y charle con la IA para generar tests.",
        discordPrefix: "¿Necesita ayuda? Únase a nuestra ",
        discordLink: "comunidad de Discord",
      },
    },
    legal: {
      terms: {
        eyebrow: "Marco legal · Términos de uso",
        h1Main: "Términos de",
        h1Accent: "servicio",
        lead: "Estos términos regulan el uso de Macaco, incluyendo la aplicación, el sitio web y la API.",
        lastUpdatedLabel: "Última actualización",
        lastUpdated: "22 de abril de 2026",
        sections: [
          {
            id: "introduction",
            number: "1",
            title: "Introducción",
            blocks: [
              { type: "p", text: "Bienvenido a Macaco. Este documento (\"Términos\") describe las condiciones bajo las cuales usted accede y utiliza nuestro asistente de QA, incluyendo la aplicación de escritorio, el sitio web y las API asociadas (el \"Servicio\")." },
              { type: "p", text: "Al acceder o utilizar el Servicio, usted acepta estos Términos. Si no está de acuerdo con alguna parte, no utilice el Servicio." },
            ],
          },
          {
            id: "acceptance",
            number: "2",
            title: "Aceptación de los Términos",
            blocks: [
              { type: "p", text: "Al crear una cuenta, descargar la aplicación o interactuar con el sitio, usted confirma que ha leído y acepta estos Términos y nuestra Política de Privacidad." },
              { type: "p", text: "Debe tener al menos 18 años para utilizar el Servicio. Al usarlo, declara cumplir con ese requisito." },
            ],
          },
          {
            id: "service",
            number: "3",
            title: "Descripción del Servicio",
            blocks: [
              { type: "p", text: "Macaco es un asistente de QA que convierte casos de prueba descritos en lenguaje natural en código de automatización con Playwright. Los tests se ejecutan en su equipo y usted conserva el control sobre el código generado." },
              { type: "p", text: "El Servicio incluye:" },
              { type: "ul", items: [
                "Generación asistida por IA de casos de prueba a partir de descripciones en lenguaje natural.",
                "Tests automatizados con Playwright que corren localmente en su máquina.",
                "Inspección, edición y exportación del código generado.",
                "Integración con su repositorio y sus pipelines de CI/CD (GitHub Actions, Jenkins, etc.).",
              ] },
              { type: "p", text: "Macaco se reserva el derecho de modificar, suspender o discontinuar funcionalidades del Servicio, con o sin aviso previo, especialmente durante la fase beta." },
            ],
          },
          {
            id: "accounts",
            number: "4",
            title: "Cuentas y registro",
            blocks: [
              { type: "p", text: "Para acceder a ciertas funciones puede necesitar una cuenta. Al registrarse, usted se compromete a:" },
              { type: "ul", items: [
                "Proveer información exacta, actual y completa.",
                "Mantener sus credenciales seguras y confidenciales.",
                "Notificarnos de inmediato si detecta un acceso no autorizado.",
              ] },
              { type: "p", text: "Usted es responsable de toda la actividad realizada a través de su cuenta." },
            ],
          },
          {
            id: "acceptable-use",
            number: "5",
            title: "Uso aceptable",
            blocks: [
              { type: "p", text: "Usted acepta no utilizar el Servicio para:" },
              { type: "ul", items: [
                "Violar leyes o regulaciones aplicables, o los derechos de terceros.",
                "Transmitir contenido dañino, abusivo o ilícito.",
                "Intentar obtener acceso no autorizado a nuestros sistemas o a los de terceros.",
                "Interferir con la disponibilidad o la integridad del Servicio.",
                "Ejecutar tests de carga, scraping masivo o actividad automatizada contra objetivos para los que no tenga autorización.",
              ] },
            ],
          },
          {
            id: "privacy",
            number: "6",
            title: "Privacidad y datos",
            blocks: [
              { type: "p", text: "La manera en que recopilamos y procesamos datos está detallada en nuestra Política de Privacidad, que forma parte de estos Términos." },
              { type: "p", text: "Macaco está diseñado para ejecutar tests localmente: su código de prueba, capturas, videos y logs permanecen en su equipo salvo que usted decida exportarlos." },
              { type: "p", text: "Aplicamos medidas razonables de seguridad, pero ningún sistema es totalmente inmune a riesgos." },
            ],
          },
          {
            id: "ip",
            number: "7",
            title: "Propiedad intelectual",
            blocks: [
              { type: "p", text: "El Servicio, incluyendo su software, diseño, marca y documentación, es propiedad de Macaco y está protegido por las leyes de propiedad intelectual." },
              { type: "p", text: "El código de test generado por Macaco a partir de sus instrucciones es suyo: puede inspeccionarlo, editarlo, ejecutarlo en su infraestructura, exportarlo a su repositorio y seguir utilizándolo aunque deje de usar Macaco." },
              { type: "p", text: "Al enviarnos contenido (por ejemplo, descripciones de tests o feedback), usted nos otorga una licencia limitada para procesarlo con el único fin de prestar el Servicio." },
            ],
          },
          {
            id: "liability",
            number: "8",
            title: "Limitación de responsabilidad",
            blocks: [
              { type: "p", text: "En la máxima medida permitida por la ley, Macaco no será responsable por daños indirectos, incidentales, especiales, emergentes o punitivos, incluyendo pérdida de ganancias, datos o uso." },
              { type: "p", text: "La responsabilidad total de Macaco por cualquier reclamo vinculado al Servicio no excederá los montos efectivamente pagados por usted a Macaco en los doce meses previos al reclamo. Si su plan es gratuito, ese monto es cero." },
            ],
          },
          {
            id: "termination",
            number: "9",
            title: "Terminación",
            blocks: [
              { type: "p", text: "Podemos suspender o terminar su acceso al Servicio, con o sin aviso, si incumple estos Términos o si su uso afecta a Macaco o a terceros." },
              { type: "p", text: "Usted puede cerrar su cuenta en cualquier momento escribiéndonos o usando los controles disponibles en la aplicación." },
            ],
          },
          {
            id: "changes",
            number: "10",
            title: "Cambios en los Términos",
            blocks: [
              { type: "p", text: "Podemos actualizar estos Términos. Publicaremos la versión actualizada en esta página y modificaremos la fecha de \"Última actualización\"." },
              { type: "p", text: "El uso continuo del Servicio después de la publicación implica la aceptación de los Términos actualizados." },
            ],
          },
          {
            id: "contact",
            number: "11",
            title: "Contacto",
            blocks: [
              { type: "p", text: "Si tiene preguntas sobre estos Términos, escríbanos:" },
              { type: "kv", items: [
                { label: "Email", value: "legal@macaco.dev" },
                { label: "Sitio web", value: "https://macaco.dev" },
              ] },
            ],
          },
          {
            id: "law",
            number: "12",
            title: "Ley aplicable",
            blocks: [
              { type: "p", text: "Estos Términos se rigen por las leyes aplicables de la jurisdicción donde Macaco está constituida. Cualquier disputa se resolverá ante los tribunales competentes de dicha jurisdicción." },
            ],
          },
        ],
      },
      privacy: {
        eyebrow: "Privacidad · Lo que recopilamos",
        h1Main: "Política de",
        h1Accent: "privacidad",
        lead: "Así manejamos su información cuando utiliza Macaco, con un criterio de mínimos datos y ejecución local.",
        lastUpdatedLabel: "Última actualización",
        lastUpdated: "22 de abril de 2026",
        sections: [
          {
            id: "introduction",
            number: "1",
            title: "Introducción",
            blocks: [
              { type: "p", text: "Macaco está comprometido con la protección de su privacidad. Esta Política explica qué información recopilamos cuando usted usa nuestro asistente de QA, cómo la utilizamos, cuándo la compartimos y qué controles tiene sobre ella." },
              { type: "p", text: "Al utilizar el Servicio, usted acepta las prácticas descriptas en este documento." },
            ],
          },
          {
            id: "data-we-collect",
            number: "2",
            title: "Información que recopilamos",
            blocks: [
              { type: "h3", text: "Datos que permanecen en su equipo" },
              { type: "p", text: "Macaco está pensado para ejecutarse localmente. Por diseño, los siguientes artefactos se guardan en su máquina y no se envían a nuestros servidores salvo que usted decida exportarlos:" },
              { type: "ul", items: [
                "Código de los tests generados.",
                "Capturas de pantalla y videos producidos durante las ejecuciones.",
                "Logs y resultados detallados de cada corrida.",
                "Archivos de sus proyectos de prueba.",
              ] },
              { type: "h3", text: "Datos que usted nos provee" },
              { type: "p", text: "Recolectamos información que usted ingresa voluntariamente, por ejemplo:" },
              { type: "ul", items: [
                "Email y datos de registro al solicitar acceso al beta.",
                "Sistema operativo, herramienta de testing que utiliza y si sus sistemas están detrás de VPN (formulario de beta).",
                "Información enviada a través de canales de soporte o formularios de contacto.",
              ] },
              { type: "h3", text: "Datos técnicos automáticos" },
              { type: "p", text: "Al visitar el sitio o usar la aplicación recolectamos cierta información técnica de forma automática:" },
              { type: "ul", items: [
                "Información del dispositivo (tipo de navegador, sistema operativo, IP).",
                "Eventos de uso y métricas de performance del sitio.",
                "Logs de errores, utilizados para diagnosticar y corregir fallas.",
              ] },
              { type: "h3", text: "Cookies y tecnologías similares" },
              { type: "p", text: "Utilizamos cookies y almacenamiento local para recordar preferencias (idioma, sesión) y para analítica agregada. Usted puede controlarlas desde la configuración de su navegador." },
            ],
          },
          {
            id: "use",
            number: "3",
            title: "Cómo usamos su información",
            blocks: [
              { type: "p", text: "Utilizamos los datos recolectados para:" },
              { type: "ul", items: [
                "Proveer, mantener y mejorar el Servicio.",
                "Gestionar su cuenta y responder a sus solicitudes.",
                "Enviarle comunicaciones operativas relevantes.",
                "Analizar patrones de uso agregados para mejorar la experiencia.",
                "Detectar y prevenir fraude o abuso.",
                "Cumplir obligaciones legales aplicables.",
              ] },
            ],
          },
          {
            id: "sharing",
            number: "4",
            title: "Cómo compartimos información",
            blocks: [
              { type: "p", text: "No vendemos, alquilamos ni comerciamos su información personal. Podemos compartir datos únicamente en estos supuestos:" },
              { type: "ul", items: [
                "Con proveedores que nos asisten en la operación del Servicio, bajo obligaciones contractuales de confidencialidad.",
                "Cuando sea requerido por ley o para proteger derechos propios o de terceros.",
                "En el marco de una fusión, adquisición o transferencia de activos, notificándolo cuando corresponda.",
                "Con su consentimiento explícito para un fin específico.",
              ] },
            ],
          },
          {
            id: "security",
            number: "5",
            title: "Seguridad de los datos",
            blocks: [
              { type: "p", text: "Implementamos medidas técnicas y organizativas razonables para proteger su información:" },
              { type: "ul", items: [
                "Cifrado en tránsito (TLS) y en reposo donde corresponde.",
                "Controles de acceso y autenticación para el personal autorizado.",
                "Revisiones periódicas y procedimientos de respuesta ante incidentes.",
              ] },
              { type: "p", text: "Ninguna transmisión por Internet es totalmente segura, por lo que no podemos garantizar seguridad absoluta." },
            ],
          },
          {
            id: "retention",
            number: "6",
            title: "Retención de datos",
            blocks: [
              { type: "p", text: "Conservamos la información personal sólo mientras sea necesario para:" },
              { type: "ul", items: [
                "Prestar el Servicio y cumplir los fines descriptos en esta Política.",
                "Cumplir obligaciones legales y resolver disputas.",
                "Preservar evidencia frente a incidentes de seguridad o fraude.",
              ] },
              { type: "p", text: "Cuando la información deja de ser necesaria la eliminamos o anonimizamos de forma segura." },
            ],
          },
          {
            id: "rights",
            number: "7",
            title: "Sus derechos",
            blocks: [
              { type: "p", text: "Según su jurisdicción, usted puede tener los siguientes derechos sobre sus datos personales:" },
              { type: "ul", items: [
                "Acceso: solicitar una copia de la información que tenemos sobre usted.",
                "Rectificación: pedir que corrijamos datos inexactos.",
                "Supresión: pedir que eliminemos sus datos personales.",
                "Portabilidad: recibir sus datos en un formato estructurado.",
                "Restricción: limitar ciertos tratamientos.",
                "Oposición: oponerse a tratamientos basados en intereses legítimos.",
              ] },
              { type: "p", text: "Para ejercer estos derechos, escríbanos a los contactos que figuran al final de esta Política." },
            ],
          },
          {
            id: "third-parties",
            number: "8",
            title: "Servicios de terceros",
            blocks: [
              { type: "p", text: "Utilizamos proveedores externos para partes concretas del Servicio. Los más relevantes son:" },
              { type: "ul", items: [
                "GitHub — distribución de las versiones descargables del cliente.",
                "Google OAuth — autenticación dentro de la aplicación.",
                "PostHog — analítica del sitio web y del producto, con identificación sólo para usuarios autenticados.",
                "Discord — comunidad y soporte.",
                "Infraestructura cloud que hospeda nuestras API.",
              ] },
              { type: "p", text: "Cada proveedor tiene su propia política de privacidad. Le recomendamos revisarla si interactúa con esas superficies." },
            ],
          },
          {
            id: "international",
            number: "9",
            title: "Transferencias internacionales",
            blocks: [
              { type: "p", text: "Sus datos pueden procesarse en países distintos al suyo. Cuando corresponda, implementamos los resguardos contractuales o los mecanismos de transferencia exigidos por la normativa aplicable." },
              { type: "p", text: "Para residentes del Espacio Económico Europeo, utilizamos cláusulas contractuales tipo u otras bases legales aprobadas para las transferencias fuera de la UE." },
            ],
          },
          {
            id: "minors",
            number: "10",
            title: "Privacidad de menores",
            blocks: [
              { type: "p", text: "El Servicio no está dirigido a menores de 18 años. No recolectamos de forma intencional datos de personas menores de esa edad." },
              { type: "p", text: "Si detectamos que se han recolectado datos de un menor los eliminaremos por medios razonables tan pronto seamos notificados." },
            ],
          },
          {
            id: "changes",
            number: "11",
            title: "Cambios en esta Política",
            blocks: [
              { type: "p", text: "Podemos actualizar esta Política para reflejar cambios en el Servicio, en la regulación o en nuestras prácticas. Comunicaremos las modificaciones por uno o más de los siguientes medios:" },
              { type: "ul", items: [
                "Publicando la nueva versión en esta página.",
                "Enviándole una notificación por email si corresponde.",
                "Mostrando un aviso dentro de la aplicación.",
              ] },
              { type: "p", text: "El uso continuo del Servicio después de la publicación implica la aceptación de la Política actualizada." },
            ],
          },
          {
            id: "contact",
            number: "12",
            title: "Contacto",
            blocks: [
              { type: "p", text: "Si tiene preguntas sobre esta Política o sobre cómo tratamos sus datos, escríbanos:" },
              { type: "kv", items: [
                { label: "Email", value: "privacy@macaco.dev" },
                { label: "Delegado de Protección de Datos (DPO)", value: "dpo@macaco.dev" },
                { label: "Sitio web", value: "https://macaco.dev" },
              ] },
              { type: "p", text: "Los residentes de la Unión Europea también pueden presentar un reclamo ante su autoridad local de protección de datos." },
            ],
          },
        ],
      },
    },
    mockup: {
      live: "En vivo",
      projects: {
        header: "Proyectos",
        searchPlaceholder: "Buscar proyectos...",
        items: [
          { id: "automation", name: "Amzn", type: "WEB", active: true },
          { id: "central", name: "Central de ...", type: "MOBILE", active: false },
          { id: "despegar", name: "Despegar", type: "MOBILE", active: false },
          { id: "calendar", name: "Calendly", type: "MOBILE", active: false },
          { id: "voyagee", name: "Voyagee", type: "WEB", active: false },
        ],
      },
      tests: {
        projectTitle: "Amzn",
        searchPlaceholder: "Buscar tests...",
        sync: "Sync",
        runAll: "Ejecutar todos",
        chipLabel: "Test",
        viewDetails: "Ver detalles",
        versionHistory: "Historial",
        run: "Ejecutar",
        items: [
          {
            id: "tc1",
            title: "TC1 - Registrar usuario",
            summary:
              "Este test valida el flujo completo de registro de usuario en automationexercise.com. Cubre: - Navegar a la página de signup/login - Completar el nombre y un email único con timestamp (paso 1) - Finalizar la cuenta completa...",
            fileName: "tc1-register-user.spec.ts",
          },
          {
            id: "tc2",
            title: "TC2 - Login con credenciales válidas",
            summary:
              "Este test valida el flujo completo de login de un usuario registrado en automationexercise.com. Se crea una cuenta fresca por la UI en beforeAll usando un email único con timestamp para garantizar aislamiento...",
            fileName: "tc2-login-correct-credentials.spec.ts",
          },
          {
            id: "tc3",
            title: "TC3 - Login con email y contraseña incorrectos",
            summary:
              "Valida que la aplicación maneje correctamente los intentos de login fallidos. Cuando un usuario envía el formulario con un email inexistente y contraseña incorrecta, el sistema debe mostrar un mensaje de error claro y mantener...",
            fileName: "tc3-login-incorrect-credentials.spec.ts",
          },
          {
            id: "tc4",
            title: "TC4 - Cerrar sesión",
            summary:
              "Este test valida el flujo de logout en automationexercise.com. Registra una cuenta fresca por el flujo de signup de la UI en beforeAll, loguea con credenciales válidas, confirma el estado autenticado ('Logueado como' en la navba...",
            fileName: "tc4-logout-user.spec.ts",
          },
          {
            id: "tc5",
            title: "TC5 - Registrar usuario con email existente",
            summary:
              "Este test valida que el flujo de registro maneje correctamente emails duplicados. Se crea una cuenta fresca por el flujo completo de signup en beforeAll usando un email único con timestamp. Luego el test intenta...",
            fileName: "tc5-register-existing-email.spec.ts",
          },
          {
            id: "tc6",
            title: "TC6 - Envío del formulario de contacto",
            summary:
              "Validación de punta a punta del flujo Contact Us. Navega al formulario de contacto, completa nombre, email, asunto y mensaje, envía el formulario y confirma que el banner de éxito aparezca...",
            fileName: "tc6-contact-us-form.spec.ts",
          },
        ],
      },
      chat: {
        initialTitle: "Nuevo chat",
        derivedTitle: "Test de login",
        solo: "Solo",
        squad: "Squad",
        inputPlaceholder: "Preguntá sobre tests o refinamientos...",
        userPrompt:
          "Probá el flujo de login: credenciales válidas deben redirigir al dashboard.",
        assistantIntro:
          "Dale — planifico el spec de Playwright y lo corro local contra tu URL de staging.",
        assistantOutro:
          "Las 3 aserciones pasaron en 4.2s. Guardé el spec en `tests/login-flow.spec.ts` en tu repo.",
        toolCallArgumentsLabel: "Argumentos",
        toolCallExecutingLabel: "ejecutando...",
        toolCallCompletedLabel: "completado",
        worker: {
          name: "Flujo feliz de login",
          objective:
            "Ejecutar el flujo de login de punta a punta con credenciales válidas.",
          progress: "Navegando · llenando formulario · verificando redirección",
          teamShape: ["Navegador", "Llenador", "Verificador"],
          summary:
            "Login exitoso. Redirección a /dashboard verificada. 3/3 aserciones pasaron.",
          objectiveLabel: "Objetivo",
          summaryLabel: "Resumen",
          workingChip: "Trabajando",
          doneChip: "Listo",
          testSingular: "test",
          testPlural: "tests",
        },
      },
    },
  },
  en: {
    nav: {
      link: "Why choose us?",
      linkTeam: "Team",
      linkCommunity: "Community",
      cta: "Try Free",
    },
    hero: {
      eyebrow: "Early Access · No credit card · QA teams",
      h1Main: "Your AI-powered",
      h1Accent: "QA assistant",
      leadMain:
        "Describe what you want to test in plain language. Macaco generates real automated tests you run on your machine as many times as you want.",
      leadAccent: "No cost per execution. No vendor lock-in.",
      ctaPrimary: "Try Free",
      ctaSecondary: "See How It Works",
      chips: [
        "Real tests",
        "Exportable code",
        "100% local on your machine",
        "Unlimited executions",
        "No extra cost",
        "No vendor lock-in",
        "CI/CD integration",
        "Video of every run",
        "No external servers",
        "Automatic screenshots",
        "Regression support",
        "Early Access — No Credit Card",
      ],
    },
    why: {
      eyebrow: "Why choose us?",
      h2Line1: "The code a senior",
      h2Line2Accent: "automation engineer",
      h2Line3: "would write.",
      lead: "Describe your test cases like you'd explain them to a colleague. Macaco turns them into automated tests you can run every sprint without rewriting anything.",
      features: [
        {
          title: "Real tests, not fragile recordings",
          description:
            "Professional automation code with Playwright. Inspect, edit, or export — the same code a senior automation engineer would write.",
        },
        {
          title: "Runs on your machine. No limits.",
          description:
            "Local execution in one click. No external servers, no cost per run, no quotas. Ideal for compliance-restricted environments.",
        },
        {
          title: "Your code. Your repo. Your CI/CD.",
          description:
            "Everything Macaco generates is yours. Export to your repo, integrate with GitHub Actions or Jenkins. If you leave Macaco, your suite keeps running.",
        },
      ],
    },
    cta: {
      eyebrow: "Private beta · Invite only",
      h2Main: "Join the",
      h2Accent: "private beta.",
      lead: "We're selecting the first QA professionals to try Macaco. Leave your details and we'll reach out soon.",
      submittedMarker: "Submitted",
      submittedLead:
        "Thanks. We're selecting the first beta testers and we'll email you the access steps soon.",
      submittedChips: [
        "15 spots available",
        "Invite-only access",
        "Free for beta testers",
      ],
    },
    form: {
      labelEmail: "Email address *",
      placeholderEmail: "your@email.com",
      labelTool: "Testing tool *",
      placeholderTool: "Select your tool",
      optionToolManual: "Manual testing",
      optionToolOther: "Other",
      labelOS: "Operating system *",
      placeholderOS: "Select your OS",
      labelVPN: "Are the systems you test behind a VPN? *",
      placeholderVPN: "Select an option",
      optionVPNNo: "No, they are publicly accessible",
      optionVPNYes: "Yes, they require VPN access",
      optionVPNSome: "Some yes, some no",
      optionVPNNotSure: "Not sure",
      submit: "Get Access",
      submitting: "Submitting...",
      errorGeneric: "Couldn't submit the form. Please try again.",
      errorNetwork: "Network error. Check your connection and try again.",
    },
    discord: {
      eyebrow: "Community",
      h2Main: "Got questions?",
      h2Accent: "Talk to us",
      lead: "We're on Discord answering questions and listening to feedback.",
      cta: "Join Discord",
    },
    team: {
      eyebrow: "Team",
      h2Main: "Built by engineers who understand",
      h2Accent: "what QA teams actually need",
      lead: "We've spent years as professionals building backend systems, AI products, and automation tools. Now we blend that insider knowledge of the field with our development skills to supercharge what a QA team can do.",
      members: [
        {
          name: "Gastón Zárate",
          role: "CEO & Co-founder",
          bio: "+8 years as a Python developer and tech lead. Previously built AI dev tools and cloud infrastructure at SleakOps.",
          photo: "/images/team/gaston.jpg",
          linkedin: "https://www.linkedin.com/in/gaston-zarate/",
        },
        {
          name: "Luciano Serra",
          role: "CTO & Co-founder",
          bio: "GenAI and backend specialist. Built AI chatbots serving 30K users/month at Moni. Expert in Python, Django, FastAPI, and LLM agents.",
          photo: "/images/team/luciano.jpg",
          linkedin: "https://www.linkedin.com/in/serra-luciano-martin/",
        },
      ],
    },
    footer: {
      linkTerms: "Terms of Service",
      linkPrivacy: "Privacy Policy",
      taglineLine1: "© 2026 Macaco. Automate your QA without code.",
      taglineLine2: "All rights reserved.",
    },
    download: {
      eyebrow: "Private beta · Early access",
      h1Main: "Download",
      h1Accent: "Macaco",
      lead: "Thanks for joining the beta. Choose your platform to get started.",
      cards: {
        windows: { platform: "Windows", description: ".exe installer" },
        mac: { platform: "macOS", description: ".dmg installer" },
        linux: { platform: "Linux", description: ".AppImage" },
      },
      download: "Download",
      loading: "Loading…",
      unavailable: "Unavailable",
      help: {
        title: "Getting started",
        step1: "1. Download and install Macaco for your platform.",
        step2: "2. Sign in with your Google account.",
        step3: "3. Create your first project and chat with the AI to generate tests.",
        discordPrefix: "Need help? Join our ",
        discordLink: "Discord community",
      },
    },
    legal: {
      terms: {
        eyebrow: "Legal · Terms of use",
        h1Main: "Terms of",
        h1Accent: "service",
        lead: "These terms govern your use of Macaco, including the app, the website, and our APIs.",
        lastUpdatedLabel: "Last updated",
        lastUpdated: "April 22, 2026",
        sections: [
          {
            id: "introduction",
            number: "1",
            title: "Introduction",
            blocks: [
              { type: "p", text: "Welcome to Macaco. This document (\"Terms\") describes the conditions under which you access and use our QA assistant, including the desktop application, the website, and related APIs (the \"Service\")." },
              { type: "p", text: "By accessing or using the Service, you agree to these Terms. If you do not agree with any part, do not use the Service." },
            ],
          },
          {
            id: "acceptance",
            number: "2",
            title: "Acceptance of the Terms",
            blocks: [
              { type: "p", text: "By creating an account, downloading the app, or using the site, you confirm that you have read and agree to these Terms and our Privacy Policy." },
              { type: "p", text: "You must be at least 18 years old to use the Service. By using it, you represent that you meet that requirement." },
            ],
          },
          {
            id: "service",
            number: "3",
            title: "Description of the Service",
            blocks: [
              { type: "p", text: "Macaco is a QA assistant that turns test cases described in plain language into Playwright automation code. Tests run on your machine and you keep control of the generated code." },
              { type: "p", text: "The Service includes:" },
              { type: "ul", items: [
                "AI-assisted generation of test cases from natural-language descriptions.",
                "Playwright automation code that runs locally on your machine.",
                "Inspection, editing, and export of the generated code.",
                "Integration with your repository and CI/CD pipelines (GitHub Actions, Jenkins, etc.).",
              ] },
              { type: "p", text: "Macaco may modify, suspend, or discontinue features of the Service, with or without prior notice, especially during beta." },
            ],
          },
          {
            id: "accounts",
            number: "4",
            title: "Accounts and registration",
            blocks: [
              { type: "p", text: "Some features require an account. When registering, you agree to:" },
              { type: "ul", items: [
                "Provide accurate, current, and complete information.",
                "Keep your credentials secure and confidential.",
                "Notify us immediately of any unauthorized access.",
              ] },
              { type: "p", text: "You are responsible for all activity performed through your account." },
            ],
          },
          {
            id: "acceptable-use",
            number: "5",
            title: "Acceptable use",
            blocks: [
              { type: "p", text: "You agree not to use the Service to:" },
              { type: "ul", items: [
                "Break applicable laws or regulations, or the rights of third parties.",
                "Transmit harmful, abusive, or illegal content.",
                "Attempt to gain unauthorized access to our systems or to those of third parties.",
                "Interfere with the availability or integrity of the Service.",
                "Run load tests, mass scraping, or automated activity against targets you are not authorized to test.",
              ] },
            ],
          },
          {
            id: "privacy",
            number: "6",
            title: "Privacy and data",
            blocks: [
              { type: "p", text: "How we collect and process data is detailed in our Privacy Policy, which is part of these Terms." },
              { type: "p", text: "Macaco is designed to run tests locally: your test code, screenshots, videos, and logs stay on your device unless you choose to export them." },
              { type: "p", text: "We apply reasonable security measures, but no system is fully immune to risk." },
            ],
          },
          {
            id: "ip",
            number: "7",
            title: "Intellectual property",
            blocks: [
              { type: "p", text: "The Service — including its software, design, brand, and documentation — is owned by Macaco and is protected by intellectual property laws." },
              { type: "p", text: "Test code generated by Macaco from your instructions is yours: you can inspect it, edit it, run it on your infrastructure, export it to your repository, and keep using it even if you stop using Macaco." },
              { type: "p", text: "When you send us content (test descriptions, feedback, etc.), you grant us a limited license to process it solely to deliver the Service." },
            ],
          },
          {
            id: "liability",
            number: "8",
            title: "Limitation of liability",
            blocks: [
              { type: "p", text: "To the maximum extent permitted by law, Macaco will not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use." },
              { type: "p", text: "Macaco's total liability for any claim related to the Service will not exceed the amounts you actually paid Macaco in the twelve months preceding the claim. If you are on a free plan, that amount is zero." },
            ],
          },
          {
            id: "termination",
            number: "9",
            title: "Termination",
            blocks: [
              { type: "p", text: "We may suspend or terminate your access to the Service, with or without notice, if you breach these Terms or if your use harms Macaco or third parties." },
              { type: "p", text: "You may close your account at any time by contacting us or using the in-app controls." },
            ],
          },
          {
            id: "changes",
            number: "10",
            title: "Changes to the Terms",
            blocks: [
              { type: "p", text: "We may update these Terms. We will publish the updated version on this page and refresh the \"Last updated\" date." },
              { type: "p", text: "Continued use of the Service after publication constitutes acceptance of the updated Terms." },
            ],
          },
          {
            id: "contact",
            number: "11",
            title: "Contact",
            blocks: [
              { type: "p", text: "If you have questions about these Terms, reach us at:" },
              { type: "kv", items: [
                { label: "Email", value: "legal@macaco.dev" },
                { label: "Website", value: "https://macaco.dev" },
              ] },
            ],
          },
          {
            id: "law",
            number: "12",
            title: "Governing law",
            blocks: [
              { type: "p", text: "These Terms are governed by the applicable laws of the jurisdiction where Macaco is incorporated. Any disputes will be resolved in the competent courts of that jurisdiction." },
            ],
          },
        ],
      },
      privacy: {
        eyebrow: "Privacy · What we collect",
        h1Main: "Privacy",
        h1Accent: "policy",
        lead: "How we handle your information when you use Macaco — with a minimum-data, run-it-locally approach.",
        lastUpdatedLabel: "Last updated",
        lastUpdated: "April 22, 2026",
        sections: [
          {
            id: "introduction",
            number: "1",
            title: "Introduction",
            blocks: [
              { type: "p", text: "Macaco is committed to protecting your privacy. This Policy explains what information we collect when you use our QA assistant, how we use it, when we share it, and the controls you have over it." },
              { type: "p", text: "By using the Service, you accept the practices described in this document." },
            ],
          },
          {
            id: "data-we-collect",
            number: "2",
            title: "Information we collect",
            blocks: [
              { type: "h3", text: "Data that stays on your device" },
              { type: "p", text: "Macaco is designed to run locally. By default, the following artifacts are stored on your machine and are not sent to our servers unless you choose to export them:" },
              { type: "ul", items: [
                "Generated test code.",
                "Screenshots and videos captured during runs.",
                "Run logs and detailed results.",
                "Files from your test projects.",
              ] },
              { type: "h3", text: "Data you provide" },
              { type: "p", text: "We collect information you voluntarily submit, for example:" },
              { type: "ul", items: [
                "Email and registration details when requesting beta access.",
                "Operating system, current testing tool, and whether your systems are behind a VPN (beta access form).",
                "Anything you send through support or contact channels.",
              ] },
              { type: "h3", text: "Automatic technical data" },
              { type: "p", text: "When you visit the website or use the app, we automatically collect certain technical information:" },
              { type: "ul", items: [
                "Device information (browser type, operating system, IP address).",
                "Usage events and site performance metrics.",
                "Error logs, used to diagnose and fix issues.",
              ] },
              { type: "h3", text: "Cookies and similar technologies" },
              { type: "p", text: "We use cookies and local storage to remember preferences (language, session) and for aggregated analytics. You can control these through your browser settings." },
            ],
          },
          {
            id: "use",
            number: "3",
            title: "How we use your information",
            blocks: [
              { type: "p", text: "We use the collected data to:" },
              { type: "ul", items: [
                "Provide, maintain, and improve the Service.",
                "Manage your account and respond to your requests.",
                "Send operational communications.",
                "Analyze aggregated usage patterns to improve the experience.",
                "Detect and prevent fraud or abuse.",
                "Comply with applicable legal obligations.",
              ] },
            ],
          },
          {
            id: "sharing",
            number: "4",
            title: "How we share information",
            blocks: [
              { type: "p", text: "We do not sell, rent, or trade your personal information. We may share data only in these cases:" },
              { type: "ul", items: [
                "With service providers that help us operate the Service, under confidentiality obligations.",
                "When required by law or to protect our rights or the rights of third parties.",
                "In the context of a merger, acquisition, or asset transfer, with notice where applicable.",
                "With your explicit consent for a specific purpose.",
              ] },
            ],
          },
          {
            id: "security",
            number: "5",
            title: "Data security",
            blocks: [
              { type: "p", text: "We implement reasonable technical and organizational measures to protect your information:" },
              { type: "ul", items: [
                "Encryption in transit (TLS) and at rest where applicable.",
                "Access controls and authentication for authorized staff.",
                "Periodic reviews and incident response procedures.",
              ] },
              { type: "p", text: "No transmission over the internet is fully secure, so we cannot guarantee absolute security." },
            ],
          },
          {
            id: "retention",
            number: "6",
            title: "Data retention",
            blocks: [
              { type: "p", text: "We keep personal information only for as long as it is necessary to:" },
              { type: "ul", items: [
                "Provide the Service and fulfill the purposes described in this Policy.",
                "Comply with legal obligations and resolve disputes.",
                "Preserve evidence of security incidents or fraud.",
              ] },
              { type: "p", text: "When the information is no longer needed, we delete or anonymize it securely." },
            ],
          },
          {
            id: "rights",
            number: "7",
            title: "Your rights",
            blocks: [
              { type: "p", text: "Depending on your jurisdiction, you may have the following rights over your personal data:" },
              { type: "ul", items: [
                "Access: request a copy of the information we hold about you.",
                "Correction: request that we correct inaccurate data.",
                "Deletion: request removal of your personal data.",
                "Portability: receive your data in a structured format.",
                "Restriction: restrict certain types of processing.",
                "Objection: object to processing based on legitimate interests.",
              ] },
              { type: "p", text: "To exercise these rights, reach us via the contacts listed at the end of this Policy." },
            ],
          },
          {
            id: "third-parties",
            number: "8",
            title: "Third-party services",
            blocks: [
              { type: "p", text: "We rely on external providers for specific parts of the Service. The most relevant ones are:" },
              { type: "ul", items: [
                "GitHub — distribution of downloadable client releases.",
                "Google OAuth — authentication within the app.",
                "PostHog — website and product analytics, using identification only for authenticated users.",
                "Discord — community and support.",
                "Cloud infrastructure that hosts our APIs.",
              ] },
              { type: "p", text: "Each provider has its own privacy policy. We encourage you to review them if you interact with those surfaces." },
            ],
          },
          {
            id: "international",
            number: "9",
            title: "International data transfers",
            blocks: [
              { type: "p", text: "Your data may be processed in countries other than your own. Where applicable, we apply the contractual safeguards or transfer mechanisms required by the applicable regulations." },
              { type: "p", text: "For residents of the European Economic Area, we rely on standard contractual clauses or other approved legal bases for transfers outside the EU." },
            ],
          },
          {
            id: "minors",
            number: "10",
            title: "Children's privacy",
            blocks: [
              { type: "p", text: "The Service is not directed to users under 18. We do not knowingly collect data from people under that age." },
              { type: "p", text: "If we become aware that data from a minor has been collected, we will delete it through reasonable means as soon as we are notified." },
            ],
          },
          {
            id: "changes",
            number: "11",
            title: "Changes to this Policy",
            blocks: [
              { type: "p", text: "We may update this Policy to reflect changes to the Service, applicable regulations, or our practices. We will communicate updates through one or more of the following:" },
              { type: "ul", items: [
                "Publishing the new version on this page.",
                "Sending you an email notification when appropriate.",
                "Displaying a notice inside the application.",
              ] },
              { type: "p", text: "Continued use of the Service after publication constitutes acceptance of the updated Policy." },
            ],
          },
          {
            id: "contact",
            number: "12",
            title: "Contact",
            blocks: [
              { type: "p", text: "If you have questions about this Policy or how we process your data, reach out to:" },
              { type: "kv", items: [
                { label: "Email", value: "privacy@macaco.dev" },
                { label: "Data Protection Officer (DPO)", value: "dpo@macaco.dev" },
                { label: "Website", value: "https://macaco.dev" },
              ] },
              { type: "p", text: "EU residents may also file a complaint with their local data protection authority." },
            ],
          },
        ],
      },
    },
    mockup: {
      live: "Live",
      projects: {
        header: "Projects",
        searchPlaceholder: "Search projects...",
        items: [
          { id: "automation", name: "Amzn", type: "WEB", active: true },
          { id: "central", name: "Central de ...", type: "MOBILE", active: false },
          { id: "despegar", name: "Despegar", type: "MOBILE", active: false },
          { id: "calendar", name: "Calendly", type: "MOBILE", active: false },
          { id: "voyagee", name: "Voyagee", type: "WEB", active: false },
        ],
      },
      tests: {
        projectTitle: "Amzn",
        searchPlaceholder: "Search tests...",
        sync: "Sync",
        runAll: "Run All",
        chipLabel: "Test",
        viewDetails: "View details",
        versionHistory: "Version history",
        run: "Run",
        items: [
          {
            id: "tc1",
            title: "TC1 - Register User",
            summary:
              "This test validates the full end-to-end user registration flow on automationexercise.com. It covers: - Navigating to the signup/login page - Filling in name and a unique timestamped email (step 1) - Completing the full account...",
            fileName: "tc1-register-user.spec.ts",
          },
          {
            id: "tc2",
            title: "TC2 - Login with Correct Credentials",
            summary:
              "This test suite validates the complete login flow for a registered user on automationexercise.com. A fresh account is created via the UI signup flow in beforeAll using a unique timestamped email to guarantee isolation...",
            fileName: "tc2-login-correct-credentials.spec.ts",
          },
          {
            id: "tc3",
            title: "TC3 - Login User with Incorrect Email and Password",
            summary:
              "Validates that the application correctly handles failed login attempts. When a user submits the login form with a non-existent email and an incorrect password, the system must display a clear error message and keep the...",
            fileName: "tc3-login-incorrect-credentials.spec.ts",
          },
          {
            id: "tc4",
            title: "TC4 - Logout User",
            summary:
              "This test suite validates the logout flow on automationexercise.com. It registers a fresh account via the UI signup flow in beforeAll, logs in with valid credentials, confirms the authenticated state ('Logged in as' navba...",
            fileName: "tc4-logout-user.spec.ts",
          },
          {
            id: "tc5",
            title: "TC5 - Register User with Existing Email",
            summary:
              "This test suite validates that the registration flow correctly handles duplicate email addresses. A fresh account is created via the full UI signup flow in beforeAll using a unique timestamped email. The test then attempts to...",
            fileName: "tc5-register-existing-email.spec.ts",
          },
          {
            id: "tc6",
            title: "TC6 - Contact Us Form Submission",
            summary:
              "End-to-end validation of the Contact Us flow. Navigates to the contact form, fills in name, email, subject, and message, submits the form, and confirms the success confirmation banner appears...",
            fileName: "tc6-contact-us-form.spec.ts",
          },
        ],
      },
      chat: {
        initialTitle: "New chat",
        derivedTitle: "Login flow test",
        solo: "Solo",
        squad: "Squad",
        inputPlaceholder: "Ask about test cases or refinements...",
        userPrompt:
          "Test the login flow: valid credentials should redirect to the dashboard.",
        assistantIntro:
          "Got it — I'll plan the Playwright spec and run it locally against your staging URL.",
        assistantOutro:
          "All 3 assertions passed in 4.2s. Saved the spec to `tests/login-flow.spec.ts` in your repo.",
        toolCallArgumentsLabel: "Arguments",
        toolCallExecutingLabel: "executing...",
        toolCallCompletedLabel: "completed",
        worker: {
          name: "Login happy path",
          objective:
            "Run the login flow end-to-end with valid credentials.",
          progress: "Navigating · filling form · asserting redirect",
          teamShape: ["Navigator", "Form Filler", "Asserter"],
          summary:
            "Login succeeded. Redirect to /dashboard verified. 3/3 assertions passed.",
          objectiveLabel: "Objective",
          summaryLabel: "Summary",
          workingChip: "Working",
          doneChip: "Done",
          testSingular: "test",
          testPlural: "tests",
        },
      },
    },
  },
} as const;

export type Lang = keyof typeof COPY;
export type Copy = (typeof COPY)[Lang];
