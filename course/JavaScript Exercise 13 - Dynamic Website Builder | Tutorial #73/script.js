// https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA

function CreateCard(title,cname,views,date,duration) {

    let html =`<div class="card">
        <div class="left">
                <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA" alt="card">

                <div class="duration">${duration}</div>
        </div>
            
        <div class="right">
                <div class="title">${title}</div>
                <div class="detail">
                       <div class="cname">${cname}</div>
                       <div class="views">${views} K</div>
                       <div class="date">${date} months</div>
                </div>
                
        </div>
            </div>`
    
    document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML+html
    
   
         
}

CreateCard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77","CodewithSalman","450","4","31:34")