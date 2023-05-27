import { lazy } from 'react'


export const AsynPageLoad=(page)=>{
    const AsynLazyRoute=lazy(()=>import(`../Pages/${page}`));
    return <AsynLazyRoute/>
}