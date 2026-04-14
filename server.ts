import app from "./api/index.ts";

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor de prueba corriendo en http://localhost:${PORT}`);
});
