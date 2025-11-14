import { useState } from 'react';

function OutputPanel({
  title,
  description,
  value,
  copyLabel,
  copiedLabel,
  emptyLabel
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <div className="panel output-panel">
      <div className="panel-header">
        <h2>{title}</h2>
        <button
          type="button"
          className="secondary"
          onClick={handleCopy}
          disabled={!value}
        >
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
      <p className="panel-description">{description}</p>
      <pre className="output-area">
        {value ? value : <span className="empty-output">{emptyLabel}</span>}
      </pre>
    </div>
  );
}

export default OutputPanel;
