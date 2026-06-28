// ===== DATA =====
const businesses = [
  {id:0,name:"Ramesh General Store",owner:"Ramesh Kumar",category:"Grocery Stores",area:"Saddar Bazar",address:"Shop No. 12, Saddar Bazar, Near Old Clock Tower, Siwan, Bihar 841226",phone:"+91 98765 43210",whatsapp:"919876543210",rating:4.7,reviews:32,icon:"🛒",featured:true,verified:true,tags:["Rice","Wheat","Sugar","Pulses","Masala"],desc:"Your trusted neighborhood grocery store offering fresh, quality products at affordable prices. Serving Siwan since 2005 with home delivery available.",hours:{Mon:"7:00 AM – 10:00 PM",Tue:"7:00 AM – 10:00 PM",Wed:"7:00 AM – 10:00 PM",Thu:"7:00 AM – 10:00 PM",Fri:"7:00 AM – 10:00 PM",Sat:"7:00 AM – 10:00 PM",Sun:"8:00 AM – 8:00 PM"},photos:["🛒","🍚","🌾","🫙"],reviewList:[{name:"Ajay Kumar",rating:5,text:"Excellent shop! Great quality at reasonable prices.",date:"2 days ago"},{name:"Sunita Devi",rating:4,text:"Good selection of products. Home delivery is a bonus.",date:"1 week ago"}]},
  {id:1,name:"Ramesh Mobile Zone",owner:"Ramesh Kumar",category:"Mobile Shops",area:"Station Road",address:"Near Railway Station, Station Road, Siwan, Bihar 841226",phone:"+91 98765 43211",whatsapp:"919876543211",rating:4.5,reviews:18,icon:"📱",featured:true,verified:true,tags:["Samsung","Redmi","Screen Repair","Accessories"],desc:"Authorized dealer and repair center for all major mobile brands. Quick service, genuine parts, best prices in Siwan.",hours:{Mon:"9:00 AM – 8:00 PM",Tue:"9:00 AM – 8:00 PM",Wed:"9:00 AM – 8:00 PM",Thu:"9:00 AM – 8:00 PM",Fri:"9:00 AM – 8:00 PM",Sat:"9:00 AM – 8:00 PM",Sun:"Closed"},photos:["📱","💻","🔧","📲"],reviewList:[{name:"Rohit Singh",rating:5,text:"Great service! Screen replaced in 2 hours.",date:"3 days ago"},{name:"Priya",rating:4,text:"Good mobile shop with fair prices.",date:"2 weeks ago"}]},
  {id:2,name:"Siwan Sweet House",owner:"Mohan Lal",category:"Restaurants",area:"Gandhi Chowk",address:"Gandhi Chowk, Main Road, Siwan, Bihar 841226",phone:"+91 91234 56789",whatsapp:"919123456789",rating:4.8,reviews:94,icon:"🍛",featured:true,verified:false,tags:["Sweets","Namkeen","Thali","Mithai"],desc:"Famous for authentic Bihar sweets and snacks. Our gulab jamun and laddoos are the best in town! Fresh made every day.",hours:{Mon:"6:00 AM – 10:00 PM",Tue:"6:00 AM – 10:00 PM",Wed:"6:00 AM – 10:00 PM",Thu:"6:00 AM – 10:00 PM",Fri:"6:00 AM – 10:00 PM",Sat:"6:00 AM – 11:00 PM",Sun:"6:00 AM – 11:00 PM"},photos:["🍛","🍮","🍩","🧆"],reviewList:[{name:"Vivek Sharma",rating:5,text:"Best sweets in Siwan! My family loves their laddoos.",date:"1 day ago"},{name:"Kavita",rating:5,text:"Amazing quality and taste. Very hygienic.",date:"4 days ago"}]},
  {id:3,name:"Dr. Sharma Clinic",owner:"Dr. R.K. Sharma",category:"Hospitals & Clinics",area:"Raghunathpur",address:"Near Primary School, Raghunathpur, Siwan, Bihar 841226",phone:"+91 94567 89012",whatsapp:"919456789012",rating:4.6,reviews:56,icon:"🏥",featured:false,verified:true,tags:["General Medicine","Child Specialist","OPD"],desc:"Experienced family physician with 20+ years of practice. Affordable consultations, home visits available on request.",hours:{Mon:"8:00 AM – 2:00 PM",Tue:"8:00 AM – 2:00 PM",Wed:"Closed",Thu:"8:00 AM – 2:00 PM",Fri:"8:00 AM – 2:00 PM",Sat:"8:00 AM – 4:00 PM",Sun:"Emergency Only"},photos:["🏥","💊","🩺","🧪"],reviewList:[{name:"Ram Prasad",rating:5,text:"Very experienced doctor. My family has been visiting for 10 years.",date:"1 week ago"}]},
  {id:4,name:"Bright Future Coaching",owner:"Suresh Mishra",category:"Schools & Coaching",area:"Husainganj",address:"Plot 45, Near Post Office, Husainganj, Siwan, Bihar 841226",phone:"+91 87654 32109",whatsapp:"918765432109",rating:4.3,reviews:41,icon:"🎓",featured:false,verified:true,tags:["Mathematics","Science","SSC","BPSC Prep"],desc:"Best coaching center for Class 9-12 and competitive exams. Experienced faculty, small batches, proven results. 95% selection rate.",hours:{Mon:"7:00 AM – 1:00 PM",Tue:"7:00 AM – 1:00 PM",Wed:"7:00 AM – 1:00 PM",Thu:"7:00 AM – 1:00 PM",Fri:"7:00 AM – 1:00 PM",Sat:"7:00 AM – 3:00 PM",Sun:"Closed"},photos:["🎓","📚","✏️","📐"],reviewList:[{name:"Ananya Kumar",rating:5,text:"Excellent coaching! My son cleared BPSC after joining.",date:"3 days ago"}]},
  {id:5,name:"Singh Electronics",owner:"Vikram Singh",category:"Electronics",area:"Station Road",address:"Shop 7, Electronics Market, Station Road, Siwan",phone:"+91 76543 21098",whatsapp:"917654321098",rating:4.2,reviews:27,icon:"💡",featured:false,verified:false,tags:["LED TV","AC","Fridge","Washing Machine"],desc:"Authorized dealer for all major electronic brands. Easy EMI options available. Expert installation and after-sales service.",hours:{Mon:"9:30 AM – 8:30 PM",Tue:"9:30 AM – 8:30 PM",Wed:"9:30 AM – 8:30 PM",Thu:"9:30 AM – 8:30 PM",Fri:"9:30 AM – 8:30 PM",Sat:"9:30 AM – 9:00 PM",Sun:"11:00 AM – 6:00 PM"},photos:["💡","📺","🧊","❄️"],reviewList:[{name:"Mohan Yadav",rating:4,text:"Good shop. Got a good deal on LED TV with installation.",date:"5 days ago"}]},
  {id:6,name:"Kiran Fashion Store",owner:"Kiran Gupta",category:"Clothing Stores",area:"Mirganj",address:"Mirganj Market, Opp. Bank, Siwan, Bihar",phone:"+91 65432 10987",whatsapp:"916543210987",rating:4.4,reviews:38,icon:"👗",featured:true,verified:true,tags:["Sarees","Suits","Kids Wear","Ready Made"],desc:"Latest fashion trends for the whole family. Wide collection of sarees, suits, and children's wear. Special discounts on festivals.",hours:{Mon:"10:00 AM – 9:00 PM",Tue:"10:00 AM – 9:00 PM",Wed:"10:00 AM – 9:00 PM",Thu:"10:00 AM – 9:00 PM",Fri:"10:00 AM – 9:00 PM",Sat:"10:00 AM – 9:30 PM",Sun:"11:00 AM – 7:00 PM"},photos:["👗","🥻","👚","👶"],reviewList:[{name:"Rekha Devi",rating:5,text:"Beautiful collection! Best sarees in Siwan at great prices.",date:"2 days ago"}]},
  {id:7,name:"Yadav Real Estate",owner:"Sanjay Yadav",category:"Real Estate",area:"Saddar Bazar",address:"Office 3, Near District Court, Saddar Bazar, Siwan",phone:"+91 54321 09876",whatsapp:"915432109876",rating:4.0,reviews:15,icon:"🏠",featured:false,verified:true,tags:["Plots","Flats","Commercial","Rental"],desc:"Trusted real estate consultants in Siwan. Buy, sell, or rent plots, flats, and commercial properties. 15+ years experience.",hours:{Mon:"9:00 AM – 6:00 PM",Tue:"9:00 AM – 6:00 PM",Wed:"9:00 AM – 6:00 PM",Thu:"9:00 AM – 6:00 PM",Fri:"9:00 AM – 6:00 PM",Sat:"9:00 AM – 4:00 PM",Sun:"Closed"},photos:["🏠","🏢","🏗️","🔑"],reviewList:[{name:"Dinesh Kumar",rating:4,text:"Helpful team. Found us a good plot within our budget.",date:"2 weeks ago"}]},
  {id:8,name:"Sharma Repair Works",owner:"Raju Sharma",category:"Repair Services",area:"Husainganj",address:"Workshop Lane, Husainganj, Siwan, Bihar",phone:"+91 43210 98765",whatsapp:"914321098765",rating:4.5,reviews:62,icon:"🔧",featured:false,verified:false,tags:["AC Repair","Fridge Repair","Washing Machine","Geyser"],desc:"Expert appliance repair at your doorstep. Same-day service available for urgent repairs. All brands, genuine spare parts.",hours:{Mon:"8:00 AM – 8:00 PM",Tue:"8:00 AM – 8:00 PM",Wed:"8:00 AM – 8:00 PM",Thu:"8:00 AM – 8:00 PM",Fri:"8:00 AM – 8:00 PM",Sat:"8:00 AM – 8:00 PM",Sun:"Emergency Only"},photos:["🔧","🔨","⚙️","🛠️"],reviewList:[{name:"Pallavi Singh",rating:5,text:"Fixed my AC in 1 hour! Very professional and affordable.",date:"1 week ago"}]}
];

