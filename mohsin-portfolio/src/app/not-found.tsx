import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: "2rem" }}>
      <div>
        <p className="serif" style={{ fontSize: "clamp(5rem, 15vw, 9rem)", lineHeight: 1 }}>
          4<span className="italic-accent">0</span>4
        </p>
        <p style={{ color: "var(--muted)", margin: "1rem 0 2rem" }}>This page doesn&apos;t exist.</p>
        <Link href="/" className="btn btn-primary">
          Back to home <span className="arrow">→</span>
        </Link>
      </div>
    </main>
  );
}
