import React from 'react'

function Home() {
  return (
    <div>
        <h1>Icube Traders</h1>
        <h3>we are provide good valuable Products</h3>
        {/* <a href='www.icubetraders.com'>www.icubetraders.com</a> */}
        <a
          className="App-link"
          href="http://www.icubetraders.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.icubetraders.com
        </a>

        <p><a href="mailto:info@icubetraders.com">Send email</a></p>
       
    </div>
  )
}

export default Home