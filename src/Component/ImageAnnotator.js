// src/ImageAnnotator.js
import React from "react";
import ReactImageAnnotate from "react-image-annotate";

const ImageAnnotator = () => {
  return (
    <div style={{ height: "100vh" }}>
      <ReactImageAnnotate
        labelImages
        regionClsList={["Car", "Person", "Tree"]}
        regionTagList={["Car", "Person", "Tree"]}
        images={[
          {
            src: "https://via.placeholder.com/600",
            name: "Image 1",
            regions: [],
          },
        ]}
      />
    </div>
  );
};

export default ImageAnnotator;
