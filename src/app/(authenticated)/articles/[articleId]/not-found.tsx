import Link from "next/link";
import Image from "next/image";
import NotFoundImg2 from "../../../../../public/assets/Undraw/404.svg";

export default function NotFoundArticle() {
  return (
    <div className="bg-cover bg-no-repeat rounded-xl flex flex-col items-center justify-center gap-5 md:gap-10 p-5 lg:p-10">
      <div className="flex  bg-white  dark:bg-darkHeader p-20 rounded-xl">
        <div className="flex-1 flex flex-col gap-8 text-lightFontColor dark:text-fontColor">
          <h1 className="text-4xl font-bold text-lightFontColor dark:text-fontColor">
            Article not found
          </h1>
          <h2 className="text-4xl">404</h2>
          <p>We could not find your article... </p>
          <Link
            href="/articles"
            className="w-fit bg-primary px-6 py-4 text-white font-medium rounded-xl mt-auto"
          >
            Return to Articles
          </Link>
        </div>
        <div className="flex-1 hidden lg:flex flex-col gap-4">
          <Image
            src={NotFoundImg2}
            width={200}
            height={200}
            alt="not-found"
            className="w-full h-full"
          />
          <div className="flex flex-col gap-6 text-lightFontColor dark:text-fontColor mt-8">
            <h4 className="text-2xl leading-10">
              Oops! Sorry, It seems like your article does not exist anymore...
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
