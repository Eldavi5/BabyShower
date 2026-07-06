export type Locale = "es" | "en";

type Quote = {
  text: string;
};

export const invitationContent = {
  es: {
    babyName: "Santiago",
    hostName: "El Baby Shower de Santiago",
    parents: {
      mom: "Monica Silva Bello",
      dad: "Omar Barreto Resendiz"
    },
    event: {
      date: "Sábado 24 de agosto de 2026",
      time: "4:00 PM",
      location: "Salón Nube Azul, Jardín Central",
      mapsQuery: "Salón Nube Azul, Jardín Central"
    },
    eventLabels: {
      date: "Día Especial",
      time: "Hora de Reunión",
      location: "Lugar Mágico"
    },
    countdown: {
      title: "Falta Muy Poco",
      subtitle: "para abrazar a Santiago",
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos"
    },
    phrase: "¡Un pequeño milagro está por llegar! Con el corazón lleno de ilusión y los brazos listos para abrazar, esperamos la llegada de nuestro amado Santiago. ¡Acompáñanos a celebrar su hermosa historia!",
    phraseTwo: "Pintamos el mundo de azul y blanco para recibir al osito más tierno de nuestras vidas. ¡Cada sonrisa compartida con ustedes será un regalo inolvidable!",
    phraseThree: "¡La felicidad se multiplica cuando se comparte! Queremos reír, cantar y guardar en el corazón cada instante de este día tan especial y mágico.",
    quotes: [
      { text: "¡Santiago es nuestro rayito de sol, que viene a iluminar de ternura y puras risas nuestro hogar!" },
      { text: "¡Contamos los latidos y los días para escuchar sus risitas y ver su carita por primera vez!" },
      { text: "¡Celebremos la vida, el amor y la dulce espera del regalo más hermoso que el cielo nos ha enviado!" },
      { text: "¡Cada globo, cada osito y cada detalle azul susurran lo mucho que ya te amamos, pequeño Santiago!" }
    ] satisfies Quote[],
    message:
      "¡Estamos listos para llenar de amor y magia el camino de Santiago! Queremos que seas parte de esta hermosa fiesta de bienvenida, donde no faltarán los abrazos de oso, las risas y los momentos mágicos.",
    babySection:
      "¡Un nidito lleno de amor! Cada rincón de su futuro cuarto y cada detalle del evento están cobrando vida para darle la bienvenida más cálida al nuevo integrante de la familia.",
    babyStyle:
      "Un estilo mágico Baby Bloom en tonos azul y blanco puro. Diseñamos un ambiente tierno, con nubecitas, estrellas y ositos esponjosos para que sientas la calidez de su llegada desde el primer instante.",
    momentsTitle: "Momentos Mágicos del Día",
    moments: [
      {
        title: "Dulce Bienvenida",
        description: "Recibiremos a nuestros invitados en un bosque de nubes azules y tiernos ositos para iniciar la celebración con el corazón contento."
      },
      {
        title: "Detalles Con Amor",
        description: "Disfrutaremos de una mesa de dulces inspirada en la suavidad de un peluche, con bocadillos preparados especialmente para endulzar el día."
      },
      {
        title: "Cápsula de Recuerdos",
        description: "Escribiremos cartitas llenas de buenos deseos para Santiago y nos tomaremos fotos memorables que formarán su primer álbum de vida."
      },
      {
        title: "Abrazo de Familia",
        description: "Un brindis muy especial entre risas, juegos y la inmensa alegría de saber que Santiago crecerá rodeado de personas maravillosas."
      }
    ],
    eventTitle: "Detalles del Evento",
    eventSubtitle: "Todo listo para nuestro gran encuentro",
    eventNote: "Preparamos una tarde llena de dulzura y tranquilidad para que disfrutemos cada segundo sin prisas. ¡Te esperamos con emoción!",
    locationImageTitle: "Nuestra Ubicación",
    locationImageCaption: "El hermoso Salón Nube Azul nos recibirá con sus hermosas áreas verdes ideales para festejar.",
    mapsButton: "Cómo llegar en Google Maps",
    photosTitle: "Galería de la Dulce Espera",
    photosIntro: "Nuestros Recuerdos",
    photos: [
      {
        title: "El Primer Latido",
        caption: "Nuestra primera mirada a Santiago. ¡Su pequeño corazoncito latiendo con fuerza nos llena de felicidad!",
        placeholder: "Ultrasonido de Santiago"
      },
      {
        title: "Detalles de Amor",
        caption: "Zapatitos azules, peluches y ropa suave listos para recibir su primer día en este hermoso mundo.",
        placeholder: "Preparativos y Decoración"
      },
      {
        title: "Estilo Baby Bloom",
        caption: "Nuestra mesa de regalos y la ropita más tierna para consentir a Santiago en sus primeros meses.",
        placeholder: "Detalles del Evento"
      },
      {
        title: "Nuestra Familia",
        caption: "Mónica y Omar contando los días para iniciar la aventura más bonita de sus vidas.",
        placeholder: "Papás de Santiago"
      }
    ],
    parentsTitle: "Los Papás de Santiago",
    parentsSubtitle: "Mónica & Omar",
    parentsPhotosTitle: "Nuestra Dulce Espera",
    parentsPhotosCaption: "El amor nos une y la llegada de Santiago nos transforma. Estamos felices de compartir esta gran ilusión contigo.",
    rsvp: {
      title: "Confirmar Asistencia",
      heading: "Asegura tu lugar con un mensajito",
      description: "Por favor, confírmanos tu asistencia completando el formulario. Al presionar el botón, se generará tu mensaje personalizado para enviarlo por WhatsApp.",
      phone: "+52 56 1152 8080",
      familyLabel: "Tu Nombre o Familia",
      familyPlaceholder: "Ej. Familia Gómez o Sofía Pérez",
      peopleLabel: "¿Cuántas personas asistirán?",
      peoplePlaceholder: "Selecciona el número de personas",
      submit: "Enviar Confirmación por WhatsApp",
      defaultFamily: "Familia Invitada"
    },
    music: {
      title: "Música de Fondo",
      description: "Melodías dulces para ambientar la espera de Santiago.",
      buttonLabel: "Música"
    },
    language: {
      label: "ES / EN"
    },
    heroPill: "🍼 Baby Shower"
  },
  en: {
    babyName: "Santiago",
    hostName: "Santiago's Baby Shower",
    parents: {
      mom: "Monica Silva Bello",
      dad: "Omar Barreto Resendiz"
    },
    event: {
      date: "Saturday, August 24, 2026",
      time: "4:00 PM",
      location: "Salón Nube Azul, Jardín Central",
      mapsQuery: "Salón Nube Azul, Jardín Central"
    },
    eventLabels: {
      date: "Special Day",
      time: "Gathering Time",
      location: "Magical Venue"
    },
    countdown: {
      title: "Almost There",
      subtitle: "to cuddle Santiago",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds"
    },
    phrase: "A little miracle is on its way! With hearts full of hope and arms ready to hug, we wait for our beloved Santiago. Join us to celebrate his beautiful story!",
    phraseTwo: "Painting the world in blue and white to welcome the cuddliest little bear. Every smile shared with you will be an unforgettable gift!",
    phraseThree: "Happiness multiplies when shared! We want to laugh, sing, and hold in our hearts every magical moment of this special day.",
    quotes: [
      { text: "Santiago is our little ray of sunshine, coming to fill our home with tenderness and laughter!" },
      { text: "We count every heartbeat and day to hear his sweet giggles and see his little face for the first time!" },
      { text: "Let's celebrate life, love, and the sweet anticipation of the most beautiful gift sent from heaven!" },
      { text: "Every balloon, every teddy bear, and every blue detail whispers how much we already love you, little Santiago!" }
    ] satisfies Quote[],
    message:
      "We are ready to fill Santiago's path with love and magic! We want you to be part of this warm welcome party, full of bear hugs, laughter, and magical moments.",
    babySection:
      "A nest full of love! Every corner of his future room and every detail of the event are coming to life to give the warmest welcome to our new family member.",
    babyStyle:
      "A magical Baby Bloom style in pure blue and white tones. We designed a tender environment with soft clouds, stars, and fluffy teddy bears so you feel the warmth of his arrival.",
    momentsTitle: "Magical Moments of the Day",
    moments: [
      {
        title: "Sweet Welcome",
        description: "We will welcome our guests in a forest of blue clouds and soft teddy bears to kick off the celebration with happy hearts."
      },
      {
        title: "Details With Love",
        description: "Enjoy a dessert table inspired by teddy bear sweetness, featuring delicious snacks designed to sweeten the day."
      },
      {
        title: "Memory Capsule",
        description: "Write warm wishes for Santiago and take memorable photos that will fill his first album of life."
      },
      {
        title: "Family Hug",
        description: "A special toast filled with laughter, games, and the immense joy of knowing Santiago will grow surrounded by wonderful people."
      }
    ],
    eventTitle: "Event Details",
    eventSubtitle: "Everything ready for our big day",
    eventNote: "We have prepared a sweet and cozy afternoon to enjoy every second without rush. We wait for you with excitement!",
    locationImageTitle: "Our Venue",
    locationImageCaption: "The beautiful Salón Nube Azul will welcome us with green spaces perfect for celebrating.",
    mapsButton: "Get Directions on Google Maps",
    photosTitle: "Gallery of our Sweet Expectation",
    photosIntro: "Our Memories",
    photos: [
      {
        title: "The First Heartbeat",
        caption: "Our first look at Santiago. His tiny heart beating strong fills us with true happiness!",
        placeholder: "Santiago's Ultrasound"
      },
      {
        title: "Details of Love",
        caption: "Tiny blue shoes, soft plushies, and cozy outfits ready for his first days in this beautiful world.",
        placeholder: "Preparation & Decors"
      },
      {
        title: "Baby Bloom Style",
        caption: "Our gift registry and the cutest outfits to pamper Santiago during his first months.",
        placeholder: "Event Highlights"
      },
      {
        title: "Our Family",
        caption: "Monica and Omar counting down the days to start the most beautiful adventure of their lives.",
        placeholder: "Santiago's Parents"
      }
    ],
    parentsTitle: "Santiago's Parents",
    parentsSubtitle: "Monica & Omar",
    parentsPhotosTitle: "Our Sweet Expectation",
    parentsPhotosCaption: "Love unites us and Santiago's arrival transforms us. We are happy to share this dream with you.",
    rsvp: {
      title: "Confirm Attendance",
      heading: "Secure your spot with a message",
      description: "Please confirm your attendance by filling out the form. Pressing the button will generate your customized message to send over WhatsApp.",
      phone: "+52 56 1152 8080",
      familyLabel: "Your Name or Family Name",
      familyPlaceholder: "Ex. Gomez Family or Sofia Perez",
      peopleLabel: "How many guests will attend?",
      peoplePlaceholder: "Select number of guests",
      submit: "Send Confirmation via WhatsApp",
      defaultFamily: "Guest Family"
    },
    music: {
      title: "Background Music",
      description: "Sweet melodies to set the mood for Santiago's arrival.",
      buttonLabel: "Music"
    },
    language: {
      label: "EN / ES"
    },
    heroPill: "🍼 Baby Shower"
  }
} as const;
