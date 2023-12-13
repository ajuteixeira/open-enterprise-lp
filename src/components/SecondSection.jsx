import Container from "./Container";
import Title from "./Title";
import Text from "./Text";
import Card from "./Card";
import Image from "./Image";

import icon1 from "../assets/images/icon-1.png";
import member1 from "../assets/images/member-1.png";
import member2 from "../assets/images/member-2.png";
import member3 from "../assets/images/member-3.png";

export default function SecondSection() {
  return (
    <Container>
      <div className="flex justify-start items-center">
        <div className="w-2/3 flex flex-col gap-7 items-start justify-center">
          <Image src={icon1} alt="" />
          <Title type="secondary">
            Kickstart an organization with your co-founders
          </Title>
          <Text>
            It's the early days, you just had a long conversation with two
            friends about a meaningful challenge that you're all passionate
            about and have a potential solution for. You're ready to embark the
            startup journey.
          </Text>
        </div>
        <Card type="border-shadow" color="white" align="left">
          <span className="pb-1 font-mono font-bold text-xl">Members</span>
          <div className="pb-2 flex gap-3 items-center">
            <Image src={member1} alt="" type="rounded" />
            <div className="pb-2 flex flex-col">
              <span className="font-mono font-bold">Dillon Kydd</span>
              <span className="font-mono text-[#66645E]">100 SHARES</span>
            </div>
          </div>
          <div className="pb-2 flex gap-3 items-center">
            <Image src={member2} alt="" type="rounded" />
            <div className="flex flex-col">
              <span className="font-mono font-bold">Anna Olsen</span>
              <span className="font-mono text-[#66645E]">100 SHARES</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={member3} alt="" type="rounded" />
            <div className="flex flex-col">
              <span className="font-mono font-bold">Kas Moss</span>
              <span className="font-mono text-[#66645E]">100 SHARES</span>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  );
}
