import '../App.css';
import HobbyCard from '../components/HobbyCard';

export default function Hobby() {
  return (
    <>
      <div className="hobbyBody">
        <div className="hobbyWrapper">
          <h1>SHEEEEEEEEEEEEEEEEEEESH</h1>
          <div className="hobbyCardHolder">
            <HobbyCard imageSrc = "./image1.jpg" hobbyName="Basketball" hobbyDesc="i love basketball"/>
            <HobbyCard imageSrc = "./image2.jpg" hobbyName="Gaming" hobbyDesc="i love gaming"/>
            <HobbyCard imageSrc = "./image3.jpg" hobbyName="Watching Shows/Movies" hobbyDesc="i love watchingi love watchingi love watchingi love watching"/>
            <HobbyCard imageSrc = "./image2.jpg" hobbyName="Gaming" hobbyDesc="i love gaming"/>
            <HobbyCard imageSrc = "./image1.jpg" hobbyName="Basketball" hobbyDesc="i love basketball"/>
            <HobbyCard imageSrc = "./image2.jpg" hobbyName="Gaming" hobbyDesc="i love gaming"/>
          </div>
        </div>
      </div>
    </>
    
  )
}
