import Head from "next/head";
import Image from "next/image";
import { Button, Footer, HomeContainer, HomeWrapper } from "../styles/home";

import { InstagramLogo } from "phosphor-react";
import Link from "next/link";

import UnamaLogo from "../assets/unamamobile.png"
import illustration from "../assets/illustration.png";

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Projeto Direciona Família</title>
        <meta
          name="description"
          content="PROJETO DE EXTENSÃO REALIZADO POR DISCENTES
DO CURSO DE DIREITO - UNAMA ANANINDEUA"
        />
      </Head>

      <HomeWrapper>
        <div>
          <h1>Projeto Direciona Família</h1>
          <Link href="/cartilha.pdf">
            <Button>Saiba mais</Button>
          </Link>
          <a
            href="https://www.instagram.com/direcionafamilia/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo color="white" size={35} />
          </a>
        </div>
        <Image src={illustration} alt="" />
      </HomeWrapper>

      <Footer>
        <Image src={UnamaLogo} alt="" />
      </Footer>

    </HomeContainer>
  );
}
