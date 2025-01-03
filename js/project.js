const projects = [
    

    {
        id: "cynthia",
        image: "/assets/images/Main-Cynthia.svg",
        title: "Blog App",
        byline: "Fun - Blogging Platform",
        heading1: "About",
        content1: "The Blog Application is a web app for creating, updating, and managing blogs. It is built using modern web technologies, offering a serverless backend for scalability and efficiency. The project focuses on delivering a seamless blogging experience while ensuring security and performance.",
        heading2: "Functionality",
        content2: "The app uses Cloudflare Workers and the Hono library to provide a serverless backend. Features include secure user authentication and authorization with JWT and bcrypt, type safety with TypeScript, and optimized database interactions with PostgreSQL and connection pooling. RESTful APIs enhance the app's performance, making it highly scalable and user-friendly.",
        heading3: "Live Link",
        content3: "You may go ahead and take a look at the project here: <a href='https://medium-app-six.vercel.app/'>Live Link</a>"
    },
    
    {
        id: "rtbt",
        image: "/assets/images/Main-Braille.svg",
        title: "JobHunt",
        byline: "Comprehensive - Job Portal Platform",
        heading1: "About",
        content1: "JobHunt is a job portal application that connects students with recruiters for job listings and applications. It is designed with scalability and user experience in mind, featuring modern web technologies for seamless interaction.",
        heading2: "Functionality",
        content2: "The platform supports features like user authentication with JWT, role-based access control, and state management with Redux. It includes a robust pagination and filtering system to optimize performance and provides responsive interfaces built with React.js and Tailwind CSS, enhancing engagement by 20%.",
        heading3: "Live Link",
        content3: "You may go ahead and take a look at the project here: <a href='https://jobportal-qlmu.onrender.com/'>Live Link</a>"
    },

    {
        id: "fall",
        image: "/assets/images/Main-Fall.svg",
        title: "GitHub Profile Search App",
        byline: "Interactive - GitHub User Lookup Tool",
        heading1: "About",
        content1: "The GitHub Profile Search App is a web application that allows users to search for GitHub profiles and view detailed information about users, including repositories, followers, and more. Built with HTML, CSS, and JavaScript, it leverages the GitHub API to fetch and display user data.",
        heading2: "Functionality",
        content2: "Users can enter a GitHub username to retrieve and display the corresponding profile information. The app provides details such as the user's avatar, bio, public repositories, follower count, and more, offering a comprehensive overview of the GitHub user's activity.",
        heading3: "Source Code",
        content3: "You may go ahead and take a look at the project here: <a href='https://github.com/Shreyously/Github-profile-search-app'>Source Code</a>"
},

    

    {
        id: "ueba",
        image: "/assets/images/Main-UEBA.svg",
        title: "PayEase",
        byline: "Secure - Financial Management Platform",
        heading1: "About",
        content1: "PayEase is a financial application designed for peer-to-peer (P2P) transfers and secure money management. It ensures modularity, efficiency, and security through the use of cutting-edge technologies like Docker and NextAuth.",
        heading2: "Functionality",
        content2: "The app features a webhook-based system to handle transactions and update balances securely. PostgreSQL is deployed using Docker containers for streamlined setup, and the application is structured with Turborepo for enhanced modularity. Security is a priority, with NextAuth managing authentication and JWT ensuring secure data transactions.",
        heading3: "Source Code",
        content3: "You may go ahead and take a look at the project here: <a href='https://github.com/Shreyously/PayEase'>Source Code</a>"
},
    {
        id: "spiralcosmos",
        image: "/assets/images/Main-SpiralCosmos.svg",
        title: "Social Sphere",
        byline: "Comprehensive - Social Networking Platform",
        heading1: "About",
        content1: "Social Sphere is an all-in-one social networking platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io. It aims to connect users through real-time interactions, providing features commonly found in modern social media applications.",
        heading2: "Functionality",
        content2: "The platform offers real-time chat functionality, user authentication, and the ability to create and share posts. Leveraging Socket.io enables instant messaging capabilities, enhancing user engagement and interaction within the platform.",
        heading3: "Source Code",
        content3: "You may go ahead and take a look at the project here: <a href='https://github.com/Shreyously/social_sphere'>Source Code</a>"
}
    
]


let index = 0;
let length = projects.length - 1;
var toggle = localStorage.getItem("toggle");

