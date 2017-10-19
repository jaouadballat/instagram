import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		data: [],
		
	},
	getters:{
		getData: state => state.data,
		
	},
	mutations:{
		setData: (state, payload) => {
			state.data = payload
			console.log(payload)
		}
	}
})

export default store