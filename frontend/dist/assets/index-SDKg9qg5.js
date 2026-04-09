var Em=Object.defineProperty;var wm=(i,t,e)=>t in i?Em(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Za=(i,t,e)=>wm(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cc(i){const t=Object.create(null);for(const e of i.split(","))t[e]=1;return e=>e in t}const pe={},or=[],si=()=>{},ad=()=>!1,Pa=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Rc=i=>i.startsWith("onUpdate:"),Ge=Object.assign,Pc=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},Tm=Object.prototype.hasOwnProperty,le=(i,t)=>Tm.call(i,t),Wt=Array.isArray,ar=i=>vo(i)==="[object Map]",ld=i=>vo(i)==="[object Set]",mh=i=>vo(i)==="[object Date]",Yt=i=>typeof i=="function",Le=i=>typeof i=="string",oi=i=>typeof i=="symbol",ce=i=>i!==null&&typeof i=="object",cd=i=>(ce(i)||Yt(i))&&Yt(i.then)&&Yt(i.catch),hd=Object.prototype.toString,vo=i=>hd.call(i),Am=i=>vo(i).slice(8,-1),ud=i=>vo(i)==="[object Object]",Lc=i=>Le(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,$r=Cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},Cm=/-\w/g,rn=La(i=>i.replace(Cm,t=>t.slice(1).toUpperCase())),Rm=/\B([A-Z])/g,Rs=La(i=>i.replace(Rm,"-$1").toLowerCase()),Ia=La(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ja=La(i=>i?`on${Ia(i)}`:""),Qn=(i,t)=>!Object.is(i,t),Qa=(i,...t)=>{for(let e=0;e<i.length;e++)i[e](...t)},fd=(i,t,e,n=!1)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,writable:n,value:e})},Pm=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let gh;const Na=()=>gh||(gh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function es(i){if(Wt(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],s=Le(n)?Dm(n):es(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(Le(i)||ce(i))return i}const Lm=/;(?![^(]*\))/g,Im=/:([^]+)/,Nm=/\/\*[^]*?\*\//g;function Dm(i){const t={};return i.replace(Nm,"").split(Lm).forEach(e=>{if(e){const n=e.split(Im);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function fn(i){let t="";if(Le(i))t=i;else if(Wt(i))for(let e=0;e<i.length;e++){const n=fn(i[e]);n&&(t+=n+" ")}else if(ce(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const Um="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fm=Cc(Um);function dd(i){return!!i||i===""}function Om(i,t){if(i.length!==t.length)return!1;let e=!0;for(let n=0;e&&n<i.length;n++)e=Ic(i[n],t[n]);return e}function Ic(i,t){if(i===t)return!0;let e=mh(i),n=mh(t);if(e||n)return e&&n?i.getTime()===t.getTime():!1;if(e=oi(i),n=oi(t),e||n)return i===t;if(e=Wt(i),n=Wt(t),e||n)return e&&n?Om(i,t):!1;if(e=ce(i),n=ce(t),e||n){if(!e||!n)return!1;const s=Object.keys(i).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Ic(i[o],t[o]))return!1}}return String(i)===String(t)}const pd=i=>!!(i&&i.__v_isRef===!0),Ft=i=>Le(i)?i:i==null?"":Wt(i)||ce(i)&&(i.toString===hd||!Yt(i.toString))?pd(i)?Ft(i.value):JSON.stringify(i,md,2):String(i),md=(i,t)=>pd(t)?md(i,t.value):ar(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,s],r)=>(e[tl(n,r)+" =>"]=s,e),{})}:ld(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>tl(e))}:oi(t)?tl(t):ce(t)&&!Wt(t)&&!ud(t)?String(t):t,tl=(i,t="")=>{var e;return oi(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hn;class Bm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=hn,!t&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=hn;try{return hn=this,t()}finally{hn=e}}}on(){++this._on===1&&(this.prevScope=hn,hn=this)}off(){this._on>0&&--this._on===0&&(hn=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function zm(){return hn}let de;const el=new WeakSet;class gd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,hn&&hn.active&&hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,el.has(this)&&(el.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_d(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vh(this),xd(this);const t=de,e=On;de=this,On=!0;try{return this.fn()}finally{yd(this),de=t,On=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Uc(t);this.deps=this.depsTail=void 0,vh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?el.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rc(this)&&this.run()}get dirty(){return rc(this)}}let vd=0,jr,Kr;function _d(i,t=!1){if(i.flags|=8,t){i.next=Kr,Kr=i;return}i.next=jr,jr=i}function Nc(){vd++}function Dc(){if(--vd>0)return;if(Kr){let t=Kr;for(Kr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let i;for(;jr;){let t=jr;for(jr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){i||(i=n)}t=e}}if(i)throw i}function xd(i){for(let t=i.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function yd(i){let t,e=i.depsTail,n=e;for(;n;){const s=n.prevDep;n.version===-1?(n===e&&(e=s),Uc(n),km(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=t,i.depsTail=e}function rc(i){for(let t=i.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Md(t.dep.computed)||t.dep.version!==t.version))return!0;return!!i._dirty}function Md(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===lo)||(i.globalVersion=lo,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!rc(i))))return;i.flags|=2;const t=i.dep,e=de,n=On;de=i,On=!0;try{xd(i);const s=i.fn(i._value);(t.version===0||Qn(s,i._value))&&(i.flags|=128,i._value=s,t.version++)}catch(s){throw t.version++,s}finally{de=e,On=n,yd(i),i.flags&=-3}}function Uc(i,t=!1){const{dep:e,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),e.subs===i&&(e.subs=n,!n&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Uc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function km(i){const{prevDep:t,nextDep:e}=i;t&&(t.nextDep=e,i.prevDep=void 0),e&&(e.prevDep=t,i.nextDep=void 0)}let On=!0;const Sd=[];function Pi(){Sd.push(On),On=!1}function Li(){const i=Sd.pop();On=i===void 0?!0:i}function vh(i){const{cleanup:t}=i;if(i.cleanup=void 0,t){const e=de;de=void 0;try{t()}finally{de=e}}}let lo=0;class Hm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!de||!On||de===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==de)e=this.activeLink=new Hm(de,this),de.deps?(e.prevDep=de.depsTail,de.depsTail.nextDep=e,de.depsTail=e):de.deps=de.depsTail=e,bd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const n=e.nextDep;n.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=n),e.prevDep=de.depsTail,e.nextDep=void 0,de.depsTail.nextDep=e,de.depsTail=e,de.deps===e&&(de.deps=n)}return e}trigger(t){this.version++,lo++,this.notify(t)}notify(t){Nc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Dc()}}}function bd(i){if(i.dep.sc++,i.sub.flags&4){const t=i.dep.computed;if(t&&!i.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)bd(n)}const e=i.dep.subs;e!==i&&(i.prevSub=e,e&&(e.nextSub=i)),i.dep.subs=i}}const oc=new WeakMap,ws=Symbol(""),ac=Symbol(""),co=Symbol("");function Ye(i,t,e){if(On&&de){let n=oc.get(i);n||oc.set(i,n=new Map);let s=n.get(e);s||(n.set(e,s=new Fc),s.map=n,s.key=e),s.track()}}function Ti(i,t,e,n,s,r){const o=oc.get(i);if(!o){lo++;return}const a=l=>{l&&l.trigger()};if(Nc(),t==="clear")o.forEach(a);else{const l=Wt(i),c=l&&Lc(e);if(l&&e==="length"){const h=Number(n);o.forEach((u,f)=>{(f==="length"||f===co||!oi(f)&&f>=h)&&a(u)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(co)),t){case"add":l?c&&a(o.get("length")):(a(o.get(ws)),ar(i)&&a(o.get(ac)));break;case"delete":l||(a(o.get(ws)),ar(i)&&a(o.get(ac)));break;case"set":ar(i)&&a(o.get(ws));break}}Dc()}function Ns(i){const t=ae(i);return t===i?t:(Ye(t,"iterate",co),wn(i)?t:t.map(zn))}function Da(i){return Ye(i=ae(i),"iterate",co),i}function Kn(i,t){return Ii(i)?dr(Ts(i)?zn(t):t):zn(t)}const Vm={__proto__:null,[Symbol.iterator](){return nl(this,Symbol.iterator,i=>Kn(this,i))},concat(...i){return Ns(this).concat(...i.map(t=>Wt(t)?Ns(t):t))},entries(){return nl(this,"entries",i=>(i[1]=Kn(this,i[1]),i))},every(i,t){return hi(this,"every",i,t,void 0,arguments)},filter(i,t){return hi(this,"filter",i,t,e=>e.map(n=>Kn(this,n)),arguments)},find(i,t){return hi(this,"find",i,t,e=>Kn(this,e),arguments)},findIndex(i,t){return hi(this,"findIndex",i,t,void 0,arguments)},findLast(i,t){return hi(this,"findLast",i,t,e=>Kn(this,e),arguments)},findLastIndex(i,t){return hi(this,"findLastIndex",i,t,void 0,arguments)},forEach(i,t){return hi(this,"forEach",i,t,void 0,arguments)},includes(...i){return il(this,"includes",i)},indexOf(...i){return il(this,"indexOf",i)},join(i){return Ns(this).join(i)},lastIndexOf(...i){return il(this,"lastIndexOf",i)},map(i,t){return hi(this,"map",i,t,void 0,arguments)},pop(){return Lr(this,"pop")},push(...i){return Lr(this,"push",i)},reduce(i,...t){return _h(this,"reduce",i,t)},reduceRight(i,...t){return _h(this,"reduceRight",i,t)},shift(){return Lr(this,"shift")},some(i,t){return hi(this,"some",i,t,void 0,arguments)},splice(...i){return Lr(this,"splice",i)},toReversed(){return Ns(this).toReversed()},toSorted(i){return Ns(this).toSorted(i)},toSpliced(...i){return Ns(this).toSpliced(...i)},unshift(...i){return Lr(this,"unshift",i)},values(){return nl(this,"values",i=>Kn(this,i))}};function nl(i,t,e){const n=Da(i),s=n[t]();return n!==i&&!wn(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Gm=Array.prototype;function hi(i,t,e,n,s,r){const o=Da(i),a=o!==i&&!wn(i),l=o[t];if(l!==Gm[t]){const u=l.apply(i,r);return a?zn(u):u}let c=e;o!==i&&(a?c=function(u,f){return e.call(this,Kn(i,u),f,i)}:e.length>2&&(c=function(u,f){return e.call(this,u,f,i)}));const h=l.call(o,c,n);return a&&s?s(h):h}function _h(i,t,e,n){const s=Da(i),r=s!==i&&!wn(i);let o=e,a=!1;s!==i&&(r?(a=n.length===0,o=function(c,h,u){return a&&(a=!1,c=Kn(i,c)),e.call(this,c,Kn(i,h),u,i)}):e.length>3&&(o=function(c,h,u){return e.call(this,c,h,u,i)}));const l=s[t](o,...n);return a?Kn(i,l):l}function il(i,t,e){const n=ae(i);Ye(n,"iterate",co);const s=n[t](...e);return(s===-1||s===!1)&&zc(e[0])?(e[0]=ae(e[0]),n[t](...e)):s}function Lr(i,t,e=[]){Pi(),Nc();const n=ae(i)[t].apply(i,e);return Dc(),Li(),n}const Wm=Cc("__proto__,__v_isRef,__isVue"),Ed=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(oi));function qm(i){oi(i)||(i=String(i));const t=ae(this);return Ye(t,"has",i),t.hasOwnProperty(i)}class wd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return n===(s?r?eg:Rd:r?Cd:Ad).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=Wt(t);if(!s){let l;if(o&&(l=Vm[e]))return l;if(e==="hasOwnProperty")return qm}const a=Reflect.get(t,e,je(t)?t:n);if((oi(e)?Ed.has(e):Wm(e))||(s||Ye(t,"get",e),r))return a;if(je(a)){const l=o&&Lc(e)?a:a.value;return s&&ce(l)?cc(l):l}return ce(a)?s?cc(a):Ua(a):a}}class Td extends wd{constructor(t=!1){super(!1,t)}set(t,e,n,s){let r=t[e];const o=Wt(t)&&Lc(e);if(!this._isShallow){const c=Ii(r);if(!wn(n)&&!Ii(n)&&(r=ae(r),n=ae(n)),!o&&je(r)&&!je(n))return c||(r.value=n),!0}const a=o?Number(e)<t.length:le(t,e),l=Reflect.set(t,e,n,je(t)?t:s);return t===ae(s)&&(a?Qn(n,r)&&Ti(t,"set",e,n):Ti(t,"add",e,n)),l}deleteProperty(t,e){const n=le(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ti(t,"delete",e,void 0),s}has(t,e){const n=Reflect.has(t,e);return(!oi(e)||!Ed.has(e))&&Ye(t,"has",e),n}ownKeys(t){return Ye(t,"iterate",Wt(t)?"length":ws),Reflect.ownKeys(t)}}class Xm extends wd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Ym=new Td,$m=new Xm,jm=new Td(!0);const lc=i=>i,To=i=>Reflect.getPrototypeOf(i);function Km(i,t,e){return function(...n){const s=this.__v_raw,r=ae(s),o=ar(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),h=e?lc:t?dr:zn;return!t&&Ye(r,"iterate",l?ac:ws),Ge(Object.create(c),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[h(u[0]),h(u[1])]:h(u),done:f}}})}}function Ao(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function Zm(i,t){const e={get(s){const r=this.__v_raw,o=ae(r),a=ae(s);i||(Qn(s,a)&&Ye(o,"get",s),Ye(o,"get",a));const{has:l}=To(o),c=t?lc:i?dr:zn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&Ye(ae(s),"iterate",ws),s.size},has(s){const r=this.__v_raw,o=ae(r),a=ae(s);return i||(Qn(s,a)&&Ye(o,"has",s),Ye(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ae(a),c=t?lc:i?dr:zn;return!i&&Ye(l,"iterate",ws),a.forEach((h,u)=>s.call(r,c(h),c(u),o))}};return Ge(e,i?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(s){const r=ae(this),o=To(r),a=ae(s),l=!t&&!wn(s)&&!Ii(s)?a:s;return o.has.call(r,l)||Qn(s,l)&&o.has.call(r,s)||Qn(a,l)&&o.has.call(r,a)||(r.add(l),Ti(r,"add",l,l)),this},set(s,r){!t&&!wn(r)&&!Ii(r)&&(r=ae(r));const o=ae(this),{has:a,get:l}=To(o);let c=a.call(o,s);c||(s=ae(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?Qn(r,h)&&Ti(o,"set",s,r):Ti(o,"add",s,r),this},delete(s){const r=ae(this),{has:o,get:a}=To(r);let l=o.call(r,s);l||(s=ae(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ti(r,"delete",s,void 0),c},clear(){const s=ae(this),r=s.size!==0,o=s.clear();return r&&Ti(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Km(s,i,t)}),e}function Oc(i,t){const e=Zm(i,t);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(le(e,s)&&s in n?e:n,s,r)}const Jm={get:Oc(!1,!1)},Qm={get:Oc(!1,!0)},tg={get:Oc(!0,!1)};const Ad=new WeakMap,Cd=new WeakMap,Rd=new WeakMap,eg=new WeakMap;function ng(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ig(i){return i.__v_skip||!Object.isExtensible(i)?0:ng(Am(i))}function Ua(i){return Ii(i)?i:Bc(i,!1,Ym,Jm,Ad)}function Pd(i){return Bc(i,!1,jm,Qm,Cd)}function cc(i){return Bc(i,!0,$m,tg,Rd)}function Bc(i,t,e,n,s){if(!ce(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const r=ig(i);if(r===0)return i;const o=s.get(i);if(o)return o;const a=new Proxy(i,r===2?n:e);return s.set(i,a),a}function Ts(i){return Ii(i)?Ts(i.__v_raw):!!(i&&i.__v_isReactive)}function Ii(i){return!!(i&&i.__v_isReadonly)}function wn(i){return!!(i&&i.__v_isShallow)}function zc(i){return i?!!i.__v_raw:!1}function ae(i){const t=i&&i.__v_raw;return t?ae(t):i}function sg(i){return!le(i,"__v_skip")&&Object.isExtensible(i)&&fd(i,"__v_skip",!0),i}const zn=i=>ce(i)?Ua(i):i,dr=i=>ce(i)?cc(i):i;function je(i){return i?i.__v_isRef===!0:!1}function ne(i){return Ld(i,!1)}function rg(i){return Ld(i,!0)}function Ld(i,t){return je(i)?i:new og(i,t)}class og{constructor(t,e){this.dep=new Fc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ae(t),this._value=e?t:zn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this.__v_isShallow||wn(t)||Ii(t);t=n?t:ae(t),Qn(t,e)&&(this._rawValue=t,this._value=n?t:zn(t),this.dep.trigger())}}function As(i){return je(i)?i.value:i}const ag={get:(i,t,e)=>t==="__v_raw"?i:As(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const s=i[t];return je(s)&&!je(e)?(s.value=e,!0):Reflect.set(i,t,e,n)}};function Id(i){return Ts(i)?i:new Proxy(i,ag)}class lg{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Fc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=lo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return _d(this,!0),!0}get value(){const t=this.dep.track();return Md(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function cg(i,t,e=!1){let n,s;return Yt(i)?n=i:(n=i.get,s=i.set),new lg(n,s,e)}const Co={},fa=new WeakMap;let gs;function hg(i,t=!1,e=gs){if(e){let n=fa.get(e);n||fa.set(e,n=[]),n.push(i)}}function ug(i,t,e=pe){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=b=>s?b:wn(b)||s===!1||s===0?$i(b,1):$i(b);let h,u,f,d,g=!1,v=!1;if(je(i)?(u=()=>i.value,g=wn(i)):Ts(i)?(u=()=>c(i),g=!0):Wt(i)?(v=!0,g=i.some(b=>Ts(b)||wn(b)),u=()=>i.map(b=>{if(je(b))return b.value;if(Ts(b))return c(b);if(Yt(b))return l?l(b,2):b()})):Yt(i)?t?u=l?()=>l(i,2):i:u=()=>{if(f){Pi();try{f()}finally{Li()}}const b=gs;gs=h;try{return l?l(i,3,[d]):i(d)}finally{gs=b}}:u=si,t&&s){const b=u,L=s===!0?1/0:s;u=()=>$i(b(),L)}const p=zm(),m=()=>{h.stop(),p&&p.active&&Pc(p.effects,h)};if(r&&t){const b=t;t=(...L)=>{b(...L),m()}}let x=v?new Array(i.length).fill(Co):Co;const _=b=>{if(!(!(h.flags&1)||!h.dirty&&!b))if(t){const L=h.run();if(s||g||(v?L.some((T,A)=>Qn(T,x[A])):Qn(L,x))){f&&f();const T=gs;gs=h;try{const A=[L,x===Co?void 0:v&&x[0]===Co?[]:x,d];x=L,l?l(t,3,A):t(...A)}finally{gs=T}}}else h.run()};return a&&a(_),h=new gd(u),h.scheduler=o?()=>o(_,!1):_,d=b=>hg(b,!1,h),f=h.onStop=()=>{const b=fa.get(h);if(b){if(l)l(b,4);else for(const L of b)L();fa.delete(h)}},t?n?_(!0):x=h.run():o?o(_.bind(null,!0),!0):h.run(),m.pause=h.pause.bind(h),m.resume=h.resume.bind(h),m.stop=m,m}function $i(i,t=1/0,e){if(t<=0||!ce(i)||i.__v_skip||(e=e||new Map,(e.get(i)||0)>=t))return i;if(e.set(i,t),t--,je(i))$i(i.value,t,e);else if(Wt(i))for(let n=0;n<i.length;n++)$i(i[n],t,e);else if(ld(i)||ar(i))i.forEach(n=>{$i(n,t,e)});else if(ud(i)){for(const n in i)$i(i[n],t,e);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&$i(i[n],t,e)}return i}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _o(i,t,e,n){try{return n?i(...n):i()}catch(s){Fa(s,t,e)}}function ai(i,t,e,n){if(Yt(i)){const s=_o(i,t,e,n);return s&&cd(s)&&s.catch(r=>{Fa(r,t,e)}),s}if(Wt(i)){const s=[];for(let r=0;r<i.length;r++)s.push(ai(i[r],t,e,n));return s}}function Fa(i,t,e,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||pe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](i,l,c)===!1)return}a=a.parent}if(r){Pi(),_o(r,null,10,[i,l,c]),Li();return}}fg(i,e,s,n,o)}function fg(i,t,e,n=!0,s=!1){if(s)throw i;console.error(i)}const nn=[];let $n=-1;const lr=[];let Xi=null,er=0;const Nd=Promise.resolve();let da=null;function pr(i){const t=da||Nd;return i?t.then(this?i.bind(this):i):t}function dg(i){let t=$n+1,e=nn.length;for(;t<e;){const n=t+e>>>1,s=nn[n],r=ho(s);r<i||r===i&&s.flags&2?t=n+1:e=n}return t}function kc(i){if(!(i.flags&1)){const t=ho(i),e=nn[nn.length-1];!e||!(i.flags&2)&&t>=ho(e)?nn.push(i):nn.splice(dg(t),0,i),i.flags|=1,Dd()}}function Dd(){da||(da=Nd.then(Fd))}function pg(i){Wt(i)?lr.push(...i):Xi&&i.id===-1?Xi.splice(er+1,0,i):i.flags&1||(lr.push(i),i.flags|=1),Dd()}function xh(i,t,e=$n+1){for(;e<nn.length;e++){const n=nn[e];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;nn.splice(e,1),e--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Ud(i){if(lr.length){const t=[...new Set(lr)].sort((e,n)=>ho(e)-ho(n));if(lr.length=0,Xi){Xi.push(...t);return}for(Xi=t,er=0;er<Xi.length;er++){const e=Xi[er];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Xi=null,er=0}}const ho=i=>i.id==null?i.flags&2?-1:1/0:i.id;function Fd(i){try{for($n=0;$n<nn.length;$n++){const t=nn[$n];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),_o(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;$n<nn.length;$n++){const t=nn[$n];t&&(t.flags&=-2)}$n=-1,nn.length=0,Ud(),da=null,(nn.length||lr.length)&&Fd()}}let Un=null,Od=null;function pa(i){const t=Un;return Un=i,Od=i&&i.type.__scopeId||null,t}function mg(i,t=Un,e){if(!t||i._n)return i;const n=(...s)=>{n._d&&va(-1);const r=pa(t);let o;try{o=i(...s)}finally{pa(r),n._d&&va(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function os(i,t,e,n){const s=i.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Pi(),ai(l,e,8,[i.el,a,i,t]),Li())}}function aa(i,t){if($e){let e=$e.provides;const n=$e.parent&&$e.parent.provides;n===e&&(e=$e.provides=Object.create(n)),e[i]=t}}function ri(i,t,e=!1){const n=pv();if(n||cr){let s=cr?cr._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return e&&Yt(t)?t.call(n&&n.proxy):t}}const gg=Symbol.for("v-scx"),vg=()=>ri(gg);function Zr(i,t,e){return Bd(i,t,e)}function Bd(i,t,e=pe){const{immediate:n,deep:s,flush:r,once:o}=e,a=Ge({},e),l=t&&n||!t&&r!=="post";let c;if(fo){if(r==="sync"){const d=vg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=si,d.resume=si,d.pause=si,d}}const h=$e;a.call=(d,g,v)=>ai(d,h,g,v);let u=!1;r==="post"?a.scheduler=d=>{cn(d,h&&h.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(d,g)=>{g?d():kc(d)}),a.augmentJob=d=>{t&&(d.flags|=4),u&&(d.flags|=2,h&&(d.id=h.uid,d.i=h))};const f=ug(i,t,a);return fo&&(c?c.push(f):l&&f()),f}function _g(i,t,e){const n=this.proxy,s=Le(i)?i.includes(".")?zd(n,i):()=>n[i]:i.bind(n,n);let r;Yt(t)?r=t:(r=t.handler,e=t);const o=xo(this),a=Bd(s,r.bind(n),e);return o(),a}function zd(i,t){const e=t.split(".");return()=>{let n=i;for(let s=0;s<e.length&&n;s++)n=n[e[s]];return n}}const xg=Symbol("_vte"),yg=i=>i.__isTeleport,Mg=Symbol("_leaveCb");function Hc(i,t){i.shapeFlag&6&&i.component?(i.transition=t,Hc(i.component.subTree,t)):i.shapeFlag&128?(i.ssContent.transition=t.clone(i.ssContent),i.ssFallback.transition=t.clone(i.ssFallback)):i.transition=t}function kd(i,t){return Yt(i)?Ge({name:i.name},t,{setup:i}):i}function Hd(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function yh(i,t){let e;return!!((e=Object.getOwnPropertyDescriptor(i,t))&&!e.configurable)}const ma=new WeakMap;function Jr(i,t,e,n,s=!1){if(Wt(i)){i.forEach((v,p)=>Jr(v,t&&(Wt(t)?t[p]:t),e,n,s));return}if(Qr(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Jr(i,t,e,n.component.subTree);return}const r=n.shapeFlag&4?Xc(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=t&&t.r,h=a.refs===pe?a.refs={}:a.refs,u=a.setupState,f=ae(u),d=u===pe?ad:v=>yh(h,v)?!1:le(f,v),g=(v,p)=>!(p&&yh(h,p));if(c!=null&&c!==l){if(Mh(t),Le(c))h[c]=null,d(c)&&(u[c]=null);else if(je(c)){const v=t;g(c,v.k)&&(c.value=null),v.k&&(h[v.k]=null)}}if(Yt(l))_o(l,a,12,[o,h]);else{const v=Le(l),p=je(l);if(v||p){const m=()=>{if(i.f){const x=v?d(l)?u[l]:h[l]:g()||!i.k?l.value:h[i.k];if(s)Wt(x)&&Pc(x,r);else if(Wt(x))x.includes(r)||x.push(r);else if(v)h[l]=[r],d(l)&&(u[l]=h[l]);else{const _=[r];g(l,i.k)&&(l.value=_),i.k&&(h[i.k]=_)}}else v?(h[l]=o,d(l)&&(u[l]=o)):p&&(g(l,i.k)&&(l.value=o),i.k&&(h[i.k]=o))};if(o){const x=()=>{m(),ma.delete(i)};x.id=-1,ma.set(i,x),cn(x,e)}else Mh(i),m()}}}function Mh(i){const t=ma.get(i);t&&(t.flags|=8,ma.delete(i))}Na().requestIdleCallback;Na().cancelIdleCallback;const Qr=i=>!!i.type.__asyncLoader,Vd=i=>i.type.__isKeepAlive;function Sg(i,t){Gd(i,"a",t)}function bg(i,t){Gd(i,"da",t)}function Gd(i,t,e=$e){const n=i.__wdc||(i.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Oa(t,n,e),e){let s=e.parent;for(;s&&s.parent;)Vd(s.parent.vnode)&&Eg(n,t,e,s),s=s.parent}}function Eg(i,t,e,n){const s=Oa(t,i,n,!0);Vc(()=>{Pc(n[t],s)},e)}function Oa(i,t,e=$e,n=!1){if(e){const s=e[i]||(e[i]=[]),r=t.__weh||(t.__weh=(...o)=>{Pi();const a=xo(e),l=ai(t,e,i,o);return a(),Li(),l});return n?s.unshift(r):s.push(r),r}}const Di=i=>(t,e=$e)=>{(!fo||i==="sp")&&Oa(i,(...n)=>t(...n),e)},wg=Di("bm"),mr=Di("m"),Tg=Di("bu"),Ag=Di("u"),Wd=Di("bum"),Vc=Di("um"),Cg=Di("sp"),Rg=Di("rtg"),Pg=Di("rtc");function Lg(i,t=$e){Oa("ec",i,t)}const Ig="components";function qd(i,t){return Dg(Ig,i,!0,t)||i}const Ng=Symbol.for("v-ndc");function Dg(i,t,e=!0,n=!1){const s=Un||$e;if(s){const r=s.type;{const a=xv(r,!1);if(a&&(a===t||a===rn(t)||a===Ia(rn(t))))return r}const o=Sh(s[i]||r[i],t)||Sh(s.appContext[i],t);return!o&&n?r:o}}function Sh(i,t){return i&&(i[t]||i[rn(t)]||i[Ia(rn(t))])}function xn(i,t,e,n){let s;const r=e,o=Wt(i);if(o||Le(i)){const a=o&&Ts(i);let l=!1,c=!1;a&&(l=!wn(i),c=Ii(i),i=Da(i)),s=new Array(i.length);for(let h=0,u=i.length;h<u;h++)s[h]=t(l?c?dr(zn(i[h])):zn(i[h]):i[h],h,void 0,r)}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=t(a+1,a,void 0,r)}else if(ce(i))if(i[Symbol.iterator])s=Array.from(i,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(i);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];s[l]=t(i[h],h,l,r)}}else s=[];return s}const hc=i=>i?fp(i)?Xc(i):hc(i.parent):null,to=Ge(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>hc(i.parent),$root:i=>hc(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Yd(i),$forceUpdate:i=>i.f||(i.f=()=>{kc(i.update)}),$nextTick:i=>i.n||(i.n=pr.bind(i.proxy)),$watch:i=>_g.bind(i)}),sl=(i,t)=>i!==pe&&!i.__isScriptSetup&&le(i,t),Ug={get({_:i},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return n[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(sl(n,t))return o[t]=1,n[t];if(s!==pe&&le(s,t))return o[t]=2,s[t];if(le(r,t))return o[t]=3,r[t];if(e!==pe&&le(e,t))return o[t]=4,e[t];uc&&(o[t]=0)}}const c=to[t];let h,u;if(c)return t==="$attrs"&&Ye(i.attrs,"get",""),c(i);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==pe&&le(e,t))return o[t]=4,e[t];if(u=l.config.globalProperties,le(u,t))return u[t]},set({_:i},t,e){const{data:n,setupState:s,ctx:r}=i;return sl(s,t)?(s[t]=e,!0):n!==pe&&le(n,t)?(n[t]=e,!0):le(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(r[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||i!==pe&&a[0]!=="$"&&le(i,a)||sl(t,a)||le(r,a)||le(n,a)||le(to,a)||le(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:le(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function bh(i){return Wt(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let uc=!0;function Fg(i){const t=Yd(i),e=i.proxy,n=i.ctx;uc=!1,t.beforeCreate&&Eh(t.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:d,updated:g,activated:v,deactivated:p,beforeDestroy:m,beforeUnmount:x,destroyed:_,unmounted:b,render:L,renderTracked:T,renderTriggered:A,errorCaptured:D,serverPrefetch:S,expose:M,inheritAttrs:F,components:$,directives:P,filters:H}=t;if(c&&Og(c,n,null),o)for(const et in o){const z=o[et];Yt(z)&&(n[et]=z.bind(e))}if(s){const et=s.call(e,e);ce(et)&&(i.data=Ua(et))}if(uc=!0,r)for(const et in r){const z=r[et],nt=Yt(z)?z.bind(e,e):Yt(z.get)?z.get.bind(e,e):si,ht=!Yt(z)&&Yt(z.set)?z.set.bind(e):si,bt=sn({get:nt,set:ht});Object.defineProperty(n,et,{enumerable:!0,configurable:!0,get:()=>bt.value,set:gt=>bt.value=gt})}if(a)for(const et in a)Xd(a[et],n,e,et);if(l){const et=Yt(l)?l.call(e):l;Reflect.ownKeys(et).forEach(z=>{aa(z,et[z])})}h&&Eh(h,i,"c");function B(et,z){Wt(z)?z.forEach(nt=>et(nt.bind(e))):z&&et(z.bind(e))}if(B(wg,u),B(mr,f),B(Tg,d),B(Ag,g),B(Sg,v),B(bg,p),B(Lg,D),B(Pg,T),B(Rg,A),B(Wd,x),B(Vc,b),B(Cg,S),Wt(M))if(M.length){const et=i.exposed||(i.exposed={});M.forEach(z=>{Object.defineProperty(et,z,{get:()=>e[z],set:nt=>e[z]=nt,enumerable:!0})})}else i.exposed||(i.exposed={});L&&i.render===si&&(i.render=L),F!=null&&(i.inheritAttrs=F),$&&(i.components=$),P&&(i.directives=P),S&&Hd(i)}function Og(i,t,e=si){Wt(i)&&(i=fc(i));for(const n in i){const s=i[n];let r;ce(s)?"default"in s?r=ri(s.from||n,s.default,!0):r=ri(s.from||n):r=ri(s),je(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function Eh(i,t,e){ai(Wt(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function Xd(i,t,e,n){let s=n.includes(".")?zd(e,n):()=>e[n];if(Le(i)){const r=t[i];Yt(r)&&Zr(s,r)}else if(Yt(i))Zr(s,i.bind(e));else if(ce(i))if(Wt(i))i.forEach(r=>Xd(r,t,e,n));else{const r=Yt(i.handler)?i.handler.bind(e):t[i.handler];Yt(r)&&Zr(s,r,i)}}function Yd(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!n?l=t:(l={},s.length&&s.forEach(c=>ga(l,c,o,!0)),ga(l,t,o)),ce(t)&&r.set(t,l),l}function ga(i,t,e,n=!1){const{mixins:s,extends:r}=t;r&&ga(i,r,e,!0),s&&s.forEach(o=>ga(i,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=Bg[o]||e&&e[o];i[o]=a?a(i[o],t[o]):t[o]}return i}const Bg={data:wh,props:Th,emits:Th,methods:Xr,computed:Xr,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:Xr,directives:Xr,watch:kg,provide:wh,inject:zg};function wh(i,t){return t?i?function(){return Ge(Yt(i)?i.call(this,this):i,Yt(t)?t.call(this,this):t)}:t:i}function zg(i,t){return Xr(fc(i),fc(t))}function fc(i){if(Wt(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function Ze(i,t){return i?[...new Set([].concat(i,t))]:t}function Xr(i,t){return i?Ge(Object.create(null),i,t):t}function Th(i,t){return i?Wt(i)&&Wt(t)?[...new Set([...i,...t])]:Ge(Object.create(null),bh(i),bh(t??{})):t}function kg(i,t){if(!i)return t;if(!t)return i;const e=Ge(Object.create(null),i);for(const n in t)e[n]=Ze(i[n],t[n]);return e}function $d(){return{app:null,config:{isNativeTag:ad,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hg=0;function Vg(i,t){return function(n,s=null){Yt(n)||(n=Ge({},n)),s!=null&&!ce(s)&&(s=null);const r=$d(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Hg++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Mv,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Yt(h.install)?(o.add(h),h.install(c,...u)):Yt(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,f){if(!l){const d=c._ceVNode||Pe(n,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),i(d,h,f),l=!0,c._container=h,h.__vue_app__=c,Xc(d.component)}},onUnmount(h){a.push(h)},unmount(){l&&(ai(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=cr;cr=c;try{return h()}finally{cr=u}}};return c}}let cr=null;const Gg=(i,t)=>t==="modelValue"||t==="model-value"?i.modelModifiers:i[`${t}Modifiers`]||i[`${rn(t)}Modifiers`]||i[`${Rs(t)}Modifiers`];function Wg(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||pe;let s=e;const r=t.startsWith("update:"),o=r&&Gg(n,t.slice(7));o&&(o.trim&&(s=e.map(h=>Le(h)?h.trim():h)),o.number&&(s=e.map(Pm)));let a,l=n[a=Ja(t)]||n[a=Ja(rn(t))];!l&&r&&(l=n[a=Ja(Rs(t))]),l&&ai(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,ai(c,i,6,s)}}const qg=new WeakMap;function jd(i,t,e=!1){const n=e?qg:t.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Yt(i)){const l=c=>{const h=jd(c,t,!0);h&&(a=!0,Ge(o,h))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(ce(i)&&n.set(i,null),null):(Wt(r)?r.forEach(l=>o[l]=null):Ge(o,r),ce(i)&&n.set(i,o),o)}function Ba(i,t){return!i||!Pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),le(i,t[0].toLowerCase()+t.slice(1))||le(i,Rs(t))||le(i,t))}function Ah(i){const{type:t,vnode:e,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:f,setupState:d,ctx:g,inheritAttrs:v}=i,p=pa(i);let m,x;try{if(e.shapeFlag&4){const b=s||n,L=b;m=Zn(c.call(L,b,h,u,d,f,g)),x=a}else{const b=t;m=Zn(b.length>1?b(u,{attrs:a,slots:o,emit:l}):b(u,null)),x=t.props?a:Xg(a)}}catch(b){eo.length=0,Fa(b,i,1),m=Pe(ns)}let _=m;if(x&&v!==!1){const b=Object.keys(x),{shapeFlag:L}=_;b.length&&L&7&&(r&&b.some(Rc)&&(x=Yg(x,r)),_=gr(_,x,!1,!0))}return e.dirs&&(_=gr(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(e.dirs):e.dirs),e.transition&&Hc(_,e.transition),m=_,pa(p),m}const Xg=i=>{let t;for(const e in i)(e==="class"||e==="style"||Pa(e))&&((t||(t={}))[e]=i[e]);return t},Yg=(i,t)=>{const e={};for(const n in i)(!Rc(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function $g(i,t,e){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?Ch(n,o,c):!!o;if(l&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(Kd(o,n,f)&&!Ba(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Ch(n,o,c):!0:!!o;return!1}function Ch(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(Kd(t,i,r)&&!Ba(e,r))return!0}return!1}function Kd(i,t,e){const n=i[e],s=t[e];return e==="style"&&ce(n)&&ce(s)?!Ic(n,s):n!==s}function jg({vnode:i,parent:t},e){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=t.vnode).el=e,t=t.parent;else break}}const Zd={},Jd=()=>Object.create(Zd),Qd=i=>Object.getPrototypeOf(i)===Zd;function Kg(i,t,e,n=!1){const s={},r=Jd();i.propsDefaults=Object.create(null),tp(i,t,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);e?i.props=n?s:Pd(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Zg(i,t,e,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=ae(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const h=i.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(Ba(i.emitsOptions,f))continue;const d=t[f];if(l)if(le(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=rn(f);s[g]=dc(l,a,g,d,i,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{tp(i,t,s,r)&&(c=!0);let h;for(const u in a)(!t||!le(t,u)&&((h=Rs(u))===u||!le(t,h)))&&(l?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=dc(l,a,u,void 0,i,!0)):delete s[u]);if(r!==a)for(const u in r)(!t||!le(t,u))&&(delete r[u],c=!0)}c&&Ti(i.attrs,"set","")}function tp(i,t,e,n){const[s,r]=i.propsOptions;let o=!1,a;if(t)for(let l in t){if($r(l))continue;const c=t[l];let h;s&&le(s,h=rn(l))?!r||!r.includes(h)?e[h]=c:(a||(a={}))[h]=c:Ba(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=ae(e),c=a||pe;for(let h=0;h<r.length;h++){const u=r[h];e[u]=dc(s,l,u,c[u],i,!le(c,u))}}return o}function dc(i,t,e,n,s,r){const o=i[e];if(o!=null){const a=le(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Yt(l)){const{propsDefaults:c}=s;if(e in c)n=c[e];else{const h=xo(s);n=c[e]=l.call(null,t),h()}}else n=l;s.ce&&s.ce._setProp(e,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Rs(e))&&(n=!0))}return n}const Jg=new WeakMap;function ep(i,t,e=!1){const n=e?Jg:t.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Yt(i)){const h=u=>{l=!0;const[f,d]=ep(u,t,!0);Ge(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(h),i.extends&&h(i.extends),i.mixins&&i.mixins.forEach(h)}if(!r&&!l)return ce(i)&&n.set(i,or),or;if(Wt(r))for(let h=0;h<r.length;h++){const u=rn(r[h]);Rh(u)&&(o[u]=pe)}else if(r)for(const h in r){const u=rn(h);if(Rh(u)){const f=r[h],d=o[u]=Wt(f)||Yt(f)?{type:f}:Ge({},f),g=d.type;let v=!1,p=!0;if(Wt(g))for(let m=0;m<g.length;++m){const x=g[m],_=Yt(x)&&x.name;if(_==="Boolean"){v=!0;break}else _==="String"&&(p=!1)}else v=Yt(g)&&g.name==="Boolean";d[0]=v,d[1]=p,(v||le(d,"default"))&&a.push(u)}}const c=[o,a];return ce(i)&&n.set(i,c),c}function Rh(i){return i[0]!=="$"&&!$r(i)}const Gc=i=>i==="_"||i==="_ctx"||i==="$stable",Wc=i=>Wt(i)?i.map(Zn):[Zn(i)],Qg=(i,t,e)=>{if(t._n)return t;const n=mg((...s)=>Wc(t(...s)),e);return n._c=!1,n},np=(i,t,e)=>{const n=i._ctx;for(const s in i){if(Gc(s))continue;const r=i[s];if(Yt(r))t[s]=Qg(s,r,n);else if(r!=null){const o=Wc(r);t[s]=()=>o}}},ip=(i,t)=>{const e=Wc(t);i.slots.default=()=>e},sp=(i,t,e)=>{for(const n in t)(e||!Gc(n))&&(i[n]=t[n])},tv=(i,t,e)=>{const n=i.slots=Jd();if(i.vnode.shapeFlag&32){const s=t._;s?(sp(n,t,e),e&&fd(n,"_",s,!0)):np(t,n)}else t&&ip(i,t)},ev=(i,t,e)=>{const{vnode:n,slots:s}=i;let r=!0,o=pe;if(n.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:sp(s,t,e):(r=!t.$stable,np(t,s)),o=t}else t&&(ip(i,t),o={default:1});if(r)for(const a in s)!Gc(a)&&o[a]==null&&delete s[a]},cn=ov;function nv(i){return iv(i)}function iv(i,t){const e=Na();e.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:d=si,insertStaticContent:g}=i,v=(R,N,X,Z=null,st=null,E=null,y=void 0,O=null,G=!!N.dynamicChildren)=>{if(R===N)return;R&&!Ir(R,N)&&(Z=W(R),gt(R,st,E,!0),R=null),N.patchFlag===-2&&(G=!1,N.dynamicChildren=null);const{type:V,ref:J,shapeFlag:lt}=N;switch(V){case za:p(R,N,X,Z);break;case ns:m(R,N,X,Z);break;case la:R==null&&x(N,X,Z,y);break;case be:$(R,N,X,Z,st,E,y,O,G);break;default:lt&1?L(R,N,X,Z,st,E,y,O,G):lt&6?P(R,N,X,Z,st,E,y,O,G):(lt&64||lt&128)&&V.process(R,N,X,Z,st,E,y,O,G,St)}J!=null&&st?Jr(J,R&&R.ref,E,N||R,!N):J==null&&R&&R.ref!=null&&Jr(R.ref,null,E,R,!0)},p=(R,N,X,Z)=>{if(R==null)n(N.el=a(N.children),X,Z);else{const st=N.el=R.el;N.children!==R.children&&c(st,N.children)}},m=(R,N,X,Z)=>{R==null?n(N.el=l(N.children||""),X,Z):N.el=R.el},x=(R,N,X,Z)=>{[R.el,R.anchor]=g(R.children,N,X,Z,R.el,R.anchor)},_=({el:R,anchor:N},X,Z)=>{let st;for(;R&&R!==N;)st=f(R),n(R,X,Z),R=st;n(N,X,Z)},b=({el:R,anchor:N})=>{let X;for(;R&&R!==N;)X=f(R),s(R),R=X;s(N)},L=(R,N,X,Z,st,E,y,O,G)=>{if(N.type==="svg"?y="svg":N.type==="math"&&(y="mathml"),R==null)T(N,X,Z,st,E,y,O,G);else{const V=R.el&&R.el._isVueCE?R.el:null;try{V&&V._beginPatch(),S(R,N,st,E,y,O,G)}finally{V&&V._endPatch()}}},T=(R,N,X,Z,st,E,y,O)=>{let G,V;const{props:J,shapeFlag:lt,transition:Q,dirs:mt}=R;if(G=R.el=o(R.type,E,J&&J.is,J),lt&8?h(G,R.children):lt&16&&D(R.children,G,null,Z,st,rl(R,E),y,O),mt&&os(R,null,Z,"created"),A(G,R,R.scopeId,y,Z),J){for(const dt in J)dt!=="value"&&!$r(dt)&&r(G,dt,null,J[dt],E,Z);"value"in J&&r(G,"value",null,J.value,E),(V=J.onVnodeBeforeMount)&&Wn(V,Z,R)}mt&&os(R,null,Z,"beforeMount");const Et=sv(st,Q);Et&&Q.beforeEnter(G),n(G,N,X),((V=J&&J.onVnodeMounted)||Et||mt)&&cn(()=>{V&&Wn(V,Z,R),Et&&Q.enter(G),mt&&os(R,null,Z,"mounted")},st)},A=(R,N,X,Z,st)=>{if(X&&d(R,X),Z)for(let E=0;E<Z.length;E++)d(R,Z[E]);if(st){let E=st.subTree;if(N===E||lp(E.type)&&(E.ssContent===N||E.ssFallback===N)){const y=st.vnode;A(R,y,y.scopeId,y.slotScopeIds,st.parent)}}},D=(R,N,X,Z,st,E,y,O,G=0)=>{for(let V=G;V<R.length;V++){const J=R[V]=O?wi(R[V]):Zn(R[V]);v(null,J,N,X,Z,st,E,y,O)}},S=(R,N,X,Z,st,E,y)=>{const O=N.el=R.el;let{patchFlag:G,dynamicChildren:V,dirs:J}=N;G|=R.patchFlag&16;const lt=R.props||pe,Q=N.props||pe;let mt;if(X&&as(X,!1),(mt=Q.onVnodeBeforeUpdate)&&Wn(mt,X,N,R),J&&os(N,R,X,"beforeUpdate"),X&&as(X,!0),(lt.innerHTML&&Q.innerHTML==null||lt.textContent&&Q.textContent==null)&&h(O,""),V?M(R.dynamicChildren,V,O,X,Z,rl(N,st),E):y||z(R,N,O,null,X,Z,rl(N,st),E,!1),G>0){if(G&16)F(O,lt,Q,X,st);else if(G&2&&lt.class!==Q.class&&r(O,"class",null,Q.class,st),G&4&&r(O,"style",lt.style,Q.style,st),G&8){const Et=N.dynamicProps;for(let dt=0;dt<Et.length;dt++){const xt=Et[dt],Ct=lt[xt],At=Q[xt];(At!==Ct||xt==="value")&&r(O,xt,Ct,At,st,X)}}G&1&&R.children!==N.children&&h(O,N.children)}else!y&&V==null&&F(O,lt,Q,X,st);((mt=Q.onVnodeUpdated)||J)&&cn(()=>{mt&&Wn(mt,X,N,R),J&&os(N,R,X,"updated")},Z)},M=(R,N,X,Z,st,E,y)=>{for(let O=0;O<N.length;O++){const G=R[O],V=N[O],J=G.el&&(G.type===be||!Ir(G,V)||G.shapeFlag&198)?u(G.el):X;v(G,V,J,null,Z,st,E,y,!0)}},F=(R,N,X,Z,st)=>{if(N!==X){if(N!==pe)for(const E in N)!$r(E)&&!(E in X)&&r(R,E,N[E],null,st,Z);for(const E in X){if($r(E))continue;const y=X[E],O=N[E];y!==O&&E!=="value"&&r(R,E,O,y,st,Z)}"value"in X&&r(R,"value",N.value,X.value,st)}},$=(R,N,X,Z,st,E,y,O,G)=>{const V=N.el=R?R.el:a(""),J=N.anchor=R?R.anchor:a("");let{patchFlag:lt,dynamicChildren:Q,slotScopeIds:mt}=N;mt&&(O=O?O.concat(mt):mt),R==null?(n(V,X,Z),n(J,X,Z),D(N.children||[],X,J,st,E,y,O,G)):lt>0&&lt&64&&Q&&R.dynamicChildren&&R.dynamicChildren.length===Q.length?(M(R.dynamicChildren,Q,X,st,E,y,O),(N.key!=null||st&&N===st.subTree)&&rp(R,N,!0)):z(R,N,X,J,st,E,y,O,G)},P=(R,N,X,Z,st,E,y,O,G)=>{N.slotScopeIds=O,R==null?N.shapeFlag&512?st.ctx.activate(N,X,Z,y,G):H(N,X,Z,st,E,y,G):U(R,N,G)},H=(R,N,X,Z,st,E,y)=>{const O=R.component=dv(R,Z,st);if(Vd(R)&&(O.ctx.renderer=St),mv(O,!1,y),O.asyncDep){if(st&&st.registerDep(O,B,y),!R.el){const G=O.subTree=Pe(ns);m(null,G,N,X),R.placeholder=G.el}}else B(O,R,N,X,st,E,y)},U=(R,N,X)=>{const Z=N.component=R.component;if($g(R,N,X))if(Z.asyncDep&&!Z.asyncResolved){et(Z,N,X);return}else Z.next=N,Z.update();else N.el=R.el,Z.vnode=N},B=(R,N,X,Z,st,E,y)=>{const O=()=>{if(R.isMounted){let{next:lt,bu:Q,u:mt,parent:Et,vnode:dt}=R;{const Vt=op(R);if(Vt){lt&&(lt.el=dt.el,et(R,lt,y)),Vt.asyncDep.then(()=>{cn(()=>{R.isUnmounted||V()},st)});return}}let xt=lt,Ct;as(R,!1),lt?(lt.el=dt.el,et(R,lt,y)):lt=dt,Q&&Qa(Q),(Ct=lt.props&&lt.props.onVnodeBeforeUpdate)&&Wn(Ct,Et,lt,dt),as(R,!0);const At=Ah(R),Pt=R.subTree;R.subTree=At,v(Pt,At,u(Pt.el),W(Pt),R,st,E),lt.el=At.el,xt===null&&jg(R,At.el),mt&&cn(mt,st),(Ct=lt.props&&lt.props.onVnodeUpdated)&&cn(()=>Wn(Ct,Et,lt,dt),st)}else{let lt;const{el:Q,props:mt}=N,{bm:Et,m:dt,parent:xt,root:Ct,type:At}=R,Pt=Qr(N);as(R,!1),Et&&Qa(Et),!Pt&&(lt=mt&&mt.onVnodeBeforeMount)&&Wn(lt,xt,N),as(R,!0);{Ct.ce&&Ct.ce._hasShadowRoot()&&Ct.ce._injectChildStyle(At,R.parent?R.parent.type:void 0);const Vt=R.subTree=Ah(R);v(null,Vt,X,Z,R,st,E),N.el=Vt.el}if(dt&&cn(dt,st),!Pt&&(lt=mt&&mt.onVnodeMounted)){const Vt=N;cn(()=>Wn(lt,xt,Vt),st)}(N.shapeFlag&256||xt&&Qr(xt.vnode)&&xt.vnode.shapeFlag&256)&&R.a&&cn(R.a,st),R.isMounted=!0,N=X=Z=null}};R.scope.on();const G=R.effect=new gd(O);R.scope.off();const V=R.update=G.run.bind(G),J=R.job=G.runIfDirty.bind(G);J.i=R,J.id=R.uid,G.scheduler=()=>kc(J),as(R,!0),V()},et=(R,N,X)=>{N.component=R;const Z=R.vnode.props;R.vnode=N,R.next=null,Zg(R,N.props,Z,X),ev(R,N.children,X),Pi(),xh(R),Li()},z=(R,N,X,Z,st,E,y,O,G=!1)=>{const V=R&&R.children,J=R?R.shapeFlag:0,lt=N.children,{patchFlag:Q,shapeFlag:mt}=N;if(Q>0){if(Q&128){ht(V,lt,X,Z,st,E,y,O,G);return}else if(Q&256){nt(V,lt,X,Z,st,E,y,O,G);return}}mt&8?(J&16&&wt(V,st,E),lt!==V&&h(X,lt)):J&16?mt&16?ht(V,lt,X,Z,st,E,y,O,G):wt(V,st,E,!0):(J&8&&h(X,""),mt&16&&D(lt,X,Z,st,E,y,O,G))},nt=(R,N,X,Z,st,E,y,O,G)=>{R=R||or,N=N||or;const V=R.length,J=N.length,lt=Math.min(V,J);let Q;for(Q=0;Q<lt;Q++){const mt=N[Q]=G?wi(N[Q]):Zn(N[Q]);v(R[Q],mt,X,null,st,E,y,O,G)}V>J?wt(R,st,E,!0,!1,lt):D(N,X,Z,st,E,y,O,G,lt)},ht=(R,N,X,Z,st,E,y,O,G)=>{let V=0;const J=N.length;let lt=R.length-1,Q=J-1;for(;V<=lt&&V<=Q;){const mt=R[V],Et=N[V]=G?wi(N[V]):Zn(N[V]);if(Ir(mt,Et))v(mt,Et,X,null,st,E,y,O,G);else break;V++}for(;V<=lt&&V<=Q;){const mt=R[lt],Et=N[Q]=G?wi(N[Q]):Zn(N[Q]);if(Ir(mt,Et))v(mt,Et,X,null,st,E,y,O,G);else break;lt--,Q--}if(V>lt){if(V<=Q){const mt=Q+1,Et=mt<J?N[mt].el:Z;for(;V<=Q;)v(null,N[V]=G?wi(N[V]):Zn(N[V]),X,Et,st,E,y,O,G),V++}}else if(V>Q)for(;V<=lt;)gt(R[V],st,E,!0),V++;else{const mt=V,Et=V,dt=new Map;for(V=Et;V<=Q;V++){const at=N[V]=G?wi(N[V]):Zn(N[V]);at.key!=null&&dt.set(at.key,V)}let xt,Ct=0;const At=Q-Et+1;let Pt=!1,Vt=0;const k=new Array(At);for(V=0;V<At;V++)k[V]=0;for(V=mt;V<=lt;V++){const at=R[V];if(Ct>=At){gt(at,st,E,!0);continue}let yt;if(at.key!=null)yt=dt.get(at.key);else for(xt=Et;xt<=Q;xt++)if(k[xt-Et]===0&&Ir(at,N[xt])){yt=xt;break}yt===void 0?gt(at,st,E,!0):(k[yt-Et]=V+1,yt>=Vt?Vt=yt:Pt=!0,v(at,N[yt],X,null,st,E,y,O,G),Ct++)}const pt=Pt?rv(k):or;for(xt=pt.length-1,V=At-1;V>=0;V--){const at=Et+V,yt=N[at],vt=N[at+1],I=at+1<J?vt.el||ap(vt):Z;k[V]===0?v(null,yt,X,I,st,E,y,O,G):Pt&&(xt<0||V!==pt[xt]?bt(yt,X,I,2):xt--)}}},bt=(R,N,X,Z,st=null)=>{const{el:E,type:y,transition:O,children:G,shapeFlag:V}=R;if(V&6){bt(R.component.subTree,N,X,Z);return}if(V&128){R.suspense.move(N,X,Z);return}if(V&64){y.move(R,N,X,St);return}if(y===be){n(E,N,X);for(let lt=0;lt<G.length;lt++)bt(G[lt],N,X,Z);n(R.anchor,N,X);return}if(y===la){_(R,N,X);return}if(Z!==2&&V&1&&O)if(Z===0)O.beforeEnter(E),n(E,N,X),cn(()=>O.enter(E),st);else{const{leave:lt,delayLeave:Q,afterLeave:mt}=O,Et=()=>{R.ctx.isUnmounted?s(E):n(E,N,X)},dt=()=>{E._isLeaving&&E[Mg](!0),lt(E,()=>{Et(),mt&&mt()})};Q?Q(E,Et,dt):dt()}else n(E,N,X)},gt=(R,N,X,Z=!1,st=!1)=>{const{type:E,props:y,ref:O,children:G,dynamicChildren:V,shapeFlag:J,patchFlag:lt,dirs:Q,cacheIndex:mt}=R;if(lt===-2&&(st=!1),O!=null&&(Pi(),Jr(O,null,X,R,!0),Li()),mt!=null&&(N.renderCache[mt]=void 0),J&256){N.ctx.deactivate(R);return}const Et=J&1&&Q,dt=!Qr(R);let xt;if(dt&&(xt=y&&y.onVnodeBeforeUnmount)&&Wn(xt,N,R),J&6)_t(R.component,X,Z);else{if(J&128){R.suspense.unmount(X,Z);return}Et&&os(R,null,N,"beforeUnmount"),J&64?R.type.remove(R,N,X,St,Z):V&&!V.hasOnce&&(E!==be||lt>0&&lt&64)?wt(V,N,X,!1,!0):(E===be&&lt&384||!st&&J&16)&&wt(G,N,X),Z&&qt(R)}(dt&&(xt=y&&y.onVnodeUnmounted)||Et)&&cn(()=>{xt&&Wn(xt,N,R),Et&&os(R,null,N,"unmounted")},X)},qt=R=>{const{type:N,el:X,anchor:Z,transition:st}=R;if(N===be){ot(X,Z);return}if(N===la){b(R);return}const E=()=>{s(X),st&&!st.persisted&&st.afterLeave&&st.afterLeave()};if(R.shapeFlag&1&&st&&!st.persisted){const{leave:y,delayLeave:O}=st,G=()=>y(X,E);O?O(R.el,E,G):G()}else E()},ot=(R,N)=>{let X;for(;R!==N;)X=f(R),s(R),R=X;s(N)},_t=(R,N,X)=>{const{bum:Z,scope:st,job:E,subTree:y,um:O,m:G,a:V}=R;Ph(G),Ph(V),Z&&Qa(Z),st.stop(),E&&(E.flags|=8,gt(y,R,N,X)),O&&cn(O,N),cn(()=>{R.isUnmounted=!0},N)},wt=(R,N,X,Z=!1,st=!1,E=0)=>{for(let y=E;y<R.length;y++)gt(R[y],N,X,Z,st)},W=R=>{if(R.shapeFlag&6)return W(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const N=f(R.anchor||R.el),X=N&&N[xg];return X?f(X):N};let ft=!1;const ut=(R,N,X)=>{let Z;R==null?N._vnode&&(gt(N._vnode,null,null,!0),Z=N._vnode.component):v(N._vnode||null,R,N,null,null,null,X),N._vnode=R,ft||(ft=!0,xh(Z),Ud(),ft=!1)},St={p:v,um:gt,m:bt,r:qt,mt:H,mc:D,pc:z,pbc:M,n:W,o:i};return{render:ut,hydrate:void 0,createApp:Vg(ut)}}function rl({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function as({effect:i,job:t},e){e?(i.flags|=32,t.flags|=4):(i.flags&=-33,t.flags&=-5)}function sv(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function rp(i,t,e=!1){const n=i.children,s=t.children;if(Wt(n)&&Wt(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=wi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&rp(o,a)),a.type===za&&(a.patchFlag===-1&&(a=s[r]=wi(a)),a.el=o.el),a.type===ns&&!a.el&&(a.el=o.el)}}function rv(i){const t=i.slice(),e=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=e[e.length-1],i[s]<c){t[n]=s,e.push(n);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,i[e[a]]<c?r=a+1:o=a;c<i[e[r]]&&(r>0&&(t[n]=e[r-1]),e[r]=n)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function op(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:op(t)}function Ph(i){if(i)for(let t=0;t<i.length;t++)i[t].flags|=8}function ap(i){if(i.placeholder)return i.placeholder;const t=i.component;return t?ap(t.subTree):null}const lp=i=>i.__isSuspense;function ov(i,t){t&&t.pendingBranch?Wt(i)?t.effects.push(...i):t.effects.push(i):pg(i)}const be=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),ns=Symbol.for("v-cmt"),la=Symbol.for("v-stc"),eo=[];let _n=null;function Ot(i=!1){eo.push(_n=i?null:[])}function av(){eo.pop(),_n=eo[eo.length-1]||null}let uo=1;function va(i,t=!1){uo+=i,i<0&&_n&&t&&(_n.hasOnce=!0)}function cp(i){return i.dynamicChildren=uo>0?_n||or:null,av(),uo>0&&_n&&_n.push(i),i}function Bt(i,t,e,n,s,r){return cp(K(i,t,e,n,s,r,!0))}function hp(i,t,e,n,s){return cp(Pe(i,t,e,n,s,!0))}function _a(i){return i?i.__v_isVNode===!0:!1}function Ir(i,t){return i.type===t.type&&i.key===t.key}const up=({key:i})=>i??null,ca=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?Le(i)||je(i)||Yt(i)?{i:Un,r:i,k:t,f:!!e}:i:null);function K(i,t=null,e=null,n=0,s=null,r=i===be?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&up(t),ref:t&&ca(t),scopeId:Od,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Un};return a?(qc(l,e),r&128&&i.normalize(l)):e&&(l.shapeFlag|=Le(e)?8:16),uo>0&&!o&&_n&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&_n.push(l),l}const Pe=lv;function lv(i,t=null,e=null,n=0,s=null,r=!1){if((!i||i===Ng)&&(i=ns),_a(i)){const a=gr(i,t,!0);return e&&qc(a,e),uo>0&&!r&&_n&&(a.shapeFlag&6?_n[_n.indexOf(i)]=a:_n.push(a)),a.patchFlag=-2,a}if(yv(i)&&(i=i.__vccOpts),t){t=cv(t);let{class:a,style:l}=t;a&&!Le(a)&&(t.class=fn(a)),ce(l)&&(zc(l)&&!Wt(l)&&(l=Ge({},l)),t.style=es(l))}const o=Le(i)?1:lp(i)?128:yg(i)?64:ce(i)?4:Yt(i)?2:0;return K(i,t,e,n,s,o,r,!0)}function cv(i){return i?zc(i)||Qd(i)?Ge({},i):i:null}function gr(i,t,e=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=t?hv(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&up(c),ref:t&&t.ref?e&&r?Wt(r)?r.concat(ca(t)):[r,ca(t)]:ca(t):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==be?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&gr(i.ssContent),ssFallback:i.ssFallback&&gr(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&Hc(h,l.clone(h)),h}function Ki(i=" ",t=0){return Pe(za,null,i,t)}function pc(i,t){const e=Pe(la,null,i);return e.staticCount=t,e}function En(i="",t=!1){return t?(Ot(),hp(ns,null,i)):Pe(ns,null,i)}function Zn(i){return i==null||typeof i=="boolean"?Pe(ns):Wt(i)?Pe(be,null,i.slice()):_a(i)?wi(i):Pe(za,null,String(i))}function wi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:gr(i)}function qc(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Wt(t))e=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),qc(i,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Qd(t)?t._ctx=Un:s===3&&Un&&(Un.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else Yt(t)?(t={default:t,_ctx:Un},e=32):(t=String(t),n&64?(e=16,t=[Ki(t)]):e=8);i.children=t,i.shapeFlag|=e}function hv(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=fn([t.class,n.class]));else if(s==="style")t.style=es([t.style,n.style]);else if(Pa(s)){const r=t[s],o=n[s];o&&r!==o&&!(Wt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=n[s])}return t}function Wn(i,t,e,n=null){ai(i,t,7,[e,n])}const uv=$d();let fv=0;function dv(i,t,e){const n=i.type,s=(t?t.appContext:i.appContext)||uv,r={uid:fv++,vnode:i,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ep(n,s),emitsOptions:jd(n,s),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:n.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Wg.bind(null,r),i.ce&&i.ce(r),r}let $e=null;const pv=()=>$e||Un;let xa,mc;{const i=Na(),t=(e,n)=>{let s;return(s=i[e])||(s=i[e]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};xa=t("__VUE_INSTANCE_SETTERS__",e=>$e=e),mc=t("__VUE_SSR_SETTERS__",e=>fo=e)}const xo=i=>{const t=$e;return xa(i),i.scope.on(),()=>{i.scope.off(),xa(t)}},Lh=()=>{$e&&$e.scope.off(),xa(null)};function fp(i){return i.vnode.shapeFlag&4}let fo=!1;function mv(i,t=!1,e=!1){t&&mc(t);const{props:n,children:s}=i.vnode,r=fp(i);Kg(i,n,r,t),tv(i,s,e||t);const o=r?gv(i,t):void 0;return t&&mc(!1),o}function gv(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Ug);const{setup:n}=e;if(n){Pi();const s=i.setupContext=n.length>1?_v(i):null,r=xo(i),o=_o(n,i,0,[i.props,s]),a=cd(o);if(Li(),r(),(a||i.sp)&&!Qr(i)&&Hd(i),a){if(o.then(Lh,Lh),t)return o.then(l=>{Ih(i,l)}).catch(l=>{Fa(l,i,0)});i.asyncDep=o}else Ih(i,o)}else dp(i)}function Ih(i,t,e){Yt(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:ce(t)&&(i.setupState=Id(t)),dp(i)}function dp(i,t,e){const n=i.type;i.render||(i.render=n.render||si);{const s=xo(i);Pi();try{Fg(i)}finally{Li(),s()}}}const vv={get(i,t){return Ye(i,"get",""),i[t]}};function _v(i){const t=e=>{i.exposed=e||{}};return{attrs:new Proxy(i.attrs,vv),slots:i.slots,emit:i.emit,expose:t}}function Xc(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Id(sg(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in to)return to[e](i)},has(t,e){return e in t||e in to}})):i.proxy}function xv(i,t=!0){return Yt(i)?i.displayName||i.name:i.name||t&&i.__name}function yv(i){return Yt(i)&&"__vccOpts"in i}const sn=(i,t)=>cg(i,t,fo);function pp(i,t,e){try{va(-1);const n=arguments.length;return n===2?ce(t)&&!Wt(t)?_a(t)?Pe(i,null,[t]):Pe(i,t):Pe(i,null,t):(n>3?e=Array.prototype.slice.call(arguments,2):n===3&&_a(e)&&(e=[e]),Pe(i,t,e))}finally{va(1)}}const Mv="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gc;const Nh=typeof window<"u"&&window.trustedTypes;if(Nh)try{gc=Nh.createPolicy("vue",{createHTML:i=>i})}catch{}const mp=gc?i=>gc.createHTML(i):i=>i,Sv="http://www.w3.org/2000/svg",bv="http://www.w3.org/1998/Math/MathML",Ei=typeof document<"u"?document:null,Dh=Ei&&Ei.createElement("template"),Ev={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const s=t==="svg"?Ei.createElementNS(Sv,i):t==="mathml"?Ei.createElementNS(bv,i):e?Ei.createElement(i,{is:e}):Ei.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>Ei.createTextNode(i),createComment:i=>Ei.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ei.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Dh.innerHTML=mp(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=Dh.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},wv=Symbol("_vtc");function Tv(i,t,e){const n=i[wv];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const Uh=Symbol("_vod"),Av=Symbol("_vsh"),Cv=Symbol(""),Rv=/(?:^|;)\s*display\s*:/;function Pv(i,t,e){const n=i.style,s=Le(e);let r=!1;if(e&&!s){if(t)if(Le(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&ha(n,a,"")}else for(const o in t)e[o]==null&&ha(n,o,"");for(const o in e)o==="display"&&(r=!0),ha(n,o,e[o])}else if(s){if(t!==e){const o=n[Cv];o&&(e+=";"+o),n.cssText=e,r=Rv.test(e)}}else t&&i.removeAttribute("style");Uh in i&&(i[Uh]=r?n.display:"",i[Av]&&(n.display="none"))}const Fh=/\s*!important$/;function ha(i,t,e){if(Wt(e))e.forEach(n=>ha(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=Lv(i,t);Fh.test(e)?i.setProperty(Rs(n),e.replace(Fh,""),"important"):i[n]=e}}const Oh=["Webkit","Moz","ms"],ol={};function Lv(i,t){const e=ol[t];if(e)return e;let n=rn(t);if(n!=="filter"&&n in i)return ol[t]=n;n=Ia(n);for(let s=0;s<Oh.length;s++){const r=Oh[s]+n;if(r in i)return ol[t]=r}return t}const Bh="http://www.w3.org/1999/xlink";function zh(i,t,e,n,s,r=Fm(t)){n&&t.startsWith("xlink:")?e==null?i.removeAttributeNS(Bh,t.slice(6,t.length)):i.setAttributeNS(Bh,t,e):e==null||r&&!dd(e)?i.removeAttribute(t):i.setAttribute(t,r?"":oi(e)?String(e):e)}function kh(i,t,e,n,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(i[t]=t==="innerHTML"?mp(e):e);return}const r=i.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=e==null?i.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in i))&&(i.value=l),e==null&&i.removeAttribute(t),i._value=e;return}let o=!1;if(e===""||e==null){const a=typeof i[t];a==="boolean"?e=dd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{i[t]=e}catch{}o&&i.removeAttribute(s||t)}function Iv(i,t,e,n){i.addEventListener(t,e,n)}function Nv(i,t,e,n){i.removeEventListener(t,e,n)}const Hh=Symbol("_vei");function Dv(i,t,e,n,s=null){const r=i[Hh]||(i[Hh]={}),o=r[t];if(n&&o)o.value=n;else{const[a,l]=Uv(t);if(n){const c=r[t]=Bv(n,s);Iv(i,a,c,l)}else o&&(Nv(i,a,o,l),r[t]=void 0)}}const Vh=/(?:Once|Passive|Capture)$/;function Uv(i){let t;if(Vh.test(i)){t={};let n;for(;n=i.match(Vh);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Rs(i.slice(2)),t]}let al=0;const Fv=Promise.resolve(),Ov=()=>al||(Fv.then(()=>al=0),al=Date.now());function Bv(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;ai(zv(n,e.value),t,5,[n])};return e.value=i,e.attached=Ov(),e}function zv(i,t){if(Wt(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const Gh=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,kv=(i,t,e,n,s,r)=>{const o=s==="svg";t==="class"?Tv(i,n,o):t==="style"?Pv(i,e,n):Pa(t)?Rc(t)||Dv(i,t,e,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hv(i,t,n,o))?(kh(i,t,n),!i.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&zh(i,t,n,o,r,t!=="value")):i._isVueCE&&(Vv(i,t)||i._def.__asyncLoader&&(/[A-Z]/.test(t)||!Le(n)))?kh(i,rn(t),n,r,t):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),zh(i,t,n,o))};function Hv(i,t,e,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in i&&Gh(t)&&Yt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&i.tagName==="IFRAME"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gh(t)&&Le(e)?!1:t in i}function Vv(i,t){const e=i._def.props;if(!e)return!1;const n=rn(t);return Array.isArray(e)?e.some(s=>rn(s)===n):Object.keys(e).some(s=>rn(s)===n)}const Gv=["ctrl","shift","alt","meta"],Wv={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,t)=>Gv.some(e=>i[`${e}Key`]&&!t.includes(e))},qv=(i,t)=>{if(!i)return i;const e=i._withMods||(i._withMods={}),n=t.join(".");return e[n]||(e[n]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=Wv[t[o]];if(a&&a(s,t))return}return i(s,...r)})},Xv=Ge({patchProp:kv},Ev);let Wh;function Yv(){return Wh||(Wh=nv(Xv))}const $v=(...i)=>{const t=Yv().createApp(...i),{mount:e}=t;return t.mount=n=>{const s=Kv(n);if(!s)return;const r=t._component;!Yt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,jv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function jv(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Kv(i){return Le(i)?document.querySelector(i):i}const is=(i,t)=>{const e=i.__vccOpts||i;for(const[n,s]of t)e[n]=s;return e},Zv={};function Jv(i,t){const e=qd("router-view");return Ot(),hp(e)}const Qv=is(Zv,[["render",Jv]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const nr=typeof document<"u";function gp(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function t_(i){return i.__esModule||i[Symbol.toStringTag]==="Module"||i.default&&gp(i.default)}const oe=Object.assign;function ll(i,t){const e={};for(const n in t){const s=t[n];e[n]=kn(s)?s.map(i):i(s)}return e}const no=()=>{},kn=Array.isArray;function qh(i,t){const e={};for(const n in i)e[n]=n in t?t[n]:i[n];return e}const vp=/#/g,e_=/&/g,n_=/\//g,i_=/=/g,s_=/\?/g,_p=/\+/g,r_=/%5B/g,o_=/%5D/g,xp=/%5E/g,a_=/%60/g,yp=/%7B/g,l_=/%7C/g,Mp=/%7D/g,c_=/%20/g;function Yc(i){return i==null?"":encodeURI(""+i).replace(l_,"|").replace(r_,"[").replace(o_,"]")}function h_(i){return Yc(i).replace(yp,"{").replace(Mp,"}").replace(xp,"^")}function vc(i){return Yc(i).replace(_p,"%2B").replace(c_,"+").replace(vp,"%23").replace(e_,"%26").replace(a_,"`").replace(yp,"{").replace(Mp,"}").replace(xp,"^")}function u_(i){return vc(i).replace(i_,"%3D")}function f_(i){return Yc(i).replace(vp,"%23").replace(s_,"%3F")}function d_(i){return f_(i).replace(n_,"%2F")}function po(i){if(i==null)return null;try{return decodeURIComponent(""+i)}catch{}return""+i}const p_=/\/$/,m_=i=>i.replace(p_,"");function cl(i,t,e="/"){let n,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(n=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=i(r.slice(1))),a>=0&&(n=n||t.slice(0,a),o=t.slice(a,t.length)),n=x_(n??t,e),{fullPath:n+r+o,path:n,query:s,hash:po(o)}}function g_(i,t){const e=t.query?i(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Xh(i,t){return!t||!i.toLowerCase().startsWith(t.toLowerCase())?i:i.slice(t.length)||"/"}function v_(i,t,e){const n=t.matched.length-1,s=e.matched.length-1;return n>-1&&n===s&&vr(t.matched[n],e.matched[s])&&Sp(t.params,e.params)&&i(t.query)===i(e.query)&&t.hash===e.hash}function vr(i,t){return(i.aliasOf||i)===(t.aliasOf||t)}function Sp(i,t){if(Object.keys(i).length!==Object.keys(t).length)return!1;for(var e in i)if(!__(i[e],t[e]))return!1;return!0}function __(i,t){return kn(i)?Yh(i,t):kn(t)?Yh(t,i):(i==null?void 0:i.valueOf())===(t==null?void 0:t.valueOf())}function Yh(i,t){return kn(t)?i.length===t.length&&i.every((e,n)=>e===t[n]):i.length===1&&i[0]===t}function x_(i,t){if(i.startsWith("/"))return i;if(!i)return t;const e=t.split("/"),n=i.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=e.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+n.slice(o).join("/")}const Oi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let _c=function(i){return i.pop="pop",i.push="push",i}({}),hl=function(i){return i.back="back",i.forward="forward",i.unknown="",i}({});function y_(i){if(!i)if(nr){const t=document.querySelector("base");i=t&&t.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),m_(i)}const M_=/^[^#]+#/;function S_(i,t){return i.replace(M_,"#")+t}function b_(i,t){const e=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:t.behavior,left:n.left-e.left-(t.left||0),top:n.top-e.top-(t.top||0)}}const ka=()=>({left:window.scrollX,top:window.scrollY});function E_(i){let t;if("el"in i){const e=i.el,n=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?n?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=b_(s,i)}else t=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $h(i,t){return(history.state?history.state.position-t:-1)+i}const xc=new Map;function w_(i,t){xc.set(i,t)}function T_(i){const t=xc.get(i);return xc.delete(i),t}function A_(i){return typeof i=="string"||i&&typeof i=="object"}function bp(i){return typeof i=="string"||typeof i=="symbol"}let Se=function(i){return i[i.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",i[i.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",i[i.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",i[i.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",i[i.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",i}({});const Ep=Symbol("");Se.MATCHER_NOT_FOUND+"",Se.NAVIGATION_GUARD_REDIRECT+"",Se.NAVIGATION_ABORTED+"",Se.NAVIGATION_CANCELLED+"",Se.NAVIGATION_DUPLICATED+"";function _r(i,t){return oe(new Error,{type:i,[Ep]:!0},t)}function ui(i,t){return i instanceof Error&&Ep in i&&(t==null||!!(i.type&t))}const C_=["params","query","hash"];function R_(i){if(typeof i=="string")return i;if(i.path!=null)return i.path;const t={};for(const e of C_)e in i&&(t[e]=i[e]);return JSON.stringify(t,null,2)}function P_(i){const t={};if(i===""||i==="?")return t;const e=(i[0]==="?"?i.slice(1):i).split("&");for(let n=0;n<e.length;++n){const s=e[n].replace(_p," "),r=s.indexOf("="),o=po(r<0?s:s.slice(0,r)),a=r<0?null:po(s.slice(r+1));if(o in t){let l=t[o];kn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function jh(i){let t="";for(let e in i){const n=i[e];if(e=u_(e),n==null){n!==void 0&&(t+=(t.length?"&":"")+e);continue}(kn(n)?n.map(s=>s&&vc(s)):[n&&vc(n)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function L_(i){const t={};for(const e in i){const n=i[e];n!==void 0&&(t[e]=kn(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return t}const I_=Symbol(""),Kh=Symbol(""),Ha=Symbol(""),wp=Symbol(""),yc=Symbol("");function Nr(){let i=[];function t(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function e(){i=[]}return{add:t,list:()=>i.slice(),reset:e}}function Yi(i,t,e,n,s,r=o=>o()){const o=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(_r(Se.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):A_(f)?l(_r(Se.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(o&&n.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},h=r(()=>i.call(n&&n.instances[s],t,e,c));let u=Promise.resolve(h);i.length<3&&(u=u.then(c)),u.catch(f=>l(f))})}function ul(i,t,e,n,s=r=>r()){const r=[];for(const o of i)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(gp(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Yi(c,e,n,o,a,s))}else{let c=l();r.push(()=>c.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=t_(h)?h.default:h;o.mods[a]=h,o.components[a]=u;const f=(u.__vccOpts||u)[t];return f&&Yi(f,e,n,o,a,s)()}))}}return r}function N_(i,t){const e=[],n=[],s=[],r=Math.max(t.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(i.matched.find(c=>vr(c,a))?n.push(a):e.push(a));const l=i.matched[o];l&&(t.matched.find(c=>vr(c,l))||s.push(l))}return[e,n,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let D_=()=>location.protocol+"//"+location.host;function Tp(i,t){const{pathname:e,search:n,hash:s}=t,r=i.indexOf("#");if(r>-1){let o=s.includes(i.slice(r))?i.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),Xh(a,"")}return Xh(e,i)+n+s}function U_(i,t,e,n){let s=[],r=[],o=null;const a=({state:f})=>{const d=Tp(i,location),g=e.value,v=t.value;let p=0;if(f){if(e.value=d,t.value=f,o&&o===g){o=null;return}p=v?f.position-v.position:0}else n(d);s.forEach(m=>{m(e.value,g,{delta:p,type:_c.pop,direction:p?p>0?hl.forward:hl.back:hl.unknown})})};function l(){o=e.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function h(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(oe({},f.state,{scroll:ka()}),"")}}function u(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:l,listen:c,destroy:u}}function Zh(i,t,e,n=!1,s=!1){return{back:i,current:t,forward:e,replaced:n,position:window.history.length,scroll:s?ka():null}}function F_(i){const{history:t,location:e}=window,n={value:Tp(i,e)},s={value:t.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=i.indexOf("#"),f=u>-1?(e.host&&document.querySelector("base")?i:i.slice(u))+l:D_()+i+l;try{t[h?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),e[h?"replace":"assign"](f)}}function o(l,c){r(l,oe({},t.state,Zh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),n.value=l}function a(l,c){const h=oe({},s.value,t.state,{forward:l,scroll:ka()});r(h.current,h,!0),r(l,oe({},Zh(n.value,l,null),{position:h.position+1},c),!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function O_(i){i=y_(i);const t=F_(i),e=U_(i,t.state,t.location,t.replace);function n(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=oe({location:"",base:i,go:n,createHref:S_.bind(null,i)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Ss=function(i){return i[i.Static=0]="Static",i[i.Param=1]="Param",i[i.Group=2]="Group",i}({});var Ie=function(i){return i[i.Static=0]="Static",i[i.Param=1]="Param",i[i.ParamRegExp=2]="ParamRegExp",i[i.ParamRegExpEnd=3]="ParamRegExpEnd",i[i.EscapeNext=4]="EscapeNext",i}(Ie||{});const B_={type:Ss.Static,value:""},z_=/[a-zA-Z0-9_]/;function k_(i){if(!i)return[[]];if(i==="/")return[[B_]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function t(d){throw new Error(`ERR (${e})/"${c}": ${d}`)}let e=Ie.Static,n=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(e===Ie.Static?r.push({type:Ss.Static,value:c}):e===Ie.Param||e===Ie.ParamRegExp||e===Ie.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Ss.Param,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&e!==Ie.ParamRegExp){n=e,e=Ie.EscapeNext;continue}switch(e){case Ie.Static:l==="/"?(c&&u(),o()):l===":"?(u(),e=Ie.Param):f();break;case Ie.EscapeNext:f(),e=n;break;case Ie.Param:l==="("?e=Ie.ParamRegExp:z_.test(l)?f():(u(),e=Ie.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ie.ParamRegExp:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:e=Ie.ParamRegExpEnd:h+=l;break;case Ie.ParamRegExpEnd:u(),e=Ie.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:t("Unknown state");break}}return e===Ie.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),s}const Jh="[^/]+?",H_={sensitive:!1,strict:!1,start:!0,end:!0};var en=function(i){return i[i._multiplier=10]="_multiplier",i[i.Root=90]="Root",i[i.Segment=40]="Segment",i[i.SubSegment=30]="SubSegment",i[i.Static=40]="Static",i[i.Dynamic=20]="Dynamic",i[i.BonusCustomRegExp=10]="BonusCustomRegExp",i[i.BonusWildcard=-50]="BonusWildcard",i[i.BonusRepeatable=-20]="BonusRepeatable",i[i.BonusOptional=-8]="BonusOptional",i[i.BonusStrict=.7000000000000001]="BonusStrict",i[i.BonusCaseSensitive=.25]="BonusCaseSensitive",i}(en||{});const V_=/[.+*?^${}()[\]/\\]/g;function G_(i,t){const e=oe({},H_,t),n=[];let s=e.start?"^":"";const r=[];for(const c of i){const h=c.length?[]:[en.Root];e.strict&&!c.length&&(s+="/");for(let u=0;u<c.length;u++){const f=c[u];let d=en.Segment+(e.sensitive?en.BonusCaseSensitive:0);if(f.type===Ss.Static)u||(s+="/"),s+=f.value.replace(V_,"\\$&"),d+=en.Static;else if(f.type===Ss.Param){const{value:g,repeatable:v,optional:p,regexp:m}=f;r.push({name:g,repeatable:v,optional:p});const x=m||Jh;if(x!==Jh){d+=en.BonusCustomRegExp;try{`${x}`}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+b.message)}}let _=v?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;u||(_=p&&c.length<2?`(?:/${_})`:"/"+_),p&&(_+="?"),s+=_,d+=en.Dynamic,p&&(d+=en.BonusOptional),v&&(d+=en.BonusRepeatable),x===".*"&&(d+=en.BonusWildcard)}h.push(d)}n.push(h)}if(e.strict&&e.end){const c=n.length-1;n[c][n[c].length-1]+=en.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let f=1;f<h.length;f++){const d=h[f]||"",g=r[f-1];u[g.name]=d&&g.repeatable?d.split("/"):d}return u}function l(c){let h="",u=!1;for(const f of i){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const d of f)if(d.type===Ss.Static)h+=d.value;else if(d.type===Ss.Param){const{value:g,repeatable:v,optional:p}=d,m=g in c?c[g]:"";if(kn(m)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=kn(m)?m.join("/"):m;if(!x)if(p)f.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);h+=x}}return h||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function W_(i,t){let e=0;for(;e<i.length&&e<t.length;){const n=t[e]-i[e];if(n)return n;e++}return i.length<t.length?i.length===1&&i[0]===en.Static+en.Segment?-1:1:i.length>t.length?t.length===1&&t[0]===en.Static+en.Segment?1:-1:0}function Ap(i,t){let e=0;const n=i.score,s=t.score;for(;e<n.length&&e<s.length;){const r=W_(n[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-n.length)===1){if(Qh(n))return 1;if(Qh(s))return-1}return s.length-n.length}function Qh(i){const t=i[i.length-1];return i.length>0&&t[t.length-1]<0}const q_={strict:!1,end:!0,sensitive:!1};function X_(i,t,e){const n=G_(k_(i.path),e),s=oe(n,{record:i,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Y_(i,t){const e=[],n=new Map;t=qh(q_,t);function s(u){return n.get(u)}function r(u,f,d){const g=!d,v=eu(u);v.aliasOf=d&&d.record;const p=qh(t,u),m=[v];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of b)m.push(eu(oe({},v,{components:d?d.record.components:v.components,path:L,aliasOf:d?d.record:v})))}let x,_;for(const b of m){const{path:L}=b;if(f&&L[0]!=="/"){const T=f.record.path,A=T[T.length-1]==="/"?"":"/";b.path=f.record.path+(L&&A+L)}if(x=X_(b,f,p),d?d.alias.push(x):(_=_||x,_!==x&&_.alias.push(x),g&&u.name&&!nu(x)&&o(u.name)),Cp(x)&&l(x),v.children){const T=v.children;for(let A=0;A<T.length;A++)r(T[A],x,d&&d.children[A])}d=d||x}return _?()=>{o(_)}:no}function o(u){if(bp(u)){const f=n.get(u);f&&(n.delete(u),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(u);f>-1&&(e.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return e}function l(u){const f=K_(u,e);e.splice(f,0,u),u.record.name&&!nu(u)&&n.set(u.record.name,u)}function c(u,f){let d,g={},v,p;if("name"in u&&u.name){if(d=n.get(u.name),!d)throw _r(Se.MATCHER_NOT_FOUND,{location:u});p=d.record.name,g=oe(tu(f.params,d.keys.filter(_=>!_.optional).concat(d.parent?d.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),u.params&&tu(u.params,d.keys.map(_=>_.name))),v=d.stringify(g)}else if(u.path!=null)v=u.path,d=e.find(_=>_.re.test(v)),d&&(g=d.parse(v),p=d.record.name);else{if(d=f.name?n.get(f.name):e.find(_=>_.re.test(f.path)),!d)throw _r(Se.MATCHER_NOT_FOUND,{location:u,currentLocation:f});p=d.record.name,g=oe({},f.params,u.params),v=d.stringify(g)}const m=[];let x=d;for(;x;)m.unshift(x.record),x=x.parent;return{name:p,path:v,params:g,matched:m,meta:j_(m)}}i.forEach(u=>r(u));function h(){e.length=0,n.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function tu(i,t){const e={};for(const n of t)n in i&&(e[n]=i[n]);return e}function eu(i){const t={path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:i.aliasOf,beforeEnter:i.beforeEnter,props:$_(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function $_(i){const t={},e=i.props||!1;if("component"in i)t.default=e;else for(const n in i.components)t[n]=typeof e=="object"?e[n]:e;return t}function nu(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function j_(i){return i.reduce((t,e)=>oe(t,e.meta),{})}function K_(i,t){let e=0,n=t.length;for(;e!==n;){const r=e+n>>1;Ap(i,t[r])<0?n=r:e=r+1}const s=Z_(i);return s&&(n=t.lastIndexOf(s,n-1)),n}function Z_(i){let t=i;for(;t=t.parent;)if(Cp(t)&&Ap(i,t)===0)return t}function Cp({record:i}){return!!(i.name||i.components&&Object.keys(i.components).length||i.redirect)}function iu(i){const t=ri(Ha),e=ri(wp),n=sn(()=>{const l=As(i.to);return t.resolve(l)}),s=sn(()=>{const{matched:l}=n.value,{length:c}=l,h=l[c-1],u=e.matched;if(!h||!u.length)return-1;const f=u.findIndex(vr.bind(null,h));if(f>-1)return f;const d=su(l[c-2]);return c>1&&su(h)===d&&u[u.length-1].path!==d?u.findIndex(vr.bind(null,l[c-2])):f}),r=sn(()=>s.value>-1&&n0(e.params,n.value.params)),o=sn(()=>s.value>-1&&s.value===e.matched.length-1&&Sp(e.params,n.value.params));function a(l={}){if(e0(l)){const c=t[As(i.replace)?"replace":"push"](As(i.to)).catch(no);return i.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:sn(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}function J_(i){return i.length===1?i[0]:i}const Q_=kd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:iu,setup(i,{slots:t}){const e=Ua(iu(i)),{options:n}=ri(Ha),s=sn(()=>({[ru(i.activeClass,n.linkActiveClass,"router-link-active")]:e.isActive,[ru(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&J_(t.default(e));return i.custom?r:pp("a",{"aria-current":e.isExactActive?i.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),t0=Q_;function e0(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const t=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return i.preventDefault&&i.preventDefault(),!0}}function n0(i,t){for(const e in t){const n=t[e],s=i[e];if(typeof n=="string"){if(n!==s)return!1}else if(!kn(s)||s.length!==n.length||n.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function su(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const ru=(i,t,e)=>i??t??e,i0=kd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:t,slots:e}){const n=ri(yc),s=sn(()=>i.route||n.value),r=ri(Kh,0),o=sn(()=>{let c=As(r);const{matched:h}=s.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=sn(()=>s.value.matched[o.value]);aa(Kh,sn(()=>o.value+1)),aa(I_,a),aa(yc,s);const l=ne();return Zr(()=>[l.value,a.value,i.name],([c,h,u],[f,d,g])=>{h&&(h.instances[u]=c,d&&d!==h&&c&&c===f&&(h.leaveGuards.size||(h.leaveGuards=d.leaveGuards),h.updateGuards.size||(h.updateGuards=d.updateGuards))),c&&h&&(!d||!vr(h,d)||!f)&&(h.enterCallbacks[u]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,h=i.name,u=a.value,f=u&&u.components[h];if(!f)return ou(e.default,{Component:f,route:c});const d=u.props[h],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=pp(f,oe({},g,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return ou(e.default,{Component:p,route:c})||p}}});function ou(i,t){if(!i)return null;const e=i(t);return e.length===1?e[0]:e}const s0=i0;function r0(i){const t=Y_(i.routes,i),e=i.parseQuery||P_,n=i.stringifyQuery||jh,s=i.history,r=Nr(),o=Nr(),a=Nr(),l=rg(Oi);let c=Oi;nr&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ll.bind(null,W=>""+W),u=ll.bind(null,d_),f=ll.bind(null,po);function d(W,ft){let ut,St;return bp(W)?(ut=t.getRecordMatcher(W),St=ft):St=W,t.addRoute(St,ut)}function g(W){const ft=t.getRecordMatcher(W);ft&&t.removeRoute(ft)}function v(){return t.getRoutes().map(W=>W.record)}function p(W){return!!t.getRecordMatcher(W)}function m(W,ft){if(ft=oe({},ft||l.value),typeof W=="string"){const X=cl(e,W,ft.path),Z=t.resolve({path:X.path},ft),st=s.createHref(X.fullPath);return oe(X,Z,{params:f(Z.params),hash:po(X.hash),redirectedFrom:void 0,href:st})}let ut;if(W.path!=null)ut=oe({},W,{path:cl(e,W.path,ft.path).path});else{const X=oe({},W.params);for(const Z in X)X[Z]==null&&delete X[Z];ut=oe({},W,{params:u(X)}),ft.params=u(ft.params)}const St=t.resolve(ut,ft),Y=W.hash||"";St.params=h(f(St.params));const R=g_(n,oe({},W,{hash:h_(Y),path:St.path})),N=s.createHref(R);return oe({fullPath:R,hash:Y,query:n===jh?L_(W.query):W.query||{}},St,{redirectedFrom:void 0,href:N})}function x(W){return typeof W=="string"?cl(e,W,l.value.path):oe({},W)}function _(W,ft){if(c!==W)return _r(Se.NAVIGATION_CANCELLED,{from:ft,to:W})}function b(W){return A(W)}function L(W){return b(oe(x(W),{replace:!0}))}function T(W,ft){const ut=W.matched[W.matched.length-1];if(ut&&ut.redirect){const{redirect:St}=ut;let Y=typeof St=="function"?St(W,ft):St;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=x(Y):{path:Y},Y.params={}),oe({query:W.query,hash:W.hash,params:Y.path!=null?{}:W.params},Y)}}function A(W,ft){const ut=c=m(W),St=l.value,Y=W.state,R=W.force,N=W.replace===!0,X=T(ut,St);if(X)return A(oe(x(X),{state:typeof X=="object"?oe({},Y,X.state):Y,force:R,replace:N}),ft||ut);const Z=ut;Z.redirectedFrom=ft;let st;return!R&&v_(n,St,ut)&&(st=_r(Se.NAVIGATION_DUPLICATED,{to:Z,from:St}),bt(St,St,!0,!1)),(st?Promise.resolve(st):M(Z,St)).catch(E=>ui(E)?ui(E,Se.NAVIGATION_GUARD_REDIRECT)?E:ht(E):z(E,Z,St)).then(E=>{if(E){if(ui(E,Se.NAVIGATION_GUARD_REDIRECT))return A(oe({replace:N},x(E.to),{state:typeof E.to=="object"?oe({},Y,E.to.state):Y,force:R}),ft||Z)}else E=$(Z,St,!0,N,Y);return F(Z,St,E),E})}function D(W,ft){const ut=_(W,ft);return ut?Promise.reject(ut):Promise.resolve()}function S(W){const ft=ot.values().next().value;return ft&&typeof ft.runWithContext=="function"?ft.runWithContext(W):W()}function M(W,ft){let ut;const[St,Y,R]=N_(W,ft);ut=ul(St.reverse(),"beforeRouteLeave",W,ft);for(const X of St)X.leaveGuards.forEach(Z=>{ut.push(Yi(Z,W,ft))});const N=D.bind(null,W,ft);return ut.push(N),wt(ut).then(()=>{ut=[];for(const X of r.list())ut.push(Yi(X,W,ft));return ut.push(N),wt(ut)}).then(()=>{ut=ul(Y,"beforeRouteUpdate",W,ft);for(const X of Y)X.updateGuards.forEach(Z=>{ut.push(Yi(Z,W,ft))});return ut.push(N),wt(ut)}).then(()=>{ut=[];for(const X of R)if(X.beforeEnter)if(kn(X.beforeEnter))for(const Z of X.beforeEnter)ut.push(Yi(Z,W,ft));else ut.push(Yi(X.beforeEnter,W,ft));return ut.push(N),wt(ut)}).then(()=>(W.matched.forEach(X=>X.enterCallbacks={}),ut=ul(R,"beforeRouteEnter",W,ft,S),ut.push(N),wt(ut))).then(()=>{ut=[];for(const X of o.list())ut.push(Yi(X,W,ft));return ut.push(N),wt(ut)}).catch(X=>ui(X,Se.NAVIGATION_CANCELLED)?X:Promise.reject(X))}function F(W,ft,ut){a.list().forEach(St=>S(()=>St(W,ft,ut)))}function $(W,ft,ut,St,Y){const R=_(W,ft);if(R)return R;const N=ft===Oi,X=nr?history.state:{};ut&&(St||N?s.replace(W.fullPath,oe({scroll:N&&X&&X.scroll},Y)):s.push(W.fullPath,Y)),l.value=W,bt(W,ft,ut,N),ht()}let P;function H(){P||(P=s.listen((W,ft,ut)=>{if(!_t.listening)return;const St=m(W),Y=T(St,_t.currentRoute.value);if(Y){A(oe(Y,{replace:!0,force:!0}),St).catch(no);return}c=St;const R=l.value;nr&&w_($h(R.fullPath,ut.delta),ka()),M(St,R).catch(N=>ui(N,Se.NAVIGATION_ABORTED|Se.NAVIGATION_CANCELLED)?N:ui(N,Se.NAVIGATION_GUARD_REDIRECT)?(A(oe(x(N.to),{force:!0}),St).then(X=>{ui(X,Se.NAVIGATION_ABORTED|Se.NAVIGATION_DUPLICATED)&&!ut.delta&&ut.type===_c.pop&&s.go(-1,!1)}).catch(no),Promise.reject()):(ut.delta&&s.go(-ut.delta,!1),z(N,St,R))).then(N=>{N=N||$(St,R,!1),N&&(ut.delta&&!ui(N,Se.NAVIGATION_CANCELLED)?s.go(-ut.delta,!1):ut.type===_c.pop&&ui(N,Se.NAVIGATION_ABORTED|Se.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),F(St,R,N)}).catch(no)}))}let U=Nr(),B=Nr(),et;function z(W,ft,ut){ht(W);const St=B.list();return St.length?St.forEach(Y=>Y(W,ft,ut)):console.error(W),Promise.reject(W)}function nt(){return et&&l.value!==Oi?Promise.resolve():new Promise((W,ft)=>{U.add([W,ft])})}function ht(W){return et||(et=!W,H(),U.list().forEach(([ft,ut])=>W?ut(W):ft()),U.reset()),W}function bt(W,ft,ut,St){const{scrollBehavior:Y}=i;if(!nr||!Y)return Promise.resolve();const R=!ut&&T_($h(W.fullPath,0))||(St||!ut)&&history.state&&history.state.scroll||null;return pr().then(()=>Y(W,ft,R)).then(N=>N&&E_(N)).catch(N=>z(N,W,ft))}const gt=W=>s.go(W);let qt;const ot=new Set,_t={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:p,getRoutes:v,resolve:m,options:i,push:b,replace:L,go:gt,back:()=>gt(-1),forward:()=>gt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:B.add,isReady:nt,install(W){W.component("RouterLink",t0),W.component("RouterView",s0),W.config.globalProperties.$router=_t,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>As(l)}),nr&&!qt&&l.value===Oi&&(qt=!0,b(s.location).catch(St=>{}));const ft={};for(const St in Oi)Object.defineProperty(ft,St,{get:()=>l.value[St],enumerable:!0});W.provide(Ha,_t),W.provide(wp,Pd(ft)),W.provide(yc,l);const ut=W.unmount;ot.add(W),W.unmount=function(){ot.delete(W),ot.size<1&&(c=Oi,P&&P(),P=null,l.value=Oi,qt=!1,et=!1),ut()}}};function wt(W){return W.reduce((ft,ut)=>ft.then(()=>S(ut)),Promise.resolve())}return _t}function Va(){return ri(Ha)}const o0={class:"card-ovr"},a0={class:"card-pos"},l0={class:"face-circle"},c0=["src","alt"],h0={key:1,class:"face-svg",viewBox:"0 0 80 80"},u0={class:"card-name"},f0={class:"card-club"},d0={class:"card-stats"},p0={class:"stat-val"},m0={class:"stat-lbl"},g0={key:0,class:"icon-badge"},v0={__name:"PlayerCard",props:{player:{type:Object,required:!0}},setup(i){const t=ne(!0);return(e,n)=>(Ot(),Bt("div",{class:fn(["player-card",`card-${i.player.tier}`])},[K("div",o0,Ft(i.player.overall),1),K("div",a0,Ft(i.player.position),1),K("div",l0,[t.value?(Ot(),Bt("img",{key:0,src:i.player.face_url,alt:i.player.name,class:"face-img",onError:n[0]||(n[0]=s=>t.value=!1)},null,40,c0)):(Ot(),Bt("svg",h0,[...n[1]||(n[1]=[K("circle",{cx:"40",cy:"28",r:"18",fill:"rgba(255,255,255,.55)"},null,-1),K("ellipse",{cx:"40",cy:"72",rx:"26",ry:"20",fill:"rgba(255,255,255,.55)"},null,-1)])]))]),K("div",u0,Ft(i.player.name),1),K("div",f0,Ft(i.player.club),1),K("div",d0,[(Ot(!0),Bt(be,null,xn(i.player.stats,s=>(Ot(),Bt("div",{key:s.label,class:"stat-box"},[K("span",p0,Ft(s.value),1),K("span",m0,Ft(s.label),1)]))),128))]),i.player.is_icon?(Ot(),Bt("div",g0,"★ LEGEND ★")):En("",!0)],2))}},_0=is(v0,[["__scopeId","data-v-d819ef52"]]),x0={class:"splash"},y0={class:"stadium"},M0={key:0,class:"spotlight-wrap"},S0={key:1,class:"spotlight-wrap"},b0={__name:"SplashView",setup(i){const t=Va(),e=ne(null),n=ne(null);async function s(){try{const c=await fetch("/api/spotlight");e.value=await c.json()}catch{}}function r(){const c=n.value;if(!c)return;const h=["#b71c1c","#c62828","#d32f2f","#e53935","#1565c0","#1976d2","#0d47a1","#283593","#880e4f","#333"];for(let u=0;u<5;u++){const f=document.createElement("div");f.className="stand-row";for(let d=0;d<130;d++){const g=document.createElement("div");g.className="stand-seat";const v=Math.random();g.style.background=v<.55?h[Math.floor(Math.random()*4)]:v<.8?h[4+Math.floor(Math.random()*4)]:h[9],g.style.animationDelay=`${(Math.random()*1.5).toFixed(2)}s`,f.appendChild(g)}c.appendChild(f)}}mr(()=>{s(),r()});function o(){t.push("/play")}function a(){t.push("/watch")}function l(){t.push("/game")}return(c,h)=>(Ot(),Bt("div",x0,[K("div",y0,[h[2]||(h[2]=pc('<div class="sky" data-v-e57cbebd></div><div class="fl fl-left" data-v-e57cbebd><div class="fl-pole" data-v-e57cbebd></div><div class="fl-head" data-v-e57cbebd></div><div class="fl-beam" data-v-e57cbebd></div></div><div class="fl fl-right" data-v-e57cbebd><div class="fl-pole" data-v-e57cbebd></div><div class="fl-head" data-v-e57cbebd></div><div class="fl-beam fl-beam-r" data-v-e57cbebd></div></div><div class="scoreboard" data-v-e57cbebd><span class="sb-score" data-v-e57cbebd>00 — 00</span><span class="sb-time" data-v-e57cbebd>00:00</span></div>',4)),K("div",{class:"stands",ref_key:"standsRef",ref:n},null,512),h[3]||(h[3]=pc('<div class="pitch" data-v-e57cbebd><svg class="pitch-svg" viewBox="0 0 800 160" preserveAspectRatio="none" data-v-e57cbebd><rect x="30" y="8" width="740" height="144" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2" data-v-e57cbebd></rect><line x1="400" y1="8" x2="400" y2="152" stroke="rgba(255,255,255,.5)" stroke-width="2" data-v-e57cbebd></line><circle cx="400" cy="80" r="40" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2" data-v-e57cbebd></circle><circle cx="400" cy="80" r="3" fill="rgba(255,255,255,.5)" data-v-e57cbebd></circle><rect x="30" y="42" width="90" height="76" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-e57cbebd></rect><rect x="30" y="58" width="44" height="44" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-e57cbebd></rect><rect x="680" y="42" width="90" height="76" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-e57cbebd></rect><rect x="726" y="58" width="44" height="44" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-e57cbebd></rect><rect x="10" y="62" width="20" height="36" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.6)" stroke-width="1.5" data-v-e57cbebd></rect><rect x="770" y="62" width="20" height="36" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.6)" stroke-width="1.5" data-v-e57cbebd></rect></svg></div>',1)),e.value?(Ot(),Bt("div",M0,[h[0]||(h[0]=K("div",{class:"spotlight-label"},"★ Player Spotlight ★",-1)),Pe(_0,{player:e.value},null,8,["player"])])):(Ot(),Bt("div",S0,[...h[1]||(h[1]=[K("div",{class:"spotlight-label"},"★ Player Spotlight ★",-1),K("div",{class:"card-loading"},"Loading…",-1)])]))]),K("div",{class:"menu"},[h[6]||(h[6]=K("div",{class:"title"},[K("h1",null,[Ki("The Beautiful Game "),K("span",{class:"year"},"2026")]),K("p",{class:"subtitle"},"Choose your game mode")],-1)),K("nav",{class:"menu-buttons"},[K("button",{class:"btn btn-primary",onClick:o},"▶  Play the Game"),K("button",{class:"btn btn-3d",onClick:l},"🎮  3D Match — New!"),K("button",{class:"btn btn-secondary",onClick:a},"◉  Watch the Play"),h[4]||(h[4]=K("button",{class:"btn btn-disabled",disabled:""},[Ki(" Career Mode "),K("span",{class:"badge"},"Coming Soon")],-1)),h[5]||(h[5]=K("button",{class:"btn btn-disabled",disabled:""},[Ki(" The Journey "),K("span",{class:"badge"},"Coming Soon")],-1))])])]))}},E0=is(b0,[["__scopeId","data-v-e57cbebd"]]),w0={class:"play-view"},T0={key:0,class:"screen select-screen"},A0={class:"team-pickers"},C0={class:"picker-col"},R0={class:"club-grid"},P0=["disabled","onClick"],L0={class:"club-name"},I0={class:"club-league"},N0={class:"vs-col"},D0=["disabled"],U0={class:"picker-col"},F0={class:"club-grid"},O0=["disabled","onClick"],B0={class:"club-name"},z0={class:"club-league"},k0={class:"scorebar"},H0={class:"sb-team"},V0={class:"sb-center"},G0={class:"sb-score"},W0={class:"sb-time"},q0={class:"sb-team away"},X0={class:"overlay-content"},Y0={class:"overlay-title"},$0={key:0,class:"overlay-sub"},j0={key:2,class:"screen ft-screen"},K0={class:"ft-card"},Z0={class:"ft-score"},J0={class:"ft-teams"},Q0={key:0,class:"ft-scorers"},tx={class:"ft-min"},ex={key:1,class:"ft-motm"},Ro=900,Po=400,ye=200,fi=80,ls=30,Dr=50,Lo=40,nx=3,ix=2.5,au=30,sx=5400,rx=60,ox=2700,lu=2.6,ax=4.2,cu=.9,lx=17,fl=28,cx=5,hx=5.5,ux={__name:"PlayView",setup(i){const t=Va(),e=Po/fi,n=Ro/e,s=ne([]),r=ne(""),o=ne(""),a=ne("select"),l=ne(null),c=ne(null),h=ne(0),u=ne(0),f=ne(""),d=ne(""),g=ne(0),v=ne(null),p=ne(""),m=ne([]),x=ne("");let _=null,b=null,L=null,T=0,A=!1,D=!1,S=null,M=[],F=[],$=0,P=0,H=0;const U={up:!1,down:!1,left:!1,right:!1,space:!1,z:!1,x:!1,s:!1},B={space:!1,z:!1,s:!1};function et(k,pt){return(k.x-pt.x)**2+(k.y-pt.y)**2}function z(k,pt){return Math.sqrt(et(k,pt))}function nt(k,pt,at){return Math.max(pt,Math.min(at,k))}function ht(k,pt){return k+Math.random()*(pt-k)}mr(async()=>{try{const k=await fetch("/api/clubs");s.value=await k.json()}catch{}});function bt(){W(),t.push("/")}async function gt(){if(!(!r.value||!o.value))try{const[k,pt]=await Promise.all([fetch(`/api/teams/${encodeURIComponent(r.value)}`),fetch(`/api/teams/${encodeURIComponent(o.value)}`)]),at=await k.json(),yt=await pt.json();f.value=at.club.name,d.value=yt.club.name,qt(at.players,yt.players)}catch{alert("Could not load team data — is the backend running?")}}function qt(k,pt){h.value=0,u.value=0,T=0,D=!1,m.value=[],x.value="";const at=[[4,40],[22,10],[22,30],[22,50],[22,70],[60,20],[60,40],[60,60],[85,15],[90,40],[85,65]],yt=[[196,40],[178,70],[178,50],[178,30],[178,10],[140,60],[140,40],[140,20],[115,65],[110,40],[115,15]],vt=["GK","RB","CB","CB","LB","CM","CM","CM","RW","ST","LW"];M=k.slice(0,11).map((I,ct)=>({idx:ct,name:I.name,pos:vt[ct]||"CM",x:at[ct][0],y:at[ct][1],baseX:at[ct][0],baseY:at[ct][1],pace:I.pace||75,shooting:I.shooting||70,passing:I.passing||70,defending:I.defending||65,team:"home",hasBall:!1,sprintTimer:0,vx:0,vy:0})),F=pt.slice(0,11).map((I,ct)=>({idx:ct,name:I.name,pos:vt[ct]||"CM",x:yt[ct][0],y:yt[ct][1],baseX:yt[ct][0],baseY:yt[ct][1],pace:I.pace||75,shooting:I.shooting||70,passing:I.passing||70,defending:I.defending||65,team:"away",hasBall:!1,sprintTimer:0,vx:0,vy:0})),S={x:100,y:40,vx:0,vy:0},$=N(100,40),P=0,H=0,A=!1,v.value=null,a.value="match",pr(()=>{_=l.value.getContext("2d"),wt(),dt()})}function ot(k){var pt;switch(k.code){case"ArrowUp":U.up=!0,k.preventDefault();break;case"ArrowDown":U.down=!0,k.preventDefault();break;case"ArrowLeft":U.left=!0,k.preventDefault();break;case"ArrowRight":U.right=!0,k.preventDefault();break;case"Space":B.space||(U.space=!0,B.space=!0),k.preventDefault();break;case"KeyZ":B.z||(U.z=!0,B.z=!0),k.preventDefault();break;case"KeyX":U.x=!0,k.preventDefault();break;case"KeyS":B.s||(U.s=!0,B.s=!0),k.preventDefault();break;case"Escape":ft(),k.preventDefault();break;case"Enter":(pt=v.value)!=null&&pt.action&&v.value.action(),k.preventDefault();break}}function _t(k){switch(k.code){case"ArrowUp":U.up=!1;break;case"ArrowDown":U.down=!1;break;case"ArrowLeft":U.left=!1;break;case"ArrowRight":U.right=!1;break;case"Space":U.space=!1,B.space=!1;break;case"KeyZ":U.z=!1,B.z=!1;break;case"KeyX":U.x=!1;break;case"KeyS":U.s=!1,B.s=!1;break}}mr(()=>{window.addEventListener("keydown",ot),window.addEventListener("keyup",_t)}),Vc(()=>{window.removeEventListener("keydown",ot),window.removeEventListener("keyup",_t),W()});function wt(){L=setInterval(ut,1e3/au)}function W(){L&&(clearInterval(L),L=null),b&&(cancelAnimationFrame(b),b=null)}function ft(){A=!A,A?(v.value={title:"PAUSED",subtitle:"Press Esc to continue",btn:"Resume",action:ft},p.value="overlay-pause"):v.value=null}function ut(){var pt;if(A)return;if(H>0){H--;return}if(T++,T===ox&&!D){A=!0,v.value={title:"HALF TIME",subtitle:`${f.value} ${h.value} – ${u.value} ${d.value}`,btn:"Kick Off",action:mt},p.value="overlay-halftime";return}if(T>=sx){Et();return}g.value=Math.min(90,Math.floor(T/rx));const k=M[$];if(k){let at=lu;U.x&&P===0?(at=ax,k.sprintTimer=(k.sprintTimer||0)+1,k.sprintTimer>60&&(P=90,k.sprintTimer=0)):P>0&&P--;const yt=at*(1+k.pace/200);U.up&&(k.y=nt(k.y-yt,1,fi-1)),U.down&&(k.y=nt(k.y+yt,1,fi-1)),U.left&&(k.x=nt(k.x-yt,1,ye-1)),U.right&&(k.x=nt(k.x+yt,1,ye-1)),k.hasBall&&(S.x=k.x+(D?-2.5:2.5),S.y=k.y,S.vx=0,S.vy=0),U.space&&k.hasBall&&(U.space=!1,B.space=!1,X(k)),U.z&&k.hasBall&&(U.z=!1,B.z=!1,Z(k)),U.s&&(U.s=!1,B.s=!1,st(k))}M.forEach((at,yt)=>{yt!==$&&E(at,M,F,0,ye,D?ye:0)}),F.forEach(at=>{E(at,F,M,ye,0,D?0:ye)}),St()||(S.x+=S.vx,S.y+=S.vy,S.vx*=cu,S.vy*=cu,S.y<1&&(S.y=1,S.vy=Math.abs(S.vy)*.7),S.y>fi-1&&(S.y=fi-1,S.vy=-Math.abs(S.vy)*.7),S.x<1&&(S.x=1,S.vx=Math.abs(S.vx)*.6),S.x>ye-1&&(S.x=ye-1,S.vx=-Math.abs(S.vx)*.6),S.vx**2+S.vy**2<.09&&(S.vx=0,S.vy=0),Y()),G(),(pt=M[$])!=null&&pt.hasBall||($=N(S.x,S.y))}function St(){for(const k of[...M,...F])if(k.hasBall)return k;return null}function Y(){let k=null,pt=cx;const at=[...M,...F];for(const yt of at){const vt=z(yt,S);vt<pt&&(pt=vt,k=yt)}k&&(R(),k.hasBall=!0)}function R(){[...M,...F].forEach(k=>{k.hasBall=!1})}function N(k,pt){let at=0,yt=1/0;return M.forEach((vt,I)=>{const ct=(vt.x-k)**2+(vt.y-pt)**2;ct<yt&&(yt=ct,at=I)}),at}function X(k){const pt=D?-1:1,at=M.filter(Lt=>Lt.idx!==k.idx);let yt=null,vt=-1/0;for(const Lt of at){const ee=(Lt.x-k.x)*pt,$t=z(k,Lt);if($t<3)continue;const te=ee/($t+1);te>vt&&(vt=te,yt=Lt)}yt||(yt=at.reduce((Lt,ee)=>z(k,Lt)<z(k,ee)?Lt:ee));const I=yt.x-k.x,ct=yt.y-k.y,Mt=Math.sqrt(I*I+ct*ct)||1,Dt=lx*(1+k.passing/300);R(),S.vx=I/Mt*Dt*ht(.9,1.1),S.vy=ct/Mt*Dt*ht(.9,1.1)}function Z(k){const pt=D?0:ye,at=(1-k.shooting/100)*12,yt=Lo+ht(-at,at),vt=pt-k.x,I=yt-k.y,ct=Math.sqrt(vt*vt+I*I)||1,Mt=fl*(.85+k.shooting/600);R(),S.vx=vt/ct*Mt,S.vy=I/ct*Mt}function st(k){const pt=[...F];for(const at of pt)if(at.hasBall&&z(k,at)<hx){at.hasBall=!1,S.vx=ht(-3,3),S.vy=ht(-3,3);break}}function E(k,pt,at,yt,vt,I){const ct=St(),Mt=(ct==null?void 0:ct.team)===k.team,Dt=k.baseX,Lt=k.baseY,ee=lu*(.92+k.pace/500);let $t=Dt,te=Lt;if(ct===k){if(k.team==="home"?$t=D?10:190:$t=D?190:10,te=Lo+(k.y-Lo)*.5,(k.team==="home"?D?k.x<50:k.x>150:D?k.x>150:k.x<50)&&k.y>ls-12&&k.y<Dr+12){y(k);return}S.x=k.x+($t>k.x?2.5:-2.5),S.y=k.y,S.vx=0,S.vy=0}else if(Mt)if(["ST","LW","RW","CAM"].includes(k.pos)){const fe=k.team==="home"?D?-8:8:D?8:-8;$t=nt(k.baseX+fe,5,ye-5),te=Lt+Math.sin(T/40+k.idx)*5}else["CM","CDM"].includes(k.pos)?($t=ct?(ct.x+Dt)/2:Dt,te=Lt):($t=Dt,te=Lt);else if(k.pos==="GK")$t=I,te=nt(S.y,ls,Dr);else if(["CB","LB","RB"].includes(k.pos)){const fe=S.x,ie=S.y,Te=I;$t=nt(Te+(fe-Te)*.35,Math.min(Te+5,Te+50),Math.max(Te-5,Te-50)),te=nt(ie,5,fi-5)}else["CM","CDM"].includes(k.pos)?($t=S.x,te=S.y):($t=Dt*.7+100*.3,te=Lt);O(k,$t,te,ee)}function y(k){const pt=k.team==="home"?D?0:ye:D?ye:0,at=(1-k.shooting/100)*10,yt=Lo+ht(-at,at),vt=pt-k.x,I=yt-k.y,ct=Math.sqrt(vt*vt+I*I)||1;R(),S.vx=vt/ct*fl*.88,S.vy=I/ct*fl*.88}function O(k,pt,at,yt){const vt=pt-k.x,I=at-k.y,ct=Math.sqrt(vt*vt+I*I);if(ct<.4)return;const Mt=Math.min(yt,ct);k.x=nt(k.x+vt/ct*Mt,1,ye-1),k.y=nt(k.y+I/ct*Mt,1,fi-1)}function G(){const k=S.y>=ls&&S.y<=Dr;if(S.x<=0&&k){u.value++,m.value.push({team:"away",player:J("away"),minute:g.value}),lt("away");return}S.x>=ye&&k&&(h.value++,m.value.push({team:"home",player:J("home"),minute:g.value}),lt("home"))}let V={home:"Unknown",away:"Unknown"};function J(k){return V[k]}function lt(k){A=!0,H=au*2,p.value="overlay-goal",v.value={title:"⚽ GOAL!",subtitle:`${k==="home"?f.value:d.value} score!`,btn:null,action:null},setTimeout(()=>{v.value=null,A=!1,Q()},2e3)}function Q(k){const pt=[[4,40],[22,10],[22,30],[22,50],[22,70],[60,20],[60,40],[60,60],[85,15],[90,40],[85,65]],at=[[196,40],[178,70],[178,50],[178,30],[178,10],[140,60],[140,40],[140,20],[115,65],[110,40],[115,15]];M.forEach((yt,vt)=>{yt.x=D?ye-pt[vt][0]:pt[vt][0],yt.y=pt[vt][1],yt.hasBall=!1}),F.forEach((yt,vt)=>{yt.x=D?ye-at[vt][0]:at[vt][0],yt.y=at[vt][1],yt.hasBall=!1}),S.x=100,S.y=40,S.vx=0,S.vy=0,$=N(100,40)}function mt(){D=!0,v.value=null,A=!1,M.forEach(k=>{k.baseX=ye-k.baseX}),F.forEach(k=>{k.baseX=ye-k.baseX}),Q()}function Et(){var pt,at;W();const k={};m.value.forEach(yt=>{k[yt.player]=(k[yt.player]||0)+1}),x.value=Object.keys(k).sort((yt,vt)=>k[vt]-k[yt])[0]||((pt=[...M,...F].reduce((yt,vt)=>yt.name||vt.name)[0])==null?void 0:pt.name)||((at=M[0])==null?void 0:at.name)||"",a.value="fulltime"}function dt(){function k(){At(),b=requestAnimationFrame(k)}b=requestAnimationFrame(k)}function xt(){const k=S.x-n/2;return nt(k,0,ye-n)}function Ct(k,pt){const at=xt();return{x:(k-at)*e,y:pt*e}}function At(){if(!_)return;const k=xt();_.fillStyle="#2d7a2d",_.fillRect(0,0,Ro,Po);const pt=20*e;for(let Ve=0;Ve<ye;Ve+=20){const Mn=(Ve-k)*e;Mn+pt<0||Mn>Ro||(_.fillStyle=Ve%40===0?"rgba(0,0,0,.06)":"rgba(255,255,255,.02)",_.fillRect(Mn,0,pt,Po))}_.strokeStyle="rgba(255,255,255,.55)",_.lineWidth=1.5;const at=Ct(0,0),yt=Ct(ye,0),vt=Ct(0,fi);_.strokeRect(at.x,at.y+2,yt.x-at.x,vt.y-at.y-4);const I=Ct(100,0),ct=Ct(100,fi);Pt(_,I.x,I.y+2,ct.x,ct.y-2);const Mt=Ct(100,40);Vt(_,Mt.x,Mt.y,16*e);const Dt=22*e,Lt=(Dr-ls+16)*e,ee=Ct(0,ls-8).y,$t=Ct(0,0).x;_.strokeRect($t,ee,Dt,Lt);const te=Ct(ye-22,0).x;_.strokeRect(te,ee,Dt,Lt),_.strokeStyle="rgba(255,255,255,.7)";const fe=(Dr-ls)*e,ie=Ct(0,ls).y,Te=Ct(0,0).x-12;_.fillStyle="rgba(255,255,255,.06)",_.fillRect(Te,ie,12,fe),_.strokeRect(Te,ie,12,fe);const dn=Ct(ye,0).x;_.fillStyle="rgba(255,255,255,.06)",_.fillRect(dn,ie,12,fe),_.strokeRect(dn,ie,12,fe),[...M,...F].forEach(Ve=>{const{x:Mn,y:Gn}=Ct(Ve.x,Ve.y),An=nx*e;_.fillStyle="rgba(0,0,0,.3)",_.beginPath(),_.ellipse(Mn,Gn+An*.8,An*.9,An*.4,0,0,Math.PI*2),_.fill(),_.fillStyle=Ve.team==="home"?"#1a6fc4":"#c4241a",_.beginPath(),_.arc(Mn,Gn,An,0,Math.PI*2),_.fill(),Ve.team==="home"&&Ve.idx===$&&(_.strokeStyle="#fff",_.lineWidth=2,_.beginPath(),_.arc(Mn,Gn,An+2.5,0,Math.PI*2),_.stroke()),Ve.hasBall&&(_.fillStyle="#ffd700",_.beginPath(),_.arc(Mn+An*.8,Gn-An*.8,2.5,0,Math.PI*2),_.fill()),_.fillStyle="#fff",_.font=`bold ${An*.85}px Arial`,_.textAlign="center",_.textBaseline="middle",_.fillText(Ve.idx+1,Mn,Gn)});const{x:Cr,y:Rr}=Ct(S.x,S.y),Is=ix*e;_.fillStyle="rgba(0,0,0,.35)",_.beginPath(),_.ellipse(Cr,Rr+Is,Is,Is*.35,0,0,Math.PI*2),_.fill(),_.fillStyle="#fff",_.beginPath(),_.arc(Cr,Rr,Is,0,Math.PI*2),_.fill(),_.strokeStyle="#333",_.lineWidth=.8,_.stroke()}function Pt(k,pt,at,yt,vt){k.beginPath(),k.moveTo(pt,at),k.lineTo(yt,vt),k.stroke()}function Vt(k,pt,at,yt){k.beginPath(),k.arc(pt,at,yt,0,Math.PI*2),k.stroke()}return(k,pt)=>(Ot(),Bt("div",w0,[a.value==="select"?(Ot(),Bt("div",T0,[K("header",{class:"screen-header"},[K("button",{class:"back-btn",onClick:bt},"← Back"),pt[2]||(pt[2]=K("h1",null,"Play the Game",-1)),pt[3]||(pt[3]=K("p",null,"Choose your team and opponent",-1))]),K("div",A0,[K("div",C0,[pt[4]||(pt[4]=K("h2",{class:"picker-title"},"🎮 Your Team",-1)),K("div",R0,[(Ot(!0),Bt(be,null,xn(s.value,at=>(Ot(),Bt("button",{key:at.name,class:fn(["club-btn",{selected:r.value===at.name,blocked:o.value===at.name}]),disabled:o.value===at.name,onClick:yt=>r.value=at.name},[K("span",L0,Ft(at.name),1),K("span",I0,Ft(at.league),1)],10,P0))),128))])]),K("div",N0,[pt[5]||(pt[5]=K("div",{class:"vs-badge"},"VS",-1)),K("button",{class:"kickoff-btn",disabled:!r.value||!o.value,onClick:gt}," Kick Off ⚽ ",8,D0)]),K("div",U0,[pt[6]||(pt[6]=K("h2",{class:"picker-title"},"🤖 Opponent",-1)),K("div",F0,[(Ot(!0),Bt(be,null,xn(s.value,at=>(Ot(),Bt("button",{key:at.name,class:fn(["club-btn",{selected:o.value===at.name,blocked:r.value===at.name}]),disabled:r.value===at.name,onClick:yt=>o.value=at.name},[K("span",B0,Ft(at.name),1),K("span",z0,Ft(at.league),1)],10,O0))),128))])])])])):a.value==="match"?(Ot(),Bt("div",{key:1,class:"match-wrapper",onKeydown:pt[1]||(pt[1]=qv(()=>{},["prevent"]))},[K("div",k0,[K("span",H0,Ft(f.value),1),K("div",V0,[K("span",G0,Ft(h.value)+" – "+Ft(u.value),1),K("span",W0,Ft(g.value)+"'",1)]),K("span",q0,Ft(d.value),1)]),K("div",{class:"canvas-wrap",ref_key:"canvasWrapRef",ref:c},[K("canvas",{ref_key:"canvasRef",ref:l,width:Ro,height:Po},null,512),v.value?(Ot(),Bt("div",{key:0,class:fn(["overlay",p.value])},[K("div",X0,[K("div",Y0,Ft(v.value.title),1),v.value.subtitle?(Ot(),Bt("div",$0,Ft(v.value.subtitle),1)):En("",!0),v.value.btn?(Ot(),Bt("button",{key:1,class:"overlay-btn",onClick:pt[0]||(pt[0]=(...at)=>v.value.action&&v.value.action(...at))},Ft(v.value.btn),1)):En("",!0)])],2)):En("",!0)],512),pt[7]||(pt[7]=pc('<div class="controls-bar" data-v-32f0e302><span data-v-32f0e302><kbd data-v-32f0e302>↑↓←→</kbd> Move</span><span data-v-32f0e302><kbd data-v-32f0e302>SPC</kbd> Pass</span><span data-v-32f0e302><kbd data-v-32f0e302>Z</kbd> Shoot</span><span data-v-32f0e302><kbd data-v-32f0e302>X</kbd> Sprint</span><span data-v-32f0e302><kbd data-v-32f0e302>S</kbd> Tackle</span><span data-v-32f0e302><kbd data-v-32f0e302>Esc</kbd> Pause</span></div>',1))],32)):a.value==="fulltime"?(Ot(),Bt("div",j0,[K("div",K0,[pt[9]||(pt[9]=K("h2",null,"Full Time",-1)),K("div",Z0,Ft(h.value)+" – "+Ft(u.value),1),K("div",J0,Ft(f.value)+" vs "+Ft(d.value),1),m.value.length?(Ot(),Bt("div",Q0,[(Ot(!0),Bt(be,null,xn(m.value,at=>(Ot(),Bt("div",{key:at.player+at.minute,class:"ft-scorer"},[Ki(" ⚽ "+Ft(at.player)+" ",1),K("span",tx,Ft(at.minute)+"'",1)]))),128))])):En("",!0),x.value?(Ot(),Bt("div",ex,[pt[8]||(pt[8]=Ki(" 🏅 Man of the Match: ",-1)),K("strong",null,Ft(x.value),1)])):En("",!0),K("button",{class:"back-btn",onClick:bt},"Back to Menu")])])):En("",!0)]))}},fx=is(ux,[["__scopeId","data-v-32f0e302"]]),dx={class:"ev-minute"},px={class:"ev-icon"},mx={class:"ev-team"},gx={class:"ev-player"},vx={key:0,class:"ev-detail"},_x={key:0,class:"empty"},xx={__name:"EventFeed",props:{events:{type:Array,default:()=>[]}},setup(i){const t=i,e=ne(null),n={goal:"⚽",yellow:"🟨",red:"🟥",save:"🧤",miss:"💨",substitution:"🔄",injury:"🤕"};function s(r){return r?r.split(" ").slice(0,2).join(" "):""}return Zr(()=>t.events.length,async()=>{await pr(),e.value&&(e.value.scrollTop=e.value.scrollHeight)}),(r,o)=>(Ot(),Bt("div",{class:"event-feed",ref_key:"feedEl",ref:e},[(Ot(!0),Bt(be,null,xn(i.events,(a,l)=>(Ot(),Bt("div",{key:l,class:fn(["event-row",a.type])},[K("span",dx,Ft(a.minute)+"'",1),K("span",px,Ft(n[a.type]||"•"),1),K("span",mx,Ft(s(a.team)),1),K("span",gx,Ft(a.player),1),a.detail?(Ot(),Bt("span",vx,"— "+Ft(a.detail),1)):En("",!0)],2))),128)),i.events.length===0?(Ot(),Bt("div",_x,"Waiting for kick-off…")):En("",!0)],512))}},yx=is(xx,[["__scopeId","data-v-8a17ad14"]]),Mx={class:"postmatch"},Sx={class:"score-banner"},bx={class:"team-block"},Ex={class:"team-name"},wx={class:"score-center"},Tx={class:"final-score"},Ax={class:"team-block away"},Cx={class:"team-name"},Rx={key:0,class:"section"},Px={class:"scorers-list"},Lx={class:"scorer-name"},Ix={class:"scorer-minute"},Nx={class:"section stats-grid"},Dx={class:"section ratings-grid"},Ux={class:"ratings-cols"},Fx={class:"ratings-col"},Ox={class:"r-name"},Bx={class:"r-bar-wrap"},zx={class:"r-val"},kx={class:"ratings-col"},Hx={class:"r-name"},Vx={class:"r-bar-wrap"},Gx={class:"r-val"},Wx={key:1,class:"section motm-section"},qx={class:"motm-card"},Xx={class:"motm-face"},Yx=["src"],$x={key:1,viewBox:"0 0 80 80",class:"motm-svg"},jx={class:"motm-info"},Kx={class:"motm-name"},Zx={class:"motm-rating"},Jx={components:{StatBar:{props:["label","home","away","unit","total"],template:`
        <div class="stat-bar-row">
          <span class="sb-val">{{ home }}{{ unit || '' }}</span>
          <span class="sb-label">{{ label }}</span>
          <span class="sb-val away">{{ away }}{{ unit || '' }}</span>
          <div class="sb-track">
            <div class="sb-fill-home" :style="{ width: homeW + '%' }"></div>
            <div class="sb-fill-away" :style="{ width: awayW + '%' }"></div>
          </div>
        </div>
      `,computed:{homeW(){const i=this.total||this.home+this.away;return i?this.home/i*100:50},awayW(){const i=this.total||this.home+this.away;return i?this.away/i*100:50}}}}},Qx=Object.assign(Jx,{__name:"PostMatch",props:{result:{type:Object,required:!0}},emits:["back"],setup(i){const t=i,e=ne(!0),n=sn(()=>[...t.result.scorers||[]].sort((a,l)=>a.minute-l.minute)),s=sn(()=>t.result.ratings.filter(a=>a.team==="home").slice(0,5)),r=sn(()=>t.result.ratings.filter(a=>a.team==="away").slice(0,5));function o(a){return a>=8?"#27ae60":a>=6.5?"#f39c12":"#e74c3c"}return(a,l)=>{var h;const c=qd("StatBar");return Ot(),Bt("div",Mx,[K("div",Sx,[K("div",bx,[K("span",Ex,Ft(i.result.home),1)]),K("div",wx,[K("span",Tx,Ft(i.result.score.home)+" – "+Ft(i.result.score.away),1),l[2]||(l[2]=K("span",{class:"full-time-label"},"Full Time",-1))]),K("div",Ax,[K("span",Cx,Ft(i.result.away),1)])]),n.value.length?(Ot(),Bt("div",Rx,[l[3]||(l[3]=K("h3",{class:"section-title"},"⚽ Goal Scorers",-1)),K("div",Px,[(Ot(!0),Bt(be,null,xn(n.value,u=>(Ot(),Bt("div",{key:u.player+u.minute,class:"scorer-row"},[K("span",{class:fn(["scorer-team-dot",u.team])},null,2),K("span",Lx,Ft(u.player),1),K("span",Ix,Ft(u.minute)+"'",1)]))),128))])])):En("",!0),K("div",Nx,[l[4]||(l[4]=K("h3",{class:"section-title"},"📊 Match Stats",-1)),Pe(c,{label:"Possession",home:i.result.possession.home,away:i.result.possession.away,unit:"%"},null,8,["home","away"]),Pe(c,{label:"Shots",home:i.result.shots.home,away:i.result.shots.away,total:i.result.shots.home+i.result.shots.away},null,8,["home","away","total"]),Pe(c,{label:"On Target",home:i.result.shots_on_target.home,away:i.result.shots_on_target.away,total:i.result.shots.home+i.result.shots.away},null,8,["home","away","total"])]),K("div",Dx,[l[5]||(l[5]=K("h3",{class:"section-title"},"⭐ Player Ratings",-1)),K("div",Ux,[K("div",Fx,[K("h4",null,Ft(i.result.home),1),(Ot(!0),Bt(be,null,xn(s.value,u=>(Ot(),Bt("div",{key:u.player,class:"rating-row"},[K("span",Ox,Ft(u.player),1),K("div",Bx,[K("div",{class:"r-bar",style:es({width:u.rating/10*100+"%",background:o(u.rating)})},null,4)]),K("span",zx,Ft(u.rating.toFixed(1)),1)]))),128))]),K("div",kx,[K("h4",null,Ft(i.result.away),1),(Ot(!0),Bt(be,null,xn(r.value,u=>(Ot(),Bt("div",{key:u.player,class:"rating-row"},[K("span",Hx,Ft(u.player),1),K("div",Vx,[K("div",{class:"r-bar",style:es({width:u.rating/10*100+"%",background:o(u.rating)})},null,4)]),K("span",Gx,Ft(u.rating.toFixed(1)),1)]))),128))])])]),(h=i.result.motm)!=null&&h.player?(Ot(),Bt("div",Wx,[l[7]||(l[7]=K("h3",{class:"section-title"},"🏅 Man of the Match",-1)),K("div",qx,[K("div",Xx,[e.value&&i.result.motm.face_url?(Ot(),Bt("img",{key:0,src:i.result.motm.face_url,onError:l[0]||(l[0]=u=>e.value=!1),class:"motm-img"},null,40,Yx)):(Ot(),Bt("svg",$x,[...l[6]||(l[6]=[K("circle",{cx:"40",cy:"28",r:"18",fill:"rgba(255,215,0,.5)"},null,-1),K("ellipse",{cx:"40",cy:"72",rx:"26",ry:"20",fill:"rgba(255,215,0,.5)"},null,-1)])]))]),K("div",jx,[K("div",Kx,Ft(i.result.motm.player),1),K("div",Zx,Ft(i.result.motm.rating.toFixed(1))+" / 10",1)])])])):En("",!0),K("button",{class:"back-btn",onClick:l[1]||(l[1]=u=>a.$emit("back"))},"← Back to Menu")])}}}),ty=is(Qx,[["__scopeId","data-v-c276b6ca"]]),ey={class:"watch-view"},ny={key:0,class:"screen select-screen"},iy={class:"team-pickers"},sy={class:"picker-col"},ry={class:"club-grid"},oy=["disabled","onClick"],ay={class:"club-name"},ly={class:"club-league"},cy={class:"vs-col"},hy=["disabled"],uy={class:"picker-col"},fy={class:"club-grid"},dy=["disabled","onClick"],py={class:"club-name"},my={class:"club-league"},gy={key:1,class:"screen match-screen"},vy={class:"match-scorebar"},_y={class:"team-name"},xy={class:"scorebox"},yy={class:"team-name"},My={class:"feed-wrap"},Sy={class:"match-footer"},by={class:"progress-bar"},Ey={class:"progress-label"},wy={key:2,class:"screen"},Ty={key:3,class:"screen loading-screen"},Ay={__name:"WatchView",setup(i){const t=Va(),e=ne([]),n=ne(""),s=ne(""),r=ne("select"),o=ne(null),a=ne([]),l=sn(()=>o.value?a.value.length/o.value.events.length*100:0);mr(async()=>{try{const f=await fetch("/api/clubs");e.value=await f.json()}catch{}});function c(){t.push("/")}async function h(){if(!(!n.value||!s.value)){r.value="loading";try{const f=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({home:n.value,away:s.value})});o.value=await f.json(),r.value="match",u()}catch{r.value="select",alert("Simulation failed — is the backend running?")}}}function u(){const f=o.value.events;let d=0;const g=setInterval(()=>{if(d>=f.length){clearInterval(g),setTimeout(()=>{r.value="postmatch"},1200);return}a.value.push(f[d++])},90)}return(f,d)=>(Ot(),Bt("div",ey,[r.value==="select"?(Ot(),Bt("div",ny,[K("header",{class:"screen-header"},[K("button",{class:"back-btn",onClick:c},"← Back"),d[0]||(d[0]=K("h1",null,"Watch the Play",-1)),d[1]||(d[1]=K("p",null,"Pick two clubs and watch the simulation unfold",-1))]),K("div",iy,[K("div",sy,[d[2]||(d[2]=K("h2",{class:"picker-title"},"🏠 Home Team",-1)),K("div",ry,[(Ot(!0),Bt(be,null,xn(e.value,g=>(Ot(),Bt("button",{key:g.name,class:fn(["club-btn",{selected:n.value===g.name,blocked:s.value===g.name}]),disabled:s.value===g.name,onClick:v=>n.value=g.name},[K("span",ay,Ft(g.name),1),K("span",ly,Ft(g.league),1)],10,oy))),128))])]),K("div",cy,[d[3]||(d[3]=K("div",{class:"vs-badge"},"VS",-1)),K("button",{class:"kickoff-btn",disabled:!n.value||!s.value,onClick:h}," Kick Off ⚽ ",8,hy)]),K("div",uy,[d[4]||(d[4]=K("h2",{class:"picker-title"},"✈️ Away Team",-1)),K("div",fy,[(Ot(!0),Bt(be,null,xn(e.value,g=>(Ot(),Bt("button",{key:g.name,class:fn(["club-btn",{selected:s.value===g.name,blocked:n.value===g.name}]),disabled:n.value===g.name,onClick:v=>s.value=g.name},[K("span",py,Ft(g.name),1),K("span",my,Ft(g.league),1)],10,dy))),128))])])])])):r.value==="match"?(Ot(),Bt("div",gy,[K("div",vy,[K("span",_y,Ft(o.value.home),1),K("span",xy,Ft(o.value.score.home)+" – "+Ft(o.value.score.away),1),K("span",yy,Ft(o.value.away),1)]),K("div",My,[Pe(yx,{events:a.value},null,8,["events"])]),K("div",Sy,[K("div",by,[K("div",{class:"progress-fill",style:es({width:l.value+"%"})},null,4)]),K("span",Ey,Ft(a.value.length)+" / "+Ft(o.value.events.length)+" events",1)])])):r.value==="postmatch"?(Ot(),Bt("div",wy,[Pe(ty,{result:o.value,onBack:c},null,8,["result"])])):(Ot(),Bt("div",Ty,[...d[5]||(d[5]=[K("div",{class:"spinner"},null,-1),K("p",null,"Simulating match…",-1)])]))]))}},Cy=is(Ay,[["__scopeId","data-v-67296064"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="163",Ry=0,hu=1,Py=2,Rp=1,Pp=2,bi=3,Ni=0,on=1,ti=2,Zi=0,hr=1,uu=2,fu=3,du=4,Ly=5,xs=100,Iy=101,Ny=102,Dy=103,Uy=104,Fy=200,Oy=201,By=202,zy=203,Mc=204,Sc=205,ky=206,Hy=207,Vy=208,Gy=209,Wy=210,qy=211,Xy=212,Yy=213,$y=214,jy=0,Ky=1,Zy=2,ya=3,Jy=4,Qy=5,tM=6,eM=7,jc=0,nM=1,iM=2,Ji=0,sM=1,rM=2,oM=3,Lp=4,aM=5,lM=6,cM=7,Ip=300,xr=301,yr=302,bc=303,Ec=304,Ga=306,wc=1e3,bs=1001,Tc=1002,un=1003,hM=1004,Io=1005,Dn=1006,dl=1007,Es=1008,Qi=1009,uM=1010,fM=1011,Np=1012,Dp=1013,Mr=1014,Ci=1015,Ma=1016,Up=1017,Fp=1018,yo=1020,dM=35902,pM=1021,mM=1022,ii=1023,gM=1024,vM=1025,ur=1026,mo=1027,Op=1028,Bp=1029,_M=1030,zp=1031,kp=1033,pl=33776,ml=33777,gl=33778,vl=33779,pu=35840,mu=35841,gu=35842,vu=35843,Hp=36196,_u=37492,xu=37496,yu=37808,Mu=37809,Su=37810,bu=37811,Eu=37812,wu=37813,Tu=37814,Au=37815,Cu=37816,Ru=37817,Pu=37818,Lu=37819,Iu=37820,Nu=37821,_l=36492,Du=36494,Uu=36495,xM=36283,Fu=36284,Ou=36285,Bu=36286,yM=3200,MM=3201,Wa=0,SM=1,ji="",Nn="srgb",ss="srgb-linear",Kc="display-p3",qa="display-p3-linear",Sa="linear",ge="srgb",ba="rec709",Ea="p3",Ds=7680,zu=519,bM=512,EM=513,wM=514,Vp=515,TM=516,AM=517,CM=518,RM=519,ku=35044,Hu="300 es",Ri=2e3,wa=2001;class wr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vu=1234567;const io=Math.PI/180,Sr=180/Math.PI;function Tr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Zc(i,t){return(i%t+t)%t}function PM(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function LM(i,t,e){return i!==t?(e-i)/(t-i):0}function so(i,t,e){return(1-e)*i+e*t}function IM(i,t,e,n){return so(i,t,1-Math.exp(-e*n))}function NM(i,t=1){return t-Math.abs(Zc(i,t*2)-t)}function DM(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function UM(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function FM(i,t){return i+Math.floor(Math.random()*(t-i+1))}function OM(i,t){return i+Math.random()*(t-i)}function BM(i){return i*(.5-Math.random())}function zM(i){i!==void 0&&(Vu=i);let t=Vu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kM(i){return i*io}function HM(i){return i*Sr}function VM(i){return(i&i-1)===0&&i!==0}function GM(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function WM(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qM(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ir(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ta={DEG2RAD:io,RAD2DEG:Sr,generateUUID:Tr,clamp:ze,euclideanModulo:Zc,mapLinear:PM,inverseLerp:LM,lerp:so,damp:IM,pingpong:NM,smoothstep:DM,smootherstep:UM,randInt:FM,randFloat:OM,randFloatSpread:BM,seededRandom:zM,degToRad:kM,radToDeg:HM,isPowerOfTwo:VM,ceilPowerOfTwo:GM,floorPowerOfTwo:WM,setQuaternionFromProperEuler:qM,normalize:Je,denormalize:ir};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,s,r,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],p=s[3],m=s[6],x=s[1],_=s[4],b=s[7],L=s[2],T=s[5],A=s[8];return r[0]=o*v+a*x+l*L,r[3]=o*p+a*_+l*T,r[6]=o*m+a*b+l*A,r[1]=c*v+h*x+u*L,r[4]=c*p+h*_+u*T,r[7]=c*m+h*b+u*A,r[2]=f*v+d*x+g*L,r[5]=f*p+d*_+g*T,r[8]=f*m+d*b+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xl.makeScale(t,e)),this}rotate(t){return this.premultiply(xl.makeRotation(-t)),this}translate(t,e){return this.premultiply(xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xl=new Qt;function Gp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function XM(){const i=Aa("canvas");return i.style.display="block",i}const Gu={};function YM(i){i in Gu||(Gu[i]=!0,console.warn(i))}const Wu=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qu=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),No={[ss]:{transfer:Sa,primaries:ba,toReference:i=>i,fromReference:i=>i},[Nn]:{transfer:ge,primaries:ba,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[qa]:{transfer:Sa,primaries:Ea,toReference:i=>i.applyMatrix3(qu),fromReference:i=>i.applyMatrix3(Wu)},[Kc]:{transfer:ge,primaries:Ea,toReference:i=>i.convertSRGBToLinear().applyMatrix3(qu),fromReference:i=>i.applyMatrix3(Wu).convertLinearToSRGB()}},$M=new Set([ss,qa]),he={enabled:!0,_workingColorSpace:ss,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$M.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=No[t].toReference,s=No[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return No[i].primaries},getTransfer:function(i){return i===ji?Sa:No[i].transfer}};function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Us;class jM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Us===void 0&&(Us=Aa("canvas")),Us.width=t.width,Us.height=t.height;const n=Us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fr(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fr(e[n]/255)*255):e[n]=fr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let KM=0;class Wp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Tr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ml(s[o].image)):r.push(Ml(s[o]))}else r=Ml(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZM=0;class Ke extends wr{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=bs,s=bs,r=Dn,o=Es,a=ii,l=Qi,c=Ke.DEFAULT_ANISOTROPY,h=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Tr(),this.name="",this.source=new Wp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ip)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wc:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case Tc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wc:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case Tc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Ip;Ke.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,e=0,n=0,s=1){ke.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,b=(d+1)/2,L=(m+1)/2,T=(h+f)/4,A=(u+v)/4,D=(g+p)/4;return _>b&&_>L?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=A/n):b>L?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=D/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JM extends wr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends JM{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qp extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class QM extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Mo=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let p=1-a;const m=l*f+c*d+h*g+u*v,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const L=Math.sqrt(_),T=Math.atan2(L,m*x);p=Math.sin(p*T)/L,a=Math.sin(a*T)/L}const b=a*x;if(l=l*p+f*b,c=c*p+d*b,h=h*p+g*b,u=u*p+v*b,p===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sl.copy(this).projectOnVector(t),this.sub(Sl)}reflect(t){return this.sub(Sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sl=new q,Xu=new Mo;class Ps{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Do.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(t.matrixWorld),this.union(Do)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),Uo.subVectors(this.max,Ur),Fs.subVectors(t.a,Ur),Os.subVectors(t.b,Ur),Bs.subVectors(t.c,Ur),Bi.subVectors(Os,Fs),zi.subVectors(Bs,Os),cs.subVectors(Fs,Bs);let e=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-cs.z,cs.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,cs.z,0,-cs.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-cs.y,cs.x,0];return!bl(e,Fs,Os,Bs,Uo)||(e=[1,0,0,0,1,0,0,0,1],!bl(e,Fs,Os,Bs,Uo))?!1:(Fo.crossVectors(Bi,zi),e=[Fo.x,Fo.y,Fo.z],bl(e,Fs,Os,Bs,Uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const di=[new q,new q,new q,new q,new q,new q,new q,new q],Cn=new q,Do=new Ps,Fs=new q,Os=new q,Bs=new q,Bi=new q,zi=new q,cs=new q,Ur=new q,Uo=new q,Fo=new q,hs=new q;function bl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hs.fromArray(i,r);const a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=t.dot(hs),c=e.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const tS=new Ps,Fr=new q,El=new q;let So=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tS.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);const e=Fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(El.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(El)),this.expandByPoint(Fr.copy(t.center).sub(El))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const pi=new q,wl=new q,Oo=new q,ki=new q,Tl=new q,Bo=new q,Al=new q;let eS=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wl.copy(t).add(e).multiplyScalar(.5),Oo.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(wl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Oo),a=ki.dot(this.direction),l=-ki.dot(Oo),c=ki.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wl).addScaledVector(Oo,f),d}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,s,r){Tl.subVectors(e,t),Bo.subVectors(n,t),Al.crossVectors(Tl,Bo);let o=this.direction.dot(Al),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,t);const l=a*this.direction.dot(Bo.crossVectors(ki,Bo));if(l<0)return null;const c=a*this.direction.dot(Tl.cross(ki));if(c<0||l+c>o)return null;const h=-a*ki.dot(Al);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ve{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,v,p){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,v,p)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),r=1/zs.setFromMatrixColumn(t,1).length(),o=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nS,t,iS)}lookAt(t,e,n){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Hi.crossVectors(n,mn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Hi.crossVectors(n,mn)),Hi.normalize(),zo.crossVectors(mn,Hi),s[0]=Hi.x,s[4]=zo.x,s[8]=mn.x,s[1]=Hi.y,s[5]=zo.y,s[9]=mn.y,s[2]=Hi.z,s[6]=zo.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],x=n[3],_=n[7],b=n[11],L=n[15],T=s[0],A=s[4],D=s[8],S=s[12],M=s[1],F=s[5],$=s[9],P=s[13],H=s[2],U=s[6],B=s[10],et=s[14],z=s[3],nt=s[7],ht=s[11],bt=s[15];return r[0]=o*T+a*M+l*H+c*z,r[4]=o*A+a*F+l*U+c*nt,r[8]=o*D+a*$+l*B+c*ht,r[12]=o*S+a*P+l*et+c*bt,r[1]=h*T+u*M+f*H+d*z,r[5]=h*A+u*F+f*U+d*nt,r[9]=h*D+u*$+f*B+d*ht,r[13]=h*S+u*P+f*et+d*bt,r[2]=g*T+v*M+p*H+m*z,r[6]=g*A+v*F+p*U+m*nt,r[10]=g*D+v*$+p*B+m*ht,r[14]=g*S+v*P+p*et+m*bt,r[3]=x*T+_*M+b*H+L*z,r[7]=x*A+_*F+b*U+L*nt,r[11]=x*D+_*$+b*B+L*ht,r[15]=x*S+_*P+b*et+L*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+v*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],p=t[14],m=t[15],x=u*p*c-v*f*c+v*l*d-a*p*d-u*l*m+a*f*m,_=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,b=h*v*c-g*u*c+g*a*d-o*v*d-h*a*m+o*u*m,L=g*u*l-h*v*l-g*a*f+o*v*f+h*a*p-o*u*p,T=e*x+n*_+s*b+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=x*A,t[1]=(v*f*r-u*p*r-v*s*d+n*p*d+u*s*m-n*f*m)*A,t[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*m+n*l*m)*A,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*A,t[4]=_*A,t[5]=(h*p*r-g*f*r+g*s*d-e*p*d-h*s*m+e*f*m)*A,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*A,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*A,t[8]=b*A,t[9]=(g*u*r-h*v*r-g*n*d+e*v*d+h*n*m-e*u*m)*A,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*m+e*a*m)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*A,t[12]=L*A,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*p+e*u*p)*A,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*p-e*a*p)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,v=o*h,p=o*u,m=a*u,x=l*c,_=l*h,b=l*u,L=n.x,T=n.y,A=n.z;return s[0]=(1-(v+m))*L,s[1]=(d+b)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(d-b)*T,s[5]=(1-(f+m))*T,s[6]=(p+x)*T,s[7]=0,s[8]=(g+_)*A,s[9]=(p-x)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=zs.set(s[0],s[1],s[2]).length();const o=zs.set(s[4],s[5],s[6]).length(),a=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Rn.copy(this);const c=1/r,h=1/o,u=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,e.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ri){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===Ri)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ri){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h;let g,v;if(a===Ri)g=(o+r)*u,v=-2*u;else if(a===wa)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zs=new q,Rn=new ve,nS=new q(0,0,0),iS=new q(1,1,1),Hi=new q,zo=new q,mn=new q,Yu=new ve,$u=new Mo;class Hn{constructor(t=0,e=0,n=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $u.setFromEuler(this),this.setFromQuaternion($u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sS=0;const ju=new q,ks=new Mo,mi=new ve,ko=new q,Or=new q,rS=new q,oS=new Mo,Ku=new q(1,0,0),Zu=new q(0,1,0),Ju=new q(0,0,1),Qu={type:"added"},aS={type:"removed"},Hs={type:"childadded",child:null},Cl={type:"childremoved",child:null};class He extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new q,e=new Hn,n=new Mo,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Qt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Ku,t)}rotateY(t){return this.rotateOnAxis(Zu,t)}rotateZ(t){return this.rotateOnAxis(Ju,t)}translateOnAxis(t,e){return ju.copy(t).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ku,t)}translateY(t){return this.translateOnAxis(Zu,t)}translateZ(t){return this.translateOnAxis(Ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ko.copy(t):ko.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Or,ko,this.up):mi.lookAt(ko,Or,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(mi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qu),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(aS),Cl.child=t,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qu),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,rS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,oS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}He.DEFAULT_UP=new q(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new q,gi=new q,Rl=new q,vi=new q,Vs=new q,Gs=new q,tf=new q,Pl=new q,Ll=new q,Il=new q;class ei{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),gi.subVectors(n,e),Rl.subVectors(t,e);const o=Pn.dot(Pn),a=Pn.dot(gi),l=Pn.dot(Rl),c=gi.dot(gi),h=gi.dot(Rl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),gi.subVectors(t,e),Pn.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Pn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ei.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Vs.subVectors(s,n),Gs.subVectors(r,n),Pl.subVectors(t,n);const l=Vs.dot(Pl),c=Gs.dot(Pl);if(l<=0&&c<=0)return e.copy(n);Ll.subVectors(t,s);const h=Vs.dot(Ll),u=Gs.dot(Ll);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Vs,o);Il.subVectors(t,r);const d=Vs.dot(Il),g=Gs.dot(Il);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Gs,a);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return tf.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(tf,a);const m=1/(p+v+f);return o=v*m,a=f*m,e.copy(n).addScaledVector(Vs,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function Nl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Zc(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Nl(o,r,t+1/3),this.g=Nl(o,r,t),this.b=Nl(o,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Nn){const n=Yp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}copyLinearToSRGB(t){return this.r=yl(t.r),this.g=yl(t.g),this.b=yl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Nn){return he.fromWorkingColorSpace(Xe.copy(this),t),Math.round(ze(Xe.r*255,0,255))*65536+Math.round(ze(Xe.g*255,0,255))*256+Math.round(ze(Xe.b*255,0,255))}getHexString(t=Nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Nn){he.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==Nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Ho);const n=so(Vi.h,Ho.h,e),s=so(Vi.s,Ho.s,e),r=so(Vi.l,Ho.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new kt;kt.NAMES=Yp;let lS=0,Ls=class extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=hr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mc&&(n.blendSrc=this.blendSrc),this.blendDst!==Sc&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class go extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new q,Vo=new It;class Bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ku,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return YM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vo.fromBufferAttribute(this,e),Vo.applyMatrix3(t),this.setXY(e,Vo.x,Vo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ku&&(t.usage=this.usage),t}}class $p extends Bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jp extends Bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends Bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cS=0;const bn=new ve,Dl=new He,Ws=new q,gn=new Ps,Br=new Ps,Oe=new q;class Tn extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gp(t)?jp:$p)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return Dl.lookAt(t),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(gn.min,Br.min),gn.expandByPoint(Oe),Oe.addVectors(gn.max,Br.max),gn.expandByPoint(Oe)):(gn.expandByPoint(Br.min),gn.expandByPoint(Br.max))}gn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(t,c),Oe.add(Ws)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new q,l[D]=new q;const c=new q,h=new q,u=new q,f=new It,d=new It,g=new It,v=new q,p=new q;function m(D,S,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(F),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(F),a[D].add(v),a[S].add(v),a[M].add(v),l[D].add(p),l[S].add(p),l[M].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let D=0,S=x.length;D<S;++D){const M=x[D],F=M.start,$=M.count;for(let P=F,H=F+$;P<H;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const _=new q,b=new q,L=new q,T=new q;function A(D){L.fromBufferAttribute(s,D),T.copy(L);const S=a[D];_.copy(S),_.sub(L.multiplyScalar(L.dot(S))).normalize(),b.crossVectors(T,S);const F=b.dot(l[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,F)}for(let D=0,S=x.length;D<S;++D){const M=x[D],F=M.start,$=M.count;for(let P=F,H=F+$;P<H;P+=3)A(t.getX(P+0)),A(t.getX(P+1)),A(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,h=new q,u=new q;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Bn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Tn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ef=new ve,us=new eS,Go=new So,nf=new q,qs=new q,Xs=new q,Ys=new q,Ul=new q,Wo=new q,qo=new It,Xo=new It,Yo=new It,sf=new q,rf=new q,of=new q,$o=new q,jo=new q;class ue extends He{constructor(t=new Tn,e=new go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ul.fromBufferAttribute(u,t),o?Wo.addScaledVector(Ul,h):Wo.addScaledVector(Ul.sub(e),h))}e.add(Wo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),us.copy(t.ray).recast(t.near),!(Go.containsPoint(us.origin)===!1&&(us.intersectSphere(Go,nf)===null||us.origin.distanceToSquared(nf)>(t.far-t.near)**2))&&(ef.copy(r).invert(),us.copy(t.ray).applyMatrix4(ef),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),_=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,L=_;b<L;b+=3){const T=a.getX(b),A=a.getX(b+1),D=a.getX(b+2);s=Ko(this,m,t,n,c,h,u,T,A,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const x=a.getX(p),_=a.getX(p+1),b=a.getX(p+2);s=Ko(this,o,t,n,c,h,u,x,_,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),_=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,L=_;b<L;b+=3){const T=b,A=b+1,D=b+2;s=Ko(this,m,t,n,c,h,u,T,A,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const x=p,_=p+1,b=p+2;s=Ko(this,o,t,n,c,h,u,x,_,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function hS(i,t,e,n,s,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ni,a),l===null)return null;jo.copy(a),jo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(jo);return c<e.near||c>e.far?null:{distance:c,point:jo.clone(),object:i}}function Ko(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,qs),i.getVertexPosition(l,Xs),i.getVertexPosition(c,Ys);const h=hS(i,t,e,n,qs,Xs,Ys,$o);if(h){s&&(qo.fromBufferAttribute(s,a),Xo.fromBufferAttribute(s,l),Yo.fromBufferAttribute(s,c),h.uv=ei.getInterpolation($o,qs,Xs,Ys,qo,Xo,Yo,new It)),r&&(qo.fromBufferAttribute(r,a),Xo.fromBufferAttribute(r,l),Yo.fromBufferAttribute(r,c),h.uv1=ei.getInterpolation($o,qs,Xs,Ys,qo,Xo,Yo,new It)),o&&(sf.fromBufferAttribute(o,a),rf.fromBufferAttribute(o,l),of.fromBufferAttribute(o,c),h.normal=ei.getInterpolation($o,qs,Xs,Ys,sf,rf,of,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new q,materialIndex:0};ei.getNormal(qs,Xs,Ys,u.normal),h.face=u}return h}class ts extends Tn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function g(v,p,m,x,_,b,L,T,A,D,S){const M=b/A,F=L/D,$=b/2,P=L/2,H=T/2,U=A+1,B=D+1;let et=0,z=0;const nt=new q;for(let ht=0;ht<B;ht++){const bt=ht*F-P;for(let gt=0;gt<U;gt++){const qt=gt*M-$;nt[v]=qt*x,nt[p]=bt*_,nt[m]=H,c.push(nt.x,nt.y,nt.z),nt[v]=0,nt[p]=0,nt[m]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(gt/A),u.push(1-ht/D),et+=1}}for(let ht=0;ht<D;ht++)for(let bt=0;bt<A;bt++){const gt=f+bt+U*ht,qt=f+bt+U*(ht+1),ot=f+(bt+1)+U*(ht+1),_t=f+(bt+1)+U*ht;l.push(gt,qt,_t),l.push(qt,ot,_t),z+=6}a.addGroup(d,z,S),d+=z,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function br(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=br(i[e]);for(const s in n)t[s]=n[s]}return t}function uS(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const fS={clone:br,merge:Qe};var dS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dS,this.fragmentShader=pS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=uS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zp extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new q,af=new It,lf=new It;class vn extends Zp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,af,lf),e.subVectors(lf,af)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(io*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $s=-90,js=1;class mS extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn($s,js,t,e);s.layers=this.layers,this.add(s);const r=new vn($s,js,t,e);r.layers=this.layers,this.add(r);const o=new vn($s,js,t,e);o.layers=this.layers,this.add(o);const a=new vn($s,js,t,e);a.layers=this.layers,this.add(a);const l=new vn($s,js,t,e);l.layers=this.layers,this.add(l);const c=new vn($s,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jp extends Ke{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gS extends Cs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Jp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ts(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Zi});r.uniforms.tEquirect.value=e;const o=new ue(s,r),a=e.minFilter;return e.minFilter===Es&&(e.minFilter=Dn),new mS(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Fl=new q,vS=new q,_S=new Qt;let vs=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Fl.subVectors(n,e).cross(vS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||_S.getNormalMatrix(t),s=this.coplanarPoint(Fl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const fs=new So,Zo=new q;class Jc{constructor(t=new vs,e=new vs,n=new vs,s=new vs,r=new vs,o=new vs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],p=s[11],m=s[12],x=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,p-d,b-m).normalize(),n[1].setComponents(l+r,f+c,p+d,b+m).normalize(),n[2].setComponents(l+o,f+h,p+g,b+x).normalize(),n[3].setComponents(l-o,f-h,p-g,b-x).normalize(),n[4].setComponents(l-a,f-u,p-v,b-_).normalize(),e===Ri)n[5].setComponents(l+a,f+u,p+v,b+_).normalize();else if(e===wa)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Zo.x=s.normal.x>0?t.max.x:t.min.x,Zo.y=s.normal.y>0?t.max.y:t.min.y,Zo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xS(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&f.length===0&&i.bufferSubData(c,0,h),f.length!==0){for(let d=0,g=f.length;d<g;d++){const v=f[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ni extends Tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const x=m*f-o;for(let _=0;_<c;_++){const b=_*u-r;g.push(b,-x,0),v.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const _=x+c*m,b=x+c*(m+1),L=x+1+c*(m+1),T=x+1+c*m;d.push(_,b,T),d.push(b,L,T)}this.setIndex(d),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}var yS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MS=`#ifdef USE_ALPHAHASH
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
#endif`,SS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ES=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TS=`#ifdef USE_AOMAP
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
#endif`,AS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CS=`#ifdef USE_BATCHING
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
#endif`,RS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,PS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NS=`#ifdef USE_IRIDESCENCE
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
#endif`,DS=`#ifdef USE_BUMPMAP
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
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GS=`#define PI 3.141592653589793
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
} // validated`,WS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qS=`vec3 transformedNormal = objectNormal;
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
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$S=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KS="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZS=`
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
}`,JS=`#ifdef USE_ENVMAP
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
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ab=`#ifdef USE_GRADIENTMAP
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
}`,lb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fb=`uniform bool receiveShadow;
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
#endif`,db=`#ifdef USE_ENVMAP
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
#endif`,pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_b=`PhysicalMaterial material;
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
#endif`,xb=`struct PhysicalMaterial {
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
}`,yb=`
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
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pb=`#if defined( USE_POINTS_UV )
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
#endif`,Lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Db=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ub=`#ifdef USE_MORPHNORMALS
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
#endif`,Fb=`#ifdef USE_MORPHTARGETS
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
#endif`,Ob=`#ifdef USE_MORPHTARGETS
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
#endif`,Bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gb=`#ifdef USE_NORMALMAP
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
#endif`,Wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rE=`float getShadowMask() {
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
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
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
#endif`,lE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`#include <common>
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
}`,AE=`#if DEPTH_PACKING == 3200
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
}`,CE=`#define DISTANCE
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
}`,RE=`#define DISTANCE
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`uniform float scale;
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
}`,NE=`uniform vec3 diffuse;
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
}`,DE=`#include <common>
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
}`,UE=`uniform vec3 diffuse;
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
}`,FE=`#define LAMBERT
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
}`,OE=`#define LAMBERT
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
}`,BE=`#define MATCAP
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
}`,zE=`#define MATCAP
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
}`,kE=`#define NORMAL
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
}`,HE=`#define NORMAL
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
}`,VE=`#define PHONG
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
}`,GE=`#define PHONG
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
}`,WE=`#define STANDARD
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
}`,qE=`#define STANDARD
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
}`,XE=`#define TOON
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
}`,YE=`#define TOON
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
}`,$E=`uniform float size;
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
}`,jE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,ZE=`uniform vec3 color;
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
}`,JE=`uniform float rotation;
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
}`,QE=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:yS,alphahash_pars_fragment:MS,alphamap_fragment:SS,alphamap_pars_fragment:bS,alphatest_fragment:ES,alphatest_pars_fragment:wS,aomap_fragment:TS,aomap_pars_fragment:AS,batching_pars_vertex:CS,batching_vertex:RS,begin_vertex:PS,beginnormal_vertex:LS,bsdfs:IS,iridescence_fragment:NS,bumpmap_pars_fragment:DS,clipping_planes_fragment:US,clipping_planes_pars_fragment:FS,clipping_planes_pars_vertex:OS,clipping_planes_vertex:BS,color_fragment:zS,color_pars_fragment:kS,color_pars_vertex:HS,color_vertex:VS,common:GS,cube_uv_reflection_fragment:WS,defaultnormal_vertex:qS,displacementmap_pars_vertex:XS,displacementmap_vertex:YS,emissivemap_fragment:$S,emissivemap_pars_fragment:jS,colorspace_fragment:KS,colorspace_pars_fragment:ZS,envmap_fragment:JS,envmap_common_pars_fragment:QS,envmap_pars_fragment:tb,envmap_pars_vertex:eb,envmap_physical_pars_fragment:db,envmap_vertex:nb,fog_vertex:ib,fog_pars_vertex:sb,fog_fragment:rb,fog_pars_fragment:ob,gradientmap_pars_fragment:ab,lightmap_fragment:lb,lightmap_pars_fragment:cb,lights_lambert_fragment:hb,lights_lambert_pars_fragment:ub,lights_pars_begin:fb,lights_toon_fragment:pb,lights_toon_pars_fragment:mb,lights_phong_fragment:gb,lights_phong_pars_fragment:vb,lights_physical_fragment:_b,lights_physical_pars_fragment:xb,lights_fragment_begin:yb,lights_fragment_maps:Mb,lights_fragment_end:Sb,logdepthbuf_fragment:bb,logdepthbuf_pars_fragment:Eb,logdepthbuf_pars_vertex:wb,logdepthbuf_vertex:Tb,map_fragment:Ab,map_pars_fragment:Cb,map_particle_fragment:Rb,map_particle_pars_fragment:Pb,metalnessmap_fragment:Lb,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Nb,morphcolor_vertex:Db,morphnormal_vertex:Ub,morphtarget_pars_vertex:Fb,morphtarget_vertex:Ob,normal_fragment_begin:Bb,normal_fragment_maps:zb,normal_pars_fragment:kb,normal_pars_vertex:Hb,normal_vertex:Vb,normalmap_pars_fragment:Gb,clearcoat_normal_fragment_begin:Wb,clearcoat_normal_fragment_maps:qb,clearcoat_pars_fragment:Xb,iridescence_pars_fragment:Yb,opaque_fragment:$b,packing:jb,premultiplied_alpha_fragment:Kb,project_vertex:Zb,dithering_fragment:Jb,dithering_pars_fragment:Qb,roughnessmap_fragment:tE,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:iE,shadowmap_vertex:sE,shadowmask_pars_fragment:rE,skinbase_vertex:oE,skinning_pars_vertex:aE,skinning_vertex:lE,skinnormal_vertex:cE,specularmap_fragment:hE,specularmap_pars_fragment:uE,tonemapping_fragment:fE,tonemapping_pars_fragment:dE,transmission_fragment:pE,transmission_pars_fragment:mE,uv_pars_fragment:gE,uv_pars_vertex:vE,uv_vertex:_E,worldpos_vertex:xE,background_vert:yE,background_frag:ME,backgroundCube_vert:SE,backgroundCube_frag:bE,cube_vert:EE,cube_frag:wE,depth_vert:TE,depth_frag:AE,distanceRGBA_vert:CE,distanceRGBA_frag:RE,equirect_vert:PE,equirect_frag:LE,linedashed_vert:IE,linedashed_frag:NE,meshbasic_vert:DE,meshbasic_frag:UE,meshlambert_vert:FE,meshlambert_frag:OE,meshmatcap_vert:BE,meshmatcap_frag:zE,meshnormal_vert:kE,meshnormal_frag:HE,meshphong_vert:VE,meshphong_frag:GE,meshphysical_vert:WE,meshphysical_frag:qE,meshtoon_vert:XE,meshtoon_frag:YE,points_vert:$E,points_frag:jE,shadow_vert:KE,shadow_frag:ZE,sprite_vert:JE,sprite_frag:QE},Tt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Jn={basic:{uniforms:Qe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Qe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Qe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Qe([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Qe([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Qe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Qe([Tt.points,Tt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Qe([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Qe([Tt.common,Tt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Qe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Qe([Tt.sprite,Tt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Qe([Tt.common,Tt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Qe([Tt.lights,Tt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Jn.physical={uniforms:Qe([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Jo={r:0,b:0,g:0},ds=new Hn,tw=new ve;function ew(i,t,e,n,s,r,o){const a=new kt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(p,m){let x=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ga)?(h===void 0&&(h=new ue(new ts(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:br(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ds.copy(m.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tw.makeRotationFromEuler(ds)),h.material.toneMapped=he.getTransfer(_.colorSpace)!==ge,(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ue(new ni(2,2),new Vn({name:"BackgroundMaterial",uniforms:br(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=he.getTransfer(_.colorSpace)!==ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,m){p.getRGB(Jo,Kp(i)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:g}}function nw(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,F,$,P,H){let U=!1;const B=u(P,$,F);r!==B&&(r=B,c(r.object)),U=d(M,P,$,H),U&&g(M,P,$,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,b(M,F,$,P),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,F,$){const P=$.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let U=H[F.id];U===void 0&&(U={},H[F.id]=U);let B=U[P];return B===void 0&&(B=f(l()),U[P]=B),B}function f(M){const F=[],$=[],P=[];for(let H=0;H<e;H++)F[H]=0,$[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:P,object:M,attributes:{},index:null}}function d(M,F,$,P){const H=r.attributes,U=F.attributes;let B=0;const et=$.getAttributes();for(const z in et)if(et[z].location>=0){const ht=H[z];let bt=U[z];if(bt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),ht===void 0||ht.attribute!==bt||bt&&ht.data!==bt.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function g(M,F,$,P){const H={},U=F.attributes;let B=0;const et=$.getAttributes();for(const z in et)if(et[z].location>=0){let ht=U[z];ht===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const bt={};bt.attribute=ht,ht&&ht.data&&(bt.data=ht.data),H[z]=bt,B++}r.attributes=H,r.attributesNum=B,r.index=P}function v(){const M=r.newAttributes;for(let F=0,$=M.length;F<$;F++)M[F]=0}function p(M){m(M,0)}function m(M,F){const $=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;$[M]=1,P[M]===0&&(i.enableVertexAttribArray(M),P[M]=1),H[M]!==F&&(i.vertexAttribDivisor(M,F),H[M]=F)}function x(){const M=r.newAttributes,F=r.enabledAttributes;for(let $=0,P=F.length;$<P;$++)F[$]!==M[$]&&(i.disableVertexAttribArray($),F[$]=0)}function _(M,F,$,P,H,U,B){B===!0?i.vertexAttribIPointer(M,F,$,H,U):i.vertexAttribPointer(M,F,$,P,H,U)}function b(M,F,$,P){v();const H=P.attributes,U=$.getAttributes(),B=F.defaultAttributeValues;for(const et in U){const z=U[et];if(z.location>=0){let nt=H[et];if(nt===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const ht=nt.normalized,bt=nt.itemSize,gt=t.get(nt);if(gt===void 0)continue;const qt=gt.buffer,ot=gt.type,_t=gt.bytesPerElement,wt=ot===i.INT||ot===i.UNSIGNED_INT||nt.gpuType===Dp;if(nt.isInterleavedBufferAttribute){const W=nt.data,ft=W.stride,ut=nt.offset;if(W.isInstancedInterleavedBuffer){for(let St=0;St<z.locationSize;St++)m(z.location+St,W.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let St=0;St<z.locationSize;St++)p(z.location+St);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let St=0;St<z.locationSize;St++)_(z.location+St,bt/z.locationSize,ot,ht,ft*_t,(ut+bt/z.locationSize*St)*_t,wt)}else{if(nt.isInstancedBufferAttribute){for(let W=0;W<z.locationSize;W++)m(z.location+W,nt.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let W=0;W<z.locationSize;W++)p(z.location+W);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let W=0;W<z.locationSize;W++)_(z.location+W,bt/z.locationSize,ot,ht,bt*_t,bt/z.locationSize*W*_t,wt)}}else if(B!==void 0){const ht=B[et];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(z.location,ht);break;case 3:i.vertexAttrib3fv(z.location,ht);break;case 4:i.vertexAttrib4fv(z.location,ht);break;default:i.vertexAttrib1fv(z.location,ht)}}}}x()}function L(){D();for(const M in n){const F=n[M];for(const $ in F){const P=F[$];for(const H in P)h(P[H].object),delete P[H];delete F[$]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const F=n[M.id];for(const $ in F){const P=F[$];for(const H in P)h(P[H].object),delete P[H];delete F[$]}delete n[M.id]}function A(M){for(const F in n){const $=n[F];if($[M.id]===void 0)continue;const P=$[M.id];for(const H in P)h(P[H].object),delete P[H];delete $[M.id]}}function D(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function iw(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let f=0;f<h;f++)this.render(l[f],c[f]);else{u.multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function sw(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=e.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),m=h>0,x=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:p,vertexTextures:m,maxSamples:x}}function rw(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new vs,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const x=r?0:n,_=x*4;let b=m.clippingState||null;l.value=b,b=h(g,f,_,d);for(let L=0;L!==_;++L)b[L]=e[L];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,b=d;_!==v;++_,b+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function ow(i){let t=new WeakMap;function e(o,a){return a===bc?o.mapping=xr:a===Ec&&(o.mapping=yr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bc||a===Ec)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gS(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class aw extends Zp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const sr=4,cf=[.125,.215,.35,.446,.526,.582],ys=20,Ol=new aw,hf=new kt;let Bl=null,zl=0,kl=0,Hl=!1;const _s=(1+Math.sqrt(5))/2,Ks=1/_s,uf=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,_s,Ks),new q(0,_s,-Ks),new q(Ks,0,_s),new q(-Ks,0,_s),new q(_s,Ks,0),new q(-_s,Ks,0)];class ff{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bl,zl,kl),this._renderer.xr.enabled=Hl,t.scissorTest=!1,Qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ma,format:ii,colorSpace:ss,depthBuffer:!1},s=df(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lw(r)),this._blurMaterial=cw(r,t,e)}return s}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,Ol)}_sceneToCubeUV(t,e,n,s){const a=new vn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(hf),h.toneMapping=Ji,h.autoClear=!1;const d=new go({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new ue(new ts,d);let v=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,v=!0):(d.color.copy(hf),v=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const _=this._cubeSize;Qo(s,x*_,m>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===xr||t.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Qo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ol)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=uf[(s-1)%uf.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ue(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ys-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):ys;p>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ys}`);const m=[];let x=0;for(let A=0;A<ys;++A){const D=A/v,S=Math.exp(-D*D/2);m.push(S),A===0?x+=S:A<p&&(x+=2*S)}for(let A=0;A<m.length;A++)m[A]=m[A]/x;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const b=this._sizeLods[s],L=3*b*(s>_-sr?s-_+sr:0),T=4*(this._cubeSize-b);Qo(e,L,T,3*b,2*b),l.setRenderTarget(e),l.render(u,Ol)}}function lw(i){const t=[],e=[],n=[];let s=i;const r=i-sr+1+cf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-sr?l=cf[o-i+sr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,p=2,m=1,x=new Float32Array(v*g*d),_=new Float32Array(p*g*d),b=new Float32Array(m*g*d);for(let T=0;T<d;T++){const A=T%3*2/3-1,D=T>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];x.set(S,v*g*T),_.set(f,p*g*T);const M=[T,T,T,T,T,T];b.set(M,m*g*T)}const L=new Tn;L.setAttribute("position",new Bn(x,v)),L.setAttribute("uv",new Bn(_,p)),L.setAttribute("faceIndex",new Bn(b,m)),t.push(L),s>sr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function df(i,t,e){const n=new Cs(i,t,e);return n.texture.mapping=Ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cw(i,t,e){const n=new Float32Array(ys),s=new q(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function pf(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function mf(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function hw(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bc||l===Ec,h=l===xr||l===yr;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ff(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new ff(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function uw(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fw(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let _=0,b=x.length;_<b;_+=3){const L=x[_+0],T=x[_+1],A=x[_+2];f.push(L,T,T,A,A,L)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,b=x.length/3-1;_<b;_+=3){const L=_+0,T=_+1,A=_+2;f.push(L,T,T,A,A,L)}}else return;const p=new(Gp(f)?jp:$p)(f,1);p.version=v;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function dw(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d;v++)this.render(u[v]/o,f[v]);else{g.multiDrawElementsWEBGL(n,f,0,r,u,0,d);let v=0;for(let p=0;p<d;p++)v+=f[p];e.update(v,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function pw(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mw(i,t,e){const n=new WeakMap,s=new ke;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let L=a.attributes.position.count*b,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*T*4*u),D=new qp(A,L,T,u);D.type=Ci,D.needsUpdate=!0;const S=b*4;for(let F=0;F<u;F++){const $=m[F],P=x[F],H=_[F],U=L*T*4*F;for(let B=0;B<$.count;B++){const et=B*S;g===!0&&(s.fromBufferAttribute($,B),A[U+et+0]=s.x,A[U+et+1]=s.y,A[U+et+2]=s.z,A[U+et+3]=0),v===!0&&(s.fromBufferAttribute(P,B),A[U+et+4]=s.x,A[U+et+5]=s.y,A[U+et+6]=s.z,A[U+et+7]=0),p===!0&&(s.fromBufferAttribute(H,B),A[U+et+8]=s.x,A[U+et+9]=s.y,A[U+et+10]=s.z,A[U+et+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new It(L,T)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function gw(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class tm extends Ke{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:ur,h!==ur&&h!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ur&&(n=Mr),n===void 0&&h===mo&&(n=yo),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const em=new Ke,nm=new tm(1,1);nm.compareFunction=Vp;const im=new qp,sm=new QM,rm=new Jp,gf=[],vf=[],_f=new Float32Array(16),xf=new Float32Array(9),yf=new Float32Array(4);function Ar(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gf[s];if(r===void 0&&(r=new Float32Array(s),gf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xa(i,t){let e=vf[t];e===void 0&&(e=new Int32Array(t),vf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vw(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _w(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function xw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function yw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Mw(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;yf.set(n),i.uniformMatrix2fv(this.addr,!1,yf),Ue(e,n)}}function Sw(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;xf.set(n),i.uniformMatrix3fv(this.addr,!1,xf),Ue(e,n)}}function bw(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;_f.set(n),i.uniformMatrix4fv(this.addr,!1,_f),Ue(e,n)}}function Ew(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ww(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Tw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Aw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Cw(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Pw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Lw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Iw(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?nm:em;e.setTexture2D(t||r,s)}function Nw(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sm,s)}function Dw(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rm,s)}function Uw(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||im,s)}function Fw(i){switch(i){case 5126:return vw;case 35664:return _w;case 35665:return xw;case 35666:return yw;case 35674:return Mw;case 35675:return Sw;case 35676:return bw;case 5124:case 35670:return Ew;case 35667:case 35671:return ww;case 35668:case 35672:return Tw;case 35669:case 35673:return Aw;case 5125:return Cw;case 36294:return Rw;case 36295:return Pw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Uw}}function Ow(i,t){i.uniform1fv(this.addr,t)}function Bw(i,t){const e=Ar(t,this.size,2);i.uniform2fv(this.addr,e)}function zw(i,t){const e=Ar(t,this.size,3);i.uniform3fv(this.addr,e)}function kw(i,t){const e=Ar(t,this.size,4);i.uniform4fv(this.addr,e)}function Hw(i,t){const e=Ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Vw(i,t){const e=Ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gw(i,t){const e=Ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ww(i,t){i.uniform1iv(this.addr,t)}function qw(i,t){i.uniform2iv(this.addr,t)}function Xw(i,t){i.uniform3iv(this.addr,t)}function Yw(i,t){i.uniform4iv(this.addr,t)}function $w(i,t){i.uniform1uiv(this.addr,t)}function jw(i,t){i.uniform2uiv(this.addr,t)}function Kw(i,t){i.uniform3uiv(this.addr,t)}function Zw(i,t){i.uniform4uiv(this.addr,t)}function Jw(i,t,e){const n=this.cache,s=t.length,r=Xa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||em,r[o])}function Qw(i,t,e){const n=this.cache,s=t.length,r=Xa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||sm,r[o])}function tT(i,t,e){const n=this.cache,s=t.length,r=Xa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||rm,r[o])}function eT(i,t,e){const n=this.cache,s=t.length,r=Xa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||im,r[o])}function nT(i){switch(i){case 5126:return Ow;case 35664:return Bw;case 35665:return zw;case 35666:return kw;case 35674:return Hw;case 35675:return Vw;case 35676:return Gw;case 5124:case 35670:return Ww;case 35667:case 35671:return qw;case 35668:case 35672:return Xw;case 35669:case 35673:return Yw;case 5125:return $w;case 36294:return jw;case 36295:return Kw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Jw;case 35679:case 36299:case 36307:return Qw;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return eT}}class iT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fw(e.type)}}class sT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nT(e.type)}}class rT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function Mf(i,t){i.seq.push(t),i.map[t.id]=t}function oT(i,t,e){const n=i.name,s=n.length;for(Vl.lastIndex=0;;){const r=Vl.exec(n),o=Vl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mf(e,c===void 0?new iT(a,i,t):new sT(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new rT(a),Mf(e,u)),e=u}}}class ua{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);oT(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Sf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const aT=37297;let lT=0;function cT(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function hT(i){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(i);let n;switch(t===e?n="":t===Ea&&e===ba?n="LinearDisplayP3ToLinearSRGB":t===ba&&e===Ea&&(n="LinearSRGBToLinearDisplayP3"),i){case ss:case qa:return[n,"LinearTransferOETF"];case Nn:case Kc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+cT(i.getShaderSource(t),o)}else return s}function uT(i,t){const e=hT(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function fT(i,t){let e;switch(t){case sM:e="Linear";break;case rM:e="Reinhard";break;case oM:e="OptimizedCineon";break;case Lp:e="ACESFilmic";break;case lM:e="AgX";break;case cM:e="Neutral";break;case aM:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function dT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function pT(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mT(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Yr(i){return i!==""}function Ef(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(gT,_T)}const vT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _T(i,t){let e=Jt[t];if(e===void 0){const n=vT.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ac(e)}const xT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(i){return i.replace(xT,yT)}function yT(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Af(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function MT(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function ST(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case yr:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bT(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yr:t="ENVMAP_MODE_REFRACTION";break}return t}function ET(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jc:t="ENVMAP_BLENDING_MULTIPLY";break;case nM:t="ENVMAP_BLENDING_MIX";break;case iM:t="ENVMAP_BLENDING_ADD";break}return t}function wT(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function TT(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=MT(e),c=ST(e),h=bT(e),u=ET(e),f=wT(e),d=dT(e),g=pT(r),v=s.createProgram();let p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(p=[Af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[Af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Ji?fT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,uT("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=Ac(o),o=Ef(o,e),o=wf(o,e),a=Ac(a),a=Ef(a,e),a=wf(a,e),o=Tf(o),a=Tf(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=x+p+o,b=x+m+a,L=Sf(s,s.VERTEX_SHADER,_),T=Sf(s,s.FRAGMENT_SHADER,b);s.attachShader(v,L),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(F){if(i.debug.checkShaderErrors){const $=s.getProgramInfoLog(v).trim(),P=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(T).trim();let U=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,T);else{const et=bf(s,L,"vertex"),z=bf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+$+`
`+et+`
`+z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(P===""||H==="")&&(B=!1);B&&(F.diagnostics={runnable:U,programLog:$,vertexShader:{log:P,prefix:p},fragmentShader:{log:H,prefix:m}})}s.deleteShader(L),s.deleteShader(T),D=new ua(s,v),S=mT(s,v)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,aT)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lT++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=T,this}let AT=0;class CT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new RT(t),e.set(t,n)),n}}class RT{constructor(t){this.id=AT++,this.code=t,this.usedTimes=0}}function PT(i,t,e,n,s,r,o){const a=new Xp,l=new CT,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,F,$,P){const H=$.fog,U=P.geometry,B=S.isMeshStandardMaterial?$.environment:null,et=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),z=et&&et.mapping===Ga?et.image.height:null,nt=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ht=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,bt=ht!==void 0?ht.length:0;let gt=0;U.morphAttributes.position!==void 0&&(gt=1),U.morphAttributes.normal!==void 0&&(gt=2),U.morphAttributes.color!==void 0&&(gt=3);let qt,ot,_t,wt;if(nt){const fe=Jn[nt];qt=fe.vertexShader,ot=fe.fragmentShader}else qt=S.vertexShader,ot=S.fragmentShader,l.update(S),_t=l.getVertexShaderID(S),wt=l.getFragmentShaderID(S);const W=i.getRenderTarget(),ft=P.isInstancedMesh===!0,ut=P.isBatchedMesh===!0,St=!!S.map,Y=!!S.matcap,R=!!et,N=!!S.aoMap,X=!!S.lightMap,Z=!!S.bumpMap,st=!!S.normalMap,E=!!S.displacementMap,y=!!S.emissiveMap,O=!!S.metalnessMap,G=!!S.roughnessMap,V=S.anisotropy>0,J=S.clearcoat>0,lt=S.iridescence>0,Q=S.sheen>0,mt=S.transmission>0,Et=V&&!!S.anisotropyMap,dt=J&&!!S.clearcoatMap,xt=J&&!!S.clearcoatNormalMap,Ct=J&&!!S.clearcoatRoughnessMap,At=lt&&!!S.iridescenceMap,Pt=lt&&!!S.iridescenceThicknessMap,Vt=Q&&!!S.sheenColorMap,k=Q&&!!S.sheenRoughnessMap,pt=!!S.specularMap,at=!!S.specularColorMap,yt=!!S.specularIntensityMap,vt=mt&&!!S.transmissionMap,I=mt&&!!S.thicknessMap,ct=!!S.gradientMap,Mt=!!S.alphaMap,Dt=S.alphaTest>0,Lt=!!S.alphaHash,ee=!!S.extensions;let $t=Ji;S.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&($t=i.toneMapping);const te={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:qt,fragmentShader:ot,defines:S.defines,customVertexShaderID:_t,customFragmentShaderID:wt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ut,instancing:ft,instancingColor:ft&&P.instanceColor!==null,instancingMorph:ft&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ss,alphaToCoverage:!!S.alphaToCoverage,map:St,matcap:Y,envMap:R,envMapMode:R&&et.mapping,envMapCubeUVHeight:z,aoMap:N,lightMap:X,bumpMap:Z,normalMap:st,displacementMap:f&&E,emissiveMap:y,normalMapObjectSpace:st&&S.normalMapType===SM,normalMapTangentSpace:st&&S.normalMapType===Wa,metalnessMap:O,roughnessMap:G,anisotropy:V,anisotropyMap:Et,clearcoat:J,clearcoatMap:dt,clearcoatNormalMap:xt,clearcoatRoughnessMap:Ct,iridescence:lt,iridescenceMap:At,iridescenceThicknessMap:Pt,sheen:Q,sheenColorMap:Vt,sheenRoughnessMap:k,specularMap:pt,specularColorMap:at,specularIntensityMap:yt,transmission:mt,transmissionMap:vt,thicknessMap:I,gradientMap:ct,opaque:S.transparent===!1&&S.blending===hr&&S.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Dt,alphaHash:Lt,combine:S.combine,mapUv:St&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:X&&v(S.lightMap.channel),bumpMapUv:Z&&v(S.bumpMap.channel),normalMapUv:st&&v(S.normalMap.channel),displacementMapUv:E&&v(S.displacementMap.channel),emissiveMapUv:y&&v(S.emissiveMap.channel),metalnessMapUv:O&&v(S.metalnessMap.channel),roughnessMapUv:G&&v(S.roughnessMap.channel),anisotropyMapUv:Et&&v(S.anisotropyMap.channel),clearcoatMapUv:dt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:xt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:k&&v(S.sheenRoughnessMap.channel),specularMapUv:pt&&v(S.specularMap.channel),specularColorMapUv:at&&v(S.specularColorMap.channel),specularIntensityMapUv:yt&&v(S.specularIntensityMap.channel),transmissionMapUv:vt&&v(S.transmissionMap.channel),thicknessMapUv:I&&v(S.thicknessMap.channel),alphaMapUv:Mt&&v(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(st||V),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(St||Mt),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:gt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,useLegacyLights:i._useLegacyLights,decodeVideoTexture:St&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===ge,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ti,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ee&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)M.push(F),M.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(x(M,S),_(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),S.push(a.mask)}function b(S){const M=g[S.type];let F;if(M){const $=Jn[M];F=fS.clone($.uniforms)}else F=S.uniforms;return F}function L(S,M){let F;for(let $=0,P=h.length;$<P;$++){const H=h[$];if(H.cacheKey===M){F=H,++F.usedTimes;break}}return F===void 0&&(F=new TT(i,M,S,r),h.push(F)),F}function T(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:b,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:D}}function LT(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function IT(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,v,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),t++,m}function a(u,f,d,g,v,p){const m=o(u,f,d,g,v,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,g,v,p){const m=o(u,f,d,g,v,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||IT),n.length>1&&n.sort(f||Cf),s.length>1&&s.sort(f||Cf)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function NT(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Rf,i.set(n,[o])):s>=r.length?(o=new Rf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function DT(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new kt};break;case"SpotLight":e={position:new q,direction:new q,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function UT(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let FT=0;function OT(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function BT(i){const t=new DT,e=UT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const s=new q,r=new ve,o=new ve;function a(c,h){let u=0,f=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let g=0,v=0,p=0,m=0,x=0,_=0,b=0,L=0,T=0,A=0,D=0;c.sort(OT);const S=h===!0?Math.PI:1;for(let F=0,$=c.length;F<$;F++){const P=c[F],H=P.color,U=P.intensity,B=P.distance,et=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=H.r*U*S,f+=H.g*U*S,d+=H.b*U*S;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],U);D++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const nt=P.shadow,ht=e.get(P);ht.shadowBias=nt.bias,ht.shadowNormalBias=nt.normalBias,ht.shadowRadius=nt.radius,ht.shadowMapSize=nt.mapSize,n.directionalShadow[g]=ht,n.directionalShadowMap[g]=et,n.directionalShadowMatrix[g]=P.shadow.matrix,_++}n.directional[g]=z,g++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(H).multiplyScalar(U*S),z.distance=B,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[p]=z;const nt=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,nt.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[p]=nt.matrix,P.castShadow){const ht=e.get(P);ht.shadowBias=nt.bias,ht.shadowNormalBias=nt.normalBias,ht.shadowRadius=nt.radius,ht.shadowMapSize=nt.mapSize,n.spotShadow[p]=ht,n.spotShadowMap[p]=et,L++}p++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(H).multiplyScalar(U),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*S),z.distance=P.distance,z.decay=P.decay,P.castShadow){const nt=P.shadow,ht=e.get(P);ht.shadowBias=nt.bias,ht.shadowNormalBias=nt.normalBias,ht.shadowRadius=nt.radius,ht.shadowMapSize=nt.mapSize,ht.shadowCameraNear=nt.camera.near,ht.shadowCameraFar=nt.camera.far,n.pointShadow[v]=ht,n.pointShadowMap[v]=et,n.pointShadowMatrix[v]=P.shadow.matrix,b++}n.point[v]=z,v++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(U*S),z.groundColor.copy(P.groundColor).multiplyScalar(U*S),n.hemi[x]=z,x++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const M=n.hash;(M.directionalLength!==g||M.pointLength!==v||M.spotLength!==p||M.rectAreaLength!==m||M.hemiLength!==x||M.numDirectionalShadows!==_||M.numPointShadows!==b||M.numSpotShadows!==L||M.numSpotMaps!==T||M.numLightProbes!==D)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=v,n.hemi.length=x,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=L+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,M.directionalLength=g,M.pointLength=v,M.spotLength=p,M.rectAreaLength=m,M.hemiLength=x,M.numDirectionalShadows=_,M.numPointShadows=b,M.numSpotShadows=L,M.numSpotMaps=T,M.numLightProbes=D,n.version=FT++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const _=c[m];if(_.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(_.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(_.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Pf(i){const t=new BT(i),e=[],n=[];function s(){e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(h){t.setup(e,h)}function l(h){t.setupView(e,h)}return{init:s,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zT(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Pf(i),t.set(s,[a])):r>=o.length?(a=new Pf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class kT extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class HT extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const VT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GT=`uniform sampler2D shadow_pass;
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
}`;function WT(i,t,e){let n=new Jc;const s=new It,r=new It,o=new ke,a=new kT({depthPacking:MM}),l=new HT,c={},h=e.maxTextureSize,u={[Ni]:on,[on]:Ni,[ti]:ti},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:VT,fragmentShader:GT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Tn;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ue(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rp;let m=this.type;this.render=function(T,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Zi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const P=m!==bi&&this.type===bi,H=m===bi&&this.type!==bi;for(let U=0,B=T.length;U<B;U++){const et=T[U],z=et.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const nt=z.getFrameExtents();if(s.multiply(nt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,z.mapSize.y=r.y)),z.map===null||P===!0||H===!0){const bt=this.type!==bi?{minFilter:un,magFilter:un}:{};z.map!==null&&z.map.dispose(),z.map=new Cs(s.x,s.y,bt),z.map.texture.name=et.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ht=z.getViewportCount();for(let bt=0;bt<ht;bt++){const gt=z.getViewport(bt);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),$.viewport(o),z.updateMatrices(et,bt),n=z.getFrustum(),b(A,D,z.camera,et,this.type)}z.isPointLightShadow!==!0&&this.type===bi&&x(z,D),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(S,M,F)};function x(T,A){const D=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Cs(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,D,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,D,d,v,null)}function _(T,A,D,S){let M=null;const F=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)M=F;else if(M=D.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const $=M.uuid,P=A.uuid;let H=c[$];H===void 0&&(H={},c[$]=H);let U=H[P];U===void 0&&(U=M.clone(),H[P]=U,A.addEventListener("dispose",L)),M=U}if(M.visible=A.visible,M.wireframe=A.wireframe,S===bi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=i.properties.get(M);$.light=D}return M}function b(T,A,D,S,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===bi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const P=t.update(T),H=T.material;if(Array.isArray(H)){const U=P.groups;for(let B=0,et=U.length;B<et;B++){const z=U[B],nt=H[z.materialIndex];if(nt&&nt.visible){const ht=_(T,nt,S,M);T.onBeforeShadow(i,T,A,D,P,ht,z),i.renderBufferDirect(D,null,P,ht,T,z),T.onAfterShadow(i,T,A,D,P,ht,z)}}}else if(H.visible){const U=_(T,H,S,M);T.onBeforeShadow(i,T,A,D,P,U,null),i.renderBufferDirect(D,null,P,U,T,null),T.onAfterShadow(i,T,A,D,P,U,null)}}const $=T.children;for(let P=0,H=$.length;P<H;P++)b($[P],A,D,S,M)}function L(T){T.target.removeEventListener("dispose",L);for(const D in c){const S=c[D],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function qT(i){function t(){let I=!1;const ct=new ke;let Mt=null;const Dt=new ke(0,0,0,0);return{setMask:function(Lt){Mt!==Lt&&!I&&(i.colorMask(Lt,Lt,Lt,Lt),Mt=Lt)},setLocked:function(Lt){I=Lt},setClear:function(Lt,ee,$t,te,fe){fe===!0&&(Lt*=te,ee*=te,$t*=te),ct.set(Lt,ee,$t,te),Dt.equals(ct)===!1&&(i.clearColor(Lt,ee,$t,te),Dt.copy(ct))},reset:function(){I=!1,Mt=null,Dt.set(-1,0,0,0)}}}function e(){let I=!1,ct=null,Mt=null,Dt=null;return{setTest:function(Lt){Lt?wt(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(Lt){ct!==Lt&&!I&&(i.depthMask(Lt),ct=Lt)},setFunc:function(Lt){if(Mt!==Lt){switch(Lt){case jy:i.depthFunc(i.NEVER);break;case Ky:i.depthFunc(i.ALWAYS);break;case Zy:i.depthFunc(i.LESS);break;case ya:i.depthFunc(i.LEQUAL);break;case Jy:i.depthFunc(i.EQUAL);break;case Qy:i.depthFunc(i.GEQUAL);break;case tM:i.depthFunc(i.GREATER);break;case eM:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=Lt}},setLocked:function(Lt){I=Lt},setClear:function(Lt){Dt!==Lt&&(i.clearDepth(Lt),Dt=Lt)},reset:function(){I=!1,ct=null,Mt=null,Dt=null}}}function n(){let I=!1,ct=null,Mt=null,Dt=null,Lt=null,ee=null,$t=null,te=null,fe=null;return{setTest:function(ie){I||(ie?wt(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(ie){ct!==ie&&!I&&(i.stencilMask(ie),ct=ie)},setFunc:function(ie,Te,dn){(Mt!==ie||Dt!==Te||Lt!==dn)&&(i.stencilFunc(ie,Te,dn),Mt=ie,Dt=Te,Lt=dn)},setOp:function(ie,Te,dn){(ee!==ie||$t!==Te||te!==dn)&&(i.stencilOp(ie,Te,dn),ee=ie,$t=Te,te=dn)},setLocked:function(ie){I=ie},setClear:function(ie){fe!==ie&&(i.clearStencil(ie),fe=ie)},reset:function(){I=!1,ct=null,Mt=null,Dt=null,Lt=null,ee=null,$t=null,te=null,fe=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,g=!1,v=null,p=null,m=null,x=null,_=null,b=null,L=null,T=new kt(0,0,0),A=0,D=!1,S=null,M=null,F=null,$=null,P=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(et)[1]),U=B>=1):et.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),U=B>=2);let z=null,nt={};const ht=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),gt=new ke().fromArray(ht),qt=new ke().fromArray(bt);function ot(I,ct,Mt,Dt){const Lt=new Uint8Array(4),ee=i.createTexture();i.bindTexture(I,ee),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<Mt;$t++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(ct+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return ee}const _t={};_t[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),wt(i.DEPTH_TEST),r.setFunc(ya),Z(!1),st(hu),wt(i.CULL_FACE),N(Zi);function wt(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function W(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function ft(I,ct){return h[I]!==ct?(i.bindFramebuffer(I,ct),h[I]=ct,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function ut(I,ct){let Mt=f,Dt=!1;if(I){Mt=u.get(ct),Mt===void 0&&(Mt=[],u.set(ct,Mt));const Lt=I.textures;if(Mt.length!==Lt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,$t=Lt.length;ee<$t;ee++)Mt[ee]=i.COLOR_ATTACHMENT0+ee;Mt.length=Lt.length,Dt=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(Mt)}function St(I){return d!==I?(i.useProgram(I),d=I,!0):!1}const Y={[xs]:i.FUNC_ADD,[Iy]:i.FUNC_SUBTRACT,[Ny]:i.FUNC_REVERSE_SUBTRACT};Y[Dy]=i.MIN,Y[Uy]=i.MAX;const R={[Fy]:i.ZERO,[Oy]:i.ONE,[By]:i.SRC_COLOR,[Mc]:i.SRC_ALPHA,[Wy]:i.SRC_ALPHA_SATURATE,[Vy]:i.DST_COLOR,[ky]:i.DST_ALPHA,[zy]:i.ONE_MINUS_SRC_COLOR,[Sc]:i.ONE_MINUS_SRC_ALPHA,[Gy]:i.ONE_MINUS_DST_COLOR,[Hy]:i.ONE_MINUS_DST_ALPHA,[qy]:i.CONSTANT_COLOR,[Xy]:i.ONE_MINUS_CONSTANT_COLOR,[Yy]:i.CONSTANT_ALPHA,[$y]:i.ONE_MINUS_CONSTANT_ALPHA};function N(I,ct,Mt,Dt,Lt,ee,$t,te,fe,ie){if(I===Zi){g===!0&&(W(i.BLEND),g=!1);return}if(g===!1&&(wt(i.BLEND),g=!0),I!==Ly){if(I!==v||ie!==D){if((p!==xs||_!==xs)&&(i.blendEquation(i.FUNC_ADD),p=xs,_=xs),ie)switch(I){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uu:i.blendFunc(i.ONE,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,x=null,b=null,L=null,T.set(0,0,0),A=0,v=I,D=ie}return}Lt=Lt||ct,ee=ee||Mt,$t=$t||Dt,(ct!==p||Lt!==_)&&(i.blendEquationSeparate(Y[ct],Y[Lt]),p=ct,_=Lt),(Mt!==m||Dt!==x||ee!==b||$t!==L)&&(i.blendFuncSeparate(R[Mt],R[Dt],R[ee],R[$t]),m=Mt,x=Dt,b=ee,L=$t),(te.equals(T)===!1||fe!==A)&&(i.blendColor(te.r,te.g,te.b,fe),T.copy(te),A=fe),v=I,D=!1}function X(I,ct){I.side===ti?W(i.CULL_FACE):wt(i.CULL_FACE);let Mt=I.side===on;ct&&(Mt=!Mt),Z(Mt),I.blending===hr&&I.transparent===!1?N(Zi):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const Dt=I.stencilWrite;o.setTest(Dt),Dt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),y(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?wt(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(I){S!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),S=I)}function st(I){I!==Ry?(wt(i.CULL_FACE),I!==M&&(I===hu?i.cullFace(i.BACK):I===Py?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),M=I}function E(I){I!==F&&(U&&i.lineWidth(I),F=I)}function y(I,ct,Mt){I?(wt(i.POLYGON_OFFSET_FILL),($!==ct||P!==Mt)&&(i.polygonOffset(ct,Mt),$=ct,P=Mt)):W(i.POLYGON_OFFSET_FILL)}function O(I){I?wt(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function G(I){I===void 0&&(I=i.TEXTURE0+H-1),z!==I&&(i.activeTexture(I),z=I)}function V(I,ct,Mt){Mt===void 0&&(z===null?Mt=i.TEXTURE0+H-1:Mt=z);let Dt=nt[Mt];Dt===void 0&&(Dt={type:void 0,texture:void 0},nt[Mt]=Dt),(Dt.type!==I||Dt.texture!==ct)&&(z!==Mt&&(i.activeTexture(Mt),z=Mt),i.bindTexture(I,ct||_t[I]),Dt.type=I,Dt.texture=ct)}function J(){const I=nt[z];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(I){gt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),gt.copy(I))}function pt(I){qt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),qt.copy(I))}function at(I,ct){let Mt=l.get(ct);Mt===void 0&&(Mt=new WeakMap,l.set(ct,Mt));let Dt=Mt.get(I);Dt===void 0&&(Dt=i.getUniformBlockIndex(ct,I.name),Mt.set(I,Dt))}function yt(I,ct){const Dt=l.get(ct).get(I);a.get(ct)!==Dt&&(i.uniformBlockBinding(ct,Dt,I.__bindingPointIndex),a.set(ct,Dt))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},z=null,nt={},h={},u=new WeakMap,f=[],d=null,g=!1,v=null,p=null,m=null,x=null,_=null,b=null,L=null,T=new kt(0,0,0),A=0,D=!1,S=null,M=null,F=null,$=null,P=null,gt.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:wt,disable:W,bindFramebuffer:ft,drawBuffers:ut,useProgram:St,setBlending:N,setMaterial:X,setFlipSided:Z,setCullFace:st,setLineWidth:E,setPolygonOffset:y,setScissorTest:O,activeTexture:G,bindTexture:V,unbindTexture:J,compressedTexImage2D:lt,compressedTexImage3D:Q,texImage2D:Pt,texImage3D:Vt,updateUBOMapping:at,uniformBlockBinding:yt,texStorage2D:Ct,texStorage3D:At,texSubImage2D:mt,texSubImage3D:Et,compressedTexSubImage2D:dt,compressedTexSubImage3D:xt,scissor:k,viewport:pt,reset:vt}}function XT(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return d?new OffscreenCanvas(E,y):Aa("canvas")}function v(E,y,O){let G=1;const V=st(E);if((V.width>O||V.height>O)&&(G=O/Math.max(V.width,V.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const J=Math.floor(G*V.width),lt=Math.floor(G*V.height);u===void 0&&(u=g(J,lt));const Q=y?g(J,lt):u;return Q.width=J,Q.height=lt,Q.getContext("2d").drawImage(E,0,0,J,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+J+"x"+lt+")."),Q}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==un&&E.minFilter!==Dn}function m(E){i.generateMipmap(E)}function x(E,y,O,G,V=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=y;if(y===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),y===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),y===i.RGBA){const lt=V?Sa:he.getTransfer(G);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=lt===ge?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==un&&E.minFilter!==Dn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function b(E){const y=E.target;y.removeEventListener("dispose",b),T(y),y.isVideoTexture&&h.delete(y)}function L(E){const y=E.target;y.removeEventListener("dispose",L),D(y)}function T(E){const y=n.get(E);if(y.__webglInit===void 0)return;const O=E.source,G=f.get(O);if(G){const V=G[y.__cacheKey];V.usedTimes--,V.usedTimes===0&&A(E),Object.keys(G).length===0&&f.delete(O)}n.remove(E)}function A(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const O=E.source,G=f.get(O);delete G[y.__cacheKey],o.memory.textures--}function D(E){const y=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let V=0;V<y.__webglFramebuffer[G].length;V++)i.deleteFramebuffer(y.__webglFramebuffer[G][V]);else i.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)i.deleteFramebuffer(y.__webglFramebuffer[G]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=E.textures;for(let G=0,V=O.length;G<V;G++){const J=n.get(O[G]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(O[G])}n.remove(E)}let S=0;function M(){S=0}function F(){const E=S;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),S+=1,E}function $(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function P(E,y){const O=n.get(E);if(E.isVideoTexture&&X(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(O,E,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function H(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){gt(O,E,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function U(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){gt(O,E,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function B(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){qt(O,E,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const et={[wc]:i.REPEAT,[bs]:i.CLAMP_TO_EDGE,[Tc]:i.MIRRORED_REPEAT},z={[un]:i.NEAREST,[hM]:i.NEAREST_MIPMAP_NEAREST,[Io]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[dl]:i.LINEAR_MIPMAP_NEAREST,[Es]:i.LINEAR_MIPMAP_LINEAR},nt={[bM]:i.NEVER,[RM]:i.ALWAYS,[EM]:i.LESS,[Vp]:i.LEQUAL,[wM]:i.EQUAL,[CM]:i.GEQUAL,[TM]:i.GREATER,[AM]:i.NOTEQUAL};function ht(E,y){if(y.type===Ci&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Dn||y.magFilter===dl||y.magFilter===Io||y.magFilter===Es||y.minFilter===Dn||y.minFilter===dl||y.minFilter===Io||y.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,et[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,et[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,et[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,z[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,z[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===un||y.minFilter!==Io&&y.minFilter!==Es||y.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function bt(E,y){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",b));const G=y.source;let V=f.get(G);V===void 0&&(V={},f.set(G,V));const J=$(y);if(J!==E.__cacheKey){V[J]===void 0&&(V[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),V[J].usedTimes++;const lt=V[E.__cacheKey];lt!==void 0&&(V[E.__cacheKey].usedTimes--,lt.usedTimes===0&&A(y)),E.__cacheKey=J,E.__webglTexture=V[J].texture}return O}function gt(E,y,O){let G=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=i.TEXTURE_3D);const V=bt(E,y),J=y.source;e.bindTexture(G,E.__webglTexture,i.TEXTURE0+O);const lt=n.get(J);if(J.version!==lt.__version||V===!0){e.activeTexture(i.TEXTURE0+O);const Q=he.getPrimaries(he.workingColorSpace),mt=y.colorSpace===ji?null:he.getPrimaries(y.colorSpace),Et=y.colorSpace===ji||Q===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let dt=v(y.image,!1,s.maxTextureSize);dt=Z(y,dt);const xt=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type);let At=x(y.internalFormat,xt,Ct,y.colorSpace,y.isVideoTexture);ht(G,y);let Pt;const Vt=y.mipmaps,k=y.isVideoTexture!==!0&&At!==Hp,pt=lt.__version===void 0||V===!0,at=J.dataReady,yt=_(y,dt);if(y.isDepthTexture)At=i.DEPTH_COMPONENT16,y.type===Ci?At=i.DEPTH_COMPONENT32F:y.type===Mr?At=i.DEPTH_COMPONENT24:y.type===yo&&(At=i.DEPTH24_STENCIL8),pt&&(k?e.texStorage2D(i.TEXTURE_2D,1,At,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,At,dt.width,dt.height,0,xt,Ct,null));else if(y.isDataTexture)if(Vt.length>0){k&&pt&&e.texStorage2D(i.TEXTURE_2D,yt,At,Vt[0].width,Vt[0].height);for(let vt=0,I=Vt.length;vt<I;vt++)Pt=Vt[vt],k?at&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Pt.width,Pt.height,xt,Ct,Pt.data):e.texImage2D(i.TEXTURE_2D,vt,At,Pt.width,Pt.height,0,xt,Ct,Pt.data);y.generateMipmaps=!1}else k?(pt&&e.texStorage2D(i.TEXTURE_2D,yt,At,dt.width,dt.height),at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,xt,Ct,dt.data)):e.texImage2D(i.TEXTURE_2D,0,At,dt.width,dt.height,0,xt,Ct,dt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,At,Vt[0].width,Vt[0].height,dt.depth);for(let vt=0,I=Vt.length;vt<I;vt++)Pt=Vt[vt],y.format!==ii?xt!==null?k?at&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Pt.width,Pt.height,dt.depth,xt,Pt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,At,Pt.width,Pt.height,dt.depth,0,Pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Pt.width,Pt.height,dt.depth,xt,Ct,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,At,Pt.width,Pt.height,dt.depth,0,xt,Ct,Pt.data)}else{k&&pt&&e.texStorage2D(i.TEXTURE_2D,yt,At,Vt[0].width,Vt[0].height);for(let vt=0,I=Vt.length;vt<I;vt++)Pt=Vt[vt],y.format!==ii?xt!==null?k?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,Pt.width,Pt.height,xt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,At,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?at&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Pt.width,Pt.height,xt,Ct,Pt.data):e.texImage2D(i.TEXTURE_2D,vt,At,Pt.width,Pt.height,0,xt,Ct,Pt.data)}else if(y.isDataArrayTexture)k?(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,At,dt.width,dt.height,dt.depth),at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,xt,Ct,dt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,dt.width,dt.height,dt.depth,0,xt,Ct,dt.data);else if(y.isData3DTexture)k?(pt&&e.texStorage3D(i.TEXTURE_3D,yt,At,dt.width,dt.height,dt.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,xt,Ct,dt.data)):e.texImage3D(i.TEXTURE_3D,0,At,dt.width,dt.height,dt.depth,0,xt,Ct,dt.data);else if(y.isFramebufferTexture){if(pt)if(k)e.texStorage2D(i.TEXTURE_2D,yt,At,dt.width,dt.height);else{let vt=dt.width,I=dt.height;for(let ct=0;ct<yt;ct++)e.texImage2D(i.TEXTURE_2D,ct,At,vt,I,0,xt,Ct,null),vt>>=1,I>>=1}}else if(Vt.length>0){if(k&&pt){const vt=st(Vt[0]);e.texStorage2D(i.TEXTURE_2D,yt,At,vt.width,vt.height)}for(let vt=0,I=Vt.length;vt<I;vt++)Pt=Vt[vt],k?at&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,xt,Ct,Pt):e.texImage2D(i.TEXTURE_2D,vt,At,xt,Ct,Pt);y.generateMipmaps=!1}else if(k){if(pt){const vt=st(dt);e.texStorage2D(i.TEXTURE_2D,yt,At,vt.width,vt.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ct,dt)}else e.texImage2D(i.TEXTURE_2D,0,At,xt,Ct,dt);p(y)&&m(G),lt.__version=J.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function qt(E,y,O){if(y.image.length!==6)return;const G=bt(E,y),V=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const J=n.get(V);if(V.version!==J.__version||G===!0){e.activeTexture(i.TEXTURE0+O);const lt=he.getPrimaries(he.workingColorSpace),Q=y.colorSpace===ji?null:he.getPrimaries(y.colorSpace),mt=y.colorSpace===ji||lt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Et=y.isCompressedTexture||y.image[0].isCompressedTexture,dt=y.image[0]&&y.image[0].isDataTexture,xt=[];for(let I=0;I<6;I++)!Et&&!dt?xt[I]=v(y.image[I],!0,s.maxCubemapSize):xt[I]=dt?y.image[I].image:y.image[I],xt[I]=Z(y,xt[I]);const Ct=xt[0],At=r.convert(y.format,y.colorSpace),Pt=r.convert(y.type),Vt=x(y.internalFormat,At,Pt,y.colorSpace),k=y.isVideoTexture!==!0,pt=J.__version===void 0||G===!0,at=V.dataReady;let yt=_(y,Ct);ht(i.TEXTURE_CUBE_MAP,y);let vt;if(Et){k&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Vt,Ct.width,Ct.height);for(let I=0;I<6;I++){vt=xt[I].mipmaps;for(let ct=0;ct<vt.length;ct++){const Mt=vt[ct];y.format!==ii?At!==null?k?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ct,0,0,Mt.width,Mt.height,At,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ct,Vt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ct,0,0,Mt.width,Mt.height,At,Pt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ct,Vt,Mt.width,Mt.height,0,At,Pt,Mt.data)}}}else{if(vt=y.mipmaps,k&&pt){vt.length>0&&yt++;const I=st(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Vt,I.width,I.height)}for(let I=0;I<6;I++)if(dt){k?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,xt[I].width,xt[I].height,At,Pt,xt[I].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Vt,xt[I].width,xt[I].height,0,At,Pt,xt[I].data);for(let ct=0;ct<vt.length;ct++){const Dt=vt[ct].image[I].image;k?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ct+1,0,0,Dt.width,Dt.height,At,Pt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ct+1,Vt,Dt.width,Dt.height,0,At,Pt,Dt.data)}}else{k?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,At,Pt,xt[I]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Vt,At,Pt,xt[I]);for(let ct=0;ct<vt.length;ct++){const Mt=vt[ct];k?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ct+1,0,0,At,Pt,Mt.image[I]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ct+1,Vt,At,Pt,Mt.image[I])}}}p(y)&&m(i.TEXTURE_CUBE_MAP),J.__version=V.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ot(E,y,O,G,V,J){const lt=r.convert(O.format,O.colorSpace),Q=r.convert(O.type),mt=x(O.internalFormat,lt,Q,O.colorSpace);if(!n.get(y).__hasExternalTextures){const dt=Math.max(1,y.width>>J),xt=Math.max(1,y.height>>J);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?e.texImage3D(V,J,mt,dt,xt,y.depth,0,lt,Q,null):e.texImage2D(V,J,mt,dt,xt,0,lt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),N(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,V,n.get(O).__webglTexture,0,R(y)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,V,n.get(O).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(E,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let G=i.DEPTH_COMPONENT24;if(O||N(y)){const V=y.depthTexture;V&&V.isDepthTexture&&(V.type===Ci?G=i.DEPTH_COMPONENT32F:V.type===Mr&&(G=i.DEPTH_COMPONENT24));const J=R(y);N(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,G,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,G,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,G,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){const G=R(y);O&&N(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,G,i.DEPTH24_STENCIL8,y.width,y.height):N(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const G=y.textures;for(let V=0;V<G.length;V++){const J=G[V],lt=r.convert(J.format,J.colorSpace),Q=r.convert(J.type),mt=x(J.internalFormat,lt,Q,J.colorSpace),Et=R(y);O&&N(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,mt,y.width,y.height):N(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,mt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,mt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),P(y.depthTexture,0);const G=n.get(y.depthTexture).__webglTexture,V=R(y);if(y.depthTexture.format===ur)N(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(y.depthTexture.format===mo)N(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function W(E){const y=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");wt(y.__webglFramebuffer,E)}else if(O){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]=i.createRenderbuffer(),_t(y.__webglDepthbuffer[G],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),_t(y.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(E,y,O){const G=n.get(E);y!==void 0&&ot(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&W(E)}function ut(E){const y=E.texture,O=n.get(E),G=n.get(y);E.addEventListener("dispose",L);const V=E.textures,J=E.isWebGLCubeRenderTarget===!0,lt=V.length>1;if(lt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=y.version,o.memory.textures++),J){O.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[Q]=[];for(let mt=0;mt<y.mipmaps.length;mt++)O.__webglFramebuffer[Q][mt]=i.createFramebuffer()}else O.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)O.__webglFramebuffer[Q]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(lt)for(let Q=0,mt=V.length;Q<mt;Q++){const Et=n.get(V[Q]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&N(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Q=0;Q<V.length;Q++){const mt=V[Q];O.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Q]);const Et=r.convert(mt.format,mt.colorSpace),dt=r.convert(mt.type),xt=x(mt.internalFormat,Et,dt,mt.colorSpace,E.isXRRenderTarget===!0),Ct=R(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,xt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,O.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),ht(i.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)ot(O.__webglFramebuffer[Q][mt],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt);else ot(O.__webglFramebuffer[Q],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Q=0,mt=V.length;Q<mt;Q++){const Et=V[Q],dt=n.get(Et);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),ht(i.TEXTURE_2D,Et),ot(O.__webglFramebuffer,E,Et,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,0),p(Et)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,G.__webglTexture),ht(Q,y),y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)ot(O.__webglFramebuffer[mt],E,y,i.COLOR_ATTACHMENT0,Q,mt);else ot(O.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,Q,0);p(y)&&m(Q),e.unbindTexture()}E.depthBuffer&&W(E)}function St(E){const y=E.textures;for(let O=0,G=y.length;O<G;O++){const V=y[O];if(p(V)){const J=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,lt=n.get(V).__webglTexture;e.bindTexture(J,lt),m(J),e.unbindTexture()}}}function Y(E){if(E.samples>0&&N(E)===!1){const y=E.textures,O=E.width,G=E.height;let V=i.COLOR_BUFFER_BIT;const J=[],lt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=n.get(E),mt=y.length>1;if(mt)for(let Et=0;Et<y.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let Et=0;Et<y.length;Et++){J.push(i.COLOR_ATTACHMENT0+Et),E.depthBuffer&&J.push(lt);const dt=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(dt===!1&&(E.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&Q.__isTransmissionRenderTarget!==!0&&(V|=i.STENCIL_BUFFER_BIT)),mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Et]),dt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[lt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[lt])),mt){const xt=n.get(y[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,V,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Et=0;Et<y.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Et]);const dt=n.get(y[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}}function R(E){return Math.min(s.maxSamples,E.samples)}function N(E){const y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function X(E){const y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Z(E,y){const O=E.colorSpace,G=E.format,V=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==ss&&O!==ji&&(he.getTransfer(O)===ge?(G!==ii||V!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function st(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=M,this.setTexture2D=P,this.setTexture2DArray=H,this.setTexture3D=U,this.setTextureCube=B,this.rebindTextures=ft,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=N}function YT(i,t){function e(n,s=ji){let r;const o=he.getTransfer(s);if(n===Qi)return i.UNSIGNED_BYTE;if(n===Up)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dM)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uM)return i.BYTE;if(n===fM)return i.SHORT;if(n===Np)return i.UNSIGNED_SHORT;if(n===Dp)return i.INT;if(n===Mr)return i.UNSIGNED_INT;if(n===Ci)return i.FLOAT;if(n===Ma)return i.HALF_FLOAT;if(n===pM)return i.ALPHA;if(n===mM)return i.RGB;if(n===ii)return i.RGBA;if(n===gM)return i.LUMINANCE;if(n===vM)return i.LUMINANCE_ALPHA;if(n===ur)return i.DEPTH_COMPONENT;if(n===mo)return i.DEPTH_STENCIL;if(n===Op)return i.RED;if(n===Bp)return i.RED_INTEGER;if(n===_M)return i.RG;if(n===zp)return i.RG_INTEGER;if(n===kp)return i.RGBA_INTEGER;if(n===pl||n===ml||n===gl||n===vl)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ml)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pu||n===mu||n===gu||n===vu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hp)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===_u||n===xu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_u)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yu||n===Mu||n===Su||n===bu||n===Eu||n===wu||n===Tu||n===Au||n===Cu||n===Ru||n===Pu||n===Lu||n===Iu||n===Nu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Su)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Au)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ru)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Iu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_l||n===Du||n===Uu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_l)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Du)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xM||n===Fu||n===Ou||n===Bu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ou)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class $T extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rr extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jT={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jT)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const KT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZT=`
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

}`;class JT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new Vn({vertexShader:KT,fragmentShader:ZT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ue(new ni(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class QT extends wr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new JT,p=e.getContextAttributes();let m=null,x=null;const _=[],b=[],L=new It;let T=null;const A=new vn;A.layers.enable(1),A.viewport=new ke;const D=new vn;D.layers.enable(2),D.viewport=new ke;const S=[A,D],M=new $T;M.layers.enable(1),M.layers.enable(2);let F=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let _t=_[ot];return _t===void 0&&(_t=new Gl,_[ot]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(ot){let _t=_[ot];return _t===void 0&&(_t=new Gl,_[ot]=_t),_t.getGripSpace()},this.getHand=function(ot){let _t=_[ot];return _t===void 0&&(_t=new Gl,_[ot]=_t),_t.getHandSpace()};function P(ot){const _t=b.indexOf(ot.inputSource);if(_t===-1)return;const wt=_[_t];wt!==void 0&&(wt.update(ot.inputSource,ot.frame,c||o),wt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function H(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",U);for(let ot=0;ot<_.length;ot++){const _t=b[ot];_t!==null&&(b[ot]=null,_[ot].disconnect(_t))}F=null,$=null,v.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,x=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",H),s.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const _t={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Cs(d.framebufferWidth,d.framebufferHeight,{format:ii,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let _t=null,wt=null,W=null;p.depth&&(W=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=p.stencil?mo:ur,wt=p.stencil?yo:Mr);const ft={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Cs(f.textureWidth,f.textureHeight,{format:ii,type:Qi,depthTexture:new tm(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const ut=t.properties.get(x);ut.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(ot){for(let _t=0;_t<ot.removed.length;_t++){const wt=ot.removed[_t],W=b.indexOf(wt);W>=0&&(b[W]=null,_[W].disconnect(wt))}for(let _t=0;_t<ot.added.length;_t++){const wt=ot.added[_t];let W=b.indexOf(wt);if(W===-1){for(let ut=0;ut<_.length;ut++)if(ut>=b.length){b.push(wt),W=ut;break}else if(b[ut]===null){b[ut]=wt,W=ut;break}if(W===-1)break}const ft=_[W];ft&&ft.connect(wt)}}const B=new q,et=new q;function z(ot,_t,wt){B.setFromMatrixPosition(_t.matrixWorld),et.setFromMatrixPosition(wt.matrixWorld);const W=B.distanceTo(et),ft=_t.projectionMatrix.elements,ut=wt.projectionMatrix.elements,St=ft[14]/(ft[10]-1),Y=ft[14]/(ft[10]+1),R=(ft[9]+1)/ft[5],N=(ft[9]-1)/ft[5],X=(ft[8]-1)/ft[0],Z=(ut[8]+1)/ut[0],st=St*X,E=St*Z,y=W/(-X+Z),O=y*-X;_t.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(O),ot.translateZ(y),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert();const G=St+y,V=Y+y,J=st-O,lt=E+(W-O),Q=R*Y/V*G,mt=N*Y/V*G;ot.projectionMatrix.makePerspective(J,lt,Q,mt,G,V),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}function nt(ot,_t){_t===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(_t.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;v.texture!==null&&(ot.near=v.depthNear,ot.far=v.depthFar),M.near=D.near=A.near=ot.near,M.far=D.far=A.far=ot.far,(F!==M.near||$!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),F=M.near,$=M.far,A.near=F,A.far=$,D.near=F,D.far=$,A.updateProjectionMatrix(),D.updateProjectionMatrix(),ot.updateProjectionMatrix());const _t=ot.parent,wt=M.cameras;nt(M,_t);for(let W=0;W<wt.length;W++)nt(wt[W],_t);wt.length===2?z(M,A,D):M.projectionMatrix.copy(A.projectionMatrix),ht(ot,M,_t)};function ht(ot,_t,wt){wt===null?ot.matrix.copy(_t.matrixWorld):(ot.matrix.copy(wt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(_t.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(_t.projectionMatrix),ot.projectionMatrixInverse.copy(_t.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Sr*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ot){l=ot,f!==null&&(f.fixedFoveation=ot),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ot)},this.hasDepthSensing=function(){return v.texture!==null};let bt=null;function gt(ot,_t){if(h=_t.getViewerPose(c||o),g=_t,h!==null){const wt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let W=!1;wt.length!==M.cameras.length&&(M.cameras.length=0,W=!0);for(let ut=0;ut<wt.length;ut++){const St=wt[ut];let Y=null;if(d!==null)Y=d.getViewport(St);else{const N=u.getViewSubImage(f,St);Y=N.viewport,ut===0&&(t.setRenderTargetTextures(x,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(x))}let R=S[ut];R===void 0&&(R=new vn,R.layers.enable(ut),R.viewport=new ke,S[ut]=R),R.matrix.fromArray(St.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(St.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(Y.x,Y.y,Y.width,Y.height),ut===0&&(M.matrix.copy(R.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),W===!0&&M.cameras.push(R)}const ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")){const ut=u.getDepthInformation(wt[0]);ut&&ut.isValid&&ut.texture&&v.init(t,ut,s.renderState)}}for(let wt=0;wt<_.length;wt++){const W=b[wt],ft=_[wt];W!==null&&ft!==void 0&&ft.update(W,_t,c||o)}v.render(t,M),bt&&bt(ot,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),g=null}const qt=new Qp;qt.setAnimationLoop(gt),this.setAnimationLoop=function(ot){bt=ot},this.dispose=function(){}}}const ps=new Hn,tA=new ve;function eA(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Kp(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,_,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m),_=x.envMap,b=x.envMapRotation;if(_&&(p.envMap.value=_,ps.copy(b),ps.x*=-1,ps.y*=-1,ps.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),p.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(ps)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const L=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*L,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nA(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const b=_.program;n.uniformBlockBinding(x,b)}function c(x,_){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",p));const L=_.program;n.updateUBOMapping(x,L);const T=t.render.frame;r[x.id]!==T&&(f(x),r[x.id]=T)}function h(x){const _=u();x.__bindingPointIndex=_;const b=i.createBuffer(),L=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const _=s[x.id],b=x.uniforms,L=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,A=b.length;T<A;T++){const D=Array.isArray(b[T])?b[T]:[b[T]];for(let S=0,M=D.length;S<M;S++){const F=D[S];if(d(F,T,S,L)===!0){const $=F.__offset,P=Array.isArray(F.value)?F.value:[F.value];let H=0;for(let U=0;U<P.length;U++){const B=P[U],et=v(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,$+H,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,H),H+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,_,b,L){const T=x.value,A=_+"_"+b;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{const D=L[A];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return L[A]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(x){const _=x.uniforms;let b=0;const L=16;for(let A=0,D=_.length;A<D;A++){const S=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,F=S.length;M<F;M++){const $=S[M],P=Array.isArray($.value)?$.value:[$.value];for(let H=0,U=P.length;H<U;H++){const B=P[H],et=v(B),z=b%L;z!==0&&L-z<et.boundary&&(b+=L-z),$.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=et.storage}}}const T=b%L;return T>0&&(b+=L-T),x.__size=b,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function p(x){const _=x.target;_.removeEventListener("dispose",p);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class iA{constructor(t={}){const{canvas:e=XM(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;const _=this;let b=!1,L=0,T=0,A=null,D=-1,S=null;const M=new ke,F=new ke;let $=null;const P=new kt(0);let H=0,U=e.width,B=e.height,et=1,z=null,nt=null;const ht=new ke(0,0,U,B),bt=new ke(0,0,U,B);let gt=!1;const qt=new Jc;let ot=!1,_t=!1;const wt=new ve,W=new It,ft=new q,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function St(){return A===null?et:1}let Y=n;function R(C,j){const it=e.getContext(C,j);return it!==null?it:null}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$c}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),Y===null){const j="webgl2";if(Y=R(j,C),Y===null)throw R(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let N,X,Z,st,E,y,O,G,V,J,lt,Q,mt,Et,dt,xt,Ct,At,Pt,Vt,k,pt,at,yt;function vt(){N=new uw(Y),N.init(),X=new sw(Y,N,t),pt=new YT(Y,N),Z=new qT(Y),st=new pw(Y),E=new LT,y=new XT(Y,N,Z,E,X,pt,st),O=new ow(_),G=new hw(_),V=new xS(Y),at=new nw(Y,V),J=new fw(Y,V,st,at),lt=new gw(Y,J,V,st),Pt=new mw(Y,X,y),xt=new rw(E),Q=new PT(_,O,G,N,X,at,xt),mt=new eA(_,E),Et=new NT,dt=new zT(N),At=new ew(_,O,G,Z,lt,f,l),Ct=new WT(_,lt,X),yt=new nA(Y,st,X,Z),Vt=new iw(Y,N,st),k=new dw(Y,N,st),st.programs=Q.programs,_.capabilities=X,_.extensions=N,_.properties=E,_.renderLists=Et,_.shadowMap=Ct,_.state=Z,_.info=st}vt();const I=new QT(_,Y);this.xr=I,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=N.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=N.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(C){C!==void 0&&(et=C,this.setSize(U,B,!1))},this.getSize=function(C){return C.set(U,B)},this.setSize=function(C,j,it=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,B=j,e.width=Math.floor(C*et),e.height=Math.floor(j*et),it===!0&&(e.style.width=C+"px",e.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(U*et,B*et).floor()},this.setDrawingBufferSize=function(C,j,it){U=C,B=j,et=it,e.width=Math.floor(C*it),e.height=Math.floor(j*it),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(ht)},this.setViewport=function(C,j,it,rt){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,j,it,rt),Z.viewport(M.copy(ht).multiplyScalar(et).round())},this.getScissor=function(C){return C.copy(bt)},this.setScissor=function(C,j,it,rt){C.isVector4?bt.set(C.x,C.y,C.z,C.w):bt.set(C,j,it,rt),Z.scissor(F.copy(bt).multiplyScalar(et).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(C){Z.setScissorTest(gt=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){nt=C},this.getClearColor=function(C){return C.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(C=!0,j=!0,it=!0){let rt=0;if(C){let tt=!1;if(A!==null){const Rt=A.texture.format;tt=Rt===kp||Rt===zp||Rt===Bp}if(tt){const Rt=A.texture.type,zt=Rt===Qi||Rt===Mr||Rt===Np||Rt===yo||Rt===Up||Rt===Fp,Ht=At.getClearColor(),Gt=At.getClearAlpha(),jt=Ht.r,Xt=Ht.g,Kt=Ht.b;zt?(d[0]=jt,d[1]=Xt,d[2]=Kt,d[3]=Gt,Y.clearBufferuiv(Y.COLOR,0,d)):(g[0]=jt,g[1]=Xt,g[2]=Kt,g[3]=Gt,Y.clearBufferiv(Y.COLOR,0,g))}else rt|=Y.COLOR_BUFFER_BIT}j&&(rt|=Y.DEPTH_BUFFER_BIT),it&&(rt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),Et.dispose(),dt.dispose(),E.dispose(),O.dispose(),G.dispose(),lt.dispose(),at.dispose(),yt.dispose(),Q.dispose(),I.dispose(),I.removeEventListener("sessionstart",Te),I.removeEventListener("sessionend",dn),Ui.stop()};function ct(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=st.autoReset,j=Ct.enabled,it=Ct.autoUpdate,rt=Ct.needsUpdate,tt=Ct.type;vt(),st.autoReset=C,Ct.enabled=j,Ct.autoUpdate=it,Ct.needsUpdate=rt,Ct.type=tt}function Dt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Lt(C){const j=C.target;j.removeEventListener("dispose",Lt),ee(j)}function ee(C){$t(C),E.remove(C)}function $t(C){const j=E.get(C).programs;j!==void 0&&(j.forEach(function(it){Q.releaseProgram(it)}),C.isShaderMaterial&&Q.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,it,rt,tt,Rt){j===null&&(j=ut);const zt=tt.isMesh&&tt.matrixWorld.determinant()<0,Ht=ym(C,j,it,rt,tt);Z.setMaterial(rt,zt);let Gt=it.index,jt=1;if(rt.wireframe===!0){if(Gt=J.getWireframeAttribute(it),Gt===void 0)return;jt=2}const Xt=it.drawRange,Kt=it.attributes.position;let we=Xt.start*jt,pn=(Xt.start+Xt.count)*jt;Rt!==null&&(we=Math.max(we,Rt.start*jt),pn=Math.min(pn,(Rt.start+Rt.count)*jt)),Gt!==null?(we=Math.max(we,0),pn=Math.min(pn,Gt.count)):Kt!=null&&(we=Math.max(we,0),pn=Math.min(pn,Kt.count));const Fe=pn-we;if(Fe<0||Fe===1/0)return;at.setup(tt,rt,Ht,it,Gt);let ci,xe=Vt;if(Gt!==null&&(ci=V.get(Gt),xe=k,xe.setIndex(ci)),tt.isMesh)rt.wireframe===!0?(Z.setLineWidth(rt.wireframeLinewidth*St()),xe.setMode(Y.LINES)):xe.setMode(Y.TRIANGLES);else if(tt.isLine){let Zt=rt.linewidth;Zt===void 0&&(Zt=1),Z.setLineWidth(Zt*St()),tt.isLineSegments?xe.setMode(Y.LINES):tt.isLineLoop?xe.setMode(Y.LINE_LOOP):xe.setMode(Y.LINE_STRIP)}else tt.isPoints?xe.setMode(Y.POINTS):tt.isSprite&&xe.setMode(Y.TRIANGLES);if(tt.isBatchedMesh)xe.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)xe.renderInstances(we,Fe,tt.count);else if(it.isInstancedBufferGeometry){const Zt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Ya=Math.min(it.instanceCount,Zt);xe.renderInstances(we,Fe,Ya)}else xe.render(we,Fe)};function te(C,j,it){C.transparent===!0&&C.side===ti&&C.forceSinglePass===!1?(C.side=on,C.needsUpdate=!0,Gn(C,j,it),C.side=Ni,C.needsUpdate=!0,Gn(C,j,it),C.side=ti):Gn(C,j,it)}this.compile=function(C,j,it=null){it===null&&(it=C),p=dt.get(it),p.init(),x.push(p),it.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(p.pushLight(tt),tt.castShadow&&p.pushShadow(tt))}),C!==it&&C.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(p.pushLight(tt),tt.castShadow&&p.pushShadow(tt))}),p.setupLights(_._useLegacyLights);const rt=new Set;return C.traverse(function(tt){const Rt=tt.material;if(Rt)if(Array.isArray(Rt))for(let zt=0;zt<Rt.length;zt++){const Ht=Rt[zt];te(Ht,it,tt),rt.add(Ht)}else te(Rt,it,tt),rt.add(Rt)}),x.pop(),p=null,rt},this.compileAsync=function(C,j,it=null){const rt=this.compile(C,j,it);return new Promise(tt=>{function Rt(){if(rt.forEach(function(zt){E.get(zt).currentProgram.isReady()&&rt.delete(zt)}),rt.size===0){tt(C);return}setTimeout(Rt,10)}N.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let fe=null;function ie(C){fe&&fe(C)}function Te(){Ui.stop()}function dn(){Ui.start()}const Ui=new Qp;Ui.setAnimationLoop(ie),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(C){fe=C,I.setAnimationLoop(C),C===null?Ui.stop():Ui.start()},I.addEventListener("sessionstart",Te),I.addEventListener("sessionend",dn),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(j),j=I.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,j,A),p=dt.get(C,x.length),p.init(),x.push(p),wt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),qt.setFromProjectionMatrix(wt),_t=this.localClippingEnabled,ot=xt.init(this.clippingPlanes,_t),v=Et.get(C,m.length),v.init(),m.push(v),Cr(C,j,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(z,nt),this.info.render.frame++,ot===!0&&xt.beginShadows();const it=p.state.shadowsArray;if(Ct.render(it,C,j),ot===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1)&&At.render(v,C),p.setupLights(_._useLegacyLights),j.isArrayCamera){const rt=j.cameras;for(let tt=0,Rt=rt.length;tt<Rt;tt++){const zt=rt[tt];Rr(v,C,zt,zt.viewport)}}else Rr(v,C,j);A!==null&&(y.updateMultisampleRenderTarget(A),y.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,j),at.resetDefaultState(),D=-1,S=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Cr(C,j,it,rt){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)it=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||qt.intersectsSprite(C)){rt&&ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(wt);const zt=lt.update(C),Ht=C.material;Ht.visible&&v.push(C,zt,Ht,it,ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||qt.intersectsObject(C))){const zt=lt.update(C),Ht=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ft.copy(C.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),ft.copy(zt.boundingSphere.center)),ft.applyMatrix4(C.matrixWorld).applyMatrix4(wt)),Array.isArray(Ht)){const Gt=zt.groups;for(let jt=0,Xt=Gt.length;jt<Xt;jt++){const Kt=Gt[jt],we=Ht[Kt.materialIndex];we&&we.visible&&v.push(C,zt,we,it,ft.z,Kt)}}else Ht.visible&&v.push(C,zt,Ht,it,ft.z,null)}}const Rt=C.children;for(let zt=0,Ht=Rt.length;zt<Ht;zt++)Cr(Rt[zt],j,it,rt)}function Rr(C,j,it,rt){const tt=C.opaque,Rt=C.transmissive,zt=C.transparent;p.setupLightsView(it),ot===!0&&xt.setGlobalState(_.clippingPlanes,it),Rt.length>0&&Is(tt,Rt,j,it),rt&&Z.viewport(M.copy(rt)),tt.length>0&&Ve(tt,j,it),Rt.length>0&&Ve(Rt,j,it),zt.length>0&&Ve(zt,j,it),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Is(C,j,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Cs(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float")?Ma:Qi,minFilter:Es,samples:4,stencilBuffer:r});const jt=E.get(p.state.transmissionRenderTarget);jt.__isTransmissionRenderTarget=!0}const Rt=p.state.transmissionRenderTarget;_.getDrawingBufferSize(W),Rt.setSize(W.x,W.y);const zt=_.getRenderTarget();_.setRenderTarget(Rt),_.getClearColor(P),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear();const Ht=_.toneMapping;_.toneMapping=Ji,Ve(C,it,rt),y.updateMultisampleRenderTarget(Rt),y.updateRenderTargetMipmap(Rt);let Gt=!1;for(let jt=0,Xt=j.length;jt<Xt;jt++){const Kt=j[jt],we=Kt.object,pn=Kt.geometry,Fe=Kt.material,ci=Kt.group;if(Fe.side===ti&&we.layers.test(rt.layers)){const xe=Fe.side;Fe.side=on,Fe.needsUpdate=!0,Mn(we,it,rt,pn,Fe,ci),Fe.side=xe,Fe.needsUpdate=!0,Gt=!0}}Gt===!0&&(y.updateMultisampleRenderTarget(Rt),y.updateRenderTargetMipmap(Rt)),_.setRenderTarget(zt),_.setClearColor(P,H),_.toneMapping=Ht}function Ve(C,j,it){const rt=j.isScene===!0?j.overrideMaterial:null;for(let tt=0,Rt=C.length;tt<Rt;tt++){const zt=C[tt],Ht=zt.object,Gt=zt.geometry,jt=rt===null?zt.material:rt,Xt=zt.group;Ht.layers.test(it.layers)&&Mn(Ht,j,it,Gt,jt,Xt)}}function Mn(C,j,it,rt,tt,Rt){C.onBeforeRender(_,j,it,rt,tt,Rt),C.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),tt.onBeforeRender(_,j,it,rt,C,Rt),tt.transparent===!0&&tt.side===ti&&tt.forceSinglePass===!1?(tt.side=on,tt.needsUpdate=!0,_.renderBufferDirect(it,j,rt,tt,C,Rt),tt.side=Ni,tt.needsUpdate=!0,_.renderBufferDirect(it,j,rt,tt,C,Rt),tt.side=ti):_.renderBufferDirect(it,j,rt,tt,C,Rt),C.onAfterRender(_,j,it,rt,tt,Rt)}function Gn(C,j,it){j.isScene!==!0&&(j=ut);const rt=E.get(C),tt=p.state.lights,Rt=p.state.shadowsArray,zt=tt.state.version,Ht=Q.getParameters(C,tt.state,Rt,j,it),Gt=Q.getProgramCacheKey(Ht);let jt=rt.programs;rt.environment=C.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(C.isMeshStandardMaterial?G:O).get(C.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",Lt),jt=new Map,rt.programs=jt);let Xt=jt.get(Gt);if(Xt!==void 0){if(rt.currentProgram===Xt&&rt.lightsStateVersion===zt)return fh(C,Ht),Xt}else Ht.uniforms=Q.getUniforms(C),C.onBuild(it,Ht,_),C.onBeforeCompile(Ht,_),Xt=Q.acquireProgram(Ht,Gt),jt.set(Gt,Xt),rt.uniforms=Ht.uniforms;const Kt=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Kt.clippingPlanes=xt.uniform),fh(C,Ht),rt.needsLights=Sm(C),rt.lightsStateVersion=zt,rt.needsLights&&(Kt.ambientLightColor.value=tt.state.ambient,Kt.lightProbe.value=tt.state.probe,Kt.directionalLights.value=tt.state.directional,Kt.directionalLightShadows.value=tt.state.directionalShadow,Kt.spotLights.value=tt.state.spot,Kt.spotLightShadows.value=tt.state.spotShadow,Kt.rectAreaLights.value=tt.state.rectArea,Kt.ltc_1.value=tt.state.rectAreaLTC1,Kt.ltc_2.value=tt.state.rectAreaLTC2,Kt.pointLights.value=tt.state.point,Kt.pointLightShadows.value=tt.state.pointShadow,Kt.hemisphereLights.value=tt.state.hemi,Kt.directionalShadowMap.value=tt.state.directionalShadowMap,Kt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Kt.spotShadowMap.value=tt.state.spotShadowMap,Kt.spotLightMatrix.value=tt.state.spotLightMatrix,Kt.spotLightMap.value=tt.state.spotLightMap,Kt.pointShadowMap.value=tt.state.pointShadowMap,Kt.pointShadowMatrix.value=tt.state.pointShadowMatrix),rt.currentProgram=Xt,rt.uniformsList=null,Xt}function An(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=ua.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function fh(C,j){const it=E.get(C);it.outputColorSpace=j.outputColorSpace,it.batching=j.batching,it.instancing=j.instancing,it.instancingColor=j.instancingColor,it.instancingMorph=j.instancingMorph,it.skinning=j.skinning,it.morphTargets=j.morphTargets,it.morphNormals=j.morphNormals,it.morphColors=j.morphColors,it.morphTargetsCount=j.morphTargetsCount,it.numClippingPlanes=j.numClippingPlanes,it.numIntersection=j.numClipIntersection,it.vertexAlphas=j.vertexAlphas,it.vertexTangents=j.vertexTangents,it.toneMapping=j.toneMapping}function ym(C,j,it,rt,tt){j.isScene!==!0&&(j=ut),y.resetTextureUnits();const Rt=j.fog,zt=rt.isMeshStandardMaterial?j.environment:null,Ht=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ss,Gt=(rt.isMeshStandardMaterial?G:O).get(rt.envMap||zt),jt=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Xt=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Kt=!!it.morphAttributes.position,we=!!it.morphAttributes.normal,pn=!!it.morphAttributes.color;let Fe=Ji;rt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Fe=_.toneMapping);const ci=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,xe=ci!==void 0?ci.length:0,Zt=E.get(rt),Ya=p.state.lights;if(ot===!0&&(_t===!0||C!==S)){const Sn=C===S&&rt.id===D;xt.setState(rt,C,Sn)}let _e=!1;rt.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ya.state.version||Zt.outputColorSpace!==Ht||tt.isBatchedMesh&&Zt.batching===!1||!tt.isBatchedMesh&&Zt.batching===!0||tt.isInstancedMesh&&Zt.instancing===!1||!tt.isInstancedMesh&&Zt.instancing===!0||tt.isSkinnedMesh&&Zt.skinning===!1||!tt.isSkinnedMesh&&Zt.skinning===!0||tt.isInstancedMesh&&Zt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Zt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Zt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Zt.instancingMorph===!1&&tt.morphTexture!==null||Zt.envMap!==Gt||rt.fog===!0&&Zt.fog!==Rt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==xt.numPlanes||Zt.numIntersection!==xt.numIntersection)||Zt.vertexAlphas!==jt||Zt.vertexTangents!==Xt||Zt.morphTargets!==Kt||Zt.morphNormals!==we||Zt.morphColors!==pn||Zt.toneMapping!==Fe||Zt.morphTargetsCount!==xe)&&(_e=!0):(_e=!0,Zt.__version=rt.version);let rs=Zt.currentProgram;_e===!0&&(rs=Gn(rt,j,tt));let dh=!1,Pr=!1,$a=!1;const We=rs.getUniforms(),Fi=Zt.uniforms;if(Z.useProgram(rs.program)&&(dh=!0,Pr=!0,$a=!0),rt.id!==D&&(D=rt.id,Pr=!0),dh||S!==C){We.setValue(Y,"projectionMatrix",C.projectionMatrix),We.setValue(Y,"viewMatrix",C.matrixWorldInverse);const Sn=We.map.cameraPosition;Sn!==void 0&&Sn.setValue(Y,ft.setFromMatrixPosition(C.matrixWorld)),X.logarithmicDepthBuffer&&We.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&We.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Pr=!0,$a=!0)}if(tt.isSkinnedMesh){We.setOptional(Y,tt,"bindMatrix"),We.setOptional(Y,tt,"bindMatrixInverse");const Sn=tt.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),We.setValue(Y,"boneTexture",Sn.boneTexture,y))}tt.isBatchedMesh&&(We.setOptional(Y,tt,"batchingTexture"),We.setValue(Y,"batchingTexture",tt._matricesTexture,y));const ja=it.morphAttributes;if((ja.position!==void 0||ja.normal!==void 0||ja.color!==void 0)&&Pt.update(tt,it,rs),(Pr||Zt.receiveShadow!==tt.receiveShadow)&&(Zt.receiveShadow=tt.receiveShadow,We.setValue(Y,"receiveShadow",tt.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Fi.envMap.value=Gt,Fi.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&j.environment!==null&&(Fi.envMapIntensity.value=j.environmentIntensity),Pr&&(We.setValue(Y,"toneMappingExposure",_.toneMappingExposure),Zt.needsLights&&Mm(Fi,$a),Rt&&rt.fog===!0&&mt.refreshFogUniforms(Fi,Rt),mt.refreshMaterialUniforms(Fi,rt,et,B,p.state.transmissionRenderTarget),ua.upload(Y,An(Zt),Fi,y)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(ua.upload(Y,An(Zt),Fi,y),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&We.setValue(Y,"center",tt.center),We.setValue(Y,"modelViewMatrix",tt.modelViewMatrix),We.setValue(Y,"normalMatrix",tt.normalMatrix),We.setValue(Y,"modelMatrix",tt.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Sn=rt.uniformsGroups;for(let Ka=0,bm=Sn.length;Ka<bm;Ka++){const ph=Sn[Ka];yt.update(ph,rs),yt.bind(ph,rs)}}return rs}function Mm(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Sm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,j,it){E.get(C.texture).__webglTexture=j,E.get(C.depthTexture).__webglTexture=it;const rt=E.get(C);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=it===void 0,rt.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const it=E.get(C);it.__webglFramebuffer=j,it.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,it=0){A=C,L=j,T=it;let rt=!0,tt=null,Rt=!1,zt=!1;if(C){const Gt=E.get(C);Gt.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(Y.FRAMEBUFFER,null),rt=!1):Gt.__webglFramebuffer===void 0?y.setupRenderTarget(C):Gt.__hasExternalTextures&&y.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);const jt=C.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(zt=!0);const Xt=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[j])?tt=Xt[j][it]:tt=Xt[j],Rt=!0):C.samples>0&&y.useMultisampledRTT(C)===!1?tt=E.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?tt=Xt[it]:tt=Xt,M.copy(C.viewport),F.copy(C.scissor),$=C.scissorTest}else M.copy(ht).multiplyScalar(et).floor(),F.copy(bt).multiplyScalar(et).floor(),$=gt;if(Z.bindFramebuffer(Y.FRAMEBUFFER,tt)&&rt&&Z.drawBuffers(C,tt),Z.viewport(M),Z.scissor(F),Z.setScissorTest($),Rt){const Gt=E.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+j,Gt.__webglTexture,it)}else if(zt){const Gt=E.get(C.texture),jt=j||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Gt.__webglTexture,it||0,jt)}D=-1},this.readRenderTargetPixels=function(C,j,it,rt,tt,Rt,zt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&zt!==void 0&&(Ht=Ht[zt]),Ht){Z.bindFramebuffer(Y.FRAMEBUFFER,Ht);try{const Gt=C.texture,jt=Gt.format,Xt=Gt.type;if(jt!==ii&&pt.convert(jt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Kt=Xt===Ma&&(N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float"));if(Xt!==Qi&&pt.convert(Xt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&Xt!==Ci&&!Kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-rt&&it>=0&&it<=C.height-tt&&Y.readPixels(j,it,rt,tt,pt.convert(jt),pt.convert(Xt),Rt)}finally{const Gt=A!==null?E.get(A).__webglFramebuffer:null;Z.bindFramebuffer(Y.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(C,j,it=0){const rt=Math.pow(2,-it),tt=Math.floor(j.image.width*rt),Rt=Math.floor(j.image.height*rt);y.setTexture2D(j,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,it,0,0,C.x,C.y,tt,Rt),Z.unbindTexture()},this.copyTextureToTexture=function(C,j,it,rt=0){const tt=j.image.width,Rt=j.image.height,zt=pt.convert(it.format),Ht=pt.convert(it.type);y.setTexture2D(it,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,it.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,it.unpackAlignment),j.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,rt,C.x,C.y,tt,Rt,zt,Ht,j.image.data):j.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,rt,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,zt,j.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,rt,C.x,C.y,zt,Ht,j.image),rt===0&&it.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(C,j,it,rt,tt=0){const Rt=Math.round(C.max.x-C.min.x),zt=Math.round(C.max.y-C.min.y),Ht=C.max.z-C.min.z+1,Gt=pt.convert(rt.format),jt=pt.convert(rt.type);let Xt;if(rt.isData3DTexture)y.setTexture3D(rt,0),Xt=Y.TEXTURE_3D;else if(rt.isDataArrayTexture||rt.isCompressedArrayTexture)y.setTexture2DArray(rt,0),Xt=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,rt.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,rt.unpackAlignment);const Kt=Y.getParameter(Y.UNPACK_ROW_LENGTH),we=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),pn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Fe=Y.getParameter(Y.UNPACK_SKIP_ROWS),ci=Y.getParameter(Y.UNPACK_SKIP_IMAGES),xe=it.isCompressedTexture?it.mipmaps[tt]:it.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,xe.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,xe.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,C.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,C.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,C.min.z),it.isDataTexture||it.isData3DTexture?Y.texSubImage3D(Xt,tt,j.x,j.y,j.z,Rt,zt,Ht,Gt,jt,xe.data):rt.isCompressedArrayTexture?Y.compressedTexSubImage3D(Xt,tt,j.x,j.y,j.z,Rt,zt,Ht,Gt,xe.data):Y.texSubImage3D(Xt,tt,j.x,j.y,j.z,Rt,zt,Ht,Gt,jt,xe),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Kt),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,we),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,pn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Fe),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ci),tt===0&&rt.generateMipmaps&&Y.generateMipmap(Xt),Z.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?y.setTextureCube(C,0):C.isData3DTexture?y.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?y.setTexture2DArray(C,0):y.setTexture2D(C,0),Z.unbindTexture()},this.resetState=function(){L=0,T=0,A=null,Z.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Kc?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===qa?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class th{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new th(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sA extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class rA extends Ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=un,h=un,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lf extends Bn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zs=new ve,If=new ve,ta=[],Nf=new Ps,oA=new ve,zr=new ue,kr=new So;class aA extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Lf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,oA)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ps),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Nf.copy(t.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Nf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new So),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),kr.copy(t.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(kr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),t.ray.intersectsSphere(kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),If.multiplyMatrices(n,Zs),zr.matrixWorld=If,zr.raycast(t,ta);for(let o=0,a=ta.length;o<a;o++){const l=ta[o];l.instanceId=r,l.object=this,e.push(l)}ta.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Lf(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rA(new Float32Array(s*this.count),s,this.count,Op,Ci));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class lA extends Ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new It:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new q,s=[],r=[],o=[],a=new q,l=new ve;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new q)}r[0]=new q,o[0]=new q;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ze(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ze(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class eh extends li{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new It){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cA extends eh{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ea=new q,Wl=new nh,ql=new nh,Xl=new nh;class hA extends li{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new q){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ea.subVectors(s[0],s[1]).add(s[0]),c=ea);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ea),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Wl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,p),ql.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,p),Xl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Wl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ql.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Xl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Wl.calc(l),ql.calc(l),Xl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new q().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Df(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function uA(i,t){const e=1-i;return e*e*t}function fA(i,t){return 2*(1-i)*i*t}function dA(i,t){return i*i*t}function ro(i,t,e,n){return uA(i,t)+fA(i,e)+dA(i,n)}function pA(i,t){const e=1-i;return e*e*e*t}function mA(i,t){const e=1-i;return 3*e*e*i*t}function gA(i,t){return 3*(1-i)*i*i*t}function vA(i,t){return i*i*i*t}function oo(i,t,e,n,s){return pA(i,t)+mA(i,e)+gA(i,n)+vA(i,s)}class om extends li{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(oo(t,s.x,r.x,o.x,a.x),oo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _A extends li{constructor(t=new q,e=new q,n=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new q){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(oo(t,s.x,r.x,o.x,a.x),oo(t,s.y,r.y,o.y,a.y),oo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class am extends li{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xA extends li{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lm extends li{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ro(t,s.x,r.x,o.x),ro(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yA extends li{constructor(t=new q,e=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ro(t,s.x,r.x,o.x),ro(t,s.y,r.y,o.y),ro(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cm extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Df(a,l.x,c.x,h.x,u.x),Df(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new It().fromArray(s))}return this}}var Uf=Object.freeze({__proto__:null,ArcCurve:cA,CatmullRomCurve3:hA,CubicBezierCurve:om,CubicBezierCurve3:_A,EllipseCurve:eh,LineCurve:am,LineCurve3:xA,QuadraticBezierCurve:lm,QuadraticBezierCurve3:yA,SplineCurve:cm});class MA extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uf[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Uf[s.type]().fromJSON(s))}return this}}class SA extends MA{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new am(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new lm(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new om(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new cm(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new eh(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ih extends Tn{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new q,f=new It,d=new q,g=new q,v=new q;let p=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,d.x=m*1,d.y=-p,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let x=0;x<=e;x++){const _=n+x*h*s,b=Math.sin(_),L=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*b,u.y=t[T].y,u.z=t[T].x*L,o.push(u.x,u.y,u.z),f.x=x/e,f.y=T/(t.length-1),a.push(f.x,f.y);const A=l[3*T+0]*b,D=l[3*T+1],S=l[3*T+0]*L;c.push(A,D,S)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){const b=_+x*t.length,L=b,T=b+t.length,A=b+t.length+1,D=b+1;r.push(L,T,D),r.push(A,D,T)}this.setIndex(r),this.setAttribute("position",new Ee(o,3)),this.setAttribute("uv",new Ee(a,2)),this.setAttribute("normal",new Ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ih(t.points,t.segments,t.phiStart,t.phiLength)}}class sh extends ih{constructor(t=1,e=1,n=4,s=8){const r=new SA;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new sh(t.radius,t.length,t.capSegments,t.radialSegments)}}class rh extends Tn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new q,h=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(a,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ca extends Tn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],p=n/2;let m=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(d,2));function x(){const b=new q,L=new q;let T=0;const A=(e-t)/n;for(let D=0;D<=r;D++){const S=[],M=D/r,F=M*(e-t)+t;for(let $=0;$<=s;$++){const P=$/s,H=P*l+a,U=Math.sin(H),B=Math.cos(H);L.x=F*U,L.y=-M*n+p,L.z=F*B,u.push(L.x,L.y,L.z),b.set(U,A,B).normalize(),f.push(b.x,b.y,b.z),d.push(P,1-M),S.push(g++)}v.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){const M=v[S][D],F=v[S+1][D],$=v[S+1][D+1],P=v[S][D+1];h.push(M,F,P),h.push(F,$,P),T+=6}c.addGroup(m,T,0),m+=T}function _(b){const L=g,T=new It,A=new q;let D=0;const S=b===!0?t:e,M=b===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,p*M,0),f.push(0,M,0),d.push(.5,.5),g++;const F=g;for(let $=0;$<=s;$++){const H=$/s*l+a,U=Math.cos(H),B=Math.sin(H);A.x=S*B,A.y=p*M,A.z=S*U,u.push(A.x,A.y,A.z),f.push(0,M,0),T.x=U*.5+.5,T.y=B*.5*M+.5,d.push(T.x,T.y),g++}for(let $=0;$<s;$++){const P=L+$,H=F+$;b===!0?h.push(H,H+1,P):h.push(H+1,H,P),D+=3}c.addGroup(m,D,b===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oh extends Tn{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new q,g=new It;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const x=m+p,_=x,b=x+n+1,L=x+n+2,T=x+1;a.push(_,b,T),a.push(b,L,T)}}this.setIndex(a),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class bo extends Tn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new q,f=new q,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const x=[],_=m/n;let b=0;m===0&&o===0?b=.5/e:m===n&&l===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){const T=L/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(T+b,1-_),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const _=h[m][x+1],b=h[m][x],L=h[m+1][x],T=h[m+1][x+1];(m!==0||o>0)&&d.push(_,b,T),(m!==n-1||l<Math.PI)&&d.push(b,L,T)}this.setIndex(d),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Yl extends Ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ff extends Ls{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new kt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Js extends Ls{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ah extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class bA extends ah{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $l=new ve,Of=new q,Bf=new q;class EA{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Of.setFromMatrixPosition(t.matrixWorld),e.position.copy(Of),Bf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bf),e.updateMatrixWorld(),$l.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wA extends EA{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Sr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class TA extends ah{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wA}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class AA extends ah{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);class Fn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new w);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new w);const n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Fn);const n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],u=n[5],f=n[6],d=n[7],g=n[8],v=s[0],p=s[1],m=s[2],x=s[3],_=s[4],b=s[5],L=s[6],T=s[7],A=s[8];return r[0]=o*v+a*x+l*L,r[1]=o*p+a*_+l*T,r[2]=o*m+a*b+l*A,r[3]=c*v+h*x+u*L,r[4]=c*p+h*_+u*T,r[5]=c*m+h*b+u*A,r[6]=f*v+d*x+g*L,r[7]=f*p+d*_+g*T,r[8]=f*m+d*b+g*A,e}scale(t,e){e===void 0&&(e=new Fn);const n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new w);const n=3,s=4,r=[];let o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let h;const u=4;let f;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){h=u;do f=u-h,r[f+s*o]+=r[f+s*a];while(--h);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const d=r[o+s*a]/r[o+s*o];h=u;do f=u-h,r[f+s*a]=f<=o?0:r[f+s*a]-r[f+s*o]*d;while(--h)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Fn);const e=3,n=6,s=CA;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3;const l=a;let c;const h=n;let u;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=h;do u=h-c,s[u+n*r]+=s[u+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){const f=s[r+n*o]/s[r+n*r];c=h;do u=h-c,s[u+n*o]=u<=r?0:s[u+n*o]-s[u+n*r]*f;while(--c)}}while(--a);r=2;do{o=r-1;do{const f=s[r+n*o]/s[r+n*r];c=n;do u=n-c,s[u+n*o]=s[u+n*o]-s[u+n*r]*f;while(--c)}while(o--)}while(--r);r=2;do{const f=1/s[r+n*r];c=n;do u=n-c,s[u+n*r]=s[u+n*r]*f;while(--c)}while(r--);r=2;do{o=2;do{if(u=s[e+o+n*r],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,u)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,l=s+s,c=e*o,h=e*a,u=e*l,f=n*a,d=n*l,g=s*l,v=r*o,p=r*a,m=r*l,x=this.elements;return x[3*0+0]=1-(f+g),x[3*0+1]=h-m,x[3*0+2]=u+p,x[3*1+0]=h+m,x[3*1+1]=1-(c+g),x[3*1+2]=d-v,x[3*2+0]=u-p,x[3*2+1]=d+v,x[3*2+2]=1-(c+f),this}transpose(t){t===void 0&&(t=new Fn);const e=this.elements,n=t.elements;let s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}}const CA=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new w);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new w(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new w(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Fn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new w);const e=this.x,n=this.y,s=this.z;let r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new w);const n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new w),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new w),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new w),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const s=RA,r=1/n;s.set(this.x*r,this.y*r,this.z*r);const o=PA;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(zf),zf.almostEquals(t,e)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const RA=new w,PA=new w,zf=new w;class yn{constructor(t){t===void 0&&(t={}),this.lowerBound=new w,this.upperBound=new w,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,kf),c=kf),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new yn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),s.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Hf,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(s,r,o,a,l,c,h,u);for(let f=0;f!==8;f++){const d=n[f];t.pointToLocal(d,d)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Hf,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(s,r,o,a,l,c,h,u);for(let f=0;f!==8;f++){const d=n[f];t.pointToWorld(d,d)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,u=(this.lowerBound.z-n.z)*o,f=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(u,f)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(u,f));return!(g<0||d>g)}}const kf=new w,Hf=[new w,new w,new w,new w,new w,new w,new w,new w];class Vf{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){const r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class hm{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}}class Re{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new w),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=LA,s=IA;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Re);const n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+s*c-r*l,e.y=s*h+o*l+r*a-n*c,e.z=r*h+o*c+n*l-s*a,e.w=o*h-n*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new Re);const e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Re),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new w);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*s,u=c*s+l*n-o*r,f=c*r+o*s-a*n,d=-o*n-a*s-l*r;return e.x=h*c+d*-o+u*-l-f*-a,e.y=u*c+d*-a+f*-o-h*-l,e.z=f*c+d*-l+h*-a-u*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){const u=o*o,f=a*a,d=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*f-2*d),s=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*u-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):s==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):s==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):s==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):s==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):s==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new Re(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Re);const s=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,u=t.w,f,d,g,v,p;return d=s*l+r*c+o*h+a*u,d<0&&(d=-d,l=-l,c=-c,h=-h,u=-u),1-d>1e-6?(f=Math.acos(d),g=Math.sin(f),v=Math.sin((1-e)*f)/g,p=Math.sin(e*f)/g):(v=1-e,p=e),n.x=v*s+p*l,n.y=v*r+p*c,n.z=v*o+p*h,n.w=v*a+p*u,n}integrate(t,e,n,s){s===void 0&&(s=new Re);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,u=this.w,f=e*.5;return s.x+=f*(r*u+o*h-a*c),s.y+=f*(o*u+a*l-r*h),s.z+=f*(a*u+r*c-o*l),s.w+=f*(-r*l-o*c-a*h),s}}const LA=new w,IA=new w,NA={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Nt{constructor(t){t===void 0&&(t={}),this.id=Nt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Nt.idCounter=0;Nt.types=NA;class se{constructor(t){t===void 0&&(t={}),this.position=new w,this.quaternion=new Re,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return se.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return se.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new w),n.vsub(t,s),e.conjugate(Gf),Gf.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new w),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new w),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new w),e.w*=-1,e.vmult(n,s),e.w*=-1,s}}const Gf=new Re;class ao extends Nt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:Nt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const s=new w;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(s)||n[u].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new w;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];ao.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){const r=new w,o=new w;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,l,c){const h=new w;let u=-1,f=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),r.vmult(h,h);const v=h.dot(o);v>f&&(f=v,u=g)}const d=[];for(let g=0;g<n.faces[u].length;g++){const v=n.vertices[n.faces[u][g]],p=new w;p.copy(v),r.vmult(p,p),s.vadd(p,p),d.push(p)}u>=0&&this.clipFaceAgainstHull(o,t,e,d,a,l,c)}findSeparatingAxis(t,e,n,s,r,o,a,l){const c=new w,h=new w,u=new w,f=new w,d=new w,g=new w;let v=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],c);const x=p.testSepAxis(c,t,e,n,s,r);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}else{const m=a?a.length:p.faces.length;for(let x=0;x<m;x++){const _=a?a[x]:x;c.copy(p.faceNormals[_]),n.vmult(c,c);const b=p.testSepAxis(c,t,e,n,s,r);if(b===!1)return!1;b<v&&(v=b,o.copy(c))}}if(t.uniqueAxes)for(let m=0;m!==t.uniqueAxes.length;m++){r.vmult(t.uniqueAxes[m],h);const x=p.testSepAxis(h,t,e,n,s,r);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}else{const m=l?l.length:t.faces.length;for(let x=0;x<m;x++){const _=l?l[x]:x;h.copy(t.faceNormals[_]),r.vmult(h,h);const b=p.testSepAxis(h,t,e,n,s,r);if(b===!1)return!1;b<v&&(v=b,o.copy(h))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],f);for(let x=0;x!==t.uniqueEdges.length;x++)if(r.vmult(t.uniqueEdges[x],d),f.cross(d,g),!g.almostZero()){g.normalize();const _=p.testSepAxis(g,t,e,n,s,r);if(_===!1)return!1;_<v&&(v=_,o.copy(g))}}return s.vsub(e,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){const a=this;ao.project(a,t,n,s,jl),ao.project(e,t,r,o,Kl);const l=jl[0],c=jl[1],h=Kl[0],u=Kl[1];if(l<u||h<c)return!1;const f=l-u,d=h-c;return f<d?f:d}calculateLocalInertia(t,e){const n=new w,s=new w;this.computeLocalAABB(s,n);const r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){const l=new w,c=new w,h=new w,u=new w,f=new w,d=new w,g=new w,v=new w,p=this,m=[],x=s,_=m;let b=-1,L=Number.MAX_VALUE;for(let M=0;M<p.faces.length;M++){l.copy(p.faceNormals[M]),n.vmult(l,l);const F=l.dot(t);F<L&&(L=F,b=M)}if(b<0)return;const T=p.faces[b];T.connectedFaces=[];for(let M=0;M<p.faces.length;M++)for(let F=0;F<p.faces[M].length;F++)T.indexOf(p.faces[M][F])!==-1&&M!==b&&T.connectedFaces.indexOf(M)===-1&&T.connectedFaces.push(M);const A=T.length;for(let M=0;M<A;M++){const F=p.vertices[T[M]],$=p.vertices[T[(M+1)%A]];F.vsub($,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),u.copy(this.faceNormals[b]),n.vmult(u,u),e.vadd(u,u),h.cross(u,f),f.negate(f),d.copy(F),n.vmult(d,d),e.vadd(d,d);const P=T.connectedFaces[M];g.copy(this.faceNormals[P]);const H=this.getPlaneConstantOfFace(P);v.copy(g),n.vmult(v,v);const U=H-v.dot(e);for(this.clipFaceAgainstPlane(x,_,v,U);x.length;)x.shift();for(;_.length;)x.push(_.shift())}g.copy(this.faceNormals[b]);const D=this.getPlaneConstantOfFace(b);v.copy(g),n.vmult(v,v);const S=D-v.dot(e);for(let M=0;M<x.length;M++){let F=v.dot(x[M])+S;if(F<=r&&(console.log(`clamped: depth=${F} to minDist=${r}`),F=r),F<=o){const $=x[M];if(F<=1e-6){const P={point:$,normal:v,depth:F};a.push(P)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+s;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+s,r<0)if(o<0){const u=new w;u.copy(c),e.push(u)}else{const u=new w;l.lerp(c,r/(r-o),u),e.push(u)}else if(o<0){const u=new w;l.lerp(c,r/(r-o),u),e.push(u),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new w);const n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){const r=this.vertices;let o,a,l,c,h,u,f=new w;for(let d=0;d<r.length;d++){f.copy(r[d]),e.vmult(f,f),t.vadd(f,f);const g=f;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}n.set(o,a,l),s.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new w);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,s=this.faceNormals,r=new w;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=e[n[o][0]],c=new w;t.vsub(l,c);const h=a.dot(c),u=new w;r.vsub(l,u);const f=a.dot(u);if(h<0&&f>0||h>0&&f<0)return!1}return-1}static project(t,e,n,s,r){const o=t.vertices.length,a=DA;let l=0,c=0;const h=UA,u=t.vertices;h.setZero(),se.vectorToLocalFrame(n,s,e,a),se.pointToLocalFrame(n,s,h,h);const f=h.dot(a);c=l=u[0].dot(a);for(let d=1;d<o;d++){const g=u[d].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=f,l-=f,c>l){const d=c;c=l,l=d}r[0]=l,r[1]=c}}const jl=[],Kl=[];new w;const DA=new w,UA=new w;class lh extends Nt{constructor(t){super({type:Nt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=w,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new ao({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new w),lh.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)Wi.set(r[o][0],r[o][1],r[o][2]),e.vmult(Wi,Wi),t.vadd(Wi,Wi),n(Wi.x,Wi.y,Wi.z)}calculateWorldAABB(t,e,n,s){const r=this.halfExtents;qn[0].set(r.x,r.y,r.z),qn[1].set(-r.x,r.y,r.z),qn[2].set(-r.x,-r.y,r.z),qn[3].set(-r.x,-r.y,-r.z),qn[4].set(r.x,-r.y,-r.z),qn[5].set(r.x,r.y,-r.z),qn[6].set(-r.x,r.y,-r.z),qn[7].set(r.x,-r.y,r.z);const o=qn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=qn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>s.x&&(s.x=c),h>s.y&&(s.y=h),u>s.z&&(s.z=u),c<n.x&&(n.x=c),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const Wi=new w,qn=[new w,new w,new w,new w,new w,new w,new w,new w],ch={DYNAMIC:1,STATIC:2,KINEMATIC:4},hh={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ut extends hm{constructor(t){t===void 0&&(t={}),super(),this.id=Ut.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new w,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new w,this.force=new w;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Ut.STATIC:Ut.DYNAMIC,typeof t.type==typeof Ut.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Ut.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Re,this.initQuaternion=new Re,this.previousQuaternion=new Re,this.interpolatedQuaternion=new Re,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new w,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Fn,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Fn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new w(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new w(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new yn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Ut.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Ut.SLEEPING&&this.dispatchEvent(Ut.wakeupEvent)}sleep(){this.sleepState=Ut.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===Ut.AWAKE&&n<s?(this.sleepState=Ut.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Ut.sleepyEvent)):e===Ut.SLEEPY&&n>s?this.wakeUp():e===Ut.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ut.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ut.SLEEPING||this.type===Ut.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new w),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new w),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}addShape(t,e,n){const s=new w,r=new Re;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let s=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=FA,o=OA,a=this.quaternion,l=this.aabb,c=BA;for(let h=0;h!==s;h++){const u=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),u.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=zA,s=kA;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new w),this.type!==Ut.DYNAMIC)return;this.sleepState===Ut.SLEEPING&&this.wakeUp();const n=HA;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new w),this.type!==Ut.DYNAMIC)return;const n=VA,s=GA;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===Ut.DYNAMIC&&(this.sleepState===Ut.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new w),this.type!==Ut.DYNAMIC)return;this.sleepState===Ut.SLEEPING&&this.wakeUp();const n=e,s=WA;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=qA;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new w),this.type!==Ut.DYNAMIC)return;const n=XA,s=YA;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){const t=$A;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),lh.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new w;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ut.DYNAMIC||this.type===Ut.KINEMATIC)||this.sleepState===Ut.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,f=this.linearFactor,d=h*t;s.x+=a.x*d*f.x,s.y+=a.y*d*f.y,s.z+=a.z*d*f.z;const g=u.elements,v=this.angularFactor,p=l.x*v.x,m=l.y*v.y,x=l.z*v.z;r.x+=t*(g[0]*p+g[1]*m+g[2]*x),r.y+=t*(g[3]*p+g[4]*m+g[5]*x),r.z+=t*(g[6]*p+g[7]*m+g[8]*x),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ut.idCounter=0;Ut.COLLIDE_EVENT_NAME="collide";Ut.DYNAMIC=ch.DYNAMIC;Ut.STATIC=ch.STATIC;Ut.KINEMATIC=ch.KINEMATIC;Ut.AWAKE=hh.AWAKE;Ut.SLEEPY=hh.SLEEPY;Ut.SLEEPING=hh.SLEEPING;Ut.wakeupEvent={type:"wakeup"};Ut.sleepyEvent={type:"sleepy"};Ut.sleepEvent={type:"sleep"};const FA=new w,OA=new Re,BA=new yn,zA=new Fn,kA=new Fn;new Fn;const HA=new w,VA=new w,GA=new w,WA=new w,qA=new w,XA=new w,YA=new w,$A=new w;class jA{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Ut.STATIC||t.sleepState===Ut.SLEEPING)&&(e.type&Ut.STATIC||e.sleepState===Ut.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){const r=KA;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){const n=ZA,s=JA,r=QA,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new w;t.position.vsub(e.position,n);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const KA=new w;new w;new Re;new w;const ZA={keys:[]},JA=[],QA=[];new w;new w;new w;class um extends jA{constructor(){super()}collisionPairs(t,e,n){const s=t.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class Ra{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let fm,dm,pm,mm,gm,vm,_m;const uh={CLOSEST:1,ANY:2,ALL:4};fm=Nt.types.SPHERE;dm=Nt.types.PLANE;pm=Nt.types.BOX;mm=Nt.types.CYLINDER;gm=Nt.types.CONVEXPOLYHEDRON;vm=Nt.types.HEIGHTFIELD;_m=Nt.types.TRIMESH;class Ce{get[fm](){return this._intersectSphere}get[dm](){return this._intersectPlane}get[pm](){return this._intersectBox}get[mm](){return this._intersectConvex}get[gm](){return this._intersectConvex}get[vm](){return this._intersectHeightfield}get[_m](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new w),e===void 0&&(e=new w),this.from=t.clone(),this.to=e.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ce.ANY,this.result=new Ra,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ce.ANY,this.result=e.result||new Ra,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Wf),Zl.length=0,t.broadphase.aabbQuery(t,Wf,Zl),this.intersectBodies(Zl),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const s=t1,r=e1;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){const r=this.from;if(m1(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){const o=this.from,a=this.to,l=this.direction,c=new w(0,0,1);e.vmult(c,c);const h=new w;o.vsub(n,h);const u=h.dot(c);a.vsub(n,h);const f=h.dot(c);if(u*f>0||o.distanceTo(a)<u)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const g=new w,v=new w,p=new w;o.vsub(n,g);const m=-c.dot(g)/d;l.scale(m,v),o.vadd(v,p),this.reportIntersection(c,p,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;const o=n1;o.from.copy(this.from),o.to.copy(this.to),se.pointToLocalFrame(n,e,o.from,o.from),se.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=i1;let l,c,h,u;l=c=0,h=u=t.data.length-1;const f=new yn;o.getAABB(f),t.getIndexOfPosition(f.lowerBound.x,f.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(f.upperBound.x,f.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let d=l;d<h;d++)for(let g=c;g<u;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,g,f),!!f.overlapsRay(o)){if(t.getConvexTrianglePillar(d,g,!1),se.pointToWorldFrame(n,e,t.pillarOffset,na),this._intersectConvex(t.pillarConvex,e,na,s,r,qf),this.result.shouldStop)return;t.getConvexTrianglePillar(d,g,!0),se.pointToWorldFrame(n,e,t.pillarOffset,na),this._intersectConvex(t.pillarConvex,e,na,s,r,qf)}}}_intersectSphere(t,e,n,s,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,f=h**2-4*c*u,d=s1,g=r1;if(!(f<0))if(f===0)o.lerp(a,f,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1);else{const v=(-h-Math.sqrt(f))/(2*c),p=(-h+Math.sqrt(f))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){const a=o1,l=Xf,c=o&&o.faceList||null,h=t.faces,u=t.vertices,f=t.faceNormals,d=this.direction,g=this.from,v=this.to,p=g.distanceTo(v),m=c?c.length:h.length,x=this.result;for(let _=0;!x.shouldStop&&_<m;_++){const b=c?c[_]:_,L=h[b],T=f[b],A=e,D=n;l.copy(u[L[0]]),A.vmult(l,l),l.vadd(D,l),l.vsub(g,l),A.vmult(T,a);const S=d.dot(a);if(Math.abs(S)<this.precision)continue;const M=a.dot(l)/S;if(!(M<0)){d.scale(M,an),an.vadd(g,an),Ln.copy(u[L[0]]),A.vmult(Ln,Ln),D.vadd(Ln,Ln);for(let F=1;!x.shouldStop&&F<L.length-1;F++){Xn.copy(u[L[F]]),Yn.copy(u[L[F+1]]),A.vmult(Xn,Xn),A.vmult(Yn,Yn),D.vadd(Xn,Xn),D.vadd(Yn,Yn);const $=an.distanceTo(g);!(Ce.pointInTriangle(an,Ln,Xn,Yn)||Ce.pointInTriangle(an,Xn,Ln,Yn))||$>p||this.reportIntersection(a,an,r,s,b)}}}}_intersectTrimesh(t,e,n,s,r,o){const a=a1,l=d1,c=p1,h=Xf,u=l1,f=c1,d=h1,g=f1,v=u1,p=t.indices;t.vertices;const m=this.from,x=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),se.vectorToLocalFrame(n,e,_,u),se.pointToLocalFrame(n,e,m,f),se.pointToLocalFrame(n,e,x,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,d.vsub(f,u),u.normalize();const b=f.distanceSquared(d);t.tree.rayQuery(this,c,l);for(let L=0,T=l.length;!this.result.shouldStop&&L!==T;L++){const A=l[L];t.getNormal(A,a),t.getVertex(p[A*3],Ln),Ln.vsub(f,h);const D=u.dot(a),S=a.dot(h)/D;if(S<0)continue;u.scale(S,an),an.vadd(f,an),t.getVertex(p[A*3+1],Xn),t.getVertex(p[A*3+2],Yn);const M=an.distanceSquared(f);!(Ce.pointInTriangle(an,Xn,Ln,Yn)||Ce.pointInTriangle(an,Ln,Xn,Yn))||M>b||(se.vectorToWorldFrame(e,a,v),se.pointToWorldFrame(n,e,an,g),this.reportIntersection(v,g,r,s,A))}l.length=0}reportIntersection(t,e,n,s,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ce.ALL:this.hasHit=!0,c.set(o,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case Ce.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l));break;case Ce.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Ms),n.vsub(e,Hr),t.vsub(e,Jl);const r=Ms.dot(Ms),o=Ms.dot(Hr),a=Ms.dot(Jl),l=Hr.dot(Hr),c=Hr.dot(Jl);let h,u;return(h=l*a-o*c)>=0&&(u=r*c-o*a)>=0&&h+u<r*l-o*o}}Ce.CLOSEST=uh.CLOSEST;Ce.ANY=uh.ANY;Ce.ALL=uh.ALL;const Wf=new yn,Zl=[],Hr=new w,Jl=new w,t1=new w,e1=new Re,an=new w,Ln=new w,Xn=new w,Yn=new w;new w;new Ra;const qf={faceList:[0]},na=new w,n1=new Ce,i1=[],s1=new w,r1=new w,o1=new w;new w;new w;const Xf=new w,a1=new w,l1=new w,c1=new w,h1=new w,u1=new w,f1=new w;new yn;const d1=[],p1=new se,Ms=new w,ia=new w;function m1(i,t,e){e.vsub(i,Ms);const n=Ms.dot(t);return t.scale(n,ia),ia.vadd(i,ia),e.distanceTo(ia)}class g1{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Yf{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Eo{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=Eo.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Yf,this.jacobianElementB=new Yf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,h=s.invMassSolve;return r.scale(c,$f),a.scale(h,jf),n.invInertiaWorldSolve.vmult(o,Kf),s.invInertiaWorldSolve.vmult(l,Zf),t.multiplyVectors($f,Kf)+e.multiplyVectors(jf,Zf)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,sa),c+=sa.dot(t.rotational),l.vmult(e.rotational,sa),c+=sa.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=v1;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Eo.idCounter=0;const $f=new w,jf=new w,Kf=new w,Zf=new w,sa=new w,v1=new w;class _1 extends Eo{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(t){const e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=x1,c=y1,h=s.velocity,u=s.angularVelocity;s.force,s.torque;const f=r.velocity,d=r.angularVelocity;r.force,r.torque;const g=M1,v=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;o.cross(m,l),a.cross(m,c),m.negate(v.spatial),l.negate(v.rotational),p.spatial.copy(m),p.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);const x=m.dot(g),_=this.restitution+1,b=_*f.dot(m)-_*h.dot(m)+d.dot(c)-u.dot(l),L=this.computeGiMf();return-x*e-b*n-t*L}getImpactVelocityAlongNormal(){const t=S1,e=b1,n=E1,s=w1,r=T1;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const x1=new w,y1=new w,M1=new w,S1=new w,b1=new w,E1=new w,w1=new w,T1=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Jf extends Eo{constructor(t,e,n){super(t,e,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,s=this.rj,r=A1,o=C1,a=this.t;n.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*e-t*u}}const A1=new w,C1=new w;class wo{constructor(t,e,n){n=g1.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=wo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}wo.idCounter=0;class Er{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Er.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Er.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Ce;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class xm extends Nt{constructor(t){if(super({type:Nt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new w);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-r,s[l]=t[l]+r}}}new w;new w;new w;new w;new w;new w;new w;new w;new w;class R1 extends Nt{constructor(){super({type:Nt.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new w),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,s){_i.set(0,0,1),e.vmult(_i,_i);const r=Number.MAX_VALUE;n.set(-r,-r,-r),s.set(r,r,r),_i.x===1?s.x=t.x:_i.x===-1&&(n.x=t.x),_i.y===1?s.y=t.y:_i.y===-1&&(n.y=t.y),_i.z===1?s.z=t.z:_i.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const _i=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new yn;new w;new yn;new w;new w;new w;new w;new w;new w;new w;new yn;new w;new se;new yn;class P1{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class L1 extends P1{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let u,f,d,g,v,p;if(a!==0)for(let b=0;b!==c;b++)l[b].updateSolveMassProperties();const m=N1,x=D1,_=I1;m.length=a,x.length=a,_.length=a;for(let b=0;b!==a;b++){const L=o[b];_[b]=0,x[b]=L.computeB(h),m[b]=1/L.computeC()}if(a!==0){for(let T=0;T!==c;T++){const A=l[T],D=A.vlambda,S=A.wlambda;D.set(0,0,0),S.set(0,0,0)}for(n=0;n!==s;n++){g=0;for(let T=0;T!==a;T++){const A=o[T];u=x[T],f=m[T],p=_[T],v=A.computeGWlambda(),d=f*(u-v-A.eps*p),p+d<A.minForce?d=A.minForce-p:p+d>A.maxForce&&(d=A.maxForce-p),_[T]+=d,g+=d>0?d:-d,A.addToWlambda(d)}if(g*g<r)break}for(let T=0;T!==c;T++){const A=l[T],D=A.velocity,S=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),D.vadd(A.vlambda,D),A.wlambda.vmul(A.angularFactor,A.wlambda),S.vadd(A.wlambda,S)}let b=o.length;const L=1/h;for(;b--;)o[b].multiplier=_[b]*L}return n}}const I1=[],N1=[],D1=[];class U1{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class F1 extends U1{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const me={sphereSphere:Nt.types.SPHERE,spherePlane:Nt.types.SPHERE|Nt.types.PLANE,boxBox:Nt.types.BOX|Nt.types.BOX,sphereBox:Nt.types.SPHERE|Nt.types.BOX,planeBox:Nt.types.PLANE|Nt.types.BOX,convexConvex:Nt.types.CONVEXPOLYHEDRON,sphereConvex:Nt.types.SPHERE|Nt.types.CONVEXPOLYHEDRON,planeConvex:Nt.types.PLANE|Nt.types.CONVEXPOLYHEDRON,boxConvex:Nt.types.BOX|Nt.types.CONVEXPOLYHEDRON,sphereHeightfield:Nt.types.SPHERE|Nt.types.HEIGHTFIELD,boxHeightfield:Nt.types.BOX|Nt.types.HEIGHTFIELD,convexHeightfield:Nt.types.CONVEXPOLYHEDRON|Nt.types.HEIGHTFIELD,sphereParticle:Nt.types.PARTICLE|Nt.types.SPHERE,planeParticle:Nt.types.PLANE|Nt.types.PARTICLE,boxParticle:Nt.types.BOX|Nt.types.PARTICLE,convexParticle:Nt.types.PARTICLE|Nt.types.CONVEXPOLYHEDRON,cylinderCylinder:Nt.types.CYLINDER,sphereCylinder:Nt.types.SPHERE|Nt.types.CYLINDER,planeCylinder:Nt.types.PLANE|Nt.types.CYLINDER,boxCylinder:Nt.types.BOX|Nt.types.CYLINDER,convexCylinder:Nt.types.CONVEXPOLYHEDRON|Nt.types.CYLINDER,heightfieldCylinder:Nt.types.HEIGHTFIELD|Nt.types.CYLINDER,particleCylinder:Nt.types.PARTICLE|Nt.types.CYLINDER,sphereTrimesh:Nt.types.SPHERE|Nt.types.TRIMESH,planeTrimesh:Nt.types.PLANE|Nt.types.TRIMESH};class O1{get[me.sphereSphere](){return this.sphereSphere}get[me.spherePlane](){return this.spherePlane}get[me.boxBox](){return this.boxBox}get[me.sphereBox](){return this.sphereBox}get[me.planeBox](){return this.planeBox}get[me.convexConvex](){return this.convexConvex}get[me.sphereConvex](){return this.sphereConvex}get[me.planeConvex](){return this.planeConvex}get[me.boxConvex](){return this.boxConvex}get[me.sphereHeightfield](){return this.sphereHeightfield}get[me.boxHeightfield](){return this.boxHeightfield}get[me.convexHeightfield](){return this.convexHeightfield}get[me.sphereParticle](){return this.sphereParticle}get[me.planeParticle](){return this.planeParticle}get[me.boxParticle](){return this.boxParticle}get[me.convexParticle](){return this.convexParticle}get[me.cylinderCylinder](){return this.convexConvex}get[me.sphereCylinder](){return this.sphereConvex}get[me.planeCylinder](){return this.planeConvex}get[me.boxCylinder](){return this.boxConvex}get[me.convexCylinder](){return this.convexConvex}get[me.heightfieldCylinder](){return this.heightfieldCylinder}get[me.particleCylinder](){return this.particleCylinder}get[me.sphereTrimesh](){return this.sphereTrimesh}get[me.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new F1,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new _1(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=s.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||n.material,u=o.material||s.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const f=c*(a.frictionGravity||a.gravity).length();let d=n.invMass+s.invMass;d>0&&(d=1/d);const g=this.frictionEquationPool,v=g.length?g.pop():new Jf(n,s,f*d),p=g.length?g.pop():new Jf(n,s,f*d);return v.bi=p.bi=n,v.bj=p.bj=s,v.minForce=p.minForce=-f*d,v.maxForce=p.maxForce=f*d,v.ri.copy(t.ri),v.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(v.t,p.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=p.enabled=t.enabled,e.push(v,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];ms.setZero(),Qs.setZero(),tr.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(ms.vadd(e.ni,ms),Qs.vadd(e.ri,Qs),tr.vadd(e.rj,tr)):(ms.vsub(e.ni,ms),Qs.vadd(e.rj,Qs),tr.vadd(e.ri,tr));const o=1/t;Qs.scale(o,n.ri),tr.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),ms.normalize(),ms.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=k1,c=H1,h=B1,u=z1;for(let f=0,d=t.length;f!==d;f++){const g=t[f],v=e[f];let p=null;g.material&&v.material&&(p=n.getContactMaterial(g.material,v.material)||null);const m=g.type&Ut.KINEMATIC&&v.type&Ut.STATIC||g.type&Ut.STATIC&&v.type&Ut.KINEMATIC||g.type&Ut.KINEMATIC&&v.type&Ut.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const _=g.shapes[x];for(let b=0;b<v.shapes.length;b++){v.quaternion.mult(v.shapeOrientations[b],c),v.quaternion.vmult(v.shapeOffsets[b],u),u.vadd(v.position,u);const L=v.shapes[b];if(!(_.collisionFilterMask&L.collisionFilterGroup&&L.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(u)>_.boundingSphereRadius+L.boundingSphereRadius)continue;let T=null;_.material&&L.material&&(T=n.getContactMaterial(_.material,L.material)||null),this.currentContactMaterial=T||p||n.defaultContactMaterial;const A=_.type|L.type,D=this[A];if(D){let S=!1;_.type<L.type?S=D.call(this,_,L,h,u,l,c,g,v,_,L,m):S=D.call(this,L,_,u,h,c,l,v,g,_,L,m),S&&m&&(n.shapeOverlapKeeper.set(_.id,L.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,s,r,o,a,l,c,h,u){if(u)return n.distanceSquared(s)<(t.radius+e.radius)**2;const f=this.createContactEquation(a,l,t,e,c,h);s.vsub(n,f.ni),f.ni.normalize(),f.ri.copy(f.ni),f.rj.copy(f.ni),f.ri.scale(t.radius,f.ri),f.rj.scale(-e.radius,f.rj),f.ri.vadd(n,f.ri),f.ri.vsub(a.position,f.ri),f.rj.vadd(s,f.rj),f.rj.vsub(l.position,f.rj),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,l,c,h,u){const f=this.createContactEquation(a,l,t,e,c,h);if(f.ni.set(0,0,1),o.vmult(f.ni,f.ni),f.ni.negate(f.ni),f.ni.normalize(),f.ni.scale(t.radius,f.ri),n.vsub(s,ra),f.ni.scale(f.ni.dot(ra),Qf),ra.vsub(Qf,f.rj),-ra.dot(f.ni)<=t.radius){if(u)return!0;const d=f.ri,g=f.rj;d.vadd(n,d),d.vsub(a.position,d),g.vadd(s,g),g.vsub(l.position,g),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,u)}sphereBox(t,e,n,s,r,o,a,l,c,h,u){const f=this.v3pool,d=dC;n.vsub(s,oa),e.getSideNormals(d,o);const g=t.radius;let v=!1;const p=mC,m=gC,x=vC;let _=null,b=0,L=0,T=0,A=null;for(let B=0,et=d.length;B!==et&&v===!1;B++){const z=hC;z.copy(d[B]);const nt=z.length();z.normalize();const ht=oa.dot(z);if(ht<nt+g&&ht>0){const bt=uC,gt=fC;bt.copy(d[(B+1)%3]),gt.copy(d[(B+2)%3]);const qt=bt.length(),ot=gt.length();bt.normalize(),gt.normalize();const _t=oa.dot(bt),wt=oa.dot(gt);if(_t<qt&&_t>-qt&&wt<ot&&wt>-ot){const W=Math.abs(ht-nt-g);if((A===null||W<A)&&(A=W,L=_t,T=wt,_=nt,p.copy(z),m.copy(bt),x.copy(gt),b++,u))return!0}}}if(b){v=!0;const B=this.createContactEquation(a,l,t,e,c,h);p.scale(-g,B.ri),B.ni.copy(p),B.ni.negate(B.ni),p.scale(_,p),m.scale(L,m),p.vadd(m,p),x.scale(T,x),p.vadd(x,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(s,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let D=f.get();const S=pC;for(let B=0;B!==2&&!v;B++)for(let et=0;et!==2&&!v;et++)for(let z=0;z!==2&&!v;z++)if(D.set(0,0,0),B?D.vadd(d[0],D):D.vsub(d[0],D),et?D.vadd(d[1],D):D.vsub(d[1],D),z?D.vadd(d[2],D):D.vsub(d[2],D),s.vadd(D,S),S.vsub(n,S),S.lengthSquared()<g*g){if(u)return!0;v=!0;const nt=this.createContactEquation(a,l,t,e,c,h);nt.ri.copy(S),nt.ri.normalize(),nt.ni.copy(nt.ri),nt.ri.scale(g,nt.ri),nt.rj.copy(D),nt.ri.vadd(n,nt.ri),nt.ri.vsub(a.position,nt.ri),nt.rj.vadd(s,nt.rj),nt.rj.vsub(l.position,nt.rj),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)}f.release(D),D=null;const M=f.get(),F=f.get(),$=f.get(),P=f.get(),H=f.get(),U=d.length;for(let B=0;B!==U&&!v;B++)for(let et=0;et!==U&&!v;et++)if(B%3!==et%3){d[et].cross(d[B],M),M.normalize(),d[B].vadd(d[et],F),$.copy(n),$.vsub(F,$),$.vsub(s,$);const z=$.dot(M);M.scale(z,P);let nt=0;for(;nt===B%3||nt===et%3;)nt++;H.copy(n),H.vsub(P,H),H.vsub(F,H),H.vsub(s,H);const ht=Math.abs(z),bt=H.length();if(ht<d[nt].length()&&bt<g){if(u)return!0;v=!0;const gt=this.createContactEquation(a,l,t,e,c,h);F.vadd(P,gt.rj),gt.rj.copy(gt.rj),H.negate(gt.ni),gt.ni.normalize(),gt.ri.copy(gt.rj),gt.ri.vadd(s,gt.ri),gt.ri.vsub(n,gt.ri),gt.ri.normalize(),gt.ri.scale(g,gt.ri),gt.ri.vadd(n,gt.ri),gt.ri.vsub(a.position,gt.ri),gt.rj.vadd(s,gt.rj),gt.rj.vsub(l.position,gt.rj),this.result.push(gt),this.createFrictionEquationsFromContact(gt,this.frictionResult)}}f.release(M,F,$,P,H)}planeBox(t,e,n,s,r,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,u)}convexConvex(t,e,n,s,r,o,a,l,c,h,u,f,d){const g=IC;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,g,f,d)){const v=[],p=NC;t.clipAgainstHull(n,r,e,s,o,g,-100,100,v);let m=0;for(let x=0;x!==v.length;x++){if(u)return!0;const _=this.createContactEquation(a,l,t,e,c,h),b=_.ri,L=_.rj;g.negate(_.ni),v[x].normal.negate(p),p.scale(v[x].depth,p),v[x].point.vadd(p,b),L.copy(v[x].point),b.vsub(n,b),L.vsub(s,L),b.vadd(n,b),b.vsub(a.position,b),L.vadd(s,L),L.vsub(l.position,L),this.result.push(_),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,n,s,r,o,a,l,c,h,u){const f=this.v3pool;n.vsub(s,_C);const d=e.faceNormals,g=e.faces,v=e.vertices,p=t.radius;let m=!1;for(let x=0;x!==v.length;x++){const _=v[x],b=SC;o.vmult(_,b),s.vadd(b,b);const L=MC;if(b.vsub(n,L),L.lengthSquared()<p*p){if(u)return!0;m=!0;const T=this.createContactEquation(a,l,t,e,c,h);T.ri.copy(L),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(p,T.ri),b.vsub(s,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(s,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let x=0,_=g.length;x!==_&&m===!1;x++){const b=d[x],L=g[x],T=bC;o.vmult(b,T);const A=EC;o.vmult(v[L[0]],A),A.vadd(s,A);const D=wC;T.scale(-p,D),n.vadd(D,D);const S=TC;D.vsub(A,S);const M=S.dot(T),F=AC;if(n.vsub(A,F),M<0&&F.dot(T)>0){const $=[];for(let P=0,H=L.length;P!==H;P++){const U=f.get();o.vmult(v[L[P]],U),s.vadd(U,U),$.push(U)}if(cC($,T,n)){if(u)return!0;m=!0;const P=this.createContactEquation(a,l,t,e,c,h);T.scale(-p,P.ri),T.negate(P.ni);const H=f.get();T.scale(-M,H);const U=f.get();T.scale(-p,U),n.vsub(s,P.rj),P.rj.vadd(U,P.rj),P.rj.vadd(H,P.rj),P.rj.vadd(s,P.rj),P.rj.vsub(l.position,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),f.release(H),f.release(U),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let B=0,et=$.length;B!==et;B++)f.release($[B]);return}else for(let P=0;P!==L.length;P++){const H=f.get(),U=f.get();o.vmult(v[L[(P+1)%L.length]],H),o.vmult(v[L[(P+2)%L.length]],U),s.vadd(H,H),s.vadd(U,U);const B=xC;U.vsub(H,B);const et=yC;B.unit(et);const z=f.get(),nt=f.get();n.vsub(H,nt);const ht=nt.dot(et);et.scale(ht,z),z.vadd(H,z);const bt=f.get();if(z.vsub(n,bt),ht>0&&ht*ht<B.lengthSquared()&&bt.lengthSquared()<p*p){if(u)return!0;const gt=this.createContactEquation(a,l,t,e,c,h);z.vsub(s,gt.rj),z.vsub(n,gt.ni),gt.ni.normalize(),gt.ni.scale(p,gt.ri),gt.rj.vadd(s,gt.rj),gt.rj.vsub(l.position,gt.rj),gt.ri.vadd(n,gt.ri),gt.ri.vsub(a.position,gt.ri),this.result.push(gt),this.createFrictionEquationsFromContact(gt,this.frictionResult);for(let qt=0,ot=$.length;qt!==ot;qt++)f.release($[qt]);f.release(H),f.release(U),f.release(z),f.release(bt),f.release(nt);return}f.release(H),f.release(U),f.release(z),f.release(bt),f.release(nt)}for(let P=0,H=$.length;P!==H;P++)f.release($[P])}}}planeConvex(t,e,n,s,r,o,a,l,c,h,u){const f=CC,d=RC;d.set(0,0,1),r.vmult(d,d);let g=0;const v=PC;for(let p=0;p!==e.vertices.length;p++)if(f.copy(e.vertices[p]),o.vmult(f,f),s.vadd(f,f),f.vsub(n,v),d.dot(v)<=0){if(u)return!0;const x=this.createContactEquation(a,l,t,e,c,h),_=LC;d.scale(d.dot(v),_),f.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(d),f.vsub(s,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(s,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,s,r,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,u)}sphereHeightfield(t,e,n,s,r,o,a,l,c,h,u){const f=e.data,d=t.radius,g=e.elementSize,v=qC,p=WC;se.pointToLocalFrame(s,o,n,p);let m=Math.floor((p.x-d)/g)-1,x=Math.ceil((p.x+d)/g)+1,_=Math.floor((p.y-d)/g)-1,b=Math.ceil((p.y+d)/g)+1;if(x<0||b<0||m>f.length||_>f[0].length)return;m<0&&(m=0),x<0&&(x=0),_<0&&(_=0),b<0&&(b=0),m>=f.length&&(m=f.length-1),x>=f.length&&(x=f.length-1),b>=f[0].length&&(b=f[0].length-1),_>=f[0].length&&(_=f[0].length-1);const L=[];e.getRectMinMax(m,_,x,b,L);const T=L[0],A=L[1];if(p.z-d>A||p.z+d<T)return;const D=this.result;for(let S=m;S<x;S++)for(let M=_;M<b;M++){const F=D.length;let $=!1;if(e.getConvexTrianglePillar(S,M,!1),se.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&($=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,l,t,e,u)),u&&$||(e.getConvexTrianglePillar(S,M,!0),se.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&($=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,l,t,e,u)),u&&$))return!0;if(D.length-F>2)return}}boxHeightfield(t,e,n,s,r,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,u)}convexHeightfield(t,e,n,s,r,o,a,l,c,h,u){const f=e.data,d=e.elementSize,g=t.boundingSphereRadius,v=VC,p=GC,m=HC;se.pointToLocalFrame(s,o,n,m);let x=Math.floor((m.x-g)/d)-1,_=Math.ceil((m.x+g)/d)+1,b=Math.floor((m.y-g)/d)-1,L=Math.ceil((m.y+g)/d)+1;if(_<0||L<0||x>f.length||b>f[0].length)return;x<0&&(x=0),_<0&&(_=0),b<0&&(b=0),L<0&&(L=0),x>=f.length&&(x=f.length-1),_>=f.length&&(_=f.length-1),L>=f[0].length&&(L=f[0].length-1),b>=f[0].length&&(b=f[0].length-1);const T=[];e.getRectMinMax(x,b,_,L,T);const A=T[0],D=T[1];if(!(m.z-g>D||m.z+g<A))for(let S=x;S<_;S++)for(let M=b;M<L;M++){let F=!1;if(e.getConvexTrianglePillar(S,M,!1),se.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,l,null,null,u,p,null)),u&&F||(e.getConvexTrianglePillar(S,M,!0),se.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,l,null,null,u,p,null)),u&&F))return!0}}sphereParticle(t,e,n,s,r,o,a,l,c,h,u){const f=OC;if(f.set(0,0,1),s.vsub(n,f),f.lengthSquared()<=t.radius*t.radius){if(u)return!0;const g=this.createContactEquation(l,a,e,t,c,h);f.normalize(),g.rj.copy(f),g.rj.scale(t.radius,g.rj),g.ni.copy(f),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,l,c,h,u){const f=DC;f.set(0,0,1),a.quaternion.vmult(f,f);const d=UC;if(s.vsub(a.position,d),f.dot(d)<=0){if(u)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(f),v.ni.negate(v.ni),v.ri.set(0,0,0);const p=FC;f.scale(f.dot(s),p),s.vsub(p,p),v.rj.copy(p),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,u)}convexParticle(t,e,n,s,r,o,a,l,c,h,u){let f=-1;const d=zC,g=kC;let v=null;const p=BC;if(p.copy(s),p.vsub(n,p),r.conjugate(td),td.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let m=0,x=t.faces.length;m!==x;m++){const _=[t.worldVertices[t.faces[m][0]]],b=t.worldFaceNormals[m];s.vsub(_[0],ed);const L=-b.dot(ed);if(v===null||Math.abs(L)<Math.abs(v)){if(u)return!0;v=L,f=m,d.copy(b)}}if(f!==-1){const m=this.createContactEquation(l,a,e,t,c,h);d.scale(v,g),g.vadd(s,g),g.vsub(n,g),m.rj.copy(g),d.negate(m.ni),m.ri.set(0,0,0);const x=m.ri,_=m.rj;x.vadd(s,x),x.vsub(l.position,x),_.vadd(n,_),_.vsub(a.position,_),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,l,c,h,u){return this.convexHeightfield(e,t,s,n,o,r,l,a,c,h,u)}particleCylinder(t,e,n,s,r,o,a,l,c,h,u){return this.convexParticle(e,t,s,n,o,r,l,a,c,h,u)}sphereTrimesh(t,e,n,s,r,o,a,l,c,h,u){const f=j1,d=K1,g=Z1,v=J1,p=Q1,m=tC,x=sC,_=$1,b=X1,L=rC;se.pointToLocalFrame(s,o,n,p);const T=t.radius;x.lowerBound.set(p.x-T,p.y-T,p.z-T),x.upperBound.set(p.x+T,p.y+T,p.z+T),e.getTrianglesInAABB(x,L);const A=Y1,D=t.radius*t.radius;for(let P=0;P<L.length;P++)for(let H=0;H<3;H++)if(e.getVertex(e.indices[L[P]*3+H],A),A.vsub(p,b),b.lengthSquared()<=D){if(_.copy(A),se.pointToWorldFrame(s,o,_,A),A.vsub(n,b),u)return!0;let U=this.createContactEquation(a,l,t,e,c,h);U.ni.copy(b),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(A),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let P=0;P<L.length;P++)for(let H=0;H<3;H++){e.getVertex(e.indices[L[P]*3+H],f),e.getVertex(e.indices[L[P]*3+(H+1)%3],d),d.vsub(f,g),p.vsub(d,m);const U=m.dot(g);p.vsub(f,m);let B=m.dot(g);if(B>0&&U<0&&(p.vsub(f,m),v.copy(g),v.normalize(),B=m.dot(v),v.scale(B,m),m.vadd(f,m),m.distanceTo(p)<t.radius)){if(u)return!0;const z=this.createContactEquation(a,l,t,e,c,h);m.vsub(p,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),se.pointToWorldFrame(s,o,m,m),m.vsub(l.position,z.rj),se.vectorToWorldFrame(o,z.ni,z.ni),se.vectorToWorldFrame(o,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}const S=eC,M=nC,F=iC,$=q1;for(let P=0,H=L.length;P!==H;P++){e.getTriangleVertices(L[P],S,M,F),e.getNormal(L[P],$),p.vsub(S,m);let U=m.dot($);if($.scale(U,m),p.vsub(m,m),U=m.distanceTo(p),Ce.pointInTriangle(m,S,M,F)&&U<t.radius){if(u)return!0;let B=this.createContactEquation(a,l,t,e,c,h);m.vsub(p,B.ni),B.ni.normalize(),B.ni.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),se.pointToWorldFrame(s,o,m,m),m.vsub(l.position,B.rj),se.vectorToWorldFrame(o,B.ni,B.ni),se.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}L.length=0}planeTrimesh(t,e,n,s,r,o,a,l,c,h,u){const f=new w,d=V1;d.set(0,0,1),r.vmult(d,d);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,f);const v=new w;v.copy(f),se.pointToWorldFrame(s,o,v,f);const p=G1;if(f.vsub(n,p),d.dot(p)<=0){if(u)return!0;const x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(d);const _=W1;d.scale(p.dot(d),_),f.vsub(_,_),x.ri.copy(_),x.ri.vsub(a.position,x.ri),x.rj.copy(f),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const ms=new w,Qs=new w,tr=new w,B1=new w,z1=new w,k1=new Re,H1=new Re,V1=new w,G1=new w,W1=new w,q1=new w,X1=new w;new w;const Y1=new w,$1=new w,j1=new w,K1=new w,Z1=new w,J1=new w,Q1=new w,tC=new w,eC=new w,nC=new w,iC=new w,sC=new yn,rC=[],ra=new w,Qf=new w,oC=new w,aC=new w,lC=new w;function cC(i,t,e){let n=null;const s=i.length;for(let r=0;r!==s;r++){const o=i[r],a=oC;i[(r+1)%s].vsub(o,a);const l=aC;a.cross(t,l);const c=lC;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const oa=new w,hC=new w,uC=new w,fC=new w,dC=[new w,new w,new w,new w,new w,new w],pC=new w,mC=new w,gC=new w,vC=new w,_C=new w,xC=new w,yC=new w,MC=new w,SC=new w,bC=new w,EC=new w,wC=new w,TC=new w,AC=new w;new w;new w;const CC=new w,RC=new w,PC=new w,LC=new w,IC=new w,NC=new w,DC=new w,UC=new w,FC=new w,OC=new w,td=new Re,BC=new w;new w;const zC=new w,ed=new w,kC=new w,HC=new w,VC=new w,GC=[0],WC=new w,qC=new w;class nd{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),s=this.current;let r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,s=this.previous,r=n.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const h=n[l];for(;h>s[a];)a++;c=h===s[a],c||id(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=s[l];for(;h>n[a];)a++;c=n[a]===h,c||id(e,h)}}}function id(i,t){i.push((t&4294901760)>>16,t&65535)}const Ql=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`;class XC{constructor(){this.data={keys:[]}}get(t,e){const n=Ql(t,e);return this.data[n]}set(t,e,n){const s=Ql(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){const n=Ql(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class YC extends hm{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new um,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new L1,this.constraints=[],this.narrowphase=new O1(this),this.collisionMatrix=new Vf,this.collisionMatrixPrevious=new Vf,this.bodyOverlapKeeper=new nd,this.shapeOverlapKeeper=new nd,this.contactmaterials=[],this.contactMaterialTable=new XC,this.defaultMaterial=new Er("default"),this.defaultContactMaterial=new wo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Ra?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Ce.ALL,n.from=t,n.to=e,n.callback=s,tc.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Ce.ANY,n.from=t,n.to=e,n.result=s,tc.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Ce.CLOSEST,n.from=t,n.to=e,n.result=s,tc.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ut&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const s=e[n].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ne.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Ne.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Ne.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=JC,s=QC,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=Ut.DYNAMIC;let f=-1/0;const d=this.constraints,g=ZC;l.length();const v=l.x,p=l.y,m=l.z;let x=0;for(c&&(f=Ne.now()),x=0;x!==r;x++){const P=o[x];if(P.type===u){const H=P.force,U=P.mass;H.x+=U*v,H.y+=U*p,H.z+=U*m}}for(let P=0,H=this.subsystems.length;P!==H;P++)this.subsystems[P].update();c&&(f=Ne.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(h.broadphase=Ne.now()-f);let _=d.length;for(x=0;x!==_;x++){const P=d[x];if(!P.collideConnected)for(let H=n.length-1;H>=0;H-=1)(P.bodyA===n[H]&&P.bodyB===s[H]||P.bodyB===n[H]&&P.bodyA===s[H])&&(n.splice(H,1),s.splice(H,1))}this.collisionMatrixTick(),c&&(f=Ne.now());const b=KC,L=e.length;for(x=0;x!==L;x++)b.push(e[x]);e.length=0;const T=this.frictionEquations.length;for(x=0;x!==T;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,b,this.frictionEquations,g),c&&(h.narrowphase=Ne.now()-f),c&&(f=Ne.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const A=e.length;for(let P=0;P!==A;P++){const H=e[P],U=H.bi,B=H.bj,et=H.si,z=H.sj;let nt;if(U.material&&B.material?nt=this.getContactMaterial(U.material,B.material)||this.defaultContactMaterial:nt=this.defaultContactMaterial,nt.friction,U.material&&B.material&&(U.material.friction>=0&&B.material.friction>=0&&U.material.friction*B.material.friction,U.material.restitution>=0&&B.material.restitution>=0&&(H.restitution=U.material.restitution*B.material.restitution)),a.addEquation(H),U.allowSleep&&U.type===Ut.DYNAMIC&&U.sleepState===Ut.SLEEPING&&B.sleepState===Ut.AWAKE&&B.type!==Ut.STATIC){const ht=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),bt=B.sleepSpeedLimit**2;ht>=bt*2&&(U.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===Ut.DYNAMIC&&B.sleepState===Ut.SLEEPING&&U.sleepState===Ut.AWAKE&&U.type!==Ut.STATIC){const ht=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),bt=U.sleepSpeedLimit**2;ht>=bt*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,B,!0),this.collisionMatrixPrevious.get(U,B)||(Vr.body=B,Vr.contact=H,U.dispatchEvent(Vr),Vr.body=U,B.dispatchEvent(Vr)),this.bodyOverlapKeeper.set(U.id,B.id),this.shapeOverlapKeeper.set(et.id,z.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Ne.now()-f,f=Ne.now()),x=0;x!==r;x++){const P=o[x];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(_=d.length,x=0;x!==_;x++){const P=d[x];P.update();for(let H=0,U=P.equations.length;H!==U;H++){const B=P.equations[H];a.addEquation(B)}}a.solve(t,this),c&&(h.solve=Ne.now()-f),a.removeAllEquations();const D=Math.pow;for(x=0;x!==r;x++){const P=o[x];if(P.type&u){const H=D(1-P.linearDamping,t),U=P.velocity;U.scale(H,U);const B=P.angularVelocity;if(B){const et=D(1-P.angularDamping,t);B.scale(et,B)}}}this.dispatchEvent(jC),c&&(f=Ne.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,F=this.quatNormalizeFast;for(x=0;x!==r;x++)o[x].integrate(t,M,F);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Ne.now()-f),this.stepnumber+=1,this.dispatchEvent($C);let $=!0;if(this.allowSleep)for($=!1,x=0;x!==r;x++){const P=o[x];P.sleepTick(this.time),P.sleepState!==Ut.SLEEPING&&($=!0)}this.hasActiveBodies=$}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(xi,yi),t){for(let r=0,o=xi.length;r<o;r+=2)Gr.bodyA=this.getBodyById(xi[r]),Gr.bodyB=this.getBodyById(xi[r+1]),this.dispatchEvent(Gr);Gr.bodyA=Gr.bodyB=null}if(e){for(let r=0,o=yi.length;r<o;r+=2)Wr.bodyA=this.getBodyById(yi[r]),Wr.bodyB=this.getBodyById(yi[r+1]),this.dispatchEvent(Wr);Wr.bodyA=Wr.bodyB=null}xi.length=yi.length=0;const n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(xi,yi),n){for(let r=0,o=xi.length;r<o;r+=2){const a=this.getShapeById(xi[r]),l=this.getShapeById(xi[r+1]);Mi.shapeA=a,Mi.shapeB=l,a&&(Mi.bodyA=a.body),l&&(Mi.bodyB=l.body),this.dispatchEvent(Mi)}Mi.bodyA=Mi.bodyB=Mi.shapeA=Mi.shapeB=null}if(s){for(let r=0,o=yi.length;r<o;r+=2){const a=this.getShapeById(yi[r]),l=this.getShapeById(yi[r+1]);Si.shapeA=a,Si.shapeB=l,a&&(Si.bodyA=a.body),l&&(Si.bodyB=l.body),this.dispatchEvent(Si)}Si.bodyA=Si.bodyB=Si.shapeA=Si.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new yn;const tc=new Ce,Ne=globalThis.performance||{};if(!Ne.now){let i=Date.now();Ne.timing&&Ne.timing.navigationStart&&(i=Ne.timing.navigationStart),Ne.now=()=>Date.now()-i}new w;const $C={type:"postStep"},jC={type:"preStep"},Vr={type:Ut.COLLIDE_EVENT_NAME,body:null,contact:null},KC=[],ZC=[],JC=[],QC=[],xi=[],yi=[],Gr={type:"beginContact",bodyA:null,bodyB:null},Wr={type:"endContact",bodyA:null,bodyB:null},Mi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Si={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Me=105,Be=68,jn=7.32,tn=2.44,qi=2,Ai={TV:"tv",BEHIND:"behind",BIRD:"bird"};class tR{constructor(t){this.canvas=t,this.scene=new sA,this.camera=null,this.renderer=null,this.camMode=Ai.TV,this._camTarget=new q(0,0,0),this._initRenderer(),this._initCamera(),this._initLighting(),this._buildPitch(),this._buildGoals(),this._buildStadium(),this._buildSkybox()}_initRenderer(){this.renderer=new iA({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Pp,this.renderer.toneMapping=Lp,this.renderer.toneMappingExposure=1.2,this.renderer.outputColorSpace=Nn,this.scene.background=new kt(858922),this.scene.fog=new th(858922,100,260)}_initCamera(){const t=this.canvas.clientWidth,e=this.canvas.clientHeight;this.camera=new vn(55,t/e,.1,500),this._applyTVCamera()}_applyTVCamera(){this.camera.position.set(0,35,68),this.camera.lookAt(0,0,0)}_applyBehindCamera(t){this.camera.position.set(t.x,t.y+4,t.z+10),this.camera.lookAt(t.x,t.y,t.z-15)}_applyBirdCamera(){this.camera.position.set(0,90,0),this.camera.lookAt(0,0,0)}setCameraMode(t,e=null){this.camMode=t,t===Ai.TV&&this._applyTVCamera(),t===Ai.BIRD&&this._applyBirdCamera(),t===Ai.BEHIND&&e&&this._applyBehindCamera(e)}trackBall(t,e){if(this.camMode!==Ai.TV)return;const n=Ta.clamp(t.x,-30,30);this.camera.position.x+=(n-this.camera.position.x)*e*2.5,this.camera.lookAt(this.camera.position.x*.3,0,0)}_initLighting(){const t=new AA(2241348,.8);this.scene.add(t);const e=new bA(4482696,1718794,.6);this.scene.add(e),[[-60,50,-45],[60,50,-45],[-60,50,45],[60,50,45]].forEach(([s,r,o])=>{const a=new TA(16775399,3.5,200,Math.PI/5,.3,1.5);a.position.set(s,r,o),a.target.position.set(0,0,0),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.camera.near=1,a.shadow.camera.far=200,this.scene.add(a),this.scene.add(a.target)})}_buildPitch(){const t=new Vn({uniforms:{uStripeWidth:{value:6},uDarkGreen:{value:new kt(1732122)},uLightGreen:{value:new kt(2263842)},uLinePaint:{value:new kt(16777215)},uPitchW:{value:Me},uPitchD:{value:Be}},vertexShader:`
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
      `,side:Ni}),e=new ni(Me,Be,128,64),n=new ue(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.name="pitch",this.scene.add(n);const s=new ni(Me+20,Be+20),r=new Js({color:1400853}),o=new ue(s,r);o.rotation.x=-Math.PI/2,o.position.y=-.01,this.scene.add(o)}_buildGoals(){[-1,1].forEach(t=>{const e=new rr,n=new Yl({color:16777215,metalness:.6,roughness:.4}),s=.06,r=(m,x,_,b=0,L=0,T=0)=>{const A=new Ca(s,s,m||x||_,8),D=new ue(A,n);return D.rotation.set(b,L,T),D},o=r(0,tn,0);o.position.set(-jn/2,tn/2,0);const a=r(0,tn,0);a.position.set(jn/2,tn/2,0);const l=r(jn,0,0,0,0,Math.PI/2);l.position.set(0,tn,0);const c=r(0,0,qi,Math.PI/2,0,0);c.position.set(0,tn,t*(qi/2));const h=r(0,tn,0);h.position.set(-jn/2,tn/2,t*qi);const u=r(0,tn,0);u.position.set(jn/2,tn/2,t*qi);const f=r(jn,0,0,0,0,Math.PI/2);f.position.set(0,0,t*qi);const d=new ni(jn,tn),g=new go({color:13421772,transparent:!0,opacity:.25,side:ti}),v=new ue(d,g);v.position.set(0,tn/2,t*qi);const p=new ue(new ni(jn,qi),g.clone());p.rotation.x=Math.PI/2,p.position.set(0,tn,t*qi/2),e.add(o,a,l,c,h,u,f,v,p),e.position.set(t*(Me/2),0,0),e.rotation.y=t===-1?0:Math.PI,e.name=`goal_${t===-1?"left":"right"}`,e.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),this.scene.add(e)})}_buildStadium(){this._buildStands(),this._buildFloodlightTowers(),this._buildRunningTrack()}_buildStands(){const t=new Js({color:1710638});new Js({color:3816042,vertexColors:!0}),[[Me+20,22,18,0,9,-47,0],[Me+20,22,18,0,9,Be/2+13,Math.PI],[24,Be+44,18,-66.5,9,0,-Math.PI/2],[24,Be+44,18,Me/2+14,9,0,Math.PI/2]].forEach(([n,s,r,o,a,l,c])=>{const h=new ts(n,r,s),u=new ue(h,t);u.position.set(o,a,l),u.rotation.y=c,this.scene.add(u),this._addCrowdToStand(o,a+r/2+.5,l,n,s,c)})}_addCrowdToStand(t,e,n,s,r,o){const l=Math.floor(s/1.2),c=8*l,h=new ts(.9,.9,.4),u=new Js({vertexColors:!1,color:16777215}),f=new aA(h,u,c),d=[new kt(13369344),new kt(14487825),new kt(1136076),new kt(17578),new kt(3355443),new kt(15658734)],g=new He,v=new kt;let p=0;for(let m=0;m<8;m++)for(let x=0;x<l;x++)g.position.set((x-l/2)*1.1,m*1,0),g.rotation.y=o,g.updateMatrix(),f.setMatrixAt(p,g.matrix),v.copy(d[Math.floor(Math.random()*d.length)]),f.setColorAt(p,v),p++;f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0),f.position.set(t,e,n),f.rotation.y=o,this.scene.add(f)}_buildFloodlightTowers(){const t=new Yl({color:8947865,metalness:.8,roughness:.3});[[-Me/2-16,0,-Be/2-16],[Me/2+16,0,-Be/2-16],[-Me/2-16,0,Be/2+16],[Me/2+16,0,Be/2+16]].forEach(([n,,s])=>{const r=new Ca(.3,.5,38,8),o=new ue(r,t);o.position.set(n,19,s),o.castShadow=!0,this.scene.add(o);const a=new ts(5,.8,1.4),l=new Yl({color:16777164,emissive:16777130,emissiveIntensity:2}),c=new ue(a,l);c.position.set(n,39,s),this.scene.add(c)})}_buildRunningTrack(){const t=new oh(Math.sqrt((Me/2+4)**2+(Be/2+4)**2)-1,Math.sqrt((Me/2+4)**2+(Be/2+4)**2)+3,64),e=new Js({color:10506797}),n=new ue(t,e);n.rotation.x=-Math.PI/2,n.position.y=-.005,this.scene.remove(n),[[Me+10,5,0,Be/2+4.5,0],[Me+10,5,0,-38.5,0],[5,Be+10,-57,0,Math.PI/2],[5,Be+10,Me/2+4.5,0,Math.PI/2]].forEach(([s,r,o,a,l])=>{const c=new ni(s,r),h=new Js({color:12085818}),u=new ue(c,h);u.rotation.x=-Math.PI/2,u.rotation.z=l,u.position.set(o,-.004,a),this.scene.add(u)})}_buildSkybox(){const t=new bo(490,32,16),e=new Vn({side:on,uniforms:{uTopColor:{value:new kt(331032)},uBottomColor:{value:new kt(858922)}},vertexShader:`
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
      `});this.scene.add(new ue(t,e))}render(){this.renderer.render(this.scene,this.camera)}onResize(){const t=this.canvas.clientWidth,e=this.canvas.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}dispose(){this.renderer.dispose()}}const In={IDLE:"idle",RUN:"run",KICK:"kick",TACKLE:"tackle",CELEBRATE:"celebrate"},eR=new sh(.35,1.1,4,8),nR=new bo(.28,12,8),iR=new rh(.4,12);let ec;class sR{constructor({data:t,teamColor:e,isHuman:n,world:s,scene:r,startPos:o,facingDir:a}){this.data=t,this.teamColor=e,this.isHuman=n,this.world=s,this.scene=r,this.facingDir=a,this.hasBall=!1,this.isStunned=!1,this.stunTimer=0,this.animState=In.IDLE,this.animTimer=0,this.kickCooldown=0;const l=(t.pace??70)/100;this.maxSpeed=6+l*6,this._buildMesh(e),this._buildPhysicsBody(o),this._buildShadow()}_buildMesh(t){const e=new Ff({color:new kt(t)}),n=new Ff({color:16042122});this.meshGroup=new rr,this.bodyMesh=new ue(eR,e),this.bodyMesh.castShadow=!0,this.headMesh=new ue(nR,n),this.headMesh.position.y=.9;const s=this._makeNumberTexture(this.data.rating??"?"),r=new go({map:s,transparent:!0}),o=new ni(.5,.28);this.labelMesh=new ue(o,r),this.labelMesh.position.set(0,.1,.36),this.meshGroup.add(this.bodyMesh,this.headMesh,this.labelMesh),this.scene.add(this.meshGroup)}_makeNumberTexture(t){const e=document.createElement("canvas");e.width=64,e.height=32;const n=e.getContext("2d");return n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,64,32),n.fillStyle="#fff",n.font="bold 20px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(t),32,16),new lA(e)}_buildShadow(){ec||(ec=new go({color:0,transparent:!0,opacity:.25,depthWrite:!1})),this.shadowMesh=new ue(iR,ec),this.shadowMesh.rotation.x=-Math.PI/2,this.shadowMesh.position.y=.01,this.scene.add(this.shadowMesh)}_buildPhysicsBody([t,e,n]){const s=new xm(.38);this.body=new Ut({mass:75,linearDamping:.8,angularDamping:1}),this.body.addShape(s),this.body.position.set(t,e,n),this.body.collisionFilterGroup=2,this.body.collisionFilterMask=3,this.world.addBody(this.body)}update(t,e,n){if(this.kickCooldown=Math.max(0,this.kickCooldown-t),this.animTimer+=t,this.isStunned){this.stunTimer-=t,this.stunTimer<=0&&(this.isStunned=!1),this._syncMesh();return}if(e&&(e.x!==0||e.z!==0)){const o=this.maxSpeed,a=new w(e.x*o,0,e.z*o);this.body.velocity.x=a.x,this.body.velocity.z=a.z;const l=Math.atan2(e.x,e.z);this.meshGroup.rotation.y=l,this._setAnim(In.RUN)}else this.body.velocity.x*=.85,this.body.velocity.z*=.85,this._setAnim(In.IDLE);this.body.velocity.y=Math.min(this.body.velocity.y,0),this.body.position.y=Math.max(this.body.position.y,.38);const s=Me/2+1,r=Be/2+1;this.body.position.x=Ta.clamp(this.body.position.x,-s,s),this.body.position.z=Ta.clamp(this.body.position.z,-r,r),this._syncMesh(),this._animateMesh()}_syncMesh(){const t=this.body.position;this.meshGroup.position.set(t.x,t.y,t.z),this.shadowMesh.position.set(t.x,.01,t.z)}_setAnim(t){this.animState!==t&&(this.animState=t,this.animTimer=0)}_animateMesh(){const t=this.animTimer;this.animState===In.RUN?(this.bodyMesh.position.y=Math.sin(t*12)*.06,this.headMesh.position.y=.9+Math.sin(t*12)*.04):this.animState===In.KICK?this.bodyMesh.rotation.x=Math.sin(t*18)*.4:this.animState===In.CELEBRATE?this.bodyMesh.position.y=Math.abs(Math.sin(t*8))*.5:(this.bodyMesh.position.y=0,this.bodyMesh.rotation.x=0)}kick(t,e,n=.8){if(this.kickCooldown>0||this.body.position.distanceTo(t.position)>1.2)return!1;const r=18+n*22;return t.velocity.set(e.x*r,2.5+n*4,e.z*r),this.kickCooldown=.45,this._setAnim(In.KICK),!0}tackle(t){if(this.kickCooldown>0||this.body.position.distanceTo(t.body.position)>1)return!1;const n=new w(t.body.position.x-this.body.position.x,.2,t.body.position.z-this.body.position.z);return n.normalize(),t.body.applyImpulse(new w(n.x*6,n.y*6,n.z*6)),t.isStunned=!0,t.stunTimer=.8,t.hasBall=!1,this.kickCooldown=.6,this._setAnim(In.TACKLE),!0}celebrate(){this._setAnim(In.CELEBRATE)}dispose(){this.scene.remove(this.meshGroup),this.scene.remove(this.shadowMesh),this.world.removeBody(this.body)}}const ln={IDLE:"idle",CHASE:"chase",DEFEND:"defend",RETURN:"return",DRIBBLE:"dribble",SHOOT:"shoot"};class sd{constructor({aiPlayers:t,humanPlayers:e,ballBody:n,difficulty:s,attackDir:r,formation:o}){this.aiPlayers=t,this.humanPlayers=e,this.ballBody=n,this.difficulty=s,this.attackDir=r,this.formation=o,this._states=t.map(()=>ln.IDLE),this._decisionTimer=0,this._decisionFreq=s.get("aiDecisionFrequency"),this._reactionTimer=0,this._pendingDir=t.map(()=>null)}update(t){this._decisionTimer+=t,this._reactionTimer+=t;const e=this.difficulty.get("aiReactionTime"),n=this._reactionTimer>=e;this._decisionTimer>=this._decisionFreq&&(this._decisionTimer=0,n&&(this._reactionTimer=0,this._makeDecisions())),this._executeDecisions(t)}_makeDecisions(){const t=new q(this.ballBody.position.x,this.ballBody.position.y,this.ballBody.position.z),e=this.attackDir*(Me/2);let n=0,s=1/0;this.aiPlayers.forEach((r,o)=>{const a=this._playerPos(r).distanceTo(t);a<s&&(s=a,n=o)}),this.aiPlayers.forEach((r,o)=>{const a=this._playerPos(r),l=a.distanceTo(t),c=this._formationTarget(o);if(o===n){const h=Math.abs(a.x-e),u=this.difficulty.get("aiShootAccuracy")>.7?28:20;h<u?this._states[o]=ln.SHOOT:this._states[o]=ln.DRIBBLE}else{const h=this.difficulty.get("aiPressingIntensity");l<15&&Math.random()<h?this._states[o]=ln.CHASE:this._isDefendingHalf(a)?this._states[o]=ln.DEFEND:this._states[o]=ln.RETURN}this._pendingDir[o]=this._computeDir(r,o,t,e,c)})}_executeDecisions(t){const e=this.difficulty.get("aiSpeedMultiplier");this.aiPlayers.forEach((n,s)=>{const r=this._pendingDir[s];if(!r)return;const o=n.maxSpeed*e;n.body.velocity.x=r.x*o,n.body.velocity.z=r.z*o,n.body.velocity.y=Math.min(n.body.velocity.y,0),n.body.position.y=Math.max(n.body.position.y,.38),r.length()>.1?(n.meshGroup.rotation.y=Math.atan2(r.x,r.z),n._setAnim(In.RUN)):n._setAnim(In.IDLE),n._animateMesh(),n._syncMesh();const a=new q(this.ballBody.position.x,this.ballBody.position.y,this.ballBody.position.z);if(this._playerPos(n).distanceTo(a)<1.2){if(this._states[s]===ln.SHOOT)this._doShoot(n,a);else if(this._states[s]===ln.DRIBBLE){const h=new q(this.attackDir,0,0).normalize();n.kick(this.ballBody,h,.3)}}})}_doShoot(t,e){const n=this.difficulty.rollAccuracy("aiShootAccuracy"),s=this.attackDir*(Me/2),r=(1-n)*5,o=(Math.random()-.5)*r,l=new q(s,0,o).sub(e).normalize();t.kick(this.ballBody,l,.7+n*.3)}_computeDir(t,e,n,s,r){const o=this._playerPos(t),a=this._states[e];let l;switch(a){case ln.SHOOT:case ln.DRIBBLE:case ln.CHASE:l=n.clone();break;case ln.DEFEND:l=n.clone().lerp(new q(-s,0,0),.6);break;case ln.RETURN:default:l=r;break}const c=new q().subVectors(l,o);return c.length()<.5?new q(0,0,0):c.normalize()}_playerPos(t){return new q(t.body.position.x,t.body.position.y,t.body.position.z)}_formationTarget(t){if(this.formation&&this.formation.positions&&this.formation.positions[t]){const[s,r]=this.formation.positions[t];return new q(s*this.attackDir,0,r)}const e=t%4,n=Math.floor(t/4);return new q(this.attackDir*(e*10+10),0,(n-1)*18)}_isDefendingHalf(t){return t.x*this.attackDir<0}setPlayers(t){this.aiPlayers=t,this._states=t.map(()=>ln.IDLE),this._pendingDir=t.map(()=>null)}}const re={KICKOFF:"kickoff",IN_PLAY:"in_play",GOAL:"goal",HALF_TIME:"half_time",FULL_TIME:"full_time",THROW_IN:"throw_in",GOAL_KICK:"goal_kick",CORNER:"corner",FREE_KICK:"free_kick"},rd={[re.GOAL]:3.5,[re.HALF_TIME]:4,[re.THROW_IN]:2,[re.GOAL_KICK]:2.5,[re.CORNER]:2.5,[re.FREE_KICK]:2.5},od=180;class rR{constructor({ballBody:t,homePlayers:e,awayPlayers:n,homeTeam:s,awayTeam:r}){this.ballBody=t,this.homePlayers=e,this.awayPlayers=n,this.homeTeam=s,this.awayTeam=r,this.score={home:0,away:0},this.phase=re.KICKOFF,this.phaseTimer=0,this.half=1,this.matchTime=0,this.paused=!1,this._lastTouchHome=!1,this._handlers={},this._setupPhysicsCallbacks()}on(t,e){var n;((n=this._handlers)[t]??(n[t]=[])).push(e)}off(t,e){this._handlers[t]=(this._handlers[t]??[]).filter(n=>n!==e)}_emit(t,e){(this._handlers[t]??[]).forEach(n=>n(e))}update(t){if(!this.paused){if((this.phase===re.IN_PLAY||this.phase===re.KICKOFF)&&(this.matchTime+=t,this.matchTime>=od)){this._endHalf();return}if(rd[this.phase]){this.phaseTimer+=t,this.phaseTimer>=rd[this.phase]&&this._advancePhase();return}this.phase===re.IN_PLAY&&(this._checkBallOut(),this._checkGoal(),this._checkLastTouch())}}_setupPhysicsCallbacks(){}_checkLastTouch(){const t=this.ballBody.position;let e=1/0,n=1/0;this.homePlayers.forEach(s=>{const r=s.body.position.distanceTo(t);r<e&&(e=r)}),this.awayPlayers.forEach(s=>{const r=s.body.position.distanceTo(t);r<n&&(n=r)}),e<1.5&&e<n&&(this._lastTouchHome=!0),n<1.5&&n<e&&(this._lastTouchHome=!1)}_checkGoal(){const t=this.ballBody.position,e=Me/2;if(t.x<-e&&Math.abs(t.z)<=jn/2&&t.y<=tn){this.score.away++,this._triggerGoal("away");return}t.x>e&&Math.abs(t.z)<=jn/2&&t.y<=tn&&(this.score.home++,this._triggerGoal("home"))}_checkBallOut(){const t=this.ballBody.position,e=Me/2,n=Be/2;if(Math.abs(t.x)>e+.5){const s=t.x<0,r=this._lastTouchHome===s;this._setPhase(r?re.CORNER:re.GOAL_KICK,{side:s?"home":"away",z:t.z})}else Math.abs(t.z)>n+.5&&this._setPhase(re.THROW_IN,{side:t.z>0?"right":"left",x:t.x})}_triggerGoal(t){const e=t==="home"?this.homeTeam.name:this.awayTeam.name;this._setPhase(re.GOAL,{scoringTeam:t,teamName:e,score:{...this.score}}),(t==="home"?this.homePlayers:this.awayPlayers).forEach(s=>{var r;return(r=s.celebrate)==null?void 0:r.call(s)})}_setPhase(t,e={}){this.phase=t,this.phaseTimer=0,this._emit(t,{phase:t,...e,score:{...this.score},half:this.half}),this._placeBallForPhase(t,e)}_advancePhase(){this.phaseTimer=0,this.phase===re.HALF_TIME&&(this.half=2,this.matchTime=0);const t=this.phase===re.GOAL?re.KICKOFF:re.IN_PLAY;this.phase=t,this._emit("phase_change",{phase:t}),this._resetBall()}_endHalf(){this.half===1?this._setPhase(re.HALF_TIME):(this.phase=re.FULL_TIME,this._emit(re.FULL_TIME,{score:{...this.score},winner:this._winner()}))}_winner(){return this.score.home>this.score.away?this.homeTeam.name:this.score.away>this.score.home?this.awayTeam.name:null}_resetBall(){this.ballBody.position.set(0,1,0),this.ballBody.velocity.set(0,0,0),this.ballBody.angularVelocity.set(0,0,0)}_placeBallForPhase(t,e){const n=Me/2,s=Be/2;switch(t){case re.GOAL:case re.KICKOFF:this._resetBall();break;case re.THROW_IN:this.ballBody.position.set(Ta.clamp(e.x??0,-n,n),.3,e.side==="right"?s:-s),this.ballBody.velocity.set(0,0,0);break;case re.GOAL_KICK:this.ballBody.position.set(e.side==="home"?-n+5:n-5,.3,0),this.ballBody.velocity.set(0,0,0);break;case re.CORNER:this.ballBody.position.set(e.side==="home"?-n:n,.3,e.z>0?s:-s),this.ballBody.velocity.set(0,0,0);break}}get gameMinute(){const t=(this.half-1)*45;return Math.min(t+Math.floor(this.matchTime/od*45),90)}get isLive(){return this.phase===re.IN_PLAY||this.phase===re.KICKOFF}kickoff(){this.phase=re.IN_PLAY,this._emit("phase_change",{phase:re.IN_PLAY})}}class oR{constructor(t,e){this.container=t,this.engine=e,this._root=null,this._scoreEl=null,this._timeEl=null,this._bannerEl=null,this._minimapCanvas=null,this._minimapCtx=null,this._pauseMenu=null,this._camModeEl=null,this._diffEl=null,this._bannerTimeout=null,this._build(),this._bindEngineEvents()}_build(){this._root=document.createElement("div"),this._root.id="ui-root",Object.assign(this._root.style,{position:"absolute",inset:"0",pointerEvents:"none",fontFamily:"'Segoe UI', Arial, sans-serif",userSelect:"none"}),this._root.innerHTML=`
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
        display:none; flex-direction:column; align-items:center; justify-content:center; gap:16px;
      ">
        <div style="font-size:28px;font-weight:900;color:#fff;letter-spacing:4px;margin-bottom:8px;">PAUSED</div>
        <button id="ui-resume" style="${qr("#27ae60")}">Resume</button>
        <button id="ui-difficulty-easy"   style="${qr("#2980b9")}">Difficulty: Easy</button>
        <button id="ui-difficulty-medium" style="${qr("#2980b9")}">Difficulty: Medium</button>
        <button id="ui-difficulty-hard"   style="${qr("#c0392b")}">Difficulty: Hard</button>
        <button id="ui-quit" style="${qr("#555")}">Quit to Menu</button>
      </div>
    `,this.container.appendChild(this._root),this._scoreEl=this._root.querySelector("#ui-score"),this._timeEl=this._root.querySelector("#ui-time"),this._bannerEl=this._root.querySelector("#ui-banner"),this._bannerTitle=this._root.querySelector("#ui-banner-title"),this._bannerSub=this._root.querySelector("#ui-banner-sub"),this._minimapCanvas=this._root.querySelector("#ui-minimap"),this._minimapCtx=this._minimapCanvas.getContext("2d"),this._pauseMenu=this._root.querySelector("#ui-pause"),this._camModeEl=this._root.querySelector("#ui-cam"),this._diffEl=this._root.querySelector("#ui-diff"),this._homeNameEl=this._root.querySelector("#ui-home"),this._awayNameEl=this._root.querySelector("#ui-away")}_bindEngineEvents(){const t=this.engine;t.on("goal",e=>this.showBanner("GOAL!",e.teamName??"",3e3)),t.on("half_time",()=>this.showBanner("HALF TIME","",3500)),t.on("full_time",e=>{const n=e.winner?`${e.winner} WIN!`:"IT'S A DRAW!";this.showBanner("FULL TIME",n,5e3)}),t.on("corner",()=>this.showBanner("CORNER","",1800)),t.on("throw_in",()=>this.showBanner("THROW IN","",1500)),t.on("goal_kick",()=>this.showBanner("GOAL KICK","",1800)),t.on("free_kick",()=>this.showBanner("FREE KICK","",1800))}setTeamNames(t,e){this._homeNameEl&&(this._homeNameEl.textContent=t),this._awayNameEl&&(this._awayNameEl.textContent=e)}updateHUD(t,e){this._scoreEl&&(this._scoreEl.textContent=`${t.home} – ${t.away}`),this._timeEl&&(this._timeEl.textContent=`${String(e).padStart(2,"0")}'`)}updateMinimap(t,e){const n=this._minimapCtx,s=120,r=80,o=52.5,a=34;n.clearRect(0,0,s,r),n.fillStyle="rgba(20,100,20,0.9)",n.fillRect(0,0,s,r),n.strokeStyle="rgba(255,255,255,0.4)",n.lineWidth=.5,n.beginPath(),n.moveTo(s/2,0),n.lineTo(s/2,r),n.stroke();const l=(t.x+o)/(o*2)*s,c=(t.z+a)/(a*2)*r;n.fillStyle="#fff",n.beginPath(),n.arc(l,c,3,0,Math.PI*2),n.fill(),e.forEach(({x:h,z:u,color:f})=>{const d=(h+o)/(o*2)*s,g=(u+a)/(a*2)*r;n.fillStyle=f,n.beginPath(),n.arc(d,g,2.5,0,Math.PI*2),n.fill()})}showBanner(t,e="",n=2500){clearTimeout(this._bannerTimeout),this._bannerTitle.textContent=t,this._bannerSub.textContent=e,this._bannerEl.style.display="block",this._bannerTimeout=setTimeout(()=>{this._bannerEl.style.display="none"},n)}setCameraMode(t){this._camModeEl&&(this._camModeEl.textContent=t+" CAM")}setDifficulty(t){this._diffEl&&(this._diffEl.textContent=t)}showPause(t,e,n){this._pauseMenu.style.display="flex",this._root.querySelector("#ui-resume").onclick=()=>{this.hidePause(),t()},this._root.querySelector("#ui-quit").onclick=()=>{this.hidePause(),e()},this._root.querySelector("#ui-difficulty-easy").onclick=()=>n("easy"),this._root.querySelector("#ui-difficulty-medium").onclick=()=>n("medium"),this._root.querySelector("#ui-difficulty-hard").onclick=()=>n("hard")}hidePause(){this._pauseMenu.style.display="none"}dispose(){var t;clearTimeout(this._bannerTimeout),(t=this._root)==null||t.remove()}}function qr(i){return`
    background:${i}; color:#fff; border:none; border-radius:6px;
    padding:12px 40px; font-size:15px; font-weight:700; letter-spacing:1px;
    cursor:pointer; width:260px; text-transform:uppercase;
  `}const nc={easy:{label:"Easy",aiReactionTime:.6,aiSpeedMultiplier:.55,aiShootAccuracy:.45,aiPassAccuracy:.55,aiPressingIntensity:.3,aiDecisionFrequency:1.2,playerSpeedBoost:1.15},medium:{label:"Medium",aiReactionTime:.25,aiSpeedMultiplier:.8,aiShootAccuracy:.68,aiPassAccuracy:.72,aiPressingIntensity:.6,aiDecisionFrequency:.5,playerSpeedBoost:1},hard:{label:"Hard",aiReactionTime:.05,aiSpeedMultiplier:1,aiShootAccuracy:.88,aiPassAccuracy:.9,aiPressingIntensity:.95,aiDecisionFrequency:.18,playerSpeedBoost:.92}};class aR{constructor(t="medium"){this.current=t,this.config={...nc[t]}}set(t){if(!nc[t])throw new Error(`Unknown difficulty: ${t}`);this.current=t,this.config={...nc[t]}}get(t){return this.config[t]}rollAccuracy(t){const e=this.config[t]??.5;return Math.min(1,Math.max(0,e+(Math.random()-.5)*.18))}}const ic={positions:[[-46,0],[-30,-12],[-30,-4],[-30,4],[-30,12],[-10,-10],[-10,0],[-10,10],[14,-16],[18,0],[14,16]]},sc=.22;class lR{constructor(t,e,{homeTeam:n,awayTeam:s,difficulty:r="medium",onQuit:o}){Za(this,"_onResize",()=>{this.scene.onResize()});Za(this,"_tick",()=>{this._rafId=requestAnimationFrame(this._tick);const t=performance.now(),e=Math.min((t-this._lastTime)/1e3,.05);this._lastTime=t,this._update(e),this.scene.render()});this.canvas=t,this.uiContainer=e,this.homeTeam=n,this.awayTeam=s,this.onQuit=o,this._rafId=null,this._lastTime=null,this._keys={},this._camMode=Ai.TV,this._camCooldown=0,this.difficulty=new aR(r),this.world=this._initPhysics(),this.scene=new tR(t),this.ballBody=this._createBall(),this.ballMesh=this._createBallMesh(),this.homePlayers=this._spawnTeam(n,1),this.awayPlayers=this._spawnTeam(s,-1),this.controlledPlayer=this.homePlayers[9],this.ai=new sd({aiPlayers:this.awayPlayers,humanPlayers:this.homePlayers,ballBody:this.ballBody,difficulty:this.difficulty,attackDir:-1,formation:ic}),this.homeAi=new sd({aiPlayers:this._nonControlledHomePlayers(),humanPlayers:this.awayPlayers,ballBody:this.ballBody,difficulty:this.difficulty,attackDir:1,formation:ic}),this.match=new rR({ballBody:this.ballBody,homePlayers:this.homePlayers,awayPlayers:this.awayPlayers,homeTeam:n,awayTeam:s}),this.ui=new oR(e,this.match),this.ui.setTeamNames(n.name,s.name),this.ui.setDifficulty(this.difficulty.config.label),this._bindInput(),window.addEventListener("resize",this._onResize)}_initPhysics(){const t=new YC({gravity:new w(0,-9.82,0)});t.broadphase=new um,t.solver.iterations=10;const e=new Ut({mass:0});return e.addShape(new R1),e.quaternion.setFromEuler(-Math.PI/2,0,0),t.addBody(e),t}_createBall(){const t=new Er("ball"),e=new Ut({mass:.45,linearDamping:.35,angularDamping:.4});e.addShape(new xm(sc)),e.position.set(0,sc,0),e.material=t;const n=new Er("ground"),s=new wo(t,n,{restitution:.7,friction:.4});return this.world.addContactMaterial(s),this.world.addBody(e),e}_createBallMesh(){const t=new bo(sc,16,12),e=new Vn({uniforms:{uTime:{value:0}},vertexShader:`
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
      `}),n=new ue(t,e);return n.castShadow=!0,n.receiveShadow=!1,n.name="ball",this.scene.scene.add(n),n}_spawnTeam(t,e){const n=[],s=ic.positions;return t.players.forEach((r,o)=>{const[a,l]=s[o]??[0,0],c=a*e,h=l,u=new sR({data:r,teamColor:t.primaryColor,isHuman:e===1&&o===9,world:this.world,scene:this.scene.scene,startPos:[c,.38,h],facingDir:e});n.push(u)}),n}_bindInput(){this._keydown=t=>{this._keys[t.code]=!0,t.code==="Escape"&&this._togglePause(),t.code==="KeyC"&&this._cycleCamera(),t.code==="KeyQ"&&this._manualSwitchPlayer()},this._keyup=t=>{this._keys[t.code]=!1},window.addEventListener("keydown",this._keydown),window.addEventListener("keyup",this._keyup)}_getInputDir(){let t=0,e=0;(this._keys.ArrowLeft||this._keys.KeyA)&&(t-=1),(this._keys.ArrowRight||this._keys.KeyD)&&(t+=1),(this._keys.ArrowUp||this._keys.KeyW)&&(e-=1),(this._keys.ArrowDown||this._keys.KeyS)&&(e+=1);const n=this._keys.ShiftLeft||this._keys.Tab,s=Math.sqrt(t*t+e*e)||1,r=n?1.35:1;return{x:t/s*r,z:e/s*r}}_getKickInput(){return this._keys.Space||this._keys.KeyX}_getTackleInput(){return this._keys.KeyZ}_nonControlledHomePlayers(){return this.homePlayers.filter((t,e)=>e!==0&&t!==this.controlledPlayer)}_manualSwitchPlayer(){const t=this.homePlayers.filter((n,s)=>s!==0),e=t.indexOf(this.controlledPlayer);this.controlledPlayer=t[(e+1)%t.length],this.homeAi.setPlayers(this._nonControlledHomePlayers())}_cycleCamera(){var n;const t=Object.values(Ai),e=t.indexOf(this._camMode);this._camMode=t[(e+1)%t.length],this.scene.setCameraMode(this._camMode,(n=this.controlledPlayer)==null?void 0:n.meshGroup.position),this.ui.setCameraMode(this._camMode.toUpperCase())}_togglePause(){this.match.paused?(this.match.paused=!1,this.ui.hidePause(),this._lastTime=performance.now(),this._tick()):(this.match.paused=!0,cancelAnimationFrame(this._rafId),this.ui.showPause(()=>{this.match.paused=!1,this._lastTime=performance.now(),this._tick()},()=>{var t;return(t=this.onQuit)==null?void 0:t.call(this)},t=>{this.difficulty.set(t),this.ui.setDifficulty(this.difficulty.config.label)}))}start(){this.match.kickoff(),this._lastTime=performance.now(),this._tick()}_update(t){var s,r,o,a,l,c;if(this.match.paused)return;if(this.world.step(1/60,t,3),(s=this.ballMesh.material.uniforms)!=null&&s.uTime&&(this.ballMesh.material.uniforms.uTime.value+=t),this.ballMesh.position.copy(this.ballBody.position),this.ballMesh.quaternion.copy(this.ballBody.quaternion),this.match.isLive){const h=this._getInputDir(),u=this.ballBody.position;if((r=this.controlledPlayer)==null||r.update(t,h,u),this._getKickInput()){new q(u.x,u.y,u.z);const f=((o=this.controlledPlayer)==null?void 0:o.meshGroup.position)??new q,d=new q(Me/2,0,0).sub(f).normalize();(a=this.controlledPlayer)==null||a.kick(this.ballBody,d,.85)}if(this._getTackleInput()){const f=[...this.awayPlayers].find(d=>d.body.position.distanceTo(this.controlledPlayer.body.position)<1.5);f&&((l=this.controlledPlayer)==null||l.tackle(f))}}this.ai.update(t),this.homeAi.setPlayers(this._nonControlledHomePlayers()),this.homeAi.update(t),this.homePlayers[0].update(t,null,null),this.match.update(t),this.scene.trackBall(this.ballMesh.position,t),this._camMode===Ai.BEHIND&&this.scene.setCameraMode(Ai.BEHIND,(c=this.controlledPlayer)==null?void 0:c.meshGroup.position),this.ui.updateHUD(this.match.score,this.match.gameMinute);const e={x:this.ballBody.position.x,z:this.ballBody.position.z},n=[...this.homePlayers.map(h=>({x:h.body.position.x,z:h.body.position.z,color:this.homeTeam.primaryColor})),...this.awayPlayers.map(h=>({x:h.body.position.x,z:h.body.position.z,color:this.awayTeam.primaryColor}))];this.ui.updateMinimap(e,n),this._autoSwitchPlayer()}_autoSwitchPlayer(){var r;const t=this.ballBody.position,e=((r=this.controlledPlayer)==null?void 0:r.body.position.distanceTo(t))??1/0;let n=null,s=1/0;this.homePlayers.forEach((o,a)=>{if(a===0||o===this.controlledPlayer)return;const l=o.body.position.distanceTo(t);l<s&&(s=l,n=o)}),n&&s<e-4&&(this.controlledPlayer=n,this.homeAi.setPlayers(this._nonControlledHomePlayers()))}dispose(){cancelAnimationFrame(this._rafId),window.removeEventListener("keydown",this._keydown),window.removeEventListener("keyup",this._keyup),window.removeEventListener("resize",this._onResize),this.ui.dispose(),this.scene.dispose(),[...this.homePlayers,...this.awayPlayers].forEach(t=>t.dispose())}}const cR={key:0,class:"select-screen"},hR={class:"pickers"},uR={class:"picker-col"},fR={class:"club-grid"},dR=["disabled","onClick"],pR={class:"vs-col"},mR={class:"diff-group"},gR={class:"diff-btns"},vR=["onClick"],_R=["disabled"],xR={class:"picker-col"},yR={class:"club-grid"},MR=["disabled","onClick"],SR={key:1,class:"loading-screen"},bR={__name:"GameView",setup(i){const t=Va(),e=ne("select"),n=ne("medium"),s=ne(null),r=ne(null),o=ne({}),a=ne(null),l=ne(null),c=ne(null);let h=null;mr(async()=>{try{const d=await(await fetch("/data/players.json")).json();o.value=d.teams??{}}catch(f){console.error("Failed to load players.json",f)}});async function u(){if(!s.value||!r.value)return;e.value="loading",await pr(),await new Promise(p=>setTimeout(p,60)),e.value="game",await pr();const f=l.value,d=c.value;f.width=a.value.clientWidth,f.height=a.value.clientHeight;const g={id:s.value,...o.value[s.value]},v={id:r.value,...o.value[r.value]};h=new lR(f,d,{homeTeam:g,awayTeam:v,difficulty:n.value,onQuit:()=>t.push("/")}),h.start()}return Wd(()=>{h==null||h.dispose(),h=null}),(f,d)=>e.value==="select"?(Ot(),Bt("div",cR,[K("button",{class:"back-btn",onClick:d[0]||(d[0]=g=>As(t).push("/"))},"← Back"),d[5]||(d[5]=K("h1",{class:"title"},"3D MATCH",-1)),d[6]||(d[6]=K("p",{class:"subtitle"},"Select teams & difficulty",-1)),K("div",hR,[K("div",uR,[d[1]||(d[1]=K("h2",null,"🎮 Your Team",-1)),K("div",fR,[(Ot(!0),Bt(be,null,xn(o.value,(g,v)=>(Ot(),Bt("button",{key:v,class:fn(["club-btn",{selected:s.value===v,blocked:r.value===v}]),disabled:r.value===v,onClick:p=>s.value=v},[K("span",{class:"dot",style:es({background:g.primaryColor})},null,4),Ki(" "+Ft(g.name)+" ",1),K("small",null,Ft(g.league),1)],10,dR))),128))])]),K("div",pR,[d[3]||(d[3]=K("div",{class:"vs-badge"},"VS",-1)),K("div",mR,[d[2]||(d[2]=K("label",null,"Difficulty",-1)),K("div",gR,[(Ot(),Bt(be,null,xn(["easy","medium","hard"],g=>K("button",{key:g,class:fn(["diff-btn",{active:n.value===g}]),onClick:v=>n.value=g},Ft(g),11,vR)),64))])]),K("button",{class:"kickoff-btn",disabled:!s.value||!r.value,onClick:u}," ⚽ Kick Off ",8,_R)]),K("div",xR,[d[4]||(d[4]=K("h2",null,"🤖 Opponent",-1)),K("div",yR,[(Ot(!0),Bt(be,null,xn(o.value,(g,v)=>(Ot(),Bt("button",{key:v,class:fn(["club-btn",{selected:r.value===v,blocked:s.value===v}]),disabled:s.value===v,onClick:p=>r.value=v},[K("span",{class:"dot",style:es({background:g.primaryColor})},null,4),Ki(" "+Ft(g.name)+" ",1),K("small",null,Ft(g.league),1)],10,MR))),128))])])])])):e.value==="loading"?(Ot(),Bt("div",SR,[...d[7]||(d[7]=[K("div",{class:"spinner"},null,-1),K("p",null,"Building the stadium…",-1)])])):e.value==="game"?(Ot(),Bt("div",{key:2,class:"game-wrap",ref_key:"gameWrap",ref:a},[K("canvas",{ref_key:"canvasEl",ref:l,class:"game-canvas"},null,512),K("div",{ref_key:"uiEl",ref:c,class:"ui-layer"},null,512)],512)):En("",!0)}},ER=is(bR,[["__scopeId","data-v-2d6b4e9c"]]),wR=r0({history:O_(),routes:[{path:"/",component:E0},{path:"/play",component:fx},{path:"/watch",component:Cy},{path:"/game",component:ER}]});$v(Qv).use(wR).mount("#app");
