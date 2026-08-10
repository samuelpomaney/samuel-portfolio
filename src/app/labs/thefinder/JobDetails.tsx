"use client";

import { Job } from "./types";

interface Props {
  job: Job;
  onApply: () => void;
}

export default function JobDetails({
  job,
  onApply,
}: Props) {

  return (

    <div className="rounded-[32px] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8">

      <div className="flex items-start justify-between gap-6">

        <div>

          <h2 className="text-4xl font-black">

            {job.title}

          </h2>

          <p className="mt-2 text-lg text-[var(--primary)]">

            {job.company}

          </p>

        </div>

        {job.featured && (

          <span className=" rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-bold text-black">

            Featured

          </span>

        )}

      </div>

      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full border border-[var(--glass-border)] px-4 py-2">

          📍 {job.location}

        </span>

        <span className="rounded-full border border-[var(--glass-border)] px-4 py-2">

          💼 {job.type}

        </span>

        <span className="rounded-full border border-[var(--glass-border)] px-4 py-2">

          💰 {job.salary}

        </span>

        <span className="rounded-full border border-[var(--glass-border)] px-4 py-2">

          👥 {job.applicants} Applicants

        </span>

        <span className="rounded-full border border-[var(--glass-border)] px-4 py-2">

          🕒 {job.posted}

        </span>

      </div>

      <p className="mt-10 leading-8 text-[var(--muted)]">

        {job.description}

      </p>

      <div className="mt-10">

        <h3 className="text-2xl font-bold">

          Responsibilities

        </h3>

        <ul className="mt-5 space-y-3">

          {job.responsibilities.map(item => (

            <li key={item}>

              ✅ {item}

            </li>

          ))}

        </ul>

      </div>

      <div className="mt-10">

        <h3 className="text-2xl font-bold">

          Requirements

        </h3>

        <ul className="mt-5 space-y-3">

          {job.requirements.map(item => (

            <li key={item}>

              • {item}

            </li>

          ))}

        </ul>

      </div>

      <div className="mt-10">

        <h3 className="text-2xl font-bold">

          Benefits

        </h3>

        <ul className="mt-5 space-y-3">

          {job.benefits.map(item => (

            <li key={item}>

              🎁 {item}

            </li>

          ))}

        </ul>

      </div>

      <button
        onClick={onApply}
        className="mt-12 rounded-full bg-[var(--primary)] px-8 py-4 font-bold text-black transition hover:scale-105"
      >

        Apply Now

      </button>

    </div>

  );

}