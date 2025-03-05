const express = require('express');

const app = express();

// Trafegar json
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const loanRoutes = require('./routes/loanRoutes');

// Utilizando as rotas 
app.use(userRoutes);
app.use(bookRoutes);
app.use(loanRoutes);


//Rodando a API
const PORT = 8088;
app.listen(PORT, () => {
    console.log("Rodando na porta", PORT)
})