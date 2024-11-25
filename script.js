function createButterfly() {
    const butterfly = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    butterfly.classList.add("butterfly");
    butterfly.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    butterfly.setAttribute("viewBox", "0 0 100 100");
    butterfly.innerHTML = `
        <path d="M50,50 Q10,10 30,50 Q10,90 50,50" fill="blue"></path>
        <path d="M50,50 Q90,10 70,50 Q90,90 50,50" fill="yellow"></path>
        <rect x="48" y="45" width="4" height="10" fill="black"></rect>
    `;

    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    butterfly.style.position = "absolute";
    butterfly.style.left = `${x}px`;
    butterfly.style.top = `${y}px`;

    document.body.appendChild(butterfly);

    
    setTimeout(() => butterfly.remove(), 10000);
}


setInterval(createButterfly, 2000);
