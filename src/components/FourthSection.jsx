import Container from "./Container";
import Title from "./Title";
import Text from "./Text";
import Card from "./Card";
import Button from "./Button";

export default function FourthSection() {
  return (
    <Container>
      <div className="px-24 pb-7 flex flex-col gap-7 text-center">
        <Title type="secondary">Help us improve Open Enterprise</Title>
        <Text>
          As an Open Enterprise ourselves, we are actively looking for new
          talent to join our mission of improving and delivering the Open
          Enterprise model to the world. Apply for open tasks and earn a stake
          in our success.
        </Text>
      </div>
      <div className="flex gap-5 justify-between">
        <Card type="default" color="white" align="left">
          <span className="font-mono font-bold text-base">
            Ideate a list of features based on the Sociocracy model
          </span>
          <span className="font-mono text-xs text-[#303031]">
            We're looking for someone interested in business theory and research
            that'll help us bridge the gap between our s...
          </span>
          <div className="w-full flex justify-between items-center">
            <span className="px-3 py-1 text-sm font-mono font-medium tracking-tighter rounded-full text-white bg-[#71A894]">
              5 AUT
            </span>
            <span className="font-mono font-bold text-base">
              Apply by May 15
            </span>
          </div>
        </Card>
        <Card type="default" color="white" align="left">
          <span className="font-mono font-bold text-base">
            Update documentation with FAQs
          </span>
          <span className="font-mono text-xs text-[#303031]">
            Review our community chat for the most frequently asked questions
            and document answers for our product docs.
          </span>
          <div className="w-full flex justify-between items-center">
            <span className="px-3 py-1 text-sm font-mono font-medium tracking-tighter rounded-full text-white bg-[#71A894]">
              10 AUT
            </span>
            <span className="font-mono font-bold text-base">
              Apply by May 18
            </span>
          </div>
        </Card>
        <Card type="default" color="white" align="left">
          <span className="font-mono font-bold text-base">
            Tutorial video series
          </span>
          <span className="font-mono text-xs text-[#303031]">
            Create a series of video tutorials that cover everything from start
            to finish on using Open Enterprise.
          </span>
          <div className="w-full flex justify-between items-center">
            <span className="px-3 py-1 text-sm font-mono font-medium tracking-tighter rounded-full text-white bg-[#71A894]">
              40 AUT
            </span>
            <span className="font-mono font-bold text-base">
              Apply by May 20
            </span>
          </div>
        </Card>
      </div>
      <div className="w-full mt-12 text-center">
        <Button color="black" type="default">
          View more
        </Button>
      </div>
    </Container>
  );
}
