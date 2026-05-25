// =====================================================
// HYPERION - p5.js translation of Processing sketch
// =====================================================

// Sound variables
let SonidoClick, menuMusica, juegoMusica, ganarMusica, perderMusica;

// GLOBAL STATE MACHINE
let ESTADO_INICIO = -1;
let ESTADO_MENU = 0;
let ESTADO_MODO1 = 1;
let ESTADO_MODO2 = 2;
let ESTADO_MODO3 = 3;
let ESTADO_FIN = 4;
let ESTADO_CREDITOS = 5;
let ESTADO_CARGA = 6;
let estadoActual = ESTADO_CARGA;
let contadorCarga = 0;
let estadoAnterior = -2;

// Images
let logoCargaImg;
let ImagenFondo, fondoModos;
let fondomodo2;
let Logo;
let botonjugar, botonopciones, botonsalir, botonvolver;
let btnmodo1, btnmodo2, btnmodo3;
let btnArchivar, btnSeguimiento, btnReportar;
let cajadetexto;
let fuente;
let botonpositivomodo2, botonnormalmodo2, botonnegativomodo2;
let cuadrotexto;
let cuadropuntajemodo2;
let contadormodo2;
let corazonlleno, corazonvacio;
let cuadrovida;
let pantallaganarmodo2, pantallaperdermodo2;
let fondomodo3inicio, fondomodo3juego, fondomodo3final;
let viejowalter;
let Boss1, Boss2;
let NPC;

// MENU design
let botonW, botonH, botonY;
let btnX1, btnX2, btnX3;

// MODO 1 variables
let subEstadoModo1 = 0;
let contadorFrames = 0;
let textoLore = "AÑO 2086.\nLA RED HYPERION YA NO ES UNA SIMPLE HERRAMIENTA:\nEL MUNDO DIGITAL SE HA VUELTO MAS IMPORTANTE QUE EL FISICO.\n\nTRAS 60 ANOS DE INMERSION TOTAL,\nBUSCAMOS REPARAR A LA HUMANIDAD.'";
let caracteresAMostrar = 0;

// MODO 1 logic
let Accion;
let rondaActual = 1;
let rondaMax = 10;
let mensajeActuaLID = 1;
let puntaje = 0;
let juegoTerminado = false;
let PromAc;
let PPN1 = 200;
let prom = 0;
let Mod;
let Riesgo;
let ESTADO;
let rondaProm;
let Vul = 0;

let btnArchivarC;
let btnSeguimientoC;
let btnReportarC;

let colX, bW, bH, bY1, bY2, bY3;

// Boss variables
let preset;
let bossMensaje;
let probabilidadAtaque = 0;
let vidaJugador = 3;
let bossVida = 100;
let resultadoModo1 = "";

// MODO 1 design
let cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH;
let btnAccionW, btnAccionH, btnAccionY;
let btnArchivarX, btnSeguimientoX, btnReportarX;
let btnVolverX, btnVolverY, btnVolverW, btnVolverH;
let panelY;
let panelH;
let btnColX, btnBW, btnBH, btnBY1, btnBY2, btnBY3;
let nivel = 1;
let fondoTerminal;

let memoriaGB = 2.4;
let latenciaMS = 47;
let paquetesPercent = 3;

let timerMemoria = 0;
let timerLatencia = 0;
let timerPaquetes = 0;

let intervaloMemoria = 180;
let intervaloLatencia = 90;
let intervaloPaquetes = 120;

let memoriaTarget = 2.4;
let latenciaTarget = 47;
let paquetesTarget = 3;

let bin1X, bin1Y, bin1Vel, bin1C;
let bin2X, bin2Y, bin2Vel, bin2C;
let bin3X, bin3Y, bin3Vel, bin3C;
let bin4X, bin4Y, bin4Vel, bin4C;
let bin5X, bin5Y, bin5Vel, bin5C;
let bin6X, bin6Y, bin6Vel, bin6C;
let bin7X, bin7Y, bin7Vel, bin7C;
let bin8X, bin8Y, bin8Vel, bin8C;

let suelo;

// MODO 2 logic
let mensajeErrado = 0;
let mensajeAcertado = 0;
let mensaje2ActualID = 1;
let mensaje2Actual1 = "¡Excelente iniciativa, \ncuentas con mi apoyo!";
let mensaje2Actual2 = "¿A qué hora nos \nconectamos para hacer \nel laboratorio?";
let mensaje2Actual3 = "Nadie te soporta \nen este servidor, \nbórrate.";
let mensaje2Actual4 = "Buen trabajo en \nla presentación de \nhoy, crack.";
let mensaje2Actual5 = "Mañana hay examen \nde programación a \nprimera hora.";
let mensaje2Actual6 = "Si sales de la \nRed Hyperion, te irá \nmuy mal...";
let mensaje2Actual7 = "¿Por qué siempre \neres así con el \nequipo?";
let mensaje2Actual8 = "¡No hagas caso \na los comentarios, tu \nproyecto es genial!";
let mensaje2Actual9 = "Subieron un meme \ntuyo al canal general \npara burlarse.";
let mensaje2Actual10 = "¿Ya revisaste \nlas notas que subieron \na Brightspace?";
let mensaje2Actual11 = "Tu explicación del \ntema ayudó mucho al \ngrupo.";
let mensaje2Actual12 = "¿Dónde subieron el \narchivo de la práctica \nde hoy?";
let mensaje2Actual13 = "Todos se ríen de \nti cuando hablas por \nel chat.";
let mensaje2Actual14 = "Gracias por compartir \ntu código, me sirvió \npara entender.";
let mensaje2Actual15 = "La reunión será \nen la sala virtual \na las 7.";
let mensaje2Actual16 = "Si reportas esto, \nte vamos a hacer \nla vida imposible.";
let mensaje2Actual17 = "Tu avatar quedó \nmuy bien diseñado, \nfelicitaciones.";
let mensaje2Actual18 = "¿Quién tiene el \nenlace del repositorio \ndel proyecto?";
let mensaje2Actual19 = "Nadie quiere estar \ncontigo en el equipo, \nentiéndelo.";
let mensaje2Actual20 = "Me gustó cómo \ndefendiste tu idea \nen clase.";
let mensaje2Actual21 = "El profesor cambió \nla fecha de entrega \npara el viernes.";
let mensaje2Actual22 = "Subimos tus errores \nal canal para que \ntodos se burlen.";
let mensaje2Actual23 = "Sigue así, tu \navance se nota mucho \nen el proyecto.";
let mensaje2Actual24 = "¿Ya terminaron la \nparte del informe \ndel laboratorio?";
let mensaje2Actual25 = "Eres un estorbo \npara todos en esta \nred.";
let mensaje2Actual26 = "Buena solución, \noptimizaste muy bien \nel programa.";
let mensaje2Actual27 = "Hoy no habrá \nasesoría porque el \nservidor está caído.";
let mensaje2Actual28 = "Si entras al canal, \nte vamos a llenar \nde insultos.";
let mensaje2Actual29 = "No te rindas, \ntu trabajo tiene mucho \npotencial.";
let mensaje2Actual30 = "¿El examen será \nindividual o en \nparejas?";
let mensajeMostrado = "";
let respuestacorrecta = 0;
let respuestaescogida = 0;
let puntaje2 = 0;
let cargando = false;
let ganar = false;
let perder = false;
let contadorrondas = 1;

let falloMensaje1 = "---------";
let falloMensaje2 = "---------";
let falloMensaje3 = "---------";
let falloMensaje4 = "---------";
let falloMensaje5 = "---------";
let falloRespuesta1 = "---------";
let falloRespuesta2 = "---------";
let falloRespuesta3 = "---------";
let falloRespuesta4 = "---------";
let falloRespuesta5 = "---------";

let cantidadFallosGuardados = 0;
let respuestaCorrectaTexto = "";
let vidasModo2 = 5;
let subestadoModo2 = 2;
let textX, textY;
let contadorFrames2 = 3660;
let encontrado2 = false;

let msj1Usado=false,msj2Usado=false,msj3Usado=false,msj4Usado=false,msj5Usado=false;
let msj6Usado=false,msj7Usado=false,msj8Usado=false,msj9Usado=false,msj10Usado=false;
let msj11Usado=false,msj12Usado=false,msj13Usado=false,msj14Usado=false,msj15Usado=false;
let msj16Usado=false,msj17Usado=false,msj18Usado=false,msj19Usado=false,msj20Usado=false;
let msj21Usado=false,msj22Usado=false,msj23Usado=false,msj24Usado=false,msj25Usado=false;
let msj26Usado=false,msj27Usado=false,msj28Usado=false,msj29Usado=false,msj30Usado=false;

// MODO 2 design
let btnPositivoX, btnNormalX, btnNegativoX;
let btnW, btnH, btnY;

// MODO 3 logic and design
let subestadoModo3 = 0;
let jugadoresModo3 = 0;
let jugadorActualModo3 = 1;
let dadoModo3 = 0;
let ganadorModo3 = 0;
let rondasModo3 = 1;
let casosInicialesModo3 = 15;
let casosJugador1Modo3 = 5;
let casosJugador2Modo3 = 5;
let casosJugador3Modo3 = 0;
let casosJugador4Modo3 = 0;
let casosJugador5Modo3 = 0;
let casosJugador6Modo3 = 0;
let canal1Modo3=0,canal2Modo3=0,canal3Modo3=0,canal4Modo3=0,canal5Modo3=0,canal6Modo3=0;
let desbordesModo3=0,rachaModo3=0,efectoColapsoModo3=0,efectoEquipoModo3=0,canalPeligroModo3=0;
let lanzadoEnTurnoModo3 = false;
let bloqueoEntradaModo3 = false;
let mensajeModo3 = "Selecciona cuantos orientadores van a jugar.";
let detalleModo3 = "Canales 1 a 5 tienen capacidad limitada. El canal 6 nunca colapsa.";
let modo3BotonLanzarX,modo3BotonLanzarY,modo3BotonLanzarW,modo3BotonLanzarH;
let modo3BotonPasarX,modo3BotonPasarY,modo3BotonPasarW,modo3BotonPasarH;
let modo3BotonVolverX,modo3BotonVolverY,modo3BotonVolverW,modo3BotonVolverH;
let modo3BotonReiniciarX,modo3BotonReiniciarY,modo3BotonReiniciarW,modo3BotonReiniciarH;
let frameActual = 1;
let frameInicio;

// Sound state
let menuMusicaPlaying = false;
let juegoMusicaPlaying = false;
let ganarMusicaPlaying = false;
let perderMusicaPlaying = false;

// =====================
// PRELOAD
// =====================
function preload() {
  logoCargaImg = loadImage('Hyperion-web/br.png');
  fuente = loadFont('Hyperion-web/PixelOperator-Bold.ttf');
  SonidoClick = loadSound('Hyperion-web/CLICK.mp3');
  menuMusica = loadSound('Hyperion-web/MENU.mp3');
  juegoMusica = loadSound('Hyperion-web/BATALLA.mp3');
  ganarMusica = loadSound('Hyperion-web/WIN.mp3');
  perderMusica = loadSound('Hyperion-web/LOSE.mp3');
  suelo = loadImage('Hyperion-web/Suelo.png');
  fondoTerminal = loadImage('Hyperion-web/FondoTerminal.jpeg');
  ImagenFondo = loadImage('Hyperion-web/ImagenFondo.jpg');
  Logo = loadImage('Hyperion-web/Logo.png');
  botonjugar = loadImage('Hyperion-web/boton3.png');
  botonopciones = loadImage('Hyperion-web/boton2.png');
  botonsalir = loadImage('Hyperion-web/boton1.png');
  fondoModos = loadImage('Hyperion-web/fondomodos.png');
  fondomodo2 = loadImage('Hyperion-web/fondomodo2.png');
  btnmodo1 = loadImage('Hyperion-web/modo1boton.png');
  btnmodo2 = loadImage('Hyperion-web/modo2boton.png');
  btnmodo3 = loadImage('Hyperion-web/botonmodo3.png');
  botonvolver = loadImage('Hyperion-web/botonvolver.png');
  btnArchivar = loadImage('Hyperion-web/botonarchivar.png');
  btnSeguimiento = loadImage('Hyperion-web/botonseguimiento.png');
  btnReportar = loadImage('Hyperion-web/botonrepotar.png');
  cajadetexto = loadImage('Hyperion-web/cajadetexto.png');
  cuadrotexto = loadImage('Hyperion-web/cuadrotexto.png');
  botonpositivomodo2 = loadImage('Hyperion-web/botonpositivomodo2.png');
  botonnormalmodo2 = loadImage('Hyperion-web/botonnormalmodo2.png');
  botonnegativomodo2 = loadImage('Hyperion-web/botonnegativomodo2.png');
  cuadropuntajemodo2 = loadImage('Hyperion-web/cuadropuntajemodo2.png');
  contadormodo2 = loadImage('Hyperion-web/contadormodo2.png');
  corazonlleno = loadImage('Hyperion-web/corazonlleno.png');
  corazonvacio = loadImage('Hyperion-web/corazonvacio.png');
  cuadrovida = loadImage('Hyperion-web/cuadrovida.png');
  pantallaganarmodo2 = loadImage('Hyperion-web/pantallaganarmodo2.png');
  pantallaperdermodo2 = loadImage('Hyperion-web/pantallaperdermodo2.png');
  fondomodo3inicio = loadImage('Hyperion-web/fondomodo3inicio.png');
  fondomodo3juego = loadImage('Hyperion-web/fondomodo3juego.png');
  fondomodo3final = loadImage('Hyperion-web/fondomodo3final.png');
  viejowalter = loadImage('Hyperion-web/walter.png');
  Boss1 = loadImage('Hyperion-web/boss1.png');
  Boss2 = loadImage('Hyperion-web/boss2.png');
  NPC = loadImage('Hyperion-web/NPC.png');
}

