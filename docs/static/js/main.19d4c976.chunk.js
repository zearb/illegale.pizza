(this.webpackJsonpillegale=this.webpackJsonpillegale||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(29),a(22)),i=a(1),s=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"carta-illegale.jpg",download:"Carta-IlegallePizza-Octubre2020"},"Carta")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://wa.me/51968332202",rel:"noopener noreferrer"},"Pedidos"))))},u=a(11),m=a.n(u),d=a(20),f=a(6),E=function(e){return r.a.createElement("div",{className:"card-info__content"},r.a.createElement("img",{src:"isotipo-blanco-fondo-negro.svg",alt:"icon-card-info"}),r.a.createElement("p",{className:"info-puntos"},"Hola! ",e.nombre,",",r.a.createElement("br",null),"tienes ",r.a.createElement("span",null,e.pizzapuntos)," pizzaPuntos."),r.a.createElement("p",{className:"data-extra"},"Acumula tus puntos y llevate por: ",r.a.createElement("br",null),"- 4 pizzaPuntos: 1 pizza personal gratis!! ",r.a.createElement("br",null),"- 8 pizzaPuntos:  1 pizza familiar gratis!! ",r.a.createElement("br",null)))},p=function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:"logo-white.svg",alt:"logo"}))},b=a(9),g=function(e){var t=e.disabled,a=e.loading,n=e.children,l=(e.showIconRight,e.className),c=Object(b.a)(e,["disabled","loading","children","showIconRight","className"]);return r.a.createElement("button",Object.assign({disabled:t,className:"btn-style ".concat(l)},c),a&&r.a.createElement("div",{class:"loadingio-spinner-eclipse-fv54pm0wn1t"},r.a.createElement("div",{class:"ldio-r53camnzr7b"},r.a.createElement("div",null))),n)},h=a(12),v=function(e){var t=e.typeInput,a=e.maxLength,l=e.minLength,c=e.refs,o=e.label,i=e.value,s=e.onChange,u=e.messageError,m=e.onBlur,d=e.required,E=e.validation,p=(e.validationType,e.onclick),g=e.type,v=void 0===g?null:g,j=e.showError,z=e.setShowError,O=e.disabled,y=Object(b.a)(e,["typeInput","maxLength","minLength","refs","label","value","onChange","messageError","onBlur","required","validation","validationType","onclick","type","showError","setShowError","disabled"]),w=Object(n.useState)(!1),C=Object(f.a)(w,2)[1],N=Object(n.useState)(Object(h.v1)()),S=Object(f.a)(N,2),x=S[0],P=S[1];return Object(n.useEffect)((function(){P(Object(h.v1)())}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",Object.assign({className:"input-field"},y),r.a.createElement("label",{htmlFor:x},o),r.a.createElement("input",{onClick:p,ref:c,autoComplete:"false",type:"text",name:x,disabled:O,id:x,value:i,minLength:l,maxLength:a,onBlur:function(){"function"==typeof m&&m(),E&&z&&z(!E(i)),C(!1)},onFocus:function(){C(!0)},onChange:function(e){if(s){var a=e.target.value;"number"===v&&(a=a.replace(/\D/,"")),"CE"===t&&(a=a.replace(/[^a-z0-9-]/gi,"")),s(a.replace(/  +/g," "))}}})),d&&j&&r.a.createElement("span",{className:"show-error"},u||"Error!"))},j=a(21),z=function e(){Object(j.a)(this,e)};z.verifyEmpty=function(e){return 0!==e.length},z.verifyDNI=function(e){for(var t=/^[0-9]*$/;void 0!==e;)return!(!t.test(e)||8!==e.length)},z.verifyCE=function(e){for(;void 0!==e;)return 0!==e.length&&e.length>=8},z.verifyRUC=function(e){for(var t=/^[0-9]*$/;void 0!==e;)return!(!t.test(e)||11!==e.length||"20"!==e.substring(0,2)&&"10"!==e.substring(0,2))},z.verifyPhone=function(e){for(var t=/^[0-9]*$/;void 0!==e;)return!(!t.test(e)||9!==e.length||"9"!==e.charAt(0))};var O=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(f.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)(!1),b=Object(f.a)(u,2),h=b[0],j=b[1],O=Object(n.useState)([]),y=Object(f.a)(O,2),w=y[0],C=y[1],N=Object(n.useState)(!1),S=Object(f.a)(N,2),x=S[0],P=S[1],L=function(){var e=Object(d.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),"https://pizzas-0708-default-rtdb.firebaseio.com/users.json",e.next=4,fetch("https://pizzas-0708-default-rtdb.firebaseio.com/users.json");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,r=n.filter((function(e){return e.celular===Number(a)})),C(r),r&&(P(!0),j(!1),l(""));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("h1",null," Consulta tus PizzaPuntos aqu\xed y canjealos !! "),r.a.createElement("div",{className:"container-input"},r.a.createElement(v,{label:"Ingresa tu nro. de Cel:",value:a,onChange:function(e){return l(e)},messageError:"*Error: formato invalido.",type:"number",validation:z.verifyPhone,minLength:9,maxLength:9,required:!0,showError:i,setShowError:s}),r.a.createElement(g,{loading:h,disabled:!(9===a.length&&!i),onClick:L},"CONSULTAR"),x&&r.a.createElement(E,{nombre:w[0].nombre,pizzapuntos:w[0].pizzaPuntos})))},y=function(){return r.a.createElement("div",{className:"cont-home"},r.a.createElement(O,null),r.a.createElement(s,null))},w=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/"},r.a.createElement(y,null)),r.a.createElement(i.a,{to:"/"}))))},C=function(){return r.a.createElement("div",{className:"cont"},r.a.createElement(w,null))},N=document.getElementById("root");c.a.render(r.a.createElement(C,null),N)}},[[24,1,2]]]);
//# sourceMappingURL=main.19d4c976.chunk.js.map