function redirectToCategory(category){ //send to category.html/CHOSENCATEGORY
    url = 'category.html'
    window.location.href = url.concat(category)
}

function redirectToProduct(product){//send to product.html?CHOSENPRODUCT
    url = 'product.html'
    window.location.href = url.concat(product)
}

function redirectToLogin(){
    window.location.href = 'login.html'
}

function redirectToMainPage() {
    window.location.href = 'initialpage.html'
}

function redirectToRegister(){
    window.location.href = 'register.html'
}

//function redirectToUserArea(){}

function redirectToCart() {
    window.location.href = 'cart.html'
}
