import{S as t,i as r,s,e,t as a,a as n,c as i,b as o,d as h,f as c,g as l,h as u,j as f,n as d,k as m}from"./client.2d8c9983.js";import{l as g}from"./stores.c162ea96.js";function p(t){let r,s;return{c(){r=e("a"),s=a("Login"),this.h()},l(t){r=i(t,"A",{href:!0});var e=o(r);s=h(e,"Login"),e.forEach(c),this.h()},h(){m(r,"href","/login")},m(t,e){u(t,r,e),f(r,s)},d(t){t&&c(r)}}}function $(t){let r,s;return{c(){r=e("a"),s=a("User"),this.h()},l(t){r=i(t,"A",{href:!0});var e=o(r);s=h(e,"User"),e.forEach(c),this.h()},h(){m(r,"href","/users")},m(t,e){u(t,r,e),f(r,s)},d(t){t&&c(r)}}}function v(t){let r,s,m,g;function v(t,r){return"yes"==t[0]?$:p}let E=v(t),b=E(t);return{c(){r=e("div"),s=e("h1"),m=a("Home di algorithm-net.tk"),g=n(),b.c()},l(t){r=i(t,"DIV",{});var e=o(r);s=i(e,"H1",{});var a=o(s);m=h(a,"Home di algorithm-net.tk"),a.forEach(c),g=l(e),b.l(e),e.forEach(c)},m(t,e){u(t,r,e),f(r,s),f(s,m),f(r,g),b.m(r,null)},p(t,[s]){E!==(E=v(t))&&(b.d(1),b=E(t),b&&(b.c(),b.m(r,null)))},i:d,o:d,d(t){t&&c(r),b.d()}}}function E(t,r,s){let e;g.subscribe(t=>{s(1,e=t)});let a,n;return t.$$.update=()=>{2&t.$$.dirty&&(a=e.name),2&t.$$.dirty&&s(0,n=e.login)},[n]}export default class extends t{constructor(t){super(),r(this,t,E,v,s,{})}}