// =====================
// SETUP
// =====================
function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();

  bin1X=random(0,width); bin1Y=random(0,height); bin1Vel=random(2,8); bin1C=random(1)>0.5?"1":"0";
  bin2X=random(0,width); bin2Y=random(0,height); bin2Vel=random(2,8); bin2C=random(1)>0.5?"1":"0";
  bin3X=random(0,width); bin3Y=random(0,height); bin3Vel=random(2,8); bin3C=random(1)>0.5?"1":"0";
  bin4X=random(0,width); bin4Y=random(0,height); bin4Vel=random(2,8); bin4C=random(1)>0.5?"1":"0";
  bin5X=random(0,width); bin5Y=random(0,height); bin5Vel=random(2,8); bin5C=random(1)>0.5?"1":"0";
  bin6X=random(0,width); bin6Y=random(0,height); bin6Vel=random(2,8); bin6C=random(1)>0.5?"1":"0";
  bin7X=random(0,width); bin7Y=random(0,height); bin7Vel=random(2,8); bin7C=random(1)>0.5?"1":"0";
  bin8X=random(0,width); bin8Y=random(0,height); bin8Vel=random(2,8); bin8C=random(1)>0.5?"1":"0";

  botonW = width*0.4 - width*0.145;
  botonH = height*0.84 - height*0.130;
  botonY = height*0.11;
  btnX1 = width*0.123;
  btnX2 = width*0.376;
  btnX3 = width*0.629;

  panelY = height*(2.0/3.0);
  panelH = height*(1.0/3.0);

  cajaMsgW = width*0.57;
  cajaMsgH = panelH*0.8;
  cajaMsgX = width*0.02;
  cajaMsgY = panelY;

  btnAccionW = width*0.22;
  btnAccionH = panelH*0.22;
  btnAccionY = height*0.75;

  btnArchivarX = width*0.55;
  btnSeguimientoX = width*0.55;
  btnReportarX = width*0.55;

  btnVolverX = width*0.02;
  btnVolverY = height*0.95;
  btnVolverW = width*0.13;
  btnVolverH = height*0.04;

  let btnStartY = panelY + panelH*0.06;
  bossMensaje = int(random(1,12));
  btnAccionY = btnStartY;

  menuMusica.setVolume(0.6);
  juegoMusica.setVolume(0.6);
  ganarMusica.setVolume(0.6);
  perderMusica.setVolume(0.6);

  frameInicio = frameCount;
  estadoActual = ESTADO_INICIO; // skip loading since preload handles it
}

// =====================
// HELPER: play/stop music
// =====================
function playMenuMusica() {
  if (!menuMusica.isPlaying()) {
    juegoMusica.stop();
    ganarMusica.stop();
    perderMusica.stop();
    menuMusica.loop();
  }
}
function playJuegoMusica() {
  if (!juegoMusica.isPlaying()) {
    menuMusica.stop();
    juegoMusica.loop();
  }
}
function playGanarMusica() {
  if (!ganarMusica.isPlaying()) {
    juegoMusica.stop();
    menuMusica.stop();
    perderMusica.stop();
    ganarMusica.play();
  }
}
function playPerderMusica() {
  if (!perderMusica.isPlaying()) {
    juegoMusica.stop();
    menuMusica.stop();
    ganarMusica.stop();
    perderMusica.play();
  }
}
function clickSound() {
  SonidoClick.stop();
  SonidoClick.play();
}

// =====================
// nf equivalent
// =====================
function nf(val, left, right) {
  let str = val.toFixed(right !== undefined ? right : 0);
  return str;
}

