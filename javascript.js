const container = document.querySelector(".container");
const loader = document.getElementById("loader");

async function fetchData(){
    try{
        loader.style.display ="block";
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const final = await response.json();
        displayuser(final);
        console.log(final);

    }
    catch (error){
        container.innerHTML= "<p>Loading...</p>";
        console.log(error)
    }
    finally{
        loader.style.display = "none";
    }
}
fetchData();

function displayuser(final){

    final.forEach(user => {
        const details = document.createElement("div");
        details.classList.add("details");

        details.innerHTML = `<h3>${user.name}</h3>
         <p><strong>Email:</strong>${user.email}</p>  
         <p><strong>Phone:</strong>${user.phone}</p> 
         <p><strong>City:</strong>${user.address.city}</p> 
         <p><strong>Company:</strong>${user.company.name}</p> `
        
         container.appendChild(details);
    });


}
