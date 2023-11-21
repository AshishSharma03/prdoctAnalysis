import React, { useEffect, useState } from 'react'
import { PiVideoCameraLight } from "react-icons/pi";
import { CiCamera } from "react-icons/ci";
import ImageUploader from './imageAndVideo/imageUploader';
import WebcamViewer from './imageAndVideo/WebCam';
function VisionView() {
    const [realTime, setRealTime] = useState('');
    const [stream , setStram] = useState(false)

    useEffect(()=>{
        if(realTime === 'VIDEO'){
            setStram(true)
        }

    },[realTime])

    const backHandle =()=>{
        setRealTime('')
        setStram(false)
    }

  return (
    <div className='Visionbox'>
       
     
        {(realTime === 'IMAGE')?
            
            <div>
            <ImageUploader/>
            <button onClick={backHandle}>back</button>
            </div>
           :(realTime === 'VIDEO')?
           <div>
           <WebcamViewer startStream={stream} />
           <button onClick={()=>{setRealTime('')}}>back</button>
           </div>:
           <>
           <button className='visionButton' onClick={()=>{setRealTime('IMAGE')}}>
               <CiCamera className='visionButtonIvon'/>
               from Image 
           </button>
           <button className='visionButton' onClick={()=>{setRealTime('VIDEO')}} >
           <PiVideoCameraLight  className='visionButtonIvon'/>
               Real time Camera
           </button>
           </>
        }
  
    </div>
  )
}

export default VisionView