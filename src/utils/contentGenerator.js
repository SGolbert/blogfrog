import dayjs from "dayjs";

const first_words_singular = ["A", "The", "One", "This"];
const first_words_plural = ["The", "Two", "Three", "Four", "These"];
const second_words_singular = ["dog", "cat", "fox", "human", "alien"];
const second_words_plural = ["dogs", "cats", "foxes", "humans", "aliens"];
const third_word_singular = ["goes away", "flies away", "runs", "plays"];
const third_word_plural = ["go away", "fly away", "run", "play"];
const last_word = ["rapidly", "joyfully", "without pause", "frenetically"];

export function generateTitle() {
  const plural = Math.floor(Math.random() * 2) === 0;

  if (plural) {
    const first =
      first_words_plural[Math.floor(Math.random() * first_words_plural.length)];
    const second =
      second_words_plural[
        Math.floor(Math.random() * second_words_plural.length)
      ];
    const third =
      third_word_plural[Math.floor(Math.random() * third_word_plural.length)];
    const last = last_word[Math.floor(Math.random() * last_word.length)];

    return first + " " + second + " " + third + " " + last;
  } else {
    const first =
      first_words_singular[
        Math.floor(Math.random() * first_words_singular.length)
      ];
    const second =
      second_words_singular[
        Math.floor(Math.random() * second_words_singular.length)
      ];
    const third =
      third_word_singular[
        Math.floor(Math.random() * third_word_singular.length)
      ];
    const last = last_word[Math.floor(Math.random() * last_word.length)];

    return first + " " + second + " " + third + " " + last;
  }
}

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export function generateContent() {
  const paragraphs = Math.floor(Math.random() * 5) + 1;
  let result = "";

  for (let i = 0; i < paragraphs; i++) {
    result += lorem;
    if (i < paragraphs - 1) result += "\n";
  }

  return result;
}

export function generateDate(dateMin, dateMax) {
  const dateIni = dayjs(dateMin);
  const dateEnd = dayjs(dateMax);
  const diff = Math.floor(Math.random() * dateEnd.diff(dateIni, "day"));

  // console.log(dateEnd.diff(dateIni, "day"));

  const result = dateIni.add(diff, "day");

  return result.format("YYYY-MM-DD");
}
