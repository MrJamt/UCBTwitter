import Post from "./class-post";
import ListPost from "./class-ListPost";

const form = document.querySelector("#UCBT-form");
const titulo = document.querySelector("#post_titulo");
const detalle = document.querySelector("#post_det");
let lista = document.getElementById('listaP');
const LP = new ListPost();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  lista.innerHTML="";

  let tit=titulo.value;
  if(titulo.value!="")
  {
      let det=detalle.value;
      const post = new Post(tit,det);

      LP.insertPost(post);

      lista = LP.mostrarPosts(lista);
  }
  else
  {
    lista.innerHTML += "ERROR: No es posible publicar un post sin título"; //muestra el mensaje hasta introducir un post con titulo
  }
});
