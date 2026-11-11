/* ============================================================
   MAA DURGA ENTERPRISES & HOME APPLIANCES - MAIN JAVASCRIPT
   Vanilla JS Product Catalog, Search, Filter & WhatsApp Integration
   ============================================================ */

const STORE_CONFIG = {
  name: "Maa Durga Enterprises & Home Appliances",
  phone: "082102 11632",
  phoneClean: "08210211632",
  whatsappNumber: "918210211632",
  address: "Sahebganj Rd, Shanti Nagar Chowk, Bara Chakia, Bihar 845412",
  mapsPlusCode: "C23W+HM, Sahebganj, Bihar",
  instagramUrl: "https://www.instagram.com/maa_durga_enterprises_chakia/",
  googleMapsUrl: "https://maps.app.goo.gl/qC2v1nzmAX93e75W9"
};

// Curated 18+ high-demand authentic products with specs, pricing & professional imagery
const PRODUCTS = [
  // --- SMARTPHONES ---
  {
    id: "phone-samsung-a15",
    name: "Samsung Galaxy A15 5G (8GB / 128GB)",
    category: "smartphones",
    brand: "Samsung",
    price: 17999,
    mrp: 21499,
    discount: "16% OFF",
    badge: "100% Genuine",
    badgeClass: "badge-official",
    featured: true,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
    specs: [
      "Super AMOLED 90Hz Display",
      "50MP Triple Camera with VDIS",
      "5000 mAh Battery + 25W Fast Charge",
      "Official 1-Year Samsung India Warranty"
    ],
    emi: "From ₹1,499/month on Bajaj Finserv",
    desc: "Experience ultra-fast 5G with Samsung Galaxy A15. Stunning AMOLED display, Knox security, and guaranteed Android upgrades. 100% authentic stock with GST bill."
  },
  {
    id: "phone-vivo-v30",
    name: "Vivo V30 5G (8GB / 128GB - Aura Light)",
    category: "smartphones",
    brand: "Vivo",
    price: 31999,
    mrp: 35999,
    discount: "11% OFF",
    badge: "Best Seller",
    badgeClass: "badge-offer",
    featured: true,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    specs: [
      "50MP Studio-Quality Aura Light OIS Camera",
      "Slim 3D Curved 1.5K AMOLED Display",
      "Snapdragon 7 Gen 3 Ultra Performance",
      "80W FlashCharge in 30 Mins"
    ],
    emi: "0% Interest EMI Available at Shop",
    desc: "The flagship portrait master smartphone. Capture studio portraits day or night with intelligent smart aura light portrait system."
  },
  {
    id: "phone-realme-12pro",
    name: "Realme 12 Pro 5G (Submarine Blue)",
    category: "smartphones",
    brand: "Realme",
    price: 23999,
    mrp: 29999,
    discount: "20% OFF",
    badge: "Top Camera",
    badgeClass: "badge-official",
    featured: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    specs: [
      "32MP Telephoto Portrait Sony Lens",
      "Luxury Watch Inspired Vegan Leather Design",
      "120Hz Curved Vision Display",
      "67W SUPERVOOC Fast Charge"
    ],
    emi: "Starting ₹1,999/month",
    desc: "Premium luxury watch design engineered by French master watchmaker Ollivier Savéo. Flagship telephoto zoom camera."
  },
  {
    id: "phone-redmi-note13",
    name: "Redmi Note 13 5G (6GB / 128GB)",
    category: "smartphones",
    brand: "Xiaomi",
    price: 15499,
    mrp: 18999,
    discount: "18% OFF",
    badge: "Festive Deal",
    badgeClass: "badge-offer",
    featured: false,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=600&q=80",
    specs: [
      "108MP Pro-Grade Ultra-Clear Camera",
      "Super-slim 120Hz AMOLED Bezel-less Screen",
      "MediaTek Dimensity 6080 5G Processor",
      "Corning Gorilla Glass 5 Protection"
    ],
    emi: "Easy In-Store Finance with Aadhar",
    desc: "India's highest selling smartphone series with lightning-fast 5G speeds, crystal-clear 108MP photos, and all-day battery life."
  },
  {
    id: "phone-oneplus-nord-ce4",
    name: "OnePlus Nord CE4 (8GB / 128GB)",
    category: "smartphones",
    brand: "OnePlus",
    price: 24999,
    mrp: 26999,
    discount: "7% OFF",
    badge: "Super Fast",
    badgeClass: "badge-official",
    featured: false,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
    specs: [
      "100W SUPERVOOC (1-100% in 29 mins)",
      "Snapdragon 7 Gen 3 Fast & Smooth",
      "5500 mAh Mega Battery (Largest in Nord)",
      "50MP Sony LYT-600 Camera with OIS"
    ],
    emi: "Zero Down Payment EMI available",
    desc: "Fast, smooth, and indestructible Nord power. OxygenOS with zero lag and class-leading battery endurance."
  },

  // --- SMART TVS ---
  {
    id: "tv-samsung-43-4k",
    name: "Samsung 43-inch Crystal 4K Vivid Pro Smart TV",
    category: "smart-tvs",
    brand: "Samsung",
    price: 28990,
    mrp: 44900,
    discount: "35% OFF",
    badge: "Mega TV Offer",
    badgeClass: "badge-offer",
    featured: true,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
    specs: [
      "4K Ultra HD Resolution with PurColor",
      "Crystal Processor 4K for Vivid Clarity",
      "Q-Symphony Audio + Dolby Digital Plus",
      "YouTube, Netflix, Prime Video, Hotstar Built-in"
    ],
    emi: "₹2,400/month with Bajaj Finserv",
    desc: "Upgrade your living room entertainment with Samsung Crystal 4K. True billion shades of color and cinema-like acoustics. Official brand installation support."
  },
  {
    id: "tv-lg-55-4k",
    name: "LG 55-inch 4K Ultra HD Smart WebOS TV",
    category: "smart-tvs",
    brand: "LG",
    price: 43990,
    mrp: 69990,
    discount: "37% OFF",
    badge: "Cinema Experience",
    badgeClass: "badge-official",
    featured: true,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80",
    specs: [
      "α5 AI Processor Gen6 for Smart Upscaling",
      "Filmmaker Mode & HDR10 Pro",
      "Magic Remote with Voice Assistant",
      "3-Year Comprehensive LG Warranty Offer"
    ],
    emi: "Easy 6/9/12 Months EMI at Shop",
    desc: "Giant 55-inch theater visual experience right at home with LG WebOS intelligence and rich, deep surround sound."
  },
  {
    id: "tv-mi-32-hd",
    name: "Xiaomi Mi 32-inch Horizon Smart Android TV",
    category: "smart-tvs",
    brand: "Xiaomi",
    price: 11999,
    mrp: 19999,
    discount: "40% OFF",
    badge: "Budget King",
    badgeClass: "badge-offer",
    featured: false,
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80",
    specs: [
      "Bezel-less Horizon Design",
      "Vivid Picture Engine with 20W Stereo Sound",
      "Android TV with Google Assistant & Chromecast",
      "100% Genuine Box with GST Bill"
    ],
    emi: "Starting ₹999/month",
    desc: "The perfect budget smart TV for bedrooms or drawing rooms. Seamlessly stream your favorite Hindi serials, movies, and YouTube."
  },

  // --- TRIVENI ALMIRAH ---
  {
    id: "almirah-triveni-luxury-3door",
    name: "Triveni Luxury 3-Door Heavy Steel Almirah (Full Mirror & Digital Safe)",
    category: "triveni-almirah",
    brand: "Triveni Almirah",
    price: 24500,
    mrp: 31000,
    discount: "21% OFF",
    badge: "Authorised Dealer",
    badgeClass: "badge-triveni",
    featured: true,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80",
    specs: [
      "100% Original Triveni Cold Rolled Prime Steel",
      "Heavy Duty 7-Tank Anti-Rust Powder Coating",
      "Full Length Dressing Mirror + Secret Locker",
      "Dual Security Lock System with Master Key"
    ],
    emi: "Safe Local Delivery in Chakia & Sahebganj",
    desc: "Maa Durga Enterprises is the authorized stockist for genuine Triveni Almirahs in Chakia and Sahebganj. Guaranteed original gauge, zero rust, lifetime steel durability."
  },
  {
    id: "almirah-triveni-royal-2door",
    name: "Triveni Royal 2-Door Designer Wardrobe (Classic Maroon / Grey)",
    category: "triveni-almirah",
    brand: "Triveni Almirah",
    price: 17800,
    mrp: 22500,
    discount: "20% OFF",
    badge: "Most Popular",
    badgeClass: "badge-triveni",
    featured: true,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=600&q=80",
    specs: [
      "Heavy Steel Body with Modern Designer Floral Engraving",
      "Multiple Spacious Shelves + Hanging Rod + Locker",
      "Scratch & Termite Resistant Finish",
      "Authentic Triveni Hologram Verified"
    ],
    emi: "Inspect & Buy Directly at Showroom",
    desc: "The classic household choice for marriage gifting and home storage. Built like a vault with elegant aesthetics."
  },
  {
    id: "almirah-triveni-compact",
    name: "Triveni Classic Double Door Compact Almirah",
    category: "triveni-almirah",
    brand: "Triveni Almirah",
    price: 14200,
    mrp: 17500,
    discount: "19% OFF",
    badge: "Best Value",
    badgeClass: "badge-triveni",
    featured: false,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    specs: [
      "Compact footprint, maximum interior space",
      "Heavy CRCA prime steel sheet fabrication",
      "Internal jewel drawer with key lock",
      "Official Triveni Guarantee"
    ],
    emi: "Delivery & Setup Assistance Available",
    desc: "Ideal compact steel wardrobe for bedrooms, shops, and offices. 100% genuine Triveni craftsmanship."
  },

  // --- HOME APPLIANCES ---
  {
    id: "appliance-whirlpool-fridge",
    name: "Whirlpool 192L 3-Star Direct Cool Refrigerator",
    category: "home-appliances",
    brand: "Whirlpool",
    price: 14990,
    mrp: 18990,
    discount: "21% OFF",
    badge: "Energy Saver",
    badgeClass: "badge-official",
    featured: true,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80",
    specs: [
      "Up to 9 Hours Cooling Retention During Power Cuts",
      "Insulated Capillary Technology with Fast Ice Making",
      "Toughened Glass Shelves (Holds up to 150kg)",
      "10-Year Compressor Warranty by Whirlpool"
    ],
    emi: "Starting ₹1,250/month",
    desc: "Keeps milk, vegetables, and food fresh for up to 9 hours even during regional rural power outages. High energy efficiency."
  },
  {
    id: "appliance-lg-washing-machine",
    name: "LG 7.0 Kg 5-Star Smart Inverter Washing Machine",
    category: "home-appliances",
    brand: "LG",
    price: 17490,
    mrp: 23990,
    discount: "27% OFF",
    badge: "5-Star Rated",
    badgeClass: "badge-offer",
    featured: false,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
    specs: [
      "Smart Inverter Technology (Saves up to 36% Electricity)",
      "TurboDrum with Punch+ 3 Powerful Pulsator",
      "Stainless Steel Tub & Auto Restart",
      "10-Year Motor Warranty"
    ],
    emi: "Available on Bajaj Finserv Card",
    desc: "Wash blankets, sarees, and everyday clothes with spotless care. Quiet motor, rust-proof body, and minimal water consumption."
  },
  {
    id: "appliance-symphony-cooler",
    name: "Symphony 70-Litre High-Power Desert Air Cooler",
    category: "home-appliances",
    brand: "Symphony",
    price: 9999,
    mrp: 13999,
    discount: "28% OFF",
    badge: "Summer Essential",
    badgeClass: "badge-offer",
    featured: true,
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
    specs: [
      "Massive 70-Litre Water Tank for All-Night Cooling",
      "Dense Aspen Cooling Pads + Cool Flow Dispenser",
      "Powerful 45ft Air Throw with Multi-Directional Louvers",
      "Inverter Compatible Operation"
    ],
    emi: "Call for Today's Best Seasonal Offer",
    desc: "Beat the harsh Bihar summer heat effortlessly. High air delivery keeps entire large halls and rooms ice cool."
  },
  {
    id: "appliance-philips-mixer",
    name: "Philips HL7756/00 750W Heavy-Duty Mixer Grinder (3 Jars)",
    category: "home-appliances",
    brand: "Philips",
    price: 3499,
    mrp: 5295,
    discount: "34% OFF",
    badge: "Kitchen Favorite",
    badgeClass: "badge-official",
    featured: false,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80",
    specs: [
      "750W Turbo Torque Motor with Advanced Air Ventilation",
      "Tough Stainless Steel Blades for Hard Grinding (Turmeric/Masala)",
      "Leak-proof Jars with Food-Grade Rubber Gaskets",
      "2-Year Official Philips Warranty"
    ],
    emi: "In Stock at Sahebganj Showroom",
    desc: "Grinds tough Bihari dry masalas, sattu, and batters in under 90 seconds without motor overheating."
  },

  // --- AUDIO & ACCESSORIES ---
  {
    id: "acc-boat-airdopes-141",
    name: "boAt Airdopes 141 ANC True Wireless Earbuds",
    category: "accessories",
    brand: "boAt",
    price: 1399,
    mrp: 4490,
    discount: "68% OFF",
    badge: "Huge Discount",
    badgeClass: "badge-offer",
    featured: false,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    specs: [
      "Active Noise Cancellation (up to 32dB)",
      "42 Hours Playback with ASAP Fast Charge",
      "ENx Quad Mics for Crystal Clear Calling",
      "IPX5 Sweat & Water Resistance"
    ],
    emi: "Instant Delivery Available",
    desc: "Original boAt earbuds with deep bass. Verified authentic with boAt brand QR scan code."
  },
  {
    id: "acc-fast-charger",
    name: "Original 67W / 33W Fast SuperVOOC & Dart Charger Combo",
    category: "accessories",
    brand: "Original",
    price: 899,
    mrp: 1699,
    discount: "47% OFF",
    badge: "100% Genuine",
    badgeClass: "badge-official",
    featured: false,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    specs: [
      "Supports 67W / 33W Ultra Flash Charging",
      "High Grade Pure Copper Type-C Cable Included",
      "Short-Circuit & Surge Protection",
      "Compatible with Vivo, Realme, Oppo, OnePlus & Mi"
    ],
    emi: "Pickup at Store",
    desc: "Do not risk phone motherboard damage with duplicate chargers. Get 100% genuine safe fast chargers from Maa Durga Enterprises."
  },
  {
    id: "acc-powerbank-20000",
    name: "Mi 20000mAh Power Bank 3i (18W Fast Charging)",
    category: "accessories",
    brand: "Xiaomi",
    price: 1999,
    mrp: 2999,
    discount: "33% OFF",
    badge: "Travel Essential",
    badgeClass: "badge-official",
    featured: false,
    image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?auto=format&fit=crop&w=600&q=80",
    specs: [
      "20,000 mAh High-Density Lithium Polymer Capacity",
      "Triple Output Ports (Charge 3 Devices Simultaneously)",
      "18W Fast Recharging via Type-C or Micro-USB",
      "12-Layer Advanced Circuit Chip Protection"
    ],
    emi: "Available at Shop Counter",
    desc: "Never run out of phone battery when traveling. Charges standard smartphones 4 to 5 times completely."
  }
];

