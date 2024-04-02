import Job from "@/components/jobs/container/Job";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import LoadingJob from "./loading";
import { IJob } from "@/interfaces/job";

export async function generateStaticParams() {
  const res = await fetch("http://127.0.0.1:8080/jobs.json");
  const jobs = await res.json();

  return jobs.map((job: IJob) => ({ id: job.id }));
}

async function getSingleJob(jobId: number) {
  const res = await fetch("http://127.0.0.1:8080/jobs.json", {
    next: {
      revalidate: 60,
    },
  });
  const data = await res.json();

  const job = data?.filter((item: IJob) => item.id === Number(jobId))[0];

  let relatedJobs;
  if (job) {
    relatedJobs = data.filter((item: IJob) => item.category === job.category);
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

  return (
    <Suspense fallback={<LoadingJob />}>
      <Job job={job} relatedJobs={relatedJobs} />
    </Suspense>
  );
};

export default JobDetailPage;
