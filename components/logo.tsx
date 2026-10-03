/*
 * The Open Chat Interface logo, "Turns": a question in a blue bubble and the
 * answer as two lines, on a dark tile. The mark is inline SVG (no request, no
 * font), copied from mark-small.svg in oci-assets (logo/turns/), the drawing
 * for 20 to 47 px; the name beside it is live text. The website draws the same
 * mark at the same size.
 */

/** The mark: decorative here, because the name is always next to it. */
export function OciMark({ className = 'size-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={`shrink-0 ${className}`}>
      <rect width="64" height="64" rx="14" fill="#171717" />
      <path d="M32.5 11H44.5A7.5 7.5 0 0 1 52 18.5V29.5H32.5A7.5 7.5 0 0 1 25 22V18.5A7.5 7.5 0 0 1 32.5 11Z" fill="#51a2ff" />
      <path d="M15.75 40H48.25M15.75 51H34.25" fill="none" stroke="#fafafa" strokeWidth="7.5" strokeLinecap="round" />
    </svg>
  );
}

/** The product's full name as text, set in Inter (used inline in sentences too). */
export function OciWordmark({ className }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight whitespace-nowrap ${className ?? ''}`}>Open Chat Interface</span>
  );
}

/**
 * The nav bar title: the mark, the name and a "docs" tag. `antialiased`
 * matches the website, whose body sets it, so the name renders identically.
 */
export function NavTitle() {
  return (
    <span className="inline-flex items-center gap-2.5 text-fd-foreground antialiased">
      <OciMark />
      <OciWordmark className="text-[1.05rem]" />
      <span className="rounded-md border border-fd-border px-1.5 py-0.5 text-xs font-medium text-fd-muted-foreground">
        docs
      </span>
    </span>
  );
}
