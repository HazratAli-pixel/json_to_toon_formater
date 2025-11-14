function LanguageToggle({ value, onChange, labels }) {
  return (
    <div className="language-toggle">
      {Object.entries(labels).map(([key, translation]) => (
        <button
          key={key}
          type="button"
          className={value === key ? 'active' : ''}
          onClick={() => onChange(key)}
        >
          {translation.languageName}
        </button>
      ))}
    </div>
  );
}

export default LanguageToggle;
