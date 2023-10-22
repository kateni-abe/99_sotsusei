import{j as o,a as d}from"./app-bca90ae3.js";import{A as r}from"./AuthenticatedLayout-3e6e2309.js";import{s as t,B as b}from"./Button-3b184101.js";import"./transition-ec3b5aaf.js";t(b)({boxShadow:"none",textTransform:"none",borderRadius:8,fontSize:15,padding:"6px 30px",lineHeight:1.5,backgroundColor:"black",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#555555",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#333333",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}});function a({auth:i,userDetails:n={}}){const e=Object.keys(n).filter(c=>c.endsWith("_public")&&n[c]).length>0;return o.jsxs(r,{user:i.user,header:o.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"マイカード"}),children:[o.jsx(d,{title:"マイカード"}),o.jsx("div",{className:"py-12",children:o.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:o.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:o.jsxs("div",{className:"p-6 text-gray-900",children:[o.jsx("h2",{children:i.user.name})," ",e?o.jsxs(o.Fragment,{children:[n.mobile_number_public==!0&&o.jsxs("div",{children:["携帯番号:",n.mobile_number]}),n.telephone_number_public==!0&&o.jsxs("div",{children:["電話番号:",n.telephone_number]}),n.birthdate_public==!0&&o.jsxs("div",{children:["生年月日: ",n.birthdate]}),n.birthplace_public==!0&&o.jsxs("div",{children:["出身地: ",n.birthplace]}),n.company_public==!0&&o.jsxs("div",{children:["会社名: ",n.company]}),n.position_public==!0&&o.jsxs("div",{children:["役職: ",n.position]}),n.industry_public==!0&&o.jsxs("div",{children:["業種: ",n.industry]}),n.hobby_public==!0&&o.jsxs("div",{children:["趣味: ",n.hobby]}),n.strengths_public==!0&&o.jsxs("div",{children:["得意なこと: ",n.strengths]}),n.weaknesses_public==!0&&o.jsxs("div",{children:["苦手なこと: ",n.weaknesses]}),n.phone_number_public==!0&&o.jsxs("div",{children:["電話番号: ",n.phone_number]}),n.facebook_account_public==!0&&o.jsxs("div",{children:["Facebook:"," ",n.facebook_account]}),n.instagram_account_public==!0&&o.jsxs("div",{children:["Instagram:"," ",n.instagram_account]}),n.x_account_public==!0&&o.jsxs("div",{children:["Twitter: ",n.x_account]}),n.line_id_public==!0&&o.jsxs("div",{children:["LINE ID: ",n.line_id]})]}):o.jsx("p",{children:"プロフィールを編集して、カードの表示内容を設定してください"})]})})})})]})}export{a as default};