// =====================
// DRAW
// =====================
function draw() {
  // Music logic
  if (estadoActual != ESTADO_CARGA) {
    if (estadoActual == ESTADO_MENU || estadoActual == ESTADO_INICIO) {
      playMenuMusica();
    }
    if (estadoActual == ESTADO_MODO1 || estadoActual == ESTADO_MODO2 || estadoActual == ESTADO_MODO3) {
      playJuegoMusica();
    }
    estadoAnterior = estadoActual;
  }

  let espacioentre = panelH * 0.05;

  // ---- ESTADO INICIO ----
  if (estadoActual == ESTADO_INICIO) {
    playMenuMusica();
    image(ImagenFondo, 0, 0, width, height);

    let panelInicioX = width*0.03;
    let panelInicioW = width*(4.0/9.0);
    let centroX = panelInicioX + panelInicioW/2;

    let logoW = panelInicioW*0.85;
    let logoH = logoW*0.37;
    let logoX = centroX - logoW/2;
    let logoY = height*0.12;
    image(Logo, logoX, logoY, logoW, logoH);

    textAlign(CENTER, CENTER);
    textFont(fuente);
    textSize(width*0.013);
    fill(100, 150, 200, 160);
    text("v1.95  |  2026", centroX, height*0.38);

    let btnW3 = panelInicioW*0.60;
    let btnH3 = height*0.16;
    let btnX3l = centroX - btnW3/2;
    let btnJugarY = height*0.45;

    if (mouseX>width*0.136 && mouseX<width*0.367 && mouseY>height*0.477 && mouseY<height*0.575) {
      image(botonjugar, btnX3l-4, btnJugarY-4, btnW3+8, btnH3+8);
    } else {
      image(botonjugar, btnX3l, btnJugarY, btnW3, btnH3);
    }
    fill(255); textSize(width*0.03); textAlign(CENTER,CENTER);
    text("JUGAR", centroX, btnJugarY + btnH3/2);

    let btnOpcionesY = btnJugarY + btnH3 - height*0.01;
    if (mouseX>btnX3l && mouseX<btnX3l+btnW3 && mouseY>btnOpcionesY && mouseY<btnOpcionesY+btnH3) {
      image(botonopciones, btnX3l-4, btnOpcionesY-4, btnW3+8, btnH3+8);
    } else {
      image(botonopciones, btnX3l, btnOpcionesY, btnW3, btnH3);
    }
    fill(255); textSize(width*0.03); textAlign(CENTER,CENTER);
    text("CREDITOS", centroX, btnOpcionesY + btnH3/2);

    let btnSalirY = btnOpcionesY + btnH3 - height*0.01;
    if (mouseX>btnX3l && mouseX<btnX3l+btnW3 && mouseY>btnSalirY && mouseY<btnSalirY+btnH3) {
      image(botonsalir, btnX3l-4, btnSalirY-4, btnW3+8, btnH3+8);
    } else {
      image(botonsalir, btnX3l, btnSalirY, btnW3, btnH3);
    }
    fill(255); textSize(width*0.03); textAlign(CENTER,CENTER);
    text("SALIR", centroX, btnSalirY + btnH3/2);

    textSize(width*0.013); fill(180,180,180,140); textAlign(CENTER,CENTER);
    text("Team Breaking Bugs", centroX, height*0.95);
  }

  // ---- ESTADO CREDITOS ----
  if (estadoActual == ESTADO_CREDITOS) {
    background(4,8,18);
    image(ImagenFondo, 0, 0, width, height);
    fill(0,0,0,190);
    rect(width*0.10, height*0.08, width*0.80, height*0.78, 20);
    noFill();
    stroke(0,255,200,160); strokeWeight(3);
    rect(width*0.10, height*0.08, width*0.80, height*0.78, 20);
    noStroke();
    textAlign(CENTER,CENTER);
    fill(0,255,180); textSize(width*0.045);
    text("CREDITOS", width*0.50, height*0.17);
    fill(230,245,255); textSize(width*0.026);
    text("TEAM BREAKING BUGS", width*0.50, height*0.28);
    textSize(width*0.019);
    text("Lider del proyecto: Moises Jacome", width*0.50, height*0.38);
    text("Gerente de proyecto: Ferney Jimenez", width*0.50, height*0.46);
    text("Diseñador de proyecto: Luis Padilla", width*0.50, height*0.54);
    textSize(width*0.014);
    text("Agradecimientos: A la docente de Algoritmia y programacion 1", width*0.50, height*0.60);
    text("Rocio del Rosario Ramos Rodriguez", width*0.50, height*0.65);
    text("Music by Nikita Kondrashev from Pixabay", width*0.50, height*0.70);
    text("Music by Punch Deck", width*0.50, height*0.74);
    if (mouseX>width*0.39 && mouseX<width*0.61 && mouseY>height*0.78 && mouseY<height*0.86) {
      fill(0,255,180,230);
    } else {
      fill(0,130,160,210);
    }
    rect(width*0.39, height*0.78, width*0.22, height*0.08, 12);
    fill(255); textSize(width*0.026);
    text("VOLVER", width*0.50, height*0.82);
  }

  // ---- btnColX/bW/bH/bY shared ----
  btnColX = width*0.55;
  btnBW = width*0.42;
  btnBH = panelH*0.22;
  btnBY1 = panelY + panelH*0.08;
  btnBY2 = btnBY1 + btnBH + espacioentre;
  btnBY3 = btnBY2 + btnBH + espacioentre;

  // ---- ESTADO MENU ----
  if (estadoActual == ESTADO_MENU) {
    ganarMusica.stop(); perderMusica.stop(); juegoMusica.stop();
    playMenuMusica();

    background(0);
    image(fondoModos, 0, 0, width, height);

    let flotar1 = sin(frameCount*0.04)*10;
    let yModo1 = botonY + flotar1;
    if (mouseX>width*0.145 && mouseX<width*0.354 && mouseY>height*0.132 && mouseY<height*0.8) {
      image(btnmodo1, btnX1-4, yModo1-4, botonW+8, botonH+8);
    } else {
      image(btnmodo1, btnX1, yModo1, botonW, botonH);
    }

    let flotar2 = sin(frameCount*0.04+1.5)*10;
    let yModo2 = botonY + flotar2;
    if (mouseX>width*0.398 && mouseX<width*0.607 && mouseY>height*0.132 && mouseY<height*0.8) {
      image(btnmodo2, btnX2-4, yModo2-4, botonW+8, botonH+8);
    } else {
      image(btnmodo2, btnX2, yModo2, botonW, botonH);
    }

    let flotar3 = sin(frameCount*0.04+3.0)*10;
    let yModo3 = botonY + flotar3;
    if (mouseX>width*0.647 && mouseX<width*0.861 && mouseY>height*0.132 && mouseY<height*0.8) {
      image(btnmodo3, btnX3-4, yModo3-4, botonW+8, botonH+8);
    } else {
      image(btnmodo3, btnX3, yModo3, botonW, botonH);
    }

    if (mouseX>width*0.02 && mouseX<width*0.09 && mouseY>height*0.88 && mouseY<height*0.98) {
      image(botonvolver, width*0.02-4, height*0.88-4, width*0.07+8, height*0.1+8);
    } else {
      image(botonvolver, width*0.02, height*0.88, width*0.07, height*0.1);
    }
  }

  // ---- ESTADO MODO1 ----
  if (estadoActual == ESTADO_MODO1) {
    if (subEstadoModo1 != 4 && subEstadoModo1 != 5) {
      playJuegoMusica();
    }

    // Sub 0: Glitch
    if (subEstadoModo1 == 0) {
      background(0);
      contadorFrames++;
      for (let i=0; i<10; i++) {
        stroke(0, 255, 100, random(100,255));
        strokeWeight(random(1,5));
        let yGlitch = random(height);
        line(0, yGlitch, width, yGlitch);
      }
      textAlign(CENTER,CENTER); textSize(width*0.05); fill(0,255,100);
      text("ACCEDIENDO AL SISTEMA...", width/2, height/2);
      if (contadorFrames > 60) { subEstadoModo1=1; contadorFrames=0; }
    }

    // Sub 1: Lore typewriter
    if (subEstadoModo1 == 1) {
      background(5,10,5);
      noFill(); stroke(0,255,100,100); strokeWeight(2);
      rect(width*0.05, height*0.05, width*0.9, height*0.9, 20);
      noStroke();
      if (frameCount%2==0 && caracteresAMostrar < textoLore.length) caracteresAMostrar++;
      fill(0,255,100); textAlign(LEFT,TOP); textSize(width*0.025);
      text(textoLore.substring(0, caracteresAMostrar), width*0.1, height*0.15);
      contadorFrames++;
      if (contadorFrames > 420) {
        textAlign(CENTER,CENTER);
        fill(255,255,255, 150+sin(frameCount*0.1)*100);
        text("HAZ CLIC PARA INGRESAR A LA TERMINAL", width/2, height*0.85);
        rondaActual=1; vidaJugador=3; nivel=1; puntaje=0; mensajeActuaLID=1; bossVida=100;
      }
    }

    // Sub 2: Instructions screen
    if (subEstadoModo1 == 2) {
      background(5,10,20);
      image(fondoTerminal, 0, 0, width, height);
      fill(0,0,0,205); rect(width*0.07,height*0.08,width*0.86,height*0.78,18);
      noFill(); stroke(0,255,120,180); strokeWeight(3);
      rect(width*0.07,height*0.08,width*0.86,height*0.78,18); noStroke();
      textAlign(CENTER,CENTER); fill(0,255,120); textSize(width*0.038);
      text("PROTOCOLO ANTI-CIBERBULLYING", width*0.50, height*0.17);
      fill(230,255,240); textSize(width*0.019);
      text("En 2086 casi toda la vida social ocurre dentro de la Red Hyperion.", width*0.50, height*0.26);
      text("El acoso digital y el ciberbullying estan contaminando la convivencia.", width*0.50, height*0.34);
      text("Tu mision es prevenir danos antes de que los mensajes escalen.", width*0.50, height*0.42);
      text("Lee cada caso y decide la respuesta mas responsable:", width*0.50, height*0.51);
      text("ARCHIVAR: comentario sin amenaza directa.  SEGUIMIENTO: riesgo medio.", width*0.50, height*0.59);
      text("REPORTAR: amenaza, chantaje, hostigamiento fuerte o peligro real.", width*0.50, height*0.67);
      text("En los jefes enfrentas focos de acoso: apoya, confronta o ataca.", width*0.50, height*0.72);
      if (mouseX>width*0.36 && mouseX<width*0.64 && mouseY>height*0.76 && mouseY<height*0.84) {
        fill(0,255,120,230);
      } else { fill(0,120,80,220); }
      rect(width*0.36, height*0.76, width*0.28, height*0.08, 12);
      fill(255); textSize(width*0.024);
      text("INICIAR TERMINAL", width*0.50, height*0.80);
    }

    // Sub 3: Main gameplay
    if (subEstadoModo1 == 3) {
      background(10,15,15);
      image(fondoTerminal, 0, 0, width, height);

      let vpX = width*(66.0/1536.0);
      let vpY = height*(191.0/864.0);
      let vpW = width*((1452.0-66.0)/1536.0);
      let vpH = height*((557.0-191.0)/864.0);

      let escala = 0.3;
      let sueloW = suelo.width*escala;
      let sueloH = suelo.height*escala;
      let sueloX = vpX + (vpW-sueloW)/2.0;
      let sueloY = vpY + vpH - sueloH + 150;
      image(suelo, sueloX, sueloY, sueloW, sueloH);

      let personajesBaseY = sueloY + sueloH*0.53;
      let walterH = height*0.20;
      let walterW = walterH*(viejowalter.width/viejowalter.height);
      image(viejowalter, sueloX+sueloW*0.28-walterW/2, personajesBaseY-walterH, walterW, walterH);
      if (nivel==2) {
        let bossH=height*0.22; let bossW=bossH*(Boss1.width/Boss1.height);
        image(Boss1, sueloX+sueloW*0.72-bossW/2, personajesBaseY-bossH, bossW, bossH);
      } else if (nivel==4) {
        let bossH=height*0.22; let bossW=bossH*(Boss2.width/Boss2.height);
        image(Boss2, sueloX+sueloW*0.72-bossW/2, personajesBaseY-bossH, bossW, bossH);
      }

      // Binary rain
      textAlign(CENTER,CENTER); textSize(width*0.012);
      fill(0,255,100,int(random(40,140))); text(bin1C,bin1X,bin1Y); bin1Y+=bin1Vel;
      if(bin1Y>height){bin1Y=0;bin1X=random(0,width);bin1Vel=random(2,8);bin1C=random(1)>0.5?"1":"0";}
      fill(0,255,100,int(random(40,140))); text(bin2C,bin2X,bin2Y); bin2Y+=bin2Vel;
      if(bin2Y>height){bin2Y=0;bin2X=random(0,width);bin2Vel=random(2,8);bin2C=random(1)>0.5?"1":"0";}
      fill(0,255,100,int(random(40,140))); text(bin3C,bin3X,bin3Y); bin3Y+=bin3Vel;
      if(bin3Y>height){bin3Y=0;bin3X=random(0,width);bin3Vel=random(2,8);bin3C=random(1)>0.5?"1":"0";}
      fill(0,255,100,int(random(40,140))); text(bin4C,bin4X,bin4Y); bin4Y+=bin4Vel;
      if(bin4Y>height){bin4Y=0;bin4X=random(0,width);bin4Vel=random(2,8);bin4C=random(1)>0.5?"1":"0";}
      fill(0,255,100,int(random(40,140))); text(bin5C,bin5X,bin5Y); bin5Y+=bin5Vel;
      if(bin5Y>height){bin5Y=0;bin5X=random(0,width);bin5Vel=random(2,8);bin5C=random(1)>0.5?"1":"0";}
      fill(0,255,100,int(random(40,140))); text(bin6C,bin6X,bin6Y); bin6Y+=bin6Vel;
      if(bin6Y>height){bin6Y=0;bin6X=random(0,width);bin6Vel=random(2,8);bin6C=random(1)>0.5?"1":"0";}
      fill(0,255,100,int(random(40,140))); text(bin7C,bin7X,bin7Y); bin7Y+=bin7Vel;
      if(bin7Y>height){bin7Y=0;bin7X=random(0,width);bin7Vel=random(2,8);bin7C=random(1)>0.5?"1":"0";}
      fill(0,255,100,int(random(40,140))); text(bin8C,bin8X,bin8Y); bin8Y+=bin8Vel;
      if(bin8Y>height){bin8Y=0;bin8X=random(0,width);bin8Vel=random(2,8);bin8C=random(1)>0.5?"1":"0";}

      // Stats timers
      timerMemoria++; timerLatencia++; timerPaquetes++;
      if(timerMemoria>=intervaloMemoria){memoriaTarget=random(1.2,7.8);intervaloMemoria=int(random(120,300));timerMemoria=0;}
      if(timerLatencia>=intervaloLatencia){latenciaTarget=random(12,340);intervaloLatencia=int(random(60,150));timerLatencia=0;}
      if(timerPaquetes>=intervaloPaquetes){paquetesTarget=random(0,18);intervaloPaquetes=int(random(90,200));timerPaquetes=0;}
      memoriaGB = memoriaGB + (memoriaTarget-memoriaGB)*0.02;
      latenciaMS = latenciaMS + (latenciaTarget-latenciaMS)*0.05;
      paquetesPercent = paquetesPercent + (paquetesTarget-paquetesPercent)*0.03;

      textAlign(LEFT,TOP); textSize(width*0.011); fill(0,255,100);
      text(nf(memoriaGB,1,1)+" Terabytes", width*(66.0/1536.0), height*(118.0/864.0));
      text(nf(latenciaMS,1,0)+" ms", width*(1374.0/1536.0), height*(71.0/864.0));
      text(nf(paquetesPercent,1,1)+"%", width*(1458.0/1536.0), height*(94.0/864.0));

      stroke(0,255,100,80); strokeWeight(1); line(0,panelY,width,panelY); noStroke();

      if(puntaje<1000){ ESTADO="PELIGROSO"; }
      else if(puntaje>1000 && puntaje<1500){ ESTADO="NORMAL"; }
      else if(puntaje<1500){ ESTADO="SEGURO"; }

      image(cajadetexto, cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH);
      textAlign(LEFT,CENTER); textSize(width*0.011); fill(0,255,100,150);
      text("▼ MENSAJE INTERCEPTADO", cajaMsgX+55, panelY+panelH*0.039);

      textAlign(CENTER,CENTER);
      if (nivel%2!=0) {
        textSize(width*0.025); fill(255,255,100);
        text("ESTADO DEL SERVIDOR: [ "+ESTADO+" ]"+"|   RONDA: "+rondaActual+"/"+rondaMax, width/2, height*0.10);
      }
      textSize(width*0.015); fill(200,200,255);
      text("FIREWALL FRAGMENTS: [ "+puntaje+" ]", width/2, height*0.15);

      let paddingX = cajaMsgX+(width*0.03);
      let paddingY = cajaMsgY+(height*0.04);

      // Nivel/mensaje switch
      drawMensajeNivel(nivel, paddingX, paddingY);

      // Action buttons
      colX = width*0.63;
      bW = width*0.32;
      bH = panelH*0.28;
      bY1 = panelY + panelH*0.02;
      bY2 = bY1 + bH + espacioentre;
      bY3 = bY2 + bH + espacioentre;

      if (nivel%2==0) {
        btnArchivarC="Apoyar"; btnSeguimientoC="Confrontar"; btnReportarC="Atacar";
      } else {
        btnArchivarC="Archivar"; btnSeguimientoC="Seguimiento"; btnReportarC="Reportar";
      }

      if(mouseX>colX&&mouseX<colX+bW&&mouseY>bY1&&mouseY<bY1+bH){image(btnArchivar,colX-4,bY1-4,bW+8,bH+8);}
      else{image(btnArchivar,colX,bY1,bW,bH);}
      fill(255); textSize(width*0.03); textAlign(CENTER,CENTER);
      text(btnArchivarC, colX+bW/2, bY1+bH/2);

      if(mouseX>colX&&mouseX<colX+bW&&mouseY>bY2&&mouseY<bY2+bH){image(btnSeguimiento,colX-4,bY2-4,bW+8,bH+8);}
      else{image(btnSeguimiento,colX,bY2,bW,bH);}
      fill(255); textSize(width*0.03); textAlign(CENTER,CENTER);
      text(btnSeguimientoC, colX+bW/2, bY2+bH/2);

      if(mouseX>colX&&mouseX<colX+bW&&mouseY>bY3&&mouseY<bY3+bH){image(btnReportar,colX-4,bY3-4,bW+8,bH+8);}
      else{image(btnReportar,colX,bY3,bW,bH);}
      fill(255); textSize(width*0.03); textAlign(CENTER,CENTER);
      text(btnReportarC, colX+bW/2, bY3+bH/2);

      // Back button
      if(mouseX>btnVolverX&&mouseX<btnVolverX+btnVolverW&&mouseY>btnVolverY&&mouseY<btnVolverY+btnVolverH){
        fill(100); rect(btnVolverX-4,btnVolverY-4,btnVolverW+8,btnVolverH+8,5);
      } else { fill(100,200); rect(btnVolverX,btnVolverY,btnVolverW,btnVolverH,5); }
      fill(255); textSize(width*0.015); textAlign(CENTER,CENTER);
      text("<- DESCONECTAR", btnVolverX+btnVolverW/2, btnVolverY+btnVolverH/2);
    }

    // Sub 4: Win
    if (subEstadoModo1 == 4) {
      playGanarMusica();
      background(0,18,25);
      image(fondoTerminal,0,0,width,height);
      fill(0,0,0,210); rect(width*0.12,height*0.14,width*0.76,height*0.66,18);
      noFill(); stroke(0,255,180,190); strokeWeight(4);
      rect(width*0.12,height*0.14,width*0.76,height*0.66,18); noStroke();
      textAlign(CENTER,CENTER);
      fill(0,255,180); textSize(width*0.047);
      text("GANASTE", width*0.50, height*0.26);
      fill(235,255,250); textSize(width*0.020);
      text(resultadoModo1, width*0.50, height*0.44);
      text("Prevenir tambien es actuar a tiempo.", width*0.50, height*0.56);
      fill(0,150,140,230); rect(width*0.38,height*0.66,width*0.24,height*0.075,12);
      fill(255); textSize(width*0.024);
      text("VOLVER AL MENU", width*0.50, height*0.695);
    }

    // Sub 5: Lose
    if (subEstadoModo1 == 5) {
      playPerderMusica();
      background(18,0,10);
      image(fondoTerminal,0,0,width,height);
      fill(0,0,0,220); rect(width*0.12,height*0.14,width*0.76,height*0.66,18);
      noFill(); stroke(255,42,85,200); strokeWeight(4);
      rect(width*0.12,height*0.14,width*0.76,height*0.66,18); noStroke();
      textAlign(CENTER,CENTER);
      fill(255,42,85); textSize(width*0.047);
      text("PERDISTE", width*0.50, height*0.26);
      fill(255,230,238); textSize(width*0.020);
      text(resultadoModo1, width*0.50, height*0.44);
      text("Vuelve a intentarlo y protege a la victima antes de que escale.", width*0.50, height*0.56);
      fill(150,20,45,230); rect(width*0.38,height*0.66,width*0.24,height*0.075,12);
      fill(255); textSize(width*0.024);
      text("VOLVER AL MENU", width*0.50, height*0.695);
    }
  }

  // ---- ESTADO MODO2 ----
  if (estadoActual == ESTADO_MODO2) {
    if (!ganar && !perder) {
      ganarMusica.stop(); perderMusica.stop();
      playJuegoMusica();
    }
    if (ganar) { juegoMusica.stop(); perderMusica.stop(); playGanarMusica(); }
    else if (perder) { juegoMusica.stop(); ganarMusica.stop(); playPerderMusica(); }

    if (subestadoModo2==2) {
      image(fondomodo2,0,0,width,height);
      image(cuadropuntajemodo2,width*0.018,height*0.46,width*0.19,height*0.19);
      image(contadormodo2,width*0.018,height*0.662,width*0.19,height*0.19);
      image(cuadrovida,width*0.018,height*0.20,width*0.19,height*0.24);

      let corazonX=width*0.039, corazonY=height*0.2725;
      let corazonW=width*0.035, corazonH=corazonW;
      for (let i=0;i<5;i++) {
        if(i<vidasModo2) image(corazonlleno,corazonX+i*corazonW*0.8,corazonY,corazonW,corazonH);
        else image(corazonvacio,corazonX+i*corazonW*0.8,corazonY,corazonW,corazonH);
      }

      // Set current message
      let msgs = [null,mensaje2Actual1,mensaje2Actual2,mensaje2Actual3,mensaje2Actual4,mensaje2Actual5,
        mensaje2Actual6,mensaje2Actual7,mensaje2Actual8,mensaje2Actual9,mensaje2Actual10,
        mensaje2Actual11,mensaje2Actual12,mensaje2Actual13,mensaje2Actual14,mensaje2Actual15,
        mensaje2Actual16,mensaje2Actual17,mensaje2Actual18,mensaje2Actual19,mensaje2Actual20,
        mensaje2Actual21,mensaje2Actual22,mensaje2Actual23,mensaje2Actual24,mensaje2Actual25,
        mensaje2Actual26,mensaje2Actual27,mensaje2Actual28,mensaje2Actual29,mensaje2Actual30];
      let rtas = [null,1,2,3,1,2,3,3,1,3,2,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2];
      mensajeMostrado = msgs[mensaje2ActualID] || " ";
      respuestacorrecta = rtas[mensaje2ActualID] || 1;

      btnPositivoX=width*0.265; btnNormalX=width*0.468; btnNegativoX=width*0.673;
      btnY=height*0.825; btnW=width*0.192; btnH=height*0.1;
      contadorFrames2--;

      textAlign(CENTER,CENTER); fill(255); textSize(width*0.045);
      text(puntaje2, width*0.11, height*0.575);
      text(Math.floor(contadorFrames2/60), width*0.13, height*0.779);
      text(contadorrondas+"/30", width*0.11, height*0.11);

      image(cuadrotexto, textX-width*0.08, textY-height*0.05, width*0.3, height*0.15);
      fill(255); textSize(width*0.02); textAlign(LEFT,TOP);
      text(mensajeMostrado, textX, textY);

      if(mouseX>btnPositivoX&&mouseX<btnPositivoX+btnW&&mouseY>btnY&&mouseY<btnY+btnH){
        image(botonpositivomodo2,btnPositivoX-4,btnY-4,btnW+8,btnH+8);
      } else { image(botonpositivomodo2,btnPositivoX,btnY,btnW,btnH); }

      if(mouseX>btnNormalX&&mouseX<btnNormalX+btnW&&mouseY>btnY&&mouseY<btnY+btnH){
        image(botonnormalmodo2,btnNormalX-4,btnY-4,btnW+8,btnH+8);
      } else { image(botonnormalmodo2,btnNormalX,btnY,btnW,btnH); }

      if(mouseX>btnNegativoX&&mouseX<btnNegativoX+btnW&&mouseY>btnY&&mouseY<btnY+btnH){
        image(botonnegativomodo2,btnNegativoX-4,btnY-4,btnW+8,btnH+8);
      } else { image(botonnegativomodo2,btnNegativoX,btnY,btnW,btnH); }

      if (contadorFrames2<=0) { perder=true; ganar=false; subestadoModo2=3; }

    } else if (subestadoModo2==3) {
      let pantalla = ganar ? pantallaganarmodo2 : pantallaperdermodo2;
      textAlign(CENTER,CENTER); textSize(width*0.065); fill(255);
      image(pantalla,0,0,width,height);
      text(puntaje2, width*0.145, height*0.287);
      text(mensajeAcertado, width*0.145, height*0.55);
      text(mensajeErrado, width*0.145, height*0.785);

      textAlign(LEFT,TOP); textSize(width*0.015); fill(255);
      text(falloMensaje1, width*0.45, height*0.414);
      text(falloMensaje2, width*0.45, height*0.51);
      text(falloMensaje3, width*0.45, height*0.60);
      text(falloMensaje4, width*0.45, height*0.696);
      text(falloMensaje5, width*0.45, height*0.789);

      textSize(width*0.02);
      text(falloRespuesta1, width*0.7, height*0.444);
      text(falloRespuesta2, width*0.7, height*0.54);
      text(falloRespuesta3, width*0.7, height*0.632);
      text(falloRespuesta4, width*0.7, height*0.726);
      text(falloRespuesta5, width*0.7, height*0.819);

      if(mouseX>width*0.02&&mouseX<width*0.09&&mouseY>height*0.88&&mouseY<height*0.98){
        image(botonvolver,width*0.02-4,height*0.88-4,width*0.07+8,height*0.1+8);
      } else { image(botonvolver,width*0.02,height*0.88,width*0.07,height*0.1); }
    }
  }

  // ---- ESTADO MODO3 ----
  if (estadoActual == ESTADO_MODO3) {
    if (subestadoModo3 != 2) {
      ganarMusica.stop(); perderMusica.stop();
      playJuegoMusica();
    } else {
      juegoMusica.stop(); perderMusica.stop();
      playGanarMusica();
    }

    if (subestadoModo3==0) image(fondomodo3inicio,0,0,width,height);
    if (subestadoModo3==3) image(fondomodo3inicio,0,0,width,height);
    if (subestadoModo3==1) image(fondomodo3juego,0,0,width,height);
    if (subestadoModo3==2) image(fondomodo3final,0,0,width,height);

    modo3BotonVolverX=width*0.02; modo3BotonVolverY=height*0.88;
    modo3BotonVolverW=width*0.07; modo3BotonVolverH=height*0.1;

    if(mouseX>modo3BotonVolverX&&mouseX<modo3BotonVolverX+modo3BotonVolverW&&mouseY>modo3BotonVolverY&&mouseY<modo3BotonVolverY+modo3BotonVolverH){
      image(botonvolver,modo3BotonVolverX-4,modo3BotonVolverY-4,modo3BotonVolverW+8,modo3BotonVolverH+8);
    } else { image(botonvolver,modo3BotonVolverX,modo3BotonVolverY,modo3BotonVolverW,modo3BotonVolverH); }

    if (subestadoModo3==3) {
      fill(0,0,0,210); rect(width*0.08,height*0.10,width*0.84,height*0.74,18);
      noFill(); stroke(255,145,145,210); strokeWeight(3);
      rect(width*0.08,height*0.10,width*0.84,height*0.74,18); noStroke();
      textAlign(CENTER,CENTER); fill(255,220,220); textSize(width*0.040);
      text("AISLANDO EL BULLYING", width*0.50, height*0.18);
      fill(255,240,240); textSize(width*0.020);
      text("Cada orientador empieza con 15 casos pendientes.", width*0.50, height*0.29);
      text("Lanza el dado para enviar un caso al canal indicado.", width*0.50, height*0.37);
      text("Los canales 1 a 5 tienen limite: si caen llenos, colapsan.", width*0.50, height*0.45);
      text("Cuando un canal colapsa, sus casos vuelven al orientador y pierde el turno.", width*0.50, height*0.53);
      text("El canal 6 es seguro: siempre aisla 1 caso y nunca colapsa.", width*0.50, height*0.61);
      text("Gana quien logre quedarse sin casos pendientes.", width*0.50, height*0.68);
      if(mouseX>width*0.36&&mouseX<width*0.64&&mouseY>height*0.735&&mouseY<height*0.815){
        fill(255,145,145,235);
      } else { fill(120,35,45,225); }
      rect(width*0.36,height*0.735,width*0.28,height*0.08,12);
      fill(255); textSize(width*0.024);
      text("CONTINUAR", width*0.50, height*0.775);

    } else if (subestadoModo3==0) {
      let selW=width*0.164, selH=height*0.423, selY=height*0.372;
      let selX2=width*0.057, selX3=width*0.245, selX4=width*0.423, selX5=width*0.600, selX6=width*0.777;
      noFill(); stroke(255,145,145,240); strokeWeight(5);
      let selHoverInset=height*0.010;
      if(mouseX>selX2&&mouseX<selX2+selW&&mouseY>selY&&mouseY<selY+selH) rect(selX2+selHoverInset,selY+selHoverInset,selW-selHoverInset*2,selH-selHoverInset*2,18);
      if(mouseX>selX3&&mouseX<selX3+selW&&mouseY>selY&&mouseY<selY+selH) rect(selX3+selHoverInset,selY+selHoverInset,selW-selHoverInset*2,selH-selHoverInset*2,18);
      if(mouseX>selX4&&mouseX<selX4+selW&&mouseY>selY&&mouseY<selY+selH) rect(selX4+selHoverInset,selY+selHoverInset,selW-selHoverInset*2,selH-selHoverInset*2,18);
      if(mouseX>selX5&&mouseX<selX5+selW&&mouseY>selY&&mouseY<selY+selH) rect(selX5+selHoverInset,selY+selHoverInset,selW-selHoverInset*2,selH-selHoverInset*2,18);
      if(mouseX>selX6&&mouseX<selX6+selW&&mouseY>selY&&mouseY<selY+selH) rect(selX6+selHoverInset,selY+selHoverInset,selW-selHoverInset*2,selH-selHoverInset*2,18);
      noStroke();

    } else if (subestadoModo3==1) {
      let casosActualesModo3=0;
      if(jugadorActualModo3==1) casosActualesModo3=casosJugador1Modo3;
      if(jugadorActualModo3==2) casosActualesModo3=casosJugador2Modo3;
      if(jugadorActualModo3==3) casosActualesModo3=casosJugador3Modo3;
      if(jugadorActualModo3==4) casosActualesModo3=casosJugador4Modo3;
      if(jugadorActualModo3==5) casosActualesModo3=casosJugador5Modo3;
      if(jugadorActualModo3==6) casosActualesModo3=casosJugador6Modo3;

      textAlign(CENTER,CENTER);
      let slotX=width*0.035, slotW=width*0.179, slotH=height*0.078;
      let slotY=height*0.228, slotGap=height*0.098;
      for (let indiceModo3=1; indiceModo3<=jugadoresModo3; indiceModo3++) {
        let slotActualY=slotY+(indiceModo3-1)*slotGap;
        if(jugadorActualModo3==indiceModo3){
          noFill(); stroke(255,145,145,240); strokeWeight(3);
          rect(slotX,slotActualY,slotW,slotH,10); noStroke();
        }
        let casosMostrarModo3=0;
        if(indiceModo3==1) casosMostrarModo3=casosJugador1Modo3;
        if(indiceModo3==2) casosMostrarModo3=casosJugador2Modo3;
        if(indiceModo3==3) casosMostrarModo3=casosJugador3Modo3;
        if(indiceModo3==4) casosMostrarModo3=casosJugador4Modo3;
        if(indiceModo3==5) casosMostrarModo3=casosJugador5Modo3;
        if(indiceModo3==6) casosMostrarModo3=casosJugador6Modo3;
        fill(255,235,235); textSize(slotH*0.42);
        text(casosMostrarModo3+" casos", slotX+slotW*0.63, slotActualY+slotH*0.52);
      }

      let cW=width*0.160, cH=height*0.238, cY1=height*0.232, cY2=height*0.498;
      let cX1=width*0.245, cX2=width*0.421, cX3=width*0.595;
      let barraAncho=cW*0.78, barraAlto=cH*0.075;
      let barraDX=cW*0.08, barraDYArriba=cH*0.860, barraDYAbajo=cH*0.895;

      fill(255,240,240); textSize(cH*0.22);
      text(canal1Modo3+"/1", cX1+cW/2, cY1+cH*0.58);
      text(canal2Modo3+"/2", cX2+cW/2, cY1+cH*0.58);
      text(canal3Modo3+"/3", cX3+cW/2, cY1+cH*0.58);
      text(canal4Modo3+"/4", cX1+cW/2, cY2+cH*0.58);
      text(canal5Modo3+"/5", cX2+cW/2, cY2+cH*0.58);
      textSize(cH*0.24); text(canal6Modo3, cX3+cW/2, cY2+cH*0.60);

      fill(70,12,12,200);
      rect(cX1+barraDX,cY1+barraDYArriba,barraAncho,barraAlto,8);
      rect(cX2+barraDX,cY1+barraDYArriba,barraAncho,barraAlto,8);
      rect(cX3+barraDX,cY1+barraDYArriba,barraAncho,barraAlto,8);
      rect(cX1+barraDX,cY2+barraDYAbajo,barraAncho,barraAlto,8);
      rect(cX2+barraDX,cY2+barraDYAbajo,barraAncho,barraAlto,8);

      fill(255,75,75); rect(cX1+barraDX,cY1+barraDYArriba,barraAncho*(canal1Modo3/1.0),barraAlto,8);
      fill(255,105,70); rect(cX2+barraDX,cY1+barraDYArriba,barraAncho*(canal2Modo3/2.0),barraAlto,8);
      fill(255,135,65); rect(cX3+barraDX,cY1+barraDYArriba,barraAncho*(canal3Modo3/3.0),barraAlto,8);
      fill(255,170,60); rect(cX1+barraDX,cY2+barraDYAbajo,barraAncho*(canal4Modo3/4.0),barraAlto,8);
      fill(255,210,60); rect(cX2+barraDX,cY2+barraDYAbajo,barraAncho*(canal5Modo3/5.0),barraAlto,8);

      fill(255,240,240);
      let dadoCajaHModo3=height*0.167;
      textSize(dadoCajaHModo3*0.32);
      text(dadoModo3==0?"?":dadoModo3, width*0.875, height*0.340);

      fill(255,235,235);
      let turnoFranjaHModo3=height*0.094;
      textSize(turnoFranjaHModo3*0.34); text("Orientador "+jugadorActualModo3, width*0.870, height*0.497);
      textSize(turnoFranjaHModo3*0.30); text("Pendientes: "+casosActualesModo3, width*0.870, height*0.535);
      textSize(turnoFranjaHModo3*0.27); fill(255,220,95); text("Racha x"+rachaModo3, width*0.870, height*0.573);

      canalPeligroModo3=0;
      if(canal1Modo3>=1) canalPeligroModo3=1;
      if(canal2Modo3>=2) canalPeligroModo3=2;
      if(canal3Modo3>=3) canalPeligroModo3=3;
      if(canal4Modo3>=4) canalPeligroModo3=4;
      if(canal5Modo3>=5) canalPeligroModo3=5;
      if(canalPeligroModo3>0){
        fill(255,85,85); textSize(turnoFranjaHModo3*0.22);
        text("PELIGRO: canal "+canalPeligroModo3+" lleno", width*0.870, height*0.610);
      }

      modo3BotonLanzarX=width*0.784; modo3BotonLanzarY=height*0.582;
      modo3BotonLanzarW=width*0.179; modo3BotonLanzarH=height*0.102;
      modo3BotonPasarX=width*0.784; modo3BotonPasarY=height*0.708;
      modo3BotonPasarW=width*0.179; modo3BotonPasarH=height*0.102;

      noFill(); stroke(255,150,150,230); strokeWeight(3);
      let botonHoverInsetModo3=height*0.008;
      if(mouseX>modo3BotonLanzarX&&mouseX<modo3BotonLanzarX+modo3BotonLanzarW&&mouseY>modo3BotonLanzarY&&mouseY<modo3BotonLanzarY+modo3BotonLanzarH)
        rect(modo3BotonLanzarX+botonHoverInsetModo3,modo3BotonLanzarY+botonHoverInsetModo3,modo3BotonLanzarW-botonHoverInsetModo3*2,modo3BotonLanzarH-botonHoverInsetModo3*2,12);
      if(mouseX>modo3BotonPasarX&&mouseX<modo3BotonPasarX+modo3BotonPasarW&&mouseY>modo3BotonPasarY&&mouseY<modo3BotonPasarY+modo3BotonPasarH)
        rect(modo3BotonPasarX+botonHoverInsetModo3,modo3BotonPasarY+botonHoverInsetModo3,modo3BotonPasarW-botonHoverInsetModo3*2,modo3BotonPasarH-botonHoverInsetModo3*2,12);
      noStroke();

      fill(255,235,235); textAlign(CENTER,CENTER);
      let mensajeFranjaHModo3=height*0.070;
      textSize(mensajeFranjaHModo3*0.38); textLeading(mensajeFranjaHModo3*0.45);
      text(mensajeModo3, width*0.246, height*0.832, width*0.50, mensajeFranjaHModo3*0.72);
      fill(255,210,210); textSize(mensajeFranjaHModo3*0.34);
      text(detalleModo3+"  |  Ronda: "+rondasModo3+"  |  Desbordes: "+desbordesModo3, width*0.246, height*0.882, width*0.50, mensajeFranjaHModo3*0.78);

      if(efectoColapsoModo3>0){
        fill(255,0,0,95); rect(0,0,width,height);
        fill(255); textSize(height*0.085); textAlign(CENTER,CENTER);
        text("SOBRECARGA", width*0.50, height*0.47);
        textSize(height*0.035);
        text("El canal colapso y los casos regresan", width*0.50, height*0.56);
        efectoColapsoModo3--;
      }
      if(efectoEquipoModo3>0){
        fill(0,255,150,70); rect(0,0,width,height);
        fill(225,255,245); textSize(height*0.060); textAlign(CENTER,CENTER);
        text("EQUIPO ESPECIALIZADO", width*0.50, height*0.49);
        efectoEquipoModo3--;
      }

    } else if (subestadoModo3==2) {
      let canalesProtegidosModo3=0;
      if(canal1Modo3>0) canalesProtegidosModo3++;
      if(canal2Modo3>0) canalesProtegidosModo3++;
      if(canal3Modo3>0) canalesProtegidosModo3++;
      if(canal4Modo3>0) canalesProtegidosModo3++;
      if(canal5Modo3>0) canalesProtegidosModo3++;
      if(canal6Modo3>0) canalesProtegidosModo3++;
      let casosAisladosModo3=canal1Modo3+canal2Modo3+canal3Modo3+canal4Modo3+canal5Modo3+canal6Modo3;

      textAlign(CENTER,CENTER); fill(255,240,240);
      let ganadorFranjaHModo3=height*0.255;
      textSize(ganadorFranjaHModo3*0.30); text("Orientador "+ganadorModo3, width*0.50, height*0.405);
      fill(255,210,210); textSize(ganadorFranjaHModo3*0.115);
      text("La red quedó protegida y todos los reportes fueron contenidos.", width*0.50, height*0.525);

      fill(255,235,235);
      let estadisticaFranjaHModo3=height*0.165;
      textSize(estadisticaFranjaHModo3*0.57);
      text(rondasModo3, width*0.221, height*0.742);
      text(desbordesModo3, width*0.404, height*0.742);
      text(canalesProtegidosModo3, width*0.593, height*0.742);
      text(casosAisladosModo3, width*0.778, height*0.742);

      modo3BotonReiniciarX=width*0.340; modo3BotonReiniciarY=height*0.864;
      modo3BotonReiniciarW=width*0.321; modo3BotonReiniciarH=height*0.083;

      if(mouseX>modo3BotonReiniciarX&&mouseX<modo3BotonReiniciarX+modo3BotonReiniciarW&&mouseY>modo3BotonReiniciarY&&mouseY<modo3BotonReiniciarY+modo3BotonReiniciarH){
        noFill(); stroke(255,150,150,230); strokeWeight(4);
        let reiniciarHoverInsetModo3=height*0.008;
        rect(modo3BotonReiniciarX+reiniciarHoverInsetModo3,modo3BotonReiniciarY+reiniciarHoverInsetModo3,modo3BotonReiniciarW-reiniciarHoverInsetModo3*2,modo3BotonReiniciarH-reiniciarHoverInsetModo3*2,16);
        noStroke();
      }
      fill(255,245,245); textSize(modo3BotonReiniciarH*0.54);
      text("JUGAR OTRA VEZ", width*0.501, height*0.903);
    }
  }
}