let currentBiz = null;
let currentPage = 'home';
let favorites = [];

// ===== PAGE ROUTING =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-'+page);
  if(navEl) navEl.classList.add('active');
  currentPage = page;
  window.scrollTo(0,0);
  if(page==='listing') renderListing();
  if(page==='admin') renderAdminOverview();
}

function viewBusiness(id) {
  currentBiz = businesses[id];
  renderDetail(currentBiz);
  showPage('detail');
}

// ===== RENDER CARDS =====
function bizCard(biz, compact) {
  const stars = '★'.repeat(Math.floor(biz.rating)) + (biz.rating%1>=0.5?'½':'');
  return `<div class="biz-card" onclick="viewBusiness(${biz.id})">
    <div class="biz-card-img" style="font-size:52px">${biz.icon}
      ${biz.featured?'<span class="biz-badge">⭐ Featured</span>':''}
      ${biz.verified?'<span class="biz-badge verified" style="left:auto;right:12px">✓ Verified</span>':''}
    </div>
    <div class="biz-body">
      <div class="biz-category">${biz.category}</div>
      <div class="biz-name">${biz.name}</div>
      <div class="biz-area">📍 ${biz.area}, Siwan</div>
      <div class="biz-rating">
        <span class="stars">${'★'.repeat(Math.floor(biz.rating))}${'☆'.repeat(5-Math.floor(biz.rating))}</span>
        <span class="rating-num">${biz.rating}</span>
        <span class="rating-count">(${biz.reviews} reviews)</span>
      </div>
      <div class="biz-tags">${biz.tags.slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="biz-actions" onclick="event.stopPropagation()">
        <button class="btn-sm btn-call" onclick="callBusiness('${biz.phone}')">📞 Call</button>
        <button class="btn-sm btn-wa" onclick="whatsappBusiness('${biz.whatsapp}','${biz.name}')">💬 WhatsApp</button>
        <button class="btn-sm btn-view" onclick="viewBusiness(${biz.id})">View →</button>
      </div>
    </div>
  </div>`;
}

