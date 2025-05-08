const ExpertiseData = [
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Android Studio",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    name: "Node Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "React Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Javascript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Next Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name :"Netlify",
    logo :"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg"
  },
  {
    name: "Eclipse",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  }
];

const ExpertiseDataHTML = ExpertiseData.map(
  (item) => `
        <div class="expertise-card">
            <img loading="lazy" src="${item.logo}" alt="${item.name}">
            <span>${item.name}</span>
        </div>
    `
).join("");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('expertise-card-container').innerHTML = ExpertiseDataHTML;
});
