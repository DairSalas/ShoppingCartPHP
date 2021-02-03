/* DOM */
// forms
let formProduct = document.getElementById('formProduct');
let formAddProductToCart = document.getElementById('formAddProductToCart');
let formSearchProduct = document.getElementById('formSearchProduct')


// containers
let containerData = document.getElementById('containerData')
let containerProducts = document.getElementById('containerProducts')
let containerCart = document.getElementById('containerCart')


// add product cart
let productNameLabel = document.getElementById('productNameLabel')
let productCartQuantity = document.getElementById('productCartQuantity')
let productPos = document.getElementById('productPos')

// form search product
let searchInputProduct = document.getElementById('searchInputProduct')


/* ADD EVENTS */

formProduct.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formulario = new FormData(formProduct)

    const resp = await fetch(
        'add.php',
        {
            method: 'POST',
            body: formulario
        }
    )

    const { data } = await resp.json()

    alert(data)

})

formAddProductToCart.addEventListener('submit', async (e) => {
    e.preventDefault()
 
    const dataForm = new FormData(formAddProductToCart)

    const resp = await fetch(
        'add-cart.php'
        , {
            method: 'POST',
            body: dataForm
        }
    )

    const { data } = await resp.json()

    alert(data);

    listProducts()

})

formSearchProduct.addEventListener('submit', (e) => {
    e.preventDefault()
})

searchInputProduct.addEventListener('keyup', async (e) => {
    let msg = ''
    let cont = 0

    let sp = searchInputProduct.value.toString().toLowerCase()

    const resp = await fetch('get.php?name=' + sp)
    const { data } = await resp.json()

    for (let i = 0; i < data.length; i++) {
        const element = data[i];

        msg += show(element, i)
        cont++

    }
    containerData.innerHTML = msg
})

/* METHODS */

function allProducts() {
    searchInputProduct.value = ''
    listProducts()
}

function show(product, i) {
    let msg = `
    <div class="col">
        <div class="card mt-2 mb-2 p-1">
            <img class="img-fluid"
                style="min-height: 100px;"
                src="${product.url_image}"
                alt="Image not found">
            <div class="card-body">
                <div class="card-title">
                    <h5>${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <div class="d-flex justify-content-between mr-2">
                        <p class="card-text">
                            <small class="text-muted">
                                $${product.price}
                            </small>
                        </p>
                        <p class="card-text">
                            <small class="text-muted">
                                ${product.amount}
                            </small>
                        </p>
                    </div>
                    
                    <button class="btn btn-outline-primary btn-block" data-toggle="modal"       data-target="#addProductToCartModal"
                    onclick="addProductToCartModalDialog(${product.id});">
                        <i class="fas fa-cart-plus"></i>
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
    return msg
}

function addProduct(product) {
    alert(productsArray.push(product) + ' products')
    listProducts()
}

async function listProducts() {
    const resp = await fetch('list.php')
    const { data } = await resp.json()
    let msg = ''
    for (let i = 0; i < data.length; i++) {
        const product = data[i];
        msg += show(product, i)
    }
    containerData.innerHTML = msg
}

async function addProductToCartModalDialog(i) {
    const resp = await fetch('get-cart.php?id=' + i)
    const { data } = await resp.json()

    productNameLabel.value = data.name
    productPos.value = i
}


async function listCart() {
    let msg = ''
    msg += `
    <div class="table-responsive pt-4 vh-100">
        <h3>Products in cart</h3>
        <table class="table table-bordered table-hover mt-4">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            `
    const resp = await fetch('list-cart.php')
    const { data } = await resp.json()

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        msg += `
                <tr>
                    <td style="max-width: 100px;">
                        <img class="img-fluid" src="${element.url_image}">
                    </td>
                    <td>${element.name}</td>
                    <td>${element.description}</td>
                    <td>${element.price}</td>
                    <td>${element.amount}</td>
                    <td>
                        <button class="btn btn-outline-danger btn-block" onclick="deleteProductInCart(${element.id});">
                            <i class="fas fa-trash-alt"></i>
                            Delete
                        </button>
                    </td>
                </tr>
                `

    }
    msg += `
            </tbody>
        </table >

    </div >
    `
    containerCart.innerHTML = msg
}

async function deleteProductInCart(id) {

    const resp = await fetch('delete-cart.php?id=' + id)
    const { data } = await resp.json()

    alert(data)

    listCart()

}

function loadDocument(opc) {
    if (opc == 1) {
        containerProducts.classList = 'container container-active'
        containerCart.classList = 'container container-hidden'
        listProducts()
    } else {
        containerProducts.classList = 'container container-hidden'
        containerCart.classList = 'container bg-light container-active'
        listCart()
    }
}

window.onload = loadDocument(1)