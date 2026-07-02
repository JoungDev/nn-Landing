<template>
    <section id="nosotros" class="about" aria-labelledby="about-title">
        <div class="about__container">
            <div class="about__heading">
                <p class="about__eyebrow">Sobre el proyecto</p>

                <h2 id="about-title" class="about__title">
                    Vestimos historias que Colombia no debe olvidar.
                </h2>
            </div>

            <div class="about__content">
                <p class="about__lead">
                    NN es un espacio de creación
                    donde las historias que el país ha preferido ocultar encuentran su lugar en prendas de identidad y
                    propósito. Vestirnos con nuestra
                    propia historia es, antes que nada, el primer paso para dejar de ser una sociedad condenada a
                    cometer los mismos errores.
                </p>

                <div class="about__text">
                    <p>
                        No buscamos convertir el dolor en espectáculo. Buscamos dignificar
                        las historias, reconocer a las víctimas y mantener vivas las
                        preguntas que como sociedad no debemos dejar de hacernos.
                    </p>

                    <p>
                        Cada diseño nace de una investigación, una reflexión y una intención
                        artística. Vestir NN es llevar una historia, conversar sobre ella y
                        resistir frente al olvido.
                    </p>
                </div>
            </div>

            <div class="about__manifesto">
                <span class="about__manifesto-number">NN / 001</span>

                <blockquote>
                    “Moda con mensaje, tejidos con historia”
                </blockquote>

                <p>Resistencia · Arte · Identidad · Colombia</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about {
    color: #111111;
    background-color: #f2f0eb;
}

.about__container {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    width: min(100% - 40px, 1200px);
    margin-inline: auto;
    padding-block: 120px;
    gap: 80px 70px;
}

.about__eyebrow {
    margin-bottom: 22px;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.about__title {
    max-width: 610px;
    font-size: clamp(2.8rem, 5.6vw, 5.8rem);
    font-weight: 900;
    line-height: 0.92;
    letter-spacing: -0.055em;
    text-transform: uppercase;
}

.about__content {
    align-self: end;
}

.about__lead {
    max-width: 620px;
    font-size: clamp(1.3rem, 2.2vw, 2rem);
    font-weight: 700;
    line-height: 1.3;
}

.about__text {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 42px;
    gap: 28px;
}

.about__text p {
    color: #454545;
    font-size: 0.98rem;
    line-height: 1.75;
}

.about__manifesto {
    position: relative;
    grid-column: 1 / -1;
    padding: 56px;
    overflow: hidden;
    color: #ffffff;
    background-color: #0a0a0a;
}

.about__manifesto::after {
    position: absolute;
    right: -80px;
    bottom: -130px;
    width: 340px;
    height: 340px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    content: '';
}

.about__manifesto-number {
    display: block;
    margin-bottom: 44px;
    color: #949494;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.18em;
}

.about__manifesto blockquote {
    position: relative;
    z-index: 1;
    max-width: 870px;
    font-size: clamp(2rem, 4vw, 4.4rem);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.04em;
    text-transform: uppercase;
}

.about__manifesto p {
    position: relative;
    z-index: 1;
    margin-top: 42px;
    color: #bcbcbc;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

@media (max-width: 850px) {
    .about__container {
        grid-template-columns: 1fr;
        padding-block: 90px;
        gap: 54px;
    }

    .about__content {
        align-self: auto;
    }

    .about__manifesto {
        grid-column: auto;
    }
}

@media (max-width: 560px) {
    .about__container {
        width: min(100% - 32px, 1200px);
        padding-block: 72px;
    }

    .about__text {
        grid-template-columns: 1fr;
    }

    .about__manifesto {
        padding: 38px 24px;
    }

    .about__manifesto-number {
        margin-bottom: 30px;
    }
}
</style>