function get()
{
    for (const key in projects) 
    {     
        document.getElementById(projects[key].id).addEventListener("click", function() {details(projects[key].id); bg(projects[key].id)}, false);
    }
}

function details(id = "pg") 
{
    for (const key in projects) {
        if (id == projects[key].id) {
            index = key;
            var image = document.getElementById("main-image");
            var div = document.getElementById("project-detail");
            document.querySelectorAll('.dynamic').forEach(e => e.remove());

            image.src = projects[key].image;
            document.getElementById("title").innerHTML = projects[key].title;
            document.getElementById("byline").innerHTML = projects[key].byline;
                        
            let index_length = Object.keys(projects[key]).length;
            let head_count = ((index_length - 4)/2)
            var values = Object.values(projects[key]);

            for(let i = 1; i<=head_count; i++)
            {
                let current = (3 + i);
                var h2 = ("<h2 class = 'dynamic'>" + values[current + i-1] + "</h2>");
                let p = ("<p class = 'dynamic'>" + values[current + i] + "</p>");

                div.innerHTML += h2;
                div.innerHTML += p;
            }    
        }
    }

    if (id == projects[0].id)
    {
        document.getElementById("back").style.visibility = "hidden";
    }
    
    else if (id == projects[length].id)
    {
        document.getElementById("next").style.visibility = "hidden";
    }

    else
    {
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("back").style.visibility = "visible";
    }

    var links = document.getElementById("project-detail").querySelectorAll('a');
    for (var i = 0; i < links.length; i++)
    {
        var a = links[i];
        if(a.hostname != location.hostname) 
        {
                a.rel = 'noopener';
                a.target = '_blank';
        }
    }
}

function bg(id = "pg")
{
    document.body.style.backgroundAttachment = 'fixed';
    
    var select = `.pane-project#` + id +` {background-color: #8D24DF; border: 5px solid white; border-radius: 0px 20px 20px 20px; outline-offset: 3px; color: white;}
                  .pane-project#` + id + ` h2 {font-weight: 600;}`

    for (const key in projects) 
    {
        if(toggle == 1)
        {
            var unselect = `.pane-project#` + projects[key].id +` {background-color: #263140; border: 0px solid white; border-radius: 0px 0px 0px 0px; outline-offset: 3px; color: #263140;}
                            .pane-project#` + projects[key].id + ` h2 {font-weight: 100;}`  
        }

        else
        {
            var unselect = `.pane-project#` + projects[key].id +` {background-color: #fff; border: 0px solid white; border-radius: 0px 0px 0px 0px; outline-offset: 3px; color: #263140;}
                            .pane-project#` + projects[key].id + ` h2 {font-weight: 100;}`                      
        }
        
        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = unselect
        document.head.appendChild(styleSheet)
    }

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = select
    document.head.appendChild(styleSheet)

    if(window.matchMedia("(max-width: 768px)").matches)
    {
        document.getElementById("pane").style.visibility = "hidden";
    }
}

function next()
{
    if (index != length)
    {
        index++;
    } 
    
    bg(projects[index].id);
    details(projects[index].id);
    var view = document.getElementById('pane_container');
    view.scrollBy({top: 70, behavior: 'smooth'}); 
}

function back()
{
    if (index != 0) 
    {
        index--;       
    }
    
    bg(projects[index].id);
    details(projects[index].id); 
    var view = document.getElementById('pane_container');
    view.scrollBy({top: -70, behavior: 'smooth'}); 
}

function scroll_down()
{
    var view = document.getElementById('project-detail');
    view.scrollBy({top: 200, behavior: 'smooth'}); 
}

function scroll_up()
{
    var view = document.getElementById('project-detail');
    view.scrollBy({top: -200, behavior: 'smooth'});
}

function phone()
{
    if(window.matchMedia("(max-width: 768px)").matches)
    {
        document.getElementById("pane").style.visibility = "hidden";
    }

    if (window.matchMedia("(min-width: 768px)").matches) 
    {
        var elem = document.getElementById('menu');
        elem.parentNode.removeChild(elem);
    }
}

window.addEventListener("load", bg("pg"));
window.addEventListener("load", details("pg"));
window.addEventListener("load", get());
window.addEventListener("load", phone());
window.addEventListener("keyup", function(e) {if (e.keyCode === 39){next();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 37){back();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 40){scroll_down();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 38){scroll_up();}});