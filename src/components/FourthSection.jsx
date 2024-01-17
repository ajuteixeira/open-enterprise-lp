import Container from "./Container";
import Title from "./Title";
import Text from "./Text";
import Card from "./Card";
import Button from "./Button";

export default function FourthSection() {
  return (
    <Container>
      <div className="px-24 pb-7 flex flex-col gap-3 text-center">
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
          <div className="flex flex-col justify-start gap-4">
            <span className="font-mono font-bold text-base sm:text-sm lg:text-base">
              Ideate a list of features based on the Sociocracy...
            </span>
            <span className="font-mono text-xs lg:text-sm text-[#303031]">
              We're looking for someone interested in business theory and
              research that'll help us bridge the gap between our...
            </span>
            <div className="w-full flex justify-between items-center sm:gap-9">
              <span className="px-3 py-1 text-sm font-mono font-medium tracking-tighter rounded-full text-white bg-[#71A894] sm:text-xs sm:text-center lg:text-sm">
                5 AUT
              </span>
              <span className="font-mono font-bold text-base sm:text-xs lg:text-sm">
                Apply by May 15
              </span>
            </div>
          </div>
        </Card>
        <Card type="default" color="white" align="left">
          <div className="flex flex-col justify-start gap-4">
            <span className="font-mono font-bold text-base sm:text-sm lg:text-base">
              Update documentation with FAQs
            </span>
            <span className="font-mono text-xs lg:text-sm text-[#303031]">
              Review our community chat for the most frequently asked questions
              and document answers for our product docs.
            </span>
            <div className="w-full flex justify-between items-center sm:gap-9">
              <span className="px-3 py-1 text-sm font-mono font-medium tracking-tighter rounded-full text-white bg-[#71A894] sm:text-xs sm:text-center lg:text-sm">
                10 AUT
              </span>
              <span className="font-mono font-bold text-base sm:text-xs lg:text-sm">
                Apply by May 18
              </span>
            </div>
          </div>
        </Card>
        <Card type="default" color="white" align="left">
          <div className="flex flex-col justify-start gap-4">
            <span className="font-mono font-bold text-base sm:text-sm lg:text-base">
              Tutorial video series
            </span>
            <span className="font-mono text-xs lg:text-sm text-[#303031]">
              Create a series of video tutorials that cover everything from
              start to finish on using Open Enterprise.
            </span>
            <div className="w-full flex justify-between items-center sm:gap-9">
              <span className="px-3 py-1 text-sm font-mono font-medium tracking-tighter rounded-full text-white bg-[#71A894] sm:text-xs sm:text-center lg:text-sm">
                40 AUT
              </span>
              <span className="font-mono font-bold text-base sm:text-xs lg:text-sm">
                Apply by May 20
              </span>
            </div>
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
