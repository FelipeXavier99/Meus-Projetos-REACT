const Events = () => {

const handleMyEvent = (e)=>{
    console.log(e)
    console.log("Ativou o evento!")
};

const renderSomething = (x) =>{

if(x){
return <h1>Renderizando isso </h1>;

}
else{
    return <h1>Também  posso Renderizando isso </h1>;
}



}
    return (
        <div>
         <div>

<button onClick={handleMyEvent}> Clique aqui</button>

<button
 onClick={() => {
if(true){

    console.log("Isso n poderia exisitir");
}

}}

> 
Clique aqui 2
</button>


         </div>
    
    {renderSomething(true)}
    {renderSomething(false)}
        </div>
      );
    };





export default Events;