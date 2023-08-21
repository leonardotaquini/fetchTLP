const showBtn = document.querySelector('.show');
const form = document.querySelector('.form');  
const body = document.querySelector('#body');
const title = document.querySelector('#title');
const getImageBtn = document.querySelector('.getImage');
const URL = 'https://jsonplaceholder.typicode.com/posts';
// const imageURL = 'https://via.placeholder.com/150'; Esta url no devuelve una imagen.
const imageURL = 'https://jsonplaceholder.typicode.com/photos';
const imgContainer = document.querySelector('.img-container');

//Eventos.
showBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    getPosts();  
});

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const postForm = {
        title: title.value,
        body: body.value
    }
   sendPost(postForm);
    
});

getImageBtn.addEventListener('click', async (e)=> {
    e.preventDefault();
    imgContainer.textContent= '';
    const url = await getImage();
    const imgElement =  document.createElement('img');
    imgElement.src = url;
    imgContainer.appendChild(imgElement);
    
})

//Funciones.

const getPosts = async () => {
    const res = await fetch(URL);
    const posts = await res.json();
    console.log( posts.slice(0,3) );
}

const sendPost = async(post) => {
    const res = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    const postSended = await res.json();
    console.log(postSended);
}

const getImage = async () => {
    const res = await fetch(imageURL);
    const image = await res.json();
    return image[0].url;
    
}