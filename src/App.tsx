//@ts-nocheck
import React from 'react';
import { render } from 'react-dom';
import { saveAs } from 'file-saver';
import { Packer } from 'docx';

import { DocumentCreator } from './components/Form/cv-owngenerator';
import Form from './components/Form';

interface AppProps {}
interface AppState {
  name: string;
}

const App: React.FC<AppProps, AppState> = () => {
  const [localFile, setLocalFile] = React.useState(null);

  function generate() {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create();
    console.log('typeof doc', typeof doc);
    console.log('localFile', typeof localFile);
    console.log('doc', doc);
    console.log('localFile', localFile);

    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, 'example.docx');
    });
  }

  return (
    <div>
      <p>
        <Form setState={setLocalFile} generateDoc={generate} />
      </p>
    </div>
  );
};

export default App;
render(<App />, document.getElementById('root'));
