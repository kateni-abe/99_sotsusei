import{W as d,r as l,j as s,a as p}from"./app-aae4127c.js";import{G as c}from"./GuestLayout-ecb8a240.js";import{T as u,I as f}from"./TextInput-f2efcb3c.js";import{I as x}from"./InputLabel-eae26295.js";import{P as w}from"./PrimaryButton-737e2bb7.js";function N(){const{data:a,setData:e,post:t,processing:o,errors:i,reset:m}=d({password:""});l.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(p,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(u,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"ml-4",disabled:o,children:"Confirm"})})]})]})}export{N as default};
