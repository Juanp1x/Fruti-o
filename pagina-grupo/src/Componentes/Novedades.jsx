import { useState } from "react";
import "./Novedades.css";
import Logo from "../assets/Logo3.png";

const stories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    title: "Starbucks amplía su programa de Greener Stores global; anuncia primeras once Greener Store certificadas en Colombia",
    summary: "Starbucks certifica 3,500 Greener Stores en 20 mercados, avanzando hacia sus metas positivas de recursos.",
    body: [
      "Starbucks anunció la certificación de sus primeras 11 tiendas más ecológicas, a medida que la compañía acelera la expansión internacional de su marco de código abierto de tiendas más ecológicas destinadas a reducir las emisiones globales de carbono, el uso de agua y los desechos enviados a los vertederos en un 50 %. para el 2030.",
      "Las primeras Greener Stores de Colombia operadas por Alsea, ubicadas en diferentes ciudades ayudarán a reducir el impacto ambiental de Starbucks al brindarles a los clientes una gama de opciones adaptadas a sus preferencias, al tiempo que garantiza prácticas y materiales sostenibles.",
      "Estas 11 certificaciones se adhieren al marco de Starbucks Greener Store Framework a través de un uso más eficiente de los recursos, incluido un nuevo material de techo de color claro que refleja la luz del sol, la instalación de interceptores de grasa y el uso de electricidad sin gas natural. Cuentan con una combinación de tamaño adecuado de calentadores de agua, filtros y accesorios y procesos de plomería de bajo flujo. Las tiendas también se construyeron con materiales responsables y contenido reciclado que emiten menos toxinas con un bajo valor de carbono incorporado.",
      "Para los clientes que se mueven por la ciudad en bicicleta, Cali Greener Store cuenta con un depósito de bicicletas y varios sitios independientes. La tienda también está diseñada para reducir el uso de agua en un 30 % y reflejar entre el 70 % y el 80 % de la luz solar.",
      "“Nos enorgullece que nuestro drive-thru recientemente inaugurado y 10 cafés adicionales sean certificados como Greener Stores, lo que refleja el compromiso que tenemos y la pasión que sentimos en Colombia por ser más sostenibles”, dijo Juan Pablo Castaño, Country Manger de Alsea Colombia.“Estamos trabajando todos los días para que nuestras marcas se dirijan a ser más verdes cada día y de la mano de Starbucks vemos todos los días materializado este objetivo. Todos los pequeños cambios tienen un gran impacto y esperamos con ansias el futuro para seguir construyendo en torno a este programa” Agregó Cielo Morera, directora de Starbucks Colombia.",
      "El esquema para las Greener Stores de Starbucks fue desarrollado en conjunto con el Fondo Mundial para la Naturaleza (WWF, por sus siglas en inglés) para acelerar la transformación de la industria del retail hacia tiendas de menor impacto que demuestren reducciones en las emisiones de carbono, el consumo de agua y los residuos de vertedero. Starbucks se ha comprometido a construir y modernizar 10,000 Greener Stores en todo el mundo de aquí a 2025, un paso muy importante en su objetivo de acelerar su movimiento global hacia un futuro más sostenible.",
      "Desde que anunció la expansión internacional de Greener Stores en septiembre de 2021, Starbucks ha implementado un marco global de estándares de diseño, construcción y operaciones para certificar las nuevas Greener Stores en todo el mundo. A partir de marzo de 2023, Greener Stores ha sido certificada en más de 20 mercados a nivel mundial; en América Latina y el Caribe, esto incluye: Argentina, México, Bahamas, Barbados, Chile, República Dominicana, El Salvador, Guatemala, Jamaica, Perú, Puerto Rico, Uruguay, además de Colombia.",
      "“Con una compañía del tamaño de Starbucks, cualquier acción, por pequeña que sea, tiene el potencial de tener un impacto masivo“, dijo Michael Kobori, director de sustentabilidad de Starbucks. “Estoy muy orgulloso de ver que nuestro esquema de trabajo de Greener Store continúa escalando para el bien global. El programa que hemos creado seguirá acercándonos a nuestros objetivos de ser positivos en recursos.“",
      "---La Tienda Greener de Cali, Javeriana está ubicada en la Cl. 18 #Calle 18 118-150, y opera de 8:00 am a 10:00 pm.--- ",
      "Starbucks Colombia se compromete a tomar decisiones deliberadas que ayuden a la empresa a alcanzar su objetivo de devolver al planeta más de lo que toma de él. Durante el Mes de la Tierra, se alentará a los clientes a cambiar, de vasos desechables a reutilizables con la edición limitada de vasos reutilizables del Día de la Tierra de Starbucks. Por la compra de un reutilizable, el cliente obtendrá un 70% de descuento en cualquier Frappuccino®, Refresher y Iced Shaken Espresso® en cualquier tamaño. Asimismo, durante todo el año, las tiendas Starbucks en Colombia también ofrecen For-Here-Ware para los clientes que deseen disfrutar de sus bebidas en la tienda, así como la donación del 100% de abono proveniente de los granos de café gastados a través del programa “Grounds For Your Garden”. "
    ]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    title: "Starbucks abre su quinta tienda en Cartagena en la Histórica Calle Badillo",
    summary: "La quinta tienda en Cartagena mantiene el estilo colonial y fortalece la presencia local.",
    body: [
      "La tercera tienda dentro de la Ciudad Amurallada de Cartagena se destaca por sus características arquitectónicas y obras de arte local. ",
      "La tercera tienda dentro de la Ciudad Amurallada estará ubicada en la histórica Calle Badillo y se destaca por sus detalles arquitectónicos la nueva tienda Starbucks en la ciudad amurallada ",
      " ",
      "Como parte de su plan de expansión, Alsea –operador comercial autorizado de Starbucks en Colombia– anunció hoy que ha llegado a 59 tiendas Starbucks en el mercado con la apertura de su tienda Starbucks Casa Badillo. Ubicada en la Calle Primera de Badillo K7, esta tienda marca la quinta tienda en Cartagena y la tercera en la Ciudad Amurallada. ",
      "“Estamos orgullosos de seguir aumentando la presencia de Starbucks en el mercado, llevando la Experiencia Starbucks a más clientes en Cartagena”, dijo Juan Pablo Castaño, Country Manager de Alsea Colombia. “Desde nuestra llegada al departamento de Bolívar, continuamos nuestro compromiso de sumar significativamente a la comunidad local, creando oportunidades de trabajo y progreso económico. Esta apertura representa un hito importante para nosotros y vemos un futuro vibrante para Starbucks en la hermosa ciudad de Cartagena”.",
      " ",
      "--Acerca de Starbucks Casa Badillo--",
      " ",
      "La nueva tienda Starbucks de 292m² en Cartagena tiene una capacidad para más de 80 personas. Ubicada cerca de universidades y bibliotecas, la tienda se inspiró en la arquitectura colonial local y el ambiente ecléctico de esta parte del casco histórico. Fue diseñada para preservar e incorporar los elementos arquitectónicos existentes del edificio, como techos de madera en bruto y columnas de hormigón.",
      "Para modernizar la apariencia existente de la estructura, los diseñadores de la tienda agregaron muebles contemporáneos, iluminación intencional y revestimiento de roble blanco. El uso de texturas y tonos más cálidos, como la pintura natural “al temple” en paredes y techos, agrega profundidad al diseño. Detalles como la barra frontal personalizada inspirada en muebles coloniales españoles elevan el diseño y muestran la artesanía de los artesanos locales de la madera.",
      "Finalmente, los murales originales pintados a mano por el artista colombiano Alejandro Paucar crean un momento especial en la tienda al contar la historia del café, evocando el cuidado y la pasión de los caficultores locales. ",
      " ",
      "-- Starbucks en Colombia y Departamento de Bolívar --",
      " ",
      "Desde que Starbucks llegó a Colombia en 2014, la marca ha reforzado su compromiso con el mercado y la comunidad. Hoy, Starbucks Colombia emplea a más de 600 partners (empleados), de los cuales más de 40 son talento local de Cartagena y atienden nuestras tiendas en la Avenida San Martín, el centro comercial Mall Plaza y en la ciudad amurallada en Plaza Bolívar, el centro comercial Serrezuela y en la nueva tienda Casa Badillo.",
      "“Nos complace presentar una nueva ubicación para satisfacer las necesidades de conveniencia, conexión y personalización de nuestros clientes”, agregó Cielo Morera, directora de Starbucks Colombia. “La tienda Casa Badillo crea un lugar cálido y acogedor para que los clientes disfruten de su bebida favorita y se conecten con otras personas con una taza de café”. "
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
    title: "Starbucks: 50 años compartiendo la pasión por el café colombiano",
    summary: "Medio siglo de alianza entre Starbucks y el café de Colombia.",
    body: [
      "El café colombiano y Starbucks están unidos por una historia que comenzó a principios de los años setenta, cuando la compañía comenzó a adquirir café de este país. Hoy, cincuenta años después de la inauguración de su primera tienda en Pike Place en Seattle, el café colombiano continúa deleitando a millones de clientes de la compañía en más de 80 países.",
      "En Colombia, 12 regiones del país comparten su café de alta calidad con la compañía y han hecho posible grandes mezclas como el Starbucks® Colombia Espresso Roast o ediciones limitadas con granos de origen único como el café Starbucks® Colombia Santander, hecho con granos cultivados por caficultoras de la Cordillera Oriental.",
      "“En cualquier rincón del mundo siempre hay algún colombiano esperando por una taza de café que le recuerde sus orígenes”, dice Cielo Morera, gerente de operaciones de Starbucks Colombia, quien ha sido parte de las personas detrás de la marca desde su llegada al país, en 2014.",
      "Reconocido por su calidad, tradición y la calidez de sus notas, así como por su consistencia en términos de sabor y calidad, el café de Colombia ha sid, y continúa siendo la columna vertebral de muchas mezclas para la marca.",
      " ",
      "--Un café con personalidad propia--",
      "Abrir una tienda en Colombia fue un hito importante para Starbucks. La compañía inauguró su primera tienda en el mercado colombiano en la ciudad de Bogotá el 16 de julio de 2014, exactamente en el Parque de la 93. A partir de este momento, se ha escrito un nuevo capítulo en la relación de Starbucks con Colombia y su café.",
      "Desde el principio, en las tiendas se ha servido café espresso 100% colombiano. Así, Starbucks Colombia se convirtió en el primer mercado en todo el mundo en servir café de origen local.",
      "Starbucks® Colombia Espresso Roast fue creado especialmente para el mercado colombiano como una muestra de la profunda admiración y respeto por los caficultores del país. A la fecha, es el corazón de las bebidas preparadas a base de espresso en todas las tiendas de Starbucks en territorio colombiano.",
      "Esta mezcla única cuenta con granos de café 100% producidos, mezclados y tostados en Colombia, provenientes de las regiones de Huila y Nariño. Su tostado oscuro da lugar a un café caramelizado, aromático y con sabor a nuez que inunda los rincones de las tiendas de Starbucks en el país, convirtiéndolas en el espacio idóneo para generar conexiones con los demás, tener una reunión de trabajo o simplemente para disfrutar de un momento único en un ambiente acogedor y cálido.",
      "Este café de cuerpo completo tiene un sabor intenso que se destaca con las bebidas preparadas con leche, lo que lo hace el complemento perfecto para preparar bebidas como el Flat White, Latte Machiatto, Cappuccino y más.",
      " ",
      "--Bienestar que se cultiva--",
      "La relación de Starbucks con los caficultores locales, sus familias y la comunidad se ha fortalecido gracias a la apertura del Centro de Apoyo al Caficultor de Starbucks en Manizales en 2012, el cual brinda apoyo de forma gratuita a productores internos y externos a Starbucks. Desde entonces, este Centro también ha proporcionado tutoría y programas de formación para jóvenes cultivadores y también para aquellos que se encuentran en zonas permeadas por la violencia.",
      "Starbucks ofrece asistencia técnica para ayudar a mejorar las prácticas de cultivo y la productividad de las cosechas. Además, busca que los agricultores colombianos encuentren en el café oportunidades para sus familias.",
      "A lo largo de estos 50 años, Starbucks se ha convertido en una de las empresas en el mundo que más adquiere café arábica proveniente de Colombia. ",
      "“Es un orgullo el poder compartir con cada uno de nuestros clientes una taza de café colombiano, preparada con pasión y compromiso, quees sembrado, cultivado, tostado y servido en casa. Con cada sorbo, honramos la labor infinita de miles de caficultores que se esmeran para que todos disfrutemos del mejor café, celebrando así nuestra tradición colombiana”, finalizó Cielo."
    ]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&q=80",
    title: "Starbucks supera las 50 tiendas en Colombia y abre su primer drive-thru del país",
    summary: "Nuevo drive-thru en Cali marca el hito de 50 tiendas en Colombia.",
    body: [
      "Ubicado en la avenida Cañas Gordas en el sur de Cali, el nuevo drive-thru reafirma el compromiso de Starbucks Colombia con el crecimiento en el mercado.",
      "Colombia, 14 de diciembre de 2022. Como parte de su plan de expansión, Alsea, el operador de Starbucks en Colombia, celebra hoy la apertura de más de 50 tiendas Starbucks en Colombia y su primera tienda drive-thru en el mercado, que se encuentra en la ciudad de Cali.",
      "Con la introducción de este nuevo formato de tienda, Starbucks está evolucionando la experiencia de los clientes para satisfacer sus necesidades de cercanía, conexión y personalización en Colombia, al mismo tiempo que crea experiencias nuevas y significativas. La marca de café más grande del mundo se ha convertido en una de las favoritas de los colombianos y un lugar para que los clientes disfruten de un café 100% colombiano de alta calidad, así como de una variedad de bebidas y alimentos.",
      "“Esta apertura de drive-thru en Cali, nuestra primera en el mercado, nos llena de orgullo“, afirmó Juan Pablo Castaño, director general de Alsea en Colombia. “Iniciamos nuestra operación en Colombia hace ocho años. Ahora con más de 50 tiendas, acompañadas de importantes inversiones en tecnología e infraestructura, continuamos manteniendo una marca enfocada en el servicio y superando las expectativas y experiencias de nuestros clientes.”",
      "Esta nueva tienda está ubicada en la Avenida Cañas Gordas #118-150 en el barrio Pance en Cali, a partir del 15 de diciembre recibirá a sus clientes en un horario de domingo a jueves de 7am a 11pm; viernes y sábado de 7am a 12pm.",
      "“Este nuevo espacio no solo confirma nuestro compromiso con el mercado colombiano, sino también nuestra vocación de generar más empleos aquí en la capital del Valle, con la incorporación de 18 nuevos partners (empleados) de Starbucks Colombia a nuestro equipo”, señaló Castaño.",
      "Desde que la marca llegó a Colombia en 2014, la empresa ha reforzado su apuesta por el mercado y la generación de empleo. Starbucks Colombia ahora tiene más de 600 partners (empleados) que lucen con orgullo el delantal verde, de los cuales 84 tienen su sede en Cali. Starbucks actualmente tiene presencia en Cali, Bogotá, Medellín, Barranquilla y Cartagena."
    ]
  },
    {
      id: 5,
      image: "https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c06_cards_grid_314x176/public/2025-01/Starbucks%20juntos%20por%20el%20caf%C3%A9.jpg.webp?h=55be468c&itok=PKRHqRIG",
      title: "Starbucks Colombia lanza el programa “Juntos por el Café“ para apoyar a los caficultores locales",
      summary: "Programa solidario para respaldar a los caficultores de Colombia.",
      body: [
        "Colombia, 26 de junio de 2023 – En reconocimiento al Día Nacional del Café el 27 de junio, Starbucks Colombia, operado por el socio minorista autorizado Alsea, anunció hoy el lanzamiento de su programa “Juntos por el Café”, reforzando Starbucks el compromiso de asegurar un futuro sostenible del café colombiano para todos. El programa, que ve una parte de las ganancias de las ventas de las bolsas de café en grano serán donadas para apoyar a los caficultores locales, esto se convierte en un hito importante en la dedicación de la marca para abordar los desafíos climáticos continuos que enfrentan los caficultores en su trabajo.",
        "Starbucks Colombia en el 2022 realizó un programa piloto implementado por Starbucks Colombia y el Centro de Apoyo al Caficultor de Starbucks en Manizales en la que realizaron la donación de 1.500 árboles nativos a los caficultores de Nariño, los árboles proporcionaron la sombra necesaria para las plantas de café, reduciendo la temperatura de los cultivos y asegurando una mayor calidad de los granos y una mayor rentabilidad para los caficultores locales. Este año, Starbucks Colombia se ha fijado la meta de donar 2.000 árboles nativos adicionales a más de 13 regiones de Colombia a las cuales compra café, a través del apoyo de clientes y socios (empleados).",
        "“Juntos por el Café“ ejemplifica nuestro compromiso continuo con los caficultores de Colombia y refuerza nuestra determinación para enfrentar los desafíos climáticos“, dijo Juan Pablo Castaño, director general de Alsea Colombia. “Estamos emocionados de lanzar este programa en el Día Nacional del Café, una ocasión trascendental para celebrar la rica tradición cafetera de Colombia“.",
        "Como participar",
        "Del 27 de junio al 27 de agosto, los clientes pueden apoyar las prácticas sostenibles de cultivo de café visitando su tienda local Starbucks Colombia donde:",
        "• Por cada bolsa de café colombiano en grano comprado en tiendas selectas del mercado o través de las plataformas de entrega de Didi Food y Rappi, Starbucks Colombia donará $1.000 COP para la compra de árboles nativos para mitigar el impacto climático en las plantas de café desde el 27 de junio al 27 de agosto de 2023.",
        "Además de las donaciones de árboles, Starbucks Colombia está colaborando con el Centro de Apoyo al caficultor de Starbucks ubicado en Manizales con el objetivo de continuar apoyando a los caficultores colombianos durante todo el año. El Centro de Apoyo al caficultor se enfoca en desarrollar estrategias para mejorar la estructura productiva de las parcelas de café, mantener la productividad a largo plazo y mejorar la calidad del café utilizando herramientas adicionales. En el Día Internacional de la Mujer, Starbucks Colombia y el Centro de Apoyo al Caficultor se unieron para donar las ganancias generadas por la venta del vaso alusivo de la fecha a la Asociación de Mujeres Cafeteras del Occidente del Huila para seguir apoyando el rol de la mujer cafetera.",
        "“Nuestro compromiso se basa en asegurar un futuro sostenible para las comunidades cafetaleras, fomentando una mejor adaptación a la variabilidad climática entre los caficultores“, agregó Cielo Morera, directora de Starbucks Colombia. “Juntos, estamos dedicados a mejorar la productividad y la calidad del café a través de estrategias sostenibles, asegurando un futuro próspero para la industria cafetera local“."
      ]
    },
    {
      id: 6,
      image: "https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c06_cards_grid_314x176/public/2025-01/Mall-Plaza-2%20%281%29_1.jpeg.webp?h=e5aec6c8&itok=fBkEHfVP",
      title: "Starbucks abre dos nuevas tiendas en Barranquilla",
      summary: "Barranquilla recibe dos nuevas tiendas como parte del crecimiento nacional.",
      body: [
        "Barranquilla – Continuando con su plan de expansión en Colombia, Alsea – licenciataria minorista de Starbucks Coffee Company en el mercado y el operador de restaurantes líder en América Latina y Europa – anunció hoy la llegada de dos nuevas tiendas Starbucks a Barranquilla, convirtiéndose en la cuarta ciudad del país donde la empresa tendrá presencia. Las dos nuevas tiendas de Barranquilla se suman a los 33 cafés de Starbucks en Colombia. La primera tienda, que abrió sus puertas el 18 de noviembre, estará ubicada en Mallplaza y la segunda tienda que abrirá, el 25 de noviembre estará ubicada en la zona de Alto Prado.",
        "Estos nuevos cafés en Barranquilla resaltan el compromiso de Starbucks de ser el \"Tercer Lugar\" para sus clientes: el hogar es el primero, el trabajo el segundo y las tiendas Starbucks el \"Tercero\", donde los clientes pueden pasar un buen rato, estar con las personas que les importan o simplemente disfrutan de café 100% colombiano de alta calidad y una amplia gama de bebidas artesanales, productos de temporada y aperitivos selectos.",
        "Las tiendas de la marca son espacios donde los clientes pueden experimentar un fuerte sentimiento de pertenencia, identidad y comodidad. Se han convertido en un lugar donde las conexiones humanas están presentes en la vida diaria, un lugar rodeado de genuina calidez humana.",
        "“En medio de un año difícil con la pandemia de COVID-19, hemos decidido acelerar nuestro plan de expansión para contribuir a la reactivación económica de Colombia y la Costa Caribe. Estamos orgullosos de traer Starbucks a Barranquilla, una ciudad clave en nuestra búsqueda de compartir la Experiencia Starbucks con los colombianos“, dijo Francisco Tosso, Director de Alsea Colombia.",
        "Desde que Starbucks llegó a Colombia en 2014 con la apertura de su primera tienda en Bogotá, la marca ha reforzado su compromiso con el mercado y el café colombiano. Starbucks, en asociación con Alsea, ahora alberga 35 tiendas en cuatro ciudades colombianas, incluidas Bogotá, Medellín, Cali y Barranquilla.",
        "“Con nuestra continua expansión en Colombia, nos tomamos muy en serio nuestra responsabilidad de ser buenos vecinos. Queremos ser bienvenidos en todos los lugares donde hacemos negocios y contribuir positivamente a nuestras comunidades locales, logrando la misión de Starbucks de inspirar y nutrir el espíritu humano: una persona, una taza y un vecindario a la vez“, agregó Tosso.",
        "Tosso destaca que las tiendas de Barranquilla honran el compromiso de Starbucks y Alsea con el desarrollo económico de Colombia, el apoyo a la industria cafetera colombiana y la dedicación a la creación de empleo.",
        "“La familia Mallplaza se enorgullece de dar la bienvenida a Starbucks en nuestro complejo de Buenavista. La llegada de Starbucks está alineada con nuestro objetivo de ampliar permanentemente nuestro portafolio de marcas premier tanto para residentes como turistas de la capital atlántica de Barranquilla“, dijo Juan Manuel Rengifo, Director de Mallplaza Buenavista."
      ]
    },
    {
      id: 7,
      image: "https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c06_cards_grid_314x176/public/2025-01/HS_Nov2020_Colombia-Santander-HERO-Bis-e1607969868455_2.jpeg.webp?h=59674227&itok=gc4Tn4We",
      title: "De las mujeres santandereanas para el mundo",
      summary: "Café Starbucks® Colombia Santander, cultivado 100% por mujeres de la región.",
      body: [
        "En Colombia, los sabores y aromas de una taza de café conectan a quien lo toma con sus orígenes, con su hogar, con el rico terreno en donde se cultivó el grano y, especialmente, con una de las más reconocidas tradiciones de las familias campesinas: madrugar y beber unos sorbos como parte del ritual para iniciar la jornada. Esta costumbre ha viajado en el tiempo hasta llegar a las ciudades y, ahora, empezar la mañana con una taza de café augura un buen día en cualquier lugar del país.",
        "Para fortalecer la larga y cercana relación que Starbucks tiene con el país, la compañía se adentró en el corazón de las montañas andinas, en las laderas de la Cordillera Oriental, donde el terreno es accidentado y los ríos que serpentean en profundos valles son parte del fértil paisaje. En esta región, muchas de las fincas cultivan café bajo una extensa sombra a altitudes que van de 1.100 a 1.600 metros sobre el nivel del mar. Aquí es donde se cultivan los granos que dan vida a Starbucks® Colombia Santander, un café de sabor robusto, con dulces notas a manzana, cuerpo completo y tostado medio.",
        "Desde hace casi 50 años, cuando Starbucks abrió su primera tienda en Seattle, los granos de café colombiano han formado parte del recorrido de la compañía por el mundo. A medida que la marca ha ido creciendo, el compromiso con Colombia se ha estrechado, compartiendo café colombiano con millones de clientes alrededor del mundo.",
        "Sin embargo, este café es distinto a otros por una razón muy particular: el café Starbucks® Colombia Santander es cultivado 100% por mujeres de la región en un país en donde solo 3 de cada 10 caficultores son mujeres (Fuente: Federación Nacional de Cafeteros de Colombia).",
        "En Santander, el cultivo del café es una rica herencia que se transmite de generación en generación, con las mujeres desempeñando un papel vital en el proceso. Apasionada y pionera, la mujer santandereana no solo participa en esta tradición cafetera, sino que es la protagonista debido a que combina su sentido de comunidad con su amor por la independencia. Ese espíritu se infunde en esta variedad de café arábica, que es el fruto del duro trabajo, pasión y compromiso de alrededor de 70 mujeres productoras de la zona.",
        "Las mujeres nos caracterizamos por ser amorosas, pero a la vez somos perseverantes y disciplinadas. Tenemos la pasión y además la fortaleza de acercarnos y transformar a los demás\", comenta Vicky Martínez, Coffee Master y gerente de Operaciones de Distrito, una venezolana que hace nueve años se enamoró del café mientras trabajaba como barista en una tienda de Starbucks y quien más tarde formó parte del equipo pionero cuando la marca llegó a Colombia.",
        "Starbucks® Colombia Santander es motivo de orgullo y nos invita a celebrar el infinito potencial que tiene un grano de café cultivado por la mano de mujeres caficultoras\", asegura Vicky. \"La dedicación sumada a las ganas de salir adelante y progresar para ofrecer mejores oportunidades a sus familias hace que las mujeres vean en el café un territorio fértil para cultivar sus sueños con gratitud y orgullo.",
        "Colombia Santander evoca el aroma artesanal del café proveniente de fincas colombianas e inspira a recordar lo básico y esencial de la vida. \"Este lanzamiento llegó para tocar nuestras emociones y recordarnos que en Colombia hay mujeres sumamente trabajadoras que, con su trabajo en el campo, impulsan el legado de todo un país, finalizó Vicky.",
        "Este café de origen único, disponible en 13 países en Latinoamérica y el Caribe, es una manera más en la que Starbucks celebra la riqueza de las comunidades con las que colabora e invita a más personas a revivir en cada sorbo el orgullo de las caficultoras por el café que cosechan, para dejarse transportar hasta los rincones más deslumbrantes de Colombia, donde continúa floreciendo este gran legado que comparten con el mundo. Ahora, empezar la mañana con una taza de café augurará un buen día en muchos otros sitios del continente.",
        "Conoce más sobre otros cafés Starbucks de la región viajando desde México hasta Puerto Rico."
      ]
    },
    {
      id: 8,
      image: "https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c03_image_text_1504x631/public/2025-10/Good-Things-are-happening.jpg.webp?h=d1cb525d&itok=rsI1WAPn",
      title: "Organizaciones sin fines de lucro en Colombia reciben apoyo de la Fundación Starbucks",
      summary: "La Fundación Forge, la Asociación de Bancos de Alimentos de Colombia (ABACO) y World Vision reciben subvenciones para desarrollar sus programas en Colombia.",
      body: [
        "Colombia, 22 de septiembre de 2025 – Como parte del programa de Subvenciones Globales de Impacto Comunitario de la Fundación Starbucks, fueron seleccionadas las organizaciones Fundación Forge y World Vision por su trabajo en el empoderamiento juvenil, y la Asociación de Bancos de Alimentos de Colombia (ABACO) por su labor en la lucha contra el hambre en el país. Cada una recibirá una subvención por un monto de USD 15.000, 10.000 y 15.000, respectivamente. Este reconocimiento fue posible gracias a la nominación realizada por Alsea, operadora de Starbucks en Colombia.",
        "Vale la pena destacar que esta ronda de beneficiarios fue seleccionada de entre más de 100 organizaciones locales nominadas en 50 mercados alrededor del mundo.",
        "El programa de Subvenciones Globales de Impacto Comunitario de La Fundación Starbucks apoya a organizaciones sin fines de lucro que impulsan programas con impacto local o regional significativo, ampliando el objetivo de la compañía de contribuir positivamente a sus comunidades. Este programa se suma a otras iniciativas de La Fundación Starbucks, incluidas Neighborhood Grants, Origin Grants y Disaster Response Grants, que se enfocan en fomentar la resiliencia y prosperidad comunitaria y en apoyar a comunidades afectadas por desastres.",
        "Desde el lanzamiento del programa en 2022, La Fundación Starbucks y sus operadores han otorgado más de $14 millones en Subvenciones Globales de Impacto Comunitario a más de 200 organizaciones sin fines de lucro en más de 60 mercados.",
        "Desde el principio, Starbucks se propuso ser una compañía diferente: una que prioriza a nuestros partners (empleados), clientes y las comunidades a las que servimos de maneras localmente relevantes\", dijo Brady Brewer, director ejecutivo, International en Starbucks y miembro del consejo de La Fundación Starbucks. \"A través de las Subvenciones Globales de Impacto Comunitario, pedimos a nuestros partners que eleven las causas que les importan en sus comunidades, y seguimos su ejemplo, haciendo donaciones a las organizaciones locales que más les importan.",
        "Starbucks en Colombia colaborará mano a mano con la Fundación Forge, World Vision y la Asociación de Bancos de Alimentos de Colombia (ABACO) para que se desarrollen sus programas.",
        "--- Acerca de la Fundación Starbucks ---",
        "La Fundación Starbucks fortalece a la humanidad transformando vidas en todo el mundo, con un enfoque en fomentar la resiliencia y prosperidad comunitaria y en apoyar a comunidades afectadas por desastres. Establecida en 1997, La Fundación Starbucks es una organización benéfica bajo la sección 501(c)(3) de la ley de EE. UU.",
        "--- Acerca de Starbucks ---",
        "Desde 1971, Starbucks Coffee Company se ha comprometido éticamente a obtener y tostar café Arábica de la más alta calidad. En la actualidad, con más de 32.000 tiendas en todo el mundo, Starbucks es el principal tostador y distribuidor de café especial del mundo. A través de su compromiso inquebrantable con la excelencia y los principios, la marca da vida a la Experiencia Starbucks de una manera única, para cada cliente en cada taza.",
        "--- Acerca de Alsea ---",
        "Alsea es el operador de restaurantes líder en América Latina y Europa, con marcas de reconocimiento global dentro de los segmentos de Comida Rápida, Cafeterías y Restaurantes de Servicio Completo. Cuenta con un portafolio multi-marcas integrado por Domino's Pizza, Starbucks, Burger King, Chili's, P. F. Chang's, Italianni's, The Cheesecake Factory, Vips, Archies, Foster's Hollywood, Gino's y TGI Fridays. La compañía opera más de 4,700 unidades en México, España, Argentina, Colombia, Chile, Paraguay, Francia, Portugal, Bélgica, Holanda, Luxemburgo y Uruguay.",
        "Las acciones de Alsea cotizan en la Bolsa Mexicana de Valores bajo la clave ALSEA*"
      ]
    }
];

