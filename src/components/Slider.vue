<template>
  <section class="slider compact">
    <div
      class="slider__image"
      :style="{ backgroundImage: `url(${images[page - 1]})` }"
    ></div>
    <div class="slider__controller">
      <button
        class="slider__controller__button slider__controller__button--outlined"
        @click="prevPage()"
      >
        <i></i>
      </button>
      <p class="slider__controller__pagination">{{ page }} / 5</p>
      <button
        class="slider__controller__button right slider__controller__button--outlined"
        @click="nextPage()"
      >
        <i></i>
      </button>
    </div>
    <div class="slider__content">
      <img
        class="slider__content__title"
        src="../assets/title.svg"
        alt="Русич Котельники"
        width="380"
        height="68"
      />
      <div class="slider__content__description">
        <p>{{ phrases[page - 1] }}</p>
        <div class="slider__pagination">
          <div class="slider__pagination__element">
            <i></i>
          </div>
          <div class="slider__pagination__element">
            <i></i>
          </div>
          <div class="slider__pagination__element">
            <i></i>
          </div>
          <div class="slider__pagination__element">
            <i></i>
          </div>
          <div class="slider__pagination__element">
            <i></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      phrases: [
        "Хорошие квартиры \n по льготной ипотеке 12%",
        "Прекрасные квартиры \n по льготной ипотеке 12%",
        "Отличные квартиры \n по льготной ипотеке 12%",
        "Замечательные квартиры \n по льготной ипотеке 12%",
        "Лучшие квартиры \n по льготной ипотеке 12%",
      ],
      images: [
        "./images/1.jpg",
        "./images/4.jpg",
        "./images/5.jpg",
        "./images/2.jpg",
        "./images/3.jpg",
      ],
    };
  },
  mounted() {
    this.changePagination();
  },
  methods: {
    nextPage() {
      if (this.page === this.images.length) this.page = 1;
      else this.page++;

      this.changePagination();
    },
    prevPage() {
      if (this.page === 1) this.page = this.images.length;
      else this.page--;

      this.changePagination();
    },
    changePagination() {
      let elements = document.getElementsByClassName(
        "slider__pagination__element"
      );

      for (let i = 0; i < elements.length; i++) {
        if (i < this.page) elements[i].children[0].style.width = "100%";
        else elements[i].children[0].style.width = "0";
      }
    },
  },
};
</script>

<style scoped>
.slider {
  position: relative;

  height: 704px;
}

.slider__image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-top-right-radius: 80px;
  transition: var(--transition);
}

.slider__controller {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin: 40px 56px;

  position: absolute;

  color: var(--color-text-light);

  font-size: 24px;

  bottom: 0;
  right: 0;
}

.slider__controller__button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  background-color: transparent;
  border: 1.5px solid var(--vt-c-white);
  color: var(--color-text-light);

  border-radius: 8px;

  text-align: center;
  text-decoration: none;

  font-size: 16px;
  cursor: pointer;

  box-shadow: 0 0 0 var(--vt-c-divider-light-1);
  transition: var(--transition);
}

.slider__controller__button > i {
  width: 24px;
  height: 24px;

  background-image: url("./icons/arrow.svg");
}

.slider__controller__button:hover {
  background-color: var(--vt-c-white);
}

.slider__controller__button:hover > i {
  background-image: url("./icons/arrow-selected.svg");
}

.slider__controller__pagination {
  width: 64px;
  text-align: center;
}

.slider__content {
  position: absolute;
  display: flex;
  gap: 48px;
  flex-direction: column;

  bottom: 0;
  left: 0;

  width: 560px;
}

.slider__content__title {
  margin-left: 64px;
}

.slider__content__description {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 32px 152px 32px 64px;
  border-top-right-radius: 80px;

  width: 100%;
  min-height: 128px;

  gap: 12px;

  font-size: 24px;
  line-height: 32px;
  white-space: pre-line;

  background-color: var(--vt-c-green);
  color: var(--color-text-light);
}

.right > i {
  transform: rotate(180deg);
}

.slider__pagination {
  width: 50%;
  min-width: 96px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  height: 3px;
  gap: 4px;
}

.slider__pagination__element {
  width: attr("data-width");
  background-color: #fff5;
  width: 20%;
  display: flex;
  flex-direction: row;
  height: 100%;
  border-radius: 4px;
}

.slider__pagination__element > i {
  width: 0;
  height: 100%;
  background-color: #fff;
}

@media (max-width: 960px) {
  .slider__content {
    width: fit-content;
    max-width: 65%;
  }
  .slider__content__title {
    max-width: 75%;
  }
  .slider__content__description {
    padding: 32px 64px;
    width: 100%;
  }
  .slider__controller__pagination {
    display: none;
  }
}
@media (max-width: 760px) {
  .slider__controller {
    flex-direction: column-reverse;
  }
  .slider__controller__button {
    background-color: var(--vt-c-white);
  }
  .slider__controller__button > i {
    background-image: url(/src/components/icons/arrow-selected.svg);
  }
}

@media (max-width: 760px) {
  .slider {
    display: flex;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 440px) {
  .slider {
    height: calc(100vh - 96px);
  }
  .slider__content {
    max-width: 100vw;
  }
  .slider__content__title {
    margin-left: 16px;
  }
  .slider__content__description {
    padding: 36px 128px 110px 16px;
    font-size: 16px;
  }
  .slider__controller__button {
    width: 36px;
    height: 36px;
  }
  .slider__controller {
    z-index: 1;
    margin-bottom: 96px;
  }
}
</style>
