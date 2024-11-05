function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

//Profile-user-status

const status = ["Web Developer",  "Freelancer", "Full Stack Developer", "Web Designer", "UI/UX Designer"];
let index = 0;

function changeStatus(){
   const messages = document.getElementById('messages') ;
   const statusSpan = document.querySelector('status-span');
   messages.textContent = `I am a ${status[index]}`
   index = (index + 1) % status.length ;

   setTimeout(() => {
    messages.textContent = 'I am a';
   }, 2000)

   setTimeout(changeStatus, 3000);
}
changeStatus();


