import { HeroContainer } from "./style";

export function Hero() {
  return (
    <HeroContainer>
      <div className="heroContent">
        <h1 className="heroTitle">
          Ajudando você a ter {""}
          <span className="heroTitleHighlight">mais performance</span>
        </h1>
        <p className="heroSubtitle">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
        <button className="heroButton">Confira</button>
      </div>
    </HeroContainer>
  );
}
