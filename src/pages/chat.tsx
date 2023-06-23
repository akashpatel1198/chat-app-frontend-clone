import React from 'react'
import Layout from '../components/Layout'
import { MessagesProvider } from '../utils/useMessages'
import SideBar from '../components/SideBar'
import { Layout as AntLayout } from 'antd'
import PageContent from '../components/PageContent'

const Chat = () => {
  return (
    <MessagesProvider>
      <Layout>
        <AntLayout className="h-screen">
          <SideBar />
          <PageContent />
        </AntLayout>
      </Layout>
    </MessagesProvider>
  )
}

export default Chat
