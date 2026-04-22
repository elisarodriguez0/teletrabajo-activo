const DAY_NAMES_BY_LANG = { es: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'], en: ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'] };
    const SHORT_DAY_BY_LANG = { es: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'], en: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'] };
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

    const STRINGS = {
      es: {langLabel:'Idioma',pillWeekdays:'Lunes a viernes',pillDesk:'Escritorio elevable',pillTimer:'Crono activo',pillVariety:'Aleatoriedad útil',heroTitle:'Teletrabajo Activo',heroDesc:'Versión pensada para ordenador. La enciendes al fichar, dejas la pestaña abierta y te va guiando con bloques de sentada, de pie, movimiento y fuerza extra colocada de forma aleatoria fuera de tus días de gimnasio.',stateNowTitle:'Estado ahora',labelShownDay:'Día mostrado',labelCurrentPhase:'Fase actual',labelCountdown:'Cuenta atrás',labelNextAlarm:'Próxima alarma',mainTimerTitle:'Crono principal',mainTimerDesc:'Usa esto con la pestaña abierta en el ordenador. Cuando cambie el bloque te sonará una alarma si activas el audio.',btnEnableSound:'Activar sonido',btnSoundOn:'Sonido activado',btnEnableNotifications:'Activar notificaciones',btnNotifOn:'Notificaciones activadas',btnNotifBlocked:'Notificaciones bloqueadas',btnGenerate:'Regenerar día mostrado',btnToday:'Volver a hoy',btnSkip:'Saltar bloque',desktopNotice:'Pensada para escritorio. Si cambias de pestaña, la app intenta avisarte con sonido, voz y título parpadeando.',weekSettingsTitle:'Semana y ajustes',startLabel:'Empiezas',endLabel:'Terminas',lunchLabel:'Comida',lunchMinutesLabel:'Minutos comida',sitMinutesLabel:'Minutos sentada',standMinutesLabel:'Minutos de pie',moveMinutesLabel:'Minutos movilidad',strengthPerWeekLabel:'Fuerza real por semana',strengthSessionsOptions:['1 sesión','2 sesiones','3 sesiones'],randomnessLabel:'Variación de ejercicios',randomnessOptions:['Suave','Media','Alta'],randomTooltip:'No cambia la duración de los bloques. Solo cambia el tipo y la variedad de ejercicios.',allowWalkLabel:'Permitir caminata corta',allowWalkOptions:['No','Sí'],gymDaysLabel:'Días de gimnasio',saveBtn:'Guardar y regenerar semana',guidedBlockTitle:'Bloque guiado',blockDetailTitle:'Detalle del bloque',blockDetailDesc:'Aquí tienes explicado el movimiento o ejercicio que toca en cada momento.',todoTitle:'To do list',todoDesc:'Añade tareas rápidas, reordénalas arrastrando y márcalas al completarlas.',todoCompactOff:'Modo compacto lateral',todoCompactOn:'Quitar lateral',todoPlaceholder:'Añade una tarea',todoAddBtn:'Añadir tarea',summaryTitle:'Resumen del día mostrado',dayPlanTitle:'Plan del día',strengthWeekTitle:'Sesiones de fuerza de la semana',strengthWeekDesc:'Se colocan fuera de tus días de gimnasio. Si ya tienes gimnasio ese día, la app no te mete fuerza extra ahí.',soundError:'No pude activar el sonido. Haz clic otra vez.',notifUnsupported:'Este navegador no soporta notificaciones web.',todoEmpty:'Todavía no has añadido tareas.',deleteBtn:'Borrar',preview:'Vista previa',previewDesc:'Estás viendo otro día de la semana. El crono solo corre con el día real.',nextBlock:'Siguiente bloque',beforeStart:'Antes de empezar',outOfHours:'Fuera de horario',waitingDay:'Tu jornada está preparada y esperando.',dayFinished:'Tu jornada ha terminado.',noBlocks:'ninguno',endOfDay:'fin del día',shownDayReal:'Hoy real.',shownDaySelected:'Día de la semana seleccionado.',todayLabelPrefix:'Así queda',noDay:'Sin día',dayError:'No he podido generar el día mostrado.',regenerateHint:'Prueba a regenerar la semana.',strengthTag:'Fuerza',noExtraSession:'Sin sesión extra',gymThatDay:'Ese día ya haces gimnasio.',noStrengthDay:'Día libre de fuerza real.',gymTag:'Gimnasio',freeTag:'Libre',allGymNotice:'Todos tus días entre semana tienen gimnasio marcado. Por eso no he metido fuerza extra.',totalPlanned:'Total planificado',statLabels:['Sentada','De pie','Movimiento','Fuerza'],tabPreview:'Vista previa',tabBefore:'Empieza',tabEnded:'Día terminado',blockStep:'Paso del bloque',stepNow:'Ahora mismo',previewLabel:'Vista previa',secondsLeft:'quedan',noGuidedBlock:'No hay bloque guiado activo ahora mismo.',guidedPreview:'Vista previa del bloque guiado.',standGuided:'Bloque de pie. Mantén pies firmes, reparte peso y relaja hombros.',sitGuided:'Bloque sentada. Pies apoyados, cuello largo y ratón cerca.',lunchGuided:'Comida y descanso.',noStepGuided:'Este bloque no tiene pasos guiados.',standChecklist:['Pies bien apoyados.','Pantalla a buena altura.','Microcambios de peso cada poco.'],sitChecklist:['Pies apoyados.','Ratón y teclado cerca.','No te quedes congelada toda la hora.'],restChecklist:['Descansa y vuelve sin prisa.'],standTip:'Estar de pie inmóvil tampoco es la panacea. Cambia postura.',generalTip:'El objetivo es que el cuerpo no se quede tieso.',speechPrefix:'Cambio de bloque',loadingDay:'Cargando...',generatingDay:'Generando jornada.',timerBefore:'Esperando inicio'},
      en: {langLabel:'Language',pillWeekdays:'Monday to Friday',pillDesk:'Standing desk',pillTimer:'Active timer',pillVariety:'Useful variety',heroTitle:'Active Remote Work',heroDesc:'Desktop version. Start it when you clock in, keep the tab open, and it guides you through sitting, standing, movement, and extra strength blocks outside your gym days.',stateNowTitle:'Current status',labelShownDay:'Shown day',labelCurrentPhase:'Current phase',labelCountdown:'Countdown',labelNextAlarm:'Next alarm',mainTimerTitle:'Main timer',mainTimerDesc:'Use this with the tab open on your computer. When the block changes, you will hear an alarm if audio is enabled.',btnEnableSound:'Enable sound',btnSoundOn:'Sound enabled',btnEnableNotifications:'Enable notifications',btnNotifOn:'Notifications enabled',btnNotifBlocked:'Notifications blocked',btnGenerate:'Regenerate shown day',btnToday:'Back to today',btnSkip:'Skip block',desktopNotice:'Built for desktop. If you switch tabs, the app tries to alert you with sound, voice, and a flashing tab title.',weekSettingsTitle:'Week and settings',startLabel:'Start',endLabel:'End',lunchLabel:'Lunch',lunchMinutesLabel:'Lunch minutes',sitMinutesLabel:'Sitting minutes',standMinutesLabel:'Standing minutes',moveMinutesLabel:'Movement minutes',strengthPerWeekLabel:'Strength sessions per week',strengthSessionsOptions:['1 session','2 sessions','3 sessions'],randomnessLabel:'Exercise variation',randomnessOptions:['Low','Medium','High'],randomTooltip:'This does not change block duration. It only changes the type and variety of exercises.',allowWalkLabel:'Allow short walk',allowWalkOptions:['No','Yes'],gymDaysLabel:'Gym days',saveBtn:'Save and regenerate week',guidedBlockTitle:'Guided block',blockDetailTitle:'Block detail',blockDetailDesc:'This explains the movement or exercise you should do at that moment.',todoTitle:'To do list',todoDesc:'Add quick tasks, drag to reorder them, and tick them off when completed.',todoCompactOff:'Compact side mode',todoCompactOn:'Hide side panel',todoPlaceholder:'Add a task',todoAddBtn:'Add task',summaryTitle:'Shown day summary',dayPlanTitle:'Day plan',strengthWeekTitle:'Weekly strength sessions',strengthWeekDesc:'These are placed outside your gym days. If you already have gym that day, the app does not schedule extra strength there.',soundError:'Could not enable sound. Click again.',notifUnsupported:'This browser does not support web notifications.',todoEmpty:'You have not added any tasks yet.',deleteBtn:'Delete',preview:'Preview',previewDesc:'You are viewing another day of the week. The timer only runs for the real current day.',nextBlock:'Next block',beforeStart:'Before start',outOfHours:'Outside working hours',waitingDay:'Your day is ready and waiting.',dayFinished:'Your day has ended.',noBlocks:'none',endOfDay:'end of day',shownDayReal:'Real today.',shownDaySelected:'Selected weekday.',todayLabelPrefix:'This is',noDay:'No day',dayError:'Could not generate the shown day.',regenerateHint:'Try regenerating the week.',strengthTag:'Strength',noExtraSession:'No extra session',gymThatDay:'You already have gym that day.',noStrengthDay:'No extra strength that day.',gymTag:'Gym',freeTag:'Free',allGymNotice:'All weekdays are marked as gym days, so no extra strength sessions were added.',totalPlanned:'Total planned',statLabels:['Sitting','Standing','Movement','Strength'],tabPreview:'Preview',tabBefore:'Starts',tabEnded:'Day finished',blockStep:'Block step',stepNow:'Right now',previewLabel:'Preview',secondsLeft:'left',noGuidedBlock:'There is no guided block active right now.',guidedPreview:'Guided block preview.',standGuided:'Standing block. Keep your feet grounded, shift your weight, and relax your shoulders.',sitGuided:'Sitting block. Keep feet supported, neck long, and mouse close.',lunchGuided:'Lunch and rest.',noStepGuided:'This block has no guided steps.',standChecklist:['Feet grounded.','Screen at a good height.','Shift your weight every so often.'],sitChecklist:['Feet supported.','Mouse and keyboard close.','Do not stay frozen the whole hour.'],restChecklist:['Rest and come back calmly.'],standTip:'Standing still forever is not the answer either. Change posture.',generalTip:'The goal is to stop your body from getting stiff.',speechPrefix:'Block change',loadingDay:'Loading...',generatingDay:'Generating day.',timerBefore:'Waiting to start'}
    };

    
    const TEXT_MAP_EN = {
      'Sentada': 'Sitting',
      'De pie': 'Standing',
      'Movimiento': 'Movement',
      'Comida': 'Lunch',
      'Fuerza': 'Strength',
      'Trabajo sentada': 'Sitting work',
      'Trabajo de pie': 'Standing work',
      'Bloque de foco. Cambia postura al terminar.': 'Focus block. Change posture when it ends.',
      'Sube el escritorio, apoya bien los pies y relaja hombros.': 'Raise the desk, keep your feet grounded, and relax your shoulders.',
      'Bloque corto para movilidad y activación.': 'Short block for mobility and activation.',
      'Comida y descanso. No hace falta forzar paseo aquí.': 'Lunch and rest. No need to force a walk here.',
      'Piernas + pecho': 'Legs + chest',
      'Movilidad + empuje': 'Mobility + push',
      'Cadera + postura': 'Hips + posture',
      'Desentumecer total': 'Full reset',
      'Caminata corta + movilidad': 'Short walk + mobility',
      'Paseo corto, sentadilla y apertura de pecho.': 'Short walk, squats, and chest opening.',
      'Activación de piernas y empuje suave.': 'Leg activation and gentle pushing.',
      'Bisagra, gluteo y espalda alta.': 'Hip hinge, glutes, and upper back.',
      'Bisagra, glúteo y espalda alta.': 'Hip hinge, glutes, and upper back.',
      'Bloque fácil para cuando vas cargada.': 'Easy block for when you feel stiff.',
      'Una caminata breve y luego movilidad suave para reiniciar el cuerpo.': 'A short walk followed by gentle mobility to reset your body.',
      'Full body base': 'Full body base',
      'Pierna + core': 'Legs + core',
      'Postura + empuje': 'Posture + push',
      'Dos rondas sencillas pero útiles.': 'Two simple but useful rounds.',
      'Más estable y muy compatible con gimnasio.': 'More stable and very compatible with gym days.',
      'Muy buena si notas cuello y espalda cargados.': 'Very good if your neck and upper back feel tight.',
      'Camina por casa': 'Walk around the house',
      'Camina rápido': 'Walk fast',
      'Camina': 'Walk',
      'Sentadillas': 'Squats',
      'Sentadillas o levantarte de la silla': 'Squats or sit-to-stand',
      'Sentadilla corta o media sentadilla': 'Short squat or half squat',
      'Sentadilla con pausa abajo': 'Pause squat',
      'Zancadas atrás alternas': 'Alternating reverse lunges',
      'Zancadas atrás': 'Reverse lunges',
      'Flexiones en escritorio': 'Desk push-ups',
      'Flexiones en escritorio o pared': 'Desk or wall push-ups',
      'Wall slides': 'Wall slides',
      'Wall slides o retracciones escapulares': 'Wall slides or scapular retractions',
      'Retracciones escapulares': 'Scapular retractions',
      'Abrir pecho y hombros atrás': 'Open chest and roll shoulders back',
      'Apertura de pecho': 'Chest opening',
      'Cuello y hombros': 'Neck and shoulders',
      'Bisagra de cadera': 'Hip hinge',
      'Aprieta glúteos de pie': 'Standing glute squeeze',
      'Gemelos con pausa arriba': 'Calf raises with pause',
      'Elevaciones de gemelos': 'Calf raises',
      'Balanceo de tobillos': 'Ankle mobility',
      'Giro torácico suave': 'Gentle thoracic rotation',
      'Respira y sacude piernas': 'Breathe and shake out your legs',
      'Puente de glúteo': 'Glute bridge',
      'Wall sit': 'Wall sit',
      'Dead bug': 'Dead bug',
      'Plancha': 'Plank',
      'Plancha lateral lado A': 'Side plank side A',
      'Plancha lateral lado B': 'Side plank side B',
      'Descanso': 'Rest',

      'Camina a paso ligero por el pasillo o la habitación. Nada épico, solo sacar al cuerpo del modo estatua.': 'Walk briskly around the room or hallway. Nothing dramatic, just get your body out of statue mode.',
      'Da zancadas cortas y rápidas, sin arrastrar los pies.': 'Take short, quick steps without dragging your feet.',
      'Mueve los brazos de forma natural.': 'Move your arms naturally.',
      'Mantén el pecho abierto y la mirada al frente.': 'Keep your chest open and your gaze forward.',
      'Objetivo real: subir un poco pulsaciones y despegar cadera, tobillos y espalda.': 'Real goal: raise your heart rate a little and loosen up your hips, ankles, and back.',
      'Mismo gesto que caminar normal, pero con intención. Piensa en paso vivo de “voy tarde”.': 'Same movement as normal walking, but with intention. Think of a brisk “I am late” pace.',
      'Aprieta un poco el abdomen para no ir colapsada.': 'Brace your core slightly so you do not collapse.',
      'Apoya el pie de forma natural y continua.': 'Place your foot naturally and keep moving smoothly.',
      'No hace falta correr ni botar.': 'No need to run or bounce.',
      'Si tienes poco espacio, haz idas y vueltas. Sirve igual.': 'If you have little space, walk back and forth. It works just as well.',
      'Paseo breve para romper la inmovilidad y volver a arrancar tobillos, rodillas y cadera.': 'A short walk to break immobility and wake up ankles, knees, and hips again.',
      'Da vueltas por casa sin mirar el móvil.': 'Walk around without looking at your phone.',
      'Respira normal y deja que se suelten los hombros.': 'Breathe normally and let your shoulders loosen up.',
      'Piensa en moverte, no en hacerlo perfecto.': 'Think about moving, not about doing it perfectly.',
      'Esto parece una tontería, pero justo esta tontería es la que más evita estar tiesa horas.': 'It may seem silly, but this is exactly the kind of thing that prevents you from getting stiff for hours.',
      'Baja como si fueras a sentarte en una silla y vuelve a subir apretando glúteos.': 'Lower yourself as if you were going to sit in a chair, then stand back up squeezing your glutes.',
      'Pies al ancho de caderas o un poco más.': 'Feet hip-width apart or slightly wider.',
      'Cadera va atrás y abajo, pecho abierto.': 'Send your hips back and down, keeping your chest open.',
      'Sube empujando el suelo con todo el pie.': 'Stand up by pushing through your whole foot.',
      'Si te cuesta, toca una silla con el culo y vuelve a subir. Eso cuenta perfectamente.': 'If it is hard, tap a chair with your hips and stand back up. That absolutely counts.',
      'Versión amable de sentadilla. Te sientas y te levantas de forma controlada.': 'Gentler squat version. Sit down and stand up in a controlled way.',
      'Acércate al borde de la silla.': 'Move toward the edge of the chair.',
      'Inclina un poco el torso y empuja con los pies.': 'Lean your torso slightly forward and push through your feet.',
      'Sube sin tirarte hacia delante de golpe.': 'Stand up without throwing yourself forward.',
      'Muy buena si no controlas aún la sentadilla libre.': 'Very good if you do not yet feel comfortable with a free squat.',
      'No hace falta bajar mucho. Solo flexiona cadera y rodillas un poco y vuelve arriba.': 'No need to go very low. Just bend your hips and knees a little and come back up.',
      'Baja hasta donde te notes estable.': 'Go down only as far as you still feel stable.',
      'Peso repartido entre talón y parte media del pie.': 'Keep your weight between your heel and midfoot.',
      'Sube controlando, sin rebote.': 'Stand back up with control, without bouncing.',
      'Perfecta cuando estás cargada o llevas falda/ropa incómoda.': 'Perfect when you feel stiff or are wearing uncomfortable clothes.',
      'Igual que la sentadilla, pero paras un momento abajo para que trabaje más.': 'Same as a squat, but pause briefly at the bottom so it works more.',
      'Quédate 1 o 2 segundos abajo sin hundirte.': 'Stay 1 or 2 seconds at the bottom without collapsing.',
      'Sube empujando el suelo.': 'Stand up by pushing through the floor.',
      'Vas a notar más cuádriceps y glúteo sin necesitar peso.': 'You will feel more quads and glutes without needing weights.',
      'Lleva una pierna atrás, baja un poco y vuelve. Alterna lados.': 'Step one leg back, lower slightly, and return. Alternate sides.',
      'Paso atrás lo bastante largo para ir estable.': 'Step back far enough to stay stable.',
      'Torso alto, hombros relajados.': 'Keep your torso tall and shoulders relaxed.',
      'Empuja con la pierna de delante para volver.': 'Push through the front leg to come back up.',
      'Si te tambaleas, apóyate con una mano en la mesa o la pared.': 'If you wobble, support yourself with one hand on the desk or wall.',
      'Unilateral, muy útil para piernas y glúteo sin necesitar mucho espacio.': 'A unilateral exercise that is very useful for legs and glutes without needing much space.',
      'Rodilla delantera sigue la línea de los dedos del pie.': 'Keep your front knee tracking in line with your toes.',
      'No hace falta bajar muchísimo.': 'No need to go super low.',
      'Vuelve al centro antes de cambiar de lado.': 'Return to the centre before switching sides.',
      'Mejor pocas bien hechas que muchas descontroladas.': 'A few well done reps are better than many sloppy ones.',
      'Flexión en escritorio': 'Desk push-up',
      'Apoya las manos en el borde del escritorio, cuerpo recto, baja pecho y empuja.': 'Place your hands on the desk edge, keep your body straight, lower your chest, and push back up.',
      'Manos algo más abiertas que hombros.': 'Hands slightly wider than shoulder width.',
      'Cuerpo en línea, sin sacar culo ni hundir lumbar.': 'Keep your body in one line, without sticking your hips out or collapsing your lower back.',
      'Baja hacia el borde del escritorio y vuelve a empujar.': 'Lower toward the desk edge and push back up.',
      'Cuanto más alto el apoyo, más fácil. Escritorio o pared si hace falta.': 'The higher the support, the easier it is. Use the desk or the wall if needed.',
      'La misma idea de una flexión, pero con apoyo alto para que sea mucho más llevadera.': 'The same idea as a push-up, but with a high support so it feels much easier.',
      'Aprieta abdomen y glúteos.': 'Brace your core and glutes.',
      'Codos van en diagonal, no pegados ni abiertos del todo.': 'Let your elbows move diagonally, neither tucked nor fully flared.',
      'Empuja hasta estirar brazos sin bloquearte.': 'Push until your arms are straight without locking out hard.',
      'Esto trabaja pecho, hombro y tríceps. Bastante más útil de lo que parece.': 'This works chest, shoulders, and triceps. More useful than it looks.',
      'Espalda y brazos contra la pared, desliza los antebrazos hacia arriba y abajo.': 'With your back and arms against the wall, slide your forearms up and down.',
      'Mantén costillas controladas, no arquees la espalda.': 'Keep your ribs under control and do not arch your back.',
      'Sube solo hasta donde no pierdas contacto útil.': 'Only raise your arms as high as you can without losing good contact.',
      'Hazlo lento, buscando movilidad y control.': 'Do it slowly, focusing on mobility and control.',
      'Muy bueno para hombros cerrados por teclado y ratón.': 'Very good for shoulders that feel closed from keyboard and mouse work.',
      'Si haces wall slides, desliza en pared. Si no, junta escápulas detrás sin encoger hombros.': 'If you do wall slides, slide against the wall. Otherwise, squeeze your shoulder blades together without shrugging.',
      'Piensa en llevar hombros atrás y abajo.': 'Think about taking your shoulders back and down.',
      'No saques pecho exagerado ni arquees lumbar.': 'Do not over-flare your chest or arch your lower back.',
      'Haz una pausa breve al final del gesto.': 'Pause briefly at the end of the movement.',
      'Esto va genial si se te carga la zona entre cuello y omóplatos.': 'This is great if the area between your neck and shoulder blades feels tight.',
      'Junta los omóplatos detrás como si quisieras sujetar un lápiz entre ellos.': 'Squeeze your shoulder blades together as if you were holding a pencil between them.',
      'Brazos sueltos a los lados o codos a 90 grados.': 'Keep your arms relaxed by your sides or your elbows at 90 degrees.',
      'No subas los hombros hacia las orejas.': 'Do not lift your shoulders toward your ears.',
      'Aguanta 1 segundo y suelta.': 'Hold for 1 second and release.',
      'Pequeño gesto, mucha utilidad para postura.': 'Small movement, very useful for posture.',
      'Abre clavículas, lleva hombros atrás y nota cómo se estira la parte delantera del torso.': 'Open your collarbones, take your shoulders back, and feel the front of your torso stretch.',
      'Entrelaza manos detrás o simplemente abre brazos.': 'Interlace your hands behind you or simply open your arms.',
      'Mentón suave, sin sacar cuello.': 'Keep your chin soft and avoid jutting your neck forward.',
      'Respira profundo 2 o 3 veces.': 'Take 2 or 3 deep breaths.',
      'Esto es para compensar postura encogida de ordenador.': 'This helps compensate for a hunched computer posture.',
      'Versión simple para soltar hombros y pectoral.': 'Simple version to release shoulders and chest.',
      'Abre brazos o lleva manos detrás.': 'Open your arms or bring your hands behind you.',
      'Costillas tranquilas, no arquees toda la espalda.': 'Keep your ribs quiet and do not arch your whole back.',
      'Tiene que sentirse liberador, no doloroso.': 'It should feel relieving, not painful.',
      'Movilidad suave para quitar rigidez de pantalla.': 'Gentle mobility to reduce screen-related stiffness.',
      'Inclina la cabeza a un lado sin forzar.': 'Tilt your head to one side without forcing it.',
      'Haz círculos pequeños de hombros hacia atrás.': 'Make small backward shoulder circles.',
      'Respira y no hagas rebotes.': 'Breathe and do not bounce.',
      'Aquí no hay heroicidades. Suave y limpio.': 'No heroics here. Gentle and clean.',
      'Empuja la cadera hacia atrás con espalda neutra, como si cerraras un cajón con el culo.': 'Push your hips back with a neutral spine, as if you were closing a drawer with your hips.',
      'Rodillas algo flexionadas.': 'Keep your knees slightly bent.',
      'Espalda larga, no redondees lumbar.': 'Keep your spine long and do not round your lower back.',
      'Vuelve apretando glúteos al final.': 'Come back up by squeezing your glutes at the top.',
      'Esto enseña a usar glúteos e isquios en vez de cargarte la espalda.': 'This teaches you to use your glutes and hamstrings instead of loading your back.',
      'Ponte alta, aprieta glúteos fuerte unos segundos y suelta.': 'Stand tall, squeeze your glutes hard for a few seconds, then release.',
      'No arquees la espalda.': 'Do not arch your back.',
      'Aprieta de verdad, como si quisieras juntar los bolsillos del pantalón.': 'Squeeze for real, as if you wanted to bring your back pockets together.',
      'Muy simple, pero útil para despertar glúteos dormidos por estar sentada.': 'Very simple, but useful for waking up glutes that have gone to sleep from sitting.',
      'Sube a puntillas, aguanta arriba un momento y baja lento.': 'Rise onto your toes, hold briefly at the top, and lower slowly.',
      'Empuja desde la base del dedo gordo y segundo dedo.': 'Push from the base of your big toe and second toe.',
      'Mantente alta 1 o 2 segundos arriba.': 'Stay tall for 1 or 2 seconds at the top.',
      'Baja controlando, no te dejes caer.': 'Lower with control, do not drop down.',
      'Esto trabaja gemelos y tobillo. No sustituye a una sentadilla.': 'This works calves and ankles. It does not replace a squat.',
      'Sube a puntillas y baja. Simple y efectivo para pantorrilla y tobillo.': 'Rise onto your toes and lower down. Simple and effective for calves and ankles.',
      'Apóyate si hace falta para equilibrarte.': 'Hold on if needed to help your balance.',
      'Sube todo lo que puedas sin colapsar tobillo.': 'Rise as high as you can without collapsing your ankle.',
      'Muy buen complemento, pero no reemplaza trabajo completo de pierna.': 'A very good complement, but it does not replace full leg work.',
      'Movilidad de tobillos': 'Ankle mobility',
      'Mueve tobillos hacia delante y atrás o haz pequeños círculos controlados.': 'Move your ankles forward and back or make small controlled circles.',
      'Levanta un pie o apóyate en pared.': 'Lift one foot or support yourself on a wall.',
      'Haz el gesto suave, sin dolor.': 'Move gently, without pain.',
      'Cambia de lado a mitad de tiempo.': 'Switch sides halfway through.',
      'Ideal si notas las piernas acartonadas por estar quieta.': 'Great if your legs feel stiff from staying still.',
      'Rota la parte alta de la espalda con los brazos relajados o cruzados.': 'Rotate your upper back with your arms relaxed or crossed.',
      'La pelvis se queda bastante quieta.': 'Keep your pelvis fairly still.',
      'Gira desde costillas y espalda alta.': 'Rotate from your ribs and upper back.',
      'Sirve para desbloquear la sensación de ir encorvada.': 'This helps unlock that hunched-over feeling.',
      'Minipausa para bajar tensión y aflojar piernas.': 'Mini pause to lower tension and loosen your legs.',
      'Suelta una pierna y luego la otra.': 'Relax one leg and then the other.',
      'Haz 2 o 3 respiraciones más largas.': 'Take 2 or 3 longer breaths.',
      'Aprovecha para recolocarte antes de volver al trabajo.': 'Use this moment to reset yourself before going back to work.',
      'No parece ejercicio, pero ayuda un montón a no acumular rigidez.': 'It may not seem like exercise, but it really helps prevent stiffness from building up.',
      'Tumbada boca arriba, pies apoyados, elevas cadera apretando glúteos.': 'Lie on your back with feet supported, then lift your hips by squeezing your glutes.',
      'Talones relativamente cerca del culo.': 'Keep your heels relatively close to your glutes.',
      'Sube hasta formar una línea hombros-cadera-rodillas.': 'Lift until you form a line from shoulders to hips to knees.',
      'Baja controlando sin desplomarte.': 'Lower with control without collapsing.',
      'Muy bueno para glúteo y para compensar tantas horas sentada.': 'Very good for glutes and for compensating so many hours of sitting.',
      'Espalda apoyada en la pared y te dejas caer hasta una media sentadilla isométrica.': 'With your back against the wall, slide down into a half squat hold.',
      'Pies algo adelantados respecto a la pared.': 'Keep your feet slightly forward from the wall.',
      'Rodillas y caderas flexionadas lo que toleres.': 'Bend your knees and hips as much as you comfortably can.',
      'Mantén abdomen activo y respira.': 'Keep your core active and breathe.',
      'Quema bastante en poco tiempo. Normal.': 'This burns quite a lot in little time. Totally normal.',
      'Boca arriba, abdomen apretado, alternas brazo y pierna contrarios sin despegar la zona lumbar.': 'On your back with your core braced, alternate opposite arm and leg without lifting your lower back.',
      'Espalda baja pegada al suelo o casi.': 'Keep your lower back pressed into the floor, or almost.',
      'Mueve lento, sin perder control.': 'Move slowly without losing control.',
      'Muy bueno para core si la plancha te carga demasiado cuello.': 'Very good for core work if planks load your neck too much.',
      'Apoyo en antebrazos o manos con el cuerpo recto como una tabla.': 'Support yourself on your forearms or hands with your body straight like a plank.',
      'No hundas lumbar ni saques demasiado el culo.': 'Do not let your lower back sag or lift your hips too much.',
      'Mira al suelo para mantener cuello largo.': 'Look at the floor to keep your neck long.',
      'Menos segundos bien hechos vale más que aguantar fatal.': 'Fewer good seconds are worth more than holding badly for longer.',
      'Apoyo lateral en antebrazo o mano, elevando cadera.': 'Side support on forearm or hand while lifting your hips.',
      'Hombro encima del codo si vas con antebrazo.': 'Keep your shoulder above your elbow if using your forearm.',
      'Cadera alta, no te hundas.': 'Keep your hips high and do not sink.',
      'Haz un lado y luego el otro.': 'Do one side and then the other.',
      'Trabaja oblicuos y estabilidad.': 'This works your obliques and stability.',
      'Mismo gesto que el otro lado.': 'Same movement on the other side.',
      'Mantén el cuello largo.': 'Keep your neck long.',
      'Empuja el suelo con el antebrazo.': 'Push the floor away with your forearm.',
      'Aguanta con tensión, no con dolor.': 'Hold with tension, not with pain.',
      'Normal que un lado te cueste más.': 'It is normal for one side to feel harder.',
      'Pausa corta para respirar y recolocarte antes del siguiente ejercicio.': 'Short pause to breathe and reset before the next exercise.',
      'Camina unos pasos o sacude brazos.': 'Walk a few steps or shake out your arms.',
      'Respira por nariz si puedes.': 'Breathe through your nose if you can.',
      'Prepárate para el siguiente paso.': 'Get ready for the next step.',
      'Descansar también forma parte del bloque.': 'Resting is also part of the block.',
      'Sigue el temporizador y muévete con control. Si un gesto te molesta, recorta rango o cambia a una versión más fácil.': 'Follow the timer and move with control. If something bothers you, reduce the range or switch to an easier version.',
      'Muévete sin dolor agudo.': 'Move without sharp pain.',
      'Respira y no corras.': 'Breathe and do not rush.',
      'Prioriza control sobre cantidad.': 'Prioritise control over quantity.',
      'El objetivo aquí no es sufrir. Es meter movimiento útil.': 'The goal here is not to suffer. It is to add useful movement.',
      'Aquí verás explicado el paso principal del bloque.': 'Here you will see the main step of the block explained.',
      'Cuando llegue un bloque de movimiento o fuerza, te explico qué hacer aquí.': 'When a movement or strength block starts, this panel explains what to do here.',
      'Mira el temporizador.': 'Check the timer.',
      'Sigue el paso activo.': 'Follow the active step.',
      'Vuelve al trabajo cuando toque.': 'Go back to work when it is time.',
      'Todo está pensado para que no tengas que improvisar.': 'Everything is designed so you do not have to improvise.',
      'Hazlo suave y con control.': 'Do it gently and with control.'
    };

    function translateText(text) {
      if (currentLanguage !== 'en') return text;
      return TEXT_MAP_EN[text] || text;
    }

    function translateChecklist(items) {
      return (items || []).map(item => translateText(item));
    }

    function translateInfo(info) {
      if (!info || currentLanguage !== 'en') return info;
      return {
        ...info,
        name: translateText(info.name),
        summary: translateText(info.summary),
        checklist: translateChecklist(info.checklist),
        tip: translateText(info.tip)
      };
    }

    function translateEvent(event) {
      if (!event || currentLanguage !== 'en') return event;
      const translated = { ...event, title: translateText(event.title), description: translateText(event.description) };
      if (event.routine) {
        translated.routine = {
          ...event.routine,
          name: translateText(event.routine.name),
          description: translateText(event.routine.description),
          steps: (event.routine.steps || []).map(([name, seconds]) => [translateText(name), seconds])
        };
      }
      return translated;
    }

    function workTagLabel(type) {
      return translateText(WORK_TAGS[type].label);
    }
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
    let todoCompact = loadTodoCompact();
    let currentLanguage = loadLanguage();

    const els = {
      app: document.querySelector('.app'),
      langSelect: document.getElementById('langSelect'),
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
      todoCompactBtn: document.getElementById('todoCompactBtn'),
      todoList: document.getElementById('todoList'),
    };


    function loadLanguage() { const saved = localStorage.getItem('tt-active-lang'); return saved && STRINGS[saved] ? saved : 'es'; }
    function saveLanguage(lang) { localStorage.setItem('tt-active-lang', lang); }
    function tr(key) { return (STRINGS[currentLanguage] && STRINGS[currentLanguage][key]) || STRINGS.es[key] || key; }
    function dayNames() { return DAY_NAMES_BY_LANG[currentLanguage] || DAY_NAMES_BY_LANG.es; }
    function shortDayNames() { return SHORT_DAY_BY_LANG[currentLanguage] || SHORT_DAY_BY_LANG.es; }
    function setText(id, value) { const el = document.getElementById(id); if (el) el.textContent = value; }
    function applyLanguage() { document.documentElement.lang = currentLanguage; if (els.langSelect) els.langSelect.value = currentLanguage; ['langLabel','pillWeekdays','pillDesk','pillTimer','pillVariety','heroTitle','heroDesc','stateNowTitle','labelShownDay','labelCurrentPhase','labelCountdown','labelNextAlarm','mainTimerTitle','mainTimerDesc','desktopNotice','weekSettingsTitle','startLabel','endLabel','lunchLabel','lunchMinutesLabel','sitMinutesLabel','standMinutesLabel','moveMinutesLabel','strengthPerWeekLabel','gymDaysLabel','guidedBlockTitle','blockDetailTitle','blockDetailDesc','todoTitle','todoDesc','summaryTitle','dayPlanTitle','strengthWeekTitle','strengthWeekDesc'].forEach(id=>setText(id, tr(id))); if (els.soundBtn) els.soundBtn.textContent = soundEnabled ? tr('btnSoundOn') : tr('btnEnableSound'); if (els.notifBtn) els.notifBtn.textContent = notificationsEnabled ? tr('btnNotifOn') : tr('btnEnableNotifications'); if (els.generateBtn) els.generateBtn.textContent = tr('btnGenerate'); if (els.todayBtn) els.todayBtn.textContent = tr('btnToday'); if (els.skipBtn) els.skipBtn.textContent = tr('btnSkip'); if (els.saveBtn) els.saveBtn.textContent = tr('saveBtn'); if (els.todoCompactBtn) els.todoCompactBtn.textContent = todoCompact ? tr('todoCompactOn') : tr('todoCompactOff'); if (els.todoAddBtn) els.todoAddBtn.textContent = tr('todoAddBtn'); if (els.todoInput) els.todoInput.placeholder = tr('todoPlaceholder'); const rl=document.getElementById('randomnessLabel'); if (rl && rl.firstChild) rl.firstChild.textContent = tr('randomnessLabel') + ' '; const rb=document.getElementById('randomTooltipBtn'); if (rb) { rb.title = tr('randomTooltip'); rb.setAttribute('aria-label', tr('randomTooltip')); } setText('randomTooltipBox', tr('randomTooltip')); setText('allowWalkLabel', tr('allowWalkLabel')); document.querySelectorAll('#strengthSessions option').forEach((o,i)=>o.textContent=(tr('strengthSessionsOptions')[i]||o.textContent)); document.querySelectorAll('#randomness option').forEach((o,i)=>o.textContent=(tr('randomnessOptions')[i]||o.textContent)); document.querySelectorAll('#allowWalk option').forEach((o,i)=>o.textContent=(tr('allowWalkOptions')[i]||o.textContent));
      if (els.shownDay && (els.shownDay.textContent.includes('Cargando') || els.shownDay.textContent.includes('Loading'))) els.shownDay.textContent = tr('loadingDay');
      if (els.shownDaySub && (els.shownDaySub.textContent.includes('Generando') || els.shownDaySub.textContent.includes('Generating'))) els.shownDaySub.textContent = tr('generatingDay');
      if (els.currentPhase && (els.currentPhase.textContent.includes('Cargando') || els.currentPhase.textContent.includes('Loading'))) els.currentPhase.textContent = tr('loadingDay');
      if (els.currentDescription && (els.currentDescription.textContent.includes('Preparando') || els.currentDescription.textContent.includes('Preparing'))) els.currentDescription.textContent = currentLanguage === 'en' ? 'Preparing day.' : 'Preparando el día.';
      if (els.alarmDescription && (els.alarmDescription.textContent.includes('Activa sonido') || els.alarmDescription.textContent.includes('Enable sound'))) els.alarmDescription.textContent = currentLanguage === 'en' ? 'Enable sound to get alerts.' : 'Activa sonido para que avise.';
      renderFitboxing(); }

    init();

    function init() {
      applyLanguage();
      paintSettings();
      renderFitboxing();
      buildWeek();
      bindEvents();
      selectInitialDay();
      renderAll();
      renderTodos();
      applyTodoCompact();
      startClock();
    }

    function bindEvents() {
      els.soundBtn.addEventListener('click', async () => {
        try {
          if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
          await audioContext.resume();
          soundEnabled = true;
          localStorage.setItem('tt-active-sound', 'true');
          els.soundBtn.textContent = tr('btnSoundOn');
          quickBeep();
        } catch (e) {
          alert(tr('soundError'));
        }
      });

      els.notifBtn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
          alert(tr('notifUnsupported'));
          return;
        }
        const permission = await Notification.requestPermission();
        notificationsEnabled = permission === 'granted';
        localStorage.setItem('tt-active-notif', notificationsEnabled ? 'true' : 'false');
        els.notifBtn.textContent = notificationsEnabled ? tr('btnNotifOn') : tr('btnNotifBlocked');
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
      els.todoCompactBtn.addEventListener('click', toggleTodoCompact);
      els.todoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addTodoFromInput();
      });
      if (els.langSelect) {
        els.langSelect.addEventListener('change', () => {
          currentLanguage = els.langSelect.value;
          saveLanguage(currentLanguage);
          applyLanguage();
          renderAll();
          renderTodos();
        });
      }
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
          stopTitleFlash();
        }
      });
      window.addEventListener('focus', () => {
        stopTitleFlash();
      });
    }

    
    function placeTodoCard() {
      const todoCard = document.getElementById('todoCard');
      const summaryCard = document.getElementById('summaryCard');
      const strengthCard = document.getElementById('strengthCard');
      if (!todoCard || !summaryCard || !strengthCard) return;

      if (todoCompact) {
        if (strengthCard.parentNode) {
          strengthCard.parentNode.insertBefore(todoCard, strengthCard);
        }
      } else {
        if (summaryCard.parentNode) {
          summaryCard.parentNode.insertBefore(todoCard, summaryCard);
        }
      }
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


    function loadTodoCompact() {
      return localStorage.getItem('tt-active-todo-compact') === 'true';
    }

    function saveTodoCompact() {
      localStorage.setItem('tt-active-todo-compact', todoCompact ? 'true' : 'false');
    }

    function applyTodoCompact() {
      if (!els.app || !els.todoCompactBtn) return;
      els.app.classList.toggle('todo-compact', !!todoCompact);
      els.todoCompactBtn.textContent = todoCompact ? tr('todoCompactOn') : tr('todoCompactOff');
    }

    function toggleTodoCompact() {
      todoCompact = !todoCompact;
      saveTodoCompact();
      applyTodoCompact();
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
        empty.textContent = tr('todoEmpty');
        els.todoList.appendChild(empty);
        return;
      }

      todoItems.forEach(item => {
        const row = document.createElement('div');
        row.className = 'todo-item' + (item.done ? ' done' : '') + (todoCompact ? ' compact-card' : '');
        row.draggable = true;
        row.dataset.id = item.id;

        row.addEventListener('dragstart', () => {
          row.classList.add('dragging');
        });
        row.addEventListener('dragend', () => {
          row.classList.remove('dragging');
          saveTodos();
          renderTodos();
        });
        row.addEventListener('dragover', (e) => {
          e.preventDefault();
          const dragging = els.todoList.querySelector('.dragging');
          if (!dragging || dragging === row) return;
          const rect = row.getBoundingClientRect();
          const after = e.clientY > rect.top + rect.height / 2;
          els.todoList.insertBefore(dragging, after ? row.nextSibling : row);
        });

        const handle = document.createElement('div');
        handle.className = 'todo-handle';
        handle.textContent = '⋮⋮';

        const check = document.createElement('input');
        check.type = 'checkbox';
        check.checked = item.done;
        check.addEventListener('change', () => toggleTodo(item.id));

        const textWrap = document.createElement('div');
        textWrap.style.flex = '1';
        const textSpan = document.createElement('span');
        textSpan.className = 'todo-text';
        textSpan.textContent = item.text;
        textWrap.appendChild(textSpan);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'todo-remove';
        removeBtn.type = 'button';
        removeBtn.textContent = tr('deleteBtn');
        removeBtn.addEventListener('click', () => removeTodo(item.id));

        row.appendChild(handle);
        row.appendChild(check);
        row.appendChild(textWrap);
        row.appendChild(removeBtn);
        els.todoList.appendChild(row);
      });

      persistTodoOrderFromDOM();
    }

    function persistTodoOrderFromDOM() {
      if (!els.todoList) return;
      const ids = [...els.todoList.querySelectorAll('.todo-item[data-id]')].map(el => el.dataset.id);
      if (!ids.length) return;
      const byId = new Map(todoItems.map(item => [item.id, item]));
      todoItems = ids.map(id => byId.get(id)).filter(Boolean);
      saveTodos();
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
      els.soundBtn.textContent = soundEnabled ? tr('btnSoundOn') : tr('btnEnableSound');
      els.notifBtn.textContent = notificationsEnabled ? tr('btnNotifOn') : tr('btnEnableNotifications');
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
        label.appendChild(document.createTextNode(shortDayNames()[day]));
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
        btn.textContent = `${shortDayNames()[date.getDay()]} ${date.getDate()}`;
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

    
    function getMovementPool(cfg) {
      const easyNames = new Set(['Piernas + pecho', 'Desentumecer total', 'Caminata corta + movilidad']);
      if (cfg.randomness === 'soft') {
        return MOVEMENT_TEMPLATES.filter(t => easyNames.has(t.name));
      }
      return MOVEMENT_TEMPLATES;
    }

    function getStrengthPool(cfg) {
      if (cfg.randomness === 'soft') {
        return STRENGTH_TEMPLATES.filter(t => t.name !== 'Pierna + core');
      }
      return STRENGTH_TEMPLATES;
    }


function generateDayPlan(date, cfg, rng, includeStrength) {
      const start = atTime(date, cfg.startTime);
      const end = atTime(date, cfg.endTime);
      const lunchStart = atTime(date, cfg.lunchStart);
      const lunchEnd = new Date(lunchStart.getTime() + cfg.lunchMinutes * 60000);

      const sitDuration = Math.max(20, Number(cfg.sitMinutes) || 45);
      const standDuration = Math.max(5, Number(cfg.standMinutes) || 20);
      const moveDuration = Math.max(3, Number(cfg.moveMinutes) || 5);

      const phaseDefs = [
        { type: 'sit', title: 'Trabajo sentada', description: 'Bloque de foco. Cambia postura al terminar.', minutes: sitDuration },
        { type: 'stand', title: 'Trabajo de pie', description: 'Sube el escritorio, apoya bien los pies y relaja hombros.', minutes: standDuration },
        { type: 'move', title: 'Movimiento', description: 'Bloque corto para movilidad y activación.', minutes: moveDuration }
      ];

      const movementPool = getMovementPool(cfg).filter(t => cfg.allowWalk || !t.name.toLowerCase().includes('caminata'));
      const events = [];
      let cursor = new Date(start);
      let counter = 0;
      let phaseIndex = 0;
      let remainingMinutes = phaseDefs[0].minutes;

      while (cursor < end) {
        if (cursor >= lunchStart && cursor < lunchEnd) {
          events.push(makeEvent(cursor, lunchEnd, 'lunch', 'Comida', 'Comida y descanso. No hace falta forzar paseo aquí.', null, counter++));
          cursor = new Date(lunchEnd);
          continue;
        }

        const phase = phaseDefs[phaseIndex];
        const nextBoundary = cursor < lunchStart ? lunchStart : end;
        const phaseTargetEnd = addMinutes(cursor, remainingMinutes);
        const segmentEnd = new Date(Math.min(phaseTargetEnd.getTime(), nextBoundary.getTime(), end.getTime()));

        if (segmentEnd <= cursor) break;

        const segmentMinutes = Math.max(1, Math.round((segmentEnd - cursor) / 60000));

        if (phase.type === 'move') {
          const moveTemplate = cloneTemplate(movementPool[Math.floor(rng() * movementPool.length)]);
          moveTemplate.steps = scaleSteps(moveTemplate.steps, segmentMinutes * 60);
          events.push(makeEvent(cursor, segmentEnd, 'move', moveTemplate.name, moveTemplate.description, moveTemplate, counter++));
        } else {
          events.push(makeEvent(cursor, segmentEnd, phase.type, phase.title, phase.description, null, counter++));
        }

        remainingMinutes -= segmentMinutes;
        cursor = new Date(segmentEnd);

        if (remainingMinutes <= 0) {
          phaseIndex = (phaseIndex + 1) % phaseDefs.length;
          remainingMinutes = phaseDefs[phaseIndex].minutes;
        }
      }

      let strength = null;
      if (includeStrength) {
        const strengthPool = getStrengthPool(cfg);
        const template = cloneTemplate(strengthPool[Math.floor(rng() * strengthPool.length)]);
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
        els.todayLabel.textContent = tr('dayError');
        els.shownDay.textContent = tr('noDay');
        els.shownDaySub.textContent = tr('regenerateHint');
        return;
      }

      const date = new Date(selectedDayKey + 'T12:00:00');
      els.shownDay.textContent = `${capitalize(dayNames()[date.getDay()])} ${date.getDate()}/${date.getMonth() + 1}`;
      els.shownDaySub.textContent = selectedDayKey === toDateKey(getNow()) ? tr('shownDayReal') : tr('shownDaySelected');
      els.todayLabel.textContent = `${tr('todayLabelPrefix')} ${capitalize(dayNames()[date.getDay()])}.`;

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
            <div class="event-title">${translateEvent(evt).title}</div>
            <div class="small">${translateEvent(evt).description}</div>
          </div>
          <div class="tag ${WORK_TAGS[evt.type].cls}">${workTagLabel(evt.type)}</div>
        `;
        els.timeline.appendChild(row);
      });

      renderStats(day);
      const parts = [];
      if (day.fitboxing) parts.push(currentLanguage === 'en' ? 'This day includes gym.' : 'Este día tienes gimnasio.');
      if (day.strength) parts.push(currentLanguage === 'en' ? `The app adds an extra strength session: ${translateEvent(day.strength).title}.` : `La app te mete una sesión extra de fuerza: ${day.strength.title}.`);
      if (!day.fitboxing && !day.strength) parts.push(currentLanguage === 'en' ? 'This day is all about breaks, standing blocks, and movement.' : 'Este día solo toca clavar pausas, bloques de pie y movimiento.');
      parts.push(currentLanguage === 'en' ? `Your blocks follow your exact base: ${settings.sitMinutes ?? 45} min sitting, ${settings.standMinutes ?? 20} min standing, and ${settings.moveMinutes ?? 5} min of movement.` : `Los bloques siguen exactamente tu base: ${settings.sitMinutes ?? 45} min sentada, ${settings.standMinutes ?? 20} min de pie y ${settings.moveMinutes ?? 5} min de movimiento.`);
      parts.push(settings.allowWalk ? (currentLanguage === 'en' ? 'Short walks are allowed, so they may appear inside movement blocks.' : 'Has permitido caminatas cortas, así que pueden aparecer dentro de los bloques de movimiento.') : (currentLanguage === 'en' ? 'Short walks are off, so the app sticks to mobility and activation without walking.' : 'No has activado caminatas cortas, así que la app tira de movilidad y activación sin paseo.'));
      parts.push(currentLanguage === 'en' ? 'Exercise variation does not change block duration. It only changes the type and variety of movements.' : 'La variación de ejercicios no cambia la duración de los bloques. Solo cambia el tipo y la variedad de movimientos.');
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
            <div class="event-time">${shortDayNames()[date.getDay()]}</div>
            <div>
              <div class="event-title">${translateEvent(plan.strength).title}</div>
              <div class="small">${formatHM(new Date(plan.strength.start))} ${currentLanguage === 'en' ? 'to' : 'a'} ${formatHM(new Date(plan.strength.end))}. ${translateEvent(plan.strength).description}</div>
            </div>
            <div class="tag strength">${tr('strengthTag')}</div>
          `;
        } else {
          row.innerHTML = `
            <div class="event-time">${shortDayNames()[date.getDay()]}</div>
            <div>
              <div class="event-title">${tr('noExtraSession')}</div>
              <div class="small">${plan.fitboxing ? tr('gymThatDay') : tr('noStrengthDay')}</div>
            </div>
            <div class="tag ${plan.fitboxing ? 'move' : 'lunch'}">${plan.fitboxing ? tr('gymTag') : tr('freeTag')}</div>
          `;
        }
        els.strengthTimeline.appendChild(row);
      });
      if (!hasAny) {
        const div = document.createElement('div');
        div.className = 'notice';
        div.textContent = tr('allGymNotice');
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
        [tr('statLabels')[0], `${sit} min`],
        [tr('statLabels')[1], `${stand} min`],
        [tr('statLabels')[2], `${move} min`],
        [tr('statLabels')[3], `${strength} min`]
      ].forEach(([label, value]) => {
        const div = document.createElement('div');
        div.className = 'stat';
        div.innerHTML = `<div class="label">${label}</div><div class="value">${value}</div><div class="small">${tr('totalPlanned')}: ${total} min</div>`;
        els.stats.appendChild(div);
      });
    }

    function startClock() {
      if (clockInterval) clearInterval(clockInterval);
      clockInterval = setInterval(updateLiveState, 1000);
    }


    function setBaseTabTitle(text) {
      if (titleFlashInterval) {
        window.__ttBaseTitle = text;
        return;
      }
      window.__ttBaseTitle = text;
      document.title = text;
    }

    function updateTabTitle(state, payload = {}) {
      if (state === 'preview') {
        setBaseTabTitle(`${tr('tabPreview')} · ${tr('heroTitle')}`);
        return;
      }
      if (state === 'before') {
        setBaseTabTitle(`${tr('tabBefore')} ${payload.time || '--:--'} · ${tr('heroTitle')}`);
        return;
      }
      if (state === 'after') {
        setBaseTabTitle(`${tr('tabEnded')} · ${tr('heroTitle')}`);
        return;
      }
      if (state === 'current') {
        setBaseTabTitle(`${payload.timeLeft || '--:--'} · ${payload.title || tr('labelCurrentPhase')}`);
      }
    }

    function updateLiveState() {
      if (!weekPlan || !selectedDayKey || !weekPlan.days[selectedDayKey]) return;

      const now = getNow();
      const todayKey = toDateKey(now);
      const info = getCurrentInfo(now, selectedDayKey);
      const selectedDate = new Date(selectedDayKey + 'T12:00:00');
      const isToday = selectedDayKey === todayKey;

      if (!isToday) {
        els.currentPhase.textContent = tr('preview');
        els.currentDescription.textContent = tr('previewDesc');
        els.timeLeft.textContent = '--:--';
        els.nextPhase.textContent = `${tr('nextBlock')}: ${tr('preview').toLowerCase()}`;
        els.nextAlarm.textContent = '--:--';
        els.alarmDescription.textContent = currentLanguage === 'en' ? `Shown day: ${capitalize(dayNames()[selectedDate.getDay()])}.` : `Día mostrado: ${capitalize(dayNames()[selectedDate.getDay()])}.`;
        setTimer(0, 1, tr('preview'));
        refreshTimelineCurrent(now, null);
        const previewEvent = weekPlan.days[selectedDayKey].events.find(evt => evt.type === 'move') || weekPlan.days[selectedDayKey].strength || weekPlan.days[selectedDayKey].events[0];
        const localizedPreviewEvent = previewEvent ? translateEvent({ ...previewEvent, start: new Date(previewEvent.start), end: new Date(previewEvent.end) }) : null;
        renderGuided(localizedPreviewEvent, new Date(previewEvent ? previewEvent.start : Date.now()), true);
        updateTabTitle('preview');
        return;
      }

      if (!info.currentEvent) {
        const firstEvent = info.events[0] || null;
        const lastEvent = info.events.length ? info.events[info.events.length - 1] : null;
        const beforeStart = firstEvent && now < firstEvent.start;
        els.currentPhase.textContent = beforeStart ? tr('beforeStart') : tr('outOfHours');
        els.currentDescription.textContent = beforeStart ? tr('waitingDay') : tr('dayFinished');
        els.timeLeft.textContent = '--:--';
        els.nextPhase.textContent = info.nextEvent ? `${tr('nextBlock')}: ${translateEvent(info.nextEvent).title}` : `${tr('nextBlock')}: ${tr('noBlocks')}`;
        els.nextAlarm.textContent = info.nextEvent ? formatHM(info.nextEvent.start) : '--:--';
        els.alarmDescription.textContent = info.nextEvent ? describeEvent(info.nextEvent) : (lastEvent ? (currentLanguage === 'en' ? `Last block finished at ${formatHM(lastEvent.end)}.` : `Último bloque terminado a las ${formatHM(lastEvent.end)}.`) : (currentLanguage === 'en' ? 'No blocks.' : 'Sin bloques.'));
        setTimer(0, 1, beforeStart ? tr('timerBefore') : tr('timerEnded'));
        refreshTimelineCurrent(now, null);
        const guideEvent = beforeStart && info.nextEvent ? translateEvent(info.nextEvent) : null;
        renderGuided(guideEvent, now, !!beforeStart);
        updateTabTitle(beforeStart ? 'before' : 'after', { time: info.nextEvent ? formatHM(info.nextEvent.start) : '--:--' });
        return;
      }

      const current = info.currentEvent;
      const timeLeftMs = current.end - now;
      const totalMs = current.end - current.start;
      const localizedCurrent = translateEvent(current);
      els.currentPhase.textContent = localizedCurrent.title;
      els.currentDescription.textContent = localizedCurrent.description;
      els.timeLeft.textContent = formatMMSS(Math.max(0, Math.floor(timeLeftMs / 1000)));
      els.nextPhase.textContent = info.nextEvent ? `${tr('nextBlock')}: ${translateEvent(info.nextEvent).title}` : `${tr('nextBlock')}: ${tr('endOfDay')}`;
      els.nextAlarm.textContent = formatHM(current.end);
      els.alarmDescription.textContent = info.nextEvent ? describeEvent(info.nextEvent) : (currentLanguage === 'en' ? 'The workday is ending.' : 'Se acaba la jornada.');
      setTimer(Math.max(0, totalMs - timeLeftMs), totalMs, localizedCurrent.title);
      refreshTimelineCurrent(now, current.id);
      maybeAlarm(current);
      renderGuided(localizedCurrent, now, false);
      updateTabTitle('current', { timeLeft: formatMMSS(Math.max(0, Math.floor(timeLeftMs / 1000))), title: localizedCurrent.title });
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
        const utter = new SpeechSynthesisUtterance(`${tr('speechPrefix')}. ${title}`);
        utter.lang = currentLanguage === 'en' ? 'en-US' : 'es-ES';
        utter.rate = 1;
        utter.volume = 1;
        window.speechSynthesis.speak(utter);
      } catch {}
    }

    function startTitleFlash(title) {
      stopTitleFlash();
      let on = false;
      titleFlashInterval = setInterval(() => {
        document.title = on ? `⏰ ${title}` : (window.__ttBaseTitle || BASE_TITLE);
        on = !on;
      }, 800);
    }

    function stopTitleFlash() {
      if (titleFlashInterval) clearInterval(titleFlashInterval);
      titleFlashInterval = null;
      document.title = window.__ttBaseTitle || BASE_TITLE;
    }


    function renderGuided(event, now, previewMode) {
      if (!event) {
        els.guidedTitle.textContent = previewMode ? tr('guidedPreview') : tr('noGuidedBlock');
        els.guidedSteps.innerHTML = '';
        paintExerciseDetail(null, previewMode);
        return;
      }

      if (!event.routine || (event.type !== 'move' && event.type !== 'strength')) {
        els.guidedTitle.textContent = event.type === 'stand'
          ? tr('standGuided')
          : event.type === 'sit'
            ? tr('sitGuided')
            : event.type === 'lunch'
              ? tr('lunchGuided')
              : tr('noStepGuided');
        els.guidedSteps.innerHTML = '';
        paintExerciseDetail({
          name: event.title,
          summary: event.description,
          checklist: event.type === 'stand'
            ? tr('standChecklist')
            : event.type === 'sit'
              ? tr('sitChecklist')
              : tr('restChecklist'),
          tip: event.type === 'stand' ? tr('standTip') : tr('generalTip')
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
        let subtitle = tr('blockStep');
        if (isCurrent) {
          right = `${Math.max(0, end - elapsedSec)}s ${tr('secondsLeft')}`;
          subtitle = tr('stepNow');
        } else if (previewMode) {
          subtitle = tr('previewLabel');
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
      return translateInfo(EXERCISE_LIBRARY[name]) || translateInfo({
        name,
        summary: 'Sigue el temporizador y muévete con control. Si un gesto te molesta, recorta rango o cambia a una versión más fácil.',
        checklist: ['Muévete sin dolor agudo.', 'Respira y no corras.', 'Prioriza control sobre cantidad.'],
        tip: 'El objetivo aquí no es sufrir. Es meter movimiento útil.'
      });
    }

    function paintExerciseDetail(info, previewMode, blockType) {
      const fallback = info || {
        name: currentLanguage === 'en' ? (previewMode ? 'Preview' : 'No guided block') : (previewMode ? 'Vista previa' : 'Sin bloque guiado'),
        summary: currentLanguage === 'en' ? (previewMode ? 'Here you will see the main step of the block explained.' : 'When a movement or strength block arrives, this panel explains what to do.') : (previewMode ? 'Aquí verás explicado el paso principal del bloque.' : 'Cuando llegue un bloque de movimiento o fuerza, te explico qué hacer aquí.'),
        checklist: currentLanguage === 'en' ? ['Check the timer.','Follow the active step.','Return to work when it is time.'] : ['Mira el temporizador.', 'Sigue el paso activo.', 'Vuelve al trabajo cuando toque.'],
        tip: currentLanguage === 'en' ? 'Everything is designed so you do not have to improvise.' : 'Todo está pensado para que no tengas que improvisar.'
      };
      els.exerciseName.textContent = fallback.name;
      els.exerciseSummary.textContent = fallback.summary;
      els.exerciseChecklist.innerHTML = '';
      (fallback.checklist || []).forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        els.exerciseChecklist.appendChild(li);
      });
      els.exerciseTip.textContent = fallback.tip || (currentLanguage === 'en' ? 'Move gently and with control.' : 'Hazlo suave y con control.');
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
      const localizedEvt = translateEvent(evt);
      return `${formatHM(evt.start)} · ${localizedEvt.title}`;
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