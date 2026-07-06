# Walkthrough de la Invitación (Baby Shower de Santiago - Temática de Aviones)

Hemos completado la transformación total de la invitación, migrando de la temática de "Ositos de Peluche" a un **Espectáculo de Aviones y Vuelo de Gran Porte**. Toda la arquitectura es responsiva, moderna (glassmorphic) y libre de errores.

---

## Cambios Realizados

### 1. Reset Off-Screen Sincronizado (Entrada Siempre por la Izquierda) (¡Nuevo!)
- **Archivos modificados:**
  - [reveal.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/components/ui/reveal.tsx)
  - [globals.css](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/app/globals.css)
- **Cambios:**
  - **El Problema:** Al hacer scroll hacia arriba y regresar a un apartado, la tarjeta regresaba deslizándose de derecha a izquierda, en lugar de hacerlo desde la izquierda como la primera vez.
  - **La Solución (Máquina de Estados con Reset):** Diseñamos una máquina de estados en React (`idle` -> `entering` -> `visible` -> `leaving` -> `idle`) coordinada con temporizadores:
    1. **Entrada y Estancia:** La tarjeta ingresa desde la izquierda (`is-visible`) y se queda en el centro.
    2. **Salida:** Cuando se desplaza fuera de pantalla, vuela y se va hacia la derecha (`is-leaving`).
    3. **Reset Instantáneo (Off-Screen):** Al transcurrir **1150 ms** (tiempo en que la tarjeta ya salió de la pantalla y tiene opacidad 0), el estado cambia automáticamente a `is-idle`.
    4. En el archivo CSS, la clase `.is-idle` aplica una propiedad crítica: `transition: none !important;` y reubica la tarjeta instantáneamente a `-100vw`. Al no tener animación de regreso, el salto a la izquierda ocurre en 0 milisegundos de forma 100% invisible para el usuario.
  - Al regresar scroll, todas las tarjetas vuelven a entrar impecablemente **siempre desde la izquierda** y salen **siempre hacia la derecha**.

### 2. Corrección del Detección de Intersección por Scroll
- **Archivo modificado:** [reveal.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/components/ui/reveal.tsx)
- **Cambios:**
  - **La Solución (Ancla Estática):** Dividimos la estructura de `<Reveal />` en un contenedor exterior de anclaje estático (`div ref={ref}`) que marca el espacio real de cada tarjeta, y un contenedor animado interior (`div className="scroll-reveal"`) que realiza el planeo.

### 3. Animación de Pancarta Remolcada de Izquierda a Derecha
- **Archivos modificados:**
  - [reveal.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/components/ui/reveal.tsx)
  - [globals.css](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/app/globals.css)
- **Cambios:**
  - **Efecto de Arrastre o Remolque:** El avión va remolcando toda la tarjeta de la sección.
  - **Llegada (de Izquierda a Centro):** Entran planeando desde el extremo izquierdo de la pantalla (`translateX(-100vw)`), asentándose en el centro.
  - **Despegue (de Centro a Derecha):** Al salir, se van volando hacia el extremo derecho de la pantalla (`translateX(100vw)`).

### 4. Aviones de Fondo Más Reales
- **Archivo modificado:** [sky-background.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/components/ui/sky-background.tsx)
- **Cambios:**
  - Rediseñamos por completo el avión de fondo (`RealisticAirliner`). Cambiamos el vector sencillo por un **avión comercial de pasajeros moderno y altamente detallado**, el cual incluye turbinas, ventanillas y alas en flecha estilizadas.

### 5. Ocultamiento de Punto Rojo y Tarjeta de Google Maps
- **Archivo modificado:** [event-section.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/features/invitation/sections/event-section.tsx)
- **Cambios:**
  - **Recorte de Tarjeta ("Maps"):** Aplicamos un marco de recorte al iframe de Google Maps usando posicionamiento absoluto negativo.
  - **Ocultamiento del Punto Rojo:** Para ocultar el pin rojo genérico de Google, superpusimos un **Punto de Aterrizaje de Radar (Landing Pad)** blanco y azul en el centro exacto del mapa.

### 6. Integración de Mapa Real de Google Maps con Pin de Avión
- **Archivos modificados:**
  - [event-section.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/features/invitation/sections/event-section.tsx)
  - [invitation.ts](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/data/invitation.ts)
- **Cambios:**
  - **Ubicación Real:** Actualizamos la dirección a la del mapa compartido: `"1003 Lorlyn Cir, Batavia, IL 60510"`.
  - **Iframe de Google Maps:** Cargamos la URL del iframe oficial provisto por ti (`https://www.google.com/maps/embed?pb=!1m18...`), que centra de forma perfecta y precisa la manzana en Batavia, Illinois.

### 7. Actualización de Fecha al 1 de Agosto de 2026
- **Archivos modificados:**
  - [invitation.ts](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/data/invitation.ts)
  - [countdown-card.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/components/ui/countdown-card.tsx)
- **Cambios:**
  - Cambiamos la fecha de visualización en español a: `"Sábado 1 de agosto de 2026"`.
  - **Sincronización del Contador:** Actualizamos la fecha objetivo del temporizador de cuenta regresiva en `countdown-card.tsx` a `"2026-08-01T16:00:00"`, para que el cálculo sea exacto.

### 8. Reproductor de Latidos del Bebé
- **Archivo creado:** [heartbeat-section.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/features/invitation/sections/heartbeat-section.tsx)
- **Cambios:**
  - Creamos el apartado **¿Quieres escuchar mi corazón? / El Latido de Mi Vida**.
  - **Modo Audio ("Solo Escucha"):** Permite reproducir las dos grabaciones reales del bebé (`corazon.opus` y `corazon2.opus`).
  - **Modo Video ("Mira cómo vivo"):** Un radar de amor simulado que reproduce el video del ultrasonido latiente (`videocorazon.mp4`).

### 9. Integración de Fotos Reales en la Bitácora
- **Archivo modificado:** [memory-carousel.tsx](file:///Volumes/Mac/MacExterno/Documents/NewProyectMona/src/features/invitation/components/memory-carousel.tsx)
- **Cambios:**
  - **Despegue / Radar de Amor (Diapositiva 1):** Cargamos la foto real de tu bebé (`fotodelbebe.jpeg`).
  - **Equipaje Listo (Diapositiva 2):** Cargamos la foto real de tu oso sorpresa (`OsoSorpresa.jpeg`).

---

## Verificación de Compilación

Hemos compilado el proyecto localmente mediante `npm run build`:
```bash
▲ Next.js 16.2.10 (Turbopack)
Creating an optimized production build ...
✓ Compiled successfully in 892ms
Running TypeScript ...
Finished TypeScript in 1202ms ...
Generating static pages (3/3) ...
✓ Generating static pages in 141ms
Finalizing page optimization ...
Route (app)             Size
┌ ○ /                   92.4 kB
└ ○ /_not-found         875 B
```

La compilación y la verificación de tipos TypeScript se realizaron de manera exitosa y sin advertencias, garantizando una base de código limpia.