// =====================
// drawMensajeNivel helper
// =====================
function drawMensajeNivel(niv, paddingX, paddingY) {
  if (niv == 1) {
    drawMensajesNivel1(paddingX, paddingY);
    if (puntaje < 1000 && rondaActual > 10) {
      resultadoModo1 = "No alcanzaste el puntaje minimo para contener el ciberacoso. \n Revisa mejor el nivel de riesgo de cada mensaje.";
      subEstadoModo1 = 5;
    }
    if (puntaje >= 1000 && rondaActual > 10) nivel = 2;
  } else if (niv == 2) {
    drawBoss1(paddingX, paddingY);
  } else if (niv == 3) {
    drawMensajesNivel3(paddingX, paddingY);
    if (puntaje < 2000 && rondaActual > 12) {
      resultadoModo1 = "No reuniste suficientes evidencias para prevenir el daño.\n Vuelve a clasificar los casos con mas cuidado.";
      subEstadoModo1 = 5;
    }
    if (puntaje >= 2000 && rondaActual > 12) nivel = 4;
  } else if (niv == 4) {
    drawBoss2(paddingX, paddingY);
  }
}

function drawMensajesNivel1(paddingX, paddingY) {
  let msgs = {
    1: { r:85, fecha:"25/05/2086  |  HORA: 23:45 (Nocturno)", emisor:"15", receptor:"14", reinc:"ALTA", txt:"\"Mañana nadie te va a hablar en el colegio, piérdete.\"" },
    2: { r:62, fecha:"03/06/2086  |  HORA: 14:22 (Tarde)", emisor:"13", receptor:"13", reinc:"MEDIA", txt:"\"Todos dicen que eres un copión, yo también lo creo.\"" },
    3: { r:20, fecha:"10/06/2086  |  HORA: 09:05 (Mañana)", emisor:"14", receptor:"15", reinc:"BAJA", txt:"\"Oye, creo que te equivocaste en el ejercicio de ayer.\"" },
    4: { r:91, fecha:"15/06/2086  |  HORA: 22:10 (Nocturno)", emisor:"17", receptor:"14", reinc:"ALTA", txt:"\"Mándame tus fotos o cuento todo lo que sé de ti.\"" },
    5: { r:45, fecha:"20/06/2086  |  HORA: 16:45 (Tarde)", emisor:"15", receptor:"15", reinc:"MEDIA", txt:"\"Ya nadie quiere estar contigo en el grupo del proyecto.\"" },
    6: { r:15, fecha:"25/06/2086  |  HORA: 11:30 (Mañana)", emisor:"13", receptor:"14", reinc:"BAJA", txt:"\"Jaja ese meme te lo mandé porque me pareció gracioso.\"" },
    7: { r:78, fecha:"01/07/2086  |  HORA: 20:55 (Noche)", emisor:"16", receptor:"13", reinc:"ALTA", txt:"\"Si vas al colegio mañana te va a ir muy mal, te lo juro.\"" },
    8: { r:55, fecha:"08/07/2086  |  HORA: 13:15 (Tarde)", emisor:"14", receptor:"14", reinc:"MEDIA", txt:"\"Le voy a decir a todos que tú fuiste el que habló.\"" },
    9: { r:30, fecha:"12/07/2086  |  HORA: 08:40 (Mañana)", emisor:"15", receptor:"16", reinc:"BAJA", txt:"\"No te molestes en venir al partido, nadie te quiere ahí.\"" },
    10: { r:95, fecha:"18/07/2086  |  HORA: 23:59 (Nocturno)", emisor:"17", receptor:"13", reinc:"ALTA", txt:"\"Tengo tus contraseñas. Haz lo que digo o publico todo.\"" }
  };
  let m = msgs[mensajeActuaLID];
  if (!m) return;
  Riesgo = m.r;
  noStroke();
  textAlign(LEFT,TOP); textSize(width*0.02); fill(200,255,200);
  text("FECHA: "+m.fecha, paddingX, paddingY);
  text("EDAD EMISOR: "+m.emisor+"    |  EDAD RECEPTOR: "+m.receptor, paddingX, paddingY+(height*0.04));
  text("REINCIDENCIA: "+m.reinc+" |  RIESGO CALCULADO: "+Riesgo+"%", paddingX, paddingY+(height*0.08));
  fill(255); textSize(width*0.02);
  text('> '+m.txt, paddingX, paddingY+(height*0.18));
}

