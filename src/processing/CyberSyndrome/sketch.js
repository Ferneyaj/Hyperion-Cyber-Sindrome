// ==========================================
// VARIABLES GLOBALES (MÁQUINA DE ESTADOS)
// ==========================================
let ESTADO_MENU = 0;
let ESTADO_MODO1 = 1;
let ESTADO_MODO2 = 2;
let ESTADO_MODO3 = 3;
let estadoActual = 0;
let ESTADO_FIN = 4;

// ==========================================
// VARIABLES DE DISEÑO: MENÚ PRINCIPAL
// ==========================================
let botonW, botonH, botonX;
let btnY1, btnY2, btnY3;

// ==========================================
// VARIABLES DE LORE Y CINEMÁTICA (MODO 1)
// ==========================================
let subEstadoModo1 = 0;
let contadorFrames = 0;
let textoLore = "INICIANDO PROTOCOLO S.O.S...\nCONECTANDO AL NUCLEO HYPERION...\nBUSCANDO RASTROS DEL GLITCH DEL ODIO...\n\nDR. BYTE: 'TENEMOS QUE FILTRAR ESTA TOXICIDAD\nANTES DE QUE EL SERVIDOR COLAPSE.'";
let caracteresAMostrar = 0;

// ==========================================
// VARIABLES DE LOGICA: FASE 1
// ==========================================
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
let Riesgo = 0;
let ESTADO = "";
let rondaProm;

// ==========================================
// VARIABLES DE DISEÑO: FASE 1 (TERMINAL)
// ==========================================
let cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH;
let btnAccionW, btnAccionH, btnAccionY;
let btnArchivarX, btnSeguimientoX, btnReportarX;
let btnVolverX, btnVolverY, btnVolverW, btnVolverH;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // MENÚ
  botonW = width * 0.3125;
  botonH = height * 0.0833;
  botonX = width / 2 - botonW / 2;
  btnY1 = height * 0.36;
  btnY2 = height * 0.48;
  btnY3 = height * 0.60;

  // FASE 1
  cajaMsgW = width * 0.80;
  cajaMsgH = height * 0.45;
  cajaMsgX = width * 0.10;
  cajaMsgY = height * 0.20;

  btnAccionW = width * 0.24;
  btnAccionH = height * 0.10;
  btnAccionY = height * 0.75;

  btnArchivarX = width * 0.10;
  btnSeguimientoX = width * 0.38;
  btnReportarX = width * 0.66;

  btnVolverX = width * 0.02;
  btnVolverY = height * 0.92;
  btnVolverW = width * 0.15;
  btnVolverH = height * 0.05;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}

