const roots = ["A", "B", "C", "D", "E", "F", "G"];
const accidentals = ["", "#", "b"];

const qualities = [
  "", "m",
  "7", "9", "11", "13",
  "sus2", "sus4",
  "add9", "add6",
  "dim", "aug",
  "m7", "maj7"
];

const extensions = [
  "", "(b5)", "(b6)", "(#5, b6)", "(b6, b9)", "(#9)", "(#5,#9)", "(maj7,b9,#5)"
];

export function generateChords(count = 1000) {
  const set = new Set();

  while (set.size < count) {
    const root = roots[Math.floor(Math.random() * roots.length)];
    const acc = accidentals[Math.floor(Math.random() * accidentals.length)];
    const qual = qualities[Math.floor(Math.random() * qualities.length)];
    const ext = extensions[Math.floor(Math.random() * extensions.length)];

    const chord = `chord${root}${acc}${qual}${ext}`;
    set.add(chord);
  }

  return [...set];
}