(function(e){function t(t){for(var n,c,d=t[0],u=t[1],i=t[2],s=0,f=[];s<d.length;s++)c=d[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,i||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,c=1;c<o.length;c++){var u=o[c];0!==a[u]&&(n=!1)}n&&(r.splice(t--,1),e=d(d.s=o[0]))}return e}var n={},a={app:0},r=[];function c(e){return d.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f254d5c0"}[e]+".js"}function d(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.e=function(e){var t=[],o=a[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=n);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,d.nc&&u.setAttribute("nonce",d.nc),u.src=c(e);var i=new Error;r=function(t){u.onerror=u.onload=null,clearTimeout(s);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,o[1](i)}a[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(t)},d.m=e,d.c=n,d.d=function(e,t,o){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)d.d(o,n,function(t){return e[t]}.bind(null,n));return o},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="",d.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0652":function(e,t,o){"use strict";o("8316")},2837:function(e,t,o){"use strict";o("61d6")},"4f84":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),a={id:"app"},r={class:"container"};function c(e,t,o,c,d,u){var i=Object(n["y"])("AddTodo"),s=Object(n["y"])("FilterTodos"),l=Object(n["y"])("Todos");return Object(n["r"])(),Object(n["d"])("div",a,[Object(n["e"])("div",r,[Object(n["h"])(i),Object(n["h"])(s),Object(n["h"])(l)])])}var d=function(e){return Object(n["u"])("data-v-0e33fe66"),e=e(),Object(n["s"])(),e},u=d((function(){return Object(n["e"])("h3",null,"Todos",-1)})),i=d((function(){return Object(n["e"])("div",{class:"legend"},[Object(n["e"])("span",null,"雙重點擊來標示已完成的事項"),Object(n["e"])("span",null,[Object(n["e"])("span",{class:"incomplete-box"}),Object(n["g"])(" = 未完成 ")]),Object(n["e"])("span",null,[Object(n["e"])("span",{class:"complete-box"}),Object(n["g"])(" = 已完成 ")])],-1)})),s={class:"todos"},l=["onDblclick"],f=["onClick"];function p(e,t,o,a,r,c){return Object(n["r"])(),Object(n["d"])(n["a"],null,[u,i,Object(n["e"])("div",s,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(e.getTodos,(function(t){return Object(n["r"])(),Object(n["d"])("div",{onDblclick:function(e){return c.onDblclick(t)},class:Object(n["n"])(["todo",{"is-complete":t.completed}]),key:t.id},[Object(n["g"])(Object(n["A"])(t.title)+" ",1),Object(n["e"])("i",{class:"fas fa-trash-alt",onClick:function(o){return e.deleteTodo(t.id)}},null,8,f)],42,l)})),128))])],64)}var v=o("5530"),b=o("5502"),h={name:"Todos",methods:Object(v["a"])(Object(v["a"])({},Object(b["b"])(["fetchTodos","deleteTodo","updataTodo"])),{},{onDblclick:function(e){var t={id:e.id,title:e.title,completed:!e.completed};this.updataTodo(t)}}),computed:Object(b["c"])(["getTodos"]),created:function(){this.fetchTodos()}},m=(o("6243"),o("6b0d")),j=o.n(m);const g=j()(h,[["render",p],["__scopeId","data-v-0e33fe66"]]);var O=g,T=function(e){return Object(n["u"])("data-v-4ad82bbb"),e=e(),Object(n["s"])(),e},w=T((function(){return Object(n["e"])("h3",null,"Add Todo",-1)})),y={class:"add"},k=T((function(){return Object(n["e"])("input",{type:"submit",value:"Submit"},null,-1)}));function _(e,t,o,a,r,c){return Object(n["r"])(),Object(n["d"])("div",null,[w,Object(n["e"])("div",y,[Object(n["e"])("form",{onSubmit:t[1]||(t[1]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)})},[Object(n["E"])(Object(n["e"])("input",{type:"text",placeholder:"Add Todo...","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.title=e})},null,512),[[n["C"],r.title]]),k],32)])])}var x={name:"AddTodo",data:function(){return{title:""}},methods:Object(v["a"])(Object(v["a"])({},Object(b["b"])(["addTodo"])),{},{onSubmit:function(e){e.preventDefault(),this.addTodo(this.title)}})};o("2837");const S=j()(x,[["render",_],["__scopeId","data-v-4ad82bbb"]]);var A=S,C=Object(n["g"])(" Filter todos: "),P=Object(n["f"])('<option value="200" data-v-156a12f0>200</option><option value="100" data-v-156a12f0>100</option><option value="50" data-v-156a12f0>50</option><option value="30" data-v-156a12f0>30</option><option value="20" data-v-156a12f0>20</option><option value="10" data-v-156a12f0>10</option>',6),R=[P];function I(e,t,o,a,r,c){return Object(n["r"])(),Object(n["d"])("div",null,[C,Object(n["e"])("select",{onChange:t[0]||(t[0]=function(t){return e.filterTodos(t)})},R,32)])}var D={name:"FilterTodos",methods:Object(v["a"])({},Object(b["b"])(["filterTodos"]))};o("0652");const E=j()(D,[["render",I],["__scopeId","data-v-156a12f0"]]);var F=E,H={name:"app",components:{Todos:O,AddTodo:A,FilterTodos:F}};o("d581");const L=j()(H,[["render",c]]);var M=L,W=(o("d3b7"),o("3ca3"),o("ddb0"),o("6c02")),N=o("cf05"),V=o.n(N),J={class:"home"},q=Object(n["e"])("img",{alt:"Vue logo",src:V.a},null,-1);function z(e,t,o,a,r,c){var d=Object(n["y"])("HelloWorld");return Object(n["r"])(),Object(n["d"])("div",J,[q,Object(n["h"])(d,{msg:"Welcome to Your Vue.js App"})])}var U={class:"hello"},Y=Object(n["f"])('<p data-v-1dfc7223> For a guide and recipes on how to configure / customize this project,<br data-v-1dfc7223> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-cli documentation</a>. </p><h3 data-v-1dfc7223>Installed CLI Plugins</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-1dfc7223>babel</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-1dfc7223>router</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-1dfc7223>vuex</a></li></ul><h3 data-v-1dfc7223>Essential Links</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Core Docs</a></li><li data-v-1dfc7223><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Forum</a></li><li data-v-1dfc7223><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Community Chat</a></li><li data-v-1dfc7223><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-1dfc7223>Twitter</a></li><li data-v-1dfc7223><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>News</a></li></ul><h3 data-v-1dfc7223>Ecosystem</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-router</a></li><li data-v-1dfc7223><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vuex</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-1dfc7223>vue-devtools</a></li><li data-v-1dfc7223><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-loader</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-1dfc7223>awesome-vue</a></li></ul>',7);function B(e,t,o,a,r,c){return Object(n["r"])(),Object(n["d"])("div",U,[Object(n["e"])("h1",null,Object(n["A"])(o.msg),1),Y])}var G={name:"HelloWorld",props:{msg:String}};o("c7ad");const K=j()(G,[["render",B],["__scopeId","data-v-1dfc7223"]]);var Q=K,X={name:"Home",components:{HelloWorld:Q}};const Z=j()(X,[["render",z]]);var $=Z,ee=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],te=Object(W["a"])({history:Object(W["b"])(""),routes:ee}),oe=te,ne=o("1da1"),ae=(o("4de4"),o("c740"),o("a434"),o("96cf"),o("bc3a")),re=o.n(ae),ce={todos:[]},de={getTodos:function(e){return e.todos}},ue={fetchTodos:function(e){return Object(ne["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,re.a.get("https://jsonplaceholder.typicode.com/todos");case 3:n=t.sent,o("setTodos",n.data);case 5:case"end":return t.stop()}}),t)})))()},addTodo:function(e,t){return Object(ne["a"])(regeneratorRuntime.mark((function o(){var n,a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,o.next=3,re.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1});case 3:a=o.sent,n("addNewTodo",a.data);case 5:case"end":return o.stop()}}),o)})))()},deleteTodo:function(e,t){return Object(ne["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,o.next=3,re.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t));case 3:n("removeTodo",t);case 4:case"end":return o.stop()}}),o)})))()},filterTodos:function(e,t){return Object(ne["a"])(regeneratorRuntime.mark((function o(){var n,a,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,a=parseInt(t.target.value),o.next=4,re.a.get("https://jsonplaceholder.typicode.com/todos?_limit=".concat(a));case 4:r=o.sent,n("setTodos",r.data);case 6:case"end":return o.stop()}}),o)})))()},updataTodo:function(e,t){return Object(ne["a"])(regeneratorRuntime.mark((function o(){var n,a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,o.next=3,re.a.put("https://jsonplaceholder.typicode.com/todos/".concat(t.id),t);case 3:a=o.sent,n("renewTodo",a.data);case 5:case"end":return o.stop()}}),o)})))()}},ie={setTodos:function(e,t){e.todos=t},addNewTodo:function(e,t){e.todos.unshift(t)},removeTodo:function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t}))},renewTodo:function(e,t){console.log(t);var o=e.todos.findIndex((function(e){return e.id===t.id}));-1!==o&&e.todos.splice(o,1,t)}},se={state:ce,getters:de,actions:ue,mutations:ie},le=Object(b["a"])({state:{},mutations:{},actions:{},modules:{todos:se}});Object(n["c"])(M).use(le).use(oe).mount("#app")},"61d6":function(e,t,o){},6243:function(e,t,o){"use strict";o("4f84")},8316:function(e,t,o){},c7ad:function(e,t,o){"use strict";o("d4a6")},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},d4a6:function(e,t,o){},d581:function(e,t,o){"use strict";o("e53d")},e53d:function(e,t,o){}});
//# sourceMappingURL=app.7b812b81.js.map