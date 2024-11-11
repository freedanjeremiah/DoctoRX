import React, { useState } from 'react';
import { useSpheronUpload } from '@spheron/browser-upload';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const { upload } = useSpheronUpload();

  const handleUpload = async () => {
    const uploadToken = await upload(file);

    // Upload the file to Spheron using the uploadToken.
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;