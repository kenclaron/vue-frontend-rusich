<template>
  <section class="about-section">
    <div class="container">
      <div class="content">
        <div class="content__description compact">
          <h3 class="content__description__title">О концерне</h3>
          <div class="content__description__container">
            <p class="content__description__container__text">
              Девелопмент жилой и коммерческой недвижимости с портфелем проектов
              более 1 000 000 м<sup>2</sup>
            </p>
          </div>
          <div class="content__description__container__qualities">
            <div>
              <h3>650 тыс м<sup>2</sup> +</h3>
              <p>портфель в сфере жилищного строительства</p>
            </div>
            <div>
              <h3>346 тыс м<sup>2</sup> +</h3>
              <p>портфель в сфере складской недвижимости</p>
            </div>
          </div>
        </div>
        <div class="content__gallery">
          <span class="content__gallery__background-title">РУСИЧ</span>
          <div
            class="content__gallery__image content__gallery__image--small-vertical"
          >
            <img
              src="/images/1.jpg"
              alt="Русич котельники"
              width="280"
              height="384"
            />
          </div>
          <div
            class="content__gallery__image content__gallery__image--big-vertical"
          >
            <img
              src="/images/6.jpg"
              alt="Русич котельники"
              width="432"
              height="638"
            />
          </div>
          <div class="video-container">
            <a class="video-container__box" href="#">
              <div class="video-container__box__play"></div>
            </a>
            <span class="video-container__description subtitle">
              Видео о концерне
            </span>
          </div>
          <div
            class="content__gallery__image content__gallery__image--horizontal"
          >
            <img
              src="/images/3.jpg"
              alt="Русич котельники"
              width="560"
              height="386"
            />
          </div>
        </div>
        <div class="content__action compact">
          <button class="content__action__button">Подробнее</button>
          <h3 class="content__action__description">
            Все строительные проекты концерна «Русич» отличаются
            индивидуальностью сооружений, их повышенной комфортностью и
            качеством.
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: #ebefe6;

  padding: 112px 0 136px;

  color: #768160;

  overflow: hidden;
}

.content {
  display: flex;
  flex-direction: column;
}

.content__description {
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 2fr;
  gap: 56px 16px;
}

.content__description__container {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.content__description__container__text {
  max-width: 336px;
}

.content__description__container__qualities {
  display: flex;
  flex-direction: row;
  gap: 56px;
  grid-column-start: 2;
  grid-column-end: 3;
}

.content__description__container__qualities > div {
  max-width: 256px;
}

.content__gallery {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 110vw;

  margin: 96px 0 96px -5vw;
}
.content__gallery__image {
  position: relative;
  width: 25%;
  user-select: none;

  margin: 0 16px;
  border-radius: 24px;

  box-shadow: 0 0 8px transparent;
  transition: var(--transition);
}
.content__gallery__image:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.content__gallery__image > img {
  border-radius: 24px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.content__gallery__image:hover {
  box-shadow: 0 0 8px var(--vt-c-divider-light-2);
}

.content__gallery__image--small-vertical {
  width: 280px;
}
.content__gallery__image--small-vertical::after {
  padding-bottom: 135%;
}
.content__gallery__image--big-vertical {
  width: 432px;
}
.content__gallery__image--big-vertical::after {
  padding-bottom: 147.5%;
}
.content__gallery__image--horizontal {
  width: 560px;
}
.content__gallery__image--horizontal::after {
  padding-bottom: 68.5%;
}

.content__gallery__background-title {
  font-size: 480px;
  position: absolute;
  top: -16px;
  left: 15vw;
  color: #ebefe6;
  text-shadow: 2px 0 #768160, -2px 0 #768160, 0 2px #768160, 0 -2px #768160,
    1px 1px #768160, -1px -1px #768160, 1px -1px #768160, -1px 1px #768160;
  opacity: 0.1;
  user-select: none;
}

.video-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 16px;
}

.video-container__box {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  width: 192px;
  height: 192px;

  background-color: var(--vt-c-green);
  border-radius: 24px;

  transition: var(--transition);
}

.video-container__box:hover {
  background-color: var(--vt-c-white);
}
.video-container__box:hover .video-container__box__play {
  background-color: var(--vt-c-green);
}

.video-container__box:hover .video-container__box__play::after {
  border-left: 15px solid var(--vt-c-white);
}

.video-container__description {
  font-size: 14px;
}
.video-container__box__play {
  width: 64px;
  height: 64px;

  background-color: var(--vt-c-white);
  border-radius: 50%;

  transition: var(--transition);
}
.video-container__box__play::after {
  content: "";

  position: absolute;
  left: 50%;
  top: 50%;

  width: 0;
  height: 0;

  border-left: 15px solid var(--vt-c-green);
  border-bottom: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid transparent;

  clear: both;
  transform: translate(-50%, -50%);
  margin-left: 7.5px;
  transition: var(--transition);
}

.content__action {
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 2fr;
  align-items: flex-end;
  gap: 16px;
}
.content__action__button {
  background-color: var(--vt-c-green);
  border: none;
  color: var(--color-text-light);
  padding: 16px 70px;
  margin-right: 17%;
  height: 64px;
  width: fit-content;
  border-radius: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: var(--transition);
}

.content__action__button:hover {
  box-shadow: 0 0 8px var(--vt-c-divider-light-1);
}

.content__action__description {
  max-width: 648px;
}

@media (max-width: 960px) {
  .content__action {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 24px;
  }
  .content__gallery__background-title {
    top: -16px;
    left: 10vw;
    font-size: 260px;
  }
  .content__gallery {
    width: 135vw;
  }
  .video-container__box {
    width: 160px;
    height: 160px;
  }
  .content__gallery__image--horizontal {
    margin-top: -32px;
  }
  .content__description__container__qualities {
    grid-template-columns: 1fr 2fr;
    grid-column-start: 1;
    grid-column-end: 3;
    gap: 4px;
  }
  .content__description {
    grid-template-columns: 245px 2fr;
  }
  .content__description__title {
    width: 245px;
  }
}
@media (max-width: 640px) {
  .content__gallery {
    margin-left: 0;
  }
  .content__gallery__background-title {
    top: -64px;
    left: 0;
    width: 100%;
    font-size: 100px;
    text-align: center;
  }
  .content__gallery {
    width: 100%;
    justify-content: center;
  }
  .video-container {
    position: absolute;
    right: 16px;
  }
  .video-container__box {
    width: 112px;
    height: 112px;
  }
  .video-container__box__play {
    width: 48px;
    height: 48px;
  }
  .video-container__description {
    display: none;
  }
  .content__gallery__image--horizontal {
    display: none;
  }
  .content__gallery__image--big-vertical {
    width: 66%;
    max-width: 360px;
  }
  .content__gallery__image--small-vertical {
    position: absolute;
    bottom: -32px;
    left: 16px;
    z-index: 1;
    width: 40%;
  }
  .content__gallery__image--small-vertical:after {
    padding-bottom: 65%;
  }
  .content__description__container__qualities {
    grid-template-columns: 1fr 2fr;
    grid-column-start: 1;
    grid-column-end: 3;
    gap: 4px;
  }
  .content__description {
    display: flex;
    flex-direction: column;
  }
  .content__description__title {
    width: 245px;
  }
  .content__description__container__qualities h3 {
    font-size: 20px;
  }
}
</style>
