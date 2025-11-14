import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import LanguageToggle from './components/LanguageToggle.jsx';
import OutputPanel from './components/OutputPanel.jsx';
import { formatToon } from './utils/formatToon.js';
import translations from './utils/translations.js';
import './styles/App.css';

function App() {
  const [language, setLanguage] = useState('en');
  const dd = {
  users: [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' }
  ]
}
  const [input, setInput] = useState(JSON.stringify(dd));
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const t = useMemo(() => translations[language], [language]);
  

  const handleFormat = async () => {
    if (!input.trim()) {
      setError(t.emptyError);
      setOutput('');
      return;
    }

    try {
      // const jsonValue = JSON.parse(input);
      const toonResult =await formatToon(input);
      setOutput(toonResult);
      setError('');
    } catch (err) {
      try {
        const toonResult = await formatToon(input);
        setOutput(toonResult);
        setError('');
      } catch (innerErr) {
        setOutput('');
        setError(innerErr.message || t.generalError);
      }
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  return (
    <div className="app-shell">
      <Header
        title={t.title}
        subtitle={t.subtitle}
        description={t.description}
      />

      <main className="app-content">
        <div className="panel input-panel">
          <div className="panel-header">
            <h2>{t.inputTitle}</h2>
            <LanguageToggle
              value={language}
              onChange={setLanguage}
              labels={translations}
            />
          </div>
          <p className="panel-description">{t.inputDescription}</p>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={t.inputPlaceholder}
            spellCheck={false}
            className="json-textarea"
          />
          <div className="actions">
            <button type="button" className="primary" onClick={handleFormat}>
              {t.formatButton}
            </button>
            <button type="button" className="secondary" onClick={handleClear}>
              {t.clearButton}
            </button>
          </div>
          {
            input && <p>Charecter Count: {input.length}</p>
          }
          {error && <p className="error-message">{error}</p>}
        </div>

        <OutputPanel
          title={t.outputTitle}
          description={t.outputDescription}
          value={output}
          copyLabel={t.copyButton}
          copiedLabel={t.copiedLabel}
          emptyLabel={t.emptyOutput}
        />
      </main>

      <footer className="app-footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
