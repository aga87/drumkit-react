(this["webpackJsonpdrumkit-react"]=this["webpackJsonpdrumkit-react"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/hihat.9d173df5.mp3"},function(e,a,t){e.exports=t.p+"static/media/chip1.70e1ab67.mp3"},function(e,a,t){e.exports=t.p+"static/media/chip2.ffe40d94.mp3"},function(e,a,t){e.exports=t.p+"static/media/snare.b839dc59.mp3"},function(e,a,t){e.exports=t.p+"static/media/tom1.964cbd8b.mp3"},function(e,a,t){e.exports=t.p+"static/media/tom2.769cd2a9.mp3"},function(e,a,t){e.exports=t.p+"static/media/bass.223e54e0.mp3"},function(e,a,t){e.exports=t.p+"static/media/kick.a6019919.mp3"},function(e,a,t){e.exports=t.p+"static/media/2snare.3870bac2.mp3"},function(e,a,t){e.exports=t.p+"static/media/2hihat.742fda79.mp3"},function(e,a,t){e.exports=t.p+"static/media/2tom1.22236d02.mp3"},function(e,a,t){e.exports=t.p+"static/media/2tom2.97a4f09b.mp3"},function(e,a,t){e.exports=t.p+"static/media/2cymbal1.82f29e8f.mp3"},function(e,a,t){e.exports=t.p+"static/media/2cymbal2.01a6d43b.mp3"},function(e,a,t){e.exports=t.p+"static/media/2kick.c91023f6.mp3"},function(e,a,t){e.exports=t.p+"static/media/tools.2a13307c.svg"},function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(3),c=t.n(o),r=(t(25),t(1));var m=function(e){e.currentTime=0,e.play()};var s=function(e){var a,t,o=Object(n.useState)(!1),c=Object(r.a)(o,2),s=c[0],l=c[1],u=Object(n.useRef)(null),d=e.name,p=e.keyShortcut,k=e.audioFile,f=e.skin;function b(e){e.key===p&&(e.preventDefault(),m(u.current),l(!0))}function y(e){e.key===p&&(e.preventDefault(),l(!1))}return Object(n.useEffect)((function(){window.addEventListener("keydown",b),window.addEventListener("keyup",y)})),i.a.createElement("div",null,i.a.createElement("button",{type:"button",className:(a=s,t=f,a?"purple"!==t?"o-btn o-btn--".concat(t," is-active"):"o-btn is-active":"purple"!==t?"o-btn o-btn--".concat(t):"o-btn"),"aria-keyshortcuts":p,onClick:function(){m(u.current)}},d,i.a.createElement("kbd",{className:"o-btn__kbd t2","aria-hidden":"true"},p.toUpperCase())),i.a.createElement("audio",{src:k,ref:u},"Your browser does not support audio."))};var l=function(e){var a=e.soundData,t=e.skin,n=a.map((function(e){return i.a.createElement("li",{className:"l-sound-btn-list__item",key:e.key},i.a.createElement(s,{name:e.name,keyShortcut:e.key,audioFile:e.audio,skin:t}))}));return i.a.createElement("ul",{className:"l-sound-btn-list",role:"presentation"},n)},u=t(4),d=t.n(u),p=t(5),k=t.n(p),f=t(6),b=t.n(f),y=t(7),E=t.n(y),v=t(8),h=t.n(v),x=t(9),_=t.n(x),N=t(10),g=t.n(N),j=t(11),w=t.n(j),O=t(12),S=t.n(O),C=t(13),D=t.n(C),K=t(14),T=t.n(K),F=t(15),z=t.n(F),B=t(16),H=t.n(B),J=t(17),L=t.n(J),M=t(18),G=t.n(M),I=t(19),P=t.n(I);var R=function(){var e=Object(n.useState)("drumkit1"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)("purple"),m=Object(r.a)(c,2),s=m[0],u=m[1],p=[{name:"Hi-hat",key:"a",audio:d.a},{name:"Chip1",key:"s",audio:k.a},{name:"Chip2",key:"d",audio:b.a},{name:"Snare",key:"f",audio:E.a},{name:"Tom1",key:"h",audio:h.a},{name:"Tom2",key:"j",audio:_.a},{name:"Bass",key:"k",audio:g.a},{name:"Kick",key:"l",audio:w.a}],f=[{name:"Snare",key:"a",audio:S.a},{name:"Hi-hat",key:"s",audio:D.a},{name:"Tom1",key:"d",audio:T.a},{name:"Tom2",key:"f",audio:z.a},{name:"Cymbal1",key:"h",audio:H.a},{name:"Cymbal2",key:"j",audio:L.a},{name:"Kick",key:"k",audio:G.a}];return i.a.createElement("div",null,i.a.createElement("main",{className:"c-drumkit",role:"main"},i.a.createElement("h1",{className:"c-drumkit__heading t1"},"Drum Kit"),i.a.createElement(l,{soundData:"drumkit1"===t?p:f,skin:s})),i.a.createElement("div",{className:"c-toolbar l-toolbar-flex l-wrapper",role:"toolbar"},i.a.createElement("div",{className:"l-toolbar-flex__item"},i.a.createElement("img",{src:P.a,className:"c-toolbar__svg-icon",alt:"","aria-hidden":"true"})),i.a.createElement("div",{className:"l-toolbar-flex__item"},i.a.createElement("label",{className:"c-toolbar__label s1",htmlFor:"modes"},"Mode"),i.a.createElement("select",{className:"o-select",id:"modes",size:"1",onChange:function(e){o(e.target.value)}},i.a.createElement("option",{value:"drumkit1",selected:"drumkit1"===t},"Drum Kit 1"),i.a.createElement("option",{value:"drumkit2",selected:"drumkit2"===t},"Drum Kit 2"))),i.a.createElement("div",{className:"l-toolbar-flex__item"},i.a.createElement("label",{className:"c-toolbar__label s1",htmlFor:"skins"},"Skin"),i.a.createElement("select",{className:"o-select",id:"skins",size:"1",onChange:function(e){u(e.target.value)}},i.a.createElement("option",{value:"purple",selected:"purple"===s},"Purple"),i.a.createElement("option",{value:"orange",selected:"orange"===s},"Orange"),i.a.createElement("option",{value:"grey",selected:"grey"===s},"Grey")))))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null)),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.37bf7602.chunk.js.map