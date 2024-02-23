const extend=(id)=>{
    const element_detail=document.getElementById(id+"f");
    const element=document.getElementById(id);
    if(element.classList.contains('active'))
    {
        element.classList.remove('active')
        element_detail.classList.remove('active')
    }
    else{
        element.classList.add("extended_card")
        element_detail.classList.add("hidden_card")
    }
}
const shrink=(id)=>{
    const element_detail=document.getElementById(id+"f");
    const element=document.getElementById(id);
    element.classList.add("active")
    element_detail.classList.add("active")
}
export {
    extend,shrink
};