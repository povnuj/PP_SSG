import{f as o,u as c,c as u,a as i,t as r,F as n,o as m}from"./CwMEv63s.js";import{u as p}from"./CGlV-8PG.js";import"./DKqQJFKh.js";const _=["src","alt"],w={__name:"[id]",async setup(d){let e,l;const a=([e,l]=o(()=>$fetch("https://coffee-culture-3341b-default-rtdb.firebaseio.com/Products.json")),e=await e,l(),e),s=c(),t={title:a[s.query.ser].name,price:a[s.query.ser].price,url:a[s.query.ser].url};return p({title:t.title,ogTitle:"My Amazing Site",description:"This is my amazing site, let me tell you all about it.",ogDescription:"This is my amazing site, let me tell you all about it.",ogImage:"https://assets-global.website-files.com/658aa4775c8768ba42215cd2/660421c94eae48c1878d06d8_2_545202429576716370821.png",twitterCard:"summary_large_image"}),(g,y)=>(m(),u(n,null,[i("h1",null,r(t.title),1),i("img",{src:t.url,alt:t.title,style:{"max-width":"300px"}},null,8,_),i("h2",null,r(t.price),1)],64))}};export{w as default};
