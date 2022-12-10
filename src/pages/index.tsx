import Header from "../components/Header";
import { MainContainer } from "../components/MainContainer";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import profilePic from "../images/profile.png";

export default function MainPage() {
  return (
    <div>
      <Header />
      <MainContainer>
        <div
          className={`
            flex items-center md:items-start flex-col md:flex-row md:justify-center
            mt-10
          `}
        >
          <Image
            className={`
              rounded-full
              h-3/5
            `}
            src={profilePic}
            alt="Profile Image"
            width="250"
          />
          <div className="flex flex-col items-start mt-5 ml-8 text-center">
            <TypeAnimation
              sequence={["Olá, meu nome é Kevin Uehara"]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "2em" }}
            />
            <TypeAnimation
              sequence={[1500, "Engenheiro de Software Frontend"]}
              wrapper="div"
              cursor={false}
              style={{ fontSize: "1.6em", color: "gray", textAlign: "center" }}
            />
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
