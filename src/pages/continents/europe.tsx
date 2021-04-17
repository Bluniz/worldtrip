import { Flex, Heading } from "@chakra-ui/react";
import { CardList } from "../../components/CardList";
import { ContinentSummary } from "../../components/ContinentSummary";
import { Header } from "../../components/Header";

const data = [
  {
    title: "Londres",
    subtitle: "Reino Unido",
    icon: "/images/icons/reino-unido.svg",
    image: "/images/londres.svg",
  },
  {
    title: "Paris",
    subtitle: "França",
    icon: "/images/icons/france.svg",
    image: "/images/paris.svg",
  },
  {
    title: "Roma",
    subtitle: "Itália",
    icon: "/images/icons/italia.svg",
    image: "/images/roma.svg",
  },
  {
    title: "Praga",
    subtitle: "República Tcheca",
    icon: "/images/icons/checa.svg",
    image: "/images/praga.svg",
  },
  {
    title: "Amsterdã",
    subtitle: "Holanda",
    icon: "/images/icons/holanda.svg",
    image: "/images/amster.svg",
  },
];

const summaryData = [
  {
    title: "50",
    description: "paises",
  },
  {
    title: "60",
    description: "línguas",
  },
  {
    title: "27",
    description: "cidades +100",
  },
];

export default function EuropeLandingPage() {
  return (
    <Flex w="100%" h="auto" direction="column">
      <Header />
      <Flex
        h="350px"
        bgImage="url('/images/europeBanner.svg')"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify="center"
      >
        <Flex w="90%" h="85%" direction="column" justify="flex-end">
          <Heading as="h1" color="gray.50">
            Europe
          </Heading>
        </Flex>
      </Flex>

      <ContinentSummary
        text="A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
        data={summaryData}
      />

      <Flex w="100%" justify="center">
        <Flex w="92%" direction="column">
          <Heading as="h3" fontSize="30px" mb="20px">
            Cidades 100+
          </Heading>

          <CardList data={data} />
        </Flex>
      </Flex>
    </Flex>
  );
}
