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
      { role: { en: "Front of House Legend & Co-Founder", es: "Leyenda de Servicio y Cofundadora" }, name: "Mariana Niño" },
      { role: { en: "Partner", es: "Socio" }, name: "Paul Downie" },
      { role: { en: "Partner", es: "Socio" }, name: "James Hartshorn" }
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
      lede_en: "Curing and cold-smoking are two separate steps, done in sequence. Curing comes first: salt (and sometimes sugar) draws moisture out of the fish, firming the flesh and preserving it. Cold-smoking follows — smoke applied at a low temperature (roughly 20–30°C/68–86°F) rather than cooking heat. The fish stays raw in texture — silken, translucent — while absorbing smoke flavor over hours. That's why every item below is sliced, not seared, and why \"cured and cold-smoked on site\" on the menu is actually describing a two-stage process in four words.",
      lede_es: "El curado y el ahumado en frío son dos pasos distintos, hechos en secuencia. El curado va primero: la sal (y a veces el azúcar) extrae la humedad del pescado, firmando la carne y preservándola. El ahumado en frío sigue después — humo aplicado a baja temperatura (aproximadamente 20–30°C) en lugar de calor de cocción. El pescado conserva su textura cruda — sedosa, translúcida — mientras absorbe el sabor a humo durante horas. Por eso cada artículo de abajo se corta, no se sella, y por eso \"curado y ahumado en frío en casa\" en el menú en realidad describe un proceso de dos etapas en cuatro palabras.",
      items: [
        { name: "Bonsai Reserve", price: "220 / 100g", photo: "menu/bonsai-reserve.jpg",
          en: "Salmon, hand-sliced. Cured and cold-smoked on site. Never frozen.",
          es: "Salmón, cortado a mano. Curado y ahumado en frío en casa. Nunca congelado.",
          allergens: ["fish"], veganSwap: false },
        { name: "Smoked Steelhead Trout", price: "220 / 100g", photo: "menu/steelhead-trout.jpg",
          en: "Mexican steelhead, from Ensenada. Cured and cold-smoked on site.",
          es: "Trucha arcoíris mexicana, de Ensenada. Curada y ahumada en frío en casa.",
          allergens: ["fish"], veganSwap: false,
          note_en: "Steelhead trout is a sea-run rainbow trout — same species as the freshwater fish, but one that migrates to salt water and back, like salmon. That ocean phase is why the flesh runs pale pink to orange and the flavor sits close to salmon's, at a different price point.",
          note_es: "La trucha steelhead es una trucha arcoíris que migra al mar y regresa, igual que el salmón — misma especie que la trucha de agua dulce, pero con esa fase oceánica. Por eso su carne va de rosa pálido a naranja y su sabor se acerca al del salmón, a otro precio." },
        { name: "Jamón de Salmón", price: "360 / 100g", photo: "menu/jamon-de-salmon.jpg",
          en: "Cold-smoked salmon belly, hand-sliced paper-thin. The rarest cut on the menu.",
          es: "Ventresca de salmón ahumada en frío, cortada a mano en láminas finas. El corte más especial del menú.",
          allergens: ["fish"], veganSwap: false,
          note_en: "The belly cut — the fattiest part of the fish, richest marbling. \"Jamón\" (ham) is a deliberate borrow from Spanish charcuterie language: sliced paper-thin, the way you'd slice a cured ham, not portioned like a fillet — the highest-priced, lowest-yield cut on the menu for exactly that reason. Also highest-priced item on the menu and currently under-photographed — a dedicated, unambiguous shot is a priority once photography resumes.",
          note_es: "El corte de la ventresca — la parte más grasa del pescado, marmoleo más rico. \"Jamón\" es un préstamo deliberado del lenguaje de la charcutería española: cortado en láminas finísimas, como se corta un jamón curado, no porcionado como un filete — el corte de mayor precio y menor rendimiento del menú precisamente por eso. También el artículo de mayor precio del menú y actualmente con poca cobertura fotográfica — una foto dedicada e inequívoca es prioridad en la próxima sesión." }
      ]
    },
    {
      group_en: "Small Bites", group_es: "Para Picar", lede_en: "", lede_es: "",
      items: [
        { name: "Bonsai Gilda", price: "60", photo: "menu/bonsai-gilda.jpg",
          en: "Skewered smoked salmon, piparra pepper, smoked olives, house pickle.",
          es: "Brocheta de salmón ahumado, chile piparra, aceitunas ahumadas, encurtido de la casa.",
          allergens: ["fish"], veganSwap: false,
          note_en: "A classic Basque pintxo (San Sebastián bar snack) — traditionally an anchovy, a piparra pepper, and an olive on a skewer. This version swaps in smoked salmon for the anchovy, keeping the pepper-and-olive structure that gives the dish its name. Piparra pepper: a thin, mild, tangy green pickled pepper from the Basque Country — not spicy; its job is acidity and a little grassy heat, not fire.",
          note_es: "Un pintxo vasco clásico (bocadillo de bar de San Sebastián) — tradicionalmente una anchoa, un chile piparra y una aceituna en un palillo. Esta versión cambia la anchoa por salmón ahumado, conservando la estructura de chile y aceituna que le da al platillo su nombre. Chile piparra: un chile verde encurtido, delgado, suave y ácido, originario del País Vasco — no es picante; su función es dar acidez y un ligero toque herbal, no ardor." },
        { name: "Marinated Olives", price: "80", photo: "menu/marinated-olives.jpg", veg: true,
          en: "Kalamata, smoked Gordal and Manzanilla olives, citrus peel, house spice blend, EVOO.",
          es: "Aceitunas kalamata, gordal ahumada y manzanilla, piel de cítricos, mezcla de especias de la casa, aceite de oliva extra virgen.",
          allergens: [], veganSwap: false,
          note_en: "Three olive varieties doing different work — Kalamata (dark, brine-cured, fruity), Gordal (large, meaty, mild — this one smoked), and Manzanilla (smaller, brighter, slightly bitter-edged). EVOO (extra virgin olive oil) is the first, cold-pressed extraction from olives with no heat or solvents involved — the least-processed grade, which is why it's named rather than called just \"olive oil.\"",
          note_es: "Tres variedades de aceituna, cada una con su función — kalamata (oscura, curada en salmuera, afrutada), gordal (grande, carnosa, suave — esta ahumada) y manzanilla (más pequeña, más brillante, con un ligero toque amargo). El aceite de oliva extra virgen (AOEV) es la primera extracción en frío de las aceitunas, sin calor ni disolventes — el grado menos procesado, razón por la cual aparece con su nombre completo y no solo como \"aceite de oliva.\"" },
        { name: "Tsukemono", price: "70", photo: "menu/tsukemono.jpg", veg: true,
          en: "Japanese-style mixed pickles, made in-house.",
          es: "Encurtidos variados al estilo japonés, hechos en casa.",
          allergens: [], veganSwap: false,
          note_en: "Japan's umbrella term for pickled vegetables — dozens of regional styles exist, brined, salted, or fermented. Bonsai's is a house-made mixed pickle, same register as the menu's Western pickles but signaling the Japanese half of the concept.",
          note_es: "El término japonés general para verduras encurtidas — existen decenas de estilos regionales, en salmuera, sal o fermentados. La versión de Bonsai es un encurtido mixto hecho en casa, en el mismo registro que los encurtidos occidentales del menú, pero señalando la mitad japonesa del concepto." }
      ]
    },
    {
      group_en: "Sandwiches", group_es: "Sándwiches",
      lede_en: "The bagel is Eastern European in origin — the earliest documented reference is a Kraków community record from 1610, describing it as a gift given to women after childbirth. What makes a bagel a bagel, technically, is the order of operations: the dough is boiled briefly before it's baked, not just baked like ordinary bread. Boiling gelatinizes the starch on the surface, which is what gives a bagel its shiny crust and dense, chewy interior — skip that step and you've made a bread roll shaped like a bagel, not an actual one. Bagels arrived in New York with Eastern European Jewish immigrants in the late 1800s, and the city built an entire craft culture around them — for most of the 20th century, New York bagel bakers operated under a powerful union that controlled recipes and training city-wide. That New York lineage is exactly what the Abuelo Bagel below is drawing on directly.\n\nOne more thing worth knowing cold, because guests ask it constantly: what \"everything\" actually means. A real New York bagel shop stocks a dozen-plus varieties — poppy, sesame, garlic, onion, salt, and more — each baked separately. The \"everything\" bagel is what happens when the bakery takes a pinch of each of those individual toppings — poppy seed, sesame seed, dried garlic, dried onion, and coarse salt — and blends them into one seasoning, so a single bagel carries a bit of everything else in the case at once. It's a mash-up of a full topping lineup, not a topping in its own right. That context doesn't exist on this menu, since Bonsai only carries two options — plain or everything — so a guest who's never stood in a New York bagel shop has no way to know that. Tell them plainly: it's a blend of poppy seed, sesame seed, dried garlic, dried onion, and salt, baked onto the crust — savory, crunchy, a little sharp from the garlic and onion. If a guest wants something milder or plainer-tasting, plain is the one to steer them to.",
      lede_es: "El bagel es de origen originario de Europa del Este — la referencia documentada más antigua es un registro comunitario de Cracovia de 1610, que lo describe como un regalo dado a las mujeres después de dar a luz. Lo que técnicamente hace que un bagel sea un bagel es el orden de operaciones: la masa se hierve brevemente antes de hornearse, no solo se hornea como el pan común. Hervirla gelatiniza el almidón de la superficie, lo que le da al bagel su corteza brillante y su interior denso y masticable — saltarse ese paso da como resultado un pan con forma de bagel, no un bagel real. Los bagels llegaron a Nueva York con inmigrantes judíos de Europa del Este a finales del siglo XIX, y la ciudad construyó toda una cultura artesanal alrededor de ellos — durante la mayor parte del siglo XX, los panaderos de bagels de Nueva York operaban bajo un sindicato poderoso que controlaba las recetas y la capacitación en toda la ciudad. Esa herencia neoyorquina es precisamente en la que se basa directamente el Abuelo Bagel de abajo.\n\nUna cosa más que vale la pena saber de memoria, porque los clientes la preguntan constantemente: qué significa realmente \"everything\" (\"de todo\"). Una verdadera tienda de bagels en Nueva York tiene más de una docena de variedades — amapola, ajonjolí, ajo, cebolla, sal, y más — cada una horneada por separado. El bagel \"everything\" es lo que resulta cuando la panadería toma un poco de cada uno de esos aderezos individuales — semilla de amapola, ajonjolí, ajo deshidratado, cebolla deshidratada y sal gruesa — y los mezcla en un solo sazonador, de modo que un solo bagel lleva un poco de todos los demás de la vitrina a la vez. Es una combinación de toda una gama de aderezos, no un aderezo en sí mismo. Ese contexto no existe en este menú, ya que Bonsai solo ofrece dos opciones — natural o everything — así que un cliente que nunca ha estado en una tienda de bagels de Nueva York no tiene forma de saberlo. Explícaselo con claridad: es una mezcla de semilla de amapola, ajonjolí, ajo deshidratado, cebolla deshidratada y sal, horneada sobre la corteza — sabroso, crujiente, con un toque intenso de ajo y cebolla. Si un cliente busca algo más suave o de sabor más neutro, el natural es la opción a recomendar.",
      note_en: "Any sandwich can be made vegan — house-smoked beet in place of fish, cashew schmear in place of dairy.",
      note_es: "Cualquier sándwich puede prepararse vegano — betabel ahumado en casa en lugar de pescado, untable de nuez de la india en lugar de lácteos.",
      items: [
        { name: "Bagel & Schmear", price: "110", photo: "menu/bagel-schmear.jpg",
          en: "Plain or everything bagel. Choice of house schmear — smoked salmon, flecked with pieces of Bonsai Reserve; nori-sesame; or cashew (vegan).",
          es: "Bagel natural o “everything”. Elige tu untable de la casa — salmón ahumado, con trozos de Bonsai Reserve; alga nori-ajonjolí; o nuez de la india (vegano).",
          allergens: ["gluten","fish","dairy","sesame","treenut"], veganSwap: true,
          note_en: "Allergen list covers all schmear variants — a guest ordering the cashew schmear removes dairy but not gluten or sesame (everything bagel). Nori-sesame schmear uses nori (dried, pressed seaweed — the sheet sushi is wrapped in), ground into the cream cheese for a savory, faintly oceanic note that plays against smoked salmon rather than competing with it. The cashew schmear is the vegan option — cashews blended to a cream-cheese texture, dairy-free.",
          note_es: "La lista de alérgenos cubre todas las variantes de untable — un cliente que pide el untable de nuez de la india elimina lácteos, pero no gluten ni ajonjolí (bagel “everything”). El untable de nori-ajonjolí usa nori (alga seca y prensada — la lámina que envuelve el sushi), molida en el queso crema para una nota salada y ligeramente marina que acompaña al salmón ahumado en lugar de competir con él. El untable de nuez de la india es la opción vegana — nuez de la india licuada hasta obtener una textura de queso crema, sin lácteos." },
        { name: "Abuelo Bagel", price: "220", photo: "menu/abuelo-bagel.jpg",
          en: "Bagel, cold-smoked salmon or trout, nori-sesame cream cheese, tomato, red onion, capers, house pickle.",
          es: "Bagel, salmón o trucha ahumados en frío, queso crema de nori y ajonjolí, jitomate, cebolla morada, alcaparras, encurtidos de la casa.",
          allergens: ["gluten","fish","dairy","sesame"], veganSwap: false,
          note_en: "\"Abuelo\" is the chef's grandfather — he grew up in New York, and this is his order: lox, cream cheese, tomato, onion, capers, on a bagel. \"Lox\" is New York deli shorthand for smoked salmon — if a guest asks why this one has a name instead of just a list of ingredients, that's the story: it's chef Jair's own family order, filtered through Bonsai's own lens (nori-sesame schmear, cold-smoked trout as an option).",
          note_es: "\"Abuelo\" es el abuelo del chef — creció en Nueva York, y esta es su orden: lox, queso crema, jitomate, cebolla, alcaparras, en un bagel. \"Lox\" es el término neoyorquino de las delicatessen para el salmón ahumado — si un cliente pregunta por qué este platillo tiene nombre propio en lugar de solo una lista de ingredientes, esa es la historia: es la orden familiar del chef Jair, filtrada a través de la mirada de Bonsai (untable de nori-ajonjolí, trucha ahumada en frío como opción)." },
        { name: "Smoked Fish Toast", price: "150", photo: "menu/smoked-fish-toast.jpg",
          en: "Choice of sourdough, gluten-free, or protein bread. Cold-smoked salmon or trout, pickled mustard grains, radish, house pickles, pickled wax pepper.",
          es: "Elige pan de masa madre, sin gluten, o de proteína. Salmón o trucha ahumados en frío, mostaza en grano encurtida, rábano, encurtidos de la casa, chile güerito encurtido.",
          allergens: ["fish","mustard"], veganSwap: false,
          note_en: "The only savory item with a built-in gluten-free bread option — flag this to guests who ask before defaulting to “we don't have GF.” Protein bread is higher-protein, lower-carbohydrate (often made with added egg white, seed, or legume flour) — worth explaining rather than assuming a guest already knows. Pickled mustard grains: whole mustard seeds brined rather than ground into a paste, so they pop rather than spread — more texture and tang than heat. Pickled wax pepper (güerito): a pale-yellow, mild-to-medium chile, brined, not grown to be hot — named as a chile specifically so it isn't mistaken for a peppercorn.",
          note_es: "El único platillo salado con opción de pan sin gluten incorporada — menciónalo a los clientes que pregunten, antes de responder que no hay opción sin gluten. El pan de proteína tiene más proteína y menos carbohidratos (a menudo con clara de huevo, semillas o harina de leguminosas añadidas) — vale la pena explicarlo en lugar de asumir que el cliente ya lo sabe. Mostaza en grano encurtida: semillas de mostaza enteras en salmuera en lugar de molidas en pasta, para que estallen en boca en lugar de untarse — más textura y acidez que picor. Chile güerito encurtido: un chile amarillo pálido, de picor suave a medio, encurtido, no cultivado para ser picante — nombrado como chile específicamente para que no se confunda con una pimienta en grano." }
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
          allergens: ["dairy","gluten","mustard"], veganSwap: false,
          note_en: "Burrata is a fresh Italian cheese — a mozzarella shell around a soft, creamy interior of shredded curd and cream (\"burro,\" butter, is the root of the name). Bonsai's is made in Valladolid, Yucatán — a local dairy producer, not imported from Puglia, the Italian region burrata traditionally comes from. Pickled mustard grains: whole mustard seeds brined rather than ground — see Smoked Fish Toast for the full note.",
          note_es: "La burrata es un queso italiano fresco — una envoltura de mozzarella alrededor de un interior suave y cremoso de cuajada deshebrada y crema (\"burro\" — mantequilla — es la raíz del nombre). La de Bonsai se elabora en Valladolid, Yucatán — un productor lácteo local, no importada de Puglia, la región italiana de donde tradicionalmente proviene la burrata. Mostaza en grano encurtida: semillas de mostaza enteras en salmuera en lugar de molidas — ver Smoked Fish Toast para la nota completa." }
      ]
    },
    {
      group_en: "Sweet", group_es: "Dulce", lede_en: "", lede_es: "",
      items: [
        { name: "Matcha Chia Pudding", price: "95", photo: "menu/matcha-chia-pudding.jpg",
          en: "Overnight chia, coconut milk, heritage matcha, yogurt, fresh fruit.",
          es: "Chía reposada toda la noche, leche de coco, matcha de origen, yoghurt griego, fruta fresca.",
          allergens: ["dairy"], veganSwap: false,
          note_en: "Same Kokoro, first-harvest, Shizuoka matcha used in the tea program — see the Beverage Guide's Tea section for the full explanation of what makes it matcha rather than just green tea powder.",
          note_es: "El mismo matcha Kokoro, primera cosecha, Shizuoka que se usa en el programa de té — ver la sección de Té en la Guía de Bebidas para la explicación completa de qué lo hace matcha y no solo té verde en polvo." },
        { name: "Black Sesame Cookie", price: "60", photo: "menu/black-sesame-cookie.jpg",
          en: "Black sesame, sea salt flakes.",
          es: "Ajonjolí negro, flor de sal.",
          allergens: ["sesame","gluten","egg","dairy"], veganSwap: false,
          note_en: "Confirmed recipe: flour, egg, and butter, with black sesame seeds and sea salt flakes — a standard shortbread-style base, not a special or altered recipe. Allergen list updated to include dairy (butter) alongside gluten, egg, and sesame.",
          note_es: "Receta confirmada: harina, huevo y mantequilla, con ajonjolí negro y flor de sal — una base tipo shortbread estándar, sin alteraciones. La lista de alérgenos se actualizó para incluir lácteos (mantequilla) junto con gluten, huevo y ajonjolí." }
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
          es: "Primera cosecha, Shizuoka — molido en piedra, de cuerpo pleno, naturalmente dulce.",
          note_en: "Highest caffeine of anything on this menu. Shade-grown for 2–4 weeks before harvest — that's what makes it matcha rather than powdered green tea, forcing more chlorophyll and the amino acid L-theanine into the leaf, which is where the sweetness and lack of bitterness come from. Steamed, dried into sheets (tencha), de-stemmed, then stone-ground. \"First harvest\" (ichibancha) is the earliest, most prized picking of the year. Sourced from Kokoro, a supplier based in Shizuoka — one of Japan's oldest tea-growing regions. Whole leaf is consumed, not steeped and discarded — which is also why the caffeine carries through so strongly.",
          note_es: "La cafeína más alta de todo el menú. Cultivado a la sombra durante 2 a 4 semanas antes de la cosecha — eso es lo que lo convierte en matcha y no solo en té verde en polvo, forzando a la planta a producir más clorofila y más del aminoácido L-teanina, de donde viene el dulzor y la falta de amargor. Cocido al vapor, secado en láminas (tencha), sin tallo, y luego molido en piedra. \"Primera cosecha\" (ichibancha) es la recolección más temprana y apreciada del año. Proviene de Kokoro, un proveedor con sede en Shizuoka — una de las regiones productoras de té más antiguas de Japón. Se consume la hoja entera, no se remoja y se desecha — razón por la cual la cafeína se transmite con tanta fuerza." },
        { name: "Matcha Latte", hot: "90", iced: "95", photo: "menu/matcha-latte.jpg",
          en: "First harvest, Shizuoka, smoothed with steamed milk.",
          es: "Primera cosecha, Shizuoka, suavizado con leche vaporizada.",
          note_en: "Same Kokoro, first-harvest, Shizuoka matcha as above, with steamed milk — see Matcha for the full explanation.",
          note_es: "El mismo matcha Kokoro, primera cosecha, Shizuoka de arriba, con leche vaporizada — ver Matcha para la explicación completa." },
        { name: "Hojicha", hot: "70", iced: "75", photo: "menu/hojicha.jpg",
          en: "Roasted green tea — toasty, nutty, naturally low in caffeine.",
          es: "Té verde tostado — notas tostadas y de nuez, naturalmente bajo en cafeína.",
          note_en: "Low caffeine — third of four. Starts as the same leaf as sencha, roasted at high heat afterward — a Maillard reaction, the same browning chemistry as toasting bread. That roast converts the leaf's grassy notes into toasty, nutty, caramel ones, and breaks down most of the caffeine. Visual tell: brewed hojicha is reddish-brown, not green — worth a heads-up if a guest expects \"green tea\" to look green.",
          note_es: "Cafeína baja — tercero de los cuatro. Comienza como la misma hoja que el sencha, tostada a alto calor después — una reacción de Maillard, la misma química de dorado que al tostar pan. Ese tostado convierte las notas herbales de la hoja en algo tostado, con notas de nuez y caramelo, y descompone la mayor parte de la cafeína. Dato visual: el hojicha preparado es de color café rojizo, no verde — vale la pena avisar si el cliente espera que un \"té verde\" se vea verde." },
        { name: "Hojicha Latte", hot: "80", iced: "85", photo: "menu/hojicha-latte.jpg",
          en: "Roasted green tea, toasted-caramel warmth with steamed milk.",
          es: "Té verde tostado, calidez de caramelo tostado con leche vaporizada.",
          note_en: "Same hojicha as above, with steamed milk — see Hojicha for the full explanation.",
          note_es: "El mismo hojicha de arriba, con leche vaporizada — ver Hojicha para la explicación completa." },
        { name: "Sencha", hot: "30", iced: "35", photo: "menu/sencha.jpg",
          en: "Japanese green tea, brewed at 80°C — light, grassy, clean umami finish.",
          es: "Té verde japonés, preparado a 80°C — ligero, herbal, con final umami limpio.",
          note_en: "Second-highest caffeine of the four. Grown in full sun (unlike matcha, which is shaded), then steamed rather than pan-fired shortly after picking — the main thing separating Japanese green teas from Chinese ones, locking in a bright, grassy, umami-forward flavor. Brewed at 80°C, below boiling — full boiling water pulls out excess tannins and turns the cup bitter and astringent, the most common way to ruin a cup of sencha on the floor.",
          note_es: "La segunda cafeína más alta de los cuatro. Cultivado a pleno sol (a diferencia del matcha, que se cultiva a la sombra), y luego cocido al vapor en lugar de tostado en sartén poco después de cortarse — la principal diferencia entre los tés verdes japoneses y los chinos, que fija un sabor brillante, herbal y con marcado umami. Se prepara a 80°C, por debajo del hervor — el agua hirviendo extrae taninos de más y vuelve la taza amarga y astringente, la forma más común de arruinar una taza de sencha en el mostrador." },
        { name: "Mugicha", hot: "—", iced: "30", photo: "menu/mugicha.jpg",
          en: "Toasted barley, cold brew — nutty, naturally caffeine-free.",
          es: "Cebada tostada, preparado en frío — con notas de nuez, naturalmente sin cafeína.",
          note_en: "No caffeine — it isn't tea. Roasted barley grains, cold-brewed — no tea leaf at all, since it doesn't come from the tea plant (Camellia sinensis) in the first place. The one item on the tea list safe to recommend without a caffeine question. A summer staple across Japan; the menu's own note calls it \"Japan's answer to a hot afternoon,\" which Tulum has no shortage of.",
          note_es: "Sin cafeína — no es té. Granos de cebada tostada, preparados en frío — no lleva hoja de té, ya que no proviene de la planta del té (Camellia sinensis). El único té de la carta que se puede recomendar sin preguntar por la cafeína. Un clásico del verano en todo Japón; el propio menú lo describe como \"la respuesta japonesa a una tarde calurosa,\" de las que no faltan en Tulum." }
      ]
    },
    {
      group_en: "Coffee", group_es: "Café",
      lede_en: "Locally roasted Arabica, Veracruz — one of Mexico's oldest coffee-growing states, with a coffee tradition dating back over 200 years, concentrated in highland areas where altitude and cloud cover suit Arabica (a more delicate, higher-altitude species than the hardier, more bitter Robusta). \"Locally roasted\" means roasted close to point of service rather than shipped pre-roasted from abroad.",
      lede_es: "Arábica de tueste local, Veracruz — uno de los estados productores de café más antiguos de México, con una tradición cafetalera de más de 200 años, concentrada en zonas de altura donde la altitud y la nubosidad favorecen al arábica (una especie más delicada y de mayor altitud que la más resistente y amarga robusta). \"Tueste local\" significa que se tuesta cerca del punto de servicio, en lugar de llegar pre-tostado desde el extranjero.",
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
        { name: "Bonsai Still Water", price: "30", en: "Puebla Springs", es: "",
          note_en: "Puebla Springs is a named source, not an unbranded bottle — which is why it appears on the menu with that name rather than just \"water.\" Worth knowing if a guest asks what they're being served.",
          note_es: "Puebla Springs es una fuente con nombre, no una botella sin marca — por eso aparece en el menú con ese nombre en lugar de solo \"agua.\" Vale la pena saberlo si un cliente pregunta qué se le está sirviendo." },
        { name: "Bonsai Sparkling Water", price: "40", en: "Puebla Springs", es: "",
          note_en: "Same named source as Bonsai Still Water — see that entry above.",
          note_es: "La misma fuente con nombre que el agua natural Bonsai — ver esa entrada arriba." },
        { name: "Pickle Shot", price: "10", en: "House pickle brine.", es: "Shot de Encurtido — salmuera de encurtido de la casa.",
          note_en: "Same brine as the Tsukemono and the sandwich pickles — the working liquid from the same house pickle batch, not a separate product. Vinegar and salt brines like this are a favorite for gut health and rehydration, and carry an old reputation as a hangover fix — a good, low-stakes line to offer a guest trying it for the first time.",
          note_es: "La misma salmuera que el Tsukemono y los encurtidos de los sándwiches — el líquido de trabajo del mismo lote de encurtidos de la casa, no un producto aparte. Las salmueras de vinagre y sal como esta son populares para la salud digestiva y la rehidratación, y tienen fama de remedio para la cruda — una buena línea, sin presión, para ofrecerle a un cliente que lo prueba por primera vez." },
        { name: "Pickle Spritz", price: "50", photo: "menu/pickle-spritz.jpg", en: "House pickle brine, soda water.", es: "Spritz de Encurtido — salmuera de encurtido de la casa, agua con gas.",
          note_en: "Same brine as the Pickle Shot, lengthened with soda water — see that entry above for the gut-health and hangover-cure reputation worth mentioning to a curious guest.",
          note_es: "La misma salmuera que el Pickle Shot, alargada con agua con gas — ver esa entrada arriba para la fama de beneficio digestivo y remedio para la cruda, buena de mencionar a un cliente curioso." }
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
    caffeineRank_en: "Caffeine, highest to lowest: Matcha → Sencha → Hojicha → Mugicha (none — it isn't tea).",
    caffeineRank_es: "Cafeína, de mayor a menor: Matcha → Sencha → Hojicha → Mugicha (ninguna — no es té).",
    tip_en: "Two questions come up constantly — have the one-line answer ready. \"What's the difference between sencha and hojicha?\" Same leaf, different roast. \"Is hojicha green tea?\" Botanically yes — but it's roasted after processing, so it neither looks nor tastes like one; that distinction is worth more to a guest than the botanical answer.",
    tip_es: "Dos preguntas surgen constantemente — ten lista la respuesta en una línea. \"¿Cuál es la diferencia entre el sencha y el hojicha?\" La misma hoja, distinto tostado. \"¿El hojicha es té verde?\" Botánicamente sí — pero se tuesta después de procesarse, así que no se ve ni sabe como uno; esa distinción vale más para el cliente que la respuesta botánica."
  },

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
      en: "Every plate that leaves this counter with cured, cold-smoked salmon or trout — the Smokehouse cuts, the smoked fish platter, the sandwiches and toasts built on them — runs on time and temperature, not judgment. Use dedicated boards and utensils for raw fish, kept separate from bagel, salad, and dry-goods prep, at all times. A \"raw-grade\" claim about a fish is not a legal or regulated term anywhere — they're a supplier's claim about handling (flash-frozen to kill parasites, or handled with a cold chain tight enough to serve raw with confidence), not a government-certified category. Bonsai's own cold-chain and time/temp discipline below is what actually backs that standard in-house.",
      es: "Cada plato que sale de este mostrador con salmón o trucha curados y ahumados en frío — los cortes de El Ahumadero, el smoked fish platter, los sándwiches y toasts hechos con ellos — se rige por tiempo y temperatura, no por criterio personal. Usa tablas y utensilios exclusivos para pescado crudo, separados en todo momento de la preparación de bagels, ensaladas y productos secos. Una afirmación de \"grado crudo\" sobre un pescado no es un término legal ni regulado en ningún lugar — es una afirmación del proveedor sobre el manejo (congelado rápidamente para eliminar parásitos, o manejado con una cadena de frío lo suficientemente estricta para servirse crudo con confianza), no una categoría certificada por el gobierno. La disciplina de cadena de frío y tiempo/temperatura de Bonsai que sigue es lo que realmente respalda ese estándar puertas adentro.",
      pending_en: "Exact hold-time and discard-window thresholds are being finalized by the kitchen against real service data and will replace this line once signed off. Do not improvise a number in the meantime — ask a manager.",
      pending_es: "Los límites exactos de tiempo de espera y las ventanas de descarte están siendo definidos por cocina con datos reales de servicio y sustituirán esta línea una vez aprobados. No improvises una cifra mientras tanto — pregunta a un gerente." },
    { en_t: "Cold-Chain Power-Failure Protocol", es_t: "Protocolo de Falla Eléctrica en la Cadena de Frío",
      en: "Tulum sits in hurricane season. A freezer full of bagels alongside raw-grade fish and cold-smoked salmon means one outage without a plan is a solvency event, not an inconvenience.",
      es: "Tulum está en temporada de huracanes. Un congelador lleno de bagels junto con pescado grado crudo y salmón ahumado en frío significa que un solo apagón sin plan es un evento que pone en riesgo el negocio, no solo una molestia.",
      pending_en: "Maximum hold time before mandatory discard, who checks temperatures and when, the backup-power or ice option, and the escalation contact are pending final sign-off — confirm the current version with a manager before relying on it.",
      pending_es: "El tiempo máximo de espera antes del descarte obligatorio, quién revisa las temperaturas y cuándo, la opción de energía de respaldo o hielo, y el contacto de escalamiento están pendientes de aprobación final — confirma la versión vigente con un gerente antes de usarla como referencia." },
    { en_t: "Opening & Closing Checklists", es_t: "Listas de Apertura y Cierre",
      en: "Station by station — cold case, coffee/tea bar, espresso machine, POS terminal, dining/terrace. Fridge and freezer temperatures are checked and logged before the first order of the day, and again at close, alongside the cash drop and a walk-through of what's frozen, discarded, or held for the next open.",
      es: "Estación por estación — vitrina fría, barra de café/té, máquina de espresso, terminal de POS, comedor/terraza. Las temperaturas del refrigerador y congelador se revisan y registran antes de la primera orden del día, y de nuevo al cierre, junto con el corte de caja y un recorrido de lo que se congela, se descarta o se guarda para la siguiente apertura." },
    { en_t: "Hygiene & Glove Protocol", es_t: "Protocolo de Higiene y Guantes",
      en: "Wash hands on the frequency set by your manager, and change gloves between handling raw fish and anything else — every time, no exceptions. Staff do not work with raw fish while symptomatic of illness.",
      es: "Lávate las manos con la frecuencia que indique tu gerente, y cambia de guantes entre el manejo de pescado crudo y cualquier otra cosa — siempre, sin excepciones. El personal no trabaja con pescado crudo si presenta síntomas de enfermedad." },
    { en_t: "FIFO Stock Rotation", es_t: "Rotación de Inventario FIFO",
      en: "Date everything on receipt. Raw-grade fish has the shortest shelf life in the building; dry goods the longest. Physically place older stock in front so it's used first — first in, first out, every time, no exceptions for what's \"probably still fine.\"",
      es: "Fecha todo al recibirlo. El pescado grado crudo tiene la vida útil más corta de todo el local; los productos secos, la más larga. Coloca físicamente el inventario más antiguo al frente para que se use primero — primero en entrar, primero en salir, siempre, sin excepciones por lo que \"probablemente todavía esté bien.\"" },
    { en_t: "Allergen & Ingredient Disclosure", es_t: "Aviso de Alérgenos e Ingredientes",
      en: "This is a Japanese-forward, raw-fish-forward menu — fish, shellfish, gluten, dairy, egg, soy, tree nuts, sesame, and mustard all appear somewhere on it. See Allergens & Dietary for the full matrix and the exact script for what to say when a guest asks.",
      es: "Este es un menú con enfoque japonés y de pescado crudo — pescado, mariscos, gluten, lácteos, huevo, soya, frutos secos, ajonjolí y mostaza aparecen en algún lugar del menú. Ver Alérgenos y Dietas para la matriz completa y el guion exacto de qué decir cuando un cliente pregunte." },
    { en_t: "Delivery-Scope Boundary", es_t: "Límite de Alcance para Entregas/Para Llevar",
      en: "Bagel & Schmear, Abuelo Bagel, Smoked Fish Toast (wrapped and halved), Gildas, Marinated Olives, and the Smoked Fish Platter (bento format) can leave the building.",
      es: "Bagel & Schmear, Abuelo Bagel, Smoked Fish Toast (envuelto y cortado a la mitad), Gildas, Marinated Olives y el Smoked Fish Platter (en formato bento) pueden salir del local." }
  ],

  // -----------------------------------------------------------------------
  // SERVICE STANDARDS
  // -----------------------------------------------------------------------
  service: [
    { en_t: "Greet Every Guest", es_t: "Saluda a Cada Cliente",
      en: "This is counter service, not table service — the greeting is the whole first impression, delivered in one interaction, not built up over a seated visit. Make it count: warm, direct, unhurried even when the line isn't.",
      es: "Este es servicio de mostrador, no de mesa — el saludo es toda la primera impresión, entregada en una sola interacción, no construida a lo largo de una visita sentada. Que cuente: cálido, directo, sin prisas aunque la fila sí la tenga." },
    { en_t: "Tell the Cold-Smoking Story", es_t: "Cuenta la Historia del Ahumado en Frío",
      en: "Guests are meeting a Japanese-forward, raw-fish-forward beverage and food program in Tulum — most haven't seen this combination before. A short, confident explanation of what cold-smoking is and why the fish is sliced, not cooked, does more work than a long one.",
      es: "Los clientes están conociendo un programa de comida y bebida con enfoque japonés y de pescado crudo, en Tulum — la mayoría no ha visto antes esta combinación. Una explicación breve y segura de qué es el ahumado en frío y por qué el pescado se corta y no se cocina, funciona mejor que una larga." },
    { en_t: "Offer the Swap, Don't Wait to Be Asked", es_t: "Ofrece la Sustitución, No Esperes a que Pregunten",
      en: "Vegan and gluten-free options exist on this menu (house-smoked beet, cashew schmear, gluten-free bread). Offer them proactively to a guest who signals a dietary need, rather than waiting for them to ask what's possible.",
      es: "Existen opciones veganas y sin gluten en este menú (betabel ahumado en casa, untable de nuez de la india, pan sin gluten). Ofrécelas de forma proactiva a un cliente que señale una necesidad alimentaria, en lugar de esperar a que pregunte qué es posible." },
    { en_t: "Value Framing, Not Process Framing", es_t: "Enmarca el Valor, No el Proceso",
      en: "When describing an ingredient's origin, tell guests what it is, not where it came from in the kitchen. \"Flecked with pieces of Bonsai Reserve\" is an upsell; \"cured from slicing trim\" sounds like an apology for the same thing. Same fact, told the right way.",
      es: "Al describir el origen de un ingrediente, dile al cliente qué es, no de dónde vino en la cocina. \"Con trozos de Bonsai Reserve\" es una forma de destacar valor; \"curado de los recortes del corte\" suena a disculpa por lo mismo. El mismo hecho, contado de la manera correcta." },
    { en_t: "Know the Delivery-Scope Boundary", es_t: "Conoce el Límite de Alcance para Entregas",
      en: "Before confirming a take-away or delivery order, check it against the Delivery-Scope Boundary in Food Safety — not every item on the menu is built to travel.",
      es: "Antes de confirmar una orden para llevar o a domicilio, verifícala contra el Límite de Alcance para Entregas en Seguridad Alimentaria — no todos los platillos del menú están hechos para viajar." },
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
        { name: "Balik Cut Smoked Salmon", en: "The premium upper-center loin of the salmon, trimmed of belly fat and bloodline — the single best-marbled, most consistent section of the fish. \"Balik\" is a Turkish/Russian smoked-salmon term for exactly this cut. Potential bestseller once launched.", es: "El lomo superior central del salmón, recortado de la grasa de la ventresca y la línea de sangre — la sección con el marmoleo más rico y consistente. \"Balik\" es un término turco/ruso para el salmón ahumado que designa precisamente este corte. Posible más vendido una vez lanzado." },
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
      items: [{ name: "Caviar de Monte", en: "Sourced and resold, not produced in-house — worth knowing if a guest asks whether Bonsai cures its own caviar (it doesn't; the smokehouse craft is the fish, not the roe).", es: "Se compra y se revende, no se produce en casa — vale la pena saberlo si un cliente pregunta si Bonsai cura su propio caviar (no lo hace; el oficio del ahumadero es el pescado, no la hueva)." }]
    },
    { group_en: "Condiments & Toppings", group_es: "Condimentos y Toppings",
      items: [{ name: "Salmon Furikake", en: "A dry Japanese seasoning blend — classically sesame, seaweed, and dried fish flakes — scattered over rice. This retail-case version is built around salmon, a condiment for guests to take home.", es: "Una mezcla seca de condimentos japoneses — clásicamente ajonjolí, alga y hojuelas de pescado seco — que se espolvorea sobre el arroz. Esta versión de la vitrina está hecha a base de salmón, un condimento para llevar a casa." }]
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
