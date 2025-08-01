// Cookies señuelo con nombres realistas
const cookies = [
  { nombre: "session_id", valor: "a3f1x9e7" },
  { nombre: "auth_token", valor: "Bearer xyz123" },
  { nombre: "user_pref_theme", valor: "dark" },
  { nombre: "analytics_id", valor: "UA-543210" },
  { nombre: "last_login", valor: "2025-07-31T21:32:00Z" },
  { nombre: "language", valor: "es-ES" },
  { nombre: "csrf_token", valor: "R4nd0mT0k3n!" },
  { nombre: "user_type", valor: "admin" },
  { nombre: "tracking_cookie", valor: "enabled" },
  // ¡La verdadera clave!
  { nombre: "clave_secreta", valor: "aitana" }
];

// Creamos todas las cookies
cookies.forEach(c => {
  document.cookie = `${c.nombre}=${encodeURIComponent(c.valor)}; path=/`;
});

