// import FeedbackForm from "./FeedbackForm"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AromaticFeedback from "./AromaticFeedback"
import TablePage from "./TablePage"


const App = () => {
  return (
<div>
<Router>
  <Routes>
    <Route path='/' element={<AromaticFeedback />} />
    <Route path='/table-page' element={<TablePage/>} />
     
  </Routes>
</Router>
</div>
  )
}

export default App