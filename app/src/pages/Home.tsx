import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import PaperUpload from "../components/PaperUpload";
import SearchInput from "../components/SearchInput";

function Home() {
  return (
    <div>
      <NavBar />
      <Intro />
      <PaperUpload />
      <SearchInput />
    </div>
  );
}

export default Home;
