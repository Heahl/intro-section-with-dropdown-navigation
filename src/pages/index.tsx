import Head from "next/head";
import Image from "next/image";
// Local imports
import MenuBar from "@/components/MenuBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Intro Section</title>
        <meta
          name="description"
          content="intro-section-with-dropdown-navigation"
        />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start bg-almost-white font-epilogue">
        <MenuBar />
        <div className="flex w-full flex-col pt-20 md:h-screen md:flex-row-reverse md:gap-10 md:px-20 md:pb-20 lg:gap-20 lg:px-40">
          <Image
            className="block h-auto w-full object-cover md:hidden"
            src={"/images/image-hero-mobile.png"}
            width={100}
            height={100}
            alt="Mobile Hero Image"
          />
          <Image
            className="hidden h-full w-1/2 object-cover md:block"
            src={"/images/image-hero-desktop.png"}
            width={100}
            height={100}
            alt="Desktop Hero Image"
          />
          <div className="flex flex-col items-center justify-center gap-8 px-6 py-10 md:items-start md:px-0">
            <h1 className="text-4xl font-bold text-almost-black md:text-5xl lg:text-7xl">
              Make remote work
            </h1>
            <p className="text-center text-xl font-medium leading-8 text-medium-gray md:text-left">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="mb-8 h-14 rounded-2xl bg-almost-black px-6 py-4 font-medium tracking-widest text-white">
              Learn more
            </button>
            <div className="flex flex-wrap items-center justify-center gap-7 lg:flex-nowrap lg:pt-12">
              <Image
                src={"/images/client-audiophile.svg"}
                height={100}
                width={100}
                alt="Client Logo"
              />
              <Image
                src={"/images/client-databiz.svg"}
                height={100}
                width={100}
                alt="Client Logo"
              />
              <Image
                src={"/images/client-maker.svg"}
                height={100}
                width={100}
                alt="Client Logo"
              />
              <Image
                src={"/images/client-meet.svg"}
                height={100}
                width={100}
                alt="Client Logo"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
