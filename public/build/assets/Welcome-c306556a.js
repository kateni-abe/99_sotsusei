import{r as x,j as l,a as E}from"./app-60c08e3c.js";import{_ as j,a as p,d as D,i as O,c as G,b as I,u as z,h as B,r as k,e as L,f as w,m as H,g as R,j as M,k as $,l as C,s as S,n as W,o as J,p as F,B as q}from"./Button-9d1ddfa4.js";const K=["sx"],Q=e=>{var t,r;const n={systemProps:{},otherProps:{}},s=(t=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?t:D;return Object.keys(e).forEach(o=>{s[o]?n.systemProps[o]=e[o]:n.otherProps[o]=e[o]}),n};function N(e){const{sx:t}=e,r=j(e,K),{systemProps:n,otherProps:s}=Q(r);let o;return Array.isArray(t)?o=[n,...t]:typeof t=="function"?o=(...u)=>{const c=t(...u);return O(c)?p({},n,c):n}:o=p({},n,t),p({},s,{sx:o})}const X=G(),Y=X,Z=["component","direction","spacing","divider","children","className","useFlexGap"],ee=I(),te=Y("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function oe(e){return z({props:e,name:"MuiStack",defaultTheme:ee})}function re(e,t){const r=x.Children.toArray(e).filter(Boolean);return r.reduce((n,s,o)=>(n.push(s),o<r.length-1&&n.push(x.cloneElement(t,{key:`separator-${o}`})),n),[])}const ne=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],se=({ownerState:e,theme:t})=>{let r=p({display:"flex",flexDirection:"column"},B({theme:t},k({values:e.direction,breakpoints:t.breakpoints.values}),n=>({flexDirection:n})));if(e.spacing){const n=L(t),s=Object.keys(t.breakpoints.values).reduce((a,i)=>((typeof e.spacing=="object"&&e.spacing[i]!=null||typeof e.direction=="object"&&e.direction[i]!=null)&&(a[i]=!0),a),{}),o=k({values:e.direction,base:s}),u=k({values:e.spacing,base:s});typeof o=="object"&&Object.keys(o).forEach((a,i,m)=>{if(!o[a]){const d=i>0?o[m[i-1]]:"column";o[a]=d}}),r=w(r,B({theme:t},u,(a,i)=>e.useFlexGap?{gap:C(n,a)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ne(i?o[i]:e.direction)}`]:C(n,a)}}))}return r=H(t.breakpoints,r),r};function ae(e={}){const{createStyledComponent:t=te,useThemeProps:r=oe,componentName:n="MuiStack"}=e,s=()=>M({root:["root"]},a=>$(n,a),{}),o=t(se);return x.forwardRef(function(a,i){const m=r(a),h=N(m),{component:d="div",direction:f="column",spacing:v=0,divider:g,children:y,className:b,useFlexGap:U=!1}=h,V=j(h,Z),_={direction:f,spacing:v,useFlexGap:U},A=s();return l.jsx(o,p({as:d,ownerState:_,ref:i,className:R(A.root,b)},V,{children:g?re(y,g):y}))})}const ie=ae({createStyledComponent:S("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>W({props:e,name:"MuiStack"})}),ce=ie;function le(e){return $("MuiTypography",e)}J("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const pe=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],ue=e=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:s,variant:o,classes:u}=e,c={root:["root",o,e.align!=="inherit"&&`align${F(t)}`,r&&"gutterBottom",n&&"noWrap",s&&"paragraph"]};return M(c,le,u)},de=S("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${F(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>p({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),P={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},he={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},me=e=>he[e]||e,ge=x.forwardRef(function(t,r){const n=W({props:t,name:"MuiTypography"}),s=me(n.color),o=N(p({},n,{color:s})),{align:u="inherit",className:c,component:a,gutterBottom:i=!1,noWrap:m=!1,paragraph:h=!1,variant:d="body1",variantMapping:f=P}=o,v=j(o,pe),g=p({},o,{align:u,color:s,className:c,component:a,gutterBottom:i,noWrap:m,paragraph:h,variant:d,variantMapping:f}),y=a||(h?"p":f[d]||P[d])||"span",b=ue(g);return l.jsx(de,p({as:y,ref:r,ownerState:g,className:R(b.root,c)},v))}),fe=ge,T=S(q)({boxShadow:"none",textTransform:"none",borderRadius:8,fontSize:15,padding:"6px 30px",lineHeight:1.5,backgroundColor:"black",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#555555",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#333333",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}});function ve({auth:e}){return l.jsxs(l.Fragment,{children:[l.jsx(E,{title:"Welcome"}),l.jsxs("div",{className:"relative flex flex-col items-center justify-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white",children:[l.jsx(fe,{variant:"h2",gutterBottom:!0,style:{fontWeight:"bold",fontFamily:"Noto Sans JP, sans-serif",paddingBottom:10,fontSize:"28px"},component:"div",children:"ヒトトナリ"}),l.jsxs(ce,{direction:{xs:"column",sm:"row"},spacing:3,children:[l.jsx(T,{variant:"contained",href:route("login"),children:"ログイン"}),l.jsx(T,{variant:"contained",href:route("register"),children:"新規登録"})]})]})]})}export{ve as default};