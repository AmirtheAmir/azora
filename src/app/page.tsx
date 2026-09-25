import MainContent from "./components/organisms/MainContent";
import Navigation from "./components/organisms/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-dvh bg-background-primary font-sans text-text-primary">
      <Navigation />
      <MainContent />
    </main>
  );
}
