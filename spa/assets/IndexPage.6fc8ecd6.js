import{M as a,N as i,O as u,Z as e,U as t,S as r,E as l,a1 as d}from"./index.1ae5be3b.js";import{u as c,Q as _}from"./counter.ee0a1ae4.js";import"./render.651c6d66.js";const m={class:"counter"},p=t("hr",null,null,-1),v={class:"counter"},f={class:"buttons"},x={class:"modifier"},g=t("h3",null,"Change counter:",-1),B={__name:"IndexPage",setup(h){const n=c();return(C,o)=>(a(),i(e(_),{class:"flex flex-center"},{default:u(()=>[t("div",m,r(e(n).counter),1),p,t("div",v,r(e(n).evenOrOdd),1),t("div",f,[t("button",{onClick:o[0]||(o[0]=(...s)=>e(n).decrement&&e(n).decrement(...s))},"-"),t("button",{onClick:o[1]||(o[1]=(...s)=>e(n).increment&&e(n).increment(...s))},"+")]),t("div",x,[g,l(t("input",{type:"number","onUpdate:modelValue":o[2]||(o[2]=s=>e(n).counter=s)},null,512),[[d,e(n).counter]])])]),_:1}))}};export{B as default};