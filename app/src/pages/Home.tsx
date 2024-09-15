import Intro from "./components/Intro";
import PaperUpload from "./components/PaperUpload";
import SearchInput from "./components/SearchInput";

import UploadInfo from "../pages/components/uploadInfo";
import UploadBox from "../pages/components/uploadBox";
import "../styles/upload.css";

function Home() {
  return (
    <div>
      <Intro />
      <div id="upload-section">
        <UploadInfo></UploadInfo>
        <UploadBox></UploadBox>
      </div>
    </div>
  );
}

export default Home;

//<Intro/>
//<PaperUpload />
//<SearchInput />
