# Teletrabajo Activo

Web app sencilla para organizar una jornada de teletrabajo con bloques de trabajo sentada, trabajo de pie, pausas de movimiento, sesiones cortas de fuerza, cronómetro visible, alarmas y una to do list arrastrable.

Está pensada para dejarla abierta en una pestaña mientras trabajas. El título de la pestaña muestra la cuenta atrás del bloque actual para que puedas ver cuánto queda sin volver a entrar.

## Qué hace

- Genera una semana de lunes a viernes
- Alterna bloques de sentada, de pie y movimiento
- Añade sesiones extra de fuerza en días sin gimnasio
- Permite activar caminatas cortas
- Tiene varios niveles de aleatoriedad
- Muestra cronómetro, siguiente bloque y bloque activo
- Incluye alarmas con sonido, voz, título parpadeando y avisos visuales
- Incluye to do list con tachado, borrado, arrastrar y reordenar
- Tiene modo compacto lateral para dejar la lista fija mientras trabajas

## Cómo usarlo

### Opción 1: usar la web publicada

La forma más simple. Abre el [enlace publicado](https://elisarodriguez0.github.io/teletrabajo-activo/) en GitHub Pages y deja la pestaña abierta mientras trabajas.

Este proyecto funciona como sitio estático. No necesita servidor, build ni dependencias.

Pasos recomendados:

1. Pulsa **Activar sonido**
2. Ajusta tu horario
3. Marca tus días de gimnasio
4. Pulsa **Guardar y regenerar semana**
5. Deja la pestaña abierta durante la jornada

Ventajas:
- No hay que instalar nada
- No hay que tocar código
- Funciona en cualquier navegador moderno de escritorio


### Opción 2: Forkeando el repo

Si alguien quiere tener su propia copia, puede hacer un fork del repositorio, activar GitHub Pages en su fork y usar su propia URL.

Esto sirve si quieres:
- cambiar textos
- modificar estilos
- tocar horarios por defecto
- cambiar ejercicios o bloques

### Opción 3: Descargando los archivos

También puedes descargar `index.html`, `styles.css` y `app.js` y abrir `index.html` en local en tu ordenador.

## Personalización rápida

Sin tocar código, cada persona puede cambiar desde la interfaz:

- hora de inicio
- hora de fin
- hora y duración de la comida
- número de sesiones de fuerza por semana
- nivel de aleatoriedad
- permitir o no caminatas cortas
- días de gimnasio
- avisos de alarma
- modo compacto lateral de la to do list

La configuración y la to do list se guardan en el navegador mediante `localStorage`, así que cada usuario conserva sus ajustes en su propio dispositivo.

## Limitaciones reales

- Es una web, no una app nativa
- El sonido y los avisos dependen del navegador y de que la pestaña siga abierta
- Algunos navegadores limitan avisos o notificaciones si la pestaña no está activa
- En móvil puede funcionar, pero está pensada sobre todo para escritorio

## Tecnologías

- HTML
- CSS
- JavaScript puro
- Sin frameworks
- Sin dependencias

## Ideas de mejora

- exportar/importar configuración
- temas visuales
- estadísticas semanales
- más bibliotecas de ejercicios
- presets de jornada

## Ajustes de bloques

Por defecto, la app usa bloques de 45 minutos sentada, 20 minutos de pie y 5 minutos de movilidad. Ahora estos tiempos se pueden cambiar desde los ajustes.
