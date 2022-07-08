// special SSR image component
import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div>
            <h1 className={`${styles.blue} ${styles.bigFont}`}>About</h1>
            
            <p className={[styles.blue ,styles.bigFont].join(" ")}>I am a super cool software engineer now, I make super cool stuff with the codes.</p>

            <div>
                <style jsx>{`
                    .orangeText {
                        color: orange;
                    }
                    p {
                        font-size: 70px;
                    }
                `}</style>
                <p className="orangeText">Yello styling boi I WOULD LOVE TO DO CODE FOR YOU TOO ! </p>
            </div>
            {/* loading an image locally */}
            <Image 
                // '/' assumes you are in the public folder
                src='/IMG_3952.jpg'
                alt='my fav villain'
                width={600}
                height={800}
            />
            {/* outside imports need to be whitelisted */}
            <Image 
                src='https://placekitten.com/300/300'
                alt='a magnificent creature'
                width={300}
                height={300}
            />


        </div>
    )
}