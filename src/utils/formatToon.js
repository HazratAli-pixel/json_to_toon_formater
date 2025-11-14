import { encode } from '@toon-format/toon'





export async function formatToon(value) {
  if (value === undefined || value === null) {
    throw new Error('No content provided to format.');
  }

  try {
    console.log(value)
    
    const result= await encode(JSON.parse(value))
    console.log(result)

    return JSON.stringify(result);
  } catch (error) {
    // continue trying different representations
    throw new Error('Formatting failed. Please verify the input JSON.');
  }

}
