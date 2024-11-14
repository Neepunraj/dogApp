import React, { useEffect, useState } from 'react'

const BlogsSection = () => {
    /* this is the component for the commentSection which fetches the data from the jasonplaceholder  */
  /* state management  */
    const [comments, setCommets] = useState([])/* initailly its a empty arry */
    const [isloading, setisloading] = useState(false)
    const [showCommentsCount,setShowCommentscount] = useState(8)/* number of the comments card to be displayd */
    const[error, setError] = useState("")
   

    async function fetchComments(){
       
/* fetching data using fetch and try catch */
        try{
            setisloading(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/comments",{
                method:"GET"
            })
            if(!response.ok){
                throw new Error('Unable to get get the response');
            }
            const data = await response.json()
          /* if there is data then comments state will be updated with the attay available */
            if(data){
            
            setCommets(data)
            setisloading(false)

          }
            
        
        }catch(err){
            /* setting the error */
            setError(`Error Occured while fetching Comments! Please Try Again Error:`)
        setisloading(false) 
    }

    }

    /* useEffect hook to fetch when the page is loaded */
    
    useEffect(()=>{
        fetchComments()
    },[])


/* function to load 8 more comments when the button is pressed */
/*at first the comment to be displayed will be 8 comments then the every time
button clicked count will be incready by 8  and */
function loadmoreComments(){
    setShowCommentscount((prevCount)=> prevCount +8 )
    
}
/* there are more than 100 items in comments , used slicing method indexing   */
const displayComments = comments.slice(0,showCommentsCount)


/* body of the comment card is large so displying only few text followed by "..."  , if less then simply showing text */
function shortText(text,length){
    return text.length>length ? text.slice(0,length)+"...":text
}

  return (
    <div className='commentsSections container'>
        <h2>Comments</h2>
        {/* implementation of the grid box  with auto fill  */}
        <div className='gridItem'>
           
            {/*  sliced comments are mapped and display in flex box card */}
            { displayComments.map(commentsProfile=> (
                <div className='commentCard'>
                   {/* emplimented shottext function for name nad body */}
                    <h3>{shortText(commentsProfile.name,10)}</h3>
                    <p>{commentsProfile.email}</p>
                    <p>{shortText(commentsProfile.body,50)}</p>
                    


                </div>
            ))}
        </div>
        <div className='secondBtn'>

            {/* calling function load more comments */}
        {
            showCommentsCount < comments.length && (
                <button onClick={loadmoreComments} >Load</button>
            )
        }

         <div>
            {/* restting to the 8 number of the counts */}
            <button onClick={()=>setShowCommentscount(8)}>Reset</button>
        </div>
      
        </div>
       
        
    </div>
  )
}

export default BlogsSection
