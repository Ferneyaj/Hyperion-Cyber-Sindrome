// ==========================================
// HYPERION: CYBER SYNDROME
// Team Breaking Bugs
// Convertido de Processing a p5.js
// ==========================================

const ESTADO_INICIO = -1;
const ESTADO_MENU   =  0;
const ESTADO_MODO1  =  1;
const ESTADO_MODO2  =  2;
const ESTADO_MODO3  =  3;

let estadoActual = ESTADO_INICIO;

// Imágenes
let ImagenFondo, Logo, WalterSprite, BossSprite, ImagenFondo2;

// Menú
let botonW, botonH, botonX, btnY1, btnY2, btnY3;

// Lore / Cinemática Modo 1
let subEstadoModo1 = 0;
let contadorFrames = 0;
let textoLore = "INICIANDO PROTOCOLO S.O.S...\nCONECTANDO AL NUCLEO HYPERION...\nBUSCANDO RASTROS DEL GLITCH DEL ODIO...\n\nDR. WHITE: 'TENEMOS QUE FILTRAR ESTA TOXICIDAD\nANTES DE QUE EL SERVIDOR COLAPSE.'";
let caracteresAMostrar = 0;

// Lógica Modo 1
let rondaActual = 1, rondaMax = 10, mensajeActuaLID = 1, puntaje = 0;
const PPN1 = 200;
let Riesgo = 0, ESTADO_SRV = "PELIGROSO", Vul = 0, nivel = 1;
let btnArchivarC, btnSeguimientoC, btnReportarC;
let preset = 1, bossMensaje = 1, probabilidadAtaque = 0;
let vidaJugador = 3, bossVida = 100;

// Diseño Modo 1
let cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH;
let btnVolverX, btnVolverY, btnVolverW, btnVolverH;
let panelY, panelH;
let btnColX, btnBW, btnBH, btnBY1, btnBY2, btnBY3;

// Lógica Modo 2
let mensajeErrado = 0, mensajeAcertado = 0, mensaje2ActualID = 1;
const mensajes2 = [
  "",
  "¡Excelente iniciativa, cuentas con mi apoyo!",
  "¿A qué hora nos conectamos para hacer el laboratorio?",
  "Nadie te soporta en este servidor, bórrate.",
  "Buen trabajo en la presentación de hoy, crack.",
  "Mañana hay examen de programación a primera hora.",
  "Si sales de la Red Hyperion, te irá muy mal...",
  "¿Por qué siempre eres así con el equipo?",
  "¡No hagas caso a los comentarios, tu proyecto es genial!",
  "Subieron un meme tuyo al canal general para burlarse.",
  "¿Ya revisaste las notas que subieron a Brightspace?"
];
const respuestasCorrectas = [0, 1, 2, 3, 1, 2, 3, 3, 1, 3, 2];
let mensajeMostrado = "", respuestacorrecta = 0, respuestaescogida = 0;
let puntaje2 = 0, ganar = false, perder = false, contadorrondas = 1;
let subestadoModo2 = 2;
let textX, textY, contadorFrames2 = 1260, encontrado2 = false;
let msjUsado = [];

// Diseño Modo 2
let btnPositivoX, btnNormalX, btnNegativoX, btnW2, btnH2, btnY2m;

// ==========================================
// PRELOAD
// ==========================================
function preload() {
  ImagenFondo  = loadImage('ImagenFondo.jpg');
  Logo         = loadImage('Logo.png');
  WalterSprite = loadImage('WalterSprite.png');
  BossSprite   = loadImage('Jefe.png');
  ImagenFondo2 = loadImage('ImagenFondo2.png');
}

// ==========================================
// SETUP
// ==========================================
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  recalcLayout();
  bossMensaje = int(random(1, 13));
  msjUsado = new Array(11).fill(false);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  recalcLayout();
}

