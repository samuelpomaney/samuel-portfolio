"use client";

import Header from "./Header";
import JobSearch from "./JobSearch";

export default function TheFinderDemo() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-20">

      <div className="mx-auto max-w-7xl">

        <Header />

        <JobSearch />

      </div>

    </main>
  );
}