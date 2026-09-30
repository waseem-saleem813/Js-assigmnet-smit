function buyNow() {
    let message = document.getElementById("productDescription");
    message.innerText = "Thank you for buying this product!";
}

function changeProduct() {
    let image = document.getElementById("productImage");
    image.src = "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500";
}

function changeImage() {
    let image = document.getElementById("productImage");
    image.src ="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500";
}

function originalImage() {
    let image = document.getElementById("productImage");
    image.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500";
}

function showWelcome() {
    let name = document.getElementById("userName").value;
    let welcome = document.getElementById("welcomeMessage");
    welcome.innerText = `Welcome, ${name}!`;
}

function changeDetails() {
    let name = document.getElementById("productName");
    let price = document.getElementById("productPrice");
    let description = document.getElementById("productDescription");
    name.innerText = "Adidas Sneakers";
    price.innerText = "1500";
    description.innerText = "Premium sneakers with a comfortable and modern design.";
}