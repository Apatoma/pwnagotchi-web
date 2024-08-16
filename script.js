document.addEventListener("DOMContentLoaded", function() {
    const faceElement = document.getElementById("face");
    const faces = ["UwU", "OwO", "-_-", "^_^", ">_<", "(~_~)"];
    
    function changeFace() {
        const randomFace = faces[Math.floor(Math.random() * faces.length)];
        faceElement.textContent = randomFace;
    }
    
    setInterval(changeFace, 3000); // Cambia la expresión cada 3 segundos
});
