import Link from "next/link";
import Image from "next/image";
import NotFoundImg2 from "../../../../../public/assets/Undraw/404.svg";

export default function NotFoundUser() {
  return (
    <div className="bg-cover bg-no-repeat rounded-xl flex flex-col items-center justify-center gap-5 md:gap-10 p-5 lg:p-10">
      <div className="flex  bg-white  dark:bg-darkHeader p-20 rounded-xl">
        <div className="flex-1 flex flex-col gap-8 text-grayFirst">
          <h1 className="text-4xl font-bold text-white">
            User Profile not found{" "}
          </h1>
          <h2 className="text-4xl">404</h2>
          <p>We could not find the profile you requested... </p>
          <Link
            href="/users"
            className="w-fit bg-primary px-6 py-4 text-white font-medium rounded-xl mt-auto"
          >
            Return to your Network
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
          <div className="flex flex-col gap-6 text-white mt-8">
            <h4 className="text-2xl leading-10">
              Oops! Sorry, It seems like your profile does not exist anymore...
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