function drawBoss1(paddingX, paddingY) {
  textSize(width*0.020); fill(255,42,85); textAlign(CENTER,CENTER);
  text("ESTADO DEL SERVIDOR: [ Critico ] [ Integridad del enemigo: "+bossVida+"% ] |   RONDA:  Error  /  Peligro Inminente ", width/2, height*0.10);

  image(cajadetexto, cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH);
  textAlign(LEFT,CENTER); textSize(width*0.011); fill(0,255,100,150);
  text("▼ MENSAJE INTERCEPTADO", cajaMsgX+55, panelY+panelH*0.039);

  textAlign(LEFT,TOP); textSize(width*0.02); fill(200,255,200);
  text("POSEIDO ", paddingX, paddingY);
  text("Vulnerabilidad: "+Vul+"%", paddingX, paddingY+(height*0.04));
  text("Estabilidad del usuario: "+vidaJugador+" /3  |  RIESGO CALCULADO:  INMENSO %", paddingX, paddingY+(height*0.08));

  let bossMsgs1 = {
    1: { t: '> "¿HappyTech te envió a mí? Qué patético. Ellos también son parte del \nproblema. Tú lo sabes, ¿verdad?"', p:1 },
    2: { t: '> "Yo no elegí fusionarme con el Glitch. El Glitch me eligió a mí porque \nnadie más aguantó lo que yo aguanté."', p:2 },
    3: { t: '> "La Red Hyperion siempre fue una mentira. Yo solo la estoy mostrando \ncomo realmente es."', p:1 },
    4: { t: '> "Los estudiantes que caen… lo merecen. El que no es fuerte, \nno debería estar en la Red."', p:1 },
    5: { t: '> "¿Sabes cuántos mensajes de odio recibí antes de convertirme en esto? \nNadie vino a salvarme a mí."', p:2 },
    6: { t: '> "El Dr. Byte… un psicólogo de datos. ¿De verdad crees que un algoritmo \npuede entender el dolor real?"', p:2 },
    7: { t: '> "A veces… no sé dónde termino yo y dónde empieza el Glitch. Ya ni me \nacuerdo de cómo era antes."', p:3 },
    8: { t: '> "HappyTech construyó esta Red para controlarnos. Yo rompí las cadenas. \nTú sigues con las tuyas puestas."', p:1 },
    9: { t: '> "Psi-Bot. Qué nombre tan ridículo. ¿Te programaron para sentir o solo \npara simular que sientes?"', p:1 },
    10: { t: '> "Cada estudiante que corrompo era alguien que ya estaba roto. Yo solo \naceleré lo inevitable."', p:1 },
    11: { t: '> "Si de verdad fueras tan bueno en tu trabajo… ¿por qué \nllegaste tan tarde?"', p:2 },
    12: { t: '> "…¿Tú crees que aún se puede revertir esto? ¿Que yo… puedo volver?"', p:3 }
  };
  let bm = bossMsgs1[bossMensaje] || bossMsgs1[1];
  preset = bm.p;
  fill(255,42,85); textSize(width*0.015);
  text(bm.t, paddingX, paddingY+(height*0.14));

  if (Vul<0) Vul=0;
  if (bossVida<=0) {
    nivel++; bossMensaje=1; rondaActual=1; vidaJugador=3; puntaje=0; mensajeActuaLID=1; bossVida=100;
  }
  if (vidaJugador<=0) {
    bossMensaje=1;
    resultadoModo1="El foco de acoso supero tu estabilidad. Necesitas proteger al usuario antes de confrontar.";
    subEstadoModo1=5;
  }
}

