import Navigation from "./components/organisms";

export default function Home() {
  return (
    <main className="flex min-h-dvh bg-background-primary font-sans text-text-primary">
      <Navigation />
      <section className="flex flex-1" aria-label="Main content" />
    </main>
  );
}
