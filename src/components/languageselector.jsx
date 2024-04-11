import React from 'react'

const Languageselector = ({language,onselect}) => {
  return (
      <>
          <div className='selector'>
              <label htmlFor="language-select">Language:</label>
              <select id="language" className="language" value={language} onChange={onselect}>
                  <option className="language" value="javascript" >JavaScript</option>
                  <option className="language" value="python" >Python</option>
                  <option className="language" value="java" >Java</option>
                  <option className="language" value="text" >Text</option>
              </select>
          </div>
      </>
  )
}

export default Languageselector