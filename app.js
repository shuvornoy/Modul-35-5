const getPhotoApiData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    // console.log(data);
    displayData(data);
}
const displayData = (photos) =>{
    const photoParent = document.getElementById('parent-photo-div');
    photos.forEach(photo =>{
        const createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML = `
        <div class="card h-100">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>
                <p class="card-text">ID: ${photo.id} </p>
            </div>
            <button onclick='clickFun(${photo.id})'>Click</button>
        </div>
        `;
        photoParent.appendChild(createDiv);
    })
    
}




const clickFun = async(id) => {
    const response = await fetch (`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data = await response.json();
    displayIndiData(data);
}

const displayIndiData = (data) => {
    const indiDiv = document.getElementById('indi');
    indiDiv.innerHTML =`<div class="card h-100">
    <img src="${data.thumbnailUrl}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
    </div>
</div>`
}
getPhotoApiData();


