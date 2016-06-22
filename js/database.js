$(document).ready(function(){

  //
  //  ILLUSTRATIONS
  //
  var markupIllustrations = '<div class="popup container-fluid"><div class="mfp-close"></div>'+
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

  // Thoughts
  
  var thoughts = [
    {
      tech: "<h1>Querido Facebook</h1><p>Todos pasamos por esta etapa. Usar Facebook como diario Personal. <ul><li>Adobe Illustrator CS6</li></ul></p>",             
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-dear-facebook.jpg', 
    },
    {
      tech: "<h1>Siente la Paz</h1><p>Un lugar para pensar, meditar y respirar aire fresco de un atardecer particular en mi cabeza. <ul><li>Adobe Illustrator CS6</li></ul></p>",
        illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-feel-the-peace.jpg', 
    }
    ];

  $('button.thoughts').magnificPopup({ 
    key: 'my-popup', 
    items: thoughts,
    type: 'inline',
    inline: {markup: markupIllustrations},
    gallery: {enabled: true }
  });

  // INTERVIEWS
  
  var interviews = [
    {
      tech: "<h1>Entrevistas</h1><p>Se solicitaron un grupo de programadores Rails para hashdog.com:</p> <ul><li>Adobe Illustrator CS6</li></ul>",             
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-hashdog-interview.jpg', 
    }
  ];
  // initalize popup
  $('button.interviews').magnificPopup({ 
    key: 'my-popup', 
    items: interviews,
    type: 'inline',
    inline: {markup: markupIllustrations},
    gallery: {enabled: true }
  });

  // PRICE LIST
  
  var priceList = [{
      tech: "<h1>Vivi Estilista</h1><p>Un listado de precios para una excelente estilista, Viviana.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-prices-vivi.jpg', 
    }];
  // initalize popup
  $('button.priceList').magnificPopup({ 
    key: 'my-popup', 
    items: priceList,
    type: 'inline',
    inline: {markup: markupIllustrations},
    gallery: {enabled: true }
  });

  // CARD PRESENTATION
  
  var cardPresentations = [
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
  // WALLPAPER
  
  var wallpapers = [
    {
      tech: "<h1>Fondo de pantalla</h1><p>Se descargo una imagen libre de licencias y se modifico a gusto.</p> <ul><li>Retoques</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-wallpaper-1.jpg', 
    },
    {
      tech: "<h1>Fondo de pantalla</h1><p>Se trabajó con distintos Pinceles creando un fondo al estilo Grunge.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-wallpaper-2.jpg',
    },
    {
      tech: "<h1>Fondo de pantalla</h1><p>Limpio y simple.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-wallpaper-3.jpg',
    },
    {
      tech: "<h1>Fondo de pantalla</h1><p>Sencillo y con mucho color para denotar la marca de la Empresa.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-wallpaper-4.jpg',
    },
    {
      tech: "<h1>Fondo de pantalla</h1><p>Sencillo y contrastado con un color oscuro para resaltar la marca de la Empresa.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-wallpaper-5.jpg',
    },
    {
      tech: "<h1>Fondo de pantalla</h1><p>Simple fondo en los cielos.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-wallpaper-6.jpg',
    }
  ];

  // initalize popup
  $('button.wallpapers').magnificPopup({ 
    key: 'my-popup', 
    items: wallpapers,
    type: 'inline',
    inline: {markup: markupIllustrations},
    gallery: {enabled: true }
  });

  //
  // VINYLS
  //
  
  var vinyls = [
    {
      tech: "<h1>Vinilos con estilo</h1><p>Hashdog impone una fresca imagen de su oficina con vinilos poco común!.</p> <ul><li>Diseño Gráfico</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://hashdog.com/gallery/8.jpg', 
    },
    {
      tech: "<h1>Vinilos con estilo</h1><p>Un gran calendario que ayuda a la organizacion e imagen interna en la sala de conferencias.</p> <ul><li>Diseño Gráfico</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://hashdog.com/gallery/11.jpg',
    },
    {
      tech: "<h1>Vinilos con estilo</h1><p>Grandes frases para motivar el espiritu.</p> <ul><li>Diseño Gráfico</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://hashdog.com/gallery/10.jpg',
    },
    {
      tech: "<h1>Vinilos con estilo</h1><p>Circulos con graciosas y descriptivas imagenes.</p> <ul><li>Diseño Gráfico</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://hashdog.com/gallery/2.jpg',
    },
    {
      tech: "<h1>Vinilos con estilo</h1><p>Circulos con graciosas y descriptivas imagenes.</p> <ul><li>Diseño Gráfico</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://hashdog.com/gallery/4.jpg',
    }
  ];

  // initalize popup
  $('button.vinyls').magnificPopup({ 
    key: 'my-popup', 
    items: vinyls,
    type: 'inline',
    inline: {markup: markupIllustrations},
    gallery: {enabled: true }
  });


  // BANNERS
  
  var hashdogBanners = [
    {
      tech: "<h1>Imagen Publicitaria</h1><p>Promoción Publicitaria para los Startups de toda América.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/big-hashdogBanner-1.jpg', 
    },
    {
      tech: "<h1>Imagen Publicitaria</h1><p>Promoción Publicitaria para los Startups de toda América.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/big-hashdogBanner-2.jpg',
    },
    {
      tech: "<h1>Imagen Publicitaria</h1><p>Promoción Publicitaria para clientes que requieran calidad al estilo Ninja.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/big-hashdogBanner-3.jpg',
    },
    {
      tech: "<h1>Imagen Publicitaria</h1><p>Promoción Publicitaria para clientes que requieran desarrolladores RubyOnRails al estilo Ninja.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/big-hashdogBanner-4.jpg',
    },
    {
      tech: "<h1>Imagen Publicitaria</h1><p>Promoción Publicitaria para clientes que requieran desarrolladores RubyOnRails al estilo Ninja.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/big-hashdogBanner-5.jpg',
    },
    {
      tech: "<h1>Imagen Publicitaria</h1><p>Promoción Doggers, son personajes que solo programan en RubyOnRails y se alimentan de Sándwiches.</p> <ul><li>Diseño Gráfico</li><li>Adobe Photoshop CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/big-hashdogBanner-6.jpg',
    }
  ];

  // initalize popup
  $('button.hashdogBanners').magnificPopup({ 
    key: 'my-popup', 
    items: hashdogBanners,
    type: 'inline',
    inline: {markup: markupIllustrations},
    gallery: {enabled: true }
  });

  // OLEO FRAMES
  
  var oleoPainting = [
    {
      tech: "<h1>Pintura Oleo</h1><p>Gustavo Cordera, ex integrante de Bersuit Vergarabat, una banda musical que marcó mucho al pueblo Argentino.</p> <ul><li>Pintura de Oleo (aceite)</li><li>Técnica de calcar (grillado)</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-cordera-1.jpg',
    },
    {
      tech: "<h1>Pintura Oleo</h1><p>Gustavo Cordera, ex integrante de Bersuit Vergarabat, una banda musical que marcó mucho al pueblo Argentino.</p> <ul><li>Pintura de Oleo (aceite)</li><li>Técnica de calcar (grillado)</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-cordera-2.jpg',
    },
    {
      tech: "<h1>Pintura Oleo</h1><p>Gustavo Cordera, ex integrante de Bersuit Vergarabat, una banda musical que marcó mucho al pueblo Argentino.</p> <ul><li>Pintura de Oleo (aceite)</li><li>Técnica de calcar (grillado)</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-cordera-3.jpg',
    },
    {
      tech: "<h1>Pintura Oleo</h1><p>A veces hacemos cosas que no tienen explicación. Ésta es una de esas veces.</p> <ul><li>Pintura de Oleo (aceite)</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-colours-1.jpg',
    },
    {
      tech: "<h1>Pintura Oleo</h1><p>A veces hacemos cosas que no tienen explicación. Ésta es una de esas veces.</p> <ul><li>Pintura de Oleo (aceite)</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-colours-2.jpg',
    },
    {
      tech: "<h1>Pintura Oleo</h1><p>A veces hacemos cosas que no tienen explicación. Ésta es una de esas veces.</p> <ul><li>Pintura de Oleo (aceite)</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-colours-3.jpg',
    },
    {
      tech: "<h1>Pintura Oleo</h1><p>Un pequeño capricho de niño se hizo realidad.</p> <ul><li>Pintura de Oleo (aceite)</li><li>Técnica de calcar (grillado)</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-goku-1.jpg',
    },
    {
      tech: "<h1>Pintura Oleo</h1><p>Un pequeño capricho de niño se hizo realidad.</p> <ul><li>Pintura de Oleo (aceite)</li><li>Técnica de calcar (grillado)</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-goku-2.jpg',
    },
    {
      tech: "<h1>Pintura Oleo</h1><p>Un pequeño capricho de niño se hizo realidad.</p> <ul><li>Pintura de Oleo (aceite)</li><li>Técnica de calcar (grillado)</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-goku-3.jpg',
    }
  ];

  // initalize popup
  $('button.oleoPainting').magnificPopup({ 
    key: 'my-popup', 
    items: oleoPainting,
    type: 'inline',
    inline: {markup: markupIllustrations},
    gallery: {enabled: true }
  });

  //
  // WEB AND GRAPHIC DESIGN
  //

  var markupWebsite = '<div class="popup container-fluid"><div class="mfp-close"></div>'+
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

  // HASHDOG SITE
  var hashdogPages = [  
    {
      plugins: "<h1>Beerpay: Pay Beer, Pay Open Source</h1><strong>Servicio que ofrece la posibilidad de encontrar soporte en los projectos de GitHub.</strong><p>Tecnologias utilizadas para la realizacion del sitio:</p><ul><li>Bootstrap</li><li>IcoMoon (Fuente en iconos propias)</li><li>Font Awesome</li><li>Google Fonts</li><li>CSS3 Animations</li><li>HTML5</li><li>JQuery</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-beerpay.jpg', 
      url_href: "https://beerpay.io/",
    },
    {
      plugins: "<h1>Hashdog: Sitio Oficial</h1><p>Tecnologias utilizadas para la realizacion del sitio:</p><ul><li>Bootstrap</li><li>IcoMoon</li><li>Google Fonts</li><li>CSS3 Animations</li><li>HTML5</li><li>JQuery</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-hashdog.jpg', 
      url_href: "http://www.hashdog.com/",
    },
    {
      plugins: "<h1>DoggerJS</h1><strong>Un servicio open source basado en javascript muy potente..</strong><p>Tecnologias utilizadas</p><ul><li>Bootstrap</li><li>JQuery</li><li>HTML5</li><li>Adobe Illustrator CS6</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-doggerjs.jpg',
      url_href: "https://doggerjs.com/",
    },
    {
      plugins: "<h1>Scrapfy</h1><strong>Un servicio open source para multiple ediciones de codigo en tiempo real. Solo se realizo el diseño y maquetación.</strong><p>Tecnologias utilizadas</p><ul><li>JQuery</li><li>Bootstrap</li><li>HTML5</li><li>Adobe Illustrator CS6</li><li>After Effects CS6 (GIFs)</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-scrapfy.jpg',
      url_href: "http://scrapfy.io/",
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

  // FUNDATION
  var fundationTuquito = [
    {
      plugins: "<h1>Fundación Tuquito</h1><p>Tecnologias utilizadas para la realizacion del sitio:</p><ul><li>FancyBox.js</li><li>CodaSlider.js</li><li>HTML5</li><li>CSS3</li><li>JQuery</li><li>Adobe Photoshop</li></ul>",
      illustration_img: 'http://www.francoalvarez.com.ar/img/works/big-fundacion.jpg', 
      url_href: "http://fundacion.tuquito.org.ar/",      
    }
  ];
  // initalize popup
  $('button.fundationTuquito').magnificPopup({ 
    key: 'show-websites', 
    items: fundationTuquito,
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
  var markupVideos = '<div class="popup container-fluid"><div class="mfp-close"></div>'+
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
  // HASHDOG VIDEOS
  var hashdogVideos = [
    {
      technology: "<h1>Beerpay</h1><p>Graphic Motion. Un video con graficos animados informando porque debes usar Beerpay si tienes un proyecto open source.</p><ul><li>Adobe After Effects CS6</li><li>Adobe Illustrator CS6</li><li>Adobe Premiere Pro</li></ul>",
      src: 'http://www.youtube.com/watch?v=eD71SzsInVY', 
    },
    {
      technology: "<h1>Beerpay</h1><p>El primer video explicativo de Beerpay, un producto para desarrolladores open source.</p><ul><li>Sparkol Software</li><li>Adobe Illustrator CS6</li><li>Adobe Premiere Pro</li></ul>",
      src: 'http://www.youtube.com/watch?v=V12mdAg4-sM', 
    },
    {
      technology: "<h1>Hashdog Corto</h1><p>Se muestra como un Dogger, proveniente de hashdog, resuelve un conflicto que un desarrollador no pudo solucionar.</p><ul><li>Adobe After Effects CS6</li><li>Adobe Premiere Pro</li></ul>",
      src: 'https://www.youtube.com/watch?v=Zt_CnXwuZQw', 
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