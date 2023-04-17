//@ts-nocheck
import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import { saveAs } from "file-saver";
import { Packer } from "docx";

import { DocumentCreator } from "./components/Form/cv-owngenerator";
import Form from "./components/Form";

interface AppProps {}
interface AppState {
  name: string;
}

const App: React.FC<AppProps, AppState> = () => {
  const skipFirstRender = useRef(false);
  const [state, setState] = React.useState(null);

  function generate() {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create();

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "example.docx");
    });
  }

  useEffect(() => {
    if (skipFirstRender.current) {
      generate();
    }
    skipFirstRender.current = true;
  }, [state]);

  return (
    <div>
      <span>
        <Form setState={setState} />
      </span>
    </div>
  );
};

export default App;
render(<App />, document.getElementById("root"));
