const express = require('express');
require('dotenv').config()
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

run()
function run(){
  const isAdmin = process.env.IS_ADMIN === 'true';

if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}
}



app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.get('/admin',(req,res)=>{
  if(process.env.IS_ADMIN)
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  else
  res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
