import React from 'react'

export default function TitleSection({title, subtitle}) {
  return (
    <div className='border border-b-[#dfdfdf] shadow'>
      <div className="container text-center py-24 text-black">
        <h2 className=" uppercase xl:text-5xl ]">{title}</h2>
        <p className="xl:text-xl">{subtitle}</p>
      </div>
    </div>
  );
}
