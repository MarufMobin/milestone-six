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
            <div class="card" style="width: 18rem;">
                <img src="${element.thumbnailUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${element.title}.</p>
                </div>
            </div>
        `;
        prenentContainer.appendChild(div);
        
    }
}
