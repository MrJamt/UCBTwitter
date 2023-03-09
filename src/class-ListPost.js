class ListPost {
    constructor() {
      this.arr=[];
    }
    insertPost(post){
      this.arr.push(post);
    }
    mostrarPosts(lista)
    {
        for(let i=this.arr.length-1;i>=0;i--){
          let post=this.arr[i];

          const li=document.createElement('li');
          
            li.innerHTML = "<b> Titulo: </b>" + post.titulo;
            if (post.detalle != "") {
              li.innerHTML += "<br> <b> Detalle : </b>" + post.detalle;
            }

          lista.appendChild(li); //para acumular posts
            }
    return lista;
    }
}  

export default ListPost;