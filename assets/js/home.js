// const departmentsButton = document.querySelector(".departments");
// const left = document.querySelector(".left");

// departmentsButton.addEventListener("click", function () {
//   left.classList.toggle("active");
// });


const btn =document.querySelector('.departments')
const ul =document.querySelector('.list')


btn.addEventListener('click', function(){
    console.log('salam');
    ul.classList.toggle("opacity")
})


