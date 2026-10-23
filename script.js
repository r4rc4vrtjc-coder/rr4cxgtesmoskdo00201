* {
  box-sizing: border-box;
}

:root {
  --bg: #020305;
  --panel: rgba(13, 16, 21, 0.82);
  --panel-soft: rgba(19, 22, 28, 0.9);
  --text: #f5f5f5;
  --muted: #b8b8b8;
  --accent: #f0f0f0;
  --line: rgba(255, 255, 255, 0.18);
  --dot: rgba(255, 255, 255, 0.8);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--bg);
  color: var(--text);
}

body {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px 30px;
  overflow-x: hidden;
}

.stars {
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(circle, rgba(255,255,255,0.9) 0 1px, transparent 1.5px),
    radial-gradient(circle, rgba(255,255,255,0.72) 0 1.2px, transparent 2px),
    radial-gradient(circle, rgba(255,255,255,0.6) 0 1px, transparent 2px);
  background-size: 200px 200px;
  background-position: 0 0, 80px 100px, 120px 30px;
  opacity: 0.8;
  pointer-events: none;
  animation: twinkle 7s ease-in-out infinite alternate;
}

.stars::before,
.stars::after {
  content: "";
  position: absolute;
  inset: -20% -10%;
  background: transparent;
  pointer-events: none;
}

.stars::before {
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255,255,255,0.14) 40%,
    transparent 72%
  );
  transform: rotate(-18deg);
  animation: comet 16s linear infinite;
}

.stars::after {
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255,255,255,0.12) 35%,
    transparent 68%
  );
  transform: rotate(14deg) translateX(-20px);
  animation: comet2 20s linear infinite;
}

.app {
  position: relative;
  width: min(1000px, 100%);
  z-index: 1;
}

.title-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.title {
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 900;
  letter-spacing: -0.08em;
  line-height: 0.9;
  color: #ffffff;
  text-shadow: 0 0 18px rgba(255,255,255,0.32);
  transform: scaleY(0.9);
}

.search-panel {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.engine-select-wrap {
  width: min(220px, 100%);
}

#engineSelect {
  width: 100%;
  background: rgba(17, 18, 22, 0.75);
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--text);
  padding: 10px 16px;
  font-size: 0.95rem;
  outline: none;
}

.search-box {
  display: flex;
  width: min(800px, 100%);
  padding: 8px 10px 8px 18px;
  border-radius: 999px;
  background: rgba(17, 18, 22, 0.7);
  border: 1px solid var(--line);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(6px);
}

#searchInput {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  color: var(--text);
  font-size: clamp(1rem, 2vw, 1.2rem);
  padding: 12px 16px 12px 0;
  outline: none;
}

#searchInput::placeholder {
  color: rgba(255,255,255,0.52);
}

button {
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.06);
  color: var(--text);
  border-radius: 999px;
  padding: 12px 22px;
  font-size: 0.96rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

button:hover {
  background: rgba(255,255,255,0.12);
  transform: translateY(-1px);
}

.results-wrap {
  margin-top: 26px;
  width: 100%;
  min-height: 72vh;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: inset 0 0 30px rgba(255,255,255,0.02);
}

#resultsFrame {
  width: 100%;
  min-height: 72vh;
  background: #ffffff;
  border: none;
  display: block;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes twinkle {
  0% { opacity: 0.7; transform: scale(1); }
  100% { opacity: 1; transform: scale(1.04); }
}

@keyframes comet {
  0% {
    transform: translateX(-18vw) translateY(-12vh) rotate(-18deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  45% {
    opacity: 0.35;
  }
  100% {
    transform: translateX(48vw) translateY(28vh) rotate(-18deg);
    opacity: 0;
  }
}

@keyframes comet2 {
  0% {
    transform: translateX(-25vw) translateY(10vh) rotate(14deg);
    opacity: 0;
  }
  14% {
    opacity: 0.9;
  }
  75% {
    opacity: 0.25;
  }
  100% {
    transform: translateX(38vw) translateY(-18vh) rotate(14deg);
    opacity: 0;
  }
}

@media (max-width: 640px) {
  body {
    padding-top: 28px;
  }

  .search-box {
    padding-left: 12px;
  }

  #searchInput {
    padding-right: 8px;
  }

  button {
    padding: 11px 16px;
  }
}
