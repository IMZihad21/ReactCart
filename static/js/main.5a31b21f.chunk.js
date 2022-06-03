(this.webpackJsonpgenshindb=this.webpackJsonpgenshindb||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(7),s=n.n(c),l=(n(14),n(15),n(0)),i=function(){return Object(l.jsxs)("div",{className:"shadow-lg bg-gray-200 px-2 py-4 rounded-lg",children:[Object(l.jsx)("h1",{className:"text-4xl font-bold pb-4 ",children:"Genshin Characters"}),Object(l.jsxs)("p",{className:"text-xl pb-2",children:[Object(l.jsx)("strong",{children:"Make A Dream Team"})," With the amazing characters below, lets build a strong party for Genshin Impact"]}),Object(l.jsxs)("h1",{className:"text-2xl",children:["Total budget around ",Object(l.jsxs)("span",{className:"font-bold text-blue-500",children:["$",174]})," Million"]})]})},o=n(4),d=n(6),b=n(8),j=function(e){var t=e.player,n=t.name,r=t.image,a=t.quantity;return Object(l.jsxs)("div",{className:"flex  border-b border-blue-500 p-2",children:[Object(l.jsx)("img",{className:"w-1/4 px-2 rounded-full",src:r,alt:n}),Object(l.jsxs)("h1",{className:"font-semibold m-auto",children:[n," x",a]}),Object(l.jsx)("button",{onClick:function(){return e.handleRemoveFromCart(e.player)},className:"bg-red-500 hover:bg-red-700 text-white font-bold px-4 border border-red-700 rounded-lg",children:"Remove"})]})},u=function(e){var t,n=e.selectedPlayers,r=e.handleRemoveFromCart,a=0,c=0,s=Object(b.a)(n);try{for(s.s();!(t=s.n()).done;){var i=t.value;c+=i.price*i.quantity,a+=i.quantity}}catch(o){s.e(o)}finally{s.f()}return Object(l.jsxs)("div",{className:"rounded-lg p-4 mx-2 my-4 shadow-lg bg-gray-200",children:[Object(l.jsxs)("h1",{className:"font-bold pb-2",children:["Total Item selected: ",a]}),Object(l.jsxs)("h1",{className:"font-bold pb-2",children:["Total Price: $",c]}),Object(l.jsx)("div",{className:"border border-blue-500 rounded-lg my-2",children:n.map((function(e){return Object(l.jsx)(j,{player:e,handleRemoveFromCart:r},Math.random())}))}),Object(l.jsx)("button",{className:"bg-green-500 hover:bg-green-700 text-white font-bold px-24 py-3 my-2 border border-green-700 rounded-lg",children:"Buy Now"})]})},m=n(9),h=function(e){var t=e.player,n=t.name,r=t.title,a=t.image,c=t.rarity,s=t.element,i=t.weapontype,o=t.region,d=t.birthday,b=t.price;return Object(l.jsxs)("div",{className:"bg-gray-200 shadow-lg rounded-xl items-center p-3 mx-2 my-4",children:[Object(l.jsx)("img",{className:"w-1/2 mx-auto border rounded-full ",src:a,alt:n}),Object(l.jsx)(m.a,{initialRating:c,readonly:!0,emptySymbol:"far fa-star text-yellow-400",fullSymbol:"fas fa-star text-yellow-400"}),Object(l.jsxs)("h1",{children:[Object(l.jsx)("span",{className:"font-semibold text-blue-500",children:"Name:"})," ",n]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{className:"font-semibold text-blue-500",children:"Title:"})," ",r]}),Object(l.jsxs)("p",{className:"font-semibold text-blue-700",children:[s+" "+i," User"]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{className:"font-semibold text-blue-500",children:"Region:"})," ",o]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{className:"font-semibold text-blue-500",children:"Birthday:"})," ",d]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{className:"font-semibold text-blue-500",children:"Price:"})," $",b]}),Object(l.jsxs)("button",{onClick:function(){return e.handleAddToCart(e.player)},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-6 border border-blue-700 rounded-lg",children:[Object(l.jsx)("i",{className:"fas fa-shopping-cart"})," Add to Cart"]})]})},x=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(d.a)(c,2),i=s[0],b=s[1];Object(r.useEffect)((function(){fetch("./players.JSON").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(r.useEffect)((function(){var e=function(){var e=localStorage.getItem("cart");return e?JSON.parse(e):[]}();b(e)}),[]),Object(r.useEffect)((function(){!function(e){var t=JSON.stringify(e);localStorage.setItem("cart",t)}(i)}),[i]);var j=function(e){if(-1!==i.indexOf(e)){var t=Object(o.a)(i);t.forEach((function(t){t.id===e.id&&(t.quantity+=1)})),b(Object(o.a)(t))}else e.quantity=1,b([].concat(Object(o.a)(i),[e]))};return Object(l.jsxs)("div",{className:"md:flex",children:[Object(l.jsx)("div",{className:"md:w-2/3 grid md:grid-cols-3 grid-cols-2",children:n.map((function(e){return Object(l.jsx)(h,{player:e,handleAddToCart:j},e.id)}))}),Object(l.jsx)("div",{className:"md:w-1/3",children:Object(l.jsx)(u,{selectedPlayers:i,handleRemoveFromCart:function(e){var t=e.id,n=Object(o.a)(i),r=n.find((function(e){return e.id===t}));if(r){var a=n.indexOf(r);n.splice(a,1),b(n)}}})})]})};var f=function(){return Object(l.jsxs)("div",{className:"App md:px-24 bg-gray-100",children:[Object(l.jsx)(i,{}),Object(l.jsx)(x,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.5a31b21f.chunk.js.map