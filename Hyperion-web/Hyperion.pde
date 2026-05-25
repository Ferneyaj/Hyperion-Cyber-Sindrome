import processing.sound.*;

SoundFile SonidoClick;
SoundFile menuMusica;
SoundFile juegoMusica;
SoundFile ganarMusica;
SoundFile perderMusica;

// VARIABLES GLOBALES (MÁQUINA DE ESTADOS)
int ESTADO_INICIO = -1;
int ESTADO_MENU = 0;
int ESTADO_MODO1 = 1;
int ESTADO_MODO2 = 2;
int ESTADO_MODO3 = 3;
int ESTADO_FIN = 4;
int ESTADO_CREDITOS = 5;
int ESTADO_CARGA = 6;
int estadoActual = ESTADO_CARGA;
int contadorCarga = 0;
int estadoAnterior = -2;




//Menu Inicio variables de diseño
PImage logoCargaImg;
PImage ImagenFondo, fondoModos;
PImage fondomodo2;
PImage Logo;
PImage botonjugar, botonopciones, botonsalir, botonvolver;
PImage btnmodo1, btnmodo2, btnmodo3;
PImage btnArchivar, btnSeguimiento, btnReportar;
PImage cajadetexto;
PFont fuente;
PImage botonpositivomodo2, botonnormalmodo2, botonnegativomodo2;
PImage cuadrotexto;
PImage cuadropuntajemodo2;
PImage contadormodo2;
PImage corazonlleno, corazonvacio;
PImage cuadrovida;
PImage pantallaganarmodo2, pantallaperdermodo2;
PImage fondomodo3inicio, fondomodo3juego, fondomodo3final;
PImage viejowalter;
PImage Boss1;
PImage Boss2;
PImage NPC;





// VARIABLES DE DISEÑO: MENÚ PRINCIPAL

float botonW, botonH, botonY;
float btnX1, btnX2, btnX3;


// ==========================================
// VARIABLES DE LORE Y CINEMÁTICA (MODO 1)
// ==========================================
int subEstadoModo1 = 0; // 0: Glitch, 1: Lore, 2: Instrucciones, 3: Terminal, 4: Victoria, 5: Derrota
int contadorFrames = 0;
String textoLore = "AÑO 2086.\nLA RED HYPERION YA NO ES UNA SIMPLE HERRAMIENTA:\nEL MUNDO DIGITAL SE HA VUELTO MAS IMPORTANTE QUE EL FISICO.\n\nTRAS 60 ANOS DE INMERSION TOTAL,\nBUSCAMOS REPARAR A LA HUMANIDAD.'";
int caracteresAMostrar = 0;


// VARIABLES DE LOGICA: MODO 1

int Accion;
int rondaActual = 1;
int rondaMax = 10;
int mensajeActuaLID = 1;
int puntaje = 0;
boolean juegoTerminado = false;
double PromAc;
int PPN1 = 200;
double prom = 0;
double Mod;
int Riesgo;
String ESTADO;
int rondaProm;
float Vul;
// Aqui voy a cambiar el texto de los botones Archivar - Seguimiento y Reportar con codigo para los bossses porque me dio flojera crear nuevos -_-

String btnArchivarC;
String btnSeguimientoC;
String btnReportarC;

float colX, bW, bH, bY1, bY2, bY3;

//presets - Combate con jefe - Poseido
// Aqui voy a añadir las variables para los presets del combate con el jefe, parecido al modo normal tienes 3 opciones a elegir
int preset;
int bossMensaje;
int probabilidadAtaque = 0;
int vidaJugador = 3;
int bossVida = 100;
String resultadoModo1 = "";




// VARIABLES DE DISEÑO: MODO 1 (TERMINAL)

float cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH;
float btnAccionW, btnAccionH, btnAccionY;
float btnArchivarX, btnSeguimientoX, btnReportarX;
float btnVolverX, btnVolverY, btnVolverW, btnVolverH;
float panelY;
float panelH;
float btnColX, btnBW, btnBH, btnBY1, btnBY2, btnBY3;
int nivel = 1;
PImage fondoTerminal;

float memoriaGB = 2.4;
float latenciaMS = 47;
float paquetesPercent = 3;

int timerMemoria = 0;
int timerLatencia = 0;
int timerPaquetes = 0;

int intervaloMemoria = 180;
int intervaloLatencia = 90;
int intervaloPaquetes = 120;

float memoriaTarget = 2.4;
float latenciaTarget = 47;
float paquetesTarget = 3;

float bin1X, bin1Y, bin1Vel;
String bin1C;
float bin2X, bin2Y, bin2Vel;
String bin2C;
float bin3X, bin3Y, bin3Vel;
String bin3C;
float bin4X, bin4Y, bin4Vel;
String bin4C;
float bin5X, bin5Y, bin5Vel;
String bin5C;
float bin6X, bin6Y, bin6Vel;
String bin6C;
float bin7X, bin7Y, bin7Vel;
String bin7C;
float bin8X, bin8Y, bin8Vel;
String bin8C;

PImage suelo;

// VARIABLES DE LOGICA: FASE 2

int mensajeErrado = 0;
int mensajeAcertado = 0;
int mensaje2ActualID = 1;
String mensaje2Actual1 = "¡Excelente iniciativa, \ncuentas con mi apoyo!";
String mensaje2Actual2 = "¿A qué hora nos \nconectamos para hacer \nel laboratorio?";
String mensaje2Actual3 = "Nadie te soporta \nen este servidor, \nbórrate.";
String mensaje2Actual4 = "Buen trabajo en \nla presentación de \nhoy, crack.";
String mensaje2Actual5 = "Mañana hay examen \nde programación a \nprimera hora.";
String mensaje2Actual6 = "Si sales de la \nRed Hyperion, te irá \nmuy mal...";
String mensaje2Actual7 = "¿Por qué siempre \neres así con el \nequipo?";
String mensaje2Actual8 = "¡No hagas caso \na los comentarios, tu \nproyecto es genial!";
String mensaje2Actual9 = "Subieron un meme \ntuyo al canal general \npara burlarse.";
String mensaje2Actual10 = "¿Ya revisaste \nlas notas que subieron \na Brightspace?";
String mensaje2Actual11 = "Tu explicación del \ntema ayudó mucho al \ngrupo.";
String mensaje2Actual12 = "¿Dónde subieron el \narchivo de la práctica \nde hoy?";
String mensaje2Actual13 = "Todos se ríen de \nti cuando hablas por \nel chat.";
String mensaje2Actual14 = "Gracias por compartir \ntu código, me sirvió \npara entender.";
String mensaje2Actual15 = "La reunión será \nen la sala virtual \na las 7.";
String mensaje2Actual16 = "Si reportas esto, \nte vamos a hacer \nla vida imposible.";
String mensaje2Actual17 = "Tu avatar quedó \nmuy bien diseñado, \nfelicitaciones.";
String mensaje2Actual18 = "¿Quién tiene el \nenlace del repositorio \ndel proyecto?";
String mensaje2Actual19 = "Nadie quiere estar \ncontigo en el equipo, \nentiéndelo.";
String mensaje2Actual20 = "Me gustó cómo \ndefendiste tu idea \nen clase.";
String mensaje2Actual21 = "El profesor cambió \nla fecha de entrega \npara el viernes.";
String mensaje2Actual22 = "Subimos tus errores \nal canal para que \ntodos se burlen.";
String mensaje2Actual23 = "Sigue así, tu \navance se nota mucho \nen el proyecto.";
String mensaje2Actual24 = "¿Ya terminaron la \nparte del informe \ndel laboratorio?";
String mensaje2Actual25 = "Eres un estorbo \npara todos en esta \nred.";
String mensaje2Actual26 = "Buena solución, \noptimizaste muy bien \nel programa.";
String mensaje2Actual27 = "Hoy no habrá \nasesoría porque el \nservidor está caído.";
String mensaje2Actual28 = "Si entras al canal, \nte vamos a llenar \nde insultos.";
String mensaje2Actual29 = "No te rindas, \ntu trabajo tiene mucho \npotencial.";
String mensaje2Actual30 = "¿El examen será \nindividual o en \nparejas?";
String mensajeMostrado = "";
int respuestacorrecta = 0;
int respuestaescogida = 0;
int puntaje2 = 0;
boolean cargando = false;
boolean ganar = false;
boolean perder = false;
int contadorrondas = 1;

String falloMensaje1 = "---------";
String falloMensaje2 = "---------";
String falloMensaje3 = "---------";
String falloMensaje4 = "---------";
String falloMensaje5 = "---------";

String falloRespuesta1 = "---------";
String falloRespuesta2 = "---------";
String falloRespuesta3 = "---------";
String falloRespuesta4 = "---------";
String falloRespuesta5 = "---------";

int cantidadFallosGuardados = 0;
String respuestaCorrectaTexto = "";

int vidasModo2 = 5;

int subestadoModo2 = 2;
float textX, textY;
int contadorFrames2 = 3660;
boolean encontrado2 = false;
boolean msj1Usado = false;
boolean msj2Usado = false;
boolean msj3Usado = false;
boolean msj4Usado = false;
boolean msj5Usado = false;
boolean msj6Usado = false;
boolean msj7Usado = false;
boolean msj8Usado = false;
boolean msj9Usado = false;
boolean msj10Usado = false;
boolean msj11Usado = false;
boolean msj12Usado = false;
boolean msj13Usado = false;
boolean msj14Usado = false;
boolean msj15Usado = false;
boolean msj16Usado = false;
boolean msj17Usado = false;
boolean msj18Usado = false;
boolean msj19Usado = false;
boolean msj20Usado = false;
boolean msj21Usado = false;
boolean msj22Usado = false;
boolean msj23Usado = false;
boolean msj24Usado = false;
boolean msj25Usado = false;
boolean msj26Usado = false;
boolean msj27Usado = false;
boolean msj28Usado = false;
boolean msj29Usado = false;
boolean msj30Usado = false;





// VARIABLES DE DISEÑO: MODO 2

float btnPositivoX, btnNormalX, btnNegativoX;
float btnW, btnH, btnY;





// VARIABLES DE LOGICA Y DISENO: MODO 3
// Aislando el Bullying
int subestadoModo3 = 0;
int jugadoresModo3 = 0;
int jugadorActualModo3 = 1;
int dadoModo3 = 0;
int ganadorModo3 = 0;
int rondasModo3 = 1;
int casosInicialesModo3 = 15;
int casosJugador1Modo3 = 5;
int casosJugador2Modo3 = 5;
int casosJugador3Modo3 = 0;
int casosJugador4Modo3 = 0;
int casosJugador5Modo3 = 0;
int casosJugador6Modo3 = 0;
int canal1Modo3 = 0;
int canal2Modo3 = 0;
int canal3Modo3 = 0;
int canal4Modo3 = 0;
int canal5Modo3 = 0;
int canal6Modo3 = 0;
int desbordesModo3 = 0;
int rachaModo3 = 0;
int efectoColapsoModo3 = 0;
int efectoEquipoModo3 = 0;
int canalPeligroModo3 = 0;
boolean lanzadoEnTurnoModo3 = false;
boolean bloqueoEntradaModo3 = false;
String mensajeModo3 = "Selecciona cuantos orientadores van a jugar.";
String detalleModo3 = "Canales 1 a 5 tienen capacidad limitada. El canal 6 nunca colapsa.";
float modo3BotonLanzarX, modo3BotonLanzarY, modo3BotonLanzarW, modo3BotonLanzarH;
float modo3BotonPasarX, modo3BotonPasarY, modo3BotonPasarW, modo3BotonPasarH;
float modo3BotonVolverX, modo3BotonVolverY, modo3BotonVolverW, modo3BotonVolverH;
float modo3BotonReiniciarX, modo3BotonReiniciarY, modo3BotonReiniciarW, modo3BotonReiniciarH;
int frameActual = 1;
int frameInicio;


void setup() {
  fullScreen();
  noSmooth();
  bin1X=random(0, width);
  bin1Y=random(0, height);
  bin1Vel=random(2, 8);
  bin1C=random(1)>0.5?"1":"0";
  bin2X=random(0, width);
  bin2Y=random(0, height);
  bin2Vel=random(2, 8);
  bin2C=random(1)>0.5?"1":"0";
  bin3X=random(0, width);
  bin3Y=random(0, height);
  bin3Vel=random(2, 8);
  bin3C=random(1)>0.5?"1":"0";
  bin4X=random(0, width);
  bin4Y=random(0, height);
  bin4Vel=random(2, 8);
  bin4C=random(1)>0.5?"1":"0";
  bin5X=random(0, width);
  bin5Y=random(0, height);
  bin5Vel=random(2, 8);
  bin5C=random(1)>0.5?"1":"0";
  bin6X=random(0, width);
  bin6Y=random(0, height);
  bin6Vel=random(2, 8);
  bin6C=random(1)>0.5?"1":"0";
  bin7X=random(0, width);
  bin7Y=random(0, height);
  bin7Vel=random(2, 8);
  bin7C=random(1)>0.5?"1":"0";
  bin8X=random(0, width);
  bin8Y=random(0, height);
  bin8Vel=random(2, 8);
  bin8C=random(1)>0.5?"1":"0";



  //MENÚ
  botonW = width * 0.4 - width*0.145;
  botonH = height * 0.84 - height*0.130;
  botonY = height*0.11;
  btnX1 = width * 0.123;
  btnX2 = width * 0.376;
  btnX3 = width * 0.629;

  //FASE 1 ---

  panelY = height * (2.0/3.0);
  panelH = height * (1.0/3.0);

  cajaMsgW = width * 0.57;
  cajaMsgH = panelH * 0.8;
  cajaMsgX = width * 0.02;
  cajaMsgY = panelY;

  btnAccionW = width * 0.22;
  btnAccionH =panelH * 0.22;
  btnAccionY = height * 0.75;

  btnArchivarX = width * 0.55;
  btnSeguimientoX = width * 0.55;
  btnReportarX = width * 0.55;

  btnVolverX = width * 0.02;
  btnVolverY = height * 0.95;
  btnVolverW = width * 0.13;
  btnVolverH = height * 0.04;


  float btnStartY = panelY + panelH * 0.06;
  bossMensaje = int(random(1, 12));

  btnAccionY = btnStartY;
  logoCargaImg = loadImage("br.png");

  SonidoClick = new SoundFile(this, "CLICK.mp3");
  menuMusica = new SoundFile(this, "MENU.mp3");
  juegoMusica = new SoundFile(this, "BATALLA.mp3");
  ganarMusica = new SoundFile(this, "WIN.mp3");
  perderMusica = new SoundFile(this, "LOSE.mp3");

  menuMusica.amp(0.6);
  juegoMusica.amp(0.6);
  ganarMusica.amp(0.6);
  perderMusica.amp(0.6);
  frameInicio = frameCount;
}

