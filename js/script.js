const list = document.getElementById("list");
const getBooks = document.getElementById("getBooks");
const getUsers = document.getElementById("getUsers");

getBooks.addEventListener("click", async () => {
  //obtener libros del backend
  const url = "http://localhost:3000/books/";
  const response = await fetch(url);
  const books = await response.json();

  const template = books
    .map((b) => {
      const { imagen, autor, titulo, fechaPublicacion } = b;
      return `<ul>
        <li class="card">
            <h2>${titulo}</h2>
            <img src="${imagen}" alt="${titulo}"/>
            <div>
                <p class="autor">Autor: ${autor}</p>
                <p>Fecha de Publicacion: ${fechaPublicacion}</p>
               

            </div>
           
        </li>
        </ul>`;
    })
    .join("");
  list.innerHTML = template;
});

getUsers.addEventListener("click", async () => {
  //obtener usuarios del backend
  const url = "http://localhost:3000/users/";
  const response = await fetch(url);
  const users = await response.json();

  const template = users
    .map((u) => {
      const { nombre, apellidos, correo, coleccion, wishlist } = u;
      return `<ul>
        <li class="card">
            <h2>${nombre} ${apellidos}</h2>
                <p>Correo: ${correo}</p>
            
            <div>
                <h2>Coleccion:</h2>
                <ul>
                  ${coleccion
                    .map(
                      (b) => `
                <li class="coleccion">${b}</li>
                `
                    )
                    .join("")}
                </ul>
                 <h2>Wishlist:</h2>
                <ul>
                  ${wishlist
                    .map(
                      (b) =>
                        `
                <li class ="coleccion">${b}</li>
                `
                    )
                    .join("")}
                </ul>
             
            </div>
           
        </li>
        </ul>`;
    })
    .join("");
  list.innerHTML = template;
});
