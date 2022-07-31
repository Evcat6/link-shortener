import React, { useState } from 'react';
import { Input, LinkDisplay, Copied } from './components'
import axios from 'axios';



function App() {


  const [ query, setQuery ] = useState('')
  const [ data, setData ] = useState('')

  const API_URL = 'https://api.shrtco.de/v2/shorten?url'


  const fetchData = () => {
      axios.post(`${API_URL}=${query}`)
      .then((response) =>  
      {  
          setData(response.data)

      } )
  }

  //

  const [ copied, setCopied ] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(data)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
          }, 6000)
    }


  return (
      <div className="App">
      <Input fetchData={fetchData} query={query} setQuery={setQuery}/>
      <LinkDisplay copyToClipboard={copyToClipboard} data={data} />
      {copied &&  <Copied/>}
    </div>

  );
}

export default App;
