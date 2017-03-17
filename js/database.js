$(document).ready(function(){

  //
  //  ILLUSTRATIONS
  //
  var markupIllustrations = '<div class="popup container"><div class="mfp-close"></div>'+
                        '<div class="row">'+
                          '<div class="col-xs-12 col-sm-9">'+
                            '<div class="image-loader-custom"></div>'+
                            '<div class="mfp-illustration"></div>'+
                          '</div>'+
                          '<div class="col-xs-12 col-sm-3">'+
                            '<div class="popup-description">'+
                              '<div class="mfp-tech"></div>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'


  var markupWebsite = '<div class="popup container"><div class="mfp-close"></div>'+
                        '<div class="row">'+
                          '<div class="col-xs-12 col-sm-9">'+
                            '<div class="image-loader-custom"></div>'+
                            '<div class="mfp-illustration"></div>'+
                          '</div>'+
                          '<div class="col-xs-12 col-sm-3">'+
                            '<div class="popup-description">'+
                              '<div class="mfp-plugins"></div>'+
                              '<a class="mfp-url pink-button" target="_blank">Visitar Sitio</a>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'

  var markupVideos = '<div class="popup container"><div class="mfp-close"></div>'+
                        '<div class="row">'+
                          '<div class="iframe-content col-xs-12 col-sm-9">'+
                            '<div class="image-loader-custom"></div>'+
                            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                          '</div>'+
                          '<div class="col-xs-12 col-sm-3">'+
                            '<div class="popup-description">'+
                              '<div class="mfp-technology"></div>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'
  // INTERVIEWS

  var folletos = [
    {
      tech: "<h1>Nailu</h1><p>Una experiencia nueva al tomar mates.</p> <ul><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/nailu-1.jpg',
    },
    {
      tech: "<h1>Evento Beneficio</h1><p>Hashdog aportando a un evento Folklorico a beneficio.</p> <ul><li>Affinity Designer</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/nailu-1.jpg',
    },
    {
      tech: "<h1>Evento Beneficio</h1><p>Hashdog aportando a un evento Folklorico a beneficio.</p> <ul><li>Affinity Designer</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/feria-lomalinda.jpg',
    }
  ];
  // initalize popup
  $('button.folletos').magnificPopup({
    key: 'my-popup',
    items: folletos,
    type: 'inline',
    inline: {markup: markupIllustrations},
    gallery: {enabled: true }
  });

  // CARD PRESENTATION

  var cardPresentations = [
    {
      tech: "<h1>Tarjeta Personal</h1><p>Erika Ríos - Fotógrafa.</p> <ul><li>Diseño Gráfico</li><li>Affinity Designer</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/erika-rios.jpg',
    },

    {
      tech: "<h1>Tarjeta Personal</h1><p>Mayra Alvarez - Shopaolic: Indumentaria Femenina.</p> <ul><li>Diseño Gráfico</li><li>Affinity Designer</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/mayra-alvarez.jpg',
    },
    {
      tech: "<h1>Tarjeta Personal</h1><p>Debora Ríos - Nailu.</p> <ul><li>Diseño Gráfico</li><li>Affinity Designer</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/erika-rios.jpg',
    },
    {
      tech: "<h1>Tarjeta Personal</h1><p>Esta es mi tarjeta personal de hashdog.com</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-hashdog-card.jpg',
    },
    {
      tech: "<h1>Tarjeta Personal</h1><p>Juan Giugiolini - Gran Procurador y Asesor.</p> <ul><li>Diseño Gráfico</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-juan-g-card.jpg',
    },
    {
      tech: "<h1>Tarjeta Personal</h1><p>Matías Solorzano - Muy buen Masajista y excelente Consejero.</p> <ul><li>Diseño Gráfico</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-matias-card.jpg',
    },
    {
      tech: "<h1>Tarjeta Personal</h1><p>Pamela Ortiz - Una profesional sin limites con adiccion a la musica. Musicoterapeuta.</p> <ul><li>Diseño Gráfico</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-card-pamela.jpg',
    }
  ];
  // initalize popup
  $('button.cardPresentations').magnificPopup({
    key: 'my-popup',
    items: cardPresentations,
    type: 'inline',
    inline: {markup: markupIllustrations},
    gallery: {enabled: true }
  });


  // BANNERS

  var socialBanners = [
    {
      tech: "<h1>Imagen Publicitaria</h1><p>Promoción Publicitaria para los Startups de toda América.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-hashdogBanner-1.jpg',
    },
    {
      tech: "<h1>Imagen Publicitaria</h1><p>Promoción Publicitaria para Hashdog Company con humor.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/doggers-avengers.jpg',
    },
    {
      tech: "<h1>Imagen Publicitaria</h1><p>Promoción Publicitaria para los Startups de toda América.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/doggers-toys-story.jpg',
    }
  ];

  // initalize popup
  $('button.socialBanners').magnificPopup({
    key: 'my-popup',
    items: socialBanners,
    type: 'inline',
    inline: {markup: markupIllustrations},
    gallery: {enabled: true }
  });

  //
  // WEB AND GRAPHIC DESIGN
  //




  // Aduke
  var adukebongoImpr = [{
      tech: "<h1>AdukeBongó</h1><p>Una banda musical que propone una experiencia distinta dentro del arte sonoro.</p> <ul><li>Adobe Photoshop CS6</li><li>Affinity Designer</li></ul> <strong>Puedes escuchar su musica aqui: <a href='https://adukebongo.com.ar/'>https://adukebongo.com.ar/</a>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/adukebongo.jpg',
    }];
  // initalize popup
  $('button.adukebongoImpr').magnificPopup({
    key: 'my-popup',
    items: adukebongoImpr,
    type: 'inline',
    inline: {markup: markupWebsite},
    gallery: {enabled: true }
  });

  // Beerpay
  var beerpaySite = [
  {
    plugins: "<h1>Beerpay: Pay Beer, Pay Open Source</h1><strong>Servicio que ofrece la posibilidad de encontrar soporte en los projectos de GitHub.</strong><p>Tecnologias utilizadas para la realizacion del sitio:</p><ul><li>Bootstrap</li><li>IcoMoon (Fuente en iconos propias)</li><li>Font Awesome</li><li>Google Fonts</li><li>CSS3 Animations</li><li>HTML5</li><li>JQuery</li><li>Adobe Illustrator CS6</li></ul>",
    illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-beerpay.jpg',
    url_href: "https://beerpay.io/",
  },
  ];
  // initalize popup
  $('button.beerpaySite').magnificPopup({
    key: 'show-websites',
    items: beerpaySite,
    type: 'inline',
    inline: {markup: markupWebsite},
    gallery: {enabled: true }
  });

  // Perico
  var pericoSite = [
    {
      plugins: "<h1>PerIco: Pack de Iconos en Fuentes</h1><p>utilice la mejor tecnologia disponible en la web para crear un Pack de iconos de muy simple uso orientado a la Programacion. <br>Tecnologias utilizadas para la realizacion del sitio:</p><ul><li>Bootstrap</li><li>IcoMoon</li><li>Google Fonts</li><li>HTML5</li><li>CSS3</li><li>Adobe Illustrator</li><li>Adobe Photoshop</li><li>Affinity Designer</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/perico.jpg',
      url_href: "http://perico.hashdog.io/",
    },
  ];
  // initalize popup
  $('button.pericoSite').magnificPopup({
    key: 'show-websites',
    items: pericoSite,
    type: 'inline',
    inline: {markup: markupWebsite},
    gallery: {enabled: true }
  });

  // HASHDOG SITE
  var hashdogPages = [
    {
      plugins: "<h1>Hashdog: Sitio Oficial</h1><p>Tecnologias utilizadas para la realizacion del sitio:</p><ul><li>Bootstrap</li><li>IcoMoon</li><li>Google Fonts</li><li>CSS3 Animations</li><li>HTML5</li><li>JQuery</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-hashdog.jpg',
      url_href: "http://www.hashdog.com/",
    },
    {
      plugins: "<h1>Enterprise</h1><strong>Para todos las empresas, la compañia hashdog, ofrecen tecnologias como Ruby on Rails y JS dev.</strong><p>Tecnologias utilizadas</p><ul><li>JQuery</li><li>CSS3 Animations</li><li>Bootstrap</li><li>HTML5</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-hashdog-enterprise.jpg',
      url_href: "http://hashdog.com/business",
    },
    {
      plugins: "<h1>Startups</h1><strong>Para todos los startups, la compañia hashdog, ofrecen servicios agiles y confiables.</strong><p>Tecnologias utilizadas</p><ul><li>JQuery</li><li>CSS3 Animations</li><li>Bootstrap</li><li>HTML5</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-hashdog-startups.jpg',
      url_href: "http://hashdog.com/startups",
    },
    {
      plugins: "<h1>Happy New Year!</h1><p>Tecnologias utilizadas</p><ul><li>JPreloader</li><li>Skrollr.js</li><li>Animaciones CSS3</li><li>HTML5</li><li>Adobe Illustrator</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-hashdog-newyear.jpg',
      url_href: "http://hashdog.com/newyear",
    },
    {
      plugins: "<h1>Ninja Team: Dojo</h1><p>Tecnologias utilizadas</p><ul><li>HTML5</li><li>JPreloader.js</li><li>JQuery</li><li>Animaciones CSS3</li><li>Impress.js</li><li>Impress.js</li><li>Adobe Illustrator</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-hashdog-ninja.jpg',
      url_href: "http://hashdog.ninja",
    },
    {
      plugins: "<h1>Hashdog: Presentacion Online</h1><p>Tecnologias utilizadas</p><ul><li>Bootstrap</li><li>Animate.css</li><li>Font Awesome (técnicas de Iconos como Fuentes)</li><li>HTML5</li><li>Animaciones CSS3</li><li>JQuery</li><li>Impress.js</li><li>Adobe Illustrator</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-hashdog-brochure.jpg',
      url_href: "http://hashdog.com/brochure",
    },
    {
      plugins: "<h1>Hashdog.io: Fábrica de Software</h1><p>Tecnologias utilizadas para la realizacion del sitio:</p><ul><li>Bootstrap</li><li>IcoMoon</li><li>Google Fonts</li><li>HTML5</li><li>CSS3</li><li>Animaciones CSS3</li><li>JQuery</li><li>ResponsiveSlider.js</li><li>Adobe Illustrator</li><li>Adobe Photoshop</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-hashdogio.jpg',
      url_href: "http://www.hashdog.io/",
    },
  ];
  // initalize popup
  $('button.hashdogPages').magnificPopup({
    key: 'show-websites',
    items: hashdogPages,
    type: 'inline',
    inline: {markup: markupWebsite},
    gallery: {enabled: true }
  });

  // GIUDICE
  var giudice = [
    {
      plugins: "<h1>Dr. Giudice</h1><strong>Renombrado cirujano plastico</strong><p>Tecnologias utilizadas para la realizacion del sitio:</p><ul><li>JQuery</li><li>Wordpress</li><li>HTML5</li><li>CSS3</li><li>IcoMoon (iconos personalizados en fuentes)</li><li>Animaciones CSS3</li><li>Adobe Photoshop</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-giudice.jpg',
      url_href: "http://www.matiasgiudice.com.ar/",
    }
  ];
  // initalize popup
  $('button.giudice').magnificPopup({
    key: 'show-websites',
    items: giudice,
    type: 'inline',
    inline: {markup: markupWebsite},
    gallery: {enabled: true }
  });


  //
  // VIDEOS SECTION
  //

  // BEERPAY VIDEOS
  var beerpayVideos = [
    {
      technology: "<h1>Beerpay Extension</h1><p> Graphic Motion + Tutorial. Un video con graficos animados explicativos para saber como se usa la extension de beerpay.io</p><ul><li>Adobe After Effects CS6</li><li>QuickTime Recorder</li><li>Adobe Premiere Pro</li></ul>",
      src: 'http://www.youtube.com/watch?v=AV0O99zU-1M',
    },
    {
      technology: "<h1>Beerpay</h1><p>Graphic Motion. Un video con graficos animados informando porque debes usar Beerpay si tienes un proyecto open source.</p><ul><li>Adobe After Effects CS6</li><li>Adobe Illustrator CS6</li><li>Adobe Premiere Pro</li></ul>",
      src: 'http://www.youtube.com/watch?v=eD71SzsInVY',
    },
    {
      technology: "<h1>Beerpay</h1><p>El primer video explicativo de Beerpay, un producto para desarrolladores open source.</p><ul><li>Sparkol Software</li><li>Adobe Illustrator CS6</li><li>Adobe Premiere Pro</li></ul>",
      src: 'http://www.youtube.com/watch?v=V12mdAg4-sM',
    }
  ];
  // initalize popup
  $('button.beerpayVideos').magnificPopup({
    key: 'show-videos',
    items: beerpayVideos,
    type: 'iframe',
    iframe: {
      markup: markupVideos,
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'http://www.youtube.com/embed/%id%'
        }
      },
      srcAction: 'iframe_src',
    },
    gallery: {enabled: true }
  });

  // HASHDOG VIDEOS
  var hashdogVideos = [
    {
      technology: "<h1>Beerpay Extension</h1><p> Graphic Motion + Tutorial. Un video con graficos animados explicativos para saber como se usa la extension de beerpay.io</p><ul><li>Adobe After Effects CS6</li><li>QuickTime Recorder</li><li>Adobe Premiere Pro</li></ul>",
      src: 'http://www.youtube.com/watch?v=AV0O99zU-1M',
    },
    {
      technology: "<h1>Beerpay</h1><p>Graphic Motion. Un video con graficos animados informando porque debes usar Beerpay si tienes un proyecto open source.</p><ul><li>Adobe After Effects CS6</li><li>Adobe Illustrator CS6</li><li>Adobe Premiere Pro</li></ul>",
      src: 'http://www.youtube.com/watch?v=eD71SzsInVY',
    },
    {
      technology: "<h1>Hashdog Corto</h1><p>Se muestra como un Dogger, proveniente de hashdog, resuelve un conflicto que un desarrollador no pudo solucionar.</p><ul><li>Adobe After Effects CS6</li><li>Adobe Premiere Pro</li></ul>",
      src: 'https://www.youtube.com/watch?v=Zt_CnXwuZQw',
    },
    {
      technology: "<h1>Beerpay</h1><p>El primer video explicativo de Beerpay, un producto para desarrolladores open source.</p><ul><li>Sparkol Software</li><li>Adobe Illustrator CS6</li><li>Adobe Premiere Pro</li></ul>",
      src: 'http://www.youtube.com/watch?v=V12mdAg4-sM',
    },
    {
      technology: "<h1>Hashdog Intro</h1><p>Una pequeña muestra del poder de After Effecs.</p><ul><li>Adobe After Effects CS6</li><li>Adobe Premiere Pro</li></ul>",
      src: 'http://www.youtube.com/watch?v=4HZ7mbtOCLM',
    }
  ];
  // initalize popup
  $('button.hashdogVideos').magnificPopup({
    key: 'show-videos',
    items: hashdogVideos,
    type: 'iframe',
    iframe: {
      markup: markupVideos,
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'http://www.youtube.com/embed/%id%'
        }
      },
      srcAction: 'iframe_src',
    },
    gallery: {enabled: true }
  });
  // ticketmasterVideos VIDEOS
  var ticketmasterVideos = [
    {
      technology: "<h1>TicketMaster Explicativo</h1><p>Un video procedimental de cuales son los pasos a seguir luego de una compra de Tickets.</p><ul><li>Sparkol Software</li><li>Adobe Illustrator CS6</li></ul>",
      src: 'http://www.youtube.com/watch?v=1lguI9vcrts',
    }
  ];
  // initalize popup
  $('button.ticketmasterVideos').magnificPopup({
    key: 'show-videos',
    items: ticketmasterVideos,
    type: 'iframe',
    iframe: {
      markup: markupVideos,
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'http://www.youtube.com/embed/%id%'
        }
      },
      srcAction: 'iframe_src',
    },
    gallery: {enabled: true }
  });
  // FUNDATION VIDEOS
  var fundationVideos = [
    {
      technology: "<h1>YoPotencia Promocion 2013</h1><p>Un peuqeño video explicativo de lo que trata el proyecto YoPotencia de la Fundación Tuquito Libre.</p><ul><li>Adobe Photoshop CS5</li><li>Creación Original</li><li>Corel Video Studio</li></ul>",
      src: 'http://www.youtube.com/watch?v=8xvHdglWSQg',
    },
    {
      technology: "<h1>Abuelos 2.0 Promo 2013</h1><p>Un peuqeño video explicativo de lo que trata el proyecto de Abuelos 2.0 de la Fundación Tuquito Libre.</p><ul><li>Adobe Photoshop CS5</li><li>Creación Original</li><li>Corel Video Studio</li></ul>",
      src: 'http://www.youtube.com/watch?v=bzP03SWgkUY',
    },
    {
      technology: "<h1>Petis Promocion 2013</h1><p>Un peuqeño video explicativo de lo que trata el proyecto PETIS de la Fundación Tuquito Libre.</p><ul><li>Adobe Photoshop CS5</li><li>Creación Original</li><li>Corel Video Studio</li></ul>",
      src: 'http://www.youtube.com/watch?v=GIRgayysPk8',
    }
  ];
  // initalize popup
  $('button.fundationVideos').magnificPopup({
    key: 'show-videos',
    items: fundationVideos,
    type: 'iframe',
    iframe: {
      markup: markupVideos,
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'http://www.youtube.com/embed/%id%'
        }
      },
      srcAction: 'iframe_src',
    },
    gallery: {enabled: true }
  });
});