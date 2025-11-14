import toonFormatter from 'toon-format';

function resolveFormatter() {
  if (typeof toonFormatter === 'function') {
    return toonFormatter;
  }

  if (toonFormatter && typeof toonFormatter.format === 'function') {
    return toonFormatter.format.bind(toonFormatter);
  }

  if (toonFormatter && typeof toonFormatter.default === 'function') {
    return toonFormatter.default;
  }

  throw new Error(
    'Unable to locate the Toon formatter function. Please ensure the toon-format package is installed and up to date.'
  );
}

const formatter = (() => {
  try {
    return resolveFormatter();
  } catch (error) {
    return () => {
      throw error;
    };
  }
})();

export function formatToon(value) {
  if (value === undefined || value === null) {
    throw new Error('No content provided to format.');
  }

  const candidates = [];

  if (typeof value === 'string') {
    candidates.push(value);

    try {
      candidates.push(JSON.parse(value));
    } catch (error) {
      // ignore parse errors for fallback attempts
    }
  } else {
    candidates.push(value);
    try {
      candidates.push(JSON.stringify(value));
    } catch (error) {
      // ignore serialization issues
    }
  }

  for (const candidate of candidates) {
    try {
      const result = formatter(candidate);
      if (typeof result === 'string') {
        return result;
      }

      return JSON.stringify(result, null, 2);
    } catch (error) {
      // continue trying different representations
    }
  }

  throw new Error('Formatting failed. Please verify the input JSON.');
}
