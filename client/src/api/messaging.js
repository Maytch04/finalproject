import io from 'socket.io-client'
import store from '../store'
import axios from 'axios'
const socket = io.connect('http://localhost:3001')
//const socket = io.connect('http://10.68.0.156:3001')

export function getUsers() {
	axios.get('http://10.68.0.58:3001/users').then(res=>{
		store.dispatch({
			type: 'GET_USERS',
			users: res.users
		})
	})
}

export function addMessage(message) {
    socket.emit('addMessage', message)
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})