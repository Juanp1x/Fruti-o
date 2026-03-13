import "./cafe.css";
 
const steps = [
  {
    id: 1,
    title: "Paso 1:",
    description:
      "Agrega el café molido grueso. Usa 2 cucharadas (10 g) de café molido por cada taza (180 ml) de agua caliente. Agrega el café molido a la prensa de café vacía. Para este método de preparación, puedes usar tu café molido favorito en tamaño 15 para producir un rico sabor sin amargura.",
    img :"https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c04_image_text_grid_600x600/public/2025-01/2022-02_FOTO%202_1.jpeg.webp?h=6992355f&itok=ViI4wuQb"
  },
  {
    id: 2,
    title: "Paso 2:",
    description:
      "Vierte agua justo debajo del borde de la prensa. Para obtener la mejor preparación, agrega agua que esté 30 segundos después de que haya hervido. La temperatura del agua afecta la eficiencia con la que se extraen los sabores del café. La temperatura ideal para preparar café con una prensa debe estar entre 90 y 96 °C.",
    img: "https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c04_image_text_grid_600x600/public/2025-01/2022-02_FOTO%203_1.jpeg.webp?h=6992355f&itok=ziF_jnZl",
  },
  {
    id: 3,
    title: "Paso 3:",
    description:
      "Revuelve suavemente los granos varias veces con una cuchara. Una o dos veces es suficiente.",
    img: "https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c04_image_text_grid_600x600/public/2025-01/2022-02_FOTO%204_1.jpeg.webp?h=6992355f&itok=Ehuvuos7",
  },
  {
    id: 4,
    title: "Paso 4:",
    description: "Coloca la tapa del émbolo, asegura y espera.",
    img: "https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c04_image_text_grid_600x600/public/2025-01/2022-02_FOTO%205_1.jpeg.webp?h=6992355f&itok=S281j4vw",
  },
  {
    id: 5,
    title: "Paso 5:",
    description: "Espera 4 minutos para que se libere el café.",
    img: "https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c04_image_text_grid_600x600/public/2025-01/2022-02_FOTO%206_1.jpeg.webp?h=6992355f&itok=KwvIHHYF",
  },
  {
    id: 6,
    title: "Paso 6:",
    description:
      "Empuja firmemente el émbolo hacia abajo, separando así el café de la superficie, presionando lentamente el émbolo hacia abajo.",
    img: "https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c04_image_text_grid_600x600/public/2025-01/2022-02_FOTO%207.1_1.jpeg.webp?h=6992355f&itok=Wq3pM2C5",
  },
  {
    id: 7,
    title: "Paso 7:",
    description:
      "Sirve y saborea tu café favorito en casa. ¡Siente el aroma y disfruta de tu taza de café Colombia Nariño recién hecho como si estuvieras en una de nuestras tiendas!",
    img: "https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c04_image_text_grid_600x600/public/2025-01/2022-02_FOTO%208_1.jpeg.webp?h=6992355f&itok=C3Qq4Vf4",
  },
];
 
const ingredients = [
  "Tu CAFÉ STARBUCKS COLOMBIA NARIÑO",
  "Prensa Francesa",
  "Cuchara",
  "Tu taza favorita",
  "Agua",
];
 
export default function Cafe() {
  return (
    <div className="page-wrapper">
 
      {/* Panel izquierdo fijo */}
      <div id="left-panel">
        <img
          src="https://images.unsplash.com/photo-1496379896897-7b57622f431b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Coffee beans"
        />
      </div>
 
      {/* Contenido derecho */}
      <div id="right-content">
 
        <h1 id="page-title">Tu café Starbucks en prensa francesa</h1>
 
        {/* Imagen hero */}
        <div id="hero-image-wrapper">
          <img
            src="https://www.starbucks.com.co/sites/starbucks-co-pwa/files/styles/c02_horizontal_card_1312x691/public/2025-01/2022-02_FOTO%201_1.jpeg.webp?h=dbfb0746&itok=O6Sse0BA"
            alt="Café Colombia Nariño con prensa francesa"
          />
        </div>
 
        {/* ¿Qué necesitamos? */}
        <h2 id="ingredients-title">¿Qué necesitamos?</h2>
 
        <ul id="ingredients-list">
          {ingredients.map((item, i) => (
            <li key={i} id={`ingredient-${i + 1}`}>– {item}</li>
          ))}
        </ul>
 
        <p id="intro-text">
          Prepara tu prensa de café y no olvides precalentar la prensa de café enjuagándola con
          agua caliente. No olvides desechar el agua antes de agregar los pasos.
        </p>
 
        {/* Grid de pasos responsive */}
        <div id="steps-grid">
          {steps.map((step) => (
            <div
              key={step.id}
              id={`step-${step.id}`}
              className="step-card"
            >
              <div className="step-image-wrapper">
                <img src={step.img} alt={step.title} />
              </div>
              <div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </div>
  );
}