import React from 'react';
import { useHistory } from 'react-router-dom';


const ButtonBack = (props) => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }

  return <button type="button" onClick={handleBack}>Back</button>
}

export default ButtonBack;