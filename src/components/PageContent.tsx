import React from 'react'
import { useState } from 'react'
import PersonalityBanner from './PersonalityBanner'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

const PageContent = () => {
  const [email, setEmail] = useState('')

  const [response, setResponse] = useState('')

  const submitEmail = async () => {
    if (email.length === 0) return
    console.log('email value: ' + email)
    const prompt = `Give feedback on text input which is an email 
    using the following rubric with line breaks:\n\nRubric: 
    (Clarity and Conciseness,Tone and Professionalism,Grammar and 
    Spelling,Formatting and Structure)\n\nExpected Output: Detailed 
    feedback on improvement, if any, and the above rubric on a 5-point 
    scale\n\nEmail:\n${email}`

    try {
      const chat_completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        temperature: 0.0,
        max_tokens: 350,
        frequency_penalty: 0,
        presence_penalty: 0,
        messages: [{ role: 'user', content: prompt }]
      })
      console.log('open ai response')
      const gptRes = chat_completion?.data?.choices[0]?.message?.content
      setResponse(gptRes)
    } catch (err) {
      console.log('error in chatGPT request')
      console.log(err)
    }
  }

  const handleKeyDown = (e) => {
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight + 5}px`
    // In case you have a limitation
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  }

  return (
    <div className={'w-[100%]'}>
      <div className="h-[240px] bg-[#033156] relative">
        <PersonalityBanner />
      </div>
      <div className="pt-[70px] flex justify-center h-[calc(100vh-240px)]">
        <div className="w-[calc(100%-315px)] ml-[20px] relative">
          <div className="py-5 flex flex-col w-[100%]">
            <label className="text-lg">Enter Email:</label>
            <textarea
              className=" my-2 p-2 min-h-[80px] overflow-hidden pb-5"
              onKeyDown={handleKeyDown}
              onChange={(e) => setEmail(e.target.value)}
            ></textarea>
            <button
              className=" w-[80px] h-[34px] bg-[#0a5089] rounded-md text-white"
              onClick={submitEmail}
            >
              Submit
            </button>
          </div>
          <div className="">
            <h3 className="text-lg">Feedback on your email:</h3>
            {response.split('\n').map((el, i) => {
              return (
                <p key={i} className="py-[1px] bg-white">
                  {el}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageContent
