import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sango",
  description:
    "A news web app providing daily feeds, job opportunities, articles, events and different posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className=" bg-white  dark:bg-darkHeader lg:bg-light dark:bg-dark text-fontColor leading-7 min-h-[110vh] w-full lg:flex lg:items-center lg:justify-center">
      <div className="lg:w-4/5 2xl:w-1/2 mx-auto  bg-white  dark:bg-darkHeader rounded-2xl mt-6 lg:shadow-2xl">
        {children}
      </div>
    </section>
  );
}
