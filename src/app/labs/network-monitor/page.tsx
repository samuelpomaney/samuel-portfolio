import Header from "./Header";
import Simulator from "./Simulator";

export default function NetworkMonitorPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-14">

      <div className="mx-auto max-w-7xl">

        <Header />

        <Simulator />

      </div>

    </main>
  );
}