import React from 'react';

export default function App() {
  return (
    <div>
        <form action="/api/upload" encType="multipart/form-data" method="post"
        style={{
            display:"flex",
            flexDirection:"column",
            width:"200px",
            margin:"auto",
            gap:10
        }}>
        <h3>File Upload with <code>Node.js</code></h3>
        <div>Select a file:
            <input type="file" name="file" multiple = "multiple" />
        </div>
        
        <input type="submit" value='Upload'/>
        </form>
    </div>
  )
}
