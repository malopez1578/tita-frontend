import{R as e,e as t,u as a,r as l}from"./vendor.e92c251c.js";import{b as c,c as n,U as m,g as s,m as r,a as i}from"./index.1cd134fb.js";const o=({click:t,label:a,type:l})=>e.createElement("button",{className:c["c-btn"],onClick:t},a),d=({idModal:t,click:a,label:l})=>e.createElement(o,{click:()=>{a&&a();const e=document.querySelector(`#${t}`);e&&e.classList.toggle("is-active")},label:l}),E=({image:a,tags:l,text:c,owner:r,likes:i,id:o})=>{const E=`${r.firstName} ${r.lastName}`,g=t();return e.createElement("div",{className:n["c-card"]},e.createElement("div",{className:n["c-card_image"]},e.createElement("img",{src:a,alt:"Imagen referente al post."})),e.createElement("div",{className:n["c-card_info"]},e.createElement("div",{className:n["c-card_user"]},e.createElement(m,{image:r.picture,text:E})),e.createElement("div",{className:n["c-card_text"]},e.createElement("p",null,c)),e.createElement("div",{className:n["c-card_content"]},e.createElement(d,{idModal:"modal_content",label:"Ver comentarios",click:()=>{g(s(o))}}),e.createElement("div",{className:n["c-card_like"]},e.createElement("img",{src:"./assets/images/like.svg",alt:"logo de like"}),e.createElement("span",null,i)))),e.createElement("div",{className:n["c-card_tags"]},l&&l.map(((t,a)=>e.createElement("span",{key:a},t)))))},g=({idModal:t,type:a,dataModal:l,children:c})=>{const n=()=>{const e=document.querySelector(`#${t}`);e&&e.classList.remove("is-active")};return e.createElement("div",{className:r["c-overlay"],id:t,onClick:n},e.createElement("div",{className:r["c-modal"]},e.createElement("div",{className:r["c-closeModal"]},e.createElement(o,{label:"x",click:n})),e.createElement("div",null,c)))},u=()=>{const{commentsData:t,loading:c}=a((e=>e.getCommentsByIdReducer));return e.createElement(l.exports.Fragment,null,"pending"===c?e.createElement("span",null," loading..."):e.createElement(l.exports.Fragment,null,t&&t.length>0?e.createElement(l.exports.Fragment,null,e.createElement("h6",{className:i["c-title"]},"Comentarios"),t.map((t=>e.createElement("div",{key:t.id,className:i["c-comment"]},e.createElement("img",{className:i["c-comment_img"],src:t.owner.picture,alt:""}),e.createElement("div",{className:i["c-comment_text"]},e.createElement("div",null,e.createElement("small",null,t.owner.firstName,t.owner.lastName)),e.createElement("div",null,e.createElement("p",null,t.message))))))):e.createElement("span",null,"no hay commentarios")))};var v="_c-main_1s7j4_1";const p=()=>{const{listPosts:t}=a((e=>e.getPostsReducer));return e.createElement(l.exports.Fragment,null,e.createElement("main",{className:v},t&&t.map((t=>e.createElement(E,{key:t.id,image:t.image,tags:t.tags,text:t.text,owner:t.owner,likes:t.likes,id:t.id})))),e.createElement(g,{idModal:"modal_content"},e.createElement(u,null)))};export{p as default};