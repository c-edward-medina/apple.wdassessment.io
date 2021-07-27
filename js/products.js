const productData = [
    {
        "name": "iPhone 12 Pro",
        "color":"Graphite",
        "img":"../images/products/iPhone12Pro/iPhone12_Pro_Graphite.png",
        "price": "P62,990"
    },
    {
        "name": "iPhone 12 Pro",
        "color":"Silver",
        "img":"../images/products/iPhone12Pro/iPhone12_Pro_Silver.png",
        "price": "P62,990"
    },
    {
        "name": "iPhone 12 Pro",
        "color":"Gold",
        "img":"../images/products/iPhone12Pro/iPhone12_Pro_Gold.png",
        "price": "P62,990"
    },
    {
        "name": "iPhone 12 Pro",
        "color":"Pacific Blue",
        "img":"../images/products/iPhone12Pro/iPhone12_Pro_PacificBlue.png",
        "price": "P62,990"
    },
    {
        "name": "iPhone 12",
        "color":"Black",
        "img":"../images/products/iPhone12/iPhone12_Black.png",
        "price": "P49,990"
    },
    {
        "name": "iPhone 12",
        "color":"Blue",
        "img":"../images/products/iPhone12/iPhone12_Blue.png",
        "price": "P49,990"
    },
    {
        "name": "iPhone 12",
        "color":"White",
        "img":"../images/products/iPhone12/iPhone12_White.png",
        "price": "P49,990"
    },
    {
        "name": "iPhone 12",
        "color":"Product(Red)",
        "img":"../images/products/iPhone12/iPhone12_PRed.png",
        "price": "P49,990"
    },
    
]

function productTemplate(prod) {
    return `
    <div class="product-item">
        <img class="product-image" src="${prod.img}">
        <h2 class="product-name">${prod.name}
            <span class="product-color">${prod.color}</span>
        </h2>
        <h1 class="product-price">${prod.price}</h1>
        <button class="btn button-add black" type='button'>Add to Cart</button>
    </div>
    `;
}
document.getElementById("product-list").innerHTML = `
<h1 class="product-title-list">Which iPhone is right for you?</h1>
${productData.map(productTemplate).join("")}
`;

var modal = document.getElementById("cart-modal");
var btn = document.getElementById("checkout");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){modal.style.display="flex";}
span.onclick = function(){modal.style.display="none";}
window.onclick = function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
}


