import Text from "./Text";
import Title from "./Title";
import imgHero from "../assets/images/illustration-1.png";
import Image from "./Image";
import Container from "./Container";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <Container>
        <header className="flex flex-col items-center sm:flex-row sm:justify-between sm:gap-5">
          <div className="flex flex-col items-center text-center gap-2 sm:w-2/3 sm:items-start sm:text-left lg:gap-5">
            <Title type="primary">A new model for open collaboration</Title>
            <Text>
              Run an organization where members get rewarded for their
              contributions with fractional ownership.
            </Text>
            <Button color="green" type="default">
              Request early access
            </Button>
          </div>
          <div>
            <Image src={imgHero} alt="" type="default" />
          </div>
        </header>
      </Container>
    </>
  );
}
