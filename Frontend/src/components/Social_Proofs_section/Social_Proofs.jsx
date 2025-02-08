import React from 'react'
import { Social_proofs_icons_List } from "../../assets/Social_proofs";
import './Social_Proofs.css'



const Social_Proofs = () => {
  return (
            <div className='Social_Proofs_sec'>
                <p className="join-para">Join 4000+ companies already growing</p>
<div className="Social_Proofs_sec_icons">                
                {Social_proofs_icons_List.map((icon)=>{
                return (
                    
                        <img className="social_icon" src={icon} alt="" />
                    
                    
                )
            })     }
            </div>
            </div>
                   
        
  )
}

export default Social_Proofs