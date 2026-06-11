const search = document.getElementById("search");

if(search){
    search.addEventListener("keyup", function() {

        let filter = search.value.toLowerCase();

        let jobs = document.querySelectorAll(".job");

        jobs.forEach(job => {

            let title = job.querySelector("h3")
                           .textContent
                           .toLowerCase();

            if(title.includes(filter)){
                job.style.display = "block";
            }else{
                job.style.display = "none";
            }
        });
    });
}