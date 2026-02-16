const loadProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
    .then(data => displayTrendProducts(data))
}

const displayTrendProducts = (products) => {
    console.log(products);
   const sortProduct = products.sort((a, b) => b.rating.rate - a.rating.rate).slice(0,3);
    console.log(sortProduct);
    
    const trandingCards = document.getElementById('tranding-cards');
    trandingCards.innerHTML = "";
    for (const product of sortProduct) {
        const div = document.createElement('div');
        div.className = " rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col ";
        div.innerHTML = `
        
      <div class="bg-[#f3f4f6] rounded-xl p-8 mb-5 flex items-center justify-center h-[260px] overflow-hidden">
        <img src="${product.image}" 
             alt="${product.title}" 
             class="max-h-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-110">
    </div>

    <div class="flex justify-between items-center mb-3 px-1">
        <span class="bg-[#eeebff] text-[#5c4df2] text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-tight">
            ${product.category}
        </span>
        <div class="flex items-center gap-1 text-[13px] font-bold text-gray-700">
            <i class="fa-solid fa-star text-yellow-400"></i>
            <span>${product.rating.rate} <span class="text-gray-400 font-medium">(${product.rating.count})</span></span>
        </div>
    </div>

    <div class="px-1 flex-grow">
        <h3 class="text-gray-800 font-bold text-[17px] mb-2 line-clamp-1 leading-tight">
            ${product.title}
        </h3>
        <p class="text-2xl font-black text-gray-900 mb-6">
            $${product.price}
        </p>
    </div>

    <div class="flex gap-3 px-1 pb-1">
        <button class="flex-1 py-3 border border-gray-200 rounded-xl text-gray-700 font-bold text-[13px] flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <i class="fa-regular fa-eye text-sm text-gray-500"></i> Details
        </button>
        <button class="flex-1 py-3 bg-[#5c4df2] text-white rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 hover:bg-[#4a3ddb] transition shadow-sm">
            <i class="fa-solid fa-cart-shopping text-xs"></i> Add
        </button>
    </div>
        `
        trandingCards.append(div);
        
   }

}

loadProducts()