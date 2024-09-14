import UploadInfo from "./components/uploadInfo";
import UploadBox from "./components/uploadBox";
import "./styles/upload.css";

function App() {
  return (
    <div>
      <div id="upload-section">
        <UploadInfo />
        <UploadBox />
      </div>
    </div>
  );
}

export default App;