function draw() {
  // ========================================================
  // ESTADO 0: MENÚ PRINCIPAL
  // ========================================================
  if (estadoActual == ESTADO_MENU) {
    background(30, 40, 65);

    textAlign(CENTER, CENTER);
    textSize(width * 0.045);
    fill(255, 215, 0);
    text("HappyTech ARCADE", width / 2, height * 0.13);

    textSize(width * 0.022);
    fill(200, 220, 255);
    text("Bullying y Ciberacoso - Concientización", width / 2, height * 0.21);

    // BOTÓN 1
    if (mouseX > botonX && mouseX < botonX + botonW && mouseY > btnY1 && mouseY < btnY1 + botonH) {
      fill(50, 150, 100); rect(botonX - 4, btnY1 - 4, botonW + 8, botonH + 8, 10);
    } else {
      fill(50, 150, 100, 200); rect(botonX, btnY1, botonW, botonH, 10);
    }
    fill(255); textSize(width * 0.02); textAlign(CENTER, CENTER);
    text("1. Psicólogo Digital", botonX + botonW / 2, btnY1 + botonH / 2);

    // BOTÓN 2
    if (mouseX > botonX && mouseX < botonX + botonW && mouseY > btnY2 && mouseY < btnY2 + botonH) {
      fill(70, 120, 180); rect(botonX - 4, btnY2 - 4, botonW + 8, botonH + 8, 10);
    } else {
      fill(70, 120, 180, 200); rect(botonX, btnY2, botonW, botonH, 10);
    }
    fill(255); textSize(width * 0.02); textAlign(CENTER, CENTER);
    text("2. Detección Rápida", botonX + botonW / 2, btnY2 + botonH / 2);

    // BOTÓN 3
    if (mouseX > botonX && mouseX < botonX + botonW && mouseY > btnY3 && mouseY < btnY3 + botonH) {
      fill(180, 80, 80); rect(botonX - 4, btnY3 - 4, botonW + 8, botonH + 8, 10);
    } else {
      fill(180, 80, 80, 200); rect(botonX, btnY3, botonW, botonH, 10);
    }
    fill(255); textSize(width * 0.02); textAlign(CENTER, CENTER);
    text("3. Aislando el Bullying", botonX + botonW / 2, btnY3 + botonH / 2);

  // ========================================================
  // ESTADO 1: FASE 1 (MODO 1)
  // ========================================================
  } else if (estadoActual == ESTADO_MODO1) {

    // SUB-ESTADO 0: GLITCH INICIAL
    if (subEstadoModo1 == 0) {
      background(0);
      contadorFrames++;

      for (let i = 0; i < 10; i++) {
        stroke(0, 255, 100, random(100, 255));
        strokeWeight(random(1, 5));
        let yGlitch = random(height);
        line(0, yGlitch, width, yGlitch);
      }

      textAlign(CENTER, CENTER);
      textSize(width * 0.05); fill(0, 255, 100);
      text("ACCEDIENDO AL SISTEMA...", width / 2, height / 2);

      if (contadorFrames > 60) {
        subEstadoModo1 = 1;
        contadorFrames = 0;
      }

    // SUB-ESTADO 1: LORE (TYPEWRITER)
    } else if (subEstadoModo1 == 1) {
      background(5, 10, 5);

      noFill(); stroke(0, 255, 100, 100); strokeWeight(2);
      rect(width * 0.05, height * 0.05, width * 0.9, height * 0.9, 20);
      noStroke();

      if (frameCount % 2 == 0 && caracteresAMostrar < textoLore.length) {
        caracteresAMostrar++;
      }

      fill(0, 255, 100); textAlign(LEFT, TOP); textSize(width * 0.025);
      text(textoLore.substring(0, caracteresAMostrar), width * 0.1, height * 0.15);

      textAlign(CENTER, CENTER);
      fill(255, 255, 255, 150 + sin(frameCount * 0.1) * 100);
      text("HAZ CLIC PARA INGRESAR A LA TERMINAL", width / 2, height * 0.85);

    // SUB-ESTADO 2: TERMINAL DE JUEGO
    } else if (subEstadoModo1 == 2) {
      background(10, 15, 15);

      if (puntaje < 1000) {
        ESTADO = "PELIGROSO";
      } else if (puntaje > 1000 && prom < 1500) {
        ESTADO = "NORMAL";
      } else if (prom < 1500) {
        ESTADO = "SEGURO";
      }

      // Header
      textAlign(CENTER, CENTER);
      textSize(width * 0.035); fill(0, 255, 100);
      text("TERMINAL S.O.S - DR. Walter D White", width / 2, height * 0.05);

      textSize(width * 0.025); fill(255, 255, 100);
      text("ESTADO DEL SERVIDOR: [ " + ESTADO + " ]" + "|   RONDA: " + rondaActual + "/" + rondaMax, width / 2, height * 0.10);

      textSize(width * 0.015); fill(200, 200, 255);
      text("FIREWALL FRAGMENTS: [ " + puntaje + " ]", width / 2, height * 0.15);

      let paddingX = cajaMsgX + (width * 0.02);
      let paddingY = cajaMsgY + (height * 0.02);

      if (rondaActual <= 10) {
        switch (mensajeActuaLID) {
          case 1:
            Riesgo = 85;
            stroke(0, 255, 100); strokeWeight(2); fill(15, 30, 20);
            rect(cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH, 10); noStroke();
            textAlign(LEFT, TOP); textSize(width * 0.02); fill(200, 255, 200);
            text("FECHA: 25/05/2086  |  HORA: 23:45 (Nocturno)", paddingX, paddingY);
            text("EDAD EMISOR: 15    |  EDAD RECEPTOR: 14", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255); textSize(width * 0.03);
            text('> "Mañana nadie te va a hablar en el colegio, piérdete."', paddingX, paddingY + (height * 0.18));
            break;

          case 2:
            Riesgo = 62;
            stroke(0, 255, 100); strokeWeight(2); fill(15, 30, 20);
            rect(cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH, 10); noStroke();
            textAlign(LEFT, TOP); textSize(width * 0.02); fill(200, 255, 200);
            text("FECHA: 03/06/2086  |  HORA: 14:22 (Tarde)", paddingX, paddingY);
            text("EDAD EMISOR: 13    |  EDAD RECEPTOR: 13", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: MEDIA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255); textSize(width * 0.03);
            text('> "Todos dicen que eres un copión, yo también lo creo."', paddingX, paddingY + (height * 0.18));
            break;

          case 3:
            Riesgo = 20;
            stroke(0, 255, 100); strokeWeight(2); fill(15, 30, 20);
            rect(cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH, 10); noStroke();
            textAlign(LEFT, TOP); textSize(width * 0.02); fill(200, 255, 200);
            text("FECHA: 10/06/2086  |  HORA: 09:05 (Mañana)", paddingX, paddingY);
            text("EDAD EMISOR: 14    |  EDAD RECEPTOR: 15", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: BAJA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255); textSize(width * 0.03);
            text('> "Oye, creo que te equivocaste en el ejercicio de ayer."', paddingX, paddingY + (height * 0.18));
            break;

          case 4:
            Riesgo = 91;
            stroke(0, 255, 100); strokeWeight(2); fill(15, 30, 20);
            rect(cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH, 10); noStroke();
            textAlign(LEFT, TOP); textSize(width * 0.02); fill(200, 255, 200);
            text("FECHA: 15/06/2086  |  HORA: 22:10 (Nocturno)", paddingX, paddingY);
            text("EDAD EMISOR: 17    |  EDAD RECEPTOR: 14", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255); textSize(width * 0.03);
            text('> "Mándame tus fotos o cuento todo lo que sé de ti."', paddingX, paddingY + (height * 0.18));
            break;

          case 5:
            Riesgo = 45;
            stroke(0, 255, 100); strokeWeight(2); fill(15, 30, 20);
            rect(cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH, 10); noStroke();
            textAlign(LEFT, TOP); textSize(width * 0.02); fill(200, 255, 200);
            text("FECHA: 20/06/2086  |  HORA: 16:45 (Tarde)", paddingX, paddingY);
            text("EDAD EMISOR: 15    |  EDAD RECEPTOR: 15", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: MEDIA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255); textSize(width * 0.03);
            text('> "Ya nadie quiere estar contigo en el grupo del proyecto."', paddingX, paddingY + (height * 0.18));
            break;

          case 6:
            Riesgo = 15;
            stroke(0, 255, 100); strokeWeight(2); fill(15, 30, 20);
            rect(cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH, 10); noStroke();
            textAlign(LEFT, TOP); textSize(width * 0.02); fill(200, 255, 200);
            text("FECHA: 25/06/2086  |  HORA: 11:30 (Mañana)", paddingX, paddingY);
            text("EDAD EMISOR: 13    |  EDAD RECEPTOR: 14", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: BAJA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255); textSize(width * 0.03);
            text('> "Jaja ese meme te lo mandé porque me pareció gracioso."', paddingX, paddingY + (height * 0.18));
            break;

          case 7:
            Riesgo = 78;
            stroke(0, 255, 100); strokeWeight(2); fill(15, 30, 20);
            rect(cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH, 10); noStroke();
            textAlign(LEFT, TOP); textSize(width * 0.02); fill(200, 255, 200);
            text("FECHA: 01/07/2086  |  HORA: 20:55 (Noche)", paddingX, paddingY);
            text("EDAD EMISOR: 16    |  EDAD RECEPTOR: 13", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255); textSize(width * 0.03);
            text('> "Si vas al colegio mañana te va a ir muy mal, te lo juro."', paddingX, paddingY + (height * 0.18));
            break;

          case 8:
            Riesgo = 55;
            stroke(0, 255, 100); strokeWeight(2); fill(15, 30, 20);
            rect(cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH, 10); noStroke();
            textAlign(LEFT, TOP); textSize(width * 0.02); fill(200, 255, 200);
            text("FECHA: 08/07/2086  |  HORA: 13:15 (Tarde)", paddingX, paddingY);
            text("EDAD EMISOR: 14    |  EDAD RECEPTOR: 14", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: MEDIA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255); textSize(width * 0.03);
            text('> "Le voy a decir a todos que tú fuiste el que habló."', paddingX, paddingY + (height * 0.18));
            break;

          case 9:
            Riesgo = 30;
            stroke(0, 255, 100); strokeWeight(2); fill(15, 30, 20);
            rect(cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH, 10); noStroke();
            textAlign(LEFT, TOP); textSize(width * 0.02); fill(200, 255, 200);
            text("FECHA: 12/07/2086  |  HORA: 08:40 (Mañana)", paddingX, paddingY);
            text("EDAD EMISOR: 15    |  EDAD RECEPTOR: 16", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: BAJA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255); textSize(width * 0.03);
            text('> "No te molestes en venir al partido, nadie te quiere ahí."', paddingX, paddingY + (height * 0.18));
            break;

          case 10:
            Riesgo = 95;
            stroke(0, 255, 100); strokeWeight(2); fill(15, 30, 20);
            rect(cajaMsgX, cajaMsgY, cajaMsgW, cajaMsgH, 10); noStroke();
            textAlign(LEFT, TOP); textSize(width * 0.02); fill(200, 255, 200);
            text("FECHA: 18/07/2086  |  HORA: 23:59 (Nocturno)", paddingX, paddingY);
            text("EDAD EMISOR: 17    |  EDAD RECEPTOR: 13", paddingX, paddingY + (height * 0.04));
            text("REINCIDENCIA: ALTA |  RIESGO CALCULADO: " + Riesgo + "%", paddingX, paddingY + (height * 0.08));
            fill(255); textSize(width * 0.03);
            text('> "Tengo tus contraseñas. Haz lo que digo o publico todo."', paddingX, paddingY + (height * 0.18));
            break;
        }

        // BOTÓN ARCHIVAR
        if (mouseX > btnArchivarX && mouseX < btnArchivarX + btnAccionW && mouseY > btnAccionY && mouseY < btnAccionY + btnAccionH) {
          fill(50, 150, 255); rect(btnArchivarX - 4, btnAccionY - 4, btnAccionW + 8, btnAccionH + 8, 10);
        } else {
          fill(50, 150, 255, 200); rect(btnArchivarX, btnAccionY, btnAccionW, btnAccionH, 10);
        }
        fill(255); textSize(width * 0.02); textAlign(CENTER, CENTER);
        text("[ ARCHIVAR ]", btnArchivarX + btnAccionW / 2, btnAccionY + btnAccionH / 2);

        // BOTÓN SEGUIMIENTO
        if (mouseX > btnSeguimientoX && mouseX < btnSeguimientoX + btnAccionW && mouseY > btnAccionY && mouseY < btnAccionY + btnAccionH) {
          fill(255, 165, 0); rect(btnSeguimientoX - 4, btnAccionY - 4, btnAccionW + 8, btnAccionH + 8, 10);
        } else {
          fill(255, 165, 0, 200); rect(btnSeguimientoX, btnAccionY, btnAccionW, btnAccionH, 10);
        }
        fill(255); textSize(width * 0.02); textAlign(CENTER, CENTER);
        text("[ SEGUIMIENTO ]", btnSeguimientoX + btnAccionW / 2, btnAccionY + btnAccionH / 2);

        // BOTÓN REPORTAR
        if (mouseX > btnReportarX && mouseX < btnReportarX + btnAccionW && mouseY > btnAccionY && mouseY < btnAccionY + btnAccionH) {
          fill(255, 50, 50); rect(btnReportarX - 4, btnAccionY - 4, btnAccionW + 8, btnAccionH + 8, 10);
        } else {
          fill(255, 50, 50, 200); rect(btnReportarX, btnAccionY, btnAccionW, btnAccionH, 10);
        }
        fill(255); textSize(width * 0.02); textAlign(CENTER, CENTER);
        text("[ REPORTAR ]", btnReportarX + btnAccionW / 2, btnAccionY + btnAccionH / 2);

      } else {
        // PANTALLA FIN DE RONDAS
        background(5, 10, 5);
        noFill(); stroke(0, 255, 100, 100); strokeWeight(2);
        rect(width * 0.05, height * 0.05, width * 0.9, height * 0.9, 20);
        noStroke();

        fill(0, 255, 100); textAlign(CENTER, CENTER); textSize(width * 0.04);
        text("ANÁLISIS COMPLETADO", width / 2, height * 0.3);

        textSize(width * 0.03); fill(255, 255, 100);
        text("FIREWALL FRAGMENTS TOTALES: " + puntaje, width / 2, height * 0.45);

        textSize(width * 0.025); fill(200, 255, 200);
        text("ESTADO FINAL DEL SERVIDOR: [ " + ESTADO + " ]", width / 2, height * 0.55);

        textAlign(CENTER, CENTER);
        fill(255, 255, 255, 150 + sin(frameCount * 0.1) * 100);
        textSize(width * 0.02);
        text("HAZ CLIC PARA VOLVER AL MENÚ", width / 2, height * 0.75);
      }

      // BOTÓN VOLVER
      if (rondaActual <= 10) {
        if (mouseX > btnVolverX && mouseX < btnVolverX + btnVolverW && mouseY > btnVolverY && mouseY < btnVolverY + btnVolverH) {
          fill(100); rect(btnVolverX - 4, btnVolverY - 4, btnVolverW + 8, btnVolverH + 8, 5);
        } else {
          fill(100, 200); rect(btnVolverX, btnVolverY, btnVolverW, btnVolverH, 5);
        }
        fill(255); textSize(width * 0.015); textAlign(CENTER, CENTER);
        text("<- DESCONECTAR", btnVolverX + btnVolverW / 2, btnVolverY + btnVolverH / 2);
      }
    }

  // ========================================================
  // ESTADOS 2 Y 3: ESQUELETOS
  // ========================================================
  } else if (estadoActual == ESTADO_MODO2) {
    background(30, 50, 80);
  } else if (estadoActual == ESTADO_MODO3) {
    background(70, 30, 30);
  }
}

