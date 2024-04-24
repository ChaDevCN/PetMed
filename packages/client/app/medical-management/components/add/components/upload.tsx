'use client'

import { useRef } from "react"
import { uploadActions } from "./actions"

const config = {
  types: [
    {
      description: 'Image files',
      accept: {
        'image/*': ['.png', '.gif', '.jpeg', '.jpg']
      }
    },
  ],
  multiple: false
}
const Upload = () => {
    const isWindow = useRef(typeof window !== 'undefined')
    const upload = async() => {
      
      if(isWindow.current){
        const [fileHandle] = await window.showOpenFilePicker(config);

        if(fileHandle.kind === 'file'){
          const file = await fileHandle.getFile();
          const formData = new FormData();
          formData.append('file', file);
        }
      }
    }
    return (
        <div
          style={{
            margin: 100,
          }}
        >
          <div className="w-20 h-20 bg-slate-600" onClick={upload}>
          </div>
        </div>
        )
}
export default Upload