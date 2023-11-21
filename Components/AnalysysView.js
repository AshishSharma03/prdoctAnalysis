import React, { useEffect, useState } from 'react';
import { useMyContext } from '../context/GenerateProvider';

const AnalysysView = () => {
  const { Generate, setGenerate, setData } = useMyContext();

  const onGenerateData = async () => {
    try {
      setGenerate(true);
      setData('');
      const response = await fetch('/api/deleteall', {
        method: 'POST',
      });

      if (response.ok) {
        console.log('All data deleted successfully');
      } else {
        console.error('Error deleting all data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setGenerate(false);
    }
  };

  return (
    <div className='AnalysysBox'>
      <button className='GenerateButton' onClick={onGenerateData} disabled={Generate}>
        {Generate ? 'Generating...' : 'Generate'}
      </button>
    </div>
  );
};

export default AnalysysView;
