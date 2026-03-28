(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const St={},Is=[],qn=()=>{},rh=()=>!1,Va=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),fc=n=>n.startsWith("onUpdate:"),Ht=Object.assign,hc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},hp=Object.prototype.hasOwnProperty,ft=(n,e)=>hp.call(n,e),$e=Array.isArray,Ls=n=>Ir(n)==="[object Map]",ah=n=>Ir(n)==="[object Set]",nu=n=>Ir(n)==="[object Date]",Ze=n=>typeof n=="function",Dt=n=>typeof n=="string",Jn=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",oh=n=>(mt(n)||Ze(n))&&Ze(n.then)&&Ze(n.catch),lh=Object.prototype.toString,Ir=n=>lh.call(n),dp=n=>Ir(n).slice(8,-1),ch=n=>Ir(n)==="[object Object]",dc=n=>Dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,hr=uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),za=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},pp=/-\w/g,tn=za(n=>n.replace(pp,e=>e.slice(1).toUpperCase())),mp=/\B([A-Z])/g,fs=za(n=>n.replace(mp,"-$1").toLowerCase()),Ga=za(n=>n.charAt(0).toUpperCase()+n.slice(1)),ro=za(n=>n?`on${Ga(n)}`:""),Hn=(n,e)=>!Object.is(n,e),ao=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},uh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},gp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let iu;const Ha=()=>iu||(iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kt(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Dt(i)?Mp(i):kt(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Dt(n)||mt(n))return n}const _p=/;(?![^(]*\))/g,vp=/:([^]+)/,xp=/\/\*[^]*?\*\//g;function Mp(n){const e={};return n.replace(xp,"").split(_p).forEach(t=>{if(t){const i=t.split(vp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Mn(n){let e="";if(Dt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=Mn(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yp=uc(Sp);function fh(n){return!!n||n===""}function Ep(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=pc(n[i],e[i]);return t}function pc(n,e){if(n===e)return!0;let t=nu(n),i=nu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Jn(n),i=Jn(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?Ep(n,e):!1;if(t=mt(n),i=mt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!pc(n[a],e[a]))return!1}}return String(n)===String(e)}const hh=n=>!!(n&&n.__v_isRef===!0),Ue=n=>Dt(n)?n:n==null?"":$e(n)||mt(n)&&(n.toString===lh||!Ze(n.toString))?hh(n)?Ue(n.value):JSON.stringify(n,dh,2):String(n),dh=(n,e)=>hh(e)?dh(n,e.value):Ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[oo(i,r)+" =>"]=s,t),{})}:ah(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>oo(t))}:Jn(e)?oo(e):mt(e)&&!$e(e)&&!ch(e)?String(e):e,oo=(n,e="")=>{var t;return Jn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class bp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=on;try{return on=this,e()}finally{on=t}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){this._on>0&&--this._on===0&&(on=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Tp(){return on}let Mt;const lo=new WeakSet;class ph{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,lo.has(this)&&(lo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,su(this),_h(this);const e=Mt,t=Cn;Mt=this,Cn=!0;try{return this.fn()}finally{vh(this),Mt=e,Cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_c(e);this.deps=this.depsTail=void 0,su(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?lo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tl(this)&&this.run()}get dirty(){return tl(this)}}let mh=0,dr,pr;function gh(n,e=!1){if(n.flags|=8,e){n.next=pr,pr=n;return}n.next=dr,dr=n}function mc(){mh++}function gc(){if(--mh>0)return;if(pr){let e=pr;for(pr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;dr;){let e=dr;for(dr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function _h(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vh(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),_c(i),Ap(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function tl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function xh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===yr)||(n.globalVersion=yr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!tl(n))))return;n.flags|=2;const e=n.dep,t=Mt,i=Cn;Mt=n,Cn=!0;try{_h(n);const s=n.fn(n._value);(e.version===0||Hn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Mt=t,Cn=i,vh(n),n.flags&=-3}}function _c(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)_c(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ap(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Cn=!0;const Mh=[];function xi(){Mh.push(Cn),Cn=!1}function Mi(){const n=Mh.pop();Cn=n===void 0?!0:n}function su(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Mt;Mt=void 0;try{e()}finally{Mt=t}}}let yr=0;class wp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Mt||!Cn||Mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Mt)t=this.activeLink=new wp(Mt,this),Mt.deps?(t.prevDep=Mt.depsTail,Mt.depsTail.nextDep=t,Mt.depsTail=t):Mt.deps=Mt.depsTail=t,Sh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Mt.depsTail,t.nextDep=void 0,Mt.depsTail.nextDep=t,Mt.depsTail=t,Mt.deps===t&&(Mt.deps=i)}return t}trigger(e){this.version++,yr++,this.notify(e)}notify(e){mc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{gc()}}}function Sh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Sh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const nl=new WeakMap,os=Symbol(""),il=Symbol(""),Er=Symbol("");function qt(n,e,t){if(Cn&&Mt){let i=nl.get(n);i||nl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new vc),s.map=i,s.key=t),s.track()}}function mi(n,e,t,i,s,r){const a=nl.get(n);if(!a){yr++;return}const o=l=>{l&&l.trigger()};if(mc(),e==="clear")a.forEach(o);else{const l=$e(n),c=l&&dc(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Er||!Jn(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Er)),e){case"add":l?c&&o(a.get("length")):(o(a.get(os)),Ls(n)&&o(a.get(il)));break;case"delete":l||(o(a.get(os)),Ls(n)&&o(a.get(il)));break;case"set":Ls(n)&&o(a.get(os));break}}gc()}function ms(n){const e=ut(n);return e===n?e:(qt(e,"iterate",Er),Sn(n)?e:e.map(Pn))}function Wa(n){return qt(n=ut(n),"iterate",Er),n}function Vn(n,e){return Si(n)?ks(ls(n)?Pn(e):e):Pn(e)}const Rp={__proto__:null,[Symbol.iterator](){return co(this,Symbol.iterator,n=>Vn(this,n))},concat(...n){return ms(this).concat(...n.map(e=>$e(e)?ms(e):e))},entries(){return co(this,"entries",n=>(n[1]=Vn(this,n[1]),n))},every(n,e){return ri(this,"every",n,e,void 0,arguments)},filter(n,e){return ri(this,"filter",n,e,t=>t.map(i=>Vn(this,i)),arguments)},find(n,e){return ri(this,"find",n,e,t=>Vn(this,t),arguments)},findIndex(n,e){return ri(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ri(this,"findLast",n,e,t=>Vn(this,t),arguments)},findLastIndex(n,e){return ri(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ri(this,"forEach",n,e,void 0,arguments)},includes(...n){return uo(this,"includes",n)},indexOf(...n){return uo(this,"indexOf",n)},join(n){return ms(this).join(n)},lastIndexOf(...n){return uo(this,"lastIndexOf",n)},map(n,e){return ri(this,"map",n,e,void 0,arguments)},pop(){return Zs(this,"pop")},push(...n){return Zs(this,"push",n)},reduce(n,...e){return ru(this,"reduce",n,e)},reduceRight(n,...e){return ru(this,"reduceRight",n,e)},shift(){return Zs(this,"shift")},some(n,e){return ri(this,"some",n,e,void 0,arguments)},splice(...n){return Zs(this,"splice",n)},toReversed(){return ms(this).toReversed()},toSorted(n){return ms(this).toSorted(n)},toSpliced(...n){return ms(this).toSpliced(...n)},unshift(...n){return Zs(this,"unshift",n)},values(){return co(this,"values",n=>Vn(this,n))}};function co(n,e,t){const i=Wa(n),s=i[e]();return i!==n&&!Sn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Cp=Array.prototype;function ri(n,e,t,i,s,r){const a=Wa(n),o=a!==n&&!Sn(n),l=a[e];if(l!==Cp[e]){const f=l.apply(n,r);return o?Pn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,Vn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function ru(n,e,t,i){const s=Wa(n),r=s!==n&&!Sn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=Vn(n,c)),t.call(this,c,Vn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](a,...i);return o?Vn(n,l):l}function uo(n,e,t){const i=ut(n);qt(i,"iterate",Er);const s=i[e](...t);return(s===-1||s===!1)&&Sc(t[0])?(t[0]=ut(t[0]),i[e](...t)):s}function Zs(n,e,t=[]){xi(),mc();const i=ut(n)[e].apply(n,t);return gc(),Mi(),i}const Pp=uc("__proto__,__v_isRef,__isVue"),yh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Jn));function Dp(n){Jn(n)||(n=String(n));const e=ut(this);return qt(e,"has",n),e.hasOwnProperty(n)}class Eh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?zp:wh:r?Ah:Th).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=$e(e);if(!s){let l;if(a&&(l=Rp[t]))return l;if(t==="hasOwnProperty")return Dp}const o=Reflect.get(e,t,jt(e)?e:i);if((Jn(t)?yh.has(t):Pp(t))||(s||qt(e,"get",t),r))return o;if(jt(o)){const l=a&&dc(t)?o:o.value;return s&&mt(l)?rl(l):l}return mt(o)?s?rl(o):Lr(o):o}}class bh extends Eh{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=$e(e)&&dc(t);if(!this._isShallow){const c=Si(r);if(!Sn(i)&&!Si(i)&&(r=ut(r),i=ut(i)),!a&&jt(r)&&!jt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:ft(e,t),l=Reflect.set(e,t,i,jt(e)?e:s);return e===ut(s)&&(o?Hn(i,r)&&mi(e,"set",t,i):mi(e,"add",t,i)),l}deleteProperty(e,t){const i=ft(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&mi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Jn(t)||!yh.has(t))&&qt(e,"has",t),i}ownKeys(e){return qt(e,"iterate",$e(e)?"length":os),Reflect.ownKeys(e)}}class Ip extends Eh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Lp=new bh,Up=new Ip,Np=new bh(!0);const sl=n=>n,zr=n=>Reflect.getPrototypeOf(n);function Fp(n,e,t){return function(...i){const s=this.__v_raw,r=ut(s),a=Ls(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?sl:e?ks:Pn;return!e&&qt(r,"iterate",l?il:os),Ht(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Gr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Op(n,e){const t={get(s){const r=this.__v_raw,a=ut(r),o=ut(s);n||(Hn(s,o)&&qt(a,"get",s),qt(a,"get",o));const{has:l}=zr(a),c=e?sl:n?ks:Pn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&qt(ut(s),"iterate",os),s.size},has(s){const r=this.__v_raw,a=ut(r),o=ut(s);return n||(Hn(s,o)&&qt(a,"has",s),qt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=ut(o),c=e?sl:n?ks:Pn;return!n&&qt(l,"iterate",os),o.forEach((u,f)=>s.call(r,c(u),c(f),a))}};return Ht(t,n?{add:Gr("add"),set:Gr("set"),delete:Gr("delete"),clear:Gr("clear")}:{add(s){const r=ut(this),a=zr(r),o=ut(s),l=!e&&!Sn(s)&&!Si(s)?o:s;return a.has.call(r,l)||Hn(s,l)&&a.has.call(r,s)||Hn(o,l)&&a.has.call(r,o)||(r.add(l),mi(r,"add",l,l)),this},set(s,r){!e&&!Sn(r)&&!Si(r)&&(r=ut(r));const a=ut(this),{has:o,get:l}=zr(a);let c=o.call(a,s);c||(s=ut(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Hn(r,u)&&mi(a,"set",s,r):mi(a,"add",s,r),this},delete(s){const r=ut(this),{has:a,get:o}=zr(r);let l=a.call(r,s);l||(s=ut(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&mi(r,"delete",s,void 0),c},clear(){const s=ut(this),r=s.size!==0,a=s.clear();return r&&mi(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Fp(s,n,e)}),t}function xc(n,e){const t=Op(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ft(t,s)&&s in i?t:i,s,r)}const Bp={get:xc(!1,!1)},kp={get:xc(!1,!0)},Vp={get:xc(!0,!1)};const Th=new WeakMap,Ah=new WeakMap,wh=new WeakMap,zp=new WeakMap;function Gp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hp(n){return n.__v_skip||!Object.isExtensible(n)?0:Gp(dp(n))}function Lr(n){return Si(n)?n:Mc(n,!1,Lp,Bp,Th)}function Rh(n){return Mc(n,!1,Np,kp,Ah)}function rl(n){return Mc(n,!0,Up,Vp,wh)}function Mc(n,e,t,i,s){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Hp(n);if(r===0)return n;const a=s.get(n);if(a)return a;const o=new Proxy(n,r===2?i:t);return s.set(n,o),o}function ls(n){return Si(n)?ls(n.__v_raw):!!(n&&n.__v_isReactive)}function Si(n){return!!(n&&n.__v_isReadonly)}function Sn(n){return!!(n&&n.__v_isShallow)}function Sc(n){return n?!!n.__v_raw:!1}function ut(n){const e=n&&n.__v_raw;return e?ut(e):n}function Wp(n){return!ft(n,"__v_skip")&&Object.isExtensible(n)&&uh(n,"__v_skip",!0),n}const Pn=n=>mt(n)?Lr(n):n,ks=n=>mt(n)?rl(n):n;function jt(n){return n?n.__v_isRef===!0:!1}function ht(n){return Ch(n,!1)}function Xp(n){return Ch(n,!0)}function Ch(n,e){return jt(n)?n:new $p(n,e)}class $p{constructor(e,t){this.dep=new vc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ut(e),this._value=t?e:Pn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Sn(e)||Si(e);e=i?e:ut(e),Hn(e,t)&&(this._rawValue=e,this._value=i?e:Pn(e),this.dep.trigger())}}function at(n){return jt(n)?n.value:n}const qp={get:(n,e,t)=>e==="__v_raw"?n:at(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return jt(s)&&!jt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Ph(n){return ls(n)?n:new Proxy(n,qp)}class Yp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new vc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Mt!==this)return gh(this,!0),!0}get value(){const e=this.dep.track();return xh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Kp(n,e,t=!1){let i,s;return Ze(n)?i=n:(i=n.get,s=n.set),new Yp(i,s,t)}const Hr={},Aa=new WeakMap;let es;function jp(n,e=!1,t=es){if(t){let i=Aa.get(t);i||Aa.set(t,i=[]),i.push(n)}}function Zp(n,e,t=St){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=M=>s?M:Sn(M)||s===!1||s===0?Vi(M,1):Vi(M);let u,f,h,d,g=!1,v=!1;if(jt(n)?(f=()=>n.value,g=Sn(n)):ls(n)?(f=()=>c(n),g=!0):$e(n)?(v=!0,g=n.some(M=>ls(M)||Sn(M)),f=()=>n.map(M=>{if(jt(M))return M.value;if(ls(M))return c(M);if(Ze(M))return l?l(M,2):M()})):Ze(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){xi();try{h()}finally{Mi()}}const M=es;es=u;try{return l?l(n,3,[d]):n(d)}finally{es=M}}:f=qn,e&&s){const M=f,P=s===!0?1/0:s;f=()=>Vi(M(),P)}const m=Tp(),p=()=>{u.stop(),m&&m.active&&hc(m.effects,u)};if(r&&e){const M=e;e=(...P)=>{M(...P),p()}}let x=v?new Array(n.length).fill(Hr):Hr;const E=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const P=u.run();if(s||g||(v?P.some((D,L)=>Hn(D,x[L])):Hn(P,x))){h&&h();const D=es;es=u;try{const L=[P,x===Hr?void 0:v&&x[0]===Hr?[]:x,d];x=P,l?l(e,3,L):e(...L)}finally{es=D}}}else u.run()};return o&&o(E),u=new ph(f),u.scheduler=a?()=>a(E,!1):E,d=M=>jp(M,!1,u),h=u.onStop=()=>{const M=Aa.get(u);if(M){if(l)l(M,4);else for(const P of M)P();Aa.delete(u)}},e?i?E(!0):x=u.run():a?a(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Vi(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,jt(n))Vi(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)Vi(n[i],e,t);else if(ah(n)||Ls(n))n.forEach(i=>{Vi(i,e,t)});else if(ch(n)){for(const i in n)Vi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Vi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ur(n,e,t,i){try{return i?n(...i):n()}catch(s){Xa(s,e,t)}}function Qn(n,e,t,i){if(Ze(n)){const s=Ur(n,e,t,i);return s&&oh(s)&&s.catch(r=>{Xa(r,e,t)}),s}if($e(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Qn(n[r],e,t,i));return s}}function Xa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||St;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(r){xi(),Ur(r,null,10,[n,l,c]),Mi();return}}Jp(n,t,s,i,a)}function Jp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const en=[];let kn=-1;const Us=[];let Fi=null,Ps=0;const Dh=Promise.resolve();let wa=null;function $a(n){const e=wa||Dh;return n?e.then(this?n.bind(this):n):e}function Qp(n){let e=kn+1,t=en.length;for(;e<t;){const i=e+t>>>1,s=en[i],r=br(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function yc(n){if(!(n.flags&1)){const e=br(n),t=en[en.length-1];!t||!(n.flags&2)&&e>=br(t)?en.push(n):en.splice(Qp(e),0,n),n.flags|=1,Ih()}}function Ih(){wa||(wa=Dh.then(Uh))}function em(n){$e(n)?Us.push(...n):Fi&&n.id===-1?Fi.splice(Ps+1,0,n):n.flags&1||(Us.push(n),n.flags|=1),Ih()}function au(n,e,t=kn+1){for(;t<en.length;t++){const i=en[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;en.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Lh(n){if(Us.length){const e=[...new Set(Us)].sort((t,i)=>br(t)-br(i));if(Us.length=0,Fi){Fi.push(...e);return}for(Fi=e,Ps=0;Ps<Fi.length;Ps++){const t=Fi[Ps];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Fi=null,Ps=0}}const br=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Uh(n){try{for(kn=0;kn<en.length;kn++){const e=en[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ur(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<en.length;kn++){const e=en[kn];e&&(e.flags&=-2)}kn=-1,en.length=0,Lh(),wa=null,(en.length||Us.length)&&Uh()}}let wn=null,Nh=null;function Ra(n){const e=wn;return wn=n,Nh=n&&n.type.__scopeId||null,e}function tm(n,e=wn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Da(-1);const r=Ra(e);let a;try{a=n(...s)}finally{Ra(r),i._d&&Da(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function $i(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(xi(),Qn(l,t,8,[n.el,o,n,e]),Mi())}}function ga(n,e){if(Yt){let t=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===t&&(t=Yt.provides=Object.create(i)),t[n]=e}}function Yn(n,e,t=!1){const i=tg();if(i||Ns){let s=Ns?Ns._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ze(e)?e.call(i&&i.proxy):e}}const nm=Symbol.for("v-scx"),im=()=>Yn(nm);function mr(n,e,t){return Fh(n,e,t)}function Fh(n,e,t=St){const{immediate:i,deep:s,flush:r,once:a}=t,o=Ht({},t),l=e&&i||!e&&r!=="post";let c;if(Ar){if(r==="sync"){const d=im();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=qn,d.resume=qn,d.pause=qn,d}}const u=Yt;o.call=(d,g,v)=>Qn(d,u,g,v);let f=!1;r==="post"?o.scheduler=d=>{an(d,u&&u.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(d,g)=>{g?d():yc(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Zp(n,e,o);return Ar&&(c?c.push(h):l&&h()),h}function sm(n,e,t){const i=this.proxy,s=Dt(n)?n.includes(".")?Oh(i,n):()=>i[n]:n.bind(i,i);let r;Ze(e)?r=e:(r=e.handler,t=e);const a=Fr(this),o=Fh(s,r.bind(i),t);return a(),o}function Oh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const rm=Symbol("_vte"),am=n=>n.__isTeleport,om=Symbol("_leaveCb");function Ec(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ec(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Bh(n,e){return Ze(n)?Ht({name:n.name},e,{setup:n}):n}function kh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ou(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ca=new WeakMap;function gr(n,e,t,i,s=!1){if($e(n)){n.forEach((v,m)=>gr(v,e&&($e(e)?e[m]:e),t,i,s));return}if(_r(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&gr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Rc(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===St?o.refs={}:o.refs,f=o.setupState,h=ut(f),d=f===St?rh:v=>ou(u,v)?!1:ft(h,v),g=(v,m)=>!(m&&ou(u,m));if(c!=null&&c!==l){if(lu(e),Dt(c))u[c]=null,d(c)&&(f[c]=null);else if(jt(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Ze(l))Ur(l,o,12,[a,u]);else{const v=Dt(l),m=jt(l);if(v||m){const p=()=>{if(n.f){const x=v?d(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)$e(x)&&hc(x,r);else if($e(x))x.includes(r)||x.push(r);else if(v)u[l]=[r],d(l)&&(f[l]=u[l]);else{const E=[r];g(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else v?(u[l]=a,d(l)&&(f[l]=a)):m&&(g(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const x=()=>{p(),Ca.delete(n)};x.id=-1,Ca.set(n,x),an(x,t)}else lu(n),p()}}}function lu(n){const e=Ca.get(n);e&&(e.flags|=8,Ca.delete(n))}Ha().requestIdleCallback;Ha().cancelIdleCallback;const _r=n=>!!n.type.__asyncLoader,Vh=n=>n.type.__isKeepAlive;function lm(n,e){zh(n,"a",e)}function cm(n,e){zh(n,"da",e)}function zh(n,e,t=Yt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(qa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Vh(s.parent.vnode)&&um(i,e,t,s),s=s.parent}}function um(n,e,t,i){const s=qa(e,n,i,!0);Ya(()=>{hc(i[e],s)},t)}function qa(n,e,t=Yt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{xi();const o=Fr(t),l=Qn(e,t,n,a);return o(),Mi(),l});return i?s.unshift(r):s.push(r),r}}const bi=n=>(e,t=Yt)=>{(!Ar||n==="sp")&&qa(n,(...i)=>e(...i),t)},fm=bi("bm"),Nr=bi("m"),hm=bi("bu"),dm=bi("u"),pm=bi("bum"),Ya=bi("um"),mm=bi("sp"),gm=bi("rtg"),_m=bi("rtc");function vm(n,e=Yt){qa("ec",n,e)}const xm="components";function Gh(n,e){return Sm(xm,n,!0,e)||n}const Mm=Symbol.for("v-ndc");function Sm(n,e,t=!0,i=!1){const s=wn||Yt;if(s){const r=s.type;{const o=ag(r,!1);if(o&&(o===e||o===tn(e)||o===Ga(tn(e))))return r}const a=cu(s[n]||r[n],e)||cu(s.appContext[n],e);return!a&&i?r:a}}function cu(n,e){return n&&(n[e]||n[tn(e)]||n[Ga(tn(e))])}function pn(n,e,t,i){let s;const r=t,a=$e(n);if(a||Dt(n)){const o=a&&ls(n);let l=!1,c=!1;o&&(l=!Sn(n),c=Si(n),n=Wa(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?ks(Pn(n[u])):Pn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(mt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const al=n=>n?ld(n)?Rc(n):al(n.parent):null,vr=Ht(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>al(n.parent),$root:n=>al(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Wh(n),$forceUpdate:n=>n.f||(n.f=()=>{yc(n.update)}),$nextTick:n=>n.n||(n.n=$a.bind(n.proxy)),$watch:n=>sm.bind(n)}),fo=(n,e)=>n!==St&&!n.__isScriptSetup&&ft(n,e),ym={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(fo(i,e))return a[e]=1,i[e];if(s!==St&&ft(s,e))return a[e]=2,s[e];if(ft(r,e))return a[e]=3,r[e];if(t!==St&&ft(t,e))return a[e]=4,t[e];ol&&(a[e]=0)}}const c=vr[e];let u,f;if(c)return e==="$attrs"&&qt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==St&&ft(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,ft(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return fo(s,e)?(s[e]=t,!0):i!==St&&ft(i,e)?(i[e]=t,!0):ft(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==St&&o[0]!=="$"&&ft(n,o)||fo(e,o)||ft(r,o)||ft(i,o)||ft(vr,o)||ft(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ft(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function uu(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ol=!0;function Em(n){const e=Wh(n),t=n.proxy,i=n.ctx;ol=!1,e.beforeCreate&&fu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:x,destroyed:E,unmounted:M,render:P,renderTracked:D,renderTriggered:L,errorCaptured:S,serverPrefetch:A,expose:re,inheritAttrs:w,components:B,directives:O,filters:U}=e;if(c&&bm(c,i,null),a)for(const I in a){const j=a[I];Ze(j)&&(i[I]=j.bind(t))}if(s){const I=s.call(t,t);mt(I)&&(n.data=Lr(I))}if(ol=!0,r)for(const I in r){const j=r[I],W=Ze(j)?j.bind(t,t):Ze(j.get)?j.get.bind(t,t):qn,de=!Ze(j)&&Ze(j.set)?j.set.bind(t):qn,xe=yt({get:W,set:de});Object.defineProperty(i,I,{enumerable:!0,configurable:!0,get:()=>xe.value,set:me=>xe.value=me})}if(o)for(const I in o)Hh(o[I],i,t,I);if(l){const I=Ze(l)?l.call(t):l;Reflect.ownKeys(I).forEach(j=>{ga(j,I[j])})}u&&fu(u,n,"c");function N(I,j){$e(j)?j.forEach(W=>I(W.bind(t))):j&&I(j.bind(t))}if(N(fm,f),N(Nr,h),N(hm,d),N(dm,g),N(lm,v),N(cm,m),N(vm,S),N(_m,D),N(gm,L),N(pm,x),N(Ya,M),N(mm,A),$e(re))if(re.length){const I=n.exposed||(n.exposed={});re.forEach(j=>{Object.defineProperty(I,j,{get:()=>t[j],set:W=>t[j]=W,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===qn&&(n.render=P),w!=null&&(n.inheritAttrs=w),B&&(n.components=B),O&&(n.directives=O),A&&kh(n)}function bm(n,e,t=qn){$e(n)&&(n=ll(n));for(const i in n){const s=n[i];let r;mt(s)?"default"in s?r=Yn(s.from||i,s.default,!0):r=Yn(s.from||i):r=Yn(s),jt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function fu(n,e,t){Qn($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Hh(n,e,t,i){let s=i.includes(".")?Oh(t,i):()=>t[i];if(Dt(n)){const r=e[n];Ze(r)&&mr(s,r)}else if(Ze(n))mr(s,n.bind(t));else if(mt(n))if($e(n))n.forEach(r=>Hh(r,e,t,i));else{const r=Ze(n.handler)?n.handler.bind(t):e[n.handler];Ze(r)&&mr(s,r,n)}}function Wh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Pa(l,c,a,!0)),Pa(l,e,a)),mt(e)&&r.set(e,l),l}function Pa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Pa(n,r,t,!0),s&&s.forEach(a=>Pa(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Tm[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Tm={data:hu,props:du,emits:du,methods:lr,computed:lr,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:lr,directives:lr,watch:wm,provide:hu,inject:Am};function hu(n,e){return e?n?function(){return Ht(Ze(n)?n.call(this,this):n,Ze(e)?e.call(this,this):e)}:e:n}function Am(n,e){return lr(ll(n),ll(e))}function ll(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Zt(n,e){return n?[...new Set([].concat(n,e))]:e}function lr(n,e){return n?Ht(Object.create(null),n,e):e}function du(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Ht(Object.create(null),uu(n),uu(e??{})):e}function wm(n,e){if(!n)return e;if(!e)return n;const t=Ht(Object.create(null),n);for(const i in e)t[i]=Zt(n[i],e[i]);return t}function Xh(){return{app:null,config:{isNativeTag:rh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rm=0;function Cm(n,e){return function(i,s=null){Ze(i)||(i=Ht({},i)),s!=null&&!mt(s)&&(s=null);const r=Xh(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Rm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:lg,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ze(u.install)?(a.add(u),u.install(c,...f)):Ze(u)&&(a.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Ct(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Rc(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Qn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Ns;Ns=c;try{return u()}finally{Ns=f}}};return c}}let Ns=null;const Pm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${tn(e)}Modifiers`]||n[`${fs(e)}Modifiers`];function Dm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||St;let s=t;const r=e.startsWith("update:"),a=r&&Pm(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Dt(u)?u.trim():u)),a.number&&(s=t.map(gp)));let o,l=i[o=ro(e)]||i[o=ro(tn(e))];!l&&r&&(l=i[o=ro(fs(e))]),l&&Qn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Qn(c,n,6,s)}}const Im=new WeakMap;function $h(n,e,t=!1){const i=t?Im:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Ze(n)){const l=c=>{const u=$h(c,e,!0);u&&(o=!0,Ht(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(mt(n)&&i.set(n,null),null):($e(r)?r.forEach(l=>a[l]=null):Ht(a,r),mt(n)&&i.set(n,a),a)}function Ka(n,e){return!n||!Va(e)?!1:(e=e.slice(2).replace(/Once$/,""),ft(n,e[0].toLowerCase()+e.slice(1))||ft(n,fs(e))||ft(n,e))}function pu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:v}=n,m=Ra(n);let p,x;try{if(t.shapeFlag&4){const M=s||i,P=M;p=zn(c.call(P,M,u,f,d,h,g)),x=o}else{const M=e;p=zn(M.length>1?M(f,{attrs:o,slots:a,emit:l}):M(f,null)),x=e.props?o:Lm(o)}}catch(M){xr.length=0,Xa(M,n,1),p=Ct(Hi)}let E=p;if(x&&v!==!1){const M=Object.keys(x),{shapeFlag:P}=E;M.length&&P&7&&(r&&M.some(fc)&&(x=Um(x,r)),E=Vs(E,x,!1,!0))}return t.dirs&&(E=Vs(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Ec(E,t.transition),p=E,Ra(m),p}const Lm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Va(t))&&((e||(e={}))[t]=n[t]);return e},Um=(n,e)=>{const t={};for(const i in n)(!fc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Nm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?mu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(qh(a,i,h)&&!Ka(c,h))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?mu(i,a,c):!0:!!a;return!1}function mu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(qh(e,n,r)&&!Ka(t,r))return!0}return!1}function qh(n,e,t){const i=n[t],s=e[t];return t==="style"&&mt(i)&&mt(s)?!pc(i,s):i!==s}function Fm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Yh={},Kh=()=>Object.create(Yh),jh=n=>Object.getPrototypeOf(n)===Yh;function Om(n,e,t,i=!1){const s={},r=Kh();n.propsDefaults=Object.create(null),Zh(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Rh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Bm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=ut(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ka(n.emitsOptions,h))continue;const d=e[h];if(l)if(ft(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=tn(h);s[g]=cl(l,o,g,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Zh(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!ft(e,f)&&((u=fs(f))===f||!ft(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=cl(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!ft(e,f))&&(delete r[f],c=!0)}c&&mi(n.attrs,"set","")}function Zh(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(hr(l))continue;const c=e[l];let u;s&&ft(s,u=tn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Ka(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=ut(t),c=o||St;for(let u=0;u<r.length;u++){const f=r[u];t[f]=cl(s,l,f,c[f],n,!ft(c,f))}}return a}function cl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ft(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ze(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Fr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===fs(t))&&(i=!0))}return i}const km=new WeakMap;function Jh(n,e,t=!1){const i=t?km:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Ze(n)){const u=f=>{l=!0;const[h,d]=Jh(f,e,!0);Ht(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return mt(n)&&i.set(n,Is),Is;if($e(r))for(let u=0;u<r.length;u++){const f=tn(r[u]);gu(f)&&(a[f]=St)}else if(r)for(const u in r){const f=tn(u);if(gu(f)){const h=r[u],d=a[f]=$e(h)||Ze(h)?{type:h}:Ht({},h),g=d.type;let v=!1,m=!0;if($e(g))for(let p=0;p<g.length;++p){const x=g[p],E=Ze(x)&&x.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=Ze(g)&&g.name==="Boolean";d[0]=v,d[1]=m,(v||ft(d,"default"))&&o.push(f)}}const c=[a,o];return mt(n)&&i.set(n,c),c}function gu(n){return n[0]!=="$"&&!hr(n)}const bc=n=>n==="_"||n==="_ctx"||n==="$stable",Tc=n=>$e(n)?n.map(zn):[zn(n)],Vm=(n,e,t)=>{if(e._n)return e;const i=tm((...s)=>Tc(e(...s)),t);return i._c=!1,i},Qh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(bc(s))continue;const r=n[s];if(Ze(r))e[s]=Vm(s,r,i);else if(r!=null){const a=Tc(r);e[s]=()=>a}}},ed=(n,e)=>{const t=Tc(e);n.slots.default=()=>t},td=(n,e,t)=>{for(const i in e)(t||!bc(i))&&(n[i]=e[i])},zm=(n,e,t)=>{const i=n.slots=Kh();if(n.vnode.shapeFlag&32){const s=e._;s?(td(i,e,t),t&&uh(i,"_",s,!0)):Qh(e,i)}else e&&ed(n,e)},Gm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=St;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:td(s,e,t):(r=!e.$stable,Qh(e,s)),a=e}else e&&(ed(n,e),a={default:1});if(r)for(const o in s)!bc(o)&&a[o]==null&&delete s[o]},an=qm;function Hm(n){return Wm(n)}function Wm(n,e){const t=Ha();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=qn,insertStaticContent:g}=n,v=(T,C,z,K=null,q=null,se=null,R=void 0,ge=null,he=!!C.dynamicChildren)=>{if(T===C)return;T&&!Js(T,C)&&(K=G(T),me(T,q,se,!0),T=null),C.patchFlag===-2&&(he=!1,C.dynamicChildren=null);const{type:fe,ref:pe,shapeFlag:y}=C;switch(fe){case ja:m(T,C,z,K);break;case Hi:p(T,C,z,K);break;case _a:T==null&&x(C,z,K,R);break;case Et:B(T,C,z,K,q,se,R,ge,he);break;default:y&1?P(T,C,z,K,q,se,R,ge,he):y&6?O(T,C,z,K,q,se,R,ge,he):(y&64||y&128)&&fe.process(T,C,z,K,q,se,R,ge,he,J)}pe!=null&&q?gr(pe,T&&T.ref,se,C||T,!C):pe==null&&T&&T.ref!=null&&gr(T.ref,null,se,T,!0)},m=(T,C,z,K)=>{if(T==null)i(C.el=o(C.children),z,K);else{const q=C.el=T.el;C.children!==T.children&&c(q,C.children)}},p=(T,C,z,K)=>{T==null?i(C.el=l(C.children||""),z,K):C.el=T.el},x=(T,C,z,K)=>{[T.el,T.anchor]=g(T.children,C,z,K,T.el,T.anchor)},E=({el:T,anchor:C},z,K)=>{let q;for(;T&&T!==C;)q=h(T),i(T,z,K),T=q;i(C,z,K)},M=({el:T,anchor:C})=>{let z;for(;T&&T!==C;)z=h(T),s(T),T=z;s(C)},P=(T,C,z,K,q,se,R,ge,he)=>{if(C.type==="svg"?R="svg":C.type==="math"&&(R="mathml"),T==null)D(C,z,K,q,se,R,ge,he);else{const fe=T.el&&T.el._isVueCE?T.el:null;try{fe&&fe._beginPatch(),A(T,C,q,se,R,ge,he)}finally{fe&&fe._endPatch()}}},D=(T,C,z,K,q,se,R,ge)=>{let he,fe;const{props:pe,shapeFlag:y,transition:_,dirs:F}=T;if(he=T.el=a(T.type,se,pe&&pe.is,pe),y&8?u(he,T.children):y&16&&S(T.children,he,null,K,q,ho(T,se),R,ge),F&&$i(T,null,K,"created"),L(he,T,T.scopeId,R,K),pe){for(const ce in pe)ce!=="value"&&!hr(ce)&&r(he,ce,null,pe[ce],se,K);"value"in pe&&r(he,"value",null,pe.value,se),(fe=pe.onVnodeBeforeMount)&&Un(fe,K,T)}F&&$i(T,null,K,"beforeMount");const Q=Xm(q,_);Q&&_.beforeEnter(he),i(he,C,z),((fe=pe&&pe.onVnodeMounted)||Q||F)&&an(()=>{fe&&Un(fe,K,T),Q&&_.enter(he),F&&$i(T,null,K,"mounted")},q)},L=(T,C,z,K,q)=>{if(z&&d(T,z),K)for(let se=0;se<K.length;se++)d(T,K[se]);if(q){let se=q.subTree;if(C===se||rd(se.type)&&(se.ssContent===C||se.ssFallback===C)){const R=q.vnode;L(T,R,R.scopeId,R.slotScopeIds,q.parent)}}},S=(T,C,z,K,q,se,R,ge,he=0)=>{for(let fe=he;fe<T.length;fe++){const pe=T[fe]=ge?pi(T[fe]):zn(T[fe]);v(null,pe,C,z,K,q,se,R,ge)}},A=(T,C,z,K,q,se,R)=>{const ge=C.el=T.el;let{patchFlag:he,dynamicChildren:fe,dirs:pe}=C;he|=T.patchFlag&16;const y=T.props||St,_=C.props||St;let F;if(z&&qi(z,!1),(F=_.onVnodeBeforeUpdate)&&Un(F,z,C,T),pe&&$i(C,T,z,"beforeUpdate"),z&&qi(z,!0),(y.innerHTML&&_.innerHTML==null||y.textContent&&_.textContent==null)&&u(ge,""),fe?re(T.dynamicChildren,fe,ge,z,K,ho(C,q),se):R||j(T,C,ge,null,z,K,ho(C,q),se,!1),he>0){if(he&16)w(ge,y,_,z,q);else if(he&2&&y.class!==_.class&&r(ge,"class",null,_.class,q),he&4&&r(ge,"style",y.style,_.style,q),he&8){const Q=C.dynamicProps;for(let ce=0;ce<Q.length;ce++){const ee=Q[ce],be=y[ee],ve=_[ee];(ve!==be||ee==="value")&&r(ge,ee,be,ve,q,z)}}he&1&&T.children!==C.children&&u(ge,C.children)}else!R&&fe==null&&w(ge,y,_,z,q);((F=_.onVnodeUpdated)||pe)&&an(()=>{F&&Un(F,z,C,T),pe&&$i(C,T,z,"updated")},K)},re=(T,C,z,K,q,se,R)=>{for(let ge=0;ge<C.length;ge++){const he=T[ge],fe=C[ge],pe=he.el&&(he.type===Et||!Js(he,fe)||he.shapeFlag&198)?f(he.el):z;v(he,fe,pe,null,K,q,se,R,!0)}},w=(T,C,z,K,q)=>{if(C!==z){if(C!==St)for(const se in C)!hr(se)&&!(se in z)&&r(T,se,C[se],null,q,K);for(const se in z){if(hr(se))continue;const R=z[se],ge=C[se];R!==ge&&se!=="value"&&r(T,se,ge,R,q,K)}"value"in z&&r(T,"value",C.value,z.value,q)}},B=(T,C,z,K,q,se,R,ge,he)=>{const fe=C.el=T?T.el:o(""),pe=C.anchor=T?T.anchor:o("");let{patchFlag:y,dynamicChildren:_,slotScopeIds:F}=C;F&&(ge=ge?ge.concat(F):F),T==null?(i(fe,z,K),i(pe,z,K),S(C.children||[],z,pe,q,se,R,ge,he)):y>0&&y&64&&_&&T.dynamicChildren&&T.dynamicChildren.length===_.length?(re(T.dynamicChildren,_,z,q,se,R,ge),(C.key!=null||q&&C===q.subTree)&&nd(T,C,!0)):j(T,C,z,pe,q,se,R,ge,he)},O=(T,C,z,K,q,se,R,ge,he)=>{C.slotScopeIds=ge,T==null?C.shapeFlag&512?q.ctx.activate(C,z,K,R,he):U(C,z,K,q,se,R,he):V(T,C,he)},U=(T,C,z,K,q,se,R)=>{const ge=T.component=eg(T,K,q);if(Vh(T)&&(ge.ctx.renderer=J),ng(ge,!1,R),ge.asyncDep){if(q&&q.registerDep(ge,N,R),!T.el){const he=ge.subTree=Ct(Hi);p(null,he,C,z),T.placeholder=he.el}}else N(ge,T,C,z,q,se,R)},V=(T,C,z)=>{const K=C.component=T.component;if(Nm(T,C,z))if(K.asyncDep&&!K.asyncResolved){I(K,C,z);return}else K.next=C,K.update();else C.el=T.el,K.vnode=C},N=(T,C,z,K,q,se,R)=>{const ge=()=>{if(T.isMounted){let{next:y,bu:_,u:F,parent:Q,vnode:ce}=T;{const Ve=id(T);if(Ve){y&&(y.el=ce.el,I(T,y,R)),Ve.asyncDep.then(()=>{an(()=>{T.isUnmounted||fe()},q)});return}}let ee=y,be;qi(T,!1),y?(y.el=ce.el,I(T,y,R)):y=ce,_&&ao(_),(be=y.props&&y.props.onVnodeBeforeUpdate)&&Un(be,Q,y,ce),qi(T,!0);const ve=pu(T),Ne=T.subTree;T.subTree=ve,v(Ne,ve,f(Ne.el),G(Ne),T,q,se),y.el=ve.el,ee===null&&Fm(T,ve.el),F&&an(F,q),(be=y.props&&y.props.onVnodeUpdated)&&an(()=>Un(be,Q,y,ce),q)}else{let y;const{el:_,props:F}=C,{bm:Q,m:ce,parent:ee,root:be,type:ve}=T,Ne=_r(C);qi(T,!1),Q&&ao(Q),!Ne&&(y=F&&F.onVnodeBeforeMount)&&Un(y,ee,C),qi(T,!0);{be.ce&&be.ce._hasShadowRoot()&&be.ce._injectChildStyle(ve,T.parent?T.parent.type:void 0);const Ve=T.subTree=pu(T);v(null,Ve,z,K,T,q,se),C.el=Ve.el}if(ce&&an(ce,q),!Ne&&(y=F&&F.onVnodeMounted)){const Ve=C;an(()=>Un(y,ee,Ve),q)}(C.shapeFlag&256||ee&&_r(ee.vnode)&&ee.vnode.shapeFlag&256)&&T.a&&an(T.a,q),T.isMounted=!0,C=z=K=null}};T.scope.on();const he=T.effect=new ph(ge);T.scope.off();const fe=T.update=he.run.bind(he),pe=T.job=he.runIfDirty.bind(he);pe.i=T,pe.id=T.uid,he.scheduler=()=>yc(pe),qi(T,!0),fe()},I=(T,C,z)=>{C.component=T;const K=T.vnode.props;T.vnode=C,T.next=null,Bm(T,C.props,K,z),Gm(T,C.children,z),xi(),au(T),Mi()},j=(T,C,z,K,q,se,R,ge,he=!1)=>{const fe=T&&T.children,pe=T?T.shapeFlag:0,y=C.children,{patchFlag:_,shapeFlag:F}=C;if(_>0){if(_&128){de(fe,y,z,K,q,se,R,ge,he);return}else if(_&256){W(fe,y,z,K,q,se,R,ge,he);return}}F&8?(pe&16&&ae(fe,q,se),y!==fe&&u(z,y)):pe&16?F&16?de(fe,y,z,K,q,se,R,ge,he):ae(fe,q,se,!0):(pe&8&&u(z,""),F&16&&S(y,z,K,q,se,R,ge,he))},W=(T,C,z,K,q,se,R,ge,he)=>{T=T||Is,C=C||Is;const fe=T.length,pe=C.length,y=Math.min(fe,pe);let _;for(_=0;_<y;_++){const F=C[_]=he?pi(C[_]):zn(C[_]);v(T[_],F,z,null,q,se,R,ge,he)}fe>pe?ae(T,q,se,!0,!1,y):S(C,z,K,q,se,R,ge,he,y)},de=(T,C,z,K,q,se,R,ge,he)=>{let fe=0;const pe=C.length;let y=T.length-1,_=pe-1;for(;fe<=y&&fe<=_;){const F=T[fe],Q=C[fe]=he?pi(C[fe]):zn(C[fe]);if(Js(F,Q))v(F,Q,z,null,q,se,R,ge,he);else break;fe++}for(;fe<=y&&fe<=_;){const F=T[y],Q=C[_]=he?pi(C[_]):zn(C[_]);if(Js(F,Q))v(F,Q,z,null,q,se,R,ge,he);else break;y--,_--}if(fe>y){if(fe<=_){const F=_+1,Q=F<pe?C[F].el:K;for(;fe<=_;)v(null,C[fe]=he?pi(C[fe]):zn(C[fe]),z,Q,q,se,R,ge,he),fe++}}else if(fe>_)for(;fe<=y;)me(T[fe],q,se,!0),fe++;else{const F=fe,Q=fe,ce=new Map;for(fe=Q;fe<=_;fe++){const Te=C[fe]=he?pi(C[fe]):zn(C[fe]);Te.key!=null&&ce.set(Te.key,fe)}let ee,be=0;const ve=_-Q+1;let Ne=!1,Ve=0;const _e=new Array(ve);for(fe=0;fe<ve;fe++)_e[fe]=0;for(fe=F;fe<=y;fe++){const Te=T[fe];if(be>=ve){me(Te,q,se,!0);continue}let Ce;if(Te.key!=null)Ce=ce.get(Te.key);else for(ee=Q;ee<=_;ee++)if(_e[ee-Q]===0&&Js(Te,C[ee])){Ce=ee;break}Ce===void 0?me(Te,q,se,!0):(_e[Ce-Q]=fe+1,Ce>=Ve?Ve=Ce:Ne=!0,v(Te,C[Ce],z,null,q,se,R,ge,he),be++)}const Se=Ne?$m(_e):Is;for(ee=Se.length-1,fe=ve-1;fe>=0;fe--){const Te=Q+fe,Ce=C[Te],Pe=C[Te+1],Ke=Te+1<pe?Pe.el||sd(Pe):K;_e[fe]===0?v(null,Ce,z,Ke,q,se,R,ge,he):Ne&&(ee<0||fe!==Se[ee]?xe(Ce,z,Ke,2):ee--)}}},xe=(T,C,z,K,q=null)=>{const{el:se,type:R,transition:ge,children:he,shapeFlag:fe}=T;if(fe&6){xe(T.component.subTree,C,z,K);return}if(fe&128){T.suspense.move(C,z,K);return}if(fe&64){R.move(T,C,z,J);return}if(R===Et){i(se,C,z);for(let y=0;y<he.length;y++)xe(he[y],C,z,K);i(T.anchor,C,z);return}if(R===_a){E(T,C,z);return}if(K!==2&&fe&1&&ge)if(K===0)ge.beforeEnter(se),i(se,C,z),an(()=>ge.enter(se),q);else{const{leave:y,delayLeave:_,afterLeave:F}=ge,Q=()=>{T.ctx.isUnmounted?s(se):i(se,C,z)},ce=()=>{se._isLeaving&&se[om](!0),y(se,()=>{Q(),F&&F()})};_?_(se,Q,ce):ce()}else i(se,C,z)},me=(T,C,z,K=!1,q=!1)=>{const{type:se,props:R,ref:ge,children:he,dynamicChildren:fe,shapeFlag:pe,patchFlag:y,dirs:_,cacheIndex:F}=T;if(y===-2&&(q=!1),ge!=null&&(xi(),gr(ge,null,z,T,!0),Mi()),F!=null&&(C.renderCache[F]=void 0),pe&256){C.ctx.deactivate(T);return}const Q=pe&1&&_,ce=!_r(T);let ee;if(ce&&(ee=R&&R.onVnodeBeforeUnmount)&&Un(ee,C,T),pe&6)Ye(T.component,z,K);else{if(pe&128){T.suspense.unmount(z,K);return}Q&&$i(T,null,C,"beforeUnmount"),pe&64?T.type.remove(T,C,z,J,K):fe&&!fe.hasOnce&&(se!==Et||y>0&&y&64)?ae(fe,C,z,!1,!0):(se===Et&&y&384||!q&&pe&16)&&ae(he,C,z),K&&Oe(T)}(ce&&(ee=R&&R.onVnodeUnmounted)||Q)&&an(()=>{ee&&Un(ee,C,T),Q&&$i(T,null,C,"unmounted")},z)},Oe=T=>{const{type:C,el:z,anchor:K,transition:q}=T;if(C===Et){We(z,K);return}if(C===_a){M(T);return}const se=()=>{s(z),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(T.shapeFlag&1&&q&&!q.persisted){const{leave:R,delayLeave:ge}=q,he=()=>R(z,se);ge?ge(T.el,se,he):he()}else se()},We=(T,C)=>{let z;for(;T!==C;)z=h(T),s(T),T=z;s(C)},Ye=(T,C,z)=>{const{bum:K,scope:q,job:se,subTree:R,um:ge,m:he,a:fe}=T;_u(he),_u(fe),K&&ao(K),q.stop(),se&&(se.flags|=8,me(R,T,C,z)),ge&&an(ge,C),an(()=>{T.isUnmounted=!0},C)},ae=(T,C,z,K=!1,q=!1,se=0)=>{for(let R=se;R<T.length;R++)me(T[R],C,z,K,q)},G=T=>{if(T.shapeFlag&6)return G(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const C=h(T.anchor||T.el),z=C&&C[rm];return z?h(z):C};let ne=!1;const k=(T,C,z)=>{let K;T==null?C._vnode&&(me(C._vnode,null,null,!0),K=C._vnode.component):v(C._vnode||null,T,C,null,null,null,z),C._vnode=T,ne||(ne=!0,au(K),Lh(),ne=!1)},J={p:v,um:me,m:xe,r:Oe,mt:U,mc:S,pc:j,pbc:re,n:G,o:n};return{render:k,hydrate:void 0,createApp:Cm(k)}}function ho({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function qi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Xm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function nd(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=pi(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&nd(a,o)),o.type===ja&&(o.patchFlag===-1&&(o=s[r]=pi(o)),o.el=a.el),o.type===Hi&&!o.el&&(o.el=a.el)}}function $m(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function id(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:id(e)}function _u(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function sd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?sd(e.subTree):null}const rd=n=>n.__isSuspense;function qm(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):em(n)}const Et=Symbol.for("v-fgt"),ja=Symbol.for("v-txt"),Hi=Symbol.for("v-cmt"),_a=Symbol.for("v-stc"),xr=[];let mn=null;function De(n=!1){xr.push(mn=n?null:[])}function Ym(){xr.pop(),mn=xr[xr.length-1]||null}let Tr=1;function Da(n,e=!1){Tr+=n,n<0&&mn&&e&&(mn.hasOnce=!0)}function ad(n){return n.dynamicChildren=Tr>0?mn||Is:null,Ym(),Tr>0&&mn&&mn.push(n),n}function Ie(n,e,t,i,s,r){return ad(X(n,e,t,i,s,r,!0))}function Ac(n,e,t,i,s){return ad(Ct(n,e,t,i,s,!0))}function Ia(n){return n?n.__v_isVNode===!0:!1}function Js(n,e){return n.type===e.type&&n.key===e.key}const od=({key:n})=>n??null,va=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Dt(n)||jt(n)||Ze(n)?{i:wn,r:n,k:e,f:!!t}:n:null);function X(n,e=null,t=null,i=0,s=null,r=n===Et?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&od(e),ref:e&&va(e),scopeId:Nh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wn};return o?(wc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Dt(t)?8:16),Tr>0&&!a&&mn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&mn.push(l),l}const Ct=Km;function Km(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Mm)&&(n=Hi),Ia(n)){const o=Vs(n,e,!0);return t&&wc(o,t),Tr>0&&!r&&mn&&(o.shapeFlag&6?mn[mn.indexOf(n)]=o:mn.push(o)),o.patchFlag=-2,o}if(og(n)&&(n=n.__vccOpts),e){e=jm(e);let{class:o,style:l}=e;o&&!Dt(o)&&(e.class=Mn(o)),mt(l)&&(Sc(l)&&!$e(l)&&(l=Ht({},l)),e.style=kt(l))}const a=Dt(n)?1:rd(n)?128:am(n)?64:mt(n)?4:Ze(n)?2:0;return X(n,e,t,i,s,a,r,!0)}function jm(n){return n?Sc(n)||jh(n)?Ht({},n):n:null}function Vs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Zm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&od(c),ref:e&&e.ref?t&&r?$e(r)?r.concat(va(e)):[r,va(e)]:va(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Et?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Vs(n.ssContent),ssFallback:n.ssFallback&&Vs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ec(u,l.clone(u)),u}function Fs(n=" ",e=0){return Ct(ja,null,n,e)}function ul(n,e){const t=Ct(_a,null,n);return t.staticCount=e,t}function Vt(n="",e=!1){return e?(De(),Ac(Hi,null,n)):Ct(Hi,null,n)}function zn(n){return n==null||typeof n=="boolean"?Ct(Hi):$e(n)?Ct(Et,null,n.slice()):Ia(n)?pi(n):Ct(ja,null,String(n))}function pi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Vs(n)}function wc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),wc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!jh(e)?e._ctx=wn:s===3&&wn&&(wn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:wn},t=32):(e=String(e),i&64?(t=16,e=[Fs(e)]):t=8);n.children=e,n.shapeFlag|=t}function Zm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Mn([e.class,i.class]));else if(s==="style")e.style=kt([e.style,i.style]);else if(Va(s)){const r=e[s],a=i[s];a&&r!==a&&!($e(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Un(n,e,t,i=null){Qn(n,e,7,[t,i])}const Jm=Xh();let Qm=0;function eg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Jm,r={uid:Qm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jh(i,s),emitsOptions:$h(i,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Dm.bind(null,r),n.ce&&n.ce(r),r}let Yt=null;const tg=()=>Yt||wn;let La,fl;{const n=Ha(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};La=e("__VUE_INSTANCE_SETTERS__",t=>Yt=t),fl=e("__VUE_SSR_SETTERS__",t=>Ar=t)}const Fr=n=>{const e=Yt;return La(n),n.scope.on(),()=>{n.scope.off(),La(e)}},vu=()=>{Yt&&Yt.scope.off(),La(null)};function ld(n){return n.vnode.shapeFlag&4}let Ar=!1;function ng(n,e=!1,t=!1){e&&fl(e);const{props:i,children:s}=n.vnode,r=ld(n);Om(n,i,r,e),zm(n,s,t||e);const a=r?ig(n,e):void 0;return e&&fl(!1),a}function ig(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ym);const{setup:i}=t;if(i){xi();const s=n.setupContext=i.length>1?rg(n):null,r=Fr(n),a=Ur(i,n,0,[n.props,s]),o=oh(a);if(Mi(),r(),(o||n.sp)&&!_r(n)&&kh(n),o){if(a.then(vu,vu),e)return a.then(l=>{xu(n,l)}).catch(l=>{Xa(l,n,0)});n.asyncDep=a}else xu(n,a)}else cd(n)}function xu(n,e,t){Ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=Ph(e)),cd(n)}function cd(n,e,t){const i=n.type;n.render||(n.render=i.render||qn);{const s=Fr(n);xi();try{Em(n)}finally{Mi(),s()}}}const sg={get(n,e){return qt(n,"get",""),n[e]}};function rg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,sg),slots:n.slots,emit:n.emit,expose:e}}function Rc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ph(Wp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in vr)return vr[t](n)},has(e,t){return t in e||t in vr}})):n.proxy}function ag(n,e=!0){return Ze(n)?n.displayName||n.name:n.name||e&&n.__name}function og(n){return Ze(n)&&"__vccOpts"in n}const yt=(n,e)=>Kp(n,e,Ar);function ud(n,e,t){try{Da(-1);const i=arguments.length;return i===2?mt(e)&&!$e(e)?Ia(e)?Ct(n,null,[e]):Ct(n,e):Ct(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ia(t)&&(t=[t]),Ct(n,e,t))}finally{Da(1)}}const lg="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hl;const Mu=typeof window<"u"&&window.trustedTypes;if(Mu)try{hl=Mu.createPolicy("vue",{createHTML:n=>n})}catch{}const fd=hl?n=>hl.createHTML(n):n=>n,cg="http://www.w3.org/2000/svg",ug="http://www.w3.org/1998/Math/MathML",di=typeof document<"u"?document:null,Su=di&&di.createElement("template"),fg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?di.createElementNS(cg,n):e==="mathml"?di.createElementNS(ug,n):t?di.createElement(n,{is:t}):di.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>di.createTextNode(n),createComment:n=>di.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>di.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Su.innerHTML=fd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Su.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},hg=Symbol("_vtc");function dg(n,e,t){const i=n[hg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const yu=Symbol("_vod"),pg=Symbol("_vsh"),mg=Symbol(""),gg=/(?:^|;)\s*display\s*:/;function _g(n,e,t){const i=n.style,s=Dt(t);let r=!1;if(t&&!s){if(e)if(Dt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&xa(i,o,"")}else for(const a in e)t[a]==null&&xa(i,a,"");for(const a in t)a==="display"&&(r=!0),xa(i,a,t[a])}else if(s){if(e!==t){const a=i[mg];a&&(t+=";"+a),i.cssText=t,r=gg.test(t)}}else e&&n.removeAttribute("style");yu in n&&(n[yu]=r?i.display:"",n[pg]&&(i.display="none"))}const Eu=/\s*!important$/;function xa(n,e,t){if($e(t))t.forEach(i=>xa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=vg(n,e);Eu.test(t)?n.setProperty(fs(i),t.replace(Eu,""),"important"):n[i]=t}}const bu=["Webkit","Moz","ms"],po={};function vg(n,e){const t=po[e];if(t)return t;let i=tn(e);if(i!=="filter"&&i in n)return po[e]=i;i=Ga(i);for(let s=0;s<bu.length;s++){const r=bu[s]+i;if(r in n)return po[e]=r}return e}const Tu="http://www.w3.org/1999/xlink";function Au(n,e,t,i,s,r=yp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Tu,e.slice(6,e.length)):n.setAttributeNS(Tu,e,t):t==null||r&&!fh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Jn(t)?String(t):t)}function wu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?fd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=fh(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function xg(n,e,t,i){n.addEventListener(e,t,i)}function Mg(n,e,t,i){n.removeEventListener(e,t,i)}const Ru=Symbol("_vei");function Sg(n,e,t,i,s=null){const r=n[Ru]||(n[Ru]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=yg(e);if(i){const c=r[e]=Tg(i,s);xg(n,o,c,l)}else a&&(Mg(n,o,a,l),r[e]=void 0)}}const Cu=/(?:Once|Passive|Capture)$/;function yg(n){let e;if(Cu.test(n)){e={};let i;for(;i=n.match(Cu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):fs(n.slice(2)),e]}let mo=0;const Eg=Promise.resolve(),bg=()=>mo||(Eg.then(()=>mo=0),mo=Date.now());function Tg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Qn(Ag(i,t.value),e,5,[i])};return t.value=n,t.attached=bg(),t}function Ag(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Pu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,wg=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?dg(n,i,a):e==="style"?_g(n,t,i):Va(e)?fc(e)||Sg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rg(n,e,i,a))?(wu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Au(n,e,i,a,r,e!=="value")):n._isVueCE&&(Cg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Dt(i)))?wu(n,tn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Au(n,e,i,a))};function Rg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Pu(e)&&Ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pu(e)&&Dt(t)?!1:e in n}function Cg(n,e){const t=n._def.props;if(!t)return!1;const i=tn(e);return Array.isArray(t)?t.some(s=>tn(s)===i):Object.keys(t).some(s=>tn(s)===i)}const Pg=["ctrl","shift","alt","meta"],Dg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Pg.some(t=>n[`${t}Key`]&&!e.includes(t))},Ig=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let a=0;a<e.length;a++){const o=Dg[e[a]];if(o&&o(s,e))return}return n(s,...r)})},Lg=Ht({patchProp:wg},fg);let Du;function Ug(){return Du||(Du=Hm(Lg))}const Ng=(...n)=>{const e=Ug().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Og(i);if(!s)return;const r=e._component;!Ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Fg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Fg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Og(n){return Dt(n)?document.querySelector(n):n}const Ti=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Bg={};function kg(n,e){const t=Gh("router-view");return De(),Ac(t)}const Vg=Ti(Bg,[["render",kg]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ds=typeof document<"u";function hd(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function zg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&hd(n.default)}const ct=Object.assign;function go(n,e){const t={};for(const i in e){const s=e[i];t[i]=Dn(s)?s.map(n):n(s)}return t}const Mr=()=>{},Dn=Array.isArray;function Iu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const dd=/#/g,Gg=/&/g,Hg=/\//g,Wg=/=/g,Xg=/\?/g,pd=/\+/g,$g=/%5B/g,qg=/%5D/g,md=/%5E/g,Yg=/%60/g,gd=/%7B/g,Kg=/%7C/g,_d=/%7D/g,jg=/%20/g;function Cc(n){return n==null?"":encodeURI(""+n).replace(Kg,"|").replace($g,"[").replace(qg,"]")}function Zg(n){return Cc(n).replace(gd,"{").replace(_d,"}").replace(md,"^")}function dl(n){return Cc(n).replace(pd,"%2B").replace(jg,"+").replace(dd,"%23").replace(Gg,"%26").replace(Yg,"`").replace(gd,"{").replace(_d,"}").replace(md,"^")}function Jg(n){return dl(n).replace(Wg,"%3D")}function Qg(n){return Cc(n).replace(dd,"%23").replace(Xg,"%3F")}function e_(n){return Qg(n).replace(Hg,"%2F")}function wr(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const t_=/\/$/,n_=n=>n.replace(t_,"");function _o(n,e,t="/"){let i,s={},r="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,o>0?o:e.length),s=n(r.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=a_(i??e,t),{fullPath:i+r+a,path:i,query:s,hash:wr(a)}}function i_(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Lu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function s_(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&zs(e.matched[i],t.matched[s])&&vd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function zs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function vd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!r_(n[t],e[t]))return!1;return!0}function r_(n,e){return Dn(n)?Uu(n,e):Dn(e)?Uu(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function Uu(n,e){return Dn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function a_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(a).join("/")}const Ri={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let pl=function(n){return n.pop="pop",n.push="push",n}({}),vo=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function o_(n){if(!n)if(Ds){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),n_(n)}const l_=/^[^#]+#/;function c_(n,e){return n.replace(l_,"#")+e}function u_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Za=()=>({left:window.scrollX,top:window.scrollY});function f_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=u_(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Nu(n,e){return(history.state?history.state.position-e:-1)+n}const ml=new Map;function h_(n,e){ml.set(n,e)}function d_(n){const e=ml.get(n);return ml.delete(n),e}function p_(n){return typeof n=="string"||n&&typeof n=="object"}function xd(n){return typeof n=="string"||typeof n=="symbol"}let At=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const Md=Symbol("");At.MATCHER_NOT_FOUND+"",At.NAVIGATION_GUARD_REDIRECT+"",At.NAVIGATION_ABORTED+"",At.NAVIGATION_CANCELLED+"",At.NAVIGATION_DUPLICATED+"";function Gs(n,e){return ct(new Error,{type:n,[Md]:!0},e)}function ai(n,e){return n instanceof Error&&Md in n&&(e==null||!!(n.type&e))}const m_=["params","query","hash"];function g_(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of m_)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function __(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const s=t[i].replace(pd," "),r=s.indexOf("="),a=wr(r<0?s:s.slice(0,r)),o=r<0?null:wr(s.slice(r+1));if(a in e){let l=e[a];Dn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function Fu(n){let e="";for(let t in n){const i=n[t];if(t=Jg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Dn(i)?i.map(s=>s&&dl(s)):[i&&dl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function v_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Dn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const x_=Symbol(""),Ou=Symbol(""),Ja=Symbol(""),Sd=Symbol(""),gl=Symbol("");function Qs(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Oi(n,e,t,i,s,r=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(Gs(At.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):p_(h)?l(Gs(At.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[s]===a&&typeof h=="function"&&a.push(h),o())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function xo(n,e,t,i,s=r=>r()){const r=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(hd(l)){const c=(l.__vccOpts||l)[e];c&&r.push(Oi(c,t,i,a,o,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=zg(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&Oi(h,t,i,a,o,s)()}))}}return r}function M_(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let a=0;a<r;a++){const o=e.matched[a];o&&(n.matched.find(c=>zs(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>zs(c,l))||s.push(l))}return[t,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let S_=()=>location.protocol+"//"+location.host;function yd(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,o=s.slice(a);return o[0]!=="/"&&(o="/"+o),Lu(o,"")}return Lu(t,n)+i+s}function y_(n,e,t,i){let s=[],r=[],a=null;const o=({state:h})=>{const d=yd(n,location),g=t.value,v=e.value;let m=0;if(h){if(t.value=d,e.value=h,a&&a===g){a=null;return}m=v?h.position-v.position:0}else i(d);s.forEach(p=>{p(t.value,g,{delta:m,type:pl.pop,direction:m?m>0?vo.forward:vo.back:vo.unknown})})};function l(){a=t.value}function c(h){s.push(h);const d=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ct({},h.state,{scroll:Za()}),"")}}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function Bu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Za():null}}function E_(n){const{history:e,location:t}=window,i={value:yd(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:S_()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function a(l,c){r(l,ct({},e.state,Bu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function o(l,c){const u=ct({},s.value,e.state,{forward:l,scroll:Za()});r(u.current,u,!0),r(l,ct({},Bu(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:o,replace:a}}function b_(n){n=o_(n);const e=E_(n),t=y_(n,e.state,e.location,e.replace);function i(r,a=!0){a||t.pauseListeners(),history.go(r)}const s=ct({location:"",base:n,go:i,createHref:c_.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let ss=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var It=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(It||{});const T_={type:ss.Static,value:""},A_=/[a-zA-Z0-9_]/;function w_(n){if(!n)return[[]];if(n==="/")return[[T_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=It.Static,i=t;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,c="",u="";function f(){c&&(t===It.Static?r.push({type:ss.Static,value:c}):t===It.Param||t===It.ParamRegExp||t===It.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:ss.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==It.ParamRegExp){i=t,t=It.EscapeNext;continue}switch(t){case It.Static:l==="/"?(c&&f(),a()):l===":"?(f(),t=It.Param):h();break;case It.EscapeNext:h(),t=i;break;case It.Param:l==="("?t=It.ParamRegExp:A_.test(l)?h():(f(),t=It.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case It.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=It.ParamRegExpEnd:u+=l;break;case It.ParamRegExpEnd:f(),t=It.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===It.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),s}const ku="[^/]+?",R_={sensitive:!1,strict:!1,start:!0,end:!0};var Qt=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Qt||{});const C_=/[.+*?^${}()[\]/\\]/g;function P_(n,e){const t=ct({},R_,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[Qt.Root];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=Qt.Segment+(t.sensitive?Qt.BonusCaseSensitive:0);if(h.type===ss.Static)f||(s+="/"),s+=h.value.replace(C_,"\\$&"),d+=Qt.Static;else if(h.type===ss.Param){const{value:g,repeatable:v,optional:m,regexp:p}=h;r.push({name:g,repeatable:v,optional:m});const x=p||ku;if(x!==ku){d+=Qt.BonusCustomRegExp;try{`${x}`}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+M.message)}}let E=v?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,d+=Qt.Dynamic,m&&(d+=Qt.BonusOptional),v&&(d+=Qt.BonusRepeatable),x===".*"&&(d+=Qt.BonusWildcard)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=Qt.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=r[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===ss.Static)u+=d.value;else if(d.type===ss.Param){const{value:g,repeatable:v,optional:m}=d,p=g in c?c[g]:"";if(Dn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=Dn(p)?p.join("/"):p;if(!x)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:a,score:i,keys:r,parse:o,stringify:l}}function D_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Qt.Static+Qt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Qt.Static+Qt.Segment?1:-1:0}function Ed(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=D_(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Vu(i))return 1;if(Vu(s))return-1}return s.length-i.length}function Vu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const I_={strict:!1,end:!0,sensitive:!1};function L_(n,e,t){const i=P_(w_(n.path),t),s=ct(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function U_(n,e){const t=[],i=new Map;e=Iu(I_,e);function s(f){return i.get(f)}function r(f,h,d){const g=!d,v=Gu(f);v.aliasOf=d&&d.record;const m=Iu(e,f),p=[v];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of M)p.push(Gu(ct({},v,{components:d?d.record.components:v.components,path:P,aliasOf:d?d.record:v})))}let x,E;for(const M of p){const{path:P}=M;if(h&&P[0]!=="/"){const D=h.record.path,L=D[D.length-1]==="/"?"":"/";M.path=h.record.path+(P&&L+P)}if(x=L_(M,h,m),d?d.alias.push(x):(E=E||x,E!==x&&E.alias.push(x),g&&f.name&&!Hu(x)&&a(f.name)),bd(x)&&l(x),v.children){const D=v.children;for(let L=0;L<D.length;L++)r(D[L],x,d&&d.children[L])}d=d||x}return E?()=>{a(E)}:Mr}function a(f){if(xd(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=O_(f,t);t.splice(h,0,f),f.record.name&&!Hu(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},v,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Gs(At.MATCHER_NOT_FOUND,{location:f});m=d.record.name,g=ct(zu(h.params,d.keys.filter(E=>!E.optional).concat(d.parent?d.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&zu(f.params,d.keys.map(E=>E.name))),v=d.stringify(g)}else if(f.path!=null)v=f.path,d=t.find(E=>E.re.test(v)),d&&(g=d.parse(v),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(E=>E.re.test(h.path)),!d)throw Gs(At.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=d.record.name,g=ct({},h.params,f.params),v=d.stringify(g)}const p=[];let x=d;for(;x;)p.unshift(x.record),x=x.parent;return{name:m,path:v,params:g,matched:p,meta:F_(p)}}n.forEach(f=>r(f));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:s}}function zu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Gu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:N_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function N_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Hu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function F_(n){return n.reduce((e,t)=>ct(e,t.meta),{})}function O_(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;Ed(n,e[r])<0?i=r:t=r+1}const s=B_(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function B_(n){let e=n;for(;e=e.parent;)if(bd(e)&&Ed(n,e)===0)return e}function bd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Wu(n){const e=Yn(Ja),t=Yn(Sd),i=yt(()=>{const l=at(n.to);return e.resolve(l)}),s=yt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(zs.bind(null,u));if(h>-1)return h;const d=Xu(l[c-2]);return c>1&&Xu(u)===d&&f[f.length-1].path!==d?f.findIndex(zs.bind(null,l[c-2])):h}),r=yt(()=>s.value>-1&&H_(t.params,i.value.params)),a=yt(()=>s.value>-1&&s.value===t.matched.length-1&&vd(t.params,i.value.params));function o(l={}){if(G_(l)){const c=e[at(n.replace)?"replace":"push"](at(n.to)).catch(Mr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:yt(()=>i.value.href),isActive:r,isExactActive:a,navigate:o}}function k_(n){return n.length===1?n[0]:n}const V_=Bh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Wu,setup(n,{slots:e}){const t=Lr(Wu(n)),{options:i}=Yn(Ja),s=yt(()=>({[$u(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[$u(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&k_(e.default(t));return n.custom?r:ud("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),z_=V_;function G_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function H_(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Dn(s)||s.length!==i.length||i.some((r,a)=>r.valueOf()!==s[a].valueOf()))return!1}return!0}function Xu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const $u=(n,e,t)=>n??e??t,W_=Bh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Yn(gl),s=yt(()=>n.route||i.value),r=Yn(Ou,0),a=yt(()=>{let c=at(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=yt(()=>s.value.matched[a.value]);ga(Ou,yt(()=>a.value+1)),ga(x_,o),ga(gl,s);const l=ht();return mr(()=>[l.value,o.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!zs(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return qu(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=ud(h,ct({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return qu(t.default,{Component:m,route:c})||m}}});function qu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const X_=W_;function $_(n){const e=U_(n.routes,n),t=n.parseQuery||__,i=n.stringifyQuery||Fu,s=n.history,r=Qs(),a=Qs(),o=Qs(),l=Xp(Ri);let c=Ri;Ds&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=go.bind(null,G=>""+G),f=go.bind(null,e_),h=go.bind(null,wr);function d(G,ne){let k,J;return xd(G)?(k=e.getRecordMatcher(G),J=ne):J=G,e.addRoute(J,k)}function g(G){const ne=e.getRecordMatcher(G);ne&&e.removeRoute(ne)}function v(){return e.getRoutes().map(G=>G.record)}function m(G){return!!e.getRecordMatcher(G)}function p(G,ne){if(ne=ct({},ne||l.value),typeof G=="string"){const z=_o(t,G,ne.path),K=e.resolve({path:z.path},ne),q=s.createHref(z.fullPath);return ct(z,K,{params:h(K.params),hash:wr(z.hash),redirectedFrom:void 0,href:q})}let k;if(G.path!=null)k=ct({},G,{path:_o(t,G.path,ne.path).path});else{const z=ct({},G.params);for(const K in z)z[K]==null&&delete z[K];k=ct({},G,{params:f(z)}),ne.params=f(ne.params)}const J=e.resolve(k,ne),le=G.hash||"";J.params=u(h(J.params));const T=i_(i,ct({},G,{hash:Zg(le),path:J.path})),C=s.createHref(T);return ct({fullPath:T,hash:le,query:i===Fu?v_(G.query):G.query||{}},J,{redirectedFrom:void 0,href:C})}function x(G){return typeof G=="string"?_o(t,G,l.value.path):ct({},G)}function E(G,ne){if(c!==G)return Gs(At.NAVIGATION_CANCELLED,{from:ne,to:G})}function M(G){return L(G)}function P(G){return M(ct(x(G),{replace:!0}))}function D(G,ne){const k=G.matched[G.matched.length-1];if(k&&k.redirect){const{redirect:J}=k;let le=typeof J=="function"?J(G,ne):J;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=x(le):{path:le},le.params={}),ct({query:G.query,hash:G.hash,params:le.path!=null?{}:G.params},le)}}function L(G,ne){const k=c=p(G),J=l.value,le=G.state,T=G.force,C=G.replace===!0,z=D(k,J);if(z)return L(ct(x(z),{state:typeof z=="object"?ct({},le,z.state):le,force:T,replace:C}),ne||k);const K=k;K.redirectedFrom=ne;let q;return!T&&s_(i,J,k)&&(q=Gs(At.NAVIGATION_DUPLICATED,{to:K,from:J}),xe(J,J,!0,!1)),(q?Promise.resolve(q):re(K,J)).catch(se=>ai(se)?ai(se,At.NAVIGATION_GUARD_REDIRECT)?se:de(se):j(se,K,J)).then(se=>{if(se){if(ai(se,At.NAVIGATION_GUARD_REDIRECT))return L(ct({replace:C},x(se.to),{state:typeof se.to=="object"?ct({},le,se.to.state):le,force:T}),ne||K)}else se=B(K,J,!0,C,le);return w(K,J,se),se})}function S(G,ne){const k=E(G,ne);return k?Promise.reject(k):Promise.resolve()}function A(G){const ne=We.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(G):G()}function re(G,ne){let k;const[J,le,T]=M_(G,ne);k=xo(J.reverse(),"beforeRouteLeave",G,ne);for(const z of J)z.leaveGuards.forEach(K=>{k.push(Oi(K,G,ne))});const C=S.bind(null,G,ne);return k.push(C),ae(k).then(()=>{k=[];for(const z of r.list())k.push(Oi(z,G,ne));return k.push(C),ae(k)}).then(()=>{k=xo(le,"beforeRouteUpdate",G,ne);for(const z of le)z.updateGuards.forEach(K=>{k.push(Oi(K,G,ne))});return k.push(C),ae(k)}).then(()=>{k=[];for(const z of T)if(z.beforeEnter)if(Dn(z.beforeEnter))for(const K of z.beforeEnter)k.push(Oi(K,G,ne));else k.push(Oi(z.beforeEnter,G,ne));return k.push(C),ae(k)}).then(()=>(G.matched.forEach(z=>z.enterCallbacks={}),k=xo(T,"beforeRouteEnter",G,ne,A),k.push(C),ae(k))).then(()=>{k=[];for(const z of a.list())k.push(Oi(z,G,ne));return k.push(C),ae(k)}).catch(z=>ai(z,At.NAVIGATION_CANCELLED)?z:Promise.reject(z))}function w(G,ne,k){o.list().forEach(J=>A(()=>J(G,ne,k)))}function B(G,ne,k,J,le){const T=E(G,ne);if(T)return T;const C=ne===Ri,z=Ds?history.state:{};k&&(J||C?s.replace(G.fullPath,ct({scroll:C&&z&&z.scroll},le)):s.push(G.fullPath,le)),l.value=G,xe(G,ne,k,C),de()}let O;function U(){O||(O=s.listen((G,ne,k)=>{if(!Ye.listening)return;const J=p(G),le=D(J,Ye.currentRoute.value);if(le){L(ct(le,{replace:!0,force:!0}),J).catch(Mr);return}c=J;const T=l.value;Ds&&h_(Nu(T.fullPath,k.delta),Za()),re(J,T).catch(C=>ai(C,At.NAVIGATION_ABORTED|At.NAVIGATION_CANCELLED)?C:ai(C,At.NAVIGATION_GUARD_REDIRECT)?(L(ct(x(C.to),{force:!0}),J).then(z=>{ai(z,At.NAVIGATION_ABORTED|At.NAVIGATION_DUPLICATED)&&!k.delta&&k.type===pl.pop&&s.go(-1,!1)}).catch(Mr),Promise.reject()):(k.delta&&s.go(-k.delta,!1),j(C,J,T))).then(C=>{C=C||B(J,T,!1),C&&(k.delta&&!ai(C,At.NAVIGATION_CANCELLED)?s.go(-k.delta,!1):k.type===pl.pop&&ai(C,At.NAVIGATION_ABORTED|At.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),w(J,T,C)}).catch(Mr)}))}let V=Qs(),N=Qs(),I;function j(G,ne,k){de(G);const J=N.list();return J.length?J.forEach(le=>le(G,ne,k)):console.error(G),Promise.reject(G)}function W(){return I&&l.value!==Ri?Promise.resolve():new Promise((G,ne)=>{V.add([G,ne])})}function de(G){return I||(I=!G,U(),V.list().forEach(([ne,k])=>G?k(G):ne()),V.reset()),G}function xe(G,ne,k,J){const{scrollBehavior:le}=n;if(!Ds||!le)return Promise.resolve();const T=!k&&d_(Nu(G.fullPath,0))||(J||!k)&&history.state&&history.state.scroll||null;return $a().then(()=>le(G,ne,T)).then(C=>C&&f_(C)).catch(C=>j(C,G,ne))}const me=G=>s.go(G);let Oe;const We=new Set,Ye={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:M,replace:P,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:N.add,isReady:W,install(G){G.component("RouterLink",z_),G.component("RouterView",X_),G.config.globalProperties.$router=Ye,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>at(l)}),Ds&&!Oe&&l.value===Ri&&(Oe=!0,M(s.location).catch(J=>{}));const ne={};for(const J in Ri)Object.defineProperty(ne,J,{get:()=>l.value[J],enumerable:!0});G.provide(Ja,Ye),G.provide(Sd,Rh(ne)),G.provide(gl,l);const k=G.unmount;We.add(G),G.unmount=function(){We.delete(G),We.size<1&&(c=Ri,O&&O(),O=null,l.value=Ri,Oe=!1,I=!1),k()}}};function ae(G){return G.reduce((ne,k)=>ne.then(()=>A(k)),Promise.resolve())}return Ye}function Pc(){return Yn(Ja)}const q_=["width","height","viewBox"],Y_=["x","y","height","fill"],K_=["cx","cy","rx","ry","fill"],j_=["cx","cy","rx","ry","fill"],Z_=["cx","cy","fill"],J_=["cx","cy","fill"],Q_=["cx","cy","rx","ry","fill"],e0=["d","fill"],t0=["cx","cy","rx","ry","fill"],n0=["cx","cy","fill"],i0=["cx","cy","rx","ry","fill"],s0=["d","fill"],r0=["cx","cy","rx","ry","fill"],a0=["x","y","height","fill"],o0=["cx","cy"],l0=["cx","cy"],c0=["cx","cy","fill"],u0=["cx","cy","fill"],f0=["cx","cy"],h0=["cx","cy"],d0=["cx","cy"],p0=["cx","cy"],m0=["d","stroke"],g0=["d","stroke"],_0=["d","fill"],v0=["cx","cy","fill"],x0=["cx","cy","fill"],M0=["d","stroke"],S0=["d","stroke"],y0=["cx","cy","rx","ry","fill"],E0=["cx","cy","r","fill"],b0=["d","fill"],T0=["cx","cy","rx","ry","fill"],A0=["cx","cy","r"],w0=["cx","cy","r"],Z=80,R0={__name:"PlayerFace",props:{faceSkin:{type:Number,default:2},faceHair:{type:String,default:"brown"},faceStyle:{type:String,default:"short"},beard:{type:String,default:"clean"},tier:{type:String,default:"standard"},size:{type:Number,default:80}},setup(n){const e=n,t={1:"#fde8d0",2:"#f5cba7",3:"#d4956a",4:"#b57a4e",5:"#7a4a28"},i={black:"#1a1a1a",brown:"#5c3d2e",blonde:"#c8a850",red:"#a83200",grey:"#888888",white:"#e8e8e8",bald:"transparent"},s=yt(()=>t[e.faceSkin]??t[2]),r=yt(()=>i[e.faceHair]??i.brown),a=yt(()=>e.faceSkin>=4?"#4a2c0a":"#3a5f8a"),o=yt(()=>i[e.faceHair]??"#444"),l=yt(()=>e.faceSkin>=4?"#6b3a1f":"#c4956a"),c=yt(()=>e.faceSkin>=4?"#8b4513":"#c47a7a"),u=yt(()=>{const f=[],h=e.faceSkin*7;for(let d=0;d<18;d++){const v=(d*37+h)%100/100*Math.PI*2,m=.08+d%5*.025;f.push({x:Z/2+Math.cos(v)*Z*m*2.2,y:Z*.665+Math.sin(v)*Z*m,r:.8+d%3*.4})}return f});return(f,h)=>(De(),Ie("svg",{width:n.size,height:n.size,viewBox:`0 0 ${Z} ${Z}`,xmlns:"http://www.w3.org/2000/svg",class:"player-face"},[X("rect",{x:Z/2-8,y:Z*.72,width:"16",height:Z*.15,fill:s.value},null,8,Y_),X("ellipse",{cx:Z/2,cy:Z*.45,rx:Z*.32,ry:Z*.35,fill:s.value},null,8,K_),n.faceStyle!=="bald"?(De(),Ie("ellipse",{key:0,cx:Z/2,cy:Z*.26,rx:Z*.33,ry:Z*.22,fill:r.value},null,8,j_)):Vt("",!0),X("ellipse",{cx:Z*.18,cy:Z*.45,rx:"6",ry:"8",fill:s.value},null,8,Z_),X("ellipse",{cx:Z*.82,cy:Z*.45,rx:"6",ry:"8",fill:s.value},null,8,J_),X("ellipse",{cx:Z/2,cy:Z*.5,rx:Z*.3,ry:Z*.28,fill:s.value},null,8,Q_),n.faceStyle==="short"?(De(),Ie("path",{key:1,d:`M ${Z*.2} ${Z*.38}
             Q ${Z/2} ${Z*.1} ${Z*.8} ${Z*.38}
             Q ${Z*.8} ${Z*.28} ${Z/2} ${Z*.14}
             Q ${Z*.2} ${Z*.28} ${Z*.2} ${Z*.38}Z`,fill:r.value},null,8,e0)):n.faceStyle==="curly"?(De(),Ie(Et,{key:2},[X("ellipse",{cx:Z/2,cy:Z*.18,rx:Z*.3,ry:Z*.14,fill:r.value},null,8,t0),(De(),Ie(Et,null,pn(8,d=>X("circle",{key:d,cx:Z*.2+Z*.6/7*(d-1),cy:Z*.24,r:"6",fill:r.value},null,8,n0)),64))],64)):n.faceStyle==="shaved"?(De(),Ie("ellipse",{key:3,cx:Z/2,cy:Z*.3,rx:Z*.31,ry:Z*.18,fill:r.value,opacity:"0.85"},null,8,i0)):n.faceStyle==="long"?(De(),Ie("path",{key:4,d:`M ${Z*.18} ${Z*.38}
             L ${Z*.14} ${Z*.72}
             Q ${Z/2} ${Z*.8} ${Z*.86} ${Z*.72}
             L ${Z*.82} ${Z*.38}
             Q ${Z/2} ${Z*.1} ${Z*.18} ${Z*.38}Z`,fill:r.value},null,8,s0)):n.faceStyle==="afro"?(De(),Ie("ellipse",{key:5,cx:Z/2,cy:Z*.26,rx:Z*.36,ry:Z*.3,fill:r.value},null,8,r0)):n.faceStyle==="mohawk"?(De(),Ie("rect",{key:6,x:Z/2-5,y:Z*.06,width:"10",height:Z*.3,fill:r.value,rx:"4"},null,8,a0)):Vt("",!0),X("ellipse",{cx:Z*.36,cy:Z*.48,rx:"8",ry:"6",fill:"white"},null,8,o0),X("ellipse",{cx:Z*.64,cy:Z*.48,rx:"8",ry:"6",fill:"white"},null,8,l0),X("circle",{cx:Z*.36,cy:Z*.49,r:"4",fill:a.value},null,8,c0),X("circle",{cx:Z*.64,cy:Z*.49,r:"4",fill:a.value},null,8,u0),X("circle",{cx:Z*.36,cy:Z*.49,r:"2",fill:"#111"},null,8,f0),X("circle",{cx:Z*.64,cy:Z*.49,r:"2",fill:"#111"},null,8,h0),X("circle",{cx:Z*.37,cy:Z*.475,r:"1",fill:"white"},null,8,d0),X("circle",{cx:Z*.65,cy:Z*.475,r:"1",fill:"white"},null,8,p0),X("path",{d:`M ${Z*.28} ${Z*.415} Q ${Z*.36} ${Z*.4} ${Z*.44} ${Z*.415}`,stroke:o.value,"stroke-width":"2.5",fill:"none","stroke-linecap":"round"},null,8,m0),X("path",{d:`M ${Z*.56} ${Z*.415} Q ${Z*.64} ${Z*.4} ${Z*.72} ${Z*.415}`,stroke:o.value,"stroke-width":"2.5",fill:"none","stroke-linecap":"round"},null,8,g0),X("path",{d:`M ${Z/2} ${Z*.5} L ${Z*.44} ${Z*.58} Q ${Z/2} ${Z*.61} ${Z*.56} ${Z*.58} Z`,fill:l.value,opacity:"0.5"},null,8,_0),X("circle",{cx:Z*.44,cy:Z*.58,r:"3",fill:l.value,opacity:"0.4"},null,8,v0),X("circle",{cx:Z*.56,cy:Z*.58,r:"3",fill:l.value,opacity:"0.4"},null,8,x0),X("path",{d:`M ${Z*.38} ${Z*.655} Q ${Z/2} ${Z*.685} ${Z*.62} ${Z*.655}`,stroke:c.value,"stroke-width":"2.2",fill:"none","stroke-linecap":"round"},null,8,M0),X("path",{d:`M ${Z*.38} ${Z*.655} Q ${Z/2} ${Z*.64} ${Z*.62} ${Z*.655}`,stroke:c.value,"stroke-width":"1.5",fill:"none","stroke-linecap":"round",opacity:"0.5"},null,8,S0),n.beard==="stubble"?(De(),Ie(Et,{key:7},[X("ellipse",{cx:Z/2,cy:Z*.66,rx:Z*.22,ry:Z*.1,fill:r.value,opacity:"0.30"},null,8,y0),(De(!0),Ie(Et,null,pn(u.value,(d,g)=>(De(),Ie("circle",{key:g,cx:d.x,cy:d.y,r:d.r,fill:r.value,opacity:"0.45"},null,8,E0))),128))],64)):n.beard==="beard"?(De(),Ie("path",{key:8,d:`M ${Z*.2} ${Z*.56}
             Q ${Z*.18} ${Z*.76} ${Z/2} ${Z*.82}
             Q ${Z*.82} ${Z*.76} ${Z*.8} ${Z*.56}
             Q ${Z*.65} ${Z*.62} ${Z/2} ${Z*.63}
             Q ${Z*.35} ${Z*.62} ${Z*.2} ${Z*.56}Z`,fill:r.value,opacity:"0.80"},null,8,b0)):n.beard==="goatee"?(De(),Ie("ellipse",{key:9,cx:Z/2,cy:Z*.7,rx:Z*.1,ry:Z*.1,fill:r.value,opacity:"0.80"},null,8,T0)):Vt("",!0),n.tier==="gold"?(De(),Ie("circle",{key:10,cx:Z/2,cy:Z/2,r:Z/2-2,fill:"none",stroke:"#FFD700","stroke-width":"3",opacity:"0.7"},null,8,A0)):n.tier==="silver"?(De(),Ie("circle",{key:11,cx:Z/2,cy:Z/2,r:Z/2-2,fill:"none",stroke:"#C0C0C0","stroke-width":"2",opacity:"0.6"},null,8,w0)):Vt("",!0)],8,q_))}},C0=Ti(R0,[["__scopeId","data-v-ee21ffb3"]]),P0={class:"card-ovr"},D0={class:"card-pos"},I0={class:"face-circle"},L0=["src","alt"],U0={class:"card-name"},N0={class:"card-club"},F0={class:"card-stats"},O0={class:"stat-val"},B0={class:"stat-lbl"},k0={key:0,class:"icon-badge"},V0={__name:"PlayerCard",props:{player:{type:Object,required:!0}},setup(n){const e=ht(!1);return(t,i)=>(De(),Ie("div",{class:Mn(["player-card",`card-${n.player.tier}`])},[X("div",P0,Ue(n.player.overall),1),X("div",D0,Ue(n.player.position),1),X("div",I0,[e.value&&n.player.face_url?(De(),Ie("img",{key:0,src:n.player.face_url,alt:n.player.name,class:"face-img",onError:i[0]||(i[0]=s=>e.value=!1)},null,40,L0)):(De(),Ac(C0,{key:1,"face-skin":n.player.face_skin??2,"face-hair":n.player.face_hair??"brown","face-style":n.player.face_style??"short",beard:n.player.face_beard??"clean",tier:n.player.tier,size:78},null,8,["face-skin","face-hair","face-style","beard","tier"]))]),X("div",U0,Ue(n.player.name),1),X("div",N0,Ue(n.player.club),1),X("div",F0,[(De(!0),Ie(Et,null,pn(n.player.stats,s=>(De(),Ie("div",{key:s.label,class:"stat-box"},[X("span",O0,Ue(s.value),1),X("span",B0,Ue(s.label),1)]))),128))]),n.player.is_icon?(De(),Ie("div",k0,"★ LEGEND ★")):Vt("",!0)],2))}},z0=Ti(V0,[["__scopeId","data-v-10f170a9"]]),G0={class:"splash"},H0={class:"stadium"},W0={key:0,class:"spotlight-wrap"},X0={key:1,class:"spotlight-wrap"},$0={__name:"SplashView",setup(n){const e=Pc(),t=ht(null),i=ht(null);async function s(){try{const l=await fetch("/api/spotlight");t.value=await l.json()}catch{}}function r(){const l=i.value;if(!l)return;const c=["#b71c1c","#c62828","#d32f2f","#e53935","#1565c0","#1976d2","#0d47a1","#283593","#880e4f","#333"];for(let u=0;u<5;u++){const f=document.createElement("div");f.className="stand-row";for(let h=0;h<130;h++){const d=document.createElement("div");d.className="stand-seat";const g=Math.random();d.style.background=g<.55?c[Math.floor(Math.random()*4)]:g<.8?c[4+Math.floor(Math.random()*4)]:c[9],d.style.animationDelay=`${(Math.random()*1.5).toFixed(2)}s`,f.appendChild(d)}l.appendChild(f)}}Nr(()=>{s(),r()});function a(){e.push("/play")}function o(){e.push("/watch")}return(l,c)=>(De(),Ie("div",G0,[X("div",H0,[c[2]||(c[2]=ul('<div class="sky" data-v-d6990ced></div><div class="fl fl-left" data-v-d6990ced><div class="fl-pole" data-v-d6990ced></div><div class="fl-head" data-v-d6990ced></div><div class="fl-beam" data-v-d6990ced></div></div><div class="fl fl-right" data-v-d6990ced><div class="fl-pole" data-v-d6990ced></div><div class="fl-head" data-v-d6990ced></div><div class="fl-beam fl-beam-r" data-v-d6990ced></div></div><div class="scoreboard" data-v-d6990ced><span class="sb-score" data-v-d6990ced>00 — 00</span><span class="sb-time" data-v-d6990ced>00:00</span></div>',4)),X("div",{class:"stands",ref_key:"standsRef",ref:i},null,512),c[3]||(c[3]=ul('<div class="pitch" data-v-d6990ced><svg class="pitch-svg" viewBox="0 0 800 160" preserveAspectRatio="none" data-v-d6990ced><rect x="30" y="8" width="740" height="144" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2" data-v-d6990ced></rect><line x1="400" y1="8" x2="400" y2="152" stroke="rgba(255,255,255,.5)" stroke-width="2" data-v-d6990ced></line><circle cx="400" cy="80" r="40" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2" data-v-d6990ced></circle><circle cx="400" cy="80" r="3" fill="rgba(255,255,255,.5)" data-v-d6990ced></circle><rect x="30" y="42" width="90" height="76" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-d6990ced></rect><rect x="30" y="58" width="44" height="44" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-d6990ced></rect><rect x="680" y="42" width="90" height="76" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-d6990ced></rect><rect x="726" y="58" width="44" height="44" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1.5" data-v-d6990ced></rect><rect x="10" y="62" width="20" height="36" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.6)" stroke-width="1.5" data-v-d6990ced></rect><rect x="770" y="62" width="20" height="36" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.6)" stroke-width="1.5" data-v-d6990ced></rect></svg></div>',1)),t.value?(De(),Ie("div",W0,[c[0]||(c[0]=X("div",{class:"spotlight-label"},"★ Player Spotlight ★",-1)),Ct(z0,{player:t.value},null,8,["player"])])):(De(),Ie("div",X0,[...c[1]||(c[1]=[X("div",{class:"spotlight-label"},"★ Player Spotlight ★",-1),X("div",{class:"card-loading"},"Loading…",-1)])]))]),X("div",{class:"menu"},[c[6]||(c[6]=X("div",{class:"title"},[X("h1",null,[Fs("The Beautiful Game "),X("span",{class:"year"},"2026")]),X("p",{class:"subtitle"},"Choose your game mode")],-1)),X("nav",{class:"menu-buttons"},[X("button",{class:"btn btn-primary",onClick:a},"▶  Play the Game"),X("button",{class:"btn btn-secondary",onClick:o},"◉  Watch the Play"),c[4]||(c[4]=X("button",{class:"btn btn-disabled",disabled:""},[Fs(" Career Mode "),X("span",{class:"badge"},"Coming Soon")],-1)),c[5]||(c[5]=X("button",{class:"btn btn-disabled",disabled:""},[Fs(" The Journey "),X("span",{class:"badge"},"Coming Soon")],-1))])])]))}},q0=Ti($0,[["__scopeId","data-v-d6990ced"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dc="183",Y0=0,Yu=1,K0=2,Ma=1,Td=2,cr=3,ei=0,ln=1,Wn=2,_i=0,Os=1,Ku=2,ju=3,Zu=4,j0=5,ns=100,Z0=101,J0=102,Q0=103,ev=104,tv=200,nv=201,iv=202,sv=203,_l=204,vl=205,rv=206,av=207,ov=208,lv=209,cv=210,uv=211,fv=212,hv=213,dv=214,xl=0,Ml=1,Sl=2,Hs=3,yl=4,El=5,bl=6,Tl=7,Ic=0,pv=1,mv=2,Kn=0,Ad=1,wd=2,Rd=3,Cd=4,Pd=5,Dd=6,Id=7,Ld=300,cs=301,Ws=302,Mo=303,So=304,Qa=306,Al=1e3,gi=1001,wl=1002,zt=1003,gv=1004,Wr=1005,Kt=1006,yo=1007,rs=1008,dn=1009,Ud=1010,Nd=1011,Rr=1012,Lc=1013,ti=1014,Xn=1015,yi=1016,Uc=1017,Nc=1018,Cr=1020,Fd=35902,Od=35899,Bd=1021,kd=1022,Rn=1023,Ei=1026,as=1027,Vd=1028,Fc=1029,Xs=1030,Oc=1031,Bc=1033,Sa=33776,ya=33777,Ea=33778,ba=33779,Rl=35840,Cl=35841,Pl=35842,Dl=35843,Il=36196,Ll=37492,Ul=37496,Nl=37488,Fl=37489,Ol=37490,Bl=37491,kl=37808,Vl=37809,zl=37810,Gl=37811,Hl=37812,Wl=37813,Xl=37814,$l=37815,ql=37816,Yl=37817,Kl=37818,jl=37819,Zl=37820,Jl=37821,Ql=36492,ec=36494,tc=36495,nc=36283,ic=36284,sc=36285,rc=36286,_v=3200,kc=0,vv=1,zi="",xn="srgb",$s="srgb-linear",Ua="linear",pt="srgb",gs=7680,Ju=519,xv=512,Mv=513,Sv=514,Vc=515,yv=516,Ev=517,zc=518,bv=519,Qu=35044,ef="300 es",$n=2e3,Pr=2001;function Tv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Av(){const n=Na("canvas");return n.style.display="block",n}const tf={};function nf(...n){const e="THREE."+n.shift();console.log(e,...n)}function zd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=zd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=zd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Fa(...n){const e=n.join(" ");e in tf||(tf[e]=!0,Xe(...n))}function wv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Rv={[xl]:Ml,[Sl]:bl,[yl]:Tl,[Hs]:El,[Ml]:xl,[bl]:Sl,[Tl]:yl,[El]:Hs};class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eo=Math.PI/180,ac=180/Math.PI;function Or(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function Cv(n,e){return(n%e+e)%e}function bo(n,e,t){return(1-t)*n+t*e}function er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ks{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*v;m<0&&(h=-h,d=-d,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const x=Math.acos(m),E=Math.sin(x);p=Math.sin(p*x)/E,o=Math.sin(o*x)/E,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+v*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+v*o;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new Y,sf=new Ks;class Je{constructor(e,t,i,s,r,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],x=s[1],E=s[4],M=s[7],P=s[2],D=s[5],L=s[8];return r[0]=a*v+o*x+l*P,r[3]=a*m+o*E+l*D,r[6]=a*p+o*M+l*L,r[1]=c*v+u*x+f*P,r[4]=c*m+u*E+f*D,r[7]=c*p+u*M+f*L,r[2]=h*v+d*x+g*P,r[5]=h*m+d*E+g*D,r[8]=h*p+d*M+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new Je,rf=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),af=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pv(){const n={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?Ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$s]:{primaries:e,whitePoint:i,transfer:Ua,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),n}const st=Pv();function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _s;class Dv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=Na("canvas")),_s.width=e.width,_s.height=e.height;const s=_s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vi(t[i]/255)*255):t[i]=vi(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Iv=0;class Gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=Or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wo(s[a].image)):r.push(wo(s[a]))}else r=wo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let Lv=0;const Ro=new Y;class nn extends Ys{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=gi,s=gi,r=Kt,a=rs,o=Rn,l=dn,c=nn.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Or(),this.name="",this.source=new Gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ro).x}get height(){return this.source.getSize(Ro).y}get depth(){return this.source.getSize(Ro).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Al:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Al:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Ld;nn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,M=(d+1)/2,P=(p+1)/2,D=(u+h)/4,L=(f+v)/4,S=(g+m)/4;return E>M&&E>P?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=D/i,r=L/i):M>P?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=D/s,r=S/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=L/r,s=S/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-v)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uv extends Ys{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new nn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Uv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gd extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nv extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bt{constructor(e,t,i,s,r,a,o,l,c,u,f,h,d,g,v,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,h,d,g,v,m)}set(e,t,i,s,r,a,o,l,c,u,f,h,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fv,e,Ov)}lookAt(e,t,i){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Ci.crossVectors(i,un),Ci.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ci.crossVectors(i,un)),Ci.normalize(),Xr.crossVectors(un,Ci),s[0]=Ci.x,s[4]=Xr.x,s[8]=un.x,s[1]=Ci.y,s[5]=Xr.y,s[9]=un.y,s[2]=Ci.z,s[6]=Xr.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],x=i[3],E=i[7],M=i[11],P=i[15],D=s[0],L=s[4],S=s[8],A=s[12],re=s[1],w=s[5],B=s[9],O=s[13],U=s[2],V=s[6],N=s[10],I=s[14],j=s[3],W=s[7],de=s[11],xe=s[15];return r[0]=a*D+o*re+l*U+c*j,r[4]=a*L+o*w+l*V+c*W,r[8]=a*S+o*B+l*N+c*de,r[12]=a*A+o*O+l*I+c*xe,r[1]=u*D+f*re+h*U+d*j,r[5]=u*L+f*w+h*V+d*W,r[9]=u*S+f*B+h*N+d*de,r[13]=u*A+f*O+h*I+d*xe,r[2]=g*D+v*re+m*U+p*j,r[6]=g*L+v*w+m*V+p*W,r[10]=g*S+v*B+m*N+p*de,r[14]=g*A+v*O+m*I+p*xe,r[3]=x*D+E*re+M*U+P*j,r[7]=x*L+E*w+M*V+P*W,r[11]=x*S+E*B+M*N+P*de,r[15]=x*A+E*O+M*I+P*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15],x=l*d-c*h,E=o*d-c*f,M=o*h-l*f,P=a*d-c*u,D=a*h-l*u,L=a*f-o*u;return t*(v*x-m*E+p*M)-i*(g*x-m*P+p*D)+s*(g*E-v*P+p*L)-r*(g*M-v*D+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=t*o-i*a,E=t*l-s*a,M=t*c-r*a,P=i*l-s*o,D=i*c-r*o,L=s*c-r*l,S=u*v-f*g,A=u*m-h*g,re=u*p-d*g,w=f*m-h*v,B=f*p-d*v,O=h*p-d*m,U=x*O-E*B+M*w+P*re-D*A+L*S;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/U;return e[0]=(o*O-l*B+c*w)*V,e[1]=(s*B-i*O-r*w)*V,e[2]=(v*L-m*D+p*P)*V,e[3]=(h*D-f*L-d*P)*V,e[4]=(l*re-a*O-c*A)*V,e[5]=(t*O-s*re+r*A)*V,e[6]=(m*M-g*L-p*E)*V,e[7]=(u*L-h*M+d*E)*V,e[8]=(a*B-o*re+c*S)*V,e[9]=(i*re-t*B-r*S)*V,e[10]=(g*D-v*M+p*x)*V,e[11]=(f*M-u*D-d*x)*V,e[12]=(o*A-a*w-l*S)*V,e[13]=(t*w-i*A+s*S)*V,e[14]=(v*E-g*P-m*x)*V,e[15]=(u*P-f*E+h*x)*V,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,v=a*u,m=a*f,p=o*f,x=l*c,E=l*u,M=l*f,P=i.x,D=i.y,L=i.z;return s[0]=(1-(v+p))*P,s[1]=(d+M)*P,s[2]=(g-E)*P,s[3]=0,s[4]=(d-M)*D,s[5]=(1-(h+p))*D,s[6]=(m+x)*D,s[7]=0,s[8]=(g+E)*L,s[9]=(m-x)*L,s[10]=(1-(h+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let a=vs.set(s[0],s[1],s[2]).length();const o=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);const c=1/a,u=1/o,f=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,t.setFromRotationMatrix(En),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=$n,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===$n)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Pr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=$n,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===$n)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Pr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vs=new Y,En=new bt,Fv=new Y(0,0,0),Ov=new Y(1,1,1),Ci=new Y,Xr=new Y,un=new Y,of=new bt,lf=new Ks;class In{constructor(e=0,t=0,i=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lf.setFromEuler(this),this.setFromQuaternion(lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bv=0;const cf=new Y,xs=new Ks,oi=new bt,$r=new Y,tr=new Y,kv=new Y,Vv=new Ks,uf=new Y(1,0,0),ff=new Y(0,1,0),hf=new Y(0,0,1),df={type:"added"},zv={type:"removed"},Ms={type:"childadded",child:null},Co={type:"childremoved",child:null};class Gt extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new Y,t=new In,i=new Ks,s=new Y(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Je}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(uf,e)}rotateY(e){return this.rotateOnAxis(ff,e)}rotateZ(e){return this.rotateOnAxis(hf,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uf,e)}translateY(e){return this.translateOnAxis(ff,e)}translateZ(e){return this.translateOnAxis(hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$r.copy(e):$r.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(tr,$r,this.up):oi.lookAt($r,tr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(oi),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(df),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zv),Co.child=e,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(df),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Vv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new Y(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ur extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gv={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ur;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Do(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Cv(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Do(a,r,e+1/3),this.g=Do(a,r,e),this.b=Do(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=xn){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const i=Wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return st.workingToColorSpace($t.copy(this),e),Math.round(nt($t.r*255,0,255))*65536+Math.round(nt($t.g*255,0,255))*256+Math.round(nt($t.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace($t.copy(this),t);const i=$t.r,s=$t.g,r=$t.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=xn){st.workingToColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,s=$t.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(qr);const i=bo(Pi.h,qr.h,t),s=bo(Pi.s,qr.s,t),r=bo(Pi.l,qr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new tt;tt.NAMES=Wd;class Hc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=i}clone(){return new Hc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hv extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bn=new Y,li=new Y,Io=new Y,ci=new Y,Ss=new Y,ys=new Y,pf=new Y,Lo=new Y,Uo=new Y,No=new Y,Fo=new wt,Oo=new wt,Bo=new wt;class An{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bn.subVectors(s,t),li.subVectors(i,t),Io.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(li),l=bn.dot(Io),c=li.dot(li),u=li.dot(Io),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,i),Bo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fo,r.x),a.addScaledVector(Oo,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(e,t,i,s){return bn.subVectors(i,t),li.subVectors(e,t),bn.cross(li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),bn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return An.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ss.subVectors(s,i),ys.subVectors(r,i),Lo.subVectors(e,i);const l=Ss.dot(Lo),c=ys.dot(Lo);if(l<=0&&c<=0)return t.copy(i);Uo.subVectors(e,s);const u=Ss.dot(Uo),f=ys.dot(Uo);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ss,a);No.subVectors(e,r);const d=Ss.dot(No),g=ys.dot(No);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ys,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return pf.subVectors(r,s),o=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(pf,o);const p=1/(m+v+h);return a=v*p,o=h*p,t.copy(i).addScaledVector(Ss,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Br{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Kr.subVectors(this.max,nr),Es.subVectors(e.a,nr),bs.subVectors(e.b,nr),Ts.subVectors(e.c,nr),Di.subVectors(bs,Es),Ii.subVectors(Ts,bs),Yi.subVectors(Es,Ts);let t=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-Yi.z,Yi.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,Yi.z,0,-Yi.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-Yi.y,Yi.x,0];return!ko(t,Es,bs,Ts,Kr)||(t=[1,0,0,0,1,0,0,0,1],!ko(t,Es,bs,Ts,Kr))?!1:(jr.crossVectors(Di,Ii),t=[jr.x,jr.y,jr.z],ko(t,Es,bs,Ts,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ui=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Tn=new Y,Yr=new Br,Es=new Y,bs=new Y,Ts=new Y,Di=new Y,Ii=new Y,Yi=new Y,nr=new Y,Kr=new Y,jr=new Y,Ki=new Y;function ko(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ki.fromArray(n,r);const o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Pt=new Y,Zr=new it;let Wv=0;class Zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qu,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qu&&(e.usage=this.usage),e}}class Xd extends Zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $d extends Zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Lt extends Zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Xv=new Br,ir=new Y,Vo=new Y;class eo{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Vo)),this.expandByPoint(ir.copy(e.center).sub(Vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $v=0;const gn=new bt,zo=new Gt,As=new Y,fn=new Br,sr=new Br,Ot=new Y;class sn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tv(e)?$d:Xd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(fn.min,sr.min),fn.expandByPoint(Ot),Ot.addVectors(fn.max,sr.max),fn.expandByPoint(Ot)):(fn.expandByPoint(sr.min),fn.expandByPoint(sr.max))}fn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ot.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),Ot.add(As)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new Y,l[S]=new Y;const c=new Y,u=new Y,f=new Y,h=new it,d=new it,g=new it,v=new Y,m=new Y;function p(S,A,re){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,re),h.fromBufferAttribute(r,S),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,re),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(w),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(w),o[S].add(v),o[A].add(v),o[re].add(v),l[S].add(m),l[A].add(m),l[re].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,A=x.length;S<A;++S){const re=x[S],w=re.start,B=re.count;for(let O=w,U=w+B;O<U;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new Y,M=new Y,P=new Y,D=new Y;function L(S){P.fromBufferAttribute(s,S),D.copy(P);const A=o[S];E.copy(A),E.sub(P.multiplyScalar(P.dot(A))).normalize(),M.crossVectors(D,A);const w=M.dot(l[S])<0?-1:1;a.setXYZW(S,E.x,E.y,E.z,w)}for(let S=0,A=x.length;S<A;++S){const re=x[S],w=re.start,B=re.count;for(let O=w,U=w+B;O<U;O+=3)L(e.getX(O+0)),L(e.getX(O+1)),L(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new Y,r=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Zn(h,u,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let qv=0;class hs extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=Os,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=vl,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_l&&(i.blendSrc=this.blendSrc),this.blendDst!==vl&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fi=new Y,Go=new Y,Jr=new Y,Li=new Y,Ho=new Y,Qr=new Y,Wo=new Y;class qd{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Go.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Go);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),o=Li.dot(this.direction),l=-Li.dot(Jr),c=Li.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Go).addScaledVector(Jr,h),d}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,s,r){Ho.subVectors(t,e),Qr.subVectors(i,e),Wo.crossVectors(Ho,Qr);let a=this.direction.dot(Wo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(Qr.crossVectors(Li,Qr));if(l<0)return null;const c=o*this.direction.dot(Ho.cross(Li));if(c<0||l+c>a)return null;const u=-o*Li.dot(Wo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bi extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mf=new bt,ji=new qd,ea=new eo,gf=new Y,ta=new Y,na=new Y,ia=new Y,Xo=new Y,sa=new Y,_f=new Y,ra=new Y;class lt extends Gt{constructor(e=new sn,t=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Xo.fromBufferAttribute(f,e),a?sa.addScaledVector(Xo,u):sa.addScaledVector(Xo.sub(t),u))}t.add(sa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(ea.containsPoint(ji.origin)===!1&&(ji.intersectSphere(ea,gf)===null||ji.origin.distanceToSquared(gf)>(e.far-e.near)**2))&&(mf.copy(r).invert(),ji.copy(e.ray).applyMatrix4(mf),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,P=E;M<P;M+=3){const D=o.getX(M),L=o.getX(M+1),S=o.getX(M+2);s=aa(this,p,e,i,c,u,f,D,L,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=aa(this,a,e,i,c,u,f,x,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,P=E;M<P;M+=3){const D=M,L=M+1,S=M+2;s=aa(this,p,e,i,c,u,f,D,L,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=m,E=m+1,M=m+2;s=aa(this,a,e,i,c,u,f,x,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Yv(n,e,t,i,s,r,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ei,o),l===null)return null;ra.copy(o),ra.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:n}}function aa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ta),n.getVertexPosition(l,na),n.getVertexPosition(c,ia);const u=Yv(n,e,t,i,ta,na,ia,_f);if(u){const f=new Y;An.getBarycoord(_f,ta,na,ia,f),s&&(u.uv=An.getInterpolatedAttribute(s,o,l,c,f,new it)),r&&(u.uv1=An.getInterpolatedAttribute(r,o,l,c,f,new it)),a&&(u.normal=An.getInterpolatedAttribute(a,o,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Y,materialIndex:0};An.getNormal(ta,na,ia,h.normal),u.face=h,u.barycoord=f}return u}class Kv extends nn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=zt,u=zt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $o=new Y,jv=new Y,Zv=new Je;class ts{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=$o.subVectors(i,t).cross(jv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($o),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zv.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new eo,Jv=new it(.5,.5),oa=new Y;class Wc{constructor(e=new ts,t=new ts,i=new ts,s=new ts,r=new ts,a=new ts){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],x=r[12],E=r[13],M=r[14],P=r[15];if(s[0].setComponents(c-a,d-u,p-g,P-x).normalize(),s[1].setComponents(c+a,d+u,p+g,P+x).normalize(),s[2].setComponents(c+o,d+f,p+v,P+E).normalize(),s[3].setComponents(c-o,d-f,p-v,P-E).normalize(),i)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,d-h,p-m,P-M).normalize();else if(s[4].setComponents(c-l,d-h,p-m,P-M).normalize(),t===$n)s[5].setComponents(c+l,d+h,p+m,P+M).normalize();else if(t===Pr)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);const t=Jv.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oc extends hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oa=new Y,Ba=new Y,vf=new bt,rr=new qd,la=new eo,qo=new Y,xf=new Y;class Mf extends Gt{constructor(e=new sn,t=new oc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Oa.fromBufferAttribute(t,s-1),Ba.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Oa.distanceTo(Ba);e.setAttribute("lineDistance",new Lt(i,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;vf.copy(s).invert(),rr.copy(e.ray).applyMatrix4(vf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=u.getX(v),x=u.getX(v+1),E=ca(this,e,rr,l,p,x,v);E&&t.push(E)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=ca(this,e,rr,l,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=c){const p=ca(this,e,rr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=ca(this,e,rr,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ca(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Oa.fromBufferAttribute(o,s),Ba.fromBufferAttribute(o,r),t.distanceSqToSegment(Oa,Ba,qo,xf)>i)return;qo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(qo);if(!(c<e.near||c>e.far))return{distance:c,point:xf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Yd extends nn{constructor(e=[],t=cs,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dr extends nn{constructor(e,t,i=ti,s,r,a,o=zt,l=zt,c,u=Ei,f=1){if(u!==Ei&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qv extends Dr{constructor(e,t=ti,i=cs,s,r,a=zt,o=zt,l,c=Ei){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kd extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class us extends sn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function g(v,m,p,x,E,M,P,D,L,S,A){const re=M/L,w=P/S,B=M/2,O=P/2,U=D/2,V=L+1,N=S+1;let I=0,j=0;const W=new Y;for(let de=0;de<N;de++){const xe=de*w-O;for(let me=0;me<V;me++){const Oe=me*re-B;W[v]=Oe*x,W[m]=xe*E,W[p]=U,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[p]=D>0?1:-1,u.push(W.x,W.y,W.z),f.push(me/L),f.push(1-de/S),I+=1}}for(let de=0;de<S;de++)for(let xe=0;xe<L;xe++){const me=h+xe+V*de,Oe=h+xe+V*(de+1),We=h+(xe+1)+V*(de+1),Ye=h+(xe+1)+V*de;l.push(me,Oe,Ye),l.push(Oe,We,Ye),j+=6}o.addGroup(d,j,A),d+=j,h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ka extends sn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new Y,u=new it;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(o,3)),this.setAttribute("uv",new Lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ki extends sn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const v=[],m=i/2;let p=0;x(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2));function x(){const M=new Y,P=new Y;let D=0;const L=(t-e)/i;for(let S=0;S<=r;S++){const A=[],re=S/r,w=re*(t-e)+e;for(let B=0;B<=s;B++){const O=B/s,U=O*l+o,V=Math.sin(U),N=Math.cos(U);P.x=w*V,P.y=-re*i+m,P.z=w*N,f.push(P.x,P.y,P.z),M.set(V,L,N).normalize(),h.push(M.x,M.y,M.z),d.push(O,1-re),A.push(g++)}v.push(A)}for(let S=0;S<s;S++)for(let A=0;A<r;A++){const re=v[A][S],w=v[A+1][S],B=v[A+1][S+1],O=v[A][S+1];(e>0||A!==0)&&(u.push(re,w,O),D+=3),(t>0||A!==r-1)&&(u.push(w,B,O),D+=3)}c.addGroup(p,D,0),p+=D}function E(M){const P=g,D=new it,L=new Y;let S=0;const A=M===!0?e:t,re=M===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*re,0),h.push(0,re,0),d.push(.5,.5),g++;const w=g;for(let B=0;B<=s;B++){const U=B/s*l+o,V=Math.cos(U),N=Math.sin(U);L.x=A*N,L.y=m*re,L.z=A*V,f.push(L.x,L.y,L.z),h.push(0,re,0),D.x=V*.5+.5,D.y=N*.5*re+.5,d.push(D.x,D.y),g++}for(let B=0;B<s;B++){const O=P+B,U=w+B;M===!0?u.push(U,U+1,O):u.push(U+1,U,O),S+=3}c.addGroup(p,S,M===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vn extends sn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const x=p*h-a;for(let E=0;E<c;E++){const M=E*f-r;g.push(M,-x,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const E=x+c*p,M=x+c*(p+1),P=x+1+c*(p+1),D=x+1+c*p;d.push(E,M,D),d.push(M,P,D)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sr extends sn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new Y,h=new Y,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const x=[],E=p/i;let M=0;p===0&&a===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const D=P/t;f.x=-e*Math.cos(s+D*r)*Math.sin(a+E*o),f.y=e*Math.cos(a+E*o),f.z=e*Math.sin(s+D*r)*Math.sin(a+E*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(D+M,1-E),x.push(c++)}u.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const E=u[p][x+1],M=u[p][x],P=u[p+1][x],D=u[p+1][x+1];(p!==0||a>0)&&d.push(E,M,D),(p!==i-1||l<Math.PI)&&d.push(M,P,D)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=qs(n[t]);for(const s in i)e[s]=i[s]}return e}function ex(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const tx={clone:qs,merge:Jt};var nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nx,this.fragmentShader=ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sx extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sf extends hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ui extends hs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Ic,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rx extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ax extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xc extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Yo=new bt,yf=new Y,Ef=new Y;class Zd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(yf),Ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ef),t.updateMatrixWorld(),Yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Pr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ua=new Y,fa=new Ks,Nn=new Y;class Jd extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ua,fa,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,fa,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ua,fa,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,fa,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new Y,bf=new it,Tf=new it;class hn extends Jd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ac*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ac*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,bf,Tf),t.subVectors(Tf,bf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ox extends Zd{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}}class lx extends Xc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ox}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class $c extends Jd{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cx extends Zd{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ux extends Xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new cx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class fx extends Xc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ws=-90,Rs=1;class hx extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(ws,Rs,e,t);s.layers=this.layers,this.add(s);const r=new hn(ws,Rs,e,t);r.layers=this.layers,this.add(r);const a=new hn(ws,Rs,e,t);a.layers=this.layers,this.add(a);const o=new hn(ws,Rs,e,t);o.layers=this.layers,this.add(o);const l=new hn(ws,Rs,e,t);l.layers=this.layers,this.add(l);const c=new hn(ws,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class dx extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Af(n,e,t,i){const s=px(i);switch(t){case Bd:return n*e;case Vd:return n*e/s.components*s.byteLength;case Fc:return n*e/s.components*s.byteLength;case Xs:return n*e*2/s.components*s.byteLength;case Oc:return n*e*2/s.components*s.byteLength;case kd:return n*e*3/s.components*s.byteLength;case Rn:return n*e*4/s.components*s.byteLength;case Bc:return n*e*4/s.components*s.byteLength;case Sa:case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ea:case ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Dl:return Math.max(n,16)*Math.max(e,8)/4;case Rl:case Pl:return Math.max(n,8)*Math.max(e,8)/2;case Il:case Ll:case Nl:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Ol:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ql:case ec:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nc:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sc:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function px(n){switch(n){case dn:case Ud:return{byteLength:1,components:1};case Rr:case Nd:case yi:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case ti:case Lc:case Xn:return{byteLength:4,components:1};case Fd:case Od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function mx(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_x=`#ifdef USE_ALPHAHASH
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
#endif`,vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,Ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cx=`#ifdef USE_IRIDESCENCE
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
#endif`,Px=`#ifdef USE_BUMPMAP
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kx=`#define PI 3.141592653589793
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
} // validated`,Vx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$x="gl_FragColor = linearToOutputTexel( gl_FragColor );",qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yx=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iM=`#ifdef USE_GRADIENTMAP
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
}`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oM=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,lM=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,cM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,pM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mM=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,gM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TM=`#if defined( USE_POINTS_UV )
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
#endif`,AM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,IM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BM=`#ifdef USE_NORMALMAP
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
#endif`,kM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,XM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,QM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nS=`#ifdef USE_SKINNING
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
#endif`,iS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sS=`#ifdef USE_SKINNING
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
#endif`,rS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lS=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cS=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gS=`uniform sampler2D t2D;
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`#include <common>
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
}`,yS=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ES=`#define DISTANCE
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
}`,bS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`uniform float scale;
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
}`,RS=`uniform vec3 diffuse;
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
}`,CS=`#include <common>
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
}`,PS=`uniform vec3 diffuse;
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
}`,DS=`#define LAMBERT
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
}`,IS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,LS=`#define MATCAP
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
}`,US=`#define MATCAP
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
}`,NS=`#define NORMAL
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
}`,FS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OS=`#define PHONG
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
}`,BS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,kS=`#define STANDARD
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
}`,VS=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,zS=`#define TOON
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
}`,GS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,HS=`uniform float size;
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
}`,WS=`uniform vec3 diffuse;
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
}`,XS=`#include <common>
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
}`,$S=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,qS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,YS=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:gx,alphahash_pars_fragment:_x,alphamap_fragment:vx,alphamap_pars_fragment:xx,alphatest_fragment:Mx,alphatest_pars_fragment:Sx,aomap_fragment:yx,aomap_pars_fragment:Ex,batching_pars_vertex:bx,batching_vertex:Tx,begin_vertex:Ax,beginnormal_vertex:wx,bsdfs:Rx,iridescence_fragment:Cx,bumpmap_pars_fragment:Px,clipping_planes_fragment:Dx,clipping_planes_pars_fragment:Ix,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Ux,color_fragment:Nx,color_pars_fragment:Fx,color_pars_vertex:Ox,color_vertex:Bx,common:kx,cube_uv_reflection_fragment:Vx,defaultnormal_vertex:zx,displacementmap_pars_vertex:Gx,displacementmap_vertex:Hx,emissivemap_fragment:Wx,emissivemap_pars_fragment:Xx,colorspace_fragment:$x,colorspace_pars_fragment:qx,envmap_fragment:Yx,envmap_common_pars_fragment:Kx,envmap_pars_fragment:jx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:lM,envmap_vertex:Jx,fog_vertex:Qx,fog_pars_vertex:eM,fog_fragment:tM,fog_pars_fragment:nM,gradientmap_pars_fragment:iM,lightmap_pars_fragment:sM,lights_lambert_fragment:rM,lights_lambert_pars_fragment:aM,lights_pars_begin:oM,lights_toon_fragment:cM,lights_toon_pars_fragment:uM,lights_phong_fragment:fM,lights_phong_pars_fragment:hM,lights_physical_fragment:dM,lights_physical_pars_fragment:pM,lights_fragment_begin:mM,lights_fragment_maps:gM,lights_fragment_end:_M,logdepthbuf_fragment:vM,logdepthbuf_pars_fragment:xM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:SM,map_fragment:yM,map_pars_fragment:EM,map_particle_fragment:bM,map_particle_pars_fragment:TM,metalnessmap_fragment:AM,metalnessmap_pars_fragment:wM,morphinstance_vertex:RM,morphcolor_vertex:CM,morphnormal_vertex:PM,morphtarget_pars_vertex:DM,morphtarget_vertex:IM,normal_fragment_begin:LM,normal_fragment_maps:UM,normal_pars_fragment:NM,normal_pars_vertex:FM,normal_vertex:OM,normalmap_pars_fragment:BM,clearcoat_normal_fragment_begin:kM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:zM,iridescence_pars_fragment:GM,opaque_fragment:HM,packing:WM,premultiplied_alpha_fragment:XM,project_vertex:$M,dithering_fragment:qM,dithering_pars_fragment:YM,roughnessmap_fragment:KM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:ZM,shadowmap_pars_vertex:JM,shadowmap_vertex:QM,shadowmask_pars_fragment:eS,skinbase_vertex:tS,skinning_pars_vertex:nS,skinning_vertex:iS,skinnormal_vertex:sS,specularmap_fragment:rS,specularmap_pars_fragment:aS,tonemapping_fragment:oS,tonemapping_pars_fragment:lS,transmission_fragment:cS,transmission_pars_fragment:uS,uv_pars_fragment:fS,uv_pars_vertex:hS,uv_vertex:dS,worldpos_vertex:pS,background_vert:mS,background_frag:gS,backgroundCube_vert:_S,backgroundCube_frag:vS,cube_vert:xS,cube_frag:MS,depth_vert:SS,depth_frag:yS,distance_vert:ES,distance_frag:bS,equirect_vert:TS,equirect_frag:AS,linedashed_vert:wS,linedashed_frag:RS,meshbasic_vert:CS,meshbasic_frag:PS,meshlambert_vert:DS,meshlambert_frag:IS,meshmatcap_vert:LS,meshmatcap_frag:US,meshnormal_vert:NS,meshnormal_frag:FS,meshphong_vert:OS,meshphong_frag:BS,meshphysical_vert:kS,meshphysical_frag:VS,meshtoon_vert:zS,meshtoon_frag:GS,points_vert:HS,points_frag:WS,shadow_vert:XS,shadow_frag:$S,sprite_vert:qS,sprite_frag:YS},Ae={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Gn={basic:{uniforms:Jt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Jt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Jt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Jt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Jt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Jt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Jt([Ae.points,Ae.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Jt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Jt([Ae.common,Ae.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Jt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Jt([Ae.sprite,Ae.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Jt([Ae.common,Ae.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Jt([Ae.lights,Ae.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Gn.physical={uniforms:Jt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const ha={r:0,b:0,g:0},Ji=new In,KS=new bt;function jS(n,e,t,i,s,r){const a=new tt(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const M=x.backgroundBlurriness>0;E=e.get(E,M)}return E}function g(x){let E=!1;const M=d(x);M===null?m(a,o):M&&M.isColor&&(m(M,1),E=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(x,E){const M=d(E);M&&(M.isCubeTexture||M.mapping===Qa)?(c===void 0&&(c=new lt(new us(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:qs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ji.copy(E.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(KS.makeRotationFromEuler(Ji)),c.material.toneMapped=st.getTransfer(M.colorSpace)!==pt,(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new lt(new vn(2,2),new ni({name:"BackgroundMaterial",uniforms:qs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=st.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,E){x.getRGB(ha,jd(n)),t.buffers.color.setClear(ha.r,ha.g,ha.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:v,dispose:p}}function ZS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(w,B,O,U,V){let N=!1;const I=f(w,U,O,B);r!==I&&(r=I,c(r.object)),N=d(w,U,O,V),N&&g(w,U,O,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,M(w,B,O,U),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function f(w,B,O,U){const V=U.wireframe===!0;let N=i[B.id];N===void 0&&(N={},i[B.id]=N);const I=w.isInstancedMesh===!0?w.id:0;let j=N[I];j===void 0&&(j={},N[I]=j);let W=j[O.id];W===void 0&&(W={},j[O.id]=W);let de=W[V];return de===void 0&&(de=h(l()),W[V]=de),de}function h(w){const B=[],O=[],U=[];for(let V=0;V<t;V++)B[V]=0,O[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:U,object:w,attributes:{},index:null}}function d(w,B,O,U){const V=r.attributes,N=B.attributes;let I=0;const j=O.getAttributes();for(const W in j)if(j[W].location>=0){const xe=V[W];let me=N[W];if(me===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(me=w.instanceColor)),xe===void 0||xe.attribute!==me||me&&xe.data!==me.data)return!0;I++}return r.attributesNum!==I||r.index!==U}function g(w,B,O,U){const V={},N=B.attributes;let I=0;const j=O.getAttributes();for(const W in j)if(j[W].location>=0){let xe=N[W];xe===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor));const me={};me.attribute=xe,xe&&xe.data&&(me.data=xe.data),V[W]=me,I++}r.attributes=V,r.attributesNum=I,r.index=U}function v(){const w=r.newAttributes;for(let B=0,O=w.length;B<O;B++)w[B]=0}function m(w){p(w,0)}function p(w,B){const O=r.newAttributes,U=r.enabledAttributes,V=r.attributeDivisors;O[w]=1,U[w]===0&&(n.enableVertexAttribArray(w),U[w]=1),V[w]!==B&&(n.vertexAttribDivisor(w,B),V[w]=B)}function x(){const w=r.newAttributes,B=r.enabledAttributes;for(let O=0,U=B.length;O<U;O++)B[O]!==w[O]&&(n.disableVertexAttribArray(O),B[O]=0)}function E(w,B,O,U,V,N,I){I===!0?n.vertexAttribIPointer(w,B,O,V,N):n.vertexAttribPointer(w,B,O,U,V,N)}function M(w,B,O,U){v();const V=U.attributes,N=O.getAttributes(),I=B.defaultAttributeValues;for(const j in N){const W=N[j];if(W.location>=0){let de=V[j];if(de===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),de!==void 0){const xe=de.normalized,me=de.itemSize,Oe=e.get(de);if(Oe===void 0)continue;const We=Oe.buffer,Ye=Oe.type,ae=Oe.bytesPerElement,G=Ye===n.INT||Ye===n.UNSIGNED_INT||de.gpuType===Lc;if(de.isInterleavedBufferAttribute){const ne=de.data,k=ne.stride,J=de.offset;if(ne.isInstancedInterleavedBuffer){for(let le=0;le<W.locationSize;le++)p(W.location+le,ne.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);n.bindBuffer(n.ARRAY_BUFFER,We);for(let le=0;le<W.locationSize;le++)E(W.location+le,me/W.locationSize,Ye,xe,k*ae,(J+me/W.locationSize*le)*ae,G)}else{if(de.isInstancedBufferAttribute){for(let ne=0;ne<W.locationSize;ne++)p(W.location+ne,de.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ne=0;ne<W.locationSize;ne++)m(W.location+ne);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ne=0;ne<W.locationSize;ne++)E(W.location+ne,me/W.locationSize,Ye,xe,me*ae,me/W.locationSize*ne*ae,G)}}else if(I!==void 0){const xe=I[j];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(W.location,xe);break;case 3:n.vertexAttrib3fv(W.location,xe);break;case 4:n.vertexAttrib4fv(W.location,xe);break;default:n.vertexAttrib1fv(W.location,xe)}}}}x()}function P(){A();for(const w in i){const B=i[w];for(const O in B){const U=B[O];for(const V in U){const N=U[V];for(const I in N)u(N[I].object),delete N[I];delete U[V]}}delete i[w]}}function D(w){if(i[w.id]===void 0)return;const B=i[w.id];for(const O in B){const U=B[O];for(const V in U){const N=U[V];for(const I in N)u(N[I].object),delete N[I];delete U[V]}}delete i[w.id]}function L(w){for(const B in i){const O=i[B];for(const U in O){const V=O[U];if(V[w.id]===void 0)continue;const N=V[w.id];for(const I in N)u(N[I].object),delete N[I];delete V[w.id]}}}function S(w){for(const B in i){const O=i[B],U=w.isInstancedMesh===!0?w.id:0,V=O[U];if(V!==void 0){for(const N in V){const I=V[N];for(const j in I)u(I[j].object),delete I[j];delete V[N]}delete O[U],Object.keys(O).length===0&&delete i[B]}}}function A(){re(),a=!0,r!==s&&(r=s,c(r.object))}function re(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:re,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:S,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function JS(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function QS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==Rn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const S=L===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==dn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Xn&&!S)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:M,maxSamples:P,samples:D}}function ey(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ts,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,E=x*4;let M=p.clippingState||null;l.value=M,M=u(g,h,E,d);for(let P=0;P!==E;++P)M[P]=t[P];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=d;E!==v;++E,M+=4)a.copy(f[E]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Gi=4,wf=[.125,.215,.35,.446,.526,.582],is=20,ty=256,ar=new $c,Rf=new tt;let Ko=null,jo=0,Zo=0,Jo=!1;const ny=new Y;class Cf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=ny}=r;Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,jo,Zo),this._renderer.xr.enabled=Jo,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:yi,format:Rn,colorSpace:$s,depthBuffer:!1},s=Pf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iy(r)),this._blurMaterial=ry(r,e,t),this._ggxMaterial=sy(r,e,t)}return s}_compileMaterial(e){const t=new lt(new sn,e);this._renderer.compile(t,ar)}_sceneToCubeUV(e,t,i,s,r){const l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Rf),f.toneMapping=Kn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new us,new Bi({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(Rf),p=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const P=this._cubeSize;Cs(s,M*P,E>2?P:0,P,P),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===cs||e.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ar)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Gi?i-g+Gi:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Cs(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,ar),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Cs(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,ar)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*is-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):is;m>is&&Xe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);const p=[];let x=0;for(let L=0;L<is;++L){const S=L/v,A=Math.exp(-S*S/2);p.push(A),L===0?x+=A:L<m&&(x+=2*A)}for(let L=0;L<p.length;L++)p[L]=p[L]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const M=this._sizeLods[s],P=3*M*(s>E-Gi?s-E+Gi:0),D=4*(this._cubeSize-M);Cs(t,P,D,3*M,2*M),l.setRenderTarget(t),l.render(f,ar)}}function iy(n){const e=[],t=[],i=[];let s=n;const r=n-Gi+1+wf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Gi?l=wf[a-n+Gi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),E=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let D=0;D<d;D++){const L=D%3*2/3-1,S=D>2?0:-1,A=[L,S,0,L+2/3,S,0,L+2/3,S+1,0,L,S,0,L+2/3,S+1,0,L,S+1,0];x.set(A,v*g*D),E.set(h,m*g*D);const re=[D,D,D,D,D,D];M.set(re,p*g*D)}const P=new sn;P.setAttribute("position",new Zn(x,v)),P.setAttribute("uv",new Zn(E,m)),P.setAttribute("faceIndex",new Zn(M,p)),i.push(new lt(P,null)),s>Gi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Pf(n,e,t){const i=new jn(n,e,t);return i.texture.mapping=Qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sy(n,e,t){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ty,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:to(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function ry(n,e,t){const i=new Float32Array(is),s=new Y(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:to(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Df(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function If(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function to(){return`

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
	`}class ep extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new us(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:_i});r.uniforms.tEquirect.value=t;const a=new lt(s,r),o=t.minFilter;return t.minFilter===rs&&(t.minFilter=Kt),new hx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function ay(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Mo||d===So)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new ep(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===Mo||d===So,v=d===cs||d===Ws;if(g||v){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Cf(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const x=h.image;return g&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new Cf(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Mo?h.mapping=cs:d===So&&(h.mapping=Ws),h}function l(h){let d=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function oy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Fa("WebGLRenderer: "+i+" extension not supported."),s}}}function ly(n,e,t,i){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(d!==null){const x=d.array;v=d.version;for(let E=0,M=x.length;E<M;E+=3){const P=x[E+0],D=x[E+1],L=x[E+2];h.push(P,D,D,L,L,P)}}else{const x=g.array;v=g.version;for(let E=0,M=x.length/3-1;E<M;E+=3){const P=E+0,D=E+1,L=E+2;h.push(P,D,D,L,L,P)}}const m=new(g.count>=65535?$d:Xd)(h,1);m.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function cy(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*a),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,h*a,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*v[x];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function uy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function fy(n,e,t){const i=new WeakMap,s=new wt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let re=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",re)};var d=re;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let P=o.attributes.position.count*M,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*D*4*f),S=new Gd(L,P,D,f);S.type=Xn,S.needsUpdate=!0;const A=M*4;for(let w=0;w<f;w++){const B=p[w],O=x[w],U=E[w],V=P*D*4*w;for(let N=0;N<B.count;N++){const I=N*A;g===!0&&(s.fromBufferAttribute(B,N),L[V+I+0]=s.x,L[V+I+1]=s.y,L[V+I+2]=s.z,L[V+I+3]=0),v===!0&&(s.fromBufferAttribute(O,N),L[V+I+4]=s.x,L[V+I+5]=s.y,L[V+I+6]=s.z,L[V+I+7]=0),m===!0&&(s.fromBufferAttribute(U,N),L[V+I+8]=s.x,L[V+I+9]=s.y,L[V+I+10]=s.z,L[V+I+11]=U.itemSize===4?s.w:1)}}h={count:f,texture:S,size:new it(P,D)},i.set(o,h),o.addEventListener("dispose",re)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function hy(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const dy={[Ad]:"LINEAR_TONE_MAPPING",[wd]:"REINHARD_TONE_MAPPING",[Rd]:"CINEON_TONE_MAPPING",[Cd]:"ACES_FILMIC_TONE_MAPPING",[Dd]:"AGX_TONE_MAPPING",[Id]:"NEUTRAL_TONE_MAPPING",[Pd]:"CUSTOM_TONE_MAPPING"};function py(n,e,t,i,s){const r=new jn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),a=new jn(e,t,{type:yi,depthBuffer:!1,stencilBuffer:!1}),o=new sn;o.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Lt([0,2,0,0,2,0],2));const l=new sx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new lt(o,l),u=new $c(-1,1,1,-1,0,1);let f=null,h=null,d=!1,g,v=null,m=[],p=!1;this.setSize=function(x,E){r.setSize(x,E),a.setSize(x,E);for(let M=0;M<m.length;M++){const P=m[M];P.setSize&&P.setSize(x,E)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;const E=r.width,M=r.height;for(let P=0;P<m.length;P++){const D=m[P];D.setSize&&D.setSize(E,M)}},this.begin=function(x,E){if(d||x.toneMapping===Kn&&m.length===0)return!1;if(v=E,E!==null){const M=E.width,P=E.height;(r.width!==M||r.height!==P)&&this.setSize(M,P)}return p===!1&&x.setRenderTarget(r),g=x.toneMapping,x.toneMapping=Kn,!0},this.hasRenderPass=function(){return p},this.end=function(x,E){x.toneMapping=g,d=!0;let M=r,P=a;for(let D=0;D<m.length;D++){const L=m[D];if(L.enabled!==!1&&(L.render(x,P,M,E),L.needsSwap!==!1)){const S=M;M=P,P=S}}if(f!==x.outputColorSpace||h!==x.toneMapping){f=x.outputColorSpace,h=x.toneMapping,l.defines={},st.getTransfer(f)===pt&&(l.defines.SRGB_TRANSFER="");const D=dy[h];D&&(l.defines[D]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(v),x.render(c,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const tp=new nn,lc=new Dr(1,1),np=new Gd,ip=new Nv,sp=new Yd,Lf=[],Uf=[],Nf=new Float32Array(16),Ff=new Float32Array(9),Of=new Float32Array(4);function js(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Lf[s];if(r===void 0&&(r=new Float32Array(s),Lf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function no(n,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function my(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function xy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Of.set(i),n.uniformMatrix2fv(this.addr,!1,Of),Nt(t,i)}}function My(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Ff.set(i),n.uniformMatrix3fv(this.addr,!1,Ff),Nt(t,i)}}function Sy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Nf.set(i),n.uniformMatrix4fv(this.addr,!1,Nf),Nt(t,i)}}function yy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function by(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function Ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function Ay(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function Py(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(lc.compareFunction=t.isReversedDepthBuffer()?zc:Vc,r=lc):r=tp,t.setTexture2D(e||r,s)}function Dy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ip,s)}function Iy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sp,s)}function Ly(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||np,s)}function Uy(n){switch(n){case 5126:return my;case 35664:return gy;case 35665:return _y;case 35666:return vy;case 35674:return xy;case 35675:return My;case 35676:return Sy;case 5124:case 35670:return yy;case 35667:case 35671:return Ey;case 35668:case 35672:return by;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return wy;case 36295:return Ry;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Ly}}function Ny(n,e){n.uniform1fv(this.addr,e)}function Fy(n,e){const t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function Oy(n,e){const t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function By(n,e){const t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function ky(n,e){const t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vy(n,e){const t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zy(n,e){const t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Gy(n,e){n.uniform1iv(this.addr,e)}function Hy(n,e){n.uniform2iv(this.addr,e)}function Wy(n,e){n.uniform3iv(this.addr,e)}function Xy(n,e){n.uniform4iv(this.addr,e)}function $y(n,e){n.uniform1uiv(this.addr,e)}function qy(n,e){n.uniform2uiv(this.addr,e)}function Yy(n,e){n.uniform3uiv(this.addr,e)}function Ky(n,e){n.uniform4uiv(this.addr,e)}function jy(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=lc:a=tp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Zy(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ip,r[a])}function Jy(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||sp,r[a])}function Qy(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||np,r[a])}function eE(n){switch(n){case 5126:return Ny;case 35664:return Fy;case 35665:return Oy;case 35666:return By;case 35674:return ky;case 35675:return Vy;case 35676:return zy;case 5124:case 35670:return Gy;case 35667:case 35671:return Hy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return $y;case 36294:return qy;case 36295:return Yy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Qy}}class tE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Uy(t.type)}}class nE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eE(t.type)}}class iE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function Bf(n,e){n.seq.push(e),n.map[e.id]=e}function sE(n,e,t){const i=n.name,s=i.length;for(Qo.lastIndex=0;;){const r=Qo.exec(i),a=Qo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bf(t,c===void 0?new tE(o,n,e):new nE(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new iE(o),Bf(t,f)),t=f}}}class Ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);sE(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function kf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const rE=37297;let aE=0;function oE(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Vf=new Je;function lE(n){st._getMatrix(Vf,st.workingColorSpace,n);const e=`mat3( ${Vf.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Ua:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+oE(n.getShaderSource(e),o)}else return r}function cE(n,e){const t=lE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const uE={[Ad]:"Linear",[wd]:"Reinhard",[Rd]:"Cineon",[Cd]:"ACESFilmic",[Dd]:"AgX",[Id]:"Neutral",[Pd]:"Custom"};function fE(n,e){const t=uE[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const da=new Y;function hE(){st.getLuminanceCoefficients(da);const n=da.x.toFixed(4),e=da.y.toFixed(4),t=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function pE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function fr(n){return n!==""}function Gf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gE=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(n){return n.replace(gE,vE)}const _E=new Map;function vE(n,e){let t=Qe[e];if(t===void 0){const i=_E.get(e);if(i!==void 0)t=Qe[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cc(t)}const xE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(n){return n.replace(xE,ME)}function ME(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const SE={[Ma]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function yE(n){return SE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const EE={[cs]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Qa]:"ENVMAP_TYPE_CUBE_UV"};function bE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":EE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const TE={[Ws]:"ENVMAP_MODE_REFRACTION"};function AE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":TE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wE={[Ic]:"ENVMAP_BLENDING_MULTIPLY",[pv]:"ENVMAP_BLENDING_MIX",[mv]:"ENVMAP_BLENDING_ADD"};function RE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wE[n.combine]||"ENVMAP_BLENDING_NONE"}function CE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function PE(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yE(t),c=bE(t),u=AE(t),f=RE(t),h=CE(t),d=dE(t),g=pE(r),v=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(m=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Kn?fE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,cE("linearToOutputTexel",t.outputColorSpace),hE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=cc(a),a=Gf(a,t),a=Hf(a,t),o=cc(o),o=Gf(o,t),o=Hf(o,t),a=Wf(a),o=Wf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=x+m+a,M=x+p+o,P=kf(s,s.VERTEX_SHADER,E),D=kf(s,s.FRAGMENT_SHADER,M);s.attachShader(v,P),s.attachShader(v,D),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(w){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(P)||"",U=s.getShaderInfoLog(D)||"",V=B.trim(),N=O.trim(),I=U.trim();let j=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,D);else{const de=zf(s,P,"vertex"),xe=zf(s,D,"fragment");ot("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+de+`
`+xe)}else V!==""?Xe("WebGLProgram: Program Info Log:",V):(N===""||I==="")&&(W=!1);W&&(w.diagnostics={runnable:j,programLog:V,vertexShader:{log:N,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(P),s.deleteShader(D),S=new Ta(s,v),A=mE(s,v)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let re=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return re===!1&&(re=s.getProgramParameter(v,rE)),re},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=D,this}let DE=0;class IE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new LE(e),t.set(e,i)),i}}class LE{constructor(e){this.id=DE++,this.code=e,this.usedTimes=0}}function UE(n,e,t,i,s,r){const a=new Hd,o=new IE,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,A,re,w,B){const O=w.fog,U=B.geometry,V=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?w.environment:null,N=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,I=e.get(S.envMap||V,N),j=I&&I.mapping===Qa?I.image.height:null,W=d[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&Xe("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const de=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,xe=de!==void 0?de.length:0;let me=0;U.morphAttributes.position!==void 0&&(me=1),U.morphAttributes.normal!==void 0&&(me=2),U.morphAttributes.color!==void 0&&(me=3);let Oe,We,Ye,ae;if(W){const dt=Gn[W];Oe=dt.vertexShader,We=dt.fragmentShader}else Oe=S.vertexShader,We=S.fragmentShader,o.update(S),Ye=o.getVertexShaderID(S),ae=o.getFragmentShaderID(S);const G=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),k=B.isInstancedMesh===!0,J=B.isBatchedMesh===!0,le=!!S.map,T=!!S.matcap,C=!!I,z=!!S.aoMap,K=!!S.lightMap,q=!!S.bumpMap,se=!!S.normalMap,R=!!S.displacementMap,ge=!!S.emissiveMap,he=!!S.metalnessMap,fe=!!S.roughnessMap,pe=S.anisotropy>0,y=S.clearcoat>0,_=S.dispersion>0,F=S.iridescence>0,Q=S.sheen>0,ce=S.transmission>0,ee=pe&&!!S.anisotropyMap,be=y&&!!S.clearcoatMap,ve=y&&!!S.clearcoatNormalMap,Ne=y&&!!S.clearcoatRoughnessMap,Ve=F&&!!S.iridescenceMap,_e=F&&!!S.iridescenceThicknessMap,Se=Q&&!!S.sheenColorMap,Te=Q&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,Pe=!!S.specularColorMap,Ke=!!S.specularIntensityMap,H=ce&&!!S.transmissionMap,Ee=ce&&!!S.thicknessMap,ye=!!S.gradientMap,Fe=!!S.alphaMap,Me=S.alphaTest>0,ue=!!S.alphaHash,Be=!!S.extensions;let qe=Kn;S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(qe=n.toneMapping);const xt={shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:Oe,fragmentShader:We,defines:S.defines,customVertexShaderID:Ye,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:J,batchingColor:J&&B._colorsTexture!==null,instancing:k,instancingColor:k&&B.instanceColor!==null,instancingMorph:k&&B.morphTexture!==null,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:$s,alphaToCoverage:!!S.alphaToCoverage,map:le,matcap:T,envMap:C,envMapMode:C&&I.mapping,envMapCubeUVHeight:j,aoMap:z,lightMap:K,bumpMap:q,normalMap:se,displacementMap:R,emissiveMap:ge,normalMapObjectSpace:se&&S.normalMapType===vv,normalMapTangentSpace:se&&S.normalMapType===kc,metalnessMap:he,roughnessMap:fe,anisotropy:pe,anisotropyMap:ee,clearcoat:y,clearcoatMap:be,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ne,dispersion:_,iridescence:F,iridescenceMap:Ve,iridescenceThicknessMap:_e,sheen:Q,sheenColorMap:Se,sheenRoughnessMap:Te,specularMap:Ce,specularColorMap:Pe,specularIntensityMap:Ke,transmission:ce,transmissionMap:H,thicknessMap:Ee,gradientMap:ye,opaque:S.transparent===!1&&S.blending===Os&&S.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Me,alphaHash:ue,combine:S.combine,mapUv:le&&g(S.map.channel),aoMapUv:z&&g(S.aoMap.channel),lightMapUv:K&&g(S.lightMap.channel),bumpMapUv:q&&g(S.bumpMap.channel),normalMapUv:se&&g(S.normalMap.channel),displacementMapUv:R&&g(S.displacementMap.channel),emissiveMapUv:ge&&g(S.emissiveMap.channel),metalnessMapUv:he&&g(S.metalnessMap.channel),roughnessMapUv:fe&&g(S.roughnessMap.channel),anisotropyMapUv:ee&&g(S.anisotropyMap.channel),clearcoatMapUv:be&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(S.sheenRoughnessMap.channel),specularMapUv:Ce&&g(S.specularMap.channel),specularColorMapUv:Pe&&g(S.specularColorMap.channel),specularIntensityMapUv:Ke&&g(S.specularIntensityMap.channel),transmissionMapUv:H&&g(S.transmissionMap.channel),thicknessMapUv:Ee&&g(S.thicknessMap.channel),alphaMapUv:Fe&&g(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(se||pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!U.attributes.uv&&(le||Fe),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||U.attributes.normal===void 0&&se===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:B.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:me,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&re.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:le&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===pt,decodeVideoTextureEmissive:ge&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wn,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Be&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&S.extensions.multiDraw===!0||J)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function m(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const re in S.defines)A.push(re),A.push(S.defines[re]);return S.isRawShaderMaterial===!1&&(p(A,S),x(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function p(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function x(S,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function E(S){const A=d[S.type];let re;if(A){const w=Gn[A];re=tx.clone(w.uniforms)}else re=S.uniforms;return re}function M(S,A){let re=u.get(A);return re!==void 0?++re.usedTimes:(re=new PE(n,A,S,s),c.push(re),u.set(A,re)),re}function P(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function D(S){o.remove(S)}function L(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:M,releaseProgram:P,releaseShaderCache:D,programs:c,dispose:L}}function NE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function FE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $f(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,v,m,p){let x=n[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},n[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=g,x.materialVariant=a(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=m,x.group=p),e++,x}function l(h,d,g,v,m,p){const x=o(h,d,g,v,m,p);g.transmission>0?i.push(x):g.transparent===!0?s.push(x):t.push(x)}function c(h,d,g,v,m,p){const x=o(h,d,g,v,m,p);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function u(h,d){t.length>1&&t.sort(h||FE),i.length>1&&i.sort(d||$f),s.length>1&&s.sort(d||$f)}function f(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function OE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new qf,n.set(i,[a])):s>=r.length?(a=new qf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function BE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new tt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function kE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let VE=0;function zE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function GE(n){const e=new BE,t=kE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const s=new Y,r=new bt,a=new bt;function o(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,x=0,E=0,M=0,P=0,D=0,L=0;c.sort(zE);for(let A=0,re=c.length;A<re;A++){const w=c[A],B=w.color,O=w.intensity,U=w.distance;let V=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Xs?V=w.shadow.map.texture:V=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=B.r*O,f+=B.g*O,h+=B.b*O;else if(w.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(w.sh.coefficients[N],O);L++}else if(w.isDirectionalLight){const N=e.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const I=w.shadow,j=t.get(w);j.shadowIntensity=I.intensity,j.shadowBias=I.bias,j.shadowNormalBias=I.normalBias,j.shadowRadius=I.radius,j.shadowMapSize=I.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=w.shadow.matrix,x++}i.directional[d]=N,d++}else if(w.isSpotLight){const N=e.get(w);N.position.setFromMatrixPosition(w.matrixWorld),N.color.copy(B).multiplyScalar(O),N.distance=U,N.coneCos=Math.cos(w.angle),N.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),N.decay=w.decay,i.spot[v]=N;const I=w.shadow;if(w.map&&(i.spotLightMap[P]=w.map,P++,I.updateMatrices(w),w.castShadow&&D++),i.spotLightMatrix[v]=I.matrix,w.castShadow){const j=t.get(w);j.shadowIntensity=I.intensity,j.shadowBias=I.bias,j.shadowNormalBias=I.normalBias,j.shadowRadius=I.radius,j.shadowMapSize=I.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=V,M++}v++}else if(w.isRectAreaLight){const N=e.get(w);N.color.copy(B).multiplyScalar(O),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=N,m++}else if(w.isPointLight){const N=e.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),N.distance=w.distance,N.decay=w.decay,w.castShadow){const I=w.shadow,j=t.get(w);j.shadowIntensity=I.intensity,j.shadowBias=I.bias,j.shadowNormalBias=I.normalBias,j.shadowRadius=I.radius,j.shadowMapSize=I.mapSize,j.shadowCameraNear=I.camera.near,j.shadowCameraFar=I.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=w.shadow.matrix,E++}i.point[g]=N,g++}else if(w.isHemisphereLight){const N=e.get(w);N.skyColor.copy(w.color).multiplyScalar(O),N.groundColor.copy(w.groundColor).multiplyScalar(O),i.hemi[p]=N,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const S=i.hash;(S.directionalLength!==d||S.pointLength!==g||S.spotLength!==v||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==x||S.numPointShadows!==E||S.numSpotShadows!==M||S.numSpotMaps!==P||S.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,S.directionalLength=d,S.pointLength=g,S.spotLength=v,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=x,S.numPointShadows=E,S.numSpotShadows=M,S.numSpotMaps=P,S.numLightProbes=L,i.version=VE++)}function l(c,u){let f=0,h=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const E=c[p];if(E.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(E.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Yf(n){const e=new GE(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function HE(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Yf(n),e.set(s,[o])):r>=a.length?(o=new Yf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const WE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$E=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],qE=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Kf=new bt,or=new Y,el=new Y;function YE(n,e,t){let i=new Wc;const s=new it,r=new it,a=new wt,o=new rx,l=new ax,c={},u=t.maxTextureSize,f={[ei]:ln,[ln]:ei,[Wn]:Wn},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:WE,fragmentShader:XE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new lt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let p=this.type;this.render=function(D,L,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;this.type===Td&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ma);const A=n.getRenderTarget(),re=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),B=n.state;B.setBlending(_i),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=p!==this.type;O&&L.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(V=>V.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,V=D.length;U<V;U++){const N=D[U],I=N.shadow;if(I===void 0){Xe("WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const j=I.getFrameExtents();s.multiply(j),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,I.mapSize.y=r.y));const W=n.state.buffers.depth.getReversed();if(I.camera._reversedDepth=W,I.map===null||O===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===cr){if(N.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new jn(s.x,s.y,{format:Xs,type:yi,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),I.map.texture.name=N.name+".shadowMap",I.map.depthTexture=new Dr(s.x,s.y,Xn),I.map.depthTexture.name=N.name+".shadowMapDepth",I.map.depthTexture.format=Ei,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=zt,I.map.depthTexture.magFilter=zt}else N.isPointLight?(I.map=new ep(s.x),I.map.depthTexture=new Qv(s.x,ti)):(I.map=new jn(s.x,s.y),I.map.depthTexture=new Dr(s.x,s.y,ti)),I.map.depthTexture.name=N.name+".shadowMap",I.map.depthTexture.format=Ei,this.type===Ma?(I.map.depthTexture.compareFunction=W?zc:Vc,I.map.depthTexture.minFilter=Kt,I.map.depthTexture.magFilter=Kt):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=zt,I.map.depthTexture.magFilter=zt);I.camera.updateProjectionMatrix()}const de=I.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<de;xe++){if(I.map.isWebGLCubeRenderTarget)n.setRenderTarget(I.map,xe),n.clear();else{xe===0&&(n.setRenderTarget(I.map),n.clear());const me=I.getViewport(xe);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),B.viewport(a)}if(N.isPointLight){const me=I.camera,Oe=I.matrix,We=N.distance||me.far;We!==me.far&&(me.far=We,me.updateProjectionMatrix()),or.setFromMatrixPosition(N.matrixWorld),me.position.copy(or),el.copy(me.position),el.add($E[xe]),me.up.copy(qE[xe]),me.lookAt(el),me.updateMatrixWorld(),Oe.makeTranslation(-or.x,-or.y,-or.z),Kf.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Kf,me.coordinateSystem,me.reversedDepth)}else I.updateMatrices(N);i=I.getFrustum(),M(L,S,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===cr&&x(I,S),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,re,w)};function x(D,L){const S=e.update(v);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new jn(s.x,s.y,{format:Xs,type:yi})),h.uniforms.shadow_pass.value=D.map.depthTexture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(L,null,S,h,v,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(L,null,S,d,v,null)}function E(D,L,S,A){let re=null;const w=S.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(w!==void 0)re=w;else if(re=S.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const B=re.uuid,O=L.uuid;let U=c[B];U===void 0&&(U={},c[B]=U);let V=U[O];V===void 0&&(V=re.clone(),U[O]=V,L.addEventListener("dispose",P)),re=V}if(re.visible=L.visible,re.wireframe=L.wireframe,A===cr?re.side=L.shadowSide!==null?L.shadowSide:L.side:re.side=L.shadowSide!==null?L.shadowSide:f[L.side],re.alphaMap=L.alphaMap,re.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,re.map=L.map,re.clipShadows=L.clipShadows,re.clippingPlanes=L.clippingPlanes,re.clipIntersection=L.clipIntersection,re.displacementMap=L.displacementMap,re.displacementScale=L.displacementScale,re.displacementBias=L.displacementBias,re.wireframeLinewidth=L.wireframeLinewidth,re.linewidth=L.linewidth,S.isPointLight===!0&&re.isMeshDistanceMaterial===!0){const B=n.properties.get(re);B.light=S}return re}function M(D,L,S,A,re){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&re===cr)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,D.matrixWorld);const O=e.update(D),U=D.material;if(Array.isArray(U)){const V=O.groups;for(let N=0,I=V.length;N<I;N++){const j=V[N],W=U[j.materialIndex];if(W&&W.visible){const de=E(D,W,A,re);D.onBeforeShadow(n,D,L,S,O,de,j),n.renderBufferDirect(S,null,O,de,D,j),D.onAfterShadow(n,D,L,S,O,de,j)}}}else if(U.visible){const V=E(D,U,A,re);D.onBeforeShadow(n,D,L,S,O,V,null),n.renderBufferDirect(S,null,O,V,D,null),D.onAfterShadow(n,D,L,S,O,V,null)}}const B=D.children;for(let O=0,U=B.length;O<U;O++)M(B[O],L,S,A,re)}function P(D){D.target.removeEventListener("dispose",P);for(const S in c){const A=c[S],re=D.target.uuid;re in A&&(A[re].dispose(),delete A[re])}}}function KE(n,e){function t(){let H=!1;const Ee=new wt;let ye=null;const Fe=new wt(0,0,0,0);return{setMask:function(Me){ye!==Me&&!H&&(n.colorMask(Me,Me,Me,Me),ye=Me)},setLocked:function(Me){H=Me},setClear:function(Me,ue,Be,qe,xt){xt===!0&&(Me*=qe,ue*=qe,Be*=qe),Ee.set(Me,ue,Be,qe),Fe.equals(Ee)===!1&&(n.clearColor(Me,ue,Be,qe),Fe.copy(Ee))},reset:function(){H=!1,ye=null,Fe.set(-1,0,0,0)}}}function i(){let H=!1,Ee=!1,ye=null,Fe=null,Me=null;return{setReversed:function(ue){if(Ee!==ue){const Be=e.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Ee=ue;const qe=Me;Me=null,this.setClear(qe)}},getReversed:function(){return Ee},setTest:function(ue){ue?G(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(ue){ye!==ue&&!H&&(n.depthMask(ue),ye=ue)},setFunc:function(ue){if(Ee&&(ue=Rv[ue]),Fe!==ue){switch(ue){case xl:n.depthFunc(n.NEVER);break;case Ml:n.depthFunc(n.ALWAYS);break;case Sl:n.depthFunc(n.LESS);break;case Hs:n.depthFunc(n.LEQUAL);break;case yl:n.depthFunc(n.EQUAL);break;case El:n.depthFunc(n.GEQUAL);break;case bl:n.depthFunc(n.GREATER);break;case Tl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=ue}},setLocked:function(ue){H=ue},setClear:function(ue){Me!==ue&&(Me=ue,Ee&&(ue=1-ue),n.clearDepth(ue))},reset:function(){H=!1,ye=null,Fe=null,Me=null,Ee=!1}}}function s(){let H=!1,Ee=null,ye=null,Fe=null,Me=null,ue=null,Be=null,qe=null,xt=null;return{setTest:function(dt){H||(dt?G(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(dt){Ee!==dt&&!H&&(n.stencilMask(dt),Ee=dt)},setFunc:function(dt,ii,si){(ye!==dt||Fe!==ii||Me!==si)&&(n.stencilFunc(dt,ii,si),ye=dt,Fe=ii,Me=si)},setOp:function(dt,ii,si){(ue!==dt||Be!==ii||qe!==si)&&(n.stencilOp(dt,ii,si),ue=dt,Be=ii,qe=si)},setLocked:function(dt){H=dt},setClear:function(dt){xt!==dt&&(n.clearStencil(dt),xt=dt)},reset:function(){H=!1,Ee=null,ye=null,Fe=null,Me=null,ue=null,Be=null,qe=null,xt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,E=null,M=null,P=null,D=null,L=new tt(0,0,0),S=0,A=!1,re=null,w=null,B=null,O=null,U=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(j)[1]),N=I>=1):j.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),N=I>=2);let W=null,de={};const xe=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),Oe=new wt().fromArray(xe),We=new wt().fromArray(me);function Ye(H,Ee,ye,Fe){const Me=new Uint8Array(4),ue=n.createTexture();n.bindTexture(H,ue),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<ye;Be++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(Ee+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return ue}const ae={};ae[n.TEXTURE_2D]=Ye(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=Ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=Ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=Ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),G(n.DEPTH_TEST),a.setFunc(Hs),q(!1),se(Yu),G(n.CULL_FACE),z(_i);function G(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function ne(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function k(H,Ee){return f[H]!==Ee?(n.bindFramebuffer(H,Ee),f[H]=Ee,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ee),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function J(H,Ee){let ye=d,Fe=!1;if(H){ye=h.get(Ee),ye===void 0&&(ye=[],h.set(Ee,ye));const Me=H.textures;if(ye.length!==Me.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Be=Me.length;ue<Be;ue++)ye[ue]=n.COLOR_ATTACHMENT0+ue;ye.length=Me.length,Fe=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(ye)}function le(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const T={[ns]:n.FUNC_ADD,[Z0]:n.FUNC_SUBTRACT,[J0]:n.FUNC_REVERSE_SUBTRACT};T[Q0]=n.MIN,T[ev]=n.MAX;const C={[tv]:n.ZERO,[nv]:n.ONE,[iv]:n.SRC_COLOR,[_l]:n.SRC_ALPHA,[cv]:n.SRC_ALPHA_SATURATE,[ov]:n.DST_COLOR,[rv]:n.DST_ALPHA,[sv]:n.ONE_MINUS_SRC_COLOR,[vl]:n.ONE_MINUS_SRC_ALPHA,[lv]:n.ONE_MINUS_DST_COLOR,[av]:n.ONE_MINUS_DST_ALPHA,[uv]:n.CONSTANT_COLOR,[fv]:n.ONE_MINUS_CONSTANT_COLOR,[hv]:n.CONSTANT_ALPHA,[dv]:n.ONE_MINUS_CONSTANT_ALPHA};function z(H,Ee,ye,Fe,Me,ue,Be,qe,xt,dt){if(H===_i){v===!0&&(ne(n.BLEND),v=!1);return}if(v===!1&&(G(n.BLEND),v=!0),H!==j0){if(H!==m||dt!==A){if((p!==ns||M!==ns)&&(n.blendEquation(n.FUNC_ADD),p=ns,M=ns),dt)switch(H){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.ONE,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",H);break}else switch(H){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ju:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zu:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",H);break}x=null,E=null,P=null,D=null,L.set(0,0,0),S=0,m=H,A=dt}return}Me=Me||Ee,ue=ue||ye,Be=Be||Fe,(Ee!==p||Me!==M)&&(n.blendEquationSeparate(T[Ee],T[Me]),p=Ee,M=Me),(ye!==x||Fe!==E||ue!==P||Be!==D)&&(n.blendFuncSeparate(C[ye],C[Fe],C[ue],C[Be]),x=ye,E=Fe,P=ue,D=Be),(qe.equals(L)===!1||xt!==S)&&(n.blendColor(qe.r,qe.g,qe.b,xt),L.copy(qe),S=xt),m=H,A=!1}function K(H,Ee){H.side===Wn?ne(n.CULL_FACE):G(n.CULL_FACE);let ye=H.side===ln;Ee&&(ye=!ye),q(ye),H.blending===Os&&H.transparent===!1?z(_i):z(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const Fe=H.stencilWrite;o.setTest(Fe),Fe&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ge(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(H){re!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),re=H)}function se(H){H!==Y0?(G(n.CULL_FACE),H!==w&&(H===Yu?n.cullFace(n.BACK):H===K0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),w=H}function R(H){H!==B&&(N&&n.lineWidth(H),B=H)}function ge(H,Ee,ye){H?(G(n.POLYGON_OFFSET_FILL),(O!==Ee||U!==ye)&&(O=Ee,U=ye,a.getReversed()&&(Ee=-Ee),n.polygonOffset(Ee,ye))):ne(n.POLYGON_OFFSET_FILL)}function he(H){H?G(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function fe(H){H===void 0&&(H=n.TEXTURE0+V-1),W!==H&&(n.activeTexture(H),W=H)}function pe(H,Ee,ye){ye===void 0&&(W===null?ye=n.TEXTURE0+V-1:ye=W);let Fe=de[ye];Fe===void 0&&(Fe={type:void 0,texture:void 0},de[ye]=Fe),(Fe.type!==H||Fe.texture!==Ee)&&(W!==ye&&(n.activeTexture(ye),W=ye),n.bindTexture(H,Ee||ae[H]),Fe.type=H,Fe.texture=Ee)}function y(){const H=de[W];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function Q(){try{n.texSubImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function ce(){try{n.texSubImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function ve(){try{n.texStorage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function Ne(){try{n.texStorage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function Ve(){try{n.texImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function _e(){try{n.texImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function Se(H){Oe.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Oe.copy(H))}function Te(H){We.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),We.copy(H))}function Ce(H,Ee){let ye=c.get(Ee);ye===void 0&&(ye=new WeakMap,c.set(Ee,ye));let Fe=ye.get(H);Fe===void 0&&(Fe=n.getUniformBlockIndex(Ee,H.name),ye.set(H,Fe))}function Pe(H,Ee){const Fe=c.get(Ee).get(H);l.get(Ee)!==Fe&&(n.uniformBlockBinding(Ee,Fe,H.__bindingPointIndex),l.set(Ee,Fe))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},W=null,de={},f={},h=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,E=null,M=null,P=null,D=null,L=new tt(0,0,0),S=0,A=!1,re=null,w=null,B=null,O=null,U=null,Oe.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:G,disable:ne,bindFramebuffer:k,drawBuffers:J,useProgram:le,setBlending:z,setMaterial:K,setFlipSided:q,setCullFace:se,setLineWidth:R,setPolygonOffset:ge,setScissorTest:he,activeTexture:fe,bindTexture:pe,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Ve,texImage3D:_e,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:ve,texStorage3D:Ne,texSubImage2D:Q,texSubImage3D:ce,compressedTexSubImage2D:ee,compressedTexSubImage3D:be,scissor:Se,viewport:Te,reset:Ke}}function jE(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return d?new OffscreenCanvas(y,_):Na("canvas")}function v(y,_,F){let Q=1;const ce=pe(y);if((ce.width>F||ce.height>F)&&(Q=F/Math.max(ce.width,ce.height)),Q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const ee=Math.floor(Q*ce.width),be=Math.floor(Q*ce.height);f===void 0&&(f=g(ee,be));const ve=_?g(ee,be):f;return ve.width=ee,ve.height=be,ve.getContext("2d").drawImage(y,0,0,ee,be),Xe("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ee+"x"+be+")."),ve}else return"data"in y&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){n.generateMipmap(y)}function x(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(y,_,F,Q,ce=!1){if(y!==null){if(n[y]!==void 0)return n[y];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ee=_;if(_===n.RED&&(F===n.FLOAT&&(ee=n.R32F),F===n.HALF_FLOAT&&(ee=n.R16F),F===n.UNSIGNED_BYTE&&(ee=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.R8UI),F===n.UNSIGNED_SHORT&&(ee=n.R16UI),F===n.UNSIGNED_INT&&(ee=n.R32UI),F===n.BYTE&&(ee=n.R8I),F===n.SHORT&&(ee=n.R16I),F===n.INT&&(ee=n.R32I)),_===n.RG&&(F===n.FLOAT&&(ee=n.RG32F),F===n.HALF_FLOAT&&(ee=n.RG16F),F===n.UNSIGNED_BYTE&&(ee=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.RG8UI),F===n.UNSIGNED_SHORT&&(ee=n.RG16UI),F===n.UNSIGNED_INT&&(ee=n.RG32UI),F===n.BYTE&&(ee=n.RG8I),F===n.SHORT&&(ee=n.RG16I),F===n.INT&&(ee=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),F===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),F===n.UNSIGNED_INT&&(ee=n.RGB32UI),F===n.BYTE&&(ee=n.RGB8I),F===n.SHORT&&(ee=n.RGB16I),F===n.INT&&(ee=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),F===n.UNSIGNED_INT&&(ee=n.RGBA32UI),F===n.BYTE&&(ee=n.RGBA8I),F===n.SHORT&&(ee=n.RGBA16I),F===n.INT&&(ee=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),_===n.RGBA){const be=ce?Ua:st.getTransfer(Q);F===n.FLOAT&&(ee=n.RGBA32F),F===n.HALF_FLOAT&&(ee=n.RGBA16F),F===n.UNSIGNED_BYTE&&(ee=be===pt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(y,_){let F;return y?_===null||_===ti||_===Cr?F=n.DEPTH24_STENCIL8:_===Xn?F=n.DEPTH32F_STENCIL8:_===Rr&&(F=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ti||_===Cr?F=n.DEPTH_COMPONENT24:_===Xn?F=n.DEPTH_COMPONENT32F:_===Rr&&(F=n.DEPTH_COMPONENT16),F}function P(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==zt&&y.minFilter!==Kt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function D(y){const _=y.target;_.removeEventListener("dispose",D),S(_),_.isVideoTexture&&u.delete(_)}function L(y){const _=y.target;_.removeEventListener("dispose",L),re(_)}function S(y){const _=i.get(y);if(_.__webglInit===void 0)return;const F=y.source,Q=h.get(F);if(Q){const ce=Q[_.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&A(y),Object.keys(Q).length===0&&h.delete(F)}i.remove(y)}function A(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const F=y.source,Q=h.get(F);delete Q[_.__cacheKey],a.memory.textures--}function re(y){const _=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let ce=0;ce<_.__webglFramebuffer[Q].length;ce++)n.deleteFramebuffer(_.__webglFramebuffer[Q][ce]);else n.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[Q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=y.textures;for(let Q=0,ce=F.length;Q<ce;Q++){const ee=i.get(F[Q]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(F[Q])}i.remove(y)}let w=0;function B(){w=0}function O(){const y=w;return y>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),w+=1,y}function U(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function V(y,_){const F=i.get(y);if(y.isVideoTexture&&he(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const Q=y.image;if(Q===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(F,y,_);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function N(y,_){const F=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){ae(F,y,_);return}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function I(y,_){const F=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){ae(F,y,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function j(y,_){const F=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&F.__version!==y.version){G(F,y,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const W={[Al]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[wl]:n.MIRRORED_REPEAT},de={[zt]:n.NEAREST,[gv]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[yo]:n.LINEAR_MIPMAP_NEAREST,[rs]:n.LINEAR_MIPMAP_LINEAR},xe={[xv]:n.NEVER,[bv]:n.ALWAYS,[Mv]:n.LESS,[Vc]:n.LEQUAL,[Sv]:n.EQUAL,[zc]:n.GEQUAL,[yv]:n.GREATER,[Ev]:n.NOTEQUAL};function me(y,_){if(_.type===Xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Kt||_.magFilter===yo||_.magFilter===Wr||_.magFilter===rs||_.minFilter===Kt||_.minFilter===yo||_.minFilter===Wr||_.minFilter===rs)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,W[_.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,W[_.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,W[_.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,de[_.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===zt||_.minFilter!==Wr&&_.minFilter!==rs||_.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Oe(y,_){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",D));const Q=_.source;let ce=h.get(Q);ce===void 0&&(ce={},h.set(Q,ce));const ee=U(_);if(ee!==y.__cacheKey){ce[ee]===void 0&&(ce[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ce[ee].usedTimes++;const be=ce[y.__cacheKey];be!==void 0&&(ce[y.__cacheKey].usedTimes--,be.usedTimes===0&&A(_)),y.__cacheKey=ee,y.__webglTexture=ce[ee].texture}return F}function We(y,_,F){return Math.floor(Math.floor(y/F)/_)}function Ye(y,_,F,Q){const ee=y.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,Q,_.data);else{ee.sort((_e,Se)=>_e.start-Se.start);let be=0;for(let _e=1;_e<ee.length;_e++){const Se=ee[be],Te=ee[_e],Ce=Se.start+Se.count,Pe=We(Te.start,_.width,4),Ke=We(Se.start,_.width,4);Te.start<=Ce+1&&Pe===Ke&&We(Te.start+Te.count-1,_.width,4)===Pe?Se.count=Math.max(Se.count,Te.start+Te.count-Se.start):(++be,ee[be]=Te)}ee.length=be+1;const ve=n.getParameter(n.UNPACK_ROW_LENGTH),Ne=n.getParameter(n.UNPACK_SKIP_PIXELS),Ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let _e=0,Se=ee.length;_e<Se;_e++){const Te=ee[_e],Ce=Math.floor(Te.start/4),Pe=Math.ceil(Te.count/4),Ke=Ce%_.width,H=Math.floor(Ce/_.width),Ee=Pe,ye=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,Ke,H,Ee,ye,F,Q,_.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ve),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ve)}}function ae(y,_,F){let Q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=n.TEXTURE_3D);const ce=Oe(y,_),ee=_.source;t.bindTexture(Q,y.__webglTexture,n.TEXTURE0+F);const be=i.get(ee);if(ee.version!==be.__version||ce===!0){t.activeTexture(n.TEXTURE0+F);const ve=st.getPrimaries(st.workingColorSpace),Ne=_.colorSpace===zi?null:st.getPrimaries(_.colorSpace),Ve=_.colorSpace===zi||ve===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let _e=v(_.image,!1,s.maxTextureSize);_e=fe(_,_e);const Se=r.convert(_.format,_.colorSpace),Te=r.convert(_.type);let Ce=E(_.internalFormat,Se,Te,_.colorSpace,_.isVideoTexture);me(Q,_);let Pe;const Ke=_.mipmaps,H=_.isVideoTexture!==!0,Ee=be.__version===void 0||ce===!0,ye=ee.dataReady,Fe=P(_,_e);if(_.isDepthTexture)Ce=M(_.format===as,_.type),Ee&&(H?t.texStorage2D(n.TEXTURE_2D,1,Ce,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Ce,_e.width,_e.height,0,Se,Te,null));else if(_.isDataTexture)if(Ke.length>0){H&&Ee&&t.texStorage2D(n.TEXTURE_2D,Fe,Ce,Ke[0].width,Ke[0].height);for(let Me=0,ue=Ke.length;Me<ue;Me++)Pe=Ke[Me],H?ye&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Se,Te,Pe.data):t.texImage2D(n.TEXTURE_2D,Me,Ce,Pe.width,Pe.height,0,Se,Te,Pe.data);_.generateMipmaps=!1}else H?(Ee&&t.texStorage2D(n.TEXTURE_2D,Fe,Ce,_e.width,_e.height),ye&&Ye(_,_e,Se,Te)):t.texImage2D(n.TEXTURE_2D,0,Ce,_e.width,_e.height,0,Se,Te,_e.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){H&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Ce,Ke[0].width,Ke[0].height,_e.depth);for(let Me=0,ue=Ke.length;Me<ue;Me++)if(Pe=Ke[Me],_.format!==Rn)if(Se!==null)if(H){if(ye)if(_.layerUpdates.size>0){const Be=Af(Pe.width,Pe.height,_.format,_.type);for(const qe of _.layerUpdates){const xt=Pe.data.subarray(qe*Be/Pe.data.BYTES_PER_ELEMENT,(qe+1)*Be/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,qe,Pe.width,Pe.height,1,Se,xt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,_e.depth,Se,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,Ce,Pe.width,Pe.height,_e.depth,0,Pe.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,_e.depth,Se,Te,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,Ce,Pe.width,Pe.height,_e.depth,0,Se,Te,Pe.data)}else{H&&Ee&&t.texStorage2D(n.TEXTURE_2D,Fe,Ce,Ke[0].width,Ke[0].height);for(let Me=0,ue=Ke.length;Me<ue;Me++)Pe=Ke[Me],_.format!==Rn?Se!==null?H?ye&&t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Se,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,Ce,Pe.width,Pe.height,0,Pe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ye&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Se,Te,Pe.data):t.texImage2D(n.TEXTURE_2D,Me,Ce,Pe.width,Pe.height,0,Se,Te,Pe.data)}else if(_.isDataArrayTexture)if(H){if(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Ce,_e.width,_e.height,_e.depth),ye)if(_.layerUpdates.size>0){const Me=Af(_e.width,_e.height,_.format,_.type);for(const ue of _.layerUpdates){const Be=_e.data.subarray(ue*Me/_e.data.BYTES_PER_ELEMENT,(ue+1)*Me/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,_e.width,_e.height,1,Se,Te,Be)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Se,Te,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,_e.width,_e.height,_e.depth,0,Se,Te,_e.data);else if(_.isData3DTexture)H?(Ee&&t.texStorage3D(n.TEXTURE_3D,Fe,Ce,_e.width,_e.height,_e.depth),ye&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Se,Te,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,_e.width,_e.height,_e.depth,0,Se,Te,_e.data);else if(_.isFramebufferTexture){if(Ee)if(H)t.texStorage2D(n.TEXTURE_2D,Fe,Ce,_e.width,_e.height);else{let Me=_e.width,ue=_e.height;for(let Be=0;Be<Fe;Be++)t.texImage2D(n.TEXTURE_2D,Be,Ce,Me,ue,0,Se,Te,null),Me>>=1,ue>>=1}}else if(Ke.length>0){if(H&&Ee){const Me=pe(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Fe,Ce,Me.width,Me.height)}for(let Me=0,ue=Ke.length;Me<ue;Me++)Pe=Ke[Me],H?ye&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Se,Te,Pe):t.texImage2D(n.TEXTURE_2D,Me,Ce,Se,Te,Pe);_.generateMipmaps=!1}else if(H){if(Ee){const Me=pe(_e);t.texStorage2D(n.TEXTURE_2D,Fe,Ce,Me.width,Me.height)}ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Te,_e)}else t.texImage2D(n.TEXTURE_2D,0,Ce,Se,Te,_e);m(_)&&p(Q),be.__version=ee.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function G(y,_,F){if(_.image.length!==6)return;const Q=Oe(y,_),ce=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+F);const ee=i.get(ce);if(ce.version!==ee.__version||Q===!0){t.activeTexture(n.TEXTURE0+F);const be=st.getPrimaries(st.workingColorSpace),ve=_.colorSpace===zi?null:st.getPrimaries(_.colorSpace),Ne=_.colorSpace===zi||be===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Ve=_.isCompressedTexture||_.image[0].isCompressedTexture,_e=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!Ve&&!_e?Se[ue]=v(_.image[ue],!0,s.maxCubemapSize):Se[ue]=_e?_.image[ue].image:_.image[ue],Se[ue]=fe(_,Se[ue]);const Te=Se[0],Ce=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type),Ke=E(_.internalFormat,Ce,Pe,_.colorSpace),H=_.isVideoTexture!==!0,Ee=ee.__version===void 0||Q===!0,ye=ce.dataReady;let Fe=P(_,Te);me(n.TEXTURE_CUBE_MAP,_);let Me;if(Ve){H&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,Ke,Te.width,Te.height);for(let ue=0;ue<6;ue++){Me=Se[ue].mipmaps;for(let Be=0;Be<Me.length;Be++){const qe=Me[Be];_.format!==Rn?Ce!==null?H?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,0,0,qe.width,qe.height,Ce,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,Ke,qe.width,qe.height,0,qe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,0,0,qe.width,qe.height,Ce,Pe,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,Ke,qe.width,qe.height,0,Ce,Pe,qe.data)}}}else{if(Me=_.mipmaps,H&&Ee){Me.length>0&&Fe++;const ue=pe(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,Ke,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(_e){H?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,Ce,Pe,Se[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ke,Se[ue].width,Se[ue].height,0,Ce,Pe,Se[ue].data);for(let Be=0;Be<Me.length;Be++){const xt=Me[Be].image[ue].image;H?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,0,0,xt.width,xt.height,Ce,Pe,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,Ke,xt.width,xt.height,0,Ce,Pe,xt.data)}}else{H?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ce,Pe,Se[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ke,Ce,Pe,Se[ue]);for(let Be=0;Be<Me.length;Be++){const qe=Me[Be];H?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,0,0,Ce,Pe,qe.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,Ke,Ce,Pe,qe.image[ue])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),ee.__version=ce.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function ne(y,_,F,Q,ce,ee){const be=r.convert(F.format,F.colorSpace),ve=r.convert(F.type),Ne=E(F.internalFormat,be,ve,F.colorSpace),Ve=i.get(_),_e=i.get(F);if(_e.__renderTarget=_,!Ve.__hasExternalTextures){const Se=Math.max(1,_.width>>ee),Te=Math.max(1,_.height>>ee);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ee,Ne,Se,Te,_.depth,0,be,ve,null):t.texImage2D(ce,ee,Ne,Se,Te,0,be,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ge(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ce,_e.__webglTexture,0,R(_)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ce,_e.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(y,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,y),_.depthBuffer){const Q=_.depthTexture,ce=Q&&Q.isDepthTexture?Q.type:null,ee=M(_.stencilBuffer,ce),be=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ge(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(_),ee,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(_),ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,y)}else{const Q=_.textures;for(let ce=0;ce<Q.length;ce++){const ee=Q[ce],be=r.convert(ee.format,ee.colorSpace),ve=r.convert(ee.type),Ne=E(ee.internalFormat,be,ve,ee.colorSpace);ge(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(_),Ne,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(_),Ne,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function J(y,_,F){const Q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=i.get(_.depthTexture);if(ce.__renderTarget=_,(!ce.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),ce.__webglTexture===void 0){ce.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),me(n.TEXTURE_CUBE_MAP,_.depthTexture);const Ve=r.convert(_.depthTexture.format),_e=r.convert(_.depthTexture.type);let Se;_.depthTexture.format===Ei?Se=n.DEPTH_COMPONENT24:_.depthTexture.format===as&&(Se=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Se,_.width,_.height,0,Ve,_e,null)}}else V(_.depthTexture,0);const ee=ce.__webglTexture,be=R(_),ve=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Ne=_.depthTexture.format===as?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ei)ge(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ne,ve,ee,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,Ne,ve,ee,0);else if(_.depthTexture.format===as)ge(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ne,ve,ee,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,Ne,ve,ee,0);else throw new Error("Unknown depthTexture format")}function le(y){const _=i.get(y),F=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const Q=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){const ce=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",ce)};Q.addEventListener("dispose",ce),_.__depthDisposeCallback=ce}_.__boundDepthTexture=Q}if(y.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let Q=0;Q<6;Q++)J(_.__webglFramebuffer[Q],y,Q);else{const Q=y.texture.mipmaps;Q&&Q.length>0?J(_.__webglFramebuffer[0],y,0):J(_.__webglFramebuffer,y,0)}else if(F){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=n.createRenderbuffer(),k(_.__webglDepthbuffer[Q],y,!1);else{const ce=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ee)}}else{const Q=y.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),k(_.__webglDepthbuffer,y,!1);else{const ce=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function T(y,_,F){const Q=i.get(y);_!==void 0&&ne(Q.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&le(y)}function C(y){const _=y.texture,F=i.get(y),Q=i.get(_);y.addEventListener("dispose",L);const ce=y.textures,ee=y.isWebGLCubeRenderTarget===!0,be=ce.length>1;if(be||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=_.version,a.memory.textures++),ee){F.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ve]=[];for(let Ne=0;Ne<_.mipmaps.length;Ne++)F.__webglFramebuffer[ve][Ne]=n.createFramebuffer()}else F.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ve=0;ve<_.mipmaps.length;ve++)F.__webglFramebuffer[ve]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(be)for(let ve=0,Ne=ce.length;ve<Ne;ve++){const Ve=i.get(ce[ve]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&ge(y)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ve=0;ve<ce.length;ve++){const Ne=ce[ve];F.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ve]);const Ve=r.convert(Ne.format,Ne.colorSpace),_e=r.convert(Ne.type),Se=E(Ne.internalFormat,Ve,_e,Ne.colorSpace,y.isXRRenderTarget===!0),Te=R(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Se,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,F.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),k(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),me(n.TEXTURE_CUBE_MAP,_);for(let ve=0;ve<6;ve++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ne=0;Ne<_.mipmaps.length;Ne++)ne(F.__webglFramebuffer[ve][Ne],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ne);else ne(F.__webglFramebuffer[ve],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ve=0,Ne=ce.length;ve<Ne;ve++){const Ve=ce[ve],_e=i.get(Ve);let Se=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Se=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,_e.__webglTexture),me(Se,Ve),ne(F.__webglFramebuffer,y,Ve,n.COLOR_ATTACHMENT0+ve,Se,0),m(Ve)&&p(Se)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ve=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,Q.__webglTexture),me(ve,_),_.mipmaps&&_.mipmaps.length>0)for(let Ne=0;Ne<_.mipmaps.length;Ne++)ne(F.__webglFramebuffer[Ne],y,_,n.COLOR_ATTACHMENT0,ve,Ne);else ne(F.__webglFramebuffer,y,_,n.COLOR_ATTACHMENT0,ve,0);m(_)&&p(ve),t.unbindTexture()}y.depthBuffer&&le(y)}function z(y){const _=y.textures;for(let F=0,Q=_.length;F<Q;F++){const ce=_[F];if(m(ce)){const ee=x(y),be=i.get(ce).__webglTexture;t.bindTexture(ee,be),p(ee),t.unbindTexture()}}}const K=[],q=[];function se(y){if(y.samples>0){if(ge(y)===!1){const _=y.textures,F=y.width,Q=y.height;let ce=n.COLOR_BUFFER_BIT;const ee=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(y),ve=_.length>1;if(ve)for(let Ve=0;Ve<_.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Ne=y.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ve=0;Ve<_.length;Ve++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ve]);const _e=i.get(_[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,F,Q,0,0,F,Q,ce,n.NEAREST),l===!0&&(K.length=0,q.length=0,K.push(n.COLOR_ATTACHMENT0+Ve),y.depthBuffer&&y.resolveDepthBuffer===!1&&(K.push(ee),q.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ve=0;Ve<_.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ve]);const _e=i.get(_[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function R(y){return Math.min(s.maxSamples,y.samples)}function ge(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function he(y){const _=a.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function fe(y,_){const F=y.colorSpace,Q=y.format,ce=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==$s&&F!==zi&&(st.getTransfer(F)===pt?(Q!==Rn||ce!==dn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",F)),_}function pe(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=V,this.setTexture2DArray=N,this.setTexture3D=I,this.setTextureCube=j,this.rebindTextures=T,this.setupRenderTarget=C,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ZE(n,e){function t(i,s=zi){let r;const a=st.getTransfer(s);if(i===dn)return n.UNSIGNED_BYTE;if(i===Uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Od)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ud)return n.BYTE;if(i===Nd)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===Lc)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===Bd)return n.ALPHA;if(i===kd)return n.RGB;if(i===Rn)return n.RGBA;if(i===Ei)return n.DEPTH_COMPONENT;if(i===as)return n.DEPTH_STENCIL;if(i===Vd)return n.RED;if(i===Fc)return n.RED_INTEGER;if(i===Xs)return n.RG;if(i===Oc)return n.RG_INTEGER;if(i===Bc)return n.RGBA_INTEGER;if(i===Sa||i===ya||i===Ea||i===ba)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rl||i===Cl||i===Pl||i===Dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Ll||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Il||i===Ll)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ul)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nl)return r.COMPRESSED_R11_EAC;if(i===Fl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ol)return r.COMPRESSED_RG11_EAC;if(i===Bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kl||i===Vl||i===zl||i===Gl||i===Hl||i===Wl||i===Xl||i===$l||i===ql||i===Yl||i===Kl||i===jl||i===Zl||i===Jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===kl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$l)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===ec||i===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ql)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const JE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QE=`
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

}`;class eb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Kd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ni({vertexShader:JE,fragmentShader:QE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new vn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tb extends Ys{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new eb,p={},x=t.getContextAttributes();let E=null,M=null;const P=[],D=[],L=new it;let S=null;const A=new hn;A.viewport=new wt;const re=new hn;re.viewport=new wt;const w=[A,re],B=new dx;let O=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let G=P[ae];return G===void 0&&(G=new Po,P[ae]=G),G.getTargetRaySpace()},this.getControllerGrip=function(ae){let G=P[ae];return G===void 0&&(G=new Po,P[ae]=G),G.getGripSpace()},this.getHand=function(ae){let G=P[ae];return G===void 0&&(G=new Po,P[ae]=G),G.getHandSpace()};function V(ae){const G=D.indexOf(ae.inputSource);if(G===-1)return;const ne=P[G];ne!==void 0&&(ne.update(ae.inputSource,ae.frame,c||a),ne.dispatchEvent({type:ae.type,data:ae.inputSource}))}function N(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",I);for(let ae=0;ae<P.length;ae++){const G=D[ae];G!==null&&(D[ae]=null,P[ae].disconnect(G))}O=null,U=null,m.reset();for(const ae in p)delete p[ae];e.setRenderTarget(E),d=null,h=null,f=null,s=null,M=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",N),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,k=null,J=null;x.depth&&(J=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=x.stencil?as:Ei,k=x.stencil?Cr:ti);const le={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new jn(h.textureWidth,h.textureHeight,{format:Rn,type:dn,depthTexture:new Dr(h.textureWidth,h.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ne={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new jn(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(ae){for(let G=0;G<ae.removed.length;G++){const ne=ae.removed[G],k=D.indexOf(ne);k>=0&&(D[k]=null,P[k].disconnect(ne))}for(let G=0;G<ae.added.length;G++){const ne=ae.added[G];let k=D.indexOf(ne);if(k===-1){for(let le=0;le<P.length;le++)if(le>=D.length){D.push(ne),k=le;break}else if(D[le]===null){D[le]=ne,k=le;break}if(k===-1)break}const J=P[k];J&&J.connect(ne)}}const j=new Y,W=new Y;function de(ae,G,ne){j.setFromMatrixPosition(G.matrixWorld),W.setFromMatrixPosition(ne.matrixWorld);const k=j.distanceTo(W),J=G.projectionMatrix.elements,le=ne.projectionMatrix.elements,T=J[14]/(J[10]-1),C=J[14]/(J[10]+1),z=(J[9]+1)/J[5],K=(J[9]-1)/J[5],q=(J[8]-1)/J[0],se=(le[8]+1)/le[0],R=T*q,ge=T*se,he=k/(-q+se),fe=he*-q;if(G.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(fe),ae.translateZ(he),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),J[10]===-1)ae.projectionMatrix.copy(G.projectionMatrix),ae.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const pe=T+he,y=C+he,_=R-fe,F=ge+(k-fe),Q=z*C/y*pe,ce=K*C/y*pe;ae.projectionMatrix.makePerspective(_,F,Q,ce,pe,y),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function xe(ae,G){G===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(G.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let G=ae.near,ne=ae.far;m.texture!==null&&(m.depthNear>0&&(G=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),B.near=re.near=A.near=G,B.far=re.far=A.far=ne,(O!==B.near||U!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),O=B.near,U=B.far),B.layers.mask=ae.layers.mask|6,A.layers.mask=B.layers.mask&-5,re.layers.mask=B.layers.mask&-3;const k=ae.parent,J=B.cameras;xe(B,k);for(let le=0;le<J.length;le++)xe(J[le],k);J.length===2?de(B,A,re):B.projectionMatrix.copy(A.projectionMatrix),me(ae,B,k)};function me(ae,G,ne){ne===null?ae.matrix.copy(G.matrixWorld):(ae.matrix.copy(ne.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(G.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(G.projectionMatrix),ae.projectionMatrixInverse.copy(G.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=ac*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ae){l=ae,h!==null&&(h.fixedFoveation=ae),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ae)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(ae){return p[ae]};let Oe=null;function We(ae,G){if(u=G.getViewerPose(c||a),g=G,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let k=!1;ne.length!==B.cameras.length&&(B.cameras.length=0,k=!0);for(let C=0;C<ne.length;C++){const z=ne[C];let K=null;if(d!==null)K=d.getViewport(z);else{const se=f.getViewSubImage(h,z);K=se.viewport,C===0&&(e.setRenderTargetTextures(M,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(M))}let q=w[C];q===void 0&&(q=new hn,q.layers.enable(C),q.viewport=new wt,w[C]=q),q.matrix.fromArray(z.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(z.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(K.x,K.y,K.width,K.height),C===0&&(B.matrix.copy(q.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),k===!0&&B.cameras.push(q)}const J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const C=f.getDepthInformation(ne[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(J&&J.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<ne.length;C++){const z=ne[C].camera;if(z){let K=p[z];K||(K=new Kd,p[z]=K);const q=f.getCameraImage(z);K.sourceTexture=q}}}}for(let ne=0;ne<P.length;ne++){const k=D[ne],J=P[ne];k!==null&&J!==void 0&&J.update(k,G,c||a)}Oe&&Oe(ae,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),g=null}const Ye=new Qd;Ye.setAnimationLoop(We),this.setAnimationLoop=function(ae){Oe=ae},this.dispose=function(){}}}const Qi=new In,nb=new bt;function ib(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,jd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,E,M){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),E=x.envMap,M=x.envMapRotation;E&&(m.envMap.value=E,Qi.copy(M),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(nb.makeRotationFromEuler(Qi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sb(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const M=E.program;i.uniformBlockBinding(x,M)}function c(x,E){let M=s[x.id];M===void 0&&(g(x),M=u(x),s[x.id]=M,x.addEventListener("dispose",m));const P=E.program;i.updateUBOMapping(x,P);const D=e.render.frame;r[x.id]!==D&&(h(x),r[x.id]=D)}function u(x){const E=f();x.__bindingPointIndex=E;const M=n.createBuffer(),P=x.__size,D=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,P,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const E=s[x.id],M=x.uniforms,P=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let D=0,L=M.length;D<L;D++){const S=Array.isArray(M[D])?M[D]:[M[D]];for(let A=0,re=S.length;A<re;A++){const w=S[A];if(d(w,D,A,P)===!0){const B=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let U=0;for(let V=0;V<O.length;V++){const N=O[V],I=v(N);typeof N=="number"||typeof N=="boolean"?(w.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,B+U,w.__data)):N.isMatrix3?(w.__data[0]=N.elements[0],w.__data[1]=N.elements[1],w.__data[2]=N.elements[2],w.__data[3]=0,w.__data[4]=N.elements[3],w.__data[5]=N.elements[4],w.__data[6]=N.elements[5],w.__data[7]=0,w.__data[8]=N.elements[6],w.__data[9]=N.elements[7],w.__data[10]=N.elements[8],w.__data[11]=0):(N.toArray(w.__data,U),U+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,E,M,P){const D=x.value,L=E+"_"+M;if(P[L]===void 0)return typeof D=="number"||typeof D=="boolean"?P[L]=D:P[L]=D.clone(),!0;{const S=P[L];if(typeof D=="number"||typeof D=="boolean"){if(S!==D)return P[L]=D,!0}else if(S.equals(D)===!1)return S.copy(D),!0}return!1}function g(x){const E=x.uniforms;let M=0;const P=16;for(let L=0,S=E.length;L<S;L++){const A=Array.isArray(E[L])?E[L]:[E[L]];for(let re=0,w=A.length;re<w;re++){const B=A[re],O=Array.isArray(B.value)?B.value:[B.value];for(let U=0,V=O.length;U<V;U++){const N=O[U],I=v(N),j=M%P,W=j%I.boundary,de=j+W;M+=W,de!==0&&P-de<I.storage&&(M+=P-de),B.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=I.storage}}}const D=M%P;return D>0&&(M+=P-D),x.__size=M,x.__cache={},this}function v(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",x),E}function m(x){const E=x.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const rb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function ab(){return Fn===null&&(Fn=new Kv(rb,16,16,Xs,yi),Fn.name="DFG_LUT",Fn.minFilter=Kt,Fn.magFilter=Kt,Fn.wrapS=gi,Fn.wrapT=gi,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class ob{constructor(e={}){const{canvas:t=Av(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=dn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=d,m=new Set([Bc,Oc,Fc]),p=new Set([dn,ti,Rr,Cr,Uc,Nc]),x=new Uint32Array(4),E=new Int32Array(4);let M=null,P=null;const D=[],L=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let re=!1;this._outputColorSpace=xn;let w=0,B=0,O=null,U=-1,V=null;const N=new wt,I=new wt;let j=null;const W=new tt(0);let de=0,xe=t.width,me=t.height,Oe=1,We=null,Ye=null;const ae=new wt(0,0,xe,me),G=new wt(0,0,xe,me);let ne=!1;const k=new Wc;let J=!1,le=!1;const T=new bt,C=new Y,z=new wt,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function se(){return O===null?Oe:1}let R=i;function ge(b,$){return t.getContext(b,$)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dc}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",xt,!1),R===null){const $="webgl2";if(R=ge($,b),R===null)throw ge($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw ot("WebGLRenderer: "+b.message),b}let he,fe,pe,y,_,F,Q,ce,ee,be,ve,Ne,Ve,_e,Se,Te,Ce,Pe,Ke,H,Ee,ye,Fe;function Me(){he=new oy(R),he.init(),Ee=new ZE(R,he),fe=new QS(R,he,e,Ee),pe=new KE(R,he),fe.reversedDepthBuffer&&h&&pe.buffers.depth.setReversed(!0),y=new uy(R),_=new NE,F=new jE(R,he,pe,_,fe,Ee,y),Q=new ay(A),ce=new mx(R),ye=new ZS(R,ce),ee=new ly(R,ce,y,ye),be=new hy(R,ee,ce,ye,y),Pe=new fy(R,fe,F),Se=new ey(_),ve=new UE(A,Q,he,fe,ye,Se),Ne=new ib(A,_),Ve=new OE,_e=new HE(he),Ce=new jS(A,Q,pe,be,g,l),Te=new YE(A,be,fe),Fe=new sb(R,y,fe,pe),Ke=new JS(R,he,y),H=new cy(R,he,y),y.programs=ve.programs,A.capabilities=fe,A.extensions=he,A.properties=_,A.renderLists=Ve,A.shadowMap=Te,A.state=pe,A.info=y}Me(),v!==dn&&(S=new py(v,t.width,t.height,s,r));const ue=new tb(A,R);this.xr=ue,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=he.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=he.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(b){b!==void 0&&(Oe=b,this.setSize(xe,me,!1))},this.getSize=function(b){return b.set(xe,me)},this.setSize=function(b,$,oe=!0){if(ue.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=b,me=$,t.width=Math.floor(b*Oe),t.height=Math.floor($*Oe),oe===!0&&(t.style.width=b+"px",t.style.height=$+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,b,$)},this.getDrawingBufferSize=function(b){return b.set(xe*Oe,me*Oe).floor()},this.setDrawingBufferSize=function(b,$,oe){xe=b,me=$,Oe=oe,t.width=Math.floor(b*oe),t.height=Math.floor($*oe),this.setViewport(0,0,b,$)},this.setEffects=function(b){if(v===dn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let $=0;$<b.length;$++)if(b[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(N)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,$,oe,ie){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,$,oe,ie),pe.viewport(N.copy(ae).multiplyScalar(Oe).round())},this.getScissor=function(b){return b.copy(G)},this.setScissor=function(b,$,oe,ie){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,$,oe,ie),pe.scissor(I.copy(G).multiplyScalar(Oe).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){pe.setScissorTest(ne=b)},this.setOpaqueSort=function(b){We=b},this.setTransparentSort=function(b){Ye=b},this.getClearColor=function(b){return b.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(b=!0,$=!0,oe=!0){let ie=0;if(b){let te=!1;if(O!==null){const we=O.texture.format;te=m.has(we)}if(te){const we=O.texture.type,Le=p.has(we),Re=Ce.getClearColor(),ke=Ce.getClearAlpha(),Ge=Re.r,je=Re.g,et=Re.b;Le?(x[0]=Ge,x[1]=je,x[2]=et,x[3]=ke,R.clearBufferuiv(R.COLOR,0,x)):(E[0]=Ge,E[1]=je,E[2]=et,E[3]=ke,R.clearBufferiv(R.COLOR,0,E))}else ie|=R.COLOR_BUFFER_BIT}$&&(ie|=R.DEPTH_BUFFER_BIT),oe&&(ie|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&R.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),Ce.dispose(),Ve.dispose(),_e.dispose(),_.dispose(),Q.dispose(),be.dispose(),ye.dispose(),Fe.dispose(),ve.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Yc),ue.removeEventListener("sessionend",Kc),Wi.stop()};function Be(b){b.preventDefault(),nf("WebGLRenderer: Context Lost."),re=!0}function qe(){nf("WebGLRenderer: Context Restored."),re=!1;const b=y.autoReset,$=Te.enabled,oe=Te.autoUpdate,ie=Te.needsUpdate,te=Te.type;Me(),y.autoReset=b,Te.enabled=$,Te.autoUpdate=oe,Te.needsUpdate=ie,Te.type=te}function xt(b){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function dt(b){const $=b.target;$.removeEventListener("dispose",dt),ii($)}function ii(b){si(b),_.remove(b)}function si(b){const $=_.get(b).programs;$!==void 0&&($.forEach(function(oe){ve.releaseProgram(oe)}),b.isShaderMaterial&&ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,$,oe,ie,te,we){$===null&&($=K);const Le=te.isMesh&&te.matrixWorld.determinant()<0,Re=ap(b,$,oe,ie,te);pe.setMaterial(ie,Le);let ke=oe.index,Ge=1;if(ie.wireframe===!0){if(ke=ee.getWireframeAttribute(oe),ke===void 0)return;Ge=2}const je=oe.drawRange,et=oe.attributes.position;let He=je.start*Ge,gt=(je.start+je.count)*Ge;we!==null&&(He=Math.max(He,we.start*Ge),gt=Math.min(gt,(we.start+we.count)*Ge)),ke!==null?(He=Math.max(He,0),gt=Math.min(gt,ke.count)):et!=null&&(He=Math.max(He,0),gt=Math.min(gt,et.count));const Rt=gt-He;if(Rt<0||Rt===1/0)return;ye.setup(te,ie,Re,oe,ke);let Tt,_t=Ke;if(ke!==null&&(Tt=ce.get(ke),_t=H,_t.setIndex(Tt)),te.isMesh)ie.wireframe===!0?(pe.setLineWidth(ie.wireframeLinewidth*se()),_t.setMode(R.LINES)):_t.setMode(R.TRIANGLES);else if(te.isLine){let Wt=ie.linewidth;Wt===void 0&&(Wt=1),pe.setLineWidth(Wt*se()),te.isLineSegments?_t.setMode(R.LINES):te.isLineLoop?_t.setMode(R.LINE_LOOP):_t.setMode(R.LINE_STRIP)}else te.isPoints?_t.setMode(R.POINTS):te.isSprite&&_t.setMode(R.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Fa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))_t.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Wt=te._multiDrawStarts,ze=te._multiDrawCounts,cn=te._multiDrawCount,rt=ke?ce.get(ke).bytesPerElement:1,yn=_.get(ie).currentProgram.getUniforms();for(let Ln=0;Ln<cn;Ln++)yn.setValue(R,"_gl_DrawID",Ln),_t.render(Wt[Ln]/rt,ze[Ln])}else if(te.isInstancedMesh)_t.renderInstances(He,Rt,te.count);else if(oe.isInstancedBufferGeometry){const Wt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ze=Math.min(oe.instanceCount,Wt);_t.renderInstances(He,Rt,ze)}else _t.render(He,Rt)};function qc(b,$,oe){b.transparent===!0&&b.side===Wn&&b.forceSinglePass===!1?(b.side=ln,b.needsUpdate=!0,Vr(b,$,oe),b.side=ei,b.needsUpdate=!0,Vr(b,$,oe),b.side=Wn):Vr(b,$,oe)}this.compile=function(b,$,oe=null){oe===null&&(oe=b),P=_e.get(oe),P.init($),L.push(P),oe.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),b!==oe&&b.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),P.setupLights();const ie=new Set;return b.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const we=te.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const Re=we[Le];qc(Re,oe,te),ie.add(Re)}else qc(we,oe,te),ie.add(we)}),P=L.pop(),ie},this.compileAsync=function(b,$,oe=null){const ie=this.compile(b,$,oe);return new Promise(te=>{function we(){if(ie.forEach(function(Le){_.get(Le).currentProgram.isReady()&&ie.delete(Le)}),ie.size===0){te(b);return}setTimeout(we,10)}he.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let io=null;function rp(b){io&&io(b)}function Yc(){Wi.stop()}function Kc(){Wi.start()}const Wi=new Qd;Wi.setAnimationLoop(rp),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(b){io=b,ue.setAnimationLoop(b),b===null?Wi.stop():Wi.start()},ue.addEventListener("sessionstart",Yc),ue.addEventListener("sessionend",Kc),this.render=function(b,$){if($!==void 0&&$.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(re===!0)return;const oe=ue.enabled===!0&&ue.isPresenting===!0,ie=S!==null&&(O===null||oe)&&S.begin(A,O);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera($),$=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,$,O),P=_e.get(b,L.length),P.init($),L.push(P),T.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),k.setFromProjectionMatrix(T,$n,$.reversedDepth),le=this.localClippingEnabled,J=Se.init(this.clippingPlanes,le),M=Ve.get(b,D.length),M.init(),D.push(M),ue.enabled===!0&&ue.isPresenting===!0){const Le=A.xr.getDepthSensingMesh();Le!==null&&so(Le,$,-1/0,A.sortObjects)}so(b,$,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(We,Ye),q=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,q&&Ce.addToRenderList(M,b),this.info.render.frame++,J===!0&&Se.beginShadows();const te=P.state.shadowsArray;if(Te.render(te,b,$),J===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&S.hasRenderPass())===!1){const Le=M.opaque,Re=M.transmissive;if(P.setupLights(),$.isArrayCamera){const ke=$.cameras;if(Re.length>0)for(let Ge=0,je=ke.length;Ge<je;Ge++){const et=ke[Ge];Zc(Le,Re,b,et)}q&&Ce.render(b);for(let Ge=0,je=ke.length;Ge<je;Ge++){const et=ke[Ge];jc(M,b,et,et.viewport)}}else Re.length>0&&Zc(Le,Re,b,$),q&&Ce.render(b),jc(M,b,$)}O!==null&&B===0&&(F.updateMultisampleRenderTarget(O),F.updateRenderTargetMipmap(O)),ie&&S.end(A),b.isScene===!0&&b.onAfterRender(A,b,$),ye.resetDefaultState(),U=-1,V=null,L.pop(),L.length>0?(P=L[L.length-1],J===!0&&Se.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,D.pop(),D.length>0?M=D[D.length-1]:M=null};function so(b,$,oe,ie){if(b.visible===!1)return;if(b.layers.test($.layers)){if(b.isGroup)oe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update($);else if(b.isLight)P.pushLight(b),b.castShadow&&P.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||k.intersectsSprite(b)){ie&&z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(T);const Le=be.update(b),Re=b.material;Re.visible&&M.push(b,Le,Re,oe,z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||k.intersectsObject(b))){const Le=be.update(b),Re=b.material;if(ie&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),z.copy(b.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),z.copy(Le.boundingSphere.center)),z.applyMatrix4(b.matrixWorld).applyMatrix4(T)),Array.isArray(Re)){const ke=Le.groups;for(let Ge=0,je=ke.length;Ge<je;Ge++){const et=ke[Ge],He=Re[et.materialIndex];He&&He.visible&&M.push(b,Le,He,oe,z.z,et)}}else Re.visible&&M.push(b,Le,Re,oe,z.z,null)}}const we=b.children;for(let Le=0,Re=we.length;Le<Re;Le++)so(we[Le],$,oe,ie)}function jc(b,$,oe,ie){const{opaque:te,transmissive:we,transparent:Le}=b;P.setupLightsView(oe),J===!0&&Se.setGlobalState(A.clippingPlanes,oe),ie&&pe.viewport(N.copy(ie)),te.length>0&&kr(te,$,oe),we.length>0&&kr(we,$,oe),Le.length>0&&kr(Le,$,oe),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Zc(b,$,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ie.id]===void 0){const He=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ie.id]=new jn(1,1,{generateMipmaps:!0,type:He?yi:dn,minFilter:rs,samples:Math.max(4,fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const we=P.state.transmissionRenderTarget[ie.id],Le=ie.viewport||N;we.setSize(Le.z*A.transmissionResolutionScale,Le.w*A.transmissionResolutionScale);const Re=A.getRenderTarget(),ke=A.getActiveCubeFace(),Ge=A.getActiveMipmapLevel();A.setRenderTarget(we),A.getClearColor(W),de=A.getClearAlpha(),de<1&&A.setClearColor(16777215,.5),A.clear(),q&&Ce.render(oe);const je=A.toneMapping;A.toneMapping=Kn;const et=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),P.setupLightsView(ie),J===!0&&Se.setGlobalState(A.clippingPlanes,ie),kr(b,oe,ie),F.updateMultisampleRenderTarget(we),F.updateRenderTargetMipmap(we),he.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let gt=0,Rt=$.length;gt<Rt;gt++){const Tt=$[gt],{object:_t,geometry:Wt,material:ze,group:cn}=Tt;if(ze.side===Wn&&_t.layers.test(ie.layers)){const rt=ze.side;ze.side=ln,ze.needsUpdate=!0,Jc(_t,oe,ie,Wt,ze,cn),ze.side=rt,ze.needsUpdate=!0,He=!0}}He===!0&&(F.updateMultisampleRenderTarget(we),F.updateRenderTargetMipmap(we))}A.setRenderTarget(Re,ke,Ge),A.setClearColor(W,de),et!==void 0&&(ie.viewport=et),A.toneMapping=je}function kr(b,$,oe){const ie=$.isScene===!0?$.overrideMaterial:null;for(let te=0,we=b.length;te<we;te++){const Le=b[te],{object:Re,geometry:ke,group:Ge}=Le;let je=Le.material;je.allowOverride===!0&&ie!==null&&(je=ie),Re.layers.test(oe.layers)&&Jc(Re,$,oe,ke,je,Ge)}}function Jc(b,$,oe,ie,te,we){b.onBeforeRender(A,$,oe,ie,te,we),b.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),te.onBeforeRender(A,$,oe,ie,b,we),te.transparent===!0&&te.side===Wn&&te.forceSinglePass===!1?(te.side=ln,te.needsUpdate=!0,A.renderBufferDirect(oe,$,ie,te,b,we),te.side=ei,te.needsUpdate=!0,A.renderBufferDirect(oe,$,ie,te,b,we),te.side=Wn):A.renderBufferDirect(oe,$,ie,te,b,we),b.onAfterRender(A,$,oe,ie,te,we)}function Vr(b,$,oe){$.isScene!==!0&&($=K);const ie=_.get(b),te=P.state.lights,we=P.state.shadowsArray,Le=te.state.version,Re=ve.getParameters(b,te.state,we,$,oe),ke=ve.getProgramCacheKey(Re);let Ge=ie.programs;ie.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?$.environment:null,ie.fog=$.fog;const je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ie.envMap=Q.get(b.envMap||ie.environment,je),ie.envMapRotation=ie.environment!==null&&b.envMap===null?$.environmentRotation:b.envMapRotation,Ge===void 0&&(b.addEventListener("dispose",dt),Ge=new Map,ie.programs=Ge);let et=Ge.get(ke);if(et!==void 0){if(ie.currentProgram===et&&ie.lightsStateVersion===Le)return eu(b,Re),et}else Re.uniforms=ve.getUniforms(b),b.onBeforeCompile(Re,A),et=ve.acquireProgram(Re,ke),Ge.set(ke,et),ie.uniforms=Re.uniforms;const He=ie.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=Se.uniform),eu(b,Re),ie.needsLights=lp(b),ie.lightsStateVersion=Le,ie.needsLights&&(He.ambientLightColor.value=te.state.ambient,He.lightProbe.value=te.state.probe,He.directionalLights.value=te.state.directional,He.directionalLightShadows.value=te.state.directionalShadow,He.spotLights.value=te.state.spot,He.spotLightShadows.value=te.state.spotShadow,He.rectAreaLights.value=te.state.rectArea,He.ltc_1.value=te.state.rectAreaLTC1,He.ltc_2.value=te.state.rectAreaLTC2,He.pointLights.value=te.state.point,He.pointLightShadows.value=te.state.pointShadow,He.hemisphereLights.value=te.state.hemi,He.directionalShadowMatrix.value=te.state.directionalShadowMatrix,He.spotLightMatrix.value=te.state.spotLightMatrix,He.spotLightMap.value=te.state.spotLightMap,He.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.currentProgram=et,ie.uniformsList=null,et}function Qc(b){if(b.uniformsList===null){const $=b.currentProgram.getUniforms();b.uniformsList=Ta.seqWithValue($.seq,b.uniforms)}return b.uniformsList}function eu(b,$){const oe=_.get(b);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function ap(b,$,oe,ie,te){$.isScene!==!0&&($=K),F.resetTextureUnits();const we=$.fog,Le=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?$.environment:null,Re=O===null?A.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:$s,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ge=Q.get(ie.envMap||Le,ke),je=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,et=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),He=!!oe.morphAttributes.position,gt=!!oe.morphAttributes.normal,Rt=!!oe.morphAttributes.color;let Tt=Kn;ie.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Tt=A.toneMapping);const _t=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Wt=_t!==void 0?_t.length:0,ze=_.get(ie),cn=P.state.lights;if(J===!0&&(le===!0||b!==V)){const Ft=b===V&&ie.id===U;Se.setState(ie,b,Ft)}let rt=!1;ie.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==cn.state.version||ze.outputColorSpace!==Re||te.isBatchedMesh&&ze.batching===!1||!te.isBatchedMesh&&ze.batching===!0||te.isBatchedMesh&&ze.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ze.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ze.instancing===!1||!te.isInstancedMesh&&ze.instancing===!0||te.isSkinnedMesh&&ze.skinning===!1||!te.isSkinnedMesh&&ze.skinning===!0||te.isInstancedMesh&&ze.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ze.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ze.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ze.instancingMorph===!1&&te.morphTexture!==null||ze.envMap!==Ge||ie.fog===!0&&ze.fog!==we||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Se.numPlanes||ze.numIntersection!==Se.numIntersection)||ze.vertexAlphas!==je||ze.vertexTangents!==et||ze.morphTargets!==He||ze.morphNormals!==gt||ze.morphColors!==Rt||ze.toneMapping!==Tt||ze.morphTargetsCount!==Wt)&&(rt=!0):(rt=!0,ze.__version=ie.version);let yn=ze.currentProgram;rt===!0&&(yn=Vr(ie,$,te));let Ln=!1,Xi=!1,ds=!1;const vt=yn.getUniforms(),Bt=ze.uniforms;if(pe.useProgram(yn.program)&&(Ln=!0,Xi=!0,ds=!0),ie.id!==U&&(U=ie.id,Xi=!0),Ln||V!==b){pe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),vt.setValue(R,"projectionMatrix",b.projectionMatrix),vt.setValue(R,"viewMatrix",b.matrixWorldInverse);const wi=vt.map.cameraPosition;wi!==void 0&&wi.setValue(R,C.setFromMatrixPosition(b.matrixWorld)),fe.logarithmicDepthBuffer&&vt.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&vt.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,Xi=!0,ds=!0)}if(ze.needsLights&&(cn.state.directionalShadowMap.length>0&&vt.setValue(R,"directionalShadowMap",cn.state.directionalShadowMap,F),cn.state.spotShadowMap.length>0&&vt.setValue(R,"spotShadowMap",cn.state.spotShadowMap,F),cn.state.pointShadowMap.length>0&&vt.setValue(R,"pointShadowMap",cn.state.pointShadowMap,F)),te.isSkinnedMesh){vt.setOptional(R,te,"bindMatrix"),vt.setOptional(R,te,"bindMatrixInverse");const Ft=te.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),vt.setValue(R,"boneTexture",Ft.boneTexture,F))}te.isBatchedMesh&&(vt.setOptional(R,te,"batchingTexture"),vt.setValue(R,"batchingTexture",te._matricesTexture,F),vt.setOptional(R,te,"batchingIdTexture"),vt.setValue(R,"batchingIdTexture",te._indirectTexture,F),vt.setOptional(R,te,"batchingColorTexture"),te._colorsTexture!==null&&vt.setValue(R,"batchingColorTexture",te._colorsTexture,F));const Ai=oe.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&Pe.update(te,oe,yn),(Xi||ze.receiveShadow!==te.receiveShadow)&&(ze.receiveShadow=te.receiveShadow,vt.setValue(R,"receiveShadow",te.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&$.environment!==null&&(Bt.envMapIntensity.value=$.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=ab()),Xi&&(vt.setValue(R,"toneMappingExposure",A.toneMappingExposure),ze.needsLights&&op(Bt,ds),we&&ie.fog===!0&&Ne.refreshFogUniforms(Bt,we),Ne.refreshMaterialUniforms(Bt,ie,Oe,me,P.state.transmissionRenderTarget[b.id]),Ta.upload(R,Qc(ze),Bt,F)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ta.upload(R,Qc(ze),Bt,F),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&vt.setValue(R,"center",te.center),vt.setValue(R,"modelViewMatrix",te.modelViewMatrix),vt.setValue(R,"normalMatrix",te.normalMatrix),vt.setValue(R,"modelMatrix",te.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Ft=ie.uniformsGroups;for(let wi=0,ps=Ft.length;wi<ps;wi++){const tu=Ft[wi];Fe.update(tu,yn),Fe.bind(tu,yn)}}return yn}function op(b,$){b.ambientLightColor.needsUpdate=$,b.lightProbe.needsUpdate=$,b.directionalLights.needsUpdate=$,b.directionalLightShadows.needsUpdate=$,b.pointLights.needsUpdate=$,b.pointLightShadows.needsUpdate=$,b.spotLights.needsUpdate=$,b.spotLightShadows.needsUpdate=$,b.rectAreaLights.needsUpdate=$,b.hemisphereLights.needsUpdate=$}function lp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,$,oe){const ie=_.get(b);ie.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),_.get(b.texture).__webglTexture=$,_.get(b.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,$){const oe=_.get(b);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0};const cp=R.createFramebuffer();this.setRenderTarget=function(b,$=0,oe=0){O=b,w=$,B=oe;let ie=null,te=!1,we=!1;if(b){const Re=_.get(b);if(Re.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(R.FRAMEBUFFER,Re.__webglFramebuffer),N.copy(b.viewport),I.copy(b.scissor),j=b.scissorTest,pe.viewport(N),pe.scissor(I),pe.setScissorTest(j),U=-1;return}else if(Re.__webglFramebuffer===void 0)F.setupRenderTarget(b);else if(Re.__hasExternalTextures)F.rebindTextures(b,_.get(b.texture).__webglTexture,_.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const je=b.depthTexture;if(Re.__boundDepthTexture!==je){if(je!==null&&_.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(b)}}const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const Ge=_.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[$])?ie=Ge[$][oe]:ie=Ge[$],te=!0):b.samples>0&&F.useMultisampledRTT(b)===!1?ie=_.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?ie=Ge[oe]:ie=Ge,N.copy(b.viewport),I.copy(b.scissor),j=b.scissorTest}else N.copy(ae).multiplyScalar(Oe).floor(),I.copy(G).multiplyScalar(Oe).floor(),j=ne;if(oe!==0&&(ie=cp),pe.bindFramebuffer(R.FRAMEBUFFER,ie)&&pe.drawBuffers(b,ie),pe.viewport(N),pe.scissor(I),pe.setScissorTest(j),te){const Re=_.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re.__webglTexture,oe)}else if(we){const Re=$;for(let ke=0;ke<b.textures.length;ke++){const Ge=_.get(b.textures[ke]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+ke,Ge.__webglTexture,oe,Re)}}else if(b!==null&&oe!==0){const Re=_.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Re.__webglTexture,oe)}U=-1},this.readRenderTargetPixels=function(b,$,oe,ie,te,we,Le,Re=0){if(!(b&&b.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=_.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){pe.bindFramebuffer(R.FRAMEBUFFER,ke);try{const Ge=b.textures[Re],je=Ge.format,et=Ge.type;if(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Re),!fe.textureFormatReadable(je)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(et)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=b.width-ie&&oe>=0&&oe<=b.height-te&&R.readPixels($,oe,ie,te,Ee.convert(je),Ee.convert(et),we)}finally{const Ge=O!==null?_.get(O).__webglFramebuffer:null;pe.bindFramebuffer(R.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(b,$,oe,ie,te,we,Le,Re=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=_.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke)if($>=0&&$<=b.width-ie&&oe>=0&&oe<=b.height-te){pe.bindFramebuffer(R.FRAMEBUFFER,ke);const Ge=b.textures[Re],je=Ge.format,et=Ge.type;if(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Re),!fe.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,He),R.bufferData(R.PIXEL_PACK_BUFFER,we.byteLength,R.STREAM_READ),R.readPixels($,oe,ie,te,Ee.convert(je),Ee.convert(et),0);const gt=O!==null?_.get(O).__webglFramebuffer:null;pe.bindFramebuffer(R.FRAMEBUFFER,gt);const Rt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await wv(R,Rt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,He),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,we),R.deleteBuffer(He),R.deleteSync(Rt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,$=null,oe=0){const ie=Math.pow(2,-oe),te=Math.floor(b.image.width*ie),we=Math.floor(b.image.height*ie),Le=$!==null?$.x:0,Re=$!==null?$.y:0;F.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,oe,0,0,Le,Re,te,we),pe.unbindTexture()};const up=R.createFramebuffer(),fp=R.createFramebuffer();this.copyTextureToTexture=function(b,$,oe=null,ie=null,te=0,we=0){let Le,Re,ke,Ge,je,et,He,gt,Rt;const Tt=b.isCompressedTexture?b.mipmaps[we]:b.image;if(oe!==null)Le=oe.max.x-oe.min.x,Re=oe.max.y-oe.min.y,ke=oe.isBox3?oe.max.z-oe.min.z:1,Ge=oe.min.x,je=oe.min.y,et=oe.isBox3?oe.min.z:0;else{const Bt=Math.pow(2,-te);Le=Math.floor(Tt.width*Bt),Re=Math.floor(Tt.height*Bt),b.isDataArrayTexture?ke=Tt.depth:b.isData3DTexture?ke=Math.floor(Tt.depth*Bt):ke=1,Ge=0,je=0,et=0}ie!==null?(He=ie.x,gt=ie.y,Rt=ie.z):(He=0,gt=0,Rt=0);const _t=Ee.convert($.format),Wt=Ee.convert($.type);let ze;$.isData3DTexture?(F.setTexture3D($,0),ze=R.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(F.setTexture2DArray($,0),ze=R.TEXTURE_2D_ARRAY):(F.setTexture2D($,0),ze=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,$.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,$.unpackAlignment);const cn=R.getParameter(R.UNPACK_ROW_LENGTH),rt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),yn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ln=R.getParameter(R.UNPACK_SKIP_ROWS),Xi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Tt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Tt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ge),R.pixelStorei(R.UNPACK_SKIP_ROWS,je),R.pixelStorei(R.UNPACK_SKIP_IMAGES,et);const ds=b.isDataArrayTexture||b.isData3DTexture,vt=$.isDataArrayTexture||$.isData3DTexture;if(b.isDepthTexture){const Bt=_.get(b),Ai=_.get($),Ft=_.get(Bt.__renderTarget),wi=_.get(Ai.__renderTarget);pe.bindFramebuffer(R.READ_FRAMEBUFFER,Ft.__webglFramebuffer),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let ps=0;ps<ke;ps++)ds&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_.get(b).__webglTexture,te,et+ps),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_.get($).__webglTexture,we,Rt+ps)),R.blitFramebuffer(Ge,je,Le,Re,He,gt,Le,Re,R.DEPTH_BUFFER_BIT,R.NEAREST);pe.bindFramebuffer(R.READ_FRAMEBUFFER,null),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(te!==0||b.isRenderTargetTexture||_.has(b)){const Bt=_.get(b),Ai=_.get($);pe.bindFramebuffer(R.READ_FRAMEBUFFER,up),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,fp);for(let Ft=0;Ft<ke;Ft++)ds?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Bt.__webglTexture,te,et+Ft):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Bt.__webglTexture,te),vt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ai.__webglTexture,we,Rt+Ft):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ai.__webglTexture,we),te!==0?R.blitFramebuffer(Ge,je,Le,Re,He,gt,Le,Re,R.COLOR_BUFFER_BIT,R.NEAREST):vt?R.copyTexSubImage3D(ze,we,He,gt,Rt+Ft,Ge,je,Le,Re):R.copyTexSubImage2D(ze,we,He,gt,Ge,je,Le,Re);pe.bindFramebuffer(R.READ_FRAMEBUFFER,null),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else vt?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(ze,we,He,gt,Rt,Le,Re,ke,_t,Wt,Tt.data):$.isCompressedArrayTexture?R.compressedTexSubImage3D(ze,we,He,gt,Rt,Le,Re,ke,_t,Tt.data):R.texSubImage3D(ze,we,He,gt,Rt,Le,Re,ke,_t,Wt,Tt):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,we,He,gt,Le,Re,_t,Wt,Tt.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,we,He,gt,Tt.width,Tt.height,_t,Tt.data):R.texSubImage2D(R.TEXTURE_2D,we,He,gt,Le,Re,_t,Wt,Tt);R.pixelStorei(R.UNPACK_ROW_LENGTH,cn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,rt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,yn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ln),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Xi),we===0&&$.generateMipmaps&&R.generateMipmap(ze),pe.unbindTexture()},this.initRenderTarget=function(b){_.get(b).__webglFramebuffer===void 0&&F.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?F.setTextureCube(b,0):b.isData3DTexture?F.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?F.setTexture2DArray(b,0):F.setTexture2D(b,0),pe.unbindTexture()},this.resetState=function(){w=0,B=0,O=null,pe.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const lb=100,cb=40,_n=lb,On=cb;function ub(){let n,e,t,i,s,r;const a={home:[],away:[]};let o=null;function l(w){var U,V;const B=w.clientWidth||((U=w.parentElement)==null?void 0:U.clientWidth)||800,O=w.clientHeight||((V=w.parentElement)==null?void 0:V.clientHeight)||500;n=new ob({canvas:w,antialias:!0}),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.shadowMap.enabled=!0,n.shadowMap.type=Td,n.setSize(B,O),e=new Hv,e.background=new tt(657946),e.fog=new Hc(657946,120,220),h(w),d(),g(),P(),D(),o=()=>re(w),window.addEventListener("resize",o)}function c({homePlayers:w,awayPlayers:B,ball:O,homeColor:U,awayColor:V}){S("home",w,U||"#e74c3c"),S("away",B,V||"#3498db"),A(O)}function u(){n&&e&&t&&n.render(e,t)}function f(){cancelAnimationFrame(i),o&&window.removeEventListener("resize",o),n==null||n.dispose()}function h(w){var U,V;const B=w.clientWidth||((U=w.parentElement)==null?void 0:U.clientWidth)||800,O=w.clientHeight||((V=w.parentElement)==null?void 0:V.clientHeight)||500;t=new hn(55,B/O,.1,400),t.position.set(0,42,52),t.lookAt(0,0,0)}function d(){const w=new fx(16777215,.35);e.add(w),[[-48,28,-18],[48,28,-18],[-48,28,18],[48,28,18]].forEach(([U,V,N])=>{const I=new lx(16774624,.9,160);I.position.set(U,V,N),I.castShadow=!0,I.shadow.mapSize.set(512,512),e.add(I);const j=new lt(new Sr(.4,6,6),new Bi({color:16774624}));j.position.set(U,V,N),e.add(j)});const O=new ux(16777215,.4);O.position.set(0,60,20),e.add(O)}function g(){const w=new Ui({color:2980391,side:ei}),B=new vn(_n,On,20,10);s=new lt(B,w),s.rotation.x=-Math.PI/2,s.receiveShadow=!0,e.add(s),v(),m(),M()}function v(){const B=_n/10;for(let O=0;O<10;O+=2){const U=new vn(B,On),V=new Ui({color:2519072,transparent:!0,opacity:.6}),N=new lt(U,V);N.rotation.x=-Math.PI/2,N.position.set(-_n/2+B*O+B/2,.01,0),e.add(N)}}function m(){const w=new Bi({color:16777215}),B=.05,O=(xe,me,Oe,We,Ye=.18)=>{const ae=Oe-xe,G=We-me,ne=Math.sqrt(ae*ae+G*G),k=Math.atan2(ae,G),J=new vn(Ye,ne),le=new lt(J,w);le.rotation.x=-Math.PI/2,le.rotation.z=k,le.position.set((xe+Oe)/2,B,(me+We)/2),e.add(le)},U=_n/2,V=On/2;O(-U,-V,-U,V),O(U,-V,U,V),O(-U,-V,U,-V),O(-U,V,U,V),O(0,-V,0,V),p(0,0,9.15,B),E(0,0,.35,B,w);const N=16.5,I=40.32/2,j=5.5,W=18.32/2;O(-U,-I,-U+N,-I),O(-U,I,-U+N,I),O(-U+N,-I,-U+N,I),O(-U,-W,-U+j,-W),O(-U,W,-U+j,W),O(-U+j,-W,-U+j,W),O(U,-I,U-N,-I),O(U,I,U-N,I),O(U-N,-I,U-N,I),O(U,-W,U-j,-W),O(U,W,U-j,W),O(U-j,-W,U-j,W),E(-U+11,0,.35,B,w),E(U-11,0,.35,B,w);const de=1;x(-U,-V,de,0,Math.PI/2,B),x(-U,V,de,-Math.PI/2,0,B),x(U,-V,de,Math.PI/2,Math.PI,B),x(U,V,de,Math.PI,3*Math.PI/2,B)}function p(w,B,O,U,V,N=48){const I=[];for(let de=0;de<=N;de++){const xe=de/N*Math.PI*2;I.push(new Y(w+Math.cos(xe)*O,U,B+Math.sin(xe)*O))}const j=new sn().setFromPoints(I),W=new Mf(j,new oc({color:16777215,linewidth:2}));e.add(W)}function x(w,B,O,U,V,N,I,j=12){const W=[];for(let xe=0;xe<=j;xe++){const me=U+(V-U)*(xe/j);W.push(new Y(w+Math.cos(me)*O,N,B+Math.sin(me)*O))}const de=new sn().setFromPoints(W);e.add(new Mf(de,new oc({color:16777215,linewidth:2})))}function E(w,B,O,U,V){const N=new ki(O,O,.02,12),I=new lt(N,V);I.position.set(w,U,B),e.add(I)}function M(){const V=new Sf({color:16777215,metalness:.6,roughness:.3}),N=new Bi({color:16777215,transparent:!0,opacity:.25,side:Wn,wireframe:!0}),I=j=>{const W=j*(_n/2),de=-j,xe=new ki(.1,.1,2.44,8),me=new lt(xe,V);me.position.set(W,2.44/2,-7.32/2),e.add(me);const Oe=me.clone();Oe.position.set(W,2.44/2,7.32/2),e.add(Oe);const We=new ki(.1,.1,7.32,8),Ye=new lt(We,V);Ye.rotation.x=Math.PI/2,Ye.position.set(W,2.44,0),e.add(Ye);const ae=new ki(.1,.1,2.44,8),G=new lt(ae,V);G.position.set(W+de*2.5,2.44/2,-7.32/2),e.add(G);const ne=G.clone();ne.position.set(W+de*2.5,2.44/2,7.32/2),e.add(ne);const k=new vn(7.32,2.44,8,4),J=new lt(k,N);J.rotation.y=Math.PI/2,J.position.set(W+de*2.5,2.44/2,0),e.add(J);const le=new vn(2.5,2.44,4,4);[-1,1].forEach(z=>{const K=new lt(le,N);K.position.set(W+de*2.5/2,2.44/2,z*7.32/2),e.add(K)});const T=new vn(7.32,2.5,8,4),C=new lt(T,N);C.rotation.x=-Math.PI/2,C.position.set(W+de*2.5/2,2.44,0),e.add(C)};I(-1),I(1)}function P(){const w=new Ui({color:1710638}),B=new Ui({color:2894932});[{pos:[0,4,-28],size:[_n+30,8,4]},{pos:[0,4,On/2+8],size:[_n+30,8,4]},{pos:[-58,4,0],size:[4,8,On+16]},{pos:[_n/2+8,4,0],size:[4,8,On+16]}].forEach(({pos:W,size:de})=>{const xe=new us(...de),me=new lt(xe,w);me.position.set(...W),me.castShadow=!0,e.add(me);const Oe=new us(de[0],1,de[2]),We=new lt(Oe,B);We.position.set(W[0],W[1]+de[1]/2+.5,W[2]),e.add(We)});const U=new Ui({color:8947848});[[-60,0,-30],[_n/2+10,0,-30],[-60,0,On/2+10],[_n/2+10,0,On/2+10]].forEach(([W,de,xe])=>{const me=new ki(.4,.6,28,8),Oe=new lt(me,U);Oe.position.set(W,14,xe),e.add(Oe)});const N=new vn(300,200),I=new Ui({color:856343}),j=new lt(N,I);j.rotation.x=-Math.PI/2,j.position.y=-.02,e.add(j)}function D(){const w=new Sr(.8,16,16),B=new Sf({color:16777215,roughness:.6,metalness:0});r=new lt(w,B),r.castShadow=!0,e.add(r);for(let O=0;O<12;O++){const U=new ka(.22,5),V=new Bi({color:1118481}),N=new lt(U,V),I=Math.acos(1-2*(O+.5)/12),j=Math.PI*(1+Math.sqrt(5))*O;N.position.set(.82*Math.sin(I)*Math.cos(j),.82*Math.cos(I),.82*Math.sin(I)*Math.sin(j)),N.lookAt(0,0,0),N.position.multiplyScalar(-1),r.add(N)}}function L(w,B,O){if(!a[w][B]){const U=new ur,V=new ki(.55,.55,1.6,8),N=new Ui({color:new tt(O)}),I=new lt(V,N);I.position.y=.8,I.castShadow=!0,U.add(I);const j=new Sr(.45,12,12),W=new Ui({color:16108455}),de=new lt(j,W);de.position.y=1.9,de.castShadow=!0,U.add(de);const xe=new vn(.5,.4),me=new Bi({color:16777215,side:ei}),Oe=new lt(xe,me);Oe.position.set(0,1,.56),U.add(Oe);const We=new ka(.6,12),Ye=new Bi({color:0,transparent:!0,opacity:.25}),ae=new lt(We,Ye);ae.rotation.x=-Math.PI/2,ae.position.y=.02,U.add(ae),e.add(U),a[w][B]={group:U,bodyMat:N}}return a[w][B]}function S(w,B,O){if(B){B.forEach((U,V)=>{const{group:N,bodyMat:I}=L(w,V,O);I.color.set(O),N.position.set(U.x/2-_n/2,0,U.y/2-On/2),U.vx!==void 0&&(Math.abs(U.vx)>.05||Math.abs(U.vy)>.05)&&(N.rotation.y=Math.atan2(U.vx,U.vy))});for(let U=B.length;U<a[w].length;U++)a[w][U]&&(a[w][U].group.visible=!1)}}function A(w){if(!w||!r)return;const B=w.x/2-_n/2,O=w.y/2-On/2;r.position.set(B,.8,O),w.vx!==void 0&&(r.rotation.z-=w.vx*.08,r.rotation.x+=w.vy*.08);const U=B*.15;t.position.x+=(U-t.position.x)*.04}function re(w){if(!n||!t)return;const B=w.clientWidth,O=w.clientHeight;n.setSize(B,O),t.aspect=B/O,t.updateProjectionMatrix()}return{init:l,updateState:c,render:u,dispose:f}}const fb={__name:"ThreePitch",props:{gameState:{type:Object,default:null},homeColor:{type:String,default:"#e74c3c"},awayColor:{type:String,default:"#3498db"},active:{type:Boolean,default:!1}},setup(n){const e=n,t=ht(null),{init:i,updateState:s,render:r,dispose:a}=ub();let o=null;return Nr(async()=>{await $a();const l=t.value;if(!l)return;await new Promise(u=>requestAnimationFrame(u)),i(l);const c=()=>{o=requestAnimationFrame(c),e.active&&e.gameState&&s({homePlayers:e.gameState.homePlayers,awayPlayers:e.gameState.awayPlayers,ball:e.gameState.ball,homeColor:e.homeColor,awayColor:e.awayColor}),r()};o=requestAnimationFrame(c)}),Ya(()=>{cancelAnimationFrame(o),a()}),(l,c)=>(De(),Ie("canvas",{ref_key:"canvasRef",ref:t,class:"three-pitch"},null,512))}},hb=Ti(fb,[["__scopeId","data-v-1b967c99"]]),jf=17,Zf=28,Bn=2.2,Jf=3.2;function db(){function n({ball:l,awayPlayers:c,homePlayers:u,homeScore:f,awayScore:h,PW:d,PH:g,GOAL_Y1:v,GOAL_Y2:m,GOAL_CY:p,tick:x}){e(l,c,u,d,g,v,m,p),a(l,u,d)}function e(l,c,u,f,h,d,g,v){const p=!!c.find(E=>E.hasBall),x=u.some(E=>E.hasBall);c.forEach((E,M)=>{E.hasBall?t(E,l,c,u,f,h,v):p?i(E,l,M,c,f,h):x?s(E,l,c,u,M):r(E,l,u,M)})}function t(l,c,u,f,h,d,g){const m=g,p=8-l.x,x=m-l.y,E=Math.sqrt(p*p+x*x);if(l.x<40&&Math.abs(l.y-g)<20&&Math.random()<.04){const M=8-l.x,P=m-l.y+(Math.random()-.5)*10,D=Math.sqrt(M*M+P*P);c.vx=M/D*Zf,c.vy=P/D*Zf,l.hasBall=!1;return}if(Math.random()<.012){const M=u.filter(P=>P!==l&&P.x<l.x-5&&!P.hasBall);if(M.length){const P=M[Math.floor(Math.random()*M.length)],D=P.x-l.x,L=P.y-l.y,S=Math.sqrt(D*D+L*L);c.vx=D/S*jf,c.vy=L/S*jf,l.hasBall=!1;return}}if(E>.5){const M=Bn*(l.pace/80);l.x+=p/E*M,l.y+=x/E*M,c.x=l.x,c.y=l.y}}function i(l,c,u,f,h,d){const g=d*.1+u%4*(d*.22),m=30+u%3*25-l.x,p=g-l.y,x=Math.sqrt(m*m+p*p);x>4&&(l.x+=m/x*Bn*.7,l.y+=p/x*Bn*.7)}function s(l,c,u,f,h,d,g){const v=l.baseX+10,m=l.baseY;if(Math.sqrt((l.x-c.x)**2+(l.y-c.y)**2)<15&&h<4){const x=c.x-l.x,E=c.y-l.y,M=Math.sqrt(x*x+E*E);M>.5&&(l.x+=x/M*Jf*(l.pace/80),l.y+=E/M*Jf*(l.pace/80))}else{const x=v-l.x,E=m-l.y,M=Math.sqrt(x*x+E*E);M>3&&(l.x+=x/M*Bn,l.y+=E/M*Bn)}}function r(l,c,u,f){const h=Math.sqrt((l.x-c.x)**2+(l.y-c.y)**2);if(f===0||h<18){const g=c.x-l.x,v=c.y-l.y,m=Math.sqrt(g*g+v*v);if(m>.5){const p=Bn*(l.pace/80);l.x+=g/m*p,l.y+=v/m*p}}}function a(l,c,u,f,h){c.forEach((d,g)=>{if(d.hasBall)return;const v=Math.sqrt((d.x-l.x)**2+(d.y-l.y)**2),m=d.pos==="ST"||d.pos==="LW"||d.pos==="RW"||d.pos==="CAM";if(v<20||m&&l.x>u/2){const p=l.x-d.x,x=l.y-d.y,E=Math.sqrt(p*p+x*x);E>3&&(d.x+=p/E*Bn*.65,d.y+=x/E*Bn*.65)}else{const p=d.baseX-d.x,x=d.baseY-d.y,E=Math.sqrt(p*p+x*x);E>3&&(d.x+=p/E*Bn*.4,d.y+=x/E*Bn*.4)}})}function o({p:l,ball:c,targetPlayers:u,tackleRadius:f}){for(const h of u){if(!h.hasBall)continue;if(Math.sqrt((l.x-h.x)**2+(l.y-h.y)**2)<f&&Math.random()<l.defending/100*.7)return h.hasBall=!1,!0}return!1}return{tickAI:n,checkTackle:o}}const hi=200,pa=80,Qf=30,eh=50,th=40,ma=3,pb=2.5,mb=5,gb=5.5,_b=2.6,vb=4.2,nh=.9,ih=17,sh=28,xb=30,Mb=5400,Sb=60,yb=2700;function Eb(){const{tickAI:n,checkTackle:e}=db(),t=ht(0),i=ht(0),s=ht(0),r=ht(0),a=ht(null),o=ht(""),l=ht([]),c=ht(""),u=ht("select");let f=null,h=[],d=[],g=0,v=0,m=0,p=!1,x=!1,E=null;const M=Lr({up:!1,down:!1,left:!1,right:!1,space:!1,z:!1,x:!1,s:!1}),P={space:!1,z:!1,s:!1},D=(k,J)=>Math.sqrt((k.x-J.x)**2+(k.y-J.y)**2),L=(k,J,le)=>Math.max(J,Math.min(le,k)),S=(k,J)=>k+Math.random()*(J-k);function A(k,J,le,T){t.value=0,i.value=0,s.value=0,x=!1,l.value=[],c.value="",a.value=null,p=!1;const C=[[4,40],[22,10],[22,30],[22,50],[22,70],[60,20],[60,40],[60,60],[85,15],[90,40],[85,65]],z=[[196,40],[178,70],[178,50],[178,30],[178,10],[140,60],[140,40],[140,20],[115,65],[110,40],[115,15]],K=["GK","RB","CB","CB","LB","CM","CM","CM","RW","ST","LW"];h=k.slice(0,11).map((q,se)=>({idx:se,name:q.name,pos:K[se]||"CM",x:C[se][0],y:C[se][1],baseX:C[se][0],baseY:C[se][1],pace:q.pace||75,shooting:q.shooting||70,passing:q.passing||70,defending:q.defending||65,team:"home",hasBall:!1,sprintTimer:0,vx:0,vy:0})),d=J.slice(0,11).map((q,se)=>({idx:se,name:q.name,pos:K[se]||"CM",x:z[se][0],y:z[se][1],baseX:z[se][0],baseY:z[se][1],pace:q.pace||75,shooting:q.shooting||70,passing:q.passing||70,defending:q.defending||65,team:"away",hasBall:!1,sprintTimer:0,vx:0,vy:0})),f={x:100,y:40,vx:0,vy:0},g=We(100,40),v=0,m=0,u.value="match"}function re(){E=setInterval(B,1e3/xb)}function w(){clearInterval(E),E=null}function B(){if(p||u.value!=="match")return;s.value++;const k=s.value;if(r.value=Math.floor(k/Sb),k===yb&&!x){xe();return}if(k>=Mb){me();return}if(m>0){m--;return}O(),I(),j(),n({ball:f,awayPlayers:d,homePlayers:h,homeScore:t.value,awayScore:i.value,PW:hi,PH:pa,GOAL_Y1:Qf,GOAL_Y2:eh,GOAL_CY:th,tick:k}),Oe()}function O(){const k=h[g];if(!k)return;const J=M.x&&v===0,le=J?vb:_b;J&&(v=40);let T=!1;M.up&&(k.y-=le,k.vy=-le,T=!0),M.down&&(k.y+=le,k.vy=le,T=!0),M.left&&(k.x-=le,k.vx=-le,T=!0),M.right&&(k.x+=le,k.vx=le,T=!0),T||(k.vx*=.7,k.vy*=.7),v>0&&v--,k.hasBall&&(f.x=k.x,f.y=k.y,M.space&&!P.space&&(P.space=!0,U(k)),M.z&&!P.z&&(P.z=!0,V(k))),M.s&&!P.s&&(P.s=!0,N()),h.some(C=>C.hasBall)||(g=We(f.x,f.y))}function U(k){const J=h.filter(K=>K!==k&&!K.hasBall);if(!J.length)return;const le=J.sort((K,q)=>q.x-K.x)[0],T=le.x-k.x,C=le.y-k.y,z=Math.sqrt(T*T+C*C)||1;f.vx=T/z*ih,f.vy=C/z*ih,k.hasBall=!1}function V(k){const J=hi-k.x,le=th-k.y+S(-8,8),T=Math.sqrt(J*J+le*le)||1;f.vx=J/T*sh,f.vy=le/T*sh,k.hasBall=!1}function N(){const k=h[g];k&&e({p:k,ball:f,targetPlayers:d,tackleRadius:gb})}function I(){if(h.some(J=>J.hasBall)||d.some(J=>J.hasBall))return;f.x+=f.vx,f.y+=f.vy,f.vx*=nh,f.vy*=nh,f.y<0&&(f.y=0,f.vy*=-.6),f.y>pa&&(f.y=pa,f.vy*=-.6);const k=f.y>Qf&&f.y<eh;if(f.x<0){if(k){W("away");return}f.x=0,f.vx*=-.6}if(f.x>hi){if(k){W("home");return}f.x=hi,f.vx*=-.6}}function j(){const k=[...h,...d];if(!k.some(le=>le.hasBall)){for(const le of k)if(D(le,f)<mb+pb&&!k.some(T=>T!==le&&T.hasBall)){le.hasBall=!0,f.vx=0,f.vy=0,f.x=le.x,f.y=le.y,le.team==="home"&&(g=le.idx);return}}}function W(k){if(k==="home"){t.value++;const J=h.find(le=>le.pos==="ST"||le.pos==="CAM");J&&l.value.push({player:J.name,minute:r.value,team:"home"})}else{i.value++;const J=d.find(le=>le.pos==="ST"||le.pos==="CAM");J&&l.value.push({player:J.name,minute:r.value,team:"away"})}m=60,a.value={title:k==="home"?"⚽ GOAL!":"⚽ They Score!",subtitle:`${t.value} – ${i.value}`,btn:"Kick Off",action:de},o.value=k==="home"?"overlay-goal":"overlay-concede"}function de(){a.value=null,m=0,h.forEach((k,J)=>{var T,C;const le=[[4,40],[22,10],[22,30],[22,50],[22,70],[60,20],[60,40],[60,60],[85,15],[90,40],[85,65]];k.x=((T=le[J])==null?void 0:T[0])??k.baseX,k.y=((C=le[J])==null?void 0:C[1])??k.baseY,k.hasBall=!1,k.vx=0,k.vy=0}),d.forEach((k,J)=>{var T,C;const le=[[196,40],[178,70],[178,50],[178,30],[178,10],[140,60],[140,40],[140,20],[115,65],[110,40],[115,15]];k.x=((T=le[J])==null?void 0:T[0])??k.baseX,k.y=((C=le[J])==null?void 0:C[1])??k.baseY,k.hasBall=!1,k.vx=0,k.vy=0}),f.x=100,f.y=40,f.vx=0,f.vy=0,g=We(100,40)}function xe(){x=!0,p=!0,a.value={title:"Half Time",subtitle:`${t.value} – ${i.value}`,btn:"Second Half",action:()=>{a.value=null,p=!1,h.forEach(k=>{k.x=hi-k.x,k.baseX=hi-k.baseX}),d.forEach(k=>{k.x=hi-k.x,k.baseX=hi-k.baseX}),de()}},o.value="overlay-halftime"}function me(){w();const k=h.sort((J,le)=>le.shooting-J.shooting)[0];c.value=(k==null?void 0:k.name)??"",u.value="fulltime"}function Oe(){[...h,...d].forEach(k=>{k.x=L(k.x,ma,hi-ma),k.y=L(k.y,ma,pa-ma)})}function We(k,J){let le=0,T=1/0;return h.forEach((C,z)=>{const K=Math.sqrt((C.x-k)**2+(C.y-J)**2);K<T&&(T=K,le=z)}),le}function Ye(k){var J,le;switch(k.code){case"ArrowUp":M.up=!0;break;case"ArrowDown":M.down=!0;break;case"ArrowLeft":M.left=!0;break;case"ArrowRight":M.right=!0;break;case"Space":P.space||(M.space=!0,P.space=!0);break;case"KeyZ":P.z||(M.z=!0,P.z=!0);break;case"KeyX":M.x=!0;break;case"KeyS":P.s||(M.s=!0,P.s=!0);break;case"Escape":G();break;case"Enter":(le=(J=a.value)==null?void 0:J.action)==null||le.call(J);break;default:return}k.preventDefault()}function ae(k){switch(k.code){case"ArrowUp":M.up=!1;break;case"ArrowDown":M.down=!1;break;case"ArrowLeft":M.left=!1;break;case"ArrowRight":M.right=!1;break;case"Space":M.space=!1,P.space=!1;break;case"KeyZ":M.z=!1,P.z=!1;break;case"KeyX":M.x=!1;break;case"KeyS":M.s=!1,P.s=!1;break}}function G(){u.value==="match"&&(p=!p,p?(a.value={title:"Paused",btn:"Resume",action:()=>{a.value=null,p=!1}},o.value="overlay-pause"):a.value=null)}function ne(){return{homePlayers:h,awayPlayers:d,ball:f}}return{homeScore:t,awayScore:i,gameTick:s,gameMinDisplay:r,overlay:a,overlayClass:o,scorers:l,motmPlayer:c,phase:u,initMatch:A,startLoop:re,stopLoop:w,onKeyDown:Ye,onKeyUp:ae,togglePause:G,getGameState:ne}}const bb={class:"play-view"},Tb={key:0,class:"screen select-screen"},Ab={class:"league-tabs"},wb=["onClick"],Rb={class:"team-pickers"},Cb={class:"picker-col"},Pb={class:"club-grid"},Db=["disabled","onClick"],Ib={class:"badge-letter"},Lb={class:"club-info"},Ub={class:"club-name"},Nb={class:"club-prestige"},Fb={class:"vs-col"},Ob={key:0,class:"selected-preview home-preview"},Bb={class:"preview-name"},kb={key:1,class:"selected-preview away-preview"},Vb={class:"preview-name"},zb=["disabled"],Gb={class:"picker-col"},Hb={class:"club-grid"},Wb=["disabled","onClick"],Xb={class:"badge-letter"},$b={class:"club-info"},qb={class:"club-name"},Yb={class:"club-prestige"},Kb={class:"scorebar"},jb={class:"sb-club"},Zb={class:"sb-team"},Jb={class:"sb-center"},Qb={class:"sb-score"},eT={class:"sb-time"},tT={class:"sb-club"},nT={class:"sb-team away"},iT={class:"canvas-wrap"},sT={class:"overlay-content"},rT={class:"overlay-title"},aT={key:0,class:"overlay-sub"},oT={key:2,class:"screen ft-screen"},lT={class:"ft-card"},cT={class:"ft-badges"},uT={class:"ft-score-big"},fT={class:"ft-teams"},hT={class:"ft-result"},dT={key:0,class:"ft-scorers"},pT={class:"ft-min"},mT={key:1,class:"ft-motm"},gT={__name:"PlayView",setup(n){const e=Pc(),t=ht([]),i=ht(""),s=ht(""),r=ht(""),a=ht(""),o=ht("#e74c3c"),l=ht("#3498db"),c=["All","Premier League","La Liga","Bundesliga","Serie A","Ligue 1"],u=ht("All"),f=yt(()=>u.value==="All"?t.value:t.value.filter(V=>V.league===u.value));function h(V){return t.value.find(N=>N.name===V)}const{homeScore:d,awayScore:g,gameMinDisplay:v,overlay:m,overlayClass:p,scorers:x,motmPlayer:E,phase:M,initMatch:P,startLoop:D,stopLoop:L,onKeyDown:S,onKeyUp:A,getGameState:re}=Eb(),w=yt(()=>re());Nr(async()=>{window.addEventListener("keydown",S),window.addEventListener("keyup",A);try{const V=await fetch("/api/clubs");t.value=await V.json()}catch{}}),Ya(()=>{window.removeEventListener("keydown",S),window.removeEventListener("keyup",A),L()});function B(){L(),e.push("/")}function O(){L(),M.value="select"}async function U(){if(!(!i.value||!s.value))try{const[V,N]=await Promise.all([fetch(`/api/teams/${encodeURIComponent(i.value)}`),fetch(`/api/teams/${encodeURIComponent(s.value)}`)]),I=await V.json(),j=await N.json();r.value=I.club.name,a.value=j.club.name,o.value=I.club.primary_color||"#e74c3c",l.value=j.club.primary_color||"#3498db",P(I.players,j.players,r.value,a.value),D()}catch{alert("Could not load team data — is the backend running?")}}return(V,N)=>{var I,j;return De(),Ie("div",bb,[at(M)==="select"?(De(),Ie("div",Tb,[X("header",{class:"screen-header"},[X("button",{class:"back-btn",onClick:B},"← Back"),N[2]||(N[2]=X("h1",null,"Play the Game",-1)),N[3]||(N[3]=X("p",null,"Choose your club and opponent",-1))]),X("div",Ab,[(De(),Ie(Et,null,pn(c,W=>X("button",{key:W,class:Mn(["league-tab",{active:u.value===W}]),onClick:de=>u.value=W},Ue(W),11,wb)),64))]),X("div",Rb,[X("div",Cb,[N[4]||(N[4]=X("h2",{class:"picker-title"},"🎮 Your Club",-1)),X("div",Pb,[(De(!0),Ie(Et,null,pn(f.value,W=>(De(),Ie("button",{key:W.name,class:Mn(["club-btn",{selected:i.value===W.name,blocked:s.value===W.name}]),disabled:s.value===W.name,style:kt(i.value===W.name?{background:W.primary_color,color:W.secondary_color,borderColor:W.secondary_color}:{}),onClick:de=>i.value=W.name},[X("span",{class:"club-badge",style:kt({background:W.primary_color})},[X("span",Ib,Ue(W.name[0]),1)],4),X("span",Lb,[X("span",Ub,Ue(W.name),1),X("span",Nb,Ue("★".repeat(Math.ceil(W.prestige/2))),1)])],14,Db))),128))])]),X("div",Fb,[i.value?(De(),Ie("div",Ob,[X("div",{class:"preview-badge",style:kt({background:(I=h(i.value))==null?void 0:I.primary_color})},Ue(i.value[0]),5),X("div",Bb,Ue(i.value),1)])):Vt("",!0),N[5]||(N[5]=X("div",{class:"vs-badge"},"VS",-1)),s.value?(De(),Ie("div",kb,[X("div",{class:"preview-badge",style:kt({background:(j=h(s.value))==null?void 0:j.primary_color})},Ue(s.value[0]),5),X("div",Vb,Ue(s.value),1)])):Vt("",!0),X("button",{class:"kickoff-btn",disabled:!i.value||!s.value,onClick:U}," ⚽ Kick Off ",8,zb)]),X("div",Gb,[N[6]||(N[6]=X("h2",{class:"picker-title"},"🤖 Opponent",-1)),X("div",Hb,[(De(!0),Ie(Et,null,pn(f.value,W=>(De(),Ie("button",{key:W.name,class:Mn(["club-btn",{selected:s.value===W.name,blocked:i.value===W.name}]),disabled:i.value===W.name,style:kt(s.value===W.name?{background:W.primary_color,color:W.secondary_color,borderColor:W.secondary_color}:{}),onClick:de=>s.value=W.name},[X("span",{class:"club-badge",style:kt({background:W.primary_color})},[X("span",Xb,Ue(W.name[0]),1)],4),X("span",$b,[X("span",qb,Ue(W.name),1),X("span",Yb,Ue("★".repeat(Math.ceil(W.prestige/2))),1)])],14,Wb))),128))])])])])):at(M)==="match"?(De(),Ie("div",{key:1,class:"match-wrapper",tabindex:"0",onKeydown:N[1]||(N[1]=Ig(()=>{},["prevent"]))},[X("div",Kb,[X("div",jb,[X("span",{class:"sb-dot",style:kt({background:o.value})},null,4),X("span",Zb,Ue(r.value),1)]),X("div",Jb,[X("span",Qb,Ue(at(d))+" – "+Ue(at(g)),1),X("span",eT,Ue(at(v))+"'",1)]),X("div",tT,[X("span",nT,Ue(a.value),1),X("span",{class:"sb-dot",style:kt({background:l.value})},null,4)])]),X("div",iT,[Ct(hb,{gameState:w.value,homeColor:o.value,awayColor:l.value,active:at(M)==="match"},null,8,["gameState","homeColor","awayColor","active"]),at(m)?(De(),Ie("div",{key:0,class:Mn(["overlay",at(p)])},[X("div",sT,[X("div",rT,Ue(at(m).title),1),at(m).subtitle?(De(),Ie("div",aT,Ue(at(m).subtitle),1)):Vt("",!0),at(m).btn?(De(),Ie("button",{key:1,class:"overlay-btn",onClick:N[0]||(N[0]=(...W)=>at(m).action&&at(m).action(...W))},Ue(at(m).btn),1)):Vt("",!0)])],2)):Vt("",!0)]),N[7]||(N[7]=ul('<div class="controls-bar" data-v-3b3d57a1><span data-v-3b3d57a1><kbd data-v-3b3d57a1>↑↓←→</kbd> Move</span><span data-v-3b3d57a1><kbd data-v-3b3d57a1>SPC</kbd> Pass</span><span data-v-3b3d57a1><kbd data-v-3b3d57a1>Z</kbd> Shoot</span><span data-v-3b3d57a1><kbd data-v-3b3d57a1>X</kbd> Sprint</span><span data-v-3b3d57a1><kbd data-v-3b3d57a1>S</kbd> Tackle</span><span data-v-3b3d57a1><kbd data-v-3b3d57a1>Esc</kbd> Pause</span></div>',1))],32)):at(M)==="fulltime"?(De(),Ie("div",oT,[X("div",lT,[X("div",cT,[X("div",{class:"ft-badge",style:kt({background:o.value})},Ue(r.value[0]),5),X("div",uT,Ue(at(d))+" – "+Ue(at(g)),1),X("div",{class:"ft-badge",style:kt({background:l.value})},Ue(a.value[0]),5)]),X("div",fT,Ue(r.value)+" vs "+Ue(a.value),1),X("div",hT,Ue(at(d)>at(g)?"🏆 Victory!":at(d)<at(g)?"😔 Defeat":"🤝 Draw"),1),at(x).length?(De(),Ie("div",dT,[N[8]||(N[8]=X("h3",null,"Goals",-1)),(De(!0),Ie(Et,null,pn(at(x),W=>(De(),Ie("div",{key:W.player+W.minute,class:"ft-scorer"},[Fs(" ⚽ "+Ue(W.player)+" ",1),X("span",pT,Ue(W.minute)+"'",1),X("span",{class:"ft-team-tag",style:kt({background:W.team==="home"?o.value:l.value})},Ue(W.team==="home"?r.value:a.value),5)]))),128))])):Vt("",!0),at(E)?(De(),Ie("div",mT,[N[9]||(N[9]=Fs(" 🏅 Man of the Match: ",-1)),X("strong",null,Ue(at(E)),1)])):Vt("",!0),X("div",{class:"ft-actions"},[X("button",{class:"back-btn",onClick:O},"🔄 Rematch"),X("button",{class:"back-btn",onClick:B},"🏠 Main Menu")])])])):Vt("",!0)])}}},_T=Ti(gT,[["__scopeId","data-v-3b3d57a1"]]),vT={class:"ev-minute"},xT={class:"ev-icon"},MT={class:"ev-team"},ST={class:"ev-player"},yT={key:0,class:"ev-detail"},ET={key:0,class:"empty"},bT={__name:"EventFeed",props:{events:{type:Array,default:()=>[]}},setup(n){const e=n,t=ht(null),i={goal:"⚽",yellow:"🟨",red:"🟥",save:"🧤",miss:"💨",substitution:"🔄",injury:"🤕"};function s(r){return r?r.split(" ").slice(0,2).join(" "):""}return mr(()=>e.events.length,async()=>{await $a(),t.value&&(t.value.scrollTop=t.value.scrollHeight)}),(r,a)=>(De(),Ie("div",{class:"event-feed",ref_key:"feedEl",ref:t},[(De(!0),Ie(Et,null,pn(n.events,(o,l)=>(De(),Ie("div",{key:l,class:Mn(["event-row",o.type])},[X("span",vT,Ue(o.minute)+"'",1),X("span",xT,Ue(i[o.type]||"•"),1),X("span",MT,Ue(s(o.team)),1),X("span",ST,Ue(o.player),1),o.detail?(De(),Ie("span",yT,"— "+Ue(o.detail),1)):Vt("",!0)],2))),128)),n.events.length===0?(De(),Ie("div",ET,"Waiting for kick-off…")):Vt("",!0)],512))}},TT=Ti(bT,[["__scopeId","data-v-8a17ad14"]]),AT={class:"postmatch"},wT={class:"score-banner"},RT={class:"team-block"},CT={class:"team-name"},PT={class:"score-center"},DT={class:"final-score"},IT={class:"team-block away"},LT={class:"team-name"},UT={key:0,class:"section"},NT={class:"scorers-list"},FT={class:"scorer-name"},OT={class:"scorer-minute"},BT={class:"section stats-grid"},kT={class:"section ratings-grid"},VT={class:"ratings-cols"},zT={class:"ratings-col"},GT={class:"r-name"},HT={class:"r-bar-wrap"},WT={class:"r-val"},XT={class:"ratings-col"},$T={class:"r-name"},qT={class:"r-bar-wrap"},YT={class:"r-val"},KT={key:1,class:"section motm-section"},jT={class:"motm-card"},ZT={class:"motm-face"},JT=["src"],QT={key:1,viewBox:"0 0 80 80",class:"motm-svg"},eA={class:"motm-info"},tA={class:"motm-name"},nA={class:"motm-rating"},iA={components:{StatBar:{props:["label","home","away","unit","total"],template:`
        <div class="stat-bar-row">
          <span class="sb-val">{{ home }}{{ unit || '' }}</span>
          <span class="sb-label">{{ label }}</span>
          <span class="sb-val away">{{ away }}{{ unit || '' }}</span>
          <div class="sb-track">
            <div class="sb-fill-home" :style="{ width: homeW + '%' }"></div>
            <div class="sb-fill-away" :style="{ width: awayW + '%' }"></div>
          </div>
        </div>
      `,computed:{homeW(){const n=this.total||this.home+this.away;return n?this.home/n*100:50},awayW(){const n=this.total||this.home+this.away;return n?this.away/n*100:50}}}}},sA=Object.assign(iA,{__name:"PostMatch",props:{result:{type:Object,required:!0}},emits:["back"],setup(n){const e=n,t=ht(!0),i=yt(()=>[...e.result.scorers||[]].sort((o,l)=>o.minute-l.minute)),s=yt(()=>e.result.ratings.filter(o=>o.team==="home").slice(0,5)),r=yt(()=>e.result.ratings.filter(o=>o.team==="away").slice(0,5));function a(o){return o>=8?"#27ae60":o>=6.5?"#f39c12":"#e74c3c"}return(o,l)=>{var u;const c=Gh("StatBar");return De(),Ie("div",AT,[X("div",wT,[X("div",RT,[X("span",CT,Ue(n.result.home),1)]),X("div",PT,[X("span",DT,Ue(n.result.score.home)+" – "+Ue(n.result.score.away),1),l[2]||(l[2]=X("span",{class:"full-time-label"},"Full Time",-1))]),X("div",IT,[X("span",LT,Ue(n.result.away),1)])]),i.value.length?(De(),Ie("div",UT,[l[3]||(l[3]=X("h3",{class:"section-title"},"⚽ Goal Scorers",-1)),X("div",NT,[(De(!0),Ie(Et,null,pn(i.value,f=>(De(),Ie("div",{key:f.player+f.minute,class:"scorer-row"},[X("span",{class:Mn(["scorer-team-dot",f.team])},null,2),X("span",FT,Ue(f.player),1),X("span",OT,Ue(f.minute)+"'",1)]))),128))])])):Vt("",!0),X("div",BT,[l[4]||(l[4]=X("h3",{class:"section-title"},"📊 Match Stats",-1)),Ct(c,{label:"Possession",home:n.result.possession.home,away:n.result.possession.away,unit:"%"},null,8,["home","away"]),Ct(c,{label:"Shots",home:n.result.shots.home,away:n.result.shots.away,total:n.result.shots.home+n.result.shots.away},null,8,["home","away","total"]),Ct(c,{label:"On Target",home:n.result.shots_on_target.home,away:n.result.shots_on_target.away,total:n.result.shots.home+n.result.shots.away},null,8,["home","away","total"])]),X("div",kT,[l[5]||(l[5]=X("h3",{class:"section-title"},"⭐ Player Ratings",-1)),X("div",VT,[X("div",zT,[X("h4",null,Ue(n.result.home),1),(De(!0),Ie(Et,null,pn(s.value,f=>(De(),Ie("div",{key:f.player,class:"rating-row"},[X("span",GT,Ue(f.player),1),X("div",HT,[X("div",{class:"r-bar",style:kt({width:f.rating/10*100+"%",background:a(f.rating)})},null,4)]),X("span",WT,Ue(f.rating.toFixed(1)),1)]))),128))]),X("div",XT,[X("h4",null,Ue(n.result.away),1),(De(!0),Ie(Et,null,pn(r.value,f=>(De(),Ie("div",{key:f.player,class:"rating-row"},[X("span",$T,Ue(f.player),1),X("div",qT,[X("div",{class:"r-bar",style:kt({width:f.rating/10*100+"%",background:a(f.rating)})},null,4)]),X("span",YT,Ue(f.rating.toFixed(1)),1)]))),128))])])]),(u=n.result.motm)!=null&&u.player?(De(),Ie("div",KT,[l[7]||(l[7]=X("h3",{class:"section-title"},"🏅 Man of the Match",-1)),X("div",jT,[X("div",ZT,[t.value&&n.result.motm.face_url?(De(),Ie("img",{key:0,src:n.result.motm.face_url,onError:l[0]||(l[0]=f=>t.value=!1),class:"motm-img"},null,40,JT)):(De(),Ie("svg",QT,[...l[6]||(l[6]=[X("circle",{cx:"40",cy:"28",r:"18",fill:"rgba(255,215,0,.5)"},null,-1),X("ellipse",{cx:"40",cy:"72",rx:"26",ry:"20",fill:"rgba(255,215,0,.5)"},null,-1)])]))]),X("div",eA,[X("div",tA,Ue(n.result.motm.player),1),X("div",nA,Ue(n.result.motm.rating.toFixed(1))+" / 10",1)])])])):Vt("",!0),X("button",{class:"back-btn",onClick:l[1]||(l[1]=f=>o.$emit("back"))},"← Back to Menu")])}}}),rA=Ti(sA,[["__scopeId","data-v-c276b6ca"]]),aA={class:"watch-view"},oA={key:0,class:"screen select-screen"},lA={class:"team-pickers"},cA={class:"picker-col"},uA={class:"club-grid"},fA=["disabled","onClick"],hA={class:"club-name"},dA={class:"club-league"},pA={class:"vs-col"},mA=["disabled"],gA={class:"picker-col"},_A={class:"club-grid"},vA=["disabled","onClick"],xA={class:"club-name"},MA={class:"club-league"},SA={key:1,class:"screen match-screen"},yA={class:"match-scorebar"},EA={class:"team-name"},bA={class:"scorebox"},TA={class:"team-name"},AA={class:"feed-wrap"},wA={class:"match-footer"},RA={class:"progress-bar"},CA={class:"progress-label"},PA={key:2,class:"screen"},DA={key:3,class:"screen loading-screen"},IA={__name:"WatchView",setup(n){const e=Pc(),t=ht([]),i=ht(""),s=ht(""),r=ht("select"),a=ht(null),o=ht([]),l=yt(()=>a.value?o.value.length/a.value.events.length*100:0);Nr(async()=>{try{const h=await fetch("/api/clubs");t.value=await h.json()}catch{}});function c(){e.push("/")}async function u(){if(!(!i.value||!s.value)){r.value="loading";try{const h=await fetch("/api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({home:i.value,away:s.value})});a.value=await h.json(),r.value="match",f()}catch{r.value="select",alert("Simulation failed — is the backend running?")}}}function f(){const h=a.value.events;let d=0;const g=setInterval(()=>{if(d>=h.length){clearInterval(g),setTimeout(()=>{r.value="postmatch"},1200);return}o.value.push(h[d++])},90)}return(h,d)=>(De(),Ie("div",aA,[r.value==="select"?(De(),Ie("div",oA,[X("header",{class:"screen-header"},[X("button",{class:"back-btn",onClick:c},"← Back"),d[0]||(d[0]=X("h1",null,"Watch the Play",-1)),d[1]||(d[1]=X("p",null,"Pick two clubs and watch the simulation unfold",-1))]),X("div",lA,[X("div",cA,[d[2]||(d[2]=X("h2",{class:"picker-title"},"🏠 Home Team",-1)),X("div",uA,[(De(!0),Ie(Et,null,pn(t.value,g=>(De(),Ie("button",{key:g.name,class:Mn(["club-btn",{selected:i.value===g.name,blocked:s.value===g.name}]),disabled:s.value===g.name,onClick:v=>i.value=g.name},[X("span",hA,Ue(g.name),1),X("span",dA,Ue(g.league),1)],10,fA))),128))])]),X("div",pA,[d[3]||(d[3]=X("div",{class:"vs-badge"},"VS",-1)),X("button",{class:"kickoff-btn",disabled:!i.value||!s.value,onClick:u}," Kick Off ⚽ ",8,mA)]),X("div",gA,[d[4]||(d[4]=X("h2",{class:"picker-title"},"✈️ Away Team",-1)),X("div",_A,[(De(!0),Ie(Et,null,pn(t.value,g=>(De(),Ie("button",{key:g.name,class:Mn(["club-btn",{selected:s.value===g.name,blocked:i.value===g.name}]),disabled:i.value===g.name,onClick:v=>s.value=g.name},[X("span",xA,Ue(g.name),1),X("span",MA,Ue(g.league),1)],10,vA))),128))])])])])):r.value==="match"?(De(),Ie("div",SA,[X("div",yA,[X("span",EA,Ue(a.value.home),1),X("span",bA,Ue(a.value.score.home)+" – "+Ue(a.value.score.away),1),X("span",TA,Ue(a.value.away),1)]),X("div",AA,[Ct(TT,{events:o.value},null,8,["events"])]),X("div",wA,[X("div",RA,[X("div",{class:"progress-fill",style:kt({width:l.value+"%"})},null,4)]),X("span",CA,Ue(o.value.length)+" / "+Ue(a.value.events.length)+" events",1)])])):r.value==="postmatch"?(De(),Ie("div",PA,[Ct(rA,{result:a.value,onBack:c},null,8,["result"])])):(De(),Ie("div",DA,[...d[5]||(d[5]=[X("div",{class:"spinner"},null,-1),X("p",null,"Simulating match…",-1)])]))]))}},LA=Ti(IA,[["__scopeId","data-v-67296064"]]),UA=$_({history:b_(),routes:[{path:"/",component:q0},{path:"/play",component:_T},{path:"/watch",component:LA}]});Ng(Vg).use(UA).mount("#app");