function drawMensajesNivel3(paddingX, paddingY) {
  rondaMax = 12;
  let msgs = {
    1:{r:42,fecha:"11/01/2086  |  HORA: 08:15 (Mañana)",emisor:"14",receptor:"14",reinc:"BAJA",txt:"\"Todos en el servidor saben que tu avatar es una copia barata.\""},
    2:{r:78,fecha:"15/02/2086  |  HORA: 22:47 (Noche)",emisor:"16",receptor:"15",reinc:"ALTA",txt:"\"Te voy a banear de todos los nodos de Hyperion, no vas a tener donde conectarte.\""},
    3:{r:15,fecha:"22/02/2086  |  HORA: 11:05 (Mañana)",emisor:"12",receptor:"13",reinc:"BAJA",txt:"\"Ey, ¿me compartes el código de acceso al aula virtual de mañana?\""},
    4:{r:93,fecha:"05/03/2086  |  HORA: 01:30 (Madrugada)",emisor:"17",receptor:"15",reinc:"ALTA",txt:"\"Hackee tu perfil. Si hablas, subo tus datos al foro oscuro de Hyperion.\""},
    5:{r:60,fecha:"18/03/2086  |  HORA: 16:00 (Tarde)",emisor:"13",receptor:"13",reinc:"MEDIA",txt:"\"Tu sector en la Red tiene la puntuación más baja. Eres un glitch viviente.\""},
    6:{r:85,fecha:"02/04/2086  |  HORA: 20:10 (Noche)",emisor:"15",receptor:"14",reinc:"ALTA",txt:"\"Creé un bot para que spamee tu avatar cada vez que entres al servidor.\""},
    7:{r:30,fecha:"10/04/2086  |  HORA: 09:45 (Mañana)",emisor:"14",receptor:"15",reinc:"BAJA",txt:"\"Oye, tu última simulación en clase estuvo bien, ¿me explicas cómo la hiciste?\""},
    8:{r:71,fecha:"25/04/2086  |  HORA: 18:33 (Tarde)",emisor:"16",receptor:"16",reinc:"MEDIA",txt:"\"Todo el canal sabe que no tienes implante neuronal. Eres un desconectado.\""},
    9:{r:88,fecha:"07/05/2086  |  HORA: 23:59 (Madrugada)",emisor:"17",receptor:"14",reinc:"ALTA",txt:"\"Te voy a infectar con el Glitch. Cuando amanezca no vas a recordar ni tu ID.\""},
    10:{r:50,fecha:"14/05/2086  |  HORA: 13:20 (Tarde)",emisor:"13",receptor:"13",reinc:"MEDIA",txt:"\"En el foro dijeron que tu sector de Hyperion va a ser borrado por inactivo.\""},
    11:{r:10,fecha:"20/05/2086  |  HORA: 07:00 (Mañana)",emisor:"12",receptor:"12",reinc:"BAJA",txt:"\"¡Buenos días! ¿Nos conectamos antes de clase para repasar el módulo 3?\""},
    12:{r:96,fecha:"03/06/2086  |  HORA: 03:15 (Madrugada)",emisor:"17",receptor:"13",reinc:"ALTA",txt:"\"Ya reporté tu nodo ante los Trolls. Esta noche van a purgar tu existencia digital.\""}
  };
  let m = msgs[mensajeActuaLID];
  if (!m) return;
  Riesgo = m.r;
  noStroke(); textAlign(LEFT,TOP); textSize(width*0.02); fill(200,255,200);
  text("FECHA: "+m.fecha, paddingX, paddingY);
  text("EDAD EMISOR: "+m.emisor+"    |  EDAD RECEPTOR: "+m.receptor, paddingX, paddingY+(height*0.04));
  text("REINCIDENCIA: "+m.reinc+" |  RIESGO CALCULADO: "+Riesgo+"%", paddingX, paddingY+(height*0.08));
  fill(255); textSize(width*0.015);
  text('> '+m.txt, paddingX, paddingY+(height*0.18));
}

function drawBoss2(paddingX, paddingY) {
  textSize(width*0.020); fill(255,42,85); textAlign(CENTER,CENTER);
  text("ESTADO DEL SERVIDOR: [ Critico ] [ Integridad del enemigo: "+bossVida+"% ] |   RONDA:  Error  /  Peligro Inminente ", width/2, height*0.10);

  image(cajadetexto, cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH);
  textAlign(LEFT,CENTER); textSize(width*0.011); fill(0,255,100,150);
  text("▼ MENSAJE INTERCEPTADO", cajaMsgX+55, panelY+panelH*0.039);

  textAlign(LEFT,TOP); textSize(width*0.02); fill(200,255,200);
  text("POSEIDO ", paddingX, paddingY);
  text("Vulnerabilidad: "+Vul+"%", paddingX, paddingY+(height*0.04));
  text("Estabilidad del usuario: "+vidaJugador+" /3  |  RIESGO CALCULADO:  INMENSO %", paddingX, paddingY+(height*0.08));

  let bossMsgs2 = {
    1:{t:'> "¿Crees que clasificar mensajes me va a detener? El Glitch ya está en todas partes."',p:1},
    2:{t:'> "Yo solo quería que me vieran... que alguien en Hyperion supiera que existía."',p:2},
    3:{t:'> "HappyTech borra a los débiles. Yo solo hice lo que el sistema me enseñó."',p:1},
    4:{t:'> "¿Sabes cuántas noches me quedé solo en este servidor sin que nadie me enviara \n ni un ping?"',p:2},
    5:{t:'> "La Red Hyperion es mía ahora. Ningún psicólogo digital me va a reprogramar."',p:1},
    6:{t:'> "A veces siento que el Glitch no me infectó a mí... yo lo generé sin darme cuenta."',p:2},
    7:{t:'> "¡No puedo... no puedo sostener esto! ¡Los nodos se están fragmentando junto conmigo!"',p:3},
    8:{t:'> "Tú y yo somos iguales, Dr. White. Ambos operamos en las sombras del sistema."',p:1},
    9:{t:'> "Nadie me preguntó cómo estaba. Ni un solo usuario en años. Solo ignorancia y silencio."',p:2},
    10:{t:'> "El odio es el único lenguaje que Hyperion entiende. Yo solo hablo su idioma."',p:1},
    11:{t:'> "¿Por qué sigues aquí? Nadie que me conoció de verdad se quedó tanto tiempo."',p:2},
    12:{t:'> "¡El código se rompe! ¡Todo se rompe! ¡No era esto lo que quería!"',p:3},
    13:{t:'> "Destruiré cada nodo de esta red antes de permitir que me atrapen."',p:1},
    14:{t:'> "Empecé a propagar el Glitch porque era la única forma de que alguien me notara."',p:2},
    15:{t:'> "Los estudiantes que infecté no son víctimas. Son los únicos que me entienden."',p:1},
    16:{t:'> "¿Y si todo lo que hice fue un error? ¿Y si aún hay algo que se pueda reparar?"',p:2},
    17:{t:'> "¡Mi firewall está colapsando! ¡Los píxeles... los píxeles me están abandonando!"',p:3},
    18:{t:'> "Mientras exista un solo byte de odio en Hyperion, yo nunca moriré. Nunca."',p:1}
  };
  let bm = bossMsgs2[bossMensaje] || bossMsgs2[1];
  preset = bm.p;
  fill(255,42,85); textSize(width*0.015);
  text(bm.t, paddingX, paddingY+(height*0.14));

  if (Vul<0) Vul=0;
  if (bossVida<=0) {
    resultadoModo1="Contuviste el foco principal de ciberbullying. \n La comunidad de Hyperion queda protegida por ahora.";
    subEstadoModo1=4; bossMensaje=1; rondaActual=1; vidaJugador=3; puntaje=0; mensajeActuaLID=1; bossVida=100;
  }
  if (vidaJugador<=0) {
    bossMensaje=1;
    resultadoModo1="El jefe del acoso supero tu defensa. Hay que intentarlo de nuevo y cortar el daño a tiempo.";
    subEstadoModo1=5;
  }
}

