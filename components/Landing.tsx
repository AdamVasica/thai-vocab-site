import Link from "next/link";
import type { FeatureKey, LanguageApp } from "@/content/apps";
import { SITE } from "@/content/site";
import { Logo } from "./icons";
import { StoreButton } from "./StoreButton";
import { LanguagePicker } from "./LanguagePicker";

type ArtMap = Record<FeatureKey, () => React.JSX.Element>;

// The landing page template. Each language app passes its copy (content/apps.ts) and its art.
export function Landing({ app, art }: { app: LanguageApp; art: ArtMap }) {
  return (
    <>
      <header className="top">
        <div className="wrap">
          <Link className="brand" href="/" aria-label={`${SITE.name} home`}>
            <Logo />
            {SITE.name}
          </Link>
          <LanguagePicker current={app} />
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="hero-copy">
              <h1>
                {app.hero.lead} <span className="hl">{app.hero.highlight}</span>
              </h1>
              <p className="sub">{app.hero.sub}</p>
              <div className="cta-row">
                <StoreButton url={app.appStoreUrl} />
              </div>
            </div>
          </div>
        </section>

        <section className="thread">
          <div className="wrap">
            <h2>{app.thread.title}</h2>
            <p>{app.thread.body}</p>
          </div>
        </section>

        <div className="features">
          {app.features.map((f, i) => {
            const Art = art[f.key];
            const cls = ["feat", `feat-${f.key}`, f.tone ?? "", i % 2 === 1 ? "flip" : ""].filter(Boolean).join(" ");
            return (
              <section className={cls} key={f.key} aria-labelledby={`f-${f.key}`}>
                <div className="wrap feat-inner">
                  <div className="copy">
                    <span className="label">{f.label}</span>
                    <h3 id={`f-${f.key}`}>{f.title}</h3>
                    {f.points ? (
                      <>
                        <p className="lead">{f.lead}</p>
                        <ul className="ticks">
                          {f.points.map((pt) => <li key={pt}>{pt}</li>)}
                        </ul>
                      </>
                    ) : (
                      <p>{f.body}</p>
                    )}
                  </div>
                  <div className="art" aria-hidden="true">
                    <Art />
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <section className="close">
          <div className="wrap">
            <h2>{app.close.title}</h2>
            <p>{app.close.body}</p>
            <div className="cta-row">
              <StoreButton url={app.appStoreUrl} />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>
            © 2026 {SITE.owner} · {SITE.name} for iPhone · The audio is an AI voice.
          </span>
          <span className="foot-links">
            <a href="/privacy.html">Privacy</a>
            <a href="/support.html">Support</a>
          </span>
        </div>
      </footer>
    </>
  );
}
