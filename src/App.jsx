import { useState } from 'react'
import './App.css'
import Data from './components/Data'
import Form from './components/Form'
// import ChartExample from './components/ChartExample'

function App() {
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    setRefresh(!refresh);
  };
  return (
    <>
    <Form onSubmit={handleRefresh}  />
    <Data key={refresh} />
      {/* <ChartExample /> */}
    </>
  )
}

export default App
