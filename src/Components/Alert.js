import React, { useState } from 'react'
import './Alert.css'
const Alert = () => {

   const [open, setOpen] = useState(false)
   return (
      <main>
         <button className="alert-button" onClick={() => setOpen(true)}>Open Alert</button>

         {open &&

            <div className='alert'>
               <h1 className="alert-text">Alert!</h1>
               <button className="alert-button" onClick={() => setOpen(false)}>close</button>
            </div>
         }
      </main>
   )
}

export default Alert
