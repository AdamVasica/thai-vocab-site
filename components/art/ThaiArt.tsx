import type { FeatureKey } from "@/content/apps";
import { OfflineIcon, SpeakerIcon } from "../icons";

// Feature graphics for the Thai app. Every Thai word here is a real card from the app (src/data/*.js).
// A future language app gets its own file like this one.

function Walk() {
  return (
    <div className="walker">
      <div className="walker-clip">
        <img src="/img/walk.jpg" alt="A woman walking with earphones, learning Thai words from her pocket" width={850} height={1850} loading="lazy" decoding="async" />
      </div>
      <div className="float f1"><SpeakerIcon />Thank you</div>
      <div className="float f2"><span lang="th">ขอบคุณ</span>kàwp-kun</div>
      <div className="float f3"><span lang="th">อร่อย</span>à-ròi</div>
    </div>
  );
}

function Library() {
  return (
    <div className="lib">
      <div className="stack">
        <div className="fc"><div className="t" lang="th">ตลาด</div><div className="r">dtà-làat</div><div className="e">Market</div></div>
        <div className="fc"><div className="t" lang="th">ธนาคาร</div><div className="r">tá-naa-kaan</div><div className="e">Bank</div></div>
        <div className="fc"><div className="t" lang="th">ขอบคุณ</div><div className="r">kàwp-kun</div><div className="e">Thank you</div></div>
      </div>
      <div className="cats">
        <div className="count">2,000+<small>words &amp; phrases</small></div>
        <div className="cat">Food &amp; Drink <span>›</span></div>
        <div className="cat">Getting Around <span>›</span></div>
        <div className="cat">Money <span>›</span></div>
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
          <div className="t" lang="th">ไม่</div>
          <div className="r">mâi</div>
          <div className="e">Not / don’t · <span className="tone-tag">Falling tone</span></div>
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
        <text x="428" y="60" textAnchor="end">2 months</text>
      </svg>
      <div className="tl-states"><span className="pill learning">Learning</span><span className="pill known">Remembered</span></div>
    </div>
  );
}

function Widget() {
  return (
    <div className="lock">
      <div className="date">Monday 24 November</div>
      <div className="time">9:41</div>
      <div className="widget">
        <div className="w1">prûng-níi</div>
        <div className="w2"><span lang="th">พรุ่งนี้</span>Tomorrow</div>
      </div>
    </div>
  );
}

function Quiz() {
  return (
    <div className="quiz">
      <div className="qt ok">Thank you</div><div className="link" /><div className="qt ok">kàwp-kun<span lang="th">ขอบคุณ</span></div>
      <div className="qt">Hospital</div><div /><div className="qt">prûng-níi<span lang="th">พรุ่งนี้</span></div>
      <div className="qt">Tomorrow</div><div /><div className="qt">roong-pá-yaa-baan<span lang="th">โรงพยาบาล</span></div>
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
