import React, { useRef } from 'react';
import '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import './App.css';

function App() {
  const imageRef = useRef(null);

  const detectObjects = async () => {
    const imageElement = imageRef.current;
    const model = await cocoSsd.load();
    const predictions = await model.detect(imageElement);

    drawBoundingBoxes(predictions);
  };

  const drawBoundingBoxes = (predictions) => {
    const canvas = document.getElementById('outputCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    predictions.forEach((prediction) => {
      ctx.beginPath();
      ctx.rect(...prediction.bbox);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'red';
      ctx.fillStyle = 'red';
      ctx.stroke();
      ctx.fillText(
        `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
        prediction.bbox[0],
        prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10
      );
    });
  };

  return (
   <>
   Loading...
   </>
  );
}

export default App;
