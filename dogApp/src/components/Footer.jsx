import React from 'react'
/* menu list for footer and are mapped */
const dogFood=["Biscuits", "Donuts","Chicken","Spinach" ]
const dogBreeds=["Shepherd","Bulldog","Huskey","Chihuahua"]
const petFreindlyCountry = [ "France", "UK", "Germarny","Sweden"]
const navlist=["Home", "About","Services","contact"]

/* simple footer laybout withing container with upper footer and lower footer */
const Footer = () => {
  return (
    <footer className='footerSection container'>
      <section class="footerUpper">
        <div class="firstDiv">
          <div class="footerLinks">
            <h4>Dog Foods</h4>
            <ul>
            {
               dogFood.map(item=><li>{item}</li>)
            }
            </ul>
          </div>
          <div class="footerLinks">
            <h4>Dog Breeds</h4>
            <ul>
             {dogBreeds.map(item=><li>{item}</li>)}
            </ul>
          </div>
          <div class="footerLinks">
            <h4>Country</h4>
            <ul>
             {petFreindlyCountry.map(item=><li>{item}</li>) }
            </ul>
          </div>
          <div class="footerLinks">
            <h4>Menus</h4>
            <ul>
             {
                navlist.map(item=><li>{item}</li>)
             }
            </ul>
          </div>
        </div>
      </section>


      <section class="footer-lower">
        <p>Copyright © Little Dog</p>
      </section>
    </footer>
  )
}

export default Footer
