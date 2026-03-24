(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ql(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},Gs=[],Xn=()=>{},mf=()=>!1,ra=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ec=n=>n.startsWith("onUpdate:"),Lt=Object.assign,tc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Dp=Object.prototype.hasOwnProperty,rt=(n,e)=>Dp.call(n,e),He=Array.isArray,Ws=n=>jr(n)==="[object Map]",oa=n=>jr(n)==="[object Set]",Fc=n=>jr(n)==="[object Date]",qe=n=>typeof n=="function",wt=n=>typeof n=="string",jn=n=>typeof n=="symbol",ot=n=>n!==null&&typeof n=="object",gf=n=>(ot(n)||qe(n))&&qe(n.then)&&qe(n.catch),vf=Object.prototype.toString,jr=n=>vf.call(n),Ip=n=>jr(n).slice(8,-1),_f=n=>jr(n)==="[object Object]",nc=n=>wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Tr=Ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Np=/-\w/g,Qt=aa(n=>n.replace(Np,e=>e.slice(1).toUpperCase())),Up=/\B([A-Z])/g,_s=aa(n=>n.replace(Up,"-$1").toLowerCase()),la=aa(n=>n.charAt(0).toUpperCase()+n.slice(1)),La=aa(n=>n?`on${la(n)}`:""),Hn=(n,e)=>!Object.is(n,e),No=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},xf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ca=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Op=n=>{const e=wt(n)?Number(n):NaN;return isNaN(e)?n:e};let kc;const ua=()=>kc||(kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function An(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=wt(i)?zp(i):An(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(wt(n)||ot(n))return n}const Fp=/;(?![^(]*\))/g,kp=/:([^]+)/,Bp=/\/\*[^]*?\*\//g;function zp(n){const e={};return n.replace(Bp,"").split(Fp).forEach(t=>{if(t){const i=t.split(kp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function We(n){let e="";if(wt(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=We(n[t]);i&&(e+=i+" ")}else if(ot(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Hp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vp=Ql(Hp);function yf(n){return!!n||n===""}function Gp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Kr(n[i],e[i]);return t}function Kr(n,e){if(n===e)return!0;let t=Fc(n),i=Fc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=jn(n),i=jn(e),t||i)return n===e;if(t=He(n),i=He(e),t||i)return t&&i?Gp(n,e):!1;if(t=ot(n),i=ot(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Kr(n[o],e[o]))return!1}}return String(n)===String(e)}function Wp(n,e){return n.findIndex(t=>Kr(t,e))}const Mf=n=>!!(n&&n.__v_isRef===!0),H=n=>wt(n)?n:n==null?"":He(n)||ot(n)&&(n.toString===vf||!qe(n.toString))?Mf(n)?H(n.value):JSON.stringify(n,Sf,2):String(n),Sf=(n,e)=>Mf(e)?Sf(n,e.value):Ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Da(i,r)+" =>"]=s,t),{})}:oa(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Da(t))}:jn(e)?Da(e):ot(e)&&!He(e)&&!_f(e)?String(e):e,Da=(n,e="")=>{var t;return jn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tn;class $p{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=tn;try{return tn=this,e()}finally{tn=t}}}on(){++this._on===1&&(this.prevScope=tn,tn=this)}off(){this._on>0&&--this._on===0&&(tn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xp(){return tn}let dt;const Ia=new WeakSet;class bf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&tn.active&&tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ia.has(this)&&(Ia.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bc(this),wf(this);const e=dt,t=wn;dt=this,wn=!0;try{return this.fn()}finally{Af(this),dt=e,wn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)rc(e);this.deps=this.depsTail=void 0,Bc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ia.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pl(this)&&this.run()}get dirty(){return Pl(this)}}let Ef=0,wr,Ar;function Tf(n,e=!1){if(n.flags|=8,e){n.next=Ar,Ar=n;return}n.next=wr,wr=n}function ic(){Ef++}function sc(){if(--Ef>0)return;if(Ar){let e=Ar;for(Ar=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;wr;){let e=wr;for(wr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function wf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Af(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),rc(i),qp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Pl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Cf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Cf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Br)||(n.globalVersion=Br,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Pl(n))))return;n.flags|=2;const e=n.dep,t=dt,i=wn;dt=n,wn=!0;try{wf(n);const s=n.fn(n._value);(e.version===0||Hn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{dt=t,wn=i,Af(n),n.flags&=-3}}function rc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)rc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function qp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let wn=!0;const Rf=[];function gi(){Rf.push(wn),wn=!1}function vi(){const n=Rf.pop();wn=n===void 0?!0:n}function Bc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=dt;dt=void 0;try{e()}finally{dt=t}}}let Br=0;class Yp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class oc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!dt||!wn||dt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==dt)t=this.activeLink=new Yp(dt,this),dt.deps?(t.prevDep=dt.depsTail,dt.depsTail.nextDep=t,dt.depsTail=t):dt.deps=dt.depsTail=t,Pf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=dt.depsTail,t.nextDep=void 0,dt.depsTail.nextDep=t,dt.depsTail=t,dt.deps===t&&(dt.deps=i)}return t}trigger(e){this.version++,Br++,this.notify(e)}notify(e){ic();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{sc()}}}function Pf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Pf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ll=new WeakMap,ps=Symbol(""),Dl=Symbol(""),zr=Symbol("");function Gt(n,e,t){if(wn&&dt){let i=Ll.get(n);i||Ll.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new oc),s.map=i,s.key=t),s.track()}}function ui(n,e,t,i,s,r){const o=Ll.get(n);if(!o){Br++;return}const a=l=>{l&&l.trigger()};if(ic(),e==="clear")o.forEach(a);else{const l=He(n),c=l&&nc(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===zr||!jn(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(zr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ps)),Ws(n)&&a(o.get(Dl)));break;case"delete":l||(a(o.get(ps)),Ws(n)&&a(o.get(Dl)));break;case"set":Ws(n)&&a(o.get(ps));break}}sc()}function xs(n){const e=it(n);return e===n?e:(Gt(e,"iterate",zr),xn(n)?e:e.map(Cn))}function da(n){return Gt(n=it(n),"iterate",zr),n}function kn(n,e){return _i(n)?er(ms(n)?Cn(e):e):Cn(e)}const jp={__proto__:null,[Symbol.iterator](){return Na(this,Symbol.iterator,n=>kn(this,n))},concat(...n){return xs(this).concat(...n.map(e=>He(e)?xs(e):e))},entries(){return Na(this,"entries",n=>(n[1]=kn(this,n[1]),n))},every(n,e){return Zn(this,"every",n,e,void 0,arguments)},filter(n,e){return Zn(this,"filter",n,e,t=>t.map(i=>kn(this,i)),arguments)},find(n,e){return Zn(this,"find",n,e,t=>kn(this,t),arguments)},findIndex(n,e){return Zn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Zn(this,"findLast",n,e,t=>kn(this,t),arguments)},findLastIndex(n,e){return Zn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Zn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ua(this,"includes",n)},indexOf(...n){return Ua(this,"indexOf",n)},join(n){return xs(this).join(n)},lastIndexOf(...n){return Ua(this,"lastIndexOf",n)},map(n,e){return Zn(this,"map",n,e,void 0,arguments)},pop(){return hr(this,"pop")},push(...n){return hr(this,"push",n)},reduce(n,...e){return zc(this,"reduce",n,e)},reduceRight(n,...e){return zc(this,"reduceRight",n,e)},shift(){return hr(this,"shift")},some(n,e){return Zn(this,"some",n,e,void 0,arguments)},splice(...n){return hr(this,"splice",n)},toReversed(){return xs(this).toReversed()},toSorted(n){return xs(this).toSorted(n)},toSpliced(...n){return xs(this).toSpliced(...n)},unshift(...n){return hr(this,"unshift",n)},values(){return Na(this,"values",n=>kn(this,n))}};function Na(n,e,t){const i=da(n),s=i[e]();return i!==n&&!xn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Kp=Array.prototype;function Zn(n,e,t,i,s,r){const o=da(n),a=o!==n&&!xn(n),l=o[e];if(l!==Kp[e]){const d=l.apply(n,r);return a?Cn(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,kn(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function zc(n,e,t,i){const s=da(n),r=s!==n&&!xn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=kn(n,c)),t.call(this,c,kn(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](o,...i);return a?kn(n,l):l}function Ua(n,e,t){const i=it(n);Gt(i,"iterate",zr);const s=i[e](...t);return(s===-1||s===!1)&&cc(t[0])?(t[0]=it(t[0]),i[e](...t)):s}function hr(n,e,t=[]){gi(),ic();const i=it(n)[e].apply(n,t);return sc(),vi(),i}const Jp=Ql("__proto__,__v_isRef,__isVue"),Lf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(jn));function Zp(n){jn(n)||(n=String(n));const e=it(this);return Gt(e,"has",n),e.hasOwnProperty(n)}class Df{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?lm:Of:r?Uf:Nf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!s){let l;if(o&&(l=jp[t]))return l;if(t==="hasOwnProperty")return Zp}const a=Reflect.get(e,t,Xt(e)?e:i);if((jn(t)?Lf.has(t):Jp(t))||(s||Gt(e,"get",t),r))return a;if(Xt(a)){const l=o&&nc(t)?a:a.value;return s&&ot(l)?Nl(l):l}return ot(a)?s?Nl(a):fa(a):a}}class If extends Df{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=He(e)&&nc(t);if(!this._isShallow){const c=_i(r);if(!xn(i)&&!_i(i)&&(r=it(r),i=it(i)),!o&&Xt(r)&&!Xt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:rt(e,t),l=Reflect.set(e,t,i,Xt(e)?e:s);return e===it(s)&&(a?Hn(i,r)&&ui(e,"set",t,i):ui(e,"add",t,i)),l}deleteProperty(e,t){const i=rt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ui(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!jn(t)||!Lf.has(t))&&Gt(e,"has",t),i}ownKeys(e){return Gt(e,"iterate",He(e)?"length":ps),Reflect.ownKeys(e)}}class Qp extends Df{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const em=new If,tm=new Qp,nm=new If(!0);const Il=n=>n,oo=n=>Reflect.getPrototypeOf(n);function im(n,e,t){return function(...i){const s=this.__v_raw,r=it(s),o=Ws(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Il:e?er:Cn;return!e&&Gt(r,"iterate",l?Dl:ps),Lt(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function ao(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function sm(n,e){const t={get(s){const r=this.__v_raw,o=it(r),a=it(s);n||(Hn(s,a)&&Gt(o,"get",s),Gt(o,"get",a));const{has:l}=oo(o),c=e?Il:n?er:Cn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Gt(it(s),"iterate",ps),s.size},has(s){const r=this.__v_raw,o=it(r),a=it(s);return n||(Hn(s,a)&&Gt(o,"has",s),Gt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=it(a),c=e?Il:n?er:Cn;return!n&&Gt(l,"iterate",ps),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Lt(t,n?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(s){const r=it(this),o=oo(r),a=it(s),l=!e&&!xn(s)&&!_i(s)?a:s;return o.has.call(r,l)||Hn(s,l)&&o.has.call(r,s)||Hn(a,l)&&o.has.call(r,a)||(r.add(l),ui(r,"add",l,l)),this},set(s,r){!e&&!xn(r)&&!_i(r)&&(r=it(r));const o=it(this),{has:a,get:l}=oo(o);let c=a.call(o,s);c||(s=it(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Hn(r,u)&&ui(o,"set",s,r):ui(o,"add",s,r),this},delete(s){const r=it(this),{has:o,get:a}=oo(r);let l=o.call(r,s);l||(s=it(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ui(r,"delete",s,void 0),c},clear(){const s=it(this),r=s.size!==0,o=s.clear();return r&&ui(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=im(s,n,e)}),t}function ac(n,e){const t=sm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(rt(t,s)&&s in i?t:i,s,r)}const rm={get:ac(!1,!1)},om={get:ac(!1,!0)},am={get:ac(!0,!1)};const Nf=new WeakMap,Uf=new WeakMap,Of=new WeakMap,lm=new WeakMap;function cm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function um(n){return n.__v_skip||!Object.isExtensible(n)?0:cm(Ip(n))}function fa(n){return _i(n)?n:lc(n,!1,em,rm,Nf)}function Ff(n){return lc(n,!1,nm,om,Uf)}function Nl(n){return lc(n,!0,tm,am,Of)}function lc(n,e,t,i,s){if(!ot(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=um(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function ms(n){return _i(n)?ms(n.__v_raw):!!(n&&n.__v_isReactive)}function _i(n){return!!(n&&n.__v_isReadonly)}function xn(n){return!!(n&&n.__v_isShallow)}function cc(n){return n?!!n.__v_raw:!1}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function dm(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&xf(n,"__v_skip",!0),n}const Cn=n=>ot(n)?fa(n):n,er=n=>ot(n)?Nl(n):n;function Xt(n){return n?n.__v_isRef===!0:!1}function Me(n){return kf(n,!1)}function fm(n){return kf(n,!0)}function kf(n,e){return Xt(n)?n:new hm(n,e)}class hm{constructor(e,t){this.dep=new oc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:Cn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||xn(e)||_i(e);e=i?e:it(e),Hn(e,t)&&(this._rawValue=e,this._value=i?e:Cn(e),this.dep.trigger())}}function $s(n){return Xt(n)?n.value:n}const pm={get:(n,e,t)=>e==="__v_raw"?n:$s(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Xt(s)&&!Xt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Bf(n){return ms(n)?n:new Proxy(n,pm)}class mm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new oc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&dt!==this)return Tf(this,!0),!0}get value(){const e=this.dep.track();return Cf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gm(n,e,t=!1){let i,s;return qe(n)?i=n:(i=n.get,s=n.set),new mm(i,s,t)}const lo={},zo=new WeakMap;let ss;function vm(n,e=!1,t=ss){if(t){let i=zo.get(t);i||zo.set(t,i=[]),i.push(n)}}function _m(n,e,t=ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=A=>s?A:xn(A)||s===!1||s===0?di(A,1):di(A);let u,d,f,h,v=!1,x=!1;if(Xt(n)?(d=()=>n.value,v=xn(n)):ms(n)?(d=()=>c(n),v=!0):He(n)?(x=!0,v=n.some(A=>ms(A)||xn(A)),d=()=>n.map(A=>{if(Xt(A))return A.value;if(ms(A))return c(A);if(qe(A))return l?l(A,2):A()})):qe(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){gi();try{f()}finally{vi()}}const A=ss;ss=u;try{return l?l(n,3,[h]):n(h)}finally{ss=A}}:d=Xn,e&&s){const A=d,w=s===!0?1/0:s;d=()=>di(A(),w)}const g=Xp(),p=()=>{u.stop(),g&&g.active&&tc(g.effects,u)};if(r&&e){const A=e;e=(...w)=>{A(...w),p()}}let C=x?new Array(n.length).fill(lo):lo;const S=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const w=u.run();if(s||v||(x?w.some((E,b)=>Hn(E,C[b])):Hn(w,C))){f&&f();const E=ss;ss=u;try{const b=[w,C===lo?void 0:x&&C[0]===lo?[]:C,h];C=w,l?l(e,3,b):e(...b)}finally{ss=E}}}else u.run()};return a&&a(S),u=new bf(d),u.scheduler=o?()=>o(S,!1):S,h=A=>vm(A,!1,u),f=u.onStop=()=>{const A=zo.get(u);if(A){if(l)l(A,4);else for(const w of A)w();zo.delete(u)}},e?i?S(!0):C=u.run():o?o(S.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function di(n,e=1/0,t){if(e<=0||!ot(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Xt(n))di(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)di(n[i],e,t);else if(oa(n)||Ws(n))n.forEach(i=>{di(i,e,t)});else if(_f(n)){for(const i in n)di(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&di(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jr(n,e,t,i){try{return i?n(...i):n()}catch(s){ha(s,e,t)}}function Rn(n,e,t,i){if(qe(n)){const s=Jr(n,e,t,i);return s&&gf(s)&&s.catch(r=>{ha(r,e,t)}),s}if(He(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Rn(n[r],e,t,i));return s}}function ha(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){gi(),Jr(r,null,10,[n,l,c]),vi();return}}xm(n,t,s,i,o)}function xm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Jt=[];let Un=-1;const Xs=[];let Ni=null,ks=0;const zf=Promise.resolve();let Ho=null;function pa(n){const e=Ho||zf;return n?e.then(this?n.bind(this):n):e}function ym(n){let e=Un+1,t=Jt.length;for(;e<t;){const i=e+t>>>1,s=Jt[i],r=Hr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function uc(n){if(!(n.flags&1)){const e=Hr(n),t=Jt[Jt.length-1];!t||!(n.flags&2)&&e>=Hr(t)?Jt.push(n):Jt.splice(ym(e),0,n),n.flags|=1,Hf()}}function Hf(){Ho||(Ho=zf.then(Gf))}function Mm(n){He(n)?Xs.push(...n):Ni&&n.id===-1?Ni.splice(ks+1,0,n):n.flags&1||(Xs.push(n),n.flags|=1),Hf()}function Hc(n,e,t=Un+1){for(;t<Jt.length;t++){const i=Jt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Jt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Vf(n){if(Xs.length){const e=[...new Set(Xs)].sort((t,i)=>Hr(t)-Hr(i));if(Xs.length=0,Ni){Ni.push(...e);return}for(Ni=e,ks=0;ks<Ni.length;ks++){const t=Ni[ks];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ni=null,ks=0}}const Hr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Gf(n){try{for(Un=0;Un<Jt.length;Un++){const e=Jt[Un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Jr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Un<Jt.length;Un++){const e=Jt[Un];e&&(e.flags&=-2)}Un=-1,Jt.length=0,Vf(),Ho=null,(Jt.length||Xs.length)&&Gf()}}let dn=null,Wf=null;function Vo(n){const e=dn;return dn=n,Wf=n&&n.type.__scopeId||null,e}function ma(n,e=dn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&$o(-1);const r=Vo(e);let o;try{o=n(...s)}finally{Vo(r),i._d&&$o(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function vn(n,e){if(dn===null)return n;const t=ya(dn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ut]=e[s];r&&(qe(r)&&(r={mounted:r,updated:r}),r.deep&&di(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function qi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(gi(),Rn(l,t,8,[n.el,a,n,e]),vi())}}function Uo(n,e){if($t){let t=$t.provides;const i=$t.parent&&$t.parent.provides;i===t&&(t=$t.provides=Object.create(i)),t[n]=e}}function qn(n,e,t=!1){const i=Eh();if(i||qs){let s=qs?qs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const Sm=Symbol.for("v-scx"),bm=()=>qn(Sm);function Cr(n,e,t){return $f(n,e,t)}function $f(n,e,t=ut){const{immediate:i,deep:s,flush:r,once:o}=t,a=Lt({},t),l=e&&i||!e&&r!=="post";let c;if(Wr){if(r==="sync"){const h=bm();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Xn,h.resume=Xn,h.pause=Xn,h}}const u=$t;a.call=(h,v,x)=>Rn(h,u,v,x);let d=!1;r==="post"?a.scheduler=h=>{en(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,v)=>{v?h():uc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=_m(n,e,a);return Wr&&(c?c.push(f):l&&f()),f}function Em(n,e,t){const i=this.proxy,s=wt(n)?n.includes(".")?Xf(i,n):()=>i[n]:n.bind(i,i);let r;qe(e)?r=e:(r=e.handler,t=e);const o=Qr(this),a=$f(s,r.bind(i),t);return o(),a}function Xf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Tm=Symbol("_vte"),qf=n=>n.__isTeleport,On=Symbol("_leaveCb"),pr=Symbol("_enterCb");function wm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ln(()=>{n.isMounted=!0}),Zr(()=>{n.isUnmounting=!0}),n}const pn=[Function,Array],Yf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pn,onEnter:pn,onAfterEnter:pn,onEnterCancelled:pn,onBeforeLeave:pn,onLeave:pn,onAfterLeave:pn,onLeaveCancelled:pn,onBeforeAppear:pn,onAppear:pn,onAfterAppear:pn,onAppearCancelled:pn},jf=n=>{const e=n.subTree;return e.component?jf(e.component):e},Am={name:"BaseTransition",props:Yf,setup(n,{slots:e}){const t=Eh(),i=wm();return()=>{const s=e.default&&Zf(e.default(),!0);if(!s||!s.length)return;const r=Kf(s),o=it(n),{mode:a}=o;if(i.isLeaving)return Oa(r);const l=Vc(r);if(!l)return Oa(r);let c=Ul(l,o,i,t,d=>c=d);l.type!==Zt&&Vr(l,c);let u=t.subTree&&Vc(t.subTree);if(u&&u.type!==Zt&&!as(u,l)&&jf(t).type!==Zt){let d=Ul(u,o,i,t);if(Vr(u,d),a==="out-in"&&l.type!==Zt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Oa(r);a==="in-out"&&l.type!==Zt?d.delayLeave=(f,h,v)=>{const x=Jf(i,u);x[String(u.key)]=u,f[On]=()=>{h(),f[On]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Kf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Zt){e=t;break}}return e}const Cm=Am;function Jf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ul(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:v,onLeaveCancelled:x,onBeforeAppear:g,onAppear:p,onAfterAppear:C,onAppearCancelled:S}=e,A=String(n.key),w=Jf(t,n),E=(y,M)=>{y&&Rn(y,i,9,M)},b=(y,M)=>{const q=M[1];E(y,M),He(y)?y.every(k=>k.length<=1)&&q():y.length<=1&&q()},P={mode:o,persisted:a,beforeEnter(y){let M=l;if(!t.isMounted)if(r)M=g||l;else return;y[On]&&y[On](!0);const q=w[A];q&&as(n,q)&&q.el[On]&&q.el[On](),E(M,[y])},enter(y){if(w[A]===n)return;let M=c,q=u,k=d;if(!t.isMounted)if(r)M=p||c,q=C||u,k=S||d;else return;let F=!1;y[pr]=ne=>{F||(F=!0,ne?E(k,[y]):E(q,[y]),P.delayedLeave&&P.delayedLeave(),y[pr]=void 0)};const Q=y[pr].bind(null,!1);M?b(M,[y,Q]):Q()},leave(y,M){const q=String(n.key);if(y[pr]&&y[pr](!0),t.isUnmounting)return M();E(f,[y]);let k=!1;y[On]=Q=>{k||(k=!0,M(),Q?E(x,[y]):E(v,[y]),y[On]=void 0,w[q]===n&&delete w[q])};const F=y[On].bind(null,!1);w[q]=n,h?b(h,[y,F]):F()},clone(y){const M=Ul(y,e,t,i,s);return s&&s(M),M}};return P}function Oa(n){if(ga(n))return n=Hi(n),n.children=null,n}function Vc(n){if(!ga(n))return qf(n.type)&&n.children?Kf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&qe(t.default))return t.default()}}function Vr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Vr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Zf(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Fe?(o.patchFlag&128&&s++,i=i.concat(Zf(o.children,e,a))):(e||o.type!==Zt)&&i.push(a!=null?Hi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Qf(n,e){return qe(n)?Lt({name:n.name},e,{setup:n}):n}function eh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Gc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Go=new WeakMap;function Rr(n,e,t,i,s=!1){if(He(n)){n.forEach((x,g)=>Rr(x,e&&(He(e)?e[g]:e),t,i,s));return}if(Pr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Rr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?ya(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,d=a.setupState,f=it(d),h=d===ut?mf:x=>Gc(u,x)?!1:rt(f,x),v=(x,g)=>!(g&&Gc(u,g));if(c!=null&&c!==l){if(Wc(e),wt(c))u[c]=null,h(c)&&(d[c]=null);else if(Xt(c)){const x=e;v(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(qe(l))Jr(l,a,12,[o,u]);else{const x=wt(l),g=Xt(l);if(x||g){const p=()=>{if(n.f){const C=x?h(l)?d[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)He(C)&&tc(C,r);else if(He(C))C.includes(r)||C.push(r);else if(x)u[l]=[r],h(l)&&(d[l]=u[l]);else{const S=[r];v(l,n.k)&&(l.value=S),n.k&&(u[n.k]=S)}}else x?(u[l]=o,h(l)&&(d[l]=o)):g&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const C=()=>{p(),Go.delete(n)};C.id=-1,Go.set(n,C),en(C,t)}else Wc(n),p()}}}function Wc(n){const e=Go.get(n);e&&(e.flags|=8,Go.delete(n))}ua().requestIdleCallback;ua().cancelIdleCallback;const Pr=n=>!!n.type.__asyncLoader,ga=n=>n.type.__isKeepAlive;function Rm(n,e){th(n,"a",e)}function Pm(n,e){th(n,"da",e)}function th(n,e,t=$t){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(va(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ga(s.parent.vnode)&&Lm(i,e,t,s),s=s.parent}}function Lm(n,e,t,i){const s=va(e,n,i,!0);nh(()=>{tc(i[e],s)},t)}function va(n,e,t=$t,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{gi();const a=Qr(t),l=Rn(e,t,n,o);return a(),vi(),l});return i?s.unshift(r):s.push(r),r}}const yi=n=>(e,t=$t)=>{(!Wr||n==="sp")&&va(n,(...i)=>e(...i),t)},Dm=yi("bm"),Ln=yi("m"),Im=yi("bu"),Nm=yi("u"),Zr=yi("bum"),nh=yi("um"),Um=yi("sp"),Om=yi("rtg"),Fm=yi("rtc");function km(n,e=$t){va("ec",n,e)}const Bm="components";function ih(n,e){return Hm(Bm,n,!0,e)||n}const zm=Symbol.for("v-ndc");function Hm(n,e,t=!0,i=!1){const s=dn||$t;if(s){const r=s.type;{const a=Tg(r,!1);if(a&&(a===e||a===Qt(e)||a===la(Qt(e))))return r}const o=$c(s[n]||r[n],e)||$c(s.appContext[n],e);return!o&&i?r:o}}function $c(n,e){return n&&(n[e]||n[Qt(e)]||n[la(Qt(e))])}function Ye(n,e,t,i){let s;const r=t,o=He(n);if(o||wt(n)){const a=o&&ms(n);let l=!1,c=!1;a&&(l=!xn(n),c=_i(n),n=da(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?er(Cn(n[u])):Cn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(ot(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Ol=n=>n?Th(n)?ya(n):Ol(n.parent):null,Lr=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ol(n.parent),$root:n=>Ol(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>rh(n),$forceUpdate:n=>n.f||(n.f=()=>{uc(n.update)}),$nextTick:n=>n.n||(n.n=pa.bind(n.proxy)),$watch:n=>Em.bind(n)}),Fa=(n,e)=>n!==ut&&!n.__isScriptSetup&&rt(n,e),Vm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Fa(i,e))return o[e]=1,i[e];if(s!==ut&&rt(s,e))return o[e]=2,s[e];if(rt(r,e))return o[e]=3,r[e];if(t!==ut&&rt(t,e))return o[e]=4,t[e];Fl&&(o[e]=0)}}const c=Lr[e];let u,d;if(c)return e==="$attrs"&&Gt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ut&&rt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,rt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Fa(s,e)?(s[e]=t,!0):i!==ut&&rt(i,e)?(i[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==ut&&a[0]!=="$"&&rt(n,a)||Fa(e,a)||rt(r,a)||rt(i,a)||rt(Lr,a)||rt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Xc(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Fl=!0;function Gm(n){const e=rh(n),t=n.proxy,i=n.ctx;Fl=!1,e.beforeCreate&&qc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:v,activated:x,deactivated:g,beforeDestroy:p,beforeUnmount:C,destroyed:S,unmounted:A,render:w,renderTracked:E,renderTriggered:b,errorCaptured:P,serverPrefetch:y,expose:M,inheritAttrs:q,components:k,directives:F,filters:Q}=e;if(c&&Wm(c,i,null),o)for(const pe in o){const $=o[pe];qe($)&&(i[pe]=$.bind(t))}if(s){const pe=s.call(t,t);ot(pe)&&(n.data=fa(pe))}if(Fl=!0,r)for(const pe in r){const $=r[pe],ae=qe($)?$.bind(t,t):qe($.get)?$.get.bind(t,t):Xn,ce=!qe($)&&qe($.set)?$.set.bind(t):Xn,G=tt({get:ae,set:ce});Object.defineProperty(i,pe,{enumerable:!0,configurable:!0,get:()=>G.value,set:se=>G.value=se})}if(a)for(const pe in a)sh(a[pe],i,t,pe);if(l){const pe=qe(l)?l.call(t):l;Reflect.ownKeys(pe).forEach($=>{Uo($,pe[$])})}u&&qc(u,n,"c");function fe(pe,$){He($)?$.forEach(ae=>pe(ae.bind(t))):$&&pe($.bind(t))}if(fe(Dm,d),fe(Ln,f),fe(Im,h),fe(Nm,v),fe(Rm,x),fe(Pm,g),fe(km,P),fe(Fm,E),fe(Om,b),fe(Zr,C),fe(nh,A),fe(Um,y),He(M))if(M.length){const pe=n.exposed||(n.exposed={});M.forEach($=>{Object.defineProperty(pe,$,{get:()=>t[$],set:ae=>t[$]=ae,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===Xn&&(n.render=w),q!=null&&(n.inheritAttrs=q),k&&(n.components=k),F&&(n.directives=F),y&&eh(n)}function Wm(n,e,t=Xn){He(n)&&(n=kl(n));for(const i in n){const s=n[i];let r;ot(s)?"default"in s?r=qn(s.from||i,s.default,!0):r=qn(s.from||i):r=qn(s),Xt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function qc(n,e,t){Rn(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function sh(n,e,t,i){let s=i.includes(".")?Xf(t,i):()=>t[i];if(wt(n)){const r=e[n];qe(r)&&Cr(s,r)}else if(qe(n))Cr(s,n.bind(t));else if(ot(n))if(He(n))n.forEach(r=>sh(r,e,t,i));else{const r=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(r)&&Cr(s,r,n)}}function rh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Wo(l,c,o,!0)),Wo(l,e,o)),ot(e)&&r.set(e,l),l}function Wo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Wo(n,r,t,!0),s&&s.forEach(o=>Wo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=$m[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const $m={data:Yc,props:jc,emits:jc,methods:br,computed:br,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:br,directives:br,watch:qm,provide:Yc,inject:Xm};function Yc(n,e){return e?n?function(){return Lt(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Xm(n,e){return br(kl(n),kl(e))}function kl(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function qt(n,e){return n?[...new Set([].concat(n,e))]:e}function br(n,e){return n?Lt(Object.create(null),n,e):e}function jc(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:Lt(Object.create(null),Xc(n),Xc(e??{})):e}function qm(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=qt(n[i],e[i]);return t}function oh(){return{app:null,config:{isNativeTag:mf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ym=0;function jm(n,e){return function(i,s=null){qe(i)||(i=Lt({},i)),s!=null&&!ot(s)&&(s=null);const r=oh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Ym++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ag,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...d)):qe(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||yt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,ya(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Rn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=qs;qs=c;try{return u()}finally{qs=d}}};return c}}let qs=null;const Km=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Qt(e)}Modifiers`]||n[`${_s(e)}Modifiers`];function Jm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let s=t;const r=e.startsWith("update:"),o=r&&Km(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>wt(u)?u.trim():u)),o.number&&(s=t.map(ca)));let a,l=i[a=La(e)]||i[a=La(Qt(e))];!l&&r&&(l=i[a=La(_s(e))]),l&&Rn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Rn(c,n,6,s)}}const Zm=new WeakMap;function ah(n,e,t=!1){const i=t?Zm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=ah(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ot(n)&&i.set(n,null),null):(He(r)?r.forEach(l=>o[l]=null):Lt(o,r),ot(n)&&i.set(n,o),o)}function _a(n,e){return!n||!ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,_s(e))||rt(n,e))}function Kc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:v,inheritAttrs:x}=n,g=Vo(n);let p,C;try{if(t.shapeFlag&4){const A=s||i,w=A;p=Bn(c.call(w,A,u,d,h,f,v)),C=a}else{const A=e;p=Bn(A.length>1?A(d,{attrs:a,slots:o,emit:l}):A(d,null)),C=e.props?a:Qm(a)}}catch(A){Dr.length=0,ha(A,n,1),p=yt(Zt)}let S=p;if(C&&x!==!1){const A=Object.keys(C),{shapeFlag:w}=S;A.length&&w&7&&(r&&A.some(ec)&&(C=eg(C,r)),S=Hi(S,C,!1,!0))}return t.dirs&&(S=Hi(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Vr(S,t.transition),p=S,Vo(g),p}const Qm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ra(t))&&((e||(e={}))[t]=n[t]);return e},eg=(n,e)=>{const t={};for(const i in n)(!ec(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function tg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Jc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(lh(o,i,f)&&!_a(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Jc(i,o,c):!0:!!o;return!1}function Jc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(lh(e,n,r)&&!_a(t,r))return!0}return!1}function lh(n,e,t){const i=n[t],s=e[t];return t==="style"&&ot(i)&&ot(s)?!Kr(i,s):i!==s}function ng({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ch={},uh=()=>Object.create(ch),dh=n=>Object.getPrototypeOf(n)===ch;function ig(n,e,t,i=!1){const s={},r=uh();n.propsDefaults=Object.create(null),fh(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Ff(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function sg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=it(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(_a(n.emitsOptions,f))continue;const h=e[f];if(l)if(rt(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const v=Qt(f);s[v]=Bl(l,a,v,h,n,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{fh(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!rt(e,d)&&((u=_s(d))===d||!rt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=Bl(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!rt(e,d))&&(delete r[d],c=!0)}c&&ui(n.attrs,"set","")}function fh(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Tr(l))continue;const c=e[l];let u;s&&rt(s,u=Qt(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:_a(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=it(t),c=a||ut;for(let u=0;u<r.length;u++){const d=r[u];t[d]=Bl(s,l,d,c[d],n,!rt(c,d))}}return o}function Bl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Qr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===_s(t))&&(i=!0))}return i}const rg=new WeakMap;function hh(n,e,t=!1){const i=t?rg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=d=>{l=!0;const[f,h]=hh(d,e,!0);Lt(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ot(n)&&i.set(n,Gs),Gs;if(He(r))for(let u=0;u<r.length;u++){const d=Qt(r[u]);Zc(d)&&(o[d]=ut)}else if(r)for(const u in r){const d=Qt(u);if(Zc(d)){const f=r[u],h=o[d]=He(f)||qe(f)?{type:f}:Lt({},f),v=h.type;let x=!1,g=!0;if(He(v))for(let p=0;p<v.length;++p){const C=v[p],S=qe(C)&&C.name;if(S==="Boolean"){x=!0;break}else S==="String"&&(g=!1)}else x=qe(v)&&v.name==="Boolean";h[0]=x,h[1]=g,(x||rt(h,"default"))&&a.push(d)}}const c=[o,a];return ot(n)&&i.set(n,c),c}function Zc(n){return n[0]!=="$"&&!Tr(n)}const dc=n=>n==="_"||n==="_ctx"||n==="$stable",fc=n=>He(n)?n.map(Bn):[Bn(n)],og=(n,e,t)=>{if(e._n)return e;const i=ma((...s)=>fc(e(...s)),t);return i._c=!1,i},ph=(n,e,t)=>{const i=n._ctx;for(const s in n){if(dc(s))continue;const r=n[s];if(qe(r))e[s]=og(s,r,i);else if(r!=null){const o=fc(r);e[s]=()=>o}}},mh=(n,e)=>{const t=fc(e);n.slots.default=()=>t},gh=(n,e,t)=>{for(const i in e)(t||!dc(i))&&(n[i]=e[i])},ag=(n,e,t)=>{const i=n.slots=uh();if(n.vnode.shapeFlag&32){const s=e._;s?(gh(i,e,t),t&&xf(i,"_",s,!0)):ph(e,i)}else e&&mh(n,e)},lg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:gh(s,e,t):(r=!e.$stable,ph(e,s)),o=e}else e&&(mh(n,e),o={default:1});if(r)for(const a in s)!dc(a)&&o[a]==null&&delete s[a]},en=hg;function cg(n){return ug(n)}function ug(n,e){const t=ua();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Xn,insertStaticContent:v}=n,x=(L,N,Y,Z=null,ie=null,T=null,_=void 0,R=null,D=!!N.dynamicChildren)=>{if(L===N)return;L&&!as(L,N)&&(Z=X(L),se(L,ie,T,!0),L=null),N.patchFlag===-2&&(D=!1,N.dynamicChildren=null);const{type:O,ref:U,shapeFlag:W}=N;switch(O){case xa:g(L,N,Y,Z);break;case Zt:p(L,N,Y,Z);break;case Oo:L==null&&C(N,Y,Z,_);break;case Fe:k(L,N,Y,Z,ie,T,_,R,D);break;default:W&1?w(L,N,Y,Z,ie,T,_,R,D):W&6?F(L,N,Y,Z,ie,T,_,R,D):(W&64||W&128)&&O.process(L,N,Y,Z,ie,T,_,R,D,ye)}U!=null&&ie?Rr(U,L&&L.ref,T,N||L,!N):U==null&&L&&L.ref!=null&&Rr(L.ref,null,T,L,!0)},g=(L,N,Y,Z)=>{if(L==null)i(N.el=a(N.children),Y,Z);else{const ie=N.el=L.el;N.children!==L.children&&c(ie,N.children)}},p=(L,N,Y,Z)=>{L==null?i(N.el=l(N.children||""),Y,Z):N.el=L.el},C=(L,N,Y,Z)=>{[L.el,L.anchor]=v(L.children,N,Y,Z,L.el,L.anchor)},S=({el:L,anchor:N},Y,Z)=>{let ie;for(;L&&L!==N;)ie=f(L),i(L,Y,Z),L=ie;i(N,Y,Z)},A=({el:L,anchor:N})=>{let Y;for(;L&&L!==N;)Y=f(L),s(L),L=Y;s(N)},w=(L,N,Y,Z,ie,T,_,R,D)=>{if(N.type==="svg"?_="svg":N.type==="math"&&(_="mathml"),L==null)E(N,Y,Z,ie,T,_,R,D);else{const O=L.el&&L.el._isVueCE?L.el:null;try{O&&O._beginPatch(),y(L,N,ie,T,_,R,D)}finally{O&&O._endPatch()}}},E=(L,N,Y,Z,ie,T,_,R)=>{let D,O;const{props:U,shapeFlag:W,transition:z,dirs:re}=L;if(D=L.el=o(L.type,T,U&&U.is,U),W&8?u(D,L.children):W&16&&P(L.children,D,null,Z,ie,ka(L,T),_,R),re&&qi(L,null,Z,"created"),b(D,L,L.scopeId,_,Z),U){for(const he in U)he!=="value"&&!Tr(he)&&r(D,he,null,U[he],T,Z);"value"in U&&r(D,"value",null,U.value,T),(O=U.onVnodeBeforeMount)&&Nn(O,Z,L)}re&&qi(L,null,Z,"beforeMount");const _e=dg(ie,z);_e&&z.beforeEnter(D),i(D,N,Y),((O=U&&U.onVnodeMounted)||_e||re)&&en(()=>{O&&Nn(O,Z,L),_e&&z.enter(D),re&&qi(L,null,Z,"mounted")},ie)},b=(L,N,Y,Z,ie)=>{if(Y&&h(L,Y),Z)for(let T=0;T<Z.length;T++)h(L,Z[T]);if(ie){let T=ie.subTree;if(N===T||yh(T.type)&&(T.ssContent===N||T.ssFallback===N)){const _=ie.vnode;b(L,_,_.scopeId,_.slotScopeIds,ie.parent)}}},P=(L,N,Y,Z,ie,T,_,R,D=0)=>{for(let O=D;O<L.length;O++){const U=L[O]=R?ci(L[O]):Bn(L[O]);x(null,U,N,Y,Z,ie,T,_,R)}},y=(L,N,Y,Z,ie,T,_)=>{const R=N.el=L.el;let{patchFlag:D,dynamicChildren:O,dirs:U}=N;D|=L.patchFlag&16;const W=L.props||ut,z=N.props||ut;let re;if(Y&&Yi(Y,!1),(re=z.onVnodeBeforeUpdate)&&Nn(re,Y,N,L),U&&qi(N,L,Y,"beforeUpdate"),Y&&Yi(Y,!0),(W.innerHTML&&z.innerHTML==null||W.textContent&&z.textContent==null)&&u(R,""),O?M(L.dynamicChildren,O,R,Y,Z,ka(N,ie),T):_||$(L,N,R,null,Y,Z,ka(N,ie),T,!1),D>0){if(D&16)q(R,W,z,Y,ie);else if(D&2&&W.class!==z.class&&r(R,"class",null,z.class,ie),D&4&&r(R,"style",W.style,z.style,ie),D&8){const _e=N.dynamicProps;for(let he=0;he<_e.length;he++){const xe=_e[he],Re=W[xe],we=z[xe];(we!==Re||xe==="value")&&r(R,xe,Re,we,ie,Y)}}D&1&&L.children!==N.children&&u(R,N.children)}else!_&&O==null&&q(R,W,z,Y,ie);((re=z.onVnodeUpdated)||U)&&en(()=>{re&&Nn(re,Y,N,L),U&&qi(N,L,Y,"updated")},Z)},M=(L,N,Y,Z,ie,T,_)=>{for(let R=0;R<N.length;R++){const D=L[R],O=N[R],U=D.el&&(D.type===Fe||!as(D,O)||D.shapeFlag&198)?d(D.el):Y;x(D,O,U,null,Z,ie,T,_,!0)}},q=(L,N,Y,Z,ie)=>{if(N!==Y){if(N!==ut)for(const T in N)!Tr(T)&&!(T in Y)&&r(L,T,N[T],null,ie,Z);for(const T in Y){if(Tr(T))continue;const _=Y[T],R=N[T];_!==R&&T!=="value"&&r(L,T,R,_,ie,Z)}"value"in Y&&r(L,"value",N.value,Y.value,ie)}},k=(L,N,Y,Z,ie,T,_,R,D)=>{const O=N.el=L?L.el:a(""),U=N.anchor=L?L.anchor:a("");let{patchFlag:W,dynamicChildren:z,slotScopeIds:re}=N;re&&(R=R?R.concat(re):re),L==null?(i(O,Y,Z),i(U,Y,Z),P(N.children||[],Y,U,ie,T,_,R,D)):W>0&&W&64&&z&&L.dynamicChildren&&L.dynamicChildren.length===z.length?(M(L.dynamicChildren,z,Y,ie,T,_,R),(N.key!=null||ie&&N===ie.subTree)&&vh(L,N,!0)):$(L,N,Y,U,ie,T,_,R,D)},F=(L,N,Y,Z,ie,T,_,R,D)=>{N.slotScopeIds=R,L==null?N.shapeFlag&512?ie.ctx.activate(N,Y,Z,_,D):Q(N,Y,Z,ie,T,_,D):ne(L,N,D)},Q=(L,N,Y,Z,ie,T,_)=>{const R=L.component=yg(L,Z,ie);if(ga(L)&&(R.ctx.renderer=ye),Mg(R,!1,_),R.asyncDep){if(ie&&ie.registerDep(R,fe,_),!L.el){const D=R.subTree=yt(Zt);p(null,D,N,Y),L.placeholder=D.el}}else fe(R,L,N,Y,ie,T,_)},ne=(L,N,Y)=>{const Z=N.component=L.component;if(tg(L,N,Y))if(Z.asyncDep&&!Z.asyncResolved){pe(Z,N,Y);return}else Z.next=N,Z.update();else N.el=L.el,Z.vnode=N},fe=(L,N,Y,Z,ie,T,_)=>{const R=()=>{if(L.isMounted){let{next:W,bu:z,u:re,parent:_e,vnode:he}=L;{const De=_h(L);if(De){W&&(W.el=he.el,pe(L,W,_)),De.asyncDep.then(()=>{en(()=>{L.isUnmounted||O()},ie)});return}}let xe=W,Re;Yi(L,!1),W?(W.el=he.el,pe(L,W,_)):W=he,z&&No(z),(Re=W.props&&W.props.onVnodeBeforeUpdate)&&Nn(Re,_e,W,he),Yi(L,!0);const we=Kc(L),Ce=L.subTree;L.subTree=we,x(Ce,we,d(Ce.el),X(Ce),L,ie,T),W.el=we.el,xe===null&&ng(L,we.el),re&&en(re,ie),(Re=W.props&&W.props.onVnodeUpdated)&&en(()=>Nn(Re,_e,W,he),ie)}else{let W;const{el:z,props:re}=N,{bm:_e,m:he,parent:xe,root:Re,type:we}=L,Ce=Pr(N);Yi(L,!1),_e&&No(_e),!Ce&&(W=re&&re.onVnodeBeforeMount)&&Nn(W,xe,N),Yi(L,!0);{Re.ce&&Re.ce._hasShadowRoot()&&Re.ce._injectChildStyle(we,L.parent?L.parent.type:void 0);const De=L.subTree=Kc(L);x(null,De,Y,Z,L,ie,T),N.el=De.el}if(he&&en(he,ie),!Ce&&(W=re&&re.onVnodeMounted)){const De=N;en(()=>Nn(W,xe,De),ie)}(N.shapeFlag&256||xe&&Pr(xe.vnode)&&xe.vnode.shapeFlag&256)&&L.a&&en(L.a,ie),L.isMounted=!0,N=Y=Z=null}};L.scope.on();const D=L.effect=new bf(R);L.scope.off();const O=L.update=D.run.bind(D),U=L.job=D.runIfDirty.bind(D);U.i=L,U.id=L.uid,D.scheduler=()=>uc(U),Yi(L,!0),O()},pe=(L,N,Y)=>{N.component=L;const Z=L.vnode.props;L.vnode=N,L.next=null,sg(L,N.props,Z,Y),lg(L,N.children,Y),gi(),Hc(L),vi()},$=(L,N,Y,Z,ie,T,_,R,D=!1)=>{const O=L&&L.children,U=L?L.shapeFlag:0,W=N.children,{patchFlag:z,shapeFlag:re}=N;if(z>0){if(z&128){ce(O,W,Y,Z,ie,T,_,R,D);return}else if(z&256){ae(O,W,Y,Z,ie,T,_,R,D);return}}re&8?(U&16&&le(O,ie,T),W!==O&&u(Y,W)):U&16?re&16?ce(O,W,Y,Z,ie,T,_,R,D):le(O,ie,T,!0):(U&8&&u(Y,""),re&16&&P(W,Y,Z,ie,T,_,R,D))},ae=(L,N,Y,Z,ie,T,_,R,D)=>{L=L||Gs,N=N||Gs;const O=L.length,U=N.length,W=Math.min(O,U);let z;for(z=0;z<W;z++){const re=N[z]=D?ci(N[z]):Bn(N[z]);x(L[z],re,Y,null,ie,T,_,R,D)}O>U?le(L,ie,T,!0,!1,W):P(N,Y,Z,ie,T,_,R,D,W)},ce=(L,N,Y,Z,ie,T,_,R,D)=>{let O=0;const U=N.length;let W=L.length-1,z=U-1;for(;O<=W&&O<=z;){const re=L[O],_e=N[O]=D?ci(N[O]):Bn(N[O]);if(as(re,_e))x(re,_e,Y,null,ie,T,_,R,D);else break;O++}for(;O<=W&&O<=z;){const re=L[W],_e=N[z]=D?ci(N[z]):Bn(N[z]);if(as(re,_e))x(re,_e,Y,null,ie,T,_,R,D);else break;W--,z--}if(O>W){if(O<=z){const re=z+1,_e=re<U?N[re].el:Z;for(;O<=z;)x(null,N[O]=D?ci(N[O]):Bn(N[O]),Y,_e,ie,T,_,R,D),O++}}else if(O>z)for(;O<=W;)se(L[O],ie,T,!0),O++;else{const re=O,_e=O,he=new Map;for(O=_e;O<=z;O++){const Ie=N[O]=D?ci(N[O]):Bn(N[O]);Ie.key!=null&&he.set(Ie.key,O)}let xe,Re=0;const we=z-_e+1;let Ce=!1,De=0;const Be=new Array(we);for(O=0;O<we;O++)Be[O]=0;for(O=re;O<=W;O++){const Ie=L[O];if(Re>=we){se(Ie,ie,T,!0);continue}let Ve;if(Ie.key!=null)Ve=he.get(Ie.key);else for(xe=_e;xe<=z;xe++)if(Be[xe-_e]===0&&as(Ie,N[xe])){Ve=xe;break}Ve===void 0?se(Ie,ie,T,!0):(Be[Ve-_e]=O+1,Ve>=De?De=Ve:Ce=!0,x(Ie,N[Ve],Y,null,ie,T,_,R,D),Re++)}const Xe=Ce?fg(Be):Gs;for(xe=Xe.length-1,O=we-1;O>=0;O--){const Ie=_e+O,Ve=N[Ie],Pe=N[Ie+1],B=Ie+1<U?Pe.el||xh(Pe):Z;Be[O]===0?x(null,Ve,Y,B,ie,T,_,R,D):Ce&&(xe<0||O!==Xe[xe]?G(Ve,Y,B,2):xe--)}}},G=(L,N,Y,Z,ie=null)=>{const{el:T,type:_,transition:R,children:D,shapeFlag:O}=L;if(O&6){G(L.component.subTree,N,Y,Z);return}if(O&128){L.suspense.move(N,Y,Z);return}if(O&64){_.move(L,N,Y,ye);return}if(_===Fe){i(T,N,Y);for(let W=0;W<D.length;W++)G(D[W],N,Y,Z);i(L.anchor,N,Y);return}if(_===Oo){S(L,N,Y);return}if(Z!==2&&O&1&&R)if(Z===0)R.beforeEnter(T),i(T,N,Y),en(()=>R.enter(T),ie);else{const{leave:W,delayLeave:z,afterLeave:re}=R,_e=()=>{L.ctx.isUnmounted?s(T):i(T,N,Y)},he=()=>{T._isLeaving&&T[On](!0),W(T,()=>{_e(),re&&re()})};z?z(T,_e,he):he()}else i(T,N,Y)},se=(L,N,Y,Z=!1,ie=!1)=>{const{type:T,props:_,ref:R,children:D,dynamicChildren:O,shapeFlag:U,patchFlag:W,dirs:z,cacheIndex:re}=L;if(W===-2&&(ie=!1),R!=null&&(gi(),Rr(R,null,Y,L,!0),vi()),re!=null&&(N.renderCache[re]=void 0),U&256){N.ctx.deactivate(L);return}const _e=U&1&&z,he=!Pr(L);let xe;if(he&&(xe=_&&_.onVnodeBeforeUnmount)&&Nn(xe,N,L),U&6)ge(L.component,Y,Z);else{if(U&128){L.suspense.unmount(Y,Z);return}_e&&qi(L,null,N,"beforeUnmount"),U&64?L.type.remove(L,N,Y,ye,Z):O&&!O.hasOnce&&(T!==Fe||W>0&&W&64)?le(O,N,Y,!1,!0):(T===Fe&&W&384||!ie&&U&16)&&le(D,N,Y),Z&&Se(L)}(he&&(xe=_&&_.onVnodeUnmounted)||_e)&&en(()=>{xe&&Nn(xe,N,L),_e&&qi(L,null,N,"unmounted")},Y)},Se=L=>{const{type:N,el:Y,anchor:Z,transition:ie}=L;if(N===Fe){te(Y,Z);return}if(N===Oo){A(L);return}const T=()=>{s(Y),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(L.shapeFlag&1&&ie&&!ie.persisted){const{leave:_,delayLeave:R}=ie,D=()=>_(Y,T);R?R(L.el,T,D):D()}else T()},te=(L,N)=>{let Y;for(;L!==N;)Y=f(L),s(L),L=Y;s(N)},ge=(L,N,Y)=>{const{bum:Z,scope:ie,job:T,subTree:_,um:R,m:D,a:O}=L;Qc(D),Qc(O),Z&&No(Z),ie.stop(),T&&(T.flags|=8,se(_,L,N,Y)),R&&en(R,N),en(()=>{L.isUnmounted=!0},N)},le=(L,N,Y,Z=!1,ie=!1,T=0)=>{for(let _=T;_<L.length;_++)se(L[_],N,Y,Z,ie)},X=L=>{if(L.shapeFlag&6)return X(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const N=f(L.anchor||L.el),Y=N&&N[Tm];return Y?f(Y):N};let ve=!1;const me=(L,N,Y)=>{let Z;L==null?N._vnode&&(se(N._vnode,null,null,!0),Z=N._vnode.component):x(N._vnode||null,L,N,null,null,null,Y),N._vnode=L,ve||(ve=!0,Hc(Z),Vf(),ve=!1)},ye={p:x,um:se,m:G,r:Se,mt:Q,mc:P,pc:$,pbc:M,n:X,o:n};return{render:me,hydrate:void 0,createApp:jm(me)}}function ka({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Yi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function dg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function vh(n,e,t=!1){const i=n.children,s=e.children;if(He(i)&&He(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ci(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&vh(o,a)),a.type===xa&&(a.patchFlag===-1&&(a=s[r]=ci(a)),a.el=o.el),a.type===Zt&&!a.el&&(a.el=o.el)}}function fg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function _h(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_h(e)}function Qc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function xh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?xh(e.subTree):null}const yh=n=>n.__isSuspense;function hg(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):Mm(n)}const Fe=Symbol.for("v-fgt"),xa=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),Oo=Symbol.for("v-stc"),Dr=[];let fn=null;function K(n=!1){Dr.push(fn=n?null:[])}function pg(){Dr.pop(),fn=Dr[Dr.length-1]||null}let Gr=1;function $o(n,e=!1){Gr+=n,n<0&&fn&&e&&(fn.hasOnce=!0)}function Mh(n){return n.dynamicChildren=Gr>0?fn||Gs:null,pg(),Gr>0&&fn&&fn.push(n),n}function J(n,e,t,i,s,r){return Mh(m(n,e,t,i,s,r,!0))}function Sh(n,e,t,i,s){return Mh(yt(n,e,t,i,s,!0))}function Xo(n){return n?n.__v_isVNode===!0:!1}function as(n,e){return n.type===e.type&&n.key===e.key}const bh=({key:n})=>n??null,Fo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?wt(n)||Xt(n)||qe(n)?{i:dn,r:n,k:e,f:!!t}:n:null);function m(n,e=null,t=null,i=0,s=null,r=n===Fe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&bh(e),ref:e&&Fo(e),scopeId:Wf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dn};return a?(hc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=wt(t)?8:16),Gr>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const yt=mg;function mg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===zm)&&(n=Zt),Xo(n)){const a=Hi(n,e,!0);return t&&hc(a,t),Gr>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(n)]=a:fn.push(a)),a.patchFlag=-2,a}if(wg(n)&&(n=n.__vccOpts),e){e=gg(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=We(a)),ot(l)&&(cc(l)&&!He(l)&&(l=Lt({},l)),e.style=An(l))}const o=wt(n)?1:yh(n)?128:qf(n)?64:ot(n)?4:qe(n)?2:0;return m(n,e,t,i,s,o,r,!0)}function gg(n){return n?cc(n)||dh(n)?Lt({},n):n:null}function Hi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?vg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&bh(c),ref:e&&e.ref?t&&r?He(r)?r.concat(Fo(e)):[r,Fo(e)]:Fo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Fe?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hi(n.ssContent),ssFallback:n.ssFallback&&Hi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Vr(u,l.clone(u)),u}function nn(n=" ",e=0){return yt(xa,null,n,e)}function tr(n,e){const t=yt(Oo,null,n);return t.staticCount=e,t}function ze(n="",e=!1){return e?(K(),Sh(Zt,null,n)):yt(Zt,null,n)}function Bn(n){return n==null||typeof n=="boolean"?yt(Zt):He(n)?yt(Fe,null,n.slice()):Xo(n)?ci(n):yt(xa,null,String(n))}function ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Hi(n)}function hc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),hc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!dh(e)?e._ctx=dn:s===3&&dn&&(dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:dn},t=32):(e=String(e),i&64?(t=16,e=[nn(e)]):t=8);n.children=e,n.shapeFlag|=t}function vg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=We([e.class,i.class]));else if(s==="style")e.style=An([e.style,i.style]);else if(ra(s)){const r=e[s],o=i[s];o&&r!==o&&!(He(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Nn(n,e,t,i=null){Rn(n,e,7,[t,i])}const _g=oh();let xg=0;function yg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||_g,r={uid:xg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $p(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hh(i,s),emitsOptions:ah(i,s),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Jm.bind(null,r),n.ce&&n.ce(r),r}let $t=null;const Eh=()=>$t||dn;let qo,zl;{const n=ua(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};qo=e("__VUE_INSTANCE_SETTERS__",t=>$t=t),zl=e("__VUE_SSR_SETTERS__",t=>Wr=t)}const Qr=n=>{const e=$t;return qo(n),n.scope.on(),()=>{n.scope.off(),qo(e)}},eu=()=>{$t&&$t.scope.off(),qo(null)};function Th(n){return n.vnode.shapeFlag&4}let Wr=!1;function Mg(n,e=!1,t=!1){e&&zl(e);const{props:i,children:s}=n.vnode,r=Th(n);ig(n,i,r,e),ag(n,s,t||e);const o=r?Sg(n,e):void 0;return e&&zl(!1),o}function Sg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Vm);const{setup:i}=t;if(i){gi();const s=n.setupContext=i.length>1?Eg(n):null,r=Qr(n),o=Jr(i,n,0,[n.props,s]),a=gf(o);if(vi(),r(),(a||n.sp)&&!Pr(n)&&eh(n),a){if(o.then(eu,eu),e)return o.then(l=>{tu(n,l)}).catch(l=>{ha(l,n,0)});n.asyncDep=o}else tu(n,o)}else wh(n)}function tu(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ot(e)&&(n.setupState=Bf(e)),wh(n)}function wh(n,e,t){const i=n.type;n.render||(n.render=i.render||Xn);{const s=Qr(n);gi();try{Gm(n)}finally{vi(),s()}}}const bg={get(n,e){return Gt(n,"get",""),n[e]}};function Eg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,bg),slots:n.slots,emit:n.emit,expose:e}}function ya(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Bf(dm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Lr)return Lr[t](n)},has(e,t){return t in e||t in Lr}})):n.proxy}function Tg(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function wg(n){return qe(n)&&"__vccOpts"in n}const tt=(n,e)=>gm(n,e,Wr);function pc(n,e,t){try{$o(-1);const i=arguments.length;return i===2?ot(e)&&!He(e)?Xo(e)?yt(n,null,[e]):yt(n,e):yt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Xo(t)&&(t=[t]),yt(n,e,t))}finally{$o(1)}}const Ag="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hl;const nu=typeof window<"u"&&window.trustedTypes;if(nu)try{Hl=nu.createPolicy("vue",{createHTML:n=>n})}catch{}const Ah=Hl?n=>Hl.createHTML(n):n=>n,Cg="http://www.w3.org/2000/svg",Rg="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,iu=li&&li.createElement("template"),Pg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?li.createElementNS(Cg,n):e==="mathml"?li.createElementNS(Rg,n):t?li.createElement(n,{is:t}):li.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>li.createTextNode(n),createComment:n=>li.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>li.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{iu.innerHTML=Ah(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=iu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ei="transition",mr="animation",$r=Symbol("_vtc"),Ch={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lg=Lt({},Yf,Ch),Dg=n=>(n.displayName="Transition",n.props=Lg,n),mc=Dg((n,{slots:e})=>pc(Cm,Ig(n),e)),ji=(n,e=[])=>{He(n)?n.forEach(t=>t(...e)):n&&n(...e)},su=n=>n?He(n)?n.some(e=>e.length>1):n.length>1:!1;function Ig(n){const e={};for(const k in n)k in Ch||(e[k]=n[k]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,v=Ng(s),x=v&&v[0],g=v&&v[1],{onBeforeEnter:p,onEnter:C,onEnterCancelled:S,onLeave:A,onLeaveCancelled:w,onBeforeAppear:E=p,onAppear:b=C,onAppearCancelled:P=S}=e,y=(k,F,Q,ne)=>{k._enterCancelled=ne,Ki(k,F?u:a),Ki(k,F?c:o),Q&&Q()},M=(k,F)=>{k._isLeaving=!1,Ki(k,d),Ki(k,h),Ki(k,f),F&&F()},q=k=>(F,Q)=>{const ne=k?b:C,fe=()=>y(F,k,Q);ji(ne,[F,fe]),ru(()=>{Ki(F,k?l:r),Qn(F,k?u:a),su(ne)||ou(F,i,x,fe)})};return Lt(e,{onBeforeEnter(k){ji(p,[k]),Qn(k,r),Qn(k,o)},onBeforeAppear(k){ji(E,[k]),Qn(k,l),Qn(k,c)},onEnter:q(!1),onAppear:q(!0),onLeave(k,F){k._isLeaving=!0;const Q=()=>M(k,F);Qn(k,d),k._enterCancelled?(Qn(k,f),cu(k)):(cu(k),Qn(k,f)),ru(()=>{k._isLeaving&&(Ki(k,d),Qn(k,h),su(A)||ou(k,i,g,Q))}),ji(A,[k,Q])},onEnterCancelled(k){y(k,!1,void 0,!0),ji(S,[k])},onAppearCancelled(k){y(k,!0,void 0,!0),ji(P,[k])},onLeaveCancelled(k){M(k),ji(w,[k])}})}function Ng(n){if(n==null)return null;if(ot(n))return[Ba(n.enter),Ba(n.leave)];{const e=Ba(n);return[e,e]}}function Ba(n){return Op(n)}function Qn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[$r]||(n[$r]=new Set)).add(e)}function Ki(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[$r];t&&(t.delete(e),t.size||(n[$r]=void 0))}function ru(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Ug=0;function ou(n,e,t,i){const s=n._endId=++Ug,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Og(n,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{n.removeEventListener(c,f),r()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function Og(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),s=i(`${Ei}Delay`),r=i(`${Ei}Duration`),o=au(s,r),a=i(`${mr}Delay`),l=i(`${mr}Duration`),c=au(a,l);let u=null,d=0,f=0;e===Ei?o>0&&(u=Ei,d=o,f=r.length):e===mr?c>0&&(u=mr,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?Ei:mr:null,f=u?u===Ei?r.length:l.length:0);const h=u===Ei&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ei}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function au(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>lu(t)+lu(n[i])))}function lu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function cu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Fg(n,e,t){const i=n[$r];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const uu=Symbol("_vod"),kg=Symbol("_vsh"),Bg=Symbol(""),zg=/(?:^|;)\s*display\s*:/;function Hg(n,e,t){const i=n.style,s=wt(t);let r=!1;if(t&&!s){if(e)if(wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ko(i,a,"")}else for(const o in e)t[o]==null&&ko(i,o,"");for(const o in t)o==="display"&&(r=!0),ko(i,o,t[o])}else if(s){if(e!==t){const o=i[Bg];o&&(t+=";"+o),i.cssText=t,r=zg.test(t)}}else e&&n.removeAttribute("style");uu in n&&(n[uu]=r?i.display:"",n[kg]&&(i.display="none"))}const du=/\s*!important$/;function ko(n,e,t){if(He(t))t.forEach(i=>ko(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Vg(n,e);du.test(t)?n.setProperty(_s(i),t.replace(du,""),"important"):n[i]=t}}const fu=["Webkit","Moz","ms"],za={};function Vg(n,e){const t=za[e];if(t)return t;let i=Qt(e);if(i!=="filter"&&i in n)return za[e]=i;i=la(i);for(let s=0;s<fu.length;s++){const r=fu[s]+i;if(r in n)return za[e]=r}return e}const hu="http://www.w3.org/1999/xlink";function pu(n,e,t,i,s,r=Vp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(hu,e.slice(6,e.length)):n.setAttributeNS(hu,e,t):t==null||r&&!yf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":jn(t)?String(t):t)}function mu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ah(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=yf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function ls(n,e,t,i){n.addEventListener(e,t,i)}function Gg(n,e,t,i){n.removeEventListener(e,t,i)}const gu=Symbol("_vei");function Wg(n,e,t,i,s=null){const r=n[gu]||(n[gu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=$g(e);if(i){const c=r[e]=Yg(i,s);ls(n,a,c,l)}else o&&(Gg(n,a,o,l),r[e]=void 0)}}const vu=/(?:Once|Passive|Capture)$/;function $g(n){let e;if(vu.test(n)){e={};let i;for(;i=n.match(vu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_s(n.slice(2)),e]}let Ha=0;const Xg=Promise.resolve(),qg=()=>Ha||(Xg.then(()=>Ha=0),Ha=Date.now());function Yg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Rn(jg(i,t.value),e,5,[i])};return t.value=n,t.attached=qg(),t}function jg(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const _u=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Kg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Fg(n,i,o):e==="style"?Hg(n,t,i):ra(e)?ec(e)||Wg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jg(n,e,i,o))?(mu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pu(n,e,i,o,r,e!=="value")):n._isVueCE&&(Zg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!wt(i)))?mu(n,Qt(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),pu(n,e,i,o))};function Jg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&_u(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _u(e)&&wt(t)?!1:e in n}function Zg(n,e){const t=n._def.props;if(!t)return!1;const i=Qt(e);return Array.isArray(t)?t.some(s=>Qt(s)===i):Object.keys(t).some(s=>Qt(s)===i)}const Yo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return He(e)?t=>No(e,t):e};function Qg(n){n.target.composing=!0}function xu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ys=Symbol("_assign");function yu(n,e,t){return e&&(n=n.trim()),t&&(n=ca(n)),n}const js={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ys]=Yo(s);const r=i||s.props&&s.props.type==="number";ls(n,e?"change":"input",o=>{o.target.composing||n[Ys](yu(n.value,t,r))}),(t||r)&&ls(n,"change",()=>{n.value=yu(n.value,t,r)}),e||(ls(n,"compositionstart",Qg),ls(n,"compositionend",xu),ls(n,"change",xu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ys]=Yo(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?ca(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},Hs={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=oa(e);ls(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?ca(jo(o)):jo(o));n[Ys](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,pa(()=>{n._assigning=!1})}),n[Ys]=Yo(i)},mounted(n,{value:e}){Mu(n,e)},beforeUpdate(n,e,t){n[Ys]=Yo(t)},updated(n,{value:e}){n._assigning||Mu(n,e)}};function Mu(n,e){const t=n.multiple,i=He(e);if(!(t&&!i&&!oa(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=jo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Wp(e,a)>-1}else o.selected=e.has(a);else if(Kr(jo(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function jo(n){return"_value"in n?n._value:n.value}const ev=["ctrl","shift","alt","meta"],tv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>ev.some(t=>n[`${t}Key`]&&!e.includes(t))},Ct=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=tv[e[o]];if(a&&a(s,e))return}return n(s,...r)})},nv=Lt({patchProp:Kg},Pg);let Su;function iv(){return Su||(Su=cg(nv))}const sv=(...n)=>{const e=iv().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=ov(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,rv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ov(n){return wt(n)?document.querySelector(n):n}const an=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},av={};function lv(n,e){const t=ih("router-view");return K(),Sh(t)}const cv=an(av,[["render",lv]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Bs=typeof document<"u";function Rh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function uv(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Rh(n.default)}const st=Object.assign;function Va(n,e){const t={};for(const i in e){const s=e[i];t[i]=Pn(s)?s.map(n):n(s)}return t}const Ir=()=>{},Pn=Array.isArray;function bu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Ph=/#/g,dv=/&/g,fv=/\//g,hv=/=/g,pv=/\?/g,Lh=/\+/g,mv=/%5B/g,gv=/%5D/g,Dh=/%5E/g,vv=/%60/g,Ih=/%7B/g,_v=/%7C/g,Nh=/%7D/g,xv=/%20/g;function gc(n){return n==null?"":encodeURI(""+n).replace(_v,"|").replace(mv,"[").replace(gv,"]")}function yv(n){return gc(n).replace(Ih,"{").replace(Nh,"}").replace(Dh,"^")}function Vl(n){return gc(n).replace(Lh,"%2B").replace(xv,"+").replace(Ph,"%23").replace(dv,"%26").replace(vv,"`").replace(Ih,"{").replace(Nh,"}").replace(Dh,"^")}function Mv(n){return Vl(n).replace(hv,"%3D")}function Sv(n){return gc(n).replace(Ph,"%23").replace(pv,"%3F")}function bv(n){return Sv(n).replace(fv,"%2F")}function Xr(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Ev=/\/$/,Tv=n=>n.replace(Ev,"");function Ga(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=n(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Rv(i??e,t),{fullPath:i+r+o,path:i,query:s,hash:Xr(o)}}function wv(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Eu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Av(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&nr(e.matched[i],t.matched[s])&&Uh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function nr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Uh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!Cv(n[t],e[t]))return!1;return!0}function Cv(n,e){return Pn(n)?Tu(n,e):Pn(e)?Tu(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function Tu(n,e){return Pn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Rv(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Gl=function(n){return n.pop="pop",n.push="push",n}({}),Wa=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function Pv(n){if(!n)if(Bs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Tv(n)}const Lv=/^[^#]+#/;function Dv(n,e){return n.replace(Lv,"#")+e}function Iv(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Ma=()=>({left:window.scrollX,top:window.scrollY});function Nv(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Iv(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function wu(n,e){return(history.state?history.state.position-e:-1)+n}const Wl=new Map;function Uv(n,e){Wl.set(n,e)}function Ov(n){const e=Wl.get(n);return Wl.delete(n),e}function Fv(n){return typeof n=="string"||n&&typeof n=="object"}function Oh(n){return typeof n=="string"||typeof n=="symbol"}let St=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const Fh=Symbol("");St.MATCHER_NOT_FOUND+"",St.NAVIGATION_GUARD_REDIRECT+"",St.NAVIGATION_ABORTED+"",St.NAVIGATION_CANCELLED+"",St.NAVIGATION_DUPLICATED+"";function ir(n,e){return st(new Error,{type:n,[Fh]:!0},e)}function ei(n,e){return n instanceof Error&&Fh in n&&(e==null||!!(n.type&e))}const kv=["params","query","hash"];function Bv(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of kv)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function zv(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const s=t[i].replace(Lh," "),r=s.indexOf("="),o=Xr(r<0?s:s.slice(0,r)),a=r<0?null:Xr(s.slice(r+1));if(o in e){let l=e[o];Pn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function Au(n){let e="";for(let t in n){const i=n[t];if(t=Mv(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Pn(i)?i.map(s=>s&&Vl(s)):[i&&Vl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Hv(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Pn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Vv=Symbol(""),Cu=Symbol(""),Sa=Symbol(""),kh=Symbol(""),$l=Symbol("");function gr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ui(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(ir(St.NAVIGATION_ABORTED,{from:t,to:e})):f instanceof Error?l(f):Fv(f)?l(ir(St.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function $a(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Rh(l)){const c=(l.__vccOpts||l)[e];c&&r.push(Ui(c,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=uv(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&Ui(f,t,i,o,a,s)()}))}}return r}function Gv(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>nr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>nr(c,l))||s.push(l))}return[t,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Wv=()=>location.protocol+"//"+location.host;function Bh(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),Eu(a,"")}return Eu(t,n)+i+s}function $v(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=Bh(n,location),v=t.value,x=e.value;let g=0;if(f){if(t.value=h,e.value=f,o&&o===v){o=null;return}g=x?f.position-x.position:0}else i(h);s.forEach(p=>{p(t.value,v,{delta:g,type:Gl.pop,direction:g?g>0?Wa.forward:Wa.back:Wa.unknown})})};function l(){o=t.value}function c(f){s.push(f);const h=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return r.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(st({},f.state,{scroll:Ma()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function Ru(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Ma():null}}function Xv(n){const{history:e,location:t}=window,i={value:Bh(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:Wv()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),t[u?"replace":"assign"](f)}}function o(l,c){r(l,st({},e.state,Ru(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=st({},s.value,e.state,{forward:l,scroll:Ma()});r(u.current,u,!0),r(l,st({},Ru(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function qv(n){n=Pv(n);const e=Xv(n),t=$v(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=st({location:"",base:n,go:i,createHref:Dv.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let ds=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Rt=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Rt||{});const Yv={type:ds.Static,value:""},jv=/[a-zA-Z0-9_]/;function Kv(n){if(!n)return[[]];if(n==="/")return[[Yv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=Rt.Static,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(t===Rt.Static?r.push({type:ds.Static,value:c}):t===Rt.Param||t===Rt.ParamRegExp||t===Rt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:ds.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==Rt.ParamRegExp){i=t,t=Rt.EscapeNext;continue}switch(t){case Rt.Static:l==="/"?(c&&d(),o()):l===":"?(d(),t=Rt.Param):f();break;case Rt.EscapeNext:f(),t=i;break;case Rt.Param:l==="("?t=Rt.ParamRegExp:jv.test(l)?f():(d(),t=Rt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Rt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Rt.ParamRegExpEnd:u+=l;break;case Rt.ParamRegExpEnd:d(),t=Rt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===Rt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}const Pu="[^/]+?",Jv={sensitive:!1,strict:!1,start:!0,end:!0};var Kt=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Kt||{});const Zv=/[.+*?^${}()[\]/\\]/g;function Qv(n,e){const t=st({},Jv,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[Kt.Root];t.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=Kt.Segment+(t.sensitive?Kt.BonusCaseSensitive:0);if(f.type===ds.Static)d||(s+="/"),s+=f.value.replace(Zv,"\\$&"),h+=Kt.Static;else if(f.type===ds.Param){const{value:v,repeatable:x,optional:g,regexp:p}=f;r.push({name:v,repeatable:x,optional:g});const C=p||Pu;if(C!==Pu){h+=Kt.BonusCustomRegExp;try{`${C}`}catch(A){throw new Error(`Invalid custom RegExp for param "${v}" (${C}): `+A.message)}}let S=x?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(S=g&&c.length<2?`(?:/${S})`:"/"+S),g&&(S+="?"),s+=S,h+=Kt.Dynamic,g&&(h+=Kt.BonusOptional),x&&(h+=Kt.BonusRepeatable),C===".*"&&(h+=Kt.BonusWildcard)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=Kt.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",v=r[f-1];d[v.name]=h&&v.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===ds.Static)u+=h.value;else if(h.type===ds.Param){const{value:v,repeatable:x,optional:g}=h,p=v in c?c[v]:"";if(Pn(p)&&!x)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const C=Pn(p)?p.join("/"):p;if(!C)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=C}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function e_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Kt.Static+Kt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Kt.Static+Kt.Segment?1:-1:0}function zh(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=e_(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Lu(i))return 1;if(Lu(s))return-1}return s.length-i.length}function Lu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const t_={strict:!1,end:!0,sensitive:!1};function n_(n,e,t){const i=Qv(Kv(n.path),t),s=st(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function i_(n,e){const t=[],i=new Map;e=bu(t_,e);function s(d){return i.get(d)}function r(d,f,h){const v=!h,x=Iu(d);x.aliasOf=h&&h.record;const g=bu(e,d),p=[x];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const w of A)p.push(Iu(st({},x,{components:h?h.record.components:x.components,path:w,aliasOf:h?h.record:x})))}let C,S;for(const A of p){const{path:w}=A;if(f&&w[0]!=="/"){const E=f.record.path,b=E[E.length-1]==="/"?"":"/";A.path=f.record.path+(w&&b+w)}if(C=n_(A,f,g),h?h.alias.push(C):(S=S||C,S!==C&&S.alias.push(C),v&&d.name&&!Nu(C)&&o(d.name)),Hh(C)&&l(C),x.children){const E=x.children;for(let b=0;b<E.length;b++)r(E[b],C,h&&h.children[b])}h=h||C}return S?()=>{o(S)}:Ir}function o(d){if(Oh(d)){const f=i.get(d);f&&(i.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function l(d){const f=o_(d,t);t.splice(f,0,d),d.record.name&&!Nu(d)&&i.set(d.record.name,d)}function c(d,f){let h,v={},x,g;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw ir(St.MATCHER_NOT_FOUND,{location:d});g=h.record.name,v=st(Du(f.params,h.keys.filter(S=>!S.optional).concat(h.parent?h.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),d.params&&Du(d.params,h.keys.map(S=>S.name))),x=h.stringify(v)}else if(d.path!=null)x=d.path,h=t.find(S=>S.re.test(x)),h&&(v=h.parse(x),g=h.record.name);else{if(h=f.name?i.get(f.name):t.find(S=>S.re.test(f.path)),!h)throw ir(St.MATCHER_NOT_FOUND,{location:d,currentLocation:f});g=h.record.name,v=st({},f.params,d.params),x=h.stringify(v)}const p=[];let C=h;for(;C;)p.unshift(C.record),C=C.parent;return{name:g,path:x,params:v,matched:p,meta:r_(p)}}n.forEach(d=>r(d));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Du(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Iu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:s_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function s_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Nu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function r_(n){return n.reduce((e,t)=>st(e,t.meta),{})}function o_(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;zh(n,e[r])<0?i=r:t=r+1}const s=a_(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function a_(n){let e=n;for(;e=e.parent;)if(Hh(e)&&zh(n,e)===0)return e}function Hh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Uu(n){const e=qn(Sa),t=qn(kh),i=tt(()=>{const l=$s(n.to);return e.resolve(l)}),s=tt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(nr.bind(null,u));if(f>-1)return f;const h=Ou(l[c-2]);return c>1&&Ou(u)===h&&d[d.length-1].path!==h?d.findIndex(nr.bind(null,l[c-2])):f}),r=tt(()=>s.value>-1&&f_(t.params,i.value.params)),o=tt(()=>s.value>-1&&s.value===t.matched.length-1&&Uh(t.params,i.value.params));function a(l={}){if(d_(l)){const c=e[$s(n.replace)?"replace":"push"]($s(n.to)).catch(Ir);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:tt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function l_(n){return n.length===1?n[0]:n}const c_=Qf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Uu,setup(n,{slots:e}){const t=fa(Uu(n)),{options:i}=qn(Sa),s=tt(()=>({[Fu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Fu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&l_(e.default(t));return n.custom?r:pc("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),u_=c_;function d_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function f_(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Pn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function Ou(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Fu=(n,e,t)=>n??e??t,h_=Qf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=qn($l),s=tt(()=>n.route||i.value),r=qn(Cu,0),o=tt(()=>{let c=$s(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=tt(()=>s.value.matched[o.value]);Uo(Cu,tt(()=>o.value+1)),Uo(Vv,a),Uo($l,s);const l=Me();return Cr(()=>[l.value,a.value,n.name],([c,u,d],[f,h,v])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!nr(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return ku(t.default,{Component:f,route:c});const h=d.props[u],v=h?h===!0?c.params:typeof h=="function"?h(c):h:null,g=pc(f,st({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return ku(t.default,{Component:g,route:c})||g}}});function ku(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const p_=h_;function m_(n){const e=i_(n.routes,n),t=n.parseQuery||zv,i=n.stringifyQuery||Au,s=n.history,r=gr(),o=gr(),a=gr(),l=fm(Ti);let c=Ti;Bs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Va.bind(null,X=>""+X),d=Va.bind(null,bv),f=Va.bind(null,Xr);function h(X,ve){let me,ye;return Oh(X)?(me=e.getRecordMatcher(X),ye=ve):ye=X,e.addRoute(ye,me)}function v(X){const ve=e.getRecordMatcher(X);ve&&e.removeRoute(ve)}function x(){return e.getRoutes().map(X=>X.record)}function g(X){return!!e.getRecordMatcher(X)}function p(X,ve){if(ve=st({},ve||l.value),typeof X=="string"){const Y=Ga(t,X,ve.path),Z=e.resolve({path:Y.path},ve),ie=s.createHref(Y.fullPath);return st(Y,Z,{params:f(Z.params),hash:Xr(Y.hash),redirectedFrom:void 0,href:ie})}let me;if(X.path!=null)me=st({},X,{path:Ga(t,X.path,ve.path).path});else{const Y=st({},X.params);for(const Z in Y)Y[Z]==null&&delete Y[Z];me=st({},X,{params:d(Y)}),ve.params=d(ve.params)}const ye=e.resolve(me,ve),j=X.hash||"";ye.params=u(f(ye.params));const L=wv(i,st({},X,{hash:yv(j),path:ye.path})),N=s.createHref(L);return st({fullPath:L,hash:j,query:i===Au?Hv(X.query):X.query||{}},ye,{redirectedFrom:void 0,href:N})}function C(X){return typeof X=="string"?Ga(t,X,l.value.path):st({},X)}function S(X,ve){if(c!==X)return ir(St.NAVIGATION_CANCELLED,{from:ve,to:X})}function A(X){return b(X)}function w(X){return A(st(C(X),{replace:!0}))}function E(X,ve){const me=X.matched[X.matched.length-1];if(me&&me.redirect){const{redirect:ye}=me;let j=typeof ye=="function"?ye(X,ve):ye;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=C(j):{path:j},j.params={}),st({query:X.query,hash:X.hash,params:j.path!=null?{}:X.params},j)}}function b(X,ve){const me=c=p(X),ye=l.value,j=X.state,L=X.force,N=X.replace===!0,Y=E(me,ye);if(Y)return b(st(C(Y),{state:typeof Y=="object"?st({},j,Y.state):j,force:L,replace:N}),ve||me);const Z=me;Z.redirectedFrom=ve;let ie;return!L&&Av(i,ye,me)&&(ie=ir(St.NAVIGATION_DUPLICATED,{to:Z,from:ye}),G(ye,ye,!0,!1)),(ie?Promise.resolve(ie):M(Z,ye)).catch(T=>ei(T)?ei(T,St.NAVIGATION_GUARD_REDIRECT)?T:ce(T):$(T,Z,ye)).then(T=>{if(T){if(ei(T,St.NAVIGATION_GUARD_REDIRECT))return b(st({replace:N},C(T.to),{state:typeof T.to=="object"?st({},j,T.to.state):j,force:L}),ve||Z)}else T=k(Z,ye,!0,N,j);return q(Z,ye,T),T})}function P(X,ve){const me=S(X,ve);return me?Promise.reject(me):Promise.resolve()}function y(X){const ve=te.values().next().value;return ve&&typeof ve.runWithContext=="function"?ve.runWithContext(X):X()}function M(X,ve){let me;const[ye,j,L]=Gv(X,ve);me=$a(ye.reverse(),"beforeRouteLeave",X,ve);for(const Y of ye)Y.leaveGuards.forEach(Z=>{me.push(Ui(Z,X,ve))});const N=P.bind(null,X,ve);return me.push(N),le(me).then(()=>{me=[];for(const Y of r.list())me.push(Ui(Y,X,ve));return me.push(N),le(me)}).then(()=>{me=$a(j,"beforeRouteUpdate",X,ve);for(const Y of j)Y.updateGuards.forEach(Z=>{me.push(Ui(Z,X,ve))});return me.push(N),le(me)}).then(()=>{me=[];for(const Y of L)if(Y.beforeEnter)if(Pn(Y.beforeEnter))for(const Z of Y.beforeEnter)me.push(Ui(Z,X,ve));else me.push(Ui(Y.beforeEnter,X,ve));return me.push(N),le(me)}).then(()=>(X.matched.forEach(Y=>Y.enterCallbacks={}),me=$a(L,"beforeRouteEnter",X,ve,y),me.push(N),le(me))).then(()=>{me=[];for(const Y of o.list())me.push(Ui(Y,X,ve));return me.push(N),le(me)}).catch(Y=>ei(Y,St.NAVIGATION_CANCELLED)?Y:Promise.reject(Y))}function q(X,ve,me){a.list().forEach(ye=>y(()=>ye(X,ve,me)))}function k(X,ve,me,ye,j){const L=S(X,ve);if(L)return L;const N=ve===Ti,Y=Bs?history.state:{};me&&(ye||N?s.replace(X.fullPath,st({scroll:N&&Y&&Y.scroll},j)):s.push(X.fullPath,j)),l.value=X,G(X,ve,me,N),ce()}let F;function Q(){F||(F=s.listen((X,ve,me)=>{if(!ge.listening)return;const ye=p(X),j=E(ye,ge.currentRoute.value);if(j){b(st(j,{replace:!0,force:!0}),ye).catch(Ir);return}c=ye;const L=l.value;Bs&&Uv(wu(L.fullPath,me.delta),Ma()),M(ye,L).catch(N=>ei(N,St.NAVIGATION_ABORTED|St.NAVIGATION_CANCELLED)?N:ei(N,St.NAVIGATION_GUARD_REDIRECT)?(b(st(C(N.to),{force:!0}),ye).then(Y=>{ei(Y,St.NAVIGATION_ABORTED|St.NAVIGATION_DUPLICATED)&&!me.delta&&me.type===Gl.pop&&s.go(-1,!1)}).catch(Ir),Promise.reject()):(me.delta&&s.go(-me.delta,!1),$(N,ye,L))).then(N=>{N=N||k(ye,L,!1),N&&(me.delta&&!ei(N,St.NAVIGATION_CANCELLED)?s.go(-me.delta,!1):me.type===Gl.pop&&ei(N,St.NAVIGATION_ABORTED|St.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),q(ye,L,N)}).catch(Ir)}))}let ne=gr(),fe=gr(),pe;function $(X,ve,me){ce(X);const ye=fe.list();return ye.length?ye.forEach(j=>j(X,ve,me)):console.error(X),Promise.reject(X)}function ae(){return pe&&l.value!==Ti?Promise.resolve():new Promise((X,ve)=>{ne.add([X,ve])})}function ce(X){return pe||(pe=!X,Q(),ne.list().forEach(([ve,me])=>X?me(X):ve()),ne.reset()),X}function G(X,ve,me,ye){const{scrollBehavior:j}=n;if(!Bs||!j)return Promise.resolve();const L=!me&&Ov(wu(X.fullPath,0))||(ye||!me)&&history.state&&history.state.scroll||null;return pa().then(()=>j(X,ve,L)).then(N=>N&&Nv(N)).catch(N=>$(N,X,ve))}const se=X=>s.go(X);let Se;const te=new Set,ge={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:x,resolve:p,options:n,push:A,replace:w,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:ae,install(X){X.component("RouterLink",u_),X.component("RouterView",p_),X.config.globalProperties.$router=ge,Object.defineProperty(X.config.globalProperties,"$route",{enumerable:!0,get:()=>$s(l)}),Bs&&!Se&&l.value===Ti&&(Se=!0,A(s.location).catch(ye=>{}));const ve={};for(const ye in Ti)Object.defineProperty(ve,ye,{get:()=>l.value[ye],enumerable:!0});X.provide(Sa,ge),X.provide(kh,Ff(ve)),X.provide($l,l);const me=X.unmount;te.add(X),X.unmount=function(){te.delete(X),te.size<1&&(c=Ti,F&&F(),F=null,l.value=Ti,Se=!1,pe=!1),me()}}};function le(X){return X.reduce((ve,me)=>ve.then(()=>y(me)),Promise.resolve())}return ge}function Mi(){return qn(Sa)}const g_={class:"card-ovr"},v_={class:"card-pos"},__={class:"face-circle"},x_=["src","alt"],y_={key:1,class:"face-svg",viewBox:"0 0 80 80"},M_={class:"card-name"},S_={class:"card-club"},b_={class:"card-stats"},E_={class:"stat-val"},T_={class:"stat-lbl"},w_={key:0,class:"icon-badge"},A_={__name:"PlayerCard",props:{player:{type:Object,required:!0}},setup(n){const e=Me(!0);return(t,i)=>(K(),J("div",{class:We(["player-card",`card-${n.player.tier}`])},[m("div",g_,H(n.player.overall),1),m("div",v_,H(n.player.position),1),m("div",__,[e.value?(K(),J("img",{key:0,src:n.player.face_url,alt:n.player.name,class:"face-img",onError:i[0]||(i[0]=s=>e.value=!1)},null,40,x_)):(K(),J("svg",y_,[...i[1]||(i[1]=[m("circle",{cx:"40",cy:"28",r:"18",fill:"rgba(255,255,255,.55)"},null,-1),m("ellipse",{cx:"40",cy:"72",rx:"26",ry:"20",fill:"rgba(255,255,255,.55)"},null,-1)])]))]),m("div",M_,H(n.player.name),1),m("div",S_,H(n.player.club),1),m("div",b_,[(K(!0),J(Fe,null,Ye(n.player.stats,s=>(K(),J("div",{key:s.label,class:"stat-box"},[m("span",E_,H(s.value),1),m("span",T_,H(s.label),1)]))),128))]),n.player.is_icon?(K(),J("div",w_,"★ LEGEND ★")):ze("",!0)],2))}},C_=an(A_,[["__scopeId","data-v-d819ef52"]]),R_={class:"splash"},P_={class:"stadium"},L_={key:0,class:"spotlight-wrap"},D_={key:1,class:"spotlight-wrap"},I_={class:"menu"},N_={class:"menu-buttons"},U_={__name:"SplashView",setup(n){const e=Mi(),t=Me(null),i=Me(null);async function s(){try{const a=await fetch("/api/spotlight");t.value=await a.json()}catch{}}function r(){const a=i.value;if(!a)return;const l=["#b71c1c","#c62828","#d32f2f","#e53935","#1565c0","#1976d2","#0d47a1","#283593","#880e4f","#333"];for(let c=0;c<5;c++){const u=document.createElement("div");u.className="stand-row";for(let d=0;d<130;d++){const f=document.createElement("div");f.className="stand-seat";const h=Math.random();f.style.background=h<.55?l[Math.floor(Math.random()*4)]:h<.8?l[4+Math.floor(Math.random()*4)]:l[9],f.style.animationDelay=`${(Math.random()*1.5).toFixed(2)}s`,u.appendChild(f)}a.appendChild(u)}}Ln(()=>{s(),r()});function o(a){e.push(a)}return(a,l)=>(K(),J("div",R_,[m("div",P_,[l[11]||(l[11]=tr('<div class="sky" data-v-34542794></div><div class="fl fl-left" data-v-34542794><div class="fl-pole" data-v-34542794></div><div class="fl-head" data-v-34542794></div><div class="fl-beam" data-v-34542794></div></div><div class="fl fl-right" data-v-34542794><div class="fl-pole" data-v-34542794></div><div class="fl-head" data-v-34542794></div><div class="fl-beam fl-beam-r" data-v-34542794></div></div><div class="scoreboard" data-v-34542794><span class="sb-score" data-v-34542794>00 — 00</span><span class="sb-time" data-v-34542794>00:00</span></div>',4)),m("div",{class:"stands",ref_key:"standsRef",ref:i},null,512),l[12]||(l[12]=tr('<div class="pitch" data-v-34542794><svg class="pitch-svg" viewBox="0 0 800 160" preserveAspectRatio="none" data-v-34542794><rect x="30" y="8" width="740" height="144" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2" data-v-34542794></rect><line x1="400" y1="8" x2="400" y2="152" stroke="rgba(255,255,255,.5)" stroke-width="2" data-v-34542794></line><circle cx="400" cy="80" r="40" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2" data-v-34542794></circle><circle cx="400" cy="80" r="3" fill="rgba(255,255,255,.5)" data-v-34542794></circle><rect x="30" y="42" width="90" height="76" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-34542794></rect><rect x="30" y="58" width="44" height="44" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-34542794></rect><rect x="680" y="42" width="90" height="76" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-34542794></rect><rect x="726" y="58" width="44" height="44" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-34542794></rect><rect x="10" y="62" width="20" height="36" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.6)" stroke-width="1.5" data-v-34542794></rect><rect x="770" y="62" width="20" height="36" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.6)" stroke-width="1.5" data-v-34542794></rect></svg></div>',1)),t.value?(K(),J("div",L_,[l[9]||(l[9]=m("div",{class:"spotlight-label"},"★ Player Spotlight ★",-1)),yt(C_,{player:t.value},null,8,["player"])])):(K(),J("div",D_,[...l[10]||(l[10]=[m("div",{class:"spotlight-label"},"★ Player Spotlight ★",-1),m("div",{class:"card-loading"},"Loading…",-1)])]))]),m("div",I_,[l[13]||(l[13]=m("div",{class:"title"},[m("h1",null,[nn("The Beautiful Game "),m("span",{class:"year"},"2026")]),m("p",{class:"subtitle"},"Choose your game mode")],-1)),m("nav",N_,[m("button",{class:"btn btn-primary",onClick:l[0]||(l[0]=c=>o("/play"))},"▶  Play the Game"),m("button",{class:"btn btn-secondary",onClick:l[1]||(l[1]=c=>o("/watch"))},"◉  Watch the Play"),m("button",{class:"btn btn-mode",onClick:l[2]||(l[2]=c=>o("/career"))},"🏆  Career Mode"),m("button",{class:"btn btn-mode",onClick:l[3]||(l[3]=c=>o("/journey"))},"📖  The Journey"),m("button",{class:"btn btn-mode",onClick:l[4]||(l[4]=c=>o("/ultimate"))},"⭐  TBG Pack System"),m("button",{class:"btn btn-mode",onClick:l[5]||(l[5]=c=>o("/players"))},"🔍  Player Database"),m("button",{class:"btn btn-mode",onClick:l[6]||(l[6]=c=>o("/league"))},"📊  Leagues"),m("button",{class:"btn btn-street",onClick:l[7]||(l[7]=c=>o("/street"))},"🏙️  Footy Street"),m("button",{class:"btn btn-manager",onClick:l[8]||(l[8]=c=>o("/manager"))},"👤  Manager Editor")])])]))}},O_=an(U_,[["__scopeId","data-v-34542794"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="163",F_=0,Bu=1,k_=2,Vh=1,Gh=2,ai=3,Vi=0,sn=1,Vn=2,ki=0,Ks=1,zu=2,Hu=3,Vu=4,B_=5,cs=100,z_=101,H_=102,V_=103,G_=104,W_=200,$_=201,X_=202,q_=203,Xl=204,ql=205,Y_=206,j_=207,K_=208,J_=209,Z_=210,Q_=211,e0=212,t0=213,n0=214,i0=0,s0=1,r0=2,Ko=3,o0=4,a0=5,l0=6,c0=7,_c=0,u0=1,d0=2,Bi=0,f0=1,h0=2,p0=3,m0=4,g0=5,v0=6,_0=7,Wh=300,sr=301,rr=302,Yl=303,jl=304,ba=306,Kl=1e3,fs=1001,Jl=1002,_n=1003,x0=1004,co=1005,Tn=1006,Xa=1007,hs=1008,zi=1009,y0=1010,M0=1011,$h=1012,Xh=1013,or=1014,Fi=1015,Jo=1016,qh=1017,Yh=1018,eo=1020,S0=35902,b0=1021,E0=1022,$n=1023,T0=1024,w0=1025,Js=1026,qr=1027,A0=1028,jh=1029,C0=1030,Kh=1031,Jh=1033,qa=33776,Ya=33777,ja=33778,Ka=33779,Gu=35840,Wu=35841,$u=35842,Xu=35843,Zh=36196,qu=37492,Yu=37496,ju=37808,Ku=37809,Ju=37810,Zu=37811,Qu=37812,ed=37813,td=37814,nd=37815,id=37816,sd=37817,rd=37818,od=37819,ad=37820,ld=37821,Ja=36492,cd=36494,ud=36495,R0=36283,dd=36284,fd=36285,hd=36286,P0=3200,L0=3201,Qh=0,D0=1,Oi="",Fn="srgb",Wi="srgb-linear",xc="display-p3",Ea="display-p3-linear",Zo="linear",ht="srgb",Qo="rec709",ea="p3",ys=7680,pd=519,I0=512,N0=513,U0=514,ep=515,O0=516,F0=517,k0=518,B0=519,md=35044,gd="300 es",fi=2e3,ta=2001;class cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vd=1234567;const Nr=Math.PI/180,ar=180/Math.PI;function ur(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function yc(n,e){return(n%e+e)%e}function z0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function H0(n,e,t){return n!==e?(t-n)/(e-n):0}function Ur(n,e,t){return(1-t)*n+t*e}function V0(n,e,t,i){return Ur(n,e,1-Math.exp(-t*i))}function G0(n,e=1){return e-Math.abs(yc(n,e*2)-e)}function W0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function X0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function q0(n,e){return n+Math.random()*(e-n)}function Y0(n){return n*(.5-Math.random())}function j0(n){n!==void 0&&(vd=n);let e=vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function K0(n){return n*Nr}function J0(n){return n*ar}function Z0(n){return(n&n-1)===0&&n!==0}function Q0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ex(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tx(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Gn={DEG2RAD:Nr,RAD2DEG:ar,generateUUID:ur,clamp:Ft,euclideanModulo:yc,mapLinear:z0,inverseLerp:H0,lerp:Ur,damp:V0,pingpong:G0,smoothstep:W0,smootherstep:$0,randInt:X0,randFloat:q0,randFloatSpread:Y0,seededRandom:j0,degToRad:K0,radToDeg:J0,isPowerOfTwo:Z0,ceilPowerOfTwo:Q0,floorPowerOfTwo:ex,setQuaternionFromProperEuler:tx,normalize:Yt,denormalize:zs};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,s,r,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],v=i[8],x=s[0],g=s[3],p=s[6],C=s[1],S=s[4],A=s[7],w=s[2],E=s[5],b=s[8];return r[0]=o*x+a*C+l*w,r[3]=o*g+a*S+l*E,r[6]=o*p+a*A+l*b,r[1]=c*x+u*C+d*w,r[4]=c*g+u*S+d*E,r[7]=c*p+u*A+d*b,r[2]=f*x+h*C+v*w,r[5]=f*g+h*S+v*E,r[8]=f*p+h*A+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,v=t*d+i*f+s*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new et;function tp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nx(){const n=na("canvas");return n.style.display="block",n}const _d={};function ix(n){n in _d||(_d[n]=!0,console.warn(n))}const xd=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yd=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uo={[Wi]:{transfer:Zo,primaries:Qo,toReference:n=>n,fromReference:n=>n},[Fn]:{transfer:ht,primaries:Qo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ea]:{transfer:Zo,primaries:ea,toReference:n=>n.applyMatrix3(yd),fromReference:n=>n.applyMatrix3(xd)},[xc]:{transfer:ht,primaries:ea,toReference:n=>n.convertSRGBToLinear().applyMatrix3(yd),fromReference:n=>n.applyMatrix3(xd).convertLinearToSRGB()}},sx=new Set([Wi,Ea]),ct={enabled:!0,_workingColorSpace:Wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!sx.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=uo[e].toReference,s=uo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return uo[n].primaries},getTransfer:function(n){return n===Oi?Zo:uo[n].transfer}};function Zs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ms;class rx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ms===void 0&&(Ms=na("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zs(t[i]/255)*255):t[i]=Zs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ox=0;class np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=ur(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(el(s[o].image)):r.push(el(s[o]))}else r=el(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function el(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ax=0;class rn extends cr{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=fs,s=fs,r=Tn,o=hs,a=$n,l=zi,c=rn.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=ur(),this.name="",this.source=new np(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kl:e.x=e.x-Math.floor(e.x);break;case fs:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kl:e.y=e.y-Math.floor(e.y);break;case fs:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Wh;rn.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],v=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,A=(h+1)/2,w=(p+1)/2,E=(u+f)/4,b=(d+x)/4,P=(v+g)/4;return S>A&&S>w?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=E/i,r=b/i):A>w?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=E/s,r=P/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=b/r,s=P/r),this.set(i,s,r,t),this}let C=Math.sqrt((g-v)*(g-v)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(g-v)/C,this.y=(d-x)/C,this.z=(f-u)/C,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lx extends cr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const r=new rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new np(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends lx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ip extends rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cx extends rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class to{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],v=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=v,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==v){let g=1-a;const p=l*f+c*h+u*v+d*x,C=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const w=Math.sqrt(S),E=Math.atan2(w,p*C);g=Math.sin(g*E)/w,a=Math.sin(a*E)/w}const A=a*C;if(l=l*g+f*A,c=c*g+h*A,u=u*g+v*A,d=d*g+x*A,g===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],v=r[o+3];return e[t]=a*v+u*d+l*h-c*f,e[t+1]=l*v+u*f+c*d-a*h,e[t+2]=c*v+u*h+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"YXZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"ZXY":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"ZYX":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"YZX":this._x=f*u*d+c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d-f*h*v;break;case"XZY":this._x=f*u*d-c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d+f*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Md.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tl.copy(this).projectOnVector(e),this.sub(tl)}reflect(e){return this.sub(tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tl=new V,Md=new to;class no{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),ho.subVectors(this.max,vr),Ss.subVectors(e.a,vr),bs.subVectors(e.b,vr),Es.subVectors(e.c,vr),wi.subVectors(bs,Ss),Ai.subVectors(Es,bs),Ji.subVectors(Ss,Es);let t=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Ji.z,Ji.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Ji.z,0,-Ji.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Ji.y,Ji.x,0];return!nl(t,Ss,bs,Es,ho)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,Ss,bs,Es,ho))?!1:(po.crossVectors(wi,Ai),t=[po.x,po.y,po.z],nl(t,Ss,bs,Es,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new V,new V,new V,new V,new V,new V,new V,new V],Mn=new V,fo=new no,Ss=new V,bs=new V,Es=new V,wi=new V,Ai=new V,Ji=new V,vr=new V,ho=new V,po=new V,Zi=new V;function nl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zi.fromArray(n,r);const a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),u=i.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ux=new no,_r=new V,il=new V;class Mc{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ux.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_r,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(il)),this.expandByPoint(_r.copy(e.center).sub(il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new V,sl=new V,mo=new V,Ci=new V,rl=new V,go=new V,ol=new V;class dx{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){sl.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(sl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(mo),a=Ci.dot(this.direction),l=-Ci.dot(mo),c=Ci.lengthSq(),u=Math.abs(1-o*o);let d,f,h,v;if(u>0)if(d=o*l-a,f=o*a-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(sl).addScaledVector(mo,f),h}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,s,r){rl.subVectors(t,e),go.subVectors(i,e),ol.crossVectors(rl,go);let o=this.direction.dot(ol),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(go.crossVectors(Ci,go));if(l<0)return null;const c=a*this.direction.dot(rl.cross(Ci));if(c<0||l+c>o)return null;const u=-a*Ci.dot(ol);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,s,r,o,a,l,c,u,d,f,h,v,x,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,h,v,x,g)}set(e,t,i,s,r,o,a,l,c,u,d,f,h,v,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=v,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,v=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+v*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=v+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,v=c*u,x=c*d;t[0]=f+x*a,t[4]=v*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-v,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,v=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=v+h*a,t[1]=h+v*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,v=a*u,x=a*d;t[0]=l*u,t[4]=v*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=v*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+v,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,h=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-v,t[2]=v*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fx,e,hx)}lookAt(e,t,i){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ri.crossVectors(i,cn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ri.crossVectors(i,cn)),Ri.normalize(),vo.crossVectors(cn,Ri),s[0]=Ri.x,s[4]=vo.x,s[8]=cn.x,s[1]=Ri.y,s[5]=vo.y,s[9]=cn.y,s[2]=Ri.z,s[6]=vo.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],v=i[2],x=i[6],g=i[10],p=i[14],C=i[3],S=i[7],A=i[11],w=i[15],E=s[0],b=s[4],P=s[8],y=s[12],M=s[1],q=s[5],k=s[9],F=s[13],Q=s[2],ne=s[6],fe=s[10],pe=s[14],$=s[3],ae=s[7],ce=s[11],G=s[15];return r[0]=o*E+a*M+l*Q+c*$,r[4]=o*b+a*q+l*ne+c*ae,r[8]=o*P+a*k+l*fe+c*ce,r[12]=o*y+a*F+l*pe+c*G,r[1]=u*E+d*M+f*Q+h*$,r[5]=u*b+d*q+f*ne+h*ae,r[9]=u*P+d*k+f*fe+h*ce,r[13]=u*y+d*F+f*pe+h*G,r[2]=v*E+x*M+g*Q+p*$,r[6]=v*b+x*q+g*ne+p*ae,r[10]=v*P+x*k+g*fe+p*ce,r[14]=v*y+x*F+g*pe+p*G,r[3]=C*E+S*M+A*Q+w*$,r[7]=C*b+S*q+A*ne+w*ae,r[11]=C*P+S*k+A*fe+w*ce,r[15]=C*y+S*F+A*pe+w*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],v=e[3],x=e[7],g=e[11],p=e[15];return v*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+x*(+t*l*h-t*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+g*(+t*c*d-t*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],v=e[12],x=e[13],g=e[14],p=e[15],C=d*g*c-x*f*c+x*l*h-a*g*h-d*l*p+a*f*p,S=v*f*c-u*g*c-v*l*h+o*g*h+u*l*p-o*f*p,A=u*x*c-v*d*c+v*a*h-o*x*h-u*a*p+o*d*p,w=v*d*l-u*x*l-v*a*f+o*x*f+u*a*g-o*d*g,E=t*C+i*S+s*A+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=C*b,e[1]=(x*f*r-d*g*r-x*s*h+i*g*h+d*s*p-i*f*p)*b,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*p+i*l*p)*b,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*b,e[4]=S*b,e[5]=(u*g*r-v*f*r+v*s*h-t*g*h-u*s*p+t*f*p)*b,e[6]=(v*l*r-o*g*r-v*s*c+t*g*c+o*s*p-t*l*p)*b,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*h+t*l*h)*b,e[8]=A*b,e[9]=(v*d*r-u*x*r-v*i*h+t*x*h+u*i*p-t*d*p)*b,e[10]=(o*x*r-v*a*r+v*i*c-t*x*c-o*i*p+t*a*p)*b,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*h-t*a*h)*b,e[12]=w*b,e[13]=(u*x*s-v*d*s+v*i*f-t*x*f-u*i*g+t*d*g)*b,e[14]=(v*a*s-o*x*s-v*i*l+t*x*l+o*i*g-t*a*g)*b,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*b,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,v=r*d,x=o*u,g=o*d,p=a*d,C=l*c,S=l*u,A=l*d,w=i.x,E=i.y,b=i.z;return s[0]=(1-(x+p))*w,s[1]=(h+A)*w,s[2]=(v-S)*w,s[3]=0,s[4]=(h-A)*E,s[5]=(1-(f+p))*E,s[6]=(g+C)*E,s[7]=0,s[8]=(v+S)*b,s[9]=(g-C)*b,s[10]=(1-(f+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);const c=1/r,u=1/o,d=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=fi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let h,v;if(a===fi)h=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ta)h=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=fi){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),f=(t+e)*c,h=(i+s)*u;let v,x;if(a===fi)v=(o+r)*d,x=-2*d;else if(a===ta)v=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ts=new V,Sn=new Mt,fx=new V(0,0,0),hx=new V(1,1,1),Ri=new V,vo=new V,cn=new V,Sd=new Mt,bd=new to;class Kn{constructor(e=0,t=0,i=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bd.setFromEuler(this),this.setFromQuaternion(bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let px=0;const Ed=new V,ws=new to,ii=new Mt,_o=new V,xr=new V,mx=new V,gx=new to,Td=new V(1,0,0),wd=new V(0,1,0),Ad=new V(0,0,1),Cd={type:"added"},vx={type:"removed"},As={type:"childadded",child:null},al={type:"childremoved",child:null};class kt extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new V,t=new Kn,i=new to,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new et}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Td,e)}rotateY(e){return this.rotateOnAxis(wd,e)}rotateZ(e){return this.rotateOnAxis(Ad,e)}translateOnAxis(e,t){return Ed.copy(e).applyQuaternion(this.quaternion),this.position.add(Ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Td,e)}translateY(e){return this.translateOnAxis(wd,e)}translateZ(e){return this.translateOnAxis(Ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_o.copy(e):_o.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(xr,_o,this.up):ii.lookAt(_o,xr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(ii),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cd),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vx),al.child=e,this.dispatchEvent(al),al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cd),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}kt.DEFAULT_UP=new V(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new V,si=new V,ll=new V,ri=new V,Cs=new V,Rs=new V,Rd=new V,cl=new V,ul=new V,dl=new V;class Wn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bn.subVectors(s,t),si.subVectors(i,t),ll.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(si),l=bn.dot(ll),c=si.dot(si),u=si.dot(ll),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-h-v,v,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static isFrontFacing(e,t,i,s){return bn.subVectors(i,t),si.subVectors(e,t),bn.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),bn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Cs.subVectors(s,i),Rs.subVectors(r,i),cl.subVectors(e,i);const l=Cs.dot(cl),c=Rs.dot(cl);if(l<=0&&c<=0)return t.copy(i);ul.subVectors(e,s);const u=Cs.dot(ul),d=Rs.dot(ul);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Cs,o);dl.subVectors(e,r);const h=Cs.dot(dl),v=Rs.dot(dl);if(v>=0&&h<=v)return t.copy(r);const x=h*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Rs,a);const g=u*v-h*d;if(g<=0&&d-u>=0&&h-v>=0)return Rd.subVectors(r,s),a=(d-u)/(d-u+(h-v)),t.copy(s).addScaledVector(Rd,a);const p=1/(g+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Cs,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function fl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=yc(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=fl(o,r,e+1/3),this.g=fl(o,r,e),this.b=fl(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Fn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const i=rp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return ct.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Ft(Vt.r*255,0,255))*65536+Math.round(Ft(Vt.g*255,0,255))*256+Math.round(Ft(Vt.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Vt.copy(this),t);const i=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Fn){ct.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,s=Vt.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(xo);const i=Ur(Pi.h,xo.h,t),s=Ur(Pi.s,xo.s,t),r=Ur(Pi.l,xo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new nt;nt.NAMES=rp;let _x=0;class io extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=Ks,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xl&&(i.blendSrc=this.blendSrc),this.blendDst!==ql&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xi extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new V,yo=new Le;class Yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=md,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ix("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==md&&(e.usage=this.usage),e}}class op extends Yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ap extends Yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends Yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xx=0;const mn=new Mt,hl=new kt,Ps=new V,un=new no,yr=new no,Ut=new V;class yn extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tp(e)?ap:op)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(un.min,yr.min),un.expandByPoint(Ut),Ut.addVectors(un.max,yr.max),un.expandByPoint(Ut)):(un.expandByPoint(yr.min),un.expandByPoint(yr.max))}un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Ut.add(Ps)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new V,l[P]=new V;const c=new V,u=new V,d=new V,f=new Le,h=new Le,v=new Le,x=new V,g=new V;function p(P,y,M){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,P),h.fromBufferAttribute(r,y),v.fromBufferAttribute(r,M),u.sub(c),d.sub(c),h.sub(f),v.sub(f);const q=1/(h.x*v.y-v.x*h.y);isFinite(q)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-h.y).multiplyScalar(q),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(q),a[P].add(x),a[y].add(x),a[M].add(x),l[P].add(g),l[y].add(g),l[M].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let P=0,y=C.length;P<y;++P){const M=C[P],q=M.start,k=M.count;for(let F=q,Q=q+k;F<Q;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new V,A=new V,w=new V,E=new V;function b(P){w.fromBufferAttribute(s,P),E.copy(w);const y=a[P];S.copy(y),S.sub(w.multiplyScalar(w.dot(y))).normalize(),A.crossVectors(E,y);const q=A.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,q)}for(let P=0,y=C.length;P<y;++P){const M=C[P],q=M.start,k=M.count;for(let F=q,Q=q+k;F<Q;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let f=0,h=e.count;f<h;f+=3){const v=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,v=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let p=0;p<u;p++)f[v++]=c[h++]}return new Yn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pd=new Mt,Qi=new dx,Mo=new Mc,Ld=new V,Ls=new V,Ds=new V,Is=new V,pl=new V,So=new V,bo=new Le,Eo=new Le,To=new Le,Dd=new V,Id=new V,Nd=new V,wo=new V,Ao=new V;class Oe extends kt{constructor(e=new yn,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(pl.fromBufferAttribute(d,e),o?So.addScaledVector(pl,u):So.addScaledVector(pl.sub(t),u))}t.add(So)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(Mo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Mo,Ld)===null||Qi.origin.distanceToSquared(Ld)>(e.far-e.near)**2))&&(Pd.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Pd),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const g=f[v],p=o[g.materialIndex],C=Math.max(g.start,h.start),S=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let A=C,w=S;A<w;A+=3){const E=a.getX(A),b=a.getX(A+1),P=a.getX(A+2);s=Co(this,p,e,i,c,u,d,E,b,P),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=v,p=x;g<p;g+=3){const C=a.getX(g),S=a.getX(g+1),A=a.getX(g+2);s=Co(this,o,e,i,c,u,d,C,S,A),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const g=f[v],p=o[g.materialIndex],C=Math.max(g.start,h.start),S=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let A=C,w=S;A<w;A+=3){const E=A,b=A+1,P=A+2;s=Co(this,p,e,i,c,u,d,E,b,P),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=v,p=x;g<p;g+=3){const C=g,S=g+1,A=g+2;s=Co(this,o,e,i,c,u,d,C,S,A),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function yx(n,e,t,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Vi,a),l===null)return null;Ao.copy(a),Ao.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ao);return c<t.near||c>t.far?null:{distance:c,point:Ao.clone(),object:n}}function Co(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ls),n.getVertexPosition(l,Ds),n.getVertexPosition(c,Is);const u=yx(n,e,t,i,Ls,Ds,Is,wo);if(u){s&&(bo.fromBufferAttribute(s,a),Eo.fromBufferAttribute(s,l),To.fromBufferAttribute(s,c),u.uv=Wn.getInterpolation(wo,Ls,Ds,Is,bo,Eo,To,new Le)),r&&(bo.fromBufferAttribute(r,a),Eo.fromBufferAttribute(r,l),To.fromBufferAttribute(r,c),u.uv1=Wn.getInterpolation(wo,Ls,Ds,Is,bo,Eo,To,new Le)),o&&(Dd.fromBufferAttribute(o,a),Id.fromBufferAttribute(o,l),Nd.fromBufferAttribute(o,c),u.normal=Wn.getInterpolation(wo,Ls,Ds,Is,Dd,Id,Nd,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};Wn.getNormal(Ls,Ds,Is,d.normal),u.face=d}return u}class Tt extends yn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(d,2));function v(x,g,p,C,S,A,w,E,b,P,y){const M=A/b,q=w/P,k=A/2,F=w/2,Q=E/2,ne=b+1,fe=P+1;let pe=0,$=0;const ae=new V;for(let ce=0;ce<fe;ce++){const G=ce*q-F;for(let se=0;se<ne;se++){const Se=se*M-k;ae[x]=Se*C,ae[g]=G*S,ae[p]=Q,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[g]=0,ae[p]=E>0?1:-1,u.push(ae.x,ae.y,ae.z),d.push(se/b),d.push(1-ce/P),pe+=1}}for(let ce=0;ce<P;ce++)for(let G=0;G<b;G++){const se=f+G+ne*ce,Se=f+G+ne*(ce+1),te=f+(G+1)+ne*(ce+1),ge=f+(G+1)+ne*ce;l.push(se,Se,ge),l.push(Se,te,ge),$+=6}a.addGroup(h,$,y),h+=$,f+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=lr(n[t]);for(const s in i)e[s]=i[s]}return e}function Mx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Sx={clone:lr,merge:jt};var bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bx,this.fragmentShader=Ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=Mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cp extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new V,Ud=new Le,Od=new Le;class Wt extends cp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Ud,Od),t.subVectors(Od,Ud)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=-90,Us=1;class Tx extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(Ns,Us,e,t);s.layers=this.layers,this.add(s);const r=new Wt(Ns,Us,e,t);r.layers=this.layers,this.add(r);const o=new Wt(Ns,Us,e,t);o.layers=this.layers,this.add(o);const a=new Wt(Ns,Us,e,t);a.layers=this.layers,this.add(a);const l=new Wt(Ns,Us,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Ns,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class up extends rn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wx extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new up(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tt(5,5,5),r=new Gi({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ki});r.uniforms.tEquirect.value=t;const o=new Oe(s,r),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=Tn),new Tx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ml=new V,Ax=new V,Cx=new et;class rs{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ml.subVectors(i,t).cross(Ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ml),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cx.getNormalMatrix(e),s=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Mc,Ro=new V;class Sc{constructor(e=new rs,t=new rs,i=new rs,s=new rs,r=new rs,o=new rs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],h=s[8],v=s[9],x=s[10],g=s[11],p=s[12],C=s[13],S=s[14],A=s[15];if(i[0].setComponents(l-r,f-c,g-h,A-p).normalize(),i[1].setComponents(l+r,f+c,g+h,A+p).normalize(),i[2].setComponents(l+o,f+u,g+v,A+C).normalize(),i[3].setComponents(l-o,f-u,g-v,A-C).normalize(),i[4].setComponents(l-a,f-d,g-x,A-S).normalize(),t===fi)i[5].setComponents(l+a,f+d,g+x,A+S).normalize();else if(t===ta)i[5].setComponents(a,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ro.x=s.normal.x>0?e.max.x:e.min.x,Ro.y=s.normal.y>0?e.max.y:e.min.y,Ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Rx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),d.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let h=0,v=f.length;h<v;h++){const x=f[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class pi extends yn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,h=[],v=[],x=[],g=[];for(let p=0;p<u;p++){const C=p*f-o;for(let S=0;S<c;S++){const A=S*d-r;v.push(A,-C,0),x.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){const S=C+c*p,A=C+c*(p+1),w=C+1+c*(p+1),E=C+1+c*p;h.push(S,A,E),h.push(A,w,E)}this.setIndex(h),this.setAttribute("position",new bt(v,3)),this.setAttribute("normal",new bt(x,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lx=`#ifdef USE_ALPHAHASH
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
#endif`,Dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ox=`#ifdef USE_AOMAP
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
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kx=`#ifdef USE_BATCHING
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
#endif`,Bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gx=`#ifdef USE_IRIDESCENCE
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
#endif`,Wx=`#ifdef USE_BUMPMAP
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
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qx=`#define PI 3.141592653589793
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
} // validated`,ey=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ty=`vec3 transformedNormal = objectNormal;
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
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ay=`
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
}`,ly=`#ifdef USE_ENVMAP
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
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
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
#endif`,hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,my=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vy=`#ifdef USE_GRADIENTMAP
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
}`,_y=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sy=`uniform bool receiveShadow;
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
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cy=`PhysicalMaterial material;
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
#endif`,Ry=`struct PhysicalMaterial {
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
}`,Py=`
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
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ny=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,By=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zy=`#if defined( USE_POINTS_UV )
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
#endif`,Hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$y=`#ifdef USE_MORPHNORMALS
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
#endif`,Xy=`#ifdef USE_MORPHTARGETS
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
#endif`,qy=`#ifdef USE_MORPHTARGETS
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
#endif`,Yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qy=`#ifdef USE_NORMALMAP
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
#endif`,eM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mM=`float getShadowMask() {
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
}`,gM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,_M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xM=`#ifdef USE_SKINNING
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
#endif`,yM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
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
#endif`,TM=`#ifdef USE_TRANSMISSION
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
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LM=`uniform sampler2D t2D;
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
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`#include <common>
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
}`,FM=`#if DEPTH_PACKING == 3200
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
}`,kM=`#define DISTANCE
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
}`,BM=`#define DISTANCE
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
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VM=`uniform float scale;
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
}`,GM=`uniform vec3 diffuse;
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
}`,WM=`#include <common>
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
}`,$M=`uniform vec3 diffuse;
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
}`,XM=`#define LAMBERT
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
}`,qM=`#define LAMBERT
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
}`,YM=`#define MATCAP
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
}`,jM=`#define MATCAP
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
}`,KM=`#define NORMAL
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
}`,JM=`#define NORMAL
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
}`,ZM=`#define PHONG
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
}`,QM=`#define PHONG
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
}`,eS=`#define STANDARD
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
}`,tS=`#define STANDARD
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
}`,nS=`#define TOON
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
}`,iS=`#define TOON
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
}`,sS=`uniform float size;
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
}`,rS=`uniform vec3 diffuse;
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
}`,oS=`#include <common>
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
}`,aS=`uniform vec3 color;
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
}`,lS=`uniform float rotation;
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
}`,cS=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Px,alphahash_pars_fragment:Lx,alphamap_fragment:Dx,alphamap_pars_fragment:Ix,alphatest_fragment:Nx,alphatest_pars_fragment:Ux,aomap_fragment:Ox,aomap_pars_fragment:Fx,batching_pars_vertex:kx,batching_vertex:Bx,begin_vertex:zx,beginnormal_vertex:Hx,bsdfs:Vx,iridescence_fragment:Gx,bumpmap_pars_fragment:Wx,clipping_planes_fragment:$x,clipping_planes_pars_fragment:Xx,clipping_planes_pars_vertex:qx,clipping_planes_vertex:Yx,color_fragment:jx,color_pars_fragment:Kx,color_pars_vertex:Jx,color_vertex:Zx,common:Qx,cube_uv_reflection_fragment:ey,defaultnormal_vertex:ty,displacementmap_pars_vertex:ny,displacementmap_vertex:iy,emissivemap_fragment:sy,emissivemap_pars_fragment:ry,colorspace_fragment:oy,colorspace_pars_fragment:ay,envmap_fragment:ly,envmap_common_pars_fragment:cy,envmap_pars_fragment:uy,envmap_pars_vertex:dy,envmap_physical_pars_fragment:by,envmap_vertex:fy,fog_vertex:hy,fog_pars_vertex:py,fog_fragment:my,fog_pars_fragment:gy,gradientmap_pars_fragment:vy,lightmap_fragment:_y,lightmap_pars_fragment:xy,lights_lambert_fragment:yy,lights_lambert_pars_fragment:My,lights_pars_begin:Sy,lights_toon_fragment:Ey,lights_toon_pars_fragment:Ty,lights_phong_fragment:wy,lights_phong_pars_fragment:Ay,lights_physical_fragment:Cy,lights_physical_pars_fragment:Ry,lights_fragment_begin:Py,lights_fragment_maps:Ly,lights_fragment_end:Dy,logdepthbuf_fragment:Iy,logdepthbuf_pars_fragment:Ny,logdepthbuf_pars_vertex:Uy,logdepthbuf_vertex:Oy,map_fragment:Fy,map_pars_fragment:ky,map_particle_fragment:By,map_particle_pars_fragment:zy,metalnessmap_fragment:Hy,metalnessmap_pars_fragment:Vy,morphinstance_vertex:Gy,morphcolor_vertex:Wy,morphnormal_vertex:$y,morphtarget_pars_vertex:Xy,morphtarget_vertex:qy,normal_fragment_begin:Yy,normal_fragment_maps:jy,normal_pars_fragment:Ky,normal_pars_vertex:Jy,normal_vertex:Zy,normalmap_pars_fragment:Qy,clearcoat_normal_fragment_begin:eM,clearcoat_normal_fragment_maps:tM,clearcoat_pars_fragment:nM,iridescence_pars_fragment:iM,opaque_fragment:sM,packing:rM,premultiplied_alpha_fragment:oM,project_vertex:aM,dithering_fragment:lM,dithering_pars_fragment:cM,roughnessmap_fragment:uM,roughnessmap_pars_fragment:dM,shadowmap_pars_fragment:fM,shadowmap_pars_vertex:hM,shadowmap_vertex:pM,shadowmask_pars_fragment:mM,skinbase_vertex:gM,skinning_pars_vertex:vM,skinning_vertex:_M,skinnormal_vertex:xM,specularmap_fragment:yM,specularmap_pars_fragment:MM,tonemapping_fragment:SM,tonemapping_pars_fragment:bM,transmission_fragment:EM,transmission_pars_fragment:TM,uv_pars_fragment:wM,uv_pars_vertex:AM,uv_vertex:CM,worldpos_vertex:RM,background_vert:PM,background_frag:LM,backgroundCube_vert:DM,backgroundCube_frag:IM,cube_vert:NM,cube_frag:UM,depth_vert:OM,depth_frag:FM,distanceRGBA_vert:kM,distanceRGBA_frag:BM,equirect_vert:zM,equirect_frag:HM,linedashed_vert:VM,linedashed_frag:GM,meshbasic_vert:WM,meshbasic_frag:$M,meshlambert_vert:XM,meshlambert_frag:qM,meshmatcap_vert:YM,meshmatcap_frag:jM,meshnormal_vert:KM,meshnormal_frag:JM,meshphong_vert:ZM,meshphong_frag:QM,meshphysical_vert:eS,meshphysical_frag:tS,meshtoon_vert:nS,meshtoon_frag:iS,points_vert:sS,points_frag:rS,shadow_vert:oS,shadow_frag:aS,sprite_vert:lS,sprite_frag:cS},Te={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},zn={basic:{uniforms:jt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:jt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new nt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:jt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:jt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:jt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new nt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:jt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:jt([Te.points,Te.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:jt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:jt([Te.common,Te.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:jt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:jt([Te.sprite,Te.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:jt([Te.common,Te.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:jt([Te.lights,Te.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};zn.physical={uniforms:jt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Po={r:0,b:0,g:0},ts=new Kn,uS=new Mt;function dS(n,e,t,i,s,r,o){const a=new nt(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function v(g,p){let C=!1,S=p.isScene===!0?p.background:null;S&&S.isTexture&&(S=(p.backgroundBlurriness>0?t:e).get(S)),S===null?x(a,l):S&&S.isColor&&(x(S,1),C=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ba)?(u===void 0&&(u=new Oe(new Tt(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:lr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ts.copy(p.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uS.makeRotationFromEuler(ts)),u.material.toneMapped=ct.getTransfer(S.colorSpace)!==ht,(d!==S||f!==S.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,h=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Oe(new pi(2,2),new Gi({name:"BackgroundMaterial",uniforms:lr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ct.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,h=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,p){g.getRGB(Po,lp(n)),i.buffers.color.setClear(Po.r,Po.g,Po.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(a,l)},render:v}}function fS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,q,k,F,Q){let ne=!1;const fe=d(F,k,q);r!==fe&&(r=fe,c(r.object)),ne=h(M,F,k,Q),ne&&v(M,F,k,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,A(M,q,k,F),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,q,k){const F=k.wireframe===!0;let Q=i[M.id];Q===void 0&&(Q={},i[M.id]=Q);let ne=Q[q.id];ne===void 0&&(ne={},Q[q.id]=ne);let fe=ne[F];return fe===void 0&&(fe=f(l()),ne[F]=fe),fe}function f(M){const q=[],k=[],F=[];for(let Q=0;Q<t;Q++)q[Q]=0,k[Q]=0,F[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:k,attributeDivisors:F,object:M,attributes:{},index:null}}function h(M,q,k,F){const Q=r.attributes,ne=q.attributes;let fe=0;const pe=k.getAttributes();for(const $ in pe)if(pe[$].location>=0){const ce=Q[$];let G=ne[$];if(G===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(G=M.instanceColor)),ce===void 0||ce.attribute!==G||G&&ce.data!==G.data)return!0;fe++}return r.attributesNum!==fe||r.index!==F}function v(M,q,k,F){const Q={},ne=q.attributes;let fe=0;const pe=k.getAttributes();for(const $ in pe)if(pe[$].location>=0){let ce=ne[$];ce===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));const G={};G.attribute=ce,ce&&ce.data&&(G.data=ce.data),Q[$]=G,fe++}r.attributes=Q,r.attributesNum=fe,r.index=F}function x(){const M=r.newAttributes;for(let q=0,k=M.length;q<k;q++)M[q]=0}function g(M){p(M,0)}function p(M,q){const k=r.newAttributes,F=r.enabledAttributes,Q=r.attributeDivisors;k[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),Q[M]!==q&&(n.vertexAttribDivisor(M,q),Q[M]=q)}function C(){const M=r.newAttributes,q=r.enabledAttributes;for(let k=0,F=q.length;k<F;k++)q[k]!==M[k]&&(n.disableVertexAttribArray(k),q[k]=0)}function S(M,q,k,F,Q,ne,fe){fe===!0?n.vertexAttribIPointer(M,q,k,Q,ne):n.vertexAttribPointer(M,q,k,F,Q,ne)}function A(M,q,k,F){x();const Q=F.attributes,ne=k.getAttributes(),fe=q.defaultAttributeValues;for(const pe in ne){const $=ne[pe];if($.location>=0){let ae=Q[pe];if(ae===void 0&&(pe==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),pe==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const ce=ae.normalized,G=ae.itemSize,se=e.get(ae);if(se===void 0)continue;const Se=se.buffer,te=se.type,ge=se.bytesPerElement,le=te===n.INT||te===n.UNSIGNED_INT||ae.gpuType===Xh;if(ae.isInterleavedBufferAttribute){const X=ae.data,ve=X.stride,me=ae.offset;if(X.isInstancedInterleavedBuffer){for(let ye=0;ye<$.locationSize;ye++)p($.location+ye,X.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ye=0;ye<$.locationSize;ye++)g($.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let ye=0;ye<$.locationSize;ye++)S($.location+ye,G/$.locationSize,te,ce,ve*ge,(me+G/$.locationSize*ye)*ge,le)}else{if(ae.isInstancedBufferAttribute){for(let X=0;X<$.locationSize;X++)p($.location+X,ae.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let X=0;X<$.locationSize;X++)g($.location+X);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let X=0;X<$.locationSize;X++)S($.location+X,G/$.locationSize,te,ce,G*ge,G/$.locationSize*X*ge,le)}}else if(fe!==void 0){const ce=fe[pe];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv($.location,ce);break;case 3:n.vertexAttrib3fv($.location,ce);break;case 4:n.vertexAttrib4fv($.location,ce);break;default:n.vertexAttrib1fv($.location,ce)}}}}C()}function w(){P();for(const M in i){const q=i[M];for(const k in q){const F=q[k];for(const Q in F)u(F[Q].object),delete F[Q];delete q[k]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const q=i[M.id];for(const k in q){const F=q[k];for(const Q in F)u(F[Q].object),delete F[Q];delete q[k]}delete i[M.id]}function b(M){for(const q in i){const k=i[q];if(k[M.id]===void 0)continue;const F=k[M.id];for(const Q in F)u(F[Q].object),delete F[Q];delete k[M.id]}}function P(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:g,disableUnusedAttributes:C}}function hS(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{d.multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function pS(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),p=u>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:p,maxSamples:C}}function mS(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new rs,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const v=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||v===null||v.length===0||r&&!g)r?u(null):c();else{const C=r?0:i,S=C*4;let A=p.clippingState||null;l.value=A,A=u(v,f,S,h);for(let w=0;w!==S;++w)A[w]=t[w];p.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,v){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const p=h+x*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,A=h;S!==x;++S,A+=4)o.copy(d[S]).applyMatrix4(C,a),o.normal.toArray(g,A),g[A+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function gS(n){let e=new WeakMap;function t(o,a){return a===Yl?o.mapping=sr:a===jl&&(o.mapping=rr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yl||a===jl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wx(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class vS extends cp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vs=4,Fd=[.125,.215,.35,.446,.526,.582],us=20,gl=new vS,kd=new nt;let vl=null,_l=0,xl=0,yl=!1;const os=(1+Math.sqrt(5))/2,Os=1/os,Bd=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,os,Os),new V(0,os,-Os),new V(Os,0,os),new V(-Os,0,os),new V(os,Os,0),new V(-os,Os,0)];class zd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){vl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,_l,xl),this._renderer.xr.enabled=yl,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Jo,format:$n,colorSpace:Wi,depthBuffer:!1},s=Hd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_S(r)),this._blurMaterial=xS(r,e,t)}return s}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,i,s){const a=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(kd),u.toneMapping=Bi,u.autoClear=!1;const h=new xi({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new Oe(new Tt,h);let x=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,x=!0):(h.color.copy(kd),x=!0);for(let p=0;p<6;p++){const C=p%3;C===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):C===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Lo(s,C*S,p>2?S:0,S,S),u.setRenderTarget(s),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===sr||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Lo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,gl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bd[(s-1)%Bd.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Oe(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*us-1),x=r/v,g=isFinite(r)?1+Math.floor(u*x):us;g>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${us}`);const p=[];let C=0;for(let b=0;b<us;++b){const P=b/x,y=Math.exp(-P*P/2);p.push(y),b===0?C+=y:b<g&&(C+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/C;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-i;const A=this._sizeLods[s],w=3*A*(s>S-Vs?s-S+Vs:0),E=4*(this._cubeSize-A);Lo(t,w,E,3*A,2*A),l.setRenderTarget(t),l.render(d,gl)}}function _S(n){const e=[],t=[],i=[];let s=n;const r=n-Vs+1+Fd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Vs?l=Fd[o-n+Vs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,v=6,x=3,g=2,p=1,C=new Float32Array(x*v*h),S=new Float32Array(g*v*h),A=new Float32Array(p*v*h);for(let E=0;E<h;E++){const b=E%3*2/3-1,P=E>2?0:-1,y=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];C.set(y,x*v*E),S.set(f,g*v*E);const M=[E,E,E,E,E,E];A.set(M,p*v*E)}const w=new yn;w.setAttribute("position",new Yn(C,x)),w.setAttribute("uv",new Yn(S,g)),w.setAttribute("faceIndex",new Yn(A,p)),e.push(w),s>Vs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hd(n,e,t){const i=new vs(n,e,t);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function xS(n,e,t){const i=new Float32Array(us),s=new V(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Vd(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Gd(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function yS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yl||l===jl,u=l===sr||l===rr;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new zd(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new zd(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function MS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function SS(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const h=d.morphAttributes;for(const v in h){const x=h[v];for(let g=0,p=x.length;g<p;g++)e.update(x[g],n.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,v=d.attributes.position;let x=0;if(h!==null){const C=h.array;x=h.version;for(let S=0,A=C.length;S<A;S+=3){const w=C[S+0],E=C[S+1],b=C[S+2];f.push(w,E,E,b,b,w)}}else if(v!==void 0){const C=v.array;x=v.version;for(let S=0,A=C.length/3-1;S<A;S+=3){const w=S+0,E=S+1,b=S+2;f.push(w,E,E,b,b,w)}}else return;const g=new(tp(f)?ap:op)(f,1);g.version=x;const p=r.get(d);p&&e.remove(p),r.set(d,g)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function bS(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,r,d*o,h),t.update(f,i,h))}function u(d,f,h){if(h===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<h;x++)this.render(d[x]/o,f[x]);else{v.multiDrawElementsWEBGL(i,f,0,r,d,0,h);let x=0;for(let g=0;g<h;g++)x+=f[g];t.update(x,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ES(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function TS(n,e,t){const i=new WeakMap,s=new gt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var h=M;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let A=0;v===!0&&(A=1),x===!0&&(A=2),g===!0&&(A=3);let w=a.attributes.position.count*A,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*E*4*d),P=new ip(b,w,E,d);P.type=Fi,P.needsUpdate=!0;const y=A*4;for(let q=0;q<d;q++){const k=p[q],F=C[q],Q=S[q],ne=w*E*4*q;for(let fe=0;fe<k.count;fe++){const pe=fe*y;v===!0&&(s.fromBufferAttribute(k,fe),b[ne+pe+0]=s.x,b[ne+pe+1]=s.y,b[ne+pe+2]=s.z,b[ne+pe+3]=0),x===!0&&(s.fromBufferAttribute(F,fe),b[ne+pe+4]=s.x,b[ne+pe+5]=s.y,b[ne+pe+6]=s.z,b[ne+pe+7]=0),g===!0&&(s.fromBufferAttribute(Q,fe),b[ne+pe+8]=s.x,b[ne+pe+9]=s.y,b[ne+pe+10]=s.z,b[ne+pe+11]=Q.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new Le(w,E)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function wS(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class fp extends rn{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Js,u!==Js&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Js&&(i=or),i===void 0&&u===qr&&(i=eo),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hp=new rn,pp=new fp(1,1);pp.compareFunction=ep;const mp=new ip,gp=new cx,vp=new up,Wd=[],$d=[],Xd=new Float32Array(16),qd=new Float32Array(9),Yd=new Float32Array(4);function dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Wd[s];if(r===void 0&&(r=new Float32Array(s),Wd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ta(n,e){let t=$d[e];t===void 0&&(t=new Int32Array(e),$d[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function AS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function RS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function LS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Yd.set(i),n.uniformMatrix2fv(this.addr,!1,Yd),It(t,i)}}function DS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;qd.set(i),n.uniformMatrix3fv(this.addr,!1,qd),It(t,i)}}function IS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Xd.set(i),n.uniformMatrix4fv(this.addr,!1,Xd),It(t,i)}}function NS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function US(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function OS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function FS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function kS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function BS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function zS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function VS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?pp:hp;t.setTexture2D(e||r,s)}function GS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gp,s)}function WS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||vp,s)}function $S(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||mp,s)}function XS(n){switch(n){case 5126:return AS;case 35664:return CS;case 35665:return RS;case 35666:return PS;case 35674:return LS;case 35675:return DS;case 35676:return IS;case 5124:case 35670:return NS;case 35667:case 35671:return US;case 35668:case 35672:return OS;case 35669:case 35673:return FS;case 5125:return kS;case 36294:return BS;case 36295:return zS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return GS;case 35680:case 36300:case 36308:case 36293:return WS;case 36289:case 36303:case 36311:case 36292:return $S}}function qS(n,e){n.uniform1fv(this.addr,e)}function YS(n,e){const t=dr(e,this.size,2);n.uniform2fv(this.addr,t)}function jS(n,e){const t=dr(e,this.size,3);n.uniform3fv(this.addr,t)}function KS(n,e){const t=dr(e,this.size,4);n.uniform4fv(this.addr,t)}function JS(n,e){const t=dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ZS(n,e){const t=dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function QS(n,e){const t=dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eb(n,e){n.uniform1iv(this.addr,e)}function tb(n,e){n.uniform2iv(this.addr,e)}function nb(n,e){n.uniform3iv(this.addr,e)}function ib(n,e){n.uniform4iv(this.addr,e)}function sb(n,e){n.uniform1uiv(this.addr,e)}function rb(n,e){n.uniform2uiv(this.addr,e)}function ob(n,e){n.uniform3uiv(this.addr,e)}function ab(n,e){n.uniform4uiv(this.addr,e)}function lb(n,e,t){const i=this.cache,s=e.length,r=Ta(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||hp,r[o])}function cb(n,e,t){const i=this.cache,s=e.length,r=Ta(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gp,r[o])}function ub(n,e,t){const i=this.cache,s=e.length,r=Ta(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||vp,r[o])}function db(n,e,t){const i=this.cache,s=e.length,r=Ta(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||mp,r[o])}function fb(n){switch(n){case 5126:return qS;case 35664:return YS;case 35665:return jS;case 35666:return KS;case 35674:return JS;case 35675:return ZS;case 35676:return QS;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return sb;case 36294:return rb;case 36295:return ob;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return db}}class hb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=XS(t.type)}}class pb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fb(t.type)}}class mb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function jd(n,e){n.seq.push(e),n.map[e.id]=e}function gb(n,e,t){const i=n.name,s=i.length;for(Ml.lastIndex=0;;){const r=Ml.exec(i),o=Ml.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jd(t,c===void 0?new hb(a,n,e):new pb(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new mb(a),jd(t,d)),t=d}}}class Bo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);gb(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Kd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vb=37297;let _b=0;function xb(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function yb(n){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n);let i;switch(e===t?i="":e===ea&&t===Qo?i="LinearDisplayP3ToLinearSRGB":e===Qo&&t===ea&&(i="LinearSRGBToLinearDisplayP3"),n){case Wi:case Ea:return[i,"LinearTransferOETF"];case Fn:case xc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Jd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+xb(n.getShaderSource(e),o)}else return s}function Mb(n,e){const t=yb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Sb(n,e){let t;switch(e){case f0:t="Linear";break;case h0:t="Reinhard";break;case p0:t="OptimizedCineon";break;case m0:t="ACESFilmic";break;case v0:t="AgX";break;case _0:t="Neutral";break;case g0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function Eb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Tb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Er(n){return n!==""}function Zd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(n){return n.replace(wb,Cb)}const Ab=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cb(n,e){let t=Qe[e];if(t===void 0){const i=Ab.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const Rb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(n){return n.replace(Rb,Pb)}function Pb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Db(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case rr:e="ENVMAP_TYPE_CUBE";break;case ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ib(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Nb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _c:e="ENVMAP_BLENDING_MULTIPLY";break;case u0:e="ENVMAP_BLENDING_MIX";break;case d0:e="ENVMAP_BLENDING_ADD";break}return e}function Ub(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ob(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Lb(t),c=Db(t),u=Ib(t),d=Nb(t),f=Ub(t),h=bb(t),v=Eb(r),x=s.createProgram();let g,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Er).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Er).join(`
`),p.length>0&&(p+=`
`)):(g=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),p=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Bi?Sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Mb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),o=Zl(o),o=Zd(o,t),o=Qd(o,t),a=Zl(a),a=Zd(a,t),a=Qd(a,t),o=ef(o),a=ef(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=C+g+o,A=C+p+a,w=Kd(s,s.VERTEX_SHADER,S),E=Kd(s,s.FRAGMENT_SHADER,A);s.attachShader(x,w),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(q){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(w).trim(),Q=s.getShaderInfoLog(E).trim();let ne=!0,fe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,w,E);else{const pe=Jd(s,w,"vertex"),$=Jd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+k+`
`+pe+`
`+$)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||Q==="")&&(fe=!1);fe&&(q.diagnostics={runnable:ne,programLog:k,vertexShader:{log:F,prefix:g},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(w),s.deleteShader(E),P=new Bo(s,x),y=Tb(s,x)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,vb)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_b++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}let Fb=0;class kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Bb(e),t.set(e,i)),i}}class Bb{constructor(e){this.id=Fb++,this.code=e,this.usedTimes=0}}function zb(n,e,t,i,s,r,o){const a=new sp,l=new kb,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,M,q,k,F){const Q=k.fog,ne=F.geometry,fe=y.isMeshStandardMaterial?k.environment:null,pe=(y.isMeshStandardMaterial?t:e).get(y.envMap||fe),$=pe&&pe.mapping===ba?pe.image.height:null,ae=v[y.type];y.precision!==null&&(h=s.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const ce=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,G=ce!==void 0?ce.length:0;let se=0;ne.morphAttributes.position!==void 0&&(se=1),ne.morphAttributes.normal!==void 0&&(se=2),ne.morphAttributes.color!==void 0&&(se=3);let Se,te,ge,le;if(ae){const Bt=zn[ae];Se=Bt.vertexShader,te=Bt.fragmentShader}else Se=y.vertexShader,te=y.fragmentShader,l.update(y),ge=l.getVertexShaderID(y),le=l.getFragmentShaderID(y);const X=n.getRenderTarget(),ve=F.isInstancedMesh===!0,me=F.isBatchedMesh===!0,ye=!!y.map,j=!!y.matcap,L=!!pe,N=!!y.aoMap,Y=!!y.lightMap,Z=!!y.bumpMap,ie=!!y.normalMap,T=!!y.displacementMap,_=!!y.emissiveMap,R=!!y.metalnessMap,D=!!y.roughnessMap,O=y.anisotropy>0,U=y.clearcoat>0,W=y.iridescence>0,z=y.sheen>0,re=y.transmission>0,_e=O&&!!y.anisotropyMap,he=U&&!!y.clearcoatMap,xe=U&&!!y.clearcoatNormalMap,Re=U&&!!y.clearcoatRoughnessMap,we=W&&!!y.iridescenceMap,Ce=W&&!!y.iridescenceThicknessMap,De=z&&!!y.sheenColorMap,Be=z&&!!y.sheenRoughnessMap,Xe=!!y.specularMap,Ie=!!y.specularColorMap,Ve=!!y.specularIntensityMap,Pe=re&&!!y.transmissionMap,B=re&&!!y.thicknessMap,Ee=!!y.gradientMap,be=!!y.alphaMap,Ne=y.alphaTest>0,ke=!!y.alphaHash,at=!!y.extensions;let pt=Bi;y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(pt=n.toneMapping);const vt={shaderID:ae,shaderType:y.type,shaderName:y.name,vertexShader:Se,fragmentShader:te,defines:y.defines,customVertexShaderID:ge,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:me,instancing:ve,instancingColor:ve&&F.instanceColor!==null,instancingMorph:ve&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Wi,alphaToCoverage:!!y.alphaToCoverage,map:ye,matcap:j,envMap:L,envMapMode:L&&pe.mapping,envMapCubeUVHeight:$,aoMap:N,lightMap:Y,bumpMap:Z,normalMap:ie,displacementMap:f&&T,emissiveMap:_,normalMapObjectSpace:ie&&y.normalMapType===D0,normalMapTangentSpace:ie&&y.normalMapType===Qh,metalnessMap:R,roughnessMap:D,anisotropy:O,anisotropyMap:_e,clearcoat:U,clearcoatMap:he,clearcoatNormalMap:xe,clearcoatRoughnessMap:Re,iridescence:W,iridescenceMap:we,iridescenceThicknessMap:Ce,sheen:z,sheenColorMap:De,sheenRoughnessMap:Be,specularMap:Xe,specularColorMap:Ie,specularIntensityMap:Ve,transmission:re,transmissionMap:Pe,thicknessMap:B,gradientMap:Ee,opaque:y.transparent===!1&&y.blending===Ks&&y.alphaToCoverage===!1,alphaMap:be,alphaTest:Ne,alphaHash:ke,combine:y.combine,mapUv:ye&&x(y.map.channel),aoMapUv:N&&x(y.aoMap.channel),lightMapUv:Y&&x(y.lightMap.channel),bumpMapUv:Z&&x(y.bumpMap.channel),normalMapUv:ie&&x(y.normalMap.channel),displacementMapUv:T&&x(y.displacementMap.channel),emissiveMapUv:_&&x(y.emissiveMap.channel),metalnessMapUv:R&&x(y.metalnessMap.channel),roughnessMapUv:D&&x(y.roughnessMap.channel),anisotropyMapUv:_e&&x(y.anisotropyMap.channel),clearcoatMapUv:he&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(y.sheenRoughnessMap.channel),specularMapUv:Xe&&x(y.specularMap.channel),specularColorMapUv:Ie&&x(y.specularColorMap.channel),specularIntensityMapUv:Ve&&x(y.specularIntensityMap.channel),transmissionMapUv:Pe&&x(y.transmissionMap.channel),thicknessMapUv:B&&x(y.thicknessMap.channel),alphaMapUv:be&&x(y.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(ie||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!ne.attributes.uv&&(ye||be),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ye&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vn,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:at&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:at&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const q in y.defines)M.push(q),M.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(C(M,y),S(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function C(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),y.push(a.mask)}function A(y){const M=v[y.type];let q;if(M){const k=zn[M];q=Sx.clone(k.uniforms)}else q=y.uniforms;return q}function w(y,M){let q;for(let k=0,F=u.length;k<F;k++){const Q=u[k];if(Q.cacheKey===M){q=Q,++q.usedTimes;break}}return q===void 0&&(q=new Ob(n,M,y,r),u.push(q)),q}function E(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:A,acquireProgram:w,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:P}}function Hb(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Vb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,h,v,x,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:v,renderOrder:d.renderOrder,z:x,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=x,p.group=g),e++,p}function a(d,f,h,v,x,g){const p=o(d,f,h,v,x,g);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):t.push(p)}function l(d,f,h,v,x,g){const p=o(d,f,h,v,x,g);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||Vb),i.length>1&&i.sort(f||nf),s.length>1&&s.sort(f||nf)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Gb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new sf,n.set(i,[o])):s>=r.length?(o=new sf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Wb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new nt};break;case"SpotLight":t={position:new V,direction:new V,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function $b(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Xb=0;function qb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Yb(n){const e=new Wb,t=$b(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new Mt,o=new Mt;function a(c,u){let d=0,f=0,h=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let v=0,x=0,g=0,p=0,C=0,S=0,A=0,w=0,E=0,b=0,P=0;c.sort(qb);const y=u===!0?Math.PI:1;for(let q=0,k=c.length;q<k;q++){const F=c[q],Q=F.color,ne=F.intensity,fe=F.distance,pe=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=Q.r*ne*y,f+=Q.g*ne*y,h+=Q.b*ne*y;else if(F.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(F.sh.coefficients[$],ne);P++}else if(F.isDirectionalLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*y),F.castShadow){const ae=F.shadow,ce=t.get(F);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,i.directionalShadow[v]=ce,i.directionalShadowMap[v]=pe,i.directionalShadowMatrix[v]=F.shadow.matrix,S++}i.directional[v]=$,v++}else if(F.isSpotLight){const $=e.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(Q).multiplyScalar(ne*y),$.distance=fe,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,i.spot[g]=$;const ae=F.shadow;if(F.map&&(i.spotLightMap[E]=F.map,E++,ae.updateMatrices(F),F.castShadow&&b++),i.spotLightMatrix[g]=ae.matrix,F.castShadow){const ce=t.get(F);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,i.spotShadow[g]=ce,i.spotShadowMap[g]=pe,w++}g++}else if(F.isRectAreaLight){const $=e.get(F);$.color.copy(Q).multiplyScalar(ne),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),i.rectArea[p]=$,p++}else if(F.isPointLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*y),$.distance=F.distance,$.decay=F.decay,F.castShadow){const ae=F.shadow,ce=t.get(F);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,ce.shadowCameraNear=ae.camera.near,ce.shadowCameraFar=ae.camera.far,i.pointShadow[x]=ce,i.pointShadowMap[x]=pe,i.pointShadowMatrix[x]=F.shadow.matrix,A++}i.point[x]=$,x++}else if(F.isHemisphereLight){const $=e.get(F);$.skyColor.copy(F.color).multiplyScalar(ne*y),$.groundColor.copy(F.groundColor).multiplyScalar(ne*y),i.hemi[C]=$,C++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const M=i.hash;(M.directionalLength!==v||M.pointLength!==x||M.spotLength!==g||M.rectAreaLength!==p||M.hemiLength!==C||M.numDirectionalShadows!==S||M.numPointShadows!==A||M.numSpotShadows!==w||M.numSpotMaps!==E||M.numLightProbes!==P)&&(i.directional.length=v,i.spot.length=g,i.rectArea.length=p,i.point.length=x,i.hemi.length=C,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=w+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=P,M.directionalLength=v,M.pointLength=x,M.spotLength=g,M.rectAreaLength=p,M.hemiLength=C,M.numDirectionalShadows=S,M.numPointShadows=A,M.numSpotShadows=w,M.numSpotMaps=E,M.numLightProbes=P,i.version=Xb++)}function l(c,u){let d=0,f=0,h=0,v=0,x=0;const g=u.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){const S=c[p];if(S.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),d++}else if(S.isSpotLight){const A=i.spot[h];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),h++}else if(S.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function rf(n){const e=new Yb(n),t=[],i=[];function s(){t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:s,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function jb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new rf(n),e.set(s,[a])):r>=o.length?(a=new rf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Kb extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jb extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qb=`uniform sampler2D shadow_pass;
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
}`;function eE(n,e,t){let i=new Sc;const s=new Le,r=new Le,o=new gt,a=new Kb({depthPacking:L0}),l=new Jb,c={},u=t.maxTextureSize,d={[Vi]:sn,[sn]:Vi,[Vn]:Vn},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Zb,fragmentShader:Qb}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const v=new yn;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Oe(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let p=this.type;this.render=function(E,b,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),q=n.getActiveMipmapLevel(),k=n.state;k.setBlending(ki),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=p!==ai&&this.type===ai,Q=p===ai&&this.type!==ai;for(let ne=0,fe=E.length;ne<fe;ne++){const pe=E[ne],$=pe.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ae=$.getFrameExtents();if(s.multiply(ae),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ae.x),s.x=r.x*ae.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ae.y),s.y=r.y*ae.y,$.mapSize.y=r.y)),$.map===null||F===!0||Q===!0){const G=this.type!==ai?{minFilter:_n,magFilter:_n}:{};$.map!==null&&$.map.dispose(),$.map=new vs(s.x,s.y,G),$.map.texture.name=pe.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const ce=$.getViewportCount();for(let G=0;G<ce;G++){const se=$.getViewport(G);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),k.viewport(o),$.updateMatrices(pe,G),i=$.getFrustum(),A(b,P,$.camera,pe,this.type)}$.isPointLightShadow!==!0&&this.type===ai&&C($,P),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(y,M,q)};function C(E,b){const P=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vs(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(b,null,P,f,x,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(b,null,P,h,x,null)}function S(E,b,P,y){let M=null;const q=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(q!==void 0)M=q;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=M.uuid,F=b.uuid;let Q=c[k];Q===void 0&&(Q={},c[k]=Q);let ne=Q[F];ne===void 0&&(ne=M.clone(),Q[F]=ne,b.addEventListener("dispose",w)),M=ne}if(M.visible=b.visible,M.wireframe=b.wireframe,y===ai?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:d[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=n.properties.get(M);k.light=P}return M}function A(E,b,P,y,M){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ai)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const F=e.update(E),Q=E.material;if(Array.isArray(Q)){const ne=F.groups;for(let fe=0,pe=ne.length;fe<pe;fe++){const $=ne[fe],ae=Q[$.materialIndex];if(ae&&ae.visible){const ce=S(E,ae,y,M);E.onBeforeShadow(n,E,b,P,F,ce,$),n.renderBufferDirect(P,null,F,ce,E,$),E.onAfterShadow(n,E,b,P,F,ce,$)}}}else if(Q.visible){const ne=S(E,Q,y,M);E.onBeforeShadow(n,E,b,P,F,ne,null),n.renderBufferDirect(P,null,F,ne,E,null),E.onAfterShadow(n,E,b,P,F,ne,null)}}const k=E.children;for(let F=0,Q=k.length;F<Q;F++)A(k[F],b,P,y,M)}function w(E){E.target.removeEventListener("dispose",w);for(const P in c){const y=c[P],M=E.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function tE(n){function e(){let B=!1;const Ee=new gt;let be=null;const Ne=new gt(0,0,0,0);return{setMask:function(ke){be!==ke&&!B&&(n.colorMask(ke,ke,ke,ke),be=ke)},setLocked:function(ke){B=ke},setClear:function(ke,at,pt,vt,Bt){Bt===!0&&(ke*=vt,at*=vt,pt*=vt),Ee.set(ke,at,pt,vt),Ne.equals(Ee)===!1&&(n.clearColor(ke,at,pt,vt),Ne.copy(Ee))},reset:function(){B=!1,be=null,Ne.set(-1,0,0,0)}}}function t(){let B=!1,Ee=null,be=null,Ne=null;return{setTest:function(ke){ke?le(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(ke){Ee!==ke&&!B&&(n.depthMask(ke),Ee=ke)},setFunc:function(ke){if(be!==ke){switch(ke){case i0:n.depthFunc(n.NEVER);break;case s0:n.depthFunc(n.ALWAYS);break;case r0:n.depthFunc(n.LESS);break;case Ko:n.depthFunc(n.LEQUAL);break;case o0:n.depthFunc(n.EQUAL);break;case a0:n.depthFunc(n.GEQUAL);break;case l0:n.depthFunc(n.GREATER);break;case c0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=ke}},setLocked:function(ke){B=ke},setClear:function(ke){Ne!==ke&&(n.clearDepth(ke),Ne=ke)},reset:function(){B=!1,Ee=null,be=null,Ne=null}}}function i(){let B=!1,Ee=null,be=null,Ne=null,ke=null,at=null,pt=null,vt=null,Bt=null;return{setTest:function(ft){B||(ft?le(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(ft){Ee!==ft&&!B&&(n.stencilMask(ft),Ee=ft)},setFunc:function(ft,Dn,In){(be!==ft||Ne!==Dn||ke!==In)&&(n.stencilFunc(ft,Dn,In),be=ft,Ne=Dn,ke=In)},setOp:function(ft,Dn,In){(at!==ft||pt!==Dn||vt!==In)&&(n.stencilOp(ft,Dn,In),at=ft,pt=Dn,vt=In)},setLocked:function(ft){B=ft},setClear:function(ft){Bt!==ft&&(n.clearStencil(ft),Bt=ft)},reset:function(){B=!1,Ee=null,be=null,Ne=null,ke=null,at=null,pt=null,vt=null,Bt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],h=null,v=!1,x=null,g=null,p=null,C=null,S=null,A=null,w=null,E=new nt(0,0,0),b=0,P=!1,y=null,M=null,q=null,k=null,F=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,fe=0;const pe=n.getParameter(n.VERSION);pe.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(pe)[1]),ne=fe>=1):pe.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),ne=fe>=2);let $=null,ae={};const ce=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),se=new gt().fromArray(ce),Se=new gt().fromArray(G);function te(B,Ee,be,Ne){const ke=new Uint8Array(4),at=n.createTexture();n.bindTexture(B,at),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pt=0;pt<be;pt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Ee+pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return at}const ge={};ge[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),le(n.DEPTH_TEST),r.setFunc(Ko),Z(!1),ie(Bu),le(n.CULL_FACE),N(ki);function le(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function X(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function ve(B,Ee){return u[B]!==Ee?(n.bindFramebuffer(B,Ee),u[B]=Ee,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ee),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function me(B,Ee){let be=f,Ne=!1;if(B){be=d.get(Ee),be===void 0&&(be=[],d.set(Ee,be));const ke=B.textures;if(be.length!==ke.length||be[0]!==n.COLOR_ATTACHMENT0){for(let at=0,pt=ke.length;at<pt;at++)be[at]=n.COLOR_ATTACHMENT0+at;be.length=ke.length,Ne=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(be)}function ye(B){return h!==B?(n.useProgram(B),h=B,!0):!1}const j={[cs]:n.FUNC_ADD,[z_]:n.FUNC_SUBTRACT,[H_]:n.FUNC_REVERSE_SUBTRACT};j[V_]=n.MIN,j[G_]=n.MAX;const L={[W_]:n.ZERO,[$_]:n.ONE,[X_]:n.SRC_COLOR,[Xl]:n.SRC_ALPHA,[Z_]:n.SRC_ALPHA_SATURATE,[K_]:n.DST_COLOR,[Y_]:n.DST_ALPHA,[q_]:n.ONE_MINUS_SRC_COLOR,[ql]:n.ONE_MINUS_SRC_ALPHA,[J_]:n.ONE_MINUS_DST_COLOR,[j_]:n.ONE_MINUS_DST_ALPHA,[Q_]:n.CONSTANT_COLOR,[e0]:n.ONE_MINUS_CONSTANT_COLOR,[t0]:n.CONSTANT_ALPHA,[n0]:n.ONE_MINUS_CONSTANT_ALPHA};function N(B,Ee,be,Ne,ke,at,pt,vt,Bt,ft){if(B===ki){v===!0&&(X(n.BLEND),v=!1);return}if(v===!1&&(le(n.BLEND),v=!0),B!==B_){if(B!==x||ft!==P){if((g!==cs||S!==cs)&&(n.blendEquation(n.FUNC_ADD),g=cs,S=cs),ft)switch(B){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zu:n.blendFunc(n.ONE,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,C=null,A=null,w=null,E.set(0,0,0),b=0,x=B,P=ft}return}ke=ke||Ee,at=at||be,pt=pt||Ne,(Ee!==g||ke!==S)&&(n.blendEquationSeparate(j[Ee],j[ke]),g=Ee,S=ke),(be!==p||Ne!==C||at!==A||pt!==w)&&(n.blendFuncSeparate(L[be],L[Ne],L[at],L[pt]),p=be,C=Ne,A=at,w=pt),(vt.equals(E)===!1||Bt!==b)&&(n.blendColor(vt.r,vt.g,vt.b,Bt),E.copy(vt),b=Bt),x=B,P=!1}function Y(B,Ee){B.side===Vn?X(n.CULL_FACE):le(n.CULL_FACE);let be=B.side===sn;Ee&&(be=!be),Z(be),B.blending===Ks&&B.transparent===!1?N(ki):N(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const Ne=B.stencilWrite;o.setTest(Ne),Ne&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),_(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(B){y!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),y=B)}function ie(B){B!==F_?(le(n.CULL_FACE),B!==M&&(B===Bu?n.cullFace(n.BACK):B===k_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),M=B}function T(B){B!==q&&(ne&&n.lineWidth(B),q=B)}function _(B,Ee,be){B?(le(n.POLYGON_OFFSET_FILL),(k!==Ee||F!==be)&&(n.polygonOffset(Ee,be),k=Ee,F=be)):X(n.POLYGON_OFFSET_FILL)}function R(B){B?le(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function D(B){B===void 0&&(B=n.TEXTURE0+Q-1),$!==B&&(n.activeTexture(B),$=B)}function O(B,Ee,be){be===void 0&&($===null?be=n.TEXTURE0+Q-1:be=$);let Ne=ae[be];Ne===void 0&&(Ne={type:void 0,texture:void 0},ae[be]=Ne),(Ne.type!==B||Ne.texture!==Ee)&&($!==be&&(n.activeTexture(be),$=be),n.bindTexture(B,Ee||ge[B]),Ne.type=B,Ne.texture=Ee)}function U(){const B=ae[$];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(B){se.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),se.copy(B))}function Xe(B){Se.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Se.copy(B))}function Ie(B,Ee){let be=l.get(Ee);be===void 0&&(be=new WeakMap,l.set(Ee,be));let Ne=be.get(B);Ne===void 0&&(Ne=n.getUniformBlockIndex(Ee,B.name),be.set(B,Ne))}function Ve(B,Ee){const Ne=l.get(Ee).get(B);a.get(Ee)!==Ne&&(n.uniformBlockBinding(Ee,Ne,B.__bindingPointIndex),a.set(Ee,Ne))}function Pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},$=null,ae={},u={},d=new WeakMap,f=[],h=null,v=!1,x=null,g=null,p=null,C=null,S=null,A=null,w=null,E=new nt(0,0,0),b=0,P=!1,y=null,M=null,q=null,k=null,F=null,se.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:le,disable:X,bindFramebuffer:ve,drawBuffers:me,useProgram:ye,setBlending:N,setMaterial:Y,setFlipSided:Z,setCullFace:ie,setLineWidth:T,setPolygonOffset:_,setScissorTest:R,activeTexture:D,bindTexture:O,unbindTexture:U,compressedTexImage2D:W,compressedTexImage3D:z,texImage2D:Ce,texImage3D:De,updateUBOMapping:Ie,uniformBlockBinding:Ve,texStorage2D:Re,texStorage3D:we,texSubImage2D:re,texSubImage3D:_e,compressedTexSubImage2D:he,compressedTexSubImage3D:xe,scissor:Be,viewport:Xe,reset:Pe}}function nE(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,_){return h?new OffscreenCanvas(T,_):na("canvas")}function x(T,_,R){let D=1;const O=ie(T);if((O.width>R||O.height>R)&&(D=R/Math.max(O.width,O.height)),D<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const U=Math.floor(D*O.width),W=Math.floor(D*O.height);d===void 0&&(d=v(U,W));const z=_?v(U,W):d;return z.width=U,z.height=W,z.getContext("2d").drawImage(T,0,0,U,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+U+"x"+W+")."),z}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),T;return T}function g(T){return T.generateMipmaps&&T.minFilter!==_n&&T.minFilter!==Tn}function p(T){n.generateMipmap(T)}function C(T,_,R,D,O=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let U=_;if(_===n.RED&&(R===n.FLOAT&&(U=n.R32F),R===n.HALF_FLOAT&&(U=n.R16F),R===n.UNSIGNED_BYTE&&(U=n.R8)),_===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(U=n.R8UI),R===n.UNSIGNED_SHORT&&(U=n.R16UI),R===n.UNSIGNED_INT&&(U=n.R32UI),R===n.BYTE&&(U=n.R8I),R===n.SHORT&&(U=n.R16I),R===n.INT&&(U=n.R32I)),_===n.RG&&(R===n.FLOAT&&(U=n.RG32F),R===n.HALF_FLOAT&&(U=n.RG16F),R===n.UNSIGNED_BYTE&&(U=n.RG8)),_===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(U=n.RG8UI),R===n.UNSIGNED_SHORT&&(U=n.RG16UI),R===n.UNSIGNED_INT&&(U=n.RG32UI),R===n.BYTE&&(U=n.RG8I),R===n.SHORT&&(U=n.RG16I),R===n.INT&&(U=n.RG32I)),_===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(U=n.RGB9_E5),_===n.RGBA){const W=O?Zo:ct.getTransfer(D);R===n.FLOAT&&(U=n.RGBA32F),R===n.HALF_FLOAT&&(U=n.RGBA16F),R===n.UNSIGNED_BYTE&&(U=W===ht?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(U=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(U=n.RGB5_A1)}return(U===n.R16F||U===n.R32F||U===n.RG16F||U===n.RG32F||U===n.RGBA16F||U===n.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function S(T,_){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==_n&&T.minFilter!==Tn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),E(_),_.isVideoTexture&&u.delete(_)}function w(T){const _=T.target;_.removeEventListener("dispose",w),P(_)}function E(T){const _=i.get(T);if(_.__webglInit===void 0)return;const R=T.source,D=f.get(R);if(D){const O=D[_.__cacheKey];O.usedTimes--,O.usedTimes===0&&b(T),Object.keys(D).length===0&&f.delete(R)}i.remove(T)}function b(T){const _=i.get(T);n.deleteTexture(_.__webglTexture);const R=T.source,D=f.get(R);delete D[_.__cacheKey],o.memory.textures--}function P(T){const _=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(_.__webglFramebuffer[D]))for(let O=0;O<_.__webglFramebuffer[D].length;O++)n.deleteFramebuffer(_.__webglFramebuffer[D][O]);else n.deleteFramebuffer(_.__webglFramebuffer[D]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[D])}else{if(Array.isArray(_.__webglFramebuffer))for(let D=0;D<_.__webglFramebuffer.length;D++)n.deleteFramebuffer(_.__webglFramebuffer[D]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let D=0;D<_.__webglColorRenderbuffer.length;D++)_.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[D]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const R=T.textures;for(let D=0,O=R.length;D<O;D++){const U=i.get(R[D]);U.__webglTexture&&(n.deleteTexture(U.__webglTexture),o.memory.textures--),i.remove(R[D])}i.remove(T)}let y=0;function M(){y=0}function q(){const T=y;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),y+=1,T}function k(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function F(T,_){const R=i.get(T);if(T.isVideoTexture&&Y(T),T.isRenderTargetTexture===!1&&T.version>0&&R.__version!==T.version){const D=T.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(R,T,_);return}}t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+_)}function Q(T,_){const R=i.get(T);if(T.version>0&&R.__version!==T.version){se(R,T,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+_)}function ne(T,_){const R=i.get(T);if(T.version>0&&R.__version!==T.version){se(R,T,_);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+_)}function fe(T,_){const R=i.get(T);if(T.version>0&&R.__version!==T.version){Se(R,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+_)}const pe={[Kl]:n.REPEAT,[fs]:n.CLAMP_TO_EDGE,[Jl]:n.MIRRORED_REPEAT},$={[_n]:n.NEAREST,[x0]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[Xa]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},ae={[I0]:n.NEVER,[B0]:n.ALWAYS,[N0]:n.LESS,[ep]:n.LEQUAL,[U0]:n.EQUAL,[k0]:n.GEQUAL,[O0]:n.GREATER,[F0]:n.NOTEQUAL};function ce(T,_){if(_.type===Fi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Tn||_.magFilter===Xa||_.magFilter===co||_.magFilter===hs||_.minFilter===Tn||_.minFilter===Xa||_.minFilter===co||_.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,pe[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,pe[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,pe[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,$[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,$[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===_n||_.minFilter!==co&&_.minFilter!==hs||_.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function G(T,_){let R=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const D=_.source;let O=f.get(D);O===void 0&&(O={},f.set(D,O));const U=k(_);if(U!==T.__cacheKey){O[U]===void 0&&(O[U]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),O[U].usedTimes++;const W=O[T.__cacheKey];W!==void 0&&(O[T.__cacheKey].usedTimes--,W.usedTimes===0&&b(_)),T.__cacheKey=U,T.__webglTexture=O[U].texture}return R}function se(T,_,R){let D=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(D=n.TEXTURE_3D);const O=G(T,_),U=_.source;t.bindTexture(D,T.__webglTexture,n.TEXTURE0+R);const W=i.get(U);if(U.version!==W.__version||O===!0){t.activeTexture(n.TEXTURE0+R);const z=ct.getPrimaries(ct.workingColorSpace),re=_.colorSpace===Oi?null:ct.getPrimaries(_.colorSpace),_e=_.colorSpace===Oi||z===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let he=x(_.image,!1,s.maxTextureSize);he=Z(_,he);const xe=r.convert(_.format,_.colorSpace),Re=r.convert(_.type);let we=C(_.internalFormat,xe,Re,_.colorSpace,_.isVideoTexture);ce(D,_);let Ce;const De=_.mipmaps,Be=_.isVideoTexture!==!0&&we!==Zh,Xe=W.__version===void 0||O===!0,Ie=U.dataReady,Ve=S(_,he);if(_.isDepthTexture)we=n.DEPTH_COMPONENT16,_.type===Fi?we=n.DEPTH_COMPONENT32F:_.type===or?we=n.DEPTH_COMPONENT24:_.type===eo&&(we=n.DEPTH24_STENCIL8),Xe&&(Be?t.texStorage2D(n.TEXTURE_2D,1,we,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,we,he.width,he.height,0,xe,Re,null));else if(_.isDataTexture)if(De.length>0){Be&&Xe&&t.texStorage2D(n.TEXTURE_2D,Ve,we,De[0].width,De[0].height);for(let Pe=0,B=De.length;Pe<B;Pe++)Ce=De[Pe],Be?Ie&&t.texSubImage2D(n.TEXTURE_2D,Pe,0,0,Ce.width,Ce.height,xe,Re,Ce.data):t.texImage2D(n.TEXTURE_2D,Pe,we,Ce.width,Ce.height,0,xe,Re,Ce.data);_.generateMipmaps=!1}else Be?(Xe&&t.texStorage2D(n.TEXTURE_2D,Ve,we,he.width,he.height),Ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,xe,Re,he.data)):t.texImage2D(n.TEXTURE_2D,0,we,he.width,he.height,0,xe,Re,he.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,we,De[0].width,De[0].height,he.depth);for(let Pe=0,B=De.length;Pe<B;Pe++)Ce=De[Pe],_.format!==$n?xe!==null?Be?Ie&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Pe,0,0,0,Ce.width,Ce.height,he.depth,xe,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Pe,we,Ce.width,Ce.height,he.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?Ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Pe,0,0,0,Ce.width,Ce.height,he.depth,xe,Re,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Pe,we,Ce.width,Ce.height,he.depth,0,xe,Re,Ce.data)}else{Be&&Xe&&t.texStorage2D(n.TEXTURE_2D,Ve,we,De[0].width,De[0].height);for(let Pe=0,B=De.length;Pe<B;Pe++)Ce=De[Pe],_.format!==$n?xe!==null?Be?Ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,Pe,0,0,Ce.width,Ce.height,xe,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,Pe,we,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?Ie&&t.texSubImage2D(n.TEXTURE_2D,Pe,0,0,Ce.width,Ce.height,xe,Re,Ce.data):t.texImage2D(n.TEXTURE_2D,Pe,we,Ce.width,Ce.height,0,xe,Re,Ce.data)}else if(_.isDataArrayTexture)Be?(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,we,he.width,he.height,he.depth),Ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,xe,Re,he.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,he.width,he.height,he.depth,0,xe,Re,he.data);else if(_.isData3DTexture)Be?(Xe&&t.texStorage3D(n.TEXTURE_3D,Ve,we,he.width,he.height,he.depth),Ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,xe,Re,he.data)):t.texImage3D(n.TEXTURE_3D,0,we,he.width,he.height,he.depth,0,xe,Re,he.data);else if(_.isFramebufferTexture){if(Xe)if(Be)t.texStorage2D(n.TEXTURE_2D,Ve,we,he.width,he.height);else{let Pe=he.width,B=he.height;for(let Ee=0;Ee<Ve;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,we,Pe,B,0,xe,Re,null),Pe>>=1,B>>=1}}else if(De.length>0){if(Be&&Xe){const Pe=ie(De[0]);t.texStorage2D(n.TEXTURE_2D,Ve,we,Pe.width,Pe.height)}for(let Pe=0,B=De.length;Pe<B;Pe++)Ce=De[Pe],Be?Ie&&t.texSubImage2D(n.TEXTURE_2D,Pe,0,0,xe,Re,Ce):t.texImage2D(n.TEXTURE_2D,Pe,we,xe,Re,Ce);_.generateMipmaps=!1}else if(Be){if(Xe){const Pe=ie(he);t.texStorage2D(n.TEXTURE_2D,Ve,we,Pe.width,Pe.height)}Ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Re,he)}else t.texImage2D(n.TEXTURE_2D,0,we,xe,Re,he);g(_)&&p(D),W.__version=U.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Se(T,_,R){if(_.image.length!==6)return;const D=G(T,_),O=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+R);const U=i.get(O);if(O.version!==U.__version||D===!0){t.activeTexture(n.TEXTURE0+R);const W=ct.getPrimaries(ct.workingColorSpace),z=_.colorSpace===Oi?null:ct.getPrimaries(_.colorSpace),re=_.colorSpace===Oi||W===z?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const _e=_.isCompressedTexture||_.image[0].isCompressedTexture,he=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let B=0;B<6;B++)!_e&&!he?xe[B]=x(_.image[B],!0,s.maxCubemapSize):xe[B]=he?_.image[B].image:_.image[B],xe[B]=Z(_,xe[B]);const Re=xe[0],we=r.convert(_.format,_.colorSpace),Ce=r.convert(_.type),De=C(_.internalFormat,we,Ce,_.colorSpace),Be=_.isVideoTexture!==!0,Xe=U.__version===void 0||D===!0,Ie=O.dataReady;let Ve=S(_,Re);ce(n.TEXTURE_CUBE_MAP,_);let Pe;if(_e){Be&&Xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,De,Re.width,Re.height);for(let B=0;B<6;B++){Pe=xe[B].mipmaps;for(let Ee=0;Ee<Pe.length;Ee++){const be=Pe[Ee];_.format!==$n?we!==null?Be?Ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee,De,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee,0,0,be.width,be.height,we,Ce,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee,De,be.width,be.height,0,we,Ce,be.data)}}}else{if(Pe=_.mipmaps,Be&&Xe){Pe.length>0&&Ve++;const B=ie(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,De,B.width,B.height)}for(let B=0;B<6;B++)if(he){Be?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,xe[B].width,xe[B].height,we,Ce,xe[B].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,De,xe[B].width,xe[B].height,0,we,Ce,xe[B].data);for(let Ee=0;Ee<Pe.length;Ee++){const Ne=Pe[Ee].image[B].image;Be?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee+1,0,0,Ne.width,Ne.height,we,Ce,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee+1,De,Ne.width,Ne.height,0,we,Ce,Ne.data)}}else{Be?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,we,Ce,xe[B]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,De,we,Ce,xe[B]);for(let Ee=0;Ee<Pe.length;Ee++){const be=Pe[Ee];Be?Ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee+1,0,0,we,Ce,be.image[B]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee+1,De,we,Ce,be.image[B])}}}g(_)&&p(n.TEXTURE_CUBE_MAP),U.__version=O.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function te(T,_,R,D,O,U){const W=r.convert(R.format,R.colorSpace),z=r.convert(R.type),re=C(R.internalFormat,W,z,R.colorSpace);if(!i.get(_).__hasExternalTextures){const he=Math.max(1,_.width>>U),xe=Math.max(1,_.height>>U);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,U,re,he,xe,_.depth,0,W,z,null):t.texImage2D(O,U,re,he,xe,0,W,z,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),N(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,O,i.get(R).__webglTexture,0,L(_)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,O,i.get(R).__webglTexture,U),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(T,_,R){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer&&!_.stencilBuffer){let D=n.DEPTH_COMPONENT24;if(R||N(_)){const O=_.depthTexture;O&&O.isDepthTexture&&(O.type===Fi?D=n.DEPTH_COMPONENT32F:O.type===or&&(D=n.DEPTH_COMPONENT24));const U=L(_);N(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U,D,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,U,D,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,D,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(_.depthBuffer&&_.stencilBuffer){const D=L(_);R&&N(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,D,n.DEPTH24_STENCIL8,_.width,_.height):N(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const D=_.textures;for(let O=0;O<D.length;O++){const U=D[O],W=r.convert(U.format,U.colorSpace),z=r.convert(U.type),re=C(U.internalFormat,W,z,U.colorSpace),_e=L(_);R&&N(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,re,_.width,_.height):N(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,re,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,re,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),F(_.depthTexture,0);const D=i.get(_.depthTexture).__webglTexture,O=L(_);if(_.depthTexture.format===Js)N(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0);else if(_.depthTexture.format===qr)N(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function X(T){const _=i.get(T),R=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");le(_.__webglFramebuffer,T)}else if(R){_.__webglDepthbuffer=[];for(let D=0;D<6;D++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[D]),_.__webglDepthbuffer[D]=n.createRenderbuffer(),ge(_.__webglDepthbuffer[D],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),ge(_.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(T,_,R){const D=i.get(T);_!==void 0&&te(D.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&X(T)}function me(T){const _=T.texture,R=i.get(T),D=i.get(_);T.addEventListener("dispose",w);const O=T.textures,U=T.isWebGLCubeRenderTarget===!0,W=O.length>1;if(W||(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=_.version,o.memory.textures++),U){R.__webglFramebuffer=[];for(let z=0;z<6;z++)if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer[z]=[];for(let re=0;re<_.mipmaps.length;re++)R.__webglFramebuffer[z][re]=n.createFramebuffer()}else R.__webglFramebuffer[z]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer=[];for(let z=0;z<_.mipmaps.length;z++)R.__webglFramebuffer[z]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(W)for(let z=0,re=O.length;z<re;z++){const _e=i.get(O[z]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&N(T)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let z=0;z<O.length;z++){const re=O[z];R.__webglColorRenderbuffer[z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[z]);const _e=r.convert(re.format,re.colorSpace),he=r.convert(re.type),xe=C(re.internalFormat,_e,he,re.colorSpace,T.isXRRenderTarget===!0),Re=L(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,xe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+z,n.RENDERBUFFER,R.__webglColorRenderbuffer[z])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(R.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(U){t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),ce(n.TEXTURE_CUBE_MAP,_);for(let z=0;z<6;z++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)te(R.__webglFramebuffer[z][re],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,re);else te(R.__webglFramebuffer[z],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);g(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(W){for(let z=0,re=O.length;z<re;z++){const _e=O[z],he=i.get(_e);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),ce(n.TEXTURE_2D,_e),te(R.__webglFramebuffer,T,_e,n.COLOR_ATTACHMENT0+z,n.TEXTURE_2D,0),g(_e)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let z=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(z=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(z,D.__webglTexture),ce(z,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)te(R.__webglFramebuffer[re],T,_,n.COLOR_ATTACHMENT0,z,re);else te(R.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,z,0);g(_)&&p(z),t.unbindTexture()}T.depthBuffer&&X(T)}function ye(T){const _=T.textures;for(let R=0,D=_.length;R<D;R++){const O=_[R];if(g(O)){const U=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,W=i.get(O).__webglTexture;t.bindTexture(U,W),p(U),t.unbindTexture()}}}function j(T){if(T.samples>0&&N(T)===!1){const _=T.textures,R=T.width,D=T.height;let O=n.COLOR_BUFFER_BIT;const U=[],W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=i.get(T),re=_.length>1;if(re)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,z.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,z.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){U.push(n.COLOR_ATTACHMENT0+_e),T.depthBuffer&&U.push(W);const he=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(he===!1&&(T.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&z.__isTransmissionRenderTarget!==!0&&(O|=n.STENCIL_BUFFER_BIT)),re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,z.__webglColorRenderbuffer[_e]),he===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[W]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[W])),re){const xe=i.get(_[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,R,D,0,0,R,D,O,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,z.__webglColorRenderbuffer[_e]);const he=i.get(_[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,z.__webglMultisampledFramebuffer)}}function L(T){return Math.min(s.maxSamples,T.samples)}function N(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Y(T){const _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function Z(T,_){const R=T.colorSpace,D=T.format,O=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||R!==Wi&&R!==Oi&&(ct.getTransfer(R)===ht?(D!==$n||O!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),_}function ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=M,this.setTexture2D=F,this.setTexture2DArray=Q,this.setTexture3D=ne,this.setTextureCube=fe,this.rebindTextures=ve,this.setupRenderTarget=me,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=te,this.useMultisampledRTT=N}function iE(n,e){function t(i,s=Oi){let r;const o=ct.getTransfer(s);if(i===zi)return n.UNSIGNED_BYTE;if(i===qh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===S0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===y0)return n.BYTE;if(i===M0)return n.SHORT;if(i===$h)return n.UNSIGNED_SHORT;if(i===Xh)return n.INT;if(i===or)return n.UNSIGNED_INT;if(i===Fi)return n.FLOAT;if(i===Jo)return n.HALF_FLOAT;if(i===b0)return n.ALPHA;if(i===E0)return n.RGB;if(i===$n)return n.RGBA;if(i===T0)return n.LUMINANCE;if(i===w0)return n.LUMINANCE_ALPHA;if(i===Js)return n.DEPTH_COMPONENT;if(i===qr)return n.DEPTH_STENCIL;if(i===A0)return n.RED;if(i===jh)return n.RED_INTEGER;if(i===C0)return n.RG;if(i===Kh)return n.RG_INTEGER;if(i===Jh)return n.RGBA_INTEGER;if(i===qa||i===Ya||i===ja||i===Ka)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gu||i===Wu||i===$u||i===Xu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Gu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$u)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zh)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===qu||i===Yu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qu)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yu)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ju||i===Ku||i===Ju||i===Zu||i===Qu||i===ed||i===td||i===nd||i===id||i===sd||i===rd||i===od||i===ad||i===ld)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ju)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ku)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ju)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zu)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qu)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ed)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===td)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nd)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===id)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sd)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rd)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===od)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ad)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ld)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ja||i===cd||i===ud)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ja)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ud)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===R0||i===dd||i===fd||i===hd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class sE extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hi extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rE={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,v=.005;c.inputState.pinching&&f>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const oE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aE=`
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

}`;class lE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new rn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new Gi({vertexShader:oE,fragmentShader:aE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oe(new pi(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class cE extends cr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,v=null;const x=new lE,g=t.getContextAttributes();let p=null,C=null;const S=[],A=[],w=new Le;let E=null;const b=new Wt;b.layers.enable(1),b.viewport=new gt;const P=new Wt;P.layers.enable(2),P.viewport=new gt;const y=[b,P],M=new sE;M.layers.enable(1),M.layers.enable(2);let q=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=S[te];return ge===void 0&&(ge=new Sl,S[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=S[te];return ge===void 0&&(ge=new Sl,S[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=S[te];return ge===void 0&&(ge=new Sl,S[te]=ge),ge.getHandSpace()};function F(te){const ge=A.indexOf(te.inputSource);if(ge===-1)return;const le=S[ge];le!==void 0&&(le.update(te.inputSource,te.frame,c||o),le.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ne);for(let te=0;te<S.length;te++){const ge=A[te];ge!==null&&(A[te]=null,S[te].disconnect(ge))}q=null,k=null,x.reset(),e.setRenderTarget(p),h=null,f=null,d=null,s=null,C=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0){const ge={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),C=new vs(h.framebufferWidth,h.framebufferHeight,{format:$n,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ge=null,le=null,X=null;g.depth&&(X=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=g.stencil?qr:Js,le=g.stencil?eo:or);const ve={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new vs(f.textureWidth,f.textureHeight,{format:$n,type:zi,depthTexture:new fp(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const me=e.properties.get(C);me.__ignoreDepthValues=f.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Se.setContext(s),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function ne(te){for(let ge=0;ge<te.removed.length;ge++){const le=te.removed[ge],X=A.indexOf(le);X>=0&&(A[X]=null,S[X].disconnect(le))}for(let ge=0;ge<te.added.length;ge++){const le=te.added[ge];let X=A.indexOf(le);if(X===-1){for(let me=0;me<S.length;me++)if(me>=A.length){A.push(le),X=me;break}else if(A[me]===null){A[me]=le,X=me;break}if(X===-1)break}const ve=S[X];ve&&ve.connect(le)}}const fe=new V,pe=new V;function $(te,ge,le){fe.setFromMatrixPosition(ge.matrixWorld),pe.setFromMatrixPosition(le.matrixWorld);const X=fe.distanceTo(pe),ve=ge.projectionMatrix.elements,me=le.projectionMatrix.elements,ye=ve[14]/(ve[10]-1),j=ve[14]/(ve[10]+1),L=(ve[9]+1)/ve[5],N=(ve[9]-1)/ve[5],Y=(ve[8]-1)/ve[0],Z=(me[8]+1)/me[0],ie=ye*Y,T=ye*Z,_=X/(-Y+Z),R=_*-Y;ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(R),te.translateZ(_),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const D=ye+_,O=j+_,U=ie-R,W=T+(X-R),z=L*j/O*D,re=N*j/O*D;te.projectionMatrix.makePerspective(U,W,z,re,D,O),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ae(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;x.texture!==null&&(te.near=x.depthNear,te.far=x.depthFar),M.near=P.near=b.near=te.near,M.far=P.far=b.far=te.far,(q!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),q=M.near,k=M.far,b.near=q,b.far=k,P.near=q,P.far=k,b.updateProjectionMatrix(),P.updateProjectionMatrix(),te.updateProjectionMatrix());const ge=te.parent,le=M.cameras;ae(M,ge);for(let X=0;X<le.length;X++)ae(le[X],ge);le.length===2?$(M,b,P):M.projectionMatrix.copy(b.projectionMatrix),ce(te,M,ge)};function ce(te,ge,le){le===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(le.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ar*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null};let G=null;function se(te,ge){if(u=ge.getViewerPose(c||o),v=ge,u!==null){const le=u.views;h!==null&&(e.setRenderTargetFramebuffer(C,h.framebuffer),e.setRenderTarget(C));let X=!1;le.length!==M.cameras.length&&(M.cameras.length=0,X=!0);for(let me=0;me<le.length;me++){const ye=le[me];let j=null;if(h!==null)j=h.getViewport(ye);else{const N=d.getViewSubImage(f,ye);j=N.viewport,me===0&&(e.setRenderTargetTextures(C,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(C))}let L=y[me];L===void 0&&(L=new Wt,L.layers.enable(me),L.viewport=new gt,y[me]=L),L.matrix.fromArray(ye.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(ye.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(j.x,j.y,j.width,j.height),me===0&&(M.matrix.copy(L.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),X===!0&&M.cameras.push(L)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const me=d.getDepthInformation(le[0]);me&&me.isValid&&me.texture&&x.init(e,me,s.renderState)}}for(let le=0;le<S.length;le++){const X=A[le],ve=S[le];X!==null&&ve!==void 0&&ve.update(X,ge,c||o)}x.render(e,M),G&&G(te,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),v=null}const Se=new dp;Se.setAnimationLoop(se),this.setAnimationLoop=function(te){G=te},this.dispose=function(){}}}const ns=new Kn,uE=new Mt;function dE(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,lp(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,C,S,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,A)):p.isMeshMatcapMaterial?(r(g,p),v(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,C,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===sn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===sn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const C=e.get(p),S=C.envMap,A=C.envMapRotation;if(S&&(g.envMap.value=S,ns.copy(A),ns.x*=-1,ns.y*=-1,ns.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),g.envMapRotation.value.setFromMatrix4(uE.makeRotationFromEuler(ns)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const w=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*w,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,C,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*C,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,C){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const C=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fE(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,S){const A=S.program;i.uniformBlockBinding(C,A)}function c(C,S){let A=s[C.id];A===void 0&&(v(C),A=u(C),s[C.id]=A,C.addEventListener("dispose",g));const w=S.program;i.updateUBOMapping(C,w);const E=e.render.frame;r[C.id]!==E&&(f(C),r[C.id]=E)}function u(C){const S=d();C.__bindingPointIndex=S;const A=n.createBuffer(),w=C.__size,E=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,w,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,A),A}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const S=s[C.id],A=C.uniforms,w=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,b=A.length;E<b;E++){const P=Array.isArray(A[E])?A[E]:[A[E]];for(let y=0,M=P.length;y<M;y++){const q=P[y];if(h(q,E,y,w)===!0){const k=q.__offset,F=Array.isArray(q.value)?q.value:[q.value];let Q=0;for(let ne=0;ne<F.length;ne++){const fe=F[ne],pe=x(fe);typeof fe=="number"||typeof fe=="boolean"?(q.__data[0]=fe,n.bufferSubData(n.UNIFORM_BUFFER,k+Q,q.__data)):fe.isMatrix3?(q.__data[0]=fe.elements[0],q.__data[1]=fe.elements[1],q.__data[2]=fe.elements[2],q.__data[3]=0,q.__data[4]=fe.elements[3],q.__data[5]=fe.elements[4],q.__data[6]=fe.elements[5],q.__data[7]=0,q.__data[8]=fe.elements[6],q.__data[9]=fe.elements[7],q.__data[10]=fe.elements[8],q.__data[11]=0):(fe.toArray(q.__data,Q),Q+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,q.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(C,S,A,w){const E=C.value,b=S+"_"+A;if(w[b]===void 0)return typeof E=="number"||typeof E=="boolean"?w[b]=E:w[b]=E.clone(),!0;{const P=w[b];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return w[b]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function v(C){const S=C.uniforms;let A=0;const w=16;for(let b=0,P=S.length;b<P;b++){const y=Array.isArray(S[b])?S[b]:[S[b]];for(let M=0,q=y.length;M<q;M++){const k=y[M],F=Array.isArray(k.value)?k.value:[k.value];for(let Q=0,ne=F.length;Q<ne;Q++){const fe=F[Q],pe=x(fe),$=A%w;$!==0&&w-$<pe.boundary&&(A+=w-$),k.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=A,A+=pe.storage}}}const E=A%w;return E>0&&(A+=w-E),C.__size=A,C.__cache={},this}function x(C){const S={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(S.boundary=4,S.storage=4):C.isVector2?(S.boundary=8,S.storage=8):C.isVector3||C.isColor?(S.boundary=16,S.storage=12):C.isVector4?(S.boundary=16,S.storage=16):C.isMatrix3?(S.boundary=48,S.storage=48):C.isMatrix4?(S.boundary=64,S.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),S}function g(C){const S=C.target;S.removeEventListener("dispose",g);const A=o.indexOf(S.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const C in s)n.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class hE{constructor(e={}){const{canvas:t=nx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const h=new Uint32Array(4),v=new Int32Array(4);let x=null,g=null;const p=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const S=this;let A=!1,w=0,E=0,b=null,P=-1,y=null;const M=new gt,q=new gt;let k=null;const F=new nt(0);let Q=0,ne=t.width,fe=t.height,pe=1,$=null,ae=null;const ce=new gt(0,0,ne,fe),G=new gt(0,0,ne,fe);let se=!1;const Se=new Sc;let te=!1,ge=!1;const le=new Mt,X=new Le,ve=new V,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return b===null?pe:1}let j=i;function L(I,ee){const ue=t.getContext(I,ee);return ue!==null?ue:null}try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vc}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),j===null){const ee="webgl2";if(j=L(ee,I),j===null)throw L(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let N,Y,Z,ie,T,_,R,D,O,U,W,z,re,_e,he,xe,Re,we,Ce,De,Be,Xe,Ie,Ve;function Pe(){N=new MS(j),N.init(),Y=new pS(j,N,e),Xe=new iE(j,N),Z=new tE(j),ie=new ES(j),T=new Hb,_=new nE(j,N,Z,T,Y,Xe,ie),R=new gS(S),D=new yS(S),O=new Rx(j),Ie=new fS(j,O),U=new SS(j,O,ie,Ie),W=new wS(j,U,O,ie),Ce=new TS(j,Y,_),xe=new mS(T),z=new zb(S,R,D,N,Y,Ie,xe),re=new dE(S,T),_e=new Gb,he=new jb(N),we=new dS(S,R,D,Z,W,f,l),Re=new eE(S,W,Y),Ve=new fE(j,ie,Y,Z),De=new hS(j,N,ie),Be=new bS(j,N,ie),ie.programs=z.programs,S.capabilities=Y,S.extensions=N,S.properties=T,S.renderLists=_e,S.shadowMap=Re,S.state=Z,S.info=ie}Pe();const B=new cE(S,j);this.xr=B,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const I=N.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=N.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(I){I!==void 0&&(pe=I,this.setSize(ne,fe,!1))},this.getSize=function(I){return I.set(ne,fe)},this.setSize=function(I,ee,ue=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=I,fe=ee,t.width=Math.floor(I*pe),t.height=Math.floor(ee*pe),ue===!0&&(t.style.width=I+"px",t.style.height=ee+"px"),this.setViewport(0,0,I,ee)},this.getDrawingBufferSize=function(I){return I.set(ne*pe,fe*pe).floor()},this.setDrawingBufferSize=function(I,ee,ue){ne=I,fe=ee,pe=ue,t.width=Math.floor(I*ue),t.height=Math.floor(ee*ue),this.setViewport(0,0,I,ee)},this.getCurrentViewport=function(I){return I.copy(M)},this.getViewport=function(I){return I.copy(ce)},this.setViewport=function(I,ee,ue,de){I.isVector4?ce.set(I.x,I.y,I.z,I.w):ce.set(I,ee,ue,de),Z.viewport(M.copy(ce).multiplyScalar(pe).round())},this.getScissor=function(I){return I.copy(G)},this.setScissor=function(I,ee,ue,de){I.isVector4?G.set(I.x,I.y,I.z,I.w):G.set(I,ee,ue,de),Z.scissor(q.copy(G).multiplyScalar(pe).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(I){Z.setScissorTest(se=I)},this.setOpaqueSort=function(I){$=I},this.setTransparentSort=function(I){ae=I},this.getClearColor=function(I){return I.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(I=!0,ee=!0,ue=!0){let de=0;if(I){let oe=!1;if(b!==null){const Ae=b.texture.format;oe=Ae===Jh||Ae===Kh||Ae===jh}if(oe){const Ae=b.texture.type,Ue=Ae===zi||Ae===or||Ae===$h||Ae===eo||Ae===qh||Ae===Yh,Ge=we.getClearColor(),$e=we.getClearAlpha(),Ke=Ge.r,je=Ge.g,Je=Ge.b;Ue?(h[0]=Ke,h[1]=je,h[2]=Je,h[3]=$e,j.clearBufferuiv(j.COLOR,0,h)):(v[0]=Ke,v[1]=je,v[2]=Je,v[3]=$e,j.clearBufferiv(j.COLOR,0,v))}else de|=j.COLOR_BUFFER_BIT}ee&&(de|=j.DEPTH_BUFFER_BIT),ue&&(de|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),_e.dispose(),he.dispose(),T.dispose(),R.dispose(),D.dispose(),W.dispose(),Ie.dispose(),Ve.dispose(),z.dispose(),B.dispose(),B.removeEventListener("sessionstart",Dn),B.removeEventListener("sessionend",In),$i.stop()};function Ee(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const I=ie.autoReset,ee=Re.enabled,ue=Re.autoUpdate,de=Re.needsUpdate,oe=Re.type;Pe(),ie.autoReset=I,Re.enabled=ee,Re.autoUpdate=ue,Re.needsUpdate=de,Re.type=oe}function Ne(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ke(I){const ee=I.target;ee.removeEventListener("dispose",ke),at(ee)}function at(I){pt(I),T.remove(I)}function pt(I){const ee=T.get(I).programs;ee!==void 0&&(ee.forEach(function(ue){z.releaseProgram(ue)}),I.isShaderMaterial&&z.releaseShaderCache(I))}this.renderBufferDirect=function(I,ee,ue,de,oe,Ae){ee===null&&(ee=me);const Ue=oe.isMesh&&oe.matrixWorld.determinant()<0,Ge=Cp(I,ee,ue,de,oe);Z.setMaterial(de,Ue);let $e=ue.index,Ke=1;if(de.wireframe===!0){if($e=U.getWireframeAttribute(ue),$e===void 0)return;Ke=2}const je=ue.drawRange,Je=ue.attributes.position;let Et=je.start*Ke,ln=(je.start+je.count)*Ke;Ae!==null&&(Et=Math.max(Et,Ae.start*Ke),ln=Math.min(ln,(Ae.start+Ae.count)*Ke)),$e!==null?(Et=Math.max(Et,0),ln=Math.min(ln,$e.count)):Je!=null&&(Et=Math.max(Et,0),ln=Math.min(ln,Je.count));const Nt=ln-Et;if(Nt<0||Nt===1/0)return;Ie.setup(oe,de,Ge,ue,$e);let Jn,_t=De;if($e!==null&&(Jn=O.get($e),_t=Be,_t.setIndex(Jn)),oe.isMesh)de.wireframe===!0?(Z.setLineWidth(de.wireframeLinewidth*ye()),_t.setMode(j.LINES)):_t.setMode(j.TRIANGLES);else if(oe.isLine){let Ze=de.linewidth;Ze===void 0&&(Ze=1),Z.setLineWidth(Ze*ye()),oe.isLineSegments?_t.setMode(j.LINES):oe.isLineLoop?_t.setMode(j.LINE_LOOP):_t.setMode(j.LINE_STRIP)}else oe.isPoints?_t.setMode(j.POINTS):oe.isSprite&&_t.setMode(j.TRIANGLES);if(oe.isBatchedMesh)_t.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else if(oe.isInstancedMesh)_t.renderInstances(Et,Nt,oe.count);else if(ue.isInstancedBufferGeometry){const Ze=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Aa=Math.min(ue.instanceCount,Ze);_t.renderInstances(Et,Nt,Aa)}else _t.render(Et,Nt)};function vt(I,ee,ue){I.transparent===!0&&I.side===Vn&&I.forceSinglePass===!1?(I.side=sn,I.needsUpdate=!0,ro(I,ee,ue),I.side=Vi,I.needsUpdate=!0,ro(I,ee,ue),I.side=Vn):ro(I,ee,ue)}this.compile=function(I,ee,ue=null){ue===null&&(ue=I),g=he.get(ue),g.init(),C.push(g),ue.traverseVisible(function(oe){oe.isLight&&oe.layers.test(ee.layers)&&(g.pushLight(oe),oe.castShadow&&g.pushShadow(oe))}),I!==ue&&I.traverseVisible(function(oe){oe.isLight&&oe.layers.test(ee.layers)&&(g.pushLight(oe),oe.castShadow&&g.pushShadow(oe))}),g.setupLights(S._useLegacyLights);const de=new Set;return I.traverse(function(oe){const Ae=oe.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const Ge=Ae[Ue];vt(Ge,ue,oe),de.add(Ge)}else vt(Ae,ue,oe),de.add(Ae)}),C.pop(),g=null,de},this.compileAsync=function(I,ee,ue=null){const de=this.compile(I,ee,ue);return new Promise(oe=>{function Ae(){if(de.forEach(function(Ue){T.get(Ue).currentProgram.isReady()&&de.delete(Ue)}),de.size===0){oe(I);return}setTimeout(Ae,10)}N.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Bt=null;function ft(I){Bt&&Bt(I)}function Dn(){$i.stop()}function In(){$i.start()}const $i=new dp;$i.setAnimationLoop(ft),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(I){Bt=I,B.setAnimationLoop(I),I===null?$i.stop():$i.start()},B.addEventListener("sessionstart",Dn),B.addEventListener("sessionend",In),this.render=function(I,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(ee),ee=B.getCamera()),I.isScene===!0&&I.onBeforeRender(S,I,ee,b),g=he.get(I,C.length),g.init(),C.push(g),le.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Se.setFromProjectionMatrix(le),ge=this.localClippingEnabled,te=xe.init(this.clippingPlanes,ge),x=_e.get(I,p.length),x.init(),p.push(x),Pc(I,ee,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort($,ae),this.info.render.frame++,te===!0&&xe.beginShadows();const ue=g.state.shadowsArray;if(Re.render(ue,I,ee),te===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1)&&we.render(x,I),g.setupLights(S._useLegacyLights),ee.isArrayCamera){const de=ee.cameras;for(let oe=0,Ae=de.length;oe<Ae;oe++){const Ue=de[oe];Lc(x,I,Ue,Ue.viewport)}}else Lc(x,I,ee);b!==null&&(_.updateMultisampleRenderTarget(b),_.updateRenderTargetMipmap(b)),I.isScene===!0&&I.onAfterRender(S,I,ee),Ie.resetDefaultState(),P=-1,y=null,C.pop(),C.length>0?g=C[C.length-1]:g=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Pc(I,ee,ue,de){if(I.visible===!1)return;if(I.layers.test(ee.layers)){if(I.isGroup)ue=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ee);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Se.intersectsSprite(I)){de&&ve.setFromMatrixPosition(I.matrixWorld).applyMatrix4(le);const Ue=W.update(I),Ge=I.material;Ge.visible&&x.push(I,Ue,Ge,ue,ve.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Se.intersectsObject(I))){const Ue=W.update(I),Ge=I.material;if(de&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ve.copy(I.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ve.copy(Ue.boundingSphere.center)),ve.applyMatrix4(I.matrixWorld).applyMatrix4(le)),Array.isArray(Ge)){const $e=Ue.groups;for(let Ke=0,je=$e.length;Ke<je;Ke++){const Je=$e[Ke],Et=Ge[Je.materialIndex];Et&&Et.visible&&x.push(I,Ue,Et,ue,ve.z,Je)}}else Ge.visible&&x.push(I,Ue,Ge,ue,ve.z,null)}}const Ae=I.children;for(let Ue=0,Ge=Ae.length;Ue<Ge;Ue++)Pc(Ae[Ue],ee,ue,de)}function Lc(I,ee,ue,de){const oe=I.opaque,Ae=I.transmissive,Ue=I.transparent;g.setupLightsView(ue),te===!0&&xe.setGlobalState(S.clippingPlanes,ue),Ae.length>0&&Ap(oe,Ae,ee,ue),de&&Z.viewport(M.copy(de)),oe.length>0&&so(oe,ee,ue),Ae.length>0&&so(Ae,ee,ue),Ue.length>0&&so(Ue,ee,ue),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Ap(I,ee,ue,de){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(g.state.transmissionRenderTarget===null){g.state.transmissionRenderTarget=new vs(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float")?Jo:zi,minFilter:hs,samples:4,stencilBuffer:r});const Ke=T.get(g.state.transmissionRenderTarget);Ke.__isTransmissionRenderTarget=!0}const Ae=g.state.transmissionRenderTarget;S.getDrawingBufferSize(X),Ae.setSize(X.x,X.y);const Ue=S.getRenderTarget();S.setRenderTarget(Ae),S.getClearColor(F),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear();const Ge=S.toneMapping;S.toneMapping=Bi,so(I,ue,de),_.updateMultisampleRenderTarget(Ae),_.updateRenderTargetMipmap(Ae);let $e=!1;for(let Ke=0,je=ee.length;Ke<je;Ke++){const Je=ee[Ke],Et=Je.object,ln=Je.geometry,Nt=Je.material,Jn=Je.group;if(Nt.side===Vn&&Et.layers.test(de.layers)){const _t=Nt.side;Nt.side=sn,Nt.needsUpdate=!0,Dc(Et,ue,de,ln,Nt,Jn),Nt.side=_t,Nt.needsUpdate=!0,$e=!0}}$e===!0&&(_.updateMultisampleRenderTarget(Ae),_.updateRenderTargetMipmap(Ae)),S.setRenderTarget(Ue),S.setClearColor(F,Q),S.toneMapping=Ge}function so(I,ee,ue){const de=ee.isScene===!0?ee.overrideMaterial:null;for(let oe=0,Ae=I.length;oe<Ae;oe++){const Ue=I[oe],Ge=Ue.object,$e=Ue.geometry,Ke=de===null?Ue.material:de,je=Ue.group;Ge.layers.test(ue.layers)&&Dc(Ge,ee,ue,$e,Ke,je)}}function Dc(I,ee,ue,de,oe,Ae){I.onBeforeRender(S,ee,ue,de,oe,Ae),I.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),oe.onBeforeRender(S,ee,ue,de,I,Ae),oe.transparent===!0&&oe.side===Vn&&oe.forceSinglePass===!1?(oe.side=sn,oe.needsUpdate=!0,S.renderBufferDirect(ue,ee,de,oe,I,Ae),oe.side=Vi,oe.needsUpdate=!0,S.renderBufferDirect(ue,ee,de,oe,I,Ae),oe.side=Vn):S.renderBufferDirect(ue,ee,de,oe,I,Ae),I.onAfterRender(S,ee,ue,de,oe,Ae)}function ro(I,ee,ue){ee.isScene!==!0&&(ee=me);const de=T.get(I),oe=g.state.lights,Ae=g.state.shadowsArray,Ue=oe.state.version,Ge=z.getParameters(I,oe.state,Ae,ee,ue),$e=z.getProgramCacheKey(Ge);let Ke=de.programs;de.environment=I.isMeshStandardMaterial?ee.environment:null,de.fog=ee.fog,de.envMap=(I.isMeshStandardMaterial?D:R).get(I.envMap||de.environment),de.envMapRotation=de.environment!==null&&I.envMap===null?ee.environmentRotation:I.envMapRotation,Ke===void 0&&(I.addEventListener("dispose",ke),Ke=new Map,de.programs=Ke);let je=Ke.get($e);if(je!==void 0){if(de.currentProgram===je&&de.lightsStateVersion===Ue)return Nc(I,Ge),je}else Ge.uniforms=z.getUniforms(I),I.onBuild(ue,Ge,S),I.onBeforeCompile(Ge,S),je=z.acquireProgram(Ge,$e),Ke.set($e,je),de.uniforms=Ge.uniforms;const Je=de.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Je.clippingPlanes=xe.uniform),Nc(I,Ge),de.needsLights=Pp(I),de.lightsStateVersion=Ue,de.needsLights&&(Je.ambientLightColor.value=oe.state.ambient,Je.lightProbe.value=oe.state.probe,Je.directionalLights.value=oe.state.directional,Je.directionalLightShadows.value=oe.state.directionalShadow,Je.spotLights.value=oe.state.spot,Je.spotLightShadows.value=oe.state.spotShadow,Je.rectAreaLights.value=oe.state.rectArea,Je.ltc_1.value=oe.state.rectAreaLTC1,Je.ltc_2.value=oe.state.rectAreaLTC2,Je.pointLights.value=oe.state.point,Je.pointLightShadows.value=oe.state.pointShadow,Je.hemisphereLights.value=oe.state.hemi,Je.directionalShadowMap.value=oe.state.directionalShadowMap,Je.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Je.spotShadowMap.value=oe.state.spotShadowMap,Je.spotLightMatrix.value=oe.state.spotLightMatrix,Je.spotLightMap.value=oe.state.spotLightMap,Je.pointShadowMap.value=oe.state.pointShadowMap,Je.pointShadowMatrix.value=oe.state.pointShadowMatrix),de.currentProgram=je,de.uniformsList=null,je}function Ic(I){if(I.uniformsList===null){const ee=I.currentProgram.getUniforms();I.uniformsList=Bo.seqWithValue(ee.seq,I.uniforms)}return I.uniformsList}function Nc(I,ee){const ue=T.get(I);ue.outputColorSpace=ee.outputColorSpace,ue.batching=ee.batching,ue.instancing=ee.instancing,ue.instancingColor=ee.instancingColor,ue.instancingMorph=ee.instancingMorph,ue.skinning=ee.skinning,ue.morphTargets=ee.morphTargets,ue.morphNormals=ee.morphNormals,ue.morphColors=ee.morphColors,ue.morphTargetsCount=ee.morphTargetsCount,ue.numClippingPlanes=ee.numClippingPlanes,ue.numIntersection=ee.numClipIntersection,ue.vertexAlphas=ee.vertexAlphas,ue.vertexTangents=ee.vertexTangents,ue.toneMapping=ee.toneMapping}function Cp(I,ee,ue,de,oe){ee.isScene!==!0&&(ee=me),_.resetTextureUnits();const Ae=ee.fog,Ue=de.isMeshStandardMaterial?ee.environment:null,Ge=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Wi,$e=(de.isMeshStandardMaterial?D:R).get(de.envMap||Ue),Ke=de.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,je=!!ue.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),Je=!!ue.morphAttributes.position,Et=!!ue.morphAttributes.normal,ln=!!ue.morphAttributes.color;let Nt=Bi;de.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Nt=S.toneMapping);const Jn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,_t=Jn!==void 0?Jn.length:0,Ze=T.get(de),Aa=g.state.lights;if(te===!0&&(ge===!0||I!==y)){const hn=I===y&&de.id===P;xe.setState(de,I,hn)}let mt=!1;de.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Aa.state.version||Ze.outputColorSpace!==Ge||oe.isBatchedMesh&&Ze.batching===!1||!oe.isBatchedMesh&&Ze.batching===!0||oe.isInstancedMesh&&Ze.instancing===!1||!oe.isInstancedMesh&&Ze.instancing===!0||oe.isSkinnedMesh&&Ze.skinning===!1||!oe.isSkinnedMesh&&Ze.skinning===!0||oe.isInstancedMesh&&Ze.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ze.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ze.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ze.instancingMorph===!1&&oe.morphTexture!==null||Ze.envMap!==$e||de.fog===!0&&Ze.fog!==Ae||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==xe.numPlanes||Ze.numIntersection!==xe.numIntersection)||Ze.vertexAlphas!==Ke||Ze.vertexTangents!==je||Ze.morphTargets!==Je||Ze.morphNormals!==Et||Ze.morphColors!==ln||Ze.toneMapping!==Nt||Ze.morphTargetsCount!==_t)&&(mt=!0):(mt=!0,Ze.__version=de.version);let Xi=Ze.currentProgram;mt===!0&&(Xi=ro(de,ee,oe));let Uc=!1,fr=!1,Ca=!1;const zt=Xi.getUniforms(),bi=Ze.uniforms;if(Z.useProgram(Xi.program)&&(Uc=!0,fr=!0,Ca=!0),de.id!==P&&(P=de.id,fr=!0),Uc||y!==I){zt.setValue(j,"projectionMatrix",I.projectionMatrix),zt.setValue(j,"viewMatrix",I.matrixWorldInverse);const hn=zt.map.cameraPosition;hn!==void 0&&hn.setValue(j,ve.setFromMatrixPosition(I.matrixWorld)),Y.logarithmicDepthBuffer&&zt.setValue(j,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&zt.setValue(j,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,fr=!0,Ca=!0)}if(oe.isSkinnedMesh){zt.setOptional(j,oe,"bindMatrix"),zt.setOptional(j,oe,"bindMatrixInverse");const hn=oe.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),zt.setValue(j,"boneTexture",hn.boneTexture,_))}oe.isBatchedMesh&&(zt.setOptional(j,oe,"batchingTexture"),zt.setValue(j,"batchingTexture",oe._matricesTexture,_));const Ra=ue.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0)&&Ce.update(oe,ue,Xi),(fr||Ze.receiveShadow!==oe.receiveShadow)&&(Ze.receiveShadow=oe.receiveShadow,zt.setValue(j,"receiveShadow",oe.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(bi.envMap.value=$e,bi.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&ee.environment!==null&&(bi.envMapIntensity.value=ee.environmentIntensity),fr&&(zt.setValue(j,"toneMappingExposure",S.toneMappingExposure),Ze.needsLights&&Rp(bi,Ca),Ae&&de.fog===!0&&re.refreshFogUniforms(bi,Ae),re.refreshMaterialUniforms(bi,de,pe,fe,g.state.transmissionRenderTarget),Bo.upload(j,Ic(Ze),bi,_)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Bo.upload(j,Ic(Ze),bi,_),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&zt.setValue(j,"center",oe.center),zt.setValue(j,"modelViewMatrix",oe.modelViewMatrix),zt.setValue(j,"normalMatrix",oe.normalMatrix),zt.setValue(j,"modelMatrix",oe.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const hn=de.uniformsGroups;for(let Pa=0,Lp=hn.length;Pa<Lp;Pa++){const Oc=hn[Pa];Ve.update(Oc,Xi),Ve.bind(Oc,Xi)}}return Xi}function Rp(I,ee){I.ambientLightColor.needsUpdate=ee,I.lightProbe.needsUpdate=ee,I.directionalLights.needsUpdate=ee,I.directionalLightShadows.needsUpdate=ee,I.pointLights.needsUpdate=ee,I.pointLightShadows.needsUpdate=ee,I.spotLights.needsUpdate=ee,I.spotLightShadows.needsUpdate=ee,I.rectAreaLights.needsUpdate=ee,I.hemisphereLights.needsUpdate=ee}function Pp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(I,ee,ue){T.get(I.texture).__webglTexture=ee,T.get(I.depthTexture).__webglTexture=ue;const de=T.get(I);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=ue===void 0,de.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,ee){const ue=T.get(I);ue.__webglFramebuffer=ee,ue.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(I,ee=0,ue=0){b=I,w=ee,E=ue;let de=!0,oe=null,Ae=!1,Ue=!1;if(I){const $e=T.get(I);$e.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(j.FRAMEBUFFER,null),de=!1):$e.__webglFramebuffer===void 0?_.setupRenderTarget(I):$e.__hasExternalTextures&&_.rebindTextures(I,T.get(I.texture).__webglTexture,T.get(I.depthTexture).__webglTexture);const Ke=I.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ue=!0);const je=T.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(je[ee])?oe=je[ee][ue]:oe=je[ee],Ae=!0):I.samples>0&&_.useMultisampledRTT(I)===!1?oe=T.get(I).__webglMultisampledFramebuffer:Array.isArray(je)?oe=je[ue]:oe=je,M.copy(I.viewport),q.copy(I.scissor),k=I.scissorTest}else M.copy(ce).multiplyScalar(pe).floor(),q.copy(G).multiplyScalar(pe).floor(),k=se;if(Z.bindFramebuffer(j.FRAMEBUFFER,oe)&&de&&Z.drawBuffers(I,oe),Z.viewport(M),Z.scissor(q),Z.setScissorTest(k),Ae){const $e=T.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+ee,$e.__webglTexture,ue)}else if(Ue){const $e=T.get(I.texture),Ke=ee||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,$e.__webglTexture,ue||0,Ke)}P=-1},this.readRenderTargetPixels=function(I,ee,ue,de,oe,Ae,Ue){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=T.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge){Z.bindFramebuffer(j.FRAMEBUFFER,Ge);try{const $e=I.texture,Ke=$e.format,je=$e.type;if(Ke!==$n&&Xe.convert(Ke)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=je===Jo&&(N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float"));if(je!==zi&&Xe.convert(je)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&je!==Fi&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=I.width-de&&ue>=0&&ue<=I.height-oe&&j.readPixels(ee,ue,de,oe,Xe.convert(Ke),Xe.convert(je),Ae)}finally{const $e=b!==null?T.get(b).__webglFramebuffer:null;Z.bindFramebuffer(j.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(I,ee,ue=0){const de=Math.pow(2,-ue),oe=Math.floor(ee.image.width*de),Ae=Math.floor(ee.image.height*de);_.setTexture2D(ee,0),j.copyTexSubImage2D(j.TEXTURE_2D,ue,0,0,I.x,I.y,oe,Ae),Z.unbindTexture()},this.copyTextureToTexture=function(I,ee,ue,de=0){const oe=ee.image.width,Ae=ee.image.height,Ue=Xe.convert(ue.format),Ge=Xe.convert(ue.type);_.setTexture2D(ue,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ue.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ue.unpackAlignment),ee.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,de,I.x,I.y,oe,Ae,Ue,Ge,ee.image.data):ee.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,de,I.x,I.y,ee.mipmaps[0].width,ee.mipmaps[0].height,Ue,ee.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,de,I.x,I.y,Ue,Ge,ee.image),de===0&&ue.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(I,ee,ue,de,oe=0){const Ae=Math.round(I.max.x-I.min.x),Ue=Math.round(I.max.y-I.min.y),Ge=I.max.z-I.min.z+1,$e=Xe.convert(de.format),Ke=Xe.convert(de.type);let je;if(de.isData3DTexture)_.setTexture3D(de,0),je=j.TEXTURE_3D;else if(de.isDataArrayTexture||de.isCompressedArrayTexture)_.setTexture2DArray(de,0),je=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,de.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,de.unpackAlignment);const Je=j.getParameter(j.UNPACK_ROW_LENGTH),Et=j.getParameter(j.UNPACK_IMAGE_HEIGHT),ln=j.getParameter(j.UNPACK_SKIP_PIXELS),Nt=j.getParameter(j.UNPACK_SKIP_ROWS),Jn=j.getParameter(j.UNPACK_SKIP_IMAGES),_t=ue.isCompressedTexture?ue.mipmaps[oe]:ue.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,_t.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,_t.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,I.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,I.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,I.min.z),ue.isDataTexture||ue.isData3DTexture?j.texSubImage3D(je,oe,ee.x,ee.y,ee.z,Ae,Ue,Ge,$e,Ke,_t.data):de.isCompressedArrayTexture?j.compressedTexSubImage3D(je,oe,ee.x,ee.y,ee.z,Ae,Ue,Ge,$e,_t.data):j.texSubImage3D(je,oe,ee.x,ee.y,ee.z,Ae,Ue,Ge,$e,Ke,_t),j.pixelStorei(j.UNPACK_ROW_LENGTH,Je),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Et),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ln),j.pixelStorei(j.UNPACK_SKIP_ROWS,Nt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Jn),oe===0&&de.generateMipmaps&&j.generateMipmap(je),Z.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?_.setTextureCube(I,0):I.isData3DTexture?_.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?_.setTexture2DArray(I,0):_.setTexture2D(I,0),Z.unbindTexture()},this.resetState=function(){w=0,E=0,b=null,Z.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xc?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===Ea?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ec{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=i}clone(){return new Ec(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pE extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Le:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new V,s=[],r=[],o=[],a=new V,l=new Mt;for(let h=0;h<=e;h++){const v=h/e;s[h]=this.getTangentAt(v,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Ft(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,v))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Ft(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],h*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _p extends Si{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Le){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mE extends _p{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Do=new V,bl=new Tc,El=new Tc,Tl=new Tc;class xp extends Si{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new V){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Do.subVectors(s[0],s[1]).add(s[0]),c=Do);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Do.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Do),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),v<1e-4&&(v=x),g<1e-4&&(g=x),bl.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,v,x,g),El.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,v,x,g),Tl.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,v,x,g)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),El.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Tl.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(bl.calc(l),El.calc(l),Tl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function of(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function gE(n,e){const t=1-n;return t*t*e}function vE(n,e){return 2*(1-n)*n*e}function _E(n,e){return n*n*e}function Or(n,e,t,i){return gE(n,e)+vE(n,t)+_E(n,i)}function xE(n,e){const t=1-n;return t*t*t*e}function yE(n,e){const t=1-n;return 3*t*t*n*e}function ME(n,e){return 3*(1-n)*n*n*e}function SE(n,e){return n*n*n*e}function Fr(n,e,t,i,s){return xE(n,e)+yE(n,t)+ME(n,i)+SE(n,s)}class bE extends Si{constructor(e=new Le,t=new Le,i=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Le){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fr(e,s.x,r.x,o.x,a.x),Fr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class EE extends Si{constructor(e=new V,t=new V,i=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new V){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fr(e,s.x,r.x,o.x,a.x),Fr(e,s.y,r.y,o.y,a.y),Fr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class TE extends Si{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wE extends Si{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class AE extends Si{constructor(e=new Le,t=new Le,i=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Le){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Or(e,s.x,r.x,o.x),Or(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yp extends Si{constructor(e=new V,t=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new V){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Or(e,s.x,r.x,o.x),Or(e,s.y,r.y,o.y),Or(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class CE extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(of(a,l.x,c.x,u.x,d.x),of(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Le().fromArray(s))}return this}}var RE=Object.freeze({__proto__:null,ArcCurve:mE,CatmullRomCurve3:xp,CubicBezierCurve:bE,CubicBezierCurve3:EE,EllipseCurve:_p,LineCurve:TE,LineCurve3:wE,QuadraticBezierCurve:AE,QuadraticBezierCurve3:yp,SplineCurve:CE});class Yr extends yn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new V,u=new Le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const h=i+d/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mi extends yn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let v=0;const x=[],g=i/2;let p=0;C(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new bt(d,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(h,2));function C(){const A=new V,w=new V;let E=0;const b=(t-e)/i;for(let P=0;P<=r;P++){const y=[],M=P/r,q=M*(t-e)+e;for(let k=0;k<=s;k++){const F=k/s,Q=F*l+a,ne=Math.sin(Q),fe=Math.cos(Q);w.x=q*ne,w.y=-M*i+g,w.z=q*fe,d.push(w.x,w.y,w.z),A.set(ne,b,fe).normalize(),f.push(A.x,A.y,A.z),h.push(F,1-M),y.push(v++)}x.push(y)}for(let P=0;P<s;P++)for(let y=0;y<r;y++){const M=x[y][P],q=x[y+1][P],k=x[y+1][P+1],F=x[y][P+1];u.push(M,q,F),u.push(q,k,F),E+=6}c.addGroup(p,E,0),p+=E}function S(A){const w=v,E=new Le,b=new V;let P=0;const y=A===!0?e:t,M=A===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*M,0),f.push(0,M,0),h.push(.5,.5),v++;const q=v;for(let k=0;k<=s;k++){const Q=k/s*l+a,ne=Math.cos(Q),fe=Math.sin(Q);b.x=y*fe,b.y=g*M,b.z=y*ne,d.push(b.x,b.y,b.z),f.push(0,M,0),E.x=ne*.5+.5,E.y=fe*.5*M+.5,h.push(E.x,E.y),v++}for(let k=0;k<s;k++){const F=w+k,Q=q+k;A===!0?u.push(Q,Q+1,F):u.push(Q+1,Q,F),P+=3}c.addGroup(p,P,A===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class En extends yn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new V,f=new V,h=[],v=[],x=[],g=[];for(let p=0;p<=i;p++){const C=[],S=p/i;let A=0;p===0&&o===0?A=.5/t:p===i&&l===Math.PI&&(A=-.5/t);for(let w=0;w<=t;w++){const E=w/t;d.x=-e*Math.cos(s+E*r)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(s+E*r)*Math.sin(o+S*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(E+A,1-S),C.push(c++)}u.push(C)}for(let p=0;p<i;p++)for(let C=0;C<t;C++){const S=u[p][C+1],A=u[p][C],w=u[p+1][C],E=u[p+1][C+1];(p!==0||o>0)&&h.push(S,A,E),(p!==i-1||l<Math.PI)&&h.push(A,w,E)}this.setIndex(h),this.setAttribute("position",new bt(v,3)),this.setAttribute("normal",new bt(x,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wc extends yn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new V,d=new V,f=new V;for(let h=0;h<=i;h++)for(let v=0;v<=s;v++){const x=v/s*r,g=h/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(h/i)}for(let h=1;h<=i;h++)for(let v=1;v<=s;v++){const x=(s+1)*h+v-1,g=(s+1)*(h-1)+v-1,p=(s+1)*(h-1)+v,C=(s+1)*h+v;o.push(x,g,C),o.push(g,p,C)}this.setIndex(o),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ac extends yn{constructor(e=new yp(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new V,l=new V,c=new Le;let u=new V;const d=[],f=[],h=[],v=[];x(),this.setIndex(v),this.setAttribute("position",new bt(d,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(h,2));function x(){for(let S=0;S<t;S++)g(S);g(r===!1?t:0),C(),p()}function g(S){u=e.getPointAt(S/t,u);const A=o.normals[S],w=o.binormals[S];for(let E=0;E<=s;E++){const b=E/s*Math.PI*2,P=Math.sin(b),y=-Math.cos(b);l.x=y*A.x+P*w.x,l.y=y*A.y+P*w.y,l.z=y*A.z+P*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=t;S++)for(let A=1;A<=s;A++){const w=(s+1)*(S-1)+(A-1),E=(s+1)*S+(A-1),b=(s+1)*S+A,P=(s+1)*(S-1)+A;v.push(w,E,P),v.push(E,b,P)}}function C(){for(let S=0;S<=t;S++)for(let A=0;A<=s;A++)c.x=S/t,c.y=A/s,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ac(new RE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class on extends io{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wa extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class PE extends wa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wl=new Mt,af=new V,lf=new V;class Mp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;af.setFromMatrixPosition(e.matrixWorld),t.position.copy(af),lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lf),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class LE extends Mp{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ar*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class DE extends wa{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new LE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const cf=new Mt,Mr=new V,Al=new V;class IE extends Mp{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Mr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Mr),Al.copy(i.position),Al.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Al),i.updateMatrixWorld(),s.makeTranslation(-Mr.x,-Mr.y,-Mr.z),cf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cf)}}class NE extends wa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new IE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class UE extends wa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=uf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function uf(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);function Rc(n){const e=new hE({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=Gh,e.setClearColor(1714762);const t=new pE;t.fog=new Ec(1714762,80,200);const i=new UE(16777215,.4);t.add(i);const s=new PE(8900331,2980397,.3);return t.add(s),{renderer:e,scene:t}}function Sp(n,e,t){const i=t.clientWidth,s=t.clientHeight;(n.domElement.width!==i||n.domElement.height!==s)&&(n.setSize(i,s,!1),e.aspect=i/s,e.updateProjectionMatrix())}const Pt=64,lt=100,is=7.32,gn=2.44,Di=2;function OE(n){const e=new hi,t=new pi(Pt,lt,16,24),i=new on({color:2984493}),s=new Oe(t,i);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,e.add(s);const r=12,o=lt/r;for(let w=0;w<r;w++){if(w%2===0)continue;const E=new pi(Pt,o),b=new on({color:2521638,transparent:!0,opacity:.5}),P=new Oe(E,b);P.rotation.x=-Math.PI/2,P.position.set(0,.01,-lt/2+o*w+o/2),P.receiveShadow=!0,e.add(P)}const a=new xi({color:16777215}),l=.02;function c(w,E,b,P){const y=new pi(w,E),M=new Oe(y,a);M.rotation.x=-Math.PI/2,M.position.set(b,l,P),e.add(M)}const u=.12;c(Pt,u,0,-lt/2),c(Pt,u,0,lt/2),c(u,lt,-Pt/2,0),c(u,lt,Pt/2,0),c(Pt,u,0,0);const d=9.15,f=64,h=[];for(let w=0;w<=f;w++){const E=w/f*Math.PI*2;h.push(new V(Math.cos(E)*d,0,Math.sin(E)*d))}const v=new xp(h),x=new Ac(v,f,.1,8,!1),g=new Oe(x,a);g.position.y=l,e.add(g);const p=new Yr(.25,16),C=new Oe(p,a);C.rotation.x=-Math.PI/2,C.position.set(0,l+.01,0),e.add(C);const S=40.32,A=16.5;for(const w of[-1,1]){const E=w*(lt/2-A/2);c(S,u,0,E-w*A/2),c(u,A,-S/2,E),c(u,A,S/2,E);const b=18.32,P=5.5,y=w*(lt/2-P/2);c(b,u,0,y-w*P/2),c(u,P,-b/2,y),c(u,P,b/2,y);const M=w*(lt/2-11),q=new Yr(.2,12),k=new Oe(q,a);k.rotation.x=-Math.PI/2,k.position.set(0,l+.01,M),e.add(k)}return n.add(e),e}function FE(n){const e=[],t=new on({color:16777215}),i=new xi({color:14540253,transparent:!0,opacity:.3,side:Vn,wireframe:!0});for(const r of[-1,1]){let c=function(f,h,v,x,g,p){const C=new Oe(new Tt(f,h,v),t);C.position.set(x,g,p),C.castShadow=!0,a.add(C)};var s=c;const o=r*(lt/2),a=new hi,l=.06;c(l,gn,l,-is/2,gn/2,0),c(l,gn,l,is/2,gn/2,0),c(is+l,l,l,0,gn,0),c(l,gn,Di,-is/2,gn/2,r*Di/2),c(l,gn,Di,is/2,gn/2,r*Di/2),c(is+l,l,Di,0,gn,r*Di/2);const u=new Tt(is,gn,Di),d=new Oe(u,i);d.position.set(0,gn/2,r*Di/2),a.add(d),a.position.set(0,0,o),n.add(a),e.push(a)}return e}const Io=14,Sr=4,oi=12;function kE(n){const e=new hi,t=new on({color:5592422}),i=[13111342,1732548,16777215,16766720];function s(l,c,u,d,f,h){const v=new Tt(l,u,c),x=new Oe(v,t);x.rotation.x=d,x.position.set(f,u/2,h),x.castShadow=!0,x.receiveShadow=!0,e.add(x);const g=6,p=u*.7/g;for(let C=0;C<g;C++){const S=i[C%i.length],A=new Tt(l*.98,p*.7,.3),w=new on({color:S}),E=new Oe(A,w),b=-u/2+p*C+p*.5+u*.15,P=c/2*(h>0?-1:h<0?1:0),y=c/2*(f>0?-1:f<0?1:0);E.position.set(y,b,P),x.add(E)}}const r=Pt/2+Sr,o=lt/2+Sr,a=Pt+Sr*2+oi*2;return s(lt+Sr*2,oi,Io,0,r+oi/2,0),s(lt+Sr*2,oi,Io,0,-r-oi/2,0),s(a,oi,Io*.8,0,0,o+oi/2),s(a,oi,Io*.8,0,0,-o-oi/2),n.add(e),e}function BE(n){const e=[],i=new on({color:13421772}),s=new on({color:16777130});return[[Pt/2+8,lt/2+8],[-Pt/2-8,lt/2+8],[Pt/2+8,-lt/2-8],[-Pt/2-8,-lt/2-8]].forEach(([o,a])=>{const l=new Oe(new mi(.3,.5,30,8),i);l.position.set(o,30/2,a),l.castShadow=!0,n.add(l);const c=new Oe(new Tt(3,.6,1.5),s);c.position.set(o,30+.3,a),n.add(c);const u=new DE(16775918,180,200,Math.PI/5,.4,1.5);u.position.set(o,30,a),u.target.position.set(0,0,0),u.castShadow=!0,u.shadow.mapSize.width=512,u.shadow.mapSize.height=512,u.shadow.camera.near=1,u.shadow.camera.far=200,n.add(u),n.add(u.target),e.push(u)}),e}const df=[16439216,16105866,15247722,13140810,10510890,8012832,6041102,4004358],zE=16766720,kr={"Manchester United":{primary:14297372,secondary:16777215},"Manchester City":{primary:7121885,secondary:16777215},Liverpool:{primary:13111342,secondary:13111342},Arsenal:{primary:15663367,secondary:16777215},Chelsea:{primary:214676,secondary:214676},"Tottenham Hotspur":{primary:16777215,secondary:1253975},"Real Madrid":{primary:16777215,secondary:16777215},"FC Barcelona":{primary:19864,secondary:19864},"Atletico Madrid":{primary:13317412,secondary:13158},"Bayern Munich":{primary:14419245,secondary:14419245},"Borussia Dortmund":{primary:16638208,secondary:0},Juventus:{primary:1710618,secondary:1710618},"Paris Saint-Germain":{primary:16752,secondary:16752},"Inter Milan":{primary:69248,secondary:0},"AC Milan":{primary:16451851,secondary:16777215}};function Ii(n,e=!1){return e?new xi({color:n}):new on({color:n})}function ia(n,e=!1,t=0){const i=kr[n]||{primary:8947848,secondary:16777215},s=df[t%df.length],r=e?zE:i.primary,o=i.secondary,a=new hi,l=new Oe(new En(.28,10,8),Ii(s));l.position.y=1.75,l.castShadow=!0,a.add(l);const c=new Oe(new mi(.09,.09,.12,8),Ii(s));c.position.y=1.51,a.add(c);const u=new Oe(new Tt(.5,.55,.28),Ii(r));u.position.y=1.15,u.castShadow=!0,a.add(u);const d=new mi(.08,.07,.52,8),f=Ii(r),h=new Oe(d,f);h.position.set(-.33,1.15,0),h.rotation.z=.15,h.castShadow=!0,a.add(h);const v=new Oe(d,f);v.position.set(.33,1.15,0),v.rotation.z=-.15,v.castShadow=!0,a.add(v);const x=new En(.09,8,6),g=Ii(e?16777215:s),p=new Oe(x,g);p.position.set(-.37,.87,0),a.add(p);const C=new Oe(x,g);C.position.set(.37,.87,0),a.add(C);const S=new Oe(new Tt(.48,.28,.26),Ii(o));S.position.y=.78,a.add(S);const A=new mi(.1,.09,.5,8),w=Ii(s),E=new Oe(A,w);E.position.set(-.14,.5,0),E.castShadow=!0,a.add(E);const b=new Oe(A,w);b.position.set(.14,.5,0),b.castShadow=!0,a.add(b);const P=new Tt(.14,.1,.28),y=Ii(1118481),M=new Oe(P,y);M.position.set(-.14,.22,.05),a.add(M);const q=new Oe(P,y);q.position.set(.14,.22,.05),a.add(q);const k=new Yr(.35,16),F=new xi({color:0,transparent:!0,opacity:.25}),Q=new Oe(k,F);return Q.rotation.x=-Math.PI/2,Q.position.y=.01,a.add(Q),a.userData={lArm:h,rArm:v,lLeg:E,rLeg:b,head:l,torso:u,lBoot:M,rBoot:q,phase:0},a}function sa(n,e,t){const i=n.userData;if(!i.lArm)return;i.phase=(i.phase||0)+t;const s=i.phase,r=Math.sin(s*1.2)*.04,o=Math.sin(s*8)*.5,a=Math.sin(s*12)*.65;if(e==="idle")i.lArm.rotation.x=r,i.rArm.rotation.x=-r,i.lLeg.rotation.x=r*.5,i.rLeg.rotation.x=-r*.5,i.head.rotation.x=Math.sin(s*.8)*.02;else if(e==="run")i.lArm.rotation.x=o*.5,i.rArm.rotation.x=-o*.5,i.lLeg.rotation.x=o,i.rLeg.rotation.x=-o,i.torso.rotation.x=-.05;else if(e==="sprint")i.lArm.rotation.x=a*.65,i.rArm.rotation.x=-a*.65,i.lLeg.rotation.x=a,i.rLeg.rotation.x=-a,i.torso.rotation.x=-.12;else if(e==="kick"){const l=Math.min(i.phase*4,1);i.rLeg.rotation.x=-l*1.2+Math.max(0,l-.5)*2,i.torso.rotation.x=l*.2}else if(e==="tackle")i.lLeg.rotation.x=.8,i.rLeg.rotation.x=-.3,i.torso.rotation.x=.3,i.lArm.rotation.x=-.4,i.rArm.rotation.x=.4;else if(e==="celebrate"){const l=Math.sin(s*6);i.lArm.rotation.x=-1.4+l*.3,i.rArm.rotation.x=-1.4-l*.3,i.lArm.rotation.z=.4,i.rArm.rotation.z=-.4,i.lLeg.rotation.x=Math.sin(s*6)*.3,i.rLeg.rotation.x=-Math.sin(s*6)*.3,n.position.y=Math.max(0,Math.sin(s*6)*.3)}}const HE=-18,VE=.55,ff=.97,gs=.22,GE=.5;function bp(n,e=16777215){const t=new En(gs,16,12),i=new on({color:e}),s=new Oe(t,i);s.castShadow=!0,s.receiveShadow=!1,s.position.set(0,gs,0);const r=new xi({color:1118481});for(let o=0;o<6;o++){const a=new wc(gs*.98,.012,6,32),l=new Oe(a,r);l.rotation.x=o/6*Math.PI,l.rotation.y=o/6*Math.PI*.7,s.add(l)}return s.userData.vel=new V(0,0,0),s.userData.angVel=new V(0,0,0),n.add(s),s}function Ep(n,e,t={}){const i=n.userData.vel;n.position.y>gs&&(i.y+=HE*e),n.position.x+=i.x*e,n.position.y+=i.y*e,n.position.z+=i.z*e,n.position.y<=gs&&(n.position.y=gs,Math.abs(i.y)>GE?i.y=-i.y*VE:i.y=0,i.x*=ff,i.z*=ff);const s=Pt/2+2;if(t.wallBounce){const o=t.wallX||Pt/2,a=t.wallZ||lt/2;Math.abs(n.position.x)>o&&(n.position.x=Math.sign(n.position.x)*o,i.x=-i.x*.75),Math.abs(n.position.z)>a&&(n.position.z=Math.sign(n.position.z)*a,i.z=-i.z*.75)}else Math.abs(n.position.x)>s&&(n.position.x=Math.sign(n.position.x)*s,i.x=-i.x*.4);i.length()>.1&&(n.rotation.x+=i.z*e*2,n.rotation.z-=i.x*e*2)}function Qs(n,e,t=1,i=.3){const s=18*t;n.userData.vel.set(e.x*s,i*s*.5,e.z*s)}function WE(n){const i=n.position.x,s=n.position.y,r=n.position.z;return r<-lt/2&&Math.abs(i)<3.66&&s<2.44?"home":r>lt/2&&Math.abs(i)<3.66&&s<2.44?"away":null}function Tp(n,e=0,t=0){n.position.set(e,gs,t),n.userData.vel.set(0,0,0)}function $E(n){const e=new Wt(55,n.clientWidth/n.clientHeight,.1,500);return wp(e,0),e}const XE=[{pos:new V(0,28,70),target:new V(0,0,0)},{pos:new V(0,6,-62),target:new V(0,2,50)},{pos:new V(0,80,.1),target:new V(0,0,0)},{pos:null,target:null}];function wp(n,e,t){if(e<3){const i=XE[e];n.position.copy(i.pos),n.lookAt(i.target)}}function qE(n,e){if(!e)return;const t=e.position.clone(),i=e.getWorldDirection(new V).multiplyScalar(-6);n.position.set(t.x+i.x,t.y+4,t.z+i.z+6),n.lookAt(t.x,t.y+1,t.z)}function YE(n){return(n+1)%4}const jE={class:"play-view"},KE={key:0,class:"screen select-screen"},JE={class:"team-pickers"},ZE={class:"picker-col"},QE={class:"club-grid"},e1=["disabled","onClick"],t1={class:"club-name"},n1={class:"club-league"},i1={class:"vs-col"},s1=["disabled"],r1={class:"picker-col"},o1={class:"club-grid"},a1=["disabled","onClick"],l1={class:"club-name"},c1={class:"club-league"},u1={key:1,class:"match-wrapper"},d1={class:"scorebar"},f1={class:"sb-team"},h1={class:"sb-center"},p1={class:"sb-score"},m1={class:"sb-time"},g1={class:"sb-team away"},v1={class:"cam-label"},_1={class:"overlay-content"},x1={class:"overlay-title"},y1={key:0,class:"overlay-sub"},M1={key:0,class:"touch-controls"},S1={class:"dpad"},b1={class:"action-btns"},E1={key:2,class:"screen post-screen"},T1={class:"post-card"},w1={class:"post-score"},A1={class:"score-big"},Fs=180,C1=7.32,R1={__name:"PlayView",setup(n){const e=Mi(),t=Me("select"),i=Me([]),s=Me(""),r=Me(""),o=Me(0),a=Me(0),l=Me(0),c=Me(!1),u=Me(null),d=Me(0),f=["TV Broadcast","Behind Goal","Wide","Follow"],h=Me(window.innerWidth<900),v=tt(()=>Math.floor(l.value/Fs*90)),x=Me(null),g=Me(null);let p,C,S,A,w=null,E=new Cc,b=[],P=0;const y={};function M(R){const D=kr[R];return D?"#"+D.primary.toString(16).padStart(6,"0"):"#888"}async function q(){try{const D=await(await fetch("/api/clubs")).json();i.value=D}catch{}}async function k(){t.value="match",await new Promise(R=>setTimeout(R,50)),F()}function F(){const R=x.value;g.value;const D=Rc(R);p=D.renderer,C=D.scene,S=$E(R),OE(C),FE(C),kE(C),BE(C),A=bp(C),Q(),Z(),window.addEventListener("resize",Z),window.addEventListener("keydown",ye),window.addEventListener("keyup",j),ve({title:"Kick Off!",sub:s.value+" vs "+r.value,cls:"overlay-kickoff",btn:"Play",action:me}),E.start(),fe()}function Q(){b=[];const R=[[0,-46],[-20,-32],[-7,-36],[7,-36],[20,-32],[-12,-18],[0,-20],[12,-18],[-18,-6],[0,-4],[18,-6]],D=R.map(([O,U])=>[-O,-U]);kr[s.value],kr[r.value],R.forEach(([O,U],W)=>{const z=ia(s.value,W===0,W%8);z.position.set(O,0,U),C.add(z),b.push({group:z,vel:new Le(0,0),team:"home",isGK:W===0,state:"idle",stateClock:0,idx:W})}),D.forEach(([O,U],W)=>{const z=ia(r.value,W===0,(W+4)%8);z.position.set(O,0,U),C.add(z),b.push({group:z,vel:new Le(0,0),team:"away",isGK:W===0,state:"idle",stateClock:0,idx:W})}),P=0,ne()}function ne(){b.forEach((R,D)=>{R.team==="home"&&R.group.scale.setScalar(D===P?1.08:1)})}function fe(){w=requestAnimationFrame(fe);const R=Math.min(E.getDelta(),.05);if(!c.value&&t.value==="match"&&!u.value&&(l.value+=R,pe(R)),d.value===3){const D=b[P];D&&qE(S,D.group)}Sp(p,S,x.value),p.render(C,S)}function pe(R){$();const D=b[P];D&&ae(D,R),b.forEach((U,W)=>{U.team==="home"&&W===P||ce(U,R)}),Ep(A,R);const O=WE(A);if(O){O==="away"?o.value++:a.value++,Se(O);return}l.value>=Fs/2&&l.value-R<Fs/2&&te(),l.value>=Fs&&ge()}function $(){let R=P,D=1/0;const O=A.position;b.forEach((U,W)=>{if(U.team!=="home")return;const z=U.group.position.distanceTo(O);z<D&&(D=z,R=W)}),R!==P&&(P=R,ne())}function ae(R,D){const O=y.x?10:6;let U=0,W=0;if((y.ArrowUp||y.w)&&(W=-1),(y.ArrowDown||y.s&&!y.s_tackle)&&(W=1),(y.ArrowLeft||y.a)&&(U=-1),(y.ArrowRight||y.d)&&(U=1),U!==0||W!==0){const z=Math.sqrt(U*U+W*W);R.group.position.x+=U/z*O*D,R.group.position.z+=W/z*O*D,R.group.rotation.y=Math.atan2(U,W),R.state=y.x?"sprint":"run"}else R.state="idle";if(R.group.position.x=Gn.clamp(R.group.position.x,-Pt/2+1,Pt/2-1),R.group.position.z=Gn.clamp(R.group.position.z,-lt/2+1,lt/2-1),y[" "]&&!y._passDone){y._passDone=!0;const z=G(R);Qs(A,z,.55,.15),R.state="kick"}if(y.z&&!y._shootDone){y._shootDone=!0;const z=se(R);Qs(A,z,1,.35),R.state="kick"}y.s&&y.s_tackle&&!y._tackleDone&&(y._tackleDone=!0,R.state="tackle",R.group.position.distanceTo(A.position)<3&&A.userData.vel.multiplyScalar(-.5)),sa(R.group,R.state,D)}function ce(R,D){const O=A.position,U=R.group.position,W=U.distanceTo(O);if(R.team==="away"){const z=new V(O.x-U.x,0,O.z-U.z).normalize(),re=R.isGK?4:5.5;if(W>2)R.group.position.x+=z.x*re*D,R.group.position.z+=z.z*re*D,R.group.rotation.y=Math.atan2(z.x,z.z),R.state="run";else{const _e=new V((Math.random()-.5)*4,0,-lt/2-U.z).normalize();Qs(A,_e,.9,.3),R.state="kick"}}else{const z=-30+R.idx*6,re=new V(O.x*.4+(Math.random()-.5)*8,0,Gn.clamp(O.z*.5+z,-lt/2,lt/2));if(U.distanceTo(re)>3){const he=re.clone().sub(U).normalize();R.group.position.x+=he.x*4*D,R.group.position.z+=he.z*4*D,R.state="run"}else R.state="idle"}R.group.position.x=Gn.clamp(R.group.position.x,-Pt/2+1,Pt/2-1),R.group.position.z=Gn.clamp(R.group.position.z,-lt/2+1,lt/2-1),sa(R.group,R.state,D)}function G(R){const D=A.position,O=R.group.position;return new V(D.x-O.x,0,D.z-O.z).normalize()}function se(R,D){const O=-lt/2,U=R.group.position,W=(Math.random()-.5)*C1*.8;return new V(W-U.x,0,O-U.z).normalize()}function Se(R){R==="away"?s.value:r.value;const D=R==="away"?`⚽ GOAL! ${s.value}!`:`⚽ GOAL! ${r.value}!`;b.forEach(O=>{O.team==="home"&&(O.state="celebrate")}),ve({title:D,sub:`${o.value} – ${a.value}`,cls:"overlay-goal"}),setTimeout(()=>{me(),Tp(A),X()},2200)}function te(){ve({title:"Half Time",sub:`${o.value} – ${a.value}`,cls:"overlay-halftime",btn:"Continue",action:()=>{me(),le()}})}function ge(){l.value=Fs,ve({title:"Full Time",sub:`${o.value} – ${a.value}`,cls:"overlay-fulltime",btn:"See Result",action:()=>{ie(),t.value="post"}})}function le(){b.forEach(R=>{R.group.position.x*=-1,R.group.position.z*=-1,R.group.rotation.y+=Math.PI})}function X(){const R=[[0,-46],[-20,-32],[-7,-36],[7,-36],[20,-32],[-12,-18],[0,-20],[12,-18],[-18,-6],[0,-4],[18,-6]],D=l.value>Fs/2;b.forEach((O,U)=>{const W=U%11;let[z,re]=R[W]||[0,0];O.team==="away"&&(z=-z,re=-re),D&&(z=-z,re=-re),O.group.position.set(z,0,re),O.state="idle"})}function ve(R){u.value=R}function me(){u.value=null}function ye(R){const D=R.key;y[D]=!0,D==="s"&&(y.s_tackle=!0),(D==="c"||D==="C")&&Y(),D==="Escape"&&(c.value=!c.value),D===" "&&R.preventDefault()}function j(R){const D=R.key;y[D]=!1,D==="s"&&(y.s_tackle=!1),D===" "&&(y._passDone=!1),D==="z"&&(y._shootDone=!1),D==="s"&&(y._tackleDone=!1)}function L(R){y[R]=!0}function N(R){y[R]=!1}function Y(){d.value=YE(d.value),d.value<3&&wp(S,d.value)}function Z(){if(!g.value||!x.value)return;const R=g.value.clientWidth,D=g.value.clientHeight;x.value.style.width=R+"px",x.value.style.height=D+"px",h.value=R<900}function ie(){w&&cancelAnimationFrame(w),window.removeEventListener("resize",Z),window.removeEventListener("keydown",ye),window.removeEventListener("keyup",j),p&&(p.dispose(),p=null)}function T(){ie(),e.push("/")}function _(){ie(),o.value=0,a.value=0,l.value=0,k()}return Ln(()=>{q()}),Zr(()=>{ie()}),(R,D)=>(K(),J("div",jE,[t.value==="select"?(K(),J("div",KE,[m("header",{class:"screen-header"},[m("button",{class:"back-btn",onClick:T},"← Back"),D[17]||(D[17]=m("h1",null,"Play the Game",-1)),D[18]||(D[18]=m("p",null,"Choose your team and opponent — 3D match",-1))]),m("div",JE,[m("div",ZE,[D[19]||(D[19]=m("h2",{class:"picker-title"},"🎮 Your Team",-1)),m("div",QE,[(K(!0),J(Fe,null,Ye(i.value,O=>(K(),J("button",{key:O.name,class:We(["club-btn",{selected:s.value===O.name,blocked:r.value===O.name}]),disabled:r.value===O.name,onClick:U=>s.value=O.name},[m("span",{class:"club-badge",style:An({background:M(O.name)})},null,4),m("span",t1,H(O.name),1),m("span",n1,H(O.league),1)],10,e1))),128))])]),m("div",i1,[D[20]||(D[20]=m("div",{class:"vs-badge"},"VS",-1)),m("button",{class:"kickoff-btn",disabled:!s.value||!r.value,onClick:k}," Kick Off ⚽ ",8,s1)]),m("div",r1,[D[21]||(D[21]=m("h2",{class:"picker-title"},"🤖 Opponent",-1)),m("div",o1,[(K(!0),J(Fe,null,Ye(i.value,O=>(K(),J("button",{key:O.name,class:We(["club-btn",{selected:r.value===O.name,blocked:s.value===O.name}]),disabled:s.value===O.name,onClick:U=>r.value=O.name},[m("span",{class:"club-badge",style:An({background:M(O.name)})},null,4),m("span",l1,H(O.name),1),m("span",c1,H(O.league),1)],10,a1))),128))])])])])):t.value==="match"?(K(),J("div",u1,[m("div",d1,[m("span",f1,H(s.value),1),m("div",h1,[m("span",p1,H(o.value)+" – "+H(a.value),1),m("span",m1,H(v.value)+"'",1)]),m("span",g1,H(r.value),1)]),m("div",{class:"canvas-wrap",ref_key:"canvasWrap",ref:g},[m("canvas",{ref_key:"threeCanvas",ref:x,class:"three-canvas"},null,512),m("div",v1,"📷 "+H(f[d.value]),1),yt(mc,{name:"overlay-fade"},{default:ma(()=>[u.value?(K(),J("div",{key:0,class:We(["overlay",u.value.cls])},[m("div",_1,[m("div",x1,H(u.value.title),1),u.value.sub?(K(),J("div",y1,H(u.value.sub),1)):ze("",!0),u.value.btn?(K(),J("button",{key:1,class:"overlay-btn",onClick:D[0]||(D[0]=(...O)=>u.value.action&&u.value.action(...O))},H(u.value.btn),1)):ze("",!0)])],2)):ze("",!0)]),_:1})],512),D[22]||(D[22]=tr('<div class="controls-bar" data-v-d3702852><span data-v-d3702852><kbd data-v-d3702852>↑↓←→</kbd> Move</span><span data-v-d3702852><kbd data-v-d3702852>Space</kbd> Pass</span><span data-v-d3702852><kbd data-v-d3702852>Z</kbd> Shoot</span><span data-v-d3702852><kbd data-v-d3702852>X</kbd> Sprint</span><span data-v-d3702852><kbd data-v-d3702852>S</kbd> Tackle</span><span data-v-d3702852><kbd data-v-d3702852>C</kbd> Camera</span><span data-v-d3702852><kbd data-v-d3702852>Esc</kbd> Pause</span></div>',1)),h.value?(K(),J("div",M1,[m("div",S1,[m("button",{class:"dpad-btn dpad-up",onTouchstart:D[1]||(D[1]=Ct(O=>L("ArrowUp"),["prevent"])),onTouchend:D[2]||(D[2]=Ct(O=>N("ArrowUp"),["prevent"]))},"↑",32),m("button",{class:"dpad-btn dpad-left",onTouchstart:D[3]||(D[3]=Ct(O=>L("ArrowLeft"),["prevent"])),onTouchend:D[4]||(D[4]=Ct(O=>N("ArrowLeft"),["prevent"]))},"←",32),m("button",{class:"dpad-btn dpad-right",onTouchstart:D[5]||(D[5]=Ct(O=>L("ArrowRight"),["prevent"])),onTouchend:D[6]||(D[6]=Ct(O=>N("ArrowRight"),["prevent"]))},"→",32),m("button",{class:"dpad-btn dpad-down",onTouchstart:D[7]||(D[7]=Ct(O=>L("ArrowDown"),["prevent"])),onTouchend:D[8]||(D[8]=Ct(O=>N("ArrowDown"),["prevent"]))},"↓",32)]),m("div",b1,[m("button",{class:"act-btn act-pass",onTouchstart:D[9]||(D[9]=Ct(O=>L(" "),["prevent"])),onTouchend:D[10]||(D[10]=Ct(O=>N(" "),["prevent"]))},"PASS",32),m("button",{class:"act-btn act-shoot",onTouchstart:D[11]||(D[11]=Ct(O=>L("z"),["prevent"])),onTouchend:D[12]||(D[12]=Ct(O=>N("z"),["prevent"]))},"SHOOT",32),m("button",{class:"act-btn act-sprint",onTouchstart:D[13]||(D[13]=Ct(O=>L("x"),["prevent"])),onTouchend:D[14]||(D[14]=Ct(O=>N("x"),["prevent"]))},"SPRINT",32),m("button",{class:"act-btn act-tackle",onTouchstart:D[15]||(D[15]=Ct(O=>L("s"),["prevent"])),onTouchend:D[16]||(D[16]=Ct(O=>N("s"),["prevent"]))},"TACKLE",32),m("button",{class:"act-btn act-cam",onTouchstart:Ct(Y,["prevent"])},"CAM",32)])])):ze("",!0)])):t.value==="post"?(K(),J("div",E1,[m("div",T1,[D[23]||(D[23]=m("h2",null,"Full Time",-1)),m("div",w1,[m("span",null,H(s.value),1),m("span",A1,H(o.value)+" – "+H(a.value),1),m("span",null,H(r.value),1)]),m("div",{class:"post-actions"},[m("button",{class:"btn btn-primary",onClick:_},"Rematch"),m("button",{class:"btn btn-secondary",onClick:T},"Main Menu")])])])):ze("",!0)]))}},P1=an(R1,[["__scopeId","data-v-d3702852"]]),L1={class:"ev-minute"},D1={class:"ev-icon"},I1={class:"ev-team"},N1={class:"ev-player"},U1={key:0,class:"ev-detail"},O1={key:0,class:"empty"},F1={__name:"EventFeed",props:{events:{type:Array,default:()=>[]}},setup(n){const e=n,t=Me(null),i={goal:"⚽",yellow:"🟨",red:"🟥",save:"🧤",miss:"💨",substitution:"🔄",injury:"🤕"};function s(r){return r?r.split(" ").slice(0,2).join(" "):""}return Cr(()=>e.events.length,async()=>{await pa(),t.value&&(t.value.scrollTop=t.value.scrollHeight)}),(r,o)=>(K(),J("div",{class:"event-feed",ref_key:"feedEl",ref:t},[(K(!0),J(Fe,null,Ye(n.events,(a,l)=>(K(),J("div",{key:l,class:We(["event-row",a.type])},[m("span",L1,H(a.minute)+"'",1),m("span",D1,H(i[a.type]||"•"),1),m("span",I1,H(s(a.team)),1),m("span",N1,H(a.player),1),a.detail?(K(),J("span",U1,"— "+H(a.detail),1)):ze("",!0)],2))),128)),n.events.length===0?(K(),J("div",O1,"Waiting for kick-off…")):ze("",!0)],512))}},k1=an(F1,[["__scopeId","data-v-8a17ad14"]]),B1={class:"postmatch"},z1={class:"score-banner"},H1={class:"team-block"},V1={class:"team-name"},G1={class:"score-center"},W1={class:"final-score"},$1={class:"team-block away"},X1={class:"team-name"},q1={key:0,class:"section"},Y1={class:"scorers-list"},j1={class:"scorer-name"},K1={class:"scorer-minute"},J1={class:"section stats-grid"},Z1={class:"section ratings-grid"},Q1={class:"ratings-cols"},eT={class:"ratings-col"},tT={class:"r-name"},nT={class:"r-bar-wrap"},iT={class:"r-val"},sT={class:"ratings-col"},rT={class:"r-name"},oT={class:"r-bar-wrap"},aT={class:"r-val"},lT={key:1,class:"section motm-section"},cT={class:"motm-card"},uT={class:"motm-face"},dT=["src"],fT={key:1,viewBox:"0 0 80 80",class:"motm-svg"},hT={class:"motm-info"},pT={class:"motm-name"},mT={class:"motm-rating"},gT={components:{StatBar:{props:["label","home","away","unit","total"],template:`
        <div class="stat-bar-row">
          <span class="sb-val">{{ home }}{{ unit || '' }}</span>
          <span class="sb-label">{{ label }}</span>
          <span class="sb-val away">{{ away }}{{ unit || '' }}</span>
          <div class="sb-track">
            <div class="sb-fill-home" :style="{ width: homeW + '%' }"></div>
            <div class="sb-fill-away" :style="{ width: awayW + '%' }"></div>
          </div>
        </div>
      `,computed:{homeW(){const n=this.total||this.home+this.away;return n?this.home/n*100:50},awayW(){const n=this.total||this.home+this.away;return n?this.away/n*100:50}}}}},vT=Object.assign(gT,{__name:"PostMatch",props:{result:{type:Object,required:!0}},emits:["back"],setup(n){const e=n,t=Me(!0),i=tt(()=>[...e.result.scorers||[]].sort((a,l)=>a.minute-l.minute)),s=tt(()=>e.result.ratings.filter(a=>a.team==="home").slice(0,5)),r=tt(()=>e.result.ratings.filter(a=>a.team==="away").slice(0,5));function o(a){return a>=8?"#27ae60":a>=6.5?"#f39c12":"#e74c3c"}return(a,l)=>{var u;const c=ih("StatBar");return K(),J("div",B1,[m("div",z1,[m("div",H1,[m("span",V1,H(n.result.home),1)]),m("div",G1,[m("span",W1,H(n.result.score.home)+" – "+H(n.result.score.away),1),l[2]||(l[2]=m("span",{class:"full-time-label"},"Full Time",-1))]),m("div",$1,[m("span",X1,H(n.result.away),1)])]),i.value.length?(K(),J("div",q1,[l[3]||(l[3]=m("h3",{class:"section-title"},"⚽ Goal Scorers",-1)),m("div",Y1,[(K(!0),J(Fe,null,Ye(i.value,d=>(K(),J("div",{key:d.player+d.minute,class:"scorer-row"},[m("span",{class:We(["scorer-team-dot",d.team])},null,2),m("span",j1,H(d.player),1),m("span",K1,H(d.minute)+"'",1)]))),128))])])):ze("",!0),m("div",J1,[l[4]||(l[4]=m("h3",{class:"section-title"},"📊 Match Stats",-1)),yt(c,{label:"Possession",home:n.result.possession.home,away:n.result.possession.away,unit:"%"},null,8,["home","away"]),yt(c,{label:"Shots",home:n.result.shots.home,away:n.result.shots.away,total:n.result.shots.home+n.result.shots.away},null,8,["home","away","total"]),yt(c,{label:"On Target",home:n.result.shots_on_target.home,away:n.result.shots_on_target.away,total:n.result.shots.home+n.result.shots.away},null,8,["home","away","total"])]),m("div",Z1,[l[5]||(l[5]=m("h3",{class:"section-title"},"⭐ Player Ratings",-1)),m("div",Q1,[m("div",eT,[m("h4",null,H(n.result.home),1),(K(!0),J(Fe,null,Ye(s.value,d=>(K(),J("div",{key:d.player,class:"rating-row"},[m("span",tT,H(d.player),1),m("div",nT,[m("div",{class:"r-bar",style:An({width:d.rating/10*100+"%",background:o(d.rating)})},null,4)]),m("span",iT,H(d.rating.toFixed(1)),1)]))),128))]),m("div",sT,[m("h4",null,H(n.result.away),1),(K(!0),J(Fe,null,Ye(r.value,d=>(K(),J("div",{key:d.player,class:"rating-row"},[m("span",rT,H(d.player),1),m("div",oT,[m("div",{class:"r-bar",style:An({width:d.rating/10*100+"%",background:o(d.rating)})},null,4)]),m("span",aT,H(d.rating.toFixed(1)),1)]))),128))])])]),(u=n.result.motm)!=null&&u.player?(K(),J("div",lT,[l[7]||(l[7]=m("h3",{class:"section-title"},"🏅 Man of the Match",-1)),m("div",cT,[m("div",uT,[t.value&&n.result.motm.face_url?(K(),J("img",{key:0,src:n.result.motm.face_url,onError:l[0]||(l[0]=d=>t.value=!1),class:"motm-img"},null,40,dT)):(K(),J("svg",fT,[...l[6]||(l[6]=[m("circle",{cx:"40",cy:"28",r:"18",fill:"rgba(255,215,0,.5)"},null,-1),m("ellipse",{cx:"40",cy:"72",rx:"26",ry:"20",fill:"rgba(255,215,0,.5)"},null,-1)])]))]),m("div",hT,[m("div",pT,H(n.result.motm.player),1),m("div",mT,H(n.result.motm.rating.toFixed(1))+" / 10",1)])])])):ze("",!0),m("button",{class:"back-btn",onClick:l[1]||(l[1]=d=>a.$emit("back"))},"← Back to Menu")])}}}),_T=an(vT,[["__scopeId","data-v-c276b6ca"]]),xT={class:"watch-view"},yT={key:0,class:"screen select-screen"},MT={class:"team-pickers"},ST={class:"picker-col"},bT={class:"club-grid"},ET=["disabled","onClick"],TT={class:"club-name"},wT={class:"club-league"},AT={class:"vs-col"},CT=["disabled"],RT={class:"picker-col"},PT={class:"club-grid"},LT=["disabled","onClick"],DT={class:"club-name"},IT={class:"club-league"},NT={key:1,class:"screen match-screen"},UT={class:"match-scorebar"},OT={class:"team-name"},FT={class:"scorebox"},kT={class:"team-name"},BT={class:"feed-wrap"},zT={class:"match-footer"},HT={class:"progress-bar"},VT={class:"progress-label"},GT={key:2,class:"screen"},WT={key:3,class:"screen loading-screen"},$T={__name:"WatchView",setup(n){const e=Mi(),t=Me([]),i=Me(""),s=Me(""),r=Me("select"),o=Me(null),a=Me([]),l=tt(()=>o.value?a.value.length/o.value.events.length*100:0);Ln(async()=>{try{const f=await fetch("/api/clubs");t.value=await f.json()}catch{}});function c(){e.push("/")}async function u(){if(!(!i.value||!s.value)){r.value="loading";try{const f=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({home:i.value,away:s.value})});o.value=await f.json(),r.value="match",d()}catch{r.value="select",alert("Simulation failed — is the backend running?")}}}function d(){const f=o.value.events;let h=0;const v=setInterval(()=>{if(h>=f.length){clearInterval(v),setTimeout(()=>{r.value="postmatch"},1200);return}a.value.push(f[h++])},90)}return(f,h)=>(K(),J("div",xT,[r.value==="select"?(K(),J("div",yT,[m("header",{class:"screen-header"},[m("button",{class:"back-btn",onClick:c},"← Back"),h[0]||(h[0]=m("h1",null,"Watch the Play",-1)),h[1]||(h[1]=m("p",null,"Pick two clubs and watch the simulation unfold",-1))]),m("div",MT,[m("div",ST,[h[2]||(h[2]=m("h2",{class:"picker-title"},"🏠 Home Team",-1)),m("div",bT,[(K(!0),J(Fe,null,Ye(t.value,v=>(K(),J("button",{key:v.name,class:We(["club-btn",{selected:i.value===v.name,blocked:s.value===v.name}]),disabled:s.value===v.name,onClick:x=>i.value=v.name},[m("span",TT,H(v.name),1),m("span",wT,H(v.league),1)],10,ET))),128))])]),m("div",AT,[h[3]||(h[3]=m("div",{class:"vs-badge"},"VS",-1)),m("button",{class:"kickoff-btn",disabled:!i.value||!s.value,onClick:u}," Kick Off ⚽ ",8,CT)]),m("div",RT,[h[4]||(h[4]=m("h2",{class:"picker-title"},"✈️ Away Team",-1)),m("div",PT,[(K(!0),J(Fe,null,Ye(t.value,v=>(K(),J("button",{key:v.name,class:We(["club-btn",{selected:s.value===v.name,blocked:i.value===v.name}]),disabled:i.value===v.name,onClick:x=>s.value=v.name},[m("span",DT,H(v.name),1),m("span",IT,H(v.league),1)],10,LT))),128))])])])])):r.value==="match"?(K(),J("div",NT,[m("div",UT,[m("span",OT,H(o.value.home),1),m("span",FT,H(o.value.score.home)+" – "+H(o.value.score.away),1),m("span",kT,H(o.value.away),1)]),m("div",BT,[yt(k1,{events:a.value},null,8,["events"])]),m("div",zT,[m("div",HT,[m("div",{class:"progress-fill",style:An({width:l.value+"%"})},null,4)]),m("span",VT,H(a.value.length)+" / "+H(o.value.events.length)+" events",1)])])):r.value==="postmatch"?(K(),J("div",GT,[yt(_T,{result:o.value,onBack:c},null,8,["result"])])):(K(),J("div",WT,[...h[5]||(h[5]=[m("div",{class:"spinner"},null,-1),m("p",null,"Simulating match…",-1)])]))]))}},XT=an($T,[["__scopeId","data-v-67296064"]]),qT={class:"career-view"},YT={class:"screen-header"},jT={key:0,class:"phase-wrap"},KT={class:"club-grid"},JT=["onClick"],ZT={class:"cc-name"},QT={class:"cc-league"},ew={class:"cc-prestige"},tw=["disabled"],nw={key:1,class:"phase-wrap season-layout"},iw={class:"standings-panel"},sw={class:"panel-title"},rw={class:"standings-table"},ow={class:"td-club"},aw={class:"td-pts"},lw={class:"budget-bar"},cw={class:"budget-val"},uw={key:0,class:"training-bar"},dw={class:"fixtures-panel"},fw={class:"fixtures-header"},hw={class:"panel-title"},pw={class:"matchday-badge"},mw={class:"fixture-list"},gw={class:"md-badge"},vw={key:0,class:"fx-score"},_w={key:1,class:"fx-vs"},xw={key:2,class:"fx-actions"},yw=["onClick"],Mw=["disabled","onClick"],Sw={key:0,class:"sim-overlay"},bw={key:1,class:"season-end"},Ew={key:2,class:"phase-wrap result-phase"},Tw={class:"result-card"},ww={class:"result-score"},Aw={class:"result-outcome"},Cw={key:0,class:"result-scorers"},Rw={class:"min"},Pw={class:"sc-team"},Cl="tbg_career",Lw={__name:"CareerView",setup(n){const e=Mi(),t=Me("select"),i=Me([]),s=Me(""),r=Me(!1),o=Me(null),a=Me({club:"",league:"",budget:0,season:1,trainingAvailable:!1,fixtures:[]});Ln(async()=>{try{const b=await fetch("/api/clubs");i.value=await b.json()}catch{}const E=localStorage.getItem(Cl);if(E)try{a.value=JSON.parse(E),t.value="season"}catch{}});async function l(){const E=i.value.find(b=>b.name===s.value);if(E)try{const P=await(await fetch(`/api/career/fixtures/${encodeURIComponent(E.league)}`)).json();a.value={club:s.value,league:E.league,budget:E.prestige*5e3,season:1,trainingAvailable:!0,fixtures:P.fixtures,clubs:P.clubs},A(),t.value="season"}catch{alert("Could not load fixtures — is the backend running?")}}const c=tt(()=>{const E=a.value.clubs||[],b={};E.forEach(P=>{b[P]={club:P,played:0,won:0,drawn:0,lost:0,gf:0,ga:0,points:0}});for(const P of a.value.fixtures||[]){if(!P.played)continue;const y=P.home,M=P.away;!b[y]||!b[M]||(b[y].played++,b[y].gf+=P.home_score,b[y].ga+=P.away_score,b[M].played++,b[M].gf+=P.away_score,b[M].ga+=P.home_score,P.home_score>P.away_score?(b[y].won++,b[y].points+=3,b[M].lost++):P.away_score>P.home_score?(b[M].won++,b[M].points+=3,b[y].lost++):(b[y].drawn++,b[y].points++,b[M].drawn++,b[M].points++))}return Object.values(b).sort((P,y)=>{const M=P.gf-P.ga,q=y.gf-y.ga;return y.points-P.points||q-M||y.gf-P.gf||P.club.localeCompare(y.club)})}),u=tt(()=>{var b;const E=(b=a.value.fixtures)==null?void 0:b.filter(P=>P.played&&x(P));return((E==null?void 0:E.length)||0)+1}),d=tt(()=>(a.value.fixtures||[]).slice(0,60)),f=tt(()=>{var E,b;return((E=a.value.fixtures)==null?void 0:E.every(P=>P.played))&&((b=a.value.fixtures)==null?void 0:b.length)>0}),h=tt(()=>c.value.findIndex(E=>E.club===a.value.club)+1),v=tt(()=>{if(!o.value)return"";const E=o.value,b=E.home===a.value.club,P=b?E.home_score:E.away_score,y=b?E.away_score:E.home_score;return P>y?"✅ Victory!":P===y?"🤝 Draw":"❌ Defeat"});function x(E){return E.home===a.value.club||E.away===a.value.club}function g(E){e.push(`/play?home=${encodeURIComponent(E.home)}&away=${encodeURIComponent(E.away)}&career=1`)}async function p(E){r.value=!0;try{const P=await(await fetch("/api/career/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({home:E.home,away:E.away})})).json();E.home_score=P.score.home,E.away_score=P.score.away,E.played=!0,o.value={home:E.home,away:E.away,home_score:E.home_score,away_score:E.away_score,scorers:P.scorers},A(),t.value="result"}catch{alert("Simulation failed")}finally{r.value=!1}}function C(){a.value.fixtures.forEach(E=>{E.played=!1,E.home_score=-1,E.away_score=-1}),a.value.season++,a.value.trainingAvailable=!0,A(),t.value="season"}function S(){localStorage.removeItem(Cl),t.value="select",s.value=""}function A(){localStorage.setItem(Cl,JSON.stringify(a.value))}function w(E){const b=["th","st","nd","rd"],P=E%100;return b[(P-20)%10]||b[P]||b[0]}return(E,b)=>(K(),J("div",qT,[m("div",YT,[m("button",{class:"back-btn",onClick:b[0]||(b[0]=P=>E.$router.push("/"))},"← Back"),b[2]||(b[2]=m("h1",null,"Career Mode",-1)),b[3]||(b[3]=m("p",null,"Manage your club through a full season",-1))]),t.value==="select"?(K(),J("div",jT,[b[4]||(b[4]=m("h2",{class:"phase-title"},"Choose Your Club",-1)),m("div",KT,[(K(!0),J(Fe,null,Ye(i.value,P=>(K(),J("button",{key:P.name,class:We(["club-card",{selected:s.value===P.name}]),onClick:y=>s.value=P.name},[m("span",ZT,H(P.name),1),m("span",QT,H(P.league),1),m("span",ew,"⭐ "+H(P.prestige)+"/10",1)],10,JT))),128))]),m("button",{class:"action-btn",disabled:!s.value,onClick:l}," Start Career ⚽ ",8,tw)])):t.value==="season"?(K(),J("div",nw,[m("aside",iw,[m("h3",sw,H(a.value.league)+" — Standings",1),m("table",rw,[b[5]||(b[5]=m("thead",null,[m("tr",null,[m("th",null,"#"),m("th",null,"Club"),m("th",null,"P"),m("th",null,"W"),m("th",null,"D"),m("th",null,"L"),m("th",null,"GD"),m("th",null,"Pts")])],-1)),m("tbody",null,[(K(!0),J(Fe,null,Ye(c.value,(P,y)=>(K(),J("tr",{key:P.club,class:We({"my-club":P.club===a.value.club})},[m("td",null,H(y+1),1),m("td",ow,H(P.club),1),m("td",null,H(P.played),1),m("td",null,H(P.won),1),m("td",null,H(P.drawn),1),m("td",null,H(P.lost),1),m("td",null,H(P.gd>=0?"+"+P.gd:P.gd),1),m("td",aw,H(P.points),1)],2))),128))])]),m("div",lw,[b[6]||(b[6]=m("span",null,"Budget",-1)),m("span",cw,"£"+H((a.value.budget/1e3).toFixed(0))+"M",1)]),a.value.trainingAvailable?(K(),J("div",uw,[...b[7]||(b[7]=[m("span",null,"🏋️ Training slot available!",-1)])])):ze("",!0)]),m("main",dw,[m("div",fw,[m("h3",hw,"Season Fixtures — "+H(a.value.club),1),m("span",pw,"MD "+H(u.value),1)]),m("div",mw,[(K(!0),J(Fe,null,Ye(d.value,P=>(K(),J("div",{key:P.matchday+P.home+P.away,class:We(["fixture-row",{"my-fixture":x(P),played:P.played}])},[m("span",gw,"MD"+H(P.matchday),1),m("span",{class:We(["fx-team",{"my-team":P.home===a.value.club}])},H(P.home),3),P.played?(K(),J("span",vw,H(P.home_score)+" – "+H(P.away_score),1)):(K(),J("span",_w,"vs")),m("span",{class:We(["fx-team away",{"my-team":P.away===a.value.club}])},H(P.away),3),x(P)&&!P.played?(K(),J("div",xw,[m("button",{class:"fx-btn play-btn",onClick:y=>g(P)},"Play",8,yw),m("button",{class:"fx-btn sim-btn",disabled:r.value,onClick:y=>p(P)},"Simulate",8,Mw)])):ze("",!0)],2))),128))]),r.value?(K(),J("div",Sw,"Simulating…")):ze("",!0),f.value?(K(),J("div",bw,[b[8]||(b[8]=m("h2",null,"🏆 Season Complete!",-1)),m("p",null,H(c.value[0].club)+" are Champions!",1),m("p",null,"You finished "+H(h.value)+H(w(h.value)),1),m("button",{class:"action-btn",onClick:C},"Start Next Season"),m("button",{class:"action-btn secondary-btn",onClick:S},"End Career")])):ze("",!0)])])):t.value==="result"?(K(),J("div",Ew,[m("div",Tw,[m("h2",null,[nn(H(o.value.home)+" ",1),m("span",ww,H(o.value.home_score)+" – "+H(o.value.away_score),1),nn(" "+H(o.value.away),1)]),m("p",Aw,H(v.value),1),o.value.scorers&&o.value.scorers.length?(K(),J("div",Cw,[(K(!0),J(Fe,null,Ye(o.value.scorers,P=>(K(),J("div",{key:P.player+P.minute},[nn(" ⚽ "+H(P.player)+" ",1),m("span",Rw,H(P.minute)+"'",1),m("span",Pw,"("+H(P.team==="home"?o.value.home:o.value.away)+")",1)]))),128))])):ze("",!0),m("button",{class:"action-btn",onClick:b[1]||(b[1]=P=>t.value="season")},"Continue")])])):ze("",!0)]))}},Dw=an(Lw,[["__scopeId","data-v-9b9986a2"]]),Iw={class:"journey-view"},Nw={class:"screen-header"},Uw={key:0,class:"hub-wrap"},Ow={class:"ori-card"},Fw={class:"ori-info"},kw={class:"ori-club"},Bw={class:"ori-stats"},zw={class:"os-label"},Hw={class:"os-val"},Vw={class:"chapter-list"},Gw=["onClick"],Ww={class:"ch-num"},$w={class:"ch-info"},Xw={class:"ch-title"},qw={class:"ch-club"},Yw={class:"ch-status"},jw={key:0},Kw={key:1},Jw={key:2},Zw={key:1,class:"story-wrap"},Qw={class:"story-card"},eA={class:"chapter-label"},tA=["innerHTML"],nA={class:"objective-box"},iA={class:"obj-text"},sA={key:0,class:"choice-flavor"},rA={key:2,class:"story-wrap"},oA={class:"story-card"},aA={class:"chapter-label"},lA={key:0,class:"match-score"},cA=["innerHTML"],uA={key:0,class:"choice-box"},dA={class:"choice-question"},fA={key:1,class:"next-actions"},hA={key:0,class:"ovr-gain"},pA={key:3,class:"story-wrap"},mA={class:"story-card complete-card"},gA={class:"ori-final"},vA={class:"ori-ovr-big"},_A={class:"ori-pos"},Rl="tbg_journey",xA={__name:"JourneyView",setup(n){const e=Mi(),t=Me("hub"),i=Me([]),s=Me({overall:72,club:"Youth Academy",pace:72,shooting:68,passing:74,dribbling:73,defending:55,physical:68}),r=Me({completedChapters:[],choices:{},oriOvr:72}),o=Me(null),a=Me(!1),l=Me(null),c=Me(!1),u=Me(0),d={1:"Youth Academy",2:"Hotspur FC",3:"Blues Man City",4:"Blues Man City",5:"White Madrid FC"};Ln(async()=>{try{const ae=[1,2,3,4,5].map(ce=>fetch(`/api/journey/chapter/${ce}`).then(G=>G.json()));i.value=await Promise.all(ae)}catch{}const $=localStorage.getItem(Rl);if($)try{const ae=JSON.parse($);r.value=ae.progress||r.value,s.value.overall=r.value.oriOvr||72,s.value.club=d[f.value]||"Youth Academy"}catch{}});const f=tt(()=>Math.min(5,(r.value.completedChapters.length||0)+1)),h=tt(()=>r.value.completedChapters.length>=5),v=tt(()=>{var $;return(($=o.value)==null?void 0:$.number)===5}),x=tt(()=>{const $=s.value.overall;return $>=90?"tier-gold":$>=85?"tier-silver":"tier-standard"}),g=tt(()=>({PAC:s.value.pace,SHO:s.value.shooting,PAS:s.value.passing,DRI:s.value.dribbling,DEF:s.value.defending,PHY:s.value.physical})),p=tt(()=>{var $;return(($=o.value)==null?void 0:$.intro.replace(/\n\n/g,"</p><p>").replace(/^/,"<p>").replace(/$/,"</p>"))||""}),C=tt(()=>{var ae,ce;const $=a.value?(ae=o.value)==null?void 0:ae.post_win:(ce=o.value)==null?void 0:ce.post_loss;return($==null?void 0:$.replace(/\n\n/g,"</p><p>").replace(/^/,"<p>").replace(/$/,"</p>"))||""}),S=tt(()=>{var ce,G;if(!o.value||o.value.number<=1)return"";const $=o.value.number-1;return r.value.choices[$]==="spoke"&&((G=(ce=i.value.find(se=>se.number===$))==null?void 0:ce.choice)==null?void 0:G.flavor_next)||""});function A($){return r.value.completedChapters.includes($)}function w($){return $===f.value}function E($){return $>f.value}function b($){const ae=i.value.find(ce=>ce.number===$);ae&&(o.value=ae,c.value=!1,l.value=null,t.value="intro")}function P(){e.push(`/play?home=${encodeURIComponent(o.value.home_club)}&away=${encodeURIComponent(o.value.away_club)}&journey=${o.value.number}`)}async function y(){try{const ae=await(await fetch("/api/journey/result",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chapter:o.value.number})})).json();a.value=ae.won,u.value=ae.ori_ovr_gain,l.value=ae.match,M()}catch{alert("Simulation failed")}}function M(){a.value&&(s.value.overall+=u.value,r.value.oriOvr=s.value.overall,s.value.club=d[o.value.number]),t.value="post"}function q(){r.value.choices[o.value.number]="spoke",c.value=!0,F()}function k(){r.value.choices[o.value.number]="silent",c.value=!0,F()}function F(){r.value.completedChapters.includes(o.value.number)||r.value.completedChapters.push(o.value.number),pe()}function Q(){if(!o.value)return;const $=i.value.find(ae=>ae.number===o.value.number+1);$?b($.number):t.value="hub"}function ne(){F(),t.value="complete"}function fe(){r.value={completedChapters:[],choices:{},oriOvr:72},s.value={overall:72,club:"Youth Academy",pace:72,shooting:68,passing:74,dribbling:73,defending:55,physical:68},localStorage.removeItem(Rl),t.value="hub"}function pe(){localStorage.setItem(Rl,JSON.stringify({progress:r.value}))}return($,ae)=>(K(),J("div",Iw,[m("div",Nw,[m("button",{class:"back-btn",onClick:ae[0]||(ae[0]=ce=>$.$router.push("/"))},"← Back"),ae[2]||(ae[2]=m("h1",null,"The Journey",-1)),ae[3]||(ae[3]=m("p",null,"Ori Franklin — Rise to the Top",-1))]),t.value==="hub"?(K(),J("div",Uw,[m("div",Ow,[m("div",{class:We(["ori-badge",x.value])},H(s.value.overall),3),m("div",Fw,[ae[4]||(ae[4]=m("div",{class:"ori-name"},"Ori Franklin",-1)),ae[5]||(ae[5]=m("div",{class:"ori-pos"},"CM",-1)),m("div",kw,H(s.value.club),1)]),m("div",Bw,[(K(!0),J(Fe,null,Ye(g.value,(ce,G)=>(K(),J("div",{class:"os",key:G},[m("span",zw,H(G),1),m("span",Hw,H(ce),1)]))),128))])]),m("div",Vw,[(K(!0),J(Fe,null,Ye(i.value,ce=>(K(),J("div",{key:ce.number,class:We(["chapter-row",{completed:A(ce.number),current:w(ce.number),locked:E(ce.number)}]),onClick:G=>!E(ce.number)&&b(ce.number)},[m("div",Ww,H(ce.number),1),m("div",$w,[m("div",Xw,H(ce.title),1),m("div",qw,H(ce.club),1)]),m("div",Yw,[A(ce.number)?(K(),J("span",jw,"✅")):w(ce.number)?(K(),J("span",Kw,"▶")):(K(),J("span",Jw,"🔒"))])],10,Gw))),128))]),h.value?(K(),J("button",{key:0,class:"action-btn",onClick:fe},"Play Again")):ze("",!0)])):t.value==="intro"?(K(),J("div",Zw,[m("div",Qw,[m("div",eA,"Chapter "+H(o.value.number)+" — "+H(o.value.title),1),m("div",{class:"story-text",innerHTML:p.value},null,8,tA),m("div",nA,[ae[6]||(ae[6]=m("span",{class:"obj-label"},"🎯 Objective",-1)),m("span",iA,H(o.value.objective),1)]),S.value?(K(),J("div",sA,[m("em",null,H(S.value),1)])):ze("",!0),m("div",{class:"intro-actions"},[m("button",{class:"action-btn",onClick:P},"Play the Match"),m("button",{class:"action-btn secondary-btn",onClick:y},"Simulate")])])])):t.value==="post"?(K(),J("div",rA,[m("div",oA,[m("div",aA,"Chapter "+H(o.value.number)+" — "+H(o.value.title),1),m("div",{class:We(["match-result-banner",a.value?"win-banner":"loss-banner"])},[nn(H(a.value?"✅ Victory":"❌ Defeat")+" ",1),l.value?(K(),J("span",lA,H(l.value.home)+" "+H(l.value.score.home)+" – "+H(l.value.score.away)+" "+H(l.value.away),1)):ze("",!0)],2),m("div",{class:"story-text",innerHTML:C.value},null,8,cA),o.value.choice&&!c.value?(K(),J("div",uA,[m("p",dA,H(o.value.choice.text),1),m("div",{class:"choice-btns"},[m("button",{class:"action-btn",onClick:q},"Speak your mind"),m("button",{class:"action-btn secondary-btn",onClick:k},"Stay silent")])])):ze("",!0),c.value||!o.value.choice?(K(),J("div",fA,[a.value&&u.value>0?(K(),J("div",hA," ⬆️ Ori's OVR: "+H(s.value.overall)+" (+"+H(u.value)+") ",1)):ze("",!0),v.value?(K(),J("button",{key:2,class:"action-btn",onClick:ne},"🏆 Finish The Journey")):(K(),J("button",{key:1,class:"action-btn",onClick:Q},"Next Chapter →"))])):ze("",!0)])])):t.value==="complete"?(K(),J("div",pA,[m("div",mA,[ae[8]||(ae[8]=m("div",{class:"complete-title"},"The Journey Complete",-1)),m("div",gA,[m("div",vA,H(s.value.overall),1),ae[7]||(ae[7]=m("div",{class:"ori-name-big"},"Ori Franklin",-1)),m("div",_A,"CM — "+H(s.value.club),1)]),ae[9]||(ae[9]=m("p",{class:"complete-text"},"From a trial at Hotspur to a Champions League winner. One incredible journey.",-1)),m("button",{class:"action-btn",onClick:ae[1]||(ae[1]=ce=>$.$router.push("/"))},"Back to Menu"),m("button",{class:"action-btn secondary-btn",onClick:fe},"Play Again")])])):ze("",!0)]))}},yA=an(xA,[["__scopeId","data-v-ad82f953"]]),MA={class:"ut-view"},SA={class:"coins-bar"},bA={class:"coins-label"},EA={class:"tab-nav"},TA=["onClick"],wA={key:0,class:"tab-content"},AA={class:"squad-header"},CA={class:"squad-stats"},RA={class:"stat-chip"},PA={class:"stat-val gold"},LA={class:"stat-chip"},DA={class:"simulate-area"},IA=["value"],NA=["disabled"],UA={class:"squad-list"},OA=["onClick"],FA={class:"pos-badge"},kA={class:"slot-name"},BA={key:1,class:"slot-empty"},zA={key:1,class:"tab-content"},HA={key:0,class:"packs-grid"},VA={class:"pack-icon"},GA={class:"pack-name"},WA={class:"pack-desc"},$A={class:"pack-details"},XA={class:"pack-cards-count"},qA={class:"pack-cost gold"},YA=["disabled","onClick"],jA={key:1,class:"pack-opening"},KA={class:"opening-title"},JA={class:"revealed-cards"},ZA={class:"card-tier-label"},QA={class:"card-pos"},eC={class:"card-ovr"},tC={class:"card-name"},nC={key:0,class:"card-pending"},iC={key:2,class:"tab-content"},sC={class:"collection-header"},rC={class:"collection-count"},oC={class:"filter-btns"},aC=["onClick"],lC={key:0,class:"empty-state"},cC={key:1,class:"collection-grid"},uC=["onClick"],dC={class:"card-tier-label"},fC={class:"card-pos"},hC={class:"card-ovr"},pC={class:"card-name"},mC={key:0,class:"in-squad-badge"},gC={class:"modal-card"},vC={class:"match-scoreline"},_C={class:"match-score gold"},xC={class:"match-team"},yC={class:"coins-earned"},hf="tbg_ultimate_team",MC={__name:"UltimateTeamView",setup(n){Mi();const e=["GK","RB","CB","CB","LB","CDM","CM","CAM","LW","RW","ST"],t={GK:"GK",RB:"DEF",CB:"DEF",LB:"DEF",CDM:"MID",CM:"MID",CAM:"MID",LW:"ATT",RW:"ATT",ST:"ATT"},i=()=>({coins:5e3,collection:[],squad:Array(11).fill(null)}),s=Me(i());function r(){localStorage.setItem(hf,JSON.stringify(s.value))}function o(){try{const G=localStorage.getItem(hf);if(G){const se=JSON.parse(G);(!se.squad||se.squad.length!==11)&&(se.squad=Array(11).fill(null)),s.value={...i(),...se}}}catch{s.value=i()}}Ln(()=>{o(),x(),fe()});const a=Me("SQUAD");function l(G){return Number(G).toLocaleString()}function c(G){return"tier-text-"+(G||"standard")}const u=Me([]),d=Me(!1),f=Me(null),h=Me([]),v=Me([]);async function x(){try{const G=await fetch("/api/packs");G.ok&&(u.value=await G.json())}catch{u.value=[{id:"standard",name:"Standard Pack",cost:750,cards:5,description:"5 player cards, mix of tiers."},{id:"premium",name:"Premium Pack",cost:2500,cards:10,description:"10 cards with improved gold chance."},{id:"elite",name:"Elite Pack",cost:7500,cards:15,description:"15 cards guaranteed high ratings."}]}}async function g(G){if(!(s.value.coins<G.cost)){f.value=G,h.value=[],v.value=[],d.value=!0,s.value.coins-=G.cost,r();try{const Se=await(await fetch("/api/pack/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pack:G.id})})).json();h.value=Se.cards||[]}catch{h.value=Array.from({length:G.cards},(se,Se)=>({name:`Player ${Math.floor(Math.random()*900)+100}`,position:e[Math.floor(Math.random()*e.length)],overall:Math.floor(Math.random()*30)+60,tier:["standard","silver","gold"][Math.floor(Math.random()*3)]}))}for(let se=0;se<h.value.length;se++)await C(300),v.value.push(h.value[se])}}function p(){s.value.collection.push(...h.value),r(),d.value=!1,f.value=null,h.value=[],v.value=[],a.value="COLLECTION",fe()}function C(G){return new Promise(se=>setTimeout(se,G))}const S=Me("ALL"),A=tt(()=>S.value==="ALL"?s.value.collection:s.value.collection.filter(G=>(t[G.position]||"ATT")===S.value));function w(G){return s.value.squad.some(se=>se&&se.name===G.name&&se.overall===G.overall)}function E(G){const se=s.value.squad.findIndex(le=>le&&le.name===G.name&&le.overall===G.overall);if(se!==-1){s.value.squad[se]=null,r(),fe();return}G.position;const Se=e.findIndex((le,X)=>le===G.position&&s.value.squad[X]===null);if(Se!==-1){s.value.squad[Se]=G,r(),fe();return}const te=e.findIndex(le=>le===G.position);if(te!==-1){s.value.squad[te]=G,r(),fe();return}const ge=s.value.squad.findIndex(le=>le===null);ge!==-1&&(s.value.squad[ge]=G,r(),fe())}const b=Me(null),P=Me(!1),y=Me(null),M=Me(""),q=Me(["Manchester City","Real Madrid","Bayern Munich","PSG","Inter Milan","Arsenal","Liverpool","Barcelona","Juventus","Atletico Madrid","Chelsea","Dortmund","AC Milan","Napoli","Porto"]),k=tt(()=>s.value.squad.filter(G=>G!==null).length),F=tt(()=>{const G=s.value.squad.filter(se=>se!==null);return G.length===0?"—":Math.round(G.reduce((se,Se)=>se+Se.overall,0)/G.length)}),Q=tt(()=>{const G=b.value;return G===null?"":G>=80?"gold":G>=50?"silver-text":"standard-text"});function ne(G){s.value.squad[G]=null,r(),fe()}async function fe(){const G=s.value.squad.filter(se=>se!==null);if(G.length===0){b.value=null;return}try{const se=await fetch("/api/pack/chemistry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({squad:s.value.squad})});if(se.ok){const Se=await se.json();b.value=Se.chemistry??Se.score??null}}catch{b.value=Math.min(100,Math.round(G.length*9.1))}}async function pe(){if(!(!M.value||k.value<11||P.value)){P.value=!0;try{const se=await(await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({home:"My Squad",away:M.value})})).json();y.value=se;const Se=ce(se);s.value.coins+=Se,r()}catch{const G=Math.floor(Math.random()*5),se=Math.floor(Math.random()*4);y.value={home:"My Squad",away:M.value,home_score:G,away_score:se};const Se=ce(y.value);s.value.coins+=Se,r()}finally{P.value=!1}}}function $(G){return G.home_score>G.away_score?"Victory!":G.home_score===G.away_score?"Draw":"Defeat"}function ae(G){return G.home_score>G.away_score?"outcome-win":G.home_score===G.away_score?"outcome-draw":"outcome-loss"}function ce(G){return G.home_score>G.away_score?500:G.home_score===G.away_score?200:100}return(G,se)=>{var Se,te,ge;return K(),J("div",MA,[m("div",SA,[m("button",{class:"back-btn",onClick:se[0]||(se[0]=le=>G.$router.push("/"))},"← Back"),m("span",bA,"⭐ TBG Coins: "+H(l(s.value.coins)),1)]),m("div",EA,[(K(),J(Fe,null,Ye(["SQUAD","PACKS","COLLECTION"],le=>m("button",{key:le,class:We(["tab-btn",{active:a.value===le}]),onClick:X=>a.value=le},H(le),11,TA)),64))]),a.value==="SQUAD"?(K(),J("div",wA,[m("div",AA,[m("div",CA,[m("div",RA,[se[4]||(se[4]=m("span",{class:"stat-label"},"Squad OVR",-1)),m("span",PA,H(F.value),1)]),m("div",LA,[se[5]||(se[5]=m("span",{class:"stat-label"},"Chemistry",-1)),m("span",{class:We(["stat-val",Q.value])},H(b.value!==null?b.value:"—"),3)])]),m("div",DA,[vn(m("select",{"onUpdate:modelValue":se[1]||(se[1]=le=>M.value=le),class:"opp-select"},[se[6]||(se[6]=m("option",{value:""},"Select opponent…",-1)),(K(!0),J(Fe,null,Ye(q.value,le=>(K(),J("option",{key:le,value:le},H(le),9,IA))),128))],512),[[Hs,M.value]]),m("button",{class:"action-btn sim-btn",disabled:!M.value||k.value<11||P.value,onClick:pe},H(P.value?"Simulating…":"Simulate Match"),9,NA)])]),m("div",UA,[(K(!0),J(Fe,null,Ye(s.value.squad,(le,X)=>(K(),J("div",{key:X,class:We(["squad-slot",{filled:le!==null}]),onClick:ve=>le?ne(X):null},[m("span",FA,H(e[X]),1),le?(K(),J(Fe,{key:0},[m("span",kA,H(le.name),1),m("span",{class:We(["slot-ovr",c(le.tier)])},H(le.overall),3),se[7]||(se[7]=m("span",{class:"slot-hint"},"click to remove",-1))],64)):(K(),J("span",BA,"Empty"))],10,OA))),128))])])):ze("",!0),a.value==="PACKS"?(K(),J("div",zA,[d.value?(K(),J("div",jA,[m("h2",KA,"Opening "+H((Se=f.value)==null?void 0:Se.name)+"…",1),m("div",JA,[(K(!0),J(Fe,null,Ye(v.value,(le,X)=>(K(),J("div",{key:X,class:We(["player-card revealed","tier-"+le.tier])},[m("div",ZA,H(le.tier.toUpperCase()),1),m("div",QA,H(le.position),1),m("div",eC,H(le.overall),1),m("div",tC,H(le.name),1)],2))),128)),v.value.length<(((te=h.value)==null?void 0:te.length)||0)?(K(),J("div",nC,[...se[8]||(se[8]=[m("div",{class:"card-spinner"},null,-1)])])):ze("",!0)]),v.value.length===((ge=h.value)==null?void 0:ge.length)?(K(),J("button",{key:0,class:"action-btn collect-btn",onClick:p}," Add to Collection ("+H(h.value.length)+" cards) ",1)):ze("",!0)])):(K(),J("div",HA,[(K(!0),J(Fe,null,Ye(u.value,le=>(K(),J("div",{key:le.id,class:"pack-card"},[m("div",VA,[m("span",{class:We(["pack-icon-inner","pack-icon-"+le.id])},"📦",2)]),m("h3",GA,H(le.name),1),m("p",WA,H(le.description),1),m("div",$A,[m("span",XA,H(le.cards)+" cards",1),m("span",qA,H(l(le.cost))+" coins",1)]),m("button",{class:We(["action-btn open-btn",{"btn-disabled":s.value.coins<le.cost}]),disabled:s.value.coins<le.cost||d.value,onClick:X=>g(le)},H(s.value.coins<le.cost?"Not enough coins":"Open Pack"),11,YA)]))),128))]))])):ze("",!0),a.value==="COLLECTION"?(K(),J("div",iC,[m("div",sC,[m("span",rC,H(A.value.length)+" / "+H(s.value.collection.length)+" cards",1),m("div",oC,[(K(),J(Fe,null,Ye(["ALL","GK","DEF","MID","ATT"],le=>m("button",{key:le,class:We(["filter-btn",{active:S.value===le}]),onClick:X=>S.value=le},H(le),11,aC)),64))])]),s.value.collection.length===0?(K(),J("div",lC," No cards yet. Open some packs! ")):(K(),J("div",cC,[(K(!0),J(Fe,null,Ye(A.value,(le,X)=>(K(),J("div",{key:X,class:We(["player-card",["tier-"+le.tier,{"in-squad":w(le)}]]),onClick:ve=>E(le)},[m("div",dC,H(le.tier.toUpperCase()),1),m("div",fC,H(le.position),1),m("div",hC,H(le.overall),1),m("div",pC,H(le.name),1),w(le)?(K(),J("div",mC,"In Squad")):ze("",!0)],10,uC))),128))]))])):ze("",!0),y.value?(K(),J("div",{key:3,class:"modal-overlay",onClick:se[3]||(se[3]=Ct(le=>y.value=null,["self"]))},[m("div",gC,[se[10]||(se[10]=m("h2",{class:"modal-title"},"Match Result",-1)),m("div",vC,[se[9]||(se[9]=m("span",{class:"match-team"},"My Squad",-1)),m("span",_C,H(y.value.home_score)+" – "+H(y.value.away_score),1),m("span",xC,H(y.value.away),1)]),m("div",{class:We(["match-outcome",ae(y.value)])},H($(y.value)),3),m("div",yC," +"+H(ce(y.value))+" coins earned ",1),m("button",{class:"action-btn",onClick:se[2]||(se[2]=le=>y.value=null)},"Close")])])):ze("",!0)])}}},SC=an(MC,[["__scopeId","data-v-5ad0a1ae"]]),bC={class:"playerdb-view"},EC={class:"screen-header"},TC={class:"filter-bar"},wC=["value"],AC=["value"],CC={class:"player-count"},RC={key:0,class:"count-text"},PC={key:1,class:"count-text"},LC={key:0,class:"loading-state"},DC={key:1,class:"player-grid"},IC=["onClick"],NC={class:"card-ovr"},UC={class:"card-pos"},OC={class:"card-body"},FC={class:"card-name"},kC={class:"card-club"},BC={class:"card-stats"},zC={class:"stat-label"},HC={class:"stat-value"},VC={key:2,class:"empty-state"},GC={class:"modal-card"},WC={class:"modal-ovr"},$C={class:"modal-pos-badge"},XC={class:"modal-body"},qC={class:"modal-name"},YC={class:"modal-meta"},jC={class:"meta-item"},KC={class:"meta-item"},JC={class:"meta-item"},ZC={class:"modal-stats"},QC={class:"stat-row-label"},eR={class:"stat-bar-track"},tR={class:"modal-extra"},nR={key:0,class:"extra-item"},iR={class:"extra-value gold"},sR={key:1,class:"extra-item"},rR={class:"extra-value"},oR={__name:"PlayerDBView",setup(n){const e=Me([]),t=Me([]),i=Me(!1),s=Me(null),r=Me({search:"",position:"",league:"",club:"",min_ovr:null,max_ovr:null,sort:"overall"}),o=tt(()=>[...new Set(t.value.map(E=>E.league).filter(Boolean))].sort()),a=tt(()=>r.value.league?t.value.filter(w=>w.league===r.value.league):t.value);let l=null;function c(){clearTimeout(l),l=setTimeout(f,250)}function u(){if(r.value.club){const w=t.value.find(E=>E.name===r.value.club);w&&r.value.league&&w.league!==r.value.league&&(r.value.club="")}c()}async function d(){try{const w=await fetch("/api/clubs");t.value=await w.json()}catch{}}async function f(){i.value=!0;try{const w=new URLSearchParams;r.value.search&&w.set("search",r.value.search),r.value.position&&w.set("position",r.value.position),r.value.league&&w.set("league",r.value.league),r.value.club&&w.set("club",r.value.club),r.value.min_ovr!=null&&r.value.min_ovr!==""&&w.set("min_ovr",r.value.min_ovr),r.value.max_ovr!=null&&r.value.max_ovr!==""&&w.set("max_ovr",r.value.max_ovr),r.value.sort&&w.set("sort",r.value.sort);const E=await fetch(`/api/players?${w.toString()}`);e.value=await E.json()}catch{e.value=[]}finally{i.value=!1}}Ln(async()=>{await d(),await f()});function h(w){return w>=90?"tier-gold":w>=85?"tier-silver":"tier-standard"}function v(w){var b;const E=(b=w.position)==null?void 0:b.toUpperCase();return E==="GK"?[{label:"OVR",value:w.overall??"—"},{label:"PHY",value:w.physical??"—"},{label:"PAS",value:w.passing??"—"}]:E==="DEF"?[{label:"DEF",value:w.defending??"—"},{label:"PHY",value:w.physical??"—"},{label:"PAC",value:w.pace??"—"}]:E==="MID"?[{label:"PAS",value:w.passing??"—"},{label:"DRI",value:w.dribbling??"—"},{label:"SHO",value:w.shooting??"—"}]:[{label:"PAC",value:w.pace??"—"},{label:"SHO",value:w.shooting??"—"},{label:"DRI",value:w.dribbling??"—"}]}function x(w){return[{label:"PAC",value:w.pace??0},{label:"SHO",value:w.shooting??0},{label:"PAS",value:w.passing??0},{label:"DRI",value:w.dribbling??0},{label:"DEF",value:w.defending??0},{label:"PHY",value:w.physical??0}]}function g(w){return w>=85?"bar-green":w>=75?"bar-yellow":w>=60?"bar-orange":"bar-red"}function p(w){return`${Math.min(Math.max(w,0),99)/99*100}%`}function C(w){return w==null?"—":`£${Math.round(w/1e3).toLocaleString()}k`}function S(w){s.value=w,document.body.style.overflow="hidden"}function A(){s.value=null,document.body.style.overflow=""}return(w,E)=>(K(),J("div",bC,[m("div",EC,[m("button",{class:"back-btn",onClick:E[0]||(E[0]=b=>w.$router.push("/"))},"← Back"),E[8]||(E[8]=m("h1",null,"Player Database",-1))]),m("div",TC,[vn(m("input",{"onUpdate:modelValue":E[1]||(E[1]=b=>r.value.search=b),class:"filter-input filter-search",type:"text",placeholder:"Search player name...",onInput:c},null,544),[[js,r.value.search]]),vn(m("select",{"onUpdate:modelValue":E[2]||(E[2]=b=>r.value.position=b),class:"filter-select",onChange:c},[...E[9]||(E[9]=[tr('<option value="" data-v-c3afe545>ALL</option><option value="GK" data-v-c3afe545>GK</option><option value="DEF" data-v-c3afe545>DEF</option><option value="MID" data-v-c3afe545>MID</option><option value="ATT" data-v-c3afe545>ATT</option>',5)])],544),[[Hs,r.value.position]]),vn(m("select",{"onUpdate:modelValue":E[3]||(E[3]=b=>r.value.league=b),class:"filter-select",onChange:u},[E[10]||(E[10]=m("option",{value:""},"ALL Leagues",-1)),(K(!0),J(Fe,null,Ye(o.value,b=>(K(),J("option",{key:b,value:b},H(b),9,wC))),128))],544),[[Hs,r.value.league]]),vn(m("select",{"onUpdate:modelValue":E[4]||(E[4]=b=>r.value.club=b),class:"filter-select",onChange:c},[E[11]||(E[11]=m("option",{value:""},"ALL Clubs",-1)),(K(!0),J(Fe,null,Ye(a.value,b=>(K(),J("option",{key:b.name,value:b.name},H(b.name),9,AC))),128))],544),[[Hs,r.value.club]]),vn(m("input",{"onUpdate:modelValue":E[5]||(E[5]=b=>r.value.min_ovr=b),class:"filter-input filter-ovr",type:"number",placeholder:"Min OVR",min:"1",max:"99",onInput:c},null,544),[[js,r.value.min_ovr,void 0,{number:!0}]]),vn(m("input",{"onUpdate:modelValue":E[6]||(E[6]=b=>r.value.max_ovr=b),class:"filter-input filter-ovr",type:"number",placeholder:"Max OVR",min:"1",max:"99",onInput:c},null,544),[[js,r.value.max_ovr,void 0,{number:!0}]]),vn(m("select",{"onUpdate:modelValue":E[7]||(E[7]=b=>r.value.sort=b),class:"filter-select",onChange:c},[...E[12]||(E[12]=[tr('<option value="overall" data-v-c3afe545>Overall</option><option value="name" data-v-c3afe545>Name</option><option value="pace" data-v-c3afe545>Pace</option><option value="shooting" data-v-c3afe545>Shooting</option><option value="passing" data-v-c3afe545>Passing</option><option value="dribbling" data-v-c3afe545>Dribbling</option><option value="defending" data-v-c3afe545>Defending</option><option value="physical" data-v-c3afe545>Physical</option>',8)])],544),[[Hs,r.value.sort]])]),m("div",CC,[i.value?(K(),J("span",RC,"Loading...")):(K(),J("span",PC,[E[13]||(E[13]=nn("Showing ",-1)),m("strong",null,H(e.value.length),1),E[14]||(E[14]=nn(" players",-1))]))]),i.value?(K(),J("div",LC,[...E[15]||(E[15]=[m("div",{class:"spinner"},null,-1),m("p",null,"Loading players...",-1)])])):(K(),J("div",DC,[(K(!0),J(Fe,null,Ye(e.value,b=>(K(),J("div",{key:b.id??b.name+b.club,class:"player-card",onClick:P=>S(b)},[m("div",{class:We(["card-header",h(b.overall)])},[m("span",NC,H(b.overall),1),m("span",UC,H(b.position),1)],2),m("div",OC,[m("div",FC,H(b.name),1),m("div",kC,H(b.club),1),m("div",BC,[(K(!0),J(Fe,null,Ye(v(b),P=>(K(),J("div",{key:P.label,class:"stat-pill"},[m("span",zC,H(P.label),1),m("span",HC,H(P.value),1)]))),128))])])],8,IC))),128))])),!i.value&&e.value.length===0?(K(),J("div",VC,[...E[16]||(E[16]=[m("p",null,"No players found matching your filters.",-1)])])):ze("",!0),yt(mc,{name:"modal-fade"},{default:ma(()=>{var b;return[s.value?(K(),J("div",{key:0,class:"modal-overlay",onClick:Ct(A,["self"])},[m("div",GC,[m("button",{class:"modal-close",onClick:A},"✕"),m("div",{class:We(["modal-header",h(s.value.overall)])},[m("div",WC,H(s.value.overall),1),m("div",$C,H(s.value.position),1)],2),m("div",XC,[m("h2",qC,H(s.value.name),1),m("div",YC,[m("span",jC,H(s.value.club),1),E[17]||(E[17]=m("span",{class:"meta-sep"},"·",-1)),m("span",KC,H(s.value.nationality??"—"),1),E[18]||(E[18]=m("span",{class:"meta-sep"},"·",-1)),m("span",JC,"Age "+H(s.value.age??"—"),1)]),m("div",ZC,[(K(!0),J(Fe,null,Ye(x(s.value),P=>(K(),J("div",{key:P.label,class:"stat-row"},[m("span",QC,H(P.label),1),m("div",eR,[m("div",{class:We(["stat-bar-fill",g(P.value)]),style:An({width:p(P.value)})},null,6)]),m("span",{class:We(["stat-row-value",g(P.value)])},H(P.value),3)]))),128))]),m("div",tR,[s.value.value!=null?(K(),J("div",nR,[E[19]||(E[19]=m("span",{class:"extra-label"},"Value",-1)),m("span",iR,H(C(s.value.value)),1)])):ze("",!0),s.value.wage!=null?(K(),J("div",sR,[E[20]||(E[20]=m("span",{class:"extra-label"},"Wage",-1)),m("span",rR,"£"+H((b=s.value.wage)==null?void 0:b.toLocaleString())+"p/w",1)])):ze("",!0)])])])])):ze("",!0)]}),_:1})]))}},aR=an(oR,[["__scopeId","data-v-c3afe545"]]),lR={class:"league-view"},cR={key:0,class:"phase-wrap"},uR={class:"league-grid"},dR=["onClick"],fR={class:"lc-flag"},hR={class:"lc-name"},pR={class:"lc-country"},mR={key:1,class:"phase-wrap loading-wrap"},gR={class:"loading-sub"},vR={key:2,class:"phase-wrap results-wrap"},_R={class:"awards-bar"},xR={class:"award-card"},yR={class:"award-body"},MR={class:"award-value"},SR={class:"award-card"},bR={class:"award-body"},ER={class:"award-value"},TR={key:0,class:"award-sub"},wR={class:"award-card"},AR={class:"award-body"},CR={class:"award-value"},RR={key:0,class:"award-sub"},PR={class:"results-columns"},LR={class:"results-panel"},DR={class:"panel-title"},IR={class:"table-wrap"},NR={class:"standings-table"},UR={class:"td-pos"},OR={class:"td-club"},FR={class:"td-gd"},kR={class:"td-pts"},BR={class:"results-panel scorers-panel"},zR={class:"scorers-list"},HR={class:"scorer-rank"},VR={class:"scorer-name"},GR={key:0,class:"scorer-club"},WR={class:"scorer-goals"},$R={class:"results-panel matchday-panel"},XR={class:"matchday-list"},qR=["onClick"],YR={key:0,class:"md-fixtures"},jR=["onClick"],KR={class:"mf-home"},JR={class:"mf-score"},ZR={class:"mf-away"},QR={class:"mf-expand"},e2={class:"popup-cols"},t2={class:"popup-side"},n2={class:"popup-team"},i2={key:0,class:"popup-min"},s2={key:0,class:"popup-no-goals"},r2={class:"popup-side"},o2={class:"popup-team"},a2={key:0,class:"popup-min"},l2={key:0,class:"popup-no-goals"},c2={class:"action-row"},u2={__name:"LeagueView",setup(n){const e=Mi(),t=[{name:"Premier Division",country:"England",flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿"},{name:"Primera División",country:"Spain",flag:"🇪🇸"},{name:"German Top Flight",country:"Germany",flag:"🇩🇪"},{name:"Italian First Division",country:"Italy",flag:"🇮🇹"},{name:"French First Division",country:"France",flag:"🇫🇷"}],i=Me("select"),s=Me(null),r=Me(null),o=Me(new Set),a=Me(null);function l(){i.value==="results"?i.value="select":e.push("/")}async function c(A){s.value=A,o.value=new Set,a.value=null,await d()}async function u(){o.value=new Set,a.value=null,await d()}async function d(){i.value="loading";try{const A=`/api/league/${encodeURIComponent(s.value.name)}`,w=await fetch(A);if(!w.ok)throw new Error(`HTTP ${w.status}`);r.value=await w.json(),i.value="results"}catch(A){alert(`Failed to simulate season: ${A.message}`),i.value="select"}}function f(A){const w=A.gd??A.gf-(A.ga??0);return w>=0?`+${w}`:`${w}`}function h(A,w){return A<4?"row-cl":A===4?"row-el":A>=w-3?"row-rel":""}const v=tt(()=>{var w,E;return(((w=r.value)==null?void 0:w.top_scorers)??((E=r.value)==null?void 0:E.scorers)??[]).slice(0,5)}),x=tt(()=>{var E,b;const A=((E=r.value)==null?void 0:E.results)??((b=r.value)==null?void 0:b.fixtures)??[],w={};for(const P of A){const y=P.matchday??P.round??"?";w[y]||(w[y]=[]),w[y].push(P)}return w});function g(A){const w=new Set(o.value);w.has(A)?w.delete(A):w.add(A),o.value=w}function p(A,w){var E,b;((E=a.value)==null?void 0:E.md)===A&&((b=a.value)==null?void 0:b.idx)===w?a.value=null:a.value={md:A,idx:w}}function C(A){return A.scorers?A.scorers.filter(w=>w.team==="home"||w.team===A.home):[]}function S(A){return A.scorers?A.scorers.filter(w=>w.team==="away"||w.team===A.away):[]}return(A,w)=>{var E,b,P,y,M,q;return K(),J("div",lR,[m("div",{class:"screen-header"},[m("button",{class:"back-btn",onClick:l},"← Back"),w[2]||(w[2]=m("h1",null,"Leagues",-1)),w[3]||(w[3]=m("p",null,"Simulate a full season",-1))]),i.value==="select"?(K(),J("div",cR,[w[4]||(w[4]=m("h2",{class:"phase-title"},"Choose a League",-1)),m("div",uR,[(K(),J(Fe,null,Ye(t,k=>m("button",{key:k.name,class:"league-card",onClick:F=>c(k)},[m("span",fR,H(k.flag),1),m("span",hR,H(k.name),1),m("span",pR,H(k.country),1)],8,dR)),64))])])):i.value==="loading"?(K(),J("div",mR,[w[5]||(w[5]=m("div",{class:"spinner"},null,-1)),w[6]||(w[6]=m("p",{class:"loading-text"},"Simulating season…",-1)),m("p",gR,H((E=s.value)==null?void 0:E.name),1)])):i.value==="results"?(K(),J("div",vR,[m("div",_R,[m("div",xR,[w[8]||(w[8]=m("span",{class:"award-icon"},"🏆",-1)),m("div",yR,[w[7]||(w[7]=m("span",{class:"award-label"},"Champions",-1)),m("span",MR,H(r.value.champion),1)])]),m("div",SR,[w[10]||(w[10]=m("span",{class:"award-icon"},"⚽",-1)),m("div",bR,[w[9]||(w[9]=m("span",{class:"award-label"},"Top Scorer",-1)),m("span",ER,H(((b=r.value.top_scorer)==null?void 0:b.name)||r.value.top_scorer),1),((P=r.value.top_scorer)==null?void 0:P.goals)!=null?(K(),J("span",TR,H(r.value.top_scorer.goals)+" goals",1)):ze("",!0)])]),m("div",wR,[w[12]||(w[12]=m("span",{class:"award-icon"},"🧤",-1)),m("div",AR,[w[11]||(w[11]=m("span",{class:"award-label"},"Golden Glove",-1)),m("span",CR,H(((y=r.value.golden_glove)==null?void 0:y.name)||r.value.golden_glove),1),((M=r.value.golden_glove)==null?void 0:M.clean_sheets)!=null?(K(),J("span",RR,H(r.value.golden_glove.clean_sheets)+" clean sheets",1)):ze("",!0)])])]),m("div",PR,[m("div",LR,[m("h3",DR,H((q=s.value)==null?void 0:q.name)+" — Final Standings",1),m("div",IR,[m("table",NR,[w[13]||(w[13]=m("thead",null,[m("tr",null,[m("th",null,"#"),m("th",{class:"th-club"},"Club"),m("th",null,"P"),m("th",null,"W"),m("th",null,"D"),m("th",null,"L"),m("th",null,"GF"),m("th",null,"GA"),m("th",null,"GD"),m("th",null,"Pts")])],-1)),m("tbody",null,[(K(!0),J(Fe,null,Ye(r.value.standings,(k,F)=>(K(),J("tr",{key:k.club,class:We(h(F,r.value.standings.length))},[m("td",UR,H(F+1),1),m("td",OR,H(k.club),1),m("td",null,H(k.played??k.p),1),m("td",null,H(k.won??k.w),1),m("td",null,H(k.drawn??k.d),1),m("td",null,H(k.lost??k.l),1),m("td",null,H(k.gf),1),m("td",null,H(k.ga),1),m("td",FR,H(f(k)),1),m("td",kR,H(k.points??k.pts),1)],2))),128))])])]),w[14]||(w[14]=m("div",{class:"legend"},[m("span",{class:"legend-dot cl"}),nn(" Champions League "),m("span",{class:"legend-dot el"}),nn(" Europa League "),m("span",{class:"legend-dot rel"}),nn(" Relegation ")],-1))]),m("div",BR,[w[16]||(w[16]=m("h3",{class:"panel-title"},"Top Scorers",-1)),m("ol",zR,[(K(!0),J(Fe,null,Ye(v.value,(k,F)=>(K(),J("li",{key:k.name||k.player,class:"scorer-row"},[m("span",HR,H(F+1),1),m("span",VR,H(k.name||k.player),1),k.club?(K(),J("span",GR,H(k.club),1)):ze("",!0),m("span",WR,[nn(H(k.goals)+" ",1),w[15]||(w[15]=m("span",{class:"goals-label"},"gls",-1))])]))),128))])])]),m("div",$R,[w[18]||(w[18]=m("h3",{class:"panel-title"},"Matchday Results",-1)),m("div",XR,[(K(!0),J(Fe,null,Ye(x.value,(k,F)=>(K(),J("div",{key:F,class:"matchday-group"},[m("button",{class:"md-header",onClick:Q=>g(F)},[m("span",null,"Matchday "+H(F),1),m("span",{class:We(["md-chevron",{open:o.value.has(F)}])},"▶",2)],8,qR),o.value.has(F)?(K(),J("div",YR,[(K(!0),J(Fe,null,Ye(k,(Q,ne)=>{var fe,pe,$,ae;return K(),J("div",{key:ne,class:"md-fixture-row",onClick:ce=>p(F,ne)},[m("span",KR,H(Q.home),1),m("span",JR,H(Q.home_score)+" – "+H(Q.away_score),1),m("span",ZR,H(Q.away),1),m("span",QR,H(((fe=a.value)==null?void 0:fe.md)===F&&((pe=a.value)==null?void 0:pe.idx)===ne?"▲":"▼"),1),(($=a.value)==null?void 0:$.md)===F&&((ae=a.value)==null?void 0:ae.idx)===ne?(K(),J("div",{key:0,class:"scorer-popup",onClick:w[0]||(w[0]=Ct(()=>{},["stop"]))},[m("div",e2,[m("div",t2,[m("div",n2,H(Q.home),1),(K(!0),J(Fe,null,Ye(C(Q),(ce,G)=>(K(),J("div",{key:G,class:"popup-scorer"},[nn("⚽ "+H(ce.player||ce.name)+" ",1),ce.minute?(K(),J("span",i2,H(ce.minute)+"'",1)):ze("",!0)]))),128)),C(Q).length?ze("",!0):(K(),J("div",s2,"—"))]),w[17]||(w[17]=m("div",{class:"popup-divider"},null,-1)),m("div",r2,[m("div",o2,H(Q.away),1),(K(!0),J(Fe,null,Ye(S(Q),(ce,G)=>(K(),J("div",{key:G,class:"popup-scorer"},[nn("⚽ "+H(ce.player||ce.name)+" ",1),ce.minute?(K(),J("span",a2,H(ce.minute)+"'",1)):ze("",!0)]))),128)),S(Q).length?ze("",!0):(K(),J("div",l2,"—"))])])])):ze("",!0)],8,jR)}),128))])):ze("",!0)]))),128))])]),m("div",c2,[m("button",{class:"action-btn",onClick:u},"↺ Simulate Again"),m("button",{class:"action-btn secondary-btn",onClick:w[1]||(w[1]=k=>i.value="select")},"← Back to League Select")])])):ze("",!0)])}}},d2=an(u2,[["__scopeId","data-v-b4ca29e5"]]),f2={class:"street-view"},h2={key:0,class:"screen"},p2={class:"mode-tabs"},m2={key:0,class:"team-pickers"},g2={class:"picker-col"},v2={class:"club-grid"},_2=["disabled","onClick"],x2={class:"club-name"},y2={class:"vs-col"},M2=["disabled"],S2={class:"picker-col"},b2={class:"club-grid"},E2=["disabled","onClick"],T2={class:"club-name"},w2={key:1,class:"story-hub"},A2={key:0,class:"story-intro"},C2={class:"rival-choice"},R2=["disabled"],P2={key:1,class:"story-chapters"},L2={class:"story-header"},D2={class:"story-name"},I2={class:"story-progress"},N2={class:"story-bar"},U2={class:"chapters-list"},O2={class:"ch-num"},F2={class:"ch-info"},k2={class:"ch-city"},B2={class:"ch-title"},z2={class:"ch-status"},H2={class:"story-actions"},V2={key:1,class:"match-wrapper"},G2={class:"scorebar"},W2={class:"sb-team"},$2={class:"sb-center"},X2={class:"sb-score"},q2={class:"sb-time"},Y2={class:"sb-team away"},j2={class:"overlay-content"},K2={class:"overlay-title"},J2={key:0,class:"overlay-sub"},Z2={key:2,class:"screen"},Q2={class:"post-card"},eP={class:"post-badge"},tP={class:"post-score"},nP={class:"score-big"},iP={key:0,class:"story-result-text"},pf=120,Ot=32,xt=50,sP={__name:"FootyStreetView",setup(n){const e=Mi(),t=Me("select"),i=Me("quick"),s=Me([]),r=Me(""),o=Me(""),a=Me(""),l=Me(""),c=Me(""),u=Me(!1),d=Me(1),f=Me([]),h=Me([]),v=Me(!1),x=Me(null),g=Me(0),p=Me(0),C=Me(0),S=Me(null),A=tt(()=>Math.floor(C.value/pf*60)),w=Me(null),E=Me(null);let b,P,y,M,q=null,k=new Cc,F=[],Q=0;const ne={};async function fe(){try{const U=await fetch("/api/clubs");s.value=await U.json()}catch{}}async function pe(){try{const U=await fetch("/api/street-story/chapters");f.value=await U.json()}catch{}}function $(){try{const U=JSON.parse(localStorage.getItem("tbg_street_story")||"{}");U.name&&(l.value=U.name,c.value=U.rival||"",d.value=U.chapter||1,h.value=U.completed||[],u.value=!0)}catch{}}function ae(){localStorage.setItem("tbg_street_story",JSON.stringify({name:l.value,rival:c.value,chapter:d.value,completed:h.value}))}function ce(){l.value=a.value.trim(),u.value=!0,ae()}function G(){l.value="",c.value="",d.value=1,h.value=[],u.value=!1,a.value="",localStorage.removeItem("tbg_street_story")}async function se(){try{const U=await fetch(`/api/street-story/chapter/${d.value}?rival=${c.value}`);x.value=await U.json(),r.value="Tottenham Hotspur",o.value=x.value.opponent_club||"Manchester City",v.value=!0,Se()}catch{r.value="Tottenham Hotspur",o.value="Manchester City",v.value=!0,Se()}}async function Se(){t.value="match",g.value=0,p.value=0,C.value=0,await new Promise(U=>setTimeout(U,50)),te()}function te(){const U=w.value,W=Rc(U);b=W.renderer,P=W.scene,b.setClearColor(657930),y=new Wt(65,U.clientWidth/U.clientHeight,.1,300),y.position.set(0,20,42),y.lookAt(0,0,0),ge(),M=bp(P,16737792),le(),window.addEventListener("resize",_),window.addEventListener("keydown",ie),window.addEventListener("keyup",T),Y({title:"STREET FOOTBALL",sub:r.value+" vs "+o.value,cls:"overlay-kickoff",btn:"Play",action:Z}),k.start(),X()}function ge(){const U=new Oe(new pi(Ot,xt),new on({color:2763306}));U.rotation.x=-Math.PI/2,U.receiveShadow=!0,P.add(U);const W=new xi({color:16777215});function z(De,Be,Xe,Ie){const Ve=new Oe(new pi(De,Be),W);Ve.rotation.x=-Math.PI/2,Ve.position.set(Xe,.02,Ie),P.add(Ve)}const re=.1;z(Ot,re,0,-xt/2),z(Ot,re,0,xt/2),z(re,xt,-Ot/2,0),z(re,xt,Ot/2,0),z(Ot,re,0,0);const _e=new on({color:4473924,transparent:!0,opacity:.6,wireframe:!0}),he=4;function xe(De,Be,Xe,Ie){const Ve=new Oe(new Tt(De,he,Be),_e);Ve.position.set(Xe,he/2,Ie),P.add(Ve)}xe(Ot+1,.3,0,-xt/2-.15),xe(Ot+1,.3,0,xt/2+.15),xe(.3,xt+1,-Ot/2-.15,0),xe(.3,xt+1,Ot/2+.15,0);const Re=new on({color:16777215});for(const De of[-1,1]){let Xe=function(Pe,B,Ee,be,Ne,ke){const at=new Oe(new Tt(Pe,B,Ee),Re);at.position.set(be,Ne,Be+ke),P.add(at)};var Ce=Xe;const Be=De*xt/2,Ie=4,Ve=1.8;Xe(.08,Ve,.08,-Ie/2,Ve/2,0),Xe(.08,Ve,.08,Ie/2,Ve/2,0),Xe(Ie,.08,.08,0,Ve,0)}const we=new xi({color:16764006});for(let De=-1;De<=1;De+=2)for(let Be=-1;Be<=1;Be+=2){const Xe=new Oe(new Tt(1,.2,1),we);Xe.position.set(De*Ot*.4,12,Be*xt*.4),P.add(Xe);const Ie=new NE(16755268,60,40);Ie.position.set(De*Ot*.4,11,Be*xt*.4),Ie.castShadow=!0,P.add(Ie)}}function le(){F=[];const U=[[0,-18],[-6,-10],[0,-12],[6,-10],[0,-6]],W=U.map(([z,re])=>[-z,-re]);U.forEach(([z,re],_e)=>{const he=ia(r.value,_e===0,_e%8);he.position.set(z,0,re),P.add(he),F.push({group:he,team:"home",isGK:_e===0,state:"idle",idx:_e})}),W.forEach(([z,re],_e)=>{const he=ia(o.value,_e===0,(_e+4)%8);he.position.set(z,0,re),P.add(he),F.push({group:he,team:"away",isGK:_e===0,state:"idle",idx:_e})}),Q=0}function X(){q=requestAnimationFrame(X);const U=Math.min(k.getDelta(),.05);S.value||(C.value+=U,ve(U)),Sp(b,y,w.value),b.render(P,y)}function ve(U){me();const W=F[Q];W&&ye(W,U),F.forEach((he,xe)=>{he.team==="home"&&xe===Q||j(he,U)}),Ep(M,U,{wallBounce:!0,wallX:Ot/2-.3,wallZ:xt/2-.3});const z=M.position.x,re=M.position.z,_e=M.position.y;Math.abs(z)<2&&_e<1.8&&(re<-xt/2&&(p.value++,L("home")),re>xt/2&&(g.value++,L("away"))),(g.value>=3||p.value>=3||C.value>=pf)&&N()}function me(){let U=Q,W=1/0;F.forEach((z,re)=>{if(z.team!=="home")return;const _e=z.group.position.distanceTo(M.position);_e<W&&(W=_e,U=re)}),Q=U}function ye(U,W){const z=ne.x?9:5.5;let re=0,_e=0;if(ne.ArrowUp&&(_e=-1),ne.ArrowDown&&(_e=1),ne.ArrowLeft&&(re=-1),ne.ArrowRight&&(re=1),re||_e){const he=Math.sqrt(re*re+_e*_e);U.group.position.x+=re/he*z*W,U.group.position.z+=_e/he*z*W,U.group.rotation.y=Math.atan2(re,_e),U.state=ne.x?"sprint":"run"}else U.state="idle";if(U.group.position.x=Gn.clamp(U.group.position.x,-Ot/2+1,Ot/2-1),U.group.position.z=Gn.clamp(U.group.position.z,-xt/2+1,xt/2-1),ne[" "]&&!ne._passDone){ne._passDone=!0;const he=new V(M.position.x-U.group.position.x,0,M.position.z-U.group.position.z).normalize();Qs(M,he,.6,.1),U.state="kick"}if(ne.z&&!ne._shootDone){ne._shootDone=!0;const he=-xt/2,xe=new V((Math.random()-.5)*2-U.group.position.x,0,he-U.group.position.z).normalize();Qs(M,xe,.95,.25),U.state="kick"}sa(U.group,U.state,W)}function j(U,W){const z=M.position,re=U.group.position,_e=re.distanceTo(z);if(U.team==="away"){const he=new V(z.x-re.x,0,z.z-re.z).normalize();if(_e>1.5)U.group.position.x+=he.x*5*W,U.group.position.z+=he.z*5*W,U.state="run";else{const xe=xt/2,Re=new V((Math.random()-.5)*2,0,xe-re.z).normalize();Qs(M,Re,.85,.2),U.state="kick"}}else{const he=new V(z.x*.3,0,Gn.clamp(z.z*.4-U.idx*4,-xt/2,xt/2));if(re.distanceTo(he)>2){const Re=he.clone().sub(re).normalize();U.group.position.x+=Re.x*4*W,U.group.position.z+=Re.z*4*W,U.state="run"}else U.state="idle"}U.group.position.x=Gn.clamp(U.group.position.x,-Ot/2+1,Ot/2-1),U.group.position.z=Gn.clamp(U.group.position.z,-xt/2+1,xt/2-1),sa(U.group,U.state,W)}function L(U){Y({title:U==="away"?`⚽ GOAL! ${r.value}!`:`⚽ GOAL! ${o.value}!`,sub:`${g.value} – ${p.value}`,cls:"overlay-goal"}),setTimeout(()=>{Z(),Tp(M)},1800)}function N(){v.value&&g.value>=3&&(h.value.includes(d.value)||h.value.push(d.value),d.value<7&&d.value++,ae()),Y({title:g.value>=p.value?"You Win!":"Final Whistle",sub:`${g.value} – ${p.value}`,cls:"overlay-fulltime",btn:"See Result",action:()=>{R(),t.value="post"}})}function Y(U){S.value=U}function Z(){S.value=null}function ie(U){ne[U.key]=!0,U.key===" "&&U.preventDefault()}function T(U){ne[U.key]=!1,U.key===" "&&(ne._passDone=!1),U.key==="z"&&(ne._shootDone=!1)}function _(){if(!E.value||!w.value)return;const U=E.value.clientWidth,W=E.value.clientHeight;w.value.style.width=U+"px",w.value.style.height=W+"px"}function R(){q&&cancelAnimationFrame(q),window.removeEventListener("resize",_),window.removeEventListener("keydown",ie),window.removeEventListener("keyup",T),b&&(b.dispose(),b=null)}function D(){R(),e.push("/")}function O(){R(),Se()}return Ln(()=>{fe(),pe(),$()}),Zr(()=>{R()}),(U,W)=>(K(),J("div",f2,[t.value==="select"?(K(),J("div",h2,[m("header",{class:"screen-header"},[m("button",{class:"back-btn",onClick:D},"← Back"),W[6]||(W[6]=m("h1",null,"Footy Street",-1)),W[7]||(W[7]=m("p",null,"5v5 • First to 3 goals • Walls in play",-1))]),m("div",p2,[m("button",{class:We(["mode-tab",{active:i.value==="quick"}]),onClick:W[0]||(W[0]=z=>i.value="quick")},"Quick Match",2),m("button",{class:We(["mode-tab",{active:i.value==="story"}]),onClick:W[1]||(W[1]=z=>i.value="story")},"Story Mode",2)]),i.value==="quick"?(K(),J("div",m2,[m("div",g2,[W[8]||(W[8]=m("h2",{class:"picker-title"},"Your Team",-1)),m("div",v2,[(K(!0),J(Fe,null,Ye(s.value,z=>(K(),J("button",{key:z.name,class:We(["club-btn",{selected:r.value===z.name,blocked:o.value===z.name}]),disabled:o.value===z.name,onClick:re=>r.value=z.name},[m("span",x2,H(z.name),1)],10,_2))),128))])]),m("div",y2,[W[9]||(W[9]=m("div",{class:"vs-badge"},"VS",-1)),m("button",{class:"kickoff-btn",disabled:!r.value||!o.value,onClick:Se},"Kick Off",8,M2)]),m("div",S2,[W[10]||(W[10]=m("h2",{class:"picker-title"},"Opponent",-1)),m("div",b2,[(K(!0),J(Fe,null,Ye(s.value,z=>(K(),J("button",{key:z.name,class:We(["club-btn",{selected:o.value===z.name,blocked:r.value===z.name}]),disabled:r.value===z.name,onClick:re=>o.value=z.name},[m("span",T2,H(z.name),1)],10,E2))),128))])])])):(K(),J("div",w2,[!u.value&&!l.value?(K(),J("div",A2,[W[12]||(W[12]=m("h2",null,"Your Story",-1)),W[13]||(W[13]=m("p",null,"Enter your name to begin the 7-chapter street football journey.",-1)),vn(m("input",{"onUpdate:modelValue":W[2]||(W[2]=z=>a.value=z),class:"name-input",placeholder:"Your name...",maxlength:"20"},null,512),[[js,a.value]]),m("div",C2,[W[11]||(W[11]=m("p",null,"Choose your rival:",-1)),m("button",{class:We(["rival-btn",{selected:c.value==="crew"}]),onClick:W[3]||(W[3]=z=>c.value="crew")}," The Crew — a whole team that humiliated you ",2),m("button",{class:We(["rival-btn",{selected:c.value==="rival"}]),onClick:W[4]||(W[4]=z=>c.value="player")}," The Rival — one player always ahead of you ",2)]),m("button",{class:"kickoff-btn",disabled:!a.value||!c.value,onClick:ce},"Begin",8,R2)])):(K(),J("div",P2,[m("div",L2,[m("span",D2,H(l.value),1),m("div",I2,"Chapter "+H(d.value)+" / 7",1),m("div",N2,[m("div",{class:"story-fill",style:An({width:d.value/7*100+"%"})},null,4)])]),m("div",U2,[(K(!0),J(Fe,null,Ye(f.value,z=>(K(),J("div",{key:z.number,class:We(["chapter-card",{done:h.value.includes(z.number),current:z.number===d.value,locked:z.number>d.value}])},[m("div",O2,H(z.number),1),m("div",F2,[m("div",k2,H(z.city)+", "+H(z.country),1),m("div",B2,H(z.title),1)]),m("div",z2,H(h.value.includes(z.number)?"✓":z.number===d.value?"▶":"🔒"),1)],2))),128))]),m("div",H2,[m("button",{class:"kickoff-btn",onClick:se},"Play Chapter "+H(d.value),1),m("button",{class:"reset-btn",onClick:G},"Reset Story")])]))]))])):t.value==="match"?(K(),J("div",V2,[m("div",G2,[m("span",W2,H(r.value),1),m("div",$2,[m("span",X2,H(g.value)+" – "+H(p.value),1),m("span",q2,H(A.value)+"'",1),W[14]||(W[14]=m("span",{class:"sb-target"},"First to 3",-1))]),m("span",Y2,H(o.value),1)]),m("div",{class:"canvas-wrap",ref_key:"canvasWrap",ref:E},[m("canvas",{ref_key:"threeCanvas",ref:w,class:"three-canvas"},null,512),W[15]||(W[15]=m("div",{class:"cam-label"},"📷 Street Mode",-1)),yt(mc,{name:"overlay-fade"},{default:ma(()=>[S.value?(K(),J("div",{key:0,class:We(["overlay",S.value.cls])},[m("div",j2,[m("div",K2,H(S.value.title),1),S.value.sub?(K(),J("div",J2,H(S.value.sub),1)):ze("",!0),S.value.btn?(K(),J("button",{key:1,class:"overlay-btn",onClick:W[5]||(W[5]=(...z)=>S.value.action&&S.value.action(...z))},H(S.value.btn),1)):ze("",!0)])],2)):ze("",!0)]),_:1})],512),W[16]||(W[16]=tr('<div class="controls-bar" data-v-ab8ed7af><span data-v-ab8ed7af><kbd data-v-ab8ed7af>↑↓←→</kbd> Move</span><span data-v-ab8ed7af><kbd data-v-ab8ed7af>Space</kbd> Pass</span><span data-v-ab8ed7af><kbd data-v-ab8ed7af>Z</kbd> Shoot</span><span data-v-ab8ed7af><kbd data-v-ab8ed7af>X</kbd> Sprint</span><span data-v-ab8ed7af><kbd data-v-ab8ed7af>S</kbd> Tackle</span></div>',1))])):t.value==="post"?(K(),J("div",Z2,[m("div",Q2,[m("div",eP,H(v.value?"📖 Chapter "+d.value:"🏙️ Street"),1),m("h2",null,H(g.value>=3?"You Win!":"You Lose!"),1),m("div",tP,[m("span",null,H(r.value),1),m("span",nP,H(g.value)+" – "+H(p.value),1),m("span",null,H(o.value),1)]),v.value&&x.value?(K(),J("div",iP,H(g.value>=p.value?x.value.post_win:x.value.post_loss),1)):ze("",!0),m("div",{class:"post-actions"},[m("button",{class:"btn btn-primary",onClick:O},"Play Again"),m("button",{class:"btn btn-secondary",onClick:D},"Main Menu")])])])):ze("",!0)]))}},rP=an(sP,[["__scopeId","data-v-ab8ed7af"]]),oP={class:"manager-editor"},aP={class:"editor-layout"},lP={class:"preview-panel"},cP={class:"preview-label"},uP={class:"controls-panel"},dP={class:"section"},fP={class:"option-row"},hP=["onClick"],pP={class:"section"},mP={class:"swatch-row"},gP=["onClick"],vP={class:"section"},_P={class:"option-row"},xP=["onClick"],yP={class:"colour-row"},MP={class:"section"},SP={class:"option-row"},bP=["onClick"],EP={class:"section"},TP={class:"option-row"},wP=["onClick"],AP={class:"section"},CP=["value"],RP={key:0,class:"saved-msg"},PP={__name:"ManagerEditorView",setup(n){const e=Mi(),t=Me(""),i=Me(0),s=Me(2),r=Me(0),o=Me("#2c1810"),a=Me(0),l=Me(0),c=Me("Manchester United"),u=Me([]),d=Me(!1),f=["#fad7b0","#f5c18a","#e8a96a","#c8834a","#a0622a","#7a4420","#5c2e0e","#3d1a06"],h=[{label:"Round",rx:1,ry:1,rz:1},{label:"Angular",rx:.9,ry:1.1,rz:.9},{label:"Oval",rx:.85,ry:1.15,rz:.9},{label:"Square",rx:1.1,ry:.95,rz:1.1}],v=[{label:"Short",height:.06},{label:"Long",height:.18},{label:"Bald",height:0},{label:"Afro",height:.28},{label:"Fade",height:.05},{label:"Curly",height:.22},{label:"Ponytail",height:.15},{label:"Mohawk",height:.25}],x=[{label:"None"},{label:"Stubble"},{label:"Beard"},{label:"Moustache"}],g=[{label:"Tracksuit",color:null},{label:"Dark Suit",color:"#1a1a2a"},{label:"Light Suit",color:"#d4c9a8"},{label:"Navy Suit",color:"#1a2a4a"},{label:"Casual",color:"#4a4a4a"}],p=Me(null);let C,S,A,w,E,b=new Cc;function P(){const G=p.value,se=Rc(G);C=se.renderer,S=se.scene,C.setClearColor(856343),C.setSize(G.clientWidth,G.clientHeight),A=new Wt(45,G.clientWidth/G.clientHeight,.1,50),A.position.set(0,2,4.5),A.lookAt(0,1,0);const Se=new Oe(new mi(1.2,1.2,.08,32),new on({color:1714714}));Se.position.y=-.04,S.add(Se),y(),fe()}function y(){w&&(S.remove(w),w.traverse(_=>{_.isMesh&&(_.geometry.dispose(),_.material.dispose())}));const G=new hi,se=f[s.value],Se=parseInt(se.replace("#",""),16),te=h[i.value];function ge(_){return new on({color:_})}function le(_){return parseInt(_.replace("#",""),16)}const X=kr[c.value]||{primary:5592405},ve=g[l.value],me=ve.color?le(ve.color):X.primary,ye=new En(.3,16,12),j=new Oe(ye,ge(Se));j.scale.set(te.rx,te.ry,te.rz),j.position.y=1.8,G.add(j);const L=v[r.value].height;if(L>0){const _=new En(.31,12,8,0,Math.PI*2,0,Math.PI/2),R=new Oe(_,ge(le(o.value)));R.scale.set(te.rx*1.02,L*4+.3,te.rz*1.02),R.position.y=1.85,G.add(R)}for(const _ of[-.1,.1]){const R=new Oe(new En(.04,8,6),ge(1118481));R.position.set(_*te.rx,1.85,.26*te.rz),G.add(R)}if(a.value===1){const _=new Oe(new En(.22,12,8,0,Math.PI*2,Math.PI*.55,Math.PI*.25),ge(5583650));_.position.y=1.63,G.add(_)}else if(a.value===2){const _=new Oe(new En(.26,12,10,0,Math.PI*2,Math.PI*.5,Math.PI*.35),ge(4465169));_.position.y=1.6,G.add(_)}else if(a.value===3){const _=new Oe(new Tt(.22,.06,.07),ge(4465169));_.position.set(0,1.7,.27),G.add(_)}const N=new Oe(new Tt(.55,.6,.3),ge(me));N.position.y=1.15,G.add(N);const Y=new Oe(new Tt(.14,.1,.04),ge(16766720));Y.position.set(-.14,1.2,.17),G.add(Y);const Z=new mi(.085,.075,.55,8);for(const[_,R]of[[-1,.18],[1,-.18]]){const D=new Oe(Z,ge(me));D.position.set(_*.35,1.15,0),D.rotation.z=R,G.add(D)}for(const _ of[-1,1]){const R=new Oe(new En(.09,8,6),ge(Se));R.position.set(_*.39,.88,0),G.add(R)}const ie=new Oe(new Tt(.5,.35,.28),ge(l.value===0?me:1118481));ie.position.y=.72,G.add(ie);const T=new mi(.1,.09,.52,8);for(const _ of[-.14,.14]){const R=new Oe(T,ge(l.value===0?me:1118481));R.position.set(_,.46,0),G.add(R)}for(const _ of[-.14,.14]){const R=new Oe(new Tt(.15,.1,.3),ge(1710618));R.position.set(_,.18,.05),G.add(R)}S.add(G),w=G}function M(){y()}function q(G){i.value=G,M()}function k(G){s.value=G,M()}function F(G){r.value=G,M()}function Q(G){a.value=G,M()}function ne(G){l.value=G,M()}function fe(){E=requestAnimationFrame(fe);const G=b.getDelta();w&&(w.rotation.y+=G*.4),C.render(S,A)}function pe(){const G={name:t.value,headShape:i.value,skinTone:s.value,hairStyle:r.value,hairColor:o.value,facialHair:a.value,outfit:l.value,club:c.value};localStorage.setItem("tbg_manager",JSON.stringify(G)),d.value=!0,setTimeout(()=>{d.value=!1},2e3)}function $(){try{const G=JSON.parse(localStorage.getItem("tbg_manager")||"{}");G.name&&(t.value=G.name),G.headShape!==void 0&&(i.value=G.headShape),G.skinTone!==void 0&&(s.value=G.skinTone),G.hairStyle!==void 0&&(r.value=G.hairStyle),G.hairColor&&(o.value=G.hairColor),G.facialHair!==void 0&&(a.value=G.facialHair),G.outfit!==void 0&&(l.value=G.outfit),G.club&&(c.value=G.club)}catch{}}async function ae(){try{const G=await fetch("/api/clubs");u.value=await G.json()}catch{}}function ce(){E&&cancelAnimationFrame(E),C&&C.dispose(),e.push("/")}return Ln(async()=>{await ae(),$(),P()}),Zr(()=>{E&&cancelAnimationFrame(E),C&&C.dispose()}),(G,se)=>(K(),J("div",oP,[m("header",{class:"editor-header"},[m("button",{class:"back-btn",onClick:ce},"← Back"),se[3]||(se[3]=m("h1",null,"Manager Editor",-1)),se[4]||(se[4]=m("p",null,"Build your 3D manager",-1))]),m("div",aP,[m("div",lP,[m("canvas",{ref_key:"previewCanvas",ref:p,class:"preview-canvas"},null,512),m("div",cP,H(t.value||"Your Manager"),1),vn(m("input",{"onUpdate:modelValue":se[0]||(se[0]=Se=>t.value=Se),class:"name-input",placeholder:"Manager name...",maxlength:"24"},null,512),[[js,t.value]])]),m("div",uP,[m("div",dP,[se[5]||(se[5]=m("h3",null,"Head Shape",-1)),m("div",fP,[(K(),J(Fe,null,Ye(h,(Se,te)=>m("button",{key:te,class:We(["opt-btn",{active:i.value===te}]),onClick:ge=>q(te)},H(Se.label),11,hP)),64))])]),m("div",pP,[se[6]||(se[6]=m("h3",null,"Skin Tone",-1)),m("div",mP,[(K(),J(Fe,null,Ye(f,(Se,te)=>m("button",{key:te,class:We(["swatch",{active:s.value===te}]),style:An({background:Se}),onClick:ge=>k(te)},null,14,gP)),64))])]),m("div",vP,[se[8]||(se[8]=m("h3",null,"Hair Style",-1)),m("div",_P,[(K(),J(Fe,null,Ye(v,(Se,te)=>m("button",{key:te,class:We(["opt-btn sm",{active:r.value===te}]),onClick:ge=>F(te)},H(Se.label),11,xP)),64))]),m("div",yP,[se[7]||(se[7]=m("label",null,"Hair Colour",-1)),vn(m("input",{type:"color","onUpdate:modelValue":se[1]||(se[1]=Se=>o.value=Se),onInput:M},null,544),[[js,o.value]])])]),m("div",MP,[se[9]||(se[9]=m("h3",null,"Facial Hair",-1)),m("div",SP,[(K(),J(Fe,null,Ye(x,(Se,te)=>m("button",{key:te,class:We(["opt-btn sm",{active:a.value===te}]),onClick:ge=>Q(te)},H(Se.label),11,bP)),64))])]),m("div",EP,[se[10]||(se[10]=m("h3",null,"Outfit",-1)),m("div",TP,[(K(),J(Fe,null,Ye(g,(Se,te)=>m("button",{key:te,class:We(["opt-btn",{active:l.value===te}]),onClick:ge=>ne(te)},H(Se.label),11,wP)),64))])]),m("div",AP,[se[11]||(se[11]=m("h3",null,"Club",-1)),vn(m("select",{"onUpdate:modelValue":se[2]||(se[2]=Se=>c.value=Se),class:"club-select",onChange:M},[(K(!0),J(Fe,null,Ye(u.value,Se=>(K(),J("option",{key:Se.name,value:Se.name},H(Se.name),9,CP))),128))],544),[[Hs,c.value]])]),m("button",{class:"save-btn",onClick:pe},"Save Manager ✓"),d.value?(K(),J("div",RP,"Saved!")):ze("",!0)])])]))}},LP=an(PP,[["__scopeId","data-v-ca953371"]]),DP=m_({history:qv(),routes:[{path:"/",component:O_},{path:"/play",component:P1},{path:"/watch",component:XT},{path:"/career",component:Dw},{path:"/journey",component:yA},{path:"/ultimate",component:SC},{path:"/players",component:aR},{path:"/league",component:d2},{path:"/street",component:rP},{path:"/manager",component:LP}]});sv(cv).use(DP).mount("#app");
