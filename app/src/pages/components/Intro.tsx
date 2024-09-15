import "../../styles/Intro.css";
import cloud from "../../assets/cloud.png";

function Intro() {
  return (
    <div id="thing">
      <div id="intro">
        <h1>Invisible Women in Health</h1>
        <p>
          Invisible Women in Health is a initiative to bring the efforts of
          women in healthcare to light. Research is often cluttered with bias
          and does not account for the research and achievements that women do.
          IWiH aims to use AI for the good for women in healthcare.
        </p>
        <h3>Scroll Down to Check your File</h3>
      </div>
      <img id="cloud" src={cloud} />
    </div>
  );
}

export default Intro;
