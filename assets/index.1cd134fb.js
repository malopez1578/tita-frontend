import{a as e,c as t,R as a,b as n,d as r,u as o,e as l,g as s,r as c,S as i,f as d,h as m,i as _,j as u,k as p,P as g}from"./vendor.e92c251c.js";var f="_main_18yic_1",E={"c-btn":"_c-btn_vg15q_1"};e.interceptors.request.use((e=>(e.headers["app-id"]="61148597089c64bddb565e8e",e)));const x=t=>e.get(`https://dummyapi.io/data/v1/${t}`),y=t("posts/get",(async()=>(await x("post")).data.data)),h=t("post/commentsById",(async e=>(await x(`post/${e}/comment`)).data.data));var v="_c-figure_lczyt_1",L="_c-image_lczyt_8",k="_c-user_lczyt_15",C="_c-user_text_lczyt_23";const P=({image:e,text:t})=>a.createElement("div",{className:k},a.createElement("p",{className:C},t),a.createElement("figure",{className:v},a.createElement("img",{className:L,src:e||"https://via.placeholder.com/150",alt:"imagen de perfil"})));var b={"c-card":"_c-card_kuxr4_1","c-card_image":"_c-card_image_kuxr4_10","c-card_tags":"_c-card_tags_kuxr4_22","c-card_text":"_c-card_text_kuxr4_37","c-card_content":"_c-card_content_kuxr4_41","c-card_like":"_c-card_like_kuxr4_47"};const j=n({name:"getCommentsById",initialState:{commentsData:{},loading:"idle"},extraReducers:{[h.fulfilled]:(e,{payload:t})=>{e.loading="finish",e.commentsData=t},[h.rejected]:(e,{payload:t})=>{e.loading="finish"},[h.pending]:(e,{payload:t})=>{e.loading="pending"}}}).reducer,I=n({name:"getPosts",initialState:{loading:"idle",listPosts:[]},extraReducers:{[y.fulfilled]:(e,{payload:t})=>{e.loading="finish",e.listPosts.push(...t)},[y.rejected]:(e,{payload:t})=>{e.loading="finish"},[y.pending]:(e,{payload:t})=>{e.loading="pending"}}}).reducer,S=n({name:"getPosts",initialState:{userProfile:{}},reducers:{setUserProfile(e,{payload:t}){e.userProfile=(null==t?void 0:t.profileObj)||{}}}}),{setUserProfile:R}=S.actions,w=r({getPostsReducer:I,getUserReducer:S.reducer,getCommentsByIdReducer:j}),F=e=>{let t=1e3*(e.tokenObj.expires_in||3300);const a=async()=>{const n=await e.reloadAuthResponse();var r,o;t=1e3*(n.expires_in||3300),r="authToken",o=n.id_token,console.log("🚀 ~ file: localStoraje.jsx ~ line 4 ~ setStorageValue ~ data",o),localStorage.setItem(`front_${r}`,JSON.stringify(o)),setTimeout(a,t)};setTimeout(a,t)},z="443487308616-8puo8krnuakc6g65roott9q8sat6s9ql.apps.googleusercontent.com",D=()=>{const{userProfile:e}=o((e=>e.getUserReducer)),t=l();return a.createElement("div",null,e.name?a.createElement(s.exports.GoogleLogout,{clientId:z,buttonText:"Logout",onLogoutSuccess:e=>{t(R(e))}}):a.createElement(s.exports.GoogleLogin,{clientId:z,buttonText:"Login",onSuccess:e=>{t(R(e)),F(e)},onFailure:e=>{console.log("🚀 ~ file: index.js ~ line 9 ~ onFailure ~ res",e)},cookiePolicy:"single_host_origin",isSignedIn:!0}))};var N="_c-logo_1tiv3_1";const G=()=>a.createElement("svg",{viewBox:"0 0 256 257",version:"1.1",preserveAspectRatio:"xMidYMid",background:"#000",className:N},a.createElement("defs",null,a.createElement("linearGradient",{x1:"-0.828097821%",y1:"7.6518539%",x2:"57.6359644%",y2:"78.4107719%",id:"linearGradient-1"},a.createElement("stop",{stopColor:"#41D1FF",offset:"0%"}),a.createElement("stop",{stopColor:"#BD34FE",offset:"100%"})),a.createElement("linearGradient",{x1:"43.3760053%",y1:"2.24179788%",x2:"50.3158848%",y2:"89.0299051%",id:"linearGradient-2"},a.createElement("stop",{stopColor:"#FFEA83",offset:"0%"}),a.createElement("stop",{stopColor:"#FFDD35",offset:"8.33333%"}),a.createElement("stop",{stopColor:"#FFA800",offset:"100%"}))),a.createElement("g",null,a.createElement("path",{d:"M255.152904,37.937763 L134.896865,252.97646 C132.413943,257.416178 126.035075,257.442321 123.5149,253.02417 L0.87443175,37.9584812 C-1.87111536,33.1438084 2.24595371,27.3119153 7.70191187,28.2871109 L128.086639,49.8052023 C128.854587,49.9424525 129.640835,49.9411454 130.408783,49.8012155 L248.276014,28.3179595 C253.713738,27.3268821 257.850198,33.1136134 255.152904,37.937763 Z",fill:"url(#linearGradient-1)"}),a.createElement("path",{d:"M185.432401,0.0631038902 L96.4393502,17.500942 C94.9766549,17.7875335 93.8936852,19.0270992 93.8054529,20.5146956 L88.3311293,112.971419 C88.2023755,115.149123 90.2023075,116.839261 92.3277254,116.349082 L117.10466,110.630976 C119.422882,110.096354 121.517582,112.138114 121.041128,114.469407 L113.67994,150.515893 C113.184532,152.941955 115.462232,155.016394 117.831433,154.29681 L133.134834,149.647295 C135.507302,148.927059 137.786963,151.00738 137.285019,153.435402 L125.586724,210.056351 C124.854723,213.598061 129.565674,215.529368 131.530313,212.49287 L132.842687,210.464834 L205.359174,65.745575 C206.573511,63.3224548 204.479465,60.5594769 201.818118,61.0730542 L176.31441,65.9952397 C173.91776,66.4573155 171.878614,64.2253653 172.555061,61.8805431 L189.2009,4.17570253 C189.878001,1.82692623 187.831665,-0.406957894 185.432401,0.0631038902 Z",fill:"url(#linearGradient-2)"})));var U={"c-overlay":"_c-overlay_1909m_1",fadeIn:"_fadeIn_1909m_1","c-modal":"_c-modal_1909m_18",fadeInDown:"_fadeInDown_1909m_1","c-closeModal":"_c-closeModal_1909m_35"},M={"c-comment":"_c-comment_gjtuw_1","c-comment_img":"_c-comment_img_gjtuw_8","c-comment_text":"_c-comment_text_gjtuw_15","c-title":"_c-title_gjtuw_30"},T="_c-nav_kx52g_1";const A=()=>{const{userProfile:e}=o((e=>e.getUserReducer));return a.createElement("nav",{className:T},e.name&&a.createElement(P,{image:e.imageUrl,text:e.name}),a.createElement(D,null))};var B="_c-header_14epz_1",O="_c-logo_14epz_13";const $=()=>a.createElement("header",{className:B},a.createElement("div",{className:O},a.createElement(G,null)),a.createElement(A,null));let q;const V={},W=function(e,t){if(!t||0===t.length)return e();if(void 0===q){const e=document.createElement("link").relList;q=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`https://malopez1578.github.io/test-frontend/${e}`)in V)return;V[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":q,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},Z=c.exports.lazy((()=>W((()=>import("./Welcome.34d87b26.js")),["assets/Welcome.34d87b26.js","assets/Welcome.4c37805f.css","assets/vendor.e92c251c.js"]))),H=c.exports.lazy((()=>W((()=>import("./Home.a5277119.js")),["assets/Home.a5277119.js","assets/Home.f26a955a.css","assets/vendor.e92c251c.js"]))),J=()=>{const{userProfile:e}=o((e=>e.getUserReducer));return a.createElement(i,null,(null==e?void 0:e.name)?a.createElement(d,{exact:!0,path:"",component:H}):a.createElement(d,{exact:!0,path:"",component:Z}))},Y=m();function K(){const e=l();return c.exports.useEffect((()=>{e(y())}),[]),a.createElement("div",{className:f},a.createElement($,null),a.createElement(c.exports.Suspense,{fallback:a.createElement("span",null,"loading..")},a.createElement(_,{history:Y},a.createElement(J,null))))}const Q=u({reducer:w,middleware:e=>e({serializableCheck:!1})});p.render(a.createElement(g,{store:Q},a.createElement(a.StrictMode,null,a.createElement(K,null))),document.getElementById("root"));export{G as L,P as U,M as a,E as b,b as c,h as g,U as m};