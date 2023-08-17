type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>

function getPosition(setMessage: ReactSetState<string>) {
    // console.log('getPosition 1');
    if( 'geolocation' in navigator ) {
        // console.log('getPosition 2');	
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
            // console.log('Position is: ', position)
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
            // Todo: skriv ut positionen på ett användarvänligt sätt!
            setMessage(`Your position is: Latitude: ${latitude}, Longitude: ${longitude}`);
        }, () => {
            // console.log('Position error', error);
            setMessage('Please enable position to use this app.')
        })
        // console.log('getPosition 3');	
    }
}

const apiKey: string = 'a2e6bd23aac07099e43f0d99b120497f'
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//Reverse gecoding: omvandla lattitud +longitud till en adress
async function reverseGeocode(lat: number, lon: number, setAddress: ReactSetState<string>) {
	// TODO: returnera ett objekt i stället för en sträng

	const numberOfResponses = 5
	const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit${numberOfResponses}&appid=${apiKey}`
	const response = await fetch(url)
	// TODO: fixa interface för datan
	const data: Place[] = await response.json()
	console.log('Reverse geocode: ', data);

	const firstAddress: string = data[0].name
	setAddress(firstAddress)
}
// [ { name } ]
interface Place {
	name: string;
}

export { getPosition, reverseGeocode }