import{W as n,j as e,a as d}from"./app-04b701e7.js";import{G as c}from"./GuestLayout-62c956cc.js";import{T as x,I as u}from"./TextInput-7f3e007d.js";import{P as j}from"./PrimaryButton-41f5629c.js";import{C as f}from"./CancelButton-83e82afb.js";function v({status:a}){const{data:r,setData:m,post:i,processing:t,errors:l}=n({email:""}),o=s=>{s.preventDefault(),i(route("password.email"))};return e.jsxs(c,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsxs("div",{className:"mb-4 text-sm text-gray-600",children:["パスワードリセット用のリンクをお送りいたします。",e.jsx("br",{}),"ご登録済みのメールアドレスを入力してください。"]}),a&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),e.jsxs("form",{onSubmit:o,children:[e.jsx(x,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>m("email",s.target.value)}),e.jsx(u,{message:l.email,className:"mt-2"}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(j,{className:"ml-4",disabled:t,children:"パスワードのリセットリンクを送る"}),e.jsx(f,{className:"ml-4",disabled:t,children:e.jsx("a",{href:"/",children:"キャンセル"})})]})]})]})}export{v as default};