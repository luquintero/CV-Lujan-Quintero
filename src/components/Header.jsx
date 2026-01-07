import LanguageToggle from './LanguageToggle';

export default function Header({
  title,
  subtitle,
  profile,
  lang,
  setLang,
}) {
  const [name, lastName] = title.split(' ');

  return (
    <header className="header">
      <LanguageToggle currentLang={lang} onToggle={setLang} />

      <img
        src="/profile.png"
        alt={title}
        className="profile-picture"
      />

      <div className="header-text">
        <small>{subtitle.toUpperCase()}</small>
        <h1>{name} {lastName}</h1>

        <p className="header-profile-text">{profile.content}</p>

        <ul className="header-interests">
          {profile.interests.map((interest, idx) => (
            <li key={idx} className={`interest ${interest.key}`}>
              {interest.label}
            </li>
          ))}
        </ul>

      </div>
    </header>
  );
}

