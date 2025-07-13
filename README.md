# 🎧 Hearo

**Hearo** es un juego web musical donde ponés a prueba tu oído adivinando canciones a partir de un breve preview de audio.  
Jugá solo, con amigos o sumate a la *Canción del Día* para mantener tu racha y competir en el leaderboard.

---

## 🚀 Características

- 🎵 **Preview de canciones** usando la [API de Deezer](https://developers.deezer.com/api)
- 🔠 **Input con autocompletado** para facilitar respuestas
- ⏱️ **Sistema de pistas progresivas** (+1 segundo cada vez que pedís ayuda)
- 🧑‍🤝‍🧑 **Modo multijugador**: conectate a una sala con amigos y competí en tiempo real
- 📆 **Canción del Día** con leaderboard global y sistema de rachas al estilo Duolingo
- 📱 **Diseñado para jugar en grupo**, ideal para conectarse a un parlante y compartir la experiencia

---

## 🧑‍💻 Tecnologías

- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express, Socket.io
- **API:** Deezer Public API
- **Base de datos:** MongoDB (para usuarios, puntajes, rachas y salas)

---

## 📦 Instalación

Cloná el proyecto y ejecutalo localmente:

```bash
git clone https://github.com/tu-usuario/hearo.git
cd hearo

# Instalá frontend y backend
cd client
npm install
cd ../server
npm install

# Ejecutá ambos servidores (en dos terminales)
npm run dev  # en /server
npm run dev  # en /client
