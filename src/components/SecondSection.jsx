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
      <div className="w-full flex justify-between items-center gap-9">
        <div className="w-1/2 flex flex-col gap-5 items-start justify-center xl:gap-7">
          <Image src={icon1} alt="" type="rounded" />
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
          <span className="pb-1 font-mono font-bold text-xl xl:pb-3 xl:text-2xl">
            Members
          </span>
          <div className="pb-2 flex gap-3 items-center">
            <Image src={member1} alt="" type="rounded" />
            <div className="flex flex-col">
              <span className="font-mono font-bold sm:text-sm lg:text-base">
                Dillon Kydd
              </span>
              <span className="font-mono text-[#66645E] sm:text-sm lg:text-base">
                100 SHARES
              </span>
            </div>
          </div>
          <div className="pb-2 flex gap-3 items-center">
            <Image src={member2} alt="" type="rounded" />
            <div className="flex flex-col">
              <span className="font-mono font-bold sm:text-sm lg:text-base">
                Anna Olsen
              </span>
              <span className="font-mono text-[#66645E] sm:text-sm lg:text-base">
                100 SHARES
              </span>
            </div>
          </div>
          <div className="pb-2 flex gap-3 items-center">
            <Image src={member3} alt="" type="rounded" />
            <div className="flex flex-col">
              <span className="font-mono font-bold sm:text-sm lg:text-base">
                Kas Moss
              </span>
              <span className="font-mono text-[#66645E] sm:text-sm lg:text-base">
                100 SHARES
              </span>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  );
}
