import { useState } from "react";
import "../../styles/upload.css";
import PieChart from "../../assets/diagrams/authors_pie_chart.png";
import Participants from "../../assets/diagrams/participants_pie_chart.png";
import Pronouns from "../../assets/diagrams/pronouns_pie_chart.png";

const UploadBox = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <div>
      <div>
        <form id="upload-box">
          <svg
            id="upload-cloud"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cloud-arrow-up-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z" />
          </svg>
          <div id="file-buttons">
            <input id="file-input" type="file" onChange={handleFileChange} />
            <button id="upload-button" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
      <div>
        {file && (
          <div>
            <p>Selected file: {fileName}</p>
            <img src={PieChart} alt="piechart" />
            <img src={Participants} alt="participants" />
            <img src={Pronouns} alt="piechart" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadBox;
