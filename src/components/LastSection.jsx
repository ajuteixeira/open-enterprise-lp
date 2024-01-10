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
        <header className="flex justify-between items-center">
          <div className="w-2/3 flex flex-col items-start gap-7">
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
        </header>
      </Container>
    </>
  );
}
