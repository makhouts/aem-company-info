import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';

function App() {
  const [vat, setVat] = useState('');
  const [info, setInfo] = useState();
  const [showSpinner, setShowSpinner] = useState(false);

  const getVat = () => {
    setShowSpinner(true)
    if(vat === '') {
      alert('Give a VAT number in!');
    } else {
      axios.get(`https://controleerbtwnummer.eu/api/validate/${vat}.json`)
      .then(response => {
        if(response.data.valid) {
          console.log(response);
          setInfo(response.data);
          setShowSpinner(false);
        } else {
          alert('Invalid VAT number');
          setShowSpinner(false);
        }
      })
      .catch(err => alert(err));
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="VAT number"
        value={vat}
        onChange={(e) => setVat(e.target.value)}
        maxLength={14}
      />
      <br />
      <button onClick={getVat}>GET INFO</button>
      {info !== undefined && <Form showSpinner={showSpinner} info={info} /> }
    </div>
    
  );
}

export default App;
