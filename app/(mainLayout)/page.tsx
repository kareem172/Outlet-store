import { ThemeToggler } from "@/components/themeToggler";

export default function Home() {
  return (
    <main className="container">
      <h1 className="text-primary text-7xl font-black">Welcome</h1>
      <ThemeToggler />
    </main>
  );
}
