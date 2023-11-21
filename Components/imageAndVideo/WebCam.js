import React, { useEffect, useRef } from 'react';

const WebcamViewer = ({ startStream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    const stopCamera = () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => {
            track.stop();
          });
        }
      }
    };

    if (startStream) {
      startCamera();
    } else {
      stopCamera();
    }

    // Clean up the camera stream when the component is unmounted
    return () => {
      stopCamera();
    };
  }, [startStream]);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default WebcamViewer;
