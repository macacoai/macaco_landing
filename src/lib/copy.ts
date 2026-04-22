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
          title: "Tests reales, no grabaciones frágiles",
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
