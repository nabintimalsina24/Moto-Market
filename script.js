/* ===================================================================
   DATA
=================================================================== */
const BIKES = [
  {id:1, title:"Trek Marlin 7", category:"Mountain", price:780, specs:"21-speed · Frame M · Disc brakes", img:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=80"},
  {id:2, title:"Cannondale CAAD13", category:"Road", price:1450, specs:"Carbon fork · 105 groupset · Size 54", img:"https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=700&q=80"},
  {id:3, title:"RadPower RadCity", category:"Electric", price:1399, specs:"500W motor · 45mi range · Step-thru", img:"https://images.unsplash.com/photo-1622185135505-2d795003994a?w=700&q=80"},
  {id:4, title:"Schwinn Cruiser Classic", category:"Vintage", price:320, specs:"Single speed · Steel frame · Restored", img:"https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=700&q=80"},
  {id:5, title:"Giant Talon 29", category:"Mountain", price:690, specs:"29in wheels · Hydraulic brakes", img:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=700&q=80"},
  {id:6, title:"Specialized Allez", category:"Road", price:980, specs:"Aluminum frame · Shimano Claris", img:"https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=700&q=80"},
  {id:7, title:"Rad Mini Step-Thru", category:"Electric", price:1199, specs:"Foldable · 350W motor", img:"https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=700&q=80"},
  {id:8, title:"Raleigh Retro Roadster", category:"Vintage", price:410, specs:"3-speed hub · Leather seat", img:"https://images.unsplash.com/photo-1573599852326-eaf4f9c5e337?w=700&q=80"},
  {id:9, title:"Woom Kids Bike 14", category:"Kids", price:220, specs:"Ages 3-5 · Lightweight frame", img:"https://images.unsplash.com/photo-1605559911160-a3d95d213904?w=700&q=80"},
  {id:10, title:"Trek Domane SL5", category:"Road", price:1890, specs:"Endurance geometry · Carbon", img:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=80"},
  {id:11, title:"Diamondback Atroz", category:"Mountain", price:560, specs:"Full suspension · 27.5in", img:"https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=700&q=80"},
  {id:12, title:"Vintage Peugeot Road", category:"Vintage", price:275, specs:"Original 1978 frame · Restored gears", img:"https://images.unsplash.com/photo-1517649763962-0c623066013b?w=700&q=80"},

  // Motorcycle brands
  {id:13, title:"Yamaha R15 V4", category:"Yamaha", price:4200, specs:"155cc · Liquid-cooled · 6-speed", img:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=700&q=80"},
  {id:14, title:"Yamaha MT-15", category:"Yamaha", price:3950, specs:"Naked street · 155cc · LED lighting", img:"https://images.unsplash.com/photo-1622185135505-2d795003994a?w=700&q=80"},
  {id:15, title:"KTM Duke 390", category:"KTM", price:5800, specs:"373cc single · TFT display · ABS", img:"https://images.unsplash.com/photo-1591637333472-4ef696c5a72d?w=700&q=80"},
  {id:16, title:"KTM RC 390", category:"KTM", price:6100, specs:"Track-focused fairing · Slipper clutch", img:"https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=700&q=80"},
  {id:17, title:"Honda CB350RS", category:"Honda", price:4500, specs:"348cc retro roadster · Disc brakes", img:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=700&q=80"},
  {id:18, title:"Honda CBR650R", category:"Honda", price:9200, specs:"649cc inline-4 · Sport fairing", img:"https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=700&q=80"},
  {id:19, title:"Bajaj Pulsar NS200", category:"Bajaj", price:2600, specs:"199cc · Perimeter frame · Sporty", img:"https://images.unsplash.com/photo-1580310614697-da7a6e0c34ed?w=700&q=80"},
  {id:20, title:"Bajaj Dominar 400", category:"Bajaj", price:3800, specs:"373cc tourer · Twin-channel ABS", img:"https://images.unsplash.com/photo-1622185204369-9d0cd6f6f5a8?w=700&q=80"},
  {id:21, title:"Royal Enfield Classic 350", category:"Royal Enfield", price:4300, specs:"349cc thump · Retro chrome styling", img:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=700&q=80"},
  {id:22, title:"Royal Enfield Himalayan", category:"Royal Enfield", price:5200, specs:"411cc adventure tourer · Long travel suspension", img:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=700&q=80"},
  {id:23, title:"Triumph Speed 400", category:"Triumph", price:5400, specs:"398cc single · Premium retro build", img:"https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=700&q=80"},
  {id:24, title:"Triumph Street Triple", category:"Triumph", price:11500, specs:"765cc triple · Naked street performance", img:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=700&q=80"},
  {id:25, title:"Benelli Leoncino 500", category:"Benelli", price:6700, specs:"500cc parallel-twin · Scrambler styling", img:"https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=700&q=80"},
  {id:26, title:"Benelli TRK 502X", category:"Benelli", price:7300, specs:"Adventure tourer · Spoked wheels", img:"https://images.unsplash.com/photo-1591637333472-4ef696c5a72d?w=700&q=80"},
  {id:27, title:"Ducati Monster 821", category:"Ducati", price:13800, specs:"L-twin engine · Italian naked icon", img:"https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=700&q=80"},
  {id:28, title:"Ducati Panigale V2", category:"Ducati", price:18900, specs:"955cc superbike · Full race fairing", img:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=700&q=80"},
  {id:29, title:"Moto Guzzi V7 Stone", category:"Italian Bike", price:9600, specs:"850cc transverse V-twin · Classic Italian heritage", img:"https://images.unsplash.com/photo-1580310614697-da7a6e0c34ed?w=700&q=80"},
  {id:30, title:"Aprilia RS 457", category:"Italian Bike", price:8200, specs:"457cc parallel-twin · Sport fairing", img:"https://images.unsplash.com/photo-1622185204369-9d0cd6f6f5a8?w=700&q=80"},
];

const STORAGE_KEYS = { users:"ih_users", session:"ih_session", listings:"ih_listings", orders:"ih_orders", cart:"ih_cart" };

/* ===================================================================
   STORAGE HELPERS (simulated backend using localStorage)
=================================================================== */
function loadJSON(key, fallback){ try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }catch(e){ return fallback; } }
function saveJSON(key, val){ localStorage.setItem(key, JSON.stringify(val)); }

let users = loadJSON(STORAGE_KEYS.users, []);
let listings = loadJSON(STORAGE_KEYS.listings, []);   // user-submitted bikes
let orders = loadJSON(STORAGE_KEYS.orders, []);
let cart = loadJSON(STORAGE_KEYS.cart, []);           // [{id, qty}]
let currentUser = loadJSON(STORAGE_KEYS.session, null);

function persistAll(){
  saveJSON(STORAGE_KEYS.users, users);
  saveJSON(STORAGE_KEYS.listings, listings);
  saveJSON(STORAGE_KEYS.orders, orders);
  saveJSON(STORAGE_KEYS.cart, cart);
}

function allBikes(){ return [...BIKES, ...listings]; }
function findBike(id){ return allBikes().find(b => b.id === id); }

/* ===================================================================
   VIEW ROUTING
=================================================================== */
function goTo(viewName){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + viewName).classList.add('active');
  document.querySelectorAll('nav.links a').forEach(a => a.classList.toggle('active', a.dataset.view === viewName));
  window.scrollTo({top:0, behavior:'smooth'});

  if(viewName === 'shop') renderShop();
  if(viewName === 'dashboard') renderDashboard();
  if(viewName === 'checkout') renderCheckout();
}

/* ===================================================================
   AUTH
=================================================================== */
function renderAuthArea(){
  const el = document.getElementById('authArea');
  if(currentUser){
    el.innerHTML = `<button class="icon-btn" onclick="goTo('dashboard')">👤 ${escapeHTML(currentUser.name.split(' ')[0])}</button>
                     <button class="btn-ghost" onclick="logout()" style="margin-left:10px;">Log Out</button>`;
  } else {
    el.innerHTML = `<button class="btn-ghost" onclick="goTo('login')">Log In</button>
                     <button class="btn-primary" onclick="goTo('signup')" style="margin-left:10px;">Sign Up</button>`;
  }
}

function showMsg(elId, text, type){
  const el = document.getElementById(elId);
  el.textContent = text;
  el.className = 'form-msg ' + type;
  el.style.display = 'block';
}

document.getElementById('signupForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const password = document.getElementById('signupPassword').value;

  if(users.some(u => u.email === email)){
    showMsg('signupMsg', 'An account with this email already exists.', 'error');
    return;
  }
  const newUser = {id: 'u' + Date.now(), name, email, password};
  users.push(newUser);
  persistAll();
  showMsg('signupMsg', 'Account created! Logging you in...', 'success');
  setTimeout(()=>{
    currentUser = {id:newUser.id, name:newUser.name, email:newUser.email};
    saveJSON(STORAGE_KEYS.session, currentUser);
    renderAuthArea();
    goTo('dashboard');
  }, 600);
});

document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const user = users.find(u => u.email === email && u.password === password);
  if(!user){
    showMsg('loginMsg', 'Incorrect email or password.', 'error');
    return;
  }
  currentUser = {id:user.id, name:user.name, email:user.email};
  saveJSON(STORAGE_KEYS.session, currentUser);
  renderAuthArea();
  showMsg('loginMsg', 'Welcome back, ' + user.name + '!', 'success');
  setTimeout(()=> goTo('dashboard'), 400);
});

function logout(){
  currentUser = null;
  localStorage.removeItem(STORAGE_KEYS.session);
  renderAuthArea();
  goTo('home');
  showToast('You have been logged out.');
}

function requireLogin(viewAfter){
  if(!currentUser){
    showToast('Please log in to continue.');
    goTo('login');
    return false;
  }
  return true;
}

/* ===================================================================
   RENDER PRODUCTS
=================================================================== */
function bikeCardHTML(b){
  return `
  <div class="card">
    <div class="card-photo">
      <span class="card-badge">${escapeHTML(b.category)}</span>
      <img src="${escapeAttr(b.img)}" alt="${escapeAttr(b.title)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=80'">
    </div>
    <div class="card-body">
      <div class="card-cat">${escapeHTML(b.category)}</div>
      <div class="card-title">${escapeHTML(b.title)}</div>
      <div class="card-spec">${escapeHTML(b.specs||'')}</div>
      <div class="card-foot">
        <div class="card-price"><span class="cur">$</span>${b.price}</div>
        <button class="add-btn" onclick="addToCart(${b.id})">Add to Cart</button>
      </div>
    </div>
  </div>`;
}

function renderFeatured(){
  const featured = allBikes().slice(0,6);
  document.getElementById('featuredGrid').innerHTML = featured.map(bikeCardHTML).join('');
}

let activeFilter = 'All';
function renderShop(){
  const cats = ['All', ...new Set(allBikes().map(b=>b.category))];
  document.getElementById('filterBar').innerHTML = cats.map(c =>
    `<button class="chip ${c===activeFilter?'active':''}" onclick="setFilter('${c}')">${c}</button>`
  ).join('');
  const list = activeFilter==='All' ? allBikes() : allBikes().filter(b=>b.category===activeFilter);
  document.getElementById('shopGrid').innerHTML = list.length ? list.map(bikeCardHTML).join('') : `<div class="empty-state"><div class="big">∅</div>No bikes in this category yet.</div>`;
}
function setFilter(cat){ activeFilter = cat; renderShop(); }

/* ===================================================================
   SELL / LISTING FORM
=================================================================== */
function previewListingImage(){
  const url = document.getElementById('sellImage').value.trim();
  const box = document.getElementById('listingPreview');
  if(url){
    box.innerHTML = `<img src="${escapeAttr(url)}" onerror="this.parentElement.innerHTML='⚠ Could not load image — check the link';">`;
  } else {
    box.innerHTML = 'Photo preview will appear here';
  }
}

document.getElementById('sellForm').addEventListener('submit', function(e){
  e.preventDefault();
  if(!requireLogin()) return;
  const title = document.getElementById('sellTitle').value.trim();
  const category = document.getElementById('sellCategory').value;
  const price = parseFloat(document.getElementById('sellPrice').value);
  const specs = document.getElementById('sellSpecs').value.trim();
  const img = document.getElementById('sellImage').value.trim();

  const listing = { id: Date.now(), title, category, price, specs, img, sellerId: currentUser.id, sellerName: currentUser.name };
  listings.push(listing);
  persistAll();
  showMsg('sellMsg', 'Listing published! It now appears in the shop.', 'success');
  this.reset();
  document.getElementById('listingPreview').innerHTML = 'Photo preview will appear here';
  setTimeout(()=> goTo('shop'), 700);
});

/* ===================================================================
   CART
=================================================================== */
function addToCart(id){
  const existing = cart.find(c => c.id === id);
  if(existing) existing.qty += 1;
  else cart.push({id, qty:1});
  persistAll();
  updateCartCount();
  showToast('Added to cart 🚲');
}
function removeFromCart(id){
  cart = cart.filter(c => c.id !== id);
  persistAll();
  renderDrawer();
  updateCartCount();
}
function changeQty(id, delta){
  const item = cart.find(c => c.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) return removeFromCart(id);
  persistAll();
  renderDrawer();
  updateCartCount();
}
function cartTotal(){
  return cart.reduce((sum, c) => { const b = findBike(c.id); return sum + (b? b.price*c.qty : 0); }, 0);
}
function updateCartCount(){
  document.getElementById('cartCount').textContent = cart.reduce((n,c)=>n+c.qty,0);
}
function openCart(){
  renderDrawer();
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
}
function renderDrawer(){
  const body = document.getElementById('drawerBody');
  if(cart.length === 0){
    body.innerHTML = `<div class="empty-state"><div class="big">🛒</div>Your cart is empty.</div>`;
  } else {
    body.innerHTML = cart.map(c => {
      const b = findBike(c.id);
      if(!b) return '';
      return `
      <div class="cart-item">
        <img src="${escapeAttr(b.img)}" alt="${escapeAttr(b.title)}">
        <div class="cart-item-info">
          <div class="name">${escapeHTML(b.title)}</div>
          <div class="price">$${b.price}</div>
          <div class="qty-control">
            <button onclick="changeQty(${b.id},-1)">−</button>
            <span>${c.qty}</span>
            <button onclick="changeQty(${b.id},1)">+</button>
          </div>
          <a class="remove-link" onclick="removeFromCart(${b.id})">Remove</a>
        </div>
      </div>`;
    }).join('');
  }
  document.getElementById('drawerTotal').textContent = '$' + cartTotal();
}
function goToCheckout(){
  if(cart.length === 0){ showToast('Your cart is empty.'); return; }
  closeCart();
  if(!requireLogin()) return;
  goTo('checkout');
}

/* ===================================================================
   CHECKOUT / PAYMENT
=================================================================== */
let payMethod = 'card';
function setPayMethod(m){
  payMethod = m;
  document.querySelectorAll('.pay-method').forEach(b => b.classList.toggle('active', b.dataset.method===m));
  document.getElementById('payCardFields').style.display = m==='card' ? 'block':'none';
  document.getElementById('payUpiFields').style.display = m==='upi' ? 'block':'none';
  document.getElementById('payCodNote').style.display = m==='cod' ? 'block':'none';
}
function formatCardNumber(input){
  let v = input.value.replace(/\D/g,'').slice(0,16);
  let formatted = v.replace(/(.{4})/g,'$1 ').trim();
  input.value = formatted;
  document.getElementById('cardArtNum').textContent = formatted ? formatted.padEnd(19,'•') : '•••• •••• •••• ••••';
}
document.getElementById('cardName')?.addEventListener('input', function(){
  document.getElementById('cardArtName').textContent = this.value.toUpperCase() || 'CARD HOLDER';
});
document.getElementById('cardExpiry')?.addEventListener('input', function(){
  let v = this.value.replace(/\D/g,'').slice(0,4);
  if(v.length>=3) v = v.slice(0,2)+'/'+v.slice(2);
  this.value = v;
  document.getElementById('cardArtExp').textContent = v || 'MM/YY';
});

function renderCheckout(){
  const itemsEl = document.getElementById('checkoutItems');
  itemsEl.innerHTML = cart.map(c => {
    const b = findBike(c.id);
    if(!b) return '';
    return `<div class="summary-line"><span>${escapeHTML(b.title)} × ${c.qty}</span><span>$${b.price*c.qty}</span></div>`;
  }).join('');
  const subtotal = cartTotal();
  const shipping = cart.length ? 25 : 0;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;
  document.getElementById('sumSubtotal').textContent = '$'+subtotal;
  document.getElementById('sumShipping').textContent = '$'+shipping;
  document.getElementById('sumTax').textContent = '$'+tax;
  document.getElementById('sumTotal').textContent = '$'+total;
  if(currentUser){
    document.getElementById('shipName').value = currentUser.name;
  }
}

function placeOrder(){
  if(cart.length === 0){ showToast('Your cart is empty.'); return; }
  const name = document.getElementById('shipName').value.trim();
  const phone = document.getElementById('shipPhone').value.trim();
  const address = document.getElementById('shipAddress').value.trim();
  const city = document.getElementById('shipCity').value.trim();
  const zip = document.getElementById('shipZip').value.trim();

  if(!name || !phone || !address || !city || !zip){
    showMsg('checkoutMsg', 'Please fill in all shipping fields.', 'error');
    return;
  }
  if(payMethod === 'card'){
    const num = document.getElementById('cardNumber').value.replace(/\s/g,'');
    const exp = document.getElementById('cardExpiry').value;
    const cvv = document.getElementById('cardCvv').value;
    if(num.length < 16 || exp.length < 5 || cvv.length < 3){
      showMsg('checkoutMsg', 'Please enter valid card details.', 'error');
      return;
    }
  }
  if(payMethod === 'upi'){
    const upi = document.getElementById('upiId').value.trim();
    if(!upi.includes('@')){
      showMsg('checkoutMsg', 'Please enter a valid UPI ID.', 'error');
      return;
    }
  }

  // simulate payment processing
  showMsg('checkoutMsg', 'Processing payment...', 'success');
  setTimeout(()=>{
    const subtotal = cartTotal();
    const order = {
      id: 'ORD' + Date.now(),
      userId: currentUser.id,
      items: cart.map(c => { const b = findBike(c.id); return {id:c.id, title:b.title, img:b.img, price:b.price, qty:c.qty}; }),
      total: subtotal + 25 + Math.round(subtotal*0.08),
      method: payMethod,
      shipping: {name, phone, address, city, zip},
      status: 'Confirmed',
      date: new Date().toISOString()
    };
    orders.push(order);
    cart = [];
    persistAll();
    updateCartCount();
    document.getElementById('successText').textContent = `Order ${order.id} confirmed. Total paid: $${order.total} via ${payMethod.toUpperCase()}.`;
    goTo('success');
  }, 900);
}

/* ===================================================================
   DASHBOARD
=================================================================== */
let dashPanel = 'overview';
function setDashPanel(p){
  dashPanel = p;
  document.querySelectorAll('.dash-nav button').forEach(b => b.classList.toggle('active', b.dataset.panel===p));
  renderDashBody();
}
function renderDashboard(){
  if(!requireLogin()) return;
  document.getElementById('dashAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
  document.getElementById('dashName').textContent = currentUser.name;
  document.getElementById('dashEmail').textContent = currentUser.email;
  renderDashBody();
}
function myOrders(){ return orders.filter(o => o.userId === currentUser.id).sort((a,b)=> new Date(b.date)-new Date(a.date)); }
function myListings(){ return listings.filter(l => l.sellerId === currentUser.id); }

function renderDashBody(){
  const panel = document.getElementById('dashPanel');
  if(dashPanel === 'overview'){
    const mo = myOrders(); const ml = myListings();
    panel.innerHTML = `
      <h3>Overview</h3>
      <div class="kpi-row">
        <div class="kpi"><div class="num">${mo.length}</div><div class="lbl">Orders Placed</div></div>
        <div class="kpi"><div class="num">${ml.length}</div><div class="lbl">Bikes Listed</div></div>
        <div class="kpi"><div class="num">$${mo.reduce((s,o)=>s+o.total,0)}</div><div class="lbl">Total Spent</div></div>
      </div>
      <h3 style="font-size:16px;">Recent Activity</h3>
      ${mo.slice(0,3).map(orderRowHTML).join('') || '<div class="empty-state">No orders yet — go grab a bike!</div>'}
    `;
  } else if(dashPanel === 'orders'){
    const mo = myOrders();
    panel.innerHTML = `<h3>My Orders</h3>` + (mo.length ? mo.map(orderRowHTML).join('') : `<div class="empty-state"><div class="big">📦</div>No orders yet.</div>`);
  } else if(dashPanel === 'listings'){
    const ml = myListings();
    panel.innerHTML = `<h3>My Listings</h3>` + (ml.length ? ml.map(l => `
      <div class="order-row">
        <div class="order-thumb"><img src="${escapeAttr(l.img)}" onerror="this.src='https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=80'"></div>
        <div class="order-info"><div class="name">${escapeHTML(l.title)}</div><div class="meta">${escapeHTML(l.category)} · $${l.price}</div></div>
        <button class="btn-ghost" onclick="deleteListing(${l.id})">Remove</button>
      </div>
    `).join('') : `<div class="empty-state"><div class="big">🚲</div>You haven't listed any bikes yet.<br><br><button class="btn-primary" onclick="goTo('sell')">List a Bike</button></div>`);
  } else if(dashPanel === 'profile'){
    panel.innerHTML = `
      <h3>Profile</h3>
      <div class="field"><label>Name</label><input type="text" value="${escapeAttr(currentUser.name)}" disabled></div>
      <div class="field"><label>Email</label><input type="text" value="${escapeAttr(currentUser.email)}" disabled></div>
      <p class="center-note" style="text-align:left;">This is a front-end demo account stored in your browser only.</p>
    `;
  }
}
function orderRowHTML(o){
  const first = o.items[0];
  return `
  <div class="order-row">
    <div class="order-thumb"><img src="${escapeAttr(first.img)}" onerror="this.src='https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=80'"></div>
    <div class="order-info">
      <div class="name">${escapeHTML(first.title)}${o.items.length>1 ? ' + '+(o.items.length-1)+' more' : ''}</div>
      <div class="meta">${o.id} · ${new Date(o.date).toLocaleDateString()} · $${o.total}</div>
    </div>
    <span class="status-pill confirmed">${o.status}</span>
  </div>`;
}
function deleteListing(id){
  listings = listings.filter(l => l.id !== id);
  persistAll();
  renderDashBody();
  showToast('Listing removed.');
}

/* ===================================================================
   UTIL
=================================================================== */
function escapeHTML(str){ return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function escapeAttr(str){ return escapeHTML(str); }

let toastTimer;
function showToast(msg){
  clearTimeout(toastTimer);
  let t = document.getElementById('toastEl');
  if(t) t.remove();
  t = document.createElement('div');
  t.id = 'toastEl';
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  toastTimer = setTimeout(()=> t.remove(), 2400);
}

/* ===================================================================
   INIT
=================================================================== */
renderAuthArea();
renderFeatured();
updateCartCount();
goTo('home');
