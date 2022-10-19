<script setup>
defineProps({
  color: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flat">
    <div class="flat__header">
      <p
        class="flat__header__new subtitle"
        :style="color && { backgroundColor: `${color}15`, color: color }"
      >
        {{ text }}
      </p>
      <button
        class="flat__header__projects__button flat__header__projects__button--outlined"
      ></button>
    </div>
    <div class="flat__image">
      <img
        src="./../../assets/flat.svg"
        alt="Изображение проекта"
        width="88"
        height="160"
      />
    </div>
    <div class="flat__content">
      <div class="flat__content__header">
        <div>
          <p class="flat__content__header__count">1-к</p>
          <p class="flat__content__header__square">32,1 м<sup>2</sup></p>
        </div>
        <p class="flat__content__header__floor">3 этаж</p>
      </div>
      <hr />
      <div class="flat__content__main">
        <p class="flat__content__main__project">Проект</p>
        <p class="flat__content__main__project__value">Русич Котельники</p>
        <p class="flat__content__main__geo">Расположение</p>
        <p class="flat__content__main__geo__value">Корп. 9, секц. 2</p>
        <p class="flat__content__main__time">Сдача</p>
        <p class="flat__content__main__time__value">1 кв. 2025</p>
      </div>
      <hr />
      <div class="flat__content__footer">
        <h5 class="flat__content__footer__title">8 496 657 ₽</h5>
        <span class="flat__content__footer__description"
          >В ипотеку от 22 559 ₽/мес</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cssProps() {
      return {
        "--new-color": this.color,
      };
    },
  },
};
</script>

<style>
.flat {
  display: grid;
  gap: 8px;
  flex-direction: column;

  padding: 24px;

  width: 100%;
  max-width: 416px;

  border-radius: 24px;
  overflow: hidden;

  background-color: var(--color-background);
  box-shadow: 0 0 2px var(--vt-c-divider-light-2);

  cursor: pointer;

  transition: var(--transition);
}

.flat:hover {
  box-shadow: 0 0 8px var(--vt-c-divider-light-2);
}

.flat:active {
  box-shadow: 0 0 16px var(--vt-c-divider-light-2);
}

.flat__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.flat__header__new {
  padding: 8px 16px;
  width: fit-content;
  border-radius: 8px;
  background-color: var(--vt-c-green-mute);
  color: var(--vt-c-green);
}

.flat__header__projects__button {
  width: 32px;
  height: 32px;
  background-color: var(--color-text-light);
  color: var(--color-text-light);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 2px var(--vt-c-divider-light-2);
  border: 1px solid #ccc;
  transition: var(--transition);
}

.flat__header__projects__button:hover {
  box-shadow: 0 0 8px var(--vt-c-divider-light-2);
}

.flat__header__projects__button::after {
  content: url("./../icons/like-full.svg");
  position: relative;
  top: 2px;
}

.flat__image {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 48px 0 16px;
}

.flat__content__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
}

.flat__content__header > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

.flat__content__header__count {
  color: var(--vt-c-green);
}

.flat__content__header__floor,
.flat__content__header__square {
  font-weight: 500;
}

.flat__content__main {
  display: grid;
  grid-template-columns: auto 1fr;
  font-size: 14px;
  margin: 16px 0;
  gap: 4px;
}

.flat__content__main > p:nth-child(2n) {
  text-align: right;
}

.flat__content__main > p:nth-child(2n - 1) {
  color: var(--vt-c-text-dark-2);
}

.flat__content__footer {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 16px;
}

.flat__content__footer__title {
  color: var(--vt-c-green);
  width: fit-content;
}

.flat__content__footer__description {
  font-size: 14px;
  color: var(--vt-c-text-dark-2);
  border-bottom: 1px solid var(--vt-c-text-dark-2);
  width: fit-content;
}
</style>
