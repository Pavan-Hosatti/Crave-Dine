import React from 'react'
import {data} from "../restApi.json"

const Menu = () => {
return (
    <section className='menu' id='menu'>
    <div className="container">
        <div className="heading_section">
            <h1 className='heading'>POPULAR DISHES</h1>
            <p>Explore our signature dishes, expertly crafted to satisfy every craving. From savory mains to irresistible desserts, there's something for everyone!</p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(element=>{
                    return (
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title}  />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </section>
)
}

export default Menu;