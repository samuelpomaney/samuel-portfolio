"use client";

import { useMemo, useState } from "react";

import { jobs } from "./jobs";

import JobCard from "./JobCard";
import JobDetails from "./JobDetails";
import ApplyModal from "./ApplyModal";
import EmptyState from "./EmptyState";

export default function JobSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const [selected, setSelected] = useState(jobs[0]);
  const [open, setOpen] = useState(false);

  const categories = useMemo(
    () => ["All", ...new Set(jobs.map((job) => job.category))],
    []
  );

  const types = useMemo(
    () => ["All", ...new Set(jobs.map((job) => job.type))],
    []
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        job.title.toLowerCase().includes(normalizedQuery) ||
        job.company.toLowerCase().includes(normalizedQuery) ||
        job.location.toLowerCase().includes(normalizedQuery);

      const matchesCategory =
        category === "All" || job.category === category;

      const matchesType =
        type === "All" || job.type === type;

      const matchesFeatured =
        !featuredOnly || job.featured;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType &&
        matchesFeatured
      );
    });
  }, [query, category, type, featuredOnly]);

  return (
    <>
      <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_220px_220px_auto]">
        <div>
          <label htmlFor="thefinder-job-search" className="sr-only">
            Search jobs, companies or locations
          </label>

          <input
            id="thefinder-job-search"
            name="job-search"
            type="search"
            autoComplete="off"
            placeholder="🔍 Search jobs, companies or locations..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-4 outline-none transition focus:border-[var(--primary)]"
          />
        </div>

        <div>
          <label htmlFor="thefinder-category" className="sr-only">
            Job category
          </label>

          <select
            id="thefinder-category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-4 outline-none focus:border-[var(--primary)]"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="thefinder-type" className="sr-only">
            Employment type
          </label>

          <select
            id="thefinder-type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-4 outline-none focus:border-[var(--primary)]"
          >
            {types.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          aria-pressed={featuredOnly}
          onClick={() => setFeaturedOnly((prev) => !prev)}
          className={`rounded-full px-6 transition ${
            featuredOnly
              ? "bg-[var(--primary)] text-black"
              : "border border-[var(--glass-border)] bg-[var(--glass-bg)]"
          }`}
        >
          ⭐ Featured
        </button>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <p className="text-sm text-[var(--muted)]">
          Showing
          <span className="mx-2 font-bold text-[var(--primary)]">
            {filtered.length}
          </span>
          jobs
        </p>

        <p className="text-sm text-[var(--muted)]">
          {jobs.length} jobs available
        </p>
      </div>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-8 lg:grid-cols-[390px_1fr]">
          <div className="max-h-[720px] space-y-4 overflow-y-auto pr-2">
            {filtered.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                selected={selected.id === job.id}
                onClick={() => setSelected(job)}
              />
            ))}
          </div>

          <JobDetails
            job={selected}
            onApply={() => setOpen(true)}
          />
        </div>
      )}

      <ApplyModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}