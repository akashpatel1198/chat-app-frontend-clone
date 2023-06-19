/* eslint-disable prettier/prettier */
import { NextApiRequest, NextApiResponse } from 'next'
import initialPrompt from '../../textData/initialPrompt'
import headerPromptContext from '../../textData/followUpPromptHeader'

export default async function createMessage(req: NextApiRequest, res: NextApiResponse) {
    const { messages, chatBootUp } = req.body
    //   const apiKey = process.env.OPENAI_API_KEY
    //   const engine = 'davinc


    console.log("This is the request body: " + req.body)
    console.log(chatBootUp)
    console.log(messages)

    
    let url = '';
    let body = '';
    if (chatBootUp) {
        url = 'http://127.0.0.1:8000/chat-initial'
        body = JSON.stringify({
            input: initialPrompt,
        })
    }
    else {
        url = 'http://127.0.0.1:8000/chat';
        body = JSON.stringify({
            input: headerPromptContext +  messages[messages.length - 1].content,
        });
    }

    console.log(messages)

    try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body
    })
    const data = await response.json()
    console.log(data)
    res.status(200).json({ data })
    } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
    }
}
