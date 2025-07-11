document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('menu-container');

    // ข้อมูลเมนูอาหารจำลอง (ในอนาคตจะดึงมาจาก Backend API)
    const menuItems = [
        {
            id: 1,
            name: "ผัดไทยกุ้งสด",
            description: "ผัดไทยเส้นจันท์เหนียวนุ่ม กับกุ้งสดตัวโต",
            price: 99,
            image: "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Pad+Thai" // รูปภาพจำลอง
        },
        {
            id: 2,
            name: "ข้าวผัดสับปะรด",
            description: "ข้าวผัดหอมกรุ่นเสิร์ฟในลูกสับปะรด",
            price: 85,
            image: "https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Pineapple+Fried+Rice"
        },
        {
            id: 3,
            name: "แกงเขียวหวานไก่",
            description: "แกงเขียวหวานรสเข้มข้น หอมเครื่องแกง",
            price: 110,
            image: "https://via.placeholder.com/300x200/3366FF/FFFFFF?text=Green+Curry"
        },
        {
            id: 4,
            name: "ต้มยำกุ้งน้ำข้น",
            description: "ต้มยำกุ้งรสจัดจ้าน หอมเครื่องสมุนไพร",
            price: 120,
            image: "https://via.placeholder.com/300x200/FFFF33/000000?text=Tom+Yum+Goong"
        },
        {
            id: 5,
            name: "ชาไทยเย็น",
            description: "ชาไทยรสชาติกลมกล่อม หอมหวานชื่นใจ",
            price: 45,
            image: "https://via.placeholder.com/300x200/663300/FFFFFF?text=Thai+Tea"
        },
        {
            id: 6,
            name: "มะม่วงน้ำปลาหวาน",
            description: "มะม่วงมันหวานทานคู่กับน้ำปลาหวานรสเด็ด",
            price: 60,
            image: "https://via.placeholder.com/300x200/FFCC99/000000?text=Mango+Sticky+Rice"
        }
    ];

    // ฟังก์ชันสำหรับแสดงเมนูอาหาร
    function displayMenuItems(items) {
        menuContainer.innerHTML = ''; // ล้างข้อความ "กำลังโหลดเมนู"
        items.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');
            menuItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="item-price">฿${item.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn" data-item-id="${item.id}">เพิ่มลงตะกร้า</button>
                </div>
            `;
            menuContainer.appendChild(menuItemDiv);
        });
    }

    // โหลดและแสดงเมนูเมื่อหน้าเว็บพร้อม
    // จำลองการโหลดข้อมูล 1 วินาที เพื่อให้เห็นข้อความ "กำลังโหลด"
    setTimeout(() => {
        displayMenuItems(menuItems);
    }, 1000);

    // ตัวอย่างการเพิ่มฟังก์ชันเมื่อคลิกปุ่ม "เพิ่มลงตะกร้า"
    // ในอนาคตจะมีการสร้างระบบตะกร้าสินค้าจริง
    menuContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const itemId = event.target.dataset.itemId;
            const selectedItem = menuItems.find(item => item.id == itemId);
            if (selectedItem) {
                alert(`คุณได้เพิ่ม "${selectedItem.name}" ลงในตะกร้าแล้ว! (ระบบตะกร้าสินค้าจะถูกพัฒนาต่อไป)`);
                // ในระบบจริง จะเพิ่มสินค้านี้เข้าสู่ตะกร้าสินค้าของลูกค้า
            }
        }
    });
});document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('menu-container');

    // ข้อมูลเมนูอาหารจำลอง (ในอนาคตจะดึงมาจาก Backend API)
    const menuItems = [
        {
            id: 1,
            name: "ผัดไทยกุ้งสด",
            description: "ผัดไทยเส้นจันท์เหนียวนุ่ม กับกุ้งสดตัวโต",
            price: 99,
            image: "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Pad+Thai" // รูปภาพจำลอง
        },
        {
            id: 2,
            name: "ข้าวผัดสับปะรด",
            description: "ข้าวผัดหอมกรุ่นเสิร์ฟในลูกสับปะรด",
            price: 85,
            image: "https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Pineapple+Fried+Rice"
        },
        {
            id: 3,
            name: "แกงเขียวหวานไก่",
            description: "แกงเขียวหวานรสเข้มข้น หอมเครื่องแกง",
            price: 110,
            image: "https://via.placeholder.com/300x200/3366FF/FFFFFF?text=Green+Curry"
        },
        {
            id: 4,
            name: "ต้มยำกุ้งน้ำข้น",
            description: "ต้มยำกุ้งรสจัดจ้าน หอมเครื่องสมุนไพร",
            price: 120,
            image: "https://via.placeholder.com/300x200/FFFF33/000000?text=Tom+Yum+Goong"
        },
        {
            id: 5,
            name: "ชาไทยเย็น",
            description: "ชาไทยรสชาติกลมกล่อม หอมหวานชื่นใจ",
            price: 45,
            image: "https://via.placeholder.com/300x200/663300/FFFFFF?text=Thai+Tea"
        },
        {
            id: 6,
            name: "มะม่วงน้ำปลาหวาน",
            description: "มะม่วงมันหวานทานคู่กับน้ำปลาหวานรสเด็ด",
            price: 60,
            image: "https://via.placeholder.com/300x200/FFCC99/000000?text=Mango+Sticky+Rice"
        }
    ];

    // ฟังก์ชันสำหรับแสดงเมนูอาหาร
    function displayMenuItems(items) {
        menuContainer.innerHTML = ''; // ล้างข้อความ "กำลังโหลดเมนู"
        items.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');
            menuItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="item-price">฿${item.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn" data-item-id="${item.id}">เพิ่มลงตะกร้า</button>
                </div>
            `;
            menuContainer.appendChild(menuItemDiv);
        });
    }

    // โหลดและแสดงเมนูเมื่อหน้าเว็บพร้อม
    // จำลองการโหลดข้อมูล 1 วินาที เพื่อให้เห็นข้อความ "กำลังโหลด"
    setTimeout(() => {
        displayMenuItems(menuItems);
    }, 1000);

    // ตัวอย่างการเพิ่มฟังก์ชันเมื่อคลิกปุ่ม "เพิ่มลงตะกร้า"
    // ในอนาคตจะมีการสร้างระบบตะกร้าสินค้าจริง
    menuContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const itemId = event.target.dataset.itemId;
            const selectedItem = menuItems.find(item => item.id == itemId);
            if (selectedItem) {
                alert(`คุณได้เพิ่ม "${selectedItem.name}" ลงในตะกร้าแล้ว! (ระบบตะกร้าสินค้าจะถูกพัฒนาต่อไป)`);
                // ในระบบจริง จะเพิ่มสินค้านี้เข้าสู่ตะกร้าสินค้าของลูกค้า
            }
        }
    });
});