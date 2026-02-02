// Sección DOM: Elementos del DOM
const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const syncBtn = document.getElementById('sync-btn');
const messagesDiv = document.getElementById('messages');

// Sección LocalStorage: Arreglo global y funciones de persistencia
let products = [];

function saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

function loadFromLocalStorage() {
    const stored = localStorage.getItem('products');
    if (stored) {
        products = JSON.parse(stored);
    }
}

// Sección DOM: Renderizar productos
function renderProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => deleteProduct(product.id));
        li.appendChild(deleteBtn);
        productList.appendChild(li);
    });
}

// Sección DOM: Mostrar mensajes
function showMessage(message, type = 'info') {
    messagesDiv.textContent = message;
    messagesDiv.className = type;
    setTimeout(() => {
        messagesDiv.textContent = '';
        messagesDiv.className = '';
    }, 3000);
}

// Sección DOM: Manejar formulario
productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const price = parseFloat(document.getElementById('price').value);
    if (!name || isNaN(price) || price <= 0) {
        showMessage('Datos inválidos. Nombre no vacío y precio positivo.', 'error');
        return;
    }
    const newProduct = { id: Date.now(), name, price };
    products.push(newProduct);
    saveToLocalStorage();
    renderProducts();
    productForm.reset();
    showMessage('Producto agregado exitosamente.', 'success');
    // API POST
    postProductToAPI(newProduct);
});

// Sección DOM: Eliminar producto
function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    saveToLocalStorage();
    renderProducts();
    showMessage('Producto eliminado.', 'success');
    // API DELETE
    deleteProductFromAPI(id);
}

// Sección API: Fetch API con async/await y try/catch
const API_URL = 'http://localhost:3000/products';

async function getProductsFromAPI() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error al obtener productos');
        const data = await response.json();
        // Mapear a productos directamente
        products = data.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price
        }));
        saveToLocalStorage();
        renderProducts();
        console.log('Productos obtenidos de API:', data);
        showMessage('Sincronizado con API.', 'success');
    } catch (error) {
        console.error('Error en GET:', error);
        showMessage('Error al sincronizar.', 'error');
    }
}

async function postProductToAPI(product) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: product.name, body: product.price.toString(), userId: 1 })
        });
        if (!response.ok) throw new Error('Error al agregar producto');
        const data = await response.json();
        console.log('Producto agregado a API:', data);
        // Actualizar id local con el de API
        product.id = data.id;
        saveToLocalStorage();
    } catch (error) {
        console.error('Error en POST:', error);
    }
}

async function deleteProductFromAPI(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Error al eliminar producto');
        console.log('Producto eliminado de API');
    } catch (error) {
        console.error('Error en DELETE:', error);
    }
}

// PUT no implementado ya que no hay funcionalidad de editar

// Sección DOM: Botón sincronizar
syncBtn.addEventListener('click', getProductsFromAPI);

// Inicializar
loadFromLocalStorage();
renderProducts();