// ========================================================
// DETECCIÓN DE CLICS
// ========================================================
function mousePressed() {
  if (estadoActual == ESTADO_MENU) {
    if (mouseX > botonX && mouseX < botonX + botonW && mouseY > btnY1 && mouseY < btnY1 + botonH) {
      estadoActual = ESTADO_MODO1;
      subEstadoModo1 = 0;
      contadorFrames = 0;
      caracteresAMostrar = 0;
    } else if (mouseX > botonX && mouseX < botonX + botonW && mouseY > btnY2 && mouseY < btnY2 + botonH) {
      estadoActual = ESTADO_MODO2;
    } else if (mouseX > botonX && mouseX < botonX + botonW && mouseY > btnY3 && mouseY < btnY3 + botonH) {
      estadoActual = ESTADO_MODO3;
    }
  }

  if (estadoActual == ESTADO_MODO1) {
    if (subEstadoModo1 == 1) {
      subEstadoModo1 = 2;
    } else if (subEstadoModo1 == 2) {

      // Volver al menú
      if (rondaActual <= 10 && mouseX > btnVolverX && mouseX < btnVolverX + btnVolverW && mouseY > btnVolverY && mouseY < btnVolverY + btnVolverH) {
        estadoActual = ESTADO_MENU;
        rondaActual = 1;
        mensajeActuaLID = 1;
        puntaje = 0;
      }

      // Fin de rondas: clic en cualquier lugar vuelve al menú
      if (rondaActual > 10) {
        estadoActual = ESTADO_MENU;
        rondaActual = 1;
        mensajeActuaLID = 1;
        puntaje = 0;
        return;
      }

      // ARCHIVAR
      if (mouseX > btnArchivarX && mouseX < btnArchivarX + btnAccionW && mouseY > btnAccionY && mouseY < btnAccionY + btnAccionH) {
        rondaActual++;
        mensajeActuaLID++;
        if (Riesgo >= 0 && Riesgo <= 39) {
          puntaje += PPN1;
        } else if (Riesgo >= 40 && Riesgo <= 69) {
          puntaje += int((PPN1 / 100) * 40);
        } else if (Riesgo >= 70 && Riesgo <= 100) {
          puntaje -= 50;
        }
      }

      // SEGUIMIENTO
      if (mouseX > btnSeguimientoX && mouseX < btnSeguimientoX + btnAccionW && mouseY > btnAccionY && mouseY < btnAccionY + btnAccionH) {
        rondaActual++;
        mensajeActuaLID++;
        if (Riesgo >= 0 && Riesgo <= 39) {
          puntaje += int((PPN1 / 100) * 50);
        } else if (Riesgo >= 40 && Riesgo <= 69) {
          puntaje += PPN1;
        } else if (Riesgo >= 70 && Riesgo <= 100) {
          puntaje += int((PPN1 / 100) * 50);
        }
      }

      // REPORTAR
      if (mouseX > btnReportarX && mouseX < btnReportarX + btnAccionW && mouseY > btnAccionY && mouseY < btnAccionY + btnAccionH) {
        rondaActual++;
        mensajeActuaLID++;
        if (Riesgo >= 0 && Riesgo <= 39) {
          puntaje -= 25;
        } else if (Riesgo >= 40 && Riesgo <= 69) {
          puntaje += int((PPN1 / 100) * 60);
        } else if (Riesgo >= 70 && Riesgo <= 100) {
          puntaje += PPN1;
        }
      }
    }
  }
}
