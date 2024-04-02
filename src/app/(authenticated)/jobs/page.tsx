import React, { Suspense } from "react";
import JobContainer from "@/components/jobs/Jobs";
import LoadingJobs from "./loading";

async function fetchAllJobs() {
  const res = await fetch("http://127.0.0.1:8080/jobs.json", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Jobs");
  }

  return res.json();
}

const JobsPage = async () => {
  const jobs = await fetchAllJobs();

  return (
    <Suspense fallback={<LoadingJobs />}>
      <JobContainer jobs={jobs} window={undefined} />
    </Suspense>
  );
};

export default JobsPage;