function recalcLayout() {
  botonW = width * 0.3125;
  botonH = height * 0.0833;
  botonX = width / 2 - botonW / 2;
  btnY1  = height * 0.36;
  btnY2  = height * 0.48;
  btnY3  = height * 0.60;

  panelY = height * (2.0 / 3.0);
  panelH = height * (1.0 / 3.0);

  cajaMsgW = width * 0.48;
  cajaMsgH = panelH * 0.75;
  cajaMsgX = width * 0.02;
  cajaMsgY = panelY + panelH * 0.05;

  btnVolverX = width * 0.02;
  btnVolverY = height * 0.95;
  btnVolverW = width * 0.13;
  btnVolverH = height * 0.04;

  btnColX = width * 0.55;
  btnBW   = width * 0.42;
  btnBH   = panelH * 0.22;
  let esp = panelH * 0.05;
  btnBY1  = panelY + panelH * 0.08;
  btnBY2  = btnBY1 + btnBH + esp;
  btnBY3  = btnBY2 + btnBH + esp;
}

// ==========================================
// DRAW
// ==========================================
function draw() {
  if (estadoActual === ESTADO_INICIO)     dibujarInicio();
  else if (estadoActual === ESTADO_MENU)  dibujarMenu();
  else if (estadoActual === ESTADO_MODO1) dibujarModo1();
  else if (estadoActual === ESTADO_MODO2) dibujarModo2();
  else if (estadoActual === ESTADO_MODO3) {
    background(70, 30, 30);
    fill(255); textSize(width * 0.03); textAlign(CENTER, CENTER);
    text("MODO 3 — PRÓXIMAMENTE", width / 2, height / 2);
  }
}

// ==========================================
// ESTADO INICIO
// ==========================================
function dibujarInicio() {
  image(ImagenFondo, 0, 0, width, height);

  let pX = width * 0.03, pW = width * (4.0 / 9.0);
  fill(0, 0, 0, 153); noStroke();
  rect(pX, 0, pW, height);

  let cX = pX + pW / 2;
  let logoW = pW * 0.85, logoH = logoW * 0.55;
  image(Logo, cX - logoW / 2, height * 0.12, logoW, logoH);

  textAlign(CENTER, CENTER);
  textSize(width * 0.013); fill(100, 150, 200, 160);
  text("v1.5  |  2086", cX, height * 0.38);

  let bW3 = pW * 0.60, bH3 = height * 0.08, bX3 = cX - bW3 / 2;
  let bJugarY = height * 0.45;

  dibujarBtn(bX3, bJugarY,                      bW3, bH3, color(0,180,80,210),   color(0,220,100),    "[ JUGAR ]",    12);
  dibujarBtn(bX3, bJugarY + bH3 + height*0.03,  bW3, bH3, color(70,100,160,210), color(70,100,160),   "[ OPCIONES ]", 12);
  dibujarBtn(bX3, bJugarY + (bH3+height*0.03)*2,bW3, bH3, color(160,50,50,210),  color(160,50,50),    "[ SALIR ]",    12);

  textSize(width * 0.013); fill(180, 180, 180, 140); textAlign(CENTER, CENTER);
  text("Team Breaking Bugs", cX, height * 0.95);
}

// ==========================================
// MENÚ
// ==========================================
function dibujarMenu() {
  background(30, 40, 65);
  textAlign(CENTER, CENTER);
  textSize(width * 0.045); fill(255, 215, 0);
  text("HappyTech ARCADE", width / 2, height * 0.13);
  textSize(width * 0.022); fill(200, 220, 255);
  text("Bullying y Ciberacoso — Concientización", width / 2, height * 0.21);

  dibujarBtn(botonX, btnY1, botonW, botonH, color(50,150,100,200), color(50,150,100), "1. Psicólogo Digital",   10);
  dibujarBtn(botonX, btnY2, botonW, botonH, color(70,120,180,200), color(70,120,180), "2. Detección Rápida",    10);
  dibujarBtn(botonX, btnY3, botonW, botonH, color(180,80,80,200),  color(180,80,80),  "3. Aislando el Bullying",10);
}

// ==========================================
// MODO 1
// ==========================================
function dibujarModo1() {
  if      (subEstadoModo1 === 0) dibujarGlitch();
  else if (subEstadoModo1 === 1) dibujarLore();
  else if (subEstadoModo1 === 2) dibujarTerminal();
}

