import style from '../../styles/hero.module.css'
import heroImg from '../../assets/hero__img.png'

const Hero = () => {
  return (
    <section className={`${style.hero}`}>
      <div className={`${style.home__container} container grid`}>
        
        <div className={`${style.home__data}`}>
          <h1 className={`${style.home__title}`}>
            Gerenciamento <br /> de Midias <br /> <span className={style.text__gradient}>Sociais</span>
          </h1>
          <h3 className={`${style.home__description}`}>
            Aumente sua visibilidade e conquiste resultados reais nas redes sociais.
          </h3>

          <button href="#" className={style.btn}>
            Serviços
          </button>
            
        </div>

        {/* <video autoPlay loop muted playsInline className={`${style.hero__img}`} >
          <source src={heroVideo} type="video/webm" />
        </video> */}
        
        <div className={style.hero__ellipse}/>
        <img className={style.hero__img} src={heroImg}/>

      </div>

    </section>
  )
}

export default Hero