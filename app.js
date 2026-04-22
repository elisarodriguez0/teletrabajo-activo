const DAY_NAMES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const SHORT_DAY = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const WORK_TAGS = {
      sit: { label: 'Sentada', cls: 'sit' },
      stand: { label: 'De pie', cls: 'stand' },
      move: { label: 'Movimiento', cls: 'move' },
      lunch: { label: 'Comida', cls: 'lunch' },
      strength: { label: 'Fuerza', cls: 'strength' }
    };

    const MOVEMENT_TEMPLATES = [
      {
        name: 'Piernas + pecho',
        description: 'Paseo corto, sentadilla y apertura de pecho.',
        steps: [
          ['Camina por casa', 60],
          ['Sentadillas o levantarte de la silla', 45],
          ['Elevaciones de gemelos', 40],
          ['Abrir pecho y hombros atrás', 30],
          ['Respira y sacude piernas', 25]
        ]
      },
      {
        name: 'Movilidad + empuje',
        description: 'Activación de piernas y empuje suave.',
        steps: [
          ['Camina rápido', 60],
          ['Zancadas atrás alternas', 45],
          ['Flexiones en escritorio', 40],
          ['Wall slides o retracciones escapulares', 35],
          ['Cuello y hombros', 20]
        ]
      },
      {
        name: 'Cadera + postura',
        description: 'Bisagra, glúteo y espalda alta.',
        steps: [
          ['Camina por casa', 50],
          ['Bisagra de cadera', 45],
          ['Aprieta glúteos de pie', 30],
          ['Retracciones escapulares', 35],
          ['Gemelos con pausa arriba', 35]
        ]
      },
      {
        name: 'Desentumecer total',
        description: 'Bloque fácil para cuando vas cargada.',
        steps: [
          ['Camina', 60],
          ['Sentadilla corta o media sentadilla', 35],
          ['Balanceo de tobillos', 25],
          ['Giro torácico suave', 30],
          ['Apertura de pecho', 30]
        ]
      },
      {
        name: 'Caminata corta + movilidad',
        description: 'Una caminata breve y luego movilidad suave para reiniciar el cuerpo.',
        steps: [
          ['Camina rápido', 75],
          ['Balanceo de tobillos', 25],
          ['Giro torácico suave', 30],
          ['Abrir pecho y hombros atrás', 30],
          ['Respira y sacude piernas', 20]
        ]
      }
    ];

    const STRENGTH_TEMPLATES = [
      {
        name: 'Full body base',
        description: 'Dos rondas sencillas pero útiles.',
        rounds: 2,
        steps: [
          ['Sentadillas', 40],
          ['Descanso', 20],
          ['Zancadas atrás', 40],
          ['Descanso', 20],
          ['Flexiones en escritorio o pared', 40],
          ['Descanso', 20],
          ['Puente de glúteo', 40],
          ['Descanso', 20],
          ['Elevaciones de gemelos', 40],
          ['Descanso', 20],
          ['Plancha', 30],
          ['Descanso', 30]
        ]
      },
      {
        name: 'Pierna + core',
        description: 'Más estable y muy compatible con gimnasio.',
        rounds: 2,
        steps: [
          ['Sentadilla con pausa abajo', 40],
          ['Descanso', 20],
          ['Bisagra de cadera', 40],
          ['Descanso', 20],
          ['Puente de glúteo', 40],
          ['Descanso', 20],
          ['Wall sit', 30],
          ['Descanso', 20],
          ['Dead bug', 40],
          ['Descanso', 20],
          ['Plancha lateral lado A', 25],
          ['Plancha lateral lado B', 25],
          ['Descanso', 30]
        ]
      },
      {
        name: 'Postura + empuje',
        description: 'Muy buena si notas cuello y espalda cargados.',
        rounds: 2,
        steps: [
          ['Flexiones en escritorio', 40],
          ['Descanso', 20],
          ['Wall slides', 35],
          ['Descanso', 20],
          ['Sentadilla', 40],
          ['Descanso', 20],
          ['Gemelos con pausa arriba', 40],
          ['Descanso', 20],
          ['Puente de glúteo', 40],
          ['Descanso', 20],
          ['Plancha', 30],
          ['Descanso', 30]
        ]
      }
    ];


    const EXERCISE_LIBRARY = {
      'Camina por casa': {
        name: 'Camina por casa',
        summary: 'Camina a paso ligero por el pasillo o la habitación. Nada épico, solo sacar al cuerpo del modo estatua.',
        checklist: [
          'Da zancadas cortas y rápidas, sin arrastrar los pies.',
          'Mueve los brazos de forma natural.',
          'Mantén el pecho abierto y la mirada al frente.'
        ],
        tip: 'Objetivo real: subir un poco pulsaciones y despegar cadera, tobillos y espalda.',
        visual: 'walk'
      },
      'Camina rápido': {
        name: 'Camina rápido',
        summary: 'Mismo gesto que caminar normal, pero con intención. Piensa en paso vivo de “voy tarde”.',
        checklist: [
          'Aprieta un poco el abdomen para no ir colapsada.',
          'Apoya el pie de forma natural y continua.',
          'No hace falta correr ni botar.'
        ],
        tip: 'Si tienes poco espacio, haz idas y vueltas. Sirve igual.',
        visual: 'walk'
      },
      'Camina': {
        name: 'Camina',
        summary: 'Paseo breve para romper la inmovilidad y volver a arrancar tobillos, rodillas y cadera.',
        checklist: [
          'Da vueltas por casa sin mirar el móvil.',
          'Respira normal y deja que se suelten los hombros.',
          'Piensa en moverte, no en hacerlo perfecto.'
        ],
        tip: 'Esto parece una tontería, pero justo esta tontería es la que más evita estar tiesa horas.',
        visual: 'walk'
      },
      'Sentadillas': {
        name: 'Sentadilla',
        summary: 'Baja como si fueras a sentarte en una silla y vuelve a subir apretando glúteos.',
        checklist: [
          'Pies al ancho de caderas o un poco más.',
          'Cadera va atrás y abajo, pecho abierto.',
          'Sube empujando el suelo con todo el pie.'
        ],
        tip: 'Si te cuesta, toca una silla con el culo y vuelve a subir. Eso cuenta perfectamente.',
        visual: 'squat'
      },
      'Sentadillas o levantarte de la silla': {
        name: 'Levantarte de la silla',
        summary: 'Versión amable de sentadilla. Te sientas y te levantas de forma controlada.',
        checklist: [
          'Acércate al borde de la silla.',
          'Inclina un poco el torso y empuja con los pies.',
          'Sube sin tirarte hacia delante de golpe.'
        ],
        tip: 'Muy buena si no controlas aún la sentadilla libre.',
        visual: 'chair'
      },
      'Sentadilla corta o media sentadilla': {
        name: 'Media sentadilla',
        summary: 'No hace falta bajar mucho. Solo flexiona cadera y rodillas un poco y vuelve arriba.',
        checklist: [
          'Baja hasta donde te notes estable.',
          'Peso repartido entre talón y parte media del pie.',
          'Sube controlando, sin rebote.'
        ],
        tip: 'Perfecta cuando estás cargada o llevas falda/ropa incómoda.',
        visual: 'squat'
      },
      'Sentadilla con pausa abajo': {
        name: 'Sentadilla con pausa',
        summary: 'Igual que la sentadilla, pero paras un momento abajo para que trabaje más.',
        checklist: [
          'Baja controlando.',
          'Quédate 1 o 2 segundos abajo sin hundirte.',
          'Sube empujando el suelo.'
        ],
        tip: 'Vas a notar más cuádriceps y glúteo sin necesitar peso.',
        visual: 'squat'
      },
      'Zancadas atrás alternas': {
        name: 'Zancada atrás',
        summary: 'Lleva una pierna atrás, baja un poco y vuelve. Alterna lados.',
        checklist: [
          'Paso atrás lo bastante largo para ir estable.',
          'Torso alto, hombros relajados.',
          'Empuja con la pierna de delante para volver.'
        ],
        tip: 'Si te tambaleas, apóyate con una mano en la mesa o la pared.',
        visual: 'lunge'
      },
      'Zancadas atrás': {
        name: 'Zancada atrás',
        summary: 'Unilateral, muy útil para piernas y glúteo sin necesitar mucho espacio.',
        checklist: [
          'Rodilla delantera sigue la línea de los dedos del pie.',
          'No hace falta bajar muchísimo.',
          'Vuelve al centro antes de cambiar de lado.'
        ],
        tip: 'Mejor pocas bien hechas que muchas descontroladas.',
        visual: 'lunge'
      },
      'Flexiones en escritorio': {
        name: 'Flexión en escritorio',
        summary: 'Apoya las manos en el borde del escritorio, cuerpo recto, baja pecho y empuja.',
        checklist: [
          'Manos algo más abiertas que hombros.',
          'Cuerpo en línea, sin sacar culo ni hundir lumbar.',
          'Baja hacia el borde del escritorio y vuelve a empujar.'
        ],
        tip: 'Cuanto más alto el apoyo, más fácil. Escritorio o pared si hace falta.',
        visual: 'deskpush'
      },
      'Flexiones en escritorio o pared': {
        name: 'Flexión inclinada',
        summary: 'La misma idea de una flexión, pero con apoyo alto para que sea mucho más llevadera.',
        checklist: [
          'Aprieta abdomen y glúteos.',
          'Codos van en diagonal, no pegados ni abiertos del todo.',
          'Empuja hasta estirar brazos sin bloquearte.'
        ],
        tip: 'Esto trabaja pecho, hombro y tríceps. Bastante más útil de lo que parece.',
        visual: 'deskpush'
      },
      'Wall slides': {
        name: 'Wall slide',
        summary: 'Espalda y brazos contra la pared, desliza los antebrazos hacia arriba y abajo.',
        checklist: [
          'Mantén costillas controladas, no arquees la espalda.',
          'Sube solo hasta donde no pierdas contacto útil.',
          'Hazlo lento, buscando movilidad y control.'
        ],
        tip: 'Muy bueno para hombros cerrados por teclado y ratón.',
        visual: 'wallslide'
      },
      'Wall slides o retracciones escapulares': {
        name: 'Escápulas y hombros',
        summary: 'Si haces wall slides, desliza en pared. Si no, junta escápulas detrás sin encoger hombros.',
        checklist: [
          'Piensa en llevar hombros atrás y abajo.',
          'No saques pecho exagerado ni arquees lumbar.',
          'Haz una pausa breve al final del gesto.'
        ],
        tip: 'Esto va genial si se te carga la zona entre cuello y omóplatos.',
        visual: 'wallslide'
      },
      'Retracciones escapulares': {
        name: 'Retracción escapular',
        summary: 'Junta los omóplatos detrás como si quisieras sujetar un lápiz entre ellos.',
        checklist: [
          'Brazos sueltos a los lados o codos a 90 grados.',
          'No subas los hombros hacia las orejas.',
          'Aguanta 1 segundo y suelta.'
        ],
        tip: 'Pequeño gesto, mucha utilidad para postura.',
        visual: 'scap'
      },
      'Abrir pecho y hombros atrás': {
        name: 'Apertura de pecho',
        summary: 'Abre clavículas, lleva hombros atrás y nota cómo se estira la parte delantera del torso.',
        checklist: [
          'Entrelaza manos detrás o simplemente abre brazos.',
          'Mentón suave, sin sacar cuello.',
          'Respira profundo 2 o 3 veces.'
        ],
        tip: 'Esto es para compensar postura encogida de ordenador.',
        visual: 'chestopen'
      },
      'Apertura de pecho': {
        name: 'Apertura de pecho',
        summary: 'Versión simple para soltar hombros y pectoral.',
        checklist: [
          'Abre brazos o lleva manos detrás.',
          'Costillas tranquilas, no arquees toda la espalda.',
          'Respira sin prisa.'
        ],
        tip: 'Tiene que sentirse liberador, no doloroso.',
        visual: 'chestopen'
      },
      'Cuello y hombros': {
        name: 'Cuello y hombros',
        summary: 'Movilidad suave para quitar rigidez de pantalla.',
        checklist: [
          'Inclina la cabeza a un lado sin forzar.',
          'Haz círculos pequeños de hombros hacia atrás.',
          'Respira y no hagas rebotes.'
        ],
        tip: 'Aquí no hay heroicidades. Suave y limpio.',
        visual: 'neck'
      },
      'Bisagra de cadera': {
        name: 'Bisagra de cadera',
        summary: 'Empuja la cadera hacia atrás con espalda neutra, como si cerraras un cajón con el culo.',
        checklist: [
          'Rodillas algo flexionadas.',
          'Espalda larga, no redondees lumbar.',
          'Vuelve apretando glúteos al final.'
        ],
        tip: 'Esto enseña a usar glúteos e isquios en vez de cargarte la espalda.',
        visual: 'hinge'
      },
      'Aprieta glúteos de pie': {
        name: 'Glúteos de pie',
        summary: 'Ponte alta, aprieta glúteos fuerte unos segundos y suelta.',
        checklist: [
          'No arquees la espalda.',
          'Aprieta de verdad, como si quisieras juntar los bolsillos del pantalón.',
          'Suelta y repite.'
        ],
        tip: 'Muy simple, pero útil para despertar glúteos dormidos por estar sentada.',
        visual: 'glute'
      },
      'Gemelos con pausa arriba': {
        name: 'Elevación de gemelos',
        summary: 'Sube a puntillas, aguanta arriba un momento y baja lento.',
        checklist: [
          'Empuja desde la base del dedo gordo y segundo dedo.',
          'Mantente alta 1 o 2 segundos arriba.',
          'Baja controlando, no te dejes caer.'
        ],
        tip: 'Esto trabaja gemelos y tobillo. No sustituye a una sentadilla.',
        visual: 'calf'
      },
      'Elevaciones de gemelos': {
        name: 'Elevación de gemelos',
        summary: 'Sube a puntillas y baja. Simple y efectivo para pantorrilla y tobillo.',
        checklist: [
          'Apóyate si hace falta para equilibrarte.',
          'Sube todo lo que puedas sin colapsar tobillo.',
          'Baja suave.'
        ],
        tip: 'Muy buen complemento, pero no reemplaza trabajo completo de pierna.',
        visual: 'calf'
      },
      'Balanceo de tobillos': {
        name: 'Movilidad de tobillos',
        summary: 'Mueve tobillos hacia delante y atrás o haz pequeños círculos controlados.',
        checklist: [
          'Levanta un pie o apóyate en pared.',
          'Haz el gesto suave, sin dolor.',
          'Cambia de lado a mitad de tiempo.'
        ],
        tip: 'Ideal si notas las piernas acartonadas por estar quieta.',
        visual: 'ankle'
      },
      'Giro torácico suave': {
        name: 'Giro torácico',
        summary: 'Rota la parte alta de la espalda con los brazos relajados o cruzados.',
        checklist: [
          'La pelvis se queda bastante quieta.',
          'Gira desde costillas y espalda alta.',
          'Nada de latigazos.'
        ],
        tip: 'Sirve para desbloquear la sensación de ir encorvada.',
        visual: 'twist'
      },
      'Respira y sacude piernas': {
        name: 'Respira y sacude piernas',
        summary: 'Minipausa para bajar tensión y aflojar piernas.',
        checklist: [
          'Suelta una pierna y luego la otra.',
          'Haz 2 o 3 respiraciones más largas.',
          'Aprovecha para recolocarte antes de volver al trabajo.'
        ],
        tip: 'No parece ejercicio, pero ayuda un montón a no acumular rigidez.',
        visual: 'shake'
      },
      'Puente de glúteo': {
        name: 'Puente de glúteo',
        summary: 'Tumbada boca arriba, pies apoyados, elevas cadera apretando glúteos.',
        checklist: [
          'Talones relativamente cerca del culo.',
          'Sube hasta formar una línea hombros-cadera-rodillas.',
          'Baja controlando sin desplomarte.'
        ],
        tip: 'Muy bueno para glúteo y para compensar tantas horas sentada.',
        visual: 'bridge'
      },
      'Wall sit': {
        name: 'Wall sit',
        summary: 'Espalda apoyada en la pared y te dejas caer hasta una media sentadilla isométrica.',
        checklist: [
          'Pies algo adelantados respecto a la pared.',
          'Rodillas y caderas flexionadas lo que toleres.',
          'Mantén abdomen activo y respira.'
        ],
        tip: 'Quema bastante en poco tiempo. Normal.',
        visual: 'wallsit'
      },
      'Dead bug': {
        name: 'Dead bug',
        summary: 'Boca arriba, abdomen apretado, alternas brazo y pierna contrarios sin despegar la zona lumbar.',
        checklist: [
          'Espalda baja pegada al suelo o casi.',
          'Mueve lento, sin perder control.',
          'Exhala al extender.'
        ],
        tip: 'Muy bueno para core si la plancha te carga demasiado cuello.',
        visual: 'deadbug'
      },
      'Plancha': {
        name: 'Plancha',
        summary: 'Apoyo en antebrazos o manos con el cuerpo recto como una tabla.',
        checklist: [
          'Aprieta glúteos y abdomen.',
          'No hundas lumbar ni saques demasiado el culo.',
          'Mira al suelo para mantener cuello largo.'
        ],
        tip: 'Menos segundos bien hechos vale más que aguantar fatal.',
        visual: 'plank'
      },
      'Plancha lateral lado A': {
        name: 'Plancha lateral',
        summary: 'Apoyo lateral en antebrazo o mano, elevando cadera.',
        checklist: [
          'Hombro encima del codo si vas con antebrazo.',
          'Cadera alta, no te hundas.',
          'Haz un lado y luego el otro.'
        ],
        tip: 'Trabaja oblicuos y estabilidad.',
        visual: 'sideplank'
      },
      'Plancha lateral lado B': {
        name: 'Plancha lateral',
        summary: 'Mismo gesto que el otro lado.',
        checklist: [
          'Mantén el cuello largo.',
          'Empuja el suelo con el antebrazo.',
          'Aguanta con tensión, no con dolor.'
        ],
        tip: 'Normal que un lado te cueste más.',
        visual: 'sideplank'
      },
      'Descanso': {
        name: 'Descanso',
        summary: 'Pausa corta para respirar y recolocarte antes del siguiente ejercicio.',
        checklist: [
          'Camina unos pasos o sacude brazos.',
          'Respira por nariz si puedes.',
          'Prepárate para el siguiente paso.'
        ],
        tip: 'Descansar también forma parte del bloque.',
        visual: 'rest'
      }
    };

    const defaults = {
      startTime: '08:00',
      endTime: '18:00',
      lunchStart: '14:00',
      lunchMinutes: 60,
      sitMinutes: 45,
      standMinutes: 20,
      moveMinutes: 5,
      strengthSessions: 2,
      randomness: 'soft',
      allowWalk: false,
      compactTodo: false,
      fitboxingDays: [2, 4]
    };

    let settings = loadSettings();
    let weekPlan = null;
    let selectedDayKey = '';
    let audioContext = null;
    let soundEnabled = localStorage.getItem('tt-active-sound') === 'true';
    let notificationsEnabled = localStorage.getItem('tt-active-notif') === 'true';
    let clockInterval = null;
    let lastAlarmEventId = null;
    let debugOffsetMs = 0;
    let titleFlashInterval = null;
    const BASE_TITLE = document.title;
    let todoItems = loadTodos();

    const els = {
      shownDay: document.getElementById('shownDay'),
      shownDaySub: document.getElementById('shownDaySub'),
      currentPhase: document.getElementById('currentPhase'),
      currentDescription: document.getElementById('currentDescription'),
      timeLeft: document.getElementById('timeLeft'),
      nextPhase: document.getElementById('nextPhase'),
      nextAlarm: document.getElementById('nextAlarm'),
      alarmDescription: document.getElementById('alarmDescription'),
      mainTimer: document.getElementById('mainTimer'),
      mainTimerLabel: document.getElementById('mainTimerLabel'),
      timerRing: document.getElementById('timerRing'),
      guidedTitle: document.getElementById('guidedTitle'),
      guidedSteps: document.getElementById('guidedSteps'),
      exerciseCard: document.getElementById('exerciseCard'),
      exerciseVisual: document.getElementById('exerciseVisual'),
      exerciseName: document.getElementById('exerciseName'),
      exerciseSummary: document.getElementById('exerciseSummary'),
      exerciseChecklist: document.getElementById('exerciseChecklist'),
      exerciseTip: document.getElementById('exerciseTip'),
      stats: document.getElementById('stats'),
      timeline: document.getElementById('timeline'),
      strengthTimeline: document.getElementById('strengthTimeline'),
      todayLabel: document.getElementById('todayLabel'),
      dayNote: document.getElementById('dayNote'),
      soundBtn: document.getElementById('soundBtn'),
      notifBtn: document.getElementById('notifBtn'),
      saveBtn: document.getElementById('saveBtn'),
      todayBtn: document.getElementById('todayBtn'),
      skipBtn: document.getElementById('skipBtn'),
      generateBtn: document.getElementById('generateBtn'),
      startTime: document.getElementById('startTime'),
      endTime: document.getElementById('endTime'),
      lunchStart: document.getElementById('lunchStart'),
      lunchMinutes: document.getElementById('lunchMinutes'),
      sitMinutes: document.getElementById('sitMinutes'),
      standMinutes: document.getElementById('standMinutes'),
      moveMinutes: document.getElementById('moveMinutes'),
      strengthSessions: document.getElementById('strengthSessions'),
      randomness: document.getElementById('randomness'),
      allowWalk: document.getElementById('allowWalk'),
      fitboxingDays: document.getElementById('fitboxingDays'),
      weekdayButtons: document.getElementById('weekdayButtons'),
      todoInput: document.getElementById('todoInput'),
      todoAddBtn: document.getElementById('todoAddBtn'),
      compactToggleBtn: document.getElementById('compactToggleBtn'),
      todoWrap: document.getElementById('todoWrap'),
      todoList: document.getElementById('todoList'),
    };

    init();

    function init() {
      paintSettings();
      renderFitboxing();
      buildWeek();
      bindEvents();
      selectInitialDay();
      renderAll();
      renderTodos();
      applyCompactTodo();
      startClock();
    }

    function bindEvents() {
      els.soundBtn.addEventListener('click', async () => {
        try {
          if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
          await audioContext.resume();
          soundEnabled = true;
          localStorage.setItem('tt-active-sound', 'true');
          els.soundBtn.textContent = 'Sonido activado';
          quickBeep();
        } catch (e) {
          alert('No pude activar el sonido. Haz clic otra vez.');
        }
      });

      els.notifBtn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
          alert('Este navegador no soporta notificaciones web.');
          return;
        }
        const permission = await Notification.requestPermission();
        notificationsEnabled = permission === 'granted';
        localStorage.setItem('tt-active-notif', notificationsEnabled ? 'true' : 'false');
        els.notifBtn.textContent = notificationsEnabled ? 'Notificaciones activadas' : 'Notificaciones bloqueadas';
      });

      els.saveBtn.addEventListener('click', () => {
        settings = readSettingsFromForm();
        saveSettings(settings);
        buildWeek(true);
        renderAll();
      });

      els.generateBtn.addEventListener('click', () => {
        buildWeek(true);
        renderAll();
      });

      els.todayBtn.addEventListener('click', () => {
        debugOffsetMs = 0;
        selectInitialDay();
        renderAll();
      });

      els.skipBtn.addEventListener('click', () => {
        const info = getCurrentInfo(getNow(), selectedDayKey);
        if (!info.currentEvent) return;
        const jumpTo = new Date(info.currentEvent.end.getTime() + 1000);
        debugOffsetMs = jumpTo.getTime() - Date.now();
        renderAll();
      });

      els.todoAddBtn.addEventListener('click', addTodoFromInput);
      els.todoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addTodoFromInput();
      });
      els.compactToggleBtn.addEventListener('click', () => {
        settings.compactTodo = !settings.compactTodo;
        saveSettings(settings);
        applyCompactTodo();
      });
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
          stopTitleFlash();
        }
      });
      window.addEventListener('focus', () => {
        stopTitleFlash();
      });
    }

    function loadSettings() {
      const saved = localStorage.getItem('tt-active-settings-desktop');
      try {
        return saved ? { ...defaults, ...JSON.parse(saved) } : { ...defaults };
      } catch {
        return { ...defaults };
      }
    }

    function saveSettings(value) {
      localStorage.setItem('tt-active-settings-desktop', JSON.stringify(value));
    }

    function loadTodos() {
      const saved = localStorage.getItem('tt-active-todos');
      try {
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }

    function saveTodos() {
      localStorage.setItem('tt-active-todos', JSON.stringify(todoItems));
    }

    function addTodoFromInput() {
      const value = (els.todoInput.value || '').trim();
      if (!value) return;
      todoItems.unshift({ id: String(Date.now()), text: value, done: false });
      els.todoInput.value = '';
      saveTodos();
      renderTodos();
    }

    function toggleTodo(id) {
      todoItems = todoItems.map(item => item.id === id ? { ...item, done: !item.done } : item);
      saveTodos();
      renderTodos();
    }

    function removeTodo(id) {
      todoItems = todoItems.filter(item => item.id !== id);
      saveTodos();
      renderTodos();
    }

    function renderTodos() {
      if (!els.todoList) return;
      els.todoList.innerHTML = '';
      if (!todoItems.length) {
        const empty = document.createElement('div');
        empty.className = 'notice';
        empty.textContent = 'Todavía no has añadido tareas.';
        els.todoList.appendChild(empty);
        applyCompactTodo();
        return;
      }
      todoItems.forEach(item => {
        const row = document.createElement('div');
        row.className = 'todo-item' + (item.done ? ' done' : '');
        row.draggable = true;
        row.dataset.id = item.id;
        row.addEventListener('dragstart', onTodoDragStart);
        row.addEventListener('dragover', onTodoDragOver);
        row.addEventListener('dragleave', onTodoDragLeave);
        row.addEventListener('drop', onTodoDrop);
        row.addEventListener('dragend', onTodoDragEnd);
        const drag = document.createElement('span');
        drag.className = 'todo-drag';
        drag.textContent = '⋮⋮';
        drag.title = 'Arrastrar para reordenar';
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.checked = item.done;
        check.addEventListener('change', () => toggleTodo(item.id));
        const textSpan = document.createElement('span');
        textSpan.className = 'todo-text';
        textSpan.textContent = item.text;
        const removeBtn = document.createElement('button');
        removeBtn.className = 'todo-remove';
        removeBtn.type = 'button';
        removeBtn.textContent = 'Borrar';
        removeBtn.addEventListener('click', () => removeTodo(item.id));
        row.appendChild(drag);
        row.appendChild(check);
        row.appendChild(textSpan);
        row.appendChild(removeBtn);
        els.todoList.appendChild(row);
      });
      applyCompactTodo();
    }

    function applyCompactTodo() {
      if (!els.todoWrap || !els.compactToggleBtn) return;
      els.todoWrap.classList.toggle('compact-floating', settings.compactTodo === true);
      document.body.classList.toggle('compact-todo-active', settings.compactTodo === true);
      els.compactToggleBtn.textContent = settings.compactTodo === true ? 'Quitar modo compacto lateral' : 'Modo compacto lateral';
    }

    function onTodoDragStart(e) {
      const row = e.currentTarget;
      row.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', row.dataset.id || '');
    }

    function onTodoDragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      e.currentTarget.classList.add('drag-over');
    }

    function onTodoDragLeave(e) {
      e.currentTarget.classList.remove('drag-over');
    }

    function onTodoDrop(e) {
      e.preventDefault();
      const targetId = e.currentTarget.dataset.id;
      const sourceId = e.dataTransfer.getData('text/plain');
      e.currentTarget.classList.remove('drag-over');
      if (!sourceId || !targetId || sourceId === targetId) return;
      reorderTodos(sourceId, targetId);
    }

    function onTodoDragEnd(e) {
      e.currentTarget.classList.remove('dragging');
      els.todoList.querySelectorAll('.todo-item').forEach(el => el.classList.remove('drag-over'));
    }

    function reorderTodos(sourceId, targetId) {
      const sourceIndex = todoItems.findIndex(item => item.id === sourceId);
      const targetIndex = todoItems.findIndex(item => item.id === targetId);
      if (sourceIndex < 0 || targetIndex < 0) return;
      const updated = [...todoItems];
      const [moved] = updated.splice(sourceIndex, 1);
      updated.splice(targetIndex, 0, moved);
      todoItems = updated;
      saveTodos();
      renderTodos();
    }

    function paintSettings() {
      els.startTime.value = settings.startTime;
      els.endTime.value = settings.endTime;
      els.lunchStart.value = settings.lunchStart;
      els.lunchMinutes.value = settings.lunchMinutes;
      els.sitMinutes.value = settings.sitMinutes ?? 45;
      els.standMinutes.value = settings.standMinutes ?? 20;
      els.moveMinutes.value = settings.moveMinutes ?? 5;
      els.strengthSessions.value = String(settings.strengthSessions);
      els.randomness.value = settings.randomness;
      els.allowWalk.value = settings.allowWalk ? 'yes' : 'no';
      els.soundBtn.textContent = soundEnabled ? 'Sonido activado' : 'Activar sonido';
      els.notifBtn.textContent = notificationsEnabled ? 'Notificaciones activadas' : 'Activar notificaciones';
    }

    function readSettingsFromForm() {
      return {
        startTime: els.startTime.value || defaults.startTime,
        endTime: els.endTime.value || defaults.endTime,
        lunchStart: els.lunchStart.value || defaults.lunchStart,
        lunchMinutes: Math.max(30, Math.min(120, Number(els.lunchMinutes.value) || 60)),
        sitMinutes: Math.max(20, Math.min(90, Number(els.sitMinutes.value) || 45)),
        standMinutes: Math.max(5, Math.min(40, Number(els.standMinutes.value) || 20)),
        moveMinutes: Math.max(3, Math.min(20, Number(els.moveMinutes.value) || 5)),
        strengthSessions: Math.max(1, Math.min(3, Number(els.strengthSessions.value) || 2)),
        randomness: els.randomness.value || defaults.randomness,
        allowWalk: els.allowWalk.value === 'yes',
        compactTodo: settings.compactTodo === true,
        fitboxingDays: [...settings.fitboxingDays].sort((a,b) => a - b)
      };
    }

    function renderFitboxing() {
      els.fitboxingDays.innerHTML = '';
      [1,2,3,4,5].forEach(day => {
        const label = document.createElement('label');
        label.className = 'day-chip';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = settings.fitboxingDays.includes(day);
        input.addEventListener('change', () => {
          if (input.checked && !settings.fitboxingDays.includes(day)) settings.fitboxingDays.push(day);
          if (!input.checked) settings.fitboxingDays = settings.fitboxingDays.filter(d => d !== day);
        });
        label.appendChild(input);
        label.appendChild(document.createTextNode(SHORT_DAY[day]));
        els.fitboxingDays.appendChild(label);
      });
    }

    function buildWeek(forceReseed = false) {
      const now = getNow();
      const weekStart = startOfISOWeek(now);
      const weekKey = getISOWeekKey(now);
      const seedSalt = forceReseed ? `-${Date.now()}` : '';
      const rng = mulberry32(hashString(weekKey + JSON.stringify(settings) + seedSalt));
      const strengthDays = pickStrengthDays(settings, rng);
      const days = {};
      for (let day = 1; day <= 5; day++) {
        const dayDate = addDays(weekStart, day - 1);
        const key = toDateKey(dayDate);
        days[key] = generateDayPlan(dayDate, settings, rng, strengthDays.includes(day));
      }
      weekPlan = { weekKey, weekStart: toDateKey(weekStart), strengthDays, days };
      renderWeekdayButtons();
      if (!selectedDayKey || !weekPlan.days[selectedDayKey]) {
        selectedDayKey = chooseClosestWorkdayKey(now);
      }
      lastAlarmEventId = null;
    }

    function renderWeekdayButtons() {
      els.weekdayButtons.innerHTML = '';
      const keys = Object.keys(weekPlan.days).sort();
      keys.forEach(key => {
        const day = weekPlan.days[key];
        const date = new Date(key + 'T12:00:00');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'weekday-btn' + (selectedDayKey === key ? ' active' : '');
        btn.textContent = `${SHORT_DAY[date.getDay()]} ${date.getDate()}`;
        btn.addEventListener('click', () => {
          selectedDayKey = key;
          lastAlarmEventId = null;
          renderAll();
        });
        els.weekdayButtons.appendChild(btn);
      });
    }

    function selectInitialDay() {
      selectedDayKey = chooseClosestWorkdayKey(getNow());
      renderWeekdayButtons();
    }

    function chooseClosestWorkdayKey(now) {
      const day = now.getDay();
      if (day >= 1 && day <= 5) return toDateKey(now);
      const monday = startOfISOWeek(day === 6 ? addDays(now, 2) : addDays(now, 1));
      return toDateKey(monday);
    }

    function pickStrengthDays(cfg, rng) {
      const candidates = [1,2,3,4,5].filter(day => !cfg.fitboxingDays.includes(day));
      const picked = [];
      const target = Math.min(cfg.strengthSessions, candidates.length);
      const pool = [...candidates];
      while (picked.length < target && pool.length) {
        const idx = Math.floor(rng() * pool.length);
        picked.push(pool.splice(idx, 1)[0]);
      }
      return picked.sort((a,b) => a - b);
    }

    function generateDayPlan(date, cfg, rng, includeStrength) {
      const start = atTime(date, cfg.startTime);
      const end = atTime(date, cfg.endTime);
      const lunchStart = atTime(date, cfg.lunchStart);
      const lunchEnd = new Date(lunchStart.getTime() + cfg.lunchMinutes * 60000);
      const baseSit = cfg.sitMinutes ?? 45;
      const baseStand = cfg.standMinutes ?? 20;
      const baseMove = cfg.moveMinutes ?? 5;
      const randomProfile = cfg.randomness === 'high'
        ? {
            sitMin: Math.max(20, baseSit - 10), sitMax: Math.min(90, baseSit + 10),
            standMin: Math.max(5, baseStand - 6), standMax: Math.min(40, baseStand + 6),
            moveMin: Math.max(3, baseMove - 2), moveMax: Math.min(20, baseMove + 3)
          }
        : cfg.randomness === 'medium'
          ? {
              sitMin: Math.max(20, baseSit - 5), sitMax: Math.min(90, baseSit + 5),
              standMin: Math.max(5, baseStand - 4), standMax: Math.min(40, baseStand + 4),
              moveMin: Math.max(3, baseMove - 1), moveMax: Math.min(20, baseMove + 2)
            }
          : {
              sitMin: Math.max(20, baseSit - 2), sitMax: Math.min(90, baseSit + 2),
              standMin: Math.max(5, baseStand - 2), standMax: Math.min(40, baseStand + 2),
              moveMin: Math.max(3, baseMove), moveMax: Math.min(20, baseMove + 1)
            };

      const events = [];
      let cursor = new Date(start);
      let counter = 0;

      while (cursor < end) {
        if (cursor.getTime() === lunchStart.getTime()) {
          events.push(makeEvent(cursor, lunchEnd, 'lunch', 'Comida', 'Comida y descanso. No hace falta forzar paseo aquí.', null, counter++));
          cursor = new Date(lunchEnd);
          continue;
        }

        const nextHour = new Date(Math.min(cursor.getTime() + 60 * 60000, end.getTime(), lunchStart > cursor ? lunchStart.getTime() : end.getTime()));
        const totalMinutes = Math.max(1, Math.round((nextHour - cursor) / 60000));

        if (totalMinutes < 20) {
          events.push(makeEvent(cursor, nextHour, 'sit', 'Trabajo sentada', 'Bloque corto. Mantén postura cómoda y pies apoyados.', null, counter++));
          cursor = nextHour;
          continue;
        }

        const minMove = Math.min(Math.max(3, randomProfile.moveMin), Math.max(3, totalMinutes - 10));
        const maxMove = Math.min(Math.max(minMove, randomProfile.moveMax), Math.max(minMove, totalMinutes - 8));
        let moveMinutes = randInt(minMove, maxMove, rng);

        let sitMaxAllowed = Math.max(20, totalMinutes - moveMinutes - 5);
        let sitMinutes = randInt(
          Math.max(20, Math.min(randomProfile.sitMin, sitMaxAllowed)),
          Math.max(20, Math.min(randomProfile.sitMax, sitMaxAllowed)),
          rng
        );

        let standMinutes = totalMinutes - sitMinutes - moveMinutes;

        const minStand = 5;
        if (standMinutes < minStand) {
          const need = minStand - standMinutes;
          if (sitMinutes - need >= 20) {
            sitMinutes -= need;
          } else {
            moveMinutes = Math.max(3, moveMinutes - (need - Math.max(0, sitMinutes - 20)));
            sitMinutes = Math.max(20, sitMinutes - need);
          }
          standMinutes = totalMinutes - sitMinutes - moveMinutes;
        }

        if (standMinutes > randomProfile.standMax) {
          const extra = standMinutes - randomProfile.standMax;
          sitMinutes = Math.min(totalMinutes - moveMinutes - minStand, sitMinutes + extra);
          standMinutes = totalMinutes - sitMinutes - moveMinutes;
        }

        if (sitMinutes < 20) sitMinutes = 20;
        if (moveMinutes < 3) moveMinutes = 3;
        standMinutes = totalMinutes - sitMinutes - moveMinutes;

        const movementPool = cfg.allowWalk ? MOVEMENT_TEMPLATES : MOVEMENT_TEMPLATES.filter(t => !t.name.toLowerCase().includes('caminata'));
        const moveTemplate = cloneTemplate(movementPool[Math.floor(rng() * movementPool.length)]);
        moveTemplate.steps = scaleSteps(moveTemplate.steps, moveMinutes * 60);

        const sitEnd = addMinutes(cursor, sitMinutes);
        const standEnd = addMinutes(sitEnd, standMinutes);

        events.push(makeEvent(cursor, sitEnd, 'sit', 'Trabajo sentada', 'Bloque de foco. Cambia postura al terminar.', null, counter++));
        events.push(makeEvent(sitEnd, standEnd, 'stand', 'Trabajo de pie', 'Sube el escritorio, apoya bien los pies y relaja hombros.', null, counter++));
        events.push(makeEvent(standEnd, nextHour, 'move', moveTemplate.name, moveTemplate.description, moveTemplate, counter++));

        cursor = nextHour;
      }

      let strength = null;
      if (includeStrength) {
        const template = cloneTemplate(STRENGTH_TEMPLATES[Math.floor(rng() * STRENGTH_TEMPLATES.length)]);
        const expandedSteps = [];
        for (let round = 1; round <= template.rounds; round++) {
          template.steps.forEach(([name, seconds]) => {
            const suffix = round < template.rounds ? ` · ronda ${round}` : '';
            expandedSteps.push([`${name}${suffix}`, seconds]);
          });
        }
        template.steps = expandedSteps;
        const totalSeconds = template.steps.reduce((sum, [,seconds]) => sum + seconds, 0);
        const startOffset = randInt(5, 20, rng);
        const strengthStart = addMinutes(end, startOffset);
        const strengthEnd = new Date(strengthStart.getTime() + totalSeconds * 1000);
        strength = makeEvent(strengthStart, strengthEnd, 'strength', template.name, template.description, template, counter++);
      }

      return {
        dateKey: toDateKey(date),
        weekday: date.getDay(),
        events,
        strength,
        fitboxing: cfg.fitboxingDays.includes(date.getDay())
      };
    }

    function makeEvent(start, end, type, title, description, routine, seq) {
      return {
        id: `${toDateKey(start)}-${type}-${seq}-${formatHM(start)}`,
        start: start.toISOString(),
        end: end.toISOString(),
        type,
        title,
        description,
        routine
      };
    }

    function renderAll() {
      paintSettings();
      renderWeekdayButtons();
      renderDayPlan();
      renderStrengthWeek();
      updateLiveState();
    }

    function renderDayPlan() {
      const day = weekPlan.days[selectedDayKey];
      els.timeline.innerHTML = '';
      if (!day) {
        els.todayLabel.textContent = 'No he podido generar el día mostrado.';
        els.shownDay.textContent = 'Sin día';
        els.shownDaySub.textContent = 'Prueba a regenerar la semana.';
        return;
      }

      const date = new Date(selectedDayKey + 'T12:00:00');
      els.shownDay.textContent = `${capitalize(DAY_NAMES[date.getDay()])} ${date.getDate()}/${date.getMonth() + 1}`;
      els.shownDaySub.textContent = selectedDayKey === toDateKey(getNow()) ? 'Hoy real.' : 'Día de la semana seleccionado.';
      els.todayLabel.textContent = `Así queda ${capitalize(DAY_NAMES[date.getDay()])}.`;

      const now = getNow();
      const currentInfo = getCurrentInfo(now, selectedDayKey);
      const events = [...day.events, ...(day.strength ? [day.strength] : [])]
        .map(evt => ({ ...evt, start: new Date(evt.start), end: new Date(evt.end) }))
        .sort((a,b) => a.start - b.start);

      events.forEach(evt => {
        const row = document.createElement('div');
        const isCurrent = currentInfo.currentEvent && currentInfo.currentEvent.id === evt.id;
        const isPast = now > evt.end && selectedDayKey === toDateKey(now);
        row.className = 'event' + (isCurrent ? ' current' : '') + (isPast ? ' past' : '');
        row.dataset.eventId = evt.id;
        row.dataset.start = evt.start.toISOString();
        row.dataset.end = evt.end.toISOString();
        row.innerHTML = `
          <div class="event-time mono">${formatHM(evt.start)}<br><span class="small">${formatHM(evt.end)}</span></div>
          <div>
            <div class="event-title">${evt.title}</div>
            <div class="small">${evt.description}</div>
          </div>
          <div class="tag ${WORK_TAGS[evt.type].cls}">${WORK_TAGS[evt.type].label}</div>
        `;
        els.timeline.appendChild(row);
      });

      renderStats(day);
      const parts = [];
      if (day.fitboxing) parts.push('Este día tienes gimnasio.');
      if (day.strength) parts.push(`La app te mete una sesión extra de fuerza: ${day.strength.title}.`);
      if (!day.fitboxing && !day.strength) parts.push('Este día solo toca clavar pausas, bloques de pie y movimiento.');
      parts.push(settings.allowWalk ? 'Has permitido caminatas cortas, así que pueden aparecer dentro de los bloques de movimiento.' : 'No has activado caminatas cortas, así que la app tira de movilidad y activación sin paseo.');
      els.dayNote.textContent = parts.join(' ');
    }

    function refreshTimelineCurrent(now, currentEventId) {
      const isToday = selectedDayKey === toDateKey(now);
      const rows = els.timeline.querySelectorAll('.event[data-event-id]');
      rows.forEach(row => {
        const start = new Date(row.dataset.start);
        const end = new Date(row.dataset.end);
        const isCurrent = isToday && currentEventId && row.dataset.eventId === currentEventId;
        const isPast = isToday && now > end;
        row.classList.toggle('current', !!isCurrent);
        row.classList.toggle('past', !!isPast && !isCurrent);
      });
    }

    function renderStrengthWeek() {
      els.strengthTimeline.innerHTML = '';
      const keys = Object.keys(weekPlan.days).sort();
      let hasAny = false;
      keys.forEach(key => {
        const plan = weekPlan.days[key];
        const date = new Date(key + 'T12:00:00');
        const row = document.createElement('div');
        row.className = 'event';
        if (plan.strength) {
          hasAny = true;
          row.innerHTML = `
            <div class="event-time">${SHORT_DAY[date.getDay()]}</div>
            <div>
              <div class="event-title">${plan.strength.title}</div>
              <div class="small">${formatHM(new Date(plan.strength.start))} a ${formatHM(new Date(plan.strength.end))}. ${plan.strength.description}</div>
            </div>
            <div class="tag strength">Fuerza</div>
          `;
        } else {
          row.innerHTML = `
            <div class="event-time">${SHORT_DAY[date.getDay()]}</div>
            <div>
              <div class="event-title">Sin sesión extra</div>
              <div class="small">${plan.fitboxing ? 'Ese día ya haces gimnasio.' : 'Día libre de fuerza real.'}</div>
            </div>
            <div class="tag ${plan.fitboxing ? 'move' : 'lunch'}">${plan.fitboxing ? 'Gimnasio' : 'Libre'}</div>
          `;
        }
        els.strengthTimeline.appendChild(row);
      });
      if (!hasAny) {
        const div = document.createElement('div');
        div.className = 'notice';
        div.textContent = 'Todos tus días entre semana tienen gimnasio marcado. Por eso no he metido fuerza extra.';
        els.strengthTimeline.appendChild(div);
      }
    }

    function renderStats(day) {
      let sit = 0, stand = 0, move = 0, strength = 0;
      day.events.forEach(evt => {
        const mins = Math.round((new Date(evt.end) - new Date(evt.start)) / 60000);
        if (evt.type === 'sit') sit += mins;
        if (evt.type === 'stand') stand += mins;
        if (evt.type === 'move') move += mins;
      });
      if (day.strength) strength = Math.round((new Date(day.strength.end) - new Date(day.strength.start)) / 60000);
      const total = sit + stand + move + strength;
      els.stats.innerHTML = '';
      [
        ['Sentada', `${sit} min`],
        ['De pie', `${stand} min`],
        ['Movimiento', `${move} min`],
        ['Fuerza', `${strength} min`]
      ].forEach(([label, value]) => {
        const div = document.createElement('div');
        div.className = 'stat';
        div.innerHTML = `<div class="label">${label}</div><div class="value">${value}</div><div class="small">Total planificado: ${total} min</div>`;
        els.stats.appendChild(div);
      });
    }

    function startClock() {
      if (clockInterval) clearInterval(clockInterval);
      clockInterval = setInterval(updateLiveState, 1000);
    }

    function updateLiveState() {
      if (!weekPlan || !selectedDayKey || !weekPlan.days[selectedDayKey]) return;

      const now = getNow();
      const todayKey = toDateKey(now);
      const info = getCurrentInfo(now, selectedDayKey);
      const selectedDate = new Date(selectedDayKey + 'T12:00:00');
      const isToday = selectedDayKey === todayKey;

      if (!isToday) {
        els.currentPhase.textContent = 'Vista previa';
        els.currentDescription.textContent = 'Estás viendo otro día de la semana. El crono solo corre con el día real.';
        els.timeLeft.textContent = '--:--';
        els.nextPhase.textContent = 'Siguiente bloque: vista previa';
        els.nextAlarm.textContent = '--:--';
        els.alarmDescription.textContent = `Día mostrado: ${capitalize(DAY_NAMES[selectedDate.getDay()])}.`;
        setTimer(0, 1, 'Vista previa del día');
        refreshTimelineCurrent(now, null);
        const previewEvent = weekPlan.days[selectedDayKey].events.find(evt => evt.type === 'move') || weekPlan.days[selectedDayKey].strength || weekPlan.days[selectedDayKey].events[0];
        renderGuided(previewEvent ? { ...previewEvent, start: new Date(previewEvent.start), end: new Date(previewEvent.end) } : null, new Date(previewEvent ? previewEvent.start : Date.now()), true);
        setLiveTitle('preview');
        return;
      }

      if (!info.currentEvent) {
        const firstEvent = info.events[0] || null;
        const lastEvent = info.events.length ? info.events[info.events.length - 1] : null;
        const beforeStart = firstEvent && now < firstEvent.start;
        els.currentPhase.textContent = beforeStart ? 'Antes de empezar' : 'Fuera de horario';
        els.currentDescription.textContent = beforeStart ? 'Tu jornada está preparada y esperando.' : 'Tu jornada ha terminado.';
        els.timeLeft.textContent = '--:--';
        els.nextPhase.textContent = info.nextEvent ? `Siguiente bloque: ${info.nextEvent.title}` : 'Siguiente bloque: ninguno';
        els.nextAlarm.textContent = info.nextEvent ? formatHM(info.nextEvent.start) : '--:--';
        els.alarmDescription.textContent = info.nextEvent ? describeEvent(info.nextEvent) : (lastEvent ? `Último bloque terminado a las ${formatHM(lastEvent.end)}.` : 'Sin bloques.');
        setTimer(0, 1, beforeStart ? 'Esperando inicio' : 'Día terminado');
        refreshTimelineCurrent(now, null);
        const guideEvent = beforeStart ? info.nextEvent : null;
        renderGuided(guideEvent, now, !!beforeStart);
        setLiveTitle(beforeStart ? 'before' : 'done', { nextAt: info.nextEvent ? formatHM(info.nextEvent.start) : '--:--' });
        return;
      }

      const current = info.currentEvent;
      const timeLeftMs = current.end - now;
      const totalMs = current.end - current.start;
      els.currentPhase.textContent = current.title;
      els.currentDescription.textContent = current.description;
      els.timeLeft.textContent = formatMMSS(Math.max(0, Math.floor(timeLeftMs / 1000)));
      els.nextPhase.textContent = info.nextEvent ? `Siguiente bloque: ${info.nextEvent.title}` : 'Siguiente bloque: fin del día';
      els.nextAlarm.textContent = formatHM(current.end);
      els.alarmDescription.textContent = info.nextEvent ? describeEvent(info.nextEvent) : 'Se acaba la jornada.';
      setTimer(Math.max(0, totalMs - timeLeftMs), totalMs, current.title);
      refreshTimelineCurrent(now, current.id);
      maybeAlarm(current);
      renderGuided(current, now, false);
      setLiveTitle('countdown', { timeLeft: formatMMSS(Math.max(0, Math.floor(timeLeftMs / 1000))), label: current.title });
    }

    function getCurrentInfo(now, dayKey) {
      const dayPlan = weekPlan.days[dayKey];
      if (!dayPlan) return { currentEvent: null, nextEvent: null, events: [] };
      const events = [...dayPlan.events, ...(dayPlan.strength ? [dayPlan.strength] : [])]
        .map(evt => ({ ...evt, start: new Date(evt.start), end: new Date(evt.end) }))
        .sort((a,b) => a.start - b.start);

      let currentEvent = null;
      let nextEvent = null;
      for (const evt of events) {
        if (now >= evt.start && now < evt.end) currentEvent = evt;
        if (!nextEvent && now < evt.start) nextEvent = evt;
      }
      if (currentEvent) {
        const idx = events.findIndex(e => e.id === currentEvent.id);
        nextEvent = events[idx + 1] || null;
      }
      return { currentEvent, nextEvent, events };
    }

    function maybeAlarm(currentEvent) {
      if (lastAlarmEventId === currentEvent.id) return;
      lastAlarmEventId = currentEvent.id;
      if (soundEnabled) quickAlarmPattern();
      const hiddenOrBlurred = document.hidden || !document.hasFocus();
      if (notificationsEnabled && 'Notification' in window && Notification.permission === 'granted') {
        new Notification(currentEvent.title, {
          body: currentEvent.description,
          tag: currentEvent.id,
          renotify: true
        });
      }
      if (hiddenOrBlurred) {
        startTitleFlash(currentEvent.title);
      }
      speakAlarm(currentEvent.title);
    }

    function speakAlarm(title) {
      if (!('speechSynthesis' in window)) return;
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(`Cambio de bloque. ${title}`);
        utter.lang = 'es-ES';
        utter.rate = 1;
        utter.volume = 1;
        window.speechSynthesis.speak(utter);
      } catch {}
    }


    function setLiveTitle(mode, payload = {}) {
      stopTitleFlash(false);
      if (mode === 'countdown') {
        const left = payload.timeLeft || '--:--';
        const label = payload.label || 'Teletrabajo Activo';
        document.title = `${left} · ${label}`;
        return;
      }
      if (mode === 'before') {
        const nextAt = payload.nextAt || '--:--';
        document.title = `Empieza ${nextAt} · Teletrabajo Activo`;
        return;
      }
      if (mode === 'preview') {
        document.title = `Vista previa · Teletrabajo Activo`;
        return;
      }
      if (mode === 'done') {
        document.title = `Día terminado · Teletrabajo Activo`;
        return;
      }
      document.title = BASE_TITLE;
    }

    function startTitleFlash(title) {
      stopTitleFlash();
      let on = false;
      titleFlashInterval = setInterval(() => {
        document.title = on ? `⏰ ${title}` : BASE_TITLE;
        on = !on;
      }, 800);
    }

    function stopTitleFlash(resetTitle = true) {
      if (titleFlashInterval) clearInterval(titleFlashInterval);
      titleFlashInterval = null;
      if (resetTitle) document.title = BASE_TITLE;
    }


    function renderGuided(event, now, previewMode) {
      if (!event) {
        els.guidedTitle.textContent = previewMode ? 'Vista previa del bloque guiado.' : 'No hay bloque guiado activo ahora mismo.';
        els.guidedSteps.innerHTML = '';
        paintExerciseDetail(null, previewMode);
        return;
      }

      if (!event.routine || (event.type !== 'move' && event.type !== 'strength')) {
        els.guidedTitle.textContent = event.type === 'stand'
          ? 'Bloque de pie. Mantén pies firmes, reparte peso y relaja hombros.'
          : event.type === 'sit'
            ? 'Bloque sentada. Pies apoyados, cuello largo y ratón cerca.'
            : event.type === 'lunch'
              ? 'Comida y descanso.'
              : 'Este bloque no tiene pasos guiados.';
        els.guidedSteps.innerHTML = '';
        paintExerciseDetail({
          name: event.title,
          summary: event.description,
          checklist: event.type === 'stand'
            ? ['Pies bien apoyados.', 'Pantalla a buena altura.', 'Microcambios de peso cada poco.']
            : event.type === 'sit'
              ? ['Pies apoyados.', 'Ratón y teclado cerca.', 'No te quedes congelada toda la hora.']
              : ['Descansa y vuelve sin prisa.'],
          tip: event.type === 'stand' ? 'Estar de pie inmóvil tampoco es la panacea. Cambia postura.' : 'El objetivo es que el cuerpo no se quede tieso.'
        }, previewMode, 'stand');
        return;
      }

      els.guidedTitle.textContent = `${event.title}: ${event.routine.description}`;
      const steps = event.routine.steps;
      const blockStartMs = new Date(event.start).getTime();
      const elapsedSec = Math.max(0, Math.floor((now.getTime() - blockStartMs) / 1000));
      let accum = 0;
      let activeIndex = previewMode ? 0 : -1;
      els.guidedSteps.innerHTML = '';

      steps.forEach(([name, seconds], index) => {
        const start = accum;
        const end = accum + seconds;
        const isCurrent = elapsedSec >= start && elapsedSec < end && !previewMode;
        if (isCurrent) activeIndex = index;
        const row = document.createElement('div');
        row.className = 'step' + (isCurrent ? ' current' : '') + (previewMode && index === 0 ? ' selected' : '');
        let right = `${seconds}s`;
        let subtitle = 'Paso del bloque';
        if (isCurrent) {
          right = `quedan ${Math.max(0, end - elapsedSec)}s`;
          subtitle = 'Ahora mismo';
        } else if (previewMode) {
          subtitle = 'Vista previa';
        }
        const exerciseKey = normalizeExerciseName(name);
        row.innerHTML = `<div><strong>${name}</strong><div class="small">${subtitle}</div></div><div><strong>${right}</strong></div>`;
        row.addEventListener('click', () => {
          els.guidedSteps.querySelectorAll('.step').forEach(el => el.classList.remove('selected'));
          row.classList.add('selected');
          paintExerciseDetail(getExerciseInfo(exerciseKey), previewMode, event.type);
        });
        els.guidedSteps.appendChild(row);
        accum = end;
      });

      const chosenIndex = activeIndex >= 0 ? activeIndex : 0;
      const activeName = steps[chosenIndex]?.[0] || event.title;
      const activeKey = normalizeExerciseName(activeName);
      const rows = els.guidedSteps.querySelectorAll('.step');
      rows.forEach((row, idx) => {
        row.classList.toggle('selected', idx === chosenIndex && !row.classList.contains('current'));
      });
      paintExerciseDetail(getExerciseInfo(activeKey), previewMode, event.type);
    }

    function normalizeExerciseName(name) {
      return String(name)
        .replace(/ · ronda \d+/gi, '')
        .replace(/ lado [AB]/gi, match => match.trim().toLowerCase() === 'lado a' ? ' lado A' : ' lado B')
        .trim();
    }

    function getExerciseInfo(name) {
      return EXERCISE_LIBRARY[name] || {
        name,
        summary: 'Sigue el temporizador y muévete con control. Si un gesto te molesta, recorta rango o cambia a una versión más fácil.',
        checklist: ['Muévete sin dolor agudo.', 'Respira y no corras.', 'Prioriza control sobre cantidad.'],
        tip: 'El objetivo aquí no es sufrir. Es meter movimiento útil.'
      };
    }

    function paintExerciseDetail(info, previewMode, blockType) {
      const fallback = info || {
        name: previewMode ? 'Vista previa' : 'Sin bloque guiado',
        summary: previewMode ? 'Aquí verás explicado el paso principal del bloque.' : 'Cuando llegue un bloque de movimiento o fuerza, te explico qué hacer aquí.',
        checklist: ['Mira el temporizador.', 'Sigue el paso activo.', 'Vuelve al trabajo cuando toque.'],
        tip: 'Todo está pensado para que no tengas que improvisar.'
      };
      els.exerciseName.textContent = fallback.name;
      els.exerciseSummary.textContent = fallback.summary;
      els.exerciseChecklist.innerHTML = '';
      (fallback.checklist || []).forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        els.exerciseChecklist.appendChild(li);
      });
      els.exerciseTip.textContent = fallback.tip || 'Hazlo suave y con control.';
      els.exerciseVisual.innerHTML = buildExerciseSVG(fallback.visual || blockType || 'rest', fallback.name);
    }

    function buildExerciseSVG(kind, label) {
      const base = {
        head: '<circle cx="110" cy="42" r="18" fill="#f6d6bf" stroke="#18202a" stroke-width="3"/>',
        body: '<line x1="110" y1="60" x2="110" y2="120" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>',
        armL: '<line x1="110" y1="75" x2="72" y2="95" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>',
        armR: '<line x1="110" y1="75" x2="148" y2="95" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>',
        legL: '<line x1="110" y1="120" x2="82" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>',
        legR: '<line x1="110" y1="120" x2="138" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>'
      };
      const ground = '<line x1="24" y1="176" x2="296" y2="176" stroke="#d5dde7" stroke-width="4" stroke-linecap="round"/>';
      const desk = '<rect x="190" y="82" width="82" height="10" rx="5" fill="#dce7f2" stroke="#355c7d" stroke-width="3"/><line x1="208" y1="92" x2="208" y2="166" stroke="#355c7d" stroke-width="4"/><line x1="256" y1="92" x2="256" y2="166" stroke="#355c7d" stroke-width="4"/>';
      const wall = '<line x1="238" y1="20" x2="238" y2="176" stroke="#d7e7f6" stroke-width="8" stroke-linecap="round"/>';
      let figure = `${base.head}${base.body}${base.armL}${base.armR}${base.legL}${base.legR}`;
      let extras = '';

      switch (kind) {
        case 'walk':
          figure = `${base.head}<line x1="110" y1="60" x2="110" y2="118" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="76" x2="76" y2="92" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="76" x2="146" y2="66" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="118" x2="84" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="118" x2="152" y2="146" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>`;
          extras = '<path d="M178 70 q16 -10 30 0" fill="none" stroke="#355c7d" stroke-width="4" stroke-linecap="round"/><path d="M188 90 q18 -10 34 0" fill="none" stroke="#355c7d" stroke-width="4" stroke-linecap="round"/>';
          break;
        case 'chair':
          extras = '<rect x="168" y="118" width="52" height="10" rx="5" fill="#dce7f2" stroke="#355c7d" stroke-width="3"/><line x1="175" y1="128" x2="175" y2="170" stroke="#355c7d" stroke-width="4"/><line x1="212" y1="128" x2="212" y2="170" stroke="#355c7d" stroke-width="4"/><line x1="168" y1="86" x2="168" y2="128" stroke="#355c7d" stroke-width="4"/>';
          figure = `${base.head}<line x1="110" y1="60" x2="110" y2="108" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="78" x2="150" y2="94" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="78" x2="72" y2="86" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="108" x2="150" y2="108" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="150" y1="108" x2="150" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="108" x2="80" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>`;
          break;
        case 'squat':
          figure = `${base.head}<line x1="110" y1="60" x2="110" y2="104" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="76" x2="74" y2="88" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="76" x2="146" y2="88" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="104" x2="82" y2="132" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="82" y1="132" x2="92" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="104" x2="138" y2="132" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="138" y1="132" x2="128" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>`;
          break;
        case 'lunge':
          figure = `${base.head}<line x1="110" y1="60" x2="110" y2="114" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="76" x2="70" y2="90" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="76" x2="146" y2="90" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="114" x2="78" y2="146" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="78" y1="146" x2="78" y2="170" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="114" x2="164" y2="132" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="164" y1="132" x2="192" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>`;
          break;
        case 'deskpush':
          figure = `${base.head}<line x1="110" y1="60" x2="132" y2="118" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="132" y1="118" x2="146" y2="165" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="132" y1="118" x2="102" y2="165" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="120" y1="82" x2="196" y2="88" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="126" y1="94" x2="198" y2="98" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>`;
          extras = desk;
          break;
        case 'wallslide':
          extras = wall;
          figure = `${base.head}<line x1="188" y1="60" x2="188" y2="118" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="188" y1="76" x2="218" y2="58" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="188" y1="76" x2="218" y2="96" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="188" y1="118" x2="166" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="188" y1="118" x2="210" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>`.replaceAll('188', '170').replaceAll('218', '238').replaceAll('166', '152').replaceAll('210', '188');
          break;
        case 'scap':
          extras = '<path d="M56 80 q16 22 36 0" fill="none" stroke="#355c7d" stroke-width="4" stroke-linecap="round"/><path d="M164 80 q16 22 36 0" fill="none" stroke="#355c7d" stroke-width="4" stroke-linecap="round"/>';
          break;
        case 'chestopen':
          figure = `${base.head}${base.body}<line x1="110" y1="78" x2="56" y2="66" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="78" x2="164" y2="66" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="120" x2="84" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="120" x2="136" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>`;
          extras = '<path d="M196 62 q20 -16 38 0" fill="none" stroke="#355c7d" stroke-width="4" stroke-linecap="round"/>';
          break;
        case 'neck':
          extras = '<path d="M70 38 q18 -18 34 0" fill="none" stroke="#355c7d" stroke-width="4" stroke-linecap="round"/><path d="M150 38 q18 -18 34 0" fill="none" stroke="#355c7d" stroke-width="4" stroke-linecap="round"/>';
          break;
        case 'hinge':
          figure = `${base.head}<line x1="110" y1="60" x2="144" y2="104" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="128" y1="80" x2="84" y2="88" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="128" y1="80" x2="170" y2="82" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="144" y1="104" x2="100" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="144" y1="104" x2="164" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>`;
          break;
        case 'glute':
          extras = '<circle cx="98" cy="122" r="9" fill="#355c7d" opacity=".22"/><circle cx="122" cy="122" r="9" fill="#355c7d" opacity=".22"/>';
          break;
        case 'calf':
          figure = `${base.head}${base.body}${base.armL}${base.armR}<line x1="110" y1="120" x2="94" y2="162" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="94" y1="162" x2="104" y2="162" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="110" y1="120" x2="126" y2="162" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="126" y1="162" x2="136" y2="162" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>`;
          extras = '<path d="M82 172 q12 -10 24 0" fill="none" stroke="#355c7d" stroke-width="4" stroke-linecap="round"/><path d="M114 172 q12 -10 24 0" fill="none" stroke="#355c7d" stroke-width="4" stroke-linecap="round"/>';
          break;
        case 'ankle':
          extras = '<circle cx="96" cy="162" r="12" fill="none" stroke="#355c7d" stroke-width="4" stroke-dasharray="4 4"/>';
          break;
        case 'twist':
          extras = '<path d="M150 82 q24 18 0 36" fill="none" stroke="#355c7d" stroke-width="4" stroke-linecap="round"/><polygon points="150,76 168,82 154,92" fill="#355c7d"/>';
          break;
        case 'shake':
          extras = '<path d="M68 150 q8 10 16 0 q8 -10 16 0" fill="none" stroke="#355c7d" stroke-width="4" stroke-linecap="round"/><path d="M120 150 q8 10 16 0 q8 -10 16 0" fill="none" stroke="#355c7d" stroke-width="4" stroke-linecap="round"/>';
          break;
        case 'bridge':
          figure = '<circle cx="78" cy="132" r="16" fill="#f6d6bf" stroke="#18202a" stroke-width="3"/><line x1="94" y1="132" x2="140" y2="112" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="140" y1="112" x2="182" y2="132" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="182" y1="132" x2="214" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="96" y1="132" x2="52" y2="168" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>';
          break;
        case 'wallsit':
          extras = wall;
          figure = '<circle cx="206" cy="46" r="16" fill="#f6d6bf" stroke="#18202a" stroke-width="3"/><line x1="206" y1="62" x2="206" y2="104" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="206" y1="82" x2="170" y2="82" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="206" y1="82" x2="236" y2="82" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="206" y1="104" x2="162" y2="104" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="162" y1="104" x2="162" y2="166" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="206" y1="104" x2="236" y2="166" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>';
          break;
        case 'deadbug':
          figure = '<circle cx="86" cy="130" r="16" fill="#f6d6bf" stroke="#18202a" stroke-width="3"/><line x1="102" y1="130" x2="148" y2="114" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="118" y1="124" x2="174" y2="82" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="130" y1="120" x2="174" y2="154" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="148" y1="114" x2="198" y2="144" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>';
          break;
        case 'plank':
          figure = '<circle cx="86" cy="86" r="15" fill="#f6d6bf" stroke="#18202a" stroke-width="3"/><line x1="100" y1="90" x2="188" y2="104" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="132" y1="96" x2="118" y2="152" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="188" y1="104" x2="214" y2="154" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>';
          break;
        case 'sideplank':
          figure = '<circle cx="106" cy="82" r="15" fill="#f6d6bf" stroke="#18202a" stroke-width="3"/><line x1="118" y1="92" x2="196" y2="112" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="146" y1="98" x2="126" y2="150" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="196" y1="112" x2="214" y2="156" stroke="#18202a" stroke-width="6" stroke-linecap="round"/><line x1="132" y1="100" x2="132" y2="60" stroke="#18202a" stroke-width="6" stroke-linecap="round"/>';
          break;
        case 'rest':
        default:
          extras = '<circle cx="110" cy="96" r="36" fill="#e6eef6"/><path d="M110 72 v24 l18 12" stroke="#355c7d" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
          figure = '';
      }

      return `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}"><rect width="320" height="200" rx="18" fill="#fbfdff"/>${ground}${extras}${figure}<text x="18" y="28" fill="#64748b" font-size="14" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif">${label}</text></svg>`;
    }

    function setTimer(elapsedMs, totalMs, label) {
      const total = Math.max(totalMs, 1);
      const progress = Math.min(100, Math.max(0, elapsedMs / total * 100));
      els.timerRing.style.setProperty('--progress', `${progress}%`);
      const leftSec = Math.max(0, Math.floor((totalMs - elapsedMs) / 1000));
      els.mainTimer.textContent = totalMs <= 1 ? '00:00' : formatMMSS(leftSec);
      els.mainTimerLabel.textContent = label;
    }

    function describeEvent(evt) {
      return `${formatHM(evt.start)} · ${evt.title}`;
    }

    function playTone(startAt, frequency, duration, type = 'square', volume = 0.2) {
      if (!audioContext) return;
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const comp = audioContext.createDynamicsCompressor();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, startAt);
      gain.gain.setValueAtTime(0.0001, startAt);
      gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
      osc.connect(gain);
      gain.connect(comp);
      comp.connect(audioContext.destination);
      osc.start(startAt);
      osc.stop(startAt + duration + 0.02);
    }

    function quickBeep() {
      if (!audioContext) return;
      const t = audioContext.currentTime + 0.02;
      playTone(t, 880, 0.18, 'triangle', 0.16);
      playTone(t + 0.22, 1040, 0.18, 'triangle', 0.16);
    }

    function quickAlarmPattern() {
      if (!audioContext) return;
      const base = audioContext.currentTime + 0.02;
      const pattern = [
        [0.00, 1280, 0.30, 'square', 0.36],
        [0.34, 980, 0.28, 'square', 0.34],
        [0.66, 1280, 0.30, 'square', 0.38],
        [1.05, 760, 0.24, 'sawtooth', 0.32],
        [1.34, 760, 0.24, 'sawtooth', 0.32],
        [1.65, 1280, 0.36, 'square', 0.40],
        [2.10, 980, 0.30, 'square', 0.34],
        [2.44, 1280, 0.36, 'square', 0.40]
      ];
      pattern.forEach(([offset, freq, duration, type, volume]) => {
        playTone(base + offset, freq, duration, type, volume);
      });
    }

    function cloneTemplate(template) {
      return JSON.parse(JSON.stringify(template));
    }

    function scaleSteps(steps, targetSeconds) {
      const total = steps.reduce((sum, [,s]) => sum + s, 0);
      const factor = targetSeconds / total;
      const scaled = steps.map(([name, seconds]) => [name, Math.max(12, Math.round(seconds * factor))]);
      const newTotal = scaled.reduce((sum, [,s]) => sum + s, 0);
      const delta = targetSeconds - newTotal;
      if (scaled.length) scaled[scaled.length - 1][1] += delta;
      return scaled;
    }

    function randInt(min, max, rng) {
      if (max <= min) return min;
      return Math.floor(rng() * (max - min + 1)) + min;
    }

    function formatMMSS(seconds) {
      const m = String(Math.floor(seconds / 60)).padStart(2, '0');
      const s = String(seconds % 60).padStart(2, '0');
      return `${m}:${s}`;
    }

    function formatHM(date) {
      const h = String(date.getHours()).padStart(2, '0');
      const m = String(date.getMinutes()).padStart(2, '0');
      return `${h}:${m}`;
    }

    function addMinutes(date, mins) {
      return new Date(date.getTime() + mins * 60000);
    }

    function addDays(date, days) {
      const d = new Date(date);
      d.setDate(d.getDate() + days);
      return d;
    }

    function atTime(date, hhmm) {
      const [h, m] = hhmm.split(':').map(Number);
      const d = new Date(date);
      d.setHours(h, m, 0, 0);
      return d;
    }

    function toDateKey(date) {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const d = String(date.getDate()).padStart(2, '0');
      return `${y}-${m}-${d}`;
    }

    function startOfISOWeek(date) {
      const d = new Date(date);
      const day = d.getDay() || 7;
      d.setHours(0,0,0,0);
      d.setDate(d.getDate() - day + 1);
      return d;
    }

    function getISOWeekKey(date) {
      const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
      const dayNum = d.getUTCDay() || 7;
      d.setUTCDate(d.getUTCDate() + 4 - dayNum);
      const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
      return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
    }

    function getNow() {
      return new Date(Date.now() + debugOffsetMs);
    }

    function hashString(str) {
      let h = 1779033703 ^ str.length;
      for (let i = 0; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
        h = (h << 13) | (h >>> 19);
      }
      return () => {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
      };
    }

    function mulberry32(seedFn) {
      let a = seedFn();
      return function() {
        a |= 0;
        a = a + 0x6D2B79F5 | 0;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    }

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
