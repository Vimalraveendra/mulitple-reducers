(window["webpackJsonpmultiple-reducer"]=window["webpackJsonpmultiple-reducer"]||[]).push([[0],{17:function(e,t,r){e.exports=r(29)},22:function(e,t,r){},23:function(e,t,r){},29:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(4),c=r.n(o),i=(r(22),r(11)),l=r(12),u=r(15),s=r(13),p=r(16),b=(r(23),r(6)),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},"Multiple-Reducer"),a.a.createElement("h1",null,"Click the button! it will add the value of A and B"),a.a.createElement("div",{className:"col"},a.a.createElement("div",{className:"heads"},a.a.createElement("span",null,"A:"),this.props.a),a.a.createElement("button",{className:"btn",onClick:function(){e.props.onUpdateA(e.props.b)}},"update A")),a.a.createElement("div",{className:"col"},a.a.createElement("div",{className:"heads"},a.a.createElement("span",null,"B:"),this.props.b),a.a.createElement("button",{className:"btn",onClick:function(){e.props.onUpdateB(e.props.a)}},"update B")))}}]),t}(n.Component),d=Object(b.b)(function(e){return{a:e.rA.a,b:e.rB.b}},function(e){return{onUpdateA:function(t){return e({type:"UPDATE_A",value:t})},onUpdateB:function(t){return e({type:"UPDATE_B",value:t})}}})(f);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=r(3),m=r(5);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach(function(t){Object(m.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={a:1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,r=v({},e);switch(t.type){case"UPDATE_A":return v({},r,{a:r.a+t.value});default:return r}};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach(function(t){Object(m.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var E={b:1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,r=g({},e);switch(t.type){case"UPDATE_B":return g({},r,{b:t.value+r.b});default:return r}},A=Object(O.b)({rA:j,rB:P}),D=Object(O.c)(A);c.a.render(a.a.createElement(b.a,{store:D},a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.fb24ac8d.chunk.js.map