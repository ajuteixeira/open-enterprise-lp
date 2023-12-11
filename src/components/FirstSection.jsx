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
      <div className="px-24 pb-7 flex flex-col gap-7 text-center">
        <Title type="secondary">Reimagining what it means to work</Title>
        <Text>
          Teams and communities using Open Enterprise fundamentally unlock a
          reality of work that reimagines how people engage in economic
          opportunity, meeting the demands and expectations of a modern
          organization.
        </Text>
      </div>
      <div className="flex gap-5 justify-between">
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
          <Image src={iconCard1} alt="" />
          <Title type="tertiary">Modern workforce</Title>
          <Text>
            Multistakeholder governance aligns employees with the organization's
            wider community.
          </Text>
        </Card>
        <Card type="default" color="white" align="center">
          <Image src={iconCard1} alt="" />
          <Title type="tertiary">Modern workforce</Title>
          <Text>
            Multistakeholder governance aligns employees with the organization's
            wider community.
          </Text>
        </Card>
      </div>
    </Container>
  );
}
