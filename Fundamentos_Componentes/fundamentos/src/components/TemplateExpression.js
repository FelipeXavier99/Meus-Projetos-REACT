
const TemplateExpressions = () =>{

    const name = "Xavier"
    const data = {

        age:32,
        job: "progammer",
    }

    return (
      <div className="App">
        <h1>Olá {name}, tudo bem?</h1>
        <p>Vc Atua como: {data.job}</p>
        <p>{4*4}</p>
      <p> {console.log("teste console")}</p> 
      </div>
    );
    }

    export default TemplateExpressions