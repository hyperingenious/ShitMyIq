import { useState } from "react"
import HeroSection from "./HeroSection"
import FormPage from './FormPage'
import QuestionSection from "./QuestionSection"

function App() {
  const [page, setPage] = useState('home');
  const [formData, setMyFormData] = useState()
  return (
    <div className="text-3xl">
      {
        page === 'home' && <HeroSection page={page} setPage={setPage} />
      }
      {
        page === 'form' && <FormPage page={page} setPage={setPage} setMyFormData={setMyFormData} />
      }
      {
        page === 'questions' && <QuestionSection page={page} setPage={setPage} myFormData={formData} />
      }
    </div>
  )
}

export default App
