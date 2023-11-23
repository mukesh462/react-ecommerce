import React from 'react'
import { Colors } from '../Config'

function HomeCard({jsx,text,sec}) {
  return (
    <div className='m-2'>
       <div  style={{backgroundColor:Colors.main,color:Colors.text}} className="div1 bg-blue-600 flex items-center justify-center  text-textcolor flex-col border p-2 rounded-md shadow-2xl hover:bg-opacity-70 max-h-52">
          {jsx}
            <div className="my-3 text-center">
              <p className="mb-0">{text}</p>
              <span className="">{sec}</span>
            </div>
          </div>
    </div>
  )
}

export default HomeCard
