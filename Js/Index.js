function mostrar(id) {
  document.querySelectorAll('.info').forEach(div => {
    div.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}
window.onload = function () {
  mostrar('info1'); // el que quieras mostrar por defecto
};

// ===============================
// RESPUESTAS NORMALES (EDITABLE)
// ===============================
// ===============================
// RESPUESTAS CON OPCIONES VISIBLES
// ===============================
const respuestas = {
    ubicacion: {
        text: "📍 Ubicación",
        keywords: ["ubicacion","dirección","direccion","donde","encuentran"],
        reply: "📍 Nos encontramos en Villa Victoria, Jesús María, a la altura conocida como desviación a un costado de OxxoGas."
    },
    horario: {
        text: "🕒 Horario",
        keywords: ["horario","hora","abren","cierran"],
        reply: "🕒 Nuestro horario es de lunes a sábado de 9:00 a.m. a 6:00 p.m."
    },
    cotizar: {
        text: "💲 Cotizar",
        keywords: ["cotizar","precio","costo","cuanto"],
        reply: "💲 Indícame marca, modelo, año y la pieza que necesitas."
    },
    envio: {
        text: "🚚 Envíos",
        keywords: ["envio","envíos","mandan","envian"],
        reply: "🚚 Realizamos envíos locales superiores a 10k."
    },
    garantia: {
        text: "🛡️ Garantía",
        keywords: ["garantia","garantía"],
        reply: "🛡️ Todos nuestros productos cuentan con garantía."
    },
    saludo: {
        text: "👋 Hola",
        keywords: ["hola","buenas","buen día","buen dia","buenas tardes","buenas noches"],
        reply: "👋 ¡Hola! Bienvenido a Porsche Autopartes. ¿En qué puedo ayudarte hoy?"
    }
};

// ===============================
// RESPUESTAS OCULTAS (SIN BOTONES)
// ===============================
const respuestasOcultas = {
    facturacion: {
        keywords: ["factura","facturacion","cfdi"],
        reply: "🧾 Para facturación envíanos tus datos fiscales por WhatsApp."
    },
    pagos: {
        keywords: ["pago","pagos","transferencia","tarjeta"],
        reply: "💳 Aceptamos efectivo, transferencia y pago con tarjeta."
    },
    devoluciones: {
        keywords: ["devolucion","devolver","cambio"],
        reply: "🔄 Las devoluciones aplican dentro de los primeros 7 días con ticket."
    },
    mayoreo: {
        keywords: ["mayoreo","precio especial","volumen"],
        reply: "📦 Contamos con precios especiales para compras de mayoreo."
    },

    // 🔧 PRODUCTOS
    p1: { keywords:["tienen esta pieza","manejan esta pieza","venden esta pieza"], reply:"🔧 Manejamos una gran variedad de autopartes. Indícanos marca, modelo y año." },
    p2: { keywords:["es original","pieza original","original o genérica"], reply:"✔️ Contamos con piezas originales y de excelente calidad." },
    p3: { keywords:["nueva o usada","pieza usada"], reply:"🆕 Todas nuestras piezas son nuevas." },
    p4: { keywords:["refaccion","refacción","autoparte"], reply:"🔩 Contamos con refacciones mecánicas, eléctricas y de colisión." },
    p5: { keywords:["compatibilidad","le queda","es compatible"], reply:"📋 Verificamos compatibilidad con marca, modelo y año, comunicate al +52 720 289 2758." },

    // 🚗 VEHÍCULOS
    p6: { keywords:["qué marcas manejan","marcas de autos"], reply:"🚗 Contamos con un amplio catalogo de refacciones." },
    p7: { keywords:["autos europeos","autos americanos"], reply:"🌍 Dependiendo del vehiculo." },
    p8: { keywords:["modelo antiguo","carro viejo"], reply:"🕰️ Pregunta por disponibilidad para modelos pasados." },
    p9: { keywords:["modelo reciente","carro nuevo"], reply:"🚘 También contamos con piezas para modelos recientes." },
    p10:{ keywords:["diesel","gasolina"], reply:"⛽ Manejamos piezas para motores diésel y gasolina." },

    // 💲 PRECIOS
    p11:{ keywords:["precio final","precio incluye iva"], reply:"💲 Todos nuestros precios ya incluyen IVA." },
    p12:{ keywords:["mejor precio","más barato"], reply:"💲 Ofrecemos precios competitivos y calidad garantizada." },
    p13:{ keywords:["descuento","rebaja"], reply:"🏷️ Pregunta por descuentos especiales o promociones." },
    p14:{ keywords:["precio mayoreo","precio por volumen"], reply:"📦 Contamos con precios especiales en compras de mayoreo." },
    p15:{ keywords:["cotizacion","cotización"], reply:"📝 Para cotizar envíanos marca, modelo, año y pieza." },

    // 🚚 ENVÍOS
    p16:{ keywords:["hacen envios","envios foraneos"], reply:"🚚 Realizamos solo envíos locales." },
    p17:{ keywords:["tiempo de envio","cuanto tarda"], reply:"⏱️ El tiempo de entrega depende del destino." },
    p18:{ keywords:["paqueteria","por que paqueteria"], reply:"📦 No manejamos encios de paqueteria" },
    p19:{ keywords:["costo de envio","envio cuesta"], reply:"💸 El costo de envío se cotiza según destino." },
    p20:{ keywords:["recoger en tienda","pasar por la pieza"], reply:"🏪 Puedes recoger tu pedido en tienda." },

    // 🕒 HORARIOS
    p21:{ keywords:["abren hoy","abren domingo"], reply:"🕒 Nuestro horario es de lunes a sábado." },
    p22:{ keywords:["cierran temprano","hora cierre"], reply:"🕒 Cerramos a las 6:00 p.m." },
    p23:{ keywords:["horario sabado","sabado horario"], reply:"🕒 Los sábados abrimos en horario normal." },
    p24:{ keywords:["dias festivos","festivos"], reply:"📅 En días festivos el horario puede variar." },
    p25:{ keywords:["horario actualizado"], reply:"🕒 Pregunta por nuestro horario actualizado." },

    // 🧾 FACTURACIÓN
    p26:{ keywords:["factura","facturacion","cfdi"], reply:"🧾 Para facturar envíanos tus datos fiscales." },
    p27:{ keywords:["cuando facturan","tiempo factura"], reply:"🕐 La factura se genera el mismo día." },
    p28:{ keywords:["factura despues","factura dias despues"], reply:"🧾 La factura debe solicitarse el mismo día." },
    p29:{ keywords:["datos fiscales","rfc"], reply:"📄 Necesitamos RFC, uso CFDI y correo." },
    p30:{ keywords:["factura envio"], reply:"🧾 La factura se envía por correo." },

    // 💳 PAGOS
    p31:{ keywords:["formas de pago","como pagar"], reply:"💳 Aceptamos efectivo, transferencia y tarjeta." },
    p32:{ keywords:["tarjeta credito","tarjeta debito"], reply:"💳 Aceptamos tarjetas de crédito y débito." },
    p33:{ keywords:["transferencia bancaria","spei"], reply:"🏦 Aceptamos transferencias SPEI." },
    p34:{ keywords:["pago anticipo","anticipo"], reply:"💰 En algunos pedidos se solicita anticipo." },
    p35:{ keywords:["meses sin intereses","msi"], reply:"💳 Pregunta por promociones bancarias." },

    // 🔄 GARANTÍA
    p36:{ keywords:["garantia","garantía"], reply:"🛡️ Todos nuestros productos cuentan con garantía." },
    p37:{ keywords:["tiempo garantia","cuantos meses"], reply:"🕒 La garantía depende del producto." },
    p38:{ keywords:["aplica garantia","como aplicar"], reply:"📄 La garantía aplica con ticket o factura." },
    p39:{ keywords:["garantia instalada","instalacion"], reply:"🔧 La pieza debe instalarse correctamente." },
    p40:{ keywords:["garantia electrica"], reply:"⚡ Las piezas eléctricas tienen condiciones especiales." },

    // 🔄 DEVOLUCIONES
    p41:{ keywords:["devolucion","devolver"], reply:"🔄 Aceptamos devoluciones dentro de 7 días." },
    p42:{ keywords:["cambio pieza","cambiar pieza"], reply:"🔁 Los cambios están sujetos a revisión." },
    p43:{ keywords:["pieza mal","defecto"], reply:"🛠️ Revisamos cualquier defecto de fábrica." },
    p44:{ keywords:["ticket devolucion","comprobante"], reply:"🧾 Se requiere ticket o factura." },
    p45:{ keywords:["pieza instalada","ya instalada"], reply:"⚠️ Las piezas instaladas no aplican cambio." },

    // 🧰 INSTALACIÓN
    p46:{ keywords:["instalan","instalacion"], reply:"🔧 Depende del producto." },
    p47:{ keywords:["recomiendan mecanico","mecanico"], reply:"👨‍🔧 Podemos recomendar talleres." },
    p48:{ keywords:["manual instalacion","instrucciones"], reply:"📘 Algunas piezas incluyen instrucciones." },
    p49:{ keywords:["requiere programacion","programar"], reply:"💻 Algunas piezas requieren programación." },
    p50:{ keywords:["pieza electrica"], reply:"⚡ Recomendamos instalación profesional." },

    // 🏪 TIENDA
    p51:{ keywords:["sucursal","otra sucursal"], reply:"🏪 Actualmente contamos con esta sucursal y dos mas." },
    p52:{ keywords:["estacionamiento","parking"], reply:"🚗 Contamos con espacio para estacionarse." },
    p53:{ keywords:["atencion mostrador","mostrador"], reply:"👥 Te atendemos directamente en mostrador." },
    p54:{ keywords:["tienda fisica","local"], reply:"🏪 Contamos con tienda física." },
    p55:{ keywords:["mapa","google maps"], reply:"📍 Podemos enviarte la ubicación por Google Maps." },

    // 📦 DISPONIBILIDAD
    p56:{ keywords:["en existencia","hay stock"], reply:"📦 Confirma disponibilidad con tu vehículo." },
    p57:{ keywords:["pedido especial","sobre pedido"], reply:"📦 Algunas piezas son sobre pedido." },
    p58:{ keywords:["tiempo pedido","pedido tarda"], reply:"⏱️ El tiempo depende del proveedor." },
    p59:{ keywords:["apartado","apartar pieza"], reply:"📌 Podemos apartar tu pieza, se debe dejar anticipo." },
    p60:{ keywords:["ultima pieza","última"], reply:"⚠️ Confirma disponibilidad inmediata." },

    // 🔒 SEGURIDAD
    p61:{ keywords:["es seguro comprar","seguridad"], reply:"🔒 Compra segura y respaldo de garantía." },
    p62:{ keywords:["datos personales","privacidad"], reply:"🔐 Tus datos están protegidos." },
    p63:{ keywords:["estafa","fraude"], reply:"✔️ Somos un negocio establecido." },
    p64:{ keywords:["comprobante pago","recibo"], reply:"🧾 Siempre entregamos comprobante." },
    p65:{ keywords:["empresa legal","negocio formal"], reply:"🏢 Somos empresa formalmente establecida." },

    // 📞 CONTACTO
    p66:{ keywords:["telefono","numero"], reply:"📞 Puedes contactarnos directamente por WhatsApp al 52+ 720 289 2758." },
    p67:{ keywords:["whatsapp","mensaje"], reply:"💬 Atendemos por WhatsApp." },
    p68:{ keywords:["correo","email"], reply:"📧 Contamos con correo de contacto." },
    p69:{ keywords:["redes sociales","facebook"], reply:"📱 Síguenos en redes sociales Porsche Autopartes." },
    p70:{ keywords:["atencion cliente","soporte"], reply:"🤝 Estamos para atenderte." },

    // 🧠 OTROS
    p71:{ keywords:["recomendacion","recomienda"], reply:"⭐ Te ayudamos a elegir la mejor opción." },
    p72:{ keywords:["equivalente","alternativa"], reply:"🔁 Podemos ofrecerte una alternativa." },
    p73:{ keywords:["calidad","es buena"], reply:"✔️ Trabajamos con marcas de calidad y precio del mercado." },
    p74:{ keywords:["me conviene","mejor opcion"], reply:"🤔 Te asesoramos según tu necesidad." },
    p75:{ keywords:["rapido","urgente"], reply:"⚡ Buscamos la opción más rápida." },

    // 🚨 SERVICIO
    p76:{ keywords:["queja","reclamo"], reply:"📢 Queremos ayudarte, cuéntanos el problema." },
    p77:{ keywords:["problema compra","error"], reply:"🛠️ Revisamos cualquier inconveniente." },
    p78:{ keywords:["mal servicio","atencion"], reply:"🤝 Buscamos mejorar siempre." },
    p79:{ keywords:["sugerencia","opinion"], reply:"💡 Gracias por tu sugerencia." },
    p80:{ keywords:["felicitaciones","gracias"], reply:"🙏 Gracias por confiar en nosotros." },

    // 🚗 COMPATIBILIDAD
    p81:{ keywords:["motor","version motor"], reply:"🔧 Solo contamos con algunas piezas del motor." },
    p82:{ keywords:["transmision","manual automatico"], reply:"⚙️ Indícanos tipo de transmisión." },
    p83:{ keywords:["vin","numero serie"], reply:"🔢 Con el VIN verificamos compatibilidad." },
    p84:{ keywords:["4x4","awd"], reply:"🚙 Indica si es 4x4." },
    p85:{ keywords:["sedan","hatchback"], reply:"🚘 Indica el tipo de carrocería." },

    // 📅 PEDIDOS
    p86:{ keywords:["pedido listo","cuando llega"], reply:"📅 Te avisamos cuando llegue." },
    p87:{ keywords:["confirmar pedido","pedido confirmado"], reply:"✔️ Te confirmamos tu pedido." },
    p88:{ keywords:["cancelar pedido","cancelacion"], reply:"❌ Las cancelaciones están sujetas a condiciones." },
    p89:{ keywords:["seguimiento pedido","rastreo"], reply:"📦 Te damos seguimiento." },
    p90:{ keywords:["pedido retrasado","retraso"], reply:"⏳ Te informamos cualquier retraso." },

    // ⭐ EXTRAS
    p91:{ keywords:["recomiendan","opinion clientes"], reply:"⭐ Nuestros clientes nos recomiendan." },
    p92:{ keywords:["calificacion","rating"], reply:"🌟 Excelente calificación de clientes." },
    p93:{ keywords:["experiencia","años"], reply:"🏆 Contamos con amplia experiencia." },
    p94:{ keywords:["confianza","confiable"], reply:"🤝 Somos una empresa confiable." },
    p95:{ keywords:["mejor autopartes","mejor tienda"], reply:"🏆 Gracias por considerarnos." },

    // 🧩 FINAL
    p96:{ keywords:["ayuda","orientacion"], reply:" Estoy aquí para ayudarte." },
    p97:{ keywords:["asesoria","asesor"], reply:"👨‍💼 Te brindamos asesoría personalizada. contactate al +52 720 289 2758" },
    p98:{ keywords:["soporte","apoyo"], reply:"🛠️ Estamos para apoyarte, comunicate al +52 720 289 2758." },
    p99:{ keywords:["informacion","info"], reply:"ℹ️ Dime qué información necesitas o comunicate al +52 720 289 2758 para más informacion." },
    p100:{ keywords:["otra duda","mas preguntas"], reply:"💬 Con gusto resolvemos cualquier duda, comunicate al +52 720 289 2758." },

    p101:{ keywords:["como te llamas","tu nombre","te llamas"], reply:" AlexP" },
    p97:{ keywords:["se agradece","gracias","muchas gracias"], reply:"De nada estoy aquí para ayudarte" },
    p98:{ keywords:["chinga tu madre","tu madre"], reply:"La tuya que se me abre JAJAJAJA." },
    p100:{ keywords:["me la pelas"], reply:"Tu a mí, pinche puto." }


};

// ===============================
// GROSERÍAS
// ===============================
const groserias = [
    "pendejo","idiota","estupido","estúpido","chingar","chingada",
    "puta","puto","verga","cabron","cabrón","culero","mierda","joder"
];

const respuestasGroserias = [
    "Podemos comunicarnos con respeto. Estoy aquí para ayudarte.",
    "Entiendo que puedas estar molesto, dime en qué te ayudo.",
    "Con gusto puedo orientarte, hablemos con calma."
];

let indiceGroseria = 0;

// ===============================
// MENSAJES SUICIDAS (NO VISIBLES)
// ===============================
const palabrasSuicidas = [
    "suicidio","suicidarme","matarme","quitarme la vida",
    "no quiero vivir","me quiero morir","ya no puedo",
    "quiero desaparecer","prefiero morir","hacerme daño"
];

const respuestasApoyo = [
    "Lamento que te sientas así. Tu vida es importante.",
    "Gracias por decirlo, no estás solo.",
    "Siento que estés pasando por un momento difícil. Estoy aquí contigo.",
    "Hablar de esto ya es un paso muy valiente."
];

const ayudaProfesional =
"🆘 Línea de la Vida (México)\n" +
"☎️ 800 911 2000\n" +
"Atención 24/7, gratuita y confidencial.";

// ===============================
const respuestaNoEntiende =
"🤔 No logré entender tu mensaje.\nPuedes escribir tu duda y con gusto te ayudo.";

// ===============================
// FUNCIONES GENERALES
// ===============================
function toggleChat() {
    const chat = document.getElementById("chatContainer");
    if (!chat) return;

    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
    chat.style.flexDirection = "column";

    if (chat.style.display === "flex") {
        setTimeout(mostrarOpciones, 300);
    }
}

function addMessage(text, className) {
    const chatBody = document.getElementById("chatBody");
    if (!chatBody) return;

    const msg = document.createElement("div");
    msg.className = className;
    msg.innerText = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// ===============================
// OPCIONES VISIBLES
// ===============================
function mostrarOpciones() {
    quitarOpciones();

    const chatBody = document.getElementById("chatBody");
    const cont = document.createElement("div");
    cont.className = "quick-options";

    for (const key in respuestas) {
        const btn = document.createElement("button");
        btn.innerText = respuestas[key].text;
        btn.onclick = () => seleccionarOpcion(key);
        cont.appendChild(btn);
    }

    chatBody.appendChild(cont);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function quitarOpciones() {
    const opts = document.querySelector(".quick-options");
    if (opts) opts.remove();
}

function seleccionarOpcion(tipo) {
    quitarOpciones();
    addMessage(respuestas[tipo].text, "user");
    setTimeout(() => addMessage(respuestas[tipo].reply, "bot"), 400);
}

// ===============================
function contieneGroseria(texto) {
    return groserias.some(p => texto.includes(p));
}

function contieneSuicida(texto) {
    return palabrasSuicidas.some(p => texto.includes(p));
}

// ===============================
// ENVÍO DE MENSAJES
// ===============================
function sendMessage() {
    const input = document.getElementById("chatInput");
    if (!input || input.value.trim() === "") return;

    quitarOpciones();

    const userText = input.value.toLowerCase();
    addMessage(input.value, "user");
    input.value = "";

    // 🆘 PRIORIDAD MÁXIMA: APOYO EMOCIONAL (NO OPCIONES)
    if (contieneSuicida(userText)) {
        addMessage(respuestasApoyo[Math.floor(Math.random() * respuestasApoyo.length)], "bot");
        addMessage(ayudaProfesional, "bot");
        return;
    }

    // 🚫 GROSERÍAS
    if (contieneGroseria(userText)) {
        addMessage(respuestasGroserias[indiceGroseria], "bot");
        indiceGroseria = (indiceGroseria + 1) % respuestasGroserias.length;
        return;
    }

    indiceGroseria = 0;
    let encontrado = false;

    // RESPUESTAS VISIBLES
    for (const key in respuestas) {
        if (respuestas[key].keywords.some(word => userText.includes(word))) {
            addMessage(respuestas[key].reply, "bot");
            encontrado = true;
            break;
        }
    }

    // RESPUESTAS OCULTAS
    if (!encontrado) {
        for (const key in respuestasOcultas) {
            if (respuestasOcultas[key].keywords.some(word => userText.includes(word))) {
                addMessage(respuestasOcultas[key].reply, "bot");
                encontrado = true;
                break;
            }
        }
    }

    if (!encontrado) {
        addMessage(respuestaNoEntiende, "bot");
    }
}

// ===============================
// ENTER PARA ENVIAR
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("chatInput");
    if (!input) return;

    input.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    });
});
