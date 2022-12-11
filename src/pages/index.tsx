import Header from "../components/Header";
import { MainContainer } from "../components/MainContainer";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import profilePic from "../images/profile.png";
import { useTheme } from "../hooks/Theme";
import { Footer } from "../components/Footer";

export default function MainPage() {
  const { theme } = useTheme();
  return (
    <div className={`${theme}`}>
      <Header />
      <MainContainer>
        <div
          className={`
            flex  md:items-start flex-col md:flex-row md:justify-center
            mt-10
          `}
        >
          <Image
            className={`
              rounded-full
              h-45 w-44 sm:w-64 ml-5 sm:mt-5 mt-0
            `}
            src={profilePic}
            alt="Profile Image"
          />
          <div className="flex flex-col items-start mt-5 ml-8">
            <TypeAnimation
              sequence={["Olá, meu nome é Kevin Uehara"]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1.5em" }}
            />
            <TypeAnimation
              sequence={[1500, "Engenheiro de Software Frontend"]}
              wrapper="div"
              cursor={false}
              style={{ fontSize: "1.2em", color: "gray", textAlign: "center" }}
            />
            <section className="mt-5 mr-5">
              <p>{`Atualmente atuo como Engenheiro de Software Frontend no iFood.
              `}</p>
              <br />
              <p>{`Participo de forma cross em times multidisciplinares com foco em geolocalização do iFood, responsável pela logística de todo processo de localização, áreas de entrega, mapeamento de regiões e análises geográficas, assim, impactando na jornada do produto.
              `}</p>
              <br />
              <p>{`Atuei em empresas como CPqD, Sympla, Sinch Global, CI&T`}</p>
            </section>
          </div>
        </div>
      </MainContainer>
      <Footer />
    </div>
  );
}
