import Home from "./pages/Home";
import UploadBox from "./pages/components/uploadBox";
import UploadInfo from "./pages/components/uploadInfo";
import "./pages/components/upload.css";

function App() {
  return (
    <div>
      <Home></Home>
      <div id="upload-section">
        <UploadInfo></UploadInfo>
        <UploadBox></UploadBox>
      </div>
    </div>
  );
}

export default App;
