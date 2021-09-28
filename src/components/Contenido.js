import React from 'react';

class Contenido extends React.Component {

    render() {
        const{name, diameter,population}=this.props.data;
        const planets = this.props.data.results || [];


        console.log(this.props);
        return (
            <React.Fragment>
            { planets.length>0 &&
                planets.map(planet=>{return ( <div key ={planet.name} className="modif-style card text-white bg-primary mb-3" >
                <div className=" card-header" >Name {planet.name}</div>
                <div className=" card-body">
                    <h4 className=" card-title"> Diameter {planet.diameter}</h4>
                    <p className=" card-text"> Population {planet.population}</p>
                </div>
            </div>
)})
            }
               
            </React.Fragment>
        )
    }
}
export default Contenido;