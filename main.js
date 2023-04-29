const url = 'https://randomuser.me/api/?results=50';

fetch(url)
    .then(response => response.json())
    .then(data => loadData(data))


const usersList = document.getElementById('users-list');
const filter = document.getElementById('filter');
let listItems = [];

const loadData = (data) => {
    data.results.map(user => {
        usersList.innerHTML += `
        <li class="user">
            <img src=${user.picture.large} alt="user-profile">
            <div class="user-details">
                <p class="user-name">${user.name.first + ' ' + user.name.last}</p>
                <p class="user-location">${user.location.city + ', ' + user.location.country}</p>
            </div>
         </li>
        ` 
    })


    listItems = document.querySelectorAll('.user');

    // console.log(listItems[0].childNodes[3].childNodes[1].innerText)

    filter.addEventListener('input' , (e) => filterData(e.target.value) )
    
    const filterData = (keyword) => {
        listItems.forEach(item => {
            if(item.childNodes[3].childNodes[1].innerText.toLowerCase().includes(keyword.toLowerCase())) {
                item.classList.remove('hide')
            } else {
                item.classList.add('hide')
            }
        })
    }
}




