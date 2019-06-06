
function draw(json) {
	document.body.innerHTML += JSON.stringify( json )
}

function handleErrors(response) {
	if( response.ok ) {
		return response.json()
	} else {
		let {status,statusText,ok,url} = response;
		return Promise.reject( {status,statusText,ok,url} )
	}
}

fetch('./json/region.json')

	.then( response => handleErrors( response ))

    .then( data => {
		draw(data);
		return fetch("./json/" + data.region)
    })

	.then( response => handleErrors( response ))

	.then( data => draw(data))

	.catch( e => draw( e ))



// Install the Node server : npm Install
// Run the server : node server.js
// It serves JSON from http://localhost:4000/packs
// Use fetch on this path.
// Note the server has no cross-domain security set.
