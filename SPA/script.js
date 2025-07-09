document.addEventListener('DOMContentLoaded',() => {
  const dynamicLinks = document.getElementById('dynamic-links'),
    contentDiv = document.getElementById('content');
  const pages = {
    home: `<h2>Home</h2>
          <p class="text">Welcome! This is a simple SPA.</p>
          <p class="text">Single Page Applications (SPAs) offer a seamless and responsive user experience </p>
          <p class="text">by dynamically updating the content without reloading the entire page.</p>`,

    about: `<h2>About</h2>
            <p class="text">A Single Page Application (SPA) is a web application that loads a single HTML page and<p>
            <p class="text">dynamically updates the content as the user interacts with the app. Instead of loading new</p>
            <p class="text">pages from the server, an SPA retrieves data and updates the view in response to user actions</p>`
};


window.addEventListener('load',() => {
  let i=0;
  for(let key in pages){
    let li = document.createElement('li');
    li.innerHTML = `<a href="#${key}" class="${i==0?"active":""}">${key}</a>`;
    dynamicLinks.appendChild(li);
    i++;
  }
});


window.addEventListener('hashchange',() => {
  loadPage(window.location.hash);
});


function loadPage(hash){
  const page = hash.replace('#','');
  contentDiv.innerHTML = pages[page] || pages.home;
  setActiveLink(page);
}


function setActiveLink(page){
  links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    link.classList.toggle('active',link.getAttribute('href').includes(page));
  });
}

loadPage(window.location.hash);

}); 

