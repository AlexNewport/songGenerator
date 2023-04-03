let upbeatText = [
  "We party before the sun is up. Let's do something to think about. Summer time is coming now, so normally we'd wild out. Like the chimes on a warm summer night",
  "I say, how can they compare to you, everything material. I'm on a mountain screamin' at people that this is my steeple. My jobs quite hard but see all of its mental. I'm back riding a motorcycle",
  "And no matter what they do, there will never be another you. It's the wolf gang, golf wang. My homie always down to hang",
  "Right back on my feet, I swear I'd never leave. Soaking up the summer vibes with all these parties. Who ever parties should be proud. It's good to be home",
  "You gave me a taste, now I know there's no getting off you. Make an issue of me dissin' you with lines colder than an igloo. And you could find interest. Sitting in an igloo growing a beard"
];

let melancholyText = [
  "I work 9 to 5, seeing nobody again. Rain, rain, impossible to stay sane. Look around, things will never be the same",
  "Do just feeling a little sad. Bet i'm heavy with that. Pass that, catch back, fast that. But now everythings just sad",
  "Don't say sorry, don't get all melancholy. If a period is late then i will mark it with a question. Bumping the stereo up, such melancholy, no affection",
  "No calm before the storm. He gave him a platform. Kings are clashing and storm storms are slashing. You know that love is a very serious thing"
];

const addDots = (before) => {
  let verseNum = before
    ? $("#id_dotsBefore").val()
    : $("#id_dotsAfter").val();
  verseNum -= 1;
  let wantedVerse = $("#song p:eq(" + verseNum + ")");
  console.log("XXX", wantedVerse.text());
  if (before) $("<span>...</span>").prependTo(wantedVerse);
  else $("<span>...</span>").appendTo(wantedVerse);
};

const addExclamation = (before) => {
  let verseNum = before
    ? $("#id_exclamationBefore").val()
    : $("#id_exclamationAfter").val();
  verseNum -= 1;
  let wantedVerse = $("#song p:eq(" + verseNum + ")");
  console.log("XXX", wantedVerse.text());
  if (before) $("<span>!</span>").prependTo(wantedVerse);
  else $("<span>!</span>").appendTo(wantedVerse);
};

const randomMelancholyVerse = () => {
  let rnd = Math.floor(Math.random() * melancholyText.length);
  let newVerse = melancholyText[rnd];
  $("#id_freeform").val(newVerse);
};

const randomUpbeatVerse = () => {
  let rnd = Math.floor(Math.random() * upbeatText.length);
  let newVerse = upbeatText[rnd];
  $("#id_freeform").val(newVerse);
};

function createVerse() {
  let matchedSetVerses = $("#song p");
  let verseNumber = parseInt($("#id_verseNumToCreate").val());
  let verseContent = $("#id_freeform").val();
  let verse = $(`<p>${verseContent}</p>`);
  let lastVerse = matchedSetVerses.eq(verseNumber - 1);
  if (
    matchedSetVerses.length == 0 ||
    verseNumber > matchedSetVerses.length
  )
    verse.appendTo($("#song"));
  else {
    lastVerse.before(verse);
  }
}
