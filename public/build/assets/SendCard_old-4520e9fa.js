import{r as i,j as c,a as l}from"./app-2a28c2ab.js";import{A as f}from"./AuthenticatedLayout-e9750b6e.js";import{Q as x}from"./index-4048e36e.js";import{s as _,B as g}from"./Button-d477b45c.js";import"./transition-f605a91f.js";const E=_(g)({boxShadow:"none",textTransform:"none",borderRadius:8,fontSize:15,padding:"6px 30px",lineHeight:1.5,backgroundColor:"black",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#555555",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#333333",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}});function s({auth:t,userDetails:o={}}){const b=Object.keys(o).filter(e=>e.endsWith("_public")&&o[e]),[d,m]=i.useState(!1),[a,p]=i.useState("");b.length>0;let n=`BEGIN:VCARD
VERSION:3.0
`;o.email_public&&o.email&&(n+=`EMAIL:${o.email}
`),o.mobile_number_public&&o.mobile_number&&(n+=`TEL;TYPE=CELL:${o.mobile_number}
`),o.telephone_number_public&&o.telephone_number&&(n+=`TEL;TYPE=HOME:${o.telephone_number}
`),o.birthdate_public&&o.birthdate&&(n+=`BDAY:${o.birthdate}
`),o.birthplace_public&&o.birthplace&&(n+=`ADR;TYPE=HOME:;;${o.birthplace}
`),o.company_public&&o.company&&(n+=`ORG:${o.company}
`),o.position_public&&o.position&&(n+=`TITLE:${o.position}
`),o.industry_public&&o.industry&&(n+=`X-INDUSTRY:${o.industry}
`),o.hobby_public&&o.hobby&&(n+=`NOTE:趣味:${o.hobby}
`),o.strengths_public&&o.strengths&&(n+=`NOTE:得意なこと:${o.strengths}
`),o.weaknesses_public&&o.weaknesses&&(n+=`NOTE:苦手なこと:${o.weaknesses}
`),o.phone_number_public&&o.phone_number&&(n+=`TEL:${o.phone_number}
`),o.facebook_account_public&&o.facebook_account&&(n+=`X-FACEBOOK:${o.facebook_account}
`),o.instagram_account_public&&o.instagram_account&&(n+=`X-INSTAGRAM:${o.instagram_account}
`),o.x_account_public&&o.x_account&&(n+=`X-ACCOUNT:${o.x_account}
`),o.line_id_public&&o.line_id&&(n+=`X-LINE-ID:${o.line_id}
`),n+=`END:VCARD
`;const r=document.querySelector('meta[name="csrf-token"]').getAttribute("content"),h=()=>{fetch("/api/vcf/store",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":r},body:JSON.stringify({unique_token:t.user.unique_token})}).then(e=>e.json()).then(e=>{m(!0),p(e.vcf_url)}).catch(e=>console.error("Error:",e))};return c.jsxs(f,{user:t.user,header:c.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"マイカード"}),children:[c.jsx(l,{title:"マイカード"}),c.jsx("div",{className:"py-12",children:c.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:c.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:c.jsxs("div",{className:"p-6 text-gray-900",children:[c.jsx("h2",{children:t.user.name}),c.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:d?c.jsx("div",{className:"p-6 text-gray-900 flex flex-col items-center",children:c.jsx(x,{value:a,size:128})}):c.jsx("div",{className:"p-6 text-gray-900 flex flex-col items-center",children:c.jsx(E,{variant:"contained",onClick:h,children:"プロフィールを渡す"})})})]})})})})]})}export{s as default};
