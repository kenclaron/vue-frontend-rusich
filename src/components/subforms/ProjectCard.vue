<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  metro: {
    type: String,
    required: true,
  },
  metroColor: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  flats: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img :src="image" alt="Изображение проекта" style="width: 100%" />
    </div>
    <div class="card__content">
      <div>
        <h5>{{ title }}</h5>
        <div class="card__content__description">
          <i
            class="card__content__description__circle"
            :style="{ backgroundColor: metroColor }"
          ></i>
          <p class="card__content__description__metro subtitle">
            {{ metro }}
          </p>
          <img
            class="card__content__description__image"
            src="../icons/car.svg"
          />
          <p class="card__content__description__time subtitle">
            {{ time }} мин
          </p>
        </div>
      </div>
      <div class="card__content__subitems">
        <p class="card__content__subitems__flats subtitle">
          {{ flats }} квартир
        </p>
        <p class="card__content__subitems__price">От {{ price }} млн ₽</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cssProps() {
      return {
        "--metro-color": this.metroColor,
      };
    },
  },
};
</script>

<style>
.card {
  display: grid;
  gap: 0;
  flex-direction: column;

  width: 100%;
  max-width: 416px;
  max-height: 561px;

  border-radius: 24px;
  overflow: hidden;

  background-color: var(--color-background);
  box-shadow: 0 0 2px var(--vt-c-divider-light-2);

  cursor: pointer;

  transition: var(--transition);
}

.card:hover {
  box-shadow: 0 0 8px var(--vt-c-divider-light-2);
}

.card:active {
  box-shadow: 0 0 16px var(--vt-c-divider-light-2);
}

.card__image {
  position: relative;
  width: 100%;

  user-select: none;
}

.card__image:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.card__image img {
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

.card__content {
  display: grid;
  flex-direction: column;
  grid-template-rows: 1fr auto;
  gap: 8px;

  padding: 24px;

  min-height: 146px;
}

.card__content__description {
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 8px;
  color: var(--vt-c-text-dark-2);
}

.card__content__description__circle {
  display: block;
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 50%;
}

.card__content__description__image {
  user-select: none;
}

.card__content__subitems {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: var(--vt-c-green);
}

.card__content__subitems__flats {
  padding: 8px 16px;
  border-radius: 8px;

  text-align: center;

  background-color: var(--vt-c-green-mute);
}

@media (max-width: 960px) {
  .card {
    width: calc(50% - 16px);
  }
}

@media (max-width: 680px) {
  .card {
    width: 100%;
    max-width: 680px;
    max-height: fit-content;
  }
}
</style>