function renderFeatured() {
  const fr = document.getElementById('featuredRow');
  if(!fr) return;
  fr.innerHTML = businesses.filter(b=>b.featured).map(b=>bizCard(b)).join('');
}

function renderLatest() {
  const lg = document.getElementById('latestGrid');
  if(!lg) return;
  lg.innerHTML = businesses.slice(0,6).map(b=>bizCard(b)).join('');
}

function renderListing() {
  const name = (document.getElementById('searchName')||{value:''}).value.toLowerCase();
  const cat = (document.getElementById('searchCat')||{value:''}).value;
  const area = (document.getElementById('searchArea')||{value:''}).value;
  const rating = parseFloat((document.getElementById('searchRating')||{value:''}).value)||0;
  const filtered = businesses.filter(b=>{
    return (!name||b.name.toLowerCase().includes(name)||b.tags.some(t=>t.toLowerCase().includes(name)))
      && (!cat||b.category===cat)
      && (!area||b.area===area)
      && (!rating||b.rating>=rating);
  });
  const grid = document.getElementById('listingGrid');
  const noR = document.getElementById('noResults');
  if(!grid) return;
  grid.innerHTML = filtered.map(b=>bizCard(b)).join('');
  const cnt = document.getElementById('listingCount');
  if(cnt) cnt.textContent = `Showing ${filtered.length} business${filtered.length!==1?'es':''}`;
  if(noR) noR.classList.toggle('hidden', filtered.length>0);
}

