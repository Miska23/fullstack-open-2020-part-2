(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{17:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(15),r=n.n(c),u=n(16),l=n(2),i=n(4),s=n.n(i),d="api/persons",m=function(){var e=s.a.get(d);return console.log("from ContactService.js/getAll/1, request is :",e),e.then((function(e){return e.data}))},f=function(e){var t=s.a.post(d,e);return console.log("from ContactService.js/create/1, request is :",t),t.then((function(e){return e.data}))},h=function(e,t){var n=s.a.put("".concat(d,"/").concat(e),t);return console.log("from ContactService.js/update/1, request is :",n),n.then((function(e){return e.data}))},b=function(e){var t=s.a.delete("".concat(d,"/").concat(e));return console.log("from ContactService.js/deleteContact/1, request is :",t),t.then((function(e){return e.data}))},p=function(e){return o.a.createElement("form",{onSubmit:e.submitAction},o.a.createElement("label",null,e.text,o.a.createElement("input",{type:"text",onChange:e.changeHandler,value:e.value})),e.children)},v=function(e){var t=e.handleSearchChange,n=e.searchText;return o.a.createElement(p,{submitAction:function(e){return e.preventDefault()},text:"filter shown with ",changeHandler:t,value:n})},g=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Add a new contact"),o.a.createElement(p,{submitAction:e.addContact,text:"Name ",changeHandler:e.handleNameChange,value:e.newName}),o.a.createElement(p,{submitAction:e.addContact,text:"Number ",changeHandler:e.handleNumberChange,value:e.newNumber,add:"Add"},o.a.createElement("button",{style:{display:"block",width:110},type:"submit"},"Add")))},C=function(e){var t,n=e.contacts,a=e.searchText,c=e.removeContact,r=(t=a,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})));return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Numbers"),o.a.createElement("ul",{style:{listStyleType:"none"}},r.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement("li",null,e.name," "," ",e.number," "," ",o.a.createElement("button",{onClick:function(){return c(e)}},"delete")))}))))},E=(n(39),function(e){var t,n=e.message,a=e.errorStatus;return null===n?null:(t=a?"error":"success",o.a.createElement("div",{className:t},n))}),j=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),s=i[0],d=i[1],p=Object(a.useState)(""),j=Object(l.a)(p,2),w=j[0],S=j[1],O=Object(a.useState)(""),A=Object(l.a)(O,2),k=A[0],N=A[1],T=Object(a.useState)(null),x=Object(l.a)(T,2),y=x[0],q=x[1],D=Object(a.useState)(!1),H=Object(l.a)(D,2),F=H[0],J=H[1];console.log("testikomento build-skriptej\xe4 varten"),Object(a.useEffect)((function(){console.log("from App.js/uEf/1, uEf Started"),m().then((function(e){c(e)})),console.log("from App.js/uEf/1, uEf finished")}),[]);return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(E,{message:y,errorStatus:F}),o.a.createElement(v,{handleSearchChange:function(e){N(e.target.value)},searchText:k}),o.a.createElement(g,{newName:s,newNumber:w,addContact:function(e){e.preventDefault();var t={name:s,number:w},a=n.find((function(e){return e.name===s}));if(a){var o=a.id;console.log("from addContact() / update / 1, id is: ",o),window.confirm("".concat(s," is already in the phonebook, replace the old number with a new one?"))&&h(o,t).then((function(e){console.log("from App.js/addContact() / update 2, returnedContact is :",e),c(n.map((function(t){return t.id!==o?t:e}))),q("Contact ".concat(s," in the phonebook was updated")),setTimeout((function(){q(null)}),5e3)})).catch((function(e){J(!0),q("Contact ".concat(s," was not found on the server")),setTimeout((function(){q(null)}),5e3),c(n.filter((function(e){return e.id!==o})))}))}else f(t).then((function(e){console.log("from App.js/addContact()/1, returnedContact is :",e),c([].concat(Object(u.a)(n),[e])),console.log("from App.js/addContact()/2, contacts is now:",n),q("Contact ".concat(s," was added to the phonebook")),setTimeout((function(){q(null)}),5e3)}));d(""),S(""),J(!1)},handleNameChange:function(e){d(e.target.value)},handleNumberChange:function(e){S(e.target.value)}}),o.a.createElement(C,{contacts:n,searchText:k,removeContact:function(e){console.log("from deleteContact() / 1, contactToDelete is:",e),n.some((function(t){return t.id===e.id}))&&window.confirm("Delete ".concat(e.name," ?"))&&b(e.id).then((function(){var t=n.filter((function(t){return t.id!==e.id}));c(t),q("Contact ".concat(e.name," was deleted from the phonebook")),setTimeout((function(){q(null)}),5e3)})).catch((function(t){J(!0),q("Contact ".concat(e.name," was not found on the server")),setTimeout((function(){q(null)}),5e3),c(n.filter((function(t){return t.id!==e.id})))}))}}))};r.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.147feae7.chunk.js.map