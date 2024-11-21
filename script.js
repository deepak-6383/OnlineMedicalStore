// Medicine data
const medicines = [
    { name: "Paracetamol", price: 50, description: "Relieves pain and reduces fever." },
    { name: "Ibuprofen", price: 100, description: "Effective for inflammation and pain relief." },
    { name: "Amoxicillin", price: 150, description: "Antibiotic used for bacterial infections." },
    { name: "Cetirizine", price: 40, description: "Helps with allergies and itching." },
    { name: "Aspirin", price: 60, description: "Used for pain, fever, and inflammation." },
    { name: "Omeprazole", price: 120, description: "Reduces acid reflux and heartburn." },
    { name: "Metformin", price: 80, description: "Helps control blood sugar levels in diabetes." },
    { name: "Levothyroxine", price: 90, description: "Used to treat hypothyroidism." },
];

// Cart data
let cart = [];

// Render medicines
function renderMedicines() {
    const medicineGrid = document.querySelector(".grid");
    medicines.forEach((medicine, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${medicine.name}</h3>
            <p>${medicine.description}</p>
            <p class="price">₹${medicine.price}</p>
            <button class="add-to-cart-btn" data-index="${index}">Add to Cart</button>
        `;

        medicineGrid.appendChild(card);
    });
}

// Update cart UI
function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `Total: ₹${total}`;
    cartCount.textContent = cart.length;

    // Add remove button listeners
    document.querySelectorAll(".remove-btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            const itemIndex = event.target.getAttribute("data-index");
            cart.splice(itemIndex, 1);
            updateCartUI();
        });
    });
}

// Add to cart functionality
function handleAddToCart() {
    document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            const productIndex = event.target.getAttribute("data-index");
            cart.push(medicines[productIndex]);
            updateCartUI();
        });
    });
}

// Show and hide cart modal
function handleCartModal() {
    const cartIcon = document.getElementById("cart-icon");
    const cartModal = document.getElementById("cart-modal");
    const closeCart = document.getElementById("close-cart");

    cartIcon.addEventListener("click", () => {
        cartModal.classList.remove("hidden");
    });

    closeCart.addEventListener("click", () => {
        cartModal.classList.add("hidden");
    });
}

// Contact form functionality
function handleContactForm() {
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email}.`);
        contactForm.reset();
    });
}

// Initialize the app
function init() {
    renderMedicines();
    handleAddToCart();
    handleCartModal();
    handleContactForm();
}

// Run the script after DOM content is loaded
document.addEventListener("DOMContentLoaded", init);
