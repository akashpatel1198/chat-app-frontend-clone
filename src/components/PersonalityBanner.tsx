import React from 'react'
import Image from 'next/image'
import { Button } from 'antd'

const PersonalityBanner = () => {
  return (
    <div className="px-[20px] py-[30px] mx-[20px] mx-auto bg-white rounded-[8px] shadow-[0px 2px 8px rgba(10, 80, 137, 0.15)] flex items-center gap-[20px] relative top-[120px]">
      <Image src={'/img/Behavioral_Traits_Icon.svg'} alt="Behavior" width={96} height={96} />
      <div>
        <h2 className="text-[32px] text-[#414f5a]">How You Work: Your Personality</h2>
        <div className="rounded-[4px] border border-[#1c6daf] bg-[#efefef] py-[2px] px-[6px] text-[#1c6daf] w-min">
          Behavioral
        </div>
      </div>
      <Button className="ml-auto w-[160px] h-[40px] bg-[#0a5089] text-white">Start</Button>
    </div>
  )
}

export default PersonalityBanner
