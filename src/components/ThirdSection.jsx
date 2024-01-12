import Container from "./Container";
import Title from "./Title";
import Text from "./Text";
import Card from "./Card";
import Image from "./Image";
import Button from "./Button";

import icon2 from "../assets/images/icon-2.png";
import member4 from "../assets/images/member-4.png";

export default function ThirdSection() {
  return (
    <Container>
      <div className="flex items-center justify-between gap-12">
        <Card type="border" color="white" align="left">
          <div className="pb-2 flex gap-3 items-center">
            <Image src={member4} alt="" type="rounded" />
            <div className="flex flex-col">
              <span className="font-mono font-bold">Jassir Jonis</span>
              <span className="font-mono text-xs text-[#66645E]">
                Pre-seed angel investor
              </span>
            </div>
          </div>
          <span className="font-mono text-xs text-[#303031]">
            Hey guys, love what you're doing and I'm convinced that together
            we'll achieve amazing things.
          </span>
          <div className="w-full my-2 flex items-center justify-start gap-14">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#66645E]">COMMIT</span>
              <span className="font-mono text-md font-medium text-[#303031]">
                10,000 DAI
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#66645E]">SHARES</span>
              <span className="font-mono text-md font-medium text-[#303031]">
                20
              </span>
            </div>
          </div>
          <Button color="black" type="small">
            Go to vote
          </Button>
        </Card>
        <div className="w-1/2 flex flex-col gap-3 items-start justify-center">
          <Image src={icon2} alt="" type="rounded" />
          <Title type="secondary">
            Onboard users, investors and advisors as you grow
          </Title>
          <Text>
            You've bootstrapped and delivered an MVP, and some investors and
            advisors are interested in having a chat with you. As an Open
            Enterprise, you can onboard them seamlessly into your digital
            organization and align them with your success.
          </Text>
        </div>
      </div>
    </Container>
  );
}
