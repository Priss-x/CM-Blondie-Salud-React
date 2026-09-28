import hero from '../assets/img/hero.png'

function Hero() {
    return (
        <section>
            <hi>Centro Médico Blondie-Salud</hi>

            <p>Bienvenido a nuestro centro médico.</p>

            <img src={hero} alt= "Centro Médico Blondie-Salud" />
        </section>
    );
}

export default Hero;