// ===== DETAIL =====
function renderDetail(biz) {
  const days = Object.keys(biz.hours);
  const today = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][new Date().getDay()];
  const reviewBars = [5,4,3,2,1].map(n=>{
    const cnt = biz.reviewList.filter(r=>r.rating===n).length;
    const pct = biz.reviewList.length ? Math.round(cnt/biz.reviewList.length*100) : 0;
    return `<div class="rating-bar-row"><span style="width:14px">${n}</span><span>★</span><div class="rating-bar"><div class="rating-bar-fill" style="width:${pct}%"></div></div><span style="color:var(--text-muted)">${pct}%</span></div>`;
  }).join('');

  document.getElementById('detailWrap').innerHTML = `
    <div>
      <div class="breadcrumb">
        <a href="#" onclick="showPage('home')">Home</a>
        <span>›</span>
        <a href="#" onclick="showPage('listing')">${biz.category}</a>
        <span>›</span>
        <span>${biz.name}</span>
      </div>
      <div class="detail-gallery">
        <div class="gallery-main" id="galleryMain">${biz.photos[0]}</div>
        <div class="gallery-thumbs">${biz.photos.map((p,i)=>`<div class="gallery-thumb ${i===0?'active':''}" onclick="switchPhoto('${p}',this)">${p}</div>`).join('')}</div>
      </div>
      <div class="detail-card">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:12px">
          <div>
            ${biz.featured?`<span class="biz-badge" style="position:static;margin-right:6px">⭐ Featured</span>`:''}
            ${biz.verified?`<span class="biz-badge verified" style="position:static">✓ Verified</span>`:''}
            <h1 style="font-family:var(--font-head);font-size:clamp(22px,4vw,30px);font-weight:800;color:var(--text-head);margin-top:10px">${biz.name}</h1>
            <div style="font-size:14px;color:var(--text-muted);margin-top:4px">Owner: ${biz.owner} • ${biz.category}</div>
          </div>
          <button style="background:var(--saffron-pale);color:var(--saffron);border:none;border-radius:var(--radius-sm);padding:9px 16px;font-size:13px;font-weight:600;cursor:pointer" onclick="shareBusiness('${biz.name}')">🔗 Share</button>
        </div>
        <div class="biz-rating" style="margin-bottom:16px">
          <span class="stars" style="font-size:20px">${'★'.repeat(Math.floor(biz.rating))}${'☆'.repeat(5-Math.floor(biz.rating))}</span>
          <span class="rating-num" style="font-size:18px">${biz.rating}</span>
          <span class="rating-count">(${biz.reviews} reviews)</span>
        </div>
        <div class="info-row"><div class="info-icon">📍</div><div><strong>Address</strong><br>${biz.address}</div></div>
        <div class="info-row"><div class="info-icon">📞</div><div><strong>Phone</strong><br><a href="tel:${biz.phone}" style="color:var(--saffron)">${biz.phone}</a></div></div>
        <div class="info-row"><div class="info-icon">💬</div><div><strong>WhatsApp</strong><br><a href="https://wa.me/${biz.whatsapp}" target="_blank" style="color:var(--green)">${biz.phone}</a></div></div>
      </div>
      <div class="detail-card">
        <h3>About the Business</h3>
        <p style="font-size:15px;color:var(--text-body);line-height:1.7">${biz.desc}</p>
      </div>
      <div class="detail-card">
        <h3>Products & Services</h3>
        <div class="product-grid">${biz.tags.map(t=>`<div class="product-tag">${t}</div>`).join('')}</div>
      </div>
      <div class="detail-card">
        <h3>Opening Hours</h3>
        ${Object.entries(biz.hours).map(([day,hrs])=>`
          <div class="hours-row">
            <span ${day===today?'style="font-weight:700;color:var(--text-head)"':''} >${day} ${day===today?'(Today)':''}</span>
            <span class="${hrs==='Closed'?'hours-closed':hrs==='Emergency Only'?'hours-closed':''} ${hrs!=='Closed'&&hrs!=='Emergency Only'?'hours-open':''}">${hrs}</span>
          </div>`).join('')}
      </div>
      <div class="detail-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid var(--border)">
          <h3 style="border:none;padding:0;margin:0">Reviews & Ratings</h3>
          <button class="btn-sm btn-view" onclick="openReviewModal('${biz.name}')">✍️ Write Review</button>
        </div>
        <div style="display:flex;gap:24px;align-items:center;margin-bottom:20px;flex-wrap:wrap">
          <div style="text-align:center">
            <div style="font-family:var(--font-head);font-size:52px;font-weight:800;color:var(--text-head)">${biz.rating}</div>
            <div class="stars" style="font-size:22px">${'★'.repeat(Math.floor(biz.rating))}</div>
            <div style="font-size:13px;color:var(--text-muted);margin-top:4px">${biz.reviews} reviews</div>
          </div>
          <div style="flex:1;min-width:200px">${reviewBars}</div>
        </div>
        ${biz.reviewList.map(r=>`
          <div class="review-card">
            <div class="reviewer">
              <div class="reviewer-avatar">${r.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
              <div>
                <div class="reviewer-name">${r.name}</div>
                <div class="reviewer-date">${'★'.repeat(r.rating)} • ${r.date}</div>
              </div>
            </div>
            <div class="review-text">${r.text}</div>
          </div>`).join('')}
      </div>
    </div>
    <div>
      <div class="detail-card" style="position:sticky;top:96px">
        <h3>Quick Contact</h3>
        <div class="contact-btns">
          <button class="btn-full btn-saffron" onclick="callBusiness('${biz.phone}')">📞 Call Now: ${biz.phone}</button>
          <button class="btn-full btn-green" onclick="whatsappBusiness('${biz.whatsapp}','${biz.name}')">💬 WhatsApp Chat</button>
          <button class="btn-full btn-outline" onclick="getDirections('${biz.name}','${biz.address}')">🗺️ Get Directions</button>
          <button class="btn-full btn-outline" onclick="toggleFavorite(${biz.id})">❤️ Save Business</button>
          <button class="btn-full btn-outline" onclick="openReviewModal('${biz.name}')">⭐ Write a Review</button>
          <button class="btn-full btn-outline" onclick="shareBusiness('${biz.name}')">🔗 Share</button>
        </div>
      </div>
      <div class="detail-card">
        <h3>Location</h3>
        <div class="map-embed">
          🗺️<br><br>
          <strong>${biz.name}</strong><br>
          ${biz.area}, Siwan, Bihar<br><br>
          <a href="https://maps.google.com?q=${encodeURIComponent(biz.address)}" target="_blank" style="color:var(--saffron);font-weight:600">Open in Google Maps →</a>
        </div>
        <p style="font-size:12px;color:var(--text-muted);margin-top:8px">📍 ${biz.address}</p>
      </div>
    </div>`;

  // Animate rating bars
  setTimeout(()=>{
    document.querySelectorAll('.rating-bar-fill').forEach(b=>b.style.width=b.style.width);
  },100);
}

