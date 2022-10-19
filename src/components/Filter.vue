<template>
  <section class="filter-section">
    <div class="container compact">
      <h3>Выбрать квартиру</h3>
      <div class="filters">
        <div class="filters__column filter-button">
          <div class="filters__item">
            <button
              class="filter-button-mobile"
              @click="() => (extended = !extended)"
            >
              Фильтр
              <strong v-if="filters.length > 0">{{ filters.length }}</strong>
            </button>
            <ul class="filter-buttons-labels">
              <li
                class="filter-button-label"
                :key="filter.name"
                v-for="filter in filters"
                @click="() => clearValue(filter.name)"
              >
                {{ filter.value }}
              </li>
              <li
                v-if="filters.length > 0"
                class="filter-button-label filter-button-label--active"
                @click="() => clearValues()"
              >
                Сбросить все
              </li>
            </ul>
          </div>
        </div>
        <div class="filters__column xs-hide" :class="extended && 'extended'">
          <div class="filters__item">
            <p class="subtitle">Проект</p>
            <v-select
              :clearable="false"
              v-model="selected.projects"
              :options="projects"
              outlined
              @focus="(e) => getFilters()"
              @keydown="(event) => nameKeydown(event)"
            />
          </div>
          <div class="filters__item">
            <p class="subtitle">Отделка</p>
            <v-select
              :clearable="false"
              v-model="selected.finish"
              :options="finish"
              outlined
              @keydown="(event) => nameKeydown(event)"
            />
          </div>
        </div>
        <div class="filters__column xs-hide" :class="extended && 'extended'">
          <div class="filters__item">
            <p class="subtitle">Количество комнат</p>
            <div class="checkboxes">
              <input
                type="checkbox"
                id="c-1"
                value="студия"
                v-model="checkedFlats"
              />
              <label for="c-1">C-1</label>
              <input
                type="checkbox"
                id="1-k"
                value="1-комнатная"
                v-model="checkedFlats"
              />
              <label for="1-k">1-к</label>
              <input
                type="checkbox"
                id="2-k"
                value="2-комнатная"
                v-model="checkedFlats"
              />
              <label for="2-k">2-к</label>
              <input
                type="checkbox"
                id="3-k"
                value="3-комнатная"
                v-model="checkedFlats"
              />
              <label for="3-k">3-к</label>
              <input
                type="checkbox"
                id="4-k"
                value="4-комнатная или более"
                v-model="checkedFlats"
              />
              <label for="4-k">4-к+</label>
            </div>
          </div>
          <div class="filters__item">
            <p class="subtitle">Этаж</p>
            <Slider
              v-model="sliderValue.floor"
              class="slider-blue"
              :min="1"
              :max="16"
            />
          </div>
        </div>
        <div class="filters__column md-hide" :class="extended && 'extended'">
          <div class="filters__item">
            <p class="subtitle">Площадь</p>
            <Slider
              v-model="sliderValue.area"
              class="slider-blue"
              :min="24"
              :max="160"
            />
          </div>
          <div class="filters__item">
            <p class="subtitle">Срок сдачи</p>
            <v-select
              :clearable="false"
              v-model="selected.deadline"
              :options="deadline"
              outlined
              @keydown="(event) => nameKeydown(event)"
            />
          </div>
        </div>
        <div class="filters__column md-hide" :class="extended && 'extended'">
          <div class="filters__item">
            <p class="subtitle">Стоимость, млн ₽</p>
            <Slider
              v-model="sliderValue.price"
              class="slider-blue"
              :step="-1"
              :min="4.1"
              :max="12.4"
            />
          </div>
        </div>
      </div>
      <div class="additional">
        <button
          class="additional__filter xs-hide"
          :class="extended && 'extended-change'"
          @click="
            () => {
              extended = !extended;
            }
          "
        >
          Расширенный фильтр
        </button>
        <a class="additional__flats" href="#">Найдено 963 квартиры</a>
        <button class="additional__clear xs-hide" @click="clearValues()">
          Сбросить
        </button>
      </div>
      <div class="finder">
        <div class="list-flats">
          <FlatCard text="Скидка до 250 000 ₽" />
          <FlatCard text="С отделкой" color="#63A8BE" />
        </div>
        <div class="finder__controller">
          <button class="finder__controller__navigate">
            Смотреть 963 квартиры
          </button>
          <div class="finder__controller__pagination__main xs-hide">
            <button
              class="finder__controller__pagination finder__controller__pagination--active finder__controller__pagination--outlined"
            >
              1
            </button>
            <button
              class="finder__controller__pagination finder__controller__pagination--outlined"
            >
              2
            </button>
            <button
              class="finder__controller__pagination finder__controller__pagination--outlined"
            >
              3
            </button>
            <button
              class="finder__controller__pagination finder__controller__pagination--outlined"
            >
              4
            </button>
            <button
              class="finder__controller__pagination finder__controller__pagination--outlined"
            >
              5
            </button>
            <button
              class="finder__controller__button finder__controller__button--outlined"
            >
              <i></i>
            </button>
            <button
              class="finder__controller__button right finder__controller__button--outlined"
            >
              <i></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FlatCard from "./subforms/FlatCard.vue";
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
    FlatCard,
  },
  data() {
    return {
      extended: false,
      checkedFlats: [],
      selected: {
        projects: "Любой",
        finish: "Любая",
        deadline: "Любой",
      },
      projects: [
        "Любой",
        "Русич Котельники",
        "Русич Кантемировский",
        "Русич Добролюбов",
      ],
      finish: [
        "Любая",
        "Без отделки",
        "Черновая отделка",
        "Предчистовая отделка",
        "Чистовая отделка",
        "Отделка «под ключ»",
      ],
      deadline: [
        "Любой",
        "В течение года",
        "В течение 2-3 лет",
        "Через 3 года и более",
      ],
      sliderValue: {
        floor: [1, 16],
        area: [24, 160],
        price: [4.1, 12.1],
      },
      filters: [],
    };
  },
  beforeUpdate: function () {
    this.filters = this.getFilters();
  },
  methods: {
    nameKeydown(e) {
      e.preventDefault();
    },
    clearValue(name) {
      switch (name) {
        case "projects":
          this.selected.projects = "Любой";
          break;
        case "finish":
          this.selected.finish = "Любая";
          break;
        case "checkedFlats":
          this.checkedFlats = [];
          break;
        case "floor":
          this.sliderValue.floor = [1, 16];
          break;
        case "area":
          this.sliderValue.area = [24, 160];
          break;
        case "deadline":
          this.selected.deadline = "Любой";
          break;
        case "price":
          this.sliderValue.price = [4.1, 12.1];
          break;
      }
    },
    clearValues() {
      (this.checkedFlats = []),
        (this.selected = {
          projects: "Любой",
          finish: "Любая",
          deadline: "Любой",
        }),
        (this.sliderValue = {
          floor: [1, 16],
          area: [24, 160],
          price: [4.1, 12.1],
        });
    },
    getFilters() {
      let data = [];

      if (this.selected.projects !== "Любой")
        data.push({
          name: "projects",
          value: "Проект: " + this.selected.projects,
        });
      if (this.selected.finish !== "Любая")
        data.push({
          name: "finish",
          value: "Отделка: " + this.selected.finish,
        });
      if (this.checkedFlats.length > 0)
        data.push({
          name: "checkedFlats",
          value: "Квартиры: " + this.checkedFlats.join(", "),
        });
      if (this.sliderValue.floor[0] !== 1 || this.sliderValue.floor[1] !== 16)
        data.push({
          name: "floor",
          value: "Этажи: " + this.sliderValue.floor.join("-"),
        });
      if (this.sliderValue.area[0] !== 24 || this.sliderValue.area[1] !== 160)
        data.push({
          name: "area",
          value: "Площадь: " + this.sliderValue.area.join("-") + "м²",
        });
      if (this.selected.deadline !== "Любой")
        data.push({
          name: "deadline",
          value: "Срок сдачи: " + this.selected.deadline,
        });
      if (
        this.sliderValue.price[0] !== 4.1 ||
        this.sliderValue.price[1] !== 12.1
      )
        data.push({
          name: "price",
          value: "Площадь: " + this.sliderValue.area.join("-") + "м²",
        });

      return data;
    },
  },
};
</script>

