import Growth from "@/components/growth";
import HomeDeliveryAnimation from "@/components/mini/MainDeliveryAnimation";
import PartnerWithUsButton from "@/components/mini/PartnerWithUsButton";
import PartnerWithUsButtonMobile from "@/components/mini/PartnerWithUsButtonMobile";
import PartnerWithUs from "@/components/partner-with-us";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://photawn.com"),
  title: "Photawn | Home",
  description:
    "Lightening Fast Deliveries for Consumer Brands. Delivering Your Orders in Just 4 Hours with Our Innovative Micro-Warehousing Network.",
  keywords: [
    "Photawn",
    "lightening fast deliveries",
    "consumer brands",
    "micro-warehousing network",
  ],
  openGraph: {
    title: "Photawn | Home",
    description:
      "Lightening Fast Deliveries for Consumer Brands. Delivering Your Orders in Just 4 Hours with Our Innovative Micro-Warehousing Network.",
    url: "https://photawn.com/home",
    images: [
      {
        url: "/assets/images/lightening_fast.svg",
        alt: "Lightening Fast Deliveries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photawn | Home",
    description:
      "Lightening Fast Deliveries for Consumer Brands. Delivering Your Orders in Just 4 Hours with Our Innovative Micro-Warehousing Network.",
    images: ["/assets/images/lightening_fast.svg"],
  },
};

export default function Home() {
  return (
    //  Create Full Homepage
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-50 p-25 shadow-md">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-brand-blue mb-4">
            Lightening Fast{" "}
            <span className="text-brand-dark ">Deliveries for Consumer Brands</span>
          </h1>
          <p className="text-2xl text-gray-700 mb-6 ">
            Delivering Your Orders in Just <HomeDeliveryAnimation /> with Our Innovative
            Micro-Warehousing Network
          </p>
          <PartnerWithUsButton />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/assets/images/lightening_fast.svg"
            alt="Lightening Fast Deliveries"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
        {/* Move button below image in mobile view */}
        <PartnerWithUsButtonMobile />
      </section>

      {/* Wo are we section  */}
      <WhoWeAreSection />

      {/* Partner with Us Section */}
      <PartnerWithUs />

      {/* Fast Growth Section */}
      <Growth />
    </>
  );
}
