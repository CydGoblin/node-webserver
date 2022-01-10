import http from "http";

http
  .createServer((request, response) => {
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.cvs' \)
    response.writeHead(200, { "Content-Type": "application/json" });

    const persona = {
      name: "Luz",
    };

    response.write(JSON.stringify(persona));
    response.end();
  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);
