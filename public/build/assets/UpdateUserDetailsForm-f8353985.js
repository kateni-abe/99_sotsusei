import{j as e,q as p,W as _}from"./app-027b12aa.js";import{T as n,I as i}from"./TextInput-af8502df.js";import{I as r}from"./InputLabel-18562f8e.js";import{P as g}from"./PrimaryButton-d37f9016.js";import{t as x}from"./transition-0e435c79.js";function o({checked:u,onChange:s,label:t}){return e.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"sr-only peer",checked:u,onChange:s}),e.jsx("div",{className:`
                w-11 h-6 
                bg-gray-200 
                rounded-full 
                peer peer-focus:ring-4 
                peer-focus:ring-blue-300 
                dark:peer-focus:ring-blue-800 
                dark:bg-gray-700 
                peer-checked:after:translate-x-full 
                peer-checked:after:border-white 
                after:content-[''] 
                after:absolute 
                after:top-0.5 
                after:left-[2px] 
                after:bg-white 
                after:border-gray-300 
                after:border 
                after:rounded-full 
                after:h-5 
                after:w-5 
                after:transition-all 
                dark:border-gray-600 
                peer-checked:bg-blue-600
            `}),e.jsx("span",{className:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:t||"Checked toggle"})]})}function N({className:u=""}){const s=p().props.userDetails||{},{data:t,setData:c,patch:b,errors:l,processing:m,recentlySuccessful:h}=_({icon:s.icon||"",birthdate:s.birthdate||"",birthplace:s.birthplace||"",company:s.company||"",position:s.position||"",industry:s.industry||"",hobby:s.hobby||"",strengths:s.strengths||"",weaknesses:s.weaknesses||"",phone_number:s.phone_number||"",facebook_account:s.facebook_account||"",instagram_account:s.instagram_account||"",x_account:s.x_account||"",line_id:s.line_id||"",icon_public:s.icon_public||!1,birthdate_public:s.birthdate_public||!1,birthplace_public:s.birthplace_public||!1,company_public:s.company_public||!1,position_public:s.position_public||!1,industry_public:s.industry_public||!1,hobby_public:s.hobby_public||!1,strengths_public:s.strengths_public||!1,weaknesses_public:s.weaknesses_public||!1,phone_number_public:s.phone_number_public||!1,facebook_account_public:s.facebook_account_public||!1,instagram_account_public:s.instagram_account_public||!1,x_account_public:s.x_account_public||!1,line_id_public:s.line_id_public||!1}),d=a=>{a.preventDefault(),b(route("user.details.update"),{preserveScroll:!0})};return e.jsxs("section",{className:u,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"ユーザー詳細情報"}),e.jsxs("p",{className:"mt-1 text-sm text-gray-600",children:["以下の情報を更新してください。",e.jsx("br",{}),"情報を公開に設定すると、マイカードへ表示されます。"]})]}),e.jsxs("form",{onSubmit:d,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(r,{htmlFor:"birthdate",value:"生年月日"}),e.jsx(n,{id:"birthdate",type:"date",className:"mt-1 block w-full",value:t.birthdate,onChange:a=>c("birthdate",a.target.value)}),e.jsx(o,{id:"birthdate_public",checked:t.birthdate_public,onChange:a=>c("birthdate_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.birthdate,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"birthplace",value:"出身地"}),e.jsx(n,{id:"birthplace",className:"mt-1 block w-full",value:t.birthplace,onChange:a=>c("birthplace",a.target.value)}),e.jsx(o,{id:"birthplace_public",checked:t.birthplace_public,onChange:a=>c("birthplace_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.birthplace,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"company",value:"会社名"}),e.jsx(n,{id:"company",className:"mt-1 block w-full",value:t.company,onChange:a=>c("company",a.target.value)}),e.jsx(o,{id:"company_public",checked:t.company_public,onChange:a=>c("company_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.company,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"position",value:"役職"}),e.jsx(n,{id:"position",className:"mt-1 block w-full",value:t.position,onChange:a=>c("position",a.target.value)}),e.jsx(o,{id:"position_public",checked:t.position_public,onChange:a=>c("position_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.position,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"industry",value:"職種"}),e.jsx(n,{id:"industry",className:"mt-1 block w-full",value:t.industry,onChange:a=>c("industry",a.target.value)}),e.jsx(o,{id:"industry_public",checked:t.industry_public,onChange:a=>c("industry_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.industry,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"hobby",value:"趣味"}),e.jsx(n,{id:"hobby",className:"mt-1 block w-full",value:t.hobby,onChange:a=>c("hobby",a.target.value)}),e.jsx(o,{id:"hobby_public",checked:t.hobby_public,onChange:a=>c("hobby_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.hobby,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"strengths",value:"得意なこと"}),e.jsx(n,{id:"strengths",className:"mt-1 block w-full",value:t.strengths,onChange:a=>c("strengths",a.target.value)}),e.jsx(o,{id:"strengths_public",checked:t.strengths_public,onChange:a=>c("strengths_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.strengths,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"weaknesses",value:"苦手なこと"}),e.jsx(n,{id:"weaknesses",className:"mt-1 block w-full",value:t.weaknesses,onChange:a=>c("weaknesses",a.target.value)}),e.jsx(o,{id:"weaknesses_public",checked:t.weaknesses_public,onChange:a=>c("weaknesses_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.weaknesses,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"phone_number",value:"電話番号"}),e.jsx(n,{id:"phone_number",className:"mt-1 block w-full",value:t.phone_number,onChange:a=>c("phone_numbers",a.target.value)}),e.jsx(o,{id:"phone_number_public",checked:t.phone_number_public,onChange:a=>c("phone_number_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.phone_number,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"facebook_account",value:"facebook"}),e.jsx(n,{id:"facebook_account",className:"mt-1 block w-full",value:t.facebook_account,onChange:a=>c("facebook_account",a.target.value)}),e.jsx(o,{id:"facebook_account_public",checked:t.facebook_account_public,onChange:a=>c("facebook_account_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.facebook_account,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"instagram_account",value:"Instagram"}),e.jsx(n,{id:"instagram_account",className:"mt-1 block w-full",value:t.instagram_account,onChange:a=>c("instagram_account",a.target.value)}),e.jsx(o,{id:"instagram_account_public",checked:t.instagram_account_public,onChange:a=>c("instagram_account_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.instagram_account,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"x_account",value:"X(twitter)"}),e.jsx(n,{id:"x_account",className:"mt-1 block w-full",value:t.x_account,onChange:a=>c("x_account",a.target.value)}),e.jsx(o,{id:"x_account_public",checked:t.x_account_public,onChange:a=>c("x_account_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.x_account,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"line_id",value:"LINE"}),e.jsx(n,{id:"line_id",className:"mt-1 block w-full",value:t.line_id,onChange:a=>c("line_id",a.target.value)}),e.jsx(o,{id:"line_id_public",checked:t.line_id_public,onChange:a=>c("line_id_public",a.target.checked),className:"mt-1",label:"公開"}),e.jsx(i,{message:l.line_id,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{disabled:m,children:"保存"}),e.jsx(x,{show:h,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"変更を保存しました"})})]})]})]})}export{N as default};
