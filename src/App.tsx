import { BlogCard } from "@walmart/gtp-design";
import {content, bottomTags} from "./constant"

function App() {
  return (
    <div className="App">
    <header className="App-header">
          <BlogCard
            avatarImage="./Docker.svg"
            bottomTags={bottomTags}
            content={content}
            heading="Docker Desktop is now available for download and install via the EDLP appstore"
            children
          />
          </header>
  </div>
  );
}

export default App;
