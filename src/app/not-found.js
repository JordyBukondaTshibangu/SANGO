import Link from "next/link";
import Image from "next/image";
import NotFoundImg from "../../public/assets/NotFound.jpg";
import NotFoundImg2 from "../../public/assets/Undraw/404.svg";

export default function NotFound() {
  return (
    <div
      className="bg-cover bg-no-repeat min-h-[100vh] rounded-xl flex flex-col items-center justify-center gap-5 md:gap-10 p-5 lg:p-10"
      style={{ backgroundImage: `url(${NotFoundImg})` }}
    >
      <div className="flex  bg-white  dark:bg-darkHeader p-20 rounded-xl">
        <div className="flex-1 flex flex-col gap-8 text-grayFirst">
          <h1 className="text-4xl font-bold text-white">404 Error </h1>
          <h2 className="text-4xl">Not Found</h2>
          <p>Could not find requested resource</p>
          <Link
            href="/sign-in"
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
          <div className="flex flex-col gap-6 text-white mt-8">
            <h4 className="text-2xl leading-7">
              Oops! Sorry, Somethings gone missing...
            </h4>
            <p className="text-lg leading-7">
              We apologize for the inconvenience. It looks like you are trying
              to access a page that has been deleted or does not exist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
