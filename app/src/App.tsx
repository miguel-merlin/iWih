import Home from "./pages/Home";
import UploadBox from "./components/uploadBox";
import UploadInfo from "./components/uploadInfo";
import "./styles/upload.css";

function App() {
  return (
    <div>
      <Home />
      <div id="upload-section">
        <UploadInfo />
        <UploadBox />
      </div>
    </div>
  );
}

export default App;
