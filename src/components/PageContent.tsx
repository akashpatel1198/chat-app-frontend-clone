import React from 'react'
import PersonalityBanner from './PersonalityBanner'
import MessagesList from './MessagesList'
import MessageForm from './MessageForm'
import DetailsSection from './DetailsSection'

const PageContent = () => {
  return (
    <div className={'w-[100%]'}>
      <div className="h-[240px] bg-[#033156] relative">
        <PersonalityBanner />
      </div>
      <div className="pt-[70px] flex h-[calc(100vh-240px)]">
        <div className="w-[calc(100%-315px)] ml-[20px] relative">
          <MessagesList />
          <div className="absolute bottom-0 right-0 left-0">
            <MessageForm />
          </div>
        </div>
        <DetailsSection />
      </div>
    </div>
  )
}

export default PageContent
