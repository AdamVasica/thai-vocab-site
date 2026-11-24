import { AppleIcon } from "./icons";

// Shows "Coming soon" until the app has a store URL, then links straight to the App Store.
export function StoreButton({ url, className = "" }: { url: string | null; className?: string }) {
  const inner = (
    <>
      <AppleIcon />
      <span>
        <small>{url ? "Download on the" : "Coming soon to the"}</small>
        <strong>App Store</strong>
      </span>
    </>
  );
  if (!url) {
    return (
      <span className={`store-btn ${className}`} aria-label="Coming soon to the App Store">
        {inner}
      </span>
    );
  }
  return (
    <a className={`store-btn ${className}`} href={url} rel="noopener">
      {inner}
    </a>
  );
}
