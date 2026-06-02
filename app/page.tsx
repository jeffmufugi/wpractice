import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "24px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Welcome to jef</h1>
      <p>The platform that helps you grow.</p>
      <Link href="/get-started">
        <button
          data-testid="get-started-btn"
          style={{
            padding: "12px 32px",
            fontSize: "16px",
            backgroundColor: "#0d1b2a",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </Link>
    </main>
  );
}
