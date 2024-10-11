// استمع لحدث 'DOMContentLoaded' الذي يتم تشغيله عندما يتم تحميل صفحة HTML بالكامل
document.addEventListener('DOMContentLoaded', function() {
    
    // احصل على العنصر الذي يحتوي على المحتوى الرئيسي لعرض الصفحات المختلفة
    const content = document.getElementById('content');
    
    // اجلب جميع الروابط داخل عناصر التنقل والتي تحتوي على الصنف 'nav-links'
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // احصل على أيقونة السلة (cart) لعرض عدد العناصر في السلة
    const cartIcon = document.querySelector('.cart');
    
    // أنشئ عنصر جديد لعرض قائمة السلة (cart dropdown)
    const cartDropdown = document.createElement('div');
    cartDropdown.className = 'cart-dropdown';  // أضف الصنف (class) إلى عنصر السلة
    document.body.appendChild(cartDropdown);  // أضف عنصر السلة إلى صفحة HTML
    
    // إنشاء وتعيين 'cartBadge' لعرض عدد المنتجات داخل السلة
    const cartBadge = document.createElement('span');
    cartBadge.className = 'cart-badge';  // تعيين الصنف (class) الخاص بالبادج
    cartIcon.appendChild(cartBadge);  // إلحاق 'cartBadge' بأيقونة السلة


        // مصفوفة المنتجات تحتوي على بيانات المنتجات (معرف، فئة، اسم، سعر، وصف، وصورة)
        let products = [
            { id: 1, category: 'هواتف', name: 'iPhone 13', price: 1000, description: 'هاتف ذكي عالي الجودة من أبل', image: 'mig/iphone13.jpeg' },
            { id: 2, category: 'هواتف', name: 'Samsung Galaxy S21', price: 950, description: 'هاتف سامسونج رائد مع كاميرا ممتازة', image: 'mig/galaxys21.jpeg' },
            { id: 3, category: 'هواتف', name: 'Google Pixel 6', price: 850, description: 'هاتف ذكي من جوجل مزود بأندرويد بحت', image: 'mig/pixel6.jpeg' },
            
            { id: 4, category: 'لابتوبات', name: 'Dell XPS 13', price: 2500, description: 'لابتوب نحيف وخفيف مع شاشة عالية الدقة', image: 'mig/dellxps13.jpeg' },
            { id: 5, category: 'لابتوبات', name: 'MacBook Pro 14"', price: 3200, description: 'لابتوب قوي من أبل مع شريحة M1', image: 'mig/macbookpro.jpeg' },
            { id: 6, category: 'لابتوبات', name: 'HP Spectre x360', price: 2200, description: 'لابتوب قابل للتحويل مع شاشة تعمل باللمس', image: 'mig/hpspectre.jpeg' },
            
            { id: 7, category: 'تلفزيونات', name: 'Samsung 55" 4K', price: 3000, description: 'تلفاز 4K بتقنية HDR من سامسونج', image: 'mig/samsungtv.jpeg' },
            { id: 8, category: 'تلفزيونات', name: 'LG OLED 65"', price: 4500, description: 'تلفاز OLED عالي الجودة بتقنية Dolby Vision', image: 'mig/lg65oled.jpeg' },
            { id: 9, category: 'تلفزيونات', name: 'Sony Bravia 75"', price: 5000, description: 'تلفاز 75 بوصة مع دقة 8K وتقنيات متقدمة', image: 'mig/sonybravia.jpeg' },
            
            { id: 10, category: 'اجهزة الكترونية', name: 'Apple Watch Series 6', price: 1200, description: 'ساعة ذكية متقدمة مع ميزات صحية متطورة', image: 'mig/applewatch.jpeg' },
            { id: 11, category: 'اجهزة الكترونية', name: 'Fitbit Charge 5', price: 800, description: 'سوار ذكي لمراقبة اللياقة البدنية', image: 'mig/fitbitcharge.jpeg' },
            { id: 12, category: 'اجهزة الكترونية', name: 'Sony WH-1000XM4', price: 1500, description: 'سماعات رأس لاسلكية مع إلغاء الضوضاء', image: 'mig/sonyheadphones.jpeg' },
            
            { id: 13, category: 'مستلزمات كمبيوتر', name: 'Logitech MX Master 3', price: 200, description: 'فأرة لاسلكية مريحة متعددة الاستخدامات', image: 'mig/logitechmouse.jpeg' },
            { id: 14, category: 'مستلزمات كمبيوتر', name: 'Corsair K95 RGB Keyboard', price: 350, description: 'لوحة مفاتيح ميكانيكية بإضاءة RGB', image: 'mig/corsairkeyboard.jpeg' },
            { id: 15, category: 'مستلزمات كمبيوتر', name: 'Razer Basilisk Ultimate', price: 400, description: 'فأرة ألعاب متقدمة مع إضاءة RGB', image: 'mig/razerbasilisk.jpeg' },
            { id: 16, category: 'مستلزمات كمبيوتر', name: 'ASUS 27" Gaming Monitor', price: 1500, description: 'شاشة ألعاب عالية الدقة مع معدل تحديث 144Hz', image: 'mig/asusmonitor.jpeg' },
            
            { id: 17, category: 'اجهزة العاب', name: 'PlayStation 5', price: 4000, description: 'جهاز ألعاب متقدم من سوني', image: 'mig/ps5.jpeg' },
            { id: 18, category: 'اجهزة العاب', name: 'Xbox Series X', price: 3500, description: 'جهاز ألعاب قوي من مايكروسوفت', image: 'mig/xboxseriesx.jpeg' },
            { id: 19, category: 'اجهزة العاب', name: 'Nintendo Switch', price: 2000, description: 'جهاز ألعاب محمول متعدد الاستخدامات', image: 'mig/nintendoswitch.jpeg' },
            { id: 20, category: 'اجهزة العاب', name: 'Oculus Quest 2', price: 1800, description: 'نظارة واقع افتراضي مستقلة للألعاب', image: 'mig/oculusquest2.jpeg' },
            
            { id: 21, category: 'غيرها', name: 'Google Nest Hub', price: 500, description: 'جهاز ذكي للتحكم في المنزل', image: 'mig/nesthub.jpeg' },
            { id: 22, category: 'غيرها', name: 'Amazon Echo Dot', price: 350, description: 'مساعد صوتي صغير للتحكم في الأجهزة المنزلية', image: 'mig/echodot.jpeg' },
            { id: 23, category: 'غيرها', name: 'Philips Hue Smart Bulb', price: 150, description: 'لمبة ذكية قابلة للتحكم عبر الهاتف', image: 'mig/philipsbulb.jpeg' },
            { id: 24, category: 'غيرها', name: 'Ring Video Doorbell', price: 1200, description: 'جرس باب ذكي مع كاميرا', image: 'mig/ringdoorbell.jpeg' }
        ];
        
    // مصفوفة السلة (cart) لاحتواء المنتجات التي يضيفها المستخدم
    let cart = [];
    
    // مصفوفة المفضلة (favorites) لاحتواء المنتجات المفضلة للمستخدم
    let favorites = [];

    // دالة لتحميل المحتوى بناءً على الصفحة المختارة
    function loadContent(page) {
        switch(page) {
            case 'home':
                showHomePage();  // عرض الصفحة الرئيسية
                break;
            case 'products':
                showProductsPage();  // عرض صفحة المنتجات
                break;
            case 'contact':
                showAddProductcontact()
                break;
            case 'add-product':
                showAddProductForm();  // عرض نموذج إضافة منتج
                break;
            case 'favorites':
                showFavoritesPage();  // عرض صفحة المفضلة
                break;
            case 'purchases':
                showPurchasesPage();  // عرض صفحة المشتريات
                break;
            case 'checkout':
                showCheckoutPage();  // عرض صفحة إتمام الشراء
                break;
            default:
                content.innerHTML = '<h1>صفحة غير موجودة</h1>';  // إذا كانت الصفحة غير موجودة
        }
    }
    // دالة لعرض صفحة المنتجات وتصفيتها حسب الفئة
    function showProductsPage() {
        // جلب جميع الفئات الموجودة بناءً على المنتجات المتاحة
        const categories = ['الكل', ...new Set(products.map(p => p.category))];
        let productsHTML = '<h1>المنتجات</h1>';
        
        // إضافة أزرار التصفية حسب الفئة
        productsHTML += '<div class="filter-buttons">';
        categories.forEach(category => {
            productsHTML += `<button class="filter-btn" data-category="${category}">${category}</button>`;
        });
        productsHTML += '</div>';
    
        // إضافة قسم لعرض المنتجات
        productsHTML += '<div class="products-grid" id="productsGrid"></div>';
    
        content.innerHTML = productsHTML;  // عرض الأزرار والمنتجات في المحتوى الرئيسي
    
        // إضافة مستمعي الأحداث لأزرار التصفية لتحديث عرض المنتجات عند الضغط عليها
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.dataset.category;
                filterProducts(category);  // تصفية المنتجات بناءً على الفئة المختارة
            });
        });
    
        // عرض جميع المنتجات في البداية
        filterProducts('الكل');
    }

    // دالة لتصفية المنتجات بناءً على الفئة
    function filterProducts(category) {
        const filteredProducts = category === 'الكل' ? products : products.filter(p => p.category === category);  // تصفية المنتجات
        const productsGrid = document.getElementById('productsGrid');  // الحصول على عنصر الشبكة لعرض المنتجات
    
        let productsHTML = '';
        filteredProducts.forEach(product => {
            // إنشاء بطاقة لكل منتج مع معلوماته وأزرار السلة والمفضلة
            productsHTML += `
                <div class="product-card">
                    <div class="product-price">${product.price} ريال</div>
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <h3>${product.name}</h3>
                    <div class="product-actions">
                        <button class="add-to-cart" data-id="${product.id}">🛒</button>
                        <button class="add-to-favorites" data-id="${product.id}">❤️</button>
                    </div>
                </div>
            `;
        });
    
        productsGrid.innerHTML = productsHTML;  // تحديث عرض المنتجات
    
        // إضافة مستمعي الأحداث لأزرار السلة والمفضلة
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                addToCart(this.dataset.id);  // إضافة المنتج إلى السلة عند الضغط على زر السلة
            });
        });
    
        document.querySelectorAll('.add-to-favorites').forEach(button => {
            button.addEventListener('click', function() {
                addToFavorites(this.dataset.id);  // إضافة المنتج إلى المفضلة عند الضغط على زر المفضلة
            });
        });
    }
    
    // دالة لعرض نموذج إضافة منتج جديد

    function showAddProductForm() {
        content.innerHTML = `
            <h1>إضافة منتج جديد</h1>
            <form id="addProductForm">
                <select name="category" required>
                    <option value="">اختر الفئة</option>
                    <option value="هواتف">هواتف</option>
                    <option value="اسلحة متوسطة"> لابتوبات</option>
                    <option value=" تلفزيونات"> تلفزيونات</option>
                    <option value="اجهزة الكترونية">اجهزة الكترونية</option>
                    <option value="ذخيرة">مستلزمات كمبيوتر</option>
                    <option value="بذلات صيد"> اجهزة العاب</option>
                    <option value="غيرها">غيرها</option>
                </select>
                <input type="text" name="name" placeholder="اسم المنتج" required>
                <input type="number" name="price" placeholder="السعر" required>
                <textarea name="description" placeholder="الوصف" required></textarea>
                <input type="file" name="image" accept="image/*" required>
                <button type="submit">إضافة</button>
            </form>
        `;

        document.getElementById('addProductForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const newProduct = {
                category: formData.get('category'),
                name: formData.get('name'),
                price: parseFloat(formData.get('price')),
                description: formData.get('description'),
                image: URL.createObjectURL(formData.get('image'))
            };
            products.unshift(newProduct); // إضافة المنتج الجديد في بداية المصفوفة
            alert('تم إضافة المنتج بنجاح!');
            showHomePage(); // الانتقال إلى الصفحة الرئيسية بعد الإضافة
        });
    }
    function showAddProductcontact() {
        content.innerHTML = `
        <section class="contact-info">
        <h2>معلومات التواصل</h2>
        <p><strong>الموقع:</strong> صنعاء، اليمن</p>
        <p><strong>الهاتف:</strong> +967 123456789</p>
        <p><strong>البريد الإلكتروني:</strong> info@example.com</p>
    </section>

    <section class="contact-form">
        <h2>أرسل لنا رسالة</h2>
        <form action="#">
            <label for="name">الاسم الكامل:</label>
            <input type="text" id="name" name="name" placeholder="أدخل اسمك">

            <label for="email">البريد الإلكتروني:</label>
            <input type="email" id="email" name="email" placeholder="أدخل بريدك الإلكتروني">

            <label for="message">رسالتك:</label>
            <textarea id="message" name="message" placeholder="أدخل رسالتك هنا"></textarea>

            <button type="submit">إرسال</button>
        </form>
    </section>
        `;
    }
    function showHomePage() {
        let productsHTML = '<h1>الصفحة الرئيسية</h1><div class="products-grid">';
        products.forEach(product => {
            productsHTML += `
                <div class="product-card">
                    <div class="product-price">${product.price} ريال</div>
                    <hr>
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <hr>

                    <h3>${product.name}</h3>
                    <hr>

                    <div class="product-actions">
                        <button class="add-to-cart" data-id="${product.id}">🛒</button>
                        <button class="add-to-favorites" data-id="${product.id}">❤️</button>
                    </div>
                </div>
            `;
        });
        productsHTML += '</div>';
        content.innerHTML = productsHTML;

        // إضافة مستمعي الأحداث لأزرار السلة والمفضلة
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                addToCart(this.dataset.id);
            });
        });

        document.querySelectorAll('.add-to-favorites').forEach(button => {
            button.addEventListener('click', function() {
                addToFavorites(this.dataset.id);
            });
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id == productId);
        if (product) {
            cart.push(product);
            updateCartDropdown();
            updateCartBadge();
        
            alert(`تمت إضافة ${product.name} إلى السلة`);
        }
    }

    function addToFavorites(productId) {
        const product = products.find(p => p.id == productId);
        if (product) {
            if (!favorites.some(f => f.id == productId)) {
                favorites.push(product);
                alert(`تمت إضافة ${product.name} إلى المفضلة`);
            } else {
                alert(`${product.name} موجود بالفعل في المفضلة`);
            }
        }
    }
    function updateCartBadge() {
        cartBadge.textContent = cart.length;
        cartBadge.style.display = cart.length > 0 ? 'block' : 'none';
    }
    function updateCartDropdown() {
        let cartHTML = '';
        if (cart.length === 0) {
            cartHTML += '<p class="pp">السلة فارغة</p>';
        }else {
            cartHTML += '<ul class="cart-items">';
            cart.forEach(item => {
                cartHTML += `
                    <li class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <span class="cart-item-name">${item.name}</span>
                            <span class="cart-item-price">${item.price} ريال</span>
                        </div>
                    </li>
                `;
            });
            cartHTML += '</ul>';
        }
        cartHTML += '<button id="checkout">إتمام الشراء</button>';
        cartDropdown.innerHTML = cartHTML;

        document.getElementById('checkout').addEventListener('click', function() {
            loadContent('checkout');
            cartDropdown.style.display = 'none';
        });

        updateCartBadge();
    }



    function showCheckoutPage() {
        let checkoutHTML = '<h1>إتمام الشراء</h1>';
        let total = 0;
        if (cart.length === 0) {
            checkoutHTML += '<p>السلة فارغة</p>';
        } else {
            checkoutHTML += '<div class="checkout-items">';
            cart.forEach((item, index) => {
                checkoutHTML += `
                    <div class="checkout-item">
                        <img src="${item.image}" alt="${item.name}" class="checkout-item-image">
                        <div class="checkout-item-details">
                            <h3>${item.name}</h3>
                            <p>السعر: <span class="item-price">${item.price}</span> ريال</p>
                            <label>الكمية: <input type="number" min="1" value="1" class="quantity-input" data-index="${index}"></label>
                            <p>المجموع: <span class="item-total">${item.price}</span> ريال</p>
                        </div>
                    </div>
                `;
                total += item.price;
            });
            checkoutHTML += '</div>';
            checkoutHTML += `<h2>المجموع الكلي: <span id="total-price">${total}</span> ريال</h2>`;
            checkoutHTML += '<button id="complete-purchase">إتمام الشراء</button>';
        }
        content.innerHTML = checkoutHTML;

        // إضافة مستمعي الأحداث لحقول الكمية
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', updateItemTotal);
        });

        // إضافة مستمع الحدث لزر إتمام الشراء
        document.getElementById('complete-purchase')?.addEventListener('click', completePurchase);
    }

    function updateItemTotal(e) {
        const index = e.target.dataset.index;
        const quantity = parseInt(e.target.value);
        const item = cart[index];
        const itemTotal = item.price * quantity;
        e.target.parentElement.nextElementSibling.querySelector('.item-total').textContent = itemTotal;
        updateTotalPrice();
    }

    function updateTotalPrice() {
        const total = Array.from(document.querySelectorAll('.item-total'))
            .reduce((sum, el) => sum + parseFloat(el.textContent), 0);
        document.getElementById('total-price').textContent = total.toFixed(2);
    }

    function completePurchase() {
        alert('تم إتمام الشراء بنجاح!');
        cart = [];
        updateCartDropdown();
        loadContent('home');
    }

    function showPurchasesPage() {
        content.innerHTML = '<h1>المشتريات</h1><p>هنا ستظهر قائمة المشتريات السابقة</p>';
    }


    function showFavoritesPage() {
        let favoritesHTML = '<h1>المفضلة</h1>';
        if (favorites.length === 0) {
            favoritesHTML += '<p>لا توجد منتجات في المفضلة</p>';
        } else {
            favoritesHTML += '<div class="products-grid">';
            favorites.forEach(product => {
                favoritesHTML += `
                    <div class="product-card">
                        <div class="product-price">${product.price} ريال</div>
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <h3>${product.name}</h3>
                        <div class="product-actions">
                            <button class="add-to-cart" data-id="${product.id}">🛒</button>
                            <button class="remove-from-favorites" data-id="${product.id}">🗑️</button>
                        </div>
                    </div>
                `;
            });
            favoritesHTML += '</div>';
        }
        content.innerHTML = favoritesHTML;

        // إضافة مستمعي الأحداث لأزرار السلة وإزالة من المفضلة
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                addToCart(this.dataset.id);
            });
        });

        document.querySelectorAll('.remove-from-favorites').forEach(button => {
            button.addEventListener('click', function() {
                removeFromFavorites(this.dataset.id);
                showFavoritesPage(); // تحديث الصفحة
            });
        });
    }

    function removeFromFavorites(productId) {
        favorites = favorites.filter(p => p.id != productId);
        alert('تم إزالة المنتج من المفضلة');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadContent(this.id);
        });
    });

    // إضافة مستمع حدث لأيقونة السلة
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // إغلاق القائمة المنسدلة للسلة عند النقر خارجها
    document.addEventListener('click', function(e) {
        if (!cartIcon.contains(e.target) && !cartDropdown.contains(e.target)) {
            cartDropdown.style.display = 'none';
        }
    });

  
    document.querySelector('.user-menu .dropdown-content').addEventListener('click', function(e) {
        if (e.target.textContent === 'المشتريات') {
            e.preventDefault();
            loadContent('purchases');
        } else if (e.target.textContent === 'المفضلة') {
            e.preventDefault();
            loadContent('favorites');
        }
    });
    // تحميل الصفحة الرئيسية افتراضيًا
    loadContent('home');
    updateCartDropdown();
});