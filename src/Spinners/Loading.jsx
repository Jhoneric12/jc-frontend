import React from 'react'
import { SyncLoader } from 'react-spinners'

function Loading() {

    const loading = true;
    const color = '#4FBD5E'

  return (
    <div className='h-screen bg-transparent shadow-none flex justify-center items-center bg-puti'>
        <SyncLoader color={color} loading={loading}/>
    </div>
  )
}

export default Loading