import { JobT } from "@/components/jobs/Jobs";
import Job from "@/components/jobs/container/Job";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch("http://127.0.0.1:8080/jobs.json");
  const jobs = await res.json();

  return jobs.map((job: JobT) => ({ id: job.id }));
}

async function getSingleJob(jobId: number) {
  const res = await fetch("http://127.0.0.1:8080/jobs.json", {
    next: {
      revalidate: 60,
    },
  });
  const data = await res.json();

  const job = data?.filter((item: JobT) => item.id === Number(jobId))[0];

  let relatedJobs;
  if (job) {
    relatedJobs = data.filter((item: JobT) => item.category === job.category);
  }

  if (!res.ok) {
    throw new Error("Failed to fetch Jobs");
  }

  return { relatedJobs, job };
}

interface JobDetailProps {
  searchParams: string;
  params: string;
}

const JobDetailPage: NextPage<JobDetailProps> = async (props: any) => {
  const { jobId } = props.params;

  const { job, relatedJobs } = await getSingleJob(jobId);

  if (!job) {
    notFound();
  }

  return <Job job={job} relatedJobs={relatedJobs} />;
};

export default JobDetailPage;
