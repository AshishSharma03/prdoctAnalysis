import React, { useEffect, useState } from 'react';
import Data from './Data';
import { useMyContext } from '../context/GenerateProvider';

function AnalysysTextView() {
  const { Generate, setGenerate, ResoposnseData, setResoposnseData } = useMyContext();
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/getGenerateDeepModel');

      if (response.ok) {
        const data = await response.json();
        setResoposnseData(true)
        // setGenerate(false)
        console.log(data)
        setPosts(data.data[0]);
      } else {
        console.error('Error fetching data:', response.statusText);
        setResoposnseData(false);
        setGenerate(false)
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setResoposnseData(false);
      setGenerate(false)
    }
  };

  useEffect(() => { 

    if(posts === undefined ){
      setResoposnseData(false)
      setTimeout(()=>{
        setGenerate(false)
      },12000)
    }
    fetchData();

  },); 


  return (
    <div className='AnalysysTextView'>
      <h3>Generated Analysis Review</h3>
      {Generate ? (
        <div className='textLaodedView'>
          <span className='loadingShine' />
          <span className='loadingShine' />
          <span className='loadingShine' />
          <span className='loadingShine' />
          <span className='loadingShine' style={{ width: '50%' }} />
        </div>
      ) : (
        <div className='textView'>
          {ResoposnseData ? (
            <Data title={posts?.title} content={posts?.content} />
          ) : (
            'Click Generate Button'
          )}
        </div>
      )}
    </div>
  );
}

export default AnalysysTextView;
