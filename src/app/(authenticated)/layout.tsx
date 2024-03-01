import Footer from "@/components/common/ui/Footer";
import NavBar from "@/components/common/ui/NavBar";

export default function SangoAuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative min-h-[100vh] min-w-[100vw] bg-light   dark:bg-dark text-lightFontColor dark:text-fontColor leading-7">
      <NavBar />
      <div className="px-5 xl:px-10 2xl:px-28 3xl:px-96 py-10 xl:py-20 mt-[107px]">
        {children}
      </div>
      <Footer />
    </section>
  );
}
