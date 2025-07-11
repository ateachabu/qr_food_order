// ข้อมูลเมนูอาหาร (เหมือนเดิม)
const menuItems = [
    {
        id: 1,
        name: "ผัดไทยกุ้งสด",
        description: "ผัดไทยเส้นจันท์เหนียวนุ่ม กับกุ้งสดตัวโต",
        price: 99,
        image: "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Pad+Thai"
    },
    {
        id: 2,
        name: "ข้าวผัดสับปะรด",
        description: "ข้าวผัดหอมกรุ่นเสิร์ฟในลูกสับปะรด",
        price: 85,
        image: "https://via.placeholder.com/300x200/FFC300/333333?text=Pineapple+Rice"
    },
    {
        id: 3,
        name: "แกงเขียวหวานไก่",
        description: "แกงเขียวหวานรสเด็ดหอมมันกลมกล่อม",
        price: 110,
        image: "https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Green+Curry"
    },
    {
        id: 4,
        name: "ต้มยำกุ้งน้ำข้น",
        description: "ต้มยำกุ้งรสจัดจ้านหอมเครื่องปรุงสมุนไพร",
        price: 120,
        image: "https://via.placeholder.com/300x200/E91E63/FFFFFF?text=Tom+Yum+Goong"
    },
    {
        id: 5,
        name: "ชาไทยเย็น",
        description: "ชาชงรสชาติกลมกล่อม หอมหวานชื่นใจ",
        price: 45,
        image: "https://via.placeholder.com/300x200/FF9800/FFFFFF?text=Thai+Tea"
    },
    {
        id: 6,
        name: "มะม่วงน้ำปลาหวาน",
        description: "มะม่วงเปรี้ยวราดน้ำปลาหวานรสเด็ด",
        price: 60,
        image: "https://via.placeholder.com/300x200/FFD54F/333333?text=Mango+Sticky+Rice"
    }
];

// ตัวแปรสำหรับเก็บรายการในตะกร้าสินค้า
let cart = [];

// ฟังก์ชันสำหรับแสดงรายการอาหาร
function displayMenuItems(items) {
    const container = document.getElementById('menu-items-container');
    container.innerHTML = ''; // ลบข้อความ "กำลังโหลดเมนู..."

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="item-footer">
                    <span class="price">฿${item.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">เพิ่มลงตะกร้า</button>
                </div>
            </div>
        `;
        container.appendChild(itemElement);
    });
}

// ฟังก์ชันสำหรับเพิ่มสินค้าลงในตะกร้า
function addToCart(itemId) {
    const selectedItem = menuItems.find(item => item.id === itemId);

    if (selectedItem) {
        // เพิ่มสินค้าลงในตะกร้า (สามารถเพิ่มปริมาณได้ในอนาคต)
        cart.push(selectedItem);

        // อัปเดตการแสดงผลตะกร้าสินค้า
        updateCartDisplay();

        // แจ้งเตือนผู้ใช้ (ตัวอย่าง)
        alert(`เพิ่ม ${selectedItem.name} ลงในตะกร้าแล้ว!`);
    }
}

// ฟังก์ชันสำหรับอัปเดตการแสดงผลตะกร้าสินค้า
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let total = 0;

    // ล้างรายการเดิมในตะกร้า
    cartItemsElement.innerHTML = '';

    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<p>ตะกร้าของคุณว่างเปล่า</p>';
    } else {
        // วนลูปแสดงสินค้าในตะกร้า
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <span class="item-name">${item.name}</span>
                <span class="item-price">฿${item.price.toFixed(2)}</span>
            `;
            cartItemsElement.appendChild(cartItemElement);
            total += item.price;
        });
    }

    // อัปเดตยอดรวม
    cartTotalElement.textContent = `฿${total.toFixed(2)}`;
}

// ฟังก์ชันสำหรับการชำระเงิน (เราจะทำให้มันส่งข้อมูลไปที่ Line OA หรืออื่นๆ ในขั้นตอนต่อไป)
function checkout() {
    if (cart.length === 0) {
        alert("กรุณาเพิ่มรายการอาหารลงในตะกร้าก่อนยืนยันการสั่งซื้อ");
        return;
    }

    const confirmation = confirm("ยืนยันการสั่งซื้อหรือไม่?");
    if (confirmation) {
        // Logic การส่งคำสั่งซื้อ (เราจะทำในขั้นตอนต่อไป)
        alert("ขอบคุณสำหรับคำสั่งซื้อ!");
        cart = []; // ล้างตะกร้าหลังจากสั่งซื้อ
        updateCartDisplay();
    }
}

// โหลดเมนูเมื่อ HTML พร้อมใช้งาน (เหมือนเดิม)
document.addEventListener('DOMContentLoaded', function() {
    // โหลดเมนู
    displayMenuItems(menuItems); // บรรทัดนี้คือบรรทัด 46 หากไม่ได้เพิ่ม/ลดบรรทัดอื่น

    // อัปเดตตะกร้าสินค้าเมื่อเริ่มต้น
    updateCartDisplay();
});