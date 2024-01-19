import Container from "./Container";
import Title from "./Title";
import Text from "./Text";
import Button from "./Button";
import Image from "./Image";
import imgDivider from "../assets/images/divider.png";
import imgLastsection from "../assets/images/illustration-2.png";

export default function LastSection() {
  return (
    <>
      <Image src={imgDivider} alt="" />
      <Container>
        <div className="flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center text-center gap-3 sm:w-2/3 sm:items-start sm:text-left lg:gap-5 xl:w-1/2 xl:gap-7">
            <Title type="secondary">Start an Open Enterprise</Title>
            <Text>
              If you can't wait to run a new or existing organization on Open
              Enterprise and are willing to explore and navigate the beta, we'd
              love to get you started.
            </Text>
            <Button color="green" type="default">
              Request early access
            </Button>
          </div>
          <div>
            <Image src={imgLastsection} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
}