function switchPhoto(emoji, el) {
  document.getElementById('galleryMain').textContent = emoji;
  document.querySelectorAll('.gallery-thumb').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
}

// ===== ADMIN =====
function renderAdminOverview() {
  document.getElementById('adminContent').innerHTML = `
    <div class="admin-head">📊 Dashboard Overview</div>
    <div class="admin-stats">
      <div class="admin-stat"><div class="admin-stat-num">261</div><div class="admin-stat-label">Total Businesses</div></div>
      <div class="admin-stat"><div class="admin-stat-num">1,847</div><div class="admin-stat-label">Registered Users</div></div>
      <div class="admin-stat"><div class="admin-stat-num">12</div><div class="admin-stat-label">Pending Approval</div></div>
      <div class="admin-stat"><div class="admin-stat-num">1,234</div><div class="admin-stat-label">Total Reviews</div></div>
    </div>
    <div class="dash-section">
      <h3>Recent Listings – Pending Approval</h3>
      <table class="admin-table">
        <thead><tr><th>Business</th><th>Owner</th><th>Category</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          ${[{n:"Gupta Electronics",o:"Suresh Gupta",c:"Electronics",d:"2h ago"},{n:"City Cafe",o:"Ravi Kumar",c:"Restaurants",d:"5h ago"},{n:"New Life Clinic",o:"Dr. Ansari",c:"Hospitals & Clinics",d:"1 day ago"}].map(r=>`
          <tr>
            <td><strong>${r.n}</strong></td>
            <td>${r.o}</td>
            <td>${r.c}</td>
            <td style="color:var(--text-muted)">${r.d}</td>
            <td><span class="status-badge status-pending">Pending</span></td>
            <td>
              <div style="display:flex;gap:6px">
                <button class="icon-btn" onclick="showToast('✅ Listing approved!')" style="color:var(--green);border-color:var(--green)">✓</button>
                <button class="icon-btn" onclick="showToast('❌ Listing rejected')" style="color:#C62828;border-color:#C62828">✕</button>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="dash-section">
      <h3>Recent Reviews to Moderate</h3>
      <table class="admin-table">
        <thead><tr><th>Reviewer</th><th>Business</th><th>Rating</th><th>Review</th><th>Actions</th></tr></thead>
        <tbody>
          <tr><td>Ajay K.</td><td>Ramesh General Store</td><td>⭐⭐⭐⭐⭐</td><td>Excellent shop...</td><td><div style="display:flex;gap:6px"><button class="icon-btn" onclick="showToast('✅ Review approved')" style="color:var(--green);border-color:var(--green)">✓</button><button class="icon-btn" onclick="showToast('🗑️ Review deleted')" style="color:#C62828;border-color:#C62828">✕</button></div></td></tr>
          <tr><td>Anonymous</td><td>City Electronics</td><td>⭐</td><td>Bad service...</td><td><div style="display:flex;gap:6px"><button class="icon-btn" onclick="showToast('✅ Review approved')" style="color:var(--green);border-color:var(--green)">✓</button><button class="icon-btn" onclick="showToast('🗑️ Review deleted')" style="color:#C62828;border-color:#C62828">✕</button></div></td></tr>
        </tbody>
      </table>
    </div>`;
}

function renderAdminBusinesses() {
  document.getElementById('adminContent').innerHTML = `
    <div class="admin-head">🏪 Manage Businesses</div>
    <div style="display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap">
      <input class="filter-input wide" type="text" placeholder="Search businesses...">
      <select class="filter-input"><option>All Categories</option><option>Grocery</option><option>Restaurants</option></select>
      <select class="filter-input"><option>All Status</option><option>Approved</option><option>Pending</option><option>Rejected</option></select>
      <button class="btn-sm btn-view" style="width:auto;padding:9px 18px" onclick="openModal('submitModal')">+ Add Business</button>
    </div>
    <div class="dash-section" style="padding:0;overflow:hidden">
      <table class="admin-table">
        <thead><tr><th>Business</th><th>Owner</th><th>Category</th><th>Rating</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          ${businesses.map(b=>`<tr>
            <td><div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px">${b.icon}</span><strong>${b.name}</strong></div></td>
            <td>${b.owner}</td>
            <td>${b.category}</td>
            <td>⭐ ${b.rating}</td>
            <td><span class="status-badge status-approved">Approved</span></td>
            <td><div style="display:flex;gap:6px">
              <button class="icon-btn" onclick="viewBusiness(${b.id})">👁️</button>
              <button class="icon-btn" onclick="openModal('editModal')">✏️</button>
              <button class="icon-btn" onclick="showToast('🗑️ Business removed')" style="color:#C62828">🗑️</button>
            </div></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderAdminUsers() {
  document.getElementById('adminContent').innerHTML = `
    <div class="admin-head">👥 Manage Users</div>
    <div class="dash-section" style="padding:0;overflow:hidden">
      <table class="admin-table">
        <thead><tr><th>Name</th><th>Mobile</th><th>Role</th><th>Joined</th><th>Listings</th><th>Actions</th></tr></thead>
        <tbody>
          ${[{n:"Ramesh Kumar",m:"+91 98765 43210",r:"Business Owner",j:"Jan 2024",l:3},{n:"Mohan Lal",m:"+91 91234 56789",r:"Business Owner",j:"Feb 2024",l:1},{n:"Sunita Devi",m:"+91 87654 32101",r:"User",j:"Mar 2024",l:0},{n:"Vikram Singh",m:"+91 76543 21098",r:"Business Owner",j:"Mar 2024",l:1}].map(u=>`
          <tr><td><strong>${u.n}</strong></td><td>${u.m}</td><td><span class="status-badge ${u.r==='User'?'status-pending':'status-approved'}">${u.r}</span></td><td>${u.j}</td><td>${u.l}</td><td><div style="display:flex;gap:6px"><button class="icon-btn" onclick="showToast('✉️ Message sent')">✉️</button><button class="icon-btn" onclick="showToast('⚠️ User suspended')" style="color:#C62828">🚫</button></div></td></tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderAdminCategories() {
  const cats = [['🛒','Grocery Stores',42],['📱','Mobile Shops',28],['💡','Electronics',19],['👗','Clothing Stores',35],['🍽️','Restaurants',51],['🏥','Hospitals & Clinics',23],['🎓','Schools & Coaching',31],['🔧','Repair Services',18],['🏠','Real Estate',14],['🏪','Other',50]];
  document.getElementById('adminContent').innerHTML = `
    <div class="admin-head">📂 Manage Categories</div>
    <div style="display:flex;justify-content:flex-end;margin-bottom:16px">
      <button class="btn-sm btn-view" style="width:auto;padding:9px 18px" onclick="showToast('💡 Add category feature coming soon')">+ Add Category</button>
    </div>
    <div class="cat-grid">
      ${cats.map(([ic,nm,cnt])=>`<div class="cat-card" style="cursor:default">
        <div class="cat-icon" style="background:var(--saffron-pale)">${ic}</div>
        <div class="cat-name">${nm}</div>
        <div class="cat-count">${cnt} businesses</div>
        <div style="display:flex;gap:6px">
          <button class="icon-btn" onclick="showToast('✏️ Edit category')">✏️</button>
          <button class="icon-btn" onclick="showToast('🗑️ Category removed')" style="color:#C62828">🗑️</button>
        </div>
      </div>`).join('')}
    </div>`;
}

function renderAdminSettings() {
  document.getElementById('adminContent').innerHTML = `
    <div class="admin-head">⚙️ Website Settings</div>
    <div class="dash-section">
      <h3>General Settings</h3>
      <div class="form-group"><label>Website Name</label><input class="form-control" value="SiwanBiz – Siwan Local Business Directory"></div>
      <div class="form-group"><label>Contact Email</label><input class="form-control" type="email" value="info@siwanbiz.in"></div>
      <div class="form-group"><label>Contact Phone</label><input class="form-control" type="tel" value="+91 98765 43210"></div>
      <div class="form-group"><label>Footer Tagline</label><input class="form-control" value="Made with ❤️ for Siwan, Bihar"></div>
      <button class="btn-sm btn-view" style="width:auto;padding:10px 24px" onclick="showToast('✅ Settings saved!')">Save Settings</button>
    </div>
    <div class="dash-section">
      <h3>Moderation Settings</h3>
      <div style="display:flex;flex-direction:column;gap:16px">
        ${[['Auto-approve listings','off'],['Require login to view contacts','off'],['Allow anonymous reviews','on'],['Email notifications','on']].map(([label,val])=>`
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--border)">
          <span style="font-size:14px;color:var(--text-body)">${label}</span>
          <div style="width:44px;height:24px;background:${val==='on'?'var(--saffron)':'var(--border)'};border-radius:12px;position:relative;cursor:pointer" onclick="this.style.background=this.style.background.includes('saffron')?'var(--border)':'var(--saffron)'">
            <div style="width:18px;height:18px;border-radius:50%;background:white;position:absolute;top:3px;${val==='on'?'right:3px':'left:3px'};transition:all 0.2s"></div>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
}

function switchAdmin(section, el) {
  document.querySelectorAll('.admin-nav a').forEach(a=>a.classList.remove('active'));
  el.classList.add('active');
  if(section==='overview') renderAdminOverview();
  else if(section==='businesses') renderAdminBusinesses();
  else if(section==='users') renderAdminUsers();
  else if(section==='categories') renderAdminCategories();
  else if(section==='settings') renderAdminSettings();
  else if(section==='reviews') {
    document.getElementById('adminContent').innerHTML = `<div class="admin-head">⭐ Manage Reviews</div><div class="dash-section"><h3>All Reviews</h3>${businesses.flatMap(b=>b.reviewList.map(r=>`<div class="review-card"><div class="reviewer"><div class="reviewer-avatar">${r.name[0]}</div><div><div class="reviewer-name">${r.name} → ${b.name}</div><div class="reviewer-date">${'★'.repeat(r.rating)} • ${r.date}</div></div><div style="margin-left:auto;display:flex;gap:6px"><button class="icon-btn" onclick="showToast('✅ Review approved')" style="color:var(--green)">✓</button><button class="icon-btn" onclick="showToast('🗑️ Removed')" style="color:#C62828">✕</button></div></div><div class="review-text">${r.text}</div></div>`)).join('')}</div>`;
  }
}

// ===== ACTIONS =====
function callBusiness(phone) {
  window.location.href = 'tel:'+phone.replace(/\s/g,'');
  showToast('📞 Calling '+phone);
}
function whatsappBusiness(num, name) {
  window.open(`https://wa.me/${num}?text=Hi, I found your business "${name}" on SiwanBiz. I'd like to enquire.`, '_blank');
}
function getDirections(name, address) {
  window.open(`https://maps.google.com/maps?daddr=${encodeURIComponent(address)}`, '_blank');
  showToast('🗺️ Opening Google Maps...');
}
function shareBusiness(name) {
  if(navigator.share) {
    navigator.share({title:name,text:`Check out ${name} on SiwanBiz!`,url:window.location.href});
  } else {
    navigator.clipboard.writeText(window.location.href).then(()=>showToast('🔗 Link copied to clipboard!'));
  }
}
function toggleFavorite(id) {
  if(favorites.includes(id)) {
    favorites = favorites.filter(f=>f!==id);
    showToast('💔 Removed from favorites');
  } else {
    favorites.push(id);
    showToast('❤️ Saved to favorites!');
  }
}

// ===== HERO SEARCH =====
function handleHeroSearch(e) { if(e.key==='Enter') doHeroSearch(); }
function doHeroSearch() {
  const q = document.getElementById('heroSearch').value;
  const cat = document.getElementById('heroCategory').value;
  showPage('listing');
  if(q) document.getElementById('searchName').value = q;
  if(cat) document.getElementById('searchCat').value = cat;
  renderListing();
}
function filterHero() {}
function filterByCategory(cat) {
  showPage('listing');
  if(document.getElementById('searchCat')) document.getElementById('searchCat').value = cat;
  renderListing();
}

// ===== MODALS =====
function openModal(id) { document.getElementById(id).classList.remove('hidden'); document.body.style.overflow='hidden'; }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); document.body.style.overflow=''; }
function closeModalOutside(e,id) { if(e.target.id===id) closeModal(id); }
function openReviewModal(bizName) {
  document.getElementById('reviewBizName').textContent = '📌 '+bizName;
  openModal('reviewModal');
}
function switchTab(tab) {
  document.getElementById('loginForm').style.display = tab==='login'?'block':'none';
  document.getElementById('registerForm').style.display = tab==='register'?'block':'none';
  document.getElementById('loginTab').classList.toggle('active',tab==='login');
  document.getElementById('registerTab').classList.toggle('active',tab==='register');
}

// ===== FORM ACTIONS =====
function doLogin() { closeModal('loginModal'); showToast('✅ Welcome back, Ramesh Ji!'); showPage('dashboard'); }
function doRegister() { closeModal('loginModal'); showToast('🎉 Account created! Please verify your mobile number.'); }
function submitBusiness() { closeModal('submitModal'); showToast('✅ Listing submitted! We\'ll review within 24 hours.'); }
function submitReview() {
  const name = document.getElementById('reviewerName').value;
  const text = document.getElementById('reviewText').value;
  if(!name||!text){ showToast('⚠️ Please fill all fields'); return; }
  closeModal('reviewModal');
  showToast('⭐ Thank you for your review!');
}

// ===== TOAST =====
function showToast(msg) {
  const old = document.querySelector('.toast');
  if(old) old.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 3500);
}

// ===== THEME =====
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme')==='dark';
  document.documentElement.setAttribute('data-theme', isDark?'':'dark');
  document.querySelector('.theme-btn').textContent = isDark?'🌙':'☀️';
  showToast(isDark?'☀️ Light mode on':'🌙 Dark mode on');
}

// ===== MOBILE NAV =====
function toggleMobileNav() { document.getElementById('mobileNav').classList.toggle('open'); }
function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); }

// ===== KEYBOARD =====
document.addEventListener('keydown', e => { if(e.key==='Escape') { document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(m=>m.classList.add('hidden')); document.body.style.overflow=''; }});

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderLatest();
  renderListing();
  renderAdminOverview();

  // Animate stats counter
  const targets = [{el:'stat-biz',end:261,suffix:'+'}];
  targets.forEach(({el,end,suffix})=>{
    const elem = document.getElementById(el);
    if(!elem) return;
    let cur=0;
    const step = Math.ceil(end/60);
    const timer = setInterval(()=>{
      cur = Math.min(cur+step, end);
      elem.textContent = cur + (suffix||'');
      if(cur>=end) clearInterval(timer);
    },30);
  });
});
