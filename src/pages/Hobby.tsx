import '../App.css';
import HobbyCard from '../components/HobbyCard';

export default function Hobby() {
  return (
    <>
      <div className="hobbyBody">
        <div className="hobbyWrapper">
          <h1>My Hobbies!</h1>
          <div className="hobbyCardHolder">
            <HobbyCard imageSrc = "./image1.jpg" hobbyName="Basketball" hobbyDesc="Since I was a kid, I have been playing basketball. Growing up, I joined barangay leagues and my school sports festival. Fortunately, on my freshman year in college, I was selected to join the varsity team. However, the pandemic destoryed my dreams and now my lungs just cant."/>
            <HobbyCard imageSrc = "./image2.jpg" hobbyName="Gaming" hobbyDesc="Being techy is a byproduct of gaming as to the reason why I graduated with Computer Science degree. Gaming has been part of my life ever since. Y8.com, GTA San Andreas, Counter-Strike 1.6 are just few examples of the games I grew up playing. "/>
            <HobbyCard imageSrc = "./image3.jpg" hobbyName="Watching Shows/Movies" hobbyDesc="As I was turning as a young adult, my time for playing sports or games have decreased significantly. I just want to rest most of the time, and with rest comes a long list of movies to watch. Now, I mostly spend my rest days with waching movies or shows"/>
            <HobbyCard imageSrc = "./image2.jpg" hobbyName="Gaming" hobbyDesc="i love gaming"/>
            <HobbyCard imageSrc = "./image1.jpg" hobbyName="Basketball" hobbyDesc="i love basketball"/>
            <HobbyCard imageSrc = "./image2.jpg" hobbyName="Gaming" hobbyDesc="i love gaming"/>
          </div>
        </div>
      </div>
    </>
    
  )
}
