var Bg=Object.defineProperty;var kg=(i,t,e)=>t in i?Bg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var El=(i,t,e)=>kg(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uu(i){const t=Object.create(null);for(const e of i.split(","))t[e]=1;return e=>e in t}const ge={},_r=[],hi=()=>{},fp=()=>!1,nl=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),hu=i=>i.startsWith("onUpdate:"),Ze=Object.assign,du=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},zg=Object.prototype.hasOwnProperty,ce=(i,t)=>zg.call(i,t),qt=Array.isArray,yr=i=>Io(i)==="[object Map]",pp=i=>Io(i)==="[object Set]",th=i=>Io(i)==="[object Date]",$t=i=>typeof i=="function",Be=i=>typeof i=="string",fi=i=>typeof i=="symbol",he=i=>i!==null&&typeof i=="object",mp=i=>(he(i)||$t(i))&&$t(i.then)&&$t(i.catch),gp=Object.prototype.toString,Io=i=>gp.call(i),Vg=i=>Io(i).slice(8,-1),vp=i=>Io(i)==="[object Object]",fu=i=>Be(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,ao=uu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),il=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},Hg=/-\w/g,hn=il(i=>i.replace(Hg,t=>t.slice(1).toUpperCase())),Gg=/\B([A-Z])/g,Gs=il(i=>i.replace(Gg,"-$1").toLowerCase()),sl=il(i=>i.charAt(0).toUpperCase()+i.slice(1)),Tl=il(i=>i?`on${sl(i)}`:""),oi=(i,t)=>!Object.is(i,t),Ca=(i,...t)=>{for(let e=0;e<i.length;e++)i[e](...t)},_p=(i,t,e,n=!1)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,writable:n,value:e})},pu=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let eh;const rl=()=>eh||(eh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ye(i){if(qt(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],s=Be(n)?$g(n):Ye(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(Be(i)||he(i))return i}const Wg=/;(?![^(]*\))/g,qg=/:([^]+)/,Xg=/\/\*[^]*?\*\//g;function $g(i){const t={};return i.replace(Xg,"").split(Wg).forEach(e=>{if(e){const n=e.split(qg);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Pe(i){let t="";if(Be(i))t=i;else if(qt(i))for(let e=0;e<i.length;e++){const n=Pe(i[e]);n&&(t+=n+" ")}else if(he(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const jg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yg=uu(jg);function yp(i){return!!i||i===""}function Kg(i,t){if(i.length!==t.length)return!1;let e=!0;for(let n=0;e&&n<i.length;n++)e=mu(i[n],t[n]);return e}function mu(i,t){if(i===t)return!0;let e=th(i),n=th(t);if(e||n)return e&&n?i.getTime()===t.getTime():!1;if(e=fi(i),n=fi(t),e||n)return i===t;if(e=qt(i),n=qt(t),e||n)return e&&n?Kg(i,t):!1;if(e=he(i),n=he(t),e||n){if(!e||!n)return!1;const s=Object.keys(i).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!mu(i[o],t[o]))return!1}}return String(i)===String(t)}const xp=i=>!!(i&&i.__v_isRef===!0),_t=i=>Be(i)?i:i==null?"":qt(i)||he(i)&&(i.toString===gp||!$t(i.toString))?xp(i)?_t(i.value):JSON.stringify(i,Mp,2):String(i),Mp=(i,t)=>xp(t)?Mp(i,t.value):yr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,s],r)=>(e[Al(n,r)+" =>"]=s,e),{})}:pp(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Al(e))}:fi(t)?Al(t):he(t)&&!qt(t)&&!vp(t)?String(t):t,Al=(i,t="")=>{var e;return fi(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gn;class Zg{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=gn,!t&&gn&&(this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=gn;try{return gn=this,t()}finally{gn=e}}}on(){++this._on===1&&(this.prevScope=gn,gn=this)}off(){this._on>0&&--this._on===0&&(gn=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Jg(){return gn}let ye;const Cl=new WeakSet;class bp{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gn&&gn.active&&gn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cl.has(this)&&(Cl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nh(this),Ep(this);const t=ye,e=Wn;ye=this,Wn=!0;try{return this.fn()}finally{Tp(this),ye=t,Wn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)_u(t);this.deps=this.depsTail=void 0,nh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kc(this)&&this.run()}get dirty(){return kc(this)}}let Sp=0,lo,co;function wp(i,t=!1){if(i.flags|=8,t){i.next=co,co=i;return}i.next=lo,lo=i}function gu(){Sp++}function vu(){if(--Sp>0)return;if(co){let t=co;for(co=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let i;for(;lo;){let t=lo;for(lo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){i||(i=n)}t=e}}if(i)throw i}function Ep(i){for(let t=i.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Tp(i){let t,e=i.depsTail,n=e;for(;n;){const s=n.prevDep;n.version===-1?(n===e&&(e=s),_u(n),Qg(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=t,i.depsTail=e}function kc(i){for(let t=i.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ap(t.dep.computed)||t.dep.version!==t.version))return!0;return!!i._dirty}function Ap(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===bo)||(i.globalVersion=bo,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!kc(i))))return;i.flags|=2;const t=i.dep,e=ye,n=Wn;ye=i,Wn=!0;try{Ep(i);const s=i.fn(i._value);(t.version===0||oi(s,i._value))&&(i.flags|=128,i._value=s,t.version++)}catch(s){throw t.version++,s}finally{ye=e,Wn=n,Tp(i),i.flags&=-3}}function _u(i,t=!1){const{dep:e,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),e.subs===i&&(e.subs=n,!n&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)_u(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Qg(i){const{prevDep:t,nextDep:e}=i;t&&(t.nextDep=e,i.prevDep=void 0),e&&(e.prevDep=t,i.nextDep=void 0)}let Wn=!0;const Cp=[];function zi(){Cp.push(Wn),Wn=!1}function Vi(){const i=Cp.pop();Wn=i===void 0?!0:i}function nh(i){const{cleanup:t}=i;if(i.cleanup=void 0,t){const e=ye;ye=void 0;try{t()}finally{ye=e}}}let bo=0;class tv{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ye||!Wn||ye===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ye)e=this.activeLink=new tv(ye,this),ye.deps?(e.prevDep=ye.depsTail,ye.depsTail.nextDep=e,ye.depsTail=e):ye.deps=ye.depsTail=e,Rp(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const n=e.nextDep;n.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=n),e.prevDep=ye.depsTail,e.nextDep=void 0,ye.depsTail.nextDep=e,ye.depsTail=e,ye.deps===e&&(ye.deps=n)}return e}trigger(t){this.version++,bo++,this.notify(t)}notify(t){gu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{vu()}}}function Rp(i){if(i.dep.sc++,i.sub.flags&4){const t=i.dep.computed;if(t&&!i.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Rp(n)}const e=i.dep.subs;e!==i&&(i.prevSub=e,e&&(e.nextSub=i)),i.dep.subs=i}}const zc=new WeakMap,Bs=Symbol(""),Vc=Symbol(""),So=Symbol("");function en(i,t,e){if(Wn&&ye){let n=zc.get(i);n||zc.set(i,n=new Map);let s=n.get(e);s||(n.set(e,s=new yu),s.map=n,s.key=e),s.track()}}function Ui(i,t,e,n,s,r){const o=zc.get(i);if(!o){bo++;return}const a=l=>{l&&l.trigger()};if(gu(),t==="clear")o.forEach(a);else{const l=qt(i),c=l&&fu(e);if(l&&e==="length"){const u=Number(n);o.forEach((h,d)=>{(d==="length"||d===So||!fi(d)&&d>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(So)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Bs)),yr(i)&&a(o.get(Vc)));break;case"delete":l||(a(o.get(Bs)),yr(i)&&a(o.get(Vc)));break;case"set":yr(i)&&a(o.get(Bs));break}}vu()}function qs(i){const t=le(i);return t===i?t:(en(t,"iterate",So),Ln(i)?t:t.map(Xn))}function ol(i){return en(i=le(i),"iterate",So),i}function ii(i,t){return Hi(i)?Er(ks(i)?Xn(t):t):Xn(t)}const ev={__proto__:null,[Symbol.iterator](){return Rl(this,Symbol.iterator,i=>ii(this,i))},concat(...i){return qs(this).concat(...i.map(t=>qt(t)?qs(t):t))},entries(){return Rl(this,"entries",i=>(i[1]=ii(this,i[1]),i))},every(i,t){return _i(this,"every",i,t,void 0,arguments)},filter(i,t){return _i(this,"filter",i,t,e=>e.map(n=>ii(this,n)),arguments)},find(i,t){return _i(this,"find",i,t,e=>ii(this,e),arguments)},findIndex(i,t){return _i(this,"findIndex",i,t,void 0,arguments)},findLast(i,t){return _i(this,"findLast",i,t,e=>ii(this,e),arguments)},findLastIndex(i,t){return _i(this,"findLastIndex",i,t,void 0,arguments)},forEach(i,t){return _i(this,"forEach",i,t,void 0,arguments)},includes(...i){return Pl(this,"includes",i)},indexOf(...i){return Pl(this,"indexOf",i)},join(i){return qs(this).join(i)},lastIndexOf(...i){return Pl(this,"lastIndexOf",i)},map(i,t){return _i(this,"map",i,t,void 0,arguments)},pop(){return Gr(this,"pop")},push(...i){return Gr(this,"push",i)},reduce(i,...t){return ih(this,"reduce",i,t)},reduceRight(i,...t){return ih(this,"reduceRight",i,t)},shift(){return Gr(this,"shift")},some(i,t){return _i(this,"some",i,t,void 0,arguments)},splice(...i){return Gr(this,"splice",i)},toReversed(){return qs(this).toReversed()},toSorted(i){return qs(this).toSorted(i)},toSpliced(...i){return qs(this).toSpliced(...i)},unshift(...i){return Gr(this,"unshift",i)},values(){return Rl(this,"values",i=>ii(this,i))}};function Rl(i,t,e){const n=ol(i),s=n[t]();return n!==i&&!Ln(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const nv=Array.prototype;function _i(i,t,e,n,s,r){const o=ol(i),a=o!==i&&!Ln(i),l=o[t];if(l!==nv[t]){const h=l.apply(i,r);return a?Xn(h):h}let c=e;o!==i&&(a?c=function(h,d){return e.call(this,ii(i,h),d,i)}:e.length>2&&(c=function(h,d){return e.call(this,h,d,i)}));const u=l.call(o,c,n);return a&&s?s(u):u}function ih(i,t,e,n){const s=ol(i),r=s!==i&&!Ln(i);let o=e,a=!1;s!==i&&(r?(a=n.length===0,o=function(c,u,h){return a&&(a=!1,c=ii(i,c)),e.call(this,c,ii(i,u),h,i)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,i)}));const l=s[t](o,...n);return a?ii(i,l):l}function Pl(i,t,e){const n=le(i);en(n,"iterate",So);const s=n[t](...e);return(s===-1||s===!1)&&bu(e[0])?(e[0]=le(e[0]),n[t](...e)):s}function Gr(i,t,e=[]){zi(),gu();const n=le(i)[t].apply(i,e);return vu(),Vi(),n}const iv=uu("__proto__,__v_isRef,__isVue"),Pp=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(fi));function sv(i){fi(i)||(i=String(i));const t=le(this);return en(t,"has",i),t.hasOwnProperty(i)}class Ip{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return n===(s?r?pv:Up:r?Dp:Np).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=qt(t);if(!s){let l;if(o&&(l=ev[e]))return l;if(e==="hasOwnProperty")return sv}const a=Reflect.get(t,e,sn(t)?t:n);if((fi(e)?Pp.has(e):iv(e))||(s||en(t,"get",e),r))return a;if(sn(a)){const l=o&&fu(e)?a:a.value;return s&&he(l)?Gc(l):l}return he(a)?s?Gc(a):al(a):a}}class Lp extends Ip{constructor(t=!1){super(!1,t)}set(t,e,n,s){let r=t[e];const o=qt(t)&&fu(e);if(!this._isShallow){const c=Hi(r);if(!Ln(n)&&!Hi(n)&&(r=le(r),n=le(n)),!o&&sn(r)&&!sn(n))return c||(r.value=n),!0}const a=o?Number(e)<t.length:ce(t,e),l=Reflect.set(t,e,n,sn(t)?t:s);return t===le(s)&&(a?oi(n,r)&&Ui(t,"set",e,n):Ui(t,"add",e,n)),l}deleteProperty(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ui(t,"delete",e,void 0),s}has(t,e){const n=Reflect.has(t,e);return(!fi(e)||!Pp.has(e))&&en(t,"has",e),n}ownKeys(t){return en(t,"iterate",qt(t)?"length":Bs),Reflect.ownKeys(t)}}class rv extends Ip{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ov=new Lp,av=new rv,lv=new Lp(!0);const Hc=i=>i,Ho=i=>Reflect.getPrototypeOf(i);function cv(i,t,e){return function(...n){const s=this.__v_raw,r=le(s),o=yr(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=e?Hc:t?Er:Xn;return!t&&en(r,"iterate",l?Vc:Bs),Ze(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function Go(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function uv(i,t){const e={get(s){const r=this.__v_raw,o=le(r),a=le(s);i||(oi(s,a)&&en(o,"get",s),en(o,"get",a));const{has:l}=Ho(o),c=t?Hc:i?Er:Xn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&en(le(s),"iterate",Bs),s.size},has(s){const r=this.__v_raw,o=le(r),a=le(s);return i||(oi(s,a)&&en(o,"has",s),en(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=le(a),c=t?Hc:i?Er:Xn;return!i&&en(l,"iterate",Bs),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ze(e,i?{add:Go("add"),set:Go("set"),delete:Go("delete"),clear:Go("clear")}:{add(s){const r=le(this),o=Ho(r),a=le(s),l=!t&&!Ln(s)&&!Hi(s)?a:s;return o.has.call(r,l)||oi(s,l)&&o.has.call(r,s)||oi(a,l)&&o.has.call(r,a)||(r.add(l),Ui(r,"add",l,l)),this},set(s,r){!t&&!Ln(r)&&!Hi(r)&&(r=le(r));const o=le(this),{has:a,get:l}=Ho(o);let c=a.call(o,s);c||(s=le(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?oi(r,u)&&Ui(o,"set",s,r):Ui(o,"add",s,r),this},delete(s){const r=le(this),{has:o,get:a}=Ho(r);let l=o.call(r,s);l||(s=le(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ui(r,"delete",s,void 0),c},clear(){const s=le(this),r=s.size!==0,o=s.clear();return r&&Ui(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=cv(s,i,t)}),e}function xu(i,t){const e=uv(i,t);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(ce(e,s)&&s in n?e:n,s,r)}const hv={get:xu(!1,!1)},dv={get:xu(!1,!0)},fv={get:xu(!0,!1)};const Np=new WeakMap,Dp=new WeakMap,Up=new WeakMap,pv=new WeakMap;function mv(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gv(i){return i.__v_skip||!Object.isExtensible(i)?0:mv(Vg(i))}function al(i){return Hi(i)?i:Mu(i,!1,ov,hv,Np)}function Fp(i){return Mu(i,!1,lv,dv,Dp)}function Gc(i){return Mu(i,!0,av,fv,Up)}function Mu(i,t,e,n,s){if(!he(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const r=gv(i);if(r===0)return i;const o=s.get(i);if(o)return o;const a=new Proxy(i,r===2?n:e);return s.set(i,a),a}function ks(i){return Hi(i)?ks(i.__v_raw):!!(i&&i.__v_isReactive)}function Hi(i){return!!(i&&i.__v_isReadonly)}function Ln(i){return!!(i&&i.__v_isShallow)}function bu(i){return i?!!i.__v_raw:!1}function le(i){const t=i&&i.__v_raw;return t?le(t):i}function vv(i){return!ce(i,"__v_skip")&&Object.isExtensible(i)&&_p(i,"__v_skip",!0),i}const Xn=i=>he(i)?al(i):i,Er=i=>he(i)?Gc(i):i;function sn(i){return i?i.__v_isRef===!0:!1}function Wt(i){return Op(i,!1)}function _v(i){return Op(i,!0)}function Op(i,t){return sn(i)?i:new yv(i,t)}class yv{constructor(t,e){this.dep=new yu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:le(t),this._value=e?t:Xn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this.__v_isShallow||Ln(t)||Hi(t);t=n?t:le(t),oi(t,e)&&(this._rawValue=t,this._value=n?t:Xn(t),this.dep.trigger())}}function ki(i){return sn(i)?i.value:i}const xv={get:(i,t,e)=>t==="__v_raw"?i:ki(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const s=i[t];return sn(s)&&!sn(e)?(s.value=e,!0):Reflect.set(i,t,e,n)}};function Bp(i){return ks(i)?i:new Proxy(i,xv)}class Mv{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new yu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return wp(this,!0),!0}get value(){const t=this.dep.track();return Ap(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function bv(i,t,e=!1){let n,s;return $t(i)?n=i:(n=i.get,s=i.set),new Mv(n,s,e)}const Wo={},Ua=new WeakMap;let Rs;function Sv(i,t=!1,e=Rs){if(e){let n=Ua.get(e);n||Ua.set(e,n=[]),n.push(i)}}function wv(i,t,e=ge){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=S=>s?S:Ln(S)||s===!1||s===0?Fi(S,1):Fi(S);let u,h,d,f,g=!1,v=!1;if(sn(i)?(h=()=>i.value,g=Ln(i)):ks(i)?(h=()=>c(i),g=!0):qt(i)?(v=!0,g=i.some(S=>ks(S)||Ln(S)),h=()=>i.map(S=>{if(sn(S))return S.value;if(ks(S))return c(S);if($t(S))return l?l(S,2):S()})):$t(i)?t?h=l?()=>l(i,2):i:h=()=>{if(d){zi();try{d()}finally{Vi()}}const S=Rs;Rs=u;try{return l?l(i,3,[f]):i(f)}finally{Rs=S}}:h=hi,t&&s){const S=h,P=s===!0?1/0:s;h=()=>Fi(S(),P)}const p=Jg(),m=()=>{u.stop(),p&&p.active&&du(p.effects,u)};if(r&&t){const S=t;t=(...P)=>{S(...P),m()}}let y=v?new Array(i.length).fill(Wo):Wo;const _=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const P=u.run();if(s||g||(v?P.some((T,A)=>oi(T,y[A])):oi(P,y))){d&&d();const T=Rs;Rs=u;try{const A=[P,y===Wo?void 0:v&&y[0]===Wo?[]:y,f];y=P,l?l(t,3,A):t(...A)}finally{Rs=T}}}else u.run()};return a&&a(_),u=new bp(h),u.scheduler=o?()=>o(_,!1):_,f=S=>Sv(S,!1,u),d=u.onStop=()=>{const S=Ua.get(u);if(S){if(l)l(S,4);else for(const P of S)P();Ua.delete(u)}},t?n?_(!0):y=u.run():o?o(_.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Fi(i,t=1/0,e){if(t<=0||!he(i)||i.__v_skip||(e=e||new Map,(e.get(i)||0)>=t))return i;if(e.set(i,t),t--,sn(i))Fi(i.value,t,e);else if(qt(i))for(let n=0;n<i.length;n++)Fi(i[n],t,e);else if(pp(i)||yr(i))i.forEach(n=>{Fi(n,t,e)});else if(vp(i)){for(const n in i)Fi(i[n],t,e);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Fi(i[n],t,e)}return i}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lo(i,t,e,n){try{return n?i(...n):i()}catch(s){ll(s,t,e)}}function pi(i,t,e,n){if($t(i)){const s=Lo(i,t,e,n);return s&&mp(s)&&s.catch(r=>{ll(r,t,e)}),s}if(qt(i)){const s=[];for(let r=0;r<i.length;r++)s.push(pi(i[r],t,e,n));return s}}function ll(i,t,e,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ge;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](i,l,c)===!1)return}a=a.parent}if(r){zi(),Lo(r,null,10,[i,l,c]),Vi();return}}Ev(i,e,s,n,o)}function Ev(i,t,e,n=!0,s=!1){if(s)throw i;console.error(i)}const un=[];let ei=-1;const xr=[];let os=null,fr=0;const kp=Promise.resolve();let Fa=null;function zs(i){const t=Fa||kp;return i?t.then(this?i.bind(this):i):t}function Tv(i){let t=ei+1,e=un.length;for(;t<e;){const n=t+e>>>1,s=un[n],r=wo(s);r<i||r===i&&s.flags&2?t=n+1:e=n}return t}function Su(i){if(!(i.flags&1)){const t=wo(i),e=un[un.length-1];!e||!(i.flags&2)&&t>=wo(e)?un.push(i):un.splice(Tv(t),0,i),i.flags|=1,zp()}}function zp(){Fa||(Fa=kp.then(Hp))}function Av(i){qt(i)?xr.push(...i):os&&i.id===-1?os.splice(fr+1,0,i):i.flags&1||(xr.push(i),i.flags|=1),zp()}function sh(i,t,e=ei+1){for(;e<un.length;e++){const n=un[e];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;un.splice(e,1),e--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Vp(i){if(xr.length){const t=[...new Set(xr)].sort((e,n)=>wo(e)-wo(n));if(xr.length=0,os){os.push(...t);return}for(os=t,fr=0;fr<os.length;fr++){const e=os[fr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}os=null,fr=0}}const wo=i=>i.id==null?i.flags&2?-1:1/0:i.id;function Hp(i){try{for(ei=0;ei<un.length;ei++){const t=un[ei];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Lo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ei<un.length;ei++){const t=un[ei];t&&(t.flags&=-2)}ei=-1,un.length=0,Vp(),Fa=null,(un.length||xr.length)&&Hp()}}let wn=null,Gp=null;function Oa(i){const t=wn;return wn=i,Gp=i&&i.type.__scopeId||null,t}function Cv(i,t=wn,e){if(!t||i._n)return i;const n=(...s)=>{n._d&&za(-1);const r=Oa(t);let o;try{o=i(...s)}finally{Oa(r),n._d&&za(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function vs(i,t){if(wn===null)return i;const e=dl(wn),n=i.dirs||(i.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ge]=t[s];r&&($t(r)&&(r={mounted:r,updated:r}),r.deep&&Fi(o),n.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function _s(i,t,e,n){const s=i.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(zi(),pi(l,e,8,[i.el,a,i,t]),Vi())}}function Ra(i,t){if(nn){let e=nn.provides;const n=nn.parent&&nn.parent.provides;n===e&&(e=nn.provides=Object.create(n)),e[i]=t}}function di(i,t,e=!1){const n=A_();if(n||Mr){let s=Mr?Mr._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return e&&$t(t)?t.call(n&&n.proxy):t}}const Rv=Symbol.for("v-scx"),Pv=()=>di(Rv);function uo(i,t,e){return Wp(i,t,e)}function Wp(i,t,e=ge){const{immediate:n,deep:s,flush:r,once:o}=e,a=Ze({},e),l=t&&n||!t&&r!=="post";let c;if(To){if(r==="sync"){const f=Pv();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=hi,f.resume=hi,f.pause=hi,f}}const u=nn;a.call=(f,g,v)=>pi(f,u,g,v);let h=!1;r==="post"?a.scheduler=f=>{mn(f,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,g)=>{g?f():Su(f)}),a.augmentJob=f=>{t&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=wv(i,t,a);return To&&(c?c.push(d):l&&d()),d}function Iv(i,t,e){const n=this.proxy,s=Be(i)?i.includes(".")?qp(n,i):()=>n[i]:i.bind(n,n);let r;$t(t)?r=t:(r=t.handler,e=t);const o=No(this),a=Wp(s,r.bind(n),e);return o(),a}function qp(i,t){const e=t.split(".");return()=>{let n=i;for(let s=0;s<e.length&&n;s++)n=n[e[s]];return n}}const Lv=Symbol("_vte"),Nv=i=>i.__isTeleport,Dv=Symbol("_leaveCb");function wu(i,t){i.shapeFlag&6&&i.component?(i.transition=t,wu(i.component.subTree,t)):i.shapeFlag&128?(i.ssContent.transition=t.clone(i.ssContent),i.ssFallback.transition=t.clone(i.ssFallback)):i.transition=t}function Xp(i,t){return $t(i)?Ze({name:i.name},t,{setup:i}):i}function $p(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function rh(i,t){let e;return!!((e=Object.getOwnPropertyDescriptor(i,t))&&!e.configurable)}const Ba=new WeakMap;function ho(i,t,e,n,s=!1){if(qt(i)){i.forEach((v,p)=>ho(v,t&&(qt(t)?t[p]:t),e,n,s));return}if(fo(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&ho(i,t,e,n.component.subTree);return}const r=n.shapeFlag&4?dl(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=t&&t.r,u=a.refs===ge?a.refs={}:a.refs,h=a.setupState,d=le(h),f=h===ge?fp:v=>rh(u,v)?!1:ce(d,v),g=(v,p)=>!(p&&rh(u,p));if(c!=null&&c!==l){if(oh(t),Be(c))u[c]=null,f(c)&&(h[c]=null);else if(sn(c)){const v=t;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if($t(l))Lo(l,a,12,[o,u]);else{const v=Be(l),p=sn(l);if(v||p){const m=()=>{if(i.f){const y=v?f(l)?h[l]:u[l]:g()||!i.k?l.value:u[i.k];if(s)qt(y)&&du(y,r);else if(qt(y))y.includes(r)||y.push(r);else if(v)u[l]=[r],f(l)&&(h[l]=u[l]);else{const _=[r];g(l,i.k)&&(l.value=_),i.k&&(u[i.k]=_)}}else v?(u[l]=o,f(l)&&(h[l]=o)):p&&(g(l,i.k)&&(l.value=o),i.k&&(u[i.k]=o))};if(o){const y=()=>{m(),Ba.delete(i)};y.id=-1,Ba.set(i,y),mn(y,e)}else oh(i),m()}}}function oh(i){const t=Ba.get(i);t&&(t.flags|=8,Ba.delete(i))}rl().requestIdleCallback;rl().cancelIdleCallback;const fo=i=>!!i.type.__asyncLoader,jp=i=>i.type.__isKeepAlive;function Uv(i,t){Yp(i,"a",t)}function Fv(i,t){Yp(i,"da",t)}function Yp(i,t,e=nn){const n=i.__wdc||(i.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(cl(t,n,e),e){let s=e.parent;for(;s&&s.parent;)jp(s.parent.vnode)&&Ov(n,t,e,s),s=s.parent}}function Ov(i,t,e,n){const s=cl(t,i,n,!0);Tu(()=>{du(n[t],s)},e)}function cl(i,t,e=nn,n=!1){if(e){const s=e[i]||(e[i]=[]),r=t.__weh||(t.__weh=(...o)=>{zi();const a=No(e),l=pi(t,e,i,o);return a(),Vi(),l});return n?s.unshift(r):s.push(r),r}}const Wi=i=>(t,e=nn)=>{(!To||i==="sp")&&cl(i,(...n)=>t(...n),e)},Bv=Wi("bm"),Vs=Wi("m"),kv=Wi("bu"),zv=Wi("u"),Eu=Wi("bum"),Tu=Wi("um"),Vv=Wi("sp"),Hv=Wi("rtg"),Gv=Wi("rtc");function Wv(i,t=nn){cl("ec",i,t)}const qv="components";function Kp(i,t){return $v(qv,i,!0,t)||i}const Xv=Symbol.for("v-ndc");function $v(i,t,e=!0,n=!1){const s=wn||nn;if(s){const r=s.type;{const a=L_(r,!1);if(a&&(a===t||a===hn(t)||a===sl(hn(t))))return r}const o=ah(s[i]||r[i],t)||ah(s.appContext[i],t);return!o&&n?r:o}}function ah(i,t){return i&&(i[t]||i[hn(t)]||i[sl(hn(t))])}function Ve(i,t,e,n){let s;const r=e,o=qt(i);if(o||Be(i)){const a=o&&ks(i);let l=!1,c=!1;a&&(l=!Ln(i),c=Hi(i),i=ol(i)),s=new Array(i.length);for(let u=0,h=i.length;u<h;u++)s[u]=t(l?c?Er(Xn(i[u])):Xn(i[u]):i[u],u,void 0,r)}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=t(a+1,a,void 0,r)}else if(he(i))if(i[Symbol.iterator])s=Array.from(i,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(i);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(i[u],u,l,r)}}else s=[];return s}const Wc=i=>i?vm(i)?dl(i):Wc(i.parent):null,po=Ze(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Wc(i.parent),$root:i=>Wc(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Jp(i),$forceUpdate:i=>i.f||(i.f=()=>{Su(i.update)}),$nextTick:i=>i.n||(i.n=zs.bind(i.proxy)),$watch:i=>Iv.bind(i)}),Il=(i,t)=>i!==ge&&!i.__isScriptSetup&&ce(i,t),jv={get({_:i},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return n[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Il(n,t))return o[t]=1,n[t];if(s!==ge&&ce(s,t))return o[t]=2,s[t];if(ce(r,t))return o[t]=3,r[t];if(e!==ge&&ce(e,t))return o[t]=4,e[t];qc&&(o[t]=0)}}const c=po[t];let u,h;if(c)return t==="$attrs"&&en(i.attrs,"get",""),c(i);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ge&&ce(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,ce(h,t))return h[t]},set({_:i},t,e){const{data:n,setupState:s,ctx:r}=i;return Il(s,t)?(s[t]=e,!0):n!==ge&&ce(n,t)?(n[t]=e,!0):ce(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(r[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||i!==ge&&a[0]!=="$"&&ce(i,a)||Il(t,a)||ce(r,a)||ce(n,a)||ce(po,a)||ce(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:ce(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function lh(i){return qt(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let qc=!0;function Yv(i){const t=Jp(i),e=i.proxy,n=i.ctx;qc=!1,t.beforeCreate&&ch(t.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:v,deactivated:p,beforeDestroy:m,beforeUnmount:y,destroyed:_,unmounted:S,render:P,renderTracked:T,renderTriggered:A,errorCaptured:F,serverPrefetch:b,expose:M,inheritAttrs:V,components:Z,directives:I,filters:G}=t;if(c&&Kv(c,n,null),o)for(const at in o){const U=o[at];$t(U)&&(n[at]=U.bind(e))}if(s){const at=s.call(e,e);he(at)&&(i.data=al(at))}if(qc=!0,r)for(const at in r){const U=r[at],O=$t(U)?U.bind(e,e):$t(U.get)?U.get.bind(e,e):hi,lt=!$t(U)&&$t(U.set)?U.set.bind(e):hi,bt=Ie({get:O,set:lt});Object.defineProperty(n,at,{enumerable:!0,configurable:!0,get:()=>bt.value,set:pt=>bt.value=pt})}if(a)for(const at in a)Zp(a[at],n,e,at);if(l){const at=$t(l)?l.call(e):l;Reflect.ownKeys(at).forEach(U=>{Ra(U,at[U])})}u&&ch(u,i,"c");function k(at,U){qt(U)?U.forEach(O=>at(O.bind(e))):U&&at(U.bind(e))}if(k(Bv,h),k(Vs,d),k(kv,f),k(zv,g),k(Uv,v),k(Fv,p),k(Wv,F),k(Gv,T),k(Hv,A),k(Eu,y),k(Tu,S),k(Vv,b),qt(M))if(M.length){const at=i.exposed||(i.exposed={});M.forEach(U=>{Object.defineProperty(at,U,{get:()=>e[U],set:O=>e[U]=O,enumerable:!0})})}else i.exposed||(i.exposed={});P&&i.render===hi&&(i.render=P),V!=null&&(i.inheritAttrs=V),Z&&(i.components=Z),I&&(i.directives=I),b&&$p(i)}function Kv(i,t,e=hi){qt(i)&&(i=Xc(i));for(const n in i){const s=i[n];let r;he(s)?"default"in s?r=di(s.from||n,s.default,!0):r=di(s.from||n):r=di(s),sn(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function ch(i,t,e){pi(qt(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function Zp(i,t,e,n){let s=n.includes(".")?qp(e,n):()=>e[n];if(Be(i)){const r=t[i];$t(r)&&uo(s,r)}else if($t(i))uo(s,i.bind(e));else if(he(i))if(qt(i))i.forEach(r=>Zp(r,t,e,n));else{const r=$t(i.handler)?i.handler.bind(e):t[i.handler];$t(r)&&uo(s,r,i)}}function Jp(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!n?l=t:(l={},s.length&&s.forEach(c=>ka(l,c,o,!0)),ka(l,t,o)),he(t)&&r.set(t,l),l}function ka(i,t,e,n=!1){const{mixins:s,extends:r}=t;r&&ka(i,r,e,!0),s&&s.forEach(o=>ka(i,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=Zv[o]||e&&e[o];i[o]=a?a(i[o],t[o]):t[o]}return i}const Zv={data:uh,props:hh,emits:hh,methods:ro,computed:ro,beforeCreate:on,created:on,beforeMount:on,mounted:on,beforeUpdate:on,updated:on,beforeDestroy:on,beforeUnmount:on,destroyed:on,unmounted:on,activated:on,deactivated:on,errorCaptured:on,serverPrefetch:on,components:ro,directives:ro,watch:Qv,provide:uh,inject:Jv};function uh(i,t){return t?i?function(){return Ze($t(i)?i.call(this,this):i,$t(t)?t.call(this,this):t)}:t:i}function Jv(i,t){return ro(Xc(i),Xc(t))}function Xc(i){if(qt(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function on(i,t){return i?[...new Set([].concat(i,t))]:t}function ro(i,t){return i?Ze(Object.create(null),i,t):t}function hh(i,t){return i?qt(i)&&qt(t)?[...new Set([...i,...t])]:Ze(Object.create(null),lh(i),lh(t??{})):t}function Qv(i,t){if(!i)return t;if(!t)return i;const e=Ze(Object.create(null),i);for(const n in t)e[n]=on(i[n],t[n]);return e}function Qp(){return{app:null,config:{isNativeTag:fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let t_=0;function e_(i,t){return function(n,s=null){$t(n)||(n=Ze({},n)),s!=null&&!he(s)&&(s=null);const r=Qp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:t_++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:D_,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&$t(u.install)?(o.add(u),u.install(c,...h)):$t(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||Oe(n,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),i(f,u,d),l=!0,c._container=u,u.__vue_app__=c,dl(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(pi(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Mr;Mr=c;try{return u()}finally{Mr=h}}};return c}}let Mr=null;const n_=(i,t)=>t==="modelValue"||t==="model-value"?i.modelModifiers:i[`${t}Modifiers`]||i[`${hn(t)}Modifiers`]||i[`${Gs(t)}Modifiers`];function i_(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||ge;let s=e;const r=t.startsWith("update:"),o=r&&n_(n,t.slice(7));o&&(o.trim&&(s=e.map(u=>Be(u)?u.trim():u)),o.number&&(s=e.map(pu)));let a,l=n[a=Tl(t)]||n[a=Tl(hn(t))];!l&&r&&(l=n[a=Tl(Gs(t))]),l&&pi(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,pi(c,i,6,s)}}const s_=new WeakMap;function tm(i,t,e=!1){const n=e?s_:t.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!$t(i)){const l=c=>{const u=tm(c,t,!0);u&&(a=!0,Ze(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(he(i)&&n.set(i,null),null):(qt(r)?r.forEach(l=>o[l]=null):Ze(o,r),he(i)&&n.set(i,o),o)}function ul(i,t){return!i||!nl(t)?!1:(t=t.slice(2).replace(/Once$/,""),ce(i,t[0].toLowerCase()+t.slice(1))||ce(i,Gs(t))||ce(i,t))}function dh(i){const{type:t,vnode:e,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:g,inheritAttrs:v}=i,p=Oa(i);let m,y;try{if(e.shapeFlag&4){const S=s||n,P=S;m=si(c.call(P,S,u,h,f,d,g)),y=a}else{const S=t;m=si(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),y=t.props?a:r_(a)}}catch(S){mo.length=0,ll(S,i,1),m=Oe(ps)}let _=m;if(y&&v!==!1){const S=Object.keys(y),{shapeFlag:P}=_;S.length&&P&7&&(r&&S.some(hu)&&(y=o_(y,r)),_=Tr(_,y,!1,!0))}return e.dirs&&(_=Tr(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(e.dirs):e.dirs),e.transition&&wu(_,e.transition),m=_,Oa(p),m}const r_=i=>{let t;for(const e in i)(e==="class"||e==="style"||nl(e))&&((t||(t={}))[e]=i[e]);return t},o_=(i,t)=>{const e={};for(const n in i)(!hu(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function a_(i,t,e){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?fh(n,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(em(o,n,d)&&!ul(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?fh(n,o,c):!0:!!o;return!1}function fh(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(em(t,i,r)&&!ul(e,r))return!0}return!1}function em(i,t,e){const n=i[e],s=t[e];return e==="style"&&he(n)&&he(s)?!mu(n,s):n!==s}function l_({vnode:i,parent:t},e){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=t.vnode).el=e,t=t.parent;else break}}const nm={},im=()=>Object.create(nm),sm=i=>Object.getPrototypeOf(i)===nm;function c_(i,t,e,n=!1){const s={},r=im();i.propsDefaults=Object.create(null),rm(i,t,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);e?i.props=n?s:Fp(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function u_(i,t,e,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=le(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ul(i.emitsOptions,d))continue;const f=t[d];if(l)if(ce(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=hn(d);s[g]=$c(l,a,g,f,i,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{rm(i,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!ce(t,h)&&((u=Gs(h))===h||!ce(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=$c(l,a,h,void 0,i,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!ce(t,h))&&(delete r[h],c=!0)}c&&Ui(i.attrs,"set","")}function rm(i,t,e,n){const[s,r]=i.propsOptions;let o=!1,a;if(t)for(let l in t){if(ao(l))continue;const c=t[l];let u;s&&ce(s,u=hn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:ul(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=le(e),c=a||ge;for(let u=0;u<r.length;u++){const h=r[u];e[h]=$c(s,l,h,c[h],i,!ce(c,h))}}return o}function $c(i,t,e,n,s,r){const o=i[e];if(o!=null){const a=ce(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$t(l)){const{propsDefaults:c}=s;if(e in c)n=c[e];else{const u=No(s);n=c[e]=l.call(null,t),u()}}else n=l;s.ce&&s.ce._setProp(e,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Gs(e))&&(n=!0))}return n}const h_=new WeakMap;function om(i,t,e=!1){const n=e?h_:t.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!$t(i)){const u=h=>{l=!0;const[d,f]=om(h,t,!0);Ze(o,d),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return he(i)&&n.set(i,_r),_r;if(qt(r))for(let u=0;u<r.length;u++){const h=hn(r[u]);ph(h)&&(o[h]=ge)}else if(r)for(const u in r){const h=hn(u);if(ph(h)){const d=r[u],f=o[h]=qt(d)||$t(d)?{type:d}:Ze({},d),g=f.type;let v=!1,p=!0;if(qt(g))for(let m=0;m<g.length;++m){const y=g[m],_=$t(y)&&y.name;if(_==="Boolean"){v=!0;break}else _==="String"&&(p=!1)}else v=$t(g)&&g.name==="Boolean";f[0]=v,f[1]=p,(v||ce(f,"default"))&&a.push(h)}}const c=[o,a];return he(i)&&n.set(i,c),c}function ph(i){return i[0]!=="$"&&!ao(i)}const Au=i=>i==="_"||i==="_ctx"||i==="$stable",Cu=i=>qt(i)?i.map(si):[si(i)],d_=(i,t,e)=>{if(t._n)return t;const n=Cv((...s)=>Cu(t(...s)),e);return n._c=!1,n},am=(i,t,e)=>{const n=i._ctx;for(const s in i){if(Au(s))continue;const r=i[s];if($t(r))t[s]=d_(s,r,n);else if(r!=null){const o=Cu(r);t[s]=()=>o}}},lm=(i,t)=>{const e=Cu(t);i.slots.default=()=>e},cm=(i,t,e)=>{for(const n in t)(e||!Au(n))&&(i[n]=t[n])},f_=(i,t,e)=>{const n=i.slots=im();if(i.vnode.shapeFlag&32){const s=t._;s?(cm(n,t,e),e&&_p(n,"_",s,!0)):am(t,n)}else t&&lm(i,t)},p_=(i,t,e)=>{const{vnode:n,slots:s}=i;let r=!0,o=ge;if(n.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:cm(s,t,e):(r=!t.$stable,am(t,s)),o=t}else t&&(lm(i,t),o={default:1});if(r)for(const a in s)!Au(a)&&o[a]==null&&delete s[a]},mn=y_;function m_(i){return g_(i)}function g_(i,t){const e=rl();e.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=hi,insertStaticContent:g}=i,v=(C,N,j,J=null,st=null,w=null,x=void 0,H=null,Y=!!N.dynamicChildren)=>{if(C===N)return;C&&!Wr(C,N)&&(J=$(C),pt(C,st,w,!0),C=null),N.patchFlag===-2&&(Y=!1,N.dynamicChildren=null);const{type:X,ref:tt,shapeFlag:ut}=N;switch(X){case hl:p(C,N,j,J);break;case ps:m(C,N,j,J);break;case Pa:C==null&&y(N,j,J,x);break;case me:Z(C,N,j,J,st,w,x,H,Y);break;default:ut&1?P(C,N,j,J,st,w,x,H,Y):ut&6?I(C,N,j,J,st,w,x,H,Y):(ut&64||ut&128)&&X.process(C,N,j,J,st,w,x,H,Y,K)}tt!=null&&st?ho(tt,C&&C.ref,w,N||C,!N):tt==null&&C&&C.ref!=null&&ho(C.ref,null,w,C,!0)},p=(C,N,j,J)=>{if(C==null)n(N.el=a(N.children),j,J);else{const st=N.el=C.el;N.children!==C.children&&c(st,N.children)}},m=(C,N,j,J)=>{C==null?n(N.el=l(N.children||""),j,J):N.el=C.el},y=(C,N,j,J)=>{[C.el,C.anchor]=g(C.children,N,j,J,C.el,C.anchor)},_=({el:C,anchor:N},j,J)=>{let st;for(;C&&C!==N;)st=d(C),n(C,j,J),C=st;n(N,j,J)},S=({el:C,anchor:N})=>{let j;for(;C&&C!==N;)j=d(C),s(C),C=j;s(N)},P=(C,N,j,J,st,w,x,H,Y)=>{if(N.type==="svg"?x="svg":N.type==="math"&&(x="mathml"),C==null)T(N,j,J,st,w,x,H,Y);else{const X=C.el&&C.el._isVueCE?C.el:null;try{X&&X._beginPatch(),b(C,N,st,w,x,H,Y)}finally{X&&X._endPatch()}}},T=(C,N,j,J,st,w,x,H)=>{let Y,X;const{props:tt,shapeFlag:ut,transition:et,dirs:yt}=C;if(Y=C.el=o(C.type,w,tt&&tt.is,tt),ut&8?u(Y,C.children):ut&16&&F(C.children,Y,null,J,st,Ll(C,w),x,H),yt&&_s(C,null,J,"created"),A(Y,C,C.scopeId,x,J),tt){for(const mt in tt)mt!=="value"&&!ao(mt)&&r(Y,mt,null,tt[mt],w,J);"value"in tt&&r(Y,"value",null,tt.value,w),(X=tt.onVnodeBeforeMount)&&Zn(X,J,C)}yt&&_s(C,null,J,"beforeMount");const Ct=v_(st,et);Ct&&et.beforeEnter(Y),n(Y,N,j),((X=tt&&tt.onVnodeMounted)||Ct||yt)&&mn(()=>{X&&Zn(X,J,C),Ct&&et.enter(Y),yt&&_s(C,null,J,"mounted")},st)},A=(C,N,j,J,st)=>{if(j&&f(C,j),J)for(let w=0;w<J.length;w++)f(C,J[w]);if(st){let w=st.subTree;if(N===w||fm(w.type)&&(w.ssContent===N||w.ssFallback===N)){const x=st.vnode;A(C,x,x.scopeId,x.slotScopeIds,st.parent)}}},F=(C,N,j,J,st,w,x,H,Y=0)=>{for(let X=Y;X<C.length;X++){const tt=C[X]=H?Di(C[X]):si(C[X]);v(null,tt,N,j,J,st,w,x,H)}},b=(C,N,j,J,st,w,x)=>{const H=N.el=C.el;let{patchFlag:Y,dynamicChildren:X,dirs:tt}=N;Y|=C.patchFlag&16;const ut=C.props||ge,et=N.props||ge;let yt;if(j&&ys(j,!1),(yt=et.onVnodeBeforeUpdate)&&Zn(yt,j,N,C),tt&&_s(N,C,j,"beforeUpdate"),j&&ys(j,!0),(ut.innerHTML&&et.innerHTML==null||ut.textContent&&et.textContent==null)&&u(H,""),X?M(C.dynamicChildren,X,H,j,J,Ll(N,st),w):x||U(C,N,H,null,j,J,Ll(N,st),w,!1),Y>0){if(Y&16)V(H,ut,et,j,st);else if(Y&2&&ut.class!==et.class&&r(H,"class",null,et.class,st),Y&4&&r(H,"style",ut.style,et.style,st),Y&8){const Ct=N.dynamicProps;for(let mt=0;mt<Ct.length;mt++){const Mt=Ct[mt],It=ut[Mt],Pt=et[Mt];(Pt!==It||Mt==="value")&&r(H,Mt,It,Pt,st,j)}}Y&1&&C.children!==N.children&&u(H,N.children)}else!x&&X==null&&V(H,ut,et,j,st);((yt=et.onVnodeUpdated)||tt)&&mn(()=>{yt&&Zn(yt,j,N,C),tt&&_s(N,C,j,"updated")},J)},M=(C,N,j,J,st,w,x)=>{for(let H=0;H<N.length;H++){const Y=C[H],X=N[H],tt=Y.el&&(Y.type===me||!Wr(Y,X)||Y.shapeFlag&198)?h(Y.el):j;v(Y,X,tt,null,J,st,w,x,!0)}},V=(C,N,j,J,st)=>{if(N!==j){if(N!==ge)for(const w in N)!ao(w)&&!(w in j)&&r(C,w,N[w],null,st,J);for(const w in j){if(ao(w))continue;const x=j[w],H=N[w];x!==H&&w!=="value"&&r(C,w,H,x,st,J)}"value"in j&&r(C,"value",N.value,j.value,st)}},Z=(C,N,j,J,st,w,x,H,Y)=>{const X=N.el=C?C.el:a(""),tt=N.anchor=C?C.anchor:a("");let{patchFlag:ut,dynamicChildren:et,slotScopeIds:yt}=N;yt&&(H=H?H.concat(yt):yt),C==null?(n(X,j,J),n(tt,j,J),F(N.children||[],j,tt,st,w,x,H,Y)):ut>0&&ut&64&&et&&C.dynamicChildren&&C.dynamicChildren.length===et.length?(M(C.dynamicChildren,et,j,st,w,x,H),(N.key!=null||st&&N===st.subTree)&&um(C,N,!0)):U(C,N,j,tt,st,w,x,H,Y)},I=(C,N,j,J,st,w,x,H,Y)=>{N.slotScopeIds=H,C==null?N.shapeFlag&512?st.ctx.activate(N,j,J,x,Y):G(N,j,J,st,w,x,Y):B(C,N,Y)},G=(C,N,j,J,st,w,x)=>{const H=C.component=T_(C,J,st);if(jp(C)&&(H.ctx.renderer=K),C_(H,!1,x),H.asyncDep){if(st&&st.registerDep(H,k,x),!C.el){const Y=H.subTree=Oe(ps);m(null,Y,N,j),C.placeholder=Y.el}}else k(H,C,N,j,st,w,x)},B=(C,N,j)=>{const J=N.component=C.component;if(a_(C,N,j))if(J.asyncDep&&!J.asyncResolved){at(J,N,j);return}else J.next=N,J.update();else N.el=C.el,J.vnode=N},k=(C,N,j,J,st,w,x)=>{const H=()=>{if(C.isMounted){let{next:ut,bu:et,u:yt,parent:Ct,vnode:mt}=C;{const Gt=hm(C);if(Gt){ut&&(ut.el=mt.el,at(C,ut,x)),Gt.asyncDep.then(()=>{mn(()=>{C.isUnmounted||X()},st)});return}}let Mt=ut,It;ys(C,!1),ut?(ut.el=mt.el,at(C,ut,x)):ut=mt,et&&Ca(et),(It=ut.props&&ut.props.onVnodeBeforeUpdate)&&Zn(It,Ct,ut,mt),ys(C,!0);const Pt=dh(C),Nt=C.subTree;C.subTree=Pt,v(Nt,Pt,h(Nt.el),$(Nt),C,st,w),ut.el=Pt.el,Mt===null&&l_(C,Pt.el),yt&&mn(yt,st),(It=ut.props&&ut.props.onVnodeUpdated)&&mn(()=>Zn(It,Ct,ut,mt),st)}else{let ut;const{el:et,props:yt}=N,{bm:Ct,m:mt,parent:Mt,root:It,type:Pt}=C,Nt=fo(N);ys(C,!1),Ct&&Ca(Ct),!Nt&&(ut=yt&&yt.onVnodeBeforeMount)&&Zn(ut,Mt,N),ys(C,!0);{It.ce&&It.ce._hasShadowRoot()&&It.ce._injectChildStyle(Pt,C.parent?C.parent.type:void 0);const Gt=C.subTree=dh(C);v(null,Gt,j,J,C,st,w),N.el=Gt.el}if(mt&&mn(mt,st),!Nt&&(ut=yt&&yt.onVnodeMounted)){const Gt=N;mn(()=>Zn(ut,Mt,Gt),st)}(N.shapeFlag&256||Mt&&fo(Mt.vnode)&&Mt.vnode.shapeFlag&256)&&C.a&&mn(C.a,st),C.isMounted=!0,N=j=J=null}};C.scope.on();const Y=C.effect=new bp(H);C.scope.off();const X=C.update=Y.run.bind(Y),tt=C.job=Y.runIfDirty.bind(Y);tt.i=C,tt.id=C.uid,Y.scheduler=()=>Su(tt),ys(C,!0),X()},at=(C,N,j)=>{N.component=C;const J=C.vnode.props;C.vnode=N,C.next=null,u_(C,N.props,J,j),p_(C,N.children,j),zi(),sh(C),Vi()},U=(C,N,j,J,st,w,x,H,Y=!1)=>{const X=C&&C.children,tt=C?C.shapeFlag:0,ut=N.children,{patchFlag:et,shapeFlag:yt}=N;if(et>0){if(et&128){lt(X,ut,j,J,st,w,x,H,Y);return}else if(et&256){O(X,ut,j,J,st,w,x,H,Y);return}}yt&8?(tt&16&&At(X,st,w),ut!==X&&u(j,ut)):tt&16?yt&16?lt(X,ut,j,J,st,w,x,H,Y):At(X,st,w,!0):(tt&8&&u(j,""),yt&16&&F(ut,j,J,st,w,x,H,Y))},O=(C,N,j,J,st,w,x,H,Y)=>{C=C||_r,N=N||_r;const X=C.length,tt=N.length,ut=Math.min(X,tt);let et;for(et=0;et<ut;et++){const yt=N[et]=Y?Di(N[et]):si(N[et]);v(C[et],yt,j,null,st,w,x,H,Y)}X>tt?At(C,st,w,!0,!1,ut):F(N,j,J,st,w,x,H,Y,ut)},lt=(C,N,j,J,st,w,x,H,Y)=>{let X=0;const tt=N.length;let ut=C.length-1,et=tt-1;for(;X<=ut&&X<=et;){const yt=C[X],Ct=N[X]=Y?Di(N[X]):si(N[X]);if(Wr(yt,Ct))v(yt,Ct,j,null,st,w,x,H,Y);else break;X++}for(;X<=ut&&X<=et;){const yt=C[ut],Ct=N[et]=Y?Di(N[et]):si(N[et]);if(Wr(yt,Ct))v(yt,Ct,j,null,st,w,x,H,Y);else break;ut--,et--}if(X>ut){if(X<=et){const yt=et+1,Ct=yt<tt?N[yt].el:J;for(;X<=et;)v(null,N[X]=Y?Di(N[X]):si(N[X]),j,Ct,st,w,x,H,Y),X++}}else if(X>et)for(;X<=ut;)pt(C[X],st,w,!0),X++;else{const yt=X,Ct=X,mt=new Map;for(X=Ct;X<=et;X++){const ct=N[X]=Y?Di(N[X]):si(N[X]);ct.key!=null&&mt.set(ct.key,X)}let Mt,It=0;const Pt=et-Ct+1;let Nt=!1,Gt=0;const q=new Array(Pt);for(X=0;X<Pt;X++)q[X]=0;for(X=yt;X<=ut;X++){const ct=C[X];if(It>=Pt){pt(ct,st,w,!0);continue}let St;if(ct.key!=null)St=mt.get(ct.key);else for(Mt=Ct;Mt<=et;Mt++)if(q[Mt-Ct]===0&&Wr(ct,N[Mt])){St=Mt;break}St===void 0?pt(ct,st,w,!0):(q[St-Ct]=X+1,St>=Gt?Gt=St:Nt=!0,v(ct,N[St],j,null,st,w,x,H,Y),It++)}const gt=Nt?__(q):_r;for(Mt=gt.length-1,X=Pt-1;X>=0;X--){const ct=Ct+X,St=N[ct],xt=N[ct+1],D=ct+1<tt?xt.el||dm(xt):J;q[X]===0?v(null,St,j,D,st,w,x,H,Y):Nt&&(Mt<0||X!==gt[Mt]?bt(St,j,D,2):Mt--)}}},bt=(C,N,j,J,st=null)=>{const{el:w,type:x,transition:H,children:Y,shapeFlag:X}=C;if(X&6){bt(C.component.subTree,N,j,J);return}if(X&128){C.suspense.move(N,j,J);return}if(X&64){x.move(C,N,j,K);return}if(x===me){n(w,N,j);for(let ut=0;ut<Y.length;ut++)bt(Y[ut],N,j,J);n(C.anchor,N,j);return}if(x===Pa){_(C,N,j);return}if(J!==2&&X&1&&H)if(J===0)H.beforeEnter(w),n(w,N,j),mn(()=>H.enter(w),st);else{const{leave:ut,delayLeave:et,afterLeave:yt}=H,Ct=()=>{C.ctx.isUnmounted?s(w):n(w,N,j)},mt=()=>{w._isLeaving&&w[Dv](!0),ut(w,()=>{Ct(),yt&&yt()})};et?et(w,Ct,mt):mt()}else n(w,N,j)},pt=(C,N,j,J=!1,st=!1)=>{const{type:w,props:x,ref:H,children:Y,dynamicChildren:X,shapeFlag:tt,patchFlag:ut,dirs:et,cacheIndex:yt}=C;if(ut===-2&&(st=!1),H!=null&&(zi(),ho(H,null,j,C,!0),Vi()),yt!=null&&(N.renderCache[yt]=void 0),tt&256){N.ctx.deactivate(C);return}const Ct=tt&1&&et,mt=!fo(C);let Mt;if(mt&&(Mt=x&&x.onVnodeBeforeUnmount)&&Zn(Mt,N,C),tt&6)vt(C.component,j,J);else{if(tt&128){C.suspense.unmount(j,J);return}Ct&&_s(C,null,N,"beforeUnmount"),tt&64?C.type.remove(C,N,j,K,J):X&&!X.hasOnce&&(w!==me||ut>0&&ut&64)?At(X,N,j,!1,!0):(w===me&&ut&384||!st&&tt&16)&&At(Y,N,j),J&&Vt(C)}(mt&&(Mt=x&&x.onVnodeUnmounted)||Ct)&&mn(()=>{Mt&&Zn(Mt,N,C),Ct&&_s(C,null,N,"unmounted")},j)},Vt=C=>{const{type:N,el:j,anchor:J,transition:st}=C;if(N===me){it(j,J);return}if(N===Pa){S(C);return}const w=()=>{s(j),st&&!st.persisted&&st.afterLeave&&st.afterLeave()};if(C.shapeFlag&1&&st&&!st.persisted){const{leave:x,delayLeave:H}=st,Y=()=>x(j,w);H?H(C.el,w,Y):Y()}else w()},it=(C,N)=>{let j;for(;C!==N;)j=d(C),s(C),C=j;s(N)},vt=(C,N,j)=>{const{bum:J,scope:st,job:w,subTree:x,um:H,m:Y,a:X}=C;mh(Y),mh(X),J&&Ca(J),st.stop(),w&&(w.flags|=8,pt(x,C,N,j)),H&&mn(H,N),mn(()=>{C.isUnmounted=!0},N)},At=(C,N,j,J=!1,st=!1,w=0)=>{for(let x=w;x<C.length;x++)pt(C[x],N,j,J,st)},$=C=>{if(C.shapeFlag&6)return $(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const N=d(C.anchor||C.el),j=N&&N[Lv];return j?d(j):N};let ft=!1;const ht=(C,N,j)=>{let J;C==null?N._vnode&&(pt(N._vnode,null,null,!0),J=N._vnode.component):v(N._vnode||null,C,N,null,null,null,j),N._vnode=C,ft||(ft=!0,sh(J),Vp(),ft=!1)},K={p:v,um:pt,m:bt,r:Vt,mt:G,mc:F,pc:U,pbc:M,n:$,o:i};return{render:ht,hydrate:void 0,createApp:e_(ht)}}function Ll({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ys({effect:i,job:t},e){e?(i.flags|=32,t.flags|=4):(i.flags&=-33,t.flags&=-5)}function v_(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function um(i,t,e=!1){const n=i.children,s=t.children;if(qt(n)&&qt(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Di(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&um(o,a)),a.type===hl&&(a.patchFlag===-1&&(a=s[r]=Di(a)),a.el=o.el),a.type===ps&&!a.el&&(a.el=o.el)}}function __(i){const t=i.slice(),e=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=e[e.length-1],i[s]<c){t[n]=s,e.push(n);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,i[e[a]]<c?r=a+1:o=a;c<i[e[r]]&&(r>0&&(t[n]=e[r-1]),e[r]=n)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function hm(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hm(t)}function mh(i){if(i)for(let t=0;t<i.length;t++)i[t].flags|=8}function dm(i){if(i.placeholder)return i.placeholder;const t=i.component;return t?dm(t.subTree):null}const fm=i=>i.__isSuspense;function y_(i,t){t&&t.pendingBranch?qt(i)?t.effects.push(...i):t.effects.push(i):Av(i)}const me=Symbol.for("v-fgt"),hl=Symbol.for("v-txt"),ps=Symbol.for("v-cmt"),Pa=Symbol.for("v-stc"),mo=[];let En=null;function Et(i=!1){mo.push(En=i?null:[])}function x_(){mo.pop(),En=mo[mo.length-1]||null}let Eo=1;function za(i,t=!1){Eo+=i,i<0&&En&&t&&(En.hasOnce=!0)}function pm(i){return i.dynamicChildren=Eo>0?En||_r:null,x_(),Eo>0&&En&&En.push(i),i}function Tt(i,t,e,n,s,r){return pm(L(i,t,e,n,s,r,!0))}function mm(i,t,e,n,s){return pm(Oe(i,t,e,n,s,!0))}function Va(i){return i?i.__v_isVNode===!0:!1}function Wr(i,t){return i.type===t.type&&i.key===t.key}const gm=({key:i})=>i??null,Ia=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?Be(i)||sn(i)||$t(i)?{i:wn,r:i,k:t,f:!!e}:i:null);function L(i,t=null,e=null,n=0,s=null,r=i===me?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&gm(t),ref:t&&Ia(t),scopeId:Gp,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wn};return a?(Ru(l,e),r&128&&i.normalize(l)):e&&(l.shapeFlag|=Be(e)?8:16),Eo>0&&!o&&En&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&En.push(l),l}const Oe=M_;function M_(i,t=null,e=null,n=0,s=null,r=!1){if((!i||i===Xv)&&(i=ps),Va(i)){const a=Tr(i,t,!0);return e&&Ru(a,e),Eo>0&&!r&&En&&(a.shapeFlag&6?En[En.indexOf(i)]=a:En.push(a)),a.patchFlag=-2,a}if(N_(i)&&(i=i.__vccOpts),t){t=b_(t);let{class:a,style:l}=t;a&&!Be(a)&&(t.class=Pe(a)),he(l)&&(bu(l)&&!qt(l)&&(l=Ze({},l)),t.style=Ye(l))}const o=Be(i)?1:fm(i)?128:Nv(i)?64:he(i)?4:$t(i)?2:0;return L(i,t,e,n,s,o,r,!0)}function b_(i){return i?bu(i)||sm(i)?Ze({},i):i:null}function Tr(i,t,e=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=t?S_(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&gm(c),ref:t&&t.ref?e&&r?qt(r)?r.concat(Ia(t)):[r,Ia(t)]:Ia(t):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==me?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Tr(i.ssContent),ssFallback:i.ssFallback&&Tr(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&wu(u,l.clone(u)),u}function In(i=" ",t=0){return Oe(hl,null,i,t)}function jc(i,t){const e=Oe(Pa,null,i);return e.staticCount=t,e}function Ae(i="",t=!1){return t?(Et(),mm(ps,null,i)):Oe(ps,null,i)}function si(i){return i==null||typeof i=="boolean"?Oe(ps):qt(i)?Oe(me,null,i.slice()):Va(i)?Di(i):Oe(hl,null,String(i))}function Di(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Tr(i)}function Ru(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(qt(t))e=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),Ru(i,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!sm(t)?t._ctx=wn:s===3&&wn&&(wn.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else $t(t)?(t={default:t,_ctx:wn},e=32):(t=String(t),n&64?(e=16,t=[In(t)]):e=8);i.children=t,i.shapeFlag|=e}function S_(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=Pe([t.class,n.class]));else if(s==="style")t.style=Ye([t.style,n.style]);else if(nl(s)){const r=t[s],o=n[s];o&&r!==o&&!(qt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=n[s])}return t}function Zn(i,t,e,n=null){pi(i,t,7,[e,n])}const w_=Qp();let E_=0;function T_(i,t,e){const n=i.type,s=(t?t.appContext:i.appContext)||w_,r={uid:E_++,vnode:i,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:om(n,s),emitsOptions:tm(n,s),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:n.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=i_.bind(null,r),i.ce&&i.ce(r),r}let nn=null;const A_=()=>nn||wn;let Ha,Yc;{const i=rl(),t=(e,n)=>{let s;return(s=i[e])||(s=i[e]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ha=t("__VUE_INSTANCE_SETTERS__",e=>nn=e),Yc=t("__VUE_SSR_SETTERS__",e=>To=e)}const No=i=>{const t=nn;return Ha(i),i.scope.on(),()=>{i.scope.off(),Ha(t)}},gh=()=>{nn&&nn.scope.off(),Ha(null)};function vm(i){return i.vnode.shapeFlag&4}let To=!1;function C_(i,t=!1,e=!1){t&&Yc(t);const{props:n,children:s}=i.vnode,r=vm(i);c_(i,n,r,t),f_(i,s,e||t);const o=r?R_(i,t):void 0;return t&&Yc(!1),o}function R_(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,jv);const{setup:n}=e;if(n){zi();const s=i.setupContext=n.length>1?I_(i):null,r=No(i),o=Lo(n,i,0,[i.props,s]),a=mp(o);if(Vi(),r(),(a||i.sp)&&!fo(i)&&$p(i),a){if(o.then(gh,gh),t)return o.then(l=>{vh(i,l)}).catch(l=>{ll(l,i,0)});i.asyncDep=o}else vh(i,o)}else _m(i)}function vh(i,t,e){$t(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:he(t)&&(i.setupState=Bp(t)),_m(i)}function _m(i,t,e){const n=i.type;i.render||(i.render=n.render||hi);{const s=No(i);zi();try{Yv(i)}finally{Vi(),s()}}}const P_={get(i,t){return en(i,"get",""),i[t]}};function I_(i){const t=e=>{i.exposed=e||{}};return{attrs:new Proxy(i.attrs,P_),slots:i.slots,emit:i.emit,expose:t}}function dl(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Bp(vv(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in po)return po[e](i)},has(t,e){return e in t||e in po}})):i.proxy}function L_(i,t=!0){return $t(i)?i.displayName||i.name:i.name||t&&i.__name}function N_(i){return $t(i)&&"__vccOpts"in i}const Ie=(i,t)=>bv(i,t,To);function ym(i,t,e){try{za(-1);const n=arguments.length;return n===2?he(t)&&!qt(t)?Va(t)?Oe(i,null,[t]):Oe(i,t):Oe(i,null,t):(n>3?e=Array.prototype.slice.call(arguments,2):n===3&&Va(e)&&(e=[e]),Oe(i,t,e))}finally{za(1)}}const D_="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kc;const _h=typeof window<"u"&&window.trustedTypes;if(_h)try{Kc=_h.createPolicy("vue",{createHTML:i=>i})}catch{}const xm=Kc?i=>Kc.createHTML(i):i=>i,U_="http://www.w3.org/2000/svg",F_="http://www.w3.org/1998/Math/MathML",Ni=typeof document<"u"?document:null,yh=Ni&&Ni.createElement("template"),O_={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const s=t==="svg"?Ni.createElementNS(U_,i):t==="mathml"?Ni.createElementNS(F_,i):e?Ni.createElement(i,{is:e}):Ni.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>Ni.createTextNode(i),createComment:i=>Ni.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ni.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{yh.innerHTML=xm(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=yh.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},B_=Symbol("_vtc");function k_(i,t,e){const n=i[B_];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const xh=Symbol("_vod"),z_=Symbol("_vsh"),V_=Symbol(""),H_=/(?:^|;)\s*display\s*:/;function G_(i,t,e){const n=i.style,s=Be(e);let r=!1;if(e&&!s){if(t)if(Be(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&La(n,a,"")}else for(const o in t)e[o]==null&&La(n,o,"");for(const o in e)o==="display"&&(r=!0),La(n,o,e[o])}else if(s){if(t!==e){const o=n[V_];o&&(e+=";"+o),n.cssText=e,r=H_.test(e)}}else t&&i.removeAttribute("style");xh in i&&(i[xh]=r?n.display:"",i[z_]&&(n.display="none"))}const Mh=/\s*!important$/;function La(i,t,e){if(qt(e))e.forEach(n=>La(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=W_(i,t);Mh.test(e)?i.setProperty(Gs(n),e.replace(Mh,""),"important"):i[n]=e}}const bh=["Webkit","Moz","ms"],Nl={};function W_(i,t){const e=Nl[t];if(e)return e;let n=hn(t);if(n!=="filter"&&n in i)return Nl[t]=n;n=sl(n);for(let s=0;s<bh.length;s++){const r=bh[s]+n;if(r in i)return Nl[t]=r}return t}const Sh="http://www.w3.org/1999/xlink";function wh(i,t,e,n,s,r=Yg(t)){n&&t.startsWith("xlink:")?e==null?i.removeAttributeNS(Sh,t.slice(6,t.length)):i.setAttributeNS(Sh,t,e):e==null||r&&!yp(e)?i.removeAttribute(t):i.setAttribute(t,r?"":fi(e)?String(e):e)}function Eh(i,t,e,n,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(i[t]=t==="innerHTML"?xm(e):e);return}const r=i.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=e==null?i.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in i))&&(i.value=l),e==null&&i.removeAttribute(t),i._value=e;return}let o=!1;if(e===""||e==null){const a=typeof i[t];a==="boolean"?e=yp(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{i[t]=e}catch{}o&&i.removeAttribute(s||t)}function pr(i,t,e,n){i.addEventListener(t,e,n)}function q_(i,t,e,n){i.removeEventListener(t,e,n)}const Th=Symbol("_vei");function X_(i,t,e,n,s=null){const r=i[Th]||(i[Th]={}),o=r[t];if(n&&o)o.value=n;else{const[a,l]=$_(t);if(n){const c=r[t]=K_(n,s);pr(i,a,c,l)}else o&&(q_(i,a,o,l),r[t]=void 0)}}const Ah=/(?:Once|Passive|Capture)$/;function $_(i){let t;if(Ah.test(i)){t={};let n;for(;n=i.match(Ah);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Gs(i.slice(2)),t]}let Dl=0;const j_=Promise.resolve(),Y_=()=>Dl||(j_.then(()=>Dl=0),Dl=Date.now());function K_(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;pi(Z_(n,e.value),t,5,[n])};return e.value=i,e.attached=Y_(),e}function Z_(i,t){if(qt(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const Ch=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,J_=(i,t,e,n,s,r)=>{const o=s==="svg";t==="class"?k_(i,n,o):t==="style"?G_(i,e,n):nl(t)?hu(t)||X_(i,t,e,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Q_(i,t,n,o))?(Eh(i,t,n),!i.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&wh(i,t,n,o,r,t!=="value")):i._isVueCE&&(t0(i,t)||i._def.__asyncLoader&&(/[A-Z]/.test(t)||!Be(n)))?Eh(i,hn(t),n,r,t):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),wh(i,t,n,o))};function Q_(i,t,e,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in i&&Ch(t)&&$t(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&i.tagName==="IFRAME"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ch(t)&&Be(e)?!1:t in i}function t0(i,t){const e=i._def.props;if(!e)return!1;const n=hn(t);return Array.isArray(e)?e.some(s=>hn(s)===n):Object.keys(e).some(s=>hn(s)===n)}const Rh=i=>{const t=i.props["onUpdate:modelValue"]||!1;return qt(t)?e=>Ca(t,e):t};function e0(i){i.target.composing=!0}function Ph(i){const t=i.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ul=Symbol("_assign");function Ih(i,t,e){return t&&(i=i.trim()),e&&(i=pu(i)),i}const xs={created(i,{modifiers:{lazy:t,trim:e,number:n}},s){i[Ul]=Rh(s);const r=n||s.props&&s.props.type==="number";pr(i,t?"change":"input",o=>{o.target.composing||i[Ul](Ih(i.value,e,r))}),(e||r)&&pr(i,"change",()=>{i.value=Ih(i.value,e,r)}),t||(pr(i,"compositionstart",e0),pr(i,"compositionend",Ph),pr(i,"change",Ph))},mounted(i,{value:t}){i.value=t??""},beforeUpdate(i,{value:t,oldValue:e,modifiers:{lazy:n,trim:s,number:r}},o){if(i[Ul]=Rh(o),i.composing)return;const a=(r||i.type==="number")&&!/^0\d/.test(i.value)?pu(i.value):i.value,l=t??"";a!==l&&(document.activeElement===i&&i.type!=="range"&&(n&&t===e||s&&i.value.trim()===l)||(i.value=l))}},n0=["ctrl","shift","alt","meta"],i0={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,t)=>n0.some(e=>i[`${e}Key`]&&!t.includes(e))},s0=(i,t)=>{if(!i)return i;const e=i._withMods||(i._withMods={}),n=t.join(".");return e[n]||(e[n]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=i0[t[o]];if(a&&a(s,t))return}return i(s,...r)})},r0=Ze({patchProp:J_},O_);let Lh;function o0(){return Lh||(Lh=m_(r0))}const a0=(...i)=>{const t=o0().createApp(...i),{mount:e}=t;return t.mount=n=>{const s=c0(n);if(!s)return;const r=t._component;!$t(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,l0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function l0(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function c0(i){return Be(i)?document.querySelector(i):i}const qi=(i,t)=>{const e=i.__vccOpts||i;for(const[n,s]of t)e[n]=s;return e},u0={};function h0(i,t){const e=Kp("router-view");return Et(),mm(e)}const d0=qi(u0,[["render",h0]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const mr=typeof document<"u";function Mm(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function f0(i){return i.__esModule||i[Symbol.toStringTag]==="Module"||i.default&&Mm(i.default)}const ae=Object.assign;function Fl(i,t){const e={};for(const n in t){const s=t[n];e[n]=$n(s)?s.map(i):i(s)}return e}const go=()=>{},$n=Array.isArray;function Nh(i,t){const e={};for(const n in i)e[n]=n in t?t[n]:i[n];return e}const bm=/#/g,p0=/&/g,m0=/\//g,g0=/=/g,v0=/\?/g,Sm=/\+/g,_0=/%5B/g,y0=/%5D/g,wm=/%5E/g,x0=/%60/g,Em=/%7B/g,M0=/%7C/g,Tm=/%7D/g,b0=/%20/g;function Pu(i){return i==null?"":encodeURI(""+i).replace(M0,"|").replace(_0,"[").replace(y0,"]")}function S0(i){return Pu(i).replace(Em,"{").replace(Tm,"}").replace(wm,"^")}function Zc(i){return Pu(i).replace(Sm,"%2B").replace(b0,"+").replace(bm,"%23").replace(p0,"%26").replace(x0,"`").replace(Em,"{").replace(Tm,"}").replace(wm,"^")}function w0(i){return Zc(i).replace(g0,"%3D")}function E0(i){return Pu(i).replace(bm,"%23").replace(v0,"%3F")}function T0(i){return E0(i).replace(m0,"%2F")}function Ao(i){if(i==null)return null;try{return decodeURIComponent(""+i)}catch{}return""+i}const A0=/\/$/,C0=i=>i.replace(A0,"");function Ol(i,t,e="/"){let n,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(n=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=i(r.slice(1))),a>=0&&(n=n||t.slice(0,a),o=t.slice(a,t.length)),n=L0(n??t,e),{fullPath:n+r+o,path:n,query:s,hash:Ao(o)}}function R0(i,t){const e=t.query?i(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Dh(i,t){return!t||!i.toLowerCase().startsWith(t.toLowerCase())?i:i.slice(t.length)||"/"}function P0(i,t,e){const n=t.matched.length-1,s=e.matched.length-1;return n>-1&&n===s&&Ar(t.matched[n],e.matched[s])&&Am(t.params,e.params)&&i(t.query)===i(e.query)&&t.hash===e.hash}function Ar(i,t){return(i.aliasOf||i)===(t.aliasOf||t)}function Am(i,t){if(Object.keys(i).length!==Object.keys(t).length)return!1;for(var e in i)if(!I0(i[e],t[e]))return!1;return!0}function I0(i,t){return $n(i)?Uh(i,t):$n(t)?Uh(t,i):(i==null?void 0:i.valueOf())===(t==null?void 0:t.valueOf())}function Uh(i,t){return $n(t)?i.length===t.length&&i.every((e,n)=>e===t[n]):i.length===1&&i[0]===t}function L0(i,t){if(i.startsWith("/"))return i;if(!i)return t;const e=t.split("/"),n=i.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=e.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+n.slice(o).join("/")}const Zi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Jc=function(i){return i.pop="pop",i.push="push",i}({}),Bl=function(i){return i.back="back",i.forward="forward",i.unknown="",i}({});function N0(i){if(!i)if(mr){const t=document.querySelector("base");i=t&&t.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),C0(i)}const D0=/^[^#]+#/;function U0(i,t){return i.replace(D0,"#")+t}function F0(i,t){const e=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:t.behavior,left:n.left-e.left-(t.left||0),top:n.top-e.top-(t.top||0)}}const fl=()=>({left:window.scrollX,top:window.scrollY});function O0(i){let t;if("el"in i){const e=i.el,n=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?n?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=F0(s,i)}else t=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Fh(i,t){return(history.state?history.state.position-t:-1)+i}const Qc=new Map;function B0(i,t){Qc.set(i,t)}function k0(i){const t=Qc.get(i);return Qc.delete(i),t}function z0(i){return typeof i=="string"||i&&typeof i=="object"}function Cm(i){return typeof i=="string"||typeof i=="symbol"}let Re=function(i){return i[i.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",i[i.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",i[i.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",i[i.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",i[i.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",i}({});const Rm=Symbol("");Re.MATCHER_NOT_FOUND+"",Re.NAVIGATION_GUARD_REDIRECT+"",Re.NAVIGATION_ABORTED+"",Re.NAVIGATION_CANCELLED+"",Re.NAVIGATION_DUPLICATED+"";function Cr(i,t){return ae(new Error,{type:i,[Rm]:!0},t)}function yi(i,t){return i instanceof Error&&Rm in i&&(t==null||!!(i.type&t))}const V0=["params","query","hash"];function H0(i){if(typeof i=="string")return i;if(i.path!=null)return i.path;const t={};for(const e of V0)e in i&&(t[e]=i[e]);return JSON.stringify(t,null,2)}function G0(i){const t={};if(i===""||i==="?")return t;const e=(i[0]==="?"?i.slice(1):i).split("&");for(let n=0;n<e.length;++n){const s=e[n].replace(Sm," "),r=s.indexOf("="),o=Ao(r<0?s:s.slice(0,r)),a=r<0?null:Ao(s.slice(r+1));if(o in t){let l=t[o];$n(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function Oh(i){let t="";for(let e in i){const n=i[e];if(e=w0(e),n==null){n!==void 0&&(t+=(t.length?"&":"")+e);continue}($n(n)?n.map(s=>s&&Zc(s)):[n&&Zc(n)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function W0(i){const t={};for(const e in i){const n=i[e];n!==void 0&&(t[e]=$n(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return t}const q0=Symbol(""),Bh=Symbol(""),pl=Symbol(""),Pm=Symbol(""),tu=Symbol("");function qr(){let i=[];function t(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function e(){i=[]}return{add:t,list:()=>i.slice(),reset:e}}function as(i,t,e,n,s,r=o=>o()){const o=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Cr(Re.NAVIGATION_ABORTED,{from:e,to:t})):d instanceof Error?l(d):z0(d)?l(Cr(Re.NAVIGATION_GUARD_REDIRECT,{from:t,to:d})):(o&&n.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>i.call(n&&n.instances[s],t,e,c));let h=Promise.resolve(u);i.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function kl(i,t,e,n,s=r=>r()){const r=[];for(const o of i)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Mm(l)){const c=(l.__vccOpts||l)[t];c&&r.push(as(c,e,n,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=f0(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[t];return d&&as(d,e,n,o,a,s)()}))}}return r}function X0(i,t){const e=[],n=[],s=[],r=Math.max(t.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(i.matched.find(c=>Ar(c,a))?n.push(a):e.push(a));const l=i.matched[o];l&&(t.matched.find(c=>Ar(c,l))||s.push(l))}return[e,n,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $0=()=>location.protocol+"//"+location.host;function Im(i,t){const{pathname:e,search:n,hash:s}=t,r=i.indexOf("#");if(r>-1){let o=s.includes(i.slice(r))?i.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),Dh(a,"")}return Dh(e,i)+n+s}function j0(i,t,e,n){let s=[],r=[],o=null;const a=({state:d})=>{const f=Im(i,location),g=e.value,v=t.value;let p=0;if(d){if(e.value=f,t.value=d,o&&o===g){o=null;return}p=v?d.position-v.position:0}else n(f);s.forEach(m=>{m(e.value,g,{delta:p,type:Jc.pop,direction:p?p>0?Bl.forward:Bl.back:Bl.unknown})})};function l(){o=e.value}function c(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(f),f}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(ae({},d.state,{scroll:fl()}),"")}}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:h}}function kh(i,t,e,n=!1,s=!1){return{back:i,current:t,forward:e,replaced:n,position:window.history.length,scroll:s?fl():null}}function Y0(i){const{history:t,location:e}=window,n={value:Im(i,e)},s={value:t.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=i.indexOf("#"),d=h>-1?(e.host&&document.querySelector("base")?i:i.slice(h))+l:$0()+i+l;try{t[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),e[u?"replace":"assign"](d)}}function o(l,c){r(l,ae({},t.state,kh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),n.value=l}function a(l,c){const u=ae({},s.value,t.state,{forward:l,scroll:fl()});r(u.current,u,!0),r(l,ae({},kh(n.value,l,null),{position:u.position+1},c),!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function K0(i){i=N0(i);const t=Y0(i),e=j0(i,t.state,t.location,t.replace);function n(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=ae({location:"",base:i,go:n,createHref:U0.bind(null,i)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Us=function(i){return i[i.Static=0]="Static",i[i.Param=1]="Param",i[i.Group=2]="Group",i}({});var ke=function(i){return i[i.Static=0]="Static",i[i.Param=1]="Param",i[i.ParamRegExp=2]="ParamRegExp",i[i.ParamRegExpEnd=3]="ParamRegExpEnd",i[i.EscapeNext=4]="EscapeNext",i}(ke||{});const Z0={type:Us.Static,value:""},J0=/[a-zA-Z0-9_]/;function Q0(i){if(!i)return[[]];if(i==="/")return[[Z0]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function t(f){throw new Error(`ERR (${e})/"${c}": ${f}`)}let e=ke.Static,n=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(e===ke.Static?r.push({type:Us.Static,value:c}):e===ke.Param||e===ke.ParamRegExp||e===ke.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Us.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&e!==ke.ParamRegExp){n=e,e=ke.EscapeNext;continue}switch(e){case ke.Static:l==="/"?(c&&h(),o()):l===":"?(h(),e=ke.Param):d();break;case ke.EscapeNext:d(),e=n;break;case ke.Param:l==="("?e=ke.ParamRegExp:J0.test(l)?d():(h(),e=ke.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case ke.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=ke.ParamRegExpEnd:u+=l;break;case ke.ParamRegExpEnd:h(),e=ke.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===ke.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}const zh="[^/]+?",ty={sensitive:!1,strict:!1,start:!0,end:!0};var cn=function(i){return i[i._multiplier=10]="_multiplier",i[i.Root=90]="Root",i[i.Segment=40]="Segment",i[i.SubSegment=30]="SubSegment",i[i.Static=40]="Static",i[i.Dynamic=20]="Dynamic",i[i.BonusCustomRegExp=10]="BonusCustomRegExp",i[i.BonusWildcard=-50]="BonusWildcard",i[i.BonusRepeatable=-20]="BonusRepeatable",i[i.BonusOptional=-8]="BonusOptional",i[i.BonusStrict=.7000000000000001]="BonusStrict",i[i.BonusCaseSensitive=.25]="BonusCaseSensitive",i}(cn||{});const ey=/[.+*?^${}()[\]/\\]/g;function ny(i,t){const e=ae({},ty,t),n=[];let s=e.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[cn.Root];e.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=cn.Segment+(e.sensitive?cn.BonusCaseSensitive:0);if(d.type===Us.Static)h||(s+="/"),s+=d.value.replace(ey,"\\$&"),f+=cn.Static;else if(d.type===Us.Param){const{value:g,repeatable:v,optional:p,regexp:m}=d;r.push({name:g,repeatable:v,optional:p});const y=m||zh;if(y!==zh){f+=cn.BonusCustomRegExp;try{`${y}`}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+S.message)}}let _=v?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(_=p&&c.length<2?`(?:/${_})`:"/"+_),p&&(_+="?"),s+=_,f+=cn.Dynamic,p&&(f+=cn.BonusOptional),v&&(f+=cn.BonusRepeatable),y===".*"&&(f+=cn.BonusWildcard)}u.push(f)}n.push(u)}if(e.strict&&e.end){const c=n.length-1;n[c][n[c].length-1]+=cn.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===Us.Static)u+=f.value;else if(f.type===Us.Param){const{value:g,repeatable:v,optional:p}=f,m=g in c?c[g]:"";if($n(m)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=$n(m)?m.join("/"):m;if(!y)if(p)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function iy(i,t){let e=0;for(;e<i.length&&e<t.length;){const n=t[e]-i[e];if(n)return n;e++}return i.length<t.length?i.length===1&&i[0]===cn.Static+cn.Segment?-1:1:i.length>t.length?t.length===1&&t[0]===cn.Static+cn.Segment?1:-1:0}function Lm(i,t){let e=0;const n=i.score,s=t.score;for(;e<n.length&&e<s.length;){const r=iy(n[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-n.length)===1){if(Vh(n))return 1;if(Vh(s))return-1}return s.length-n.length}function Vh(i){const t=i[i.length-1];return i.length>0&&t[t.length-1]<0}const sy={strict:!1,end:!0,sensitive:!1};function ry(i,t,e){const n=ny(Q0(i.path),e),s=ae(n,{record:i,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function oy(i,t){const e=[],n=new Map;t=Nh(sy,t);function s(h){return n.get(h)}function r(h,d,f){const g=!f,v=Gh(h);v.aliasOf=f&&f.record;const p=Nh(t,h),m=[v];if("alias"in h){const S=typeof h.alias=="string"?[h.alias]:h.alias;for(const P of S)m.push(Gh(ae({},v,{components:f?f.record.components:v.components,path:P,aliasOf:f?f.record:v})))}let y,_;for(const S of m){const{path:P}=S;if(d&&P[0]!=="/"){const T=d.record.path,A=T[T.length-1]==="/"?"":"/";S.path=d.record.path+(P&&A+P)}if(y=ry(S,d,p),f?f.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),g&&h.name&&!Wh(y)&&o(h.name)),Nm(y)&&l(y),v.children){const T=v.children;for(let A=0;A<T.length;A++)r(T[A],y,f&&f.children[A])}f=f||y}return _?()=>{o(_)}:go}function o(h){if(Cm(h)){const d=n.get(h);d&&(n.delete(h),e.splice(e.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=e.indexOf(h);d>-1&&(e.splice(d,1),h.record.name&&n.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return e}function l(h){const d=cy(h,e);e.splice(d,0,h),h.record.name&&!Wh(h)&&n.set(h.record.name,h)}function c(h,d){let f,g={},v,p;if("name"in h&&h.name){if(f=n.get(h.name),!f)throw Cr(Re.MATCHER_NOT_FOUND,{location:h});p=f.record.name,g=ae(Hh(d.params,f.keys.filter(_=>!_.optional).concat(f.parent?f.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),h.params&&Hh(h.params,f.keys.map(_=>_.name))),v=f.stringify(g)}else if(h.path!=null)v=h.path,f=e.find(_=>_.re.test(v)),f&&(g=f.parse(v),p=f.record.name);else{if(f=d.name?n.get(d.name):e.find(_=>_.re.test(d.path)),!f)throw Cr(Re.MATCHER_NOT_FOUND,{location:h,currentLocation:d});p=f.record.name,g=ae({},d.params,h.params),v=f.stringify(g)}const m=[];let y=f;for(;y;)m.unshift(y.record),y=y.parent;return{name:p,path:v,params:g,matched:m,meta:ly(m)}}i.forEach(h=>r(h));function u(){e.length=0,n.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Hh(i,t){const e={};for(const n of t)n in i&&(e[n]=i[n]);return e}function Gh(i){const t={path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:i.aliasOf,beforeEnter:i.beforeEnter,props:ay(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ay(i){const t={},e=i.props||!1;if("component"in i)t.default=e;else for(const n in i.components)t[n]=typeof e=="object"?e[n]:e;return t}function Wh(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function ly(i){return i.reduce((t,e)=>ae(t,e.meta),{})}function cy(i,t){let e=0,n=t.length;for(;e!==n;){const r=e+n>>1;Lm(i,t[r])<0?n=r:e=r+1}const s=uy(i);return s&&(n=t.lastIndexOf(s,n-1)),n}function uy(i){let t=i;for(;t=t.parent;)if(Nm(t)&&Lm(i,t)===0)return t}function Nm({record:i}){return!!(i.name||i.components&&Object.keys(i.components).length||i.redirect)}function qh(i){const t=di(pl),e=di(Pm),n=Ie(()=>{const l=ki(i.to);return t.resolve(l)}),s=Ie(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=e.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ar.bind(null,u));if(d>-1)return d;const f=Xh(l[c-2]);return c>1&&Xh(u)===f&&h[h.length-1].path!==f?h.findIndex(Ar.bind(null,l[c-2])):d}),r=Ie(()=>s.value>-1&&my(e.params,n.value.params)),o=Ie(()=>s.value>-1&&s.value===e.matched.length-1&&Am(e.params,n.value.params));function a(l={}){if(py(l)){const c=t[ki(i.replace)?"replace":"push"](ki(i.to)).catch(go);return i.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:Ie(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}function hy(i){return i.length===1?i[0]:i}const dy=Xp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:qh,setup(i,{slots:t}){const e=al(qh(i)),{options:n}=di(pl),s=Ie(()=>({[$h(i.activeClass,n.linkActiveClass,"router-link-active")]:e.isActive,[$h(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&hy(t.default(e));return i.custom?r:ym("a",{"aria-current":e.isExactActive?i.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),fy=dy;function py(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const t=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return i.preventDefault&&i.preventDefault(),!0}}function my(i,t){for(const e in t){const n=t[e],s=i[e];if(typeof n=="string"){if(n!==s)return!1}else if(!$n(s)||s.length!==n.length||n.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function Xh(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const $h=(i,t,e)=>i??t??e,gy=Xp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:t,slots:e}){const n=di(tu),s=Ie(()=>i.route||n.value),r=di(Bh,0),o=Ie(()=>{let c=ki(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ie(()=>s.value.matched[o.value]);Ra(Bh,Ie(()=>o.value+1)),Ra(q0,a),Ra(tu,s);const l=Wt();return uo(()=>[l.value,a.value,i.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Ar(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,h=a.value,d=h&&h.components[u];if(!d)return jh(e.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,p=ym(d,ae({},g,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return jh(e.default,{Component:p,route:c})||p}}});function jh(i,t){if(!i)return null;const e=i(t);return e.length===1?e[0]:e}const vy=gy;function _y(i){const t=oy(i.routes,i),e=i.parseQuery||G0,n=i.stringifyQuery||Oh,s=i.history,r=qr(),o=qr(),a=qr(),l=_v(Zi);let c=Zi;mr&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fl.bind(null,$=>""+$),h=Fl.bind(null,T0),d=Fl.bind(null,Ao);function f($,ft){let ht,K;return Cm($)?(ht=t.getRecordMatcher($),K=ft):K=$,t.addRoute(K,ht)}function g($){const ft=t.getRecordMatcher($);ft&&t.removeRoute(ft)}function v(){return t.getRoutes().map($=>$.record)}function p($){return!!t.getRecordMatcher($)}function m($,ft){if(ft=ae({},ft||l.value),typeof $=="string"){const j=Ol(e,$,ft.path),J=t.resolve({path:j.path},ft),st=s.createHref(j.fullPath);return ae(j,J,{params:d(J.params),hash:Ao(j.hash),redirectedFrom:void 0,href:st})}let ht;if($.path!=null)ht=ae({},$,{path:Ol(e,$.path,ft.path).path});else{const j=ae({},$.params);for(const J in j)j[J]==null&&delete j[J];ht=ae({},$,{params:h(j)}),ft.params=h(ft.params)}const K=t.resolve(ht,ft),W=$.hash||"";K.params=u(d(K.params));const C=R0(n,ae({},$,{hash:S0(W),path:K.path})),N=s.createHref(C);return ae({fullPath:C,hash:W,query:n===Oh?W0($.query):$.query||{}},K,{redirectedFrom:void 0,href:N})}function y($){return typeof $=="string"?Ol(e,$,l.value.path):ae({},$)}function _($,ft){if(c!==$)return Cr(Re.NAVIGATION_CANCELLED,{from:ft,to:$})}function S($){return A($)}function P($){return S(ae(y($),{replace:!0}))}function T($,ft){const ht=$.matched[$.matched.length-1];if(ht&&ht.redirect){const{redirect:K}=ht;let W=typeof K=="function"?K($,ft):K;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=y(W):{path:W},W.params={}),ae({query:$.query,hash:$.hash,params:W.path!=null?{}:$.params},W)}}function A($,ft){const ht=c=m($),K=l.value,W=$.state,C=$.force,N=$.replace===!0,j=T(ht,K);if(j)return A(ae(y(j),{state:typeof j=="object"?ae({},W,j.state):W,force:C,replace:N}),ft||ht);const J=ht;J.redirectedFrom=ft;let st;return!C&&P0(n,K,ht)&&(st=Cr(Re.NAVIGATION_DUPLICATED,{to:J,from:K}),bt(K,K,!0,!1)),(st?Promise.resolve(st):M(J,K)).catch(w=>yi(w)?yi(w,Re.NAVIGATION_GUARD_REDIRECT)?w:lt(w):U(w,J,K)).then(w=>{if(w){if(yi(w,Re.NAVIGATION_GUARD_REDIRECT))return A(ae({replace:N},y(w.to),{state:typeof w.to=="object"?ae({},W,w.to.state):W,force:C}),ft||J)}else w=Z(J,K,!0,N,W);return V(J,K,w),w})}function F($,ft){const ht=_($,ft);return ht?Promise.reject(ht):Promise.resolve()}function b($){const ft=it.values().next().value;return ft&&typeof ft.runWithContext=="function"?ft.runWithContext($):$()}function M($,ft){let ht;const[K,W,C]=X0($,ft);ht=kl(K.reverse(),"beforeRouteLeave",$,ft);for(const j of K)j.leaveGuards.forEach(J=>{ht.push(as(J,$,ft))});const N=F.bind(null,$,ft);return ht.push(N),At(ht).then(()=>{ht=[];for(const j of r.list())ht.push(as(j,$,ft));return ht.push(N),At(ht)}).then(()=>{ht=kl(W,"beforeRouteUpdate",$,ft);for(const j of W)j.updateGuards.forEach(J=>{ht.push(as(J,$,ft))});return ht.push(N),At(ht)}).then(()=>{ht=[];for(const j of C)if(j.beforeEnter)if($n(j.beforeEnter))for(const J of j.beforeEnter)ht.push(as(J,$,ft));else ht.push(as(j.beforeEnter,$,ft));return ht.push(N),At(ht)}).then(()=>($.matched.forEach(j=>j.enterCallbacks={}),ht=kl(C,"beforeRouteEnter",$,ft,b),ht.push(N),At(ht))).then(()=>{ht=[];for(const j of o.list())ht.push(as(j,$,ft));return ht.push(N),At(ht)}).catch(j=>yi(j,Re.NAVIGATION_CANCELLED)?j:Promise.reject(j))}function V($,ft,ht){a.list().forEach(K=>b(()=>K($,ft,ht)))}function Z($,ft,ht,K,W){const C=_($,ft);if(C)return C;const N=ft===Zi,j=mr?history.state:{};ht&&(K||N?s.replace($.fullPath,ae({scroll:N&&j&&j.scroll},W)):s.push($.fullPath,W)),l.value=$,bt($,ft,ht,N),lt()}let I;function G(){I||(I=s.listen(($,ft,ht)=>{if(!vt.listening)return;const K=m($),W=T(K,vt.currentRoute.value);if(W){A(ae(W,{replace:!0,force:!0}),K).catch(go);return}c=K;const C=l.value;mr&&B0(Fh(C.fullPath,ht.delta),fl()),M(K,C).catch(N=>yi(N,Re.NAVIGATION_ABORTED|Re.NAVIGATION_CANCELLED)?N:yi(N,Re.NAVIGATION_GUARD_REDIRECT)?(A(ae(y(N.to),{force:!0}),K).then(j=>{yi(j,Re.NAVIGATION_ABORTED|Re.NAVIGATION_DUPLICATED)&&!ht.delta&&ht.type===Jc.pop&&s.go(-1,!1)}).catch(go),Promise.reject()):(ht.delta&&s.go(-ht.delta,!1),U(N,K,C))).then(N=>{N=N||Z(K,C,!1),N&&(ht.delta&&!yi(N,Re.NAVIGATION_CANCELLED)?s.go(-ht.delta,!1):ht.type===Jc.pop&&yi(N,Re.NAVIGATION_ABORTED|Re.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),V(K,C,N)}).catch(go)}))}let B=qr(),k=qr(),at;function U($,ft,ht){lt($);const K=k.list();return K.length?K.forEach(W=>W($,ft,ht)):console.error($),Promise.reject($)}function O(){return at&&l.value!==Zi?Promise.resolve():new Promise(($,ft)=>{B.add([$,ft])})}function lt($){return at||(at=!$,G(),B.list().forEach(([ft,ht])=>$?ht($):ft()),B.reset()),$}function bt($,ft,ht,K){const{scrollBehavior:W}=i;if(!mr||!W)return Promise.resolve();const C=!ht&&k0(Fh($.fullPath,0))||(K||!ht)&&history.state&&history.state.scroll||null;return zs().then(()=>W($,ft,C)).then(N=>N&&O0(N)).catch(N=>U(N,$,ft))}const pt=$=>s.go($);let Vt;const it=new Set,vt={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:p,getRoutes:v,resolve:m,options:i,push:S,replace:P,go:pt,back:()=>pt(-1),forward:()=>pt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:k.add,isReady:O,install($){$.component("RouterLink",fy),$.component("RouterView",vy),$.config.globalProperties.$router=vt,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>ki(l)}),mr&&!Vt&&l.value===Zi&&(Vt=!0,S(s.location).catch(K=>{}));const ft={};for(const K in Zi)Object.defineProperty(ft,K,{get:()=>l.value[K],enumerable:!0});$.provide(pl,vt),$.provide(Pm,Fp(ft)),$.provide(tu,l);const ht=$.unmount;it.add($),$.unmount=function(){it.delete($),it.size<1&&(c=Zi,I&&I(),I=null,l.value=Zi,Vt=!1,at=!1),ht()}}};function At($){return $.reduce((ft,ht)=>ft.then(()=>b(ht)),Promise.resolve())}return vt}function Do(){return di(pl)}const yy={class:"card-ovr"},xy={class:"card-pos"},My={class:"face-circle"},by=["src","alt"],Sy={key:1,class:"face-svg",viewBox:"0 0 80 80"},wy={class:"card-name"},Ey={class:"card-club"},Ty={class:"card-stats"},Ay={class:"stat-val"},Cy={class:"stat-lbl"},Ry={key:0,class:"icon-badge"},Py={__name:"PlayerCard",props:{player:{type:Object,required:!0}},setup(i){const t=Wt(!0);return(e,n)=>(Et(),Tt("div",{class:Pe(["player-card",`card-${i.player.tier}`])},[L("div",yy,_t(i.player.overall),1),L("div",xy,_t(i.player.position),1),L("div",My,[t.value?(Et(),Tt("img",{key:0,src:i.player.face_url,alt:i.player.name,class:"face-img",onError:n[0]||(n[0]=s=>t.value=!1)},null,40,by)):(Et(),Tt("svg",Sy,[...n[1]||(n[1]=[L("circle",{cx:"40",cy:"28",r:"18",fill:"rgba(255,255,255,.55)"},null,-1),L("ellipse",{cx:"40",cy:"72",rx:"26",ry:"20",fill:"rgba(255,255,255,.55)"},null,-1)])]))]),L("div",wy,_t(i.player.name),1),L("div",Ey,_t(i.player.club),1),L("div",Ty,[(Et(!0),Tt(me,null,Ve(i.player.stats,s=>(Et(),Tt("div",{key:s.label,class:"stat-box"},[L("span",Ay,_t(s.value),1),L("span",Cy,_t(s.label),1)]))),128))]),i.player.is_icon?(Et(),Tt("div",Ry,"★ LEGEND ★")):Ae("",!0)],2))}},Iy=qi(Py,[["__scopeId","data-v-d819ef52"]]),Ly={class:"splash"},Ny={class:"stadium"},Dy={key:0,class:"spotlight-wrap"},Uy={key:1,class:"spotlight-wrap"},Fy={__name:"SplashView",setup(i){const t=Do(),e=Wt(null),n=Wt(null);async function s(){try{const u=await fetch("/api/spotlight");e.value=await u.json()}catch{}}function r(){const u=n.value;if(!u)return;const h=["#b71c1c","#c62828","#d32f2f","#e53935","#1565c0","#1976d2","#0d47a1","#283593","#880e4f","#333"];for(let d=0;d<5;d++){const f=document.createElement("div");f.className="stand-row";for(let g=0;g<130;g++){const v=document.createElement("div");v.className="stand-seat";const p=Math.random();v.style.background=p<.55?h[Math.floor(Math.random()*4)]:p<.8?h[4+Math.floor(Math.random()*4)]:h[9],v.style.animationDelay=`${(Math.random()*1.5).toFixed(2)}s`,f.appendChild(v)}u.appendChild(f)}}Vs(()=>{s(),r()});function o(){t.push("/play")}function a(){t.push("/watch")}function l(){t.push("/game")}function c(){t.push("/career")}return(u,h)=>(Et(),Tt("div",Ly,[L("div",Ny,[h[2]||(h[2]=jc('<div class="sky" data-v-b8f18fa9></div><div class="fl fl-left" data-v-b8f18fa9><div class="fl-pole" data-v-b8f18fa9></div><div class="fl-head" data-v-b8f18fa9></div><div class="fl-beam" data-v-b8f18fa9></div></div><div class="fl fl-right" data-v-b8f18fa9><div class="fl-pole" data-v-b8f18fa9></div><div class="fl-head" data-v-b8f18fa9></div><div class="fl-beam fl-beam-r" data-v-b8f18fa9></div></div><div class="scoreboard" data-v-b8f18fa9><span class="sb-score" data-v-b8f18fa9>00 — 00</span><span class="sb-time" data-v-b8f18fa9>00:00</span></div>',4)),L("div",{class:"stands",ref_key:"standsRef",ref:n},null,512),h[3]||(h[3]=jc('<div class="pitch" data-v-b8f18fa9><svg class="pitch-svg" viewBox="0 0 800 160" preserveAspectRatio="none" data-v-b8f18fa9><rect x="30" y="8" width="740" height="144" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2" data-v-b8f18fa9></rect><line x1="400" y1="8" x2="400" y2="152" stroke="rgba(255,255,255,.5)" stroke-width="2" data-v-b8f18fa9></line><circle cx="400" cy="80" r="40" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2" data-v-b8f18fa9></circle><circle cx="400" cy="80" r="3" fill="rgba(255,255,255,.5)" data-v-b8f18fa9></circle><rect x="30" y="42" width="90" height="76" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-b8f18fa9></rect><rect x="30" y="58" width="44" height="44" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-b8f18fa9></rect><rect x="680" y="42" width="90" height="76" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-b8f18fa9></rect><rect x="726" y="58" width="44" height="44" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-b8f18fa9></rect><rect x="10" y="62" width="20" height="36" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.6)" stroke-width="1.5" data-v-b8f18fa9></rect><rect x="770" y="62" width="20" height="36" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.6)" stroke-width="1.5" data-v-b8f18fa9></rect></svg></div>',1)),e.value?(Et(),Tt("div",Dy,[h[0]||(h[0]=L("div",{class:"spotlight-label"},"★ Player Spotlight ★",-1)),Oe(Iy,{player:e.value},null,8,["player"])])):(Et(),Tt("div",Uy,[...h[1]||(h[1]=[L("div",{class:"spotlight-label"},"★ Player Spotlight ★",-1),L("div",{class:"card-loading"},"Loading…",-1)])]))]),L("div",{class:"menu"},[h[5]||(h[5]=L("div",{class:"title"},[L("h1",null,[In("The Beautiful Game "),L("span",{class:"year"},"2026")]),L("p",{class:"subtitle"},"Choose your game mode")],-1)),L("nav",{class:"menu-buttons"},[L("button",{class:"btn btn-primary",onClick:o},"▶  Play the Game"),L("button",{class:"btn btn-3d",onClick:l},"🎮  3D Match — New!"),L("button",{class:"btn btn-secondary",onClick:a},"◉  Watch the Play"),L("button",{class:"btn btn-career",onClick:c},"🏆  Career Mode"),h[4]||(h[4]=L("button",{class:"btn btn-disabled",disabled:""},[In(" The Journey "),L("span",{class:"badge"},"Coming Soon")],-1))])])]))}},Oy=qi(Fy,[["__scopeId","data-v-b8f18fa9"]]),By={class:"play-view"},ky={key:0,class:"screen select-screen"},zy={class:"team-pickers"},Vy={class:"picker-col"},Hy={class:"club-grid"},Gy=["disabled","onClick"],Wy={class:"club-name"},qy={class:"club-league"},Xy={class:"vs-col"},$y=["disabled"],jy={class:"picker-col"},Yy={class:"club-grid"},Ky=["disabled","onClick"],Zy={class:"club-name"},Jy={class:"club-league"},Qy={class:"scorebar"},tx={class:"sb-team"},ex={class:"sb-center"},nx={class:"sb-score"},ix={class:"sb-time"},sx={class:"sb-team away"},rx={class:"overlay-content"},ox={class:"overlay-title"},ax={key:0,class:"overlay-sub"},lx={key:2,class:"screen ft-screen"},cx={class:"ft-card"},ux={class:"ft-score"},hx={class:"ft-teams"},dx={key:0,class:"ft-scorers"},fx={class:"ft-min"},px={key:1,class:"ft-motm"},qo=900,Xo=400,Ee=200,xi=80,Ms=30,Xr=50,$o=40,mx=3,gx=2.5,Yh=30,vx=5400,_x=60,yx=2700,Kh=2.6,xx=4.2,Zh=.9,Mx=17,zl=28,bx=5,Sx=5.5,wx={__name:"PlayView",setup(i){const t=Do(),e=Xo/xi,n=qo/e,s=Wt([]),r=Wt(""),o=Wt(""),a=Wt("select"),l=Wt(null),c=Wt(null),u=Wt(0),h=Wt(0),d=Wt(""),f=Wt(""),g=Wt(0),v=Wt(null),p=Wt(""),m=Wt([]),y=Wt("");let _=null,S=null,P=null,T=0,A=!1,F=!1,b=null,M=[],V=[],Z=0,I=0,G=0;const B={up:!1,down:!1,left:!1,right:!1,space:!1,z:!1,x:!1,s:!1},k={space:!1,z:!1,s:!1};function at(q,gt){return(q.x-gt.x)**2+(q.y-gt.y)**2}function U(q,gt){return Math.sqrt(at(q,gt))}function O(q,gt,ct){return Math.max(gt,Math.min(ct,q))}function lt(q,gt){return q+Math.random()*(gt-q)}Vs(async()=>{try{const q=await fetch("/api/clubs");s.value=await q.json()}catch{}});function bt(){$(),t.push("/")}async function pt(){if(!(!r.value||!o.value))try{const[q,gt]=await Promise.all([fetch(`/api/teams/${encodeURIComponent(r.value)}`),fetch(`/api/teams/${encodeURIComponent(o.value)}`)]),ct=await q.json(),St=await gt.json();d.value=ct.club.name,f.value=St.club.name,Vt(ct.players,St.players)}catch{alert("Could not load team data — is the backend running?")}}function Vt(q,gt){u.value=0,h.value=0,T=0,F=!1,m.value=[],y.value="";const ct=[[4,40],[22,10],[22,30],[22,50],[22,70],[60,20],[60,40],[60,60],[85,15],[90,40],[85,65]],St=[[196,40],[178,70],[178,50],[178,30],[178,10],[140,60],[140,40],[140,20],[115,65],[110,40],[115,15]],xt=["GK","RB","CB","CB","LB","CM","CM","CM","RW","ST","LW"];M=q.slice(0,11).map((D,dt)=>({idx:dt,name:D.name,pos:xt[dt]||"CM",x:ct[dt][0],y:ct[dt][1],baseX:ct[dt][0],baseY:ct[dt][1],pace:D.pace||75,shooting:D.shooting||70,passing:D.passing||70,defending:D.defending||65,team:"home",hasBall:!1,sprintTimer:0,vx:0,vy:0})),V=gt.slice(0,11).map((D,dt)=>({idx:dt,name:D.name,pos:xt[dt]||"CM",x:St[dt][0],y:St[dt][1],baseX:St[dt][0],baseY:St[dt][1],pace:D.pace||75,shooting:D.shooting||70,passing:D.passing||70,defending:D.defending||65,team:"away",hasBall:!1,sprintTimer:0,vx:0,vy:0})),b={x:100,y:40,vx:0,vy:0},Z=N(100,40),I=0,G=0,A=!1,v.value=null,a.value="match",zs(()=>{_=l.value.getContext("2d"),At(),mt()})}function it(q){var gt;switch(q.code){case"ArrowUp":B.up=!0,q.preventDefault();break;case"ArrowDown":B.down=!0,q.preventDefault();break;case"ArrowLeft":B.left=!0,q.preventDefault();break;case"ArrowRight":B.right=!0,q.preventDefault();break;case"Space":k.space||(B.space=!0,k.space=!0),q.preventDefault();break;case"KeyZ":k.z||(B.z=!0,k.z=!0),q.preventDefault();break;case"KeyX":B.x=!0,q.preventDefault();break;case"KeyS":k.s||(B.s=!0,k.s=!0),q.preventDefault();break;case"Escape":ft(),q.preventDefault();break;case"Enter":(gt=v.value)!=null&&gt.action&&v.value.action(),q.preventDefault();break}}function vt(q){switch(q.code){case"ArrowUp":B.up=!1;break;case"ArrowDown":B.down=!1;break;case"ArrowLeft":B.left=!1;break;case"ArrowRight":B.right=!1;break;case"Space":B.space=!1,k.space=!1;break;case"KeyZ":B.z=!1,k.z=!1;break;case"KeyX":B.x=!1;break;case"KeyS":B.s=!1,k.s=!1;break}}Vs(()=>{window.addEventListener("keydown",it),window.addEventListener("keyup",vt)}),Tu(()=>{window.removeEventListener("keydown",it),window.removeEventListener("keyup",vt),$()});function At(){P=setInterval(ht,1e3/Yh)}function $(){P&&(clearInterval(P),P=null),S&&(cancelAnimationFrame(S),S=null)}function ft(){A=!A,A?(v.value={title:"PAUSED",subtitle:"Press Esc to continue",btn:"Resume",action:ft},p.value="overlay-pause"):v.value=null}function ht(){var gt;if(A)return;if(G>0){G--;return}if(T++,T===yx&&!F){A=!0,v.value={title:"HALF TIME",subtitle:`${d.value} ${u.value} – ${h.value} ${f.value}`,btn:"Kick Off",action:yt},p.value="overlay-halftime";return}if(T>=vx){Ct();return}g.value=Math.min(90,Math.floor(T/_x));const q=M[Z];if(q){let ct=Kh;B.x&&I===0?(ct=xx,q.sprintTimer=(q.sprintTimer||0)+1,q.sprintTimer>60&&(I=90,q.sprintTimer=0)):I>0&&I--;const St=ct*(1+q.pace/200);B.up&&(q.y=O(q.y-St,1,xi-1)),B.down&&(q.y=O(q.y+St,1,xi-1)),B.left&&(q.x=O(q.x-St,1,Ee-1)),B.right&&(q.x=O(q.x+St,1,Ee-1)),q.hasBall&&(b.x=q.x+(F?-2.5:2.5),b.y=q.y,b.vx=0,b.vy=0),B.space&&q.hasBall&&(B.space=!1,k.space=!1,j(q)),B.z&&q.hasBall&&(B.z=!1,k.z=!1,J(q)),B.s&&(B.s=!1,k.s=!1,st(q))}M.forEach((ct,St)=>{St!==Z&&w(ct,M,V,0,Ee,F?Ee:0)}),V.forEach(ct=>{w(ct,V,M,Ee,0,F?0:Ee)}),K()||(b.x+=b.vx,b.y+=b.vy,b.vx*=Zh,b.vy*=Zh,b.y<1&&(b.y=1,b.vy=Math.abs(b.vy)*.7),b.y>xi-1&&(b.y=xi-1,b.vy=-Math.abs(b.vy)*.7),b.x<1&&(b.x=1,b.vx=Math.abs(b.vx)*.6),b.x>Ee-1&&(b.x=Ee-1,b.vx=-Math.abs(b.vx)*.6),b.vx**2+b.vy**2<.09&&(b.vx=0,b.vy=0),W()),Y(),(gt=M[Z])!=null&&gt.hasBall||(Z=N(b.x,b.y))}function K(){for(const q of[...M,...V])if(q.hasBall)return q;return null}function W(){let q=null,gt=bx;const ct=[...M,...V];for(const St of ct){const xt=U(St,b);xt<gt&&(gt=xt,q=St)}q&&(C(),q.hasBall=!0)}function C(){[...M,...V].forEach(q=>{q.hasBall=!1})}function N(q,gt){let ct=0,St=1/0;return M.forEach((xt,D)=>{const dt=(xt.x-q)**2+(xt.y-gt)**2;dt<St&&(St=dt,ct=D)}),ct}function j(q){const gt=F?-1:1,ct=M.filter(Ut=>Ut.idx!==q.idx);let St=null,xt=-1/0;for(const Ut of ct){const ie=(Ut.x-q.x)*gt,Yt=U(q,Ut);if(Yt<3)continue;const ee=ie/(Yt+1);ee>xt&&(xt=ee,St=Ut)}St||(St=ct.reduce((Ut,ie)=>U(q,Ut)<U(q,ie)?Ut:ie));const D=St.x-q.x,dt=St.y-q.y,wt=Math.sqrt(D*D+dt*dt)||1,Ot=Mx*(1+q.passing/300);C(),b.vx=D/wt*Ot*lt(.9,1.1),b.vy=dt/wt*Ot*lt(.9,1.1)}function J(q){const gt=F?0:Ee,ct=(1-q.shooting/100)*12,St=$o+lt(-ct,ct),xt=gt-q.x,D=St-q.y,dt=Math.sqrt(xt*xt+D*D)||1,wt=zl*(.85+q.shooting/600);C(),b.vx=xt/dt*wt,b.vy=D/dt*wt}function st(q){const gt=[...V];for(const ct of gt)if(ct.hasBall&&U(q,ct)<Sx){ct.hasBall=!1,b.vx=lt(-3,3),b.vy=lt(-3,3);break}}function w(q,gt,ct,St,xt,D){const dt=K(),wt=(dt==null?void 0:dt.team)===q.team,Ot=q.baseX,Ut=q.baseY,ie=Kh*(.92+q.pace/500);let Yt=Ot,ee=Ut;if(dt===q){if(q.team==="home"?Yt=F?10:190:Yt=F?190:10,ee=$o+(q.y-$o)*.5,(q.team==="home"?F?q.x<50:q.x>150:F?q.x>150:q.x<50)&&q.y>Ms-12&&q.y<Xr+12){x(q);return}b.x=q.x+(Yt>q.x?2.5:-2.5),b.y=q.y,b.vx=0,b.vy=0}else if(wt)if(["ST","LW","RW","CAM"].includes(q.pos)){const _e=q.team==="home"?F?-8:8:F?8:-8;Yt=O(q.baseX+_e,5,Ee-5),ee=Ut+Math.sin(T/40+q.idx)*5}else["CM","CDM"].includes(q.pos)?(Yt=dt?(dt.x+Ot)/2:Ot,ee=Ut):(Yt=Ot,ee=Ut);else if(q.pos==="GK")Yt=D,ee=O(b.y,Ms,Xr);else if(["CB","LB","RB"].includes(q.pos)){const _e=b.x,se=b.y,Ne=D;Yt=O(Ne+(_e-Ne)*.35,Math.min(Ne+5,Ne+50),Math.max(Ne-5,Ne-50)),ee=O(se,5,xi-5)}else["CM","CDM"].includes(q.pos)?(Yt=b.x,ee=b.y):(Yt=Ot*.7+100*.3,ee=Ut);H(q,Yt,ee,ie)}function x(q){const gt=q.team==="home"?F?0:Ee:F?Ee:0,ct=(1-q.shooting/100)*10,St=$o+lt(-ct,ct),xt=gt-q.x,D=St-q.y,dt=Math.sqrt(xt*xt+D*D)||1;C(),b.vx=xt/dt*zl*.88,b.vy=D/dt*zl*.88}function H(q,gt,ct,St){const xt=gt-q.x,D=ct-q.y,dt=Math.sqrt(xt*xt+D*D);if(dt<.4)return;const wt=Math.min(St,dt);q.x=O(q.x+xt/dt*wt,1,Ee-1),q.y=O(q.y+D/dt*wt,1,xi-1)}function Y(){const q=b.y>=Ms&&b.y<=Xr;if(b.x<=0&&q){h.value++,m.value.push({team:"away",player:tt("away"),minute:g.value}),ut("away");return}b.x>=Ee&&q&&(u.value++,m.value.push({team:"home",player:tt("home"),minute:g.value}),ut("home"))}let X={home:"Unknown",away:"Unknown"};function tt(q){return X[q]}function ut(q){A=!0,G=Yh*2,p.value="overlay-goal",v.value={title:"⚽ GOAL!",subtitle:`${q==="home"?d.value:f.value} score!`,btn:null,action:null},setTimeout(()=>{v.value=null,A=!1,et()},2e3)}function et(q){const gt=[[4,40],[22,10],[22,30],[22,50],[22,70],[60,20],[60,40],[60,60],[85,15],[90,40],[85,65]],ct=[[196,40],[178,70],[178,50],[178,30],[178,10],[140,60],[140,40],[140,20],[115,65],[110,40],[115,15]];M.forEach((St,xt)=>{St.x=F?Ee-gt[xt][0]:gt[xt][0],St.y=gt[xt][1],St.hasBall=!1}),V.forEach((St,xt)=>{St.x=F?Ee-ct[xt][0]:ct[xt][0],St.y=ct[xt][1],St.hasBall=!1}),b.x=100,b.y=40,b.vx=0,b.vy=0,Z=N(100,40)}function yt(){F=!0,v.value=null,A=!1,M.forEach(q=>{q.baseX=Ee-q.baseX}),V.forEach(q=>{q.baseX=Ee-q.baseX}),et()}function Ct(){var gt,ct;$();const q={};m.value.forEach(St=>{q[St.player]=(q[St.player]||0)+1}),y.value=Object.keys(q).sort((St,xt)=>q[xt]-q[St])[0]||((gt=[...M,...V].reduce((St,xt)=>St.name||xt.name)[0])==null?void 0:gt.name)||((ct=M[0])==null?void 0:ct.name)||"",a.value="fulltime"}function mt(){function q(){Pt(),S=requestAnimationFrame(q)}S=requestAnimationFrame(q)}function Mt(){const q=b.x-n/2;return O(q,0,Ee-n)}function It(q,gt){const ct=Mt();return{x:(q-ct)*e,y:gt*e}}function Pt(){if(!_)return;const q=Mt();_.fillStyle="#2d7a2d",_.fillRect(0,0,qo,Xo);const gt=20*e;for(let je=0;je<Ee;je+=20){const An=(je-q)*e;An+gt<0||An>qo||(_.fillStyle=je%40===0?"rgba(0,0,0,.06)":"rgba(255,255,255,.02)",_.fillRect(An,0,gt,Xo))}_.strokeStyle="rgba(255,255,255,.55)",_.lineWidth=1.5;const ct=It(0,0),St=It(Ee,0),xt=It(0,xi);_.strokeRect(ct.x,ct.y+2,St.x-ct.x,xt.y-ct.y-4);const D=It(100,0),dt=It(100,xi);Nt(_,D.x,D.y+2,dt.x,dt.y-2);const wt=It(100,40);Gt(_,wt.x,wt.y,16*e);const Ot=22*e,Ut=(Xr-Ms+16)*e,ie=It(0,Ms-8).y,Yt=It(0,0).x;_.strokeRect(Yt,ie,Ot,Ut);const ee=It(Ee-22,0).x;_.strokeRect(ee,ie,Ot,Ut),_.strokeStyle="rgba(255,255,255,.7)";const _e=(Xr-Ms)*e,se=It(0,Ms).y,Ne=It(0,0).x-12;_.fillStyle="rgba(255,255,255,.06)",_.fillRect(Ne,se,12,_e),_.strokeRect(Ne,se,12,_e);const xn=It(Ee,0).x;_.fillStyle="rgba(255,255,255,.06)",_.fillRect(xn,se,12,_e),_.strokeRect(xn,se,12,_e),[...M,...V].forEach(je=>{const{x:An,y:Kn}=It(je.x,je.y),Dn=mx*e;_.fillStyle="rgba(0,0,0,.3)",_.beginPath(),_.ellipse(An,Kn+Dn*.8,Dn*.9,Dn*.4,0,0,Math.PI*2),_.fill(),_.fillStyle=je.team==="home"?"#1a6fc4":"#c4241a",_.beginPath(),_.arc(An,Kn,Dn,0,Math.PI*2),_.fill(),je.team==="home"&&je.idx===Z&&(_.strokeStyle="#fff",_.lineWidth=2,_.beginPath(),_.arc(An,Kn,Dn+2.5,0,Math.PI*2),_.stroke()),je.hasBall&&(_.fillStyle="#ffd700",_.beginPath(),_.arc(An+Dn*.8,Kn-Dn*.8,2.5,0,Math.PI*2),_.fill()),_.fillStyle="#fff",_.font=`bold ${Dn*.85}px Arial`,_.textAlign="center",_.textBaseline="middle",_.fillText(je.idx+1,An,Kn)});const{x:zr,y:Vr}=It(b.x,b.y),Ws=gx*e;_.fillStyle="rgba(0,0,0,.35)",_.beginPath(),_.ellipse(zr,Vr+Ws,Ws,Ws*.35,0,0,Math.PI*2),_.fill(),_.fillStyle="#fff",_.beginPath(),_.arc(zr,Vr,Ws,0,Math.PI*2),_.fill(),_.strokeStyle="#333",_.lineWidth=.8,_.stroke()}function Nt(q,gt,ct,St,xt){q.beginPath(),q.moveTo(gt,ct),q.lineTo(St,xt),q.stroke()}function Gt(q,gt,ct,St){q.beginPath(),q.arc(gt,ct,St,0,Math.PI*2),q.stroke()}return(q,gt)=>(Et(),Tt("div",By,[a.value==="select"?(Et(),Tt("div",ky,[L("header",{class:"screen-header"},[L("button",{class:"back-btn",onClick:bt},"← Back"),gt[2]||(gt[2]=L("h1",null,"Play the Game",-1)),gt[3]||(gt[3]=L("p",null,"Choose your team and opponent",-1))]),L("div",zy,[L("div",Vy,[gt[4]||(gt[4]=L("h2",{class:"picker-title"},"🎮 Your Team",-1)),L("div",Hy,[(Et(!0),Tt(me,null,Ve(s.value,ct=>(Et(),Tt("button",{key:ct.name,class:Pe(["club-btn",{selected:r.value===ct.name,blocked:o.value===ct.name}]),disabled:o.value===ct.name,onClick:St=>r.value=ct.name},[L("span",Wy,_t(ct.name),1),L("span",qy,_t(ct.league),1)],10,Gy))),128))])]),L("div",Xy,[gt[5]||(gt[5]=L("div",{class:"vs-badge"},"VS",-1)),L("button",{class:"kickoff-btn",disabled:!r.value||!o.value,onClick:pt}," Kick Off ⚽ ",8,$y)]),L("div",jy,[gt[6]||(gt[6]=L("h2",{class:"picker-title"},"🤖 Opponent",-1)),L("div",Yy,[(Et(!0),Tt(me,null,Ve(s.value,ct=>(Et(),Tt("button",{key:ct.name,class:Pe(["club-btn",{selected:o.value===ct.name,blocked:r.value===ct.name}]),disabled:r.value===ct.name,onClick:St=>o.value=ct.name},[L("span",Zy,_t(ct.name),1),L("span",Jy,_t(ct.league),1)],10,Ky))),128))])])])])):a.value==="match"?(Et(),Tt("div",{key:1,class:"match-wrapper",onKeydown:gt[1]||(gt[1]=s0(()=>{},["prevent"]))},[L("div",Qy,[L("span",tx,_t(d.value),1),L("div",ex,[L("span",nx,_t(u.value)+" – "+_t(h.value),1),L("span",ix,_t(g.value)+"'",1)]),L("span",sx,_t(f.value),1)]),L("div",{class:"canvas-wrap",ref_key:"canvasWrapRef",ref:c},[L("canvas",{ref_key:"canvasRef",ref:l,width:qo,height:Xo},null,512),v.value?(Et(),Tt("div",{key:0,class:Pe(["overlay",p.value])},[L("div",rx,[L("div",ox,_t(v.value.title),1),v.value.subtitle?(Et(),Tt("div",ax,_t(v.value.subtitle),1)):Ae("",!0),v.value.btn?(Et(),Tt("button",{key:1,class:"overlay-btn",onClick:gt[0]||(gt[0]=(...ct)=>v.value.action&&v.value.action(...ct))},_t(v.value.btn),1)):Ae("",!0)])],2)):Ae("",!0)],512),gt[7]||(gt[7]=jc('<div class="controls-bar" data-v-32f0e302><span data-v-32f0e302><kbd data-v-32f0e302>↑↓←→</kbd> Move</span><span data-v-32f0e302><kbd data-v-32f0e302>SPC</kbd> Pass</span><span data-v-32f0e302><kbd data-v-32f0e302>Z</kbd> Shoot</span><span data-v-32f0e302><kbd data-v-32f0e302>X</kbd> Sprint</span><span data-v-32f0e302><kbd data-v-32f0e302>S</kbd> Tackle</span><span data-v-32f0e302><kbd data-v-32f0e302>Esc</kbd> Pause</span></div>',1))],32)):a.value==="fulltime"?(Et(),Tt("div",lx,[L("div",cx,[gt[9]||(gt[9]=L("h2",null,"Full Time",-1)),L("div",ux,_t(u.value)+" – "+_t(h.value),1),L("div",hx,_t(d.value)+" vs "+_t(f.value),1),m.value.length?(Et(),Tt("div",dx,[(Et(!0),Tt(me,null,Ve(m.value,ct=>(Et(),Tt("div",{key:ct.player+ct.minute,class:"ft-scorer"},[In(" ⚽ "+_t(ct.player)+" ",1),L("span",fx,_t(ct.minute)+"'",1)]))),128))])):Ae("",!0),y.value?(Et(),Tt("div",px,[gt[8]||(gt[8]=In(" 🏅 Man of the Match: ",-1)),L("strong",null,_t(y.value),1)])):Ae("",!0),L("button",{class:"back-btn",onClick:bt},"Back to Menu")])])):Ae("",!0)]))}},Ex=qi(wx,[["__scopeId","data-v-32f0e302"]]),Tx={class:"ev-minute"},Ax={class:"ev-icon"},Cx={class:"ev-team"},Rx={class:"ev-player"},Px={key:0,class:"ev-detail"},Ix={key:0,class:"empty"},Lx={__name:"EventFeed",props:{events:{type:Array,default:()=>[]}},setup(i){const t=i,e=Wt(null),n={goal:"⚽",yellow:"🟨",red:"🟥",save:"🧤",miss:"💨",substitution:"🔄",injury:"🤕"};function s(r){return r?r.split(" ").slice(0,2).join(" "):""}return uo(()=>t.events.length,async()=>{await zs(),e.value&&(e.value.scrollTop=e.value.scrollHeight)}),(r,o)=>(Et(),Tt("div",{class:"event-feed",ref_key:"feedEl",ref:e},[(Et(!0),Tt(me,null,Ve(i.events,(a,l)=>(Et(),Tt("div",{key:l,class:Pe(["event-row",a.type])},[L("span",Tx,_t(a.minute)+"'",1),L("span",Ax,_t(n[a.type]||"•"),1),L("span",Cx,_t(s(a.team)),1),L("span",Rx,_t(a.player),1),a.detail?(Et(),Tt("span",Px,"— "+_t(a.detail),1)):Ae("",!0)],2))),128)),i.events.length===0?(Et(),Tt("div",Ix,"Waiting for kick-off…")):Ae("",!0)],512))}},Nx=qi(Lx,[["__scopeId","data-v-8a17ad14"]]),Dx={class:"postmatch"},Ux={class:"score-banner"},Fx={class:"team-block"},Ox={class:"team-name"},Bx={class:"score-center"},kx={class:"final-score"},zx={class:"team-block away"},Vx={class:"team-name"},Hx={key:0,class:"section"},Gx={class:"scorers-list"},Wx={class:"scorer-name"},qx={class:"scorer-minute"},Xx={class:"section stats-grid"},$x={class:"section ratings-grid"},jx={class:"ratings-cols"},Yx={class:"ratings-col"},Kx={class:"r-name"},Zx={class:"r-bar-wrap"},Jx={class:"r-val"},Qx={class:"ratings-col"},tM={class:"r-name"},eM={class:"r-bar-wrap"},nM={class:"r-val"},iM={key:1,class:"section motm-section"},sM={class:"motm-card"},rM={class:"motm-face"},oM=["src"],aM={key:1,viewBox:"0 0 80 80",class:"motm-svg"},lM={class:"motm-info"},cM={class:"motm-name"},uM={class:"motm-rating"},hM={components:{StatBar:{props:["label","home","away","unit","total"],template:`
        <div class="stat-bar-row">
          <span class="sb-val">{{ home }}{{ unit || '' }}</span>
          <span class="sb-label">{{ label }}</span>
          <span class="sb-val away">{{ away }}{{ unit || '' }}</span>
          <div class="sb-track">
            <div class="sb-fill-home" :style="{ width: homeW + '%' }"></div>
            <div class="sb-fill-away" :style="{ width: awayW + '%' }"></div>
          </div>
        </div>
      `,computed:{homeW(){const i=this.total||this.home+this.away;return i?this.home/i*100:50},awayW(){const i=this.total||this.home+this.away;return i?this.away/i*100:50}}}}},dM=Object.assign(hM,{__name:"PostMatch",props:{result:{type:Object,required:!0}},emits:["back"],setup(i){const t=i,e=Wt(!0),n=Ie(()=>[...t.result.scorers||[]].sort((a,l)=>a.minute-l.minute)),s=Ie(()=>t.result.ratings.filter(a=>a.team==="home").slice(0,5)),r=Ie(()=>t.result.ratings.filter(a=>a.team==="away").slice(0,5));function o(a){return a>=8?"#27ae60":a>=6.5?"#f39c12":"#e74c3c"}return(a,l)=>{var u;const c=Kp("StatBar");return Et(),Tt("div",Dx,[L("div",Ux,[L("div",Fx,[L("span",Ox,_t(i.result.home),1)]),L("div",Bx,[L("span",kx,_t(i.result.score.home)+" – "+_t(i.result.score.away),1),l[2]||(l[2]=L("span",{class:"full-time-label"},"Full Time",-1))]),L("div",zx,[L("span",Vx,_t(i.result.away),1)])]),n.value.length?(Et(),Tt("div",Hx,[l[3]||(l[3]=L("h3",{class:"section-title"},"⚽ Goal Scorers",-1)),L("div",Gx,[(Et(!0),Tt(me,null,Ve(n.value,h=>(Et(),Tt("div",{key:h.player+h.minute,class:"scorer-row"},[L("span",{class:Pe(["scorer-team-dot",h.team])},null,2),L("span",Wx,_t(h.player),1),L("span",qx,_t(h.minute)+"'",1)]))),128))])])):Ae("",!0),L("div",Xx,[l[4]||(l[4]=L("h3",{class:"section-title"},"📊 Match Stats",-1)),Oe(c,{label:"Possession",home:i.result.possession.home,away:i.result.possession.away,unit:"%"},null,8,["home","away"]),Oe(c,{label:"Shots",home:i.result.shots.home,away:i.result.shots.away,total:i.result.shots.home+i.result.shots.away},null,8,["home","away","total"]),Oe(c,{label:"On Target",home:i.result.shots_on_target.home,away:i.result.shots_on_target.away,total:i.result.shots.home+i.result.shots.away},null,8,["home","away","total"])]),L("div",$x,[l[5]||(l[5]=L("h3",{class:"section-title"},"⭐ Player Ratings",-1)),L("div",jx,[L("div",Yx,[L("h4",null,_t(i.result.home),1),(Et(!0),Tt(me,null,Ve(s.value,h=>(Et(),Tt("div",{key:h.player,class:"rating-row"},[L("span",Kx,_t(h.player),1),L("div",Zx,[L("div",{class:"r-bar",style:Ye({width:h.rating/10*100+"%",background:o(h.rating)})},null,4)]),L("span",Jx,_t(h.rating.toFixed(1)),1)]))),128))]),L("div",Qx,[L("h4",null,_t(i.result.away),1),(Et(!0),Tt(me,null,Ve(r.value,h=>(Et(),Tt("div",{key:h.player,class:"rating-row"},[L("span",tM,_t(h.player),1),L("div",eM,[L("div",{class:"r-bar",style:Ye({width:h.rating/10*100+"%",background:o(h.rating)})},null,4)]),L("span",nM,_t(h.rating.toFixed(1)),1)]))),128))])])]),(u=i.result.motm)!=null&&u.player?(Et(),Tt("div",iM,[l[7]||(l[7]=L("h3",{class:"section-title"},"🏅 Man of the Match",-1)),L("div",sM,[L("div",rM,[e.value&&i.result.motm.face_url?(Et(),Tt("img",{key:0,src:i.result.motm.face_url,onError:l[0]||(l[0]=h=>e.value=!1),class:"motm-img"},null,40,oM)):(Et(),Tt("svg",aM,[...l[6]||(l[6]=[L("circle",{cx:"40",cy:"28",r:"18",fill:"rgba(255,215,0,.5)"},null,-1),L("ellipse",{cx:"40",cy:"72",rx:"26",ry:"20",fill:"rgba(255,215,0,.5)"},null,-1)])]))]),L("div",lM,[L("div",cM,_t(i.result.motm.player),1),L("div",uM,_t(i.result.motm.rating.toFixed(1))+" / 10",1)])])])):Ae("",!0),L("button",{class:"back-btn",onClick:l[1]||(l[1]=h=>a.$emit("back"))},"← Back to Menu")])}}}),fM=qi(dM,[["__scopeId","data-v-c276b6ca"]]),pM={class:"watch-view"},mM={key:0,class:"screen select-screen"},gM={class:"team-pickers"},vM={class:"picker-col"},_M={class:"club-grid"},yM=["disabled","onClick"],xM={class:"club-name"},MM={class:"club-league"},bM={class:"vs-col"},SM=["disabled"],wM={class:"picker-col"},EM={class:"club-grid"},TM=["disabled","onClick"],AM={class:"club-name"},CM={class:"club-league"},RM={key:1,class:"screen match-screen"},PM={class:"match-scorebar"},IM={class:"team-name"},LM={class:"scorebox"},NM={class:"team-name"},DM={class:"feed-wrap"},UM={class:"match-footer"},FM={class:"progress-bar"},OM={class:"progress-label"},BM={key:2,class:"screen"},kM={key:3,class:"screen loading-screen"},zM={__name:"WatchView",setup(i){const t=Do(),e=Wt([]),n=Wt(""),s=Wt(""),r=Wt("select"),o=Wt(null),a=Wt([]),l=Ie(()=>o.value?a.value.length/o.value.events.length*100:0);Vs(async()=>{try{const d=await fetch("/api/clubs");e.value=await d.json()}catch{}});function c(){t.push("/")}async function u(){if(!(!n.value||!s.value)){r.value="loading";try{const d=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({home:n.value,away:s.value})});o.value=await d.json(),r.value="match",h()}catch{r.value="select",alert("Simulation failed — is the backend running?")}}}function h(){const d=o.value.events;let f=0;const g=setInterval(()=>{if(f>=d.length){clearInterval(g),setTimeout(()=>{r.value="postmatch"},1200);return}a.value.push(d[f++])},90)}return(d,f)=>(Et(),Tt("div",pM,[r.value==="select"?(Et(),Tt("div",mM,[L("header",{class:"screen-header"},[L("button",{class:"back-btn",onClick:c},"← Back"),f[0]||(f[0]=L("h1",null,"Watch the Play",-1)),f[1]||(f[1]=L("p",null,"Pick two clubs and watch the simulation unfold",-1))]),L("div",gM,[L("div",vM,[f[2]||(f[2]=L("h2",{class:"picker-title"},"🏠 Home Team",-1)),L("div",_M,[(Et(!0),Tt(me,null,Ve(e.value,g=>(Et(),Tt("button",{key:g.name,class:Pe(["club-btn",{selected:n.value===g.name,blocked:s.value===g.name}]),disabled:s.value===g.name,onClick:v=>n.value=g.name},[L("span",xM,_t(g.name),1),L("span",MM,_t(g.league),1)],10,yM))),128))])]),L("div",bM,[f[3]||(f[3]=L("div",{class:"vs-badge"},"VS",-1)),L("button",{class:"kickoff-btn",disabled:!n.value||!s.value,onClick:u}," Kick Off ⚽ ",8,SM)]),L("div",wM,[f[4]||(f[4]=L("h2",{class:"picker-title"},"✈️ Away Team",-1)),L("div",EM,[(Et(!0),Tt(me,null,Ve(e.value,g=>(Et(),Tt("button",{key:g.name,class:Pe(["club-btn",{selected:s.value===g.name,blocked:n.value===g.name}]),disabled:n.value===g.name,onClick:v=>s.value=g.name},[L("span",AM,_t(g.name),1),L("span",CM,_t(g.league),1)],10,TM))),128))])])])])):r.value==="match"?(Et(),Tt("div",RM,[L("div",PM,[L("span",IM,_t(o.value.home),1),L("span",LM,_t(o.value.score.home)+" – "+_t(o.value.score.away),1),L("span",NM,_t(o.value.away),1)]),L("div",DM,[Oe(Nx,{events:a.value},null,8,["events"])]),L("div",UM,[L("div",FM,[L("div",{class:"progress-fill",style:Ye({width:l.value+"%"})},null,4)]),L("span",OM,_t(a.value.length)+" / "+_t(o.value.events.length)+" events",1)])])):r.value==="postmatch"?(Et(),Tt("div",BM,[Oe(fM,{result:o.value,onBack:c},null,8,["result"])])):(Et(),Tt("div",kM,[...f[5]||(f[5]=[L("div",{class:"spinner"},null,-1),L("p",null,"Simulating match…",-1)])]))]))}},VM=qi(zM,[["__scopeId","data-v-67296064"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Iu="163",HM=0,Jh=1,GM=2,Dm=1,Um=2,Li=3,Gi=0,dn=1,ai=2,us=0,br=1,Qh=2,td=3,ed=4,WM=5,Ls=100,qM=101,XM=102,$M=103,jM=104,YM=200,KM=201,ZM=202,JM=203,eu=204,nu=205,QM=206,tb=207,eb=208,nb=209,ib=210,sb=211,rb=212,ob=213,ab=214,lb=0,cb=1,ub=2,Ga=3,hb=4,db=5,fb=6,pb=7,Lu=0,mb=1,gb=2,hs=0,vb=1,_b=2,yb=3,Fm=4,xb=5,Mb=6,bb=7,nd="attached",Sb="detached",Om=300,Rr=301,Pr=302,iu=303,su=304,ml=306,ru=1e3,Fs=1001,ou=1002,_n=1003,wb=1004,jo=1005,zn=1006,Vl=1007,Os=1008,ds=1009,Eb=1010,Tb=1011,Bm=1012,km=1013,Ir=1014,ui=1015,Wa=1016,zm=1017,Vm=1018,Uo=1020,Ab=35902,Cb=1021,Rb=1022,Hn=1023,Pb=1024,Ib=1025,Sr=1026,Co=1027,Hm=1028,Gm=1029,Lb=1030,Wm=1031,qm=1033,Hl=33776,Gl=33777,Wl=33778,ql=33779,id=35840,sd=35841,rd=35842,od=35843,Xm=36196,ad=37492,ld=37496,cd=37808,ud=37809,hd=37810,dd=37811,fd=37812,pd=37813,md=37814,gd=37815,vd=37816,_d=37817,yd=37818,xd=37819,Md=37820,bd=37821,Xl=36492,Sd=36494,wd=36495,Nb=36283,Ed=36284,Td=36285,Ad=36286,qa=2300,Xa=2301,$l=2302,Cd=2400,Rd=2401,Pd=2402,Db=2500,PI=0,II=1,LI=2,Ub=3200,Fb=3201,gl=0,Ob=1,ls="",Pn="srgb",ms="srgb-linear",Nu="display-p3",vl="display-p3-linear",$a="linear",Me="srgb",ja="rec709",Ya="p3",Xs=7680,Id=519,Bb=512,kb=513,zb=514,$m=515,Vb=516,Hb=517,Gb=518,Wb=519,au=35044,Ld="300 es",Bi=2e3,Ka=2001;class Ur{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nd=1234567;const vo=Math.PI/180,Lr=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function Du(i,t){return(i%t+t)%t}function qb(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xb(i,t,e){return i!==t?(e-i)/(t-i):0}function _o(i,t,e){return(1-e)*i+e*t}function $b(i,t,e,n){return _o(i,t,1-Math.exp(-e*n))}function jb(i,t=1){return t-Math.abs(Du(i,t*2)-t)}function Yb(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kb(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zb(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Jb(i,t){return i+Math.random()*(t-i)}function Qb(i){return i*(.5-Math.random())}function tS(i){i!==void 0&&(Nd=i);let t=Nd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eS(i){return i*vo}function nS(i){return i*Lr}function iS(i){return(i&i-1)===0&&i!==0}function sS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oS(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Za={DEG2RAD:vo,RAD2DEG:Lr,generateUUID:qn,clamp:He,euclideanModulo:Du,mapLinear:qb,inverseLerp:Xb,lerp:_o,damp:$b,pingpong:jb,smoothstep:Yb,smootherstep:Kb,randInt:Zb,randFloat:Jb,randFloatSpread:Qb,seededRandom:tS,degToRad:eS,radToDeg:nS,isPowerOfTwo:iS,ceilPowerOfTwo:sS,floorPowerOfTwo:rS,setQuaternionFromProperEuler:oS,normalize:ue,denormalize:Vn};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,r,o,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],y=s[1],_=s[4],S=s[7],P=s[2],T=s[5],A=s[8];return r[0]=o*v+a*y+l*P,r[3]=o*p+a*_+l*T,r[6]=o*m+a*S+l*A,r[1]=c*v+u*y+h*P,r[4]=c*p+u*_+h*T,r[7]=c*m+u*S+h*A,r[2]=d*v+f*y+g*P,r[5]=d*p+f*_+g*T,r[8]=d*m+f*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jl.makeScale(t,e)),this}rotate(t){return this.premultiply(jl.makeRotation(-t)),this}translate(t,e){return this.premultiply(jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jl=new te;function jm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function aS(){const i=Ro("canvas");return i.style.display="block",i}const Dd={};function Ym(i){i in Dd||(Dd[i]=!0,console.warn(i))}const Ud=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fd=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yo={[ms]:{transfer:$a,primaries:ja,toReference:i=>i,fromReference:i=>i},[Pn]:{transfer:Me,primaries:ja,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vl]:{transfer:$a,primaries:Ya,toReference:i=>i.applyMatrix3(Fd),fromReference:i=>i.applyMatrix3(Ud)},[Nu]:{transfer:Me,primaries:Ya,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Fd),fromReference:i=>i.applyMatrix3(Ud).convertLinearToSRGB()}},lS=new Set([ms,vl]),fe={enabled:!0,_workingColorSpace:ms,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!lS.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Yo[t].toReference,s=Yo[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Yo[i].primaries},getTransfer:function(i){return i===ls?$a:Yo[i].transfer}};function wr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $s;class cS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$s===void 0&&($s=Ro("canvas")),$s.width=t.width,$s.height=t.height;const n=$s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ro("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wr(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wr(e[n]/255)*255):e[n]=wr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uS=0;class Km{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hS=0;class Ke extends Ur{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=Fs,s=Fs,r=zn,o=Os,a=Hn,l=ds,c=Ke.DEFAULT_ANISOTROPY,u=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=qn(),this.name="",this.source=new Km(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Om)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ru:t.x=t.x-Math.floor(t.x);break;case Fs:t.x=t.x<0?0:1;break;case ou:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ru:t.y=t.y-Math.floor(t.y);break;case Fs:t.y=t.y<0?0:1;break;case ou:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Om;Ke.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,S=(f+1)/2,P=(m+1)/2,T=(u+d)/4,A=(h+v)/4,F=(g+p)/4;return _>S&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=A/n):S>P?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=F/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=F/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dS extends Ur{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Km(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hs extends dS{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zm extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fS extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Fr=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let p=1-a;const m=l*d+c*f+u*g+h*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const P=Math.sqrt(_),T=Math.atan2(P,m*y);p=Math.sin(p*T)/P,a=Math.sin(a*T)/P}const S=a*y;if(l=l*p+d*S,c=c*p+f*S,u=u*p+g*S,h=h*p+v*S,p===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-a*f,t[e+2]=c*g+u*f+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Od.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Od.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new z,Od=new Fr;class Xi{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(t.matrixWorld),this.union(Ko)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($r),Zo.subVectors(this.max,$r),js.subVectors(t.a,$r),Ys.subVectors(t.b,$r),Ks.subVectors(t.c,$r),Ji.subVectors(Ys,js),Qi.subVectors(Ks,Ys),bs.subVectors(js,Ks);let e=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-bs.z,bs.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,bs.z,0,-bs.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-bs.y,bs.x,0];return!Jl(e,js,Ys,Ks,Zo)||(e=[1,0,0,0,1,0,0,0,1],!Jl(e,js,Ys,Ks,Zo))?!1:(Jo.crossVectors(Ji,Qi),e=[Jo.x,Jo.y,Jo.z],Jl(e,js,Ys,Ks,Zo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mi=[new z,new z,new z,new z,new z,new z,new z,new z],Un=new z,Ko=new Xi,js=new z,Ys=new z,Ks=new z,Ji=new z,Qi=new z,bs=new z,$r=new z,Zo=new z,Jo=new z,Ss=new z;function Jl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ss.fromArray(i,r);const a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),l=t.dot(Ss),c=e.dot(Ss),u=n.dot(Ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const pS=new Xi,jr=new z,Ql=new z;let $i=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pS.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jr.subVectors(t,this.center);const e=jr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(jr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jr.copy(t.center).add(Ql)),this.expandByPoint(jr.copy(t.center).sub(Ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const bi=new z,tc=new z,Qo=new z,ts=new z,ec=new z,ta=new z,nc=new z;let _l=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tc.copy(t).add(e).multiplyScalar(.5),Qo.copy(e).sub(t).normalize(),ts.copy(this.origin).sub(tc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Qo),a=ts.dot(this.direction),l=-ts.dot(Qo),c=ts.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(tc).addScaledVector(Qo,d),f}intersectSphere(t,e){bi.subVectors(t.center,this.origin);const n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,n,s,r){ec.subVectors(e,t),ta.subVectors(n,t),nc.crossVectors(ec,ta);let o=this.direction.dot(nc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,t);const l=a*this.direction.dot(ta.crossVectors(ts,ta));if(l<0)return null;const c=a*this.direction.dot(ec.cross(ts));if(c<0||l+c>o)return null;const u=-a*ts.dot(nc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ne{constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,g,v,p){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,g,v,p)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Zs.setFromMatrixColumn(t,0).length(),r=1/Zs.setFromMatrixColumn(t,1).length(),o=1/Zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,v=c*h;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,v=c*h;e[0]=d-v*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-v*h}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+v,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mS,t,gS)}lookAt(t,e,n){const s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),es.crossVectors(n,bn),es.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),es.crossVectors(n,bn)),es.normalize(),ea.crossVectors(bn,es),s[0]=es.x,s[4]=ea.x,s[8]=bn.x,s[1]=es.y,s[5]=ea.y,s[9]=bn.y,s[2]=es.z,s[6]=ea.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],y=n[3],_=n[7],S=n[11],P=n[15],T=s[0],A=s[4],F=s[8],b=s[12],M=s[1],V=s[5],Z=s[9],I=s[13],G=s[2],B=s[6],k=s[10],at=s[14],U=s[3],O=s[7],lt=s[11],bt=s[15];return r[0]=o*T+a*M+l*G+c*U,r[4]=o*A+a*V+l*B+c*O,r[8]=o*F+a*Z+l*k+c*lt,r[12]=o*b+a*I+l*at+c*bt,r[1]=u*T+h*M+d*G+f*U,r[5]=u*A+h*V+d*B+f*O,r[9]=u*F+h*Z+d*k+f*lt,r[13]=u*b+h*I+d*at+f*bt,r[2]=g*T+v*M+p*G+m*U,r[6]=g*A+v*V+p*B+m*O,r[10]=g*F+v*Z+p*k+m*lt,r[14]=g*b+v*I+p*at+m*bt,r[3]=y*T+_*M+S*G+P*U,r[7]=y*A+_*V+S*B+P*O,r[11]=y*F+_*Z+S*k+P*lt,r[15]=y*b+_*I+S*at+P*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+p*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+m*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],y=h*p*c-v*d*c+v*l*f-a*p*f-h*l*m+a*d*m,_=g*d*c-u*p*c-g*l*f+o*p*f+u*l*m-o*d*m,S=u*v*c-g*h*c+g*a*f-o*v*f-u*a*m+o*h*m,P=g*h*l-u*v*l-g*a*d+o*v*d+u*a*p-o*h*p,T=e*y+n*_+s*S+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(v*d*r-h*p*r-v*s*f+n*p*f+h*s*m-n*d*m)*A,t[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*m+n*l*m)*A,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*A,t[4]=_*A,t[5]=(u*p*r-g*d*r+g*s*f-e*p*f-u*s*m+e*d*m)*A,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*A,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*f+e*l*f)*A,t[8]=S*A,t[9]=(g*h*r-u*v*r-g*n*f+e*v*f+u*n*m-e*h*m)*A,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*m+e*a*m)*A,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*f-e*a*f)*A,t[12]=P*A,t[13]=(u*v*s-g*h*s+g*n*d-e*v*d-u*n*p+e*h*p)*A,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*p-e*a*p)*A,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,v=o*u,p=o*h,m=a*h,y=l*c,_=l*u,S=l*h,P=n.x,T=n.y,A=n.z;return s[0]=(1-(v+m))*P,s[1]=(f+S)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(d+m))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(g+_)*A,s[9]=(p-y)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Zs.set(s[0],s[1],s[2]).length();const o=Zs.set(s[4],s[5],s[6]).length(),a=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fn.copy(this);const c=1/r,u=1/o,h=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,e.setFromRotationMatrix(Fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Bi){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Bi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ka)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Bi){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*c,f=(n+s)*u;let g,v;if(a===Bi)g=(o+r)*h,v=-2*h;else if(a===Ka)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zs=new z,Fn=new ne,mS=new z(0,0,0),gS=new z(1,1,1),es=new z,ea=new z,bn=new z,Bd=new ne,kd=new Fr;class jn{constructor(t=0,e=0,n=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kd.setFromEuler(this),this.setFromQuaternion(kd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Jm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vS=0;const zd=new z,Js=new Fr,Si=new ne,na=new z,Yr=new z,_S=new z,yS=new Fr,Vd=new z(1,0,0),Hd=new z(0,1,0),Gd=new z(0,0,1),Wd={type:"added"},xS={type:"removed"},Qs={type:"childadded",child:null},ic={type:"childremoved",child:null};class Ce extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new z,e=new jn,n=new Fr,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new te}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(Vd,t)}rotateY(t){return this.rotateOnAxis(Hd,t)}rotateZ(t){return this.rotateOnAxis(Gd,t)}translateOnAxis(t,e){return zd.copy(t).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vd,t)}translateY(t){return this.translateOnAxis(Hd,t)}translateZ(t){return this.translateOnAxis(Gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?na.copy(t):na.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Yr,na,this.up):Si.lookAt(na,Yr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Si),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wd),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xS),ic.child=t,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wd),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,t,_S),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,yS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new z(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new z,wi=new z,sc=new z,Ei=new z,tr=new z,er=new z,qd=new z,rc=new z,oc=new z,ac=new z;class li{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),wi.subVectors(n,e),sc.subVectors(t,e);const o=On.dot(On),a=On.dot(wi),l=On.dot(sc),c=wi.dot(wi),u=wi.dot(sc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),wi.subVectors(t,e),On.cross(wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),On.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return li.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return li.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;tr.subVectors(s,n),er.subVectors(r,n),rc.subVectors(t,n);const l=tr.dot(rc),c=er.dot(rc);if(l<=0&&c<=0)return e.copy(n);oc.subVectors(t,s);const u=tr.dot(oc),h=er.dot(oc);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(tr,o);ac.subVectors(t,r);const f=tr.dot(ac),g=er.dot(ac);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(er,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return qd.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(qd,a);const m=1/(p+v+d);return o=v*m,a=d*m,e.copy(n).addScaledVector(tr,o).addScaledVector(er,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},ia={h:0,s:0,l:0};function lc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=Du(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=lc(o,r,t+1/3),this.g=lc(o,r,t),this.b=lc(o,r,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=Pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){const n=Qm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}copyLinearToSRGB(t){return this.r=Yl(t.r),this.g=Yl(t.g),this.b=Yl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return fe.fromWorkingColorSpace(tn.copy(this),t),Math.round(He(tn.r*255,0,255))*65536+Math.round(He(tn.g*255,0,255))*256+Math.round(He(tn.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Pn){fe.fromWorkingColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,s=tn.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(ia);const n=_o(ns.h,ia.h,e),s=_o(ns.s,ia.s,e),r=_o(ns.l,ia.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new kt;kt.NAMES=Qm;let MS=0,ji=class extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=br,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=nu,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eu&&(n.blendSrc=this.blendSrc),this.blendDst!==nu&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Id&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Po extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new z,sa=new Dt;class Nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=au,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ym("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==au&&(t.usage=this.usage),t}}class tg extends Nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eg extends Nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends Nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bS=0;const Rn=new ne,cc=new Ce,nr=new z,Sn=new Xi,Kr=new Xi,Xe=new z;class yn extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jm(t)?eg:tg)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(Sn.min,Kr.min),Sn.expandByPoint(Xe),Xe.addVectors(Sn.max,Kr.max),Sn.expandByPoint(Xe)):(Sn.expandByPoint(Kr.min),Sn.expandByPoint(Kr.max))}Sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xe.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(t,c),Xe.add(nr)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new z,l[F]=new z;const c=new z,u=new z,h=new z,d=new Dt,f=new Dt,g=new Dt,v=new z,p=new z;function m(F,b,M){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const V=1/(f.x*g.y-g.x*f.y);isFinite(V)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(V),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(V),a[F].add(v),a[b].add(v),a[M].add(v),l[F].add(p),l[b].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let F=0,b=y.length;F<b;++F){const M=y[F],V=M.start,Z=M.count;for(let I=V,G=V+Z;I<G;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const _=new z,S=new z,P=new z,T=new z;function A(F){P.fromBufferAttribute(s,F),T.copy(P);const b=a[F];_.copy(b),_.sub(P.multiplyScalar(P.dot(b))).normalize(),S.crossVectors(T,b);const V=S.dot(l[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,V)}for(let F=0,b=y.length;F<b;++F){const M=y[F],V=M.start,Z=M.count;for(let I=V,G=V+Z;I<G;I+=3)A(t.getX(I+0)),A(t.getX(I+1)),A(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new Nn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xd=new ne,ws=new _l,ra=new $i,$d=new z,ir=new z,sr=new z,rr=new z,uc=new z,oa=new z,aa=new Dt,la=new Dt,ca=new Dt,jd=new z,Yd=new z,Kd=new z,ua=new z,ha=new z;class pe extends Ce{constructor(t=new yn,e=new Po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(uc.fromBufferAttribute(h,t),o?oa.addScaledVector(uc,u):oa.addScaledVector(uc.sub(e),u))}e.add(oa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),ws.copy(t.ray).recast(t.near),!(ra.containsPoint(ws.origin)===!1&&(ws.intersectSphere(ra,$d)===null||ws.origin.distanceToSquared($d)>(t.far-t.near)**2))&&(Xd.copy(r).invert(),ws.copy(t.ray).applyMatrix4(Xd),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,P=_;S<P;S+=3){const T=a.getX(S),A=a.getX(S+1),F=a.getX(S+2);s=da(this,m,t,n,c,u,h,T,A,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=a.getX(p),_=a.getX(p+1),S=a.getX(p+2);s=da(this,o,t,n,c,u,h,y,_,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,P=_;S<P;S+=3){const T=S,A=S+1,F=S+2;s=da(this,m,t,n,c,u,h,T,A,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,_=p+1,S=p+2;s=da(this,o,t,n,c,u,h,y,_,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function SS(i,t,e,n,s,r,o,a){let l;if(t.side===dn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gi,a),l===null)return null;ha.copy(a),ha.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ha);return c<e.near||c>e.far?null:{distance:c,point:ha.clone(),object:i}}function da(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ir),i.getVertexPosition(l,sr),i.getVertexPosition(c,rr);const u=SS(i,t,e,n,ir,sr,rr,ua);if(u){s&&(aa.fromBufferAttribute(s,a),la.fromBufferAttribute(s,l),ca.fromBufferAttribute(s,c),u.uv=li.getInterpolation(ua,ir,sr,rr,aa,la,ca,new Dt)),r&&(aa.fromBufferAttribute(r,a),la.fromBufferAttribute(r,l),ca.fromBufferAttribute(r,c),u.uv1=li.getInterpolation(ua,ir,sr,rr,aa,la,ca,new Dt)),o&&(jd.fromBufferAttribute(o,a),Yd.fromBufferAttribute(o,l),Kd.fromBufferAttribute(o,c),u.normal=li.getInterpolation(ua,ir,sr,rr,jd,Yd,Kd,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};li.getNormal(ir,sr,rr,h.normal),u.face=h}return u}class fs extends yn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(h,2));function g(v,p,m,y,_,S,P,T,A,F,b){const M=S/A,V=P/F,Z=S/2,I=P/2,G=T/2,B=A+1,k=F+1;let at=0,U=0;const O=new z;for(let lt=0;lt<k;lt++){const bt=lt*V-I;for(let pt=0;pt<B;pt++){const Vt=pt*M-Z;O[v]=Vt*y,O[p]=bt*_,O[m]=G,c.push(O.x,O.y,O.z),O[v]=0,O[p]=0,O[m]=T>0?1:-1,u.push(O.x,O.y,O.z),h.push(pt/A),h.push(1-lt/F),at+=1}}for(let lt=0;lt<F;lt++)for(let bt=0;bt<A;bt++){const pt=d+bt+B*lt,Vt=d+bt+B*(lt+1),it=d+(bt+1)+B*(lt+1),vt=d+(bt+1)+B*lt;l.push(pt,Vt,vt),l.push(Vt,it,vt),U+=6}a.addGroup(f,U,b),f+=U,d+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){const t={};for(let e=0;e<i.length;e++){const n=Nr(i[e]);for(const s in n)t[s]=n[s]}return t}function wS(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ng(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const ES={clone:Nr,merge:an};var TS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TS,this.fragmentShader=AS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=wS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ig extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new z,Zd=new Dt,Jd=new Dt;class vn extends ig{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,e){return this.getViewBounds(t,Zd,Jd),e.subVectors(Jd,Zd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const or=-90,ar=1;class CS extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(or,ar,t,e);s.layers=this.layers,this.add(s);const r=new vn(or,ar,t,e);r.layers=this.layers,this.add(r);const o=new vn(or,ar,t,e);o.layers=this.layers,this.add(o);const a=new vn(or,ar,t,e);a.layers=this.layers,this.add(a);const l=new vn(or,ar,t,e);l.layers=this.layers,this.add(l);const c=new vn(or,ar,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sg extends Ke{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Rr,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class RS extends Hs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new sg(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fs(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:us});r.uniforms.tEquirect.value=e;const o=new pe(s,r),a=e.minFilter;return e.minFilter===Os&&(e.minFilter=zn),new CS(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const hc=new z,PS=new z,IS=new te;let Ps=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=hc.subVectors(n,e).cross(PS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(hc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||IS.getNormalMatrix(t),s=this.coplanarPoint(hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Es=new $i,fa=new z;class Uu{constructor(t=new Ps,e=new Ps,n=new Ps,s=new Ps,r=new Ps,o=new Ps){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],y=s[13],_=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,p-f,S-m).normalize(),n[1].setComponents(l+r,d+c,p+f,S+m).normalize(),n[2].setComponents(l+o,d+u,p+g,S+y).normalize(),n[3].setComponents(l-o,d-u,p-g,S-y).normalize(),n[4].setComponents(l-a,d-h,p-v,S-_).normalize(),e===Bi)n[5].setComponents(l+a,d+h,p+v,S+_).normalize();else if(e===Ka)n[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fa.x=s.normal.x>0?t.max.x:t.min.x,fa.y=s.normal.y>0?t.max.y:t.min.y,fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rg(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function LS(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),h.count===-1&&d.length===0&&i.bufferSubData(c,0,u),d.length!==0){for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ci extends yn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const y=m*d-o;for(let _=0;_<c;_++){const S=_*h-r;g.push(S,-y,0),v.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const _=y+c*m,S=y+c*(m+1),P=y+1+c*(m+1),T=y+1+c*m;f.push(_,S,T),f.push(S,P,T)}this.setIndex(f),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.widthSegments,t.heightSegments)}}var NS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,US=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,GS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$S=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ow=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cw="gl_FragColor = linearToOutputTexel( gl_FragColor );",uw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,hw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_w=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ww=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ew=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ow=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ww=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$w=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Kw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ME=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,VE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:NS,alphahash_pars_fragment:DS,alphamap_fragment:US,alphamap_pars_fragment:FS,alphatest_fragment:OS,alphatest_pars_fragment:BS,aomap_fragment:kS,aomap_pars_fragment:zS,batching_pars_vertex:VS,batching_vertex:HS,begin_vertex:GS,beginnormal_vertex:WS,bsdfs:qS,iridescence_fragment:XS,bumpmap_pars_fragment:$S,clipping_planes_fragment:jS,clipping_planes_pars_fragment:YS,clipping_planes_pars_vertex:KS,clipping_planes_vertex:ZS,color_fragment:JS,color_pars_fragment:QS,color_pars_vertex:tw,color_vertex:ew,common:nw,cube_uv_reflection_fragment:iw,defaultnormal_vertex:sw,displacementmap_pars_vertex:rw,displacementmap_vertex:ow,emissivemap_fragment:aw,emissivemap_pars_fragment:lw,colorspace_fragment:cw,colorspace_pars_fragment:uw,envmap_fragment:hw,envmap_common_pars_fragment:dw,envmap_pars_fragment:fw,envmap_pars_vertex:pw,envmap_physical_pars_fragment:Tw,envmap_vertex:mw,fog_vertex:gw,fog_pars_vertex:vw,fog_fragment:_w,fog_pars_fragment:yw,gradientmap_pars_fragment:xw,lightmap_fragment:Mw,lightmap_pars_fragment:bw,lights_lambert_fragment:Sw,lights_lambert_pars_fragment:ww,lights_pars_begin:Ew,lights_toon_fragment:Aw,lights_toon_pars_fragment:Cw,lights_phong_fragment:Rw,lights_phong_pars_fragment:Pw,lights_physical_fragment:Iw,lights_physical_pars_fragment:Lw,lights_fragment_begin:Nw,lights_fragment_maps:Dw,lights_fragment_end:Uw,logdepthbuf_fragment:Fw,logdepthbuf_pars_fragment:Ow,logdepthbuf_pars_vertex:Bw,logdepthbuf_vertex:kw,map_fragment:zw,map_pars_fragment:Vw,map_particle_fragment:Hw,map_particle_pars_fragment:Gw,metalnessmap_fragment:Ww,metalnessmap_pars_fragment:qw,morphinstance_vertex:Xw,morphcolor_vertex:$w,morphnormal_vertex:jw,morphtarget_pars_vertex:Yw,morphtarget_vertex:Kw,normal_fragment_begin:Zw,normal_fragment_maps:Jw,normal_pars_fragment:Qw,normal_pars_vertex:tE,normal_vertex:eE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:sE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:oE,opaque_fragment:aE,packing:lE,premultiplied_alpha_fragment:cE,project_vertex:uE,dithering_fragment:hE,dithering_pars_fragment:dE,roughnessmap_fragment:fE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:vE,shadowmask_pars_fragment:_E,skinbase_vertex:yE,skinning_pars_vertex:xE,skinning_vertex:ME,skinnormal_vertex:bE,specularmap_fragment:SE,specularmap_pars_fragment:wE,tonemapping_fragment:EE,tonemapping_pars_fragment:TE,transmission_fragment:AE,transmission_pars_fragment:CE,uv_pars_fragment:RE,uv_pars_vertex:PE,uv_vertex:IE,worldpos_vertex:LE,background_vert:NE,background_frag:DE,backgroundCube_vert:UE,backgroundCube_frag:FE,cube_vert:OE,cube_frag:BE,depth_vert:kE,depth_frag:zE,distanceRGBA_vert:VE,distanceRGBA_frag:HE,equirect_vert:GE,equirect_frag:WE,linedashed_vert:qE,linedashed_frag:XE,meshbasic_vert:$E,meshbasic_frag:jE,meshlambert_vert:YE,meshlambert_frag:KE,meshmatcap_vert:ZE,meshmatcap_frag:JE,meshnormal_vert:QE,meshnormal_frag:tT,meshphong_vert:eT,meshphong_frag:nT,meshphysical_vert:iT,meshphysical_frag:sT,meshtoon_vert:rT,meshtoon_frag:oT,points_vert:aT,points_frag:lT,shadow_vert:cT,shadow_frag:uT,sprite_vert:hT,sprite_frag:dT},Rt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ri={basic:{uniforms:an([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:an([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:an([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:an([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:an([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:an([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:an([Rt.points,Rt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:an([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:an([Rt.common,Rt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:an([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:an([Rt.sprite,Rt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:an([Rt.common,Rt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:an([Rt.lights,Rt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};ri.physical={uniforms:an([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const pa={r:0,b:0,g:0},Ts=new jn,fT=new ne;function pT(i,t,e,n,s,r,o){const a=new kt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(p,m){let y=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),y=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ml)?(u===void 0&&(u=new pe(new fs(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Nr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ts.copy(m.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fT.makeRotationFromEuler(Ts)),u.material.toneMapped=fe.getTransfer(_.colorSpace)!==Me,(h!==_||d!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new pe(new ci(2,2),new Yn({name:"BackgroundMaterial",uniforms:Nr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=fe.getTransfer(_.colorSpace)!==Me,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,m){p.getRGB(pa,ng(i)),n.buffers.color.setClear(pa.r,pa.g,pa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:g}}function mT(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,V,Z,I,G){let B=!1;const k=h(I,Z,V);r!==k&&(r=k,c(r.object)),B=f(M,I,Z,G),B&&g(M,I,Z,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(M,V,Z,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,V,Z){const I=Z.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let B=G[V.id];B===void 0&&(B={},G[V.id]=B);let k=B[I];return k===void 0&&(k=d(l()),B[I]=k),k}function d(M){const V=[],Z=[],I=[];for(let G=0;G<e;G++)V[G]=0,Z[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:I,object:M,attributes:{},index:null}}function f(M,V,Z,I){const G=r.attributes,B=V.attributes;let k=0;const at=Z.getAttributes();for(const U in at)if(at[U].location>=0){const lt=G[U];let bt=B[U];if(bt===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),lt===void 0||lt.attribute!==bt||bt&&lt.data!==bt.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function g(M,V,Z,I){const G={},B=V.attributes;let k=0;const at=Z.getAttributes();for(const U in at)if(at[U].location>=0){let lt=B[U];lt===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));const bt={};bt.attribute=lt,lt&&lt.data&&(bt.data=lt.data),G[U]=bt,k++}r.attributes=G,r.attributesNum=k,r.index=I}function v(){const M=r.newAttributes;for(let V=0,Z=M.length;V<Z;V++)M[V]=0}function p(M){m(M,0)}function m(M,V){const Z=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;Z[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),G[M]!==V&&(i.vertexAttribDivisor(M,V),G[M]=V)}function y(){const M=r.newAttributes,V=r.enabledAttributes;for(let Z=0,I=V.length;Z<I;Z++)V[Z]!==M[Z]&&(i.disableVertexAttribArray(Z),V[Z]=0)}function _(M,V,Z,I,G,B,k){k===!0?i.vertexAttribIPointer(M,V,Z,G,B):i.vertexAttribPointer(M,V,Z,I,G,B)}function S(M,V,Z,I){v();const G=I.attributes,B=Z.getAttributes(),k=V.defaultAttributeValues;for(const at in B){const U=B[at];if(U.location>=0){let O=G[at];if(O===void 0&&(at==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),at==="instanceColor"&&M.instanceColor&&(O=M.instanceColor)),O!==void 0){const lt=O.normalized,bt=O.itemSize,pt=t.get(O);if(pt===void 0)continue;const Vt=pt.buffer,it=pt.type,vt=pt.bytesPerElement,At=it===i.INT||it===i.UNSIGNED_INT||O.gpuType===km;if(O.isInterleavedBufferAttribute){const $=O.data,ft=$.stride,ht=O.offset;if($.isInstancedInterleavedBuffer){for(let K=0;K<U.locationSize;K++)m(U.location+K,$.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let K=0;K<U.locationSize;K++)p(U.location+K);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let K=0;K<U.locationSize;K++)_(U.location+K,bt/U.locationSize,it,lt,ft*vt,(ht+bt/U.locationSize*K)*vt,At)}else{if(O.isInstancedBufferAttribute){for(let $=0;$<U.locationSize;$++)m(U.location+$,O.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let $=0;$<U.locationSize;$++)p(U.location+$);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let $=0;$<U.locationSize;$++)_(U.location+$,bt/U.locationSize,it,lt,bt*vt,bt/U.locationSize*$*vt,At)}}else if(k!==void 0){const lt=k[at];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(U.location,lt);break;case 3:i.vertexAttrib3fv(U.location,lt);break;case 4:i.vertexAttrib4fv(U.location,lt);break;default:i.vertexAttrib1fv(U.location,lt)}}}}y()}function P(){F();for(const M in n){const V=n[M];for(const Z in V){const I=V[Z];for(const G in I)u(I[G].object),delete I[G];delete V[Z]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const V=n[M.id];for(const Z in V){const I=V[Z];for(const G in I)u(I[G].object),delete I[G];delete V[Z]}delete n[M.id]}function A(M){for(const V in n){const Z=n[V];if(Z[M.id]===void 0)continue;const I=Z[M.id];for(const G in I)u(I[G].object),delete I[G];delete Z[M.id]}}function F(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function gT(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<u;d++)this.render(l[d],c[d]);else{h.multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function vT(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=e.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:p,vertexTextures:m,maxSamples:y}}function _T(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ps,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,_=y*4;let S=m.clippingState||null;l.value=S,S=u(g,d,_,f);for(let P=0;P!==_;++P)S[P]=e[P];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,S=f;_!==v;++_,S+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function yT(i){let t=new WeakMap;function e(o,a){return a===iu?o.mapping=Rr:a===su&&(o.mapping=Pr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===iu||a===su)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new RS(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class og extends ig{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gr=4,Qd=[.125,.215,.35,.446,.526,.582],Ns=20,dc=new og,tf=new kt;let fc=null,pc=0,mc=0,gc=!1;const Is=(1+Math.sqrt(5))/2,lr=1/Is,ef=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Is,lr),new z(0,Is,-lr),new z(lr,0,Is),new z(-lr,0,Is),new z(Is,lr,0),new z(-Is,lr,0)];class nf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fc,pc,mc),this._renderer.xr.enabled=gc,t.scissorTest=!1,ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rr||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Wa,format:Hn,colorSpace:ms,depthBuffer:!1},s=sf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sf(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xT(r)),this._blurMaterial=MT(r,t,e)}return s}_compileMaterial(t){const e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,dc)}_sceneToCubeUV(t,e,n,s){const a=new vn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(tf),u.toneMapping=hs,u.autoClear=!1;const f=new Po({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new pe(new fs,f);let v=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(tf),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const _=this._cubeSize;ma(s,y*_,m>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Rr||t.mapping===Pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ma(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,dc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ef[(s-1)%ef.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ns-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):Ns;p>Ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ns}`);const m=[];let y=0;for(let A=0;A<Ns;++A){const F=A/v,b=Math.exp(-F*F/2);m.push(b),A===0?y+=b:A<p&&(y+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const S=this._sizeLods[s],P=3*S*(s>_-gr?s-_+gr:0),T=4*(this._cubeSize-S);ma(e,P,T,3*S,2*S),l.setRenderTarget(e),l.render(h,dc)}}function xT(i){const t=[],e=[],n=[];let s=i;const r=i-gr+1+Qd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-gr?l=Qd[o-i+gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*f),_=new Float32Array(p*g*f),S=new Float32Array(m*g*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,F=T>2?0:-1,b=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];y.set(b,v*g*T),_.set(d,p*g*T);const M=[T,T,T,T,T,T];S.set(M,m*g*T)}const P=new yn;P.setAttribute("position",new Nn(y,v)),P.setAttribute("uv",new Nn(_,p)),P.setAttribute("faceIndex",new Nn(S,m)),t.push(P),s>gr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sf(i,t,e){const n=new Hs(i,t,e);return n.texture.mapping=ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function MT(i,t,e){const n=new Float32Array(Ns),s=new z(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function rf(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function of(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function Fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bT(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===iu||l===su,u=l===Rr||l===Pr;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new nf(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new nf(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ST(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wT(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,S=y.length;_<S;_+=3){const P=y[_+0],T=y[_+1],A=y[_+2];d.push(P,T,T,A,A,P)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,S=y.length/3-1;_<S;_+=3){const P=_+0,T=_+1,A=_+2;d.push(P,T,T,A,A,P)}}else return;const p=new(jm(d)?eg:tg)(d,1);p.version=v;const m=r.get(h);m&&t.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ET(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),e.update(d,n,f))}function u(h,d,f){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<f;v++)this.render(h[v]/o,d[v]);else{g.multiDrawElementsWEBGL(n,d,0,r,h,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];e.update(v,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function TT(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function AT(i,t,e){const n=new WeakMap,s=new ve;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let S=a.attributes.position.count*_,P=1;S>t.maxTextureSize&&(P=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const T=new Float32Array(S*P*4*h),A=new Zm(T,S,P,h);A.type=ui,A.needsUpdate=!0;const F=_*4;for(let M=0;M<h;M++){const V=p[M],Z=m[M],I=y[M],G=S*P*4*M;for(let B=0;B<V.count;B++){const k=B*F;f===!0&&(s.fromBufferAttribute(V,B),T[G+k+0]=s.x,T[G+k+1]=s.y,T[G+k+2]=s.z,T[G+k+3]=0),g===!0&&(s.fromBufferAttribute(Z,B),T[G+k+4]=s.x,T[G+k+5]=s.y,T[G+k+6]=s.z,T[G+k+7]=0),v===!0&&(s.fromBufferAttribute(I,B),T[G+k+8]=s.x,T[G+k+9]=s.y,T[G+k+10]=s.z,T[G+k+11]=I.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new Dt(S,P)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function CT(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class ag extends Ke{constructor(t,e,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Sr,u!==Sr&&u!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Sr&&(n=Ir),n===void 0&&u===Co&&(n=Uo),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lg=new Ke,cg=new ag(1,1);cg.compareFunction=$m;const ug=new Zm,hg=new fS,dg=new sg,af=[],lf=[],cf=new Float32Array(16),uf=new Float32Array(9),hf=new Float32Array(4);function Or(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=af[s];if(r===void 0&&(r=new Float32Array(s),af[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yl(i,t){let e=lf[t];e===void 0&&(e=new Int32Array(t),lf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function RT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function PT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function IT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function LT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function NT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;hf.set(n),i.uniformMatrix2fv(this.addr,!1,hf),We(e,n)}}function DT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),We(e,n)}}function UT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;cf.set(n),i.uniformMatrix4fv(this.addr,!1,cf),We(e,n)}}function FT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function OT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function BT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function kT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function zT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function VT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function HT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function GT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function WT(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?cg:lg;e.setTexture2D(t||r,s)}function qT(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hg,s)}function XT(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||dg,s)}function $T(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ug,s)}function jT(i){switch(i){case 5126:return RT;case 35664:return PT;case 35665:return IT;case 35666:return LT;case 35674:return NT;case 35675:return DT;case 35676:return UT;case 5124:case 35670:return FT;case 35667:case 35671:return OT;case 35668:case 35672:return BT;case 35669:case 35673:return kT;case 5125:return zT;case 36294:return VT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return $T}}function YT(i,t){i.uniform1fv(this.addr,t)}function KT(i,t){const e=Or(t,this.size,2);i.uniform2fv(this.addr,e)}function ZT(i,t){const e=Or(t,this.size,3);i.uniform3fv(this.addr,e)}function JT(i,t){const e=Or(t,this.size,4);i.uniform4fv(this.addr,e)}function QT(i,t){const e=Or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function t1(i,t){const e=Or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function e1(i,t){const e=Or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function n1(i,t){i.uniform1iv(this.addr,t)}function i1(i,t){i.uniform2iv(this.addr,t)}function s1(i,t){i.uniform3iv(this.addr,t)}function r1(i,t){i.uniform4iv(this.addr,t)}function o1(i,t){i.uniform1uiv(this.addr,t)}function a1(i,t){i.uniform2uiv(this.addr,t)}function l1(i,t){i.uniform3uiv(this.addr,t)}function c1(i,t){i.uniform4uiv(this.addr,t)}function u1(i,t,e){const n=this.cache,s=t.length,r=yl(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lg,r[o])}function h1(i,t,e){const n=this.cache,s=t.length,r=yl(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hg,r[o])}function d1(i,t,e){const n=this.cache,s=t.length,r=yl(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||dg,r[o])}function f1(i,t,e){const n=this.cache,s=t.length,r=yl(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ug,r[o])}function p1(i){switch(i){case 5126:return YT;case 35664:return KT;case 35665:return ZT;case 35666:return JT;case 35674:return QT;case 35675:return t1;case 35676:return e1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return s1;case 35669:case 35673:return r1;case 5125:return o1;case 36294:return a1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return f1}}class m1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jT(e.type)}}class g1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p1(e.type)}}class v1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function df(i,t){i.seq.push(t),i.map[t.id]=t}function _1(i,t,e){const n=i.name,s=n.length;for(vc.lastIndex=0;;){const r=vc.exec(n),o=vc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){df(e,c===void 0?new m1(a,i,t):new g1(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new v1(a),df(e,h)),e=h}}}class Na{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);_1(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ff(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const y1=37297;let x1=0;function M1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function b1(i){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(i);let n;switch(t===e?n="":t===Ya&&e===ja?n="LinearDisplayP3ToLinearSRGB":t===ja&&e===Ya&&(n="LinearSRGBToLinearDisplayP3"),i){case ms:case vl:return[n,"LinearTransferOETF"];case Pn:case Nu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function pf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+M1(i.getShaderSource(t),o)}else return s}function S1(i,t){const e=b1(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function w1(i,t){let e;switch(t){case vb:e="Linear";break;case _b:e="Reinhard";break;case yb:e="OptimizedCineon";break;case Fm:e="ACESFilmic";break;case Mb:e="AgX";break;case bb:e="Neutral";break;case xb:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function E1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function T1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function A1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function oo(i){return i!==""}function mf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const C1=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(i){return i.replace(C1,P1)}const R1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function P1(i,t){let e=Qt[t];if(e===void 0){const n=R1.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lu(e)}const I1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(i){return i.replace(I1,L1)}function L1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _f(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dm?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Um?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function D1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rr:case Pr:t="ENVMAP_TYPE_CUBE";break;case ml:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pr:t="ENVMAP_MODE_REFRACTION";break}return t}function F1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lu:t="ENVMAP_BLENDING_MULTIPLY";break;case mb:t="ENVMAP_BLENDING_MIX";break;case gb:t="ENVMAP_BLENDING_ADD";break}return t}function O1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function B1(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=N1(e),c=D1(e),u=U1(e),h=F1(e),d=O1(e),f=E1(e),g=T1(r),v=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oo).join(`
`),m.length>0&&(m+=`
`)):(p=[_f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),m=[_f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hs?"#define TONE_MAPPING":"",e.toneMapping!==hs?Qt.tonemapping_pars_fragment:"",e.toneMapping!==hs?w1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,S1("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oo).join(`
`)),o=lu(o),o=mf(o,e),o=gf(o,e),a=lu(a),a=mf(a,e),a=gf(a,e),o=vf(o),a=vf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+p+o,S=y+m+a,P=ff(s,s.VERTEX_SHADER,_),T=ff(s,s.FRAGMENT_SHADER,S);s.attachShader(v,P),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(V){if(i.debug.checkShaderErrors){const Z=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(P).trim(),G=s.getShaderInfoLog(T).trim();let B=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,T);else{const at=pf(s,P,"vertex"),U=pf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+at+`
`+U)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(I===""||G==="")&&(k=!1);k&&(V.diagnostics={runnable:B,programLog:Z,vertexShader:{log:I,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(P),s.deleteShader(T),F=new Na(s,v),b=A1(s,v)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,y1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=T,this}let k1=0;class z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new V1(t),e.set(t,n)),n}}class V1{constructor(t){this.id=k1++,this.code=t,this.usedTimes=0}}function H1(i,t,e,n,s,r,o){const a=new Jm,l=new z1,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,M,V,Z,I){const G=Z.fog,B=I.geometry,k=b.isMeshStandardMaterial?Z.environment:null,at=(b.isMeshStandardMaterial?e:t).get(b.envMap||k),U=at&&at.mapping===ml?at.image.height:null,O=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const lt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,bt=lt!==void 0?lt.length:0;let pt=0;B.morphAttributes.position!==void 0&&(pt=1),B.morphAttributes.normal!==void 0&&(pt=2),B.morphAttributes.color!==void 0&&(pt=3);let Vt,it,vt,At;if(O){const _e=ri[O];Vt=_e.vertexShader,it=_e.fragmentShader}else Vt=b.vertexShader,it=b.fragmentShader,l.update(b),vt=l.getVertexShaderID(b),At=l.getFragmentShaderID(b);const $=i.getRenderTarget(),ft=I.isInstancedMesh===!0,ht=I.isBatchedMesh===!0,K=!!b.map,W=!!b.matcap,C=!!at,N=!!b.aoMap,j=!!b.lightMap,J=!!b.bumpMap,st=!!b.normalMap,w=!!b.displacementMap,x=!!b.emissiveMap,H=!!b.metalnessMap,Y=!!b.roughnessMap,X=b.anisotropy>0,tt=b.clearcoat>0,ut=b.iridescence>0,et=b.sheen>0,yt=b.transmission>0,Ct=X&&!!b.anisotropyMap,mt=tt&&!!b.clearcoatMap,Mt=tt&&!!b.clearcoatNormalMap,It=tt&&!!b.clearcoatRoughnessMap,Pt=ut&&!!b.iridescenceMap,Nt=ut&&!!b.iridescenceThicknessMap,Gt=et&&!!b.sheenColorMap,q=et&&!!b.sheenRoughnessMap,gt=!!b.specularMap,ct=!!b.specularColorMap,St=!!b.specularIntensityMap,xt=yt&&!!b.transmissionMap,D=yt&&!!b.thicknessMap,dt=!!b.gradientMap,wt=!!b.alphaMap,Ot=b.alphaTest>0,Ut=!!b.alphaHash,ie=!!b.extensions;let Yt=hs;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Yt=i.toneMapping);const ee={shaderID:O,shaderType:b.type,shaderName:b.name,vertexShader:Vt,fragmentShader:it,defines:b.defines,customVertexShaderID:vt,customFragmentShaderID:At,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ht,instancing:ft,instancingColor:ft&&I.instanceColor!==null,instancingMorph:ft&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ms,alphaToCoverage:!!b.alphaToCoverage,map:K,matcap:W,envMap:C,envMapMode:C&&at.mapping,envMapCubeUVHeight:U,aoMap:N,lightMap:j,bumpMap:J,normalMap:st,displacementMap:d&&w,emissiveMap:x,normalMapObjectSpace:st&&b.normalMapType===Ob,normalMapTangentSpace:st&&b.normalMapType===gl,metalnessMap:H,roughnessMap:Y,anisotropy:X,anisotropyMap:Ct,clearcoat:tt,clearcoatMap:mt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:It,iridescence:ut,iridescenceMap:Pt,iridescenceThicknessMap:Nt,sheen:et,sheenColorMap:Gt,sheenRoughnessMap:q,specularMap:gt,specularColorMap:ct,specularIntensityMap:St,transmission:yt,transmissionMap:xt,thicknessMap:D,gradientMap:dt,opaque:b.transparent===!1&&b.blending===br&&b.alphaToCoverage===!1,alphaMap:wt,alphaTest:Ot,alphaHash:Ut,combine:b.combine,mapUv:K&&v(b.map.channel),aoMapUv:N&&v(b.aoMap.channel),lightMapUv:j&&v(b.lightMap.channel),bumpMapUv:J&&v(b.bumpMap.channel),normalMapUv:st&&v(b.normalMap.channel),displacementMapUv:w&&v(b.displacementMap.channel),emissiveMapUv:x&&v(b.emissiveMap.channel),metalnessMapUv:H&&v(b.metalnessMap.channel),roughnessMapUv:Y&&v(b.roughnessMap.channel),anisotropyMapUv:Ct&&v(b.anisotropyMap.channel),clearcoatMapUv:mt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:q&&v(b.sheenRoughnessMap.channel),specularMapUv:gt&&v(b.specularMap.channel),specularColorMapUv:ct&&v(b.specularColorMap.channel),specularIntensityMapUv:St&&v(b.specularIntensityMap.channel),transmissionMapUv:xt&&v(b.transmissionMap.channel),thicknessMapUv:D&&v(b.thicknessMap.channel),alphaMapUv:wt&&v(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(st||X),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(K||wt),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:pt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:K&&b.map.isVideoTexture===!0&&fe.getTransfer(b.map.colorSpace)===Me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ai,flipSided:b.side===dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ie&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ie&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function m(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)M.push(V),M.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(y(M,b),_(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),b.push(a.mask)}function S(b){const M=g[b.type];let V;if(M){const Z=ri[M];V=ES.clone(Z.uniforms)}else V=b.uniforms;return V}function P(b,M){let V;for(let Z=0,I=u.length;Z<I;Z++){const G=u[Z];if(G.cacheKey===M){V=G,++V.usedTimes;break}}return V===void 0&&(V=new B1(i,M,b,r),u.push(V)),V}function T(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:P,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:F}}function G1(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function W1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,v,p){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},i[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=v,m.group=p),t++,m}function a(h,d,f,g,v,p){const m=o(h,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(h,d,f,g,v,p){const m=o(h,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,d){e.length>1&&e.sort(h||W1),n.length>1&&n.sort(d||yf),s.length>1&&s.sort(d||yf)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function q1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new xf,i.set(n,[o])):s>=r.length?(o=new xf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function X1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new kt};break;case"SpotLight":e={position:new z,direction:new z,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function $1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let j1=0;function Y1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function K1(i){const t=new X1,e=$1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new ne,o=new ne;function a(c,u){let h=0,d=0,f=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let g=0,v=0,p=0,m=0,y=0,_=0,S=0,P=0,T=0,A=0,F=0;c.sort(Y1);const b=u===!0?Math.PI:1;for(let V=0,Z=c.length;V<Z;V++){const I=c[V],G=I.color,B=I.intensity,k=I.distance,at=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=G.r*B*b,d+=G.g*B*b,f+=G.b*B*b;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],B);F++}else if(I.isDirectionalLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const O=I.shadow,lt=e.get(I);lt.shadowBias=O.bias,lt.shadowNormalBias=O.normalBias,lt.shadowRadius=O.radius,lt.shadowMapSize=O.mapSize,n.directionalShadow[g]=lt,n.directionalShadowMap[g]=at,n.directionalShadowMatrix[g]=I.shadow.matrix,_++}n.directional[g]=U,g++}else if(I.isSpotLight){const U=t.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(G).multiplyScalar(B*b),U.distance=k,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[p]=U;const O=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,O.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[p]=O.matrix,I.castShadow){const lt=e.get(I);lt.shadowBias=O.bias,lt.shadowNormalBias=O.normalBias,lt.shadowRadius=O.radius,lt.shadowMapSize=O.mapSize,n.spotShadow[p]=lt,n.spotShadowMap[p]=at,P++}p++}else if(I.isRectAreaLight){const U=t.get(I);U.color.copy(G).multiplyScalar(B),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=U,m++}else if(I.isPointLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*b),U.distance=I.distance,U.decay=I.decay,I.castShadow){const O=I.shadow,lt=e.get(I);lt.shadowBias=O.bias,lt.shadowNormalBias=O.normalBias,lt.shadowRadius=O.radius,lt.shadowMapSize=O.mapSize,lt.shadowCameraNear=O.camera.near,lt.shadowCameraFar=O.camera.far,n.pointShadow[v]=lt,n.pointShadowMap[v]=at,n.pointShadowMatrix[v]=I.shadow.matrix,S++}n.point[v]=U,v++}else if(I.isHemisphereLight){const U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(B*b),U.groundColor.copy(I.groundColor).multiplyScalar(B*b),n.hemi[y]=U,y++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const M=n.hash;(M.directionalLength!==g||M.pointLength!==v||M.spotLength!==p||M.rectAreaLength!==m||M.hemiLength!==y||M.numDirectionalShadows!==_||M.numPointShadows!==S||M.numSpotShadows!==P||M.numSpotMaps!==T||M.numLightProbes!==F)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=v,n.hemi.length=y,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=P+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=F,M.directionalLength=g,M.pointLength=v,M.spotLength=p,M.rectAreaLength=m,M.hemiLength=y,M.numDirectionalShadows=_,M.numPointShadows=S,M.numSpotShadows=P,M.numSpotMaps=T,M.numLightProbes=F,n.version=j1++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const _=c[m];if(_.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(_.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(_.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Mf(i){const t=new K1(i),e=[],n=[];function s(){e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(u){t.setup(e,u)}function l(u){t.setupView(e,u)}return{init:s,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Z1(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Mf(i),t.set(s,[a])):r>=o.length?(a=new Mf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class J1 extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Q1 extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nA(i,t,e){let n=new Uu;const s=new Dt,r=new Dt,o=new ve,a=new J1({depthPacking:Fb}),l=new Q1,c={},u=e.maxTextureSize,h={[Gi]:dn,[dn]:Gi,[ai]:ai},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:tA,fragmentShader:eA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dm;let m=this.type;this.render=function(T,A,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(us),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const I=m!==Li&&this.type===Li,G=m===Li&&this.type!==Li;for(let B=0,k=T.length;B<k;B++){const at=T[B],U=at.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const O=U.getFrameExtents();if(s.multiply(O),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/O.x),s.x=r.x*O.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/O.y),s.y=r.y*O.y,U.mapSize.y=r.y)),U.map===null||I===!0||G===!0){const bt=this.type!==Li?{minFilter:_n,magFilter:_n}:{};U.map!==null&&U.map.dispose(),U.map=new Hs(s.x,s.y,bt),U.map.texture.name=at.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const lt=U.getViewportCount();for(let bt=0;bt<lt;bt++){const pt=U.getViewport(bt);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),Z.viewport(o),U.updateMatrices(at,bt),n=U.getFrustum(),S(A,F,U.camera,at,this.type)}U.isPointLightShadow!==!0&&this.type===Li&&y(U,F),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,M,V)};function y(T,A){const F=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hs(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,F,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,F,f,v,null)}function _(T,A,F,b){let M=null;const V=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)M=V;else if(M=F.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Z=M.uuid,I=A.uuid;let G=c[Z];G===void 0&&(G={},c[Z]=G);let B=G[I];B===void 0&&(B=M.clone(),G[I]=B,A.addEventListener("dispose",P)),M=B}if(M.visible=A.visible,M.wireframe=A.wireframe,b===Li?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Z=i.properties.get(M);Z.light=F}return M}function S(T,A,F,b,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Li)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const I=t.update(T),G=T.material;if(Array.isArray(G)){const B=I.groups;for(let k=0,at=B.length;k<at;k++){const U=B[k],O=G[U.materialIndex];if(O&&O.visible){const lt=_(T,O,b,M);T.onBeforeShadow(i,T,A,F,I,lt,U),i.renderBufferDirect(F,null,I,lt,T,U),T.onAfterShadow(i,T,A,F,I,lt,U)}}}else if(G.visible){const B=_(T,G,b,M);T.onBeforeShadow(i,T,A,F,I,B,null),i.renderBufferDirect(F,null,I,B,T,null),T.onAfterShadow(i,T,A,F,I,B,null)}}const Z=T.children;for(let I=0,G=Z.length;I<G;I++)S(Z[I],A,F,b,M)}function P(T){T.target.removeEventListener("dispose",P);for(const F in c){const b=c[F],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function iA(i){function t(){let D=!1;const dt=new ve;let wt=null;const Ot=new ve(0,0,0,0);return{setMask:function(Ut){wt!==Ut&&!D&&(i.colorMask(Ut,Ut,Ut,Ut),wt=Ut)},setLocked:function(Ut){D=Ut},setClear:function(Ut,ie,Yt,ee,_e){_e===!0&&(Ut*=ee,ie*=ee,Yt*=ee),dt.set(Ut,ie,Yt,ee),Ot.equals(dt)===!1&&(i.clearColor(Ut,ie,Yt,ee),Ot.copy(dt))},reset:function(){D=!1,wt=null,Ot.set(-1,0,0,0)}}}function e(){let D=!1,dt=null,wt=null,Ot=null;return{setTest:function(Ut){Ut?At(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(Ut){dt!==Ut&&!D&&(i.depthMask(Ut),dt=Ut)},setFunc:function(Ut){if(wt!==Ut){switch(Ut){case lb:i.depthFunc(i.NEVER);break;case cb:i.depthFunc(i.ALWAYS);break;case ub:i.depthFunc(i.LESS);break;case Ga:i.depthFunc(i.LEQUAL);break;case hb:i.depthFunc(i.EQUAL);break;case db:i.depthFunc(i.GEQUAL);break;case fb:i.depthFunc(i.GREATER);break;case pb:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Ut}},setLocked:function(Ut){D=Ut},setClear:function(Ut){Ot!==Ut&&(i.clearDepth(Ut),Ot=Ut)},reset:function(){D=!1,dt=null,wt=null,Ot=null}}}function n(){let D=!1,dt=null,wt=null,Ot=null,Ut=null,ie=null,Yt=null,ee=null,_e=null;return{setTest:function(se){D||(se?At(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(se){dt!==se&&!D&&(i.stencilMask(se),dt=se)},setFunc:function(se,Ne,xn){(wt!==se||Ot!==Ne||Ut!==xn)&&(i.stencilFunc(se,Ne,xn),wt=se,Ot=Ne,Ut=xn)},setOp:function(se,Ne,xn){(ie!==se||Yt!==Ne||ee!==xn)&&(i.stencilOp(se,Ne,xn),ie=se,Yt=Ne,ee=xn)},setLocked:function(se){D=se},setClear:function(se){_e!==se&&(i.clearStencil(se),_e=se)},reset:function(){D=!1,dt=null,wt=null,Ot=null,Ut=null,ie=null,Yt=null,ee=null,_e=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,y=null,_=null,S=null,P=null,T=new kt(0,0,0),A=0,F=!1,b=null,M=null,V=null,Z=null,I=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const at=i.getParameter(i.VERSION);at.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(at)[1]),B=k>=1):at.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),B=k>=2);let U=null,O={};const lt=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),pt=new ve().fromArray(lt),Vt=new ve().fromArray(bt);function it(D,dt,wt,Ot){const Ut=new Uint8Array(4),ie=i.createTexture();i.bindTexture(D,ie),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<wt;Yt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Ot,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(dt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return ie}const vt={};vt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),At(i.DEPTH_TEST),r.setFunc(Ga),J(!1),st(Jh),At(i.CULL_FACE),N(us);function At(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function $(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function ft(D,dt){return u[D]!==dt?(i.bindFramebuffer(D,dt),u[D]=dt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function ht(D,dt){let wt=d,Ot=!1;if(D){wt=h.get(dt),wt===void 0&&(wt=[],h.set(dt,wt));const Ut=D.textures;if(wt.length!==Ut.length||wt[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Yt=Ut.length;ie<Yt;ie++)wt[ie]=i.COLOR_ATTACHMENT0+ie;wt.length=Ut.length,Ot=!0}}else wt[0]!==i.BACK&&(wt[0]=i.BACK,Ot=!0);Ot&&i.drawBuffers(wt)}function K(D){return f!==D?(i.useProgram(D),f=D,!0):!1}const W={[Ls]:i.FUNC_ADD,[qM]:i.FUNC_SUBTRACT,[XM]:i.FUNC_REVERSE_SUBTRACT};W[$M]=i.MIN,W[jM]=i.MAX;const C={[YM]:i.ZERO,[KM]:i.ONE,[ZM]:i.SRC_COLOR,[eu]:i.SRC_ALPHA,[ib]:i.SRC_ALPHA_SATURATE,[eb]:i.DST_COLOR,[QM]:i.DST_ALPHA,[JM]:i.ONE_MINUS_SRC_COLOR,[nu]:i.ONE_MINUS_SRC_ALPHA,[nb]:i.ONE_MINUS_DST_COLOR,[tb]:i.ONE_MINUS_DST_ALPHA,[sb]:i.CONSTANT_COLOR,[rb]:i.ONE_MINUS_CONSTANT_COLOR,[ob]:i.CONSTANT_ALPHA,[ab]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,dt,wt,Ot,Ut,ie,Yt,ee,_e,se){if(D===us){g===!0&&($(i.BLEND),g=!1);return}if(g===!1&&(At(i.BLEND),g=!0),D!==WM){if(D!==v||se!==F){if((p!==Ls||_!==Ls)&&(i.blendEquation(i.FUNC_ADD),p=Ls,_=Ls),se)switch(D){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qh:i.blendFunc(i.ONE,i.ONE);break;case td:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ed:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case td:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ed:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,y=null,S=null,P=null,T.set(0,0,0),A=0,v=D,F=se}return}Ut=Ut||dt,ie=ie||wt,Yt=Yt||Ot,(dt!==p||Ut!==_)&&(i.blendEquationSeparate(W[dt],W[Ut]),p=dt,_=Ut),(wt!==m||Ot!==y||ie!==S||Yt!==P)&&(i.blendFuncSeparate(C[wt],C[Ot],C[ie],C[Yt]),m=wt,y=Ot,S=ie,P=Yt),(ee.equals(T)===!1||_e!==A)&&(i.blendColor(ee.r,ee.g,ee.b,_e),T.copy(ee),A=_e),v=D,F=!1}function j(D,dt){D.side===ai?$(i.CULL_FACE):At(i.CULL_FACE);let wt=D.side===dn;dt&&(wt=!wt),J(wt),D.blending===br&&D.transparent===!1?N(us):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const Ot=D.stencilWrite;o.setTest(Ot),Ot&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),x(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?At(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function st(D){D!==HM?(At(i.CULL_FACE),D!==M&&(D===Jh?i.cullFace(i.BACK):D===GM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),M=D}function w(D){D!==V&&(B&&i.lineWidth(D),V=D)}function x(D,dt,wt){D?(At(i.POLYGON_OFFSET_FILL),(Z!==dt||I!==wt)&&(i.polygonOffset(dt,wt),Z=dt,I=wt)):$(i.POLYGON_OFFSET_FILL)}function H(D){D?At(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function Y(D){D===void 0&&(D=i.TEXTURE0+G-1),U!==D&&(i.activeTexture(D),U=D)}function X(D,dt,wt){wt===void 0&&(U===null?wt=i.TEXTURE0+G-1:wt=U);let Ot=O[wt];Ot===void 0&&(Ot={type:void 0,texture:void 0},O[wt]=Ot),(Ot.type!==D||Ot.texture!==dt)&&(U!==wt&&(i.activeTexture(wt),U=wt),i.bindTexture(D,dt||vt[D]),Ot.type=D,Ot.texture=dt)}function tt(){const D=O[U];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ut(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(D){pt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),pt.copy(D))}function gt(D){Vt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Vt.copy(D))}function ct(D,dt){let wt=l.get(dt);wt===void 0&&(wt=new WeakMap,l.set(dt,wt));let Ot=wt.get(D);Ot===void 0&&(Ot=i.getUniformBlockIndex(dt,D.name),wt.set(D,Ot))}function St(D,dt){const Ot=l.get(dt).get(D);a.get(dt)!==Ot&&(i.uniformBlockBinding(dt,Ot,D.__bindingPointIndex),a.set(dt,Ot))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},U=null,O={},u={},h=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,y=null,_=null,S=null,P=null,T=new kt(0,0,0),A=0,F=!1,b=null,M=null,V=null,Z=null,I=null,pt.set(0,0,i.canvas.width,i.canvas.height),Vt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:At,disable:$,bindFramebuffer:ft,drawBuffers:ht,useProgram:K,setBlending:N,setMaterial:j,setFlipSided:J,setCullFace:st,setLineWidth:w,setPolygonOffset:x,setScissorTest:H,activeTexture:Y,bindTexture:X,unbindTexture:tt,compressedTexImage2D:ut,compressedTexImage3D:et,texImage2D:Nt,texImage3D:Gt,updateUBOMapping:ct,uniformBlockBinding:St,texStorage2D:It,texStorage3D:Pt,texSubImage2D:yt,texSubImage3D:Ct,compressedTexSubImage2D:mt,compressedTexSubImage3D:Mt,scissor:q,viewport:gt,reset:xt}}function sA(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return f?new OffscreenCanvas(w,x):Ro("canvas")}function v(w,x,H){let Y=1;const X=st(w);if((X.width>H||X.height>H)&&(Y=H/Math.max(X.width,X.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const tt=Math.floor(Y*X.width),ut=Math.floor(Y*X.height);h===void 0&&(h=g(tt,ut));const et=x?g(tt,ut):h;return et.width=tt,et.height=ut,et.getContext("2d").drawImage(w,0,0,tt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+tt+"x"+ut+")."),et}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==_n&&w.minFilter!==zn}function m(w){i.generateMipmap(w)}function y(w,x,H,Y,X=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let tt=x;if(x===i.RED&&(H===i.FLOAT&&(tt=i.R32F),H===i.HALF_FLOAT&&(tt=i.R16F),H===i.UNSIGNED_BYTE&&(tt=i.R8)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.R8UI),H===i.UNSIGNED_SHORT&&(tt=i.R16UI),H===i.UNSIGNED_INT&&(tt=i.R32UI),H===i.BYTE&&(tt=i.R8I),H===i.SHORT&&(tt=i.R16I),H===i.INT&&(tt=i.R32I)),x===i.RG&&(H===i.FLOAT&&(tt=i.RG32F),H===i.HALF_FLOAT&&(tt=i.RG16F),H===i.UNSIGNED_BYTE&&(tt=i.RG8)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(tt=i.RG8UI),H===i.UNSIGNED_SHORT&&(tt=i.RG16UI),H===i.UNSIGNED_INT&&(tt=i.RG32UI),H===i.BYTE&&(tt=i.RG8I),H===i.SHORT&&(tt=i.RG16I),H===i.INT&&(tt=i.RG32I)),x===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),x===i.RGBA){const ut=X?$a:fe.getTransfer(Y);H===i.FLOAT&&(tt=i.RGBA32F),H===i.HALF_FLOAT&&(tt=i.RGBA16F),H===i.UNSIGNED_BYTE&&(tt=ut===Me?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==_n&&w.minFilter!==zn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function S(w){const x=w.target;x.removeEventListener("dispose",S),T(x),x.isVideoTexture&&u.delete(x)}function P(w){const x=w.target;x.removeEventListener("dispose",P),F(x)}function T(w){const x=n.get(w);if(x.__webglInit===void 0)return;const H=w.source,Y=d.get(H);if(Y){const X=Y[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&A(w),Object.keys(Y).length===0&&d.delete(H)}n.remove(w)}function A(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const H=w.source,Y=d.get(H);delete Y[x.__cacheKey],o.memory.textures--}function F(w){const x=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let X=0;X<x.__webglFramebuffer[Y].length;X++)i.deleteFramebuffer(x.__webglFramebuffer[Y][X]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=w.textures;for(let Y=0,X=H.length;Y<X;Y++){const tt=n.get(H[Y]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(H[Y])}n.remove(w)}let b=0;function M(){b=0}function V(){const w=b;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),b+=1,w}function Z(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function I(w,x){const H=n.get(w);if(w.isVideoTexture&&j(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(H,w,x);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function G(w,x){const H=n.get(w);if(w.version>0&&H.__version!==w.version){pt(H,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function B(w,x){const H=n.get(w);if(w.version>0&&H.__version!==w.version){pt(H,w,x);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function k(w,x){const H=n.get(w);if(w.version>0&&H.__version!==w.version){Vt(H,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}const at={[ru]:i.REPEAT,[Fs]:i.CLAMP_TO_EDGE,[ou]:i.MIRRORED_REPEAT},U={[_n]:i.NEAREST,[wb]:i.NEAREST_MIPMAP_NEAREST,[jo]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Vl]:i.LINEAR_MIPMAP_NEAREST,[Os]:i.LINEAR_MIPMAP_LINEAR},O={[Bb]:i.NEVER,[Wb]:i.ALWAYS,[kb]:i.LESS,[$m]:i.LEQUAL,[zb]:i.EQUAL,[Gb]:i.GEQUAL,[Vb]:i.GREATER,[Hb]:i.NOTEQUAL};function lt(w,x){if(x.type===ui&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===zn||x.magFilter===Vl||x.magFilter===jo||x.magFilter===Os||x.minFilter===zn||x.minFilter===Vl||x.minFilter===jo||x.minFilter===Os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,at[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,at[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,at[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,U[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,U[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,O[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_n||x.minFilter!==jo&&x.minFilter!==Os||x.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function bt(w,x){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",S));const Y=x.source;let X=d.get(Y);X===void 0&&(X={},d.set(Y,X));const tt=Z(x);if(tt!==w.__cacheKey){X[tt]===void 0&&(X[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),X[tt].usedTimes++;const ut=X[w.__cacheKey];ut!==void 0&&(X[w.__cacheKey].usedTimes--,ut.usedTimes===0&&A(x)),w.__cacheKey=tt,w.__webglTexture=X[tt].texture}return H}function pt(w,x,H){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);const X=bt(w,x),tt=x.source;e.bindTexture(Y,w.__webglTexture,i.TEXTURE0+H);const ut=n.get(tt);if(tt.version!==ut.__version||X===!0){e.activeTexture(i.TEXTURE0+H);const et=fe.getPrimaries(fe.workingColorSpace),yt=x.colorSpace===ls?null:fe.getPrimaries(x.colorSpace),Ct=x.colorSpace===ls||et===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let mt=v(x.image,!1,s.maxTextureSize);mt=J(x,mt);const Mt=r.convert(x.format,x.colorSpace),It=r.convert(x.type);let Pt=y(x.internalFormat,Mt,It,x.colorSpace,x.isVideoTexture);lt(Y,x);let Nt;const Gt=x.mipmaps,q=x.isVideoTexture!==!0&&Pt!==Xm,gt=ut.__version===void 0||X===!0,ct=tt.dataReady,St=_(x,mt);if(x.isDepthTexture)Pt=i.DEPTH_COMPONENT16,x.type===ui?Pt=i.DEPTH_COMPONENT32F:x.type===Ir?Pt=i.DEPTH_COMPONENT24:x.type===Uo&&(Pt=i.DEPTH24_STENCIL8),gt&&(q?e.texStorage2D(i.TEXTURE_2D,1,Pt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,mt.width,mt.height,0,Mt,It,null));else if(x.isDataTexture)if(Gt.length>0){q&&gt&&e.texStorage2D(i.TEXTURE_2D,St,Pt,Gt[0].width,Gt[0].height);for(let xt=0,D=Gt.length;xt<D;xt++)Nt=Gt[xt],q?ct&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Nt.width,Nt.height,Mt,It,Nt.data):e.texImage2D(i.TEXTURE_2D,xt,Pt,Nt.width,Nt.height,0,Mt,It,Nt.data);x.generateMipmaps=!1}else q?(gt&&e.texStorage2D(i.TEXTURE_2D,St,Pt,mt.width,mt.height),ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,Mt,It,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,mt.width,mt.height,0,Mt,It,mt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){q&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Pt,Gt[0].width,Gt[0].height,mt.depth);for(let xt=0,D=Gt.length;xt<D;xt++)Nt=Gt[xt],x.format!==Hn?Mt!==null?q?ct&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Nt.width,Nt.height,mt.depth,Mt,Nt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,Pt,Nt.width,Nt.height,mt.depth,0,Nt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Nt.width,Nt.height,mt.depth,Mt,It,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,Pt,Nt.width,Nt.height,mt.depth,0,Mt,It,Nt.data)}else{q&&gt&&e.texStorage2D(i.TEXTURE_2D,St,Pt,Gt[0].width,Gt[0].height);for(let xt=0,D=Gt.length;xt<D;xt++)Nt=Gt[xt],x.format!==Hn?Mt!==null?q?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,Nt.width,Nt.height,Mt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,Pt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?ct&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Nt.width,Nt.height,Mt,It,Nt.data):e.texImage2D(i.TEXTURE_2D,xt,Pt,Nt.width,Nt.height,0,Mt,It,Nt.data)}else if(x.isDataArrayTexture)q?(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Pt,mt.width,mt.height,mt.depth),ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Mt,It,mt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,mt.width,mt.height,mt.depth,0,Mt,It,mt.data);else if(x.isData3DTexture)q?(gt&&e.texStorage3D(i.TEXTURE_3D,St,Pt,mt.width,mt.height,mt.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Mt,It,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,mt.width,mt.height,mt.depth,0,Mt,It,mt.data);else if(x.isFramebufferTexture){if(gt)if(q)e.texStorage2D(i.TEXTURE_2D,St,Pt,mt.width,mt.height);else{let xt=mt.width,D=mt.height;for(let dt=0;dt<St;dt++)e.texImage2D(i.TEXTURE_2D,dt,Pt,xt,D,0,Mt,It,null),xt>>=1,D>>=1}}else if(Gt.length>0){if(q&&gt){const xt=st(Gt[0]);e.texStorage2D(i.TEXTURE_2D,St,Pt,xt.width,xt.height)}for(let xt=0,D=Gt.length;xt<D;xt++)Nt=Gt[xt],q?ct&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Mt,It,Nt):e.texImage2D(i.TEXTURE_2D,xt,Pt,Mt,It,Nt);x.generateMipmaps=!1}else if(q){if(gt){const xt=st(mt);e.texStorage2D(i.TEXTURE_2D,St,Pt,xt.width,xt.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,It,mt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,Mt,It,mt);p(x)&&m(Y),ut.__version=tt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Vt(w,x,H){if(x.image.length!==6)return;const Y=bt(w,x),X=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);const tt=n.get(X);if(X.version!==tt.__version||Y===!0){e.activeTexture(i.TEXTURE0+H);const ut=fe.getPrimaries(fe.workingColorSpace),et=x.colorSpace===ls?null:fe.getPrimaries(x.colorSpace),yt=x.colorSpace===ls||ut===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Ct=x.isCompressedTexture||x.image[0].isCompressedTexture,mt=x.image[0]&&x.image[0].isDataTexture,Mt=[];for(let D=0;D<6;D++)!Ct&&!mt?Mt[D]=v(x.image[D],!0,s.maxCubemapSize):Mt[D]=mt?x.image[D].image:x.image[D],Mt[D]=J(x,Mt[D]);const It=Mt[0],Pt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type),Gt=y(x.internalFormat,Pt,Nt,x.colorSpace),q=x.isVideoTexture!==!0,gt=tt.__version===void 0||Y===!0,ct=X.dataReady;let St=_(x,It);lt(i.TEXTURE_CUBE_MAP,x);let xt;if(Ct){q&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Gt,It.width,It.height);for(let D=0;D<6;D++){xt=Mt[D].mipmaps;for(let dt=0;dt<xt.length;dt++){const wt=xt[dt];x.format!==Hn?Pt!==null?q?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt,0,0,wt.width,wt.height,Pt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt,Gt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt,0,0,wt.width,wt.height,Pt,Nt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt,Gt,wt.width,wt.height,0,Pt,Nt,wt.data)}}}else{if(xt=x.mipmaps,q&&gt){xt.length>0&&St++;const D=st(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Gt,D.width,D.height)}for(let D=0;D<6;D++)if(mt){q?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Mt[D].width,Mt[D].height,Pt,Nt,Mt[D].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Gt,Mt[D].width,Mt[D].height,0,Pt,Nt,Mt[D].data);for(let dt=0;dt<xt.length;dt++){const Ot=xt[dt].image[D].image;q?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt+1,0,0,Ot.width,Ot.height,Pt,Nt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt+1,Gt,Ot.width,Ot.height,0,Pt,Nt,Ot.data)}}else{q?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Pt,Nt,Mt[D]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Gt,Pt,Nt,Mt[D]);for(let dt=0;dt<xt.length;dt++){const wt=xt[dt];q?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt+1,0,0,Pt,Nt,wt.image[D]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt+1,Gt,Pt,Nt,wt.image[D])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),tt.__version=X.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function it(w,x,H,Y,X,tt){const ut=r.convert(H.format,H.colorSpace),et=r.convert(H.type),yt=y(H.internalFormat,ut,et,H.colorSpace);if(!n.get(x).__hasExternalTextures){const mt=Math.max(1,x.width>>tt),Mt=Math.max(1,x.height>>tt);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,tt,yt,mt,Mt,x.depth,0,ut,et,null):e.texImage2D(X,tt,yt,mt,Mt,0,ut,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),N(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,X,n.get(H).__webglTexture,0,C(x)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,X,n.get(H).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(w,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer&&!x.stencilBuffer){let Y=i.DEPTH_COMPONENT24;if(H||N(x)){const X=x.depthTexture;X&&X.isDepthTexture&&(X.type===ui?Y=i.DEPTH_COMPONENT32F:X.type===Ir&&(Y=i.DEPTH_COMPONENT24));const tt=C(x);N(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,Y,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Y,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(x.depthBuffer&&x.stencilBuffer){const Y=C(x);H&&N(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,i.DEPTH24_STENCIL8,x.width,x.height):N(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Y,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const Y=x.textures;for(let X=0;X<Y.length;X++){const tt=Y[X],ut=r.convert(tt.format,tt.colorSpace),et=r.convert(tt.type),yt=y(tt.internalFormat,ut,et,tt.colorSpace),Ct=C(x);H&&N(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,yt,x.width,x.height):N(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,yt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,yt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),I(x.depthTexture,0);const Y=n.get(x.depthTexture).__webglTexture,X=C(x);if(x.depthTexture.format===Sr)N(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(x.depthTexture.format===Co)N(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function $(w){const x=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");At(x.__webglFramebuffer,w)}else if(H){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]=i.createRenderbuffer(),vt(x.__webglDepthbuffer[Y],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),vt(x.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(w,x,H){const Y=n.get(w);x!==void 0&&it(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&$(w)}function ht(w){const x=w.texture,H=n.get(w),Y=n.get(x);w.addEventListener("dispose",P);const X=w.textures,tt=w.isWebGLCubeRenderTarget===!0,ut=X.length>1;if(ut||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,o.memory.textures++),tt){H.__webglFramebuffer=[];for(let et=0;et<6;et++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[et]=[];for(let yt=0;yt<x.mipmaps.length;yt++)H.__webglFramebuffer[et][yt]=i.createFramebuffer()}else H.__webglFramebuffer[et]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let et=0;et<x.mipmaps.length;et++)H.__webglFramebuffer[et]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ut)for(let et=0,yt=X.length;et<yt;et++){const Ct=n.get(X[et]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&N(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let et=0;et<X.length;et++){const yt=X[et];H.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[et]);const Ct=r.convert(yt.format,yt.colorSpace),mt=r.convert(yt.type),Mt=y(yt.internalFormat,Ct,mt,yt.colorSpace,w.isXRRenderTarget===!0),It=C(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Mt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,H.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),lt(i.TEXTURE_CUBE_MAP,x);for(let et=0;et<6;et++)if(x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)it(H.__webglFramebuffer[et][yt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt);else it(H.__webglFramebuffer[et],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let et=0,yt=X.length;et<yt;et++){const Ct=X[et],mt=n.get(Ct);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),lt(i.TEXTURE_2D,Ct),it(H.__webglFramebuffer,w,Ct,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,0),p(Ct)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(et=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,Y.__webglTexture),lt(et,x),x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)it(H.__webglFramebuffer[yt],w,x,i.COLOR_ATTACHMENT0,et,yt);else it(H.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,et,0);p(x)&&m(et),e.unbindTexture()}w.depthBuffer&&$(w)}function K(w){const x=w.textures;for(let H=0,Y=x.length;H<Y;H++){const X=x[H];if(p(X)){const tt=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ut=n.get(X).__webglTexture;e.bindTexture(tt,ut),m(tt),e.unbindTexture()}}}function W(w){if(w.samples>0&&N(w)===!1){const x=w.textures,H=w.width,Y=w.height;let X=i.COLOR_BUFFER_BIT;const tt=[],ut=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=n.get(w),yt=x.length>1;if(yt)for(let Ct=0;Ct<x.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let Ct=0;Ct<x.length;Ct++){tt.push(i.COLOR_ATTACHMENT0+Ct),w.depthBuffer&&tt.push(ut);const mt=et.__ignoreDepthValues!==void 0?et.__ignoreDepthValues:!1;if(mt===!1&&(w.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&et.__isTransmissionRenderTarget!==!0&&(X|=i.STENCIL_BUFFER_BIT)),yt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,et.__webglColorRenderbuffer[Ct]),mt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ut]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ut])),yt){const Mt=n.get(x[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Mt,0)}i.blitFramebuffer(0,0,H,Y,0,0,H,Y,X,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Ct=0;Ct<x.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,et.__webglColorRenderbuffer[Ct]);const mt=n.get(x[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}}function C(w){return Math.min(s.maxSamples,w.samples)}function N(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function j(w){const x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function J(w,x){const H=w.colorSpace,Y=w.format,X=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==ms&&H!==ls&&(fe.getTransfer(H)===Me?(Y!==Hn||X!==ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function st(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=M,this.setTexture2D=I,this.setTexture2DArray=G,this.setTexture3D=B,this.setTextureCube=k,this.rebindTextures=ft,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=it,this.useMultisampledRTT=N}function rA(i,t){function e(n,s=ls){let r;const o=fe.getTransfer(s);if(n===ds)return i.UNSIGNED_BYTE;if(n===zm)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vm)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ab)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Eb)return i.BYTE;if(n===Tb)return i.SHORT;if(n===Bm)return i.UNSIGNED_SHORT;if(n===km)return i.INT;if(n===Ir)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===Wa)return i.HALF_FLOAT;if(n===Cb)return i.ALPHA;if(n===Rb)return i.RGB;if(n===Hn)return i.RGBA;if(n===Pb)return i.LUMINANCE;if(n===Ib)return i.LUMINANCE_ALPHA;if(n===Sr)return i.DEPTH_COMPONENT;if(n===Co)return i.DEPTH_STENCIL;if(n===Hm)return i.RED;if(n===Gm)return i.RED_INTEGER;if(n===Lb)return i.RG;if(n===Wm)return i.RG_INTEGER;if(n===qm)return i.RGBA_INTEGER;if(n===Hl||n===Gl||n===Wl||n===ql)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ql)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===id||n===sd||n===rd||n===od)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===id)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===od)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xm)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ad||n===ld)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ad)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ld)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cd||n===ud||n===hd||n===dd||n===fd||n===pd||n===md||n===gd||n===vd||n===_d||n===yd||n===xd||n===Md||n===bd)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cd)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ud)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hd)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dd)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fd)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pd)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===md)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gd)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vd)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_d)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yd)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xd)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Md)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bd)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xl||n===Sd||n===wd)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xl)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nb||n===Ed||n===Td||n===Ad)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ed)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Td)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ad)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Uo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class oA extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vr extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aA={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const lA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new Yn({vertexShader:lA,fragmentShader:cA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pe(new ci(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class hA extends Ur{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const v=new uA,p=e.getContextAttributes();let m=null,y=null;const _=[],S=[],P=new Dt;let T=null;const A=new vn;A.layers.enable(1),A.viewport=new ve;const F=new vn;F.layers.enable(2),F.viewport=new ve;const b=[A,F],M=new oA;M.layers.enable(1),M.layers.enable(2);let V=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let vt=_[it];return vt===void 0&&(vt=new _c,_[it]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(it){let vt=_[it];return vt===void 0&&(vt=new _c,_[it]=vt),vt.getGripSpace()},this.getHand=function(it){let vt=_[it];return vt===void 0&&(vt=new _c,_[it]=vt),vt.getHandSpace()};function I(it){const vt=S.indexOf(it.inputSource);if(vt===-1)return;const At=_[vt];At!==void 0&&(At.update(it.inputSource,it.frame,c||o),At.dispatchEvent({type:it.type,data:it.inputSource}))}function G(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",B);for(let it=0;it<_.length;it++){const vt=S[it];vt!==null&&(S[it]=null,_[it].disconnect(vt))}V=null,Z=null,v.reset(),t.setRenderTarget(m),f=null,d=null,h=null,s=null,y=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",G),s.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const vt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Hs(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:ds,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let vt=null,At=null,$=null;p.depth&&($=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=p.stencil?Co:Sr,At=p.stencil?Uo:Ir);const ft={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Hs(d.textureWidth,d.textureHeight,{format:Hn,type:ds,depthTexture:new ag(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const ht=t.properties.get(y);ht.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(it){for(let vt=0;vt<it.removed.length;vt++){const At=it.removed[vt],$=S.indexOf(At);$>=0&&(S[$]=null,_[$].disconnect(At))}for(let vt=0;vt<it.added.length;vt++){const At=it.added[vt];let $=S.indexOf(At);if($===-1){for(let ht=0;ht<_.length;ht++)if(ht>=S.length){S.push(At),$=ht;break}else if(S[ht]===null){S[ht]=At,$=ht;break}if($===-1)break}const ft=_[$];ft&&ft.connect(At)}}const k=new z,at=new z;function U(it,vt,At){k.setFromMatrixPosition(vt.matrixWorld),at.setFromMatrixPosition(At.matrixWorld);const $=k.distanceTo(at),ft=vt.projectionMatrix.elements,ht=At.projectionMatrix.elements,K=ft[14]/(ft[10]-1),W=ft[14]/(ft[10]+1),C=(ft[9]+1)/ft[5],N=(ft[9]-1)/ft[5],j=(ft[8]-1)/ft[0],J=(ht[8]+1)/ht[0],st=K*j,w=K*J,x=$/(-j+J),H=x*-j;vt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(H),it.translateZ(x),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert();const Y=K+x,X=W+x,tt=st-H,ut=w+($-H),et=C*W/X*Y,yt=N*W/X*Y;it.projectionMatrix.makePerspective(tt,ut,et,yt,Y,X),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}function O(it,vt){vt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(vt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;v.texture!==null&&(it.near=v.depthNear,it.far=v.depthFar),M.near=F.near=A.near=it.near,M.far=F.far=A.far=it.far,(V!==M.near||Z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),V=M.near,Z=M.far,A.near=V,A.far=Z,F.near=V,F.far=Z,A.updateProjectionMatrix(),F.updateProjectionMatrix(),it.updateProjectionMatrix());const vt=it.parent,At=M.cameras;O(M,vt);for(let $=0;$<At.length;$++)O(At[$],vt);At.length===2?U(M,A,F):M.projectionMatrix.copy(A.projectionMatrix),lt(it,M,vt)};function lt(it,vt,At){At===null?it.matrix.copy(vt.matrixWorld):(it.matrix.copy(At.matrixWorld),it.matrix.invert(),it.matrix.multiply(vt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(vt.projectionMatrix),it.projectionMatrixInverse.copy(vt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Lr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(it){l=it,d!==null&&(d.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return v.texture!==null};let bt=null;function pt(it,vt){if(u=vt.getViewerPose(c||o),g=vt,u!==null){const At=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let $=!1;At.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let ht=0;ht<At.length;ht++){const K=At[ht];let W=null;if(f!==null)W=f.getViewport(K);else{const N=h.getViewSubImage(d,K);W=N.viewport,ht===0&&(t.setRenderTargetTextures(y,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(y))}let C=b[ht];C===void 0&&(C=new vn,C.layers.enable(ht),C.viewport=new ve,b[ht]=C),C.matrix.fromArray(K.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(K.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(W.x,W.y,W.width,W.height),ht===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),$===!0&&M.cameras.push(C)}const ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")){const ht=h.getDepthInformation(At[0]);ht&&ht.isValid&&ht.texture&&v.init(t,ht,s.renderState)}}for(let At=0;At<_.length;At++){const $=S[At],ft=_[At];$!==null&&ft!==void 0&&ft.update($,vt,c||o)}v.render(t,M),bt&&bt(it,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),g=null}const Vt=new rg;Vt.setAnimationLoop(pt),this.setAnimationLoop=function(it){bt=it},this.dispose=function(){}}}const As=new jn,dA=new ne;function fA(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ng(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,_,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),_=y.envMap,S=y.envMapRotation;if(_&&(p.envMap.value=_,As.copy(S),As.x*=-1,As.y*=-1,As.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),p.envMapRotation.value.setFromMatrix4(dA.makeRotationFromEuler(As)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const P=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*P,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pA(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const S=_.program;n.uniformBlockBinding(y,S)}function c(y,_){let S=s[y.id];S===void 0&&(g(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",p));const P=_.program;n.updateUBOMapping(y,P);const T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function u(y){const _=h();y.__bindingPointIndex=_;const S=i.createBuffer(),P=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=s[y.id],S=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,A=S.length;T<A;T++){const F=Array.isArray(S[T])?S[T]:[S[T]];for(let b=0,M=F.length;b<M;b++){const V=F[b];if(f(V,T,b,P)===!0){const Z=V.__offset,I=Array.isArray(V.value)?V.value:[V.value];let G=0;for(let B=0;B<I.length;B++){const k=I[B],at=v(k);typeof k=="number"||typeof k=="boolean"?(V.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,Z+G,V.__data)):k.isMatrix3?(V.__data[0]=k.elements[0],V.__data[1]=k.elements[1],V.__data[2]=k.elements[2],V.__data[3]=0,V.__data[4]=k.elements[3],V.__data[5]=k.elements[4],V.__data[6]=k.elements[5],V.__data[7]=0,V.__data[8]=k.elements[6],V.__data[9]=k.elements[7],V.__data[10]=k.elements[8],V.__data[11]=0):(k.toArray(V.__data,G),G+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,S,P){const T=y.value,A=_+"_"+S;if(P[A]===void 0)return typeof T=="number"||typeof T=="boolean"?P[A]=T:P[A]=T.clone(),!0;{const F=P[A];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return P[A]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(y){const _=y.uniforms;let S=0;const P=16;for(let A=0,F=_.length;A<F;A++){const b=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,V=b.length;M<V;M++){const Z=b[M],I=Array.isArray(Z.value)?Z.value:[Z.value];for(let G=0,B=I.length;G<B;G++){const k=I[G],at=v(k),U=S%P;U!==0&&P-U<at.boundary&&(S+=P-U),Z.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=S,S+=at.storage}}}const T=S%P;return T>0&&(S+=P-T),y.__size=S,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class mA{constructor(t={}){const{canvas:e=aS(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this._useLegacyLights=!1,this.toneMapping=hs,this.toneMappingExposure=1;const _=this;let S=!1,P=0,T=0,A=null,F=-1,b=null;const M=new ve,V=new ve;let Z=null;const I=new kt(0);let G=0,B=e.width,k=e.height,at=1,U=null,O=null;const lt=new ve(0,0,B,k),bt=new ve(0,0,B,k);let pt=!1;const Vt=new Uu;let it=!1,vt=!1;const At=new ne,$=new Dt,ft=new z,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function K(){return A===null?at:1}let W=n;function C(R,Q){const rt=e.getContext(R,Q);return rt!==null?rt:null}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Iu}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),W===null){const Q="webgl2";if(W=C(Q,R),W===null)throw C(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let N,j,J,st,w,x,H,Y,X,tt,ut,et,yt,Ct,mt,Mt,It,Pt,Nt,Gt,q,gt,ct,St;function xt(){N=new ST(W),N.init(),j=new vT(W,N,t),gt=new rA(W,N),J=new iA(W),st=new TT(W),w=new G1,x=new sA(W,N,J,w,j,gt,st),H=new yT(_),Y=new bT(_),X=new LS(W),ct=new mT(W,X),tt=new wT(W,X,st,ct),ut=new CT(W,tt,X,st),Nt=new AT(W,j,x),Mt=new _T(w),et=new H1(_,H,Y,N,j,ct,Mt),yt=new fA(_,w),Ct=new q1,mt=new Z1(N),Pt=new pT(_,H,Y,J,ut,d,l),It=new nA(_,ut,j),St=new pA(W,st,j,J),Gt=new gT(W,N,st),q=new ET(W,N,st),st.programs=et.programs,_.capabilities=j,_.extensions=N,_.properties=w,_.renderLists=Ct,_.shadowMap=It,_.state=J,_.info=st}xt();const D=new hA(_,W);this.xr=D,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=N.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=N.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(R){R!==void 0&&(at=R,this.setSize(B,k,!1))},this.getSize=function(R){return R.set(B,k)},this.setSize=function(R,Q,rt=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,k=Q,e.width=Math.floor(R*at),e.height=Math.floor(Q*at),rt===!0&&(e.style.width=R+"px",e.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(B*at,k*at).floor()},this.setDrawingBufferSize=function(R,Q,rt){B=R,k=Q,at=rt,e.width=Math.floor(R*rt),e.height=Math.floor(Q*rt),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(lt)},this.setViewport=function(R,Q,rt,ot){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,Q,rt,ot),J.viewport(M.copy(lt).multiplyScalar(at).round())},this.getScissor=function(R){return R.copy(bt)},this.setScissor=function(R,Q,rt,ot){R.isVector4?bt.set(R.x,R.y,R.z,R.w):bt.set(R,Q,rt,ot),J.scissor(V.copy(bt).multiplyScalar(at).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(R){J.setScissorTest(pt=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){O=R},this.getClearColor=function(R){return R.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(R=!0,Q=!0,rt=!0){let ot=0;if(R){let nt=!1;if(A!==null){const Lt=A.texture.format;nt=Lt===qm||Lt===Wm||Lt===Gm}if(nt){const Lt=A.texture.type,zt=Lt===ds||Lt===Ir||Lt===Bm||Lt===Uo||Lt===zm||Lt===Vm,Ht=Pt.getClearColor(),Xt=Pt.getClearAlpha(),Kt=Ht.r,jt=Ht.g,Zt=Ht.b;zt?(f[0]=Kt,f[1]=jt,f[2]=Zt,f[3]=Xt,W.clearBufferuiv(W.COLOR,0,f)):(g[0]=Kt,g[1]=jt,g[2]=Zt,g[3]=Xt,W.clearBufferiv(W.COLOR,0,g))}else ot|=W.COLOR_BUFFER_BIT}Q&&(ot|=W.DEPTH_BUFFER_BIT),rt&&(ot|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),Ct.dispose(),mt.dispose(),w.dispose(),H.dispose(),Y.dispose(),ut.dispose(),ct.dispose(),St.dispose(),et.dispose(),D.dispose(),D.removeEventListener("sessionstart",Ne),D.removeEventListener("sessionend",xn),Yi.stop()};function dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=st.autoReset,Q=It.enabled,rt=It.autoUpdate,ot=It.needsUpdate,nt=It.type;xt(),st.autoReset=R,It.enabled=Q,It.autoUpdate=rt,It.needsUpdate=ot,It.type=nt}function Ot(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ut(R){const Q=R.target;Q.removeEventListener("dispose",Ut),ie(Q)}function ie(R){Yt(R),w.remove(R)}function Yt(R){const Q=w.get(R).programs;Q!==void 0&&(Q.forEach(function(rt){et.releaseProgram(rt)}),R.isShaderMaterial&&et.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,rt,ot,nt,Lt){Q===null&&(Q=ht);const zt=nt.isMesh&&nt.matrixWorld.determinant()<0,Ht=Dg(R,Q,rt,ot,nt);J.setMaterial(ot,zt);let Xt=rt.index,Kt=1;if(ot.wireframe===!0){if(Xt=tt.getWireframeAttribute(rt),Xt===void 0)return;Kt=2}const jt=rt.drawRange,Zt=rt.attributes.position;let Le=jt.start*Kt,Mn=(jt.start+jt.count)*Kt;Lt!==null&&(Le=Math.max(Le,Lt.start*Kt),Mn=Math.min(Mn,(Lt.start+Lt.count)*Kt)),Xt!==null?(Le=Math.max(Le,0),Mn=Math.min(Mn,Xt.count)):Zt!=null&&(Le=Math.max(Le,0),Mn=Math.min(Mn,Zt.count));const qe=Mn-Le;if(qe<0||qe===1/0)return;ct.setup(nt,ot,Ht,rt,Xt);let vi,we=Gt;if(Xt!==null&&(vi=X.get(Xt),we=q,we.setIndex(vi)),nt.isMesh)ot.wireframe===!0?(J.setLineWidth(ot.wireframeLinewidth*K()),we.setMode(W.LINES)):we.setMode(W.TRIANGLES);else if(nt.isLine){let Jt=ot.linewidth;Jt===void 0&&(Jt=1),J.setLineWidth(Jt*K()),nt.isLineSegments?we.setMode(W.LINES):nt.isLineLoop?we.setMode(W.LINE_LOOP):we.setMode(W.LINE_STRIP)}else nt.isPoints?we.setMode(W.POINTS):nt.isSprite&&we.setMode(W.TRIANGLES);if(nt.isBatchedMesh)we.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else if(nt.isInstancedMesh)we.renderInstances(Le,qe,nt.count);else if(rt.isInstancedBufferGeometry){const Jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ml=Math.min(rt.instanceCount,Jt);we.renderInstances(Le,qe,Ml)}else we.render(Le,qe)};function ee(R,Q,rt){R.transparent===!0&&R.side===ai&&R.forceSinglePass===!1?(R.side=dn,R.needsUpdate=!0,Kn(R,Q,rt),R.side=Gi,R.needsUpdate=!0,Kn(R,Q,rt),R.side=ai):Kn(R,Q,rt)}this.compile=function(R,Q,rt=null){rt===null&&(rt=R),p=mt.get(rt),p.init(),y.push(p),rt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Q.layers)&&(p.pushLight(nt),nt.castShadow&&p.pushShadow(nt))}),R!==rt&&R.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Q.layers)&&(p.pushLight(nt),nt.castShadow&&p.pushShadow(nt))}),p.setupLights(_._useLegacyLights);const ot=new Set;return R.traverse(function(nt){const Lt=nt.material;if(Lt)if(Array.isArray(Lt))for(let zt=0;zt<Lt.length;zt++){const Ht=Lt[zt];ee(Ht,rt,nt),ot.add(Ht)}else ee(Lt,rt,nt),ot.add(Lt)}),y.pop(),p=null,ot},this.compileAsync=function(R,Q,rt=null){const ot=this.compile(R,Q,rt);return new Promise(nt=>{function Lt(){if(ot.forEach(function(zt){w.get(zt).currentProgram.isReady()&&ot.delete(zt)}),ot.size===0){nt(R);return}setTimeout(Lt,10)}N.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let _e=null;function se(R){_e&&_e(R)}function Ne(){Yi.stop()}function xn(){Yi.start()}const Yi=new rg;Yi.setAnimationLoop(se),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(R){_e=R,D.setAnimationLoop(R),R===null?Yi.stop():Yi.start()},D.addEventListener("sessionstart",Ne),D.addEventListener("sessionend",xn),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(Q),Q=D.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,Q,A),p=mt.get(R,y.length),p.init(),y.push(p),At.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Vt.setFromProjectionMatrix(At),vt=this.localClippingEnabled,it=Mt.init(this.clippingPlanes,vt),v=Ct.get(R,m.length),v.init(),m.push(v),zr(R,Q,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(U,O),this.info.render.frame++,it===!0&&Mt.beginShadows();const rt=p.state.shadowsArray;if(It.render(rt,R,Q),it===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1)&&Pt.render(v,R),p.setupLights(_._useLegacyLights),Q.isArrayCamera){const ot=Q.cameras;for(let nt=0,Lt=ot.length;nt<Lt;nt++){const zt=ot[nt];Vr(v,R,zt,zt.viewport)}}else Vr(v,R,Q);A!==null&&(x.updateMultisampleRenderTarget(A),x.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(_,R,Q),ct.resetDefaultState(),F=-1,b=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function zr(R,Q,rt,ot){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){ot&&ft.setFromMatrixPosition(R.matrixWorld).applyMatrix4(At);const zt=ut.update(R),Ht=R.material;Ht.visible&&v.push(R,zt,Ht,rt,ft.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const zt=ut.update(R),Ht=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ft.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),ft.copy(zt.boundingSphere.center)),ft.applyMatrix4(R.matrixWorld).applyMatrix4(At)),Array.isArray(Ht)){const Xt=zt.groups;for(let Kt=0,jt=Xt.length;Kt<jt;Kt++){const Zt=Xt[Kt],Le=Ht[Zt.materialIndex];Le&&Le.visible&&v.push(R,zt,Le,rt,ft.z,Zt)}}else Ht.visible&&v.push(R,zt,Ht,rt,ft.z,null)}}const Lt=R.children;for(let zt=0,Ht=Lt.length;zt<Ht;zt++)zr(Lt[zt],Q,rt,ot)}function Vr(R,Q,rt,ot){const nt=R.opaque,Lt=R.transmissive,zt=R.transparent;p.setupLightsView(rt),it===!0&&Mt.setGlobalState(_.clippingPlanes,rt),Lt.length>0&&Ws(nt,Lt,Q,rt),ot&&J.viewport(M.copy(ot)),nt.length>0&&je(nt,Q,rt),Lt.length>0&&je(Lt,Q,rt),zt.length>0&&je(zt,Q,rt),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Ws(R,Q,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Hs(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float")?Wa:ds,minFilter:Os,samples:4,stencilBuffer:r});const Kt=w.get(p.state.transmissionRenderTarget);Kt.__isTransmissionRenderTarget=!0}const Lt=p.state.transmissionRenderTarget;_.getDrawingBufferSize($),Lt.setSize($.x,$.y);const zt=_.getRenderTarget();_.setRenderTarget(Lt),_.getClearColor(I),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear();const Ht=_.toneMapping;_.toneMapping=hs,je(R,rt,ot),x.updateMultisampleRenderTarget(Lt),x.updateRenderTargetMipmap(Lt);let Xt=!1;for(let Kt=0,jt=Q.length;Kt<jt;Kt++){const Zt=Q[Kt],Le=Zt.object,Mn=Zt.geometry,qe=Zt.material,vi=Zt.group;if(qe.side===ai&&Le.layers.test(ot.layers)){const we=qe.side;qe.side=dn,qe.needsUpdate=!0,An(Le,rt,ot,Mn,qe,vi),qe.side=we,qe.needsUpdate=!0,Xt=!0}}Xt===!0&&(x.updateMultisampleRenderTarget(Lt),x.updateRenderTargetMipmap(Lt)),_.setRenderTarget(zt),_.setClearColor(I,G),_.toneMapping=Ht}function je(R,Q,rt){const ot=Q.isScene===!0?Q.overrideMaterial:null;for(let nt=0,Lt=R.length;nt<Lt;nt++){const zt=R[nt],Ht=zt.object,Xt=zt.geometry,Kt=ot===null?zt.material:ot,jt=zt.group;Ht.layers.test(rt.layers)&&An(Ht,Q,rt,Xt,Kt,jt)}}function An(R,Q,rt,ot,nt,Lt){R.onBeforeRender(_,Q,rt,ot,nt,Lt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),nt.onBeforeRender(_,Q,rt,ot,R,Lt),nt.transparent===!0&&nt.side===ai&&nt.forceSinglePass===!1?(nt.side=dn,nt.needsUpdate=!0,_.renderBufferDirect(rt,Q,ot,nt,R,Lt),nt.side=Gi,nt.needsUpdate=!0,_.renderBufferDirect(rt,Q,ot,nt,R,Lt),nt.side=ai):_.renderBufferDirect(rt,Q,ot,nt,R,Lt),R.onAfterRender(_,Q,rt,ot,nt,Lt)}function Kn(R,Q,rt){Q.isScene!==!0&&(Q=ht);const ot=w.get(R),nt=p.state.lights,Lt=p.state.shadowsArray,zt=nt.state.version,Ht=et.getParameters(R,nt.state,Lt,Q,rt),Xt=et.getProgramCacheKey(Ht);let Kt=ot.programs;ot.environment=R.isMeshStandardMaterial?Q.environment:null,ot.fog=Q.fog,ot.envMap=(R.isMeshStandardMaterial?Y:H).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",Ut),Kt=new Map,ot.programs=Kt);let jt=Kt.get(Xt);if(jt!==void 0){if(ot.currentProgram===jt&&ot.lightsStateVersion===zt)return Zu(R,Ht),jt}else Ht.uniforms=et.getUniforms(R),R.onBuild(rt,Ht,_),R.onBeforeCompile(Ht,_),jt=et.acquireProgram(Ht,Xt),Kt.set(Xt,jt),ot.uniforms=Ht.uniforms;const Zt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Mt.uniform),Zu(R,Ht),ot.needsLights=Fg(R),ot.lightsStateVersion=zt,ot.needsLights&&(Zt.ambientLightColor.value=nt.state.ambient,Zt.lightProbe.value=nt.state.probe,Zt.directionalLights.value=nt.state.directional,Zt.directionalLightShadows.value=nt.state.directionalShadow,Zt.spotLights.value=nt.state.spot,Zt.spotLightShadows.value=nt.state.spotShadow,Zt.rectAreaLights.value=nt.state.rectArea,Zt.ltc_1.value=nt.state.rectAreaLTC1,Zt.ltc_2.value=nt.state.rectAreaLTC2,Zt.pointLights.value=nt.state.point,Zt.pointLightShadows.value=nt.state.pointShadow,Zt.hemisphereLights.value=nt.state.hemi,Zt.directionalShadowMap.value=nt.state.directionalShadowMap,Zt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Zt.spotShadowMap.value=nt.state.spotShadowMap,Zt.spotLightMatrix.value=nt.state.spotLightMatrix,Zt.spotLightMap.value=nt.state.spotLightMap,Zt.pointShadowMap.value=nt.state.pointShadowMap,Zt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ot.currentProgram=jt,ot.uniformsList=null,jt}function Dn(R){if(R.uniformsList===null){const Q=R.currentProgram.getUniforms();R.uniformsList=Na.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function Zu(R,Q){const rt=w.get(R);rt.outputColorSpace=Q.outputColorSpace,rt.batching=Q.batching,rt.instancing=Q.instancing,rt.instancingColor=Q.instancingColor,rt.instancingMorph=Q.instancingMorph,rt.skinning=Q.skinning,rt.morphTargets=Q.morphTargets,rt.morphNormals=Q.morphNormals,rt.morphColors=Q.morphColors,rt.morphTargetsCount=Q.morphTargetsCount,rt.numClippingPlanes=Q.numClippingPlanes,rt.numIntersection=Q.numClipIntersection,rt.vertexAlphas=Q.vertexAlphas,rt.vertexTangents=Q.vertexTangents,rt.toneMapping=Q.toneMapping}function Dg(R,Q,rt,ot,nt){Q.isScene!==!0&&(Q=ht),x.resetTextureUnits();const Lt=Q.fog,zt=ot.isMeshStandardMaterial?Q.environment:null,Ht=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ms,Xt=(ot.isMeshStandardMaterial?Y:H).get(ot.envMap||zt),Kt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,jt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Zt=!!rt.morphAttributes.position,Le=!!rt.morphAttributes.normal,Mn=!!rt.morphAttributes.color;let qe=hs;ot.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(qe=_.toneMapping);const vi=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,we=vi!==void 0?vi.length:0,Jt=w.get(ot),Ml=p.state.lights;if(it===!0&&(vt===!0||R!==b)){const Cn=R===b&&ot.id===F;Mt.setState(ot,R,Cn)}let be=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ml.state.version||Jt.outputColorSpace!==Ht||nt.isBatchedMesh&&Jt.batching===!1||!nt.isBatchedMesh&&Jt.batching===!0||nt.isInstancedMesh&&Jt.instancing===!1||!nt.isInstancedMesh&&Jt.instancing===!0||nt.isSkinnedMesh&&Jt.skinning===!1||!nt.isSkinnedMesh&&Jt.skinning===!0||nt.isInstancedMesh&&Jt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Jt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Jt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Jt.instancingMorph===!1&&nt.morphTexture!==null||Jt.envMap!==Xt||ot.fog===!0&&Jt.fog!==Lt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Mt.numPlanes||Jt.numIntersection!==Mt.numIntersection)||Jt.vertexAlphas!==Kt||Jt.vertexTangents!==jt||Jt.morphTargets!==Zt||Jt.morphNormals!==Le||Jt.morphColors!==Mn||Jt.toneMapping!==qe||Jt.morphTargetsCount!==we)&&(be=!0):(be=!0,Jt.__version=ot.version);let gs=Jt.currentProgram;be===!0&&(gs=Kn(ot,Q,nt));let Ju=!1,Hr=!1,bl=!1;const Je=gs.getUniforms(),Ki=Jt.uniforms;if(J.useProgram(gs.program)&&(Ju=!0,Hr=!0,bl=!0),ot.id!==F&&(F=ot.id,Hr=!0),Ju||b!==R){Je.setValue(W,"projectionMatrix",R.projectionMatrix),Je.setValue(W,"viewMatrix",R.matrixWorldInverse);const Cn=Je.map.cameraPosition;Cn!==void 0&&Cn.setValue(W,ft.setFromMatrixPosition(R.matrixWorld)),j.logarithmicDepthBuffer&&Je.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Je.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Hr=!0,bl=!0)}if(nt.isSkinnedMesh){Je.setOptional(W,nt,"bindMatrix"),Je.setOptional(W,nt,"bindMatrixInverse");const Cn=nt.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Je.setValue(W,"boneTexture",Cn.boneTexture,x))}nt.isBatchedMesh&&(Je.setOptional(W,nt,"batchingTexture"),Je.setValue(W,"batchingTexture",nt._matricesTexture,x));const Sl=rt.morphAttributes;if((Sl.position!==void 0||Sl.normal!==void 0||Sl.color!==void 0)&&Nt.update(nt,rt,gs),(Hr||Jt.receiveShadow!==nt.receiveShadow)&&(Jt.receiveShadow=nt.receiveShadow,Je.setValue(W,"receiveShadow",nt.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Ki.envMap.value=Xt,Ki.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Q.environment!==null&&(Ki.envMapIntensity.value=Q.environmentIntensity),Hr&&(Je.setValue(W,"toneMappingExposure",_.toneMappingExposure),Jt.needsLights&&Ug(Ki,bl),Lt&&ot.fog===!0&&yt.refreshFogUniforms(Ki,Lt),yt.refreshMaterialUniforms(Ki,ot,at,k,p.state.transmissionRenderTarget),Na.upload(W,Dn(Jt),Ki,x)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Na.upload(W,Dn(Jt),Ki,x),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Je.setValue(W,"center",nt.center),Je.setValue(W,"modelViewMatrix",nt.modelViewMatrix),Je.setValue(W,"normalMatrix",nt.normalMatrix),Je.setValue(W,"modelMatrix",nt.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Cn=ot.uniformsGroups;for(let wl=0,Og=Cn.length;wl<Og;wl++){const Qu=Cn[wl];St.update(Qu,gs),St.bind(Qu,gs)}}return gs}function Ug(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function Fg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,Q,rt){w.get(R.texture).__webglTexture=Q,w.get(R.depthTexture).__webglTexture=rt;const ot=w.get(R);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=rt===void 0,ot.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Q){const rt=w.get(R);rt.__webglFramebuffer=Q,rt.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(R,Q=0,rt=0){A=R,P=Q,T=rt;let ot=!0,nt=null,Lt=!1,zt=!1;if(R){const Xt=w.get(R);Xt.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(W.FRAMEBUFFER,null),ot=!1):Xt.__webglFramebuffer===void 0?x.setupRenderTarget(R):Xt.__hasExternalTextures&&x.rebindTextures(R,w.get(R.texture).__webglTexture,w.get(R.depthTexture).__webglTexture);const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(zt=!0);const jt=w.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[Q])?nt=jt[Q][rt]:nt=jt[Q],Lt=!0):R.samples>0&&x.useMultisampledRTT(R)===!1?nt=w.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?nt=jt[rt]:nt=jt,M.copy(R.viewport),V.copy(R.scissor),Z=R.scissorTest}else M.copy(lt).multiplyScalar(at).floor(),V.copy(bt).multiplyScalar(at).floor(),Z=pt;if(J.bindFramebuffer(W.FRAMEBUFFER,nt)&&ot&&J.drawBuffers(R,nt),J.viewport(M),J.scissor(V),J.setScissorTest(Z),Lt){const Xt=w.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Xt.__webglTexture,rt)}else if(zt){const Xt=w.get(R.texture),Kt=Q||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Xt.__webglTexture,rt||0,Kt)}F=-1},this.readRenderTargetPixels=function(R,Q,rt,ot,nt,Lt,zt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=w.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Ht=Ht[zt]),Ht){J.bindFramebuffer(W.FRAMEBUFFER,Ht);try{const Xt=R.texture,Kt=Xt.format,jt=Xt.type;if(Kt!==Hn&&gt.convert(Kt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Zt=jt===Wa&&(N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float"));if(jt!==ds&&gt.convert(jt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&jt!==ui&&!Zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-ot&&rt>=0&&rt<=R.height-nt&&W.readPixels(Q,rt,ot,nt,gt.convert(Kt),gt.convert(jt),Lt)}finally{const Xt=A!==null?w.get(A).__webglFramebuffer:null;J.bindFramebuffer(W.FRAMEBUFFER,Xt)}}},this.copyFramebufferToTexture=function(R,Q,rt=0){const ot=Math.pow(2,-rt),nt=Math.floor(Q.image.width*ot),Lt=Math.floor(Q.image.height*ot);x.setTexture2D(Q,0),W.copyTexSubImage2D(W.TEXTURE_2D,rt,0,0,R.x,R.y,nt,Lt),J.unbindTexture()},this.copyTextureToTexture=function(R,Q,rt,ot=0){const nt=Q.image.width,Lt=Q.image.height,zt=gt.convert(rt.format),Ht=gt.convert(rt.type);x.setTexture2D(rt,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,rt.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,rt.unpackAlignment),Q.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ot,R.x,R.y,nt,Lt,zt,Ht,Q.image.data):Q.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ot,R.x,R.y,Q.mipmaps[0].width,Q.mipmaps[0].height,zt,Q.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,ot,R.x,R.y,zt,Ht,Q.image),ot===0&&rt.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(R,Q,rt,ot,nt=0){const Lt=Math.round(R.max.x-R.min.x),zt=Math.round(R.max.y-R.min.y),Ht=R.max.z-R.min.z+1,Xt=gt.convert(ot.format),Kt=gt.convert(ot.type);let jt;if(ot.isData3DTexture)x.setTexture3D(ot,0),jt=W.TEXTURE_3D;else if(ot.isDataArrayTexture||ot.isCompressedArrayTexture)x.setTexture2DArray(ot,0),jt=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,ot.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,ot.unpackAlignment);const Zt=W.getParameter(W.UNPACK_ROW_LENGTH),Le=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Mn=W.getParameter(W.UNPACK_SKIP_PIXELS),qe=W.getParameter(W.UNPACK_SKIP_ROWS),vi=W.getParameter(W.UNPACK_SKIP_IMAGES),we=rt.isCompressedTexture?rt.mipmaps[nt]:rt.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,we.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,we.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,R.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,R.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,R.min.z),rt.isDataTexture||rt.isData3DTexture?W.texSubImage3D(jt,nt,Q.x,Q.y,Q.z,Lt,zt,Ht,Xt,Kt,we.data):ot.isCompressedArrayTexture?W.compressedTexSubImage3D(jt,nt,Q.x,Q.y,Q.z,Lt,zt,Ht,Xt,we.data):W.texSubImage3D(jt,nt,Q.x,Q.y,Q.z,Lt,zt,Ht,Xt,Kt,we),W.pixelStorei(W.UNPACK_ROW_LENGTH,Zt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Le),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Mn),W.pixelStorei(W.UNPACK_SKIP_ROWS,qe),W.pixelStorei(W.UNPACK_SKIP_IMAGES,vi),nt===0&&ot.generateMipmaps&&W.generateMipmap(jt),J.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?x.setTextureCube(R,0):R.isData3DTexture?x.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?x.setTexture2DArray(R,0):x.setTexture2D(R,0),J.unbindTexture()},this.resetState=function(){P=0,T=0,A=null,J.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Nu?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===vl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ou{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new Ou(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gA extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class BI{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=au,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ym("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new z;class fg{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fg(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const bf=new z,Sf=new ve,wf=new ve,vA=new z,Ef=new ne,ga=new z,yc=new $i,Tf=new ne,xc=new _l;class kI extends pe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nd,this.bindMatrix=new ne,this.bindMatrixInverse=new ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ga),this.boundingBox.expandByPoint(ga)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $i),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ga),this.boundingSphere.expandByPoint(ga)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yc.copy(this.boundingSphere),yc.applyMatrix4(s),t.ray.intersectsSphere(yc)!==!1&&(Tf.copy(s).invert(),xc.copy(t.ray).applyMatrix4(Tf),!(this.boundingBox!==null&&xc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,xc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===nd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Sf.fromBufferAttribute(s.attributes.skinIndex,t),wf.fromBufferAttribute(s.attributes.skinWeight,t),bf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=wf.getComponent(r);if(o!==0){const a=Sf.getComponent(r);Ef.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(vA.copy(bf).applyMatrix4(Ef),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class _A extends Ce{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pg extends Ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=_n,u=_n,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Af=new ne,yA=new ne;class mg{constructor(t=[],e=[]){this.uuid=qn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ne)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ne;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:yA;Af.multiplyMatrices(a,e[r]),Af.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new mg(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new pg(e,t,t,Hn,ui);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new _A),this.bones.push(o),this.boneInverses.push(new ne().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Cf extends Nn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const cr=new ne,Rf=new ne,va=[],Pf=new Xi,xA=new ne,Zr=new pe,Jr=new $i;class MA extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xA)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cr),Pf.copy(t.boundingBox).applyMatrix4(cr),this.boundingBox.union(Pf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cr),Jr.copy(t.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(Jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),t.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),Rf.multiplyMatrices(n,cr),Zr.matrixWorld=Rf,Zr.raycast(t,va);for(let o=0,a=va.length;o<a;o++){const l=va[o];l.instanceId=r,l.object=this,e.push(l)}va.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cf(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pg(new Float32Array(s*this.count),s,this.count,Hm,ui));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class bA extends ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const If=new z,Lf=new z,Nf=new ne,Mc=new _l,_a=new $i;class gg extends Ce{constructor(t=new yn,e=new bA){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)If.fromBufferAttribute(e,s-1),Lf.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=If.distanceTo(Lf);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,t.ray.intersectsSphere(_a)===!1)return;Nf.copy(s).invert(),Mc.copy(t.ray).applyMatrix4(Nf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,u=new z,h=new z,d=new z,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let _=m,S=y-1;_<S;_+=f){const P=g.getX(_),T=g.getX(_+1);if(c.fromBufferAttribute(p,P),u.fromBufferAttribute(p,T),Mc.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(d);F<t.near||F>t.far||e.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let _=m,S=y-1;_<S;_+=f){if(c.fromBufferAttribute(p,_),u.fromBufferAttribute(p,_+1),Mc.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Df=new z,Uf=new z;class zI extends gg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Df.fromBufferAttribute(e,s),Uf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Df.distanceTo(Uf);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VI extends gg{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class SA extends ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ff=new ne,cu=new _l,ya=new $i,xa=new z;class HI extends Ce{constructor(t=new yn,e=new SA){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;Ff.copy(s).invert(),cu.copy(t.ray).applyMatrix4(Ff);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const p=c.getX(g);xa.fromBufferAttribute(h,p),Of(xa,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)xa.fromBufferAttribute(h,g),Of(xa,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Of(i,t,e,n,s,r,o){const a=cu.distanceSqToPoint(i);if(a<e){const l=new z;cu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class wA extends Ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Dt:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new z,s=[],r=[],o=[],a=new z,l=new ne;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(He(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(He(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bu extends mi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Dt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class EA extends Bu{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ku(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ma=new z,bc=new ku,Sc=new ku,wc=new ku;class TA extends mi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ma.subVectors(s[0],s[1]).add(s[0]),c=Ma);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),bc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,p),Sc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,p),wc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Sc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),wc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(bc.calc(l),Sc.calc(l),wc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bf(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function AA(i,t){const e=1-i;return e*e*t}function CA(i,t){return 2*(1-i)*i*t}function RA(i,t){return i*i*t}function yo(i,t,e,n){return AA(i,t)+CA(i,e)+RA(i,n)}function PA(i,t){const e=1-i;return e*e*e*t}function IA(i,t){const e=1-i;return 3*e*e*i*t}function LA(i,t){return 3*(1-i)*i*i*t}function NA(i,t){return i*i*i*t}function xo(i,t,e,n,s){return PA(i,t)+IA(i,e)+LA(i,n)+NA(i,s)}class vg extends mi{constructor(t=new Dt,e=new Dt,n=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Dt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(t,s.x,r.x,o.x,a.x),xo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class DA extends mi{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(t,s.x,r.x,o.x,a.x),xo(t,s.y,r.y,o.y,a.y),xo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _g extends mi{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class UA extends mi{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yg extends mi{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yo(t,s.x,r.x,o.x),yo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class FA extends mi{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yo(t,s.x,r.x,o.x),yo(t,s.y,r.y,o.y),yo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xg extends mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Bf(a,l.x,c.x,u.x,h.x),Bf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}}var kf=Object.freeze({__proto__:null,ArcCurve:EA,CatmullRomCurve3:TA,CubicBezierCurve:vg,CubicBezierCurve3:DA,EllipseCurve:Bu,LineCurve:_g,LineCurve3:UA,QuadraticBezierCurve:yg,QuadraticBezierCurve3:FA,SplineCurve:xg});class OA extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kf[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new kf[s.type]().fromJSON(s))}return this}}class BA extends OA{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _g(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new yg(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new vg(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s),new Dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xg(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Bu(t,e,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zu extends yn{constructor(t=[new Dt(0,-.5),new Dt(.5,0),new Dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=He(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new z,d=new Dt,f=new z,g=new z,v=new z;let p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const _=n+y*u*s,S=Math.sin(_),P=Math.cos(_);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*S,h.y=t[T].y,h.z=t[T].x*P,o.push(h.x,h.y,h.z),d.x=y/e,d.y=T/(t.length-1),a.push(d.x,d.y);const A=l[3*T+0]*S,F=l[3*T+1],b=l[3*T+0]*P;c.push(A,F,b)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){const S=_+y*t.length,P=S,T=S+t.length,A=S+t.length+1,F=S+1;r.push(P,T,F),r.push(A,F,T)}this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("uv",new Se(a,2)),this.setAttribute("normal",new Se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zu(t.points,t.segments,t.phiStart,t.phiLength)}}class Vu extends zu{constructor(t=1,e=1,n=4,s=8){const r=new BA;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Vu(t.radius,t.length,t.capSegments,t.radialSegments)}}class Hu extends yn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new z,u=new Dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(a,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ja extends yn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Se(h,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(f,2));function y(){const S=new z,P=new z;let T=0;const A=(e-t)/n;for(let F=0;F<=r;F++){const b=[],M=F/r,V=M*(e-t)+t;for(let Z=0;Z<=s;Z++){const I=Z/s,G=I*l+a,B=Math.sin(G),k=Math.cos(G);P.x=V*B,P.y=-M*n+p,P.z=V*k,h.push(P.x,P.y,P.z),S.set(B,A,k).normalize(),d.push(S.x,S.y,S.z),f.push(I,1-M),b.push(g++)}v.push(b)}for(let F=0;F<s;F++)for(let b=0;b<r;b++){const M=v[b][F],V=v[b+1][F],Z=v[b+1][F+1],I=v[b][F+1];u.push(M,V,I),u.push(V,Z,I),T+=6}c.addGroup(m,T,0),m+=T}function _(S){const P=g,T=new Dt,A=new z;let F=0;const b=S===!0?t:e,M=S===!0?1:-1;for(let Z=1;Z<=s;Z++)h.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),g++;const V=g;for(let Z=0;Z<=s;Z++){const G=Z/s*l+a,B=Math.cos(G),k=Math.sin(G);A.x=b*k,A.y=p*M,A.z=b*B,h.push(A.x,A.y,A.z),d.push(0,M,0),T.x=B*.5+.5,T.y=k*.5*M+.5,f.push(T.x,T.y),g++}for(let Z=0;Z<s;Z++){const I=P+Z,G=V+Z;S===!0?u.push(G,G+1,I):u.push(G+1,G,I),F+=3}c.addGroup(m,F,S===!0?1:2),m+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gu extends yn{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,f=new z,g=new Dt;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const y=m+p,_=y,S=y+n+1,P=y+n+2,T=y+1;a.push(_,S,T),a.push(S,P,T)}}this.setIndex(a),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fo extends yn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new z,d=new z,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const y=[],_=m/n;let S=0;m===0&&o===0?S=.5/e:m===n&&l===Math.PI&&(S=-.5/e);for(let P=0;P<=e;P++){const T=P/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+_*a),h.y=t*Math.cos(o+_*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(T+S,1-_),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const _=u[m][y+1],S=u[m][y],P=u[m+1][y],T=u[m+1][y+1];(m!==0||o>0)&&f.push(_,S,T),(m!==n-1||l<Math.PI)&&f.push(S,P,T)}this.setIndex(f),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Da extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class GI extends Da{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ec extends ji{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new kt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class ur extends ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function ba(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function kA(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zA(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function zf(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function Mg(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class xl{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class VA extends xl{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cd,endingEnd:Cd}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rd:r=t,a=2*e-n;break;case Pd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rd:o=t,l=2*n-e;break;case Pd:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,y=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*v+.5*g,S=f*p-f*v;for(let P=0;P!==a;++P)r[P]=m*o[u+P]+y*o[c+P]+_*o[l+P]+S*o[h+P];return r}}class HA extends xl{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class GA extends xl{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class gi{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ba(e,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ba(t.times,Array),values:ba(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new GA(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new HA(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new VA(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qa:e=this.InterpolantFactoryMethodDiscrete;break;case Xa:e=this.InterpolantFactoryMethodLinear;break;case $l:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return Xa;case this.InterpolantFactoryMethodSmooth:return $l}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&kA(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$l,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const v=e[h+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Xa;class Br extends gi{}Br.prototype.ValueTypeName="bool";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=qa;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class bg extends gi{}bg.prototype.ValueTypeName="color";class Qa extends gi{}Qa.prototype.ValueTypeName="number";class WA extends xl{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e);let c=t*a;for(let u=c+a;c!==u;c+=4)Fr.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Oo extends gi{InterpolantFactoryMethodLinear(t){return new WA(this.times,this.values,this.getValueSize(),t)}}Oo.prototype.ValueTypeName="quaternion";Oo.prototype.DefaultInterpolation=Xa;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;class kr extends gi{}kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=qa;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class tl extends gi{}tl.prototype.ValueTypeName="vector";class WI{constructor(t="",e=-1,n=[],s=Db){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(XA(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(gi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=zA(l);l=zf(l,1,u),c=zf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Qa(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,v){if(f.length!==0){const p=[],m=[];Mg(f,p,m,g),p.length!==0&&v.push(new h(d,p,m))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const p=[],m=[];for(let y=0;y!==d[g].morphTargets.length;++y){const _=d[g];p.push(_.time),m.push(_.morphTarget===v?1:0)}s.push(new Qa(".morphTargetInfluence["+v+"]",p,m))}l=f.length*o}else{const f=".bones["+e[h].name+"]";n(tl,f+".position",d,"pos",s),n(Oo,f+".quaternion",d,"rot",s),n(tl,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qA(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qa;case"vector":case"vector2":case"vector3":case"vector4":return tl;case"color":return bg;case"quaternion":return Oo;case"bool":case"boolean":return Br;case"string":return kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function XA(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=qA(i.type);if(i.times===void 0){const e=[],n=[];Mg(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const cs={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $A{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const jA=new $A;class Bo{constructor(t){this.manager=t!==void 0?t:jA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Bo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti={};class YA extends Error{constructor(t,e){super(t),this.response=e}}class qI extends Bo{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=cs.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Ti[t]!==void 0){Ti[t].push({onLoad:e,onProgress:n,onError:s});return}Ti[t]=[],Ti[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ti[t],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let v=0;const p=new ReadableStream({start(m){y();function y(){h.read().then(({done:_,value:S})=>{if(_)m.close();else{v+=S.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let T=0,A=u.length;T<A;T++){const F=u[T];F.onProgress&&F.onProgress(P)}m.enqueue(S),y()}})}}});return new Response(p)}else throw new YA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{cs.add(t,c);const u=Ti[t];delete Ti[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ti[t];if(u===void 0)throw this.manager.itemError(t),c;delete Ti[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class KA extends Bo{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=cs.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Ro("img");function l(){u(),cs.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class ZA extends Bo{constructor(t){super(t)}load(t,e,n,s){const r=new Ke,o=new KA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ko extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class JA extends ko{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Tc=new ne,Vf=new z,Hf=new z;class Wu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uu,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vf),Hf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hf),e.updateMatrixWorld(),Tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class QA extends Wu{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Lr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class tC extends ko{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new QA}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Gf=new ne,Qr=new z,Ac=new z;class eC extends Wu{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qr),Ac.copy(n.position),Ac.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ac),n.updateMatrixWorld(),s.makeTranslation(-Qr.x,-Qr.y,-Qr.z),Gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gf)}}class XI extends ko{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eC}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class nC extends Wu{constructor(){super(new og(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $I extends ko{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new nC}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class iC extends ko{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class jI{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class YI extends Bo{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=cs.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return cs.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),cs.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});cs.add(t,l),r.manager.itemStart(t)}}const qu="\\[\\]\\.:\\/",sC=new RegExp("["+qu+"]","g"),Xu="[^"+qu+"]",rC="[^"+qu.replace("\\.","")+"]",oC=/((?:WC+[\/:])*)/.source.replace("WC",Xu),aC=/(WCOD+)?/.source.replace("WCOD",rC),lC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xu),cC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xu),uC=new RegExp("^"+oC+aC+lC+cC+"$"),hC=["material","materials","bones","map"];class dC{constructor(t,e,n){const s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class de{constructor(t,e,n){this.path=e,this.parsedPath=n||de.parseTrackName(e),this.node=de.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new de.Composite(t,e,n):new de(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sC,"")}static parseTrackName(t){const e=uC.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);hC.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=de.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[s];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}de.Composite=dC;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Iu);class Gn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Gn);const n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],h=n[5],d=n[6],f=n[7],g=n[8],v=s[0],p=s[1],m=s[2],y=s[3],_=s[4],S=s[5],P=s[6],T=s[7],A=s[8];return r[0]=o*v+a*y+l*P,r[1]=o*p+a*_+l*T,r[2]=o*m+a*S+l*A,r[3]=c*v+u*y+h*P,r[4]=c*p+u*_+h*T,r[5]=c*m+u*S+h*A,r[6]=d*v+f*y+g*P,r[7]=d*p+f*_+g*T,r[8]=d*m+f*S+g*A,e}scale(t,e){e===void 0&&(e=new Gn);const n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new E);const n=3,s=4,r=[];let o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let u;const h=4;let d;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=h;do d=h-u,r[d+s*o]+=r[d+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const f=r[o+s*a]/r[o+s*o];u=h;do d=h-u,r[d+s*a]=d<=o?0:r[d+s*a]-r[d+s*o]*f;while(--u)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Gn);const e=3,n=6,s=fC;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3;const l=a;let c;const u=n;let h;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=u;do h=u-c,s[h+n*r]+=s[h+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){const d=s[r+n*o]/s[r+n*r];c=u;do h=u-c,s[h+n*o]=h<=r?0:s[h+n*o]-s[h+n*r]*d;while(--c)}}while(--a);r=2;do{o=r-1;do{const d=s[r+n*o]/s[r+n*r];c=n;do h=n-c,s[h+n*o]=s[h+n*o]-s[h+n*r]*d;while(--c)}while(o--)}while(--r);r=2;do{const d=1/s[r+n*r];c=n;do h=n-c,s[h+n*r]=s[h+n*r]*d;while(--c)}while(r--);r=2;do{o=2;do{if(h=s[e+o+n*r],isNaN(h)||h===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,h)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,l=s+s,c=e*o,u=e*a,h=e*l,d=n*a,f=n*l,g=s*l,v=r*o,p=r*a,m=r*l,y=this.elements;return y[3*0+0]=1-(d+g),y[3*0+1]=u-m,y[3*0+2]=h+p,y[3*1+0]=u+m,y[3*1+1]=1-(c+g),y[3*1+2]=f-v,y[3*2+0]=h-p,y[3*2+1]=f+v,y[3*2+2]=1-(c+d),this}transpose(t){t===void 0&&(t=new Gn);const e=this.elements,n=t.elements;let s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}}const fC=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new E);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Gn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new E);const e=this.x,n=this.y,s=this.z;let r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new E);const n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new E),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const s=pC,r=1/n;s.set(this.x*r,this.y*r,this.z*r);const o=mC;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Wf),Wf.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const pC=new E,mC=new E,Wf=new E;class Tn{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,qf),c=qf),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Tn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=Xf,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7];this.getCorners(s,r,o,a,l,c,u,h);for(let d=0;d!==8;d++){const f=n[d];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Xf,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7];this.getCorners(s,r,o,a,l,c,u,h);for(let d=0;d!==8;d++){const f=n[d];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,h=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(h,d)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(h,d));return!(g<0||f>g)}}const qf=new E,Xf=[new E,new E,new E,new E,new E,new E,new E,new E];class $f{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){const r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Sg{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}}class Fe{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=gC,s=vC;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Fe);const n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+s*c-r*l,e.y=s*u+o*l+r*a-n*c,e.z=r*u+o*c+n*l-s*a,e.w=o*u-n*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new Fe);const e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Fe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*s,h=c*s+l*n-o*r,d=c*r+o*s-a*n,f=-o*n-a*s-l*r;return e.x=u*c+f*-o+h*-l-d*-a,e.y=h*c+f*-a+d*-o-u*-l,e.z=d*c+f*-l+u*-a-h*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){const h=o*o,d=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*d-2*f),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*h-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new Fe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Fe);const s=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,h=t.w,d,f,g,v,p;return f=s*l+r*c+o*u+a*h,f<0&&(f=-f,l=-l,c=-c,u=-u,h=-h),1-f>1e-6?(d=Math.acos(f),g=Math.sin(d),v=Math.sin((1-e)*d)/g,p=Math.sin(e*d)/g):(v=1-e,p=e),n.x=v*s+p*l,n.y=v*r+p*c,n.z=v*o+p*u,n.w=v*a+p*h,n}integrate(t,e,n,s){s===void 0&&(s=new Fe);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,h=this.w,d=e*.5;return s.x+=d*(r*h+o*u-a*c),s.y+=d*(o*h+a*l-r*u),s.z+=d*(a*h+r*c-o*l),s.w+=d*(-r*l-o*c-a*u),s}}const gC=new E,vC=new E,_C={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Ft{constructor(t){t===void 0&&(t={}),this.id=Ft.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Ft.idCounter=0;Ft.types=_C;class re{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new Fe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return re.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return re.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new E),n.vsub(t,s),e.conjugate(jf),jf.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new E),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new E),e.w*=-1,e.vmult(n,s),e.w*=-1,s}}const jf=new Fe;class Mo extends Ft{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:Ft.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const s=new E;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let u=!1;for(let h=0;h!==n.length;h++)if(n[h].almostEquals(s)||n[h].almostEquals(s)){u=!0;break}u||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];Mo.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){const r=new E,o=new E;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,l,c){const u=new E;let h=-1,d=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),r.vmult(u,u);const v=u.dot(o);v>d&&(d=v,h=g)}const f=[];for(let g=0;g<n.faces[h].length;g++){const v=n.vertices[n.faces[h][g]],p=new E;p.copy(v),r.vmult(p,p),s.vadd(p,p),f.push(p)}h>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,s,r,o,a,l){const c=new E,u=new E,h=new E,d=new E,f=new E,g=new E;let v=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],c);const y=p.testSepAxis(c,t,e,n,s,r);if(y===!1)return!1;y<v&&(v=y,o.copy(c))}else{const m=a?a.length:p.faces.length;for(let y=0;y<m;y++){const _=a?a[y]:y;c.copy(p.faceNormals[_]),n.vmult(c,c);const S=p.testSepAxis(c,t,e,n,s,r);if(S===!1)return!1;S<v&&(v=S,o.copy(c))}}if(t.uniqueAxes)for(let m=0;m!==t.uniqueAxes.length;m++){r.vmult(t.uniqueAxes[m],u);const y=p.testSepAxis(u,t,e,n,s,r);if(y===!1)return!1;y<v&&(v=y,o.copy(u))}else{const m=l?l.length:t.faces.length;for(let y=0;y<m;y++){const _=l?l[y]:y;u.copy(t.faceNormals[_]),r.vmult(u,u);const S=p.testSepAxis(u,t,e,n,s,r);if(S===!1)return!1;S<v&&(v=S,o.copy(u))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],d);for(let y=0;y!==t.uniqueEdges.length;y++)if(r.vmult(t.uniqueEdges[y],f),d.cross(f,g),!g.almostZero()){g.normalize();const _=p.testSepAxis(g,t,e,n,s,r);if(_===!1)return!1;_<v&&(v=_,o.copy(g))}}return s.vsub(e,h),h.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){const a=this;Mo.project(a,t,n,s,Cc),Mo.project(e,t,r,o,Rc);const l=Cc[0],c=Cc[1],u=Rc[0],h=Rc[1];if(l<h||u<c)return!1;const d=l-h,f=u-c;return d<f?d:f}calculateLocalInertia(t,e){const n=new E,s=new E;this.computeLocalAABB(s,n);const r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){const l=new E,c=new E,u=new E,h=new E,d=new E,f=new E,g=new E,v=new E,p=this,m=[],y=s,_=m;let S=-1,P=Number.MAX_VALUE;for(let M=0;M<p.faces.length;M++){l.copy(p.faceNormals[M]),n.vmult(l,l);const V=l.dot(t);V<P&&(P=V,S=M)}if(S<0)return;const T=p.faces[S];T.connectedFaces=[];for(let M=0;M<p.faces.length;M++)for(let V=0;V<p.faces[M].length;V++)T.indexOf(p.faces[M][V])!==-1&&M!==S&&T.connectedFaces.indexOf(M)===-1&&T.connectedFaces.push(M);const A=T.length;for(let M=0;M<A;M++){const V=p.vertices[T[M]],Z=p.vertices[T[(M+1)%A]];V.vsub(Z,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),h.copy(this.faceNormals[S]),n.vmult(h,h),e.vadd(h,h),u.cross(h,d),d.negate(d),f.copy(V),n.vmult(f,f),e.vadd(f,f);const I=T.connectedFaces[M];g.copy(this.faceNormals[I]);const G=this.getPlaneConstantOfFace(I);v.copy(g),n.vmult(v,v);const B=G-v.dot(e);for(this.clipFaceAgainstPlane(y,_,v,B);y.length;)y.shift();for(;_.length;)y.push(_.shift())}g.copy(this.faceNormals[S]);const F=this.getPlaneConstantOfFace(S);v.copy(g),n.vmult(v,v);const b=F-v.dot(e);for(let M=0;M<y.length;M++){let V=v.dot(y[M])+b;if(V<=r&&(console.log(`clamped: depth=${V} to minDist=${r}`),V=r),V<=o){const Z=y[M];if(V<=1e-6){const I={point:Z,normal:v,depth:V};a.push(I)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+s;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+s,r<0)if(o<0){const h=new E;h.copy(c),e.push(h)}else{const h=new E;l.lerp(c,r/(r-o),h),e.push(h)}else if(o<0){const h=new E;l.lerp(c,r/(r-o),h),e.push(h),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){const r=this.vertices;let o,a,l,c,u,h,d=new E;for(let f=0;f<r.length;f++){d.copy(r[f]),e.vmult(d,d),t.vadd(d,d);const g=d;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(h===void 0||g.z>h)&&(h=g.z)}n.set(o,a,l),s.set(c,u,h)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,s=this.faceNormals,r=new E;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=e[n[o][0]],c=new E;t.vsub(l,c);const u=a.dot(c),h=new E;r.vsub(l,h);const d=a.dot(h);if(u<0&&d>0||u>0&&d<0)return!1}return-1}static project(t,e,n,s,r){const o=t.vertices.length,a=yC;let l=0,c=0;const u=xC,h=t.vertices;u.setZero(),re.vectorToLocalFrame(n,s,e,a),re.pointToLocalFrame(n,s,u,u);const d=u.dot(a);c=l=h[0].dot(a);for(let f=1;f<o;f++){const g=h[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=d,l-=d,c>l){const f=c;c=l,l=f}r[0]=l,r[1]=c}}const Cc=[],Rc=[];new E;const yC=new E,xC=new E;class $u extends Ft{constructor(t){super({type:Ft.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=E,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new Mo({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),$u.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)ss.set(r[o][0],r[o][1],r[o][2]),e.vmult(ss,ss),t.vadd(ss,ss),n(ss.x,ss.y,ss.z)}calculateWorldAABB(t,e,n,s){const r=this.halfExtents;Jn[0].set(r.x,r.y,r.z),Jn[1].set(-r.x,r.y,r.z),Jn[2].set(-r.x,-r.y,r.z),Jn[3].set(-r.x,-r.y,-r.z),Jn[4].set(r.x,-r.y,-r.z),Jn[5].set(r.x,r.y,-r.z),Jn[6].set(-r.x,r.y,-r.z),Jn[7].set(r.x,-r.y,r.z);const o=Jn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Jn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,h=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),h>s.z&&(s.z=h),c<n.x&&(n.x=c),u<n.y&&(n.y=u),h<n.z&&(n.z=h)}}}const ss=new E,Jn=[new E,new E,new E,new E,new E,new E,new E,new E],ju={DYNAMIC:1,STATIC:2,KINEMATIC:4},Yu={AWAKE:0,SLEEPY:1,SLEEPING:2};class Bt extends Sg{constructor(t){t===void 0&&(t={}),super(),this.id=Bt.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Bt.STATIC:Bt.DYNAMIC,typeof t.type==typeof Bt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Bt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new Fe,this.initQuaternion=new Fe,this.previousQuaternion=new Fe,this.interpolatedQuaternion=new Fe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new Gn,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new Gn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Tn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Bt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Bt.SLEEPING&&this.dispatchEvent(Bt.wakeupEvent)}sleep(){this.sleepState=Bt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===Bt.AWAKE&&n<s?(this.sleepState=Bt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Bt.sleepyEvent)):e===Bt.SLEEPY&&n>s?this.wakeUp():e===Bt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Bt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Bt.SLEEPING||this.type===Bt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){const s=new E,r=new Fe;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let s=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=MC,o=bC,a=this.quaternion,l=this.aabb,c=SC;for(let u=0;u!==s;u++){const h=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),h.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=wC,s=EC;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==Bt.DYNAMIC)return;this.sleepState===Bt.SLEEPING&&this.wakeUp();const n=TC;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==Bt.DYNAMIC)return;const n=AC,s=CC;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===Bt.DYNAMIC&&(this.sleepState===Bt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==Bt.DYNAMIC)return;this.sleepState===Bt.SLEEPING&&this.wakeUp();const n=e,s=RC;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=PC;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==Bt.DYNAMIC)return;const n=IC,s=LC;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){const t=NC;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),$u.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Bt.DYNAMIC||this.type===Bt.KINEMATIC)||this.sleepState===Bt.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,h=this.invInertiaWorld,d=this.linearFactor,f=u*t;s.x+=a.x*f*d.x,s.y+=a.y*f*d.y,s.z+=a.z*f*d.z;const g=h.elements,v=this.angularFactor,p=l.x*v.x,m=l.y*v.y,y=l.z*v.z;r.x+=t*(g[0]*p+g[1]*m+g[2]*y),r.y+=t*(g[3]*p+g[4]*m+g[5]*y),r.z+=t*(g[6]*p+g[7]*m+g[8]*y),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Bt.idCounter=0;Bt.COLLIDE_EVENT_NAME="collide";Bt.DYNAMIC=ju.DYNAMIC;Bt.STATIC=ju.STATIC;Bt.KINEMATIC=ju.KINEMATIC;Bt.AWAKE=Yu.AWAKE;Bt.SLEEPY=Yu.SLEEPY;Bt.SLEEPING=Yu.SLEEPING;Bt.wakeupEvent={type:"wakeup"};Bt.sleepyEvent={type:"sleepy"};Bt.sleepEvent={type:"sleep"};const MC=new E,bC=new Fe,SC=new Tn,wC=new Gn,EC=new Gn;new Gn;const TC=new E,AC=new E,CC=new E,RC=new E,PC=new E,IC=new E,LC=new E,NC=new E;class DC{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Bt.STATIC||t.sleepState===Bt.SLEEPING)&&(e.type&Bt.STATIC||e.sleepState===Bt.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){const r=UC;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){const n=FC,s=OC,r=BC,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new E;t.position.vsub(e.position,n);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const UC=new E;new E;new Fe;new E;const FC={keys:[]},OC=[],BC=[];new E;new E;new E;class wg extends DC{constructor(){super()}collisionPairs(t,e,n){const s=t.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class el{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let Eg,Tg,Ag,Cg,Rg,Pg,Ig;const Ku={CLOSEST:1,ANY:2,ALL:4};Eg=Ft.types.SPHERE;Tg=Ft.types.PLANE;Ag=Ft.types.BOX;Cg=Ft.types.CYLINDER;Rg=Ft.types.CONVEXPOLYHEDRON;Pg=Ft.types.HEIGHTFIELD;Ig=Ft.types.TRIMESH;class Ue{get[Eg](){return this._intersectSphere}get[Tg](){return this._intersectPlane}get[Ag](){return this._intersectBox}get[Cg](){return this._intersectConvex}get[Rg](){return this._intersectConvex}get[Pg](){return this._intersectHeightfield}get[Ig](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ue.ANY,this.result=new el,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ue.ANY,this.result=e.result||new el,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Yf),Pc.length=0,t.broadphase.aabbQuery(t,Yf,Pc),this.intersectBodies(Pc),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const s=kC,r=zC;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){const r=this.from;if(tR(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){const o=this.from,a=this.to,l=this.direction,c=new E(0,0,1);e.vmult(c,c);const u=new E;o.vsub(n,u);const h=u.dot(c);a.vsub(n,u);const d=u.dot(c);if(h*d>0||o.distanceTo(a)<h)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new E,v=new E,p=new E;o.vsub(n,g);const m=-c.dot(g)/f;l.scale(m,v),o.vadd(v,p),this.reportIntersection(c,p,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;const o=VC;o.from.copy(this.from),o.to.copy(this.to),re.pointToLocalFrame(n,e,o.from,o.from),re.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=HC;let l,c,u,h;l=c=0,u=h=t.data.length-1;const d=new Tn;o.getAABB(d),t.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),u=Math.min(u,a[0]+1),h=Math.min(h,a[1]+1);for(let f=l;f<u;f++)for(let g=c;g<h;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,d),!!d.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),re.pointToWorldFrame(n,e,t.pillarOffset,Sa),this._intersectConvex(t.pillarConvex,e,Sa,s,r,Kf),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),re.pointToWorldFrame(n,e,t.pillarOffset,Sa),this._intersectConvex(t.pillarConvex,e,Sa,s,r,Kf)}}}_intersectSphere(t,e,n,s,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),h=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,d=u**2-4*c*h,f=GC,g=WC;if(!(d<0))if(d===0)o.lerp(a,d,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1);else{const v=(-u-Math.sqrt(d))/(2*c),p=(-u+Math.sqrt(d))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){const a=qC,l=Zf,c=o&&o.faceList||null,u=t.faces,h=t.vertices,d=t.faceNormals,f=this.direction,g=this.from,v=this.to,p=g.distanceTo(v),m=c?c.length:u.length,y=this.result;for(let _=0;!y.shouldStop&&_<m;_++){const S=c?c[_]:_,P=u[S],T=d[S],A=e,F=n;l.copy(h[P[0]]),A.vmult(l,l),l.vadd(F,l),l.vsub(g,l),A.vmult(T,a);const b=f.dot(a);if(Math.abs(b)<this.precision)continue;const M=a.dot(l)/b;if(!(M<0)){f.scale(M,fn),fn.vadd(g,fn),Bn.copy(h[P[0]]),A.vmult(Bn,Bn),F.vadd(Bn,Bn);for(let V=1;!y.shouldStop&&V<P.length-1;V++){Qn.copy(h[P[V]]),ti.copy(h[P[V+1]]),A.vmult(Qn,Qn),A.vmult(ti,ti),F.vadd(Qn,Qn),F.vadd(ti,ti);const Z=fn.distanceTo(g);!(Ue.pointInTriangle(fn,Bn,Qn,ti)||Ue.pointInTriangle(fn,Qn,Bn,ti))||Z>p||this.reportIntersection(a,fn,r,s,S)}}}}_intersectTrimesh(t,e,n,s,r,o){const a=XC,l=JC,c=QC,u=Zf,h=$C,d=jC,f=YC,g=ZC,v=KC,p=t.indices;t.vertices;const m=this.from,y=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),re.vectorToLocalFrame(n,e,_,h),re.pointToLocalFrame(n,e,m,d),re.pointToLocalFrame(n,e,y,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,f.vsub(d,h),h.normalize();const S=d.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let P=0,T=l.length;!this.result.shouldStop&&P!==T;P++){const A=l[P];t.getNormal(A,a),t.getVertex(p[A*3],Bn),Bn.vsub(d,u);const F=h.dot(a),b=a.dot(u)/F;if(b<0)continue;h.scale(b,fn),fn.vadd(d,fn),t.getVertex(p[A*3+1],Qn),t.getVertex(p[A*3+2],ti);const M=fn.distanceSquared(d);!(Ue.pointInTriangle(fn,Qn,Bn,ti)||Ue.pointInTriangle(fn,Bn,Qn,ti))||M>S||(re.vectorToWorldFrame(e,a,v),re.pointToWorldFrame(n,e,fn,g),this.reportIntersection(v,g,r,s,A))}l.length=0}reportIntersection(t,e,n,s,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ue.ALL:this.hasHit=!0,c.set(o,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case Ue.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l));break;case Ue.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Ds),n.vsub(e,to),t.vsub(e,Ic);const r=Ds.dot(Ds),o=Ds.dot(to),a=Ds.dot(Ic),l=to.dot(to),c=to.dot(Ic);let u,h;return(u=l*a-o*c)>=0&&(h=r*c-o*a)>=0&&u+h<r*l-o*o}}Ue.CLOSEST=Ku.CLOSEST;Ue.ANY=Ku.ANY;Ue.ALL=Ku.ALL;const Yf=new Tn,Pc=[],to=new E,Ic=new E,kC=new E,zC=new Fe,fn=new E,Bn=new E,Qn=new E,ti=new E;new E;new el;const Kf={faceList:[0]},Sa=new E,VC=new Ue,HC=[],GC=new E,WC=new E,qC=new E;new E;new E;const Zf=new E,XC=new E,$C=new E,jC=new E,YC=new E,KC=new E,ZC=new E;new Tn;const JC=[],QC=new re,Ds=new E,wa=new E;function tR(i,t,e){e.vsub(i,Ds);const n=Ds.dot(t);return t.scale(n,wa),wa.vadd(i,wa),e.distanceTo(wa)}class eR{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Jf{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class zo{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=zo.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Jf,this.jacobianElementB=new Jf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,u=s.invMassSolve;return r.scale(c,Qf),a.scale(u,tp),n.invInertiaWorldSolve.vmult(o,ep),s.invInertiaWorldSolve.vmult(l,np),t.multiplyVectors(Qf,ep)+e.multiplyVectors(tp,np)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,Ea),c+=Ea.dot(t.rotational),l.vmult(e.rotational,Ea),c+=Ea.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=nR;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}zo.idCounter=0;const Qf=new E,tp=new E,ep=new E,np=new E,Ea=new E,nR=new E;class iR extends zo{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=sR,c=rR,u=s.velocity,h=s.angularVelocity;s.force,s.torque;const d=r.velocity,f=r.angularVelocity;r.force,r.torque;const g=oR,v=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;o.cross(m,l),a.cross(m,c),m.negate(v.spatial),l.negate(v.rotational),p.spatial.copy(m),p.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);const y=m.dot(g),_=this.restitution+1,S=_*d.dot(m)-_*u.dot(m)+f.dot(c)-h.dot(l),P=this.computeGiMf();return-y*e-S*n-t*P}getImpactVelocityAlongNormal(){const t=aR,e=lR,n=cR,s=uR,r=hR;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const sR=new E,rR=new E,oR=new E,aR=new E,lR=new E,cR=new E,uR=new E,hR=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class ip extends zo{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,s=this.rj,r=dR,o=fR,a=this.t;n.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),h=this.computeGiMf();return-u*e-t*h}}const dR=new E,fR=new E;class Vo{constructor(t,e,n){n=eR.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Vo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Vo.idCounter=0;class Dr{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Dr.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Dr.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Ue;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Lg extends Ft{constructor(t){if(super({type:Ft.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new E);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-r,s[l]=t[l]+r}}}new E;new E;new E;new E;new E;new E;new E;new E;new E;class pR extends Ft{constructor(){super({type:Ft.types.PLANE}),this.worldNormal=new E,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new E),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,s){Ai.set(0,0,1),e.vmult(Ai,Ai);const r=Number.MAX_VALUE;n.set(-r,-r,-r),s.set(r,r,r),Ai.x===1?s.x=t.x:Ai.x===-1&&(n.x=t.x),Ai.y===1?s.y=t.y:Ai.y===-1&&(n.y=t.y),Ai.z===1?s.z=t.z:Ai.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Ai=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Tn;new E;new Tn;new E;new E;new E;new E;new E;new E;new E;new Tn;new E;new re;new Tn;class mR{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class gR extends mR{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let h,d,f,g,v,p;if(a!==0)for(let S=0;S!==c;S++)l[S].updateSolveMassProperties();const m=_R,y=yR,_=vR;m.length=a,y.length=a,_.length=a;for(let S=0;S!==a;S++){const P=o[S];_[S]=0,y[S]=P.computeB(u),m[S]=1/P.computeC()}if(a!==0){for(let T=0;T!==c;T++){const A=l[T],F=A.vlambda,b=A.wlambda;F.set(0,0,0),b.set(0,0,0)}for(n=0;n!==s;n++){g=0;for(let T=0;T!==a;T++){const A=o[T];h=y[T],d=m[T],p=_[T],v=A.computeGWlambda(),f=d*(h-v-A.eps*p),p+f<A.minForce?f=A.minForce-p:p+f>A.maxForce&&(f=A.maxForce-p),_[T]+=f,g+=f>0?f:-f,A.addToWlambda(f)}if(g*g<r)break}for(let T=0;T!==c;T++){const A=l[T],F=A.velocity,b=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),F.vadd(A.vlambda,F),A.wlambda.vmul(A.angularFactor,A.wlambda),b.vadd(A.wlambda,b)}let S=o.length;const P=1/u;for(;S--;)o[S].multiplier=_[S]*P}return n}}const vR=[],_R=[],yR=[];class xR{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class MR extends xR{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const xe={sphereSphere:Ft.types.SPHERE,spherePlane:Ft.types.SPHERE|Ft.types.PLANE,boxBox:Ft.types.BOX|Ft.types.BOX,sphereBox:Ft.types.SPHERE|Ft.types.BOX,planeBox:Ft.types.PLANE|Ft.types.BOX,convexConvex:Ft.types.CONVEXPOLYHEDRON,sphereConvex:Ft.types.SPHERE|Ft.types.CONVEXPOLYHEDRON,planeConvex:Ft.types.PLANE|Ft.types.CONVEXPOLYHEDRON,boxConvex:Ft.types.BOX|Ft.types.CONVEXPOLYHEDRON,sphereHeightfield:Ft.types.SPHERE|Ft.types.HEIGHTFIELD,boxHeightfield:Ft.types.BOX|Ft.types.HEIGHTFIELD,convexHeightfield:Ft.types.CONVEXPOLYHEDRON|Ft.types.HEIGHTFIELD,sphereParticle:Ft.types.PARTICLE|Ft.types.SPHERE,planeParticle:Ft.types.PLANE|Ft.types.PARTICLE,boxParticle:Ft.types.BOX|Ft.types.PARTICLE,convexParticle:Ft.types.PARTICLE|Ft.types.CONVEXPOLYHEDRON,cylinderCylinder:Ft.types.CYLINDER,sphereCylinder:Ft.types.SPHERE|Ft.types.CYLINDER,planeCylinder:Ft.types.PLANE|Ft.types.CYLINDER,boxCylinder:Ft.types.BOX|Ft.types.CYLINDER,convexCylinder:Ft.types.CONVEXPOLYHEDRON|Ft.types.CYLINDER,heightfieldCylinder:Ft.types.HEIGHTFIELD|Ft.types.CYLINDER,particleCylinder:Ft.types.PARTICLE|Ft.types.CYLINDER,sphereTrimesh:Ft.types.SPHERE|Ft.types.TRIMESH,planeTrimesh:Ft.types.PLANE|Ft.types.TRIMESH};class bR{get[xe.sphereSphere](){return this.sphereSphere}get[xe.spherePlane](){return this.spherePlane}get[xe.boxBox](){return this.boxBox}get[xe.sphereBox](){return this.sphereBox}get[xe.planeBox](){return this.planeBox}get[xe.convexConvex](){return this.convexConvex}get[xe.sphereConvex](){return this.sphereConvex}get[xe.planeConvex](){return this.planeConvex}get[xe.boxConvex](){return this.boxConvex}get[xe.sphereHeightfield](){return this.sphereHeightfield}get[xe.boxHeightfield](){return this.boxHeightfield}get[xe.convexHeightfield](){return this.convexHeightfield}get[xe.sphereParticle](){return this.sphereParticle}get[xe.planeParticle](){return this.planeParticle}get[xe.boxParticle](){return this.boxParticle}get[xe.convexParticle](){return this.convexParticle}get[xe.cylinderCylinder](){return this.convexConvex}get[xe.sphereCylinder](){return this.sphereConvex}get[xe.planeCylinder](){return this.planeConvex}get[xe.boxCylinder](){return this.boxConvex}get[xe.convexCylinder](){return this.convexConvex}get[xe.heightfieldCylinder](){return this.heightfieldCylinder}get[xe.particleCylinder](){return this.particleCylinder}get[xe.sphereTrimesh](){return this.sphereTrimesh}get[xe.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new MR,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new iR(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=s.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||n.material,h=o.material||s.material;if(u&&h&&u.friction>=0&&h.friction>=0&&(c=u.friction*h.friction),c>0){const d=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+s.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,v=g.length?g.pop():new ip(n,s,d*f),p=g.length?g.pop():new ip(n,s,d*f);return v.bi=p.bi=n,v.bj=p.bj=s,v.minForce=p.minForce=-d*f,v.maxForce=p.maxForce=d*f,v.ri.copy(t.ri),v.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(v.t,p.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=p.enabled=t.enabled,e.push(v,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Cs.setZero(),hr.setZero(),dr.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Cs.vadd(e.ni,Cs),hr.vadd(e.ri,hr),dr.vadd(e.rj,dr)):(Cs.vsub(e.ni,Cs),hr.vadd(e.rj,hr),dr.vadd(e.ri,dr));const o=1/t;hr.scale(o,n.ri),dr.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Cs.normalize(),Cs.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=ER,c=TR,u=SR,h=wR;for(let d=0,f=t.length;d!==f;d++){const g=t[d],v=e[d];let p=null;g.material&&v.material&&(p=n.getContactMaterial(g.material,v.material)||null);const m=g.type&Bt.KINEMATIC&&v.type&Bt.STATIC||g.type&Bt.STATIC&&v.type&Bt.KINEMATIC||g.type&Bt.KINEMATIC&&v.type&Bt.KINEMATIC;for(let y=0;y<g.shapes.length;y++){g.quaternion.mult(g.shapeOrientations[y],l),g.quaternion.vmult(g.shapeOffsets[y],u),u.vadd(g.position,u);const _=g.shapes[y];for(let S=0;S<v.shapes.length;S++){v.quaternion.mult(v.shapeOrientations[S],c),v.quaternion.vmult(v.shapeOffsets[S],h),h.vadd(v.position,h);const P=v.shapes[S];if(!(_.collisionFilterMask&P.collisionFilterGroup&&P.collisionFilterMask&_.collisionFilterGroup)||u.distanceTo(h)>_.boundingSphereRadius+P.boundingSphereRadius)continue;let T=null;_.material&&P.material&&(T=n.getContactMaterial(_.material,P.material)||null),this.currentContactMaterial=T||p||n.defaultContactMaterial;const A=_.type|P.type,F=this[A];if(F){let b=!1;_.type<P.type?b=F.call(this,_,P,u,h,l,c,g,v,_,P,m):b=F.call(this,P,_,h,u,c,l,v,g,_,P,m),b&&m&&(n.shapeOverlapKeeper.set(_.id,P.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,s,r,o,a,l,c,u,h){if(h)return n.distanceSquared(s)<(t.radius+e.radius)**2;const d=this.createContactEquation(a,l,t,e,c,u);s.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(t.radius,d.ri),d.rj.scale(-e.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(s,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,l,c,u,h){const d=this.createContactEquation(a,l,t,e,c,u);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(t.radius,d.ri),n.vsub(s,Ta),d.ni.scale(d.ni.dot(Ta),sp),Ta.vsub(sp,d.rj),-Ta.dot(d.ni)<=t.radius){if(h)return!0;const f=d.ri,g=d.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(s,g),g.vsub(l.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,l,c,u,h){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,h)}sphereBox(t,e,n,s,r,o,a,l,c,u,h){const d=this.v3pool,f=JR;n.vsub(s,Aa),e.getSideNormals(f,o);const g=t.radius;let v=!1;const p=tP,m=eP,y=nP;let _=null,S=0,P=0,T=0,A=null;for(let k=0,at=f.length;k!==at&&v===!1;k++){const U=YR;U.copy(f[k]);const O=U.length();U.normalize();const lt=Aa.dot(U);if(lt<O+g&&lt>0){const bt=KR,pt=ZR;bt.copy(f[(k+1)%3]),pt.copy(f[(k+2)%3]);const Vt=bt.length(),it=pt.length();bt.normalize(),pt.normalize();const vt=Aa.dot(bt),At=Aa.dot(pt);if(vt<Vt&&vt>-Vt&&At<it&&At>-it){const $=Math.abs(lt-O-g);if((A===null||$<A)&&(A=$,P=vt,T=At,_=O,p.copy(U),m.copy(bt),y.copy(pt),S++,h))return!0}}}if(S){v=!0;const k=this.createContactEquation(a,l,t,e,c,u);p.scale(-g,k.ri),k.ni.copy(p),k.ni.negate(k.ni),p.scale(_,p),m.scale(P,m),p.vadd(m,p),y.scale(T,y),p.vadd(y,k.rj),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),k.rj.vadd(s,k.rj),k.rj.vsub(l.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}let F=d.get();const b=QR;for(let k=0;k!==2&&!v;k++)for(let at=0;at!==2&&!v;at++)for(let U=0;U!==2&&!v;U++)if(F.set(0,0,0),k?F.vadd(f[0],F):F.vsub(f[0],F),at?F.vadd(f[1],F):F.vsub(f[1],F),U?F.vadd(f[2],F):F.vsub(f[2],F),s.vadd(F,b),b.vsub(n,b),b.lengthSquared()<g*g){if(h)return!0;v=!0;const O=this.createContactEquation(a,l,t,e,c,u);O.ri.copy(b),O.ri.normalize(),O.ni.copy(O.ri),O.ri.scale(g,O.ri),O.rj.copy(F),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(s,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}d.release(F),F=null;const M=d.get(),V=d.get(),Z=d.get(),I=d.get(),G=d.get(),B=f.length;for(let k=0;k!==B&&!v;k++)for(let at=0;at!==B&&!v;at++)if(k%3!==at%3){f[at].cross(f[k],M),M.normalize(),f[k].vadd(f[at],V),Z.copy(n),Z.vsub(V,Z),Z.vsub(s,Z);const U=Z.dot(M);M.scale(U,I);let O=0;for(;O===k%3||O===at%3;)O++;G.copy(n),G.vsub(I,G),G.vsub(V,G),G.vsub(s,G);const lt=Math.abs(U),bt=G.length();if(lt<f[O].length()&&bt<g){if(h)return!0;v=!0;const pt=this.createContactEquation(a,l,t,e,c,u);V.vadd(I,pt.rj),pt.rj.copy(pt.rj),G.negate(pt.ni),pt.ni.normalize(),pt.ri.copy(pt.rj),pt.ri.vadd(s,pt.ri),pt.ri.vsub(n,pt.ri),pt.ri.normalize(),pt.ri.scale(g,pt.ri),pt.ri.vadd(n,pt.ri),pt.ri.vsub(a.position,pt.ri),pt.rj.vadd(s,pt.rj),pt.rj.vsub(l.position,pt.rj),this.result.push(pt),this.createFrictionEquationsFromContact(pt,this.frictionResult)}}d.release(M,V,Z,I,G)}planeBox(t,e,n,s,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,h)}convexConvex(t,e,n,s,r,o,a,l,c,u,h,d,f){const g=vP;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,g,d,f)){const v=[],p=_P;t.clipAgainstHull(n,r,e,s,o,g,-100,100,v);let m=0;for(let y=0;y!==v.length;y++){if(h)return!0;const _=this.createContactEquation(a,l,t,e,c,u),S=_.ri,P=_.rj;g.negate(_.ni),v[y].normal.negate(p),p.scale(v[y].depth,p),v[y].point.vadd(p,S),P.copy(v[y].point),S.vsub(n,S),P.vsub(s,P),S.vadd(n,S),S.vsub(a.position,S),P.vadd(s,P),P.vsub(l.position,P),this.result.push(_),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,n,s,r,o,a,l,c,u,h){const d=this.v3pool;n.vsub(s,iP);const f=e.faceNormals,g=e.faces,v=e.vertices,p=t.radius;let m=!1;for(let y=0;y!==v.length;y++){const _=v[y],S=aP;o.vmult(_,S),s.vadd(S,S);const P=oP;if(S.vsub(n,P),P.lengthSquared()<p*p){if(h)return!0;m=!0;const T=this.createContactEquation(a,l,t,e,c,u);T.ri.copy(P),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(p,T.ri),S.vsub(s,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(s,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let y=0,_=g.length;y!==_&&m===!1;y++){const S=f[y],P=g[y],T=lP;o.vmult(S,T);const A=cP;o.vmult(v[P[0]],A),A.vadd(s,A);const F=uP;T.scale(-p,F),n.vadd(F,F);const b=hP;F.vsub(A,b);const M=b.dot(T),V=dP;if(n.vsub(A,V),M<0&&V.dot(T)>0){const Z=[];for(let I=0,G=P.length;I!==G;I++){const B=d.get();o.vmult(v[P[I]],B),s.vadd(B,B),Z.push(B)}if(jR(Z,T,n)){if(h)return!0;m=!0;const I=this.createContactEquation(a,l,t,e,c,u);T.scale(-p,I.ri),T.negate(I.ni);const G=d.get();T.scale(-M,G);const B=d.get();T.scale(-p,B),n.vsub(s,I.rj),I.rj.vadd(B,I.rj),I.rj.vadd(G,I.rj),I.rj.vadd(s,I.rj),I.rj.vsub(l.position,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),d.release(G),d.release(B),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);for(let k=0,at=Z.length;k!==at;k++)d.release(Z[k]);return}else for(let I=0;I!==P.length;I++){const G=d.get(),B=d.get();o.vmult(v[P[(I+1)%P.length]],G),o.vmult(v[P[(I+2)%P.length]],B),s.vadd(G,G),s.vadd(B,B);const k=sP;B.vsub(G,k);const at=rP;k.unit(at);const U=d.get(),O=d.get();n.vsub(G,O);const lt=O.dot(at);at.scale(lt,U),U.vadd(G,U);const bt=d.get();if(U.vsub(n,bt),lt>0&&lt*lt<k.lengthSquared()&&bt.lengthSquared()<p*p){if(h)return!0;const pt=this.createContactEquation(a,l,t,e,c,u);U.vsub(s,pt.rj),U.vsub(n,pt.ni),pt.ni.normalize(),pt.ni.scale(p,pt.ri),pt.rj.vadd(s,pt.rj),pt.rj.vsub(l.position,pt.rj),pt.ri.vadd(n,pt.ri),pt.ri.vsub(a.position,pt.ri),this.result.push(pt),this.createFrictionEquationsFromContact(pt,this.frictionResult);for(let Vt=0,it=Z.length;Vt!==it;Vt++)d.release(Z[Vt]);d.release(G),d.release(B),d.release(U),d.release(bt),d.release(O);return}d.release(G),d.release(B),d.release(U),d.release(bt),d.release(O)}for(let I=0,G=Z.length;I!==G;I++)d.release(Z[I])}}}planeConvex(t,e,n,s,r,o,a,l,c,u,h){const d=fP,f=pP;f.set(0,0,1),r.vmult(f,f);let g=0;const v=mP;for(let p=0;p!==e.vertices.length;p++)if(d.copy(e.vertices[p]),o.vmult(d,d),s.vadd(d,d),d.vsub(n,v),f.dot(v)<=0){if(h)return!0;const y=this.createContactEquation(a,l,t,e,c,u),_=gP;f.scale(f.dot(v),_),d.vsub(_,_),_.vsub(n,y.ri),y.ni.copy(f),d.vsub(s,y.rj),y.ri.vadd(n,y.ri),y.ri.vsub(a.position,y.ri),y.rj.vadd(s,y.rj),y.rj.vsub(l.position,y.rj),this.result.push(y),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,s,r,o,a,l,c,u,h){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,h)}sphereHeightfield(t,e,n,s,r,o,a,l,c,u,h){const d=e.data,f=t.radius,g=e.elementSize,v=PP,p=RP;re.pointToLocalFrame(s,o,n,p);let m=Math.floor((p.x-f)/g)-1,y=Math.ceil((p.x+f)/g)+1,_=Math.floor((p.y-f)/g)-1,S=Math.ceil((p.y+f)/g)+1;if(y<0||S<0||m>d.length||_>d[0].length)return;m<0&&(m=0),y<0&&(y=0),_<0&&(_=0),S<0&&(S=0),m>=d.length&&(m=d.length-1),y>=d.length&&(y=d.length-1),S>=d[0].length&&(S=d[0].length-1),_>=d[0].length&&(_=d[0].length-1);const P=[];e.getRectMinMax(m,_,y,S,P);const T=P[0],A=P[1];if(p.z-f>A||p.z+f<T)return;const F=this.result;for(let b=m;b<y;b++)for(let M=_;M<S;M++){const V=F.length;let Z=!1;if(e.getConvexTrianglePillar(b,M,!1),re.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(Z=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,l,t,e,h)),h&&Z||(e.getConvexTrianglePillar(b,M,!0),re.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(Z=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,l,t,e,h)),h&&Z))return!0;if(F.length-V>2)return}}boxHeightfield(t,e,n,s,r,o,a,l,c,u,h){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,h)}convexHeightfield(t,e,n,s,r,o,a,l,c,u,h){const d=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=AP,p=CP,m=TP;re.pointToLocalFrame(s,o,n,m);let y=Math.floor((m.x-g)/f)-1,_=Math.ceil((m.x+g)/f)+1,S=Math.floor((m.y-g)/f)-1,P=Math.ceil((m.y+g)/f)+1;if(_<0||P<0||y>d.length||S>d[0].length)return;y<0&&(y=0),_<0&&(_=0),S<0&&(S=0),P<0&&(P=0),y>=d.length&&(y=d.length-1),_>=d.length&&(_=d.length-1),P>=d[0].length&&(P=d[0].length-1),S>=d[0].length&&(S=d[0].length-1);const T=[];e.getRectMinMax(y,S,_,P,T);const A=T[0],F=T[1];if(!(m.z-g>F||m.z+g<A))for(let b=y;b<_;b++)for(let M=S;M<P;M++){let V=!1;if(e.getConvexTrianglePillar(b,M,!1),re.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,l,null,null,h,p,null)),h&&V||(e.getConvexTrianglePillar(b,M,!0),re.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,l,null,null,h,p,null)),h&&V))return!0}}sphereParticle(t,e,n,s,r,o,a,l,c,u,h){const d=bP;if(d.set(0,0,1),s.vsub(n,d),d.lengthSquared()<=t.radius*t.radius){if(h)return!0;const g=this.createContactEquation(l,a,e,t,c,u);d.normalize(),g.rj.copy(d),g.rj.scale(t.radius,g.rj),g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,l,c,u,h){const d=yP;d.set(0,0,1),a.quaternion.vmult(d,d);const f=xP;if(s.vsub(a.position,f),d.dot(f)<=0){if(h)return!0;const v=this.createContactEquation(l,a,e,t,c,u);v.ni.copy(d),v.ni.negate(v.ni),v.ri.set(0,0,0);const p=MP;d.scale(d.dot(s),p),s.vsub(p,p),v.rj.copy(p),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,l,c,u,h){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,h)}convexParticle(t,e,n,s,r,o,a,l,c,u,h){let d=-1;const f=wP,g=EP;let v=null;const p=SP;if(p.copy(s),p.vsub(n,p),r.conjugate(rp),rp.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let m=0,y=t.faces.length;m!==y;m++){const _=[t.worldVertices[t.faces[m][0]]],S=t.worldFaceNormals[m];s.vsub(_[0],op);const P=-S.dot(op);if(v===null||Math.abs(P)<Math.abs(v)){if(h)return!0;v=P,d=m,f.copy(S)}}if(d!==-1){const m=this.createContactEquation(l,a,e,t,c,u);f.scale(v,g),g.vadd(s,g),g.vsub(n,g),m.rj.copy(g),f.negate(m.ni),m.ri.set(0,0,0);const y=m.ri,_=m.rj;y.vadd(s,y),y.vsub(l.position,y),_.vadd(n,_),_.vsub(a.position,_),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,l,c,u,h){return this.convexHeightfield(e,t,s,n,o,r,l,a,c,u,h)}particleCylinder(t,e,n,s,r,o,a,l,c,u,h){return this.convexParticle(e,t,s,n,o,r,l,a,c,u,h)}sphereTrimesh(t,e,n,s,r,o,a,l,c,u,h){const d=DR,f=UR,g=FR,v=OR,p=BR,m=kR,y=GR,_=NR,S=IR,P=WR;re.pointToLocalFrame(s,o,n,p);const T=t.radius;y.lowerBound.set(p.x-T,p.y-T,p.z-T),y.upperBound.set(p.x+T,p.y+T,p.z+T),e.getTrianglesInAABB(y,P);const A=LR,F=t.radius*t.radius;for(let I=0;I<P.length;I++)for(let G=0;G<3;G++)if(e.getVertex(e.indices[P[I]*3+G],A),A.vsub(p,S),S.lengthSquared()<=F){if(_.copy(A),re.pointToWorldFrame(s,o,_,A),A.vsub(n,S),h)return!0;let B=this.createContactEquation(a,l,t,e,c,u);B.ni.copy(S),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.copy(A),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let I=0;I<P.length;I++)for(let G=0;G<3;G++){e.getVertex(e.indices[P[I]*3+G],d),e.getVertex(e.indices[P[I]*3+(G+1)%3],f),f.vsub(d,g),p.vsub(f,m);const B=m.dot(g);p.vsub(d,m);let k=m.dot(g);if(k>0&&B<0&&(p.vsub(d,m),v.copy(g),v.normalize(),k=m.dot(v),v.scale(k,m),m.vadd(d,m),m.distanceTo(p)<t.radius)){if(h)return!0;const U=this.createContactEquation(a,l,t,e,c,u);m.vsub(p,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),re.pointToWorldFrame(s,o,m,m),m.vsub(l.position,U.rj),re.vectorToWorldFrame(o,U.ni,U.ni),re.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}const b=zR,M=VR,V=HR,Z=PR;for(let I=0,G=P.length;I!==G;I++){e.getTriangleVertices(P[I],b,M,V),e.getNormal(P[I],Z),p.vsub(b,m);let B=m.dot(Z);if(Z.scale(B,m),p.vsub(m,m),B=m.distanceTo(p),Ue.pointInTriangle(m,b,M,V)&&B<t.radius){if(h)return!0;let k=this.createContactEquation(a,l,t,e,c,u);m.vsub(p,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),re.pointToWorldFrame(s,o,m,m),m.vsub(l.position,k.rj),re.vectorToWorldFrame(o,k.ni,k.ni),re.vectorToWorldFrame(o,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}P.length=0}planeTrimesh(t,e,n,s,r,o,a,l,c,u,h){const d=new E,f=AR;f.set(0,0,1),r.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,d);const v=new E;v.copy(d),re.pointToWorldFrame(s,o,v,d);const p=CR;if(d.vsub(n,p),f.dot(p)<=0){if(h)return!0;const y=this.createContactEquation(a,l,t,e,c,u);y.ni.copy(f);const _=RR;f.scale(p.dot(f),_),d.vsub(_,_),y.ri.copy(_),y.ri.vsub(a.position,y.ri),y.rj.copy(d),y.rj.vsub(l.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}}}const Cs=new E,hr=new E,dr=new E,SR=new E,wR=new E,ER=new Fe,TR=new Fe,AR=new E,CR=new E,RR=new E,PR=new E,IR=new E;new E;const LR=new E,NR=new E,DR=new E,UR=new E,FR=new E,OR=new E,BR=new E,kR=new E,zR=new E,VR=new E,HR=new E,GR=new Tn,WR=[],Ta=new E,sp=new E,qR=new E,XR=new E,$R=new E;function jR(i,t,e){let n=null;const s=i.length;for(let r=0;r!==s;r++){const o=i[r],a=qR;i[(r+1)%s].vsub(o,a);const l=XR;a.cross(t,l);const c=$R;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Aa=new E,YR=new E,KR=new E,ZR=new E,JR=[new E,new E,new E,new E,new E,new E],QR=new E,tP=new E,eP=new E,nP=new E,iP=new E,sP=new E,rP=new E,oP=new E,aP=new E,lP=new E,cP=new E,uP=new E,hP=new E,dP=new E;new E;new E;const fP=new E,pP=new E,mP=new E,gP=new E,vP=new E,_P=new E,yP=new E,xP=new E,MP=new E,bP=new E,rp=new Fe,SP=new E;new E;const wP=new E,op=new E,EP=new E,TP=new E,AP=new E,CP=[0],RP=new E,PP=new E;class ap{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),s=this.current;let r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,s=this.previous,r=n.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=n[l];for(;u>s[a];)a++;c=u===s[a],c||lp(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=s[l];for(;u>n[a];)a++;c=n[a]===u,c||lp(e,u)}}}function lp(i,t){i.push((t&4294901760)>>16,t&65535)}const Lc=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`;class IP{constructor(){this.data={keys:[]}}get(t,e){const n=Lc(t,e);return this.data[n]}set(t,e,n){const s=Lc(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){const n=Lc(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class LP extends Sg{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new wg,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new gR,this.constraints=[],this.narrowphase=new bR(this),this.collisionMatrix=new $f,this.collisionMatrixPrevious=new $f,this.bodyOverlapKeeper=new ap,this.shapeOverlapKeeper=new ap,this.contactmaterials=[],this.contactMaterialTable=new IP,this.defaultMaterial=new Dr("default"),this.defaultContactMaterial=new Vo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof el?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Ue.ALL,n.from=t,n.to=e,n.callback=s,Nc.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Ue.ANY,n.from=t,n.to=e,n.result=s,Nc.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Ue.CLOSEST,n.from=t,n.to=e,n.result=s,Nc.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Bt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const s=e[n].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ze.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=ze.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(ze.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=OP,s=BP,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,h=Bt.DYNAMIC;let d=-1/0;const f=this.constraints,g=FP;l.length();const v=l.x,p=l.y,m=l.z;let y=0;for(c&&(d=ze.now()),y=0;y!==r;y++){const I=o[y];if(I.type===h){const G=I.force,B=I.mass;G.x+=B*v,G.y+=B*p,G.z+=B*m}}for(let I=0,G=this.subsystems.length;I!==G;I++)this.subsystems[I].update();c&&(d=ze.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(u.broadphase=ze.now()-d);let _=f.length;for(y=0;y!==_;y++){const I=f[y];if(!I.collideConnected)for(let G=n.length-1;G>=0;G-=1)(I.bodyA===n[G]&&I.bodyB===s[G]||I.bodyB===n[G]&&I.bodyA===s[G])&&(n.splice(G,1),s.splice(G,1))}this.collisionMatrixTick(),c&&(d=ze.now());const S=UP,P=e.length;for(y=0;y!==P;y++)S.push(e[y]);e.length=0;const T=this.frictionEquations.length;for(y=0;y!==T;y++)g.push(this.frictionEquations[y]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,S,this.frictionEquations,g),c&&(u.narrowphase=ze.now()-d),c&&(d=ze.now()),y=0;y<this.frictionEquations.length;y++)a.addEquation(this.frictionEquations[y]);const A=e.length;for(let I=0;I!==A;I++){const G=e[I],B=G.bi,k=G.bj,at=G.si,U=G.sj;let O;if(B.material&&k.material?O=this.getContactMaterial(B.material,k.material)||this.defaultContactMaterial:O=this.defaultContactMaterial,O.friction,B.material&&k.material&&(B.material.friction>=0&&k.material.friction>=0&&B.material.friction*k.material.friction,B.material.restitution>=0&&k.material.restitution>=0&&(G.restitution=B.material.restitution*k.material.restitution)),a.addEquation(G),B.allowSleep&&B.type===Bt.DYNAMIC&&B.sleepState===Bt.SLEEPING&&k.sleepState===Bt.AWAKE&&k.type!==Bt.STATIC){const lt=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),bt=k.sleepSpeedLimit**2;lt>=bt*2&&(B.wakeUpAfterNarrowphase=!0)}if(k.allowSleep&&k.type===Bt.DYNAMIC&&k.sleepState===Bt.SLEEPING&&B.sleepState===Bt.AWAKE&&B.type!==Bt.STATIC){const lt=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),bt=B.sleepSpeedLimit**2;lt>=bt*2&&(k.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,k,!0),this.collisionMatrixPrevious.get(B,k)||(eo.body=k,eo.contact=G,B.dispatchEvent(eo),eo.body=B,k.dispatchEvent(eo)),this.bodyOverlapKeeper.set(B.id,k.id),this.shapeOverlapKeeper.set(at.id,U.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=ze.now()-d,d=ze.now()),y=0;y!==r;y++){const I=o[y];I.wakeUpAfterNarrowphase&&(I.wakeUp(),I.wakeUpAfterNarrowphase=!1)}for(_=f.length,y=0;y!==_;y++){const I=f[y];I.update();for(let G=0,B=I.equations.length;G!==B;G++){const k=I.equations[G];a.addEquation(k)}}a.solve(t,this),c&&(u.solve=ze.now()-d),a.removeAllEquations();const F=Math.pow;for(y=0;y!==r;y++){const I=o[y];if(I.type&h){const G=F(1-I.linearDamping,t),B=I.velocity;B.scale(G,B);const k=I.angularVelocity;if(k){const at=F(1-I.angularDamping,t);k.scale(at,k)}}}this.dispatchEvent(DP),c&&(d=ze.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,V=this.quatNormalizeFast;for(y=0;y!==r;y++)o[y].integrate(t,M,V);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=ze.now()-d),this.stepnumber+=1,this.dispatchEvent(NP);let Z=!0;if(this.allowSleep)for(Z=!1,y=0;y!==r;y++){const I=o[y];I.sleepTick(this.time),I.sleepState!==Bt.SLEEPING&&(Z=!0)}this.hasActiveBodies=Z}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Ci,Ri),t){for(let r=0,o=Ci.length;r<o;r+=2)no.bodyA=this.getBodyById(Ci[r]),no.bodyB=this.getBodyById(Ci[r+1]),this.dispatchEvent(no);no.bodyA=no.bodyB=null}if(e){for(let r=0,o=Ri.length;r<o;r+=2)io.bodyA=this.getBodyById(Ri[r]),io.bodyB=this.getBodyById(Ri[r+1]),this.dispatchEvent(io);io.bodyA=io.bodyB=null}Ci.length=Ri.length=0;const n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(Ci,Ri),n){for(let r=0,o=Ci.length;r<o;r+=2){const a=this.getShapeById(Ci[r]),l=this.getShapeById(Ci[r+1]);Pi.shapeA=a,Pi.shapeB=l,a&&(Pi.bodyA=a.body),l&&(Pi.bodyB=l.body),this.dispatchEvent(Pi)}Pi.bodyA=Pi.bodyB=Pi.shapeA=Pi.shapeB=null}if(s){for(let r=0,o=Ri.length;r<o;r+=2){const a=this.getShapeById(Ri[r]),l=this.getShapeById(Ri[r+1]);Ii.shapeA=a,Ii.shapeB=l,a&&(Ii.bodyA=a.body),l&&(Ii.bodyB=l.body),this.dispatchEvent(Ii)}Ii.bodyA=Ii.bodyB=Ii.shapeA=Ii.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new Tn;const Nc=new Ue,ze=globalThis.performance||{};if(!ze.now){let i=Date.now();ze.timing&&ze.timing.navigationStart&&(i=ze.timing.navigationStart),ze.now=()=>Date.now()-i}new E;const NP={type:"postStep"},DP={type:"preStep"},eo={type:Bt.COLLIDE_EVENT_NAME,body:null,contact:null},UP=[],FP=[],OP=[],BP=[],Ci=[],Ri=[],no={type:"beginContact",bodyA:null,bodyB:null},io={type:"endContact",bodyA:null,bodyB:null},Pi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ii={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Te=105,$e=68,ni=7.32,ln=2.44,rs=2,Oi={TV:"tv",BEHIND:"behind",BIRD:"bird"};class kP{constructor(t){this.canvas=t,this.scene=new gA,this.camera=null,this.renderer=null,this.camMode=Oi.TV,this._camTarget=new z(0,0,0),this._initRenderer(),this._initCamera(),this._initLighting(),this._buildPitch(),this._buildGoals(),this._buildStadium(),this._buildSkybox()}_initRenderer(){this.renderer=new mA({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Um,this.renderer.toneMapping=Fm,this.renderer.toneMappingExposure=1.2,this.renderer.outputColorSpace=Pn,this.scene.background=new kt(858922),this.scene.fog=new Ou(858922,100,260)}_initCamera(){const t=this.canvas.clientWidth,e=this.canvas.clientHeight;this.camera=new vn(55,t/e,.1,500),this._applyTVCamera()}_applyTVCamera(){this.camera.position.set(0,35,68),this.camera.lookAt(0,0,0)}_applyBehindCamera(t){this.camera.position.set(t.x,t.y+4,t.z+10),this.camera.lookAt(t.x,t.y,t.z-15)}_applyBirdCamera(){this.camera.position.set(0,90,0),this.camera.lookAt(0,0,0)}setCameraMode(t,e=null){this.camMode=t,t===Oi.TV&&this._applyTVCamera(),t===Oi.BIRD&&this._applyBirdCamera(),t===Oi.BEHIND&&e&&this._applyBehindCamera(e)}trackBall(t,e){if(this.camMode!==Oi.TV)return;const n=Za.clamp(t.x,-30,30);this.camera.position.x+=(n-this.camera.position.x)*e*2.5,this.camera.lookAt(this.camera.position.x*.3,0,0)}_initLighting(){const t=new iC(2241348,.8);this.scene.add(t);const e=new JA(4482696,1718794,.6);this.scene.add(e),[[-60,50,-45],[60,50,-45],[-60,50,45],[60,50,45]].forEach(([s,r,o])=>{const a=new tC(16775399,3.5,200,Math.PI/5,.3,1.5);a.position.set(s,r,o),a.target.position.set(0,0,0),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.camera.near=1,a.shadow.camera.far=200,this.scene.add(a),this.scene.add(a.target)})}_buildPitch(){const t=new Yn({uniforms:{uStripeWidth:{value:6},uDarkGreen:{value:new kt(1732122)},uLightGreen:{value:new kt(2263842)},uLinePaint:{value:new kt(16777215)},uPitchW:{value:Te},uPitchD:{value:$e}},vertexShader:`
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform float uStripeWidth;
        uniform vec3  uDarkGreen;
        uniform vec3  uLightGreen;
        uniform vec3  uLinePaint;
        uniform float uPitchW;
        uniform float uPitchD;
        varying vec3  vWorldPos;

        float lineAA(float d, float thickness) {
          return 1.0 - smoothstep(0.0, thickness * 0.5, abs(d));
        }

        void main() {
          float x = vWorldPos.x;
          float z = vWorldPos.z;

          // Alternating stripes along Z
          float stripe = mod(floor(z / uStripeWidth), 2.0);
          vec3 grass = mix(uDarkGreen, uLightGreen, stripe);

          // ── Pitch markings ──────────────────────────────────────────────
          float hw = uPitchW * 0.5;
          float hd = uPitchD * 0.5;
          float lw = 0.12;  // line width half-size in metres

          // Boundary
          float onBoundary = max(
            lineAA(abs(x) - hw, lw * 2.0),
            lineAA(abs(z) - hd, lw * 2.0)
          );

          // Halfway line
          float onHalf = lineAA(x, lw);

          // Centre circle (r=9.15m)
          float cr = length(vec2(x, z));
          float onCentre = lineAA(cr - 9.15, lw);
          float onCentreDot = step(cr, 0.3) ? 1.0 : 0.0;

          // Penalty areas (16.5m deep, 40.3m wide)
          float penD = 16.5; float penW = 20.15;
          float inPenL = step(-hw, x) * step(x, -hw + penD) * step(-penW, z) * step(z, penW);
          float inPenR = step( hw - penD, x) * step(x, hw) * step(-penW, z) * step(z, penW);
          float onPenL = max(
            lineAA(x - (-hw + penD), lw) * inPenL,
            max(lineAA(z - penW, lw) * step(-hw, x) * step(x, -hw + penD),
                lineAA(z + penW, lw) * step(-hw, x) * step(x, -hw + penD))
          );
          float onPenR = max(
            lineAA(x - (hw - penD), lw) * inPenR,
            max(lineAA(z - penW, lw) * step(hw - penD, x) * step(x, hw),
                lineAA(z + penW, lw) * step(hw - penD, x) * step(x, hw))
          );

          // Penalty spots
          float pSpotL = step(length(vec2(x + hw - 11.0, z)), 0.25);
          float pSpotR = step(length(vec2(x - hw + 11.0, z)), 0.25);

          float lineBlend = clamp(
            onBoundary + onHalf + onCentre + onCentreDot +
            onPenL + onPenR + pSpotL + pSpotR,
            0.0, 1.0
          );

          vec3 col = mix(grass, uLinePaint, lineBlend);
          gl_FragColor = vec4(col, 1.0);
        }
      `,side:Gi}),e=new ci(Te,$e,128,64),n=new pe(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.name="pitch",this.scene.add(n);const s=new ci(Te+20,$e+20),r=new ur({color:1400853}),o=new pe(s,r);o.rotation.x=-Math.PI/2,o.position.y=-.01,this.scene.add(o)}_buildGoals(){[-1,1].forEach(t=>{const e=new vr,n=new Da({color:16777215,metalness:.6,roughness:.4}),s=.06,r=(m,y,_,S=0,P=0,T=0)=>{const A=new Ja(s,s,m||y||_,8),F=new pe(A,n);return F.rotation.set(S,P,T),F},o=r(0,ln,0);o.position.set(-ni/2,ln/2,0);const a=r(0,ln,0);a.position.set(ni/2,ln/2,0);const l=r(ni,0,0,0,0,Math.PI/2);l.position.set(0,ln,0);const c=r(0,0,rs,Math.PI/2,0,0);c.position.set(0,ln,t*(rs/2));const u=r(0,ln,0);u.position.set(-ni/2,ln/2,t*rs);const h=r(0,ln,0);h.position.set(ni/2,ln/2,t*rs);const d=r(ni,0,0,0,0,Math.PI/2);d.position.set(0,0,t*rs);const f=new ci(ni,ln),g=new Po({color:13421772,transparent:!0,opacity:.25,side:ai}),v=new pe(f,g);v.position.set(0,ln/2,t*rs);const p=new pe(new ci(ni,rs),g.clone());p.rotation.x=Math.PI/2,p.position.set(0,ln,t*rs/2),e.add(o,a,l,c,u,h,d,v,p),e.position.set(t*(Te/2),0,0),e.rotation.y=t===-1?0:Math.PI,e.name=`goal_${t===-1?"left":"right"}`,e.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),this.scene.add(e)})}_buildStadium(){this._buildStands(),this._buildFloodlightTowers(),this._buildRunningTrack()}_buildStands(){const t=new ur({color:1710638});new ur({color:3816042,vertexColors:!0}),[[Te+20,22,18,0,9,-47,0],[Te+20,22,18,0,9,$e/2+13,Math.PI],[24,$e+44,18,-66.5,9,0,-Math.PI/2],[24,$e+44,18,Te/2+14,9,0,Math.PI/2]].forEach(([n,s,r,o,a,l,c])=>{const u=new fs(n,r,s),h=new pe(u,t);h.position.set(o,a,l),h.rotation.y=c,this.scene.add(h),this._addCrowdToStand(o,a+r/2+.5,l,n,s,c)})}_addCrowdToStand(t,e,n,s,r,o){const l=Math.floor(s/1.2),c=8*l,u=new fs(.9,.9,.4),h=new ur({vertexColors:!1,color:16777215}),d=new MA(u,h,c),f=[new kt(13369344),new kt(14487825),new kt(1136076),new kt(17578),new kt(3355443),new kt(15658734)],g=new Ce,v=new kt;let p=0;for(let m=0;m<8;m++)for(let y=0;y<l;y++)g.position.set((y-l/2)*1.1,m*1,0),g.rotation.y=o,g.updateMatrix(),d.setMatrixAt(p,g.matrix),v.copy(f[Math.floor(Math.random()*f.length)]),d.setColorAt(p,v),p++;d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),d.position.set(t,e,n),d.rotation.y=o,this.scene.add(d)}_buildFloodlightTowers(){const t=new Da({color:8947865,metalness:.8,roughness:.3});[[-Te/2-16,0,-$e/2-16],[Te/2+16,0,-$e/2-16],[-Te/2-16,0,$e/2+16],[Te/2+16,0,$e/2+16]].forEach(([n,,s])=>{const r=new Ja(.3,.5,38,8),o=new pe(r,t);o.position.set(n,19,s),o.castShadow=!0,this.scene.add(o);const a=new fs(5,.8,1.4),l=new Da({color:16777164,emissive:16777130,emissiveIntensity:2}),c=new pe(a,l);c.position.set(n,39,s),this.scene.add(c)})}_buildRunningTrack(){const t=new Gu(Math.sqrt((Te/2+4)**2+($e/2+4)**2)-1,Math.sqrt((Te/2+4)**2+($e/2+4)**2)+3,64),e=new ur({color:10506797}),n=new pe(t,e);n.rotation.x=-Math.PI/2,n.position.y=-.005,this.scene.remove(n),[[Te+10,5,0,$e/2+4.5,0],[Te+10,5,0,-38.5,0],[5,$e+10,-57,0,Math.PI/2],[5,$e+10,Te/2+4.5,0,Math.PI/2]].forEach(([s,r,o,a,l])=>{const c=new ci(s,r),u=new ur({color:12085818}),h=new pe(c,u);h.rotation.x=-Math.PI/2,h.rotation.z=l,h.position.set(o,-.004,a),this.scene.add(h)})}_buildSkybox(){const t=new Fo(490,32,16),e=new Yn({side:dn,uniforms:{uTopColor:{value:new kt(331032)},uBottomColor:{value:new kt(858922)}},vertexShader:`
        varying float vY;
        void main() {
          vY = position.y;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uTopColor;
        uniform vec3 uBottomColor;
        varying float vY;
        void main() {
          float t = clamp(vY / 490.0, 0.0, 1.0);
          gl_FragColor = vec4(mix(uBottomColor, uTopColor, t), 1.0);
        }
      `});this.scene.add(new pe(t,e))}render(){this.renderer.render(this.scene,this.camera)}onResize(){const t=this.canvas.clientWidth,e=this.canvas.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}dispose(){this.renderer.dispose()}}const zP="modulepreload",VP=function(i){return"/"+i},cp={},HP=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=VP(l),l in cp)return;cp[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":zP,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,f)=>{h.addEventListener("load",d),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};async function GP(i){const{GLTFLoader:t}=await HP(async()=>{const{GLTFLoader:e}=await import("./GLTFLoader-DK8f9Nq0.js");return{GLTFLoader:e}},[]);return new Promise((e,n)=>{new t().load(i,e,void 0,n)})}const kn={IDLE:"idle",RUN:"run",KICK:"kick",TACKLE:"tackle",CELEBRATE:"celebrate"},WP=new Vu(.35,1.1,4,8),qP=new Fo(.28,12,8),XP=new Hu(.4,12);let Dc;class $P{constructor({data:t,teamColor:e,isHuman:n,world:s,scene:r,startPos:o,facingDir:a}){this.data=t,this.teamColor=e,this.isHuman=n,this.world=s,this.scene=r,this.facingDir=a,this.hasBall=!1,this.isStunned=!1,this.stunTimer=0,this.animState=kn.IDLE,this.animTimer=0,this.kickCooldown=0;const l=(t.pace??70)/100;this.maxSpeed=6+l*6,this._buildMesh(e),this._buildPhysicsBody(o),this._buildShadow()}_buildMesh(t){const e=new Ec({color:new kt(t)}),n=new Ec({color:16042122});this.meshGroup=new vr,this.bodyMesh=new pe(WP,e),this.bodyMesh.castShadow=!0,this.headMesh=new pe(qP,n),this.headMesh.position.y=.9,this._tryLoadModel(data.id);const s=this._makeNumberTexture(this.data.rating??"?"),r=new Po({map:s,transparent:!0}),o=new ci(.5,.28);this.labelMesh=new pe(o,r),this.labelMesh.position.set(0,.1,.36),this.meshGroup.add(this.bodyMesh,this.headMesh,this.labelMesh),this.scene.add(this.meshGroup)}_makeNumberTexture(t){const e=document.createElement("canvas");e.width=64,e.height=32;const n=e.getContext("2d");return n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,64,32),n.fillStyle="#fff",n.font="bold 20px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(t),32,16),new wA(e)}_buildShadow(){Dc||(Dc=new Po({color:0,transparent:!0,opacity:.25,depthWrite:!1})),this.shadowMesh=new pe(XP,Dc),this.shadowMesh.rotation.x=-Math.PI/2,this.shadowMesh.position.y=.01,this.scene.add(this.shadowMesh)}async _tryLoadModel(t){try{const n=(await GP(`/assets/players/${t}.glb`)).scene,s=new Xi().setFromObject(n),o=1.8/(s.max.y-s.min.y||1);n.scale.setScalar(o),n.position.y=-s.min.y*o,n.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),this.meshGroup.remove(this.bodyMesh,this.headMesh),this.meshGroup.add(n),this._gltfModel=n}catch{}try{const e=await new ZA().loadAsync(`/assets/faces/${t}.webp`);e.colorSpace=Pn;const n=new Ec({map:e});this._gltfModel?this._gltfModel.traverse(s=>{s.isMesh&&/head|face/i.test(s.name)&&(s.material=n)}):this.headMesh.material=n}catch{}}_buildPhysicsBody([t,e,n]){const s=new Lg(.38);this.body=new Bt({mass:75,linearDamping:.8,angularDamping:1}),this.body.addShape(s),this.body.position.set(t,e,n),this.body.collisionFilterGroup=2,this.body.collisionFilterMask=3,this.world.addBody(this.body)}update(t,e,n){if(this.kickCooldown=Math.max(0,this.kickCooldown-t),this.animTimer+=t,this.isStunned){this.stunTimer-=t,this.stunTimer<=0&&(this.isStunned=!1),this._syncMesh();return}if(e&&(e.x!==0||e.z!==0)){const o=this.maxSpeed,a=new E(e.x*o,0,e.z*o);this.body.velocity.x=a.x,this.body.velocity.z=a.z;const l=Math.atan2(e.x,e.z);this.meshGroup.rotation.y=l,this._setAnim(kn.RUN)}else this.body.velocity.x*=.85,this.body.velocity.z*=.85,this._setAnim(kn.IDLE);this.body.velocity.y=Math.min(this.body.velocity.y,0),this.body.position.y=Math.max(this.body.position.y,.38);const s=Te/2+1,r=$e/2+1;this.body.position.x=Za.clamp(this.body.position.x,-s,s),this.body.position.z=Za.clamp(this.body.position.z,-r,r),this._syncMesh(),this._animateMesh()}_syncMesh(){const t=this.body.position;this.meshGroup.position.set(t.x,t.y,t.z),this.shadowMesh.position.set(t.x,.01,t.z)}_setAnim(t){this.animState!==t&&(this.animState=t,this.animTimer=0)}_animateMesh(){const t=this.animTimer;this.animState===kn.RUN?(this.bodyMesh.position.y=Math.sin(t*12)*.06,this.headMesh.position.y=.9+Math.sin(t*12)*.04):this.animState===kn.KICK?this.bodyMesh.rotation.x=Math.sin(t*18)*.4:this.animState===kn.CELEBRATE?this.bodyMesh.position.y=Math.abs(Math.sin(t*8))*.5:(this.bodyMesh.position.y=0,this.bodyMesh.rotation.x=0)}kick(t,e,n=.8){if(this.kickCooldown>0||this.body.position.distanceTo(t.position)>1.2)return!1;const r=18+n*22;return t.velocity.set(e.x*r,2.5+n*4,e.z*r),this.kickCooldown=.45,this._setAnim(kn.KICK),!0}tackle(t){if(this.kickCooldown>0||this.body.position.distanceTo(t.body.position)>1)return!1;const n=new E(t.body.position.x-this.body.position.x,.2,t.body.position.z-this.body.position.z);return n.normalize(),t.body.applyImpulse(new E(n.x*6,n.y*6,n.z*6)),t.isStunned=!0,t.stunTimer=.8,t.hasBall=!1,this.kickCooldown=.6,this._setAnim(kn.TACKLE),!0}celebrate(){this._setAnim(kn.CELEBRATE)}dispose(){this.scene.remove(this.meshGroup),this.scene.remove(this.shadowMesh),this.world.removeBody(this.body)}}const pn={IDLE:"idle",CHASE:"chase",DEFEND:"defend",RETURN:"return",DRIBBLE:"dribble",SHOOT:"shoot"};class up{constructor({aiPlayers:t,humanPlayers:e,ballBody:n,difficulty:s,attackDir:r,formation:o}){this.aiPlayers=t,this.humanPlayers=e,this.ballBody=n,this.difficulty=s,this.attackDir=r,this.formation=o,this._states=t.map(()=>pn.IDLE),this._decisionTimer=0,this._decisionFreq=s.get("aiDecisionFrequency"),this._reactionTimer=0,this._pendingDir=t.map(()=>null)}update(t){this._decisionTimer+=t,this._reactionTimer+=t;const e=this.difficulty.get("aiReactionTime"),n=this._reactionTimer>=e;this._decisionTimer>=this._decisionFreq&&(this._decisionTimer=0,n&&(this._reactionTimer=0,this._makeDecisions())),this._executeDecisions(t)}_makeDecisions(){const t=new z(this.ballBody.position.x,this.ballBody.position.y,this.ballBody.position.z),e=this.attackDir*(Te/2);let n=0,s=1/0;this.aiPlayers.forEach((r,o)=>{const a=this._playerPos(r).distanceTo(t);a<s&&(s=a,n=o)}),this.aiPlayers.forEach((r,o)=>{const a=this._playerPos(r),l=a.distanceTo(t),c=this._formationTarget(o);if(o===n){const u=Math.abs(a.x-e),h=this.difficulty.get("aiShootAccuracy")>.7?28:20;u<h?this._states[o]=pn.SHOOT:this._states[o]=pn.DRIBBLE}else{const u=this.difficulty.get("aiPressingIntensity");l<15&&Math.random()<u?this._states[o]=pn.CHASE:this._isDefendingHalf(a)?this._states[o]=pn.DEFEND:this._states[o]=pn.RETURN}this._pendingDir[o]=this._computeDir(r,o,t,e,c)})}_executeDecisions(t){const e=this.difficulty.get("aiSpeedMultiplier");this.aiPlayers.forEach((n,s)=>{const r=this._pendingDir[s];if(!r)return;const o=n.maxSpeed*e;n.body.velocity.x=r.x*o,n.body.velocity.z=r.z*o,n.body.velocity.y=Math.min(n.body.velocity.y,0),n.body.position.y=Math.max(n.body.position.y,.38),r.length()>.1?(n.meshGroup.rotation.y=Math.atan2(r.x,r.z),n._setAnim(kn.RUN)):n._setAnim(kn.IDLE),n._animateMesh(),n._syncMesh();const a=new z(this.ballBody.position.x,this.ballBody.position.y,this.ballBody.position.z);if(this._playerPos(n).distanceTo(a)<1.2){if(this._states[s]===pn.SHOOT)this._doShoot(n,a);else if(this._states[s]===pn.DRIBBLE){const u=new z(this.attackDir,0,0).normalize();n.kick(this.ballBody,u,.3)}}})}_doShoot(t,e){const n=this.difficulty.rollAccuracy("aiShootAccuracy"),s=this.attackDir*(Te/2),r=(1-n)*5,o=(Math.random()-.5)*r,l=new z(s,0,o).sub(e).normalize();t.kick(this.ballBody,l,.7+n*.3)}_computeDir(t,e,n,s,r){const o=this._playerPos(t),a=this._states[e];let l;switch(a){case pn.SHOOT:case pn.DRIBBLE:case pn.CHASE:l=n.clone();break;case pn.DEFEND:l=n.clone().lerp(new z(-s,0,0),.6);break;case pn.RETURN:default:l=r;break}const c=new z().subVectors(l,o);return c.length()<.5?new z(0,0,0):c.normalize()}_playerPos(t){return new z(t.body.position.x,t.body.position.y,t.body.position.z)}_formationTarget(t){if(this.formation&&this.formation.positions&&this.formation.positions[t]){const[s,r]=this.formation.positions[t];return new z(s*this.attackDir,0,r)}const e=t%4,n=Math.floor(t/4);return new z(this.attackDir*(e*10+10),0,(n-1)*18)}_isDefendingHalf(t){return t.x*this.attackDir<0}setPlayers(t){this.aiPlayers=t,this._states=t.map(()=>pn.IDLE),this._pendingDir=t.map(()=>null)}}const oe={KICKOFF:"kickoff",IN_PLAY:"in_play",GOAL:"goal",HALF_TIME:"half_time",FULL_TIME:"full_time",THROW_IN:"throw_in",GOAL_KICK:"goal_kick",CORNER:"corner",FREE_KICK:"free_kick"},hp={[oe.GOAL]:3.5,[oe.HALF_TIME]:4,[oe.THROW_IN]:2,[oe.GOAL_KICK]:2.5,[oe.CORNER]:2.5,[oe.FREE_KICK]:2.5},dp=180;class jP{constructor({ballBody:t,homePlayers:e,awayPlayers:n,homeTeam:s,awayTeam:r}){this.ballBody=t,this.homePlayers=e,this.awayPlayers=n,this.homeTeam=s,this.awayTeam=r,this.score={home:0,away:0},this.phase=oe.KICKOFF,this.phaseTimer=0,this.half=1,this.matchTime=0,this.paused=!1,this._lastTouchHome=!1,this._handlers={},this._setupPhysicsCallbacks()}on(t,e){var n;((n=this._handlers)[t]??(n[t]=[])).push(e)}off(t,e){this._handlers[t]=(this._handlers[t]??[]).filter(n=>n!==e)}_emit(t,e){(this._handlers[t]??[]).forEach(n=>n(e))}update(t){if(!this.paused){if((this.phase===oe.IN_PLAY||this.phase===oe.KICKOFF)&&(this.matchTime+=t,this.matchTime>=dp)){this._endHalf();return}if(hp[this.phase]){this.phaseTimer+=t,this.phaseTimer>=hp[this.phase]&&this._advancePhase();return}this.phase===oe.IN_PLAY&&(this._checkBallOut(),this._checkGoal(),this._checkLastTouch())}}_setupPhysicsCallbacks(){}_checkLastTouch(){const t=this.ballBody.position;let e=1/0,n=1/0;this.homePlayers.forEach(s=>{const r=s.body.position.distanceTo(t);r<e&&(e=r)}),this.awayPlayers.forEach(s=>{const r=s.body.position.distanceTo(t);r<n&&(n=r)}),e<1.5&&e<n&&(this._lastTouchHome=!0),n<1.5&&n<e&&(this._lastTouchHome=!1)}_checkGoal(){const t=this.ballBody.position,e=Te/2;if(t.x<-e&&Math.abs(t.z)<=ni/2&&t.y<=ln){this.score.away++,this._triggerGoal("away");return}t.x>e&&Math.abs(t.z)<=ni/2&&t.y<=ln&&(this.score.home++,this._triggerGoal("home"))}_checkBallOut(){const t=this.ballBody.position,e=Te/2,n=$e/2;if(Math.abs(t.x)>e+.5){const s=t.x<0,r=this._lastTouchHome===s;this._setPhase(r?oe.CORNER:oe.GOAL_KICK,{side:s?"home":"away",z:t.z})}else Math.abs(t.z)>n+.5&&this._setPhase(oe.THROW_IN,{side:t.z>0?"right":"left",x:t.x})}_triggerGoal(t){const e=t==="home"?this.homeTeam.name:this.awayTeam.name;this._setPhase(oe.GOAL,{scoringTeam:t,teamName:e,score:{...this.score}}),(t==="home"?this.homePlayers:this.awayPlayers).forEach(s=>{var r;return(r=s.celebrate)==null?void 0:r.call(s)})}_setPhase(t,e={}){this.phase=t,this.phaseTimer=0,this._emit(t,{phase:t,...e,score:{...this.score},half:this.half}),this._placeBallForPhase(t,e)}_advancePhase(){this.phaseTimer=0,this.phase===oe.HALF_TIME&&(this.half=2,this.matchTime=0);const t=this.phase===oe.GOAL?oe.KICKOFF:oe.IN_PLAY;this.phase=t,this._emit("phase_change",{phase:t}),this._resetBall()}_endHalf(){this.half===1?this._setPhase(oe.HALF_TIME):(this.phase=oe.FULL_TIME,this._emit(oe.FULL_TIME,{score:{...this.score},winner:this._winner()}))}_winner(){return this.score.home>this.score.away?this.homeTeam.name:this.score.away>this.score.home?this.awayTeam.name:null}_resetBall(){this.ballBody.position.set(0,1,0),this.ballBody.velocity.set(0,0,0),this.ballBody.angularVelocity.set(0,0,0)}_placeBallForPhase(t,e){const n=Te/2,s=$e/2;switch(t){case oe.GOAL:case oe.KICKOFF:this._resetBall();break;case oe.THROW_IN:this.ballBody.position.set(Za.clamp(e.x??0,-n,n),.3,e.side==="right"?s:-s),this.ballBody.velocity.set(0,0,0);break;case oe.GOAL_KICK:this.ballBody.position.set(e.side==="home"?-n+5:n-5,.3,0),this.ballBody.velocity.set(0,0,0);break;case oe.CORNER:this.ballBody.position.set(e.side==="home"?-n:n,.3,e.z>0?s:-s),this.ballBody.velocity.set(0,0,0);break}}get gameMinute(){const t=(this.half-1)*45;return Math.min(t+Math.floor(this.matchTime/dp*45),90)}get isLive(){return this.phase===oe.IN_PLAY||this.phase===oe.KICKOFF}kickoff(){this.phase=oe.IN_PLAY,this._emit("phase_change",{phase:oe.IN_PLAY})}}class YP{constructor(t,e){this.container=t,this.engine=e,this._root=null,this._scoreEl=null,this._timeEl=null,this._bannerEl=null,this._minimapCanvas=null,this._minimapCtx=null,this._pauseMenu=null,this._camModeEl=null,this._diffEl=null,this._bannerTimeout=null,this._build(),this._bindEngineEvents()}_build(){this._root=document.createElement("div"),this._root.id="ui-root",Object.assign(this._root.style,{position:"absolute",inset:"0",pointerEvents:"none",fontFamily:"'Segoe UI', Arial, sans-serif",userSelect:"none"}),this._root.innerHTML=`
      <!-- ── HUD ── -->
      <div id="hud" style="
        position:absolute; top:0; left:0; right:0;
        display:flex; align-items:center; justify-content:center;
        padding:8px 16px; gap:24px;
        background:linear-gradient(180deg,rgba(0,0,0,.72) 0%,transparent 100%);
      ">
        <span id="ui-home" style="font-size:15px;font-weight:700;color:#fff;min-width:120px;text-align:right;"></span>
        <div id="ui-scorebox" style="
          background:rgba(0,0,0,.7); border:1px solid rgba(255,255,255,.2);
          border-radius:6px; padding:4px 16px; text-align:center; min-width:110px;
        ">
          <div id="ui-score" style="font-size:22px;font-weight:900;color:#fff;letter-spacing:4px;">0 – 0</div>
          <div id="ui-time"  style="font-size:10px;color:#aaa;letter-spacing:2px;margin-top:1px;">00:00</div>
        </div>
        <span id="ui-away" style="font-size:15px;font-weight:700;color:#fff;min-width:120px;"></span>
      </div>

      <!-- ── Event banner ── -->
      <div id="ui-banner" style="
        display:none; position:absolute; top:50%; left:50%;
        transform:translate(-50%,-50%);
        text-align:center; pointer-events:none;
        animation:none;
      ">
        <div id="ui-banner-title" style="
          font-size:60px; font-weight:900; color:#ffd700;
          text-shadow: 0 0 30px rgba(255,215,0,.8), 2px 2px 0 #000;
          letter-spacing:6px; text-transform:uppercase;
        "></div>
        <div id="ui-banner-sub" style="
          font-size:18px; color:#fff;
          text-shadow: 1px 1px 4px rgba(0,0,0,.8);
          margin-top:8px; letter-spacing:2px;
        "></div>
      </div>

      <!-- ── Minimap ── -->
      <canvas id="ui-minimap" width="120" height="80" style="
        position:absolute; bottom:12px; right:12px;
        border:1px solid rgba(255,255,255,.25); border-radius:4px;
        background:rgba(0,60,0,.7); opacity:.85;
      "></canvas>

      <!-- ── Bottom bar (controls hint) ── -->
      <div id="ui-controls" style="
        position:absolute; bottom:0; left:0; right:0;
        padding:6px 16px; display:flex; gap:20px; justify-content:center;
        background:linear-gradient(0deg,rgba(0,0,0,.65) 0%,transparent 100%);
        font-size:11px; color:rgba(255,255,255,.55); letter-spacing:1px;
      ">
        <span>↑↓←→ Move</span>
        <span>Space Kick</span>
        <span>Z Tackle</span>
        <span>Tab Sprint</span>
        <span>Q Switch Player</span>
        <span>C Camera</span>
        <span>Esc Pause</span>
      </div>

      <!-- ── Camera mode indicator ── -->
      <div id="ui-cam" style="
        position:absolute; top:56px; left:12px;
        font-size:10px; color:rgba(255,255,255,.5); letter-spacing:2px;
        background:rgba(0,0,0,.4); padding:3px 8px; border-radius:4px;
      ">TV CAM</div>

      <!-- ── Difficulty badge ── -->
      <div id="ui-diff" style="
        position:absolute; top:56px; right:12px;
        font-size:10px; letter-spacing:2px;
        background:rgba(0,0,0,.5); padding:3px 10px; border-radius:4px;
        color:#ffd700; text-transform:uppercase;
      ">MEDIUM</div>

      <!-- ── Pause menu ── -->
      <div id="ui-pause" style="
        display:none; position:absolute; inset:0;
        background:rgba(0,0,0,.75); pointer-events:all;
        flex-direction:column; align-items:center; justify-content:center; gap:16px;
      ">
        <div style="font-size:28px;font-weight:900;color:#fff;letter-spacing:4px;margin-bottom:8px;">PAUSED</div>
        <button id="ui-resume" style="${so("#27ae60")}">Resume</button>
        <button id="ui-difficulty-easy"   style="${so("#2980b9")}">Difficulty: Easy</button>
        <button id="ui-difficulty-medium" style="${so("#2980b9")}">Difficulty: Medium</button>
        <button id="ui-difficulty-hard"   style="${so("#c0392b")}">Difficulty: Hard</button>
        <button id="ui-quit" style="${so("#555")}">Quit to Menu</button>
      </div>
    `,this.container.appendChild(this._root),this._scoreEl=this._root.querySelector("#ui-score"),this._timeEl=this._root.querySelector("#ui-time"),this._bannerEl=this._root.querySelector("#ui-banner"),this._bannerTitle=this._root.querySelector("#ui-banner-title"),this._bannerSub=this._root.querySelector("#ui-banner-sub"),this._minimapCanvas=this._root.querySelector("#ui-minimap"),this._minimapCtx=this._minimapCanvas.getContext("2d"),this._pauseMenu=this._root.querySelector("#ui-pause"),this._camModeEl=this._root.querySelector("#ui-cam"),this._diffEl=this._root.querySelector("#ui-diff"),this._homeNameEl=this._root.querySelector("#ui-home"),this._awayNameEl=this._root.querySelector("#ui-away")}_bindEngineEvents(){const t=this.engine;t.on("goal",e=>this.showBanner("GOAL!",e.teamName??"",3e3)),t.on("half_time",()=>this.showBanner("HALF TIME","",3500)),t.on("full_time",e=>{const n=e.winner?`${e.winner} WIN!`:"IT'S A DRAW!";this.showBanner("FULL TIME",n,5e3)}),t.on("corner",()=>this.showBanner("CORNER","",1800)),t.on("throw_in",()=>this.showBanner("THROW IN","",1500)),t.on("goal_kick",()=>this.showBanner("GOAL KICK","",1800)),t.on("free_kick",()=>this.showBanner("FREE KICK","",1800))}setTeamNames(t,e){this._homeNameEl&&(this._homeNameEl.textContent=t),this._awayNameEl&&(this._awayNameEl.textContent=e)}updateHUD(t,e){this._scoreEl&&(this._scoreEl.textContent=`${t.home} – ${t.away}`),this._timeEl&&(this._timeEl.textContent=`${String(e).padStart(2,"0")}'`)}updateMinimap(t,e){const n=this._minimapCtx,s=120,r=80,o=52.5,a=34;n.clearRect(0,0,s,r),n.fillStyle="rgba(20,100,20,0.9)",n.fillRect(0,0,s,r),n.strokeStyle="rgba(255,255,255,0.4)",n.lineWidth=.5,n.beginPath(),n.moveTo(s/2,0),n.lineTo(s/2,r),n.stroke();const l=(t.x+o)/(o*2)*s,c=(t.z+a)/(a*2)*r;n.fillStyle="#fff",n.beginPath(),n.arc(l,c,3,0,Math.PI*2),n.fill(),e.forEach(({x:u,z:h,color:d})=>{const f=(u+o)/(o*2)*s,g=(h+a)/(a*2)*r;n.fillStyle=d,n.beginPath(),n.arc(f,g,2.5,0,Math.PI*2),n.fill()})}showBanner(t,e="",n=2500){clearTimeout(this._bannerTimeout),this._bannerTitle.textContent=t,this._bannerSub.textContent=e,this._bannerEl.style.display="block",this._bannerTimeout=setTimeout(()=>{this._bannerEl.style.display="none"},n)}setCameraMode(t){this._camModeEl&&(this._camModeEl.textContent=t+" CAM")}setDifficulty(t){this._diffEl&&(this._diffEl.textContent=t)}showPause(t,e,n){this._pauseMenu.style.display="flex",this._root.querySelector("#ui-resume").onclick=()=>{this.hidePause(),t()},this._root.querySelector("#ui-quit").onclick=()=>{this.hidePause(),e()},this._root.querySelector("#ui-difficulty-easy").onclick=()=>n("easy"),this._root.querySelector("#ui-difficulty-medium").onclick=()=>n("medium"),this._root.querySelector("#ui-difficulty-hard").onclick=()=>n("hard")}hidePause(){this._pauseMenu.style.display="none"}dispose(){var t;clearTimeout(this._bannerTimeout),(t=this._root)==null||t.remove()}}function so(i){return`
    background:${i}; color:#fff; border:none; border-radius:6px;
    padding:12px 40px; font-size:15px; font-weight:700; letter-spacing:1px;
    cursor:pointer; width:260px; text-transform:uppercase;
  `}const Uc={easy:{label:"Easy",aiReactionTime:.6,aiSpeedMultiplier:.55,aiShootAccuracy:.45,aiPassAccuracy:.55,aiPressingIntensity:.3,aiDecisionFrequency:1.2,playerSpeedBoost:1.15},medium:{label:"Medium",aiReactionTime:.25,aiSpeedMultiplier:.8,aiShootAccuracy:.68,aiPassAccuracy:.72,aiPressingIntensity:.6,aiDecisionFrequency:.5,playerSpeedBoost:1},hard:{label:"Hard",aiReactionTime:.05,aiSpeedMultiplier:1,aiShootAccuracy:.88,aiPassAccuracy:.9,aiPressingIntensity:.95,aiDecisionFrequency:.18,playerSpeedBoost:.92}};class KP{constructor(t="medium"){this.current=t,this.config={...Uc[t]}}set(t){if(!Uc[t])throw new Error(`Unknown difficulty: ${t}`);this.current=t,this.config={...Uc[t]}}get(t){return this.config[t]}rollAccuracy(t){const e=this.config[t]??.5;return Math.min(1,Math.max(0,e+(Math.random()-.5)*.18))}}class ZP{constructor(){this._ctx=null,this._crowdSource=null,this._crowdGain=null,this._crowdFilter=null,this.muted=!1}_getCtx(){return this._ctx||(this._ctx=new(window.AudioContext||window.webkitAudioContext)),this._ctx.state==="suspended"&&this._ctx.resume(),this._ctx}startCrowd(){if(this._crowdSource)return;const t=this._getCtx(),e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),s=n.getChannelData(0);for(let o=0;o<e;o++)s[o]=Math.random()*2-1;this._crowdSource=t.createBufferSource(),this._crowdSource.buffer=n,this._crowdSource.loop=!0,this._crowdFilter=t.createBiquadFilter(),this._crowdFilter.type="bandpass",this._crowdFilter.frequency.value=600,this._crowdFilter.Q.value=.8;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=1800,this._crowdGain=t.createGain(),this._crowdGain.gain.setValueAtTime(0,t.currentTime),this._crowdGain.gain.linearRampToValueAtTime(.18,t.currentTime+2.5),this._crowdSource.connect(this._crowdFilter),this._crowdFilter.connect(r),r.connect(this._crowdGain),this._crowdGain.connect(t.destination),this._crowdSource.start()}raiseCrowd(t=3){if(!this._crowdGain||this.muted)return;const n=this._getCtx().currentTime;this._crowdGain.gain.cancelScheduledValues(n),this._crowdGain.gain.setValueAtTime(this._crowdGain.gain.value,n),this._crowdGain.gain.linearRampToValueAtTime(.55,n+.3),this._crowdGain.gain.linearRampToValueAtTime(.18,n+t)}stopCrowd(){if(!this._crowdGain)return;const e=this._getCtx().currentTime;this._crowdGain.gain.linearRampToValueAtTime(0,e+2),setTimeout(()=>{var n;try{(n=this._crowdSource)==null||n.stop()}catch{}this._crowdSource=null,this._crowdGain=null},2200)}playKick(){if(this.muted)return;const t=this._getCtx(),e=t.currentTime,n=Math.floor(t.sampleRate*.08),s=t.createBuffer(1,n,t.sampleRate),r=s.getChannelData(0);for(let c=0;c<n;c++)r[c]=Math.random()*2-1;const o=t.createBufferSource();o.buffer=s;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=300;const l=t.createGain();l.gain.setValueAtTime(1.2,e),l.gain.exponentialRampToValueAtTime(.001,e+.08),o.connect(a),a.connect(l),l.connect(t.destination),o.start(e),o.stop(e+.1)}playGoal(){if(this.muted)return;const t=this._getCtx();this.raiseCrowd(4),[261.63,329.63,392,523.25].forEach((o,a)=>{const l=t.createOscillator(),c=t.createGain();l.type="sawtooth",l.frequency.value=o;const u=t.currentTime+a*.12;c.gain.setValueAtTime(0,u),c.gain.linearRampToValueAtTime(.22,u+.04),c.gain.linearRampToValueAtTime(.15,u+.3),c.gain.linearRampToValueAtTime(0,u+.7),l.connect(c),c.connect(t.destination),l.start(u),l.stop(u+.75)});const n=t.createOscillator(),s=t.createGain();n.type="sine",n.frequency.value=130.81;const r=t.currentTime;s.gain.setValueAtTime(.15,r),s.gain.linearRampToValueAtTime(0,r+.9),n.connect(s),s.connect(t.destination),n.start(r),n.stop(r+1)}playWhistle(t=1){if(this.muted)return;const e=this._getCtx();for(let n=0;n<t;n++){const s=e.currentTime+n*.4,r=e.createOscillator();r.type="sine",r.frequency.setValueAtTime(2800,s),r.frequency.linearRampToValueAtTime(2600,s+.25);const o=e.createGain();o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(.35,s+.01),o.gain.setValueAtTime(.35,s+.2),o.gain.linearRampToValueAtTime(0,s+.28),r.connect(o),o.connect(e.destination),r.start(s),r.stop(s+.35)}}dispose(){var t,e;try{(t=this._crowdSource)==null||t.stop()}catch{}(e=this._ctx)==null||e.close(),this._ctx=null,this._crowdSource=null,this._crowdGain=null}}const Fc={positions:[[-46,0],[-30,-12],[-30,-4],[-30,4],[-30,12],[-10,-10],[-10,0],[-10,10],[14,-16],[18,0],[14,16]]},Oc=.22;class Ng{constructor(t,e,{homeTeam:n,awayTeam:s,difficulty:r="medium",onQuit:o}){El(this,"_onResize",()=>{this.scene.onResize()});El(this,"_tick",()=>{this._rafId=requestAnimationFrame(this._tick);const t=performance.now(),e=Math.min((t-this._lastTime)/1e3,.05);this._lastTime=t,this._update(e),this.scene.render()});this.canvas=t,this.uiContainer=e,this.homeTeam=n,this.awayTeam=s,this.onQuit=o,this._rafId=null,this._lastTime=null,this._keys={},this._camMode=Oi.TV,this._camCooldown=0,this._prevControlled=null,this.difficulty=new KP(r),this.world=this._initPhysics(),this.scene=new kP(t),this.ballBody=this._createBall(),this.ballMesh=this._createBallMesh(),this.homePlayers=this._spawnTeam(n,1),this.awayPlayers=this._spawnTeam(s,-1),this.controlledPlayer=this.homePlayers[9],this.ai=new up({aiPlayers:this.awayPlayers,humanPlayers:this.homePlayers,ballBody:this.ballBody,difficulty:this.difficulty,attackDir:-1,formation:Fc}),this.homeAi=new up({aiPlayers:this._nonControlledHomePlayers(),humanPlayers:this.awayPlayers,ballBody:this.ballBody,difficulty:this.difficulty,attackDir:1,formation:Fc}),this.match=new jP({ballBody:this.ballBody,homePlayers:this.homePlayers,awayPlayers:this.awayPlayers,homeTeam:n,awayTeam:s}),this.ui=new YP(e,this.match),this.ui.setTeamNames(n.name,s.name),this.ui.setDifficulty(this.difficulty.config.label),this.sound=new ZP,this.match.on("goal",()=>{this.sound.playGoal()}),this.match.on("half_time",()=>{this.sound.playWhistle(3),this.sound.stopCrowd()}),this.match.on("full_time",()=>{this.sound.playWhistle(3),this.sound.stopCrowd()}),this.match.on("corner",()=>this.sound.playWhistle(1)),this.match.on("throw_in",()=>this.sound.playWhistle(1)),this.match.on("goal_kick",()=>this.sound.playWhistle(1)),this.match.on("free_kick",()=>this.sound.playWhistle(1)),this.match.on("phase_change",({phase:a})=>{a==="in_play"&&this.sound.startCrowd()}),this._bindInput(),window.addEventListener("resize",this._onResize)}_initPhysics(){const t=new LP({gravity:new E(0,-9.82,0)});t.broadphase=new wg,t.solver.iterations=10;const e=new Bt({mass:0});return e.addShape(new pR),e.quaternion.setFromEuler(-Math.PI/2,0,0),t.addBody(e),t}_createBall(){const t=new Dr("ball"),e=new Bt({mass:.45,linearDamping:.35,angularDamping:.4});e.addShape(new Lg(Oc)),e.position.set(0,Oc,0),e.material=t;const n=new Dr("ground"),s=new Vo(t,n,{restitution:.7,friction:.4});return this.world.addContactMaterial(s),this.world.addBody(e),e}_createBallMesh(){const t=new Fo(Oc,16,12),e=new Yn({uniforms:{uTime:{value:0}},vertexShader:`
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
          vNormal = normal;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        varying vec2 vUv;
        void main() {
          // Simple hexagonal pattern approximation
          vec2 uv = vUv * 6.0;
          float pattern = step(0.85, fract(sin(dot(floor(uv), vec2(127.1,311.7))) * 43758.5));
          vec3 col = mix(vec3(1.0), vec3(0.05), pattern);
          // Lighting
          float light = dot(normalize(vNormal), normalize(vec3(1.0,2.0,1.0))) * 0.5 + 0.5;
          gl_FragColor = vec4(col * light, 1.0);
        }
      `}),n=new pe(t,e);return n.castShadow=!0,n.receiveShadow=!1,n.name="ball",this.scene.scene.add(n),n}_spawnTeam(t,e){const n=[],s=Fc.positions;return t.players.forEach((r,o)=>{const[a,l]=s[o]??[0,0],c=a*e,u=l,h=new $P({data:r,teamColor:t.primaryColor,isHuman:e===1&&o===9,world:this.world,scene:this.scene.scene,startPos:[c,.38,u],facingDir:e});n.push(h)}),n}_bindInput(){this._keydown=t=>{this._keys[t.code]=!0,t.code==="Escape"&&this._togglePause(),t.code==="KeyC"&&this._cycleCamera(),t.code==="KeyQ"&&this._manualSwitchPlayer()},this._keyup=t=>{this._keys[t.code]=!1},window.addEventListener("keydown",this._keydown),window.addEventListener("keyup",this._keyup)}_getInputDir(){let t=0,e=0;(this._keys.ArrowLeft||this._keys.KeyA)&&(t-=1),(this._keys.ArrowRight||this._keys.KeyD)&&(t+=1),(this._keys.ArrowUp||this._keys.KeyW)&&(e-=1),(this._keys.ArrowDown||this._keys.KeyS)&&(e+=1);const n=this._keys.ShiftLeft||this._keys.Tab,s=Math.sqrt(t*t+e*e)||1,r=n?1.35:1;return{x:t/s*r,z:e/s*r}}_getKickInput(){return this._keys.Space||this._keys.KeyX}_getTackleInput(){return this._keys.KeyZ}_nonControlledHomePlayers(){return this.homePlayers.filter((t,e)=>e!==0&&t!==this.controlledPlayer)}_manualSwitchPlayer(){const t=this.homePlayers.filter((n,s)=>s!==0),e=t.indexOf(this.controlledPlayer);this.controlledPlayer=t[(e+1)%t.length],this.homeAi.setPlayers(this._nonControlledHomePlayers())}_cycleCamera(){var n;const t=Object.values(Oi),e=t.indexOf(this._camMode);this._camMode=t[(e+1)%t.length],this.scene.setCameraMode(this._camMode,(n=this.controlledPlayer)==null?void 0:n.meshGroup.position),this.ui.setCameraMode(this._camMode.toUpperCase())}_togglePause(){this.match.paused?(this.match.paused=!1,this.ui.hidePause(),this._lastTime=performance.now(),this._tick()):(this.match.paused=!0,cancelAnimationFrame(this._rafId),this.ui.showPause(()=>{this.match.paused=!1,this._lastTime=performance.now(),this._tick()},()=>{var t;return(t=this.onQuit)==null?void 0:t.call(this)},t=>{this.difficulty.set(t),this.ui.setDifficulty(this.difficulty.config.label)}))}start(){this.match.kickoff(),this.sound.startCrowd(),this.sound.playWhistle(1),this._lastTime=performance.now(),this._tick()}_update(t){var s,r,o,a,l,c;if(this.match.paused)return;if(this.world.step(1/60,t,3),(s=this.ballMesh.material.uniforms)!=null&&s.uTime&&(this.ballMesh.material.uniforms.uTime.value+=t),this.ballMesh.position.copy(this.ballBody.position),this.ballMesh.quaternion.copy(this.ballBody.quaternion),this.match.isLive){const u=this._getInputDir(),h=this.ballBody.position;if((r=this.controlledPlayer)==null||r.update(t,u,h),this._getKickInput()){new z(h.x,h.y,h.z);const d=((o=this.controlledPlayer)==null?void 0:o.meshGroup.position)??new z,f=new z(Te/2,0,0).sub(d).normalize();((a=this.controlledPlayer)==null?void 0:a.kick(this.ballBody,f,.85))&&this.sound.playKick()}if(this._getTackleInput()){const d=[...this.awayPlayers].find(f=>f.body.position.distanceTo(this.controlledPlayer.body.position)<1.5);d&&((l=this.controlledPlayer)==null||l.tackle(d))}}this.ai.update(t),this._prevControlled!==this.controlledPlayer&&(this.homeAi.setPlayers(this._nonControlledHomePlayers()),this._prevControlled=this.controlledPlayer),this.homeAi.update(t),this.homePlayers[0].update(t,null,null),this.match.update(t),this.scene.trackBall(this.ballMesh.position,t),this._camMode===Oi.BEHIND&&this.scene.setCameraMode(Oi.BEHIND,(c=this.controlledPlayer)==null?void 0:c.meshGroup.position),this.ui.updateHUD(this.match.score,this.match.gameMinute);const e={x:this.ballBody.position.x,z:this.ballBody.position.z},n=[...this.homePlayers.map(u=>({x:u.body.position.x,z:u.body.position.z,color:this.homeTeam.primaryColor})),...this.awayPlayers.map(u=>({x:u.body.position.x,z:u.body.position.z,color:this.awayTeam.primaryColor}))];this.ui.updateMinimap(e,n),this._autoSwitchPlayer()}_autoSwitchPlayer(){var r;const t=this.ballBody.position,e=((r=this.controlledPlayer)==null?void 0:r.body.position.distanceTo(t))??1/0;let n=null,s=1/0;this.homePlayers.forEach((o,a)=>{if(a===0||o===this.controlledPlayer)return;const l=o.body.position.distanceTo(t);l<s&&(s=l,n=o)}),n&&s<e-4&&(this.controlledPlayer=n)}dispose(){cancelAnimationFrame(this._rafId),window.removeEventListener("keydown",this._keydown),window.removeEventListener("keyup",this._keyup),window.removeEventListener("resize",this._onResize),this.sound.dispose(),this.ui.dispose(),this.scene.dispose(),[...this.homePlayers,...this.awayPlayers].forEach(t=>t.dispose())}}const JP={key:0,class:"select-screen"},QP={class:"pickers"},t2={class:"picker-col"},e2={class:"club-grid"},n2=["disabled","onClick"],i2={class:"vs-col"},s2={class:"diff-group"},r2={class:"diff-btns"},o2=["onClick"],a2=["disabled"],l2={class:"picker-col"},c2={class:"club-grid"},u2=["disabled","onClick"],h2={key:1,class:"loading-screen"},d2={__name:"GameView",setup(i){const t=Do(),e=Wt("select"),n=Wt("medium"),s=Wt(null),r=Wt(null),o=Wt({}),a=Wt(null),l=Wt(null),c=Wt(null);let u=null;Vs(async()=>{try{const f=await(await fetch("/data/players.json")).json();o.value=f.teams??{}}catch(d){console.error("Failed to load players.json",d)}});async function h(){var S,P;if(!s.value||!r.value)return;e.value="loading",await zs(),await new Promise(T=>setTimeout(T,60)),e.value="game",await zs(),await new Promise(T=>requestAnimationFrame(T));const d=l.value,f=c.value;if(!d||!f){console.error("Canvas or UI container not found after mount"),e.value="select";return}const g=a.value.clientWidth||window.innerWidth,v=a.value.clientHeight||window.innerHeight;d.width=g,d.height=v;const p=o.value[s.value],m=o.value[r.value];if(!((S=p==null?void 0:p.players)!=null&&S.length)||!((P=m==null?void 0:m.players)!=null&&P.length)){console.error("Team data missing players",{homeTeamData:p,awayTeamData:m}),e.value="select";return}const y={id:s.value,...p},_={id:r.value,...m};u=new Ng(d,f,{homeTeam:y,awayTeam:_,difficulty:n.value,onQuit:()=>t.push("/")}),u.start()}return Eu(()=>{u==null||u.dispose(),u=null}),(d,f)=>e.value==="select"?(Et(),Tt("div",JP,[L("button",{class:"back-btn",onClick:f[0]||(f[0]=g=>ki(t).push("/"))},"← Back"),f[5]||(f[5]=L("h1",{class:"title"},"3D MATCH",-1)),f[6]||(f[6]=L("p",{class:"subtitle"},"Select teams & difficulty",-1)),L("div",QP,[L("div",t2,[f[1]||(f[1]=L("h2",null,"🎮 Your Team",-1)),L("div",e2,[(Et(!0),Tt(me,null,Ve(o.value,(g,v)=>(Et(),Tt("button",{key:v,class:Pe(["club-btn",{selected:s.value===v,blocked:r.value===v}]),disabled:r.value===v,onClick:p=>s.value=v},[L("span",{class:"dot",style:Ye({background:g.primaryColor})},null,4),In(" "+_t(g.name)+" ",1),L("small",null,_t(g.league),1)],10,n2))),128))])]),L("div",i2,[f[3]||(f[3]=L("div",{class:"vs-badge"},"VS",-1)),L("div",s2,[f[2]||(f[2]=L("label",null,"Difficulty",-1)),L("div",r2,[(Et(),Tt(me,null,Ve(["easy","medium","hard"],g=>L("button",{key:g,class:Pe(["diff-btn",{active:n.value===g}]),onClick:v=>n.value=g},_t(g),11,o2)),64))])]),L("button",{class:"kickoff-btn",disabled:!s.value||!r.value,onClick:h}," ⚽ Kick Off ",8,a2)]),L("div",l2,[f[4]||(f[4]=L("h2",null,"🤖 Opponent",-1)),L("div",c2,[(Et(!0),Tt(me,null,Ve(o.value,(g,v)=>(Et(),Tt("button",{key:v,class:Pe(["club-btn",{selected:r.value===v,blocked:s.value===v}]),disabled:s.value===v,onClick:p=>r.value=v},[L("span",{class:"dot",style:Ye({background:g.primaryColor})},null,4),In(" "+_t(g.name)+" ",1),L("small",null,_t(g.league),1)],10,u2))),128))])])])])):e.value==="loading"?(Et(),Tt("div",h2,[...f[7]||(f[7]=[L("div",{class:"spinner"},null,-1),L("p",null,"Building the stadium…",-1)])])):e.value==="game"?(Et(),Tt("div",{key:2,class:"game-wrap",ref_key:"gameWrap",ref:a},[L("canvas",{ref_key:"canvasEl",ref:l,class:"game-canvas"},null,512),L("div",{ref_key:"uiEl",ref:c,class:"ui-layer"},null,512)],512)):Ae("",!0)}},f2=qi(d2,[["__scopeId","data-v-b333a3e2"]]),Bc="ori_career_save",p2=[{id:"team_eng_1",name:"Red Lions FC",points:0,played:0,won:0,drawn:0,lost:0,gf:0,ga:0},{id:"team_spa_1",name:"Blue Matadors CF",points:0,played:0,won:0,drawn:0,lost:0,gf:0,ga:0},{id:"team_ger_1",name:"Silver Eagles FC",points:0,played:0,won:0,drawn:0,lost:0,gf:0,ga:0},{id:"team_fra_1",name:"Golden Cockerels PSG",points:0,played:0,won:0,drawn:0,lost:0,gf:0,ga:0},{id:"team_ita_1",name:"Azzurri United",points:0,played:0,won:0,drawn:0,lost:0,gf:0,ga:0},{id:"team_por_1",name:"Porto Verde SC",points:0,played:0,won:0,drawn:0,lost:0,gf:0,ga:0},{id:"team_ned_1",name:"Orange Total FC",points:0,played:0,won:0,drawn:0,lost:0,gf:0,ga:0},{id:"team_bra_1",name:"Samba Stars SC",points:0,played:0,won:0,drawn:0,lost:0,gf:0,ga:0}];class m2{constructor(){this.save=this._load()??this._defaultSave()}_defaultSave(){return{version:1,manager:null,myTeamId:null,season:1,week:1,clubs:structuredClone(p2),fixtures:[],transfers:[],cup:null}}_load(){try{const t=localStorage.getItem(Bc);return t?JSON.parse(t):null}catch{return null}}persist(){localStorage.setItem(Bc,JSON.stringify(this.save))}deleteSave(){localStorage.removeItem(Bc),this.save=this._defaultSave()}createManager(t){this.save.manager={...t,reputation:1,trophies:[],joined:new Date().toISOString()},this.persist()}selectTeam(t){const e=this.save.clubs.find(n=>n.id===t);if(!e)throw new Error(`Unknown team id: ${t}`);return this.save.myTeamId=t,this.persist(),e}createClub({id:t,name:e,primaryColor:n,secondaryColor:s}){const r={id:t,name:e,primaryColor:n,secondaryColor:s,points:0,played:0,won:0,drawn:0,lost:0,gf:0,ga:0};return this.save.clubs.push(r),this.save.myTeamId=t,this.persist(),r}generateSeason(){const t=this.save.clubs.map(n=>n.id),e=[];for(let n=0;n<t.length;n++)for(let s=n+1;s<t.length;s++)e.push({home:t[n],away:t[s],played:!1,score:null,week:e.length+1}),e.push({home:t[s],away:t[n],played:!1,score:null,week:e.length+1});for(let n=e.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e.forEach((n,s)=>{n.week=Math.floor(s/(t.length/2))+1}),this.save.fixtures=e,this.persist(),e}getFixturesForWeek(t){return this.save.fixtures.filter(e=>e.week===t)}getMyFixtures(){return this.save.fixtures.filter(t=>t.home===this.save.myTeamId||t.away===this.save.myTeamId)}simulateWeek(t=!0){this.getFixturesForWeek(this.save.week).forEach(n=>{if(n.played||t&&(n.home===this.save.myTeamId||n.away===this.save.myTeamId))return;const s=Math.floor(Math.random()*4),r=Math.floor(Math.random()*4);this.recordResult(n,s,r)}),this.persist()}recordResult(t,e,n){t.played=!0,t.score={home:e,away:n};const s=this.save.clubs.find(o=>o.id===t.home),r=this.save.clubs.find(o=>o.id===t.away);!s||!r||(s.played++,r.played++,s.gf+=e,s.ga+=n,r.gf+=n,r.ga+=e,e>n?(s.won++,s.points+=3,r.lost++):e<n?(r.won++,r.points+=3,s.lost++):(s.drawn++,r.drawn++,s.points++,r.points++))}advanceWeek(){this.save.week++,this.persist()}getTable(){return[...this.save.clubs].sort((t,e)=>{if(e.points!==t.points)return e.points-t.points;const n=t.gf-t.ga,s=e.gf-e.ga;return s!==n?s-n:e.gf-t.gf}).map((t,e)=>({...t,position:e+1,gd:t.gf-t.ga}))}signPlayer(t,e){this.save.transfers.push({type:"signed",player:t.id,fee:e,date:`Season ${this.save.season}, Week ${this.save.week}`}),this.persist()}releasePlayer(t){this.save.transfers.push({type:"released",player:t,date:`Season ${this.save.season}, Week ${this.save.week}`}),this.persist()}initCup(t){const e=[...t].sort(()=>Math.random()-.5);this.save.cup={round:1,brackets:this._makeBracket(e)},this.persist()}_makeBracket(t){const e=[];for(let n=0;n<t.length;n+=2)e.push({home:t[n],away:t[n+1]??null,winner:null});return e}advanceCupRound(t){t.forEach(({matchIdx:n,winner:s})=>{this.save.cup.brackets[n].winner=s});const e=this.save.cup.brackets.map(n=>n.winner).filter(Boolean);e.length>1?(this.save.cup.brackets=this._makeBracket(e),this.save.cup.round++):this.save.cup.champion=e[0],this.persist()}get cupChampion(){var t;return((t=this.save.cup)==null?void 0:t.champion)??null}}const g2={key:0,class:"screen dark-screen"},v2={class:"form-card"},_2={class:"field-group"},y2={class:"field-group"},x2={class:"field-group"},M2={class:"field-group"},b2={class:"style-btns"},S2=["onClick"],w2={class:"style-icon"},E2={class:"style-label"},T2={class:"style-desc"},A2=["disabled"],C2={key:1,class:"screen dark-screen"},R2={class:"team-grid"},P2=["onClick"],I2={class:"team-info"},L2={class:"team-name"},N2={class:"team-league"},D2={class:"team-rating"},U2={key:2,class:"screen dark-screen"},F2={class:"form-card"},O2={class:"field-group"},B2={class:"field-group"},k2={class:"field-group"},z2={class:"color-row"},V2={class:"field-group"},H2={class:"color-row"},G2={class:"kit-preview"},W2=["disabled"],q2={key:3,class:"hub-screen"},X2={class:"hub-header"},$2={class:"hub-manager"},j2={class:"manager-avatar"},Y2={class:"manager-name"},K2={class:"manager-detail"},Z2={class:"hub-tabs"},J2=["onClick"],Q2={key:0,class:"tab-content"},tI={class:"league-table"},eI={class:"club-cell"},nI={class:"pts-cell"},iI={key:1,class:"tab-content"},sI={class:"fixtures-header"},rI={class:"tab-title"},oI=["disabled"],aI={class:"fixture-list"},lI={class:"fixture-team home-team"},cI={key:0,class:"fixture-score"},uI={key:1,class:"fixture-vs"},hI={class:"fixture-team away-team"},dI=["onClick"],fI={key:3,class:"played-badge"},pI={key:0,class:"week-actions"},mI={key:2,class:"tab-content"},gI={class:"cup-header"},vI={key:1,class:"champion-banner"},_I={key:0,class:"bracket"},yI={class:"bracket-round"},xI={class:"round-label"},MI=["onClick"],bI={key:5,class:"screen dark-screen result-screen"},SI={class:"result-card"},wI={class:"result-teams"},EI={class:"result-score"},TI={__name:"CareerView",setup(i){const t=Do(),e=Wt("create-manager"),n=Wt({}),s=Wt(new m2),r=Wt("fixtures"),o=Wt({name:"",nationality:"",age:35,style:"balanced"}),a=Wt({name:"",shortName:"",primaryColor:"#cc0000",secondaryColor:"#ffffff"}),l=Wt(null),c=Wt(null),u=Wt(null),h=Wt(null),d=Wt(null);let f=null;const g=[{key:"attacking",icon:"⚡",label:"Attacking",desc:"High press, fast play"},{key:"balanced",icon:"⚖️",label:"Balanced",desc:"Flexible and adaptive"},{key:"defensive",icon:"🛡️",label:"Defensive",desc:"Solid shape, counter"}],v=[{key:"fixtures",label:"Fixtures"},{key:"table",label:"Table"},{key:"cup",label:"Cup"}],p=Ie(()=>{const U=s.value.save.myTeamId;return U?{id:U,...n.value[U]}:null}),m=Ie(()=>s.value.getTable()),y=Ie(()=>s.value.getFixturesForWeek(s.value.save.week).map(U=>({...U,_key:`${U.home}-${U.away}`}))),_=Ie(()=>{var U;return((U=y.value.find(O=>M(O)))==null?void 0:U.played)??!0}),S=Ie(()=>y.value.every(U=>U.played)),P=Ie(()=>{var O;return(((O=s.value.save.manager)==null?void 0:O.name)??"").split(" ").map(lt=>lt[0]).join("").slice(0,2).toUpperCase()}),T=Ie(()=>{if(!h.value||!d.value)return{text:"",cls:""};const U=h.value.home===s.value.save.myTeamId,O=U?d.value.home:d.value.away,lt=U?d.value.away:d.value.home;return O>lt?{text:"🏆 Victory!",cls:"win"}:O===lt?{text:"🤝 Draw",cls:"draw"}:{text:"💔 Defeat",cls:"loss"}});Vs(async()=>{try{const O=await(await fetch("/data/players.json")).json();n.value=O.teams??{}}catch(U){console.error("Failed to load players.json",U)}s.value.save.myTeamId&&s.value.save.manager&&(s.value.save.fixtures.length||s.value.generateSeason(),e.value="hub")});function A(){s.value.createManager({...o.value}),e.value="select-team"}function F(U){s.value.selectTeam(U),s.value.generateSeason(),e.value="hub"}function b(){const U="custom_"+Date.now();s.value.createClub({id:U,name:a.value.name,primaryColor:a.value.primaryColor,secondaryColor:a.value.secondaryColor}),n.value[U]={name:a.value.name,shortName:a.value.shortName,primaryColor:a.value.primaryColor,secondaryColor:a.value.secondaryColor,league:"Custom League",rating:70,players:[]},s.value.generateSeason(),e.value="hub"}function M(U){const O=s.value.save.myTeamId;return U.home===O||U.away===O}function V(){s.value.simulateWeek(!0)}function Z(){s.value.advanceWeek(),r.value="fixtures"}function I(){s.value.initCup(Object.keys(n.value))}function G(U){const O=s.value.save.cup.brackets[U],lt=Math.random()>.5?O.home:O.away;s.value.advanceCupRound([{matchIdx:U,winner:lt}])}async function B(U){var At,$,ft,ht;h.value=U,e.value="match",await zs(),await new Promise(K=>setTimeout(K,60));const O=l.value,lt=c.value;O.width=u.value.clientWidth,O.height=u.value.clientHeight;const bt=s.value.save.myTeamId;U.home;const pt=U.home,Vt=U.away,it={id:pt,...n.value[pt]},vt={id:Vt,...n.value[Vt]};(At=it.players)!=null&&At.length||(it.players=at(pt)),($=vt.players)!=null&&$.length||(vt.players=at(Vt)),f=new Ng(O,lt,{homeTeam:it,awayTeam:vt,difficulty:((ft=s.value.save.manager)==null?void 0:ft.style)==="defensive"?"easy":((ht=s.value.save.manager)==null?void 0:ht.style)==="attacking"?"hard":"medium",onQuit:()=>{f==null||f.dispose(),f=null,e.value="hub"}}),f.match.on("full_time",K=>{const W=K.score;s.value.recordResult(U,W.home,W.away),s.value.persist(),d.value=W,setTimeout(()=>{f==null||f.dispose(),f=null,e.value="result"},4e3)}),f.start()}function k(){h.value=null,d.value=null,e.value="hub",r.value=S.value?"table":"fixtures"}function at(U){return["GK","LB","CB","CB","RB","CM","CM","CM","LW","ST","RW"].map((lt,bt)=>({id:`${U}_p${bt}`,genericName:`${lt} ${bt+1}`,position:lt,rating:68+Math.floor(Math.random()*12),pace:65,shooting:65,passing:65,dribbling:65,defending:65,physical:65}))}return Eu(()=>{f==null||f.dispose(),f=null}),(U,O)=>{var lt,bt,pt,Vt,it,vt,At,$,ft,ht;return e.value==="create-manager"?(Et(),Tt("div",g2,[L("button",{class:"back-btn",onClick:O[0]||(O[0]=K=>ki(t).push("/"))},"← Back"),L("div",v2,[O[17]||(O[17]=L("h1",{class:"screen-title"},"CREATE YOUR MANAGER",-1)),O[18]||(O[18]=L("p",{class:"screen-sub"},"Build your legacy from the dugout",-1)),L("div",_2,[O[13]||(O[13]=L("label",null,"Full Name",-1)),vs(L("input",{"onUpdate:modelValue":O[1]||(O[1]=K=>o.value.name=K),placeholder:"e.g. Marco Rossi",maxlength:"32"},null,512),[[xs,o.value.name]])]),L("div",y2,[O[14]||(O[14]=L("label",null,"Nationality",-1)),vs(L("input",{"onUpdate:modelValue":O[2]||(O[2]=K=>o.value.nationality=K),placeholder:"e.g. Italian",maxlength:"24"},null,512),[[xs,o.value.nationality]])]),L("div",x2,[O[15]||(O[15]=L("label",null,"Age",-1)),vs(L("input",{"onUpdate:modelValue":O[3]||(O[3]=K=>o.value.age=K),type:"number",min:"28",max:"72",placeholder:"45"},null,512),[[xs,o.value.age,void 0,{number:!0}]])]),L("div",M2,[O[16]||(O[16]=L("label",null,"Tactical Style",-1)),L("div",b2,[(Et(),Tt(me,null,Ve(g,K=>L("button",{key:K.key,class:Pe(["style-btn",{active:o.value.style===K.key}]),onClick:W=>o.value.style=K.key},[L("span",w2,_t(K.icon),1),L("span",E2,_t(K.label),1),L("span",T2,_t(K.desc),1)],10,S2)),64))])]),L("button",{class:"primary-btn",disabled:!o.value.name||!o.value.nationality,onClick:A}," Continue → ",8,A2)])])):e.value==="select-team"?(Et(),Tt("div",C2,[L("button",{class:"back-btn",onClick:O[4]||(O[4]=K=>e.value="create-manager")},"← Back"),O[20]||(O[20]=L("h1",{class:"screen-title"},"CHOOSE YOUR CLUB",-1)),O[21]||(O[21]=L("p",{class:"screen-sub"},"Take charge of an existing club — or build from scratch",-1)),L("div",R2,[(Et(!0),Tt(me,null,Ve(n.value,(K,W)=>(Et(),Tt("button",{key:W,class:"team-card",onClick:C=>F(W)},[L("div",{class:"team-badge",style:Ye({background:K.primaryColor})},_t(K.shortName),5),L("div",I2,[L("div",L2,_t(K.name),1),L("div",N2,_t(K.league),1),L("div",D2,"★ "+_t(K.rating),1)])],8,P2))),128)),L("button",{class:"team-card create-club-card",onClick:O[5]||(O[5]=K=>e.value="create-club")},[...O[19]||(O[19]=[L("div",{class:"team-badge",style:{background:"#2a2a2a","font-size":"24px"}},"+",-1),L("div",{class:"team-info"},[L("div",{class:"team-name"},"Create-a-Club"),L("div",{class:"team-league"},"Build from zero")],-1)])])])])):e.value==="create-club"?(Et(),Tt("div",U2,[L("button",{class:"back-btn",onClick:O[6]||(O[6]=K=>e.value="select-team")},"← Back"),L("div",F2,[O[26]||(O[26]=L("h1",{class:"screen-title"},"CREATE-A-CLUB",-1)),L("div",O2,[O[22]||(O[22]=L("label",null,"Club Name",-1)),vs(L("input",{"onUpdate:modelValue":O[7]||(O[7]=K=>a.value.name=K),placeholder:"e.g. City FC",maxlength:"32"},null,512),[[xs,a.value.name]])]),L("div",B2,[O[23]||(O[23]=L("label",null,"Short Name (3 letters)",-1)),vs(L("input",{"onUpdate:modelValue":O[8]||(O[8]=K=>a.value.shortName=K),placeholder:"CFC",maxlength:"3",onInput:O[9]||(O[9]=K=>a.value.shortName=a.value.shortName.toUpperCase())},null,544),[[xs,a.value.shortName]])]),L("div",k2,[O[24]||(O[24]=L("label",null,"Primary Colour",-1)),L("div",z2,[vs(L("input",{type:"color","onUpdate:modelValue":O[10]||(O[10]=K=>a.value.primaryColor=K),class:"color-pick"},null,512),[[xs,a.value.primaryColor]]),L("span",{class:"color-preview",style:Ye({background:a.value.primaryColor})},_t(a.value.primaryColor),5)])]),L("div",V2,[O[25]||(O[25]=L("label",null,"Secondary Colour",-1)),L("div",H2,[vs(L("input",{type:"color","onUpdate:modelValue":O[11]||(O[11]=K=>a.value.secondaryColor=K),class:"color-pick"},null,512),[[xs,a.value.secondaryColor]]),L("span",{class:"color-preview",style:Ye({background:a.value.secondaryColor})},_t(a.value.secondaryColor),5)])]),L("div",G2,[L("div",{class:"kit-shirt",style:Ye({background:`linear-gradient(135deg, ${a.value.primaryColor} 50%, ${a.value.secondaryColor} 50%)`})},[L("span",null,_t(a.value.shortName||"???"),1)],4)]),L("button",{class:"primary-btn",disabled:!a.value.name||a.value.shortName.length<2,onClick:b}," Found the Club → ",8,W2)])])):e.value==="hub"?(Et(),Tt("div",q2,[L("header",X2,[L("div",$2,[L("div",j2,_t(P.value),1),L("div",null,[L("div",Y2,_t((lt=s.value.save.manager)==null?void 0:lt.name),1),L("div",K2,_t((bt=p.value)==null?void 0:bt.name)+" · Season "+_t(s.value.save.season)+" · Week "+_t(s.value.save.week),1)])]),L("div",Z2,[(Et(),Tt(me,null,Ve(v,K=>L("button",{key:K.key,class:Pe(["hub-tab",{active:r.value===K.key}]),onClick:W=>r.value=K.key},_t(K.label),11,J2)),64))]),L("button",{class:"back-btn ghost",onClick:O[12]||(O[12]=K=>ki(t).push("/"))},"⬅ Main Menu")]),r.value==="table"?(Et(),Tt("div",Q2,[O[28]||(O[28]=L("h2",{class:"tab-title"},"LEAGUE STANDINGS",-1)),L("table",tI,[O[27]||(O[27]=L("thead",null,[L("tr",null,[L("th",null,"#"),L("th",null,"Club"),L("th",null,"P"),L("th",null,"W"),L("th",null,"D"),L("th",null,"L"),L("th",null,"GF"),L("th",null,"GA"),L("th",null,"GD"),L("th",null,"PTS")])],-1)),L("tbody",null,[(Et(!0),Tt(me,null,Ve(m.value,K=>{var W;return Et(),Tt("tr",{key:K.id,class:Pe({"my-row":K.id===s.value.save.myTeamId,champions:K.position===1,relegated:K.position>=m.value.length-2})},[L("td",null,_t(K.position),1),L("td",eI,[L("span",{class:"club-dot",style:Ye({background:((W=n.value[K.id])==null?void 0:W.primaryColor)||"#888"})},null,4),In(" "+_t(K.name),1)]),L("td",null,_t(K.played),1),L("td",null,_t(K.won),1),L("td",null,_t(K.drawn),1),L("td",null,_t(K.lost),1),L("td",null,_t(K.gf),1),L("td",null,_t(K.ga),1),L("td",{class:Pe({positive:K.gd>0,negative:K.gd<0})},_t(K.gd>0?"+":"")+_t(K.gd),3),L("td",nI,_t(K.points),1)],2)}),128))])])])):Ae("",!0),r.value==="fixtures"?(Et(),Tt("div",iI,[L("div",sI,[L("h2",rI,"WEEK "+_t(s.value.save.week)+" FIXTURES",1),L("button",{class:"sim-btn",disabled:_.value,onClick:V}," Simulate Other Matches ",8,oI)]),L("div",aI,[(Et(!0),Tt(me,null,Ve(y.value,(K,W)=>{var C,N,j,J;return Et(),Tt("div",{key:W,class:Pe(["fixture-row",{"my-match":M(K),played:K.played}])},[L("div",lI,[L("span",{class:"fx-dot",style:Ye({background:((C=n.value[K.home])==null?void 0:C.primaryColor)||"#888"})},null,4),In(" "+_t(((N=n.value[K.home])==null?void 0:N.name)||K.home),1)]),K.played?(Et(),Tt("div",cI,_t(K.score.home)+" – "+_t(K.score.away),1)):(Et(),Tt("div",uI,"VS")),L("div",hI,[In(_t(((j=n.value[K.away])==null?void 0:j.name)||K.away)+" ",1),L("span",{class:"fx-dot",style:Ye({background:((J=n.value[K.away])==null?void 0:J.primaryColor)||"#888"})},null,4)]),M(K)&&!K.played?(Et(),Tt("button",{key:2,class:"play-match-btn",onClick:st=>B(K)}," ▶ Play ",8,dI)):Ae("",!0),M(K)&&K.played?(Et(),Tt("span",fI,"✓ Done")):Ae("",!0)],2)}),128))]),S.value?(Et(),Tt("div",pI,[L("button",{class:"primary-btn",onClick:Z},"Next Week →")])):Ae("",!0)])):Ae("",!0),r.value==="cup"?(Et(),Tt("div",mI,[L("div",gI,[O[29]||(O[29]=L("h2",{class:"tab-title"},"KNOCKOUT CUP",-1)),s.value.save.cup?Ae("",!0):(Et(),Tt("button",{key:0,class:"primary-btn small",onClick:I}," Initialise Cup ")),(pt=s.value.save.cup)!=null&&pt.champion?(Et(),Tt("div",vI," 🏆 Champion: "+_t(((Vt=n.value[s.value.save.cup.champion])==null?void 0:Vt.name)||s.value.save.cup.champion),1)):Ae("",!0)]),s.value.save.cup&&!s.value.save.cup.champion?(Et(),Tt("div",_I,[L("div",yI,[L("div",xI,"Round "+_t(s.value.save.cup.round),1),(Et(!0),Tt(me,null,Ve(s.value.save.cup.brackets,(K,W)=>{var C,N,j,J;return Et(),Tt("div",{key:W,class:"bracket-match"},[L("div",{class:Pe(["bracket-team",{winner:K.winner===K.home}])},[L("span",{class:"fx-dot",style:Ye({background:((C=n.value[K.home])==null?void 0:C.primaryColor)||"#888"})},null,4),In(" "+_t(((N=n.value[K.home])==null?void 0:N.name)||K.home),1)],2),O[30]||(O[30]=L("div",{class:"bracket-vs"},"vs",-1)),L("div",{class:Pe(["bracket-team",{winner:K.winner===K.away}])},[L("span",{class:"fx-dot",style:Ye({background:((j=n.value[K.away])==null?void 0:j.primaryColor)||"#888"})},null,4),In(" "+_t(((J=n.value[K.away])==null?void 0:J.name)||K.away),1)],2),K.winner?Ae("",!0):(Et(),Tt("button",{key:0,class:"sim-btn small",onClick:st=>G(W)},"Sim",8,MI))])}),128))])])):Ae("",!0)])):Ae("",!0)])):e.value==="match"?(Et(),Tt("div",{key:4,class:"game-wrap",ref_key:"gameWrap",ref:u},[L("canvas",{ref_key:"canvasEl",ref:l,class:"game-canvas"},null,512),L("div",{ref_key:"uiEl",ref:c,class:"ui-layer"},null,512)],512)):e.value==="result"?(Et(),Tt("div",bI,[L("div",SI,[O[31]||(O[31]=L("div",{class:"result-label"},"FULL TIME",-1)),L("div",wI,[L("span",null,_t((vt=n.value[(it=h.value)==null?void 0:it.home])==null?void 0:vt.name),1),L("span",EI,_t((At=d.value)==null?void 0:At.home)+" – "+_t(($=d.value)==null?void 0:$.away),1),L("span",null,_t((ht=n.value[(ft=h.value)==null?void 0:ft.away])==null?void 0:ht.name),1)]),L("div",{class:Pe(["result-verdict",T.value.cls])},_t(T.value.text),3),L("div",{class:"result-actions"},[L("button",{class:"primary-btn",onClick:k},"Continue →")])])])):Ae("",!0)}}},AI=qi(TI,[["__scopeId","data-v-9e75f136"]]),CI=_y({history:K0(),routes:[{path:"/",component:Oy},{path:"/play",component:Ex},{path:"/watch",component:VM},{path:"/game",component:f2},{path:"/career",component:AI}]});a0(d0).use(CI).mount("#app");export{_A as $,kI as A,Nn as B,kt as C,$I as D,pe as E,qI as F,zI as G,gg as H,MA as I,VI as J,HI as K,Bo as L,GI as M,jo as N,Ce as O,XI as P,Fr as Q,ru as R,Pn as S,PI as T,vr as U,Dt as V,vn as W,Za as X,og as Y,mg as Z,WI as _,LI as a,qa as a0,Xa as a1,fg as a2,Ke as a3,tl as a4,Qa as a5,Oo as a6,fe as a7,Gi as a8,xl as a9,Xi as aa,$i as ab,II as b,jI as c,ms as d,tC as e,ne as f,z as g,Cf as h,ZA as i,YI as j,BI as k,Os as l,Vl as m,wb as n,zn as o,_n as p,ou as q,Fs as r,SA as s,ji as t,bA as u,Da as v,ai as w,Po as x,de as y,yn as z};
