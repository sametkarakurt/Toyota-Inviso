import {useEffect} from 'react';
import axios from 'axios';

function useSend(url, formData) {
  const sendData = async () => {
    try {
      if (url) {
        axios.post(url, formData).then(function (response) {
          console.log(response);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendData();
  }, [url]);

  return null;
}

export default useSend;
