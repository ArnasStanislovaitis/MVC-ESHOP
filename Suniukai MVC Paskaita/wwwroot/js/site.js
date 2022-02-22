// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function addToBasket() {
    alert("Product added")
    if (kiekis == null) kiekis = "0";
    localStorage.setItem("krepselis", Number.parseInt(kiekis));
}

function kiek() {
    return localStorage.getItem("krepselis");
}