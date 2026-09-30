const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const proyectos = [
  {
    titulo: "Sistema de Inventario",
    tech: "HTML, CSS, JS",
    desc: "CRUD basico con LocalStorage",
    img: "assets/proyecto-1.png",
  },
  {
    titulo: "Clon de Calculadora",
    tech: "JavaScript puro",
    desc: "Operaciones matematicas con eval seguro",
    img: "assets/proyecto-2.png",
  },
  {
    titulo: "Dashboard de Clima",
    tech: "Fetch API + OpenWeather",
    desc: "Consume API REST publica",
    img: "assets/proyecto-3.png",
  },
];

app.get('/', (req, res) => {
  res.render('index', { proyectos });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