function dibujarGlitch() {
  background(0);
  contadorFrames++;
  for (let i = 0; i < 10; i++) {
    stroke(0, 255, 100, random(100, 255));
    strokeWeight(random(1, 5));
    line(0, random(height), width, random(height));
  }
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(width * 0.05); fill(0, 255, 100);
  text("ACCEDIENDO AL SISTEMA...", width / 2, height / 2);
  if (contadorFrames > 60) { subEstadoModo1 = 1; contadorFrames = 0; }
}

function dibujarLore() {
  background(5, 10, 5);
  noFill(); stroke(0, 255, 100, 100); strokeWeight(2);
  rect(width*0.05, height*0.05, width*0.9, height*0.9, 20);
  noStroke();
  if (frameCount % 2 === 0 && caracteresAMostrar < textoLore.length) caracteresAMostrar++;
  fill(0, 255, 100); textAlign(LEFT, TOP); textSize(width * 0.025);
  text(textoLore.substring(0, caracteresAMostrar), width*0.1, height*0.15);
  textAlign(CENTER, CENTER);
  fill(255, 255, 255, 150 + sin(frameCount * 0.1) * 100);
  text("HAZ CLIC PARA INGRESAR A LA TERMINAL", width/2, height * 0.85);
}

function dibujarTerminal() {
  background(10, 15, 15);

  // Fondo zona personajes
  image(ImagenFondo2, 0, 0, width, panelY);
  fill(0, 0, 0, 130); noStroke();
  rect(0, 0, width, panelY);

  // Línea divisora
  stroke(0, 255, 100, 80); strokeWeight(1);
  line(0, panelY, width, panelY);
  noStroke();

  // Sprites animados
  let walterOffsetY = sin(frameCount * 0.05) * 10;
  image(WalterSprite, width*0.05, height*0.18 + walterOffsetY, width*0.15, height*0.30);
  if (nivel === 2) {
    let bossX = cos(frameCount * 0.04) * 15;
    let bossY = sin(frameCount * 0.04) * 10;
    image(BossSprite, width*0.73 + bossX, height*0.18 + bossY, width*0.15, height*0.30);
  }

  // Estado servidor
  if (puntaje < 1000)      ESTADO_SRV = "PELIGROSO";
  else if (puntaje < 1500) ESTADO_SRV = "NORMAL";
  else                      ESTADO_SRV = "SEGURO";

  // Header
  textAlign(CENTER, CENTER);
  textSize(width * 0.035); fill(0, 255, 100);
  text("TERMINAL S.O.S - DR. Walter D White", width/2, height * 0.05);

  if (nivel % 2 !== 0) {
    textSize(width * 0.025); fill(255, 255, 100);
    text("ESTADO DEL SERVIDOR: [ " + ESTADO_SRV + " ] |   RONDA: " + rondaActual + "/" + rondaMax, width/2, height * 0.10);
  }

  textSize(width * 0.015); fill(200, 200, 255);
  text("FIREWALL FRAGMENTS: [ " + puntaje + " ]", width/2, height * 0.15);

  textAlign(LEFT, CENTER);
  textSize(width * 0.012); fill(0, 255, 100, 150);
  text("▼ MENSAJE INTERCEPTADO", cajaMsgX + 10, panelY + panelH * 0.025);

  let px = cajaMsgX + width * 0.03;
  let py = cajaMsgY + height * 0.02;

  // Nivel 1 — mensajes normales
  if (nivel === 1) {
    dibujarMensajeNivel1(px, py);
    if (puntaje >= 1000) nivel = 2;
  }

  // Nivel 2 — boss
  if (nivel === 2) {
    textSize(width * 0.020); fill(255, 42, 85); textAlign(CENTER, CENTER);
    text("ESTADO DEL SERVIDOR: [ Critico ] [ Integridad: " + bossVida + "% ] | RONDA: Error / Peligro Inminente", width/2, height * 0.10);
    stroke(0,255,100); strokeWeight(2); fill(15,30,20);
    rect(cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH, 10); noStroke();
    textAlign(LEFT, TOP); textSize(width * 0.02); fill(200, 255, 200);
    text("POSEIDO", px, py);
    text("Vulnerabilidad: " + Vul + "%", px, py + height*0.04);
    text("Doctor W.D.W: " + vidaJugador + " | RIESGO CALCULADO: INMENSO%", px, py + height*0.08);
    dibujarMensajeBoss(px, py);
    if (Vul < 0) Vul = 0;
    if (bossVida <= 0)   { fill(0,255,100);  textAlign(LEFT,TOP); textSize(width*0.018); text('> "...Has derrotado al jefe"', px, py + height*0.18); bossMensaje = 0; }
    if (vidaJugador <= 0){ fill(255,42,85);  textAlign(LEFT,TOP); textSize(width*0.018); text('> "...Has Perdido"', px, py + height*0.18); bossMensaje = 0; }
  }

  // Texto botones
  btnArchivarC    = nivel % 2 === 0 ? "Apoyar"     : "Archivar";
  btnSeguimientoC = nivel % 2 === 0 ? "Confrontar" : "Seguimiento";
  btnReportarC    = nivel % 2 === 0 ? "Atacar"     : "Reportar";

  let colX = width*0.55, bW = width*0.42, bH = panelH*0.22;
  let bY1 = panelY+panelH*0.08, bY2 = bY1+bH+panelH*0.05, bY3 = bY2+bH+panelH*0.05;

  dibujarBtn(colX, bY1, bW, bH, color(50,150,255,200),  color(50,150,255), "[ "+btnArchivarC+" ]",    8);
  dibujarBtn(colX, bY2, bW, bH, color(255,165,0,200),   color(255,165,0),  "[ "+btnSeguimientoC+" ]", 8);
  dibujarBtn(colX, bY3, bW, bH, color(255,50,50,200),   color(255,50,50),  "[ "+btnReportarC+" ]",    8);
  dibujarBtn(btnVolverX, btnVolverY, btnVolverW, btnVolverH, color(100,200), color(100), "<- DESCONECTAR", 5);
}