// =====================
// mousePressed
// =====================
function mousePressed() {
  if (estadoActual == ESTADO_INICIO) {
    let panelInicioX=width*0.03, panelInicioW=width*(4.0/9.0);
    let centroX=panelInicioX+panelInicioW/2;
    let btnW3=panelInicioW*0.60, btnH3=height*0.16;
    let btnX3l=centroX-btnW3/2, btnJugarY=height*0.45;
    let btnOpcionesY=btnJugarY+btnH3-height*0.01;
    let btnSalirY=btnOpcionesY+btnH3-height*0.01;

    if (mouseX>width*0.136&&mouseX<width*0.367&&mouseY>height*0.477&&mouseY<height*0.575) {
      clickSound(); estadoActual=ESTADO_MENU;
    } else if (mouseX>width*0.119&&mouseX<width*0.385&&mouseY>height*0.610&&mouseY<height*0.735) {
      clickSound(); estadoActual=ESTADO_CREDITOS;
    } else if (mouseX>width*0.119&&mouseX<width*0.385&&mouseY>height*0.750&&mouseY<height*0.910) {
      clickSound(); // exit() not supported in browser
    }
  }

  if (estadoActual == ESTADO_CREDITOS) {
    if (mouseX>width*0.39&&mouseX<width*0.61&&mouseY>height*0.78&&mouseY<height*0.86) {
      clickSound(); estadoActual=ESTADO_INICIO;
    }
  }

  if (estadoActual == ESTADO_MENU) {
    if (mouseX>width*0.145&&mouseX<width*0.354&&mouseY>height*0.132&&mouseY<0.8*height) {
      clickSound(); estadoActual=ESTADO_MODO1; subEstadoModo1=0; contadorFrames=0;
      caracteresAMostrar=0; rondaActual=1; mensajeActuaLID=1; puntaje=0;
    } else if (mouseX>width*0.398&&mouseX<width*0.607&&mouseY>height*0.132&&mouseY<height*0.8) {
      clickSound(); estadoActual=ESTADO_MODO2;
      textX=random(width*0.3,width*0.733); textY=random(height*0.2,height*0.608);
      subestadoModo2=2; contadorFrames2=3660; contadorrondas=1;
      mensajeErrado=0; mensajeAcertado=0; puntaje2=0; vidasModo2=5;
      cantidadFallosGuardados=0; ganar=false; perder=false; encontrado2=false;
      resetMsjUsados();
      falloMensaje1=falloMensaje2=falloMensaje3=falloMensaje4=falloMensaje5="---------";
      falloRespuesta1=falloRespuesta2=falloRespuesta3=falloRespuesta4=falloRespuesta5="---------";
      encontrado2=false; seleccionarMensaje2();
    } else if (mouseX>width*0.647&&mouseX<width*0.861&&mouseY>height*0.132&&mouseY<height*0.8) {
      clickSound(); estadoActual=ESTADO_MODO3; subestadoModo3=3;
      jugadoresModo3=0; jugadorActualModo3=1; dadoModo3=0; ganadorModo3=0; rondasModo3=1;
      canal1Modo3=canal2Modo3=canal3Modo3=canal4Modo3=canal5Modo3=canal6Modo3=0;
      desbordesModo3=rachaModo3=efectoColapsoModo3=efectoEquipoModo3=canalPeligroModo3=0;
      lanzadoEnTurnoModo3=false; bloqueoEntradaModo3=true;
      mensajeModo3="Selecciona cuantos orientadores van a jugar.";
      detalleModo3="Canales 1 a 5 tienen capacidad limitada. El canal 6 nunca colapsa.";
    } else if (mouseX>width*0.02&&mouseX<width*0.09&&mouseY>height*0.88&&mouseY<height*0.98) {
      clickSound(); estadoActual=ESTADO_INICIO;
    }
  }

  if (estadoActual == ESTADO_MODO1) {
    if (subEstadoModo1==1) {
      if (contadorFrames>420) subEstadoModo1=2;
    } else if (subEstadoModo1==2) {
      if (mouseX>width*0.36&&mouseX<width*0.64&&mouseY>height*0.76&&mouseY<height*0.84) {
        clickSound(); subEstadoModo1=3;
      }
    } else if (subEstadoModo1==3) {
      if (mouseX>btnVolverX&&mouseX<btnVolverX+btnVolverW&&mouseY>btnVolverY&&mouseY<btnVolverY+btnVolverH) {
        clickSound(); estadoActual=ESTADO_MENU;
      }

      let espacioentre2=panelH*0.05;
      colX=width*0.63; bW=width*0.32; bH=panelH*0.28;
      bY1=panelY+panelH*0.02; bY2=bY1+bH+espacioentre2; bY3=bY2+bH+espacioentre2;

      // Archivar/Apoyar
      if (mouseX>colX&&mouseX<colX+bW&&mouseY>bY1&&mouseY<bY1+bH) {
        clickSound();
        if (nivel%2!=0) {
          rondaActual++; mensajeActuaLID++;
          if(Riesgo>=0&&Riesgo<=39){ puntaje+=PPN1; }
          else if(Riesgo>=40&&Riesgo<=69){ puntaje+=int(PPN1/100*40); }
          else if(Riesgo>=70&&Riesgo<=100){ puntaje-=50; }
        } else {
          if(preset==1){ Vul-=int(random(25)); }
          if(preset==2){ Vul+=int(random(25)); }
        }
        if(nivel==2) bossMensaje=int(random(1,12));
        else if(nivel==4) bossMensaje=int(random(1,19));
      }
      // Seguimiento/Confrontar
      if (mouseX>colX&&mouseX<colX+bW&&mouseY>bY2&&mouseY<bY2+bH) {
        clickSound();
        if (nivel%2!=0) {
          rondaActual++; mensajeActuaLID++;
          if(Riesgo>=0&&Riesgo<=39){ puntaje+=int(PPN1/100*50); }
          else if(Riesgo>=40&&Riesgo<=69){ puntaje+=PPN1; }
          else if(Riesgo>=70&&Riesgo<=100){ puntaje+=int(PPN1/100*50); }
        } else {
          if(preset==1){ Vul+=int(random(25)); }
          if(preset==2){ Vul-=int(random(25)); }
        }
        if(nivel==2) bossMensaje=int(random(1,12));
        else if(nivel==4) bossMensaje=int(random(1,19));
      }
      // Reportar/Atacar
      if (mouseX>colX&&mouseX<colX+bW&&mouseY>bY3&&mouseY<bY3+bH) {
        clickSound();
        if (nivel%2!=0) {
          rondaActual++; mensajeActuaLID++;
          if(Riesgo>=0&&Riesgo<=39){ puntaje-=25; }
          else if(Riesgo>=40&&Riesgo<=69){ puntaje+=int(PPN1/100*60); }
          else if(Riesgo>=70&&Riesgo<=100){ puntaje+=PPN1; }
        } else {
          probabilidadAtaque=int(random(100));
          if(Vul<=25){
            if(probabilidadAtaque>85){ vidaJugador-=2; } else { bossVida-=int(random(1,7)); }
          } else if(Vul<=50){
            if(probabilidadAtaque>55){ vidaJugador-=1; } else { bossVida-=int(random(5,16)); }
          } else if(Vul<=75){
            if(probabilidadAtaque>30){ vidaJugador-=1; } else { bossVida-=int(random(15,31)); }
          } else {
            if(probabilidadAtaque>15){ vidaJugador-=1; } else { bossVida-=int(random(25,46)); }
            if(preset==3){ bossVida-=int(random(25,46)); }
          }
          Vul=0;
        }
        if(nivel==2) bossMensaje=int(random(1,12));
        else if(nivel==4) bossMensaje=int(random(1,19));
      }
    } else if (subEstadoModo1==4||subEstadoModo1==5) {
      if (mouseX>width*0.38&&mouseX<width*0.62&&mouseY>height*0.68&&mouseY<height*0.755) {
        clickSound(); estadoActual=ESTADO_MENU; subEstadoModo1=0;
      }
    }
  }

  if (estadoActual == ESTADO_MODO2) {
    if (subestadoModo2==2) {
      encontrado2=false;
      let clicked=0;
      if(mouseX>btnPositivoX&&mouseX<btnPositivoX+btnW&&mouseY>btnY&&mouseY<btnY+btnH){ clicked=1; }
      else if(mouseX>btnNormalX&&mouseX<btnNormalX+btnW&&mouseY>btnY&&mouseY<btnY+btnH){ clicked=2; }
      else if(mouseX>btnNegativoX&&mouseX<btnNegativoX+btnW&&mouseY>btnY&&mouseY<btnY+btnH){ clicked=3; }

      if (clicked>0) {
        clickSound(); respuestaescogida=clicked;
        if(respuestaescogida==respuestacorrecta){
          puntaje2+=100; contadorFrames2+=60; mensajeAcertado++;
        } else {
          mensajeErrado++; contadorFrames2-=60; vidasModo2--;
          if(respuestacorrecta==1) respuestaCorrectaTexto="Positivo";
          else if(respuestacorrecta==2) respuestaCorrectaTexto="Normal";
          else if(respuestacorrecta==3) respuestaCorrectaTexto="Negativo";
          cantidadFallosGuardados++;
          if(cantidadFallosGuardados==1){ falloMensaje1=mensajeMostrado; falloRespuesta1=respuestaCorrectaTexto; }
          else if(cantidadFallosGuardados==2){ falloMensaje2=mensajeMostrado; falloRespuesta2=respuestaCorrectaTexto; }
          else if(cantidadFallosGuardados==3){ falloMensaje3=mensajeMostrado; falloRespuesta3=respuestaCorrectaTexto; }
          else if(cantidadFallosGuardados==4){ falloMensaje4=mensajeMostrado; falloRespuesta4=respuestaCorrectaTexto; }
          else if(cantidadFallosGuardados==5){ falloMensaje5=mensajeMostrado; falloRespuesta5=respuestaCorrectaTexto; }
        }
        textX=random(width*0.3,width*0.733); textY=random(height*0.2,height*0.6);
        contadorrondas++;
        seleccionarMensaje2();
      }

      if(vidasModo2<=0){ subestadoModo2=3; perder=true; ganar=false; }
      else if(contadorrondas>30){ subestadoModo2=3; ganar=true; perder=false; }

    } else if (subestadoModo2==3) {
      if(mouseX>width*0.02&&mouseX<width*0.09&&mouseY>height*0.88&&mouseY<height*0.98){
        clickSound(); estadoActual=ESTADO_MENU;
      }
    }
  }

  if (estadoActual == ESTADO_MODO3) {
    if (bloqueoEntradaModo3==true) {
      bloqueoEntradaModo3=false;
    } else {
      if(mouseX>width*0.02&&mouseX<width*0.09&&mouseY>height*0.88&&mouseY<height*0.98){
        clickSound(); estadoActual=ESTADO_MENU;
      } else if (subestadoModo3==3) {
        if(mouseX>width*0.36&&mouseX<width*0.64&&mouseY>height*0.735&&mouseY<height*0.815){
          clickSound(); subestadoModo3=0;
          mensajeModo3="Selecciona cuantos orientadores van a jugar.";
          detalleModo3="Canales 1 a 5 tienen capacidad limitada. El canal 6 nunca colapsa.";
        }
      } else if (subestadoModo3==0) {
        let selW=width*0.164,selH=height*0.423,selY=height*0.372;
        let selX2=width*0.057,selX3=width*0.245,selX4=width*0.423,selX5=width*0.600,selX6=width*0.777;
        let seleccionModo3=0;
        if(mouseX>selX2&&mouseX<selX2+selW&&mouseY>selY&&mouseY<selY+selH){ clickSound(); seleccionModo3=2; }
        if(mouseX>selX3&&mouseX<selX3+selW&&mouseY>selY&&mouseY<selY+selH){ clickSound(); seleccionModo3=3; }
        if(mouseX>selX4&&mouseX<selX4+selW&&mouseY>selY&&mouseY<selY+selH){ clickSound(); seleccionModo3=4; }
        if(mouseX>selX5&&mouseX<selX5+selW&&mouseY>selY&&mouseY<selY+selH){ clickSound(); seleccionModo3=5; }
        if(mouseX>selX6&&mouseX<selX6+selW&&mouseY>selY&&mouseY<selY+selH){ clickSound(); seleccionModo3=6; }

        if(seleccionModo3>=2&&seleccionModo3<=6){
          jugadoresModo3=seleccionModo3;
          jugadorActualModo3=int(random(1,jugadoresModo3+1));
          dadoModo3=0; ganadorModo3=0; rondasModo3=1;
          casosJugador1Modo3=casosJugador2Modo3=casosInicialesModo3;
          casosJugador3Modo3=casosJugador4Modo3=casosJugador5Modo3=casosJugador6Modo3=0;
          if(jugadoresModo3>=3) casosJugador3Modo3=casosInicialesModo3;
          if(jugadoresModo3>=4) casosJugador4Modo3=casosInicialesModo3;
          if(jugadoresModo3>=5) casosJugador5Modo3=casosInicialesModo3;
          if(jugadoresModo3>=6) casosJugador6Modo3=casosInicialesModo3;
          canal1Modo3=canal2Modo3=canal3Modo3=canal4Modo3=canal5Modo3=canal6Modo3=0;
          desbordesModo3=rachaModo3=efectoColapsoModo3=efectoEquipoModo3=canalPeligroModo3=0;
          lanzadoEnTurnoModo3=false; subestadoModo3=1;
          mensajeModo3="Inicia el Orientador "+jugadorActualModo3+". Lanza el dado para asignar su primer caso.";
          detalleModo3="Puedes seguir lanzando o detenerte para pasar el turno.";
        }
      } else if (subestadoModo3==1) {
        if(mouseX>modo3BotonLanzarX&&mouseX<modo3BotonLanzarX+modo3BotonLanzarW&&mouseY>modo3BotonLanzarY&&mouseY<modo3BotonLanzarY+modo3BotonLanzarH){
          clickSound();
          let casosTurnoModo3=0, jugadorAnteriorModo3=jugadorActualModo3;
          let colapsoModo3=false, casosDevueltosModo3=0;
          if(jugadorActualModo3==1) casosTurnoModo3=casosJugador1Modo3;
          if(jugadorActualModo3==2) casosTurnoModo3=casosJugador2Modo3;
          if(jugadorActualModo3==3) casosTurnoModo3=casosJugador3Modo3;
          if(jugadorActualModo3==4) casosTurnoModo3=casosJugador4Modo3;
          if(jugadorActualModo3==5) casosTurnoModo3=casosJugador5Modo3;
          if(jugadorActualModo3==6) casosTurnoModo3=casosJugador6Modo3;

          if(casosTurnoModo3<=0){ ganadorModo3=jugadorActualModo3; subestadoModo3=2; }
          else {
            dadoModo3=int(random(1,7));
            let d=dadoModo3;
            if(d==1){ if(canal1Modo3>=1){casosDevueltosModo3=canal1Modo3;casosTurnoModo3+=canal1Modo3;canal1Modo3=0;colapsoModo3=true;}else{canal1Modo3++;casosTurnoModo3--;mensajeModo3="DADO 1: Primer Auxilio recibio un caso.";detalleModo3="El canal queda con "+canal1Modo3+" de 1. Si sale 1 otra vez, colapsa.";} }
            if(d==2){ if(canal2Modo3>=2){casosDevueltosModo3=canal2Modo3;casosTurnoModo3+=canal2Modo3;canal2Modo3=0;colapsoModo3=true;}else{canal2Modo3++;casosTurnoModo3--;mensajeModo3="DADO 2: Mediacion Rapida recibio un caso.";detalleModo3="El canal queda con "+canal2Modo3+" de 2. Decide si arriesgar o pasar.";} }
            if(d==3){ if(canal3Modo3>=3){casosDevueltosModo3=canal3Modo3;casosTurnoModo3+=canal3Modo3;canal3Modo3=0;colapsoModo3=true;}else{canal3Modo3++;casosTurnoModo3--;mensajeModo3="DADO 3: Aula Segura recibio un caso.";detalleModo3="El canal queda con "+canal3Modo3+" de 3. La presion sube.";} }
            if(d==4){ if(canal4Modo3>=4){casosDevueltosModo3=canal4Modo3;casosTurnoModo3+=canal4Modo3;canal4Modo3=0;colapsoModo3=true;}else{canal4Modo3++;casosTurnoModo3--;mensajeModo3="DADO 4: Familia y Tutor recibio un caso.";detalleModo3="El canal queda con "+canal4Modo3+" de 4. Puedes detenerte a tiempo.";} }
            if(d==5){ if(canal5Modo3>=5){casosDevueltosModo3=canal5Modo3;casosTurnoModo3+=canal5Modo3;canal5Modo3=0;colapsoModo3=true;}else{canal5Modo3++;casosTurnoModo3--;mensajeModo3="DADO 5: Comite Escolar recibio un caso.";detalleModo3="El canal queda con "+canal5Modo3+" de 5. Ojo con la sobrecarga.";} }
            if(d==6){ canal6Modo3++;casosTurnoModo3--;mensajeModo3="DADO 6: Equipo Especializado activado.";detalleModo3="Canal seguro: se aislo 1 caso y nunca se desborda."; }

            if(jugadorActualModo3==1) casosJugador1Modo3=casosTurnoModo3;
            if(jugadorActualModo3==2) casosJugador2Modo3=casosTurnoModo3;
            if(jugadorActualModo3==3) casosJugador3Modo3=casosTurnoModo3;
            if(jugadorActualModo3==4) casosJugador4Modo3=casosTurnoModo3;
            if(jugadorActualModo3==5) casosJugador5Modo3=casosTurnoModo3;
            if(jugadorActualModo3==6) casosJugador6Modo3=casosTurnoModo3;

            if(casosTurnoModo3<=0){ ganadorModo3=jugadorActualModo3; subestadoModo3=2; }
            else {
              if(colapsoModo3){
                desbordesModo3++; rachaModo3=0; efectoColapsoModo3=45; canalPeligroModo3=d;
                jugadorActualModo3++;
                if(jugadorActualModo3>jugadoresModo3){ jugadorActualModo3=1; rondasModo3++; }
                lanzadoEnTurnoModo3=false;
                mensajeModo3="SOBRECARGA: Canal "+d+" colapso.";
                detalleModo3="Orientador "+jugadorAnteriorModo3+" recupera "+casosDevueltosModo3+" caso(s) y pierde el turno. Ahora juega el Orientador "+jugadorActualModo3+".";
              } else {
                if(d==6){ rachaModo3++; efectoEquipoModo3=35; } else { rachaModo3++; }
                detalleModo3=detalleModo3+"  |  Racha x"+rachaModo3+".";
                lanzadoEnTurnoModo3=true;
              }
            }
          }
        } else if(mouseX>modo3BotonPasarX&&mouseX<modo3BotonPasarX+modo3BotonPasarW&&mouseY>modo3BotonPasarY&&mouseY<modo3BotonPasarY+modo3BotonPasarH){
          clickSound();
          if(lanzadoEnTurnoModo3){
            let jugadorQuePasaModo3=jugadorActualModo3;
            jugadorActualModo3++;
            if(jugadorActualModo3>jugadoresModo3){ jugadorActualModo3=1; rondasModo3++; }
            dadoModo3=0; rachaModo3=0; lanzadoEnTurnoModo3=false;
            mensajeModo3="Orientador "+jugadorQuePasaModo3+" se detuvo a tiempo.";
            detalleModo3="Ahora juega el Orientador "+jugadorActualModo3+".";
          } else {
            mensajeModo3="Primero debes lanzar el dado.";
            detalleModo3="Despues de asignar un caso podras detenerte o arriesgarte de nuevo.";
          }
        }
      } else if (subestadoModo3==2) {
        if(mouseX>modo3BotonReiniciarX&&mouseX<modo3BotonReiniciarX+modo3BotonReiniciarW&&mouseY>modo3BotonReiniciarY&&mouseY<modo3BotonReiniciarY+modo3BotonReiniciarH){
          clickSound(); subestadoModo3=0;
          jugadoresModo3=0; jugadorActualModo3=1; dadoModo3=0; ganadorModo3=0; rondasModo3=1;
          canal1Modo3=canal2Modo3=canal3Modo3=canal4Modo3=canal5Modo3=canal6Modo3=0;
          desbordesModo3=rachaModo3=efectoColapsoModo3=efectoEquipoModo3=canalPeligroModo3=0;
          lanzadoEnTurnoModo3=false;
          mensajeModo3="Selecciona cuantos orientadores van a jugar.";
          detalleModo3="Canales 1 a 5 tienen capacidad limitada. El canal 6 nunca colapsa.";
        }
      }
    }
  }
}

// =====================
// Helpers
// =====================
function resetMsjUsados() {
  msj1Usado=msj2Usado=msj3Usado=msj4Usado=msj5Usado=false;
  msj6Usado=msj7Usado=msj8Usado=msj9Usado=msj10Usado=false;
  msj11Usado=msj12Usado=msj13Usado=msj14Usado=msj15Usado=false;
  msj16Usado=msj17Usado=msj18Usado=msj19Usado=msj20Usado=false;
  msj21Usado=msj22Usado=msj23Usado=msj24Usado=msj25Usado=false;
  msj26Usado=msj27Usado=msj28Usado=msj29Usado=msj30Usado=false;
}

function msjUsado(id) {
  let arr=[null,msj1Usado,msj2Usado,msj3Usado,msj4Usado,msj5Usado,msj6Usado,msj7Usado,msj8Usado,msj9Usado,msj10Usado,
    msj11Usado,msj12Usado,msj13Usado,msj14Usado,msj15Usado,msj16Usado,msj17Usado,msj18Usado,msj19Usado,msj20Usado,
    msj21Usado,msj22Usado,msj23Usado,msj24Usado,msj25Usado,msj26Usado,msj27Usado,msj28Usado,msj29Usado,msj30Usado];
  return arr[id];
}

function setMsjUsado(id) {
  if(id==1)msj1Usado=true; if(id==2)msj2Usado=true; if(id==3)msj3Usado=true;
  if(id==4)msj4Usado=true; if(id==5)msj5Usado=true; if(id==6)msj6Usado=true;
  if(id==7)msj7Usado=true; if(id==8)msj8Usado=true; if(id==9)msj9Usado=true;
  if(id==10)msj10Usado=true; if(id==11)msj11Usado=true; if(id==12)msj12Usado=true;
  if(id==13)msj13Usado=true; if(id==14)msj14Usado=true; if(id==15)msj15Usado=true;
  if(id==16)msj16Usado=true; if(id==17)msj17Usado=true; if(id==18)msj18Usado=true;
  if(id==19)msj19Usado=true; if(id==20)msj20Usado=true; if(id==21)msj21Usado=true;
  if(id==22)msj22Usado=true; if(id==23)msj23Usado=true; if(id==24)msj24Usado=true;
  if(id==25)msj25Usado=true; if(id==26)msj26Usado=true; if(id==27)msj27Usado=true;
  if(id==28)msj28Usado=true; if(id==29)msj29Usado=true; if(id==30)msj30Usado=true;
}

function allMsjUsados() {
  return msj1Usado&&msj2Usado&&msj3Usado&&msj4Usado&&msj5Usado&&msj6Usado&&msj7Usado&&msj8Usado&&msj9Usado&&msj10Usado&&
    msj11Usado&&msj12Usado&&msj13Usado&&msj14Usado&&msj15Usado&&msj16Usado&&msj17Usado&&msj18Usado&&msj19Usado&&msj20Usado&&
    msj21Usado&&msj22Usado&&msj23Usado&&msj24Usado&&msj25Usado&&msj26Usado&&msj27Usado&&msj28Usado&&msj29Usado&&msj30Usado;
}

function seleccionarMensaje2() {
  if (allMsjUsados()) { encontrado2=true; return; }
  encontrado2=false;
  while(!encontrado2){
    let id=int(random(1,31));
    if(!msjUsado(id)){ setMsjUsado(id); mensaje2ActualID=id; encontrado2=true; }
  }
}

function keyPressed() {
  if (keyCode === ESCAPE) return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
