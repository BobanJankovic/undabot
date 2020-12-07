const HomePage = resolve => {
    require.ensure(['@/components/HomePage'],()=>{
        resolve(require('@/components/HomePage'));
    });
}

const ContactUs = resolve => {
    require.ensure(['@/components/ContactUs'],()=>{
        resolve(require('@/components/ContactUs'));
    });
}

export const routes = [
    {path:'',  name:'home', components:{ default:HomePage } },
    {path:'/contact/',  name:'contact', components:{default:ContactUs} },
    {path:'*', redirect:'/'}
];