import image from './logoipsum.svg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";


export function Footer() {
    return (
        <div style={{backgroundColor:"#F3F4F6"}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img src={image} alt="logo" style={{
                    height: "100px", 
                    width: "150px", 
                }}/>
            </div>
            <p style={{display: "flex", justifyContent: "center", fontWeight:"400", padding:'auto 0'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Incidunt consequuntur amet culpa cum itaque neque.
            </p>
            <div 
            style = {{
                display: "flex",
                // justifyContent: "space-between"
                gap: "3rem",
                alignContent: "center",
                justifyContent: "center",
                padding: "2rem 0",
                cursor:"pointer",
                fontSize:'1rem',
                color:'#7F57F1'
            }}
            >
                <p>About</p>
                <p>Career</p>
                <p>History</p>
                <p>Service</p>
                <p>Projects</p>
                <p>Blogs</p>
            </div>

            <div style={{display:"flex", justifyContent:"center", gap:"4rem", cursor:'pointer'}}>
                    <span ><FaFacebookSquare style={{height:'60px', height:'60px',cursor:'pointer'}}/></span>
                    <span><FaInstagram style={{height:'60px', height:'60px', cursor:'pointer'}}/></span>
                    <span><BsTwitter style={{height:'60px', height:'60px', cursor:'pointer'}}/></span>
                    <span><FaGithub style={{height:'60px', height:'60px', cursor:'pointer'}}/></span>
                    <span><CiBasketball style={{height:'60px', height:'60px', cursor:'pointer'}}/></span>
                </div>
            </div>
    )
}