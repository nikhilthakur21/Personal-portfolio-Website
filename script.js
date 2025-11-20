let i = 0;
let text = "Welcome to My Portfolio...";

function type() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100); // typing speed
  }
}
window.onload = type; // start when page loads

const roles = [
  "Web Developer |",
  "Software Developer |",
  "Frontend Devloper |",
  "React Devloper |",
];

// Target the h2 tag
const roleElement = document.getElementById("role");

let index = 0;

// Function to change the text
function changeRole() {
  index = (index + 1) % roles.length; // move to next item
  roleElement.textContent = roles[index]; // update text
}

// Change every 2 seconds (2000ms)
setInterval(changeRole, 2000);

function prg_change1() {
  let imgg = document.getElementById("prg-img");
  let h33 = document.getElementById("prg-h3");
  let p = document.getElementById("prg-p");

  p.innerHTML = `
 <ul class="text-white-50">
                        <p class="text-justify">All-in-One CalcXpert is a smart, multipurpose calculator web
                            application built with HTML, CSS, JavaScript, and Bootstrap. It unifies arithmetic,
                            geometric, and unit conversion tools into one elegant interface. 
                        
                        </p>
                        <p class="text-justify">Using JavaScript, all
                            core actions and calculations are performed dynamically, ensuring fast, accurate, and
                            interactive results. Designed for students, engineers, and daily users, CalXy combines
                            functionality with a sleek, responsive design for an efficient and engaging experience.</p>        
                                </ul>
`;

  h33.innerText = "1.CalcXpert";
  imgg.src = "/assets/Screenshot 2025-11-10 215944.png";
}

function prg_change2() {
  let imgg = document.getElementById("prg-img");

  let h33 = document.getElementById("prg-h3");

  let p = document.getElementById("prg-p");

  p.innerHTML = `  <ul class="text-white-50">
                            <p class="text-justify">Architectural & Luxury Interior Design Studio</p>
                            <p class="text-justify">A modern, responsive web experience for a luxury architecture and
                                interior design brand
                                that blends aesthetics with digital elegance.</p>
                            <p class="text-justify">
                                The goal was to capture the brand’s sophistication and creativity through a minimal yet
                                luxurious interface that mirrors their physical design philosophy — where form meets
                                function and space meets emotion.</p>
                        </ul>`;

  h33.innerText = "2.Haven&Hue";

  imgg.src = "/assets/Screenshot 2025-10-26 124730.png";
}

function prg_change3() {
  let imgg = document.getElementById("prg-img");

  let h33 = document.getElementById("prg-h3");

  let p = document.getElementById("prg-p");

  p.innerHTML = `  <ul class="text-white-50 ">
                            <p class="text-justify">A personal portfolio website built using HTML, CSS, and Bootstrap,
                                showcasing projects,
                                skills, and experiences. The site features a clean and responsive design, project
                                galleries, an home page, and contact information.</p>
                            <p class="text-justify">Smooth scrolling, animations, and interactive elements are
                                implemented to enhance user
                                experience, providing a dynamic and engaging platform to present personal work and
                                professional credentials.</p>
                        </ul>`;

  h33.innerText = "3.Personal Portfolio Website";

  imgg.src = "/assets/Screenshot 2025-10-26 124142.png";
}
