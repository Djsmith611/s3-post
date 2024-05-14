import React from 'react';

export default function App() {
  return (
    <div>
        <form
        style={{
            display:"flex",
            flexDirection:"column",
            width:"200px",
            margin:"auto",
            gap:10
        }}>
        <h3>Submit your Resume</h3>
        <input type="file" />
        <input type="submit" value='Submit'/>
        </form>
    </div>
  )
}
