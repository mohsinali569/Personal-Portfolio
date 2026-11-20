import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1 className="gradient-text" style={{ fontSize: "4rem" }}>
          404
        </h1>
        <p style={{ color: "var(--muted)", margin: "1rem 0 2rem" }}>
          This page could not be found.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </main>
  );
}
