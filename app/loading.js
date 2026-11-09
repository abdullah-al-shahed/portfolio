import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <main
      id="main-content"
      aria-busy="true"
      aria-label="Loading page"
      className="pt-28 sm:pt-32"
    >
      <span className="sr-only">Loading page…</span>
      <Container>
        <div className="animate-pulse">
          <div className="h-3 w-24 rounded bg-white/[0.06]" />
          <div className="mt-6 h-10 w-2/3 max-w-lg rounded-lg bg-white/[0.06] sm:h-12" />
          <div className="mt-4 h-4 w-1/2 max-w-md rounded bg-white/[0.04]" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="h-48 rounded-2xl border border-line bg-white/[0.02]"
              />
            ))}
          </div>
          <div className="mt-4 h-64 rounded-2xl border border-line bg-white/[0.02]" />
        </div>
      </Container>
    </main>
  );
}
