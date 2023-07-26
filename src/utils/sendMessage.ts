/* eslint-disable prettier/prettier */
import { ChatCompletionRequestMessage } from './../interfaces/open-ai.interface'

export const sendMessage = async (messages: ChatCompletionRequestMessage[], chatBootUp: boolean) => {
  try {

    // console.log(messages)

    const response = await fetch('/api/createMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages, chatBootUp }),
      }).then(resp => resp.json())
        .then(data => data);
    
    console.log("Response from send message: "  + response.data.response)

    // console.log("Response from send message: "  + Object.keys(response.data))
    return response.data.response;
    // const response = await fetch('/api/createMessage', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ messages }),
    // })

    // const data: Promise<any> = await response.json()
    // data.then((value) => {
    //     console.log(value)
    // })


    // // console.log("SendMessage, this is the response: " + response)

  
    
    // // console.log("SendMessage, this is the data: " + data.body?.getReader().read().then(({ value }) => {
    // //     console.log(value)
    // // }))

    // return await response.json()
  } catch (error) {
    console.log(error)
  }
}