// ==========================================
// MENSAJES NIVEL 1
// ==========================================
const datosMensajes = [
  null,
  { riesgo:85, fecha:"25/05/2086", hora:"23:45 (Nocturno)", emisor:15, receptor:14, reincidencia:"ALTA",  msg:'"Mañana nadie te va a hablar en el colegio, piérdete."' },
  { riesgo:62, fecha:"03/06/2086", hora:"14:22 (Tarde)",    emisor:13, receptor:13, reincidencia:"MEDIA", msg:'"Todos dicen que eres un copión, yo también lo creo."' },
  { riesgo:20, fecha:"10/06/2086", hora:"09:05 (Mañana)",   emisor:14, receptor:15, reincidencia:"BAJA",  msg:'"Oye, creo que te equivocaste en el ejercicio de ayer."' },
  { riesgo:91, fecha:"15/06/2086", hora:"22:10 (Nocturno)", emisor:17, receptor:14, reincidencia:"ALTA",  msg:'"Mándame tus fotos o cuento todo lo que sé de ti."' },
  { riesgo:45, fecha:"20/06/2086", hora:"16:45 (Tarde)",    emisor:15, receptor:15, reincidencia:"MEDIA", msg:'"Ya nadie quiere estar contigo en el grupo del proyecto."' },
  { riesgo:15, fecha:"25/06/2086", hora:"11:30 (Mañana)",   emisor:13, rector:14,  reincidencia:"BAJA",  msg:'"Jaja ese meme te lo mandé porque me pareció gracioso."' },
  { riesgo:78, fecha:"01/07/2086", hora:"20:55 (Noche)",    emisor:16, receptor:13, reincidencia:"ALTA",  msg:'"Si vas al colegio mañana te va a ir muy mal, te lo juro."' },
  { riesgo:55, fecha:"08/07/2086", hora:"13:15 (Tarde)",    emisor:14, receptor:14, reincidencia:"MEDIA", msg:'"Le voy a decir a todos que tú fuiste el que habló."' },
  { riesgo:30, fecha:"12/07/2086", hora:"08:40 (Mañana)",   emisor:15, receptor:16, reincidencia:"BAJA",  msg:'"No te molestes en venir al partido, nadie te quiere ahí."' },
  { riesgo:95, fecha:"18/07/2086", hora:"23:59 (Nocturno)", emisor:17, receptor:13, reincidencia:"ALTA",  msg:'"Tengo tus contraseñas. Haz lo que digo o publico todo."' },
];

