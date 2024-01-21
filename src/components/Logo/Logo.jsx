// import Emblem from "../../images/emblem.svg";
// import Ecosolution from "../../images/ecosolution.svg";
import Emblem from "../../images/emb.svg";
import Ecosolution from "../../../public/eco.svg";
import Slogan from "../../images/slogan.svg";

import { LogoContainer, Svg } from "./Logo.styled";

function dataURItoBlobUrl(dataURI) {
  const svg = decodeURI(dataURI).split(",")[1];
  const blob = new Blob([svg], { type: "image/svg+xml" });

  return URL.createObjectURL(blob);
}

const blobUrl = dataURItoBlobUrl(Ecosolution);

const Logo = () => {
  return (
    <LogoContainer href="#main" aria-label="logo">
      {/* <Svg width="31px" height="18px">
        <use href={Emblem + "#emblem"} width="100%" height="100%" />
      </Svg>
      <div>
        <Svg width="170px" height="30px" focusable="true">
          <title>Ecosolution</title>
          <use href={Ecosolution + "#ecosolution"} width="100%" height="100%" />
        </Svg>
      </div> */}
      <Svg width="31px" height="18px">
        {/* <title>Greenergy for life</title> */}
        <use href={Emblem + "#emblem"} width="100%" height="100%" />
      </Svg>
      <Svg width="170px" height="30px">
        {/* <title>Greenergy for life</title> */}
        <use href={`${blobUrl}#ecosolution`} width="100%" height="100%" />
      </Svg>
      <Svg width="63px" height="21px">
        <title>Greenergy for life</title>
        <use href={Slogan + "#slogan"} width="100%" height="100%" />
      </Svg>
    </LogoContainer>
  );
};

export default Logo;
