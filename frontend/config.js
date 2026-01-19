// Configuración simplificada para GitHub
const CONFIG = {
  github: {
    REPO_OWNER: 'Daniel1976-cyber', // El usuario debe cambiar esto
    REPO_NAME: 'DeFrank1',  // El usuario debe cambiar esto
    FILE_PATH: 'frontend/data/catalog.json',
    API_URL: 'https://api.github.com'
  },
  local: {
    USE_LOCAL_JSON: true,
    CATALOG_PATH: 'data/catalog.json'
  }
};

// Detectar si estamos en local o en GitHub
const IS_LOCAL = window.location.protocol === 'file:' ||
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

// Hacer la configuración global
window.API_CONFIG = IS_LOCAL ? CONFIG.local : CONFIG.github;
window.IS_LOCAL = IS_LOCAL;

console.log('🚀 Modo:', IS_LOCAL ? 'Local' : 'Producción (GitHub)');
