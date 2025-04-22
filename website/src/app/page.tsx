'use client';

import {motion} from "motion/react";
import Image from "next/image";
import Data from "@/data/data";


export default function Home() {

  const scaleFactor = 1.15;
  const extraSpacePercent = ((scaleFactor - 1) / 2) * 100;

  return (
    <>
    <section className="w-screen h-screen flex flex-row justify-center items-center font-bold">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-30 h-30 rounded-full flex justify-center items-center relative z-10">
      <span className="absolute w-100 h-100 flex justify-center items-center bg-radial from-green-400 to-transparent to-70% rounded-full"></span>
      <span className="absolute w-48 h-48 rounded-full z-0 bg-gradient-to-r from-green-400 to-black animate-spinner"></span>
        <div className="w-30 h-30 rounded-full overflow-hidden z-10 bg-green-400">
          <Image
          alt="profileimage"
          width={100}
          height={100}
          src="/profileimage.png"
          className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
      <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ease: "easeIn", duration: 2}} className="text-9xl bg-gradient-to-r from-green-500 to-green-100 bg-clip-text text-transparent" style={{ transform: 'scaleX(1.3)', padding: `0 ${extraSpacePercent}%`}}>WILLIAM</motion.div>
      <div className="flex flex-col">
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ease: "easeIn", duration: 2}}className="text-5xl bg-gradient-to-r from-green-100 via-green-100 via-50% to-white bg-clip-text text-transparent" style={{ transform: 'scaleX(1.3)'}}>SURYA</motion.div>
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ease: "easeIn", duration: 2}}className="text-5xl bg-gradient-to-r from-green-100 via-green-100 via-50% to-white bg-clip-text text-transparent" style={{ transform: 'scaleX(1.3)'}}>JAYA</motion.div>
      </div>
    </section>
    <section className="relative w-screen flex flex-col items-center">
      <div className="flex flex-col justify-center items-center max-w-5xl">
        <motion.h2 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: 'easeOut'}} className="text-6xl text-center leading-normal pb-20">{Data.heroSection.title1}</motion.h2>
        <motion.p initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: 'easeOut'}} className="text-2xl text-center leading-[2.2] opacity-60 text-gray-400">{Data.heroSection.description1}</motion.p>
      </div>
      <motion.h1 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: 'easeOut'}} style={{ textShadow: '-2px -2px 0 green, 2px -2px 0 green, -2px 2px 0 green, 2px 2px 0 green' }} className="text-[20vw] scale-x-150 text-black">STORY</motion.h1>
      <motion.span initial={{ scale: 0}} whileInView={{scale: 1}} transition={{duration: 1, ease: "easeOut"}} className="absolute w-100 h-100 bottom-20 bg-radial from-green-300 to-transparent to-70% rounded-full opacity-70"></motion.span>
    </section>
    <section className="relative w-screen flex flex-col items-center pb-40">
      <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: 'easeOut'}} className="pb-10 flex flex-col justify-center items-center relative group">
        <Image src="/SCB.png" alt="SCB Image" width={1920} height={1080} className="relative w-full h-auto transition-all duration-500 group-hover:opacity-40 group-hover:scale-105" />
        <h3 className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-4xl max-w-2xl text-center leading-normal">{Data.heroSection.title2}</h3>
        <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-48 text-white text-xl py-1 px-6 rounded-3xl border-solid border-white border-2">View Story</button>
      </motion.div>
      <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: 'easeOut'}} className="flex flex-col gap-3 lg:flex-row">
          <div className="flex flex-col justify-center items-center relative group">
            <Image src="/DBS.png" alt="DBS Image" width={400} height={400} className="relative rounded-xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-105" />
            <h3 className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-4xl max-w-2xl text-center leading-normal">{Data.heroSection.title3}</h3>
            <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-60 text-white text-xl py-1 px-6 rounded-3xl border-solid border-white border-2">View Story</button>
          </div>
          <div className="flex flex-col justify-center items-center relative group">
            <Image src="/UOB.png" alt="UOB Image" width={400} height={400} className="relative rounded-xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-105" />
            <h3 className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-4xl max-w-2xl text-center leading-normal">{Data.heroSection.title4}</h3>
            <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-48 text-white text-xl py-1 px-6 rounded-3xl border-solid border-white border-2">View Story</button>
          </div>
          <div className="flex flex-col justify-center items-center relative group">
            <Image src="/OCB.png" alt="OCB Image" width={400} height={400} className="relative rounded-xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-105" />
            <h3 className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-4xl max-w-2xl text-center leading-normal">{Data.heroSection.title5}</h3>
            <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-48 text-white text-xl py-1 px-6 rounded-3xl border-solid border-white border-2">View Story</button>
          </div>
      </motion.div>
    </section>
    <section className="relative w-screen flex flex-col items-center pb-40">
      <motion.span initial={{opacity: 0, y: 100}} whileInView={{opacity: 0.6, y: 0}} transition={{duration: 1, ease: 'easeOut'}} className="absolute w-250 h-250 rounded-full bg-gradient-to-b from-green-400 to-black to-35% z-0"></motion.span>
      <div className="flex flex-col justify-center items-center max-w-4xl z-10 pb-40">
        <motion.h2 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: 'easeOut'}} className="text-6xl text-center leading-normal pb-15">{Data.heroSection.title6}</motion.h2>
        <motion.p initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: 'easeOut'}} className="text-2xl text-center leading-[2.2] text-gray-400">{Data.heroSection.description6}</motion.p>
      </div>
      <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: 'easeOut'}} className="flex flex-col justify-center items-center relative group">
        <Image src="/Banner02.png" alt="IMDA Image" width={1680} height={765} className=" w-4/5 h-auto transition-all duration-500 group-hover:opacity-40 z-10 rounded-xl group-hover:scale-105" />
        <h3 className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-4xl max-w-2xl text-center leading-normal z-20">{Data.heroSection.title7}</h3>
        <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-60 text-white text-xl py-1 px-6 rounded-3xl border-solid border-white border-2 z-20">View Story</button>
      </motion.div>
    </section>
    <section className="relative w-screen flex flex-col items-center">
      <Image src="/BG.png" alt="BackgroundImage" width={1920} height={1080} className="absolute top-0 translate-y-[-30%] w-screen h-auto z-0"/>
      <div className="flex flex-col justify-center items-center max-w-5xl z-10">
        <motion.h2 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: 'easeOut'}} className="text-6xl text-center leading-normal pb-15">{Data.heroSection.title8}</motion.h2>
        <motion.p initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: 'easeOut'}} className="text-2xl text-center leading-[2.2] text-gray-400">{Data.heroSection.description8}</motion.p>
      </div>
      <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: 'easeOut'}} className="flex flex-col justify-center items-center relative group pt-40">
        <Image src="/Banner03.png" alt="Circles X Image" width={1680} height={765} className=" w-4/5 h-auto transition-all duration-500 group-hover:opacity-40 z-10 rounded-xl group-hover:scale-105" />
        <h3 className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-4xl max-w-2xl text-center leading-normal z-20">{Data.heroSection.title9}</h3>
        <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-48 text-white text-xl py-1 px-6 rounded-3xl border-solid border-white border-2 z-20">View Story</button>
      </motion.div>
    </section>
    </>
  )
    
}
