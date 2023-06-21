document.addEventListener("DOMContentLoaded", function()
{
    var hamburger = document.querySelector(".menuimg");
    var menu = document.querySelector(".menu");

    hamburger.addEventListener("click", function()
    {
        menu.classList.toggle("open");
        animateMenu();
    });

    function animateMenu()
    {
        var lines = document.querySelectorAll(".line");

        lines.forEach(function(line, index)
        {
            if (menu.classList.contains("open"))
            {
                line.style.animation = `lineFadeIn 0.3s ease forwards ${index * 0.1}s`;
            } else
            {
                line.style.animation = `lineFadeOut 0.3s ease forwards ${index * 0.1}s`;
            }
        });
    }
});
