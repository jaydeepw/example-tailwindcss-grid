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
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="bg-[#FF0000]">
          Hello
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <div class="grid grid-cols-3 gap-4">
              <div className="bg-red-300 p-6 border-2 rounded">Grid Item 1</div>
              <div className="bg-blue-300 p-6 border-2 rounded">
                Grid Item 2
              </div>
              <div className="bg-green-300 p-6 border-2 rounded">
                Grid Item 3
              </div>
              <div className="bg-yellow-300 p-6 border-2 rounded">
                Grid Item 4
              </div>
              <div className="bg-purple-300 p-6 border-2 rounded">
                Grid Item 5
              </div>
              <div className="bg-orange-300 p-6 border-2 rounded">
                Grid Item 6
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
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
          {/* TODO: */}
          Visit Blog Post →
        </a>
      </footer>
    </div>
  );
}