function formatINR(number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(number);
}

function getWhatsAppLink(productName, price) {
  const text = encodeURIComponent(
    `Namaste Maa Durga Enterprises! 🙏\n\nI am interested in buying:\n📱 *${productName}*\n💰 Price: ${formatINR(price)}\n\nPlease let me know if it is available in stock at your Chakia/Sahebganj store, current offers, and delivery details.`
  );
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${text}`;
}

function renderProductCard(product) {
  return `
    <div class="product-card" data-category="${product.category}" data-brand="${product.brand}" data-price="${product.price}">
      <div class="product-badge-wrap">
        <span class="product-badge ${product.badgeClass}">${product.badge}</span>
      </div>

      <div class="product-image-box" onclick="openProductModal('${product.id}')" style="cursor: pointer;">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>

      <div class="product-content">
        <span class="product-brand">${product.brand}</span>
        <h3 class="product-title" onclick="openProductModal('${product.id}')" style="cursor: pointer;">${product.name}</h3>

        <ul class="product-specs-list">
          ${product.specs.slice(0, 3).map(s => `<li>${s}</li>`).join('')}
        </ul>

        <div class="product-price-row">
          <span class="price-current">${formatINR(product.price)}</span>
          <span class="price-mrp">${formatINR(product.mrp)}</span>
          <span class="price-discount">${product.discount}</span>
        </div>

        <div style="font-size: 0.72rem; color: #0056B3; font-weight: 600; margin-bottom: 8px;">
          💳 ${product.emi}
        </div>

        <div class="product-actions">
          <a href="${getWhatsAppLink(product.name, product.price)}" target="_blank" class="btn-whatsapp-enquire">
            <span>💬 WhatsApp</span>
          </a>
          <button type="button" class="btn-quick-call" onclick="openProductModal('${product.id}')">
            <span>🔍 Details</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function initFeaturedProducts() {
  const container = document.getElementById('featured-products-grid');
  if (!container) return;

  const featured = PRODUCTS.filter(p => p.featured);
  container.innerHTML = featured.map(p => renderProductCard(p)).join('');
}

function initShopPage() {
  const container = document.getElementById('shop-products-grid');
  if (!container) return;

  const countEl = document.getElementById('shop-product-count');
  const searchInput = document.getElementById('shop-search-input');
  const sortSelect = document.getElementById('shop-sort-select');
  const filterTabs = document.querySelectorAll('.filter-tab');

  let currentCategory = "all";
  let currentSearch = "";
  let currentSort = "featured";

  const urlParams = new URLSearchParams(window.location.search);
  const queryCat = urlParams.get('cat');
  if (queryCat) {
    currentCategory = queryCat;
    filterTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.category === queryCat);
    });
  }

  function filterAndRender() {
    let list = [...PRODUCTS];

    if (currentCategory !== "all") {
      list = list.filter(p => p.category === currentCategory);
    }

    if (currentSearch.trim() !== "") {
      const q = currentSearch.toLowerCase();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );
    }

    if (currentSort === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (currentSort === "discount") {
      list.sort((a, b) => parseInt(b.discount) - parseInt(a.discount));
    }

    if (countEl) {
      countEl.innerText = `Showing ${list.length} products`;
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 12px; border: 1px solid #E2E8F0;">
          <h3 style="font-size: 1.3rem; color: #0A2540; margin-bottom: 8px;">No matching products found</h3>
          <p style="color: #64748B; margin-bottom: 16px;">We might still have it in our Chakia / Sahebganj physical store!</p>
          <a href="https://wa.me/${STORE_CONFIG.whatsappNumber}?text=Hello%20Maa%20Durga%20Enterprises,%20I%20am%20looking%20for%20a%20product%20not%20listed%20on%20website" target="_blank" class="btn-primary-glow" style="display: inline-flex;">
            Ask on WhatsApp Directly
          </a>
        </div>
      `;
    } else {
      container.innerHTML = list.map(p => renderProductCard(p)).join('');
    }
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      filterAndRender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      filterAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      filterAndRender();
    });
  }

  filterAndRender();
}

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalOverlay = document.getElementById('quick-view-modal');
  const modalContent = document.getElementById('quick-view-content');
  if (!modalOverlay || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-wrap">
        <img src="${product.image}" alt="${product.name}" />
      </div>

      <div>
        <span class="product-badge ${product.badgeClass}" style="display: inline-block; margin-bottom: 8px;">${product.badge}</span>
        <div style="font-size: 0.8rem; font-weight: 700; color: #0056B3; text-transform: uppercase;">${product.brand}</div>
        <h2 style="font-size: 1.35rem; color: #0A2540; margin-bottom: 12px; line-height: 1.3;">${product.name}</h2>

        <div class="product-price-row" style="margin-bottom: 14px;">
          <span class="price-current" style="font-size: 1.5rem;">${formatINR(product.price)}</span>
          <span class="price-mrp" style="font-size: 1rem;">${formatINR(product.mrp)}</span>
          <span class="price-discount">${product.discount}</span>
        </div>

        <div style="background: #FFFBEB; border: 1px solid #FDE68A; padding: 10px 14px; border-radius: 8px; margin-bottom: 14px; font-size: 0.85rem; color: #92400E;">
          💳 <strong>Easy EMI:</strong> ${product.emi} at our Chakia / Sahebganj counter.
        </div>

        <p style="font-size: 0.88rem; color: #475569; line-height: 1.5; margin-bottom: 14px;">
          ${product.desc}
        </p>

        <h4 style="font-size: 0.9rem; color: #0A2540; margin-bottom: 6px;">Key Features & Specifications:</h4>
        <ul class="product-specs-list" style="margin-bottom: 20px;">
          ${product.specs.map(s => `<li>${s}</li>`).join('')}
          <li>100% Genuine with GST Bill & Brand Warranty</li>
          <li>In-Store Pickup or Fast Local Delivery available</li>
        </ul>

        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="${getWhatsAppLink(product.name, product.price)}" target="_blank" class="btn-whatsapp-enquire" style="padding: 12px 20px; font-size: 0.95rem; flex: 1;">
            <span>💬 Enquire on WhatsApp</span>
          </a>
          <a href="tel:${STORE_CONFIG.phoneClean}" class="btn-quick-call" style="padding: 12px 20px; font-size: 0.95rem;">
            <span>📞 Call Store</span>
          </a>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
}

function closeProductModal() {
  const modalOverlay = document.getElementById('quick-view-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
  }
}

function initHeaderSearch() {
  const searchInput = document.getElementById('global-search-input');
  const searchBtn = document.getElementById('global-search-btn');

  function doSearch() {
    if (!searchInput) return;
    const query = searchInput.value.trim();
    if (query) {
      window.location.href = `shop.html?q=${encodeURIComponent(query)}`;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') doSearch();
    });
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', doSearch);
  }
}

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-links-menu');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initFeaturedProducts();
  initShopPage();
  initHeaderSearch();
  initFAQ();
  initMobileMenu();

  const modalOverlay = document.getElementById('quick-view-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProductModal();
    });
  }
});
