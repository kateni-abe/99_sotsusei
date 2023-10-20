import{q as p,W as j,j as e,d as v}from"./app-aae4127c.js";import{T as n,I as m}from"./TextInput-f2efcb3c.js";import{I as l}from"./InputLabel-eae26295.js";import{P as g}from"./PrimaryButton-737e2bb7.js";import{t as y}from"./transition-37091abf.js";function w({mustVerifyEmail:o,status:c,className:u=""}){const s=p().props.auth.user,{data:a,setData:r,patch:d,errors:i,processing:x,recentlySuccessful:f}=j({name:s.name,email:s.email}),h=t=>{t.preventDefault(),d(route("profile.update"))};return e.jsxs("section",{className:u,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"ユーザー情報"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"ユーザー名とEメールアドレス"})]}),e.jsxs("form",{onSubmit:h,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"name",value:"氏名"}),e.jsx(n,{id:"name",className:"mt-1 block w-full",value:a.name,onChange:t=>r("name",t.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e.jsx(m,{className:"mt-2",message:i.name})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",value:"Eメールアドレス"}),e.jsx(n,{id:"email",type:"email",className:"mt-1 block w-full",value:a.email,onChange:t=>r("email",t.target.value),required:!0,autoComplete:"username"}),e.jsx(m,{className:"mt-2",message:i.email})]}),o&&s.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e.jsx(v,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),c==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{disabled:x,children:"保存"}),e.jsx(y,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"変更を保存しました"})})]})]})]})}export{w as default};