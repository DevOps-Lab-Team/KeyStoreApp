import{R as j,t as d,d as g,L as ge,c as q,g as we,r as Q,j as c,O as qe}from"./index-Dx0kNidJ.js";var me={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Y=j.createContext&&j.createContext(me),Ie=["attr","size","title"];function Pe(e,r){if(e==null)return{};var t=Ee(e,r),n,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function Ee(e,r){if(e==null)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},I.apply(this,arguments)}function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Z(Object(t),!0).forEach(function(n){Re(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Re(e,r,t){return r=Ce(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Ce(e){var r=Ne(e,"string");return typeof r=="symbol"?r:r+""}function Ne(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function he(e){return e&&e.map((r,t)=>j.createElement(r.tag,P({key:t},r.attr),he(r.child)))}function ve(e){return r=>j.createElement(Le,I({attr:P({},e.attr)},r),he(e.child))}function Le(e){var r=t=>{var{attr:n,size:a,title:s}=e,l=Pe(e,Ie),f=a||t.size||"1em",u;return t.className&&(u=t.className),e.className&&(u=(u?u+" ":"")+e.className),j.createElement("svg",I({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:u,style:P(P({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&j.createElement("title",null,s),e.children)};return Y!==void 0?j.createElement(Y.Consumer,null,t=>r(t)):r(me)}function $e(e){return ve({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(e)}function ke(e){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}const Be=g.header`
  width: 100%;
  height: 72px;
  padding: 0 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${d.palette.gray[500]};
  border-bottom: 2px solid ${d.palette.red[500]};
`,ze=g.div`
  font-size: 24px;
  font-weight: bold;
  color: ${d.palette.gray[100]};
  cursor: pointer;
`,Ge=g.nav`
  display: flex;
  gap: 32px;
  align-items: center;
`,We=g(ge)`
  color: ${d.palette.gray[100]};
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${d.palette.red[500]};
  }
`,De=g.div`
  display: flex;
  gap: 24px;
  align-items: center;
`,He=g.button`
  background: none;
  border: none;
  color: ${d.palette.gray[100]};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  transition: color 0.2s;

  &:hover {
    color: ${d.palette.red[500]};
  }
`,Me=g.button`
  background: none;
  border: none;
  color: ${d.palette.gray[100]};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  transition: color 0.2s;

  &:hover {
    color: ${d.palette.red[500]};
  }
`,v={HeaderWrapper:Be,Logo:ze,Nav:Ge,NavLink:We,UserActions:De,CartButton:He,ProfileButton:Me};var N,ee;function ye(){if(ee)return N;ee=1;function e(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}return N=e,N}var L,re;function Ae(){if(re)return L;re=1;var e=typeof q=="object"&&q&&q.Object===Object&&q;return L=e,L}var $,te;function je(){if(te)return $;te=1;var e=Ae(),r=typeof self=="object"&&self&&self.Object===Object&&self,t=e||r||Function("return this")();return $=t,$}var k,ne;function Fe(){if(ne)return k;ne=1;var e=je(),r=function(){return e.Date.now()};return k=r,k}var B,ie;function Ue(){if(ie)return B;ie=1;var e=/\s/;function r(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}return B=r,B}var z,ae;function Ve(){if(ae)return z;ae=1;var e=Ue(),r=/^\s+/;function t(n){return n&&n.slice(0,e(n)+1).replace(r,"")}return z=t,z}var G,oe;function xe(){if(oe)return G;oe=1;var e=je(),r=e.Symbol;return G=r,G}var W,ce;function Ke(){if(ce)return W;ce=1;var e=xe(),r=Object.prototype,t=r.hasOwnProperty,n=r.toString,a=e?e.toStringTag:void 0;function s(l){var f=t.call(l,a),u=l[a];try{l[a]=void 0;var i=!0}catch{}var b=n.call(l);return i&&(f?l[a]=u:delete l[a]),b}return W=s,W}var D,se;function Xe(){if(se)return D;se=1;var e=Object.prototype,r=e.toString;function t(n){return r.call(n)}return D=t,D}var H,ue;function Je(){if(ue)return H;ue=1;var e=xe(),r=Ke(),t=Xe(),n="[object Null]",a="[object Undefined]",s=e?e.toStringTag:void 0;function l(f){return f==null?f===void 0?a:n:s&&s in Object(f)?r(f):t(f)}return H=l,H}var M,le;function Qe(){if(le)return M;le=1;function e(r){return r!=null&&typeof r=="object"}return M=e,M}var A,fe;function Ye(){if(fe)return A;fe=1;var e=Je(),r=Qe(),t="[object Symbol]";function n(a){return typeof a=="symbol"||r(a)&&e(a)==t}return A=n,A}var F,de;function Ze(){if(de)return F;de=1;var e=Ve(),r=ye(),t=Ye(),n=NaN,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;function u(i){if(typeof i=="number")return i;if(t(i))return n;if(r(i)){var b=typeof i.valueOf=="function"?i.valueOf():i;i=r(b)?b+"":b}if(typeof i!="string")return i===0?i:+i;i=e(i);var m=s.test(i);return m||l.test(i)?f(i.slice(2),m?2:8):a.test(i)?n:+i}return F=u,F}var U,be;function er(){if(be)return U;be=1;var e=ye(),r=Fe(),t=Ze(),n="Expected a function",a=Math.max,s=Math.min;function l(f,u,i){var b,m,_,x,p,y,O=0,V=!1,S=!1,E=!0;if(typeof f!="function")throw new TypeError(n);u=t(u)||0,e(i)&&(V=!!i.leading,S="maxWait"in i,_=S?a(t(i.maxWait)||0,u):_,E="trailing"in i?!!i.trailing:E);function R(o){var h=b,T=m;return b=m=void 0,O=o,x=f.apply(T,h),x}function Oe(o){return O=o,p=setTimeout(w,u),V?R(o):x}function Se(o){var h=o-y,T=o-O,J=u-h;return S?s(J,_-T):J}function K(o){var h=o-y,T=o-O;return y===void 0||h>=u||h<0||S&&T>=_}function w(){var o=r();if(K(o))return X(o);p=setTimeout(w,Se(o))}function X(o){return p=void 0,E&&b?R(o):(b=m=void 0,x)}function Te(){p!==void 0&&clearTimeout(p),O=0,b=y=m=p=void 0}function _e(){return p===void 0?x:X(r())}function C(){var o=r(),h=K(o);if(b=arguments,m=this,y=o,h){if(p===void 0)return Oe(y);if(S)return clearTimeout(p),p=setTimeout(w,u),R(y)}return p===void 0&&(p=setTimeout(w,u)),x}return C.cancel=Te,C.flush=_e,C}return U=l,U}var rr=er();const tr=we(rr),nr=g.div`
  display: flex;
  align-items: center;
  background: ${d.palette.gray[400]};
  border-radius: 8px;
  padding: 8px 16px;
  width: 300px;
`,ir=g.input`
  background: none;
  border: none;
  color: ${d.palette.gray[100]};
  width: 100%;
  outline: none;
  font-size: 14px;

  &::placeholder {
    color: ${d.palette.gray[300]};
  }
`,pe={SearchBar:nr,SearchInput:ir},ar=({onSearch:e})=>{const[r,t]=Q.useState(""),n=Q.useCallback(tr(s=>{e(s)},500),[]),a=s=>{const l=s.target.value;t(l),n(l)};return c.jsx(pe.SearchBar,{children:c.jsx(pe.SearchInput,{value:r,onChange:a,placeholder:"Поиск игр..."})})},or=()=>{const e=r=>{console.log("Search query:",r)};return c.jsxs(v.HeaderWrapper,{children:[c.jsx(ge,{to:"/home",children:c.jsx(v.Logo,{children:"GameKeys"})}),c.jsxs(v.Nav,{children:[c.jsx(v.NavLink,{to:"/catalog",children:"Каталог"}),c.jsx(v.NavLink,{to:"/deals",children:"Специальные предложения"})]}),c.jsx(ar,{onSearch:e}),c.jsxs(v.UserActions,{children:[c.jsxs(v.CartButton,{children:[c.jsx($e,{}),c.jsx("span",{children:"Корзина"})]}),c.jsxs(v.ProfileButton,{children:[c.jsx(ke,{}),c.jsx("span",{children:"Профиль"})]})]})]})},cr=g.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background: ${d.palette.primary};
`,sr={LayoutWrapper:cr},lr=()=>c.jsxs(sr.LayoutWrapper,{children:[c.jsx(or,{}),c.jsx(qe,{})]});export{lr as MainLayout};
