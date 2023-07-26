import React from 'react'
import { useState, useEffect } from 'react'
import PersonalityBanner from './PersonalityBanner'
import DetailsSection from './DetailsSection'
import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const PageContent = () => {
  const [email, setEmail] = useState("");

  const [response, setResponse] = useState("");

  const submitEmail = async () => {
    if (email.length === 0) return;
    console.log("email value: " + email);
    const prompt = `Give feedback on text input which is an email 
    using the following rubric with line breaks:\n\nRubric: 
    (Clarity and Conciseness,Tone and Professionalism,Grammar and 
      Spelling,Formatting and Structure)\n\nExpected Output: Detailed 
      feedback on improvement, if any, and the above rubric on a 5-point 
      scale\n\nEmail:\n${email}`;
    const chat_completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.0,
      max_tokens: 350,
      frequency_penalty: 0,
      presence_penalty: 0,
      messages: [{ role: "user", content: prompt }],
    });
    console.log("open ai response")
    const gptRes = chat_completion?.data?.choices[0]?.message?.content;
    setResponse(gptRes);
  };

  return (
    <div className={'w-[100%]'}>
      <div className="h-[240px] bg-[#033156] relative">
        <PersonalityBanner />
      </div>
      <div className="pt-[70px] flex h-[calc(100vh-240px)]">
        <div className="w-[calc(100%-315px)] ml-[20px] relative">
          <div className='bg-emerald-400'>
            <input id='email-input' onChange={(e) => setEmail(e.target.value)}></input>
            <button className='border-solid border-black border-2 ml-5'
            onClick={submitEmail}>
              Enter
            </button>
          </div>
          <div className='bg-red-200'>
            The Response
            {response.split("\n").map((el, i) => {
              return (<p key={i}>
                {el}
              </p>)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageContent
