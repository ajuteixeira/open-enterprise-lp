import Container from "./Container";
import Title from "./Title";
import Text from "./Text";
import Card from "./Card";
import Image from "./Image";

import iconCard1 from "../assets/images/card-icon-1.png";
import iconCard2 from "../assets/images/card-icon-2.png";
import iconCard3 from "../assets/images/card-icon-3.png";

export default function FirstSection() {
  return (
    <Container>
      <div className="flex flex-col gap-3 pb-7 lg:px-24 xl:gap-7 text-center">
        <Title type="secondary">Reimagining what it means to work</Title>
        <Text>
          Teams and communities using Open Enterprise fundamentally unlock a
          reality of work that reimagines how people engage in economic
          opportunity, meeting the demands and expectations of a modern
          organization.
        </Text>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row sm: justify-between xl:gap-10">
        <Card type="default" color="white" align="center">
          <Image src={iconCard1} alt="" />
          <Title type="tertiary">Modern workforce</Title>
          <div className="text-center">
            <Text>
              Multistakeholder governance aligns employees with the
              organization's wider community.
            </Text>
          </div>
        </Card>
        <Card type="default" color="white" align="center">
          <Image src={iconCard2} alt="" />
          <Title type="tertiary">Meritocratic by design</Title>
          <div className="text-center">
            <Text>
              Tokenized ownership aligns deeply committed individuals with the
              organization's success.
            </Text>
          </div>
        </Card>
        <Card type="default" color="white" align="center">
          <Image src={iconCard3} alt="" />
          <Title type="tertiary">Engineered for resilience</Title>
          <div className="text-center">
            <Text>
              Open Enterprise supports best practices in sociocratic management.
            </Text>
          </div>
        </Card>
      </div>
    </Container>
  );
}
