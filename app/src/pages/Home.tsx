import Intro from "./components/Intro";
import PaperUpload from "./components/PaperUpload";
import SearchInput from "./components/SearchInput";
import UploadBox from "./components/uploadBox";
import UploadInfo from "./components/uploadInfo";

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
