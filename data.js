// =========================================================================
// BONSAI TRAINING PORTAL — CONTENT DATA
// Framework draft — Lodestar Group / Paul Downie
// Menu copy (names, descriptions, prices, allergen disclaimer, hours,
// address) is transcribed verbatim from 2026-09-23_BON_MENU_Print-A4-Laminated.
// Everything else (ingredient notes, allergen matrix, food-safety cards,
// service standards, brand voice) is Lodestar-drafted from the Bonsai
// project record and flagged PENDING where it needs Jair/Mariana sign-off
// before it's treated as an operating standard. Spanish throughout this
// file beyond the menu items themselves is a Lodestar draft translation —
// route it past a native Spanish speaker (Mariana) before this goes live
// as the guest-facing/staff-facing standard.
// =========================================================================

const BONSAI = {

  meta: {
    nameLine: { en: "Fish smokehouse & café", es: "Ahumadero de pescados y cafetería" },
    location: "Tulum, Mexico",
    address: "Calle 6 Sur, MZ 740 LT 21 #1, Col. La Veleta, Tulum, Q.R. 77760",
    hours: { en: "Open Thu–Mon, 8am–5pm", es: "Abierto jue–lun, 8am–5pm" },
    menuDisclaimer: {
      en: "Our preparations are made in-house to high hygiene standards. Several dishes contain fish, shellfish, gluten, dairy, egg, soy, tree nuts, sesame, or mustard. While we take care to minimize cross-contamination, we cannot guarantee any dish is safe for guests with allergies — please advise your server. Prices are in Mexican pesos (MXN) and include tax. Service is not included; gratuity is voluntary.",
      es: "Nuestras preparaciones son caseras y de altos estándares de higiene. Varios platillos contienen pescado, mariscos, gluten, lácteos, huevo, soya, frutos secos, ajonjolí o mostaza. Aunque tomamos medidas para minimizar la contaminación cruzada, no podemos garantizar que ningún platillo sea seguro para personas con alergias — por favor avise a su mesero(a). Precios en pesos mexicanos (MXN), impuestos incluidos. El servicio no está incluido; la propina es voluntaria."
    },
    team: [
      { role: { en: "Chef & Co-Founder", es: "Chef y Cofundador" }, name: "Jair Gudiño Chávez" },
      { role: { en: "Co-Founder & Beverage", es: "Cofundadora y Bebidas" }, name: "Mariana Niño" },
      { role: { en: "Lodestar Group — Operating Advisor", es: "Lodestar Group — Asesor de Operaciones" }, name: "Paul Downie" }
    ]
  },

  // -----------------------------------------------------------------------
  // PORTAL HOME — category cards
  // -----------------------------------------------------------------------
  categories: [
    { id: "food", icon: "🍽", en_t: "Food Guide", es_t: "Guía de Comida",
      en_d: "Every savory and sweet dish — ingredients, allergens, and how to talk about them.", es_d: "Cada platillo salado y dulce — ingredientes, alérgenos y cómo describirlos.", tag: "MENU" },
    { id: "beverage", icon: "🍵", en_t: "Beverage Guide", es_t: "Guía de Bebidas",
      en_d: "Tea, coffee, and refreshments — hot and iced, by the numbers.", es_d: "Té, café y bebidas refrescantes — calientes y frías, con precios.", tag: "BAR" },
    { id: "ingredients", icon: "📖", en_t: "Ingredient Notebook", es_t: "Cuaderno de Ingredientes",
      en_d: "The rare, obscure, or easily-mispronounced — explained properly.", es_d: "Lo raro, lo poco conocido o difícil de pronunciar — explicado bien.", tag: "EDUCATION" },
    { id: "allergens", icon: "⚠", en_t: "Allergens & Dietary", es_t: "Alérgenos y Dietas",
      en_d: "The full matrix, vegan/GF swaps, and the disclosure script.", es_d: "La matriz completa, sustituciones veganas/sin gluten y el guion de aviso.", tag: "SAFETY" },
    { id: "safety", icon: "🧊", en_t: "Food Safety & Cold Chain", es_t: "Seguridad Alimentaria y Cadena de Frío",
      en_d: "Raw-fish handling, hygiene, and what happens if the power goes out.", es_d: "Manejo de pescado crudo, higiene y qué hacer si se va la luz.", tag: "SOP" },
    { id: "deli", icon: "🏪", en_t: "Deli & Retail Case", es_t: "Vitrina y Venta al Detalle",
      en_d: "Everything in the fridge case, sold by weight or jar to take home.", es_d: "Todo lo que está en la vitrina, vendido por peso o frasco para llevar.", tag: "RETAIL" },
    { id: "service", icon: "🔄", en_t: "Service Standards", es_t: "Estándares de Servicio",
      en_d: "Counter flow, dine-in vs. take-away rules, and how we talk to guests.", es_d: "Flujo de mostrador, reglas de para comer aquí vs. para llevar, y cómo hablamos con los clientes.", tag: "FOH" },
    { id: "brand", icon: "🪴", en_t: "Brand & Story", es_t: "Marca e Historia",
      en_d: "The name, the founders, and the words we don't use.", es_d: "El nombre, los fundadores y las palabras que no usamos.", tag: "VOICE" },
    { id: "info", icon: "📍", en_t: "Hours, Location & Team", es_t: "Horario, Ubicación y Equipo",
      en_d: "The quick-reference card for anyone who needs it fast.", es_d: "La tarjeta de referencia rápida para cuando se necesita al instante.", tag: "REFERENCE" },
    { id: "install", icon: "📲", en_t: "Add to Home Screen", es_t: "Agregar a Pantalla de Inicio",
      en_d: "Install this portal like an app for one-tap access on shift.", es_d: "Instala este portal como una app para acceso con un toque en tu turno.", tag: "SETUP" }
  ],

  // -----------------------------------------------------------------------
  // FOOD GUIDE — verbatim from the printed menu (EN/ES as printed)
  // -----------------------------------------------------------------------
  food: [
    {
      group_en: "The Smokehouse — sold by 100g", group_es: "El Ahumadero — se vende por 100g",
      lede_en: "Hand-sliced, cured and cold-smoked on site.", lede_es: "Cortado a mano, curado y ahumado en frío en casa.",
      items: [
        { name: "Bonsai Reserve", price: "220 / 100g", photo: "menu/bonsai-reserve.jpg",
          en: "Salmon, hand-sliced. Cured and cold-smoked on site. Never frozen.",
          es: "Salmón, cortado a mano. Curado y ahumado en frío en casa. Nunca congelado.",
          allergens: ["fish"], veganSwap: false },
        { name: "Smoked Steelhead Trout", price: "220 / 100g", photo: "menu/steelhead-trout.jpg",
          en: "Mexican steelhead, from Ensenada. Cured and cold-smoked on site.",
          es: "Trucha arcoíris mexicana, de Ensenada. Curada y ahumada en frío en casa.",
          allergens: ["fish"], veganSwap: false },
        { name: "Jamón de Salmón", price: "360 / 100g", photo: "menu/jamon-de-salmon.jpg",
          en: "Cold-smoked salmon belly, hand-sliced paper-thin. The rarest cut on the menu.",
          es: "Ventresca de salmón ahumada en frío, cortada a mano en láminas finas. El corte más especial del menú.",
          allergens: ["fish"], veganSwap: false,
          note_en: "Highest-priced item on the menu and currently under-photographed — a dedicated, unambiguous shot is a priority once photography resumes.",
          note_es: "El artículo de mayor precio del menú y actualmente con poca cobertura fotográfica — una foto dedicada e inequívoca es prioridad en la próxima sesión." }
      ]
    },
    {
      group_en: "Small Bites", group_es: "Para Picar", lede_en: "", lede_es: "",
      items: [
        { name: "Bonsai Gilda", price: "60", photo: "menu/bonsai-gilda.jpg",
          en: "Skewered smoked salmon, piparra pepper, smoked olives, house pickle.",
          es: "Brocheta de salmón ahumado, chile piparra, aceitunas ahumadas, encurtido de la casa.",
          allergens: ["fish"], veganSwap: false },
        { name: "Marinated Olives", price: "80", photo: "menu/marinated-olives.jpg", veg: true,
          en: "Kalamata, smoked Gordal and Manzanilla olives, citrus peel, house spice blend, EVOO.",
          es: "Aceitunas kalamata, gordal ahumada y manzanilla, piel de cítricos, mezcla de especias de la casa, aceite de oliva extra virgen.",
          allergens: [], veganSwap: false },
        { name: "Tsukemono", price: "70", photo: "menu/tsukemono.jpg", veg: true,
          en: "Japanese-style mixed pickles, made in-house.",
          es: "Encurtidos variados al estilo japonés, hechos en casa.",
          allergens: [], veganSwap: false }
      ]
    },
    {
      group_en: "Sandwiches", group_es: "Sándwiches",
      lede_en: "Any sandwich can be made vegan — house-smoked beet in place of fish, cashew schmear in place of dairy.",
      lede_es: "Cualquier sándwich puede prepararse vegano — betabel ahumado en casa en lugar de pescado, untable de nuez de la india en lugar de lácteos.",
      items: [
        { name: "Bagel & Schmear", price: "110", photo: "menu/bagel-schmear.jpg",
          en: "Plain or everything bagel. Choice of house schmear — smoked salmon, flecked with pieces of Bonsai Reserve; nori-sesame; or cashew (vegan).",
          es: "Bagel natural o “everything”. Elige tu untable de la casa — salmón ahumado, con trozos de Bonsai Reserve; alga nori-ajonjolí; o nuez de la india (vegano).",
          allergens: ["gluten","fish","dairy","sesame","treenut"], veganSwap: true,
          note_en: "Allergen list covers all schmear variants — a guest ordering the cashew schmear removes dairy but not gluten or sesame (everything bagel).",
          note_es: "La lista de alérgenos cubre todas las variantes de untable — un cliente que pide el untable de nuez de la india elimina lácteos, pero no gluten ni ajonjolí (bagel “everything”)." },
        { name: "Abuelo Bagel", price: "220", photo: "menu/abuelo-bagel.jpg",
          en: "Bagel, cold-smoked salmon or trout, nori-sesame cream cheese, tomato, red onion, capers, house pickle.",
          es: "Bagel, salmón o trucha ahumados en frío, queso crema de nori y ajonjolí, jitomate, cebolla morada, alcaparras, encurtidos de la casa.",
          allergens: ["gluten","fish","dairy","sesame"], veganSwap: false },
        { name: "Smoked Fish Toast", price: "150", photo: "menu/smoked-fish-toast.jpg",
          en: "Choice of sourdough, gluten-free, or protein bread. Cold-smoked salmon or trout, pickled mustard grains, radish, house pickles, pickled wax pepper.",
          es: "Elige pan de masa madre, sin gluten, o de proteína. Salmón o trucha ahumados en frío, mostaza en grano encurtida, rábano, encurtidos de la casa, chile güerito encurtido.",
          allergens: ["fish","mustard"], veganSwap: false,
          note_en: "The only savory item with a built-in gluten-free bread option — flag this to guests who ask before defaulting to “we don't have GF.”",
          note_es: "El único platillo salado con opción de pan sin gluten incorporada — menciónalo a los clientes que pregunten, antes de responder que no hay opción sin gluten." }
      ]
    },
    {
      group_en: "To Share", group_es: "Para Compartir", lede_en: "", lede_es: "",
      items: [
        { name: "Smoked Fish Platter", price: "280", photo: "menu/smoked-fish-platter.jpg",
          en: "Hand-sliced cold-smoked salmon and steelhead trout, tomato, red onion, capers, pickled wax pepper, house pickle.",
          es: "Salmón y trucha ahumados en frío cortados a mano, jitomate, cebolla morada, alcaparras, chile güerito encurtido, encurtidos de la casa.",
          allergens: ["fish"], veganSwap: false,
          note_en: "Highest-visual-impact shareable dish and currently unphotographed — priority for the next shoot.",
          note_es: "El platillo para compartir de mayor impacto visual y sin fotografiar por ahora — prioridad para la próxima sesión." },
        { name: "Smoked Burrata", price: "140", photo: "menu/smoked-burrata.jpg",
          en: "Valladolid burrata, tomato, pickled mustard grains, EVOO, sea salt, black pepper, sourdough.",
          es: "Burrata de Valladolid, jitomate, mostaza en grano encurtida, aceite de oliva extra virgen, sal de mar, pimienta negra, pan de masa madre.",
          allergens: ["dairy","gluten","mustard"], veganSwap: false }
      ]
    },
    {
      group_en: "Sweet", group_es: "Dulce", lede_en: "", lede_es: "",
      items: [
        { name: "Matcha Chia Pudding", price: "95", photo: "menu/matcha-chia-pudding.jpg",
          en: "Overnight chia, coconut milk, heritage matcha, yogurt, fresh fruit.",
          es: "Chía reposada toda la noche, leche de coco, matcha de origen, yoghurt griego, fruta fresca.",
          allergens: ["dairy"], veganSwap: false },
        { name: "Black Sesame Cookie", price: "60", photo: "menu/black-sesame-cookie.jpg",
          en: "Black sesame, sea salt flakes.",
          es: "Ajonjolí negro, flor de sal.",
          allergens: ["sesame","gluten","egg"], veganSwap: false,
          note_en: "Gluten and egg are a standard-recipe inference for a cookie — confirm with kitchen; not stated on the printed menu.",
          note_es: "Gluten y huevo son una inferencia de receta estándar para una galleta — confirmar con cocina; no aparece en el menú impreso." }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // BEVERAGE GUIDE — verbatim from the printed menu
  // -----------------------------------------------------------------------
  beverage: [
    {
      group_en: "Tea", group_es: "Té",
      lede_en: "Matcha and hojicha are whisked to order — served traditional, or latte-style with steamed milk.",
      lede_es: "El matcha y el hojicha se baten al momento — servidos tradicionales, o estilo latte con leche vaporizada.",
      items: [
        { name: "Matcha", hot: "80", iced: "85", photo: "menu/matcha.jpg",
          en: "First harvest, Shizuoka — stone-ground, full-bodied, naturally sweet.",
          es: "Primera cosecha, Shizuoka — molido en piedra, de cuerpo pleno, naturalmente dulce." },
        { name: "Matcha Latte", hot: "90", iced: "95", photo: "menu/matcha-latte.jpg",
          en: "First harvest, Shizuoka, smoothed with steamed milk.",
          es: "Primera cosecha, Shizuoka, suavizado con leche vaporizada." },
        { name: "Hojicha", hot: "70", iced: "75", photo: "menu/hojicha.jpg",
          en: "Roasted green tea — toasty, nutty, naturally low in caffeine.",
          es: "Té verde tostado — notas tostadas y de nuez, naturalmente bajo en cafeína." },
        { name: "Hojicha Latte", hot: "80", iced: "85", photo: "menu/hojicha-latte.jpg",
          en: "Roasted green tea, toasted-caramel warmth with steamed milk.",
          es: "Té verde tostado, calidez de caramelo tostado con leche vaporizada." },
        { name: "Sencha", hot: "30", iced: "35", photo: "menu/sencha.jpg",
          en: "Japanese green tea, brewed at 80°C — light, grassy, clean umami finish.",
          es: "Té verde japonés, preparado a 80°C — ligero, herbal, con final umami limpio." },
        { name: "Mugicha", hot: "—", iced: "30", photo: "menu/mugicha.jpg",
          en: "Toasted barley, cold brew — nutty, naturally caffeine-free.",
          es: "Cebada tostada, preparado en frío — con notas de nuez, naturalmente sin cafeína." }
      ]
    },
    {
      group_en: "Coffee", group_es: "Café",
      lede_en: "Locally roasted Arabica, Veracruz.", lede_es: "Arábica de tueste local, Veracruz.",
      items: [
        { name: "Espresso — Single", hot: "40", iced: "45", en: "", es: "" },
        { name: "Espresso — Double", hot: "80", iced: "85", en: "", es: "" },
        { name: "Americano", hot: "45", iced: "50", en: "", es: "" },
        { name: "Latte", hot: "60", iced: "65", en: "", es: "" },
        { name: "Cappuccino", hot: "60", iced: "65", en: "", es: "" },
        { name: "Espresso Tonic", hot: "—", iced: "65", en: "", es: "" }
      ]
    },
    {
      group_en: "To Refresh", group_es: "Para Refrescar", lede_en: "", lede_es: "",
      items: [
        { name: "Coconut Water", price: "50", en: "Agua de Coco", es: "" },
        { name: "Bonsai Still Water", price: "30", en: "Puebla Springs", es: "" },
        { name: "Bonsai Sparkling Water", price: "40", en: "Puebla Springs", es: "" },
        { name: "Pickle Shot", price: "10", en: "House pickle brine.", es: "Shot de Encurtido — salmuera de encurtido de la casa." },
        { name: "Pickle Spritz", price: "50", en: "House pickle brine, soda water.", es: "Spritz de Encurtido — salmuera de encurtido de la casa, agua con gas." }
      ]
    },
    {
      note_en: "Add non-dairy milk — coconut, oat, or almond — +10 MXN.",
      note_es: "Agrega leche vegetal — coco, avena o almendra — +10 MXN."
    }
  ],

  // -----------------------------------------------------------------------
  // TEA COMPARISON — quick-reference matrix so staff can distinguish and
  // describe the four teas without reciting the full Ingredient Notebook
  // entry. Processing/caffeine/flavor facts here are established, general
  // tea knowledge (not Bonsai-specific claims) — safe to treat as settled.
  // Bonsai-specific sourcing facts (Shizuoka, first harvest) stay in the
  // Ingredient Notebook entries below, where sourcing is what's being said.
  // -----------------------------------------------------------------------
  teaComparison: {
    intro_en: "Same question shows up constantly: \"what's the difference?\" This is the one-glance answer — read down for the full story on each.",
    intro_es: "La misma pregunta surge todo el tiempo: \"¿cuál es la diferencia?\" Esta es la respuesta de un vistazo — lee más abajo para la historia completa de cada uno.",
    rows: [
      { name: "Matcha",
        type_en: "Shade-grown, stone-ground — the whole leaf, powdered", type_es: "Cultivado a la sombra, molido en piedra — la hoja entera, en polvo",
        caffeine_en: "Highest of the four", caffeine_es: "El más alto de los cuatro",
        looks_en: "Vivid emerald green, thick and frothy when whisked", looks_es: "Verde esmeralda intenso, espeso y espumoso al batirse",
        taste_en: "Full-bodied, umami-rich, naturally sweet", taste_es: "Cuerpo pleno, rico en umami, naturalmente dulce" },
      { name: "Sencha",
        type_en: "Sun-grown, steamed, rolled into loose leaf", type_es: "Cultivado al sol, cocido al vapor, enrollado en hoja suelta",
        caffeine_en: "Moderate", caffeine_es: "Moderada",
        looks_en: "Pale-to-medium green liquor", looks_es: "Infusión de verde pálido a medio",
        taste_en: "Light body, grassy, brisk, clean umami finish", taste_es: "Cuerpo ligero, herbal, vivo, final umami limpio" },
      { name: "Hojicha",
        type_en: "Same leaf as sencha — roasted at high heat afterward", type_es: "La misma hoja que el sencha — tostada a alto calor después",
        caffeine_en: "Low — roasting burns most of it off", caffeine_es: "Baja — el tostado elimina la mayor parte",
        looks_en: "Reddish-brown liquor — not green", looks_es: "Infusión de color café rojizo — no verde",
        taste_en: "Toasty, nutty, caramel-like, no bitterness", taste_es: "Tostado, con notas de nuez y caramelo, sin amargor" },
      { name: "Mugicha",
        type_en: "Roasted barley — no tea leaf at all", type_es: "Cebada tostada — no lleva hoja de té",
        caffeine_en: "None — it isn't tea", caffeine_es: "Ninguna — no es té",
        looks_en: "Amber, coffee-like color", looks_es: "Color ámbar, similar al café",
        taste_en: "Nutty, roasted-grain, no astringency", taste_es: "Notas de nuez y grano tostado, sin astringencia" }
    ],
    tip_en: "Two questions come up constantly — have the one-line answer ready. \"What's the difference between sencha and hojicha?\" Same leaf, different roast. \"Is hojicha green tea?\" Botanically yes — but it's roasted after processing, so it neither looks nor tastes like one; that distinction is worth more to a guest than the botanical answer.",
    tip_es: "Dos preguntas surgen constantemente — ten lista la respuesta en una línea. \"¿Cuál es la diferencia entre el sencha y el hojicha?\" La misma hoja, distinto tostado. \"¿El hojicha es té verde?\" Botánicamente sí — pero se tuesta después de procesarse, así que no se ve ni sabe como uno; esa distinción vale más para el cliente que la respuesta botánica."
  },

  // -----------------------------------------------------------------------
  // INGREDIENT NOTEBOOK — educational entries
  // -----------------------------------------------------------------------
  ingredients: [
    { term: "Cold-Smoking", en_t: "Cold-Smoking", es_t: "Ahumado en Frío",
      en: "Curing fish with smoke at a low temperature (roughly 20–30°C / 68–86°F) rather than cooking it with heat. The fish stays raw in texture — silken, translucent — while picking up smoke flavor over hours. It's the technique behind every item in The Smokehouse, and the reason Bonsai's salmon and trout are sliced, not seared.",
      es: "Curar pescado con humo a baja temperatura (aproximadamente 20–30°C) en lugar de cocinarlo con calor. El pescado conserva su textura cruda — sedosa, translúcida — mientras absorbe el sabor a humo durante horas. Es la técnica detrás de cada artículo en El Ahumadero, y la razón por la que el salmón y la trucha de Bonsai se cortan, no se sellan." },
    { term: "Curing", en_t: "Curing", es_t: "Curado",
      en: "The step before smoking: salt (and sometimes sugar) draws moisture out of the fish, firming the flesh and preserving it. Bonsai cures on site before cold-smoking — it's what \"cured and cold-smoked on site\" on the menu is telling the guest, in two words, is a two-stage process.",
      es: "El paso antes de ahumar: la sal (y a veces el azúcar) extrae la humedad del pescado, firmando la carne y preservándola. Bonsai cura en casa antes de ahumar en frío — es lo que \"curado y ahumado en frío en casa\" le dice al cliente, en dos palabras, que en realidad es un proceso de dos etapas." },
    { term: "Steelhead Trout", en_t: "Steelhead Trout", es_t: "Trucha Arcoíris (Steelhead)",
      en: "A sea-run rainbow trout — same species as rainbow trout, but one that migrates to salt water and back, like salmon. That ocean phase is why its flesh runs pale pink to orange and its flavor sits close to salmon's, at a different price point. Bonsai's comes from Ensenada, Baja California.",
      es: "Una trucha arcoíris que migra al mar y regresa, igual que el salmón — misma especie que la trucha arcoíris de agua dulce, pero con esa fase oceánica. Por eso su carne va de rosa pálido a naranja y su sabor se acerca al del salmón, a otro precio. La de Bonsai viene de Ensenada, Baja California." },
    { term: "Jamón de Salmón / Ventresca", en_t: "Jamón de Salmón (Belly)", es_t: "Jamón de Salmón (Ventresca)",
      en: "The belly cut — the fattiest part of the fish, where the marbling runs richest. \"Jamón\" (ham) is a deliberate borrow from Spanish charcuterie language: sliced paper-thin, the way you'd slice a cured ham, not portioned like a fillet. It's the highest-priced, lowest-yield cut on the menu for exactly that reason.",
      es: "El corte de la ventresca — la parte más grasa del pescado, donde el marmoleo es más rico. \"Jamón\" es un préstamo deliberado del lenguaje de la charcutería española: cortado en láminas finísimas, como se corta un jamón curado, no porcionado como un filete. Es el corte de mayor precio y menor rendimiento del menú precisamente por eso." },
    { term: "Gilda", en_t: "Gilda", es_t: "Gilda",
      en: "A classic Basque pintxo (San Sebastián bar snack): traditionally an anchovy, a piparra pepper, and an olive on a skewer — sharp, salty, savory in three bites. Bonsai's version swaps in smoked salmon for the anchovy, keeping the pepper-and-olive structure that gives the dish its name and its bite.",
      es: "Un pintxo vasco clásico (bocadillo de bar de San Sebastián): tradicionalmente una anchoa, un chile piparra y una aceituna en un palillo — intenso, salado, sabroso en tres bocados. La versión de Bonsai cambia la anchoa por salmón ahumado, conservando la estructura de chile y aceituna que le da al platillo su nombre y su carácter." },
    { term: "Piparra Pepper", en_t: "Piparra Pepper", es_t: "Chile Piparra",
      en: "A thin, mild, tangy green pickled pepper from the Basque Country — the standard partner to olives and anchovy in a gilda. Not spicy; its job is acidity and a little grassy heat, not fire.",
      es: "Un chile verde encurtido, delgado, suave y ácido, originario del País Vasco — el compañero clásico de las aceitunas y la anchoa en una gilda. No es picante; su función es dar acidez y un ligero toque herbal, no ardor." },
    { term: "Tsukemono", en_t: "Tsukemono", es_t: "Tsukemono",
      en: "Japan's umbrella term for pickled vegetables — there are dozens of regional styles, brined, salted, or fermented. Bonsai's version is a house-made mixed pickle, the same register as the menu's Western pickles but signaling the Japanese half of the concept's identity.",
      es: "El término japonés general para verduras encurtidas — existen decenas de estilos regionales, en salmuera, sal o fermentados. La versión de Bonsai es un encurtido mixto hecho en casa, en el mismo registro que los encurtidos occidentales del menú, pero señalando la mitad japonesa de la identidad del concepto." },
    { term: "Nori", en_t: "Nori", es_t: "Nori",
      en: "Dried, pressed seaweed — the sheet used to wrap sushi rolls, and, ground or blended into a schmear, a savory, faintly oceanic note that plays against smoked salmon rather than competing with it. It's an allium- and dairy-free way to add umami depth.",
      es: "Alga marina seca y prensada — la lámina que envuelve los rollos de sushi, y, molida o mezclada en un untable, aporta una nota salada y ligeramente marina que acompaña al salmón ahumado en lugar de competir con él. Es una forma de sumar profundidad umami sin allium ni lácteos." },
    { term: "Matcha — Kokoro, First Harvest, Shizuoka", en_t: "Matcha — Kokoro, First Harvest, Shizuoka", es_t: "Matcha — Kokoro, Primera Cosecha, Shizuoka",
      en: "Stone-ground powder from shade-grown tea leaves, harvested once a year. Shading the plant for 2–4 weeks before picking is what makes it matcha rather than just powdered green tea — it forces the plant to produce more chlorophyll (the deep green color) and more of the amino acid L-theanine, which is where matcha's characteristic umami sweetness and lack of bitterness come from. After picking, the leaves are steamed, dried flat into sheets called tencha, de-stemmed and de-veined, then stone-ground into the fine powder that gets whisked. \"First harvest\" (ichibancha) is the earliest and most prized picking of the year — sweeter, less bitter, higher in those same amino acids than later pickings. Sourced from Kokoro, a supplier based in Shizuoka, on Japan's Pacific coast — one of the country's oldest and most respected tea-growing regions. Whisked to order, never from a mix — the whole leaf is consumed (not steeped and discarded like other teas), which is also why it carries the most caffeine of anything on the beverage menu. Worth having the supplier name ready — it's the kind of detail a genuinely curious guest asks for, and \"Kokoro, from Shizuoka\" answers it precisely.",
      es: "Polvo molido en piedra a partir de hojas de té cultivadas a la sombra, cosechadas una vez al año. Cubrir la planta durante 2 a 4 semanas antes de la cosecha es lo que la convierte en matcha y no solo en té verde en polvo — obliga a la planta a producir más clorofila (el verde intenso) y más del aminoácido L-teanina, de donde viene el característico dulzor umami del matcha y su falta de amargor. Después de cortarse, las hojas se cuecen al vapor, se secan en láminas planas llamadas tencha, se les quita el tallo y la vena, y se muelen en piedra hasta obtener el polvo fino que se bate. \"Primera cosecha\" (ichibancha) es la recolección más temprana y apreciada del año — más dulce, menos amarga, con más de esos mismos aminoácidos que las cosechas posteriores. Proviene de Kokoro, un proveedor con sede en Shizuoka, en la costa del Pacífico de Japón — una de las regiones productoras de té más antiguas y respetadas del país. Batido al momento, nunca de una mezcla — se consume la hoja entera (no se remoja y se desecha como otros tés), razón por la cual es también el que más cafeína aporta de toda la carta de bebidas. Vale la pena tener el nombre del proveedor a la mano — es justo el tipo de detalle que pide un cliente realmente interesado, y \"Kokoro, de Shizuoka\" lo responde con precisión." },
    { term: "Hojicha", en_t: "Hojicha", es_t: "Hojicha",
      en: "Roasted green tea — it starts life as the same leaf as sencha (sun-grown, steamed, dried), but is pan- or drum-roasted at high heat afterward. That roast is the entire difference: it's a Maillard reaction, the same browning chemistry as toasting bread or roasting coffee, and it converts the leaf's grassy, vegetal, chlorophyll-driven notes into something toasty, nutty, and caramel-like. The high heat also breaks down most of the caffeine, which is why hojicha sits well below matcha or sencha and is comfortable for guests who are caffeine-sensitive or drinking late in the day. Visual tell for staff: brewed hojicha is reddish-brown, not green — if a guest expects \"green tea\" to look green, this is worth a heads-up before it's poured.",
      es: "Té verde tostado — comienza como la misma hoja que el sencha (cultivada al sol, cocida al vapor, secada), pero se tuesta después a alto calor en sartén o tambor. Ese tostado es toda la diferencia: es una reacción de Maillard, la misma química de dorado que ocurre al tostar pan o café, y convierte las notas herbales, vegetales y de clorofila de la hoja en algo tostado, con notas de nuez y caramelo. El calor alto también descompone la mayor parte de la cafeína, por lo que el hojicha queda muy por debajo del matcha o el sencha, y es una buena opción para clientes sensibles a la cafeína o que lo piden tarde en el día. Dato visual para el equipo: el hojicha preparado es de color café rojizo, no verde — si un cliente espera que un \"té verde\" se vea verde, vale la pena avisarle antes de servirlo." },
    { term: "Sencha", en_t: "Sencha", es_t: "Sencha",
      en: "Japan's everyday green tea — grown in full sun (unlike matcha, which is shaded), then steamed rather than pan-fired shortly after picking. That steaming step is the main thing that separates Japanese green teas from Chinese ones: it halts oxidation almost instantly and locks in a bright, grassy, umami-forward flavor rather than the toastier, more oxidized character of a pan-fired tea. The leaves are then rolled into the thin, needle-like shape sencha is sold in. Brewed loose-leaf at a lower temperature than boiling (80°C) — full boiling water pulls out excess tannins and turns the cup bitter and astringent, which is the most common way to ruin a cup of sencha on the floor.",
      es: "El té verde cotidiano de Japón — cultivado a pleno sol (a diferencia del matcha, que se cultiva a la sombra), y luego cocido al vapor en lugar de tostado en sartén poco después de cortarse. Ese paso de vapor es la principal diferencia entre los tés verdes japoneses y los chinos: detiene la oxidación casi de inmediato y fija un sabor brillante, herbal y con marcado umami, en lugar del carácter más tostado y oxidado de un té frito en sartén. Después, las hojas se enrollan en la forma delgada, tipo aguja, en la que se vende el sencha. Se prepara en hoja suelta a una temperatura menor al hervor (80°C) — el agua hirviendo extrae taninos de más y vuelve la taza amarga y astringente, la forma más común de arruinar una taza de sencha en el mostrador." },
    { term: "Mugicha", en_t: "Mugicha", es_t: "Mugicha",
      en: "Roasted barley tea, cold-brewed — no tea leaf at all, and no caffeine, since it isn't made from the tea plant (Camellia sinensis) in the first place. Roasted whole barley grains are steeped, which is where its amber color and nutty, roasted-grain flavor come from — closer in character to a light, decaffeinated coffee than to any of the other three teas. A summer staple across Japan, poured over ice; the menu's own note calls it \"Japan's answer to a hot afternoon,\" which Tulum has no shortage of. It's the one item on the tea list safe to recommend without a caffeine question — useful to know before a guest asks.",
      es: "Té de cebada tostada, preparado en frío — no lleva hoja de té y no tiene cafeína, ya que no proviene de la planta del té (Camellia sinensis). Se prepara con granos enteros de cebada tostada, de donde viene su color ámbar y su sabor a nuez y grano tostado — más cercano en carácter a un café ligero descafeinado que a cualquiera de los otros tres tés. Un clásico del verano en todo Japón, servido con hielo; el propio menú lo describe como \"la respuesta japonesa a una tarde calurosa,\" de las que no faltan en Tulum. Es el único té de la carta que se puede recomendar sin preguntar por la cafeína — útil saberlo antes de que el cliente pregunte." },
    { term: "Burrata (Valladolid)", en_t: "Burrata (Valladolid)", es_t: "Burrata (Valladolid)",
      en: "A fresh Italian cheese with a mozzarella shell and a soft, creamy interior of shredded curd and cream (\"burro\" — butter — is the root of the name). Bonsai's is made in Valladolid, Yucatán, not imported — a local dairy producer, not the Puglia region burrata traditionally comes from.",
      es: "Un queso italiano fresco con una envoltura de mozzarella y un interior suave y cremoso de cuajada deshebrada y crema (\"burro\" — mantequilla — es la raíz del nombre). La de Bonsai se elabora en Valladolid, Yucatán, no es importada — un productor lácteo local, no la región de Puglia de donde tradicionalmente proviene la burrata." },
    { term: "Furikake", en_t: "Furikake (Salmon)", es_t: "Furikake (de Salmón)",
      en: "A dry Japanese seasoning blend — classically sesame, seaweed, and dried fish flakes — scattered over rice. Bonsai's retail-case version is built around salmon, a condiment for guests to take home rather than a menu item.",
      es: "Una mezcla seca de condimentos japoneses — clásicamente ajonjolí, alga y hojuelas de pescado seco — que se espolvorea sobre el arroz. La versión de la vitrina de Bonsai está hecha a base de salmón, un condimento para llevar a casa más que un platillo del menú." },
    { term: "Balik Cut", en_t: "Balik Cut", es_t: "Corte Balik",
      en: "The premium upper-center loin of the salmon, trimmed of belly fat and bloodline — the single best-marbled, most consistent section of the fish. \"Balik\" is a Turkish/Russian smoked-salmon term for exactly this cut; on Bonsai's retail roadmap as a future bestseller.",
      es: "El lomo superior central del salmón, recortado de la grasa de la ventresca y la línea de sangre — la sección del pescado con el marmoleo más rico y consistente. \"Balik\" es un término turco/ruso para el salmón ahumado que designa precisamente este corte; está en el mapa de productos futuros de la vitrina de Bonsai como posible más vendido." },
    { term: "Caviar de Monte", en_t: "Caviar de Monte", es_t: "Caviar de Monte",
      en: "Sourced and resold, not produced in-house — worth knowing the distinction if a guest asks whether Bonsai cures its own caviar (it doesn't; the smokehouse craft is the fish, not the roe).",
      es: "Se compra y se revende, no se produce en casa — vale la pena conocer esta distinción si un cliente pregunta si Bonsai cura su propio caviar (no lo hace; el oficio del ahumadero es el pescado, no la hueva)." },
    { term: "EVOO", en_t: "Extra Virgin Olive Oil (EVOO)", es_t: "Aceite de Oliva Extra Virgen (AOEV)",
      en: "The first, cold-pressed extraction from olives, with no heat or chemical solvents involved — the highest, least-processed grade of olive oil, and the reason it appears by name rather than just \"olive oil\" on the menu.",
      es: "La primera extracción en frío de las aceitunas, sin calor ni disolventes químicos — el grado más alto y menos procesado del aceite de oliva, y la razón por la que aparece por su nombre completo y no solo como \"aceite de oliva\" en el menú." },
    { term: "Pickled Wax Pepper", en_t: "Pickled Wax Pepper", es_t: "Chile Güerito Encurtido",
      en: "A pale-yellow, mild-to-medium chile (güerito) — brined, not grown to be hot. Renamed on the menu from \"pickled pepper\" specifically to make clear it's a chili, not a peppercorn.",
      es: "Un chile amarillo pálido (güerito), de picor suave a medio — encurtido, no cultivado para ser picante. Renombrado en el menú de \"pickled pepper\" precisamente para dejar claro que es un chile, no una pimienta en grano." },
    { term: "Veracruz Arabica Coffee", en_t: "Veracruz Arabica Coffee", es_t: "Café Arábica de Veracruz",
      en: "Arabica beans, roasted locally, grown in Veracruz — one of Mexico's oldest coffee-growing states, with a coffee tradition dating back over 200 years, concentrated in highland areas where altitude and cloud cover suit Arabica (a more delicate, higher-altitude species than the hardier, more bitter Robusta). \"Locally roasted\" is doing real work in this line — it means the beans are roasted close to point of service rather than shipped pre-roasted from abroad, which matters for freshness.",
      es: "Granos arábica, tostados localmente, cultivados en Veracruz — uno de los estados productores de café más antiguos de México, con una tradición cafetalera de más de 200 años, concentrada en zonas de altura donde la altitud y la nubosidad favorecen al arábica (una especie más delicada y de mayor altitud que la más resistente y amarga robusta). \"Tueste local\" es una frase que dice algo concreto en esta línea — significa que los granos se tuestan cerca del punto de servicio en lugar de llegar pre-tostados desde el extranjero, lo cual importa para la frescura." },
    { term: "Puebla Springs Water", en_t: "Puebla Springs Water", es_t: "Agua Puebla Springs",
      en: "Bonsai's still and sparkling water program is a named source — Puebla Springs — rather than an unbranded bottle, which is why it appears on the menu with that name attached rather than just \"water.\" Worth knowing if a guest asks what they're being served, or asks for something other than tap.",
      es: "El programa de agua natural y mineral de Bonsai tiene una fuente con nombre — Puebla Springs — en lugar de ser una botella sin marca, razón por la que aparece en el menú con ese nombre en lugar de solo \"agua.\" Vale la pena saberlo si un cliente pregunta qué se le está sirviendo, o pide algo distinto al agua de la llave." },
    { term: "Sashimi-Grade", en_t: "Sashimi-Grade", es_t: "Grado Sashimi",
      en: "Not a legal or regulated term anywhere — it's a supplier's claim about handling (flash-frozen to kill parasites, or handled with a cold chain tight enough to serve raw with confidence), not a government-certified category. Bonsai's own cold-chain and time/temp discipline is what actually backs the claim in-house — see Food Safety.",
      es: "No es un término legal ni regulado en ningún lugar — es una afirmación del proveedor sobre el manejo (congelado rápidamente para eliminar parásitos, o manejado con una cadena de frío lo suficientemente estricta para servirse crudo con confianza), no una categoría certificada por el gobierno. La disciplina de cadena de frío y tiempo/temperatura propia de Bonsai es lo que realmente respalda esa afirmación puertas adentro — ver Seguridad Alimentaria." }
  ],

  // -----------------------------------------------------------------------
  // ALLERGEN reference labels
  // -----------------------------------------------------------------------
  allergenLabels: {
    fish: { en: "Fish", es: "Pescado" },
    shellfish: { en: "Shellfish", es: "Mariscos" },
    gluten: { en: "Gluten", es: "Gluten" },
    dairy: { en: "Dairy", es: "Lácteos" },
    egg: { en: "Egg", es: "Huevo" },
    soy: { en: "Soy", es: "Soya" },
    treenut: { en: "Tree Nut", es: "Frutos Secos" },
    sesame: { en: "Sesame", es: "Ajonjolí" },
    mustard: { en: "Mustard", es: "Mostaza" }
  },

  // -----------------------------------------------------------------------
  // FOOD SAFETY & COLD CHAIN — from the Daily Ops SOP master list (Tier 1)
  // -----------------------------------------------------------------------
  safety: [
    { en_t: "Raw & Cold-Chain Fish Handling", es_t: "Manejo de Pescado Crudo y Cadena de Frío",
      en: "Every plate that leaves this counter with sashimi, smoked salmon, or the smoked fish platter runs on time and temperature — not judgment. Use dedicated boards and utensils for raw fish, kept separate from bagel, salad, and dry-goods prep, at all times.",
      es: "Cada plato que sale de este mostrador con sashimi, salmón ahumado o el smoked fish platter se rige por tiempo y temperatura — no por criterio personal. Usa tablas y utensilios exclusivos para pescado crudo, separados en todo momento de la preparación de bagels, ensaladas y productos secos.",
      pending_en: "Exact hold-time and discard-window thresholds are being finalized by the kitchen against real service data and will replace this line once signed off. Do not improvise a number in the meantime — ask a manager.",
      pending_es: "Los límites exactos de tiempo de espera y las ventanas de descarte están siendo definidos por cocina con datos reales de servicio y sustituirán esta línea una vez aprobados. No improvises una cifra mientras tanto — pregunta a un gerente." },
    { en_t: "Cold-Chain Power-Failure Protocol", es_t: "Protocolo de Falla Eléctrica en la Cadena de Frío",
      en: "Tulum sits in hurricane season. A freezer full of bagels alongside sashimi-grade fish and smoked salmon means one outage without a plan is a solvency event, not an inconvenience.",
      es: "Tulum está en temporada de huracanes. Un congelador lleno de bagels junto con pescado grado sashimi y salmón ahumado significa que un solo apagón sin plan es un evento que pone en riesgo el negocio, no solo una molestia.",
      pending_en: "Maximum hold time before mandatory discard, who checks temperatures and when, the backup-power or ice option, and the escalation contact are pending final sign-off — confirm the current version with a manager before relying on it.",
      pending_es: "El tiempo máximo de espera antes del descarte obligatorio, quién revisa las temperaturas y cuándo, la opción de energía de respaldo o hielo, y el contacto de escalamiento están pendientes de aprobación final — confirma la versión vigente con un gerente antes de usarla como referencia." },
    { en_t: "Opening & Closing Checklists", es_t: "Listas de Apertura y Cierre",
      en: "Station by station — cold case, coffee/tea bar, espresso machine, POS terminal, dining/terrace. Fridge and freezer temperatures are checked and logged before the first order of the day, and again at close, alongside the cash drop and a walk-through of what's frozen, discarded, or held for the next open.",
      es: "Estación por estación — vitrina fría, barra de café/té, máquina de espresso, terminal de POS, comedor/terraza. Las temperaturas del refrigerador y congelador se revisan y registran antes de la primera orden del día, y de nuevo al cierre, junto con el corte de caja y un recorrido de lo que se congela, se descarta o se guarda para la siguiente apertura." },
    { en_t: "Hygiene & Glove Protocol", es_t: "Protocolo de Higiene y Guantes",
      en: "Wash hands on the frequency set by your manager, and change gloves between handling raw fish and anything else — every time, no exceptions. Staff do not work with raw fish while symptomatic of illness.",
      es: "Lávate las manos con la frecuencia que indique tu gerente, y cambia de guantes entre el manejo de pescado crudo y cualquier otra cosa — siempre, sin excepciones. El personal no trabaja con pescado crudo si presenta síntomas de enfermedad." },
    { en_t: "FIFO Stock Rotation", es_t: "Rotación de Inventario FIFO",
      en: "Date everything on receipt. Sashimi-grade fish has the shortest shelf life in the building; dry goods the longest. Physically place older stock in front so it's used first — first in, first out, every time, no exceptions for what's \"probably still fine.\"",
      es: "Fecha todo al recibirlo. El pescado grado sashimi tiene la vida útil más corta de todo el local; los productos secos, la más larga. Coloca físicamente el inventario más antiguo al frente para que se use primero — primero en entrar, primero en salir, siempre, sin excepciones por lo que \"probablemente todavía esté bien.\"" },
    { en_t: "Allergen & Ingredient Disclosure", es_t: "Aviso de Alérgenos e Ingredientes",
      en: "This is a Japanese-forward, raw-fish-forward menu — fish, shellfish, gluten, dairy, egg, soy, tree nuts, sesame, and mustard all appear somewhere on it. See Allergens & Dietary for the full matrix and the exact script for what to say when a guest asks.",
      es: "Este es un menú con enfoque japonés y de pescado crudo — pescado, mariscos, gluten, lácteos, huevo, soya, frutos secos, ajonjolí y mostaza aparecen en algún lugar del menú. Ver Alérgenos y Dietas para la matriz completa y el guion exacto de qué decir cuando un cliente pregunte." },
    { en_t: "Delivery-Scope Boundary", es_t: "Límite de Alcance para Entregas/Para Llevar",
      en: "Bagel & Schmear, Abuelo Bagel, Smoked Fish Toast (wrapped and halved), Gildas, Marinated Olives, and the Smoked Fish Platter (bento format) can leave the building. Sashimi is dine-in only — full stop, no exceptions, regardless of how the request is framed.",
      es: "Bagel & Schmear, Abuelo Bagel, Smoked Fish Toast (envuelto y cortado a la mitad), Gildas, Marinated Olives y el Smoked Fish Platter (en formato bento) pueden salir del local. El sashimi es exclusivamente para comer en el local — sin excepción, sin importar cómo se plantee la solicitud." }
  ],

  // -----------------------------------------------------------------------
  // SERVICE STANDARDS
  // -----------------------------------------------------------------------
  service: [
    { en_t: "Greet Every Guest", es_t: "Saluda a Cada Cliente",
      en: "This is counter service, not table service — the greeting is the whole first impression, delivered in one interaction, not built up over a seated visit. Make it count: warm, direct, unhurried even when the line isn't.",
      es: "Este es servicio de mostrador, no de mesa — el saludo es toda la primera impresión, entregada en una sola interacción, no construida a lo largo de una visita sentada. Que cuente: cálido, directo, sin prisas aunque la fila sí la tenga." },
    { en_t: "Tell the Sashimi Story", es_t: "Cuenta la Historia del Sashimi",
      en: "Guests are meeting a Japanese-forward, raw-fish-forward beverage and food program in Tulum — most haven't seen this combination before. A short, confident explanation of what cold-smoking is and why the fish is sliced, not cooked, does more work than a long one.",
      es: "Los clientes están conociendo un programa de comida y bebida con enfoque japonés y de pescado crudo, en Tulum — la mayoría no ha visto antes esta combinación. Una explicación breve y segura de qué es el ahumado en frío y por qué el pescado se corta y no se cocina, funciona mejor que una larga." },
    { en_t: "Offer the Swap, Don't Wait to Be Asked", es_t: "Ofrece la Sustitución, No Esperes a que Pregunten",
      en: "Vegan and gluten-free options exist on this menu (house-smoked beet, cashew schmear, gluten-free bread). Offer them proactively to a guest who signals a dietary need, rather than waiting for them to ask what's possible.",
      es: "Existen opciones veganas y sin gluten en este menú (betabel ahumado en casa, untable de nuez de la india, pan sin gluten). Ofrécelas de forma proactiva a un cliente que señale una necesidad alimentaria, en lugar de esperar a que pregunte qué es posible." },
    { en_t: "Value Framing, Not Process Framing", es_t: "Enmarca el Valor, No el Proceso",
      en: "When describing an ingredient's origin, tell guests what it is, not where it came from in the kitchen. \"Flecked with pieces of Bonsai Reserve\" is an upsell; \"cured from slicing trim\" sounds like an apology for the same thing. Same fact, told the right way.",
      es: "Al describir el origen de un ingrediente, dile al cliente qué es, no de dónde vino en la cocina. \"Con trozos de Bonsai Reserve\" es una forma de destacar valor; \"curado de los recortes del corte\" suena a disculpa por lo mismo. El mismo hecho, contado de la manera correcta." },
    { en_t: "Know the Delivery-Scope Boundary", es_t: "Conoce el Límite de Alcance para Entregas",
      en: "Before confirming a take-away or delivery order, check it against the Delivery-Scope Boundary in Food Safety. Sashimi does not leave the building, regardless of how the request is framed.",
      es: "Antes de confirmar una orden para llevar o a domicilio, verifícala contra el Límite de Alcance para Entregas en Seguridad Alimentaria. El sashimi no sale del local, sin importar cómo se plantee la solicitud." },
    { en_t: "Escalate, Don't Improvise", es_t: "Escala, No Improvises",
      en: "A guest illness claim, an equipment failure, or a food-safety question that isn't clearly answered here goes to a manager immediately — not a best guess on the floor.",
      es: "Una queja de un cliente por enfermedad, una falla de equipo, o una pregunta de seguridad alimentaria que no esté claramente respondida aquí, se escala de inmediato a un gerente — no se resuelve con una suposición en el mostrador." }
  ],

  // -----------------------------------------------------------------------
  // DELI & RETAIL CASE — from the Deli Fridge Item List
  // -----------------------------------------------------------------------
  deli: [
    { group_en: "Smoked Fish — Current", group_es: "Pescado Ahumado — Actual",
      items: [
        { name: "Smoked Salmon", en: "100g, take-home format.", es: "100g, formato para llevar." },
        { name: "Smoked Trout", en: "100g, take-home format.", es: "100g, formato para llevar." },
        { name: "Salmon Belly", en: "100g, take-home format — the Jamón de Salmón cut.", es: "100g, formato para llevar — el corte de Jamón de Salmón." },
        { name: "Mayan Octopus", en: "Seasonal.", es: "Estacional." }
      ]
    },
    { group_en: "Smoked Fish — Coming Later", group_es: "Pescado Ahumado — Próximamente",
      items: [
        { name: "Balik Cut Smoked Salmon", en: "Premium upper-center loin, trimmed — potential bestseller. See Ingredient Notebook.", es: "Lomo superior central premium, recortado — posible más vendido. Ver Cuaderno de Ingredientes." },
        { name: "Smoked Tuna", en: "", es: "" }
      ]
    },
    { group_en: "Schmears", group_es: "Untables",
      items: [
        { name: "Cream Cheese", en: "", es: "" },
        { name: "Nori-Sesame Cream Cheese", en: "", es: "" },
        { name: "Smoked Salmon Cream Cheese", en: "", es: "" }
      ],
      note_en: "Kosher certification for this line is still in progress — status TBC. Do not represent any schmear as kosher-certified until confirmed.",
      note_es: "La certificación kosher para esta línea sigue en proceso — estatus por confirmar. No presentes ningún untable como certificado kosher hasta que se confirme." },
    { group_en: "Pickles", group_es: "Encurtidos",
      items: [
        { name: "Tsukemono (House Pickles)", en: "400g jar.", es: "Frasco de 400g." },
        { name: "Soy-Pickled Spring Onions", en: "294g jar — seasonal, batch-made.", es: "Frasco de 294g — estacional, hecho por lotes." }
      ]
    },
    { group_en: "Caviar", group_es: "Caviar",
      items: [{ name: "Caviar de Monte", en: "Sourced and resold. See Ingredient Notebook.", es: "Se compra y se revende. Ver Cuaderno de Ingredientes." }]
    },
    { group_en: "Condiments & Toppings", group_es: "Condimentos y Toppings",
      items: [{ name: "Salmon Furikake", en: "See Ingredient Notebook.", es: "Ver Cuaderno de Ingredientes." }]
    },
    { group_en: "Outside Fridge", group_es: "Fuera del Refrigerador",
      items: [{ name: "Organic Honey", en: "Brand and size TBC.", es: "Marca y tamaño por confirmar." }]
    },
    { group_en: "Beverages (Retail)", group_es: "Bebidas (Venta al Detalle)",
      items: [
        { name: "Mugicha", en: "No pricing display needed per team.", es: "No requiere exhibición de precio, según el equipo." },
        { name: "Pocari Sweat", en: "", es: "" },
        { name: "Sparkling Water", en: "", es: "" },
        { name: "Branded Spring Water", en: "", es: "" }
      ]
    },
    { group_en: "Aspirational / Future", group_es: "Aspiracional / Futuro",
      items: [
        { name: "Smoked Chili Salsa (Jalapeño)", en: "", es: "" },
        { name: "Smoked Chili Salsa (Habanero)", en: "", es: "" }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // BRAND & STORY
  // -----------------------------------------------------------------------
  brand: {
    headline_en: "Simple, not narrow.", headline_es: "Simple, no limitado.",
    story_en: "Bonsai is a fish smokehouse and café in Tulum, founded by chef Jair Gudiño Chávez and his wife, Mariana Niño. The name is a subtractive philosophy, not a decorative one — a bonsai tree is shaped by what's removed, not what's added. Applied to a menu, that means every ingredient earns its place, and nothing is on the plate to look impressive.",
    story_es: "Bonsai es un ahumadero de pescados y cafetería en Tulum, fundado por el chef Jair Gudiño Chávez y su esposa, Mariana Niño. El nombre representa una filosofía sustractiva, no decorativa — un árbol de bonsái se forma por lo que se elimina, no por lo que se añade. Aplicado a un menú, eso significa que cada ingrediente se gana su lugar, y nada está en el plato solo para verse impresionante.",
    voiceRules_en: [
      "State what a thing is and how it was made — let the guest supply the adjective.",
      "“Cold-smoked on site, never frozen” tells a guest more than “premium” ever will.",
      "Describe what a component is, not where it came from in the kitchen (see Service Standards — Value Framing).",
      "Banned words, on the menu and in conversation with guests: premium, elevated, curated, immersive, bespoke, artisanal."
    ],
    voiceRules_es: [
      "Di lo que algo es y cómo se hizo — deja que el cliente aporte el adjetivo.",
      "“Ahumado en frío en casa, nunca congelado” le dice más al cliente de lo que “premium” jamás dirá.",
      "Describe lo que un ingrediente es, no de dónde vino en la cocina (ver Estándares de Servicio — Enmarca el Valor).",
      "Palabras prohibidas, en el menú y al hablar con los clientes: premium, elevado, curado, inmersivo, a la medida, artesanal."
    ],
    craft_en: "The craft is the fish: cured and cold-smoked on site, never frozen, hand-sliced. Everything else on the menu — the Japanese-forward tea and coffee program, the house pickles, the bagels — supports that one center of gravity without competing with it.",
    craft_es: "El oficio es el pescado: curado y ahumado en frío en casa, nunca congelado, cortado a mano. Todo lo demás en el menú — el programa de té y café con enfoque japonés, los encurtidos de la casa, los bagels — respalda ese único centro de gravedad sin competir con él."
  },

  // -----------------------------------------------------------------------
  // INSTALL PAGE copy
  // -----------------------------------------------------------------------
  install: {
    title_en: "Add to Your Phone Home Screen", title_es: "Agrega a la Pantalla de Inicio de tu Teléfono",
    lede_en: "Install this like an app for one-tap access on shift.", lede_es: "Instala esto como una app para acceso con un toque durante tu turno.",
    iphone_en: ["Open this page in Safari.", "Tap the Share icon (square with an arrow up).", "Scroll down and tap Add to Home Screen.", "Tap Add in the top right."],
    iphone_es: ["Abre esta página en Safari.", "Toca el ícono de Compartir (cuadro con una flecha hacia arriba).", "Desplázate hacia abajo y toca Agregar a pantalla de inicio.", "Toca Agregar en la esquina superior derecha."],
    android_en: ["Open this page in Chrome.", "Tap the three-dot menu in the top right.", "Tap Add to Home screen (or Install app).", "Tap Add or Install to confirm."],
    android_es: ["Abre esta página en Chrome.", "Toca el menú de tres puntos en la esquina superior derecha.", "Toca Agregar a pantalla de inicio (o Instalar app).", "Toca Agregar o Instalar para confirmar."]
  }
};