function Sidebar({ articleTitle = null }) {
  return (
    <aside className="sidebar">
      <img src={Logo} alt="Starbucks Logo" className="sidebar__logo" />
      <p className="sidebar__brand">STARBUCKS<sup>®</sup></p>
      <p className="sidebar__label">Nuestras historias</p>
      {articleTitle && <p className="sidebar__article-title">{articleTitle}</p>}
    </aside>
  );
}

function StoryCard({ story, onClick }) {
  function handleClick() {
    onClick(story);
  }

  return (
    <div className="story-card" onClick={handleClick}>
      <img className="story-card__image" src={story.image} alt={story.title} />
      <div className="story-card__body">
        <h3 className="story-card__title">{story.title}</h3>
        <button className="story-card__btn">Más información</button>
      </div>
    </div>
  );
}

function ArticleView({ story, onBack }) {
  return (
    <div className="novedades-layout">
      <Sidebar articleTitle={story.title} />
      <div className="article-view__content">
        <button className="article-view__back-btn" onClick={onBack}>
          ← Volver a Novedades
        </button>
        <h1 className="article-view__title">{story.title}</h1>
        <p className="article-view__category">Nuestras historias</p>
        <div className="article-view__summary">
          <p><strong>{story.summary}</strong></p>
        </div>
        {story.body.map(function(paragraph, i) {
          return <p key={i} className="article-view__paragraph">{paragraph}</p>;
        })}
      </div>
    </div>
  );
}

function NovedadesView({ onSelectStory }) {
  return (
    <div className="novedades-layout">
      <Sidebar />
      <div className="novedades-content">
        <h2 className="novedades-content__title">Nuestras historias</h2>
        <div className="stories-grid">
          {stories.map(function(story) {
            return <StoryCard key={story.id} story={story} onClick={onSelectStory} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Novedades() {
  const [selectedStory, setSelectedStory] = useState(null);

  if (selectedStory) {
    return (
      <div className="novedades-page">
        <ArticleView story={selectedStory} onBack={function() { setSelectedStory(null); }} />
      </div>
    );
  }

  return (
    <div className="novedades-page">
      <NovedadesView onSelectStory={setSelectedStory} />
    </div>
  );
}

export default Novedades;