interface FlattenResult {
  [key: string]: string;
}

interface JSONObject {
  [key: string]: string | JSONObject;
}

export function flattenKeys(json: JSONObject, prefix = ""): FlattenResult {
  let result: FlattenResult = {};

  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (typeof json[key] === "object" && json[key] !== null) {
        const nested = flattenKeys(json[key] as JSONObject, newKey);
        result = { ...result, ...nested };
      } else {
        result[newKey] = json[key] as string;
      }
    }
  }

  return result;
}
