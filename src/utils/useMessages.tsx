/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { useToast } from '@apideck/components'
import { ChatCompletionRequestMessage } from '../interfaces/open-ai.interface'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { sendMessage } from './sendMessage'

interface ContextProps {
  messages: ChatCompletionRequestMessage[]
  addMessage: (content: string) => Promise<void>
  isLoadingAnswer: boolean
}

const ChatsContext = createContext<Partial<ContextProps>>({})

export function MessagesProvider({ children }: { children: ReactNode }) {
  const { addToast } = useToast()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)

  useEffect(() => {
    const initializeChat = async () => {
      const reply  =  await sendMessage(messages, true).then(other => other)

      console.log(reply)
      // console.log(resp)
      const welcomeMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: 'Hi, How can I help you today?',
      }
      const AICustomerMessage: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: reply,
      }
      // console.log(messages)
      setMessages([welcomeMessage, AICustomerMessage])
    }

    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat()
    }
  }, [messages?.length, setMessages])

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true)
    try {
      const newMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content,
      }
      const newMessages = [...messages, newMessage]

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages)

      const resp: string  =  await sendMessage(newMessages, false)
      console.log("I'm in usemesages now: " + resp)
      const reply: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: resp,
      }

      // Add the assistant message to the state
      setMessages([...newMessages, reply])
    } catch (error) {
      // Show error when something goes wrong
      addToast({ title: 'An error occurred', type: 'error' })
    } finally {
      setIsLoadingAnswer(false)
    }
  }

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  )
}

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps
}