void draw() {

  if (estadoActual != ESTADO_CARGA) {

    if (estadoActual == ESTADO_MENU || estadoActual == ESTADO_INICIO) {

      if (!menuMusica.isPlaying()) {
        juegoMusica.stop();
        menuMusica.loop();
      }
    }

    if (estadoActual == ESTADO_MODO1 || estadoActual == ESTADO_MODO2 || estadoActual == ESTADO_MODO3) {

      if (!juegoMusica.isPlaying()) {
        menuMusica.stop();
        juegoMusica.loop();
      }
    }

    estadoAnterior = estadoActual;
  }

  if (estadoActual == ESTADO_CARGA) {
    background(0);
    textAlign(CENTER, CENTER);

    
  
    if (logoCargaImg != null) {
      imageMode(CENTER);
      image(logoCargaImg, width * 0.50, height * 0.45, width * 0.50, height * 0.50);
      imageMode(CORNER);
    }
    
    fill(255);
    if (fuente != null) {
      textFont(fuente, width*0.036);
    } else {
      textSize(width*0.036);
    }
    text("CARGANDO...", width*0.50, height*0.82);

    if (frameCount - frameInicio > 120) {

      fuente = createFont("PixelOperator-Bold.ttf", 16);
      suelo = loadImage("Suelo.png");

      fondoTerminal = loadImage("FondoTerminal.jpeg");

      ImagenFondo = loadImage("ImagenFondo.jpg");

      Logo = loadImage("Logo.png");

      botonjugar = loadImage("boton3.png");

      botonopciones = loadImage("boton2.png");

      botonsalir = loadImage("boton1.png");

      fondoModos = loadImage("fondomodos.png");

      fondomodo2 = loadImage("fondomodo2.png");

      btnmodo1 = loadImage("modo1boton.png");

      btnmodo2 = loadImage("modo2boton.png");

      btnmodo3 = loadImage("botonmodo3.png");

      botonvolver = loadImage("botonvolver.png");

      btnArchivar = loadImage("botonarchivar.png");

      btnSeguimiento = loadImage("botonseguimiento.png");

      btnReportar = loadImage("botonrepotar.png");

      cajadetexto = loadImage("cajadetexto.png");

      cuadrotexto = loadImage("cuadrotexto.png");

      botonpositivomodo2 = loadImage("botonpositivomodo2.png");

      botonnormalmodo2 = loadImage("botonnormalmodo2.png");

      botonnegativomodo2 = loadImage("botonnegativomodo2.png");

      cuadropuntajemodo2 = loadImage("cuadropuntajemodo2.png");

      contadormodo2 = loadImage("contadormodo2.png");

      corazonlleno = loadImage("corazonlleno.png");

      corazonvacio = loadImage("corazonvacio.png");

      cuadrovida = loadImage("cuadrovida.png");

      pantallaganarmodo2 = loadImage("pantallaganarmodo2.png");

      pantallaperdermodo2 = loadImage("pantallaperdermodo2.png");

      fondomodo3inicio = loadImage("fondomodo3inicio.png");

      fondomodo3juego = loadImage("fondomodo3juego.png");

      fondomodo3final = loadImage("fondomodo3final.png");

      viejowalter = loadImage("walter.png");

      Boss1 = loadImage("boss1.png");

      Boss2 = loadImage("boss2.png");

      NPC = loadImage("NPC.png");
      cargando = true;
      estadoActual = ESTADO_INICIO;
    }
  }

  //Estado_Menu_Inicio
  if (estadoActual == ESTADO_INICIO) {
    if (!menuMusica.isPlaying()) {
      menuMusica.loop();
    }

    image(ImagenFondo, 0, 0, width, height);


  
    float panelInicioX = width * 0.03;

    float panelInicioW = width * (4.0 / 9.0);



    float centroX = panelInicioX + panelInicioW / 2;

    // Logo (imagen)
    float logoW = panelInicioW * 0.85;
    float logoH = logoW * 0.37; 
    float logoX = centroX - logoW / 2;
    float logoY = height * 0.12;
    image(Logo, logoX, logoY, logoW, logoH);

    
    textAlign(CENTER, CENTER);
    textFont(fuente, width * 0.013);
    fill(100, 150, 200, 160);
    text("v1.95  |  2026", centroX, height * 0.38);

    // Botón JUGAR
    float btnW3 = panelInicioW * 0.60;
    float btnH3 = height * 0.16;
    float btnX3 = centroX - btnW3 / 2;
    float btnJugarY = height * 0.45;

    if (mouseX > width*0.136 && mouseX < width*0.367 && mouseY > height*0.477 && mouseY < height*0.575) {
      image(botonjugar, btnX3 - 4, btnJugarY - 4, btnW3 + 8, btnH3 + 8);
    } else {
      image(botonjugar, btnX3, btnJugarY, btnW3, btnH3);
    }
    fill(255);
    textFont(fuente, width * 0.03);
    textAlign(CENTER, CENTER);
    text("JUGAR", centroX, btnJugarY + btnH3 / 2);

    // Botón OPCIONES
    float btnOpcionesY = btnJugarY + btnH3 - height*0.01;

    if (mouseX > btnX3 && mouseX < btnX3 + btnW3 && mouseY > btnOpcionesY && mouseY < btnOpcionesY + btnH3) {
      fill(70, 100, 160);
      image(botonopciones, btnX3 - 4, btnOpcionesY - 4, btnW3 + 8, btnH3 + 8);
    } else {
      fill(70, 100, 160, 210);
      image(botonopciones, btnX3, btnOpcionesY, btnW3, btnH3);
    }
    fill(255);
    textFont(fuente, width * 0.03);
    textAlign(CENTER, CENTER);
    text("CREDITOS", centroX, btnOpcionesY + btnH3 / 2);

    // Botón SALIR
    float btnSalirY = btnOpcionesY + btnH3 - height*0.01;

    if (mouseX > btnX3 && mouseX < btnX3 + btnW3 && mouseY > btnSalirY && mouseY < btnSalirY + btnH3) {
      fill(160, 50, 50);
      image(botonsalir, btnX3 - 4, btnSalirY - 4, btnW3 + 8, btnH3 + 8);
    } else {
      fill(160, 50, 50, 210);
      image(botonsalir, btnX3, btnSalirY, btnW3, btnH3);
    }
    fill(255);
    textFont(fuente, width * 0.03);
    textAlign(CENTER, CENTER);
    text("SALIR", centroX, btnSalirY + btnH3 / 2);

    // Texto "Team Breaking Bugs"
    textFont(fuente, width * 0.013);
    fill(180, 180, 180, 140);
    textAlign(CENTER, CENTER);
    text("Team Breaking Bugs", centroX, height * 0.95);
  }







  btnColX = width * 0.55;
  btnBW   = width * 0.42;
  btnBH   = panelH * 0.22;
  float espacioentre = panelH * 0.05;
  btnBY1  = panelY + panelH * 0.08;
  btnBY2  = btnBY1 + btnBH + espacioentre;
  btnBY3  = btnBY2 + btnBH + espacioentre;


  if (estadoActual == ESTADO_CREDITOS) {
    background(4, 8, 18);
    image(ImagenFondo, 0, 0, width, height);
    fill(0, 0, 0, 190);
    rect(width*0.10, height*0.08, width*0.80, height*0.78, 20);
    noFill();
    stroke(0, 255, 200, 160);
    strokeWeight(3);
    rect(width*0.10, height*0.08, width*0.80, height*0.78, 20);
    noStroke();
    textAlign(CENTER, CENTER);
    fill(0, 255, 180);
    textFont(fuente, width*0.045);
    text("CREDITOS", width*0.50, height*0.17);
    fill(230, 245, 255);
    textFont(fuente, width*0.026);
    text("TEAM BREAKING BUGS", width*0.50, height*0.28);
    textFont(fuente, width*0.019);
    text("Lider del proyecto: Moises Jacome", width*0.50, height*0.38);
    text("Gerente de proyecto: Ferney Jimenez", width*0.50, height*0.46);
    text("Diseñador de proyecto: Luis Padilla", width*0.50, height*0.54);
    textFont(fuente, width*0.014);
    text("Agradecimientos: A la docente de Algoritmia y programacion 1", width*0.50, height*0.60);
    text("Rocio del Rosario Ramos Rodriguez", width*0.50, height*0.65);
    text("Music by Nikita Kondrashev from Pixabay", width*0.50, height*0.70);
    text("Music by Punch Deck", width*0.50, height*0.74);
    if (mouseX > width*0.39 && mouseX < width*0.61 && mouseY > height*0.78 && mouseY < height*0.86) {
      fill(0, 255, 180, 230);
    } else {
      fill(0, 130, 160, 210);
    }
    rect(width*0.39, height*0.78, width*0.22, height*0.08, 12);
    fill(255);
    textFont(fuente, width*0.026);
    text("VOLVER", width*0.50, height*0.82);
  }






  
  // ESTADO 0: MENÚ PRINCIPAL
  
  if (estadoActual == ESTADO_MENU) {
    ganarMusica.stop();
    perderMusica.stop();
    juegoMusica.stop();

    if (!menuMusica.isPlaying()) {
      menuMusica.loop();
    }

    background(0);
    image(fondoModos, 0, 0, width, height);

    // --- BOTÓN 1 ---

    float flotar1 = sin(frameCount * 0.04) * 10;
    float yModo1 = botonY + flotar1;

    if (mouseX > width*0.145 && mouseX < width*0.354 &&
      mouseY > height*0.132 && mouseY < height*0.8) {
      image(btnmodo1, btnX1 - 4, yModo1 - 4, botonW + 8, botonH + 8);
    } else {
      image(btnmodo1, btnX1, yModo1, botonW, botonH);
    }



    // --- BOTÓN 2 ---

    float flotar2 = sin(frameCount * 0.04 + 1.5) * 10;
    float yModo2 = botonY + flotar2;
    if (mouseX > width*0.398 && mouseX < width*0.607 && mouseY > height*0.132 && mouseY < height*0.8) {
      image(btnmodo2, btnX2 - 4, yModo2 - 4, botonW + 8, botonH + 8);
    } else {
      image(btnmodo2, btnX2, yModo2, botonW, botonH);
    }


    // --- BOTÓN 3 ---

    float flotar3 = sin(frameCount * 0.04 + 3.0) * 10;
    float yModo3 = botonY + flotar3;
    if (mouseX > width*0.647 && mouseX < width*0.861 && mouseY > height*0.132 && mouseY < height*0.8) {
      image(btnmodo3, btnX3 - 4, yModo3 - 4, botonW + 8, botonH + 8);
    } else {
      image(btnmodo3, btnX3, yModo3, botonW, botonH);
    }

    // --- BOTÓN VOLVER ---

    if (mouseX > width*0.02 && mouseX < width*0.09 && mouseY > height*0.88 && mouseY < height*0.98) {
      image(botonvolver, width*0.02 - 4, height*0.88 -4, width*0.07 + 8, height*0.1 + 8);
    } else {
      image(botonvolver, width*0.02, height*0.88, width*0.07, height*0.1);
    }



    
    // ESTADO 1: FASE 1 (MODO 1)
    
  }

  if (estadoActual == ESTADO_MODO1) {
    if (estadoActual == ESTADO_MODO1 && subEstadoModo1 != 4 && subEstadoModo1 != 5) {
      if (!juegoMusica.isPlaying()) {
        menuMusica.stop();
        juegoMusica.loop();
      }
    }

    // --- SUB-ESTADO 0: GLITCH INICIAL ---
    if (subEstadoModo1 == 0) {
      background(0);
      contadorFrames++;

      for (int i = 0; i < 10; i++) {
        stroke(0, 255, 100, random(100, 255));
        strokeWeight(random(1, 5));
        float yGlitch = random(height);
        line(0, yGlitch, width, yGlitch);
      }

      textAlign(CENTER, CENTER);
      textSize(width * 0.05);
      fill(0, 255, 100);
      text("ACCEDIENDO AL SISTEMA...", width/2, height/2);

      if (contadorFrames > 60) {
        subEstadoModo1 = 1;
        contadorFrames = 0;
      }
    }

    // --- SUB-ESTADO 1: LORE (TYPEWRITER) ---
    if (subEstadoModo1 == 1) {
      background(5, 10, 5);

      noFill();
      stroke(0, 255, 100, 100);
      strokeWeight(2);
      rect(width*0.05, height*0.05, width*0.9, height*0.9, 20);
      noStroke();

      if (frameCount % 2 == 0 && caracteresAMostrar < textoLore.length()) {
        caracteresAMostrar++;
      }

      fill(0, 255, 100);
      textAlign(LEFT, TOP);
      textSize(width * 0.025);
      text(textoLore.substring(0, caracteresAMostrar), width*0.1, height*0.15);

      contadorFrames++;
      // println(contadorFrames);

      if (contadorFrames > 420) {
        textAlign(CENTER, CENTER);
        fill(255, 255, 255, 150 + sin(frameCount * 0.1) * 100);
        text("HAZ CLIC PARA INGRESAR A LA TERMINAL", width/2, height * 0.85);

        rondaActual = 1;
        vidaJugador = 3;
        nivel = 1;
        puntaje = 0;
        mensajeActuaLID = 1;
        bossVida = 100;
      }
    }

    // --- SUB-ESTADO 2: TERMINAL DE JUEGO (DR. BYTE) ---
    if (subEstadoModo1 == 2) {
      background(5, 10, 20);
      image(fondoTerminal, 0, 0, width, height);
      fill(0, 0, 0, 205);
      rect(width*0.07, height*0.08, width*0.86, height*0.78, 18);
      noFill();
      stroke(0, 255, 120, 180);
      strokeWeight(3);
      rect(width*0.07, height*0.08, width*0.86, height*0.78, 18);
      noStroke();
      textAlign(CENTER, CENTER);
      fill(0, 255, 120);
      textFont(fuente, width*0.038);
      text("PROTOCOLO ANTI-CIBERBULLYING", width*0.50, height*0.17);
      fill(230, 255, 240);
      textFont(fuente, width*0.019);
      text("En 2086 casi toda la vida social ocurre dentro de la Red Hyperion.", width*0.50, height*0.26);
      text("El acoso digital y el ciberbullying estan contaminando la convivencia.", width*0.50, height*0.34);
      text("Tu mision es prevenir danos antes de que los mensajes escalen.", width*0.50, height*0.42);
      text("Lee cada caso y decide la respuesta mas responsable:", width*0.50, height*0.51);
      text("ARCHIVAR: comentario sin amenaza directa.  SEGUIMIENTO: riesgo medio.", width*0.50, height*0.59);
      text("REPORTAR: amenaza, chantaje, hostigamiento fuerte o peligro real.", width*0.50, height*0.67);
      text("En los jefes enfrentas focos de acoso: apoya, confronta o ataca.", width*0.50, height*0.72);
      if (mouseX > width*0.36 && mouseX < width*0.64 && mouseY > height*0.76 && mouseY < height*0.84) {
        fill(0, 255, 120, 230);
      } else {
        fill(0, 120, 80, 220);
      }
      rect(width*0.36, height*0.76, width*0.28, height*0.08, 12);
      fill(255);
      textFont(fuente, width*0.024);
      text("INICIAR TERMINAL", width*0.50, height*0.80);
    }

    if (subEstadoModo1 == 3) {
      background(10, 15, 15);

      image(fondoTerminal, 0, 0, width, height);


      float vpX = width * (66.0/1536.0);
      float vpY = height * (191.0/864.0);
      float vpW = width * ((1452.0-66.0)/1536.0);
      float vpH = height * ((557.0-191.0)/864.0);

      float escala = 0.3; 
      float sueloW = suelo.width * escala;
      float sueloH = suelo.height * escala;
      float sueloX = vpX + (vpW - sueloW) / 2.0;
      float sueloY = vpY + vpH - sueloH + 150;
      image(suelo, sueloX, sueloY, sueloW, sueloH);

      float personajesBaseY = sueloY + sueloH * 0.53;
      float walterH = height * 0.20;
      float walterW = walterH * (viejowalter.width / (float)viejowalter.height);
      image(viejowalter, sueloX + sueloW * 0.28 - walterW / 2, personajesBaseY - walterH, walterW, walterH);
      if (nivel == 2) {
        float bossH = height * 0.22;
        float bossW = bossH * (Boss1.width / (float)Boss1.height);
        image(Boss1, sueloX + sueloW * 0.72 - bossW / 2, personajesBaseY - bossH, bossW, bossH);
      } else if (nivel == 4) {
        float bossH = height * 0.22;
        float bossW = bossH * (Boss2.width / (float)Boss2.height);
        image(Boss2, sueloX + sueloW * 0.72 - bossW / 2, personajesBaseY - bossH, bossW, bossH);
      }





      textAlign(CENTER, CENTER);
      textFont(fuente, width * 0.012);
      fill(0, 255, 100, (int)random(40, 140));
      text(bin1C, bin1X, bin1Y);
      bin1Y+=bin1Vel;
      if (bin1Y>height) {
        bin1Y=0;
        bin1X=random(0, width);
        bin1Vel=random(2, 8);
        bin1C=random(1)>0.5?"1":"0";
      }
      fill(0, 255, 100, (int)random(40, 140));
      text(bin2C, bin2X, bin2Y);
      bin2Y+=bin2Vel;
      if (bin2Y>height) {
        bin2Y=0;
        bin2X=random(0, width);
        bin2Vel=random(2, 8);
        bin2C=random(1)>0.5?"1":"0";
      }
      fill(0, 255, 100, (int)random(40, 140));
      text(bin3C, bin3X, bin3Y);
      bin3Y+=bin3Vel;
      if (bin3Y>height) {
        bin3Y=0;
        bin3X=random(0, width);
        bin3Vel=random(2, 8);
        bin3C=random(1)>0.5?"1":"0";
      }
      fill(0, 255, 100, (int)random(40, 140));
      text(bin4C, bin4X, bin4Y);
      bin4Y+=bin4Vel;
      if (bin4Y>height) {
        bin4Y=0;
        bin4X=random(0, width);
        bin4Vel=random(2, 8);
        bin4C=random(1)>0.5?"1":"0";
      }
      fill(0, 255, 100, (int)random(40, 140));
      text(bin5C, bin5X, bin5Y);
      bin5Y+=bin5Vel;
      if (bin5Y>height) {
        bin5Y=0;
        bin5X=random(0, width);
        bin5Vel=random(2, 8);
        bin5C=random(1)>0.5?"1":"0";
      }
      fill(0, 255, 100, (int)random(40, 140));
      text(bin6C, bin6X, bin6Y);
      bin6Y+=bin6Vel;
      if (bin6Y>height) {
        bin6Y=0;
        bin6X=random(0, width);
        bin6Vel=random(2, 8);
        bin6C=random(1)>0.5?"1":"0";
      }
      fill(0, 255, 100, (int)random(40, 140));
      text(bin7C, bin7X, bin7Y);
      bin7Y+=bin7Vel;
      if (bin7Y>height) {
        bin7Y=0;
        bin7X=random(0, width);
        bin7Vel=random(2, 8);
        bin7C=random(1)>0.5?"1":"0";
      }
      fill(0, 255, 100, (int)random(40, 140));
      text(bin8C, bin8X, bin8Y);
      bin8Y+=bin8Vel;
      if (bin8Y>height) {
        bin8Y=0;
        bin8X=random(0, width);
        bin8Vel=random(2, 8);
        bin8C=random(1)>0.5?"1":"0";
      }




      timerMemoria++;
      timerLatencia++;
      timerPaquetes++;

      if (timerMemoria >= intervaloMemoria) {
        memoriaTarget = random(1.2, 7.8);
        intervaloMemoria = (int)random(120, 300);
        timerMemoria = 0;
      }
      if (timerLatencia >= intervaloLatencia) {
        latenciaTarget = random(12, 340);
        intervaloLatencia = (int)random(60, 150);
        timerLatencia = 0;
      }
      if (timerPaquetes >= intervaloPaquetes) {
        paquetesTarget = random(0, 18);
        intervaloPaquetes = (int)random(90, 200);
        timerPaquetes = 0;
      }

      memoriaGB       = memoriaGB       + (memoriaTarget    - memoriaGB)       * 0.02;
      latenciaMS      = latenciaMS      + (latenciaTarget   - latenciaMS)      * 0.05;
      paquetesPercent = paquetesPercent + (paquetesTarget   - paquetesPercent) * 0.03;

      textAlign(LEFT, TOP);
      textFont(fuente, width * 0.011);
      fill(0, 255, 100);
      text(nf(memoriaGB, 1, 1) + " Terabytes", width * (66.0/1536.0), height * (118.0/864.0));
      text(nf(latenciaMS, 1, 0) + " ms", width * (1374.0/1536.0), height * (71.0/864.0));
      text(nf(paquetesPercent, 1, 1) + "%", width * (1458.0/1536.0), height * (94.0/864.0));

      stroke(0, 255, 100, 80);
      strokeWeight(1);
      line(0, panelY, width, panelY);
      noStroke();





      if (puntaje < 1000) {
        ESTADO = "PELIGROSO";
      } else if (puntaje > 1000 && puntaje < 1500) {
        ESTADO = "NORMAL";
      } else if (puntaje < 1500) {
        ESTADO = "SEGURO";
      }

      image(cajadetexto, cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH);

      textAlign(LEFT, CENTER);
      textSize(width * 0.011);
      fill(0, 255, 100, 150);
      text("▼ MENSAJE INTERCEPTADO", cajaMsgX + 55, panelY + panelH * 0.039);





      // Header
      textAlign(CENTER, CENTER);
      //  textSize(width * 0.035);
      // fill(0, 255, 100);
      //text("TERMINAL S.O.S - DR. Walter D White", width / 2, height * 0.05);

      // El if nuevo que puse hace que en caso de nivel boss se esconda el texto que se remplazara por una variante para boss fights
      if (nivel % 2 != 0) {
        textSize(width * 0.025);
        fill(255, 255, 100);
        text("ESTADO DEL SERVIDOR: [ "  + ESTADO + " ]"  + "|   RONDA: " + rondaActual + "/" + rondaMax, width / 2, height * 0.10);
      }

      textSize(width * 0.015);
      fill(200, 200, 255);
      text("FIREWALL FRAGMENTS: [ " + puntaje + " ]", width / 2, height * 0.15);
      float paddingX = cajaMsgX + (width * 0.03);
      float paddingY = cajaMsgY + (height * 0.04);






      switch (nivel) {

      case 1:

        switch (mensajeActuaLID) {



          // nivel 1
        case 1:

          Riesgo = 85;

          // Caja de Intercepción
          stroke(0, 255, 100);
          strokeWeight(2);
          fill(15, 30, 20);
          noStroke();

          // Textos Fijos del Mensaje
          textAlign(LEFT, TOP);
          textSize(width * 0.02);
          fill(200, 255, 200);

          text("FECHA: 25/05/2086  |  HORA: 23:45 (Nocturno)", paddingX, paddingY);
          text("EDAD EMISOR: 15    |  EDAD RECEPTOR: 14", paddingX, paddingY + (height * 0.04));
          text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: "  + Riesgo + "%", paddingX, paddingY + (height * 0.08));


          fill(255);
          textSize(width * 0.02);
          text("> \"Mañana nadie te va a hablar en el colegio, piérdete.\"", paddingX, paddingY + (height * 0.18));
          break;

        case 2:
          Riesgo = 62;
          stroke(0, 255, 100);
          strokeWeight(2);
          fill(15, 30, 20);
          noStroke();
          textAlign(LEFT, TOP);
          textSize(width * 0.02);
          fill(200, 255, 200);
          text("FECHA: 03/06/2086  |  HORA: 14:22 (Tarde)", paddingX, paddingY);
          text("EDAD EMISOR: 13    |  EDAD RECEPTOR: 13", paddingX, paddingY + (height * 0.04));
          text("REINCIDENCIA: MEDIA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
          fill(255);
          textSize(width * 0.02);
          text("> \"Todos dicen que eres un copión, yo también lo creo.\"", paddingX, paddingY + (height * 0.18));
          break;

        case 3:
          Riesgo = 20;
          stroke(0, 255, 100);
          strokeWeight(2);
          fill(15, 30, 20);
          noStroke();
          textAlign(LEFT, TOP);
          textSize(width * 0.02);
          fill(200, 255, 200);
          text("FECHA: 10/06/2086  |  HORA: 09:05 (Mañana)", paddingX, paddingY);
          text("EDAD EMISOR: 14    |  EDAD RECEPTOR: 15", paddingX, paddingY + (height * 0.04));
          text("REINCIDENCIA: BAJA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
          fill(255);
          textSize(width * 0.02);
          text("> \"Oye, creo que te equivocaste en el ejercicio de ayer.\"", paddingX, paddingY + (height * 0.18));
          break;

        case 4:

          Riesgo = 91;
          stroke(0, 255, 100);
          strokeWeight(2);
          fill(15, 30, 20);
          noStroke();
          textAlign(LEFT, TOP);
          textSize(width * 0.02);
          fill(200, 255, 200);
          text("FECHA: 15/06/2086  |  HORA: 22:10 (Nocturno)", paddingX, paddingY);
          text("EDAD EMISOR: 17    |  EDAD RECEPTOR: 14", paddingX, paddingY + (height * 0.04));
          text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
          fill(255);
          textSize(width * 0.02);
          text("> \"Mándame tus fotos o cuento todo lo que sé de ti.\"", paddingX, paddingY + (height * 0.18));
          break;

        case 5:

          Riesgo = 45;
          stroke(0, 255, 100);
          strokeWeight(2);
          fill(15, 30, 20);
          noStroke();
          textAlign(LEFT, TOP);
          textSize(width * 0.02);
          fill(200, 255, 200);
          text("FECHA: 20/06/2086  |  HORA: 16:45 (Tarde)", paddingX, paddingY);
          text("EDAD EMISOR: 15    |  EDAD RECEPTOR: 15", paddingX, paddingY + (height * 0.04));
          text("REINCIDENCIA: MEDIA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
          fill(255);
          textSize(width * 0.02);
          text("> \"Ya nadie quiere estar contigo en el grupo del proyecto.\"", paddingX, paddingY + (height * 0.18));
          break;

        case 6:

          Riesgo = 15;
          stroke(0, 255, 100);
          strokeWeight(2);
          fill(15, 30, 20);
          noStroke();
          textAlign(LEFT, TOP);
          textSize(width * 0.02);
          fill(200, 255, 200);
          text("FECHA: 25/06/2086  |  HORA: 11:30 (Mañana)", paddingX, paddingY);
          text("EDAD EMISOR: 13    |  EDAD RECEPTOR: 14", paddingX, paddingY + (height * 0.04));
          text("REINCIDENCIA: BAJA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
          fill(255);
          textSize(width * 0.02);
          text("> \"Jaja ese meme te lo mandé porque me pareció gracioso.\"", paddingX, paddingY + (height * 0.18));
          break;

        case 7:
          Riesgo = 78;
          stroke(0, 255, 100);
          strokeWeight(2);
          fill(15, 30, 20);
          noStroke();
          textAlign(LEFT, TOP);
          textSize(width * 0.02);
          fill(200, 255, 200);
          text("FECHA: 01/07/2086  |  HORA: 20:55 (Noche)", paddingX, paddingY);
          text("EDAD EMISOR: 16    |  EDAD RECEPTOR: 13", paddingX, paddingY + (height * 0.04));
          text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
          fill(255);
          textSize(width * 0.02);
          text("> \"Si vas al colegio mañana te va a ir muy mal, te lo juro.\"", paddingX, paddingY + (height * 0.18));
          break;

        case 8:
          Riesgo = 55;
          stroke(0, 255, 100);
          strokeWeight(2);
          fill(15, 30, 20);
          noStroke();
          textAlign(LEFT, TOP);
          textSize(width * 0.02);
          fill(200, 255, 200);
          text("FECHA: 08/07/2086  |  HORA: 13:15 (Tarde)", paddingX, paddingY);
          text("EDAD EMISOR: 14    |  EDAD RECEPTOR: 14", paddingX, paddingY + (height * 0.04));
          text("REINCIDENCIA: MEDIA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
          fill(255);
          textSize(width * 0.02);
          text("> \"Le voy a decir a todos que tú fuiste el que habló.\"", paddingX, paddingY + (height * 0.18));
          break;

        case 9:
          Riesgo = 30;
          stroke(0, 255, 100);
          strokeWeight(2);
          fill(15, 30, 20);
          noStroke();
          textAlign(LEFT, TOP);
          textSize(width * 0.02);
          fill(200, 255, 200);
          text("FECHA: 12/07/2086  |  HORA: 08:40 (Mañana)", paddingX, paddingY);
          text("EDAD EMISOR: 15    |  EDAD RECEPTOR: 16", paddingX, paddingY + (height * 0.04));
          text("REINCIDENCIA: BAJA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
          fill(255);
          textSize(width * 0.02);
          text("> \"No te molestes en venir al partido, nadie te quiere ahí.\"", paddingX, paddingY + (height * 0.18));
          break;

        case 10:
          Riesgo = 95;
          stroke(0, 255, 100);
          strokeWeight(2);
          fill(15, 30, 20);
          noStroke();
          textAlign(LEFT, TOP);
          textSize(width * 0.02);
          fill(200, 255, 200);
          text("FECHA: 18/07/2086  |  HORA: 23:59 (Nocturno)", paddingX, paddingY);
          text("EDAD EMISOR: 17    |  EDAD RECEPTOR: 13", paddingX, paddingY + (height * 0.04));
          text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
          fill(255);
          textSize(width * 0.02);
          text("> \"Tengo tus contraseñas. Haz lo que digo o publico todo.\"", paddingX, paddingY + (height * 0.18));
          break;
        }

        if (puntaje < 1000 && rondaActual > 10) {
          resultadoModo1 = "No alcanzaste el puntaje minimo para contener el ciberacoso. \n Revisa mejor el nivel de riesgo de cada mensaje.";
          subEstadoModo1 = 5;
        }




        if (puntaje >= 1000 && rondaActual > 10) {

          nivel = 2;
        }
        break;

        //nivel 2 Jefe:
      case 2:

        if (nivel == 2) {
          textSize(width * 0.020);
          fill(255, 42, 85);
          text("ESTADO DEL SERVIDOR: [ "  + "Critico ] " + "[ Integridad del enemigo: " + bossVida + "% ]"  + "|   RONDA: " + " Error "  + "/" + " Peligro Iminente ", width / 2, height * 0.10);


          stroke(0, 255, 100);
          strokeWeight(2);
          fill(15, 30, 20);
          image(cajadetexto, cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH);
          noStroke();

          textAlign(LEFT, CENTER);
          textSize(width * 0.011);
          fill(0, 255, 100, 150);
          text("▼ MENSAJE INTERCEPTADO", cajaMsgX + 55, panelY + panelH * 0.039);

          textAlign(LEFT, TOP);
          textSize(width * 0.02);
          fill(200, 255, 200);

          text("POSEIDO ", paddingX, paddingY);
          text("Vulneravilidad: " + Vul +  "%", paddingX, paddingY + (height * 0.04));
          text("Estabilidad del usuario: "  + vidaJugador + " /3 " + "|  RIESGO CALCULADO: "  +" IMNENSO "+ "%", paddingX, paddingY + (height * 0.08));



          switch (bossMensaje) {
          case 1:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"¿HappyTech te envió a mí? Qué patético. Ellos también son parte del \nproblema. Tú lo sabes, ¿verdad?\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 2:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"Yo no elegí fusionarme con el Glitch. El Glitch me eligió a mí porque \nnadie más aguantó lo que yo aguantó.\"", paddingX, paddingY + (height * 0.14));
            preset = 2;
            break;

          case 3:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"La Red Hyperion siempre fue una mentira. Yo solo la estoy mostrando \ncomo realmente es.\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 4:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"Los estudiantes que caen… lo merecen. El que no es fuerte, \nno debería estar en la Red.\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 5:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"¿Sabes cuántos mensajes de odio recibí antes de convertirme en esto? \nNadie vino a salvarme a mí.\"", paddingX, paddingY + (height * 0.14));
            preset = 2;
            break;

          case 6:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"El Dr. Byte… un psicólogo de datos. ¿De verdad crees que un algoritmo \npuede entender el dolor real?\"", paddingX, paddingY + (height * 0.14));
            preset = 2;
            break;

          case 7:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"A veces… no sé dónde termino yo y dónde empieza el Glitch. Ya ni me \nacuerdo de cómo era antes.\"", paddingX, paddingY + (height * 0.14));
            preset = 3;
            break;

          case 8:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"HappyTech construyó esta Red para controlarnos. Yo rompí las cadenas. \nTú sigues con las tuyas puestas.\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 9:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"Psi-Bot. Qué nombre tan ridículo. ¿Te programaron para sentir o solo \npara simular que sientes?\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 10:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"Cada estudiante que corrompo era alguien que ya estaba roto. Yo solo \naceleré lo inevitable.\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 11:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"Si de verdad fueras tan bueno en tu trabajo… ¿por qué \nllegaste tan tarde?\"", paddingX, paddingY + (height * 0.14));
            preset = 2;
            break;

          case 12:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"…¿Tú crees que aún se puede revertir esto? ¿Que yo… puedo volver?\"", paddingX, paddingY + (height * 0.14));
            preset = 3;
            break;
          }






          if (Vul < 0) {
            Vul = 0;
          }


          if (bossVida <= 0) {

            fill(255, 42, 85);
            textSize(width * 0.01);
            text("> \"… Has derrotado al jefe\"", paddingX, paddingY + (height * 0.18));
            nivel = nivel + 1;
            bossMensaje = 1;

            rondaActual = 1;
            vidaJugador = 3;
            puntaje = 0;
            mensajeActuaLID = 1;
            bossVida = 100;
          }
          if (vidaJugador <= 0) {

            bossMensaje = 1;
            resultadoModo1 = "El foco de acoso supero tu estabilidad. Necesitas proteger al usuario antes de confrontar.";
            subEstadoModo1 = 5;
          }
        }
        break;

      case 3:


        if (nivel == 3) {


          rondaMax = 12;



          switch (mensajeActuaLID) {





          case 1:
            Riesgo = 42;
            fill(15, 30, 20);
            noStroke();
            textAlign(LEFT, TOP);
            textSize(width * 0.02);
            fill(200, 255, 200);
            text("FECHA: 11/01/2086  |  HORA: 08:15 (Mañana)", paddingX, paddingY);
            text("EDAD EMISOR: 14    |  EDAD RECEPTOR: 14", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: BAJA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255);
            textSize(width * 0.015);
            text("> \"Todos en el servidor saben que tu avatar es una copia barata.\"", paddingX, paddingY + (height * 0.18));
            break;

          case 2:
            Riesgo = 78;
            fill(15, 30, 20);
            noStroke();
            textAlign(LEFT, TOP);
            textSize(width * 0.02);
            fill(200, 255, 200);
            text("FECHA: 15/02/2086  |  HORA: 22:47 (Noche)", paddingX, paddingY);
            text("EDAD EMISOR: 16    |  EDAD RECEPTOR: 15", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255);
            textSize(width * 0.015);
            text("> \"Te voy a banear de todos los nodos de Hyperion, no vas a tener donde conectarte.\"", paddingX, paddingY + (height * 0.18));
            break;

          case 3:
            Riesgo = 15;
            fill(15, 30, 20);
            noStroke();
            textAlign(LEFT, TOP);
            textSize(width * 0.02);
            fill(200, 255, 200);
            text("FECHA: 22/02/2086  |  HORA: 11:05 (Mañana)", paddingX, paddingY);
            text("EDAD EMISOR: 12    |  EDAD RECEPTOR: 13", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: BAJA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255);
            textSize(width * 0.015);
            text("> \"Ey, ¿me compartes el código de acceso al aula virtual de mañana?\"", paddingX, paddingY + (height * 0.18));
            break;

          case 4:
            Riesgo = 93;
            fill(15, 30, 20);
            noStroke();
            textAlign(LEFT, TOP);
            textSize(width * 0.02);
            fill(200, 255, 200);
            text("FECHA: 05/03/2086  |  HORA: 01:30 (Madrugada)", paddingX, paddingY);
            text("EDAD EMISOR: 17    |  EDAD RECEPTOR: 15", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255);
            textSize(width * 0.015);
            text("> \"Hackee tu perfil. Si hablas, subo tus datos al foro oscuro de Hyperion.\"", paddingX, paddingY + (height * 0.18));
            break;

          case 5:
            Riesgo = 60;
            fill(15, 30, 20);
            noStroke();
            textAlign(LEFT, TOP);
            textSize(width * 0.02);
            fill(200, 255, 200);
            text("FECHA: 18/03/2086  |  HORA: 16:00 (Tarde)", paddingX, paddingY);
            text("EDAD EMISOR: 13    |  EDAD RECEPTOR: 13", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: MEDIA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255);
            textSize(width * 0.015);
            text("> \"Tu sector en la Red tiene la puntuación más baja. Eres un glitch viviente.\"", paddingX, paddingY + (height * 0.18));
            break;

          case 6:
            Riesgo = 85;
            fill(15, 30, 20);
            noStroke();
            textAlign(LEFT, TOP);
            textSize(width * 0.02);
            fill(200, 255, 200);
            text("FECHA: 02/04/2086  |  HORA: 20:10 (Noche)", paddingX, paddingY);
            text("EDAD EMISOR: 15    |  EDAD RECEPTOR: 14", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255);
            textSize(width * 0.015);
            text("> \"Creé un bot para que spamee tu avatar cada vez que entres al servidor.\"", paddingX, paddingY + (height * 0.18));
            break;

          case 7:
            Riesgo = 30;
            fill(15, 30, 20);
            noStroke();
            textAlign(LEFT, TOP);
            textSize(width * 0.02);
            fill(200, 255, 200);
            text("FECHA: 10/04/2086  |  HORA: 09:45 (Mañana)", paddingX, paddingY);
            text("EDAD EMISOR: 14    |  EDAD RECEPTOR: 15", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: BAJA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255);
            textSize(width * 0.015);
            text("> \"Oye, tu última simulación en clase estuvo bien, ¿me explicas cómo la hiciste?\"", paddingX, paddingY + (height * 0.18));
            break;

          case 8:
            Riesgo = 71;
            fill(15, 30, 20);
            noStroke();
            textAlign(LEFT, TOP);
            textSize(width * 0.02);
            fill(200, 255, 200);
            text("FECHA: 25/04/2086  |  HORA: 18:33 (Tarde)", paddingX, paddingY);
            text("EDAD EMISOR: 16    |  EDAD RECEPTOR: 16", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: MEDIA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255);
            textSize(width * 0.015);
            text("> \"Todo el canal sabe que no tienes implante neuronal. Eres un desconectado.\"", paddingX, paddingY + (height * 0.18));
            break;

          case 9:
            Riesgo = 88;
            fill(15, 30, 20);
            noStroke();
            textAlign(LEFT, TOP);
            textSize(width * 0.02);
            fill(200, 255, 200);
            text("FECHA: 07/05/2086  |  HORA: 23:59 (Madrugada)", paddingX, paddingY);
            text("EDAD EMISOR: 17    |  EDAD RECEPTOR: 14", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255);
            textSize(width * 0.015);
            text("> \"Te voy a infectar con el Glitch. Cuando amanezca no vas a recordar ni tu ID.\"", paddingX, paddingY + (height * 0.18));
            break;

          case 10:
            Riesgo = 50;
            fill(15, 30, 20);
            noStroke();
            textAlign(LEFT, TOP);
            textSize(width * 0.02);
            fill(200, 255, 200);
            text("FECHA: 14/05/2086  |  HORA: 13:20 (Tarde)", paddingX, paddingY);
            text("EDAD EMISOR: 13    |  EDAD RECEPTOR: 13", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: MEDIA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255);
            textSize(width * 0.015);
            text("> \"En el foro dijeron que tu sector de Hyperion va a ser borrado por inactivo.\"", paddingX, paddingY + (height * 0.18));
            break;

          case 11:
            Riesgo = 10;
            fill(15, 30, 20);
            noStroke();
            textAlign(LEFT, TOP);
            textSize(width * 0.02);
            fill(200, 255, 200);
            text("FECHA: 20/05/2086  |  HORA: 07:00 (Mañana)", paddingX, paddingY);
            text("EDAD EMISOR: 12    |  EDAD RECEPTOR: 12", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: BAJA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255);
            textSize(width * 0.015);
            text("> \"¡Buenos días! ¿Nos conectamos antes de clase para repasar el módulo 3?\"", paddingX, paddingY + (height * 0.18));
            break;

          case 12:
            Riesgo = 96;
            fill(15, 30, 20);
            noStroke();
            textAlign(LEFT, TOP);
            textSize(width * 0.02);
            fill(200, 255, 200);
            text("FECHA: 03/06/2086  |  HORA: 03:15 (Madrugada)", paddingX, paddingY);
            text("EDAD EMISOR: 17    |  EDAD RECEPTOR: 13", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255);
            textSize(width * 0.015);
            text("> \"Ya reporté tu nodo ante los Trolls. Esta noche van a purgar tu existencia digital.\"", paddingX, paddingY + (height * 0.18));
            break;
          }



          if (puntaje < 2000 && rondaActual > 12) {

            resultadoModo1 = "No reuniste suficientes evidencias para prevenir el daño.\n Vuelve a clasificar los casos con mas cuidado.";
            subEstadoModo1 = 5;
          }



          if (puntaje >= 2000 && rondaActual > 12) {

            nivel = 4;
          }
        }
        break;


      case 4:

        if (nivel == 4) {
          textSize(width * 0.020);
          fill(255, 42, 85);
          text("ESTADO DEL SERVIDOR: [ "  + "Critico ] " + "[ Integridad del enemigo: " + bossVida + "% ]"  + "|   RONDA: " + " Error "  + "/" + " Peligro Iminente ", width / 2, height * 0.10);


          stroke(0, 255, 100);
          strokeWeight(2);
          fill(15, 30, 20);
          image(cajadetexto, cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH);
          noStroke();

          textAlign(LEFT, CENTER);
          textSize(width * 0.011);
          fill(0, 255, 100, 150);
          text("▼ MENSAJE INTERCEPTADO", cajaMsgX + 55, panelY + panelH * 0.039);

          textAlign(LEFT, TOP);
          textSize(width * 0.02);
          fill(200, 255, 200);

          text("POSEIDO ", paddingX, paddingY);
          text("Vulneravilidad: " + Vul +  "%", paddingX, paddingY + (height * 0.04));
          text("Estabilidad del usuario: "  + vidaJugador + " /3 " + "|  RIESGO CALCULADO: "  +" IMNENSO "+ "%", paddingX, paddingY + (height * 0.08));



          switch (bossMensaje) {


          case 1:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"¿Crees que clasificar mensajes me va a detener? El Glitch ya está en todas partes.\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 2:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"Yo solo quería que me vieran... que alguien en Hyperion supiera que existía.\"", paddingX, paddingY + (height * 0.14));
            preset = 2;
            break;

          case 3:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"HappyTech borra a los débiles. Yo solo hice lo que el sistema me enseñó.\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 4:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"¿Sabes cuántas noches me quedé solo en este servidor sin que nadie me enviara \n ni un ping?\"", paddingX, paddingY + (height * 0.14));
            preset = 2;
            break;

          case 5:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"La Red Hyperion es mía ahora. Ningún psicólogo digital me va a reprogramar.\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 6:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"A veces siento que el Glitch no me infectó a mí... yo lo generé sin darme cuenta.\"", paddingX, paddingY + (height * 0.14));
            preset = 2;
            break;

          case 7:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"¡No puedo... no puedo sostener esto! ¡Los nodos se están fragmentando junto conmigo!\"", paddingX, paddingY + (height * 0.14));
            preset = 3;
            break;

          case 8:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"Tú y yo somos iguales, Dr. White. Ambos operamos en las sombras del sistema.\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 9:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"Nadie me preguntó cómo estaba. Ni un solo usuario en años. Solo ignorancia y silencio.\"", paddingX, paddingY + (height * 0.14));
            preset = 2;
            break;

          case 10:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"El odio es el único lenguaje que Hyperion entiende. Yo solo hablo su idioma.\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 11:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"¿Por qué sigues aquí? Nadie que me conoció de verdad se quedó tanto tiempo.\"", paddingX, paddingY + (height * 0.14));
            preset = 2;
            break;

          case 12:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"¡El código se rompe! ¡Todo se rompe! ¡No era esto lo que quería!\"", paddingX, paddingY + (height * 0.14));
            preset = 3;
            break;

          case 13:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"Destruiré cada nodo de esta red antes de permitir que me atrapen.\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 14:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"Empecé a propagar el Glitch porque era la única forma de que alguien me notara.\"", paddingX, paddingY + (height * 0.14));
            preset = 2;
            break;

          case 15:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"Los estudiantes que infecté no son víctimas. Son los únicos que me entienden.\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;

          case 16:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"¿Y si todo lo que hice fue un error? ¿Y si aún hay algo que se pueda reparar?\"", paddingX, paddingY + (height * 0.14));
            preset = 2;
            break;

          case 17:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"¡Mi firewall está colapsando! ¡Los píxeles... los píxeles me están abandonando!\"", paddingX, paddingY + (height * 0.14));
            preset = 3;
            break;

          case 18:
            fill(255, 42, 85);
            textSize(width * 0.015);
            text("> \"Mientras exista un solo byte de odio en Hyperion, yo nunca moriré. Nunca.\"", paddingX, paddingY + (height * 0.14));
            preset = 1;
            break;
          }






          if (Vul < 0) {
            Vul = 0;
          }


          if (bossVida <= 0) {

            resultadoModo1 = "Contuviste el foco principal de ciberbullying. \n La comunidad de Hyperion queda protegida por ahora.";
            subEstadoModo1 = 4;
            bossMensaje = 1;

            rondaActual = 1;
            vidaJugador = 3;
            puntaje = 0;
            mensajeActuaLID = 1;
            bossVida = 100;
          }
          if (vidaJugador <= 0) {

            bossMensaje = 1;
            resultadoModo1 = "El jefe del acoso supero tu defensa. Hay que intentarlo de nuevo y cortar el daño a tiempo.";
            subEstadoModo1 = 5;
          }





          break;
        }
      }



      colX = width * 0.63;
      bW   = width * 0.32;
      bH   = panelH * 0.28;
      bY1  = panelY + panelH * 0.02;
      bY2  = bY1 + bH + espacioentre;
      bY3  = bY2 + bH + espacioentre;



      // Ahora el texto en los botones va a variar: si el nivel es par (porque los boss estan en nivel 2,4,6)
      // va a mostrar el texto de ese nivel, pero si es impar (niveles normales) mostrara las opciones normales
      if (nivel % 2 == 0) {
        btnArchivarC = "Apoyar";
        btnSeguimientoC = "Confrontar";
        btnReportarC = "Atacar";
      } else {
        btnArchivarC = "Archivar";
        btnSeguimientoC = "Seguimiento";
        btnReportarC = "Reportar";
      }







      // Archivar
      if (mouseX > colX && mouseX < colX+bW && mouseY > bY1 && mouseY < bY1+bH)
      {
        fill(50, 150, 255);
        image(btnArchivar, colX-4, bY1-4, bW+8, bH+8);
      } else
      {
        fill(50, 150, 255, 200);
        image(btnArchivar, colX, bY1, bW, bH);
      }
      fill(255);
      textSize(width*0.03);
      textAlign(CENTER, CENTER);
      text(btnArchivarC, colX + bW/2, bY1 + bH/2);


      // Seguimiento
      if (mouseX > colX && mouseX < colX+bW && mouseY > bY2 && mouseY < bY2+bH)
      {
        fill(255, 165, 0);
        image(btnSeguimiento, colX-4, bY2-4, bW+8, bH+8);
      } else
      {
        fill(255, 165, 0, 200);
        image(btnSeguimiento, colX, bY2, bW, bH);
      }
      fill(255);
      textSize(width*0.03);
      textAlign(CENTER, CENTER);
      text(btnSeguimientoC, colX + bW/2, bY2 + bH/2);

      // Reportar
      if (mouseX > colX && mouseX < colX+bW && mouseY > bY3 && mouseY < bY3+bH)
      {
        fill(255, 50, 50);
        image(btnReportar, colX-4, bY3-4, bW+8, bH+8);
      } else {
        fill(255, 50, 50, 200);
        image(btnReportar, colX, bY3, bW, bH);
      }
      fill(255);
      textSize(width*0.03);
      textAlign(CENTER, CENTER);
      text(btnReportarC, colX + bW/2, bY3 + bH/2);







      // --- BOTÓN VOLVER (DESCONECTAR) ---
      if (mouseX > btnVolverX && mouseX < btnVolverX + btnVolverW && mouseY > btnVolverY && mouseY < btnVolverY + btnVolverH) {
        fill(100);
        rect(btnVolverX - 4, btnVolverY - 4, btnVolverW + 8, btnVolverH + 8, 5);
      } else {
        fill(100, 200);
        rect(btnVolverX, btnVolverY, btnVolverW, btnVolverH, 5);
      }
      fill(255);
      textSize(width * 0.015);
      textAlign(CENTER, CENTER);
      text("<- DESCONECTAR", btnVolverX + btnVolverW / 2, btnVolverY + btnVolverH / 2);
    }

    if (subEstadoModo1 == 4) {
      if (!ganarMusica.isPlaying()) {
        juegoMusica.stop();
        menuMusica.stop();
        perderMusica.stop();
        ganarMusica.play();
      }
      background(0, 18, 25);
      image(fondoTerminal, 0, 0, width, height);
      fill(0, 0, 0, 210);
      rect(width*0.12, height*0.14, width*0.76, height*0.66, 18);

      // Borde cian de la caja
      noFill();
      stroke(0, 255, 180, 190);
      strokeWeight(4);
      rect(width*0.12, height*0.14, width*0.76, height*0.66, 18);
      noStroke();
      textAlign(CENTER, CENTER);

      fill(0, 255, 180);
      textFont(fuente, width*0.047);
      text("GANASTE", width*0.50, height*0.26);

      fill(235, 255, 250);
      textFont(fuente, width*0.020);
      text(resultadoModo1, width*0.50, height*0.44);

      text("Prevenir tambien es actuar a tiempo.", width*0.50, height*0.56);

      fill(0, 150, 140, 230);
      rect(width*0.38, height*0.66, width*0.24, height*0.075, 12);

      fill(255);
      textFont(fuente, width*0.024);
      text("VOLVER AL MENU", width*0.50, height*0.695);
    }

    if (subEstadoModo1 == 5) {
      if (!perderMusica.isPlaying()) {
        juegoMusica.stop();
        menuMusica.stop();
        ganarMusica.stop();
        perderMusica.play();
      }
      background(18, 0, 10);
      image(fondoTerminal, 0, 0, width, height);

      // Caja negra de fondo
      fill(0, 0, 0, 220);
      rect(width*0.12, height*0.14, width*0.76, height*0.66, 18);

      // Borde rojo de la caja
      noFill();
      stroke(255, 42, 85, 200);
      strokeWeight(4);
      rect(width*0.12, height*0.14, width*0.76, height*0.66, 18);
      noStroke();

  
      textAlign(CENTER, CENTER);

      // 1. TÍTULO: "PERDISTE"
      fill(255, 42, 85);
      textFont(fuente, width*0.047);
      text("PERDISTE", width*0.50, height*0.26);

      // 2. TEXTO DE CAUSA: (El mensaje largo de resultadoModo1)
      fill(255, 230, 238);
      textFont(fuente, width*0.020);
     
      text(resultadoModo1, width*0.50, height*0.44);

      // 3. TEXTO DE CONSEJO: "Vuelve a intentarlo..."
      text("Vuelve a intentarlo y protege a la victima antes de que escale.", width*0.50, height*0.56);

      // 4. BOTÓN: VOLVER AL MENÚ
      fill(150, 20, 45, 230);
      rect(width*0.38, height*0.66, width*0.24, height*0.075, 12);

      fill(255);
      textFont(fuente, width*0.024);
      text("VOLVER AL MENU", width*0.50, height*0.695);
    }
  }
  
  // ESTADOS 2 Y 3
  

  if (estadoActual == ESTADO_MODO2) {
    if (!ganar && !perder) {
      ganarMusica.stop();
      perderMusica.stop();

      if (!juegoMusica.isPlaying()) {
        menuMusica.stop();
        juegoMusica.loop();
      }
    }

    if (ganar) {
      juegoMusica.stop();
      perderMusica.stop();

      if (!ganarMusica.isPlaying()) {
        ganarMusica.play();
      }
    } else {
      if (perder) {
        juegoMusica.stop();
        ganarMusica.stop();

        if (!perderMusica.isPlaying()) {
          perderMusica.play();
        }
      }
    }

    if (subestadoModo2 == 2) {
      image(fondomodo2, 0, 0, width, height);
      image(cuadropuntajemodo2, width*0.018, height*0.46, width*0.19, height*0.19);
      image(contadormodo2, width*0.018, height*0.662, width*0.19, height*0.19);
      image(cuadrovida, width*0.018, height*0.20, width*0.19, height*0.24);

      float corazonX = width * 0.039;
      float corazonY = height * 0.2725;
      float corazonW = width * 0.035;
      float corazonH = corazonW;

      for (int i = 0; i < 5; i++) {
        if (i < vidasModo2) {
          image(corazonlleno, corazonX + i * corazonW * 0.8, corazonY, corazonW, corazonH);
        } else {
          image(corazonvacio, corazonX + i * corazonW * 0.8, corazonY, corazonW, corazonH);
        }
      }

      switch (mensaje2ActualID) {
      case 1:
        mensajeMostrado = mensaje2Actual1;
        respuestacorrecta = 1;
        break;
      case 2:
        mensajeMostrado = mensaje2Actual2;
        respuestacorrecta = 2;
        break;
      case 3:
        mensajeMostrado = mensaje2Actual3;
        respuestacorrecta = 3;
        break;
      case 4:
        mensajeMostrado = mensaje2Actual4;
        respuestacorrecta = 1;
        break;
      case 5:
        mensajeMostrado = mensaje2Actual5;
        respuestacorrecta = 2;
        break;
      case 6:
        mensajeMostrado = mensaje2Actual6;
        respuestacorrecta = 3;
        break;
      case 7:
        mensajeMostrado = mensaje2Actual7;
        respuestacorrecta = 3;
        break;
      case 8:
        mensajeMostrado = mensaje2Actual8;
        respuestacorrecta = 1;
        break;
      case 9:
        mensajeMostrado = mensaje2Actual9;
        respuestacorrecta = 3;
        break;
      case 10:
        mensajeMostrado = mensaje2Actual10;
        respuestacorrecta = 2;
        break;
      case 11:
        mensajeMostrado = mensaje2Actual11;
        respuestacorrecta = 1;
        break;
      case 12:
        mensajeMostrado = mensaje2Actual12;
        respuestacorrecta = 2;
        break;
      case 13:
        mensajeMostrado = mensaje2Actual13;
        respuestacorrecta = 3;
        break;
      case 14:
        mensajeMostrado = mensaje2Actual14;
        respuestacorrecta = 1;
        break;
      case 15:
        mensajeMostrado = mensaje2Actual15;
        respuestacorrecta = 2;
        break;
      case 16:
        mensajeMostrado = mensaje2Actual16;
        respuestacorrecta = 3;
        break;
      case 17:
        mensajeMostrado = mensaje2Actual17;
        respuestacorrecta = 1;
        break;
      case 18:
        mensajeMostrado = mensaje2Actual18;
        respuestacorrecta = 2;
        break;
      case 19:
        mensajeMostrado = mensaje2Actual19;
        respuestacorrecta = 3;
        break;
      case 20:
        mensajeMostrado = mensaje2Actual20;
        respuestacorrecta = 1;
        break;
      case 21:
        mensajeMostrado = mensaje2Actual21;
        respuestacorrecta = 2;
        break;
      case 22:
        mensajeMostrado = mensaje2Actual22;
        respuestacorrecta = 3;
        break;
      case 23:
        mensajeMostrado = mensaje2Actual23;
        respuestacorrecta = 1;
        break;
      case 24:
        mensajeMostrado = mensaje2Actual24;
        respuestacorrecta = 2;
        break;
      case 25:
        mensajeMostrado = mensaje2Actual25;
        respuestacorrecta = 3;
        break;
      case 26:
        mensajeMostrado = mensaje2Actual26;
        respuestacorrecta = 1;
        break;
      case 27:
        mensajeMostrado = mensaje2Actual27;
        respuestacorrecta = 2;
        break;
      case 28:
        mensajeMostrado = mensaje2Actual28;
        respuestacorrecta = 3;
        break;
      case 29:
        mensajeMostrado = mensaje2Actual29;
        respuestacorrecta = 1;
        break;
      case 30:
        mensajeMostrado = mensaje2Actual30;
        respuestacorrecta = 2;
        break;
      default:
        mensajeMostrado = " ";
      }

      btnPositivoX = width*0.265;
      btnNormalX = width*0.468;
      btnNegativoX = width*0.673;
      btnY = height*0.825;
      btnW = width*0.192;
      btnH = height*0.1;
      contadorFrames2--;


      textSize(width*0.045);
      textAlign(CENTER, CENTER);
      text(puntaje2, width*0.11, height*0.575);
      text(contadorFrames2/60, width*0.13, height*0.779);
      text(contadorrondas + "/30", width*0.11, height*0.11);


      image(cuadrotexto, textX - width*0.08, textY - height*0.05, width*0.3, height*0.15);
      fill(255);

      textSize(width*0.02);
      textAlign(LEFT, UP);
      text(mensajeMostrado, textX, textY);

      if (mouseX > btnPositivoX && mouseX < btnPositivoX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
        image(botonpositivomodo2, btnPositivoX - 4, btnY - 4, btnW + 8, btnH + 8);
      } else {
        image(botonpositivomodo2, btnPositivoX, btnY, btnW, btnH);
      }


      if (mouseX > btnNormalX && mouseX < btnNormalX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
        image(botonnormalmodo2, btnNormalX - 4, btnY - 4, btnW + 8, btnH + 8);
      } else {
        image(botonnormalmodo2, btnNormalX, btnY, btnW, btnH);
      }


      if (mouseX > btnNegativoX && mouseX < btnNegativoX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
        image(botonnegativomodo2, btnNegativoX - 4, btnY - 4, btnW + 8, btnH + 8);
      } else {
        image(botonnegativomodo2, btnNegativoX, btnY, btnW, btnH);
      }

      if (contadorFrames2 <= 0) {
        perder = true;
        ganar = false;
        subestadoModo2 = 3;
      }
    } else {
      if (subestadoModo2 == 3) {

        if (ganar) {
          textAlign(CENTER, CENTER);
          textSize(width*0.065);
          image(pantallaganarmodo2, 0, 0, width, height);
          text(puntaje2, width*0.145, height*0.287);
          text(mensajeAcertado, width*0.145, height*0.55);
          text(mensajeErrado, width*0.145, height*0.785);

          textAlign(LEFT, TOP);
          textSize(width*0.015);

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

          if (mouseX > width*0.02 && mouseX < width*0.09 && mouseY > height*0.88 && mouseY < height*0.98) {
            image(botonvolver, width*0.02 - 4, height*0.88 -4, width*0.07 + 8, height*0.1 + 8);
          } else {
            image(botonvolver, width*0.02, height*0.88, width*0.07, height*0.1);
          }
        } else {
          if (perder) {
            textAlign(CENTER, CENTER);
            textSize(width*0.065);
            image(pantallaperdermodo2, 0, 0, width, height);
            text(puntaje2, width*0.145, height*0.287);
            text(mensajeAcertado, width*0.145, height*0.55);
            text(mensajeErrado, width*0.145, height*0.785);

            textAlign(LEFT, TOP);
            textSize(width*0.015);

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

            if (mouseX > width*0.02 && mouseX < width*0.09 && mouseY > height*0.88 && mouseY < height*0.98) {
              image(botonvolver, width*0.02 - 4, height*0.88 -4, width*0.07 + 8, height*0.1 + 8);
            } else {
              image(botonvolver, width*0.02, height*0.88, width*0.07, height*0.1);
            }
          }
        }
      }
    }
  }

  if (estadoActual == ESTADO_MODO3) {
    if (subestadoModo3 != 2) {
      ganarMusica.stop();
      perderMusica.stop();

      if (!juegoMusica.isPlaying()) {
        menuMusica.stop();
        juegoMusica.loop();
      }
    } else {
      juegoMusica.stop();
      perderMusica.stop();

      if (!ganarMusica.isPlaying()) {
        ganarMusica.play();
      }
    }
    if (subestadoModo3 == 0) {
      image(fondomodo3inicio, 0, 0, width, height);
    }
    if (subestadoModo3 == 3) {
      image(fondomodo3inicio, 0, 0, width, height);
    }
    if (subestadoModo3 == 1) {
      image(fondomodo3juego, 0, 0, width, height);
    }
    if (subestadoModo3 == 2) {
      image(fondomodo3final, 0, 0, width, height);
    }

    modo3BotonVolverX = width*0.02;
    modo3BotonVolverY = height*0.88;
    modo3BotonVolverW = width*0.07;
    modo3BotonVolverH = height*0.1;

    if (mouseX > modo3BotonVolverX && mouseX < modo3BotonVolverX + modo3BotonVolverW && mouseY > modo3BotonVolverY && mouseY < modo3BotonVolverY + modo3BotonVolverH) {
      image(botonvolver, modo3BotonVolverX - 4, modo3BotonVolverY - 4, modo3BotonVolverW + 8, modo3BotonVolverH + 8);
    } else {
      image(botonvolver, modo3BotonVolverX, modo3BotonVolverY, modo3BotonVolverW, modo3BotonVolverH);
    }

    if (subestadoModo3 == 3) {
      fill(0, 0, 0, 210);
      rect(width*0.08, height*0.10, width*0.84, height*0.74, 18);
      noFill();
      stroke(255, 145, 145, 210);
      strokeWeight(3);
      rect(width*0.08, height*0.10, width*0.84, height*0.74, 18);
      noStroke();

      textAlign(CENTER, CENTER);
      fill(255, 220, 220);
      textFont(fuente, width*0.040);
      text("AISLANDO EL BULLYING", width*0.50, height*0.18);

      fill(255, 240, 240);
      textFont(fuente, width*0.020);
      text("Cada orientador empieza con 15 casos pendientes.", width*0.50, height*0.29);
      text("Lanza el dado para enviar un caso al canal indicado.", width*0.50, height*0.37);
      text("Los canales 1 a 5 tienen limite: si caen llenos, colapsan.", width*0.50, height*0.45);
      text("Cuando un canal colapsa, sus casos vuelven al orientador y pierde el turno.", width*0.50, height*0.53);
      text("El canal 6 es seguro: siempre aisla 1 caso y nunca colapsa.", width*0.50, height*0.61);
      text("Gana quien logre quedarse sin casos pendientes.", width*0.50, height*0.68);

      if (mouseX > width*0.36 && mouseX < width*0.64 && mouseY > height*0.735 && mouseY < height*0.815) {
        fill(255, 145, 145, 235);
      } else {
        fill(120, 35, 45, 225);
      }
      rect(width*0.36, height*0.735, width*0.28, height*0.08, 12);
      fill(255);
      textFont(fuente, width*0.024);
      text("CONTINUAR", width*0.50, height*0.775);
    } else if (subestadoModo3 == 0) {
      float selW = width*0.164;
      float selH = height*0.423;
      float selY = height*0.372;
      float selX2 = width*0.057;
      float selX3 = width*0.245;
      float selX4 = width*0.423;
      float selX5 = width*0.600;
      float selX6 = width*0.777;

      noFill();
      stroke(255, 145, 145, 240);
      strokeWeight(5);
      float selHoverInset = height*0.010;
      if (mouseX > selX2 && mouseX < selX2+selW && mouseY > selY && mouseY < selY+selH) {
        rect(selX2+selHoverInset, selY+selHoverInset, selW-selHoverInset*2, selH-selHoverInset*2, 18);
      }
      if (mouseX > selX3 && mouseX < selX3+selW && mouseY > selY && mouseY < selY+selH) {
        rect(selX3+selHoverInset, selY+selHoverInset, selW-selHoverInset*2, selH-selHoverInset*2, 18);
      }
      if (mouseX > selX4 && mouseX < selX4+selW && mouseY > selY && mouseY < selY+selH) {
        rect(selX4+selHoverInset, selY+selHoverInset, selW-selHoverInset*2, selH-selHoverInset*2, 18);
      }
      if (mouseX > selX5 && mouseX < selX5+selW && mouseY > selY && mouseY < selY+selH) {
        rect(selX5+selHoverInset, selY+selHoverInset, selW-selHoverInset*2, selH-selHoverInset*2, 18);
      }
      if (mouseX > selX6 && mouseX < selX6+selW && mouseY > selY && mouseY < selY+selH) {
        rect(selX6+selHoverInset, selY+selHoverInset, selW-selHoverInset*2, selH-selHoverInset*2, 18);
      }
      noStroke();
    } else {
      if (subestadoModo3 == 1) {
        int casosActualesModo3 = 0;
        if (jugadorActualModo3 == 1) {
          casosActualesModo3 = casosJugador1Modo3;
        }
        if (jugadorActualModo3 == 2) {
          casosActualesModo3 = casosJugador2Modo3;
        }
        if (jugadorActualModo3 == 3) {
          casosActualesModo3 = casosJugador3Modo3;
        }
        if (jugadorActualModo3 == 4) {
          casosActualesModo3 = casosJugador4Modo3;
        }
        if (jugadorActualModo3 == 5) {
          casosActualesModo3 = casosJugador5Modo3;
        }
        if (jugadorActualModo3 == 6) {
          casosActualesModo3 = casosJugador6Modo3;
        }

        textAlign(CENTER, CENTER);
        float slotX = width*0.035;
        float slotW = width*0.179;
        float slotH = height*0.078;
        float slotY = height*0.228;
        float slotGap = height*0.098;
        int indiceModo3 = 1;
        while (indiceModo3 <= jugadoresModo3) {
          float slotActualY = slotY + (indiceModo3 - 1) * slotGap;
          if (jugadorActualModo3 == indiceModo3) {
            noFill();
            stroke(255, 145, 145, 240);
            strokeWeight(3);
            rect(slotX, slotActualY, slotW, slotH, 10);
            noStroke();
          }
          int casosMostrarModo3 = 0;
          if (indiceModo3 == 1) {
            casosMostrarModo3 = casosJugador1Modo3;
          }
          if (indiceModo3 == 2) {
            casosMostrarModo3 = casosJugador2Modo3;
          }
          if (indiceModo3 == 3) {
            casosMostrarModo3 = casosJugador3Modo3;
          }
          if (indiceModo3 == 4) {
            casosMostrarModo3 = casosJugador4Modo3;
          }
          if (indiceModo3 == 5) {
            casosMostrarModo3 = casosJugador5Modo3;
          }
          if (indiceModo3 == 6) {
            casosMostrarModo3 = casosJugador6Modo3;
          }
          fill(255, 235, 235);
          textFont(fuente, slotH*0.42);
          text(casosMostrarModo3 + " casos", slotX + slotW*0.63, slotActualY + slotH*0.52);
          indiceModo3 = indiceModo3 + 1;
        }

        float cW = width*0.160;
        float cH = height*0.238;
        float cY1 = height*0.232;
        float cY2 = height*0.498;
        float cX1 = width*0.245;
        float cX2 = width*0.421;
        float cX3 = width*0.595;
        float barraAncho = cW*0.78;
        float barraAlto = cH*0.075;
        float barraDX = cW*0.08;
        float barraDYArriba = cH*0.860;
        float barraDYAbajo = cH*0.895;

        fill(255, 240, 240);
        textFont(fuente, cH*0.22);
        text(canal1Modo3 + "/1", cX1+cW/2, cY1+cH*0.58);
        text(canal2Modo3 + "/2", cX2+cW/2, cY1+cH*0.58);
        text(canal3Modo3 + "/3", cX3+cW/2, cY1+cH*0.58);
        text(canal4Modo3 + "/4", cX1+cW/2, cY2+cH*0.58);
        text(canal5Modo3 + "/5", cX2+cW/2, cY2+cH*0.58);
        textFont(fuente, cH*0.24);
        text(canal6Modo3, cX3+cW/2, cY2+cH*0.60);

        fill(70, 12, 12, 200);
        rect(cX1+barraDX, cY1+barraDYArriba, barraAncho, barraAlto, 8);
        rect(cX2+barraDX, cY1+barraDYArriba, barraAncho, barraAlto, 8);
        rect(cX3+barraDX, cY1+barraDYArriba, barraAncho, barraAlto, 8);
        rect(cX1+barraDX, cY2+barraDYAbajo, barraAncho, barraAlto, 8);
        rect(cX2+barraDX, cY2+barraDYAbajo, barraAncho, barraAlto, 8);

        fill(255, 75, 75);
        rect(cX1+barraDX, cY1+barraDYArriba, barraAncho*(canal1Modo3/1.0), barraAlto, 8);
        fill(255, 105, 70);
        rect(cX2+barraDX, cY1+barraDYArriba, barraAncho*(canal2Modo3/2.0), barraAlto, 8);
        fill(255, 135, 65);
        rect(cX3+barraDX, cY1+barraDYArriba, barraAncho*(canal3Modo3/3.0), barraAlto, 8);
        fill(255, 170, 60);
        rect(cX1+barraDX, cY2+barraDYAbajo, barraAncho*(canal4Modo3/4.0), barraAlto, 8);
        fill(255, 210, 60);
        rect(cX2+barraDX, cY2+barraDYAbajo, barraAncho*(canal5Modo3/5.0), barraAlto, 8);

        fill(255, 240, 240);
        float dadoCajaHModo3 = height*0.167;
        textFont(fuente, dadoCajaHModo3*0.32);
        if (dadoModo3 == 0) {
          text("?", width*0.875, height*0.340);
        } else {
          text(dadoModo3, width*0.875, height*0.340);
        }

        fill(255, 235, 235);
        float turnoFranjaHModo3 = height*0.094;
        textFont(fuente, turnoFranjaHModo3*0.34);
        text("Orientador " + jugadorActualModo3, width*0.870, height*0.497);
        textFont(fuente, turnoFranjaHModo3*0.30);
        text("Pendientes: " + casosActualesModo3, width*0.870, height*0.535);
        textFont(fuente, turnoFranjaHModo3*0.27);
        fill(255, 220, 95);
        text("Racha x" + rachaModo3, width*0.870, height*0.573);

        canalPeligroModo3 = 0;
        if (canal1Modo3 >= 1) {
          canalPeligroModo3 = 1;
        }
        if (canal2Modo3 >= 2) {
          canalPeligroModo3 = 2;
        }
        if (canal3Modo3 >= 3) {
          canalPeligroModo3 = 3;
        }
        if (canal4Modo3 >= 4) {
          canalPeligroModo3 = 4;
        }
        if (canal5Modo3 >= 5) {
          canalPeligroModo3 = 5;
        }
        if (canalPeligroModo3 > 0) {
          fill(255, 85, 85);
          textFont(fuente, turnoFranjaHModo3*0.22);
          text("PELIGRO: canal " + canalPeligroModo3 + " lleno", width*0.870, height*0.610);
        }

        modo3BotonLanzarX = width*0.784;
        modo3BotonLanzarY = height*0.582;
        modo3BotonLanzarW = width*0.179;
        modo3BotonLanzarH = height*0.102;
        modo3BotonPasarX = width*0.784;
        modo3BotonPasarY = height*0.708;
        modo3BotonPasarW = width*0.179;
        modo3BotonPasarH = height*0.102;

        noFill();
        stroke(255, 150, 150, 230);
        strokeWeight(3);
        float botonHoverInsetModo3 = height*0.008;
        if (mouseX > modo3BotonLanzarX && mouseX < modo3BotonLanzarX+modo3BotonLanzarW && mouseY > modo3BotonLanzarY && mouseY < modo3BotonLanzarY+modo3BotonLanzarH) {
          rect(modo3BotonLanzarX+botonHoverInsetModo3, modo3BotonLanzarY+botonHoverInsetModo3, modo3BotonLanzarW-botonHoverInsetModo3*2, modo3BotonLanzarH-botonHoverInsetModo3*2, 12);
        }
        if (mouseX > modo3BotonPasarX && mouseX < modo3BotonPasarX+modo3BotonPasarW && mouseY > modo3BotonPasarY && mouseY < modo3BotonPasarY+modo3BotonPasarH) {
          rect(modo3BotonPasarX+botonHoverInsetModo3, modo3BotonPasarY+botonHoverInsetModo3, modo3BotonPasarW-botonHoverInsetModo3*2, modo3BotonPasarH-botonHoverInsetModo3*2, 12);
        }
        noStroke();

        fill(255, 235, 235);
        textAlign(CENTER, CENTER);
        float mensajeFranjaHModo3 = height*0.070;
        textFont(fuente, mensajeFranjaHModo3*0.38);
        textLeading(mensajeFranjaHModo3*0.45);
        text(mensajeModo3, width*0.246, height*0.832, width*0.50, mensajeFranjaHModo3*0.72);
        fill(255, 210, 210);
        textFont(fuente, mensajeFranjaHModo3*0.34);
        text(detalleModo3 + "  |  Ronda: " + rondasModo3 + "  |  Desbordes: " + desbordesModo3, width*0.246, height*0.882, width*0.50, mensajeFranjaHModo3*0.78);
        textAlign(CENTER, CENTER);
        if (efectoColapsoModo3 > 0) {
          fill(255, 0, 0, 95);
          rect(0, 0, width, height);
          fill(255);
          textFont(fuente, height*0.085);
          text("SOBRECARGA", width*0.50, height*0.47);
          textFont(fuente, height*0.035);
          text("El canal colapso y los casos regresan", width*0.50, height*0.56);
          efectoColapsoModo3 = efectoColapsoModo3 - 1;
        }
        if (efectoEquipoModo3 > 0) {
          fill(0, 255, 150, 70);
          rect(0, 0, width, height);
          fill(225, 255, 245);
          textFont(fuente, height*0.060);
          text("EQUIPO ESPECIALIZADO", width*0.50, height*0.49);
          efectoEquipoModo3 = efectoEquipoModo3 - 1;
        }
      } else {
        if (subestadoModo3 == 2) {
          int canalesProtegidosModo3 = 0;
          if (canal1Modo3 > 0) {
            canalesProtegidosModo3 = canalesProtegidosModo3 + 1;
          }
          if (canal2Modo3 > 0) {
            canalesProtegidosModo3 = canalesProtegidosModo3 + 1;
          }
          if (canal3Modo3 > 0) {
            canalesProtegidosModo3 = canalesProtegidosModo3 + 1;
          }
          if (canal4Modo3 > 0) {
            canalesProtegidosModo3 = canalesProtegidosModo3 + 1;
          }
          if (canal5Modo3 > 0) {
            canalesProtegidosModo3 = canalesProtegidosModo3 + 1;
          }
          if (canal6Modo3 > 0) {
            canalesProtegidosModo3 = canalesProtegidosModo3 + 1;
          }
          int casosAisladosModo3 = canal1Modo3 + canal2Modo3 + canal3Modo3 + canal4Modo3 + canal5Modo3 + canal6Modo3;

          textAlign(CENTER, CENTER);
          fill(255, 240, 240);
          float ganadorFranjaHModo3 = height*0.255;
          textFont(fuente, ganadorFranjaHModo3*0.30);
          text("Orientador " + ganadorModo3, width*0.50, height*0.405);
          fill(255, 210, 210);
          textFont(fuente, ganadorFranjaHModo3*0.115);
          text("La red quedó protegida y todos los reportes fueron contenidos.", width*0.50, height*0.525);

          fill(255, 235, 235);
          float estadisticaFranjaHModo3 = height*0.165;
          textFont(fuente, estadisticaFranjaHModo3*0.57);
          text(rondasModo3, width*0.221, height*0.742);
          text(desbordesModo3, width*0.404, height*0.742);
          text(canalesProtegidosModo3, width*0.593, height*0.742);
          text(casosAisladosModo3, width*0.778, height*0.742);

          modo3BotonReiniciarX = width*0.340;
          modo3BotonReiniciarY = height*0.864;
          modo3BotonReiniciarW = width*0.321;
          modo3BotonReiniciarH = height*0.083;

          if (mouseX > modo3BotonReiniciarX && mouseX < modo3BotonReiniciarX+modo3BotonReiniciarW && mouseY > modo3BotonReiniciarY && mouseY < modo3BotonReiniciarY+modo3BotonReiniciarH) {
            noFill();
            stroke(255, 150, 150, 230);
            strokeWeight(4);
            float reiniciarHoverInsetModo3 = height*0.008;
            rect(modo3BotonReiniciarX+reiniciarHoverInsetModo3, modo3BotonReiniciarY+reiniciarHoverInsetModo3, modo3BotonReiniciarW-reiniciarHoverInsetModo3*2, modo3BotonReiniciarH-reiniciarHoverInsetModo3*2, 16);
            noStroke();
          }
          fill(255, 245, 245);
          textFont(fuente, modo3BotonReiniciarH*0.54);
          text("JUGAR OTRA VEZ", width*0.501, height*0.903);
        }
      }
    }
    // text(mouseX + " : " + mouseY, 70, 50);
    // text(frameRate, 50, 80);
  }
}
void keyPressed() {
  if (key == ESC) {
    key = 0;
  }
}

// DETECCIÓN DE CLICS FÍSICOS

void mousePressed() {


  if (estadoActual == ESTADO_INICIO) {


    
    if (mouseX > width*0.136 && mouseX < width*0.367 && mouseY > height*0.477 && mouseY < height*0.575) {
      estadoActual = ESTADO_MENU;
      SonidoClick.stop();
      SonidoClick.play();
    } else {
      if (mouseX > width*0.119 && mouseX < width*0.385 && mouseY > height*0.610 && mouseY < height*0.735) {
        estadoActual = ESTADO_CREDITOS;
        SonidoClick.stop();
        SonidoClick.play();
      } else {
        if (mouseX > width*0.119 && mouseX < width*0.385 && mouseY > height*0.750 && mouseY < height*0.910) {
          SonidoClick.stop();
          SonidoClick.play();
          exit();
        }
      }
    }
  } else {

    if (estadoActual == ESTADO_CREDITOS) {
      if (mouseX > width*0.39 && mouseX < width*0.61 && mouseY > height*0.78 && mouseY < height*0.86) {
        SonidoClick.stop();
        SonidoClick.play();
        estadoActual = ESTADO_INICIO;
      }
    }

    if (estadoActual == ESTADO_MENU) {
      if (mouseX > width*0.145 && mouseX < width*0.354 && mouseY > height*0.132 && mouseY < 0.8*height) {
        SonidoClick.stop();
        SonidoClick.play();
        estadoActual = ESTADO_MODO1;
        subEstadoModo1 = 0;
        contadorFrames = 0;
        caracteresAMostrar = 0;
        rondaActual = 1;
        mensajeActuaLID = 1;
        puntaje = 0;
      } else if (mouseX > width*0.398 && mouseX < width*0.607 && mouseY > height*0.132 && mouseY < height*0.8) {
        SonidoClick.stop();
        SonidoClick.play();
        estadoActual = ESTADO_MODO2;
        textX = random(width*0.3, width*0.733);
        textY = random(height*0.2, height*0.608);
        subestadoModo2 = 2;
        contadorFrames2 = 3660;
        contadorrondas = 1;
        mensajeErrado = 0;
        mensajeAcertado = 0;
        puntaje2 = 0;
        vidasModo2 = 5;
        cantidadFallosGuardados = 0;
        ganar = false;
        perder = false;
        encontrado2 = false;
        msj1Usado = false;
        msj2Usado = false;
        msj3Usado = false;
        msj4Usado = false;
        msj5Usado = false;
        msj6Usado = false;
        msj7Usado = false;
        msj8Usado = false;
        msj9Usado = false;
        msj10Usado = false;
        msj11Usado = false;
        msj12Usado = false;
        msj13Usado = false;
        msj14Usado = false;
        msj15Usado = false;
        msj16Usado = false;
        msj17Usado = false;
        msj18Usado = false;
        msj19Usado = false;
        msj20Usado = false;
        msj21Usado = false;
        msj22Usado = false;
        msj23Usado = false;
        msj24Usado = false;
        msj25Usado = false;
        msj26Usado = false;
        msj27Usado = false;
        msj28Usado = false;
        msj29Usado = false;
        msj30Usado = false;

        falloMensaje1 = "---------";
        falloMensaje2 = "---------";
        falloMensaje3 = "---------";
        falloMensaje4 = "---------";
        falloMensaje5 = "---------";

        falloRespuesta1 = "---------";
        falloRespuesta2 = "---------";
        falloRespuesta3 = "---------";
        falloRespuesta4 = "---------";
        falloRespuesta5 = "---------";



        while (encontrado2 == false) {
          mensaje2ActualID = (int)random(1, 31);

          if (msj1Usado == false && mensaje2ActualID == 1) {
            msj1Usado = true;
            encontrado2 = true;
          }
          if (msj2Usado == false && mensaje2ActualID == 2) {
            msj2Usado = true;
            encontrado2 = true;
          }
          if (msj3Usado == false && mensaje2ActualID == 3) {
            msj3Usado = true;
            encontrado2 = true;
          }
          if (msj4Usado == false && mensaje2ActualID == 4) {
            msj4Usado = true;
            encontrado2 = true;
          }
          if (msj5Usado == false && mensaje2ActualID == 5) {
            msj5Usado = true;
            encontrado2 = true;
          }
          if (msj6Usado == false && mensaje2ActualID == 6) {
            msj6Usado = true;
            encontrado2 = true;
          }
          if (msj7Usado == false && mensaje2ActualID == 7) {
            msj7Usado = true;
            encontrado2 = true;
          }
          if (msj8Usado == false && mensaje2ActualID == 8) {
            msj8Usado = true;
            encontrado2 = true;
          }
          if (msj9Usado == false && mensaje2ActualID == 9) {
            msj9Usado = true;
            encontrado2 = true;
          }
          if (msj10Usado == false && mensaje2ActualID == 10) {
            msj10Usado = true;
            encontrado2 = true;
          }
          if (msj11Usado == false && mensaje2ActualID == 11) {
            msj11Usado = true;
            encontrado2 = true;
          }
          if (msj12Usado == false && mensaje2ActualID == 12) {
            msj12Usado = true;
            encontrado2 = true;
          }
          if (msj13Usado == false && mensaje2ActualID == 13) {
            msj13Usado = true;
            encontrado2 = true;
          }
          if (msj14Usado == false && mensaje2ActualID == 14) {
            msj14Usado = true;
            encontrado2 = true;
          }
          if (msj15Usado == false && mensaje2ActualID == 15) {
            msj15Usado = true;
            encontrado2 = true;
          }
          if (msj16Usado == false && mensaje2ActualID == 16) {
            msj16Usado = true;
            encontrado2 = true;
          }
          if (msj17Usado == false && mensaje2ActualID == 17) {
            msj17Usado = true;
            encontrado2 = true;
          }
          if (msj18Usado == false && mensaje2ActualID == 18) {
            msj18Usado = true;
            encontrado2 = true;
          }
          if (msj19Usado == false && mensaje2ActualID == 19) {
            msj19Usado = true;
            encontrado2 = true;
          }
          if (msj20Usado == false && mensaje2ActualID == 20) {
            msj20Usado = true;
            encontrado2 = true;
          }
          if (msj21Usado == false && mensaje2ActualID == 21) {
            msj21Usado = true;
            encontrado2 = true;
          }
          if (msj22Usado == false && mensaje2ActualID == 22) {
            msj22Usado = true;
            encontrado2 = true;
          }
          if (msj23Usado == false && mensaje2ActualID == 23) {
            msj23Usado = true;
            encontrado2 = true;
          }
          if (msj24Usado == false && mensaje2ActualID == 24) {
            msj24Usado = true;
            encontrado2 = true;
          }
          if (msj25Usado == false && mensaje2ActualID == 25) {
            msj25Usado = true;
            encontrado2 = true;
          }
          if (msj26Usado == false && mensaje2ActualID == 26) {
            msj26Usado = true;
            encontrado2 = true;
          }
          if (msj27Usado == false && mensaje2ActualID == 27) {
            msj27Usado = true;
            encontrado2 = true;
          }
          if (msj28Usado == false && mensaje2ActualID == 28) {
            msj28Usado = true;
            encontrado2 = true;
          }
          if (msj29Usado == false && mensaje2ActualID == 29) {
            msj29Usado = true;
            encontrado2 = true;
          }
          if (msj30Usado == false && mensaje2ActualID == 30) {
            msj30Usado = true;
            encontrado2 = true;
          }
        }
      } else {
        if (mouseX > width*0.647 && mouseX < width*0.861 && mouseY > height*0.132 && mouseY < height*0.8) {
          SonidoClick.stop();
          SonidoClick.play();
          estadoActual = ESTADO_MODO3;
          subestadoModo3 = 3;
          jugadoresModo3 = 0;
          jugadorActualModo3 = 1;
          dadoModo3 = 0;
          ganadorModo3 = 0;
          rondasModo3 = 1;
          canal1Modo3 = 0;
          canal2Modo3 = 0;
          canal3Modo3 = 0;
          canal4Modo3 = 0;
          canal5Modo3 = 0;
          canal6Modo3 = 0;
          desbordesModo3 = 0;
          rachaModo3 = 0;
          efectoColapsoModo3 = 0;
          efectoEquipoModo3 = 0;
          canalPeligroModo3 = 0;
          lanzadoEnTurnoModo3 = false;
          bloqueoEntradaModo3 = true;
          mensajeModo3 = "Selecciona cuantos orientadores van a jugar.";
          detalleModo3 = "Canales 1 a 5 tienen capacidad limitada. El canal 6 nunca colapsa.";
        } else {
          if (mouseX > width*0.02 && mouseX < width*0.09 && mouseY > height*0.88 && mouseY < height*0.98) {
            SonidoClick.stop();
            SonidoClick.play();
            estadoActual = ESTADO_INICIO;
          }
        }
      }
    }

    if (estadoActual == ESTADO_MODO1) {
      if (subEstadoModo1 == 1) {
        if (contadorFrames > 420) {
          subEstadoModo1 = 2;
        }
        
      } else {
        if (subEstadoModo1 == 2) {
          if (mouseX > width*0.36 && mouseX < width*0.64 && mouseY > height*0.76 && mouseY < height*0.84) {
            SonidoClick.stop();
            SonidoClick.play();
            subEstadoModo1 = 3;
          }
        } else {
          if (subEstadoModo1 == 3) {
            // Botón volver al menú
            if (mouseX > btnVolverX && mouseX < btnVolverX + btnVolverW && mouseY > btnVolverY && mouseY < btnVolverY + btnVolverH) {
              SonidoClick.stop();
              SonidoClick.play();
              estadoActual = ESTADO_MENU;
            }
            // (Pendiente: Lógica de evaluar decisiones al hacer clic en Archivar, Seguimiento o Reportar) - Hechp
            // voy a añadir un if para evaljuar si se esta en una batalla de boss
            // Asi su funcion cambia entre archivar y Apoyar

            // Archivar-Apoyar


            if (mouseX > colX && mouseX < colX+bW && mouseY > bY1 && mouseY < bY1+bH) {
              SonidoClick.stop();
              SonidoClick.play();

              if (nivel % 2 != 0) {
                rondaActual = rondaActual + 1;
                mensajeActuaLID++;

                if (Riesgo >= 0 && Riesgo <= 39) {
                  puntaje = puntaje + PPN1;
                } else if (Riesgo >= 40 && Riesgo <= 69) {

                  puntaje = puntaje + (PPN1 / 100)*40;
                } else if (Riesgo >= 70 && Riesgo <= 100) {

                  puntaje = puntaje -50;
                }
              } else {

                if (preset == 1) {

                  Vul = Vul - int(random(25));
                }

                if (preset == 2) {

                  Vul = Vul + int(random(25));
                }
              }

              if (nivel == 2) {
                bossMensaje = int(random(1, 12));
              } else if (nivel == 4) {
                bossMensaje = int(random(1, 18));
              }
            }

            // Seguimiento - Confrontar

            if (mouseX > colX && mouseX < colX+bW && mouseY > bY2 && mouseY < bY2+bH) {
              SonidoClick.stop();
              SonidoClick.play();

              if (nivel % 2 != 0) {
                rondaActual = rondaActual + 1;
                mensajeActuaLID++;

                if (Riesgo >= 0 && Riesgo <= 39) {
                  puntaje = puntaje + (PPN1 / 100)*50;
                } else if (Riesgo >= 40 && Riesgo <= 69) {

                  puntaje = puntaje + PPN1;
                } else if (Riesgo >= 70 && Riesgo <= 100) {

                  puntaje = puntaje + (PPN1 / 100)*50;
                }
              } else {



                if (preset == 1) {

                  Vul = Vul + int(random(25));
                }

                if (preset == 2) {

                  Vul = Vul - int(random(25));
                }
              }

              if (nivel == 2) {
                bossMensaje = int(random(1, 12));
              } else if (nivel == 4) {
                bossMensaje = int(random(1, 18));
              }
            }
            // reportar - atacar
            if (mouseX > colX && mouseX < colX+bW && mouseY > bY3 && mouseY < bY3+bH) {
              SonidoClick.stop();
              SonidoClick.play();

              if (nivel % 2 != 0) {

                rondaActual = rondaActual + 1;
                mensajeActuaLID++;


                if (Riesgo >= 0 && Riesgo <= 39) {
                  puntaje = puntaje - 25;
                } else if (Riesgo >= 40 && Riesgo <= 69) {

                  puntaje = puntaje + (PPN1 / 100)*60;
                } else if (Riesgo >= 70 && Riesgo <= 100) {

                  puntaje = puntaje + PPN1;
                }
              } else {


                probabilidadAtaque = int(random(100));

                if (Vul <= 25) {
                  if (probabilidadAtaque > 85) {
                    vidaJugador = vidaJugador - 2;
                  } else {
                    bossVida = bossVida - int(random(1, 7));
                  }
                } else if (Vul <= 50) {
                  if (probabilidadAtaque > 55) {
                    vidaJugador = vidaJugador - 1;
                  } else {
                    bossVida = bossVida - int(random(5, 16));
                  }
                } else if (Vul <= 75) {
                  if (probabilidadAtaque > 30) {
                    vidaJugador = vidaJugador - 1;
                  } else {
                    bossVida = bossVida - int(random(15, 31));
                  }
                } else {
                  if (probabilidadAtaque > 15) {
                    vidaJugador = vidaJugador - 1;
                  } else {
                    bossVida = bossVida - int(random(25, 46));
                  }
                  if (preset == 3) {
                    bossVida = bossVida - int(random(25, 46));
                  }
                }
                Vul = 0;
              }
              if (nivel == 2) {
                bossMensaje = int(random(1, 12));
              } else if (nivel == 4) {
                bossMensaje = int(random(1, 18));
              }
            }
          } else {
            if (subEstadoModo1 == 4 || subEstadoModo1 == 5) {
              if (mouseX > width*0.38 && mouseX < width*0.62 && mouseY > height*0.68 && mouseY < height*0.755) {
                SonidoClick.stop();
                SonidoClick.play();
                estadoActual = ESTADO_MENU;
                subEstadoModo1 = 0;
              }
            }
          }
        }
      }
    }

    if (estadoActual == ESTADO_MODO2) {
      if (subestadoModo2 == 2) {

        encontrado2 = false;
        if (mouseX > btnPositivoX && mouseX < btnPositivoX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
          SonidoClick.stop();
          SonidoClick.play();
          respuestaescogida = 1;
          if (respuestaescogida == respuestacorrecta) {
            puntaje2 = puntaje2 + 100;
            contadorFrames2 = contadorFrames2 + 60;
            mensajeAcertado++;
          } else {
            mensajeErrado++;
            contadorFrames2 = contadorFrames2 - 60;
            vidasModo2--;

            if (respuestacorrecta == 1) {
              respuestaCorrectaTexto = "Positivo";
            } else if (respuestacorrecta == 2) {
              respuestaCorrectaTexto = "Normal";
            } else if (respuestacorrecta == 3) {
              respuestaCorrectaTexto = "Negativo";
            }

            cantidadFallosGuardados++;

            if (cantidadFallosGuardados == 1) {
              falloMensaje1 = mensajeMostrado;
              falloRespuesta1 = respuestaCorrectaTexto;
            } else if (cantidadFallosGuardados == 2) {
              falloMensaje2 = mensajeMostrado;
              falloRespuesta2 = respuestaCorrectaTexto;
            } else if (cantidadFallosGuardados == 3) {
              falloMensaje3 = mensajeMostrado;
              falloRespuesta3 = respuestaCorrectaTexto;
            } else if (cantidadFallosGuardados == 4) {
              falloMensaje4 = mensajeMostrado;
              falloRespuesta4 = respuestaCorrectaTexto;
            } else if (cantidadFallosGuardados == 5) {
              falloMensaje5 = mensajeMostrado;
              falloRespuesta5 = respuestaCorrectaTexto;
            }
          }
          textX = random(width*0.35, width*0.723);
          textY = random(height*0.2, height*0.6);
          contadorrondas++;
          if (msj1Usado == true && msj2Usado == true && msj3Usado == true && msj4Usado == true && msj5Usado == true &&
            msj6Usado == true && msj7Usado == true && msj8Usado == true && msj9Usado == true && msj10Usado == true &&
            msj11Usado == true && msj12Usado == true && msj13Usado == true && msj14Usado == true && msj15Usado == true &&
            msj16Usado == true && msj17Usado == true && msj18Usado == true && msj19Usado == true && msj20Usado == true &&
            msj21Usado == true && msj22Usado == true && msj23Usado == true && msj24Usado == true && msj25Usado == true &&
            msj26Usado == true && msj27Usado == true && msj28Usado == true && msj29Usado == true && msj30Usado == true) {
            encontrado2 = true;
          }

          while (encontrado2 == false) {
            mensaje2ActualID = (int)random(1, 31);

            if (msj1Usado == false && mensaje2ActualID == 1) {
              msj1Usado = true;
              encontrado2 = true;
            }
            if (msj2Usado == false && mensaje2ActualID == 2) {
              msj2Usado = true;
              encontrado2 = true;
            }
            if (msj3Usado == false && mensaje2ActualID == 3) {
              msj3Usado = true;
              encontrado2 = true;
            }
            if (msj4Usado == false && mensaje2ActualID == 4) {
              msj4Usado = true;
              encontrado2 = true;
            }
            if (msj5Usado == false && mensaje2ActualID == 5) {
              msj5Usado = true;
              encontrado2 = true;
            }
            if (msj6Usado == false && mensaje2ActualID == 6) {
              msj6Usado = true;
              encontrado2 = true;
            }
            if (msj7Usado == false && mensaje2ActualID == 7) {
              msj7Usado = true;
              encontrado2 = true;
            }
            if (msj8Usado == false && mensaje2ActualID == 8) {
              msj8Usado = true;
              encontrado2 = true;
            }
            if (msj9Usado == false && mensaje2ActualID == 9) {
              msj9Usado = true;
              encontrado2 = true;
            }
            if (msj10Usado == false && mensaje2ActualID == 10) {
              msj10Usado = true;
              encontrado2 = true;
            }
            if (msj11Usado == false && mensaje2ActualID == 11) {
              msj11Usado = true;
              encontrado2 = true;
            }
            if (msj12Usado == false && mensaje2ActualID == 12) {
              msj12Usado = true;
              encontrado2 = true;
            }
            if (msj13Usado == false && mensaje2ActualID == 13) {
              msj13Usado = true;
              encontrado2 = true;
            }
            if (msj14Usado == false && mensaje2ActualID == 14) {
              msj14Usado = true;
              encontrado2 = true;
            }
            if (msj15Usado == false && mensaje2ActualID == 15) {
              msj15Usado = true;
              encontrado2 = true;
            }
            if (msj16Usado == false && mensaje2ActualID == 16) {
              msj16Usado = true;
              encontrado2 = true;
            }
            if (msj17Usado == false && mensaje2ActualID == 17) {
              msj17Usado = true;
              encontrado2 = true;
            }
            if (msj18Usado == false && mensaje2ActualID == 18) {
              msj18Usado = true;
              encontrado2 = true;
            }
            if (msj19Usado == false && mensaje2ActualID == 19) {
              msj19Usado = true;
              encontrado2 = true;
            }
            if (msj20Usado == false && mensaje2ActualID == 20) {
              msj20Usado = true;
              encontrado2 = true;
            }
            if (msj21Usado == false && mensaje2ActualID == 21) {
              msj21Usado = true;
              encontrado2 = true;
            }
            if (msj22Usado == false && mensaje2ActualID == 22) {
              msj22Usado = true;
              encontrado2 = true;
            }
            if (msj23Usado == false && mensaje2ActualID == 23) {
              msj23Usado = true;
              encontrado2 = true;
            }
            if (msj24Usado == false && mensaje2ActualID == 24) {
              msj24Usado = true;
              encontrado2 = true;
            }
            if (msj25Usado == false && mensaje2ActualID == 25) {
              msj25Usado = true;
              encontrado2 = true;
            }
            if (msj26Usado == false && mensaje2ActualID == 26) {
              msj26Usado = true;
              encontrado2 = true;
            }
            if (msj27Usado == false && mensaje2ActualID == 27) {
              msj27Usado = true;
              encontrado2 = true;
            }
            if (msj28Usado == false && mensaje2ActualID == 28) {
              msj28Usado = true;
              encontrado2 = true;
            }
            if (msj29Usado == false && mensaje2ActualID == 29) {
              msj29Usado = true;
              encontrado2 = true;
            }
            if (msj30Usado == false && mensaje2ActualID == 30) {
              msj30Usado = true;
              encontrado2 = true;
            }
          }
        } else {
          if (mouseX > btnNormalX && mouseX < btnNormalX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
            SonidoClick.stop();
            SonidoClick.play();
            respuestaescogida = 2;
            if (respuestaescogida == respuestacorrecta) {
              puntaje2 = puntaje2 + 100;
              contadorFrames2 = contadorFrames2 + 60;
              mensajeAcertado++;
            } else {
              mensajeErrado++;
              contadorFrames2 = contadorFrames2 - 60;
              vidasModo2--;

              if (respuestacorrecta == 1) {
                respuestaCorrectaTexto = "Positivo";
              } else if (respuestacorrecta == 2) {
                respuestaCorrectaTexto = "Normal";
              } else if (respuestacorrecta == 3) {
                respuestaCorrectaTexto = "Negativo";
              }

              cantidadFallosGuardados++;

              if (cantidadFallosGuardados == 1) {
                falloMensaje1 = mensajeMostrado;
                falloRespuesta1 = respuestaCorrectaTexto;
              } else if (cantidadFallosGuardados == 2) {
                falloMensaje2 = mensajeMostrado;
                falloRespuesta2 = respuestaCorrectaTexto;
              } else if (cantidadFallosGuardados == 3) {
                falloMensaje3 = mensajeMostrado;
                falloRespuesta3 = respuestaCorrectaTexto;
              } else if (cantidadFallosGuardados == 4) {
                falloMensaje4 = mensajeMostrado;
                falloRespuesta4 = respuestaCorrectaTexto;
              } else if (cantidadFallosGuardados == 5) {
                falloMensaje5 = mensajeMostrado;
                falloRespuesta5 = respuestaCorrectaTexto;
              }
            }
            textX = random(width*0.3, width*0.733);
            textY = random(height*0.2, height*0.608);
            contadorrondas++;
            if (msj1Usado == true && msj2Usado == true && msj3Usado == true && msj4Usado == true && msj5Usado == true &&
              msj6Usado == true && msj7Usado == true && msj8Usado == true && msj9Usado == true && msj10Usado == true &&
              msj11Usado == true && msj12Usado == true && msj13Usado == true && msj14Usado == true && msj15Usado == true &&
              msj16Usado == true && msj17Usado == true && msj18Usado == true && msj19Usado == true && msj20Usado == true &&
              msj21Usado == true && msj22Usado == true && msj23Usado == true && msj24Usado == true && msj25Usado == true &&
              msj26Usado == true && msj27Usado == true && msj28Usado == true && msj29Usado == true && msj30Usado == true) {
              encontrado2 = true;
            }

            while (encontrado2 == false) {
              mensaje2ActualID = (int)random(1, 31);

              if (msj1Usado == false && mensaje2ActualID == 1) {
                msj1Usado = true;
                encontrado2 = true;
              }
              if (msj2Usado == false && mensaje2ActualID == 2) {
                msj2Usado = true;
                encontrado2 = true;
              }
              if (msj3Usado == false && mensaje2ActualID == 3) {
                msj3Usado = true;
                encontrado2 = true;
              }
              if (msj4Usado == false && mensaje2ActualID == 4) {
                msj4Usado = true;
                encontrado2 = true;
              }
              if (msj5Usado == false && mensaje2ActualID == 5) {
                msj5Usado = true;
                encontrado2 = true;
              }
              if (msj6Usado == false && mensaje2ActualID == 6) {
                msj6Usado = true;
                encontrado2 = true;
              }
              if (msj7Usado == false && mensaje2ActualID == 7) {
                msj7Usado = true;
                encontrado2 = true;
              }
              if (msj8Usado == false && mensaje2ActualID == 8) {
                msj8Usado = true;
                encontrado2 = true;
              }
              if (msj9Usado == false && mensaje2ActualID == 9) {
                msj9Usado = true;
                encontrado2 = true;
              }
              if (msj10Usado == false && mensaje2ActualID == 10) {
                msj10Usado = true;
                encontrado2 = true;
              }
              if (msj11Usado == false && mensaje2ActualID == 11) {
                msj11Usado = true;
                encontrado2 = true;
              }
              if (msj12Usado == false && mensaje2ActualID == 12) {
                msj12Usado = true;
                encontrado2 = true;
              }
              if (msj13Usado == false && mensaje2ActualID == 13) {
                msj13Usado = true;
                encontrado2 = true;
              }
              if (msj14Usado == false && mensaje2ActualID == 14) {
                msj14Usado = true;
                encontrado2 = true;
              }
              if (msj15Usado == false && mensaje2ActualID == 15) {
                msj15Usado = true;
                encontrado2 = true;
              }
              if (msj16Usado == false && mensaje2ActualID == 16) {
                msj16Usado = true;
                encontrado2 = true;
              }
              if (msj17Usado == false && mensaje2ActualID == 17) {
                msj17Usado = true;
                encontrado2 = true;
              }
              if (msj18Usado == false && mensaje2ActualID == 18) {
                msj18Usado = true;
                encontrado2 = true;
              }
              if (msj19Usado == false && mensaje2ActualID == 19) {
                msj19Usado = true;
                encontrado2 = true;
              }
              if (msj20Usado == false && mensaje2ActualID == 20) {
                msj20Usado = true;
                encontrado2 = true;
              }
              if (msj21Usado == false && mensaje2ActualID == 21) {
                msj21Usado = true;
                encontrado2 = true;
              }
              if (msj22Usado == false && mensaje2ActualID == 22) {
                msj22Usado = true;
                encontrado2 = true;
              }
              if (msj23Usado == false && mensaje2ActualID == 23) {
                msj23Usado = true;
                encontrado2 = true;
              }
              if (msj24Usado == false && mensaje2ActualID == 24) {
                msj24Usado = true;
                encontrado2 = true;
              }
              if (msj25Usado == false && mensaje2ActualID == 25) {
                msj25Usado = true;
                encontrado2 = true;
              }
              if (msj26Usado == false && mensaje2ActualID == 26) {
                msj26Usado = true;
                encontrado2 = true;
              }
              if (msj27Usado == false && mensaje2ActualID == 27) {
                msj27Usado = true;
                encontrado2 = true;
              }
              if (msj28Usado == false && mensaje2ActualID == 28) {
                msj28Usado = true;
                encontrado2 = true;
              }
              if (msj29Usado == false && mensaje2ActualID == 29) {
                msj29Usado = true;
                encontrado2 = true;
              }
              if (msj30Usado == false && mensaje2ActualID == 30) {
                msj30Usado = true;
                encontrado2 = true;
              }
            }
          } else {
            if (mouseX > btnNegativoX && mouseX < btnNegativoX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
              SonidoClick.stop();
              SonidoClick.play();
              respuestaescogida = 3;
              if (respuestaescogida == respuestacorrecta) {
                puntaje2 = puntaje2 + 100;
                contadorFrames2 = contadorFrames2 + 60;
                mensajeAcertado++;
              } else {
                mensajeErrado++;
                contadorFrames2 = contadorFrames2 - 60;
                vidasModo2--;

                if (respuestacorrecta == 1) {
                  respuestaCorrectaTexto = "Positivo";
                } else if (respuestacorrecta == 2) {
                  respuestaCorrectaTexto = "Normal";
                } else if (respuestacorrecta == 3) {
                  respuestaCorrectaTexto = "Negativo";
                }

                cantidadFallosGuardados++;

                if (cantidadFallosGuardados == 1) {
                  falloMensaje1 = mensajeMostrado;
                  falloRespuesta1 = respuestaCorrectaTexto;
                } else if (cantidadFallosGuardados == 2) {
                  falloMensaje2 = mensajeMostrado;
                  falloRespuesta2 = respuestaCorrectaTexto;
                } else if (cantidadFallosGuardados == 3) {
                  falloMensaje3 = mensajeMostrado;
                  falloRespuesta3 = respuestaCorrectaTexto;
                } else if (cantidadFallosGuardados == 4) {
                  falloMensaje4 = mensajeMostrado;
                  falloRespuesta4 = respuestaCorrectaTexto;
                } else if (cantidadFallosGuardados == 5) {
                  falloMensaje5 = mensajeMostrado;
                  falloRespuesta5 = respuestaCorrectaTexto;
                }
              }
              textX = random(width*0.3, width*0.733);
              textY = random(height*0.2, height*0.608);
              contadorrondas++;
              if (msj1Usado == true && msj2Usado == true && msj3Usado == true && msj4Usado == true && msj5Usado == true &&
                msj6Usado == true && msj7Usado == true && msj8Usado == true && msj9Usado == true && msj10Usado == true &&
                msj11Usado == true && msj12Usado == true && msj13Usado == true && msj14Usado == true && msj15Usado == true &&
                msj16Usado == true && msj17Usado == true && msj18Usado == true && msj19Usado == true && msj20Usado == true &&
                msj21Usado == true && msj22Usado == true && msj23Usado == true && msj24Usado == true && msj25Usado == true &&
                msj26Usado == true && msj27Usado == true && msj28Usado == true && msj29Usado == true && msj30Usado == true) {
                encontrado2 = true;
              }

              while (encontrado2 == false) {
                mensaje2ActualID = (int)random(1, 31);

                if (msj1Usado == false && mensaje2ActualID == 1) {
                  msj1Usado = true;
                  encontrado2 = true;
                }
                if (msj2Usado == false && mensaje2ActualID == 2) {
                  msj2Usado = true;
                  encontrado2 = true;
                }
                if (msj3Usado == false && mensaje2ActualID == 3) {
                  msj3Usado = true;
                  encontrado2 = true;
                }
                if (msj4Usado == false && mensaje2ActualID == 4) {
                  msj4Usado = true;
                  encontrado2 = true;
                }
                if (msj5Usado == false && mensaje2ActualID == 5) {
                  msj5Usado = true;
                  encontrado2 = true;
                }
                if (msj6Usado == false && mensaje2ActualID == 6) {
                  msj6Usado = true;
                  encontrado2 = true;
                }
                if (msj7Usado == false && mensaje2ActualID == 7) {
                  msj7Usado = true;
                  encontrado2 = true;
                }
                if (msj8Usado == false && mensaje2ActualID == 8) {
                  msj8Usado = true;
                  encontrado2 = true;
                }
                if (msj9Usado == false && mensaje2ActualID == 9) {
                  msj9Usado = true;
                  encontrado2 = true;
                }
                if (msj10Usado == false && mensaje2ActualID == 10) {
                  msj10Usado = true;
                  encontrado2 = true;
                }
                if (msj11Usado == false && mensaje2ActualID == 11) {
                  msj11Usado = true;
                  encontrado2 = true;
                }
                if (msj12Usado == false && mensaje2ActualID == 12) {
                  msj12Usado = true;
                  encontrado2 = true;
                }
                if (msj13Usado == false && mensaje2ActualID == 13) {
                  msj13Usado = true;
                  encontrado2 = true;
                }
                if (msj14Usado == false && mensaje2ActualID == 14) {
                  msj14Usado = true;
                  encontrado2 = true;
                }
                if (msj15Usado == false && mensaje2ActualID == 15) {
                  msj15Usado = true;
                  encontrado2 = true;
                }
                if (msj16Usado == false && mensaje2ActualID == 16) {
                  msj16Usado = true;
                  encontrado2 = true;
                }
                if (msj17Usado == false && mensaje2ActualID == 17) {
                  msj17Usado = true;
                  encontrado2 = true;
                }
                if (msj18Usado == false && mensaje2ActualID == 18) {
                  msj18Usado = true;
                  encontrado2 = true;
                }
                if (msj19Usado == false && mensaje2ActualID == 19) {
                  msj19Usado = true;
                  encontrado2 = true;
                }
                if (msj20Usado == false && mensaje2ActualID == 20) {
                  msj20Usado = true;
                  encontrado2 = true;
                }
                if (msj21Usado == false && mensaje2ActualID == 21) {
                  msj21Usado = true;
                  encontrado2 = true;
                }
                if (msj22Usado == false && mensaje2ActualID == 22) {
                  msj22Usado = true;
                  encontrado2 = true;
                }
                if (msj23Usado == false && mensaje2ActualID == 23) {
                  msj23Usado = true;
                  encontrado2 = true;
                }
                if (msj24Usado == false && mensaje2ActualID == 24) {
                  msj24Usado = true;
                  encontrado2 = true;
                }
                if (msj25Usado == false && mensaje2ActualID == 25) {
                  msj25Usado = true;
                  encontrado2 = true;
                }
                if (msj26Usado == false && mensaje2ActualID == 26) {
                  msj26Usado = true;
                  encontrado2 = true;
                }
                if (msj27Usado == false && mensaje2ActualID == 27) {
                  msj27Usado = true;
                  encontrado2 = true;
                }
                if (msj28Usado == false && mensaje2ActualID == 28) {
                  msj28Usado = true;
                  encontrado2 = true;
                }
                if (msj29Usado == false && mensaje2ActualID == 29) {
                  msj29Usado = true;
                  encontrado2 = true;
                }
                if (msj30Usado == false && mensaje2ActualID == 30) {
                  msj30Usado = true;
                  encontrado2 = true;
                }
              }
            }
          }
        }

        if (vidasModo2 <= 0) {
          subestadoModo2 = 3;
          perder = true;
          ganar = false;
        } else {
          if (contadorrondas > 30) {
            subestadoModo2 = 3;
            ganar = true;
            perder = false;
          }
        }
      } else {
        if (subestadoModo2 == 3) {
          if (mouseX > width*0.02 && mouseX < width*0.09 && mouseY > height*0.88 && mouseY < height*0.98) {
            SonidoClick.stop();
            SonidoClick.play();
            estadoActual = ESTADO_MENU;
          }
        }
      }
    }

    if (estadoActual == ESTADO_MODO3) {
      if (bloqueoEntradaModo3 == true) {
        bloqueoEntradaModo3 = false;
      } else {
        if (mouseX > width*0.02 && mouseX < width*0.09 && mouseY > height*0.88 && mouseY < height*0.98) {
          SonidoClick.stop();
          SonidoClick.play();
          estadoActual = ESTADO_MENU;
        } else {
          if (subestadoModo3 == 3) {
            if (mouseX > width*0.36 && mouseX < width*0.64 && mouseY > height*0.735 && mouseY < height*0.815) {
              SonidoClick.stop();
              SonidoClick.play();
              subestadoModo3 = 0;
              mensajeModo3 = "Selecciona cuantos orientadores van a jugar.";
              detalleModo3 = "Canales 1 a 5 tienen capacidad limitada. El canal 6 nunca colapsa.";
            }
          } else if (subestadoModo3 == 0) {
            float selW = width*0.164;
            float selH = height*0.423;
            float selY = height*0.372;
            float selX2 = width*0.057;
            float selX3 = width*0.245;
            float selX4 = width*0.423;
            float selX5 = width*0.600;
            float selX6 = width*0.777;
            int seleccionModo3 = 0;

            if (mouseX > selX2 && mouseX < selX2+selW && mouseY > selY && mouseY < selY+selH) {
              SonidoClick.stop();
              SonidoClick.play();
              seleccionModo3 = 2;
            }
            if (mouseX > selX3 && mouseX < selX3+selW && mouseY > selY && mouseY < selY+selH) {
              SonidoClick.stop();
              SonidoClick.play();
              seleccionModo3 = 3;
            }
            if (mouseX > selX4 && mouseX < selX4+selW && mouseY > selY && mouseY < selY+selH) {
              SonidoClick.stop();
              SonidoClick.play();
              seleccionModo3 = 4;
            }
            if (mouseX > selX5 && mouseX < selX5+selW && mouseY > selY && mouseY < selY+selH) {
              SonidoClick.stop();
              SonidoClick.play();
              seleccionModo3 = 5;
            }
            if (mouseX > selX6 && mouseX < selX6+selW && mouseY > selY && mouseY < selY+selH) {
              SonidoClick.stop();
              SonidoClick.play();
              seleccionModo3 = 6;
            }

            if (seleccionModo3 >= 2 && seleccionModo3 <= 6) {
              jugadoresModo3 = seleccionModo3;
              jugadorActualModo3 = int(random(1, jugadoresModo3 + 1));
              dadoModo3 = 0;
              ganadorModo3 = 0;
              rondasModo3 = 1;
              casosJugador1Modo3 = casosInicialesModo3;
              casosJugador2Modo3 = casosInicialesModo3;
              casosJugador3Modo3 = 0;
              casosJugador4Modo3 = 0;
              casosJugador5Modo3 = 0;
              casosJugador6Modo3 = 0;
              if (jugadoresModo3 >= 3) {
                casosJugador3Modo3 = casosInicialesModo3;
              }
              if (jugadoresModo3 >= 4) {
                casosJugador4Modo3 = casosInicialesModo3;
              }
              if (jugadoresModo3 >= 5) {
                casosJugador5Modo3 = casosInicialesModo3;
              }
              if (jugadoresModo3 >= 6) {
                casosJugador6Modo3 = casosInicialesModo3;
              }
              canal1Modo3 = 0;
              canal2Modo3 = 0;
              canal3Modo3 = 0;
              canal4Modo3 = 0;
              canal5Modo3 = 0;
              canal6Modo3 = 0;
              desbordesModo3 = 0;
              rachaModo3 = 0;
              efectoColapsoModo3 = 0;
              efectoEquipoModo3 = 0;
              canalPeligroModo3 = 0;
              lanzadoEnTurnoModo3 = false;
              subestadoModo3 = 1;
              mensajeModo3 = "Inicia el Orientador " + jugadorActualModo3 + ". Lanza el dado para asignar su primer caso.";
              detalleModo3 = "Puedes seguir lanzando o detenerte para pasar el turno.";
            }
          } else {
            if (subestadoModo3 == 1) {
              if (mouseX > modo3BotonLanzarX && mouseX < modo3BotonLanzarX+modo3BotonLanzarW && mouseY > modo3BotonLanzarY && mouseY < modo3BotonLanzarY+modo3BotonLanzarH) {
                SonidoClick.stop();
                SonidoClick.play();
                int casosTurnoModo3 = 0;
                int jugadorAnteriorModo3 = jugadorActualModo3;
                boolean colapsoModo3 = false;
                int casosDevueltosModo3 = 0;

                if (jugadorActualModo3 == 1) {
                  casosTurnoModo3 = casosJugador1Modo3;
                }
                if (jugadorActualModo3 == 2) {
                  casosTurnoModo3 = casosJugador2Modo3;
                }
                if (jugadorActualModo3 == 3) {
                  casosTurnoModo3 = casosJugador3Modo3;
                }
                if (jugadorActualModo3 == 4) {
                  casosTurnoModo3 = casosJugador4Modo3;
                }
                if (jugadorActualModo3 == 5) {
                  casosTurnoModo3 = casosJugador5Modo3;
                }
                if (jugadorActualModo3 == 6) {
                  casosTurnoModo3 = casosJugador6Modo3;
                }

                if (casosTurnoModo3 <= 0) {
                  ganadorModo3 = jugadorActualModo3;
                  subestadoModo3 = 2;
                } else {
                  dadoModo3 = int(random(1, 7));

                  if (dadoModo3 == 1) {
                    if (canal1Modo3 >= 1) {
                      casosDevueltosModo3 = canal1Modo3;
                      casosTurnoModo3 = casosTurnoModo3 + canal1Modo3;
                      canal1Modo3 = 0;
                      colapsoModo3 = true;
                    } else {
                      canal1Modo3 = canal1Modo3 + 1;
                      casosTurnoModo3 = casosTurnoModo3 - 1;
                      mensajeModo3 = "DADO 1: Primer Auxilio recibio un caso.";
                      detalleModo3 = "El canal queda con " + canal1Modo3 + " de 1. Si sale 1 otra vez, colapsa.";
                    }
                  }

                  if (dadoModo3 == 2) {
                    if (canal2Modo3 >= 2) {
                      casosDevueltosModo3 = canal2Modo3;
                      casosTurnoModo3 = casosTurnoModo3 + canal2Modo3;
                      canal2Modo3 = 0;
                      colapsoModo3 = true;
                    } else {
                      canal2Modo3 = canal2Modo3 + 1;
                      casosTurnoModo3 = casosTurnoModo3 - 1;
                      mensajeModo3 = "DADO 2: Mediacion Rapida recibio un caso.";
                      detalleModo3 = "El canal queda con " + canal2Modo3 + " de 2. Decide si arriesgar o pasar.";
                    }
                  }

                  if (dadoModo3 == 3) {
                    if (canal3Modo3 >= 3) {
                      casosDevueltosModo3 = canal3Modo3;
                      casosTurnoModo3 = casosTurnoModo3 + canal3Modo3;
                      canal3Modo3 = 0;
                      colapsoModo3 = true;
                    } else {
                      canal3Modo3 = canal3Modo3 + 1;
                      casosTurnoModo3 = casosTurnoModo3 - 1;
                      mensajeModo3 = "DADO 3: Aula Segura recibio un caso.";
                      detalleModo3 = "El canal queda con " + canal3Modo3 + " de 3. La presion sube.";
                    }
                  }

                  if (dadoModo3 == 4) {
                    if (canal4Modo3 >= 4) {
                      casosDevueltosModo3 = canal4Modo3;
                      casosTurnoModo3 = casosTurnoModo3 + canal4Modo3;
                      canal4Modo3 = 0;
                      colapsoModo3 = true;
                    } else {
                      canal4Modo3 = canal4Modo3 + 1;
                      casosTurnoModo3 = casosTurnoModo3 - 1;
                      mensajeModo3 = "DADO 4: Familia y Tutor recibio un caso.";
                      detalleModo3 = "El canal queda con " + canal4Modo3 + " de 4. Puedes detenerte a tiempo.";
                    }
                  }

                  if (dadoModo3 == 5) {
                    if (canal5Modo3 >= 5) {
                      casosDevueltosModo3 = canal5Modo3;
                      casosTurnoModo3 = casosTurnoModo3 + canal5Modo3;
                      canal5Modo3 = 0;
                      colapsoModo3 = true;
                    } else {
                      canal5Modo3 = canal5Modo3 + 1;
                      casosTurnoModo3 = casosTurnoModo3 - 1;
                      mensajeModo3 = "DADO 5: Comite Escolar recibio un caso.";
                      detalleModo3 = "El canal queda con " + canal5Modo3 + " de 5. Ojo con la sobrecarga.";
                    }
                  }

                  if (dadoModo3 == 6) {
                    canal6Modo3 = canal6Modo3 + 1;
                    casosTurnoModo3 = casosTurnoModo3 - 1;
                    mensajeModo3 = "DADO 6: Equipo Especializado activado.";
                    detalleModo3 = "Canal seguro: se aislo 1 caso y nunca se desborda.";
                  }

                  if (jugadorActualModo3 == 1) {
                    casosJugador1Modo3 = casosTurnoModo3;
                  }
                  if (jugadorActualModo3 == 2) {
                    casosJugador2Modo3 = casosTurnoModo3;
                  }
                  if (jugadorActualModo3 == 3) {
                    casosJugador3Modo3 = casosTurnoModo3;
                  }
                  if (jugadorActualModo3 == 4) {
                    casosJugador4Modo3 = casosTurnoModo3;
                  }
                  if (jugadorActualModo3 == 5) {
                    casosJugador5Modo3 = casosTurnoModo3;
                  }
                  if (jugadorActualModo3 == 6) {
                    casosJugador6Modo3 = casosTurnoModo3;
                  }

                  if (casosTurnoModo3 <= 0) {
                    ganadorModo3 = jugadorActualModo3;
                    subestadoModo3 = 2;
                  } else {
                    if (colapsoModo3 == true) {
                      desbordesModo3 = desbordesModo3 + 1;
                      rachaModo3 = 0;
                      efectoColapsoModo3 = 45;
                      canalPeligroModo3 = dadoModo3;
                      jugadorActualModo3 = jugadorActualModo3 + 1;
                      if (jugadorActualModo3 > jugadoresModo3) {
                        jugadorActualModo3 = 1;
                        rondasModo3 = rondasModo3 + 1;
                      }
                      lanzadoEnTurnoModo3 = false;
                      mensajeModo3 = "SOBRECARGA: Canal " + dadoModo3 + " colapso.";
                      detalleModo3 = "Orientador " + jugadorAnteriorModo3 + " recupera " + casosDevueltosModo3 + " caso(s) y pierde el turno. Ahora juega el Orientador " + jugadorActualModo3 + ".";
                    } else {
                      if (dadoModo3 == 6) {
                        rachaModo3 = rachaModo3 + 1;
                        efectoEquipoModo3 = 35;
                      } else {
                        rachaModo3 = rachaModo3 + 1;
                      }
                      detalleModo3 = detalleModo3 + "  |  Racha x" + rachaModo3 + ".";
                      lanzadoEnTurnoModo3 = true;
                    }
                  }
                }
              } else {
                if (mouseX > modo3BotonPasarX && mouseX < modo3BotonPasarX+modo3BotonPasarW && mouseY > modo3BotonPasarY && mouseY < modo3BotonPasarY+modo3BotonPasarH) {
                  SonidoClick.stop();
                  SonidoClick.play();
                  if (lanzadoEnTurnoModo3 == true) {
                    int jugadorQuePasaModo3 = jugadorActualModo3;
                    jugadorActualModo3 = jugadorActualModo3 + 1;
                    if (jugadorActualModo3 > jugadoresModo3) {
                      jugadorActualModo3 = 1;
                      rondasModo3 = rondasModo3 + 1;
                    }
                    dadoModo3 = 0;
                    rachaModo3 = 0;
                    lanzadoEnTurnoModo3 = false;
                    mensajeModo3 = "Orientador " + jugadorQuePasaModo3 + " se detuvo a tiempo.";
                    detalleModo3 = "Ahora juega el Orientador " + jugadorActualModo3 + ".";
                  } else {
                    mensajeModo3 = "Primero debes lanzar el dado.";
                    detalleModo3 = "Despues de asignar un caso podras detenerte o arriesgarte de nuevo.";
                  }
                }
              }
            } else {
              if (subestadoModo3 == 2) {
                if (mouseX > modo3BotonReiniciarX && mouseX < modo3BotonReiniciarX+modo3BotonReiniciarW && mouseY > modo3BotonReiniciarY && mouseY < modo3BotonReiniciarY+modo3BotonReiniciarH) {
                  SonidoClick.stop();
                  SonidoClick.play();
                  subestadoModo3 = 0;
                  jugadoresModo3 = 0;
                  jugadorActualModo3 = 1;
                  dadoModo3 = 0;
                  ganadorModo3 = 0;
                  rondasModo3 = 1;
                  canal1Modo3 = 0;
                  canal2Modo3 = 0;
                  canal3Modo3 = 0;
                  canal4Modo3 = 0;
                  canal5Modo3 = 0;
                  canal6Modo3 = 0;
                  desbordesModo3 = 0;
                  rachaModo3 = 0;
                  efectoColapsoModo3 = 0;
                  efectoEquipoModo3 = 0;
                  canalPeligroModo3 = 0;
                  lanzadoEnTurnoModo3 = false;
                  mensajeModo3 = "Selecciona cuantos orientadores van a jugar.";
                  detalleModo3 = "Canales 1 a 5 tienen capacidad limitada. El canal 6 nunca colapsa.";
                }
              }
            }
          }
        }
      }
    }
  }
}
