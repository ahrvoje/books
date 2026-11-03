// Lossless storage for JSON data. The application still receives ordinary records.
export function packDataset(dataset) {
  // Match JSON serialization of optional properties and array entries.
  const value = JSON.parse(JSON.stringify(dataset)), unique = new Set();
  function collect(v) {
    if (typeof v === 'string') unique.add(v);
    else if (v && typeof v === 'object') Object.values(v).forEach(collect);
  }
  collect(value);
  const strings = [...unique].sort(), ids = new Map(strings.map((s, i) => [s, i.toString(36)]));
  const schemas = [], shapes = new Map();
  function encode(v) {
    if (typeof v === 'string') return ids.get(v);
    if (!v || typeof v !== 'object') return v;
    if (Array.isArray(v)) {
      const rows = v.map(encode), shape = rows[0]?.[0];
      // Negative tags store homogeneous record arrays by column, including their length.
      if (rows.length > 1 && Number.isInteger(shape) && shape > 0 && rows.every(r => Array.isArray(r) && r[0] === shape)) {
        return [-shape, rows.length, ...schemas[shape - 1].map((_, i) => rows.map(row => row[i + 1]))];
      }
      return [0, ...rows];
    }
    const keys = Object.keys(v), signature = JSON.stringify(keys);
    let shape = shapes.get(signature);
    if (shape === undefined) {
      shape = schemas.length + 1;
      shapes.set(signature, shape); schemas.push(keys);
    }
    return [shape, ...Object.values(v).map(encode)];
  }
  const root = encode(value);
  // Nearby dictionary entries share exact prefixes; do not normalize their text.
  const dictionary = strings.map((s, i) => {
    const previous = strings[i - 1] || '';
    let length = 0;
    while (length < s.length && length < previous.length && s[length] === previous[length]) length++;
    return length > 5 ? [length, s.slice(length)] : s;
  });
  return { version: 1, schemas, strings: dictionary, root };
}

export function unpackDataset(packed) {
  if (packed.version !== 1) throw new Error('Unsupported catalog packing version');
  const strings = [];
  for (const entry of packed.strings) {
    strings.push(Array.isArray(entry) ? strings[strings.length - 1].slice(0, entry[0]) + entry[1] : entry);
  }
  function decode(v) {
    if (typeof v === 'string') return strings[parseInt(v, 36)];
    if (!Array.isArray(v)) return v;
    const [shape] = v;
    if (shape === 0) return v.slice(1).map(decode);
    if (shape < 0) {
      return Array.from({ length: v[1] }, (_, row) => Object.fromEntries(
        packed.schemas[-shape - 1].map((key, column) => [key, decode(v[column + 2][row])])
      ));
    }
    return Object.fromEntries(packed.schemas[shape - 1].map((key, i) => [key, decode(v[i + 1])]));
  }
  return decode(packed.root);
}
