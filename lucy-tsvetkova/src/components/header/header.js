import './header.css'
import { useState } from 'react';
import logo from '/workspaces/Raik/lucy-tsvetkova/src/content/images/тату-Photoroom.png-Photoroom.png'


export default () => {
    const[now, setNow] = useState(new Date());

    setInterval(() => setNow(new Date()), 1000)
return (
    <div className="App">
      <header>
        <img src={logo} alt='logo react'></img>
        <nav>
          <h1 class = "branding">Salon unicorn tattoo</h1>,
          {/* <ul>
            <li><a href='#'>Item 1</a></li>
            <li><a href='#'>Item 2</a></li>
            <li><a href='#'>Item 3</a></li>
            </ul> */}
          </nav>
          <span>Time now: {(now).toLocaleTimeString()}</span>
        </header>
    </div>
)
}