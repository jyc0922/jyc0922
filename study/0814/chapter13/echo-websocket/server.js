const WebSocket = require('ws');
const server = new WebSocket.Server({port: 3000});

server.on('connection', ws => {
    ws.send('[서버 접속 완료입니다!]')

    ws.on('message', message => {
        ws.send(`서버로부터 응답: ${message}`)
    })

    ws.on('close', () => {
        console.log('서버와의 연결이 끊어져 클라이언트 접속 해제합니다.')
    })
})
