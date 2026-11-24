// One entry per language app. A new language (Spanish, Bahasa…) = a new entry here
// plus its own feature art; the landing template, header picker, sitemap and SEO pick it up.

export type FeatureKey =
  | "walk"
  | "library"
  | "tones"
  | "review"
  | "widget"
  | "quiz"
  | "offline";

export type Feature = {
  key: FeatureKey;
  label: string;
  title: string;
  body: string;
  lead?: string;
  points?: string[];
  tone?: "alt" | "warm";
};

export type LanguageApp = {
  slug: string; // used in future /<slug> routes
  path: string; // where this app's landing lives
  language: string; // shown in the language picker
  storeName: string;
  appStoreUrl: string | null; // null until the app is live
  seo: { title: string; description: string; keywords: string[] };
  hero: { lead: string; highlight: string; sub: string };
  freeNote: { strong: string; rest: string };
  thread: { title: string; body: string };
  features: Feature[];
  close: { title: string; body: string };
};

export const thai: LanguageApp = {
  slug: "thai",
  path: "/",
  language: "Thai",
  storeName: "Thai Flashcards: Dailyvokab",
  appStoreUrl: null, // after release: "https://apps.apple.com/app/id6791191367"
  seo: {
    title: "Learn Thai Words with Audio and Tones | Dailyvokab for iPhone",
    description:
      "Learn the Thai words you’ll use every day. Over 2,000 ready-made words and phrases with Thai and English audio, a tone curve for every word, Smart review and offline learning. Free to start.",
    keywords: [
      "learn Thai",
      "Thai vocabulary",
      "Thai flashcards",
      "Thai words",
      "Thai tones",
      "Thai pronunciation",
      "learn Thai app",
      "Thai for beginners",
    ],
  },
  hero: {
    lead: "Every word you learn is",
    highlight: "one more thing you can say.",
    sub: "Over 2,000 Thai words and phrases. Tap through flashcards, or just listen with your phone in your pocket.",
  },
  freeNote: {
    strong: "Free to start.",
    rest: "The first unit of Basics, Words and Phrases is free.",
  },
  thread: {
    title: "Everything is ready. You just learn.",
    body: "The words, the audio and the tones are already done for you, so your time goes into learning Thai.",
  },
  features: [
    {
      key: "walk",
      label: "Convenience",
      title: "Learn Thai without looking at your phone",
      lead: "Turn your daily routine into learning time.",
      points: ["Hear the English, then the Thai word", "No screen to watch, nothing to tap", "Learn while walking, driving or cooking"],
      body: "Turn your daily routine into learning time. Listen to the English meaning, hear the Thai word, and keep going. No screen to watch, no flashcards to tap. Just put your phone in your pocket and learn while walking, driving, commuting or cooking.",
    },
    {
      key: "library",
      tone: "alt",
      label: "Zero preparation",
      title: "Skip the flashcard-making. Start learning.",
      lead: "The hard work is already done for you.",
      points: ["Over 2,000 useful Thai words and phrases", "Organised into ready-made units", "Open the app, pick a unit, start learning"],
      body: "Why spend hours creating flashcards when the hard work is already done? Get access to over 2,000 useful Thai words and phrases, organised into ready-made units. Open the app, pick a unit and start learning. Your next Thai word is already waiting.",
    },
    {
      key: "tones",
      label: "Pronunciation",
      title: "Don’t just learn the word. Learn how to say it.",
      lead: "Thai tones can change a word’s meaning.",
      points: ["A tone curve for every word", "See how your voice should move", "Listen, follow the curve, say it"],
      body: "Thai tones can completely change a word’s meaning. That’s why every word comes with a visual tone curve, helping you see how your voice should move. Listen, follow the curve and build a better feel for Thai pronunciation, one word at a time.",
    },
    {
      key: "review",
      tone: "warm",
      label: "Long-term memory",
      title: "Remember more. Repeat less.",
      lead: "Smart review brings words back at the right time.",
      points: ["Just before they slip from memory", "Words you know come back less often", "Tricky words get more practice"],
      body: "Learning a word once isn’t enough. Dailyvokab’s Smart review brings words back at the right time, just before they’re likely to slip from memory. Words you know appear less often, while tricky ones get more attention. Build a vocabulary that actually sticks.",
    },
    {
      key: "widget",
      tone: "alt",
      label: "Daily habit",
      title: "Make your Lock Screen a little smarter.",
      lead: "Learn a little every time you check your phone.",
      points: ["Add the Word of the hour widget to your Lock Screen", "A new Thai word, every hour", "Learn without opening the app"],
      body: "Your phone is already part of your day. Now it can help you learn Thai, too. Add the Word of the hour widget and discover a new Thai word right on your Lock Screen or Home Screen. Every time you check your phone, there’s another small opportunity to learn.",
    },
    {
      key: "quiz",
      label: "Active learning",
      title: "Think you know it? Put yourself to the test.",
      lead: "Find out what you really remember.",
      points: ["Quick matching quizzes", "Thai words with their English meanings", "A minute is all it takes"],
      body: "Recognising a word is one thing. Remembering it on your own is another. Challenge yourself with quick matching quizzes that connect Thai words with their English meanings. A minute is all it takes to check your progress and find out what you really remember.",
    },
    {
      key: "offline",
      tone: "alt",
      label: "Freedom",
      title: "Learn anywhere, even with no signal.",
      lead: "Your Thai goes wherever you go.",
      points: ["Works offline", "No account, no sign-up", "Open the app and start learning"],
      body: "No signal? No Wi-Fi? No problem. Learn with Dailyvokab wherever you are, even when you’re offline. No account to create, no registration to slow you down. Just open the app and get straight to learning.",
    },
  ],
  close: {
    title: "Start learning Thai.",
    body: "The first unit of Basics, Words and Phrases is free. Unlock every unit with Dailyvokab Pro.",
  },
};

// Order = order in the language picker. Add new apps here.
export const APPS: LanguageApp[] = [thai];
