const FX=26000;
const I={vi:{
tag:"Handmade · Vải hoa · Cói",n1:"Túi cói",n2:"Menu",n3:"Album",n4:"Booklet cói",n5:"Feedback",
h1:"Những chiếc túi xinh cho ngày <em>nắng.</em>",
hp:"Túi vải hoa nhí, pouch bèo nhún và túi cói đan tay. Mỗi món được may cho những buổi picnic bên hồ của các cô gái nhà Limdim.",
hint:"Chạm vào một thẻ để xem bộ sưu tập ⊕",c1a:"Túi cói",c1b:"3 mẫu",c2a:"Túi vải",c2b:"3 mẫu",c3b:"9 mẫu",c3c:"Pouch bèo nhún",
coiH:"Túi cói, <em>đan tay.</em>",coiP:"Quai da nâu, thân cói trắng ngà, lót bèo vải hoa. Nhắn shop để biết giá và hàng sẵn.",
r1:"Bèo nhún",r2:"Sọc hồng chấm hoa",r3:"Hoa nhí xanh và vàng",r4:"Hoa dây leo hồng nhí",dtH:"Cận cảnh chi tiết",
mL:"Menu · mở cửa mỗi ngày nắng",mP:"Chọn món bạn thích rồi nhắn shop nhé. Chạm vào từng món để xem ảnh lớn.",
sL:"Món đặc biệt hôm nay",sP:"Cói Mơ & Cói San, đan tay",sB:"Xem túi cói",note:"Giá tính theo nghìn đồng (k) · M · L là hai size",
alP:"Vài khoảnh khắc nắng, cỏ và những chiếc túi nhỏ trên bàn picnic.",
bkH:"Booklet bảo quản <em>Cói.</em>",bkP:"Cách chăm túi cói luôn xinh và bền. Bấm vào sách, kéo một trang hoặc dùng nút bên dưới để lật.",
bkA:"Booklet bảo quản cói. Bấm, kéo hoặc dùng phím mũi tên để lật trang.",prev:"Trang trước",next:"Trang sau",
foot:"",fbH:"Feedback từ <em>các nàng</em>",fbP:"Ảnh khách gửi về shop. Chạm vào ảnh để xem lớn.",fbS:"Kéo ngang mỗi dây để xem thêm",close:"Đóng",title:"limdim.softie — túi vải hoa & cói handmade"},
en:{
tag:"Handmade · Floral fabric · Straw",n1:"Straw bags",n2:"Menu",n3:"Album",n4:"Straw care",n5:"Reviews",
h1:"Pretty bags for <em>sunny days.</em>",
hp:"Little-floral fabric bags, ruffled pouches and hand-woven straw bags. Every piece is made for lakeside picnics with the girls of Limdim.",
hint:"Tap a card to explore the collection ⊕",c1a:"Straw bags",c1b:"3 styles",c2a:"Fabric bags",c2b:"3 styles",c3b:"9 styles",c3c:"Ruffle pouches",
coiH:"Straw bags, <em>hand-woven.</em>",coiP:"Brown leather handles, an ivory straw body and a floral ruffle lining. Message the shop for prices and availability.",
r1:"Ruffled",r2:"Pink stripes & dots",r3:"Blue & yellow florals",r4:"Pink trellis florals",dtH:"Up close",
mL:"Menu · open every sunny day",mP:"Pick your favourite, then message the shop to order. Tap any item for a closer look.",
sL:"Today's special",sP:"Cói Mơ & Cói San, hand-woven",sB:"See straw bags",note:"Prices in USD, converted from VND at about 26,000 ₫ per $ · M and L are two sizes",
alP:"A few moments of sunshine, grass and little bags on the picnic table.",
bkH:"Straw care <em>booklet.</em>",bkP:"How to keep your straw bag pretty and long-lasting. Tap the book, drag a page or use the buttons to turn pages.",
bkA:"Straw care booklet. Tap, drag or use the arrow keys to turn pages.",prev:"Previous page",next:"Next page",
foot:"",fbH:"Feedback from <em>our girls</em>",fbP:"Photos our customers sent to the shop. Tap a photo to see it larger.",fbS:"Scroll each line sideways for more",close:"Close",title:"limdim.softie — handmade floral & straw bags"}};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let L="vi";try{L=localStorage.getItem("lang")==="en"?"en":"vi"}catch(e){}
const SHOP={ig:"limdim.softie",zalo:"",email:""};
Object.assign(I.vi,{n1:"Túi cói",n2:"Cửa hàng",n3:"Triển lãm",n4:"Booklet cói",n5:"Feedback",cta1:"Mua ngay",cta2:"Xem túi cói",
shL:"Cửa hàng",shH:"Limdim's <em>store.</em>",shP:"Chạm vào ảnh để xem chi tiết, chọn size và số lượng. Sau khi gửi đơn, shop sẽ nhắn xác nhận lại với bạn.",
quote:"Nhắn shop báo giá",choose:"Chọn mua",pmSize:"Size",pmQty:"Số lượng",add:"Thêm vào giỏ",buy:"Mua ngay",added:"Đã thêm vào giỏ",
pmNoteQ:"Túi cói chưa niêm yết giá, shop sẽ báo giá khi xác nhận đơn.",pmCare:"Xem cách bảo quản túi cói ↓",
cart:"Giỏ hàng",empty:"Giỏ hàng đang trống. Chọn một món bạn thích nhé.",sub:"Tạm tính",quoteLine:"Shop báo giá thêm: ",shipNote:"Chưa gồm phí ship. Shop sẽ báo khi xác nhận đơn.",
toCheck:"Điền thông tin nhận hàng",back:"‹ Quay lại giỏ",remove:"Xóa",checkH:"Thông tin nhận hàng",
fN:"Họ và tên",fP:"Số điện thoại / Zalo",fA:"Địa chỉ nhận hàng",fNote:"Ghi chú (không bắt buộc)",fPay:"Thanh toán",payCod:"Thanh toán khi nhận hàng (COD)",payBank:"Chuyển khoản (shop gửi thông tin khi xác nhận)",
errName:"Bạn nhập giúp shop họ tên nhé.",errPhone:"Số điện thoại chưa đúng, bạn kiểm tra lại giúp shop.",errAddr:"Bạn nhập địa chỉ đầy đủ hơn nhé.",
place:"Tạo đơn hàng",doneH:"Đơn của bạn đã sẵn sàng",doneP:"Còn một bước: gửi nội dung đơn cho shop. Đơn chỉ đến tay shop khi bạn gửi tin nhắn.",codeL:"Mã đơn",
sendIg:"Gửi đơn qua Instagram",sendZalo:"Gửi qua Zalo",sendMail:"Gửi qua email",copy:"Chép nội dung đơn",copied:"Đã chép! Dán vào tin nhắn rồi bấm gửi.",copyFail:"Chưa chép tự động được, bạn bôi đen nội dung ở trên rồi chép nhé.",
igHint:"Bấm nút Instagram: nội dung đơn được chép sẵn, bạn chỉ cần dán và gửi.",clear:"Tôi đã gửi, xóa giỏ hàng",shopLook:"Mua sản phẩm trong ảnh →",
rm1h:"Sunny <em>Garden.</em>",rm1p:"Phòng đầu tiên: những buổi picnic bên hồ cùng túi cói.",rm2h:"The Picnic <em>Table.</em>",rm2p:"Phòng thứ hai: pouch bèo nhún trên khăn kẻ sọc.",rm3h:"Fairy <em>House.</em>",rm3p:"Phòng cuối: ngôi nhà cổ tích, đôi thiên nga và những chiếc tote chần bông.",
ftOrder:"Đặt hàng qua Instagram @limdim.softie",spec:"Chất liệu và kích thước"});
Object.assign(I.en,{n1:"Straw bags",n2:"Shop",n3:"Gallery",n4:"Straw care",n5:"Reviews",cta1:"Shop now",cta2:"See straw bags",
shL:"Shop",shH:"Limdim's <em>store.</em>",shP:"Tap a photo for details, then choose size and quantity. After you send your order, the shop will message you to confirm.",
quote:"Message shop for price",choose:"Choose",pmSize:"Size",pmQty:"Quantity",add:"Add to cart",buy:"Buy now",added:"Added to cart",
pmNoteQ:"Straw bags have no listed price yet. The shop will quote you when confirming the order.",pmCare:"How to care for straw bags ↓",
cart:"Cart",empty:"Your cart is empty. Pick something you love.",sub:"Subtotal",quoteLine:"Quoted by the shop: ",shipNote:"Shipping not included. The shop will quote it when confirming.",
toCheck:"Enter delivery details",back:"‹ Back to cart",remove:"Remove",checkH:"Delivery details",
fN:"Full name",fP:"Phone / Zalo",fA:"Delivery address",fNote:"Note (optional)",fPay:"Payment",payCod:"Cash on delivery (COD)",payBank:"Bank transfer (the shop sends details when confirming)",
errName:"Please enter your name.",errPhone:"That phone number looks wrong, please check it.",errAddr:"Please enter a fuller address.",
place:"Create order",doneH:"Your order is ready",doneP:"One more step: send the order to the shop. The shop only receives it once you send the message.",codeL:"Order code",
sendIg:"Send order via Instagram",sendZalo:"Send via Zalo",sendMail:"Send via email",copy:"Copy order text",copied:"Copied! Paste it into the message and press send.",copyFail:"Could not copy automatically. Please select the text above and copy it.",
igHint:"Tap the Instagram button: the order text is copied for you, just paste and send.",clear:"I've sent it, clear my cart",shopLook:"Shop the look →",
rm1h:"Sunny <em>Garden.</em>",rm1p:"Room one: lakeside picnics with straw bags.",rm2h:"The Picnic <em>Table.</em>",rm2p:"Room two: ruffled pouches on a striped cloth.",rm3h:"Fairy <em>House.</em>",rm3p:"The last room: a fairy-tale house, two swans and quilted totes.",
ftOrder:"Order via Instagram @limdim.softie",spec:"Material and size"});
const t=k=>I[L][k]??I.vi[k]??k;
const usd=k=>{const v=Math.round(k*1000/FX*2)/2+15;return "$"+(Number.isInteger(v)?v:v.toFixed(2))};
const vn=k=>k+".000";
const m=k=>L==="vi"?vn(k)+"đ":usd(k);
const DIM={M:"15×8×8cm",L:"19×10×10cm"};
const SPV="Đan tay · quai da nâu · lót bèo vải hoa",SPE="Hand-woven · brown leather handles · floral ruffle lining";
const P=[];
const G={vi:{},en:{}};
const hasSizes=p=>p[1].length>1;
const hasColors=p=>!!(p[9]&&p[9].length);
const colName=(p,c)=>hasColors(p)&&p[9][c]?p[9][c][L==="vi"?0:1]:"";
const unit=(p,s)=>!p[1].length?null:p[1].length>1?p[1][s==="L"?1:0]:p[1][0];
const range=p=>!p[1].length?t("quote"):p[1].length>1?m(p[1][0])+" – "+m(p[1][1]):m(p[1][0]);
const dims=p=>hasSizes(p)?"M "+DIM.M+" · L "+DIM.L:(L==="vi"?p[2]:p[3]);
const desc=p=>L==="vi"?p[6]:p[7];
/* shop render */
const sec=k=>{const g=G[L][k];return `<div class="msec" id="ms-${k}"><div class="mh"><h3 class="serif">${esc(g[0])}</h3><span class="rule"></span>${g[1]?`<span class="lbl">${esc(g[1])}</span>`:""}</div><div class="mgrid">${P.map((p,i)=>p[5]===k?`<article class="pc"><button class="pimg" data-open="${i}" aria-label="${esc(p[0])}"><div class="ph"><img src="${esc(p[4])}" alt="${esc(p[0])}" loading="lazy"></div></button><h3 class="serif">${esc(p[0])}</h3><div class="prow"><b>${range(p)}</b></div></article>`:"").join("")}</div></div>`};
function renderAll(){const ci=CATS.indexOf("C");$("#mbody1a").innerHTML=(ci>=0?CATS.slice(0,ci+1):[]).map(sec).join("");$("#mbody1b").innerHTML=(ci>=0?CATS.slice(ci+1):CATS).map(sec).join("");$("#mbody2").innerHTML="";
$("#mnav").innerHTML=catbarHTML();
$$("[data-pi]").forEach(im=>im.src=P[im.dataset.pi][4]);renderFb();if($("#pm").open)drawProduct()}
document.addEventListener("click",e=>{const g=e.target.closest("[data-go]");if(g){e.preventDefault();const go=g.dataset.go,top=go==="all"||go==="shop";if(top||CATS.includes(go))setCat(top?"all":go);const el=document.getElementById(top?"shop":"ms-"+go)||document.getElementById("shop");if(el)el.scrollIntoView({behavior:"smooth"});return}
const o=e.target.closest("[data-open]");if(o)openProduct(+o.dataset.open)});
/* product modal: chỉ xem ảnh */
let cur={i:0,s:"M",q:1,g:0,c:0};
function openProduct(i){cur={i,s:"M",q:1,g:0,c:0};$("#pm").showModal();drawProduct()}
function drawProduct(){const p=P[cur.i],imgs=[p[4],...(p[8]||[])];
$("#pmi").src=imgs[cur.g]||imgs[0];$("#pmi").alt=p[0];
$("#pmt").innerHTML=imgs.length>1?imgs.map((s,k)=>`<button data-g="${k}" aria-pressed="${k===cur.g}" aria-label="${p[0]} ${k+1}"><img src="${s}" alt=""></button>`).join(""):"";
$("#pmx").setAttribute("aria-label",t("close"))}
$("#pm").addEventListener("click",e=>{const el=e.target;
if(el===$("#pm")||el.closest("#pmx")){$("#pm").close();return}
const g=el.closest("[data-g]");if(g){cur.g=+g.dataset.g;drawProduct()}});
function copyText(s){let ok=false;try{const H=document.querySelector("dialog[open]")||document.body,ta=document.createElement("textarea");ta.value=s;ta.setAttribute("readonly","");ta.style.cssText="position:fixed;top:0;left:0;opacity:0";H.appendChild(ta);ta.select();ok=document.execCommand("copy");ta.remove()}catch(e){}
if(ok)return Promise.resolve();try{return navigator.clipboard.writeText(s)}catch(e){return Promise.reject(e)}}
const sizeOf=()=>hasSizes(P[cur.i])?cur.s:"-";
let tt;function toast(s){const x=$("#toast");x.textContent=s;x.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>x.classList.remove("on"),1800)}
const BK=[["/images/site/booklet-22.jpg","Bìa: Booklet bảo quản cói. Chúng mình dành vài phút hiểu cách chăm sóc tụi cói nha!","Cover: straw care booklet. Take a few minutes to learn how to look after your straw bag."],
["/images/site/booklet-23.jpg","Chất liệu: cói lá buông, trắng ngà, đan thủ công từ vùng nguyên liệu An Giang.","Material: buông palm-leaf straw, ivory white, hand-woven from An Giang."],
["/images/site/booklet-24.jpg","100% cói tự nhiên: giữ nơi khô ráo, thông thoáng; xử lý ngay khi bị dính nước, phơi thật khô, hạn chế cho cói vào nước.","100% natural straw: keep it dry and ventilated; dry it fully if wet."],
["/images/site/booklet-25.jpg","Xử lý vải dính bẩn và xử lý cói mốc: giặt vải bình thường, phơi thật khô; với cói mốc dùng bàn chải, không dùng khăn ẩm, bảo quản cẩn thận vào mùa nồm, mùa ẩm.","Stained fabric and mouldy straw: wash fabric normally, brush mould off straw, dry fully."],
["/images/site/booklet-26.jpg","Hết rùi. Cảm ơn nàng đã kiên nhẫn với tụi cói và đồ thủ công.","The end. Thank you for being patient with our straw and handmade pieces."]];
const GL=[["Cover","Straw care booklet. Take a few minutes to learn how to look after your straw bag."],
["Material","Buông palm-leaf straw (\"cói lá buông\"), stripped from mature palm leaves. Ivory white, hand-woven from raw materials grown in An Giang."],
["100% natural straw","Keep it somewhere dry and well ventilated, away from damp walls. If it gets wet, dry it completely right away and keep straw away from water as much as you can."],
["Stains and mould","Stained fabric: wash as normal, dry completely, and don't put it in a closed cabinet while it still feels cool. Mouldy straw: brush it off (no damp cloth), dry completely, and take extra care in humid seasons."],
["The end","Thank you for being patient with our straw and handmade pieces."]];
/* booklet */
const book=$("#book"),mq=matchMedia("(max-width:820px)");let leaves=[],fl=0,single=false,zt=null;
const im=p=>`<img src="${p[0]}" alt="${L==="vi"?p[1]:p[2]}" draggable="false">`;
function build(keep){single=mq.matches;book.classList.toggle("single",single);
const U=single?BK.map(p=>[p,null]):[[BK[0],BK[1]],[BK[2],BK[3]],[BK[4],null]];
book.innerHTML=U.map(([f,b])=>`<div class="leaf"><div class="fr">${im(f)}</div>${b?`<div class="bk">${im(b)}</div>`:""}</div>`).join("");
leaves=[...book.children];fl=0;turn(keep?Math.min(keep,leaves.length-1):0,null,true)}
function setZ(){leaves.forEach((l,i)=>l.style.zIndex=i<fl?i+1:leaves.length-i)}
function info(){const n=single?BK.length:3;$("#pg").textContent=single?(fl+1)+" / "+n:(L==="vi"?["Bìa","Trang 2 – 3","Trang 4 – 5"]:["Cover","Pages 2–3","Pages 4–5"])[fl];
const idx=single?[fl]:[[0],[1,2],[3,4]][fl];const g=$("#gloss");g.classList.toggle("on",L==="en");
g.innerHTML=`<span class="lbl">In English · quick notes</span>`+idx.map(i=>`<p><b>${GL[i][0]}.</b> ${GL[i][1]}</p>`).join("")}
function turn(k,over,instant){const from=fl;fl=Math.max(0,Math.min(leaves.length-1,k));
const tl=over||(fl>from?leaves[from]:fl<from?leaves[fl]:null);
leaves.forEach((l,i)=>l.classList.toggle("f",i<fl));setZ();
if(tl&&!instant){tl.style.zIndex=100;tl.classList.add("turning");clearTimeout(zt);zt=setTimeout(()=>{tl.classList.remove("turning");setZ()},950)}
book.classList.toggle("open",!single&&fl>0);$("#prev").disabled=fl===0;$("#next").disabled=fl===leaves.length-1;info()}
$("#prev").onclick=()=>turn(fl-1);$("#next").onclick=()=>turn(fl+1);
let drag=null,moved=false;
book.addEventListener("pointerdown",e=>{drag={x:e.clientX,id:e.pointerId,leaf:null,dir:0,p:0};moved=false});
book.addEventListener("pointermove",e=>{if(!drag)return;const dx=e.clientX-drag.x;
if(!drag.leaf){if(Math.abs(dx)<8)return;const dir=dx<0?1:-1;if((dir>0&&fl>=leaves.length-1)||(dir<0&&fl<=0)){drag=null;return}
drag.leaf=dir>0?leaves[fl]:leaves[fl-1];drag.dir=dir;drag.leaf.classList.add("drag");drag.leaf.style.zIndex=100;moved=true;try{book.setPointerCapture(drag.id)}catch(_){}}
const w=book.getBoundingClientRect().width;const q=Math.min(1,Math.max(0,drag.dir>0?-dx:dx)/w);drag.p=q;
const prog=drag.dir>0?q:1-q;drag.leaf.style.setProperty("--r",(-180*prog)+"deg");drag.leaf.style.setProperty("--sh",Math.sin(prog*Math.PI))});
function endDrag(){if(!drag)return;const d=drag;drag=null;if(!d.leaf)return;d.leaf.classList.remove("drag");d.leaf.style.removeProperty("--r");d.leaf.style.removeProperty("--sh");setTimeout(()=>moved=false,60);turn(d.p>.25?fl+d.dir:fl,d.leaf)}
book.addEventListener("pointerup",endDrag);book.addEventListener("pointercancel",endDrag);
book.onclick=e=>{if(moved)return;const r=book.getBoundingClientRect();(e.clientX<r.left+r.width*.3&&fl>0)?turn(fl-1):turn(fl+1)};
book.onkeydown=e=>{if(e.key==="ArrowRight")turn(fl+1);if(e.key==="ArrowLeft")turn(fl-1)};
mq.addEventListener("change",()=>build(0));
/* feedback */
const FB=["/images/site/feedback-27.jpg","/images/site/feedback-28.jpg","/images/site/feedback-29.jpg","/images/site/feedback-30.jpg","/images/site/feedback-31.jpg","/images/site/feedback-32.jpg","/images/site/feedback-33.jpg","/images/site/feedback-34.jpg","/images/site/feedback-35.jpg","/images/site/feedback-36.jpg","/images/site/feedback-37.jpg","/images/site/feedback-38.jpg","/images/site/feedback-39.jpg","/images/site/feedback-40.jpg","/images/site/feedback-41.jpg","/images/site/feedback-42.jpg","/images/site/feedback-43.jpg","/images/site/feedback-44.jpg","/images/site/feedback-45.jpg","/images/site/feedback-46.jpg","/images/site/feedback-47.jpg"];
const ROWS=[[0,1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20]];
const ROT=[-3,2.2,-1.6,3,-2.4,1.4,-2.8];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.25});
function renderFb(){$("#lines").innerHTML=ROWS.map(r=>`<div class="line">${r.map((x,k)=>`<div class="hang"><i class="pin"></i><button class="pol" style="--r:${ROT[k%7]}deg;--k:${k}" data-f="${x}"><img src="${FB[x]}" alt="${L==="vi"?"Feedback của khách":"Customer feedback"}" loading="lazy"></button></div>`).join("")}</div>`).join("");
document.querySelectorAll(".line").forEach(l=>io.observe(l))}
$("#lines").onclick=e=>{const b=e.target.closest(".pol");if(!b)return;$("#lbi").src=FB[b.dataset.f];$("#lb").showModal()};
$("#lb").onclick=()=>$("#lb").close();
/* language */
function setLang(l,first){L=l;try{localStorage.setItem("lang",l)}catch(e){}
document.documentElement.lang=l;document.title=I[l].title;
document.querySelectorAll("[data-t]").forEach(e=>e.innerHTML=I[l][e.dataset.t]);
document.querySelectorAll("[data-al]").forEach(e=>e.setAttribute("aria-label",I[l][e.dataset.al]));
document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===l));
renderAll();
document.querySelectorAll("[data-ph]").forEach(e=>e.placeholder=I[l][e.dataset.ph]||"");
if(typeof drawOrder==="function")drawOrder();
if(!first)build(fl)}
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.l));

/* v10 */
Object.assign(I.vi,{h1:"Softly made a <em>dream</em>",cta1:"Đặt đơn qua Instagram",buy:"Đặt đơn qua Instagram",copiedMsg:"Đã chép tên món. Dán vào tin nhắn Instagram nhé.",miniH:"Product <em>Catalog</em>",shP:""});
Object.assign(I.en,{h1:"Softly made a <em>dream</em>",cta1:"Order via Instagram",buy:"Order via Instagram",copiedMsg:"Item name copied. Paste it into your Instagram message.",miniH:"Product <em>Catalog</em>",shP:""});
const SHOP9={bank:""}; /* điền thông tin chuyển khoản, ví dụ "Vietcombank · 0123456789 · NGUYEN THI A" */
Object.assign(I.vi,{coiP:"Quai da nâu, thân cói trắng ngà, lót bèo vải hoa nhí.",fIG:"Tên Instagram",errIG:"Bạn nhập tên Instagram để shop nhắn xác nhận đơn nhé.",
payCod:"COD · cọc trước 50.000đ",payCodD:"Chuyển khoản cọc 50.000đ trước, phần còn lại thanh toán khi nhận hàng.",payBank:"Chuyển khoản toàn bộ",payBankD:"Chuyển khoản đủ giá trị đơn hàng, shop xác nhận và lên đơn cho bạn.",
depNow:"Cọc chuyển khoản trước",restCod:"Thanh toán khi nhận hàng",payAll:"Cần chuyển khoản",depNote:"Shop sẽ gửi thông tin chuyển khoản khi nhắn xác nhận. Đơn được lên sau khi shop nhận cọc. Chưa gồm phí ship.",bankNote:"Shop sẽ gửi thông tin chuyển khoản khi nhắn xác nhận. Chưa gồm phí ship.",
miniL:"Booklet mini",miniH:"Product <em>Catalog</em>",miniP:"Một tờ hai trang: catalog và kích thước túi cói."});
Object.assign(I.en,{coiP:"Brown leather handles, an ivory straw body and a ditsy floral ruffle lining.",fIG:"Instagram username",errIG:"Please enter your Instagram username so the shop can message you.",
payCod:"COD · 50,000₫ deposit first",payCodD:"Transfer a 50,000₫ deposit first, pay the rest on delivery.",payBank:"Full bank transfer",payBankD:"Transfer the full order value; the shop confirms and processes your order.",
depNow:"Deposit to transfer now",restCod:"Pay on delivery",payAll:"Amount to transfer",depNote:"The shop sends transfer details when confirming. Your order is processed once the deposit is received. Shipping not included.",bankNote:"The shop sends transfer details when confirming. Shipping not included.",
miniL:"Mini booklet",miniH:"Product <em>Catalog</em>",miniP:"One sheet, two pages: the catalog and the bag sizes."});
Object.assign(I.vi,{doneH:"Đơn đã sẵn sàng, qua Instagram nhé",doneP:"Mình đã mở Instagram của shop và tự chép nội dung đơn. Bạn dán vào tin nhắn rồi bấm gửi nhé. Đơn chỉ đến tay shop khi bạn gửi tin nhắn. Nếu Instagram không tự mở, bấm nút bên dưới."});
Object.assign(I.en,{doneH:"Your order is ready, head to Instagram",doneP:"We opened the shop's Instagram and tried to copy your order. Paste it into the message and send. The shop only receives your order once you send the message. If Instagram did not open, use the button below."});
const _tt=toast;toast=function(s){const H=document.querySelector("dialog[open]")||document.body,x=$("#toast");if(x.parentNode!==H)H.appendChild(x);_tt(s)};
/* sparkle wand */
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
function sparkle(x,y){if(RM)return;const H=document.querySelector("dialog[open]")||document.body,C=["#f7d56a","#fff","#f4a9ba","#ffe9a8"];for(let i=0;i<16;i++){const s=document.createElement("i"),z=6+Math.random()*10,a=Math.random()*6.28,d=24+Math.random()*60;
s.style.cssText=`position:fixed;left:${x-z/2}px;top:${y-z/2}px;width:${z}px;height:${z}px;background:${C[i%4]};clip-path:polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%);z-index:200;pointer-events:none`;H.appendChild(s);
s.animate([{transform:"translate(0,0) scale(.3) rotate(0)",opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d}px) scale(1) rotate(120deg)`,opacity:1,offset:.45},{transform:`translate(${Math.cos(a)*d*1.3}px,${Math.sin(a)*d*1.3+30}px) scale(0) rotate(240deg)`,opacity:0}],{duration:700+Math.random()*400,easing:"ease-out"}).onfinish=()=>s.remove()}}
addEventListener("click",e=>sparkle(e.clientX,e.clientY),true);

/* ambient leaves & petals: drift in random wind, react to scroll and mouse */
if(!RM){const cv=document.createElement("canvas");cv.id="petals";document.body.appendChild(cv);const pc=cv.getContext("2d"),PCOL=["#f7c9d3","#f2a7b8","#fbe3a0","#cfdcf5","#fff4e6","#f4b5a4"],LC=["#b5c99a","#9db884","#c8d8ae","#8fa974"];
let PD=1,pp=[],py0=scrollY,mx=-999,my=-999,mvx=0,mvy=0,wind=0,gust=0,wt=0,wnext=0,last=performance.now();const R=a=>a[Math.random()*a.length|0];
const mk=init=>{const k=Math.random(),t=k<.45?"l":k<.75?"f":"p";return{t,x:Math.random()*innerWidth,y:init?Math.random()*innerHeight:-30,s:t==="l"?10+Math.random()*9:7+Math.random()*8,c:t==="l"?R(LC):R(PCOL),vy:.35+Math.random()*.6,am:.4+Math.random()*.8,fr:.5+Math.random(),ph:Math.random()*6.28,r:Math.random()*6.28,vr:(Math.random()-.5)*.025,fl:.8+Math.random()*1.4,o:.6+Math.random()*.3,ix:0,iy:0,w:.5+Math.random()}};
const rs=()=>{PD=Math.min(devicePixelRatio||1,2);cv.width=innerWidth*PD;cv.height=innerHeight*PD;const n=Math.max(14,Math.min(34,innerWidth/45|0));while(pp.length<n)pp.push(mk(true));pp.length=n};rs();addEventListener("resize",rs);
addEventListener("scroll",()=>{const d=scrollY-py0;py0=scrollY;for(const p of pp){p.iy-=d*.12*p.s/12;p.ix+=(Math.random()-.5)*Math.min(Math.abs(d),60)*.05}wind=Math.max(-4,Math.min(4,wind+d*.02))},{passive:true});
addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;if(mx===-999){mx=e.clientX;my=e.clientY}mvx=e.clientX-mx;mvy=e.clientY-my;mx=e.clientX;my=e.clientY},{passive:true});
function draw(p,now){const s=p.s;pc.save();pc.translate(p.x*PD,p.y*PD);pc.rotate(p.r);pc.scale(PD*(Math.abs(Math.cos(now/1000*p.fl+p.ph))*.75+.25),PD);pc.globalAlpha=p.o;pc.fillStyle=p.c;
if(p.t==="f"){for(let k=0;k<5;k++){pc.rotate(1.2566);pc.beginPath();pc.ellipse(0,-s*.55,s*.42,s*.55,0,0,6.283);pc.fill()}pc.fillStyle="#f3c969";pc.beginPath();pc.arc(0,0,s*.28,0,6.283);pc.fill()}
else{pc.beginPath();pc.moveTo(0,-s);pc.bezierCurveTo(s*.8,-s*.4,s*.8,s*.5,0,s);pc.bezierCurveTo(-s*.8,s*.5,-s*.8,-s*.4,0,-s);pc.fill();
if(p.t==="l"){pc.strokeStyle="rgba(255,255,255,.45)";pc.lineWidth=1;pc.beginPath();pc.moveTo(0,-s*.9);pc.lineTo(0,s*.9);pc.stroke()}}pc.restore()}
function tick(now){const dt=Math.min((now-last)/16.7,3);last=now;if(now>wnext){wt=(Math.random()-.5)*2.4;wnext=now+3000+Math.random()*4000}
gust+=(wt-gust)*.01*dt;wind*=Math.pow(.95,dt);mvx*=Math.pow(.8,dt);mvy*=Math.pow(.8,dt);const W=gust+wind*.5,dec=Math.pow(.94,dt);pc.clearRect(0,0,cv.width,cv.height);
for(const p of pp){const dx=p.x-mx,dy=p.y-my,d2=dx*dx+dy*dy;if(d2<14400){const d=Math.sqrt(d2)||1,f=1-d/120;p.ix+=(dx/d*f*1.4+mvx*.08*f)*dt;p.iy+=(dy/d*f*1.4+mvy*.08*f)*dt}
p.ix*=dec;p.iy*=dec;p.x+=(Math.sin(now/1000*p.fr+p.ph)*p.am+W*p.w+p.ix)*dt;p.y+=(p.vy+Math.abs(W)*.1+p.iy)*dt;p.r+=(p.vr+p.ix*.01)*dt;
if(p.y>innerHeight+30||p.y<-80){Object.assign(p,mk(false))}else if(p.x<-50)p.x=innerWidth+40;else if(p.x>innerWidth+50)p.x=-40;draw(p,now)}requestAnimationFrame(tick)}
requestAnimationFrame(tick)}
/* v11: how-to-order, menu board, copy fallback */
Object.assign(I.vi,{howL:"Cách đặt hàng",howH:"Đặt đơn chỉ với <em>4 bước.</em>",
s1t:"Chọn sản phẩm",s1p:"Bấm vào ảnh món bạn thích trong menu.",
s2t:"Chọn phân loại",s2p:"Chọn size (nếu có) rồi bấm <b>Đặt đơn qua Instagram</b>.",
autoB:"Tự động",s3t:"Tự chép đơn + mở chat",s3p:"Tên đơn hàng được <b>tự động sao chép</b>, và bạn được <b>tự động chuyển</b> sang khung chat Instagram của shop.",
s4t:"Dán và chờ shop rep",s4p:"Chỉ cần dán (paste) vào tin nhắn, gửi đi và chờ shop phản hồi nhé.",
autoNote:"✨ Các nàng bấm nút này: nội dung đơn tự copy và người đẹp được direct sang chat Instagram của shop. Nàng nhớ paste rùi send nha, đợi shop xíu shop confirm đơn liền ạa",
copyFail:"Chưa chép tự động được, bạn gõ tên món vào tin nhắn nhé.",
m1:"Túi Cói",m2:"Túi Tote",m3:"Túi Nơ",m4:"Pouch"});
Object.assign(I.en,{howL:"How to order",howH:"Order in just <em>4 steps.</em>",
s1t:"Pick a piece",s1p:"Tap the photo of the item you like in the menu.",
s2t:"Choose a variant",s2p:"Pick a size (if any), then tap <b>Order via Instagram</b>.",
autoB:"Automatic",s3t:"Auto-copy + open chat",s3p:"Your order name is <b>copied automatically</b>, and you are <b>taken straight</b> to the shop's Instagram chat.",
s4t:"Paste and wait",s4p:"Just paste it into the message, send it, and wait for the shop to reply.",
autoNote:"✨ Tap this button: your order details are copied automatically and you land straight in the shop's Instagram chat. Just paste and send, then give the shop a moment and your order will be confirmed right away!",
copyFail:"Could not copy automatically, please type the item name in your message.",
m1:"Straw bag",m2:"Tote bag",m3:"Bow bag",m4:"Pouch"});
/* order form strings */
Object.assign(I.vi,{cta1:"Đặt hàng qua Instagram",ftOrder:"Đặt hàng qua Instagram",
o_lbl:"Đơn hàng",o_h:"Thông tin <em>đặt hàng</em>",o_items:"Sản phẩm chọn mua & số lượng",o_name:"Họ và tên",o_phone:"Số điện thoại",o_phoneP:"VD: 0901 234 567",o_email:"Email",o_emailP:"VD: ten@email.com",pmColor:"Màu sắc",o_addr:"Địa chỉ giao hàng",o_pay:"Phương thức thanh toán",
o_payFull:"Chuyển khoản Full",o_payFullD:"Chuyển khoản toàn bộ giá trị đơn hàng.",o_payCod:"COD (Cọc 50k)",o_payCodD:"Cọc 50.000đ trước, phần còn lại thanh toán khi nhận hàng.",o_note:"Ghi chú (không bắt buộc)",
o_sub:"Tạm tính",o_ship:"Phí ship",o_total:"Tổng cộng",o_dep:"Cọc chuyển khoản trước",o_rest:"Thanh toán khi nhận hàng",o_due:"Cần chuyển khoản",
o_btn:"Đặt hàng",o_sending:"Đang gửi đơn…",o_add:"Thêm vào đơn",o_buy:"Đặt hàng ngay",o_added:"Đã thêm vào đơn hàng",o_fab:"Đơn hàng",o_empty:"Chưa có sản phẩm nào. Chọn một món bạn thích nhé.",o_pick:"Xem sản phẩm",
o_needItems:"Bạn chọn ít nhất một sản phẩm trước khi đặt hàng nhé.",o_err:"Chưa gửi được đơn, bạn thử lại giúp mình nhé.",
o_okH:"Đặt hàng thành công!",o_okP:"Cảm ơn người đẹp đã đặt đơn của Limdim! Shop sẽ sớm gửi email xác nhận trong 48h nên nàng nhớ check mail nhaa",o_code:"Mã đơn",o_inclShip:"đã gồm ship",
o_close:"Đóng",
autoNote:"Phí ship 20.000đ mỗi đơn. Thanh toán bằng chuyển khoản Full hoặc COD (cọc 50.000đ trước).",
howH:"Đặt đơn chỉ với <em>4 bước.</em>",s1t:"Chọn sản phẩm",s1p:"Bấm vào ảnh món bạn thích trong menu.",s2t:"Chọn phân loại",s2p:"Chọn size (nếu có), số lượng rồi bấm <b>Thêm vào đơn</b>.",s3t:"Điền thông tin",s3p:"Nhập tên, số điện thoại, địa chỉ và chọn cách thanh toán.",s4t:"Gửi đơn",s4p:"Bấm <b>Đặt hàng</b>, shop sẽ nhận đơn và liên hệ xác nhận."});
Object.assign(I.en,{cta1:"Order via Instagram",ftOrder:"Order via Instagram",
o_lbl:"Order",o_h:"Order <em>details</em>",o_items:"Items & quantity",o_name:"Full name",o_phone:"Phone number",o_phoneP:"e.g. 0901 234 567",o_email:"Email",o_emailP:"e.g. name@email.com",pmColor:"Color",o_addr:"Delivery address",o_pay:"Payment method",
o_payFull:"Full bank transfer",o_payFullD:"Transfer the full order value.",o_payCod:"COD (50k deposit)",o_payCodD:"Transfer a 50,000₫ deposit first, pay the rest on delivery.",o_note:"Note (optional)",
o_sub:"Subtotal",o_ship:"Shipping",o_total:"Total",o_dep:"Deposit to transfer now",o_rest:"Pay on delivery",o_due:"Amount to transfer",
o_btn:"Place order",o_sending:"Sending…",o_add:"Add to order",o_buy:"Order now",o_added:"Added to your order",o_fab:"Order",o_empty:"Nothing here yet. Pick something you love.",o_pick:"Browse products",
o_needItems:"Please choose at least one item before ordering.",o_err:"We couldn't send your order, please try again.",
o_okH:"Order placed!",o_okP:"Thank you for ordering from Limdim! The shop will send a confirmation email within 48 hours, so please remember to check your inbox.",o_code:"Order code",o_inclShip:"shipping included",
o_close:"Close",
autoNote:"Shipping is 20,000₫ per order. Pay by full bank transfer or COD (50,000₫ deposit first).",
howH:"Order in just <em>4 steps.</em>",s1t:"Pick a piece",s1p:"Tap the photo of the item you like in the menu.",s2t:"Choose a variant",s2p:"Pick a size (if any) and quantity, then tap <b>Add to order</b>.",s3t:"Fill in your details",s3p:"Enter your name, phone, address and choose how to pay.",s4t:"Send your order",s4p:"Tap <b>Place order</b>. The shop receives it and contacts you to confirm."});

/* ===== showroom extras ===== */
const SOLD_OUT=[];
const BEST_SELLER=[];
const BS_SVG='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.3C1 8.4 2.9 5 6.2 5c2.1 0 3.8 1.1 5.8 3.2C14 6.100 15.700 5 17.800 5c3.300 0 5.200 3.400 3.800 6.700C19.500 16.400 12 21 12 21z" fill="#fff" stroke="#e0607f" stroke-width="1.4" stroke-linejoin="round"/></svg><svg class="sp" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="currentColor"/></svg>';
const TAGH=(a,c)=>'<span class="cir">'+a+'<br>'+c+'</span>';
function badgeFor(name){const f=document.createDocumentFragment();
 if(BEST_SELLER.includes(name)){const b=document.createElement("span");b.className="bs-badge htag";b.innerHTML=TAGH("BEST","SELLER");f.appendChild(b)}
 if(SOLD_OUT.includes(name)){const b=document.createElement("span");b.className="so-badge htag";b.innerHTML=TAGH("SOLD","OUT!");f.appendChild(b)}
 return f}
function decorate(){document.querySelectorAll(".pc").forEach(card=>{const b=card.querySelector("[data-open]");if(!b)return;const name=P[+b.dataset.open][0],ph=card.querySelector(".ph");
 ph.querySelectorAll(".bs-badge,.so-badge").forEach(x=>x.remove());ph.appendChild(badgeFor(name));
 card.classList.toggle("is-soldout",SOLD_OUT.includes(name))})}
const syncTags=()=>{SOLD_OUT.length=0;BEST_SELLER.length=0;P.forEach(p=>{if(p[10]==="soldout")SOLD_OUT.push(p[0]);if(p[10]==="best")BEST_SELLER.push(p[0])})};
const _ra=renderAll;renderAll=function(){syncTags();_ra.apply(this,arguments);decorate();applyCat()};
const _dp=drawProduct;drawProduct=function(){_dp.apply(this,arguments);const ph=$("#pmi").closest(".ph");ph.querySelectorAll(".bs-badge,.so-badge").forEach(x=>x.remove());ph.appendChild(badgeFor(P[cur.i][0]))};

/* tiêu đề rơi từng chữ */
function dropH1(){const h=document.querySelector(".hero h1");if(!h)return;let n=0;h.setAttribute("aria-label",h.textContent);
 const walk=node=>{[...node.childNodes].forEach(c=>{if(c.nodeType===3){const fr=document.createDocumentFragment();
  c.textContent.split(/(\s+)/).forEach(tok=>{if(!tok)return;if(/^\s+$/.test(tok)){fr.appendChild(document.createTextNode(" "));return}
   const w=document.createElement("span");w.className="dw";w.setAttribute("aria-hidden","true");
   [...tok].forEach(ch=>{const s=document.createElement("span");s.className="dl";s.style.setProperty("--i",n++);s.textContent=ch;w.appendChild(s)});fr.appendChild(w)});
  c.replaceWith(fr)}else if(c.nodeType===1)walk(c)})};walk(h)}


/* booklet: bìa hé mở định kỳ để gợi ý có thể lật */
let hintOn=true,bookSeen=false;
const _turn=turn;turn=function(k,over,instant){if(!instant&&Math.max(0,Math.min(leaves.length-1,k))!==fl)hintOn=false;return _turn.apply(this,arguments)};
new IntersectionObserver(es=>es.forEach(e=>bookSeen=e.isIntersecting),{threshold:.45}).observe(book);
function peek(){if(RM||!hintOn||!bookSeen||fl!==0||drag||!leaves[0])return;const l=leaves[0];l.classList.remove("peek");void l.offsetWidth;l.classList.add("peek");l.addEventListener("animationend",()=>l.classList.remove("peek"),{once:true})}
setInterval(peek,4200);setTimeout(()=>{if(bookSeen)peek()},1200);

/* ===== danh mục + chế độ chỉnh sửa ===== */
const CATS=[];let CAT="all";
function catbarHTML(){const cnt=k=>k==="all"?P.length:P.filter(p=>p[5]===k).length;return `<span class="lbl cattitle">${L==="vi"?"Danh mục":"Categories"}</span>`+[["all",L==="vi"?"Tất cả":"All"],...CATS.map(k=>[k,G[L][k][0]])].map(([k,n])=>`<button type="button" data-go="${k}" aria-pressed="${CAT===k}"><span>${esc(n)}</span><small>${cnt(k)}</small></button>`).join("")}
function applyCat(){$$(".msec").forEach(x=>{x.hidden=false});const mi=$("#mini");if(mi)mi.hidden=!CATS.includes("C");$$("#mnav button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.go===CAT))}
function setCat(k){CAT=k;applyCat()}
const esc=x=>String(x).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const HEX=/^#[0-9a-f]{6}$/i;
function variantsOf(p){const v=p[11];if(v&&v.opts&&v.opts.length)return v;
if(p[1]&&p[1].length>1)return{k:"size",n:"",opts:[{n:"M",p:p[1][0]},{n:"L",p:p[1][1]}]};
if(p[9]&&p[9].length)return{k:"color",n:"",opts:p[9].map(c=>({n:c[0],h:c[2]}))};return null}
const vlab=v=>v.k==="size"?"Size":v.k==="color"?(L==="vi"?"Màu sắc":"Color"):(v.n||"Phân loại");
function drawVar(){const el=$("#pmv");if(!el)return;const v=variantsOf(P[cur.i]);
el.innerHTML=!v?"":`<span class="lbl">${esc(vlab(v))}</span><div class="vchips">${v.opts.map(o=>`<span class="vchip">${o.h&&HEX.test(o.h)?`<i style="background:${o.h}"></i>`:""}${esc(o.n)}${o.p?` <b>${m(o.p)}</b>`:""}</span>`).join("")}</div>`}
const _dp2=drawProduct;drawProduct=function(){_dp2.apply(this,arguments);drawVar()};
const cb=$("#catburger"),cn=$("#mnav");
const cClose=()=>{cn.classList.remove("open");cb.setAttribute("aria-expanded","false")};
cb.onclick=e=>{e.stopPropagation();const o=!cn.classList.contains("open");cn.classList.toggle("open",o);cb.setAttribute("aria-expanded",String(o))};
cn.addEventListener("click",e=>{if(e.target.closest("button"))cClose()});
document.addEventListener("click",e=>{if(!e.target.closest("#mnav")&&!e.target.closest("#catburger"))cClose()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")cClose()});
setLang(L,true);build(0);

/* ===== Nội dung từ Decap CMS (content/*.json) ===== */
const CONTENT={cats:"/content/categories.json",prods:"/content/products.json"};
const num=v=>{const n=Number(String(v==null?"":v).replace(/[^\d.]/g,""));return n>0?n:0};
function rowFromProduct(x){
 const t=x.variant_type||"none",base=num(x.price);
 const opts=(x.variants||[]).map(o=>({n:String(o.name||"").trim(),p:num(o.price),h:o.color||""})).filter(o=>o.n);
 let prices=base?[base]:[],v=null,colors=[];
 if(t!=="none"&&opts.length){
  v={k:t,n:t==="custom"?String(x.variant_label||"").trim()||"Phân loại":"",opts};
  const ps=opts.map(o=>o.p||base).filter(n=>n>0);
  if(ps.length){const lo=Math.min(...ps),hi=Math.max(...ps);prices=lo===hi?[lo]:[lo,hi]}
  if(t==="color")colors=opts.map(o=>[o.n,o.n,HEX.test(o.h)?o.h:"#f6c6d2"])}
 return [String(x.name||""),prices,x.spec_vi||"",x.spec_en||"",x.image||"",x.category||"",x.desc_vi||"",x.desc_en||"",(x.gallery||[]).filter(Boolean),colors,x.tag&&x.tag!=="none"?x.tag:"",v]}
function applyContent(cats,prods){
 CATS.length=0;P.length=0;for(const k of Object.keys(G.vi))delete G.vi[k];for(const k of Object.keys(G.en))delete G.en[k];
 (cats||[]).forEach(c=>{const id=String(c.id||"").trim();if(!id||!c.name_vi)return;
  CATS.push(id);G.vi[id]=[c.name_vi,c.label||"",c.desc_vi||""];G.en[id]=[c.name_en||c.name_vi,c.label||"",c.desc_en||c.desc_vi||""]});
 (prods||[]).forEach(x=>{if(x&&x.name&&x.image)P.push(rowFromProduct(x))})}
const getJSON=u=>fetch(u,{cache:"no-cache"}).then(r=>{if(!r.ok)throw new Error(u+" → "+r.status);return r.json()});
async function loadContent(){
 try{const [c,p]=await Promise.all([getJSON(CONTENT.cats),getJSON(CONTENT.prods)]);
  applyContent(c.categories,p.products);renderAll();
  if(location.hash.length>1){const el=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(el)el.scrollIntoView()}}
 catch(e){console.error(e);$("#mbody1a").innerHTML='<p class="lead" role="alert">Chưa tải được danh sách sản phẩm. Bạn tải lại trang giúp shop nhé.</p>'}}
setLang(L,true);build(0);loadContent();
