import React from 'react';
import { Button } from '.';

const PNG_FILE_URL = 'files/thanh-tran-resume.pdf';
const DownloadBtn = () => {
  const downloadFile = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    window.open(url, '_blank');
    aTag.click();
    aTag.remove();
    console.log('Download button clicked'); // Check if click event is firing
    console.log('PDF_FILE_URL:', url); // Check the URL being used for download
    console.log('File downloaded!');
  }
  return (
    <Button onClick={()=> {downloadFile(PNG_FILE_URL)}}>View Resume</Button>
  )
  
};

export default DownloadBtn
