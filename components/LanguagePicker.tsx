import Link from "next/link";
import { APPS, type LanguageApp } from "@/content/apps";

// Language picker in the header. Hidden while there is only one app (Thai);
// shows up on its own as soon as a second app is added to APPS. No JavaScript needed (<details>).
export function LanguagePicker({ current }: { current: LanguageApp }) {
  if (APPS.length < 2) return null;
  return (
    <details className="lang">
      <summary>
        Learn {current.language}
        <svg viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </summary>
      <ul>
        {APPS.map((a) => (
          <li key={a.slug}>
            <Link href={a.path} aria-current={a.slug === current.slug ? "page" : undefined}>
              {a.language}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
