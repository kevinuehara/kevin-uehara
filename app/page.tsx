import { Pill } from "@/components/Pill";
import Image from "next/image";
import { PiMicrophoneStageDuotone } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { HiOutlinePencil } from "react-icons/hi2";
import { BiSolidGroup } from "react-icons/bi";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { IoChatbubble } from "react-icons/io5";
import YouTube from "react-youtube";
import { YoutubeVideos } from "@/components/YoutubeVideos";

export default function Home() {
  return (
    <div className="w-fit h-fit bg-gray-950">
      <Header />
      <main className="h-full w-full">
        <section className="flex flex-col md:flex-row text-white items-center gap-16 md:pt-40 pt-20 md:-mt-20 -mt-10">
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

        <section className="flex flex-col items-center bg-gray-950  text-white h-full mt-12">
          <h2 className="text-5xl font-extrabold">Work</h2>
          <div className="flex flex-col w-full justify-center items-center">
            <Card className="w-10/12 mt-20 flex flex-col md:flex-row rounded-xl p-8 gap-5">
              <div className="flex md:flex-row flex-col justify-center items-center">
                <Image
                  src="/ifood.png"
                  alt="IFood Image Logo"
                  className="dark:invert rounded-3xl mt-5 mr-5"
                  width={200}
                  height={200}
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="flex flex-col">
                  <h3 className="text-3xl font-extrabold mb-5 ">
                    Staff Frontend Engineer
                  </h3>

                  <span className="text-gray-300 ">
                    Participate in the development of geographic solutions on
                    the frontend, develop and manage platforms for the Location
                    team. It creates and develops platforms that generate value
                    and add to the experience of operating users. aParticipates
                    in the development of geographic solutions on the frontend,
                    develops and manages the platforms of the Location team. It
                    creates and develops applications that generate value and
                    add to the experience of operating users.
                  </span>
                  <span className="text-gray-300 ">
                    Has experience with platforms in frontend solutions using
                    monorepo, micro-frontend, maps and more. It operates
                    cross-functionally in multidisciplinary teams focused on
                    iFoods geolocation, responsible for the logistics of the
                    entire localization process, delivery areas, mapping regions
                    and geographic analyses, thus impacting the products
                    journey.
                  </span>
                </div>
              </div>
            </Card>

            <Card className="w-10/12 mt-5 flex flex-col md:flex-row rounded-xl p-8 gap-5">
              <div className="flex md:flex-row flex-col justify-center items-center">
                <Image
                  src="/nodebr.png"
                  alt="NodeBR Image Logo"
                  className="dark:invert rounded-3xl mt-5 mr-5 mb-10"
                  width={200}
                  height={200}
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="flex flex-col">
                  <h3 className="text-3xl font-extrabold mb-5 ">
                    Community Partner and Collaborator
                  </h3>

                  <span className="text-gray-300 ">
                    Partner and content creator in the NodeBR community.
                    Responsible for participating, coordinating and assisting in
                    the Brazilian community. I organized an in-person meetup in
                    partnership with ifood called Frontend Universe with 120
                    people and 3 speakers in 2024.
                  </span>
                </div>
              </div>
            </Card>

            <Card className="w-10/12 mt-5 flex flex-col md:flex-row rounded-xl p-8 gap-5">
              <div className="flex md:flex-row flex-col justify-center items-center">
                <Image
                  src="/gdg.svg"
                  alt="Google Developer Groups Image Logo"
                  className="dark:invert rounded-3xl mt-5 mr-5 mb-10"
                  width={200}
                  height={200}
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="flex flex-col">
                  <h3 className="text-3xl font-extrabold mb-5">
                    Collaborator at Google Developer Groups Campinas
                  </h3>

                  <span className="text-gray-300">
                    Collaborator at GDG Campinas (Google Developer Groups).
                    Responsible for organizing, creating and bringing events to
                    the Campinas community, representing the Google community.
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <YoutubeVideos />
      </main>
    </div>
  );
}
