function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function _(t){return b(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}let S;function E(t){S=t}function P(){if(!S)throw new Error("Function called outside component initialization");return S}const R=[],N=[],j=[],L=[],A=Promise.resolve();let C=!1;function O(t){j.push(t)}let U=!1;const T=new Set;function k(){if(!U){U=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];E(e),q(e.$$)}for(E(null),R.length=0;N.length;)N.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];T.has(e)||(T.add(e),e())}j.length=0}while(R.length);for(;L.length;)L.pop()();C=!1,U=!1,T.clear()}}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const I=new Set;let J;function B(){J={r:0,c:[],p:J}}function K(){J.r||o(J.c),J=J.p}function M(t,e){t&&t.i&&(I.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),J.c.push(()=>{I.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function D(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function z(t,e){t&&t.l(e)}function F(t,e,r){const{fragment:c,on_mount:i,on_destroy:a,after_update:l}=t.$$;c&&c.m(e,r),O(()=>{const e=i.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(O)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(R.push(t),C||(C=!0,A.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,s,c,i,a,l=[-1]){const u=S;E(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&W(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&M(e.$$.fragment),F(e,n.target,n.anchor),k()}E(u)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z=[];function tt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const et={};function nt(t){let e;const n=t[1].default,r=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(n,t,t[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&1&e&&a(r,n,t,t[0],e,null,null)},i(t){e||(M(r,t),e=!0)},o(t){V(r,t),e=!1},d(t){r&&r.d(t)}}}function rt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ot extends Q{constructor(t){super(),X(this,t,rt,nt,c,{})}}function st(e){let n,r,o,s,c,i,a,g=e[0].message+"";return{c(){n=p("h1"),r=d(e[1]),o=h(),s=p("p"),c=d(g),i=h(),a=m()},l(t){n=v(t,"H1",{});var l=y(n);r=b(l,e[1]),l.forEach(f),o=_(t),s=v(t,"P",{});var u=y(s);c=b(u,g),u.forEach(f),i=_(t),a=m()},m(t,e){u(t,n,e),l(n,r),u(t,o,e),u(t,s,e),l(s,c),u(t,i,e),u(t,a,e)},p(t,[e]){2&e&&x(r,t[1]),1&e&&g!==(g=t[0].message+"")&&x(c,g)},i:t,o:t,d(t){t&&f(n),t&&f(o),t&&f(s),t&&f(i),t&&f(a)}}}function ct(t,e,n){let{error:r}=e,{status:o}=e;return t.$$set=t=>{"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status)},[r,o]}class it extends Q{constructor(t){super(),X(this,t,ct,st,c,{error:0,status:1})}}function at(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&Y(n.$$.fragment),r=m()},l(t){n&&z(n.$$.fragment,t),r=m()},m(t,e){n&&F(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?D(s,[H(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){B();const t=n;V(t.$$.fragment,1,0,()=>{G(t,1)}),K()}c?(n=new c(i()),Y(n.$$.fragment),M(n.$$.fragment,1),F(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&M(n.$$.fragment,t),o=!0)},o(t){n&&V(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&G(n,t)}}}function lt(t){let e,n;return e=new it({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function ut(t){let e,n,r,o;const s=[lt,at],c=[];function i(t,e){return t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=i(t),e===a?c[e].p(t,o):(B(),V(c[a],1,1,()=>{c[a]=null}),K(),n=c[e],n||(n=c[e]=s[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){o||(M(n),o=!0)},o(t){V(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function ft(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[ut]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ot({props:s}),{c(){Y(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,e){F(n,t,e),r=!0},p(t,[e]){const r=12&e?D(o,[4&e&&{segment:t[2][0]},8&e&&H(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function pt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:i}=e,{level1:a=null}=e,{notify:l}=e;var u,f,p;return u=l,P().$$.after_update.push(u),f=et,p=r,P().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,i,a,r,l]}class dt extends Q{constructor(t){super(),X(this,t,pt,ft,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ht=[/^\/stores\/?$/],mt=[{js:()=>Promise.all([import("./index.0774c97a.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./login.7b0de84b.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./users.7662ef83.js"),]).then((function(t){return t[0]}))}],gt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/login\/?$/,parts:[{i:1}]},{pattern:/^\/users\/?$/,parts:[{i:2}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function $t(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{a(r.next(t))}catch(t){s(t)}}function i(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}a((r=r.apply(t,e||[])).next())}))}function yt(t){const e=Rt(new URL(t,document.baseURI));if(e)return zt&&t===zt.href||function(t,e){zt={href:t,promise:e}}(t,Wt(e)),zt.promise}let vt,bt=1;const _t="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},xt={};let wt,St,Et;function Pt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Rt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(wt))return null;let e=t.pathname.slice(wt.length);if(""===e&&(e="/"),!ht.some(t=>t.test(e)))for(let n=0;n<gt.length;n+=1){const r=gt[n],o=r.pattern.exec(e);if(o){const n=Pt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:i}}}}function Nt(t){clearTimeout(Et),Et=setTimeout(()=>{jt(t)},20)}function jt(t){const e=At(t.target);e&&"prefetch"===e.rel&&yt(e.href)}function Lt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=At(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Rt(o);if(s){Ut(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),_t.pushState({id:vt},"",o.href)}}function At(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ct(){return{x:pageXOffset,y:pageYOffset}}function Ot(t){if(xt[vt]=Ct(),t.state){const e=Rt(new URL(location.href));e?Ut(e,t.state.id):location.href=location.href}else bt=bt+1,function(t){vt=t}(bt),_t.replaceState({id:vt},"",location.href)}function Ut(t,e,n,r){return $t(this,void 0,void 0,(function*(){const o=!!e;if(o)vt=e;else{const t=Ct();xt[vt]=t,vt=e=++bt,xt[vt]=n?t:{x:0,y:0}}if(yield St(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=xt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),xt[vt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Tt(t,e={noscroll:!1,replaceState:!1}){const n=Rt(new URL(t,document.baseURI));return n?(_t[e.replaceState?"replaceState":"pushState"]({id:vt},"",t),Ut(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}const kt="undefined"!=typeof __SAPPER__&&__SAPPER__;let qt,It,Jt,Bt=!1,Kt=[],Mt="{}";const Vt={page:function(t){const e=tt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:tt(null),session:tt(kt&&kt.session)};let Dt,Ht;Vt.session.subscribe(t=>$t(void 0,void 0,void 0,(function*(){if(Dt=t,!Bt)return;Ht=!0;const e=Rt(new URL(location.href)),n=It={},{redirect:r,props:o,branch:s}=yield Wt(e);n===It&&(r?yield Tt(r.location,{replaceState:!0}):yield Gt(s,o,e.page))})));let Yt,zt=null;function Ft(t){return $t(this,void 0,void 0,(function*(){qt&&Vt.preloading.set(!0);const e=zt&&zt.href===t.href?zt.promise:Wt(t);zt=null;const n=It={},r=yield e,{redirect:o}=r;if(n===It)if(o)yield Tt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Gt(n,e,t.page)}}))}function Gt(t,e,n){return $t(this,void 0,void 0,(function*(){Vt.page.set(n),Vt.preloading.set(!1),qt?qt.$set(e):(e.stores={page:{subscribe:Vt.page.subscribe},preloading:{subscribe:Vt.preloading.subscribe},session:Vt.session},e.level0={props:yield Jt},e.notify=Vt.page.notify,qt=new dt({target:Yt,props:e,hydrate:!0})),Kt=t,Mt=JSON.stringify(n.query),Bt=!0,Ht=!1}))}function Wt(t){return $t(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Jt){const t=()=>{};Jt=kt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Dt)}let i,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map((e,i)=>$t(this,void 0,void 0,(function*(){const f=r[i];if(function(t,e,n,r){if(r!==Mt)return!0;const o=Kt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,l,o)&&(u=!0),s.segments[a]=r[i+1],!e)return{segment:f};const p=a++;if(!Ht&&!u&&Kt[i]&&Kt[i].part===e.i)return Kt[i];u=!1;const{default:d,preload:h}=yield function(t){const e=[t.js()];return Promise.all(e).then(t=>t[0])}(mt[e.i]);let m;return m=Bt||!kt.preloaded[i+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Dt):{}:kt.preloaded[i+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}var Xt;(function(t){Yt=t})({target:document.querySelector("#sapper")}.target),Xt=kt.baseUrl,wt=Xt,St=Ft,"scrollRestoration"in _t&&(_t.scrollRestoration="manual"),addEventListener("beforeunload",()=>{_t.scrollRestoration="auto"}),addEventListener("load",()=>{_t.scrollRestoration="manual"}),addEventListener("click",Lt),addEventListener("popstate",Ot),addEventListener("touchstart",jt),addEventListener("mousemove",Nt),kt.error?Promise.resolve().then(()=>function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:i}=kt;Jt||(Jt=s&&s[0]);const a={error:i,status:c,session:o,level0:{props:Jt},level1:{props:{status:c,error:i},component:it},segments:s},l=Pt(r);Gt([],a,{host:e,path:n,query:l,params:{}})}(new URL(location.href))):Promise.resolve().then(()=>{const{hash:t,href:e}=location;_t.replaceState({id:bt},"",e);const n=Rt(new URL(location.href));if(n)return Ut(n,bt,!0,t)});export{Q as S,h as a,y as b,v as c,b as d,p as e,f,_ as g,u as h,X as i,l as j,$ as k,w as l,g as m,t as n,x as o,o as r,c as s,d as t,tt as w};
