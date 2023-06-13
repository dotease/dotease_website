import { ReactCompareSlider } from "react-compare-slider";

function CodeCompare() {
  return <ReactCompareSlider className={"border-none shadow-none"} itemOne={<BadCodeElement />} itemTwo={<GoodCodeElement />} />;
}

function BadCodeElement() {
  return <img src={"/bad_code.png"} alt={"bad html code"} />;
}

function GoodCodeElement() {
  return <img src={"/good_code.png"} alt={"good html code"} />;
}

export default CodeCompare;
