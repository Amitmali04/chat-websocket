// const socket = io("http:localhost:400", {})
const socket = io()

const clientsTotal = document.getElementById("client-total");

socket.on('clients-total', (data) =>{
    console.log(data)
    clientsTotal.innerText = `Total Clients: ${data}`;
})