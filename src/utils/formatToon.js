import { encode } from '@toon-format/toon'





export async function formatToon(value) {
  if (value === undefined || value === null) {
    throw new Error('No content provided to format.');
  }

  try {
    const result= await encode(value)

    return JSON.stringify(result);
  } catch (error) {
    // continue trying different representations
    throw new Error('Formatting failed. Please verify the input JSON.');
  }

}
