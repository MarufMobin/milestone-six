// https://jsonplaceholder.typicode.com/photos

// const munna = () =>{
//     console.log("click Me")
// }


fetch('https://jsonplaceholder.typicode.com/photos')
.then( res => res.json())
.then( data => showData(data) )

// const fetchData = async () =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/photos')
//     const data = await res.json()
//     showData(data)
// }

// fetchData()

const showData = elements => {
    const prenentContainer = document.getElementById('parent-container');

    for(const element of elements){
        const div = document.createElement('div');
        div.classList.add('col-md-3','my-3');

        div.innerHTML = `
        <div class="card" style="width: 18rem;" onclick="munnaClick(${element.id})">
            <img src="${element.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${element.title}.</p>
            </div>
        </div>
        `;
        prenentContainer.appendChild(div);
        
    }
}


const munnaClick = detailsId =>{
   
    const url = `https://jsonplaceholder.typicode.com/photos/${detailsId}`
    fetch(url).then( res => res.json()).then( data => catchData(data))
    // console.log(url)
    const photosDetails = document.getElementById("details-photo");
    photosDetails.innerHTML = "";
    window.scrollTo(0,40)
    const catchData = data =>{
        console.log(data)
        const div = document.createElement('div');
        div.classList.add('row');
        div.innerHTML = `
        <div class="card mb-3 col-md-7">
            <img src="${data.url}" class="card-img-top" alt="...">
        </div>
        <div class="card mb-3 col-md-5" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${data.thumbnailUrl}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <p class="card-text">Title Of Photo: ${data.title}</p>
                </div>
                </div>
            </div>
        </div>
        `;
        photosDetails.appendChild(div)
    }
}