<style scoped>
.filter-section {
  background-color: var(--color-background);
  padding: 72px 0 128px 0;
}

.container {
  display: flex;
  flex-direction: column;

  gap: 32px;
}

.filters {
  display: flex;
  flex-direction: row;
  gap: 16px;

  width: 100%;
}

.filters__column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 304px;
}

.filters__item > p {
  margin-bottom: 8px;
  color: var(--vt-c-text-dark-2);
  font-weight: 500;
}

.additional {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.additional__filter {
  pointer-events: none;
  opacity: 0.25;
}
.additional__clear {
  margin-left: 80px;
}
.additional__filter,
.additional__clear {
  appearance: none;
  -webkit-appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: 14px;
  transition: var(--transition);
}
.additional__filter:hover,
.additional__clear:hover {
  color: var(--vt-c-green);
}
.additional__filter:active,
.additional__clear:active,
.additional__filter:hover,
.additional__clear:hover {
  background-color: transparent !important;
}
.additional__filter::after {
  content: "—";
  margin-left: 8px;
  color: var(--vt-c-green);
  transition: var(--transition);
}
.additional__filter:hover::after {
  color: var(--vt-c-green);
}
.additional__clear::after {
  content: "✕";
  margin-left: 8px;
  color: var(--color-text);
  transition: var(--transition);
}
.additional__clear:hover::after {
  color: var(--vt-c-green);
}
.additional__flats {
  color: var(--vt-c-green);

  text-align: center;

  padding: 8px;
  font-weight: 500;

  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 2px solid var(--vt-c-green);

  border-radius: 8px;

  text-decoration: none;

  transition: var(--transition);
}
.additional__flats:hover {
  border-bottom: 2px solid transparent;
  background-color: var(--color-link-hover);
}

.list-flats {
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.finder__controller {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 40px 0;

  color: var(--vt-c-green);

  font-size: 24px;

  bottom: 0;
  right: 0;
}

.finder__controller__button {
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 48px;
  min-height: 48px;

  background-color: transparent;
  border: 1.5px solid var(--vt-c-green);
  color: var(--color-text-light);

  border-radius: 8px;

  text-align: center;
  text-decoration: none;

  font-size: 16px;
  cursor: pointer;

  box-shadow: 0 0 0 var(--vt-c-divider-light-2);
  transition: var(--transition);
}

.finder__controller__button > i {
  width: 24px;
  height: 24px;

  background-image: url("./icons/arrow-selected.svg");
}

.finder__controller__button:hover {
  background-color: var(--vt-c-green-mute);
}

.finder__controller__button:hover > i {
  background-image: url("./icons/arrow-selected.svg");
}

.finder__controller__pagination {
  width: 32px;
  height: 32px;
  text-align: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;

  color: #c2ce99;
  transition: var(--transition);

  cursor: pointer;
}

.finder__controller__pagination__main {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

.finder__controller__pagination--active {
  color: var(--vt-c-green);
}

.finder__controller__pagination:hover {
  background-color: var(--vt-c-green-mute);
}

.finder__controller__pagination:active {
  background-color: var(--vt-c-green-mute);
}
.finder__controller__navigate {
  padding: 24px 24px;
  width: 100%;
  border-radius: 16px;
  margin-right: 32px;
  background-color: var(--vt-c-red);
  color: var(--color-text-light);
  border: none;
  cursor: pointer;
  box-shadow: 0 0 0 var(--vt-c-divider-light-2);
  transition: var(--transition);
}

.finder__controller__navigate:hover {
  box-shadow: 0 0 8px var(--vt-c-divider-light-2);
  background-color: var(--vt-c-red-hover) !important;
}

.finder__controller__navigate:active {
  background-color: var(--vt-c-red-active) !important;
  box-shadow: 0 0 12px var(--vt-c-divider-light-2);
}

.right > i {
  transform: rotate(180deg);
}
.filter-buttons-labels {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap;
  gap: 8px;
  list-style: none;
  padding-bottom: 8px;
  padding-left: 0;
  padding-right: 0;
}
.filter-button-mobile {
  width: 100%;
  height: 64px;
  padding: 0 8px;
  background-color: var(--vt-c-white-mute);
  border-color: var(--vt-c-white-mute);
  transition: var(--transition);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: flex;
  padding: 0 0 4px;
  font-family: var(--font-family);
  font-size: 20px;
  background: var(--color-background-mute);
  border: var(--vs-border-width) var(--vs-border-style) transparent;
  border-radius: var(--vs-border-radius);
  white-space: normal;
  cursor: pointer;
  font-weight: 500;
  color: var(--vs-selected-color);
  justify-content: center;
  align-items: center;
}

.filter-button-mobile:hover {
  background-color: var(--color-background-mute) !important;
  border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
}

.filter-button-mobile::after {
  content: url("./icons/settings.svg");
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(calc(-50% + 4px));
}

.filter-button-mobile > strong {
  margin-left: 8px;
  color: var(--vt-c-green);
}

.filter-button-label {
  margin-top: 8px;
  padding: 8px 12px;
  background-color: var(--color-background-mute);
  width: fit-content;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.filter-button-label:after {
  content: "✕";
  margin-left: 8px;
  color: var(--color-text);
  transition: var(--transition);
}

.filter-button-label--active {
  background-color: var(--vt-c-green);
  color: var(--color-text-light);
}

.filter-button-label--active:after {
  color: var(--color-text-light);
}

.filter-button,
.finder {
  display: none;
}
@media (max-width: 960px) {
  .filters {
    flex-wrap: wrap;
  }
  .filters__column {
    width: calc(50% - 8px);
  }
  .checkboxes > input[type="checkbox"] + label {
    width: 100%;
  }
  .md-hide {
    display: none;
  }
  .md-hide.extended {
    display: inherit;
  }
  .additional__filter {
    pointer-events: inherit;
    opacity: inherit;
  }
  .additional__filter:not(.extended-change)::after {
    content: url(./icons/plus.svg);
    position: relative;
    top: 4px;
  }
  .list-flats {
    display: flex;
  }
  .finder {
    display: initial;
  }
}

@media (max-width: 680px) {
  .filters__column {
    width: calc(100%);
  }
  .xs-hide {
    display: none;
  }
  .xs-hide.extended {
    display: inherit;
  }
  .list-flats > .flat:not(:first-child) {
    display: none;
  }
  .additional__clear {
    margin-left: 0;
  }
  .finder__controller__navigate {
    width: 100%;
    margin-right: 0;
  }
  .additional {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .filter-button {
    display: initial;
  }
}

@media (max-width: 440px) {
  .filter-section {
    position: relative;
    top: -70px;
    padding-bottom: 24px;
  }
}
</style>
