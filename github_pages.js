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
  { nombre: "rgm_14", valor: "YWl0YW5h" },
  { nombre: "page_intro_skipped", valor: "true" },
  { nombre: "preferred_theme", valor: "dark" },
  { nombre: "visited_sections", valor: "home,about,faq" },
  { nombre: "challenge_attempts", valor: "4" },
  { nombre: "last_hint_unlocked", valor: "clue3" }
];

cookies.forEach(c => {
  document.cookie = `${c.nombre}=${encodeURIComponent(c.valor)}; path=/`;
});


