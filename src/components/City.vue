<template>
	<div class="container">
		<input id="city" type="text" placeholder="Search City..." @keypress.enter="search">
			<div id="google-map"></div>
	</div>
</template>
<script>

import axios from 'axios'
	export default {
		data(){
			return {
			}
		},
		mounted(){

			 $('input').geocomplete({

				  map: '#google-map',
				  location: 'meknes',
				 
				});

		},
		methods:{
			search(e){
					axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {
				    	params:{
				    		address: e.target.value,
				    		key: 'put your key here'
				    	}
				    })
				    	.then(response => {
							//console.log(response.data.results[0].geometry.location)
							const lat = response.data.results[0].geometry.location.lat
							const lng = response.data.results[0].geometry.location.lng
							
							axios.get('https://api.instagram.com/v1/media/search?',{
								params:{
									lat: lat,
									lng: lng,
									access_token: 'put your acess token here'
								}
							}).then(response => {
				    		 	this.$store.commit('setData', response.data.data)

							}).catch(error => {
				    			console.log(error)
							})
							
				    	}).catch(error => {
				    		console.log(error)
				    	})
				
			}
		}
	}
</script>
<style>
#google-map{
	width: 90%;
	height: 400px;
	margin: 0 auto;
}

.container {
	display: flex;
	flex-direction: column;
}

input[type="text"] {
    margin: 30px auto;
    width: 50%;
    padding: 10px;
    font-size: 16px;
    font-family: monospace;
    border: 2px solid #222E50;
    box-shadow: 3px 2px 8px;
}
</style>
