export function processUniversity(universities) {
  const ret = [];

  Object.keys(universities).forEach(key => {
    if (typeof universities[key] !== 'object')
      if (key === 'all') ret.push({ value: '', label: universities[key] });
      else ret.push({ value: key, label: universities[key] });
    // university la object
    else
      Object.keys(universities[key]).forEach(key2 => {
        ret.push({ value: key2, label: universities[key][key2] });
      });
  });

  return ret;
}

export function processSpecializes(specializes) {
  const ret = [];

  Object.keys(specializes).forEach(key => {
    if (key === 'all') ret.push({ value: '', label: specializes[key] });
    else ret.push({ value: key, label: specializes[key] });
  });

  return ret;
}

export const processProvinces = processSpecializes;
