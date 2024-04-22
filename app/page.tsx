import { Pill } from "@/components/Pill";
import Image from "next/image";
import { PiMicrophoneStageDuotone } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { HiOutlinePencil } from "react-icons/hi2";
import { BiSolidGroup } from "react-icons/bi";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { IoChatbubble } from "react-icons/io5";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-950 relative">
      <Header />
      <main className="h-full w-full">
        <section className="flex flex-col md:flex-row text-white items-center gap-16 md:pt-40 pt-20">
          <div className="flex flex-col items-center md:items-start gap-3 w-full p-4 md:w-1/2 md:ml-32 mt-5">
            <h1 className="md:text-5xl text-4xl font-extrabold">
              Hello, my name is
            </h1>
            <h1 className="md:text-5xl text-4xl font-extrabold">
              Kevin Uehara
            </h1>
            <span className="md:text-2xl text-xl mt-4 md:text-start text-center">
              Brazilian Staff Frontend Engineer at IFood, NodeBR Collaborator,
              GDG Campinas, FrontIn Campinas Organizer, Speaker and Content Tech
              Creator.
            </span>
            <div className="flex gap-2">
              <Pill label="Developer" className="bg-purple-950 text-xl">
                <FaCode />
              </Pill>
              <Pill label="Speaker" className="bg-purple-950 text-xl">
                <PiMicrophoneStageDuotone />
              </Pill>
              <Pill label="Writer" className="bg-purple-950 text-xl">
                <HiOutlinePencil />
              </Pill>
            </div>
          </div>

          <Image
            src="/kevin.jpg"
            alt="Kevin Uehara Photo"
            className="dark:invert rounded-3xl mt-5 md:ml-5"
            width={400}
            height={500}
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </section>
        <section className="flex justify-center items-center bg-gray-950 mt-0">
          <Card className="w-10/12 mt-20 flex flex-col md:flex-row rounded-xl p-8 gap-5">
            <section className="flex flex-col text-white md:w-1/3 w-full">
              <FaCode className="text-purple-600 text-5xl" />
              <h1 className="text-3xl mt-2 font-extrabold">
                Staff Frontend Engineer
              </h1>
              <span className="text-xl text-gray-300 mt-2">
                Leadership of frontend teams, currently at IFood Company, the
                big tech food delivery in Brazil
              </span>
            </section>

            <section className="flex flex-col text-white md:w-1/3 w-full">
              <BiSolidGroup className="text-purple-600 text-5xl" />
              <h1 className="text-3xl mt-2 font-extrabold">
                Community Partner
              </h1>
              <span className="text-xl text-gray-300 mt-2">
                Community partner and collaborator in NodeBR, GDG Campinas
                (Google Developer Groups), FrontIn Organizer. Also Speaker on
                national and international events.
              </span>
            </section>

            <section className="flex flex-col text-white md:w-1/3 w-full">
              <IoChatbubble className="text-purple-600 text-5xl" />
              <h1 className="text-3xl mt-2 font-extrabold">Content Creator</h1>
              <span className="text-xl text-gray-300 mt-2">
                Content creator at Youtube channel and writing articles on
                dev.to
              </span>
            </section>
          </Card>
        </section>
      </main>
    </div>
  );
}
