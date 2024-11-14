import React, { useEffect, useState } from 'react'

const HeroSection = () => {
  /* state management using useState with inital dogimage empty but will be updated automatically once the page loads
  similary loading state is false and error is also empty */
  const [dogImage, setDogImage] = useState("")
  const[isloading, setIsloading] = useState(false)
  const[error, setError] = useState("")

 /* fetching of the dog Image using fetch and try catch  */
  async function fetchDogImages(){
    setIsloading(true)

    try{
     /* fetch and get method emplimented */
      const response = await  fetch('https://dog.ceo/api/breeds/image/random', {
        method:'GET'
      })
      if(!response.ok){
        throw new Error(' Response was not ok')
      }
      
        const data = await response.json()
        if(data)
          {
      setDogImage(data.message)
      setIsloading(false)
      

      }
      

    }catch(err){
      setError(`Error occured while fetching the dog image! Please try again. Error `)
      console.log(error)
      setIsloading(fasle)
    }


  }
/* this will fetch the dog Images when the page loads */
  useEffect(()=>{
    fetchDogImages()

  },[])
/* showing message in the middle if the item is in the loading state or has the error */
if(isloading){
  return <div className='loading'>loading...</div>
}
 
if(error){
  return <div className='errorInfo'> Error Occured : {error} Please try again later </div>
}

  return (
    <main className='heroSection container'>{/* container has the max widh of 1280px and every items within are in the ceter */}
      <div className='heroContent'>
        <h1>A dog wags its tail with its heart</h1>
        <p className='ptoUpper'>{/* this class is for the text ransforamtion to the upper */}
          Old dogs, like old shoes, are comfortable. They might be a bit out of shape and a little worn around the edges, but they fit well.

        </p>
        <div className='heroButton'>
          {/* this will call the fetch fucnction to get the random image of the dog */}
          <button onClick={fetchDogImages}>Show Dogs</button>
          
          {error && <p className='errorMessage' >{error}</p>}
          

        </div>
        
      </div>
      {/* this divs image is updated ecery time the show dogs button is clicked */}
      <div className='heroImg'>
        {
          dogImage && dogImage.length>0 && <img src={dogImage} alt="Random Dog" className='dogImgSize'/>
        }
      </div>
    </main>
  )
}

export default HeroSection
