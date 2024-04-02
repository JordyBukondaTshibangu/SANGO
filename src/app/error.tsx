"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NotFoundImg from "../../public/assets/NotFound.jpg";
import NotFoundImg2 from "../../public/assets/Undraw/error.svg";
import { Button } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <div
        className="bg-cover bg-no-repeat min-h-[100vh] rounded-xl flex flex-col items-center justify-center gap-5 md:gap-10 p-5 lg:p-10"
        style={{ backgroundImage: `url(${NotFoundImg})` }}
      >
        <div className="flex  bg-light  dark:bg-darkHeader p-20 rounded-xl">
          <div className="flex-1 flex flex-col gap-8 text-lightFontColor dark:text-fontColor">
            <h1 className="text-4xl font-bold text-lightFontColor dark:text-fontColor">
              Error Page
            </h1>
            <h2 className="text-2xl leading-10">
              An Error occurred in your application{" "}
            </h2>
            <p>Could not find requested resource</p>
            <Link
              href="/posts"
              className="w-fit bg-primary px-6 py-4 text-white font-medium rounded-xl mt-auto"
            >
              Return Home
            </Link>
          </div>
          <div className="flex-1 hidden lg:flex flex-col gaap-4">
            <Image
              src={NotFoundImg2}
              width={200}
              height={200}
              alt="not-found"
              className="w-full h-full"
            />
            <div className="flex flex-col gap-6 text-lightFontColor dark:text-fontColor mt-8">
              <h4 className="text-2xl leading-7 text-lightFontColor dark:text-fontColor">
                Oops! Sorry, Somethings went wrong...
              </h4>
              <p className="text-lg leading-7 text-grayFirst">
                We apologize for the inconvenience. It looks like there is an
                error on our side
              </p>
            </div>
          </div>
        </div>
      </div>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
