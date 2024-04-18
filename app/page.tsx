import Image from "next/image";
import Header from "../components/header";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaArrowRight, FaInstagram } from "react-icons/fa";
import LottieAnimation from "@/components/lottie";
import logo from "@/public/logo1.svg";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { ExternalLink } from "@/components/external-link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full bg-gradient-to-b from-blue-800 via-blue-600 to-blue-200 flex-col items-center justify-between">
        <div className="max-w-4xl mx-auto">
          <div className="justify-between flex items-center">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                height={800}
                width={800}
                alt="logo"
                className="h-auto w-[100px]"
              />
              <h1 className="font-bold text-xl text-white">Reisgids.AI</h1>
            </div>
            <div>
              <ul className="flex items-center gap-4 text-xl text-white">
                <li>
                  <ExternalLink href="https://instagram.com/reisgids.ai">
                    <BsInstagram />
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://twitter.com/reisgidsai">
                    <BsTwitterX />
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>
          <div className=" xl:mt-0  relative text-center place-items-center">
            <div className="mt-5 mx-auto justify-center text-center flex w-full">
              <LottieAnimation />
            </div>

            <p className="text-xl xl:-mt-5 xl:text-7xl font-extrabold mt-3 text-white max-w-4xl text-center mx-auto">
              De grensverleggende gids voor reizigers met een wereld aan
              mogelijkheden.
            </p>
            <p className="text-xl mt-10 font-bold text-neutral-200">
              Revolutionair reizen begint hier. Ontdek, plan en beleef.
            </p>

            <button className="mt-20 font-bold rounded-full p-4 px-6 bg-white text-black hover:bg-gray-100">
              Ontdek Reisgids.AI
            </button>
          </div>

          <div className="mt-10 xl:mt-0 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
        </div>
      </main>
    </>
  );
}
