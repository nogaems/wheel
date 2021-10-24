async function digestTitle(title) {
  const encoder = new TextEncoder();
  const data = encoder.encode(title);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return hash;
}

function assignColors(title, setter) {
  digestTitle(title).then((hash) => {
    const hashArray = Array.from(new Uint8Array(hash));
    let hex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    hex = hex.slice(hex.length - 6, hex.length);
    const fg = `#${hex}`;
    const bg = `#${(~Number.parseInt(hex, 16) & 0xffffff).toString(16)}`;
    setter([fg, bg]);
  });
}

const toPercent = (prob) => `${(prob * 100).toFixed(2)}%`;

const calcUnassignedProbability = (items) => {
  return (
    1 -
    items.reduce((previous, { weight: current }) => {
      return previous + current;
    }, 0)
  );
};

const isAlreadyAdded = (item, list) => {
  return list.filter(({ title }) => item === title).length === 1;
};

const weightedRandom = (items) => {
  let sum = 0;
  let r = Math.random();
  for (let index = 0; index < items.length; index++) {
    let { title, weight } = items[index];
    sum += weight;
    if (r <= sum) return { title, weight, index };
  }
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

export {
  assignColors,
  toPercent,
  calcUnassignedProbability,
  isAlreadyAdded,
  weightedRandom,
  getRandomInt,
};
