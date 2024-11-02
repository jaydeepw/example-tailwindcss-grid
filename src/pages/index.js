import { SAMPLE_IMAGES } from "@/utils/constants";
import localFont from "next/font/local";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 sm:p-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div class="container mx-auto px-5 py-2">
          <h1 class="text-6xl font-bold text-center mb-16 text-gray-200">
            Tailwind CSS Image Grid
          </h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAMPLE_IMAGES.map((image) => {
              return (
                <div class="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt="Image 1"
                    class="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 mt-20 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://toofancoder.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* TODO: */}
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          More Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://toofancoder.com/blog/responsive-grid-view-with-tailwind-nextjs?utm_src=github_example"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Visit Blog Post →
        </a>
      </footer>
    </div>
  );
}
