const socket = io('http://localhost:3000/chat')
const roomSocket = io('http://localhost:3000/room')
const nickname = prompt('닉네임을 입력하세요')

let currentRoom = '';


socket.on('connect', () => {
    console.log('Connected to server 서버 접속 성공!')
})

function sendMessage() {
    const message = $('#message').val()
    $('#chat').append(`<div>나: ${message}</div>`)
    socket.emit('message', {message, nickname})
}

socket.on('message', (message) => {
    $('#chat').append(`<div>${message}</div>`)
})

function createRoom() {
    const room = prompt('생성할 방 이름을 입력하세요')
    roomSocket.emit('createRoom', {room, nickname})
}

roomSocket.on('rooms', (data) => {
    console.log(data)
    $('#rooms').empty()
    data.forEach((room) => {
        $('#rooms').append(`<li>${room} <button onclick="joinRoom('${room}')">입장</button></li>`)
    })
})