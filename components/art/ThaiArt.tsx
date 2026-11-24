import type { FeatureKey } from "@/content/apps";
import { OfflineIcon, SpeakerIcon } from "../icons";

// Feature graphics for the Thai app. Every Thai word here is a real card from the app (src/data/*.js).
// A future language app gets its own file like this one.

function Walk() {
  return (
    <div className="walker">
      <div className="walker-clip">
        <img src="/img/walk.jpg" alt="A woman walking with earphones, learning Thai words from her pocket" width={850} height={1156} loading="lazy" decoding="async" />
      </div>
      <div className="float f1"><SpeakerIcon />Thank you</div>
      <div className="float f2"><span lang="th">ขอบคุณ</span>kàwp-kun</div>
      <div className="float f4"><SpeakerIcon />Delicious</div>
      <div className="float f3"><span lang="th">อร่อย</span>à-ròi</div>
    </div>
  );
}

// Rising tone contour, same formula as the app's ToneStrip (tile box 46 high inside 74, lower y = higher pitch).
const RISING = Array.from({ length: 20 }, (_, i) => {
  const p = i / 19;
  return `${((0.08 + p * 0.84) * 200).toFixed(1)},${(14 + 34 - Math.pow(p, 1.6) * 24).toFixed(1)}`;
}).join(" ");

// The app's flashcard screen (FlashcardScreen.js), English → tap → Thai, looping.
function Library() {
  return (
    <div className="lib">
      <div className="fphone" aria-label="Flashcard in the app: Doctor, then หมอ mǎw">
        <div className="fp-status"><span>9:41</span></div>
        <div className="fp-island" />
        <div className="fp-bar">
          <span className="fp-back">‹ Back</span>
          <span className="fp-title">Jobs &amp; Professions</span>
          <span className="fp-gear"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68 1.65 1.65 0 0 0 10 3.17V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg></span>
        </div>
        <div className="fp-progress"><span className="fp-track"><span /></span><span className="fp-count">1 / 7</span></div>
        <div className="fcard">
          <div className="fc-face fc-front">
            <div className="fc-mid">
              <div className="fc-en">Doctor</div>
              <div className="fc-hint">Tap anywhere to reveal Thai</div>
            </div>
            <div className="fc-skip">Skip word ›</div>
            <span className="fc-tap" />
          </div>
          <div className="fc-face fc-back">
            <div className="fc-th" lang="th">หมอ</div>
            <div className="fc-rom">mǎw</div>
            <div className="fc-mean">Doctor</div>
            <div className="fc-rule" />
            <div className="fc-tile">
              <svg viewBox="0 0 200 74" preserveAspectRatio="none">
                <polyline className="guide" points={RISING} />
                <polyline className="lit" points={RISING} pathLength={1} />
              </svg>
            </div>
            <div className="fc-syl">mǎw</div>
            <div className="fc-tone">Rising</div>
            <div className="fc-play"><SpeakerIcon waves={2} />Play pronunciation</div>
            <div className="fc-rate">
              <div className="fc-q">How well did you know it?</div>
              <div className="fc-btns"><span className="no">Don’t know</span><span className="yes">Know it</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="cats">
        <div className="count">2,000+<small>words &amp; phrases</small></div>
        <div className="cat">Food &amp; Drink <span>›</span></div>
        <div className="cat">Getting Around <span>›</span></div>
        <div className="cat">Money <span>›</span></div>
        <div className="cat">And much more <span>›</span></div>
      </div>
    </div>
  );
}

function Tones() {
  return (
    <div className="tone-card">
      <svg viewBox="0 0 320 170">
        <g className="grid">
          {[20, 55, 90, 125, 160].map((y) => <line key={y} x1="0" y1={y} x2="320" y2={y} />)}
        </g>
        <circle className="start" cx="24" cy="62" r="9" />
        <path className="curve" d="M24 62 C 90 40, 140 30, 180 50 S 260 140, 296 150" />
      </svg>
      <div className="tone-foot">
        <div className="tone-word">
          <div className="t" lang="th">เพื่อน</div>
          <div className="r">pêuan</div>
          <div className="e">Friend · <span className="tone-tag">Falling tone</span></div>
        </div>
        <div className="play"><SpeakerIcon waves={2} /></div>
      </div>
    </div>
  );
}

function Review() {
  return (
    <div className="timeline">
      <div className="tl-word"><span lang="th">พรุ่งนี้</span>prûng-níi · Tomorrow</div>
      <svg viewBox="0 0 440 70">
        <line className="ln" x1="12" y1="22" x2="428" y2="22" />
        <circle className="d0" cx="12" cy="22" r="10" />
        <circle className="d" cx="100" cy="22" r="10" />
        <circle className="d" cx="200" cy="22" r="10" />
        <circle className="d" cx="428" cy="22" r="10" />
        <text x="2" y="60" textAnchor="start">Today</text>
        <text x="100" y="60" textAnchor="middle">4 days</text>
        <text x="200" y="60" textAnchor="middle">10 days</text>
        <text x="428" y="60" textAnchor="end">1 month</text>
      </svg>
      <div className="tl-states"><span className="pill learning">Learning</span><span className="pill known">Remembered</span></div>
    </div>
  );
}

function Widget() {
  return (
    <div className="widget-art">
      <img src="/img/widget-art.jpg" alt="A girl with headphones next to an iPhone Lock Screen showing the Thai word พรุ่งนี้ prûng-níi, Tomorrow" width={900} height={1159} loading="lazy" decoding="async" />
    </div>
  );
}

function Quiz() {
  return (
    <div className="fphone qphone" aria-label="Match the pairs quiz in the app">
      <div className="fp-status"><span>9:41</span></div>
      <div className="fp-island" />
      <div className="qp-bar">
        <span className="fp-back">‹ Back</span>
        <span className="qp-title">Test Quiz<small>Unit 14</small></span>
        <span className="qp-count">1/7</span>
      </div>
      <div className="qp-head"><b>Match the pairs</b><span>Round 1 of 2</span></div>
      <div className="qp-grid">
        <div className="qp-t ok">✓ Mall</div>
        <div className="qp-t">kǎwng<span lang="th">ของ</span></div>
        <div className="qp-t">With / And</div>
        <div className="qp-t">gàp<span lang="th">กับ</span></div>
        <div className="qp-t qa">See</div>
        <div className="qp-t qb">hěn<span lang="th">เห็น</span></div>
        <div className="qp-t">Thing / Stuff</div>
        <div className="qp-t ok">✓ hâang<span lang="th">ห้าง</span></div>
      </div>
      <div className="qp-hint">Tap a tile to hear it · pair English with its Thai</div>
    </div>
  );
}

function Offline() {
  return (
    <div className="scene">
      <div className="sun" />
      <div className="isle" />
      <div className="isle two" />
      <div className="offline"><OfflineIcon />Offline</div>
      <div className="phone">
        <img src="/img/flashcard-goodbye.jpg" alt="Dailyvokab flashcard for the Thai word for goodbye" width={1179} height={2556} loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

export const THAI_ART: Record<FeatureKey, () => React.JSX.Element> = {
  walk: Walk,
  library: Library,
  tones: Tones,
  review: Review,
  widget: Widget,
  quiz: Quiz,
  offline: Offline,
};
