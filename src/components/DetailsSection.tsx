import React from 'react'
import { Divider } from 'antd'

const DetailsSection = () => {
  return (
    <div className="mx-[20px] mx-auto bg-white rounded-[8px] shadow-[0px 2px 8px rgba(10, 80, 137, 0.15)] w-[315px] mb-[130px]">
      <h2 className="text-[24px] px-[20px] pt-[10px]">Details</h2>
      <Divider />
      <ol className="list-decimal ml-[20px] px-[20px] pb-[30px]">
        <li className="mb-[10px]">
          Find a quiet place to answer these questions without distraction.
        </li>
        <li className="mb-[10px]">Answer each of the questions to the best of your ability.</li>
        <li className="mb-[10px]">
          Return to your profile page after you finish to learn more about your results!
        </li>
      </ol>
    </div>
  )
}

export default DetailsSection
