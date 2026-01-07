export default function LanguageToggle({ currentLang, onToggle }) {
  return (
    <div className="language-toggle">
      <button
        className={currentLang === 'en' ? 'active' : ''}
        onClick={() => onToggle('en')}
        aria-label="Change language to English"
      >
        🇬🇧 EN
      </button>

      <button
        className={currentLang === 'es' ? 'active' : ''}
        onClick={() => onToggle('es')}
        aria-label="Cambiar idioma a Español"
      >
        🇪🇸 ES
      </button>
    </div>
  );
}
