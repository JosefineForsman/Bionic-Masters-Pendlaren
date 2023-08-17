import { useState } from 'react'

import { getPosition , reverseGeocode} from './Geolocation'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>('')
  //Todo: skriv ut position på ett användarvänligt sätt!
  const [address, setAddress] = useState<string>('')

  const lat = 59.3297408, lon = 18.0224


	

	return (
		<div className="vertical-layout">
			<header>
				<h1> Geolocation </h1>
			</header>
			<main>
				<button onClick={() => getPosition(setMessage)}> See location </button>
				<p> {message} </p>

        <button onClick={() => reverseGeocode(lat, lon, setAddress)}> get address from location </button>
        <p> {address}</p>
			</main>

		</div>
	)
}

export default App
