import Hero from '../Images/hero.png'
import '../Styles/Home.css'

export default function Home() {
    return (
        <>
        <div className="contain">
            <div className="words">
                <h1 className='not'>
                    Explore A Virtual World Full of Oppurtunities
                </h1>
                <p>
                    Get ready for a journey into the mostbeautiful virtual words
                </p>
            </div>
            <div className="image">
                <img className='hero' src={Hero} alt='shouting_boy' />
            </div>
        </div>
        </>
    )
}