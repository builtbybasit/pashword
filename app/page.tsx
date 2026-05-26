"use client";

import PASSWORD_LENGTH from "../constants/passwordLength";
import Illustration from "../components/Illustration";
import { AiOutlineLeftCircle } from "react-icons/ai";
import HeroSection from "../components/HeroSection";
import { FiArrowDownCircle } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import FAQ from "../components/FAQ";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;

export default function Home() {
  const [passwordLength, setPasswordLength] = useState(PASSWORD_LENGTH.LARGE);
  const [installable, setInstallable] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      deferredPrompt = e as BeforeInstallPromptEvent;
      setInstallable(true);
    };

    const handleAppInstalled = () => {
      deferredPrompt = null;
      setInstallable(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;
    setInstallable(false);
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
    });
  };

  return (
    <div
      className={`overflow-x-hidden ${
        showMenu && "h-screen overflow-y-hidden"
      }`}
    >
      <button
        className="absolute top-2 right-2 z-10 cursor-pointer text-3xl text-white/80"
        onClick={() => setShowMenu(true)}
      >
        <AiOutlineLeftCircle />
      </button>
      <div className="relative">
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>

      {installable && (
        <button
          className="fixed bottom-5 right-5 z-20 flex flex-row items-center justify-center gap-2 rounded-full bg-violet-600 p-3 text-slate-50"
          onClick={handleInstallClick}
        >
          <FiArrowDownCircle className="text-xl" />
          <span className="hidden sm:block">Install Pashword</span>
        </button>
      )}

      <HeroSection
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />
      <Section1 />
      <Section2 />
      <Illustration
        className="mx-auto px-5 pt-10 pb-10 md:px-20 lg:w-1/2 lg:px-0"
        source="/with-without-pashword.png"
        alt="Comparison with and without Pashword"
        sectionId="with-without-pashword"
      />
      <Section3 />
      <Illustration
        className="mt-20 mb-20 md:px-10"
        source="/how-it-works.svg"
        alt="How Pashword works"
        sectionId="how-it-works"
      />
      <FAQ />
      <Footer />
      <ToastContainer
        position="top-center"
        theme="colored"
        limit={1}
        autoClose={1000}
      />
    </div>
  );
}
