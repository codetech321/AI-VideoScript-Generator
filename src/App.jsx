import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { GoogleGenAI } from '@google/genai'
import Markdown from 'react-markdown'
import { FadeLoader } from 'react-spinners'

const App = () => {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loader, setLoader] = useState(false)

  const generateResponse = async () => {
    let promptInp = document.getElementById('prompt')
    if (prompt === '') {
      alert('You must describe your video topic...')
      promptInp.focus()
    } else {
      setLoader(true)
      const ai = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      })
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Create a detailed, accurate, and factual video script about "${prompt}". 
  - Include a clear introduction, main content, and conclusion.
  - Use bullet points for key facts.
  - Make sure all information is true, relevant, and easy to understand.
  - Avoid exaggeration or assumptions.
  - Provide examples or statistics wherever possible.`,
      })
      setResponse(response.text)
      setLoader(false)
    }
  }

  if (loader) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <FadeLoader
          color="#9333ea"
          height={15}
          width={5}
          radius={2}
          margin={2}
        />
      </div>
    )
  }
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center flex-col min-h-[30vh] px-4 text-center">
        <h2
          style={{ lineHeight: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-[500]"
        >
          A Free <span className="text-purple-600">AI</span> For Generating{' '}
          <br /> Video Script
        </h2>
      </div>

      <div className="textarea flex items-center justify-center flex-col mt-[10px] px-4">
        <textarea
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          name="prompt"
          className="bg-[#f4f4f4] outline-0 border-0 w-full sm:w-[80%] md:w-[60%] min-h-[130px] p-[20px] rounded-[10px] text-[16px]"
          id="prompt"
          placeholder="Describe your video topic..."
        ></textarea>

        <button
          onClick={generateResponse}
          className="gen p-[10px] bg-purple-600 text-white rounded-[10px] mt-[20px] w-[150px] sm:w-[200px] transition-all duration-300 hover:bg-purple-700"
        >
          Generate
        </button>
      </div>

      {response !== '' && (
        <div className="response px-4 sm:px-[50px] md:px-[100px] my-[40px]">
          <Markdown>{response}</Markdown>
        </div>
      )}
    </>
  )
}

export default App
