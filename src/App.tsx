import React, { useEffect, useRef, useCallback } from "react";
import { render } from "react-dom";
import { saveAs } from "file-saver";
import { Packer } from "docx";
import { DocumentCreator } from "./components/Form/cv-owngenerator";
import Form from "./components/Form";
import { TStateInApp } from "./types";

const App = () => {
  const skipFirstRender = useRef(false);
  const [state, setState] = React.useState<TStateInApp>(null);

  const memoizedGenerate = useCallback(
    function generate() {
      const documentCreator = new DocumentCreator();
      const doc = documentCreator.create(state!.fields);

      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "example.docx");
      });
    },
    [state],
  );

  useEffect(() => {
    if (skipFirstRender.current) {
      memoizedGenerate();
    }
    skipFirstRender.current = true;
  }, [state, memoizedGenerate]);

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