function dibujarMensajeNivel1(px, py) {
  let id = constrain(mensajeActuaLID, 1, 10);
  let m = datosMensajes[id];
  Riesgo = m.riesgo;
  stroke(0,255,100); strokeWeight(2); fill(15,30,20);
  rect(cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH, 10); noStroke();
  textAlign(LEFT, TOP); textSize(width*0.02); fill(200,255,200);
  text("FECHA: "+m.fecha+"  |  HORA: "+m.hora, px, py);
  text("EDAD EMISOR: "+m.emisor+"    |  EDAD RECEPTOR: "+(m.receptor||m.rector), px, py+height*0.04);
  text("REINCIDENCIA: "+m.reincidencia+" |  RIESGO CALCULADO: "+m.riesgo+"%", px, py+height*0.08);
  fill(255); textSize(width*0.018);
  text("> "+m.msg, px, py+height*0.18);
}

// ==========================================
// MENSAJES BOSS
// ==========================================
const bossMsgs = [
  "",
  '> "¿HappyTech te envió a mí? Qué patético. Ellos también son parte del problema."',
  '> "Yo no elegí fusionarme con el Glitch. El Glitch me eligió a mí."',
  '> "La Red Hyperion siempre fue una mentira. Yo solo la estoy mostrando como realmente es."',
  '> "Los estudiantes que caen… lo merecen. El que no es fuerte, no debería estar en la Red."',
  '> "¿Sabes cuántos mensajes de odio recibí antes de convertirme en esto?"',
  '> "¿De verdad crees que un algoritmo puede entender el dolor real?"',
  '> "A veces… no sé dónde termino yo y dónde empieza el Glitch."',
  '> "HappyTech construyó esta Red para controlarnos. Yo rompí las cadenas."',
  '> "¿Te programaron para sentir o solo para simular que sientes?"',
  '> "Cada estudiante que corrompo era alguien que ya estaba roto."',
  '> "Si de verdad fueras tan bueno en tu trabajo… ¿por qué llegaste tan tarde?"',
  '> "…¿Tú crees que aún se puede revertir esto? ¿Que yo… puedo volver?"',
];
const bossPresets = [0, 1, 2, 1, 1, 2, 2, 3, 1, 1, 1, 2, 3];

function dibujarMensajeBoss(px, py) {
  let id = constrain(bossMensaje, 0, 12);
  if (id > 0) {
    preset = bossPresets[id];
    fill(255,42,85); textAlign(LEFT,TOP); textSize(width*0.013);
    text(bossMsgs[id], px, py + height*0.18);
  }
}

// ==========================================
// MODO 2
// ==========================================
function dibujarModo2() {
  if (subestadoModo2 === 2) {
    background(30, 50, 80);
    mensajeMostrado   = mensajes2[mensaje2ActualID] || " ";
    respuestacorrecta = respuestasCorrectas[mensaje2ActualID] || 0;

    btnPositivoX = width * 0.25;
    btnNormalX   = width * 0.45;
    btnNegativoX = width * 0.65;
    btnY2m = height * 0.65;
    btnW2  = width * 0.12;
    btnH2  = height * 0.07;
    contadorFrames2--;

    textSize(width*0.025); textAlign(CENTER,CENTER); fill(255);
    text("PUNTAJE: " + puntaje2, width/2, height*0.1);
    text("TIEMPO: " + floor(contadorFrames2/60) + "s", width/2, height*0.17);
    text("ERRORES: " + mensajeErrado + "/5", width/2, height*0.23);

    // Mensaje centrado
    textSize(width*0.022); fill(200,220,255); textAlign(CENTER,CENTER);
    text(mensajeMostrado, width/2, height*0.45);

    dibujarBtn(btnPositivoX - btnW2/2, btnY2m, btnW2, btnH2, color(32,198,58,200),  color(32,198,58),  "[POSITIVO]", 10);
    dibujarBtn(btnNormalX  - btnW2/2, btnY2m,  btnW2, btnH2, color(187,214,39,200), color(187,214,39), "[NORMAL]",   10);
    dibujarBtn(btnNegativoX- btnW2/2, btnY2m,  btnW2, btnH2, color(227,23,26,200),  color(227,23,26),  "[NEGATIVO]", 10);

    if (contadorFrames2 <= 0) { perder = true; ganar = false; subestadoModo2 = 3; }

  } else if (subestadoModo2 === 3) {
    background(30, 50, 80);
    textAlign(CENTER,CENTER);
    textSize(width*0.06);
    if (ganar)  { fill(0,255,100);  text("¡GANASTE!!", width/2, height/2); }
    else        { fill(255,50,50);  text("¡PERDISTE!!", width/2, height/2); }
    textSize(width*0.02); fill(200,200,200);
    text("Haz clic para volver al menú", width/2, height*0.65);
  }
}

// ==========================================
// UTILIDAD: BOTÓN
// ==========================================
function dibujarBtn(x, y, w, h, cNormal, cHover, label, radio) {
  let hover = mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+h;
  noStroke();
  fill(hover ? cHover : cNormal);
  rect(hover ? x-4 : x, hover ? y-4 : y, hover ? w+8 : w, hover ? h+8 : h, radio || 8);
  fill(255); textSize(width*0.018); textAlign(CENTER,CENTER);
  text(label, x+w/2, y+h/2);
}

// ==========================================
// MOUSE PRESSED
// ==========================================
function mousePressed() {

  // INICIO
  if (estadoActual === ESTADO_INICIO) {
    let pX = width*0.03, pW = width*(4.0/9.0), cX = pX+pW/2;
    let bW3 = pW*0.60, bH3 = height*0.08, bX3 = cX-bW3/2;
    let bJugarY = height*0.45;
    if (mouseX > bX3 && mouseX < bX3+bW3 && mouseY > bJugarY && mouseY < bJugarY+bH3) {
      estadoActual = ESTADO_MENU;
    }
    return;
  }

  // MENU
  if (estadoActual === ESTADO_MENU) {
    if (mouseX > botonX && mouseX < botonX+botonW && mouseY > btnY1 && mouseY < btnY1+botonH) {
      estadoActual = ESTADO_MODO1; subEstadoModo1 = 0;
      contadorFrames = 0; caracteresAMostrar = 0;
      rondaActual = 1; mensajeActuaLID = 1; puntaje = 0;
      nivel = 1; vidaJugador = 3; bossVida = 100; Vul = 0;
      bossMensaje = int(random(1,13));
    } else if (mouseX > botonX && mouseX < botonX+botonW && mouseY > btnY2 && mouseY < btnY2+botonH) {
      estadoActual = ESTADO_MODO2;
      mensajeErrado = 0; mensajeAcertado = 0; puntaje2 = 0;
      contadorrondas = 1; subestadoModo2 = 2; contadorFrames2 = 1260;
      msjUsado = new Array(11).fill(false);
      elegirMensaje2();
    } else if (mouseX > botonX && mouseX < botonX+botonW && mouseY > btnY3 && mouseY < btnY3+botonH) {
      estadoActual = ESTADO_MODO3;
    }
    return;
  }

  // MODO 1
  if (estadoActual === ESTADO_MODO1) {
    if (subEstadoModo1 === 1) { subEstadoModo1 = 2; return; }
    if (subEstadoModo1 === 2) {
      // Volver
      if (mouseX > btnVolverX && mouseX < btnVolverX+btnVolverW && mouseY > btnVolverY && mouseY < btnVolverY+btnVolverH) {
        estadoActual = ESTADO_MENU; return;
      }
      let colX = width*0.55, bW = width*0.42, bH = panelH*0.22;
      let bY1 = panelY+panelH*0.08, bY2 = bY1+bH+panelH*0.05, bY3 = bY2+bH+panelH*0.05;

      // ARCHIVAR / APOYAR
      if (mouseX > colX && mouseX < colX+bW && mouseY > bY1 && mouseY < bY1+bH) {
        if (nivel % 2 !== 0) {
          rondaActual++; mensajeActuaLID++;
          if      (Riesgo <= 39) puntaje += PPN1;
          else if (Riesgo <= 69) puntaje += int(PPN1/100*40);
          else                   puntaje -= 50;
        } else {
          if (preset === 1) Vul -= int(random(25));
          if (preset === 2) Vul += int(random(25));
        }
        bossMensaje = int(random(1,13));
      }
      // SEGUIMIENTO / CONFRONTAR
      if (mouseX > colX && mouseX < colX+bW && mouseY > bY2 && mouseY < bY2+bH) {
        if (nivel % 2 !== 0) {
          rondaActual++; mensajeActuaLID++;
          if      (Riesgo <= 39) puntaje += int(PPN1/100*50);
          else if (Riesgo <= 69) puntaje += PPN1;
          else                   puntaje += int(PPN1/100*50);
        } else {
          if (preset === 1) Vul += int(random(25));
          if (preset === 2) Vul -= int(random(25));
        }
        bossMensaje = int(random(1,13));
      }
      // REPORTAR / ATACAR
      if (mouseX > colX && mouseX < colX+bW && mouseY > bY3 && mouseY < bY3+bH) {
        if (nivel % 2 !== 0) {
          rondaActual++; mensajeActuaLID++;
          if      (Riesgo <= 39) puntaje -= 25;
          else if (Riesgo <= 69) puntaje += int(PPN1/100*60);
          else                   puntaje += PPN1;
        } else {
          probabilidadAtaque = int(random(100));
          if (Vul <= 25) { if (probabilidadAtaque > 85) vidaJugador -= 2; else bossVida -= int(random(6)); }
          if (Vul <= 50 && Vul > 25) { if (probabilidadAtaque > 55) vidaJugador -= 1; else bossVida -= int(random(15)); }
          if (Vul <= 75 && Vul > 50) { if (probabilidadAtaque > 30) vidaJugador -= 1; else bossVida -= int(random(30)); }
          if (Vul < 75)  { if (probabilidadAtaque > 15) vidaJugador -= 1; else bossVida -= int(random(45)); }
          if (preset === 3) bossVida -= int(random(45));
          Vul = 0;
        }
        bossMensaje = int(random(1,13));
      }
    }
    return;
  }

  // MODO 2
  if (estadoActual === ESTADO_MODO2) {
    if (subestadoModo2 === 3) { estadoActual = ESTADO_MENU; return; }
    if (subestadoModo2 === 2) {
      let bX_p = btnPositivoX - btnW2/2;
      let bX_n = btnNormalX   - btnW2/2;
      let bX_g = btnNegativoX - btnW2/2;
      let clicked = 0;
      if (mouseX > bX_p && mouseX < bX_p+btnW2 && mouseY > btnY2m && mouseY < btnY2m+btnH2) clicked = 1;
      if (mouseX > bX_n && mouseX < bX_n+btnW2 && mouseY > btnY2m && mouseY < btnY2m+btnH2) clicked = 2;
      if (mouseX > bX_g && mouseX < bX_g+btnW2 && mouseY > btnY2m && mouseY < btnY2m+btnH2) clicked = 3;
      if (clicked > 0) {
        if (clicked === respuestacorrecta) { puntaje2 += 200; mensajeAcertado++; }
        else { mensajeErrado++; puntaje2 -= 50; }
        contadorrondas++;
        elegirMensaje2();
        if (mensajeErrado > 5)     { subestadoModo2 = 3; perder = true;  ganar = false; }
        else if (contadorrondas > 10) { subestadoModo2 = 3; ganar  = true;  perder = false; }
      }
    }
  }
}

// ==========================================
// ELEGIR MENSAJE MODO 2
// ==========================================
function elegirMensaje2() {
  encontrado2 = false;
  let intentos = 0;
  while (!encontrado2 && intentos < 200) {
    let id = int(random(1, 11));
    if (!msjUsado[id]) { msjUsado[id] = true; mensaje2ActualID = id; encontrado2 = true; }
    intentos++;
  }
  if (!encontrado2) { subestadoModo2 = 3; ganar = true; perder = false; }
}
