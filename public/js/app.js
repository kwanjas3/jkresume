const searchUser = document.getElementById('searchUser')
const github = new Github()
const ui = new UI()


searchUser.addEventListener('keyup', (e)=>{
  trigger(e);
})

const trigger = (e) =>  {
  const userText = e.target.value;
  if (userText !== '') {
    github.getUser(userText).then((data) => {
      if (data.profile.message == "Not Found") {
        //Show Alert Not Found + default UI

        ui.showAlert('User not found', 'alert alert-danger')
      } else {
        //Show UserProfile
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)
      }
    }
    )
  } else {
    //clear Profiles
    ui.clearProfile()
  }
}













// // async function myFunction() {


// //   const promise = new Promise((resolve, reject) => {
// //     setTimeout(() => resolve('Hello'), 1000)
// //   })
// //   err = false;
// //   if(!err){
// //     const res = await promise; //wait for promise to finish before returning
// //     return res;
// //   }else{
// //     await Promise.reject(new Error('Something went wrong'))
// //   }


// // }

// // myFunction().then(res => console.log(res)).catch(e => console.log(e))

// //typical fetch then becomes something like this

// async function getUsers() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json(); //no more .then(data=> json.parse(data))
//   return data
// }

// //getUsers().then(data => console.log(data.map(user => user.name)))
// const testUser = {
//   name: 'Jason',
//   username: 'Jason',
//   email:'Jason@jason.on'
// }

// class myTestHTTP {
//   getByCallback(url, callback){
//     const xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function(){
//       if(xhr.readyState == 4 && xhr.status == 200){
//         callback(xhr.responseText)
//       }

//     }
//     xhr.open('get', 'https://jsonplaceholder.typicode.com/users')
//     xhr.send()
//   }
//   mycallback(data){
//     console.log(data)
//   }

//   async get(url) {
//     const res = await fetch(url)
//     const data = await res.json();
//     return data;
//   }
//   getUsingPromise(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url).then(res => res.json())
//         .then(data => resolve(data))
//         .catch(e => reject(e))
//     })
//   }

//   async post(url, data) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//     const resData = await response.json()
//     return resData

//   }
// }

// const http = new myTestHTTP();
// http.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data))

// http.getUsingPromise('https://jsonplaceholder.typicode.com/users').then(data => console.log(data))
// http.post('https://jsonplaceholder.typicode.com/users', testUser).then(data => console.log(data)).catch(e=> console.log(e))

// http.getByCallback('https://jsonplaceholder.typicode.com/users', http.mycallback)