import Img1 from "./Img1";
import Img2 from "./Img2";
import Img3 from "./Img3";


export default function Profile(){
  return(
  <div style={{ textAlign:"center"}}>
  <span style={{ marginRight:"10px"}}><Img1/></span>
  <span style={{ marginRight:"10px"}}><Img2/></span>
  <span><Img3/></span>
  </div>);
}