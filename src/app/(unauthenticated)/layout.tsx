import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sango",
  description: "A news web app providing daily feeds, job opportunities, articles, events and different posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <section className="lg:bg-dark text-fontColor leading-7 min-h-[110vh] w-full lg:flex items-center justify-center">
          <div className="lg:w-4/5 2xl:w-1/2 mx-auto bg-white rounded-2xl mt-10 lg:shadow-2xl">
            {children}
          </div>
        </section>
  );
}
