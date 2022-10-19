<script setup>
defineProps({
  closeMenu: {
    required: true,
  },
});
</script>

<template>
  <div class="popup">
    <div
      class="dark"
      @click="handleCloseMenu()"
      :style="{ backgroundColor: darkColor }"
    ></div>
    <div id="side-menu" class="side-menu" :style="{ transform: translateMenu }">
      <div class="side-menu__header">
        <div>
          <img class="side-menu__header__logo" src="./../../assets/logo.svg" />
          <div class="side-menu__header__component">
            <img
              src="./../icons/phone.svg"
              alt="Phone"
              width="32"
              height="32"
            />
            <a href="tel:+74956401180" class="side-menu__header__menu__phone"
              >+7 495 640-11-80</a
            >
          </div>
          <div class="side-menu__header__component">
            <img
              src="./../icons/email.svg"
              alt="Email"
              width="32"
              height="32"
            />
            <a
              href="mailto:info@rusich.group"
              class="side-menu__header__menu__phone"
              >info@rusich.group</a
            >
          </div>
        </div>
        <div>
          <div class="side-menu__header__menu__container">
            <button
              class="side-menu__header__menu__button side-menu__header__menu__button--outlined"
            >
              <img src="./../icons/like.svg" alt="Like" />
            </button>
            <button
              class="side-menu__header__menu__button"
              @click="handleCloseMenu()"
            >
              <img src="./../icons/close.svg" alt="Like" />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div class="side-menu__content">
        <nav
          class="side-menu__content__column"
          style="grid: 'A'; grid-row-start: 1; grid-row-end: 3"
        >
          <a href="#">Проекты</a>
          <a href="#">Квартиры</a>
          <a href="#">Ипотека</a>
          <a href="#">О компании</a>
          <a href="#">Контакты</a>
        </nav>
        <div class="side-menu__content__column__container">
          <div class="side-menu__content__column" style="grid: 'B'">
            <h5>Покупка</h5>
            <a href="#">Trade in</a>
            <a href="#">Рассрочка</a>
            <a href="#">100% оплата</a>
            <a href="#">Материнский капитал</a>
            <a href="#">Субсидии</a>
            <a href="#">Оценка недвижимости</a>
            <a href="#">Уступка прав</a>
            <a href="#">Квартира как инвестиция</a>
            <a href="#">Вопросы-ответы</a>
          </div>
          <div class="side-menu__content__column" style="grid: 'D'">
            <h5>Помещения</h5>
            <a href="#">Машино-места</a>
            <a href="#">Кладовые</a>
            <a href="#">Коммерческие помещения</a>
            <a href="#">Спецпредложения</a>
          </div>
        </div>
        <div class="side-menu__content__column__container">
          <div class="side-menu__content__column" style="grid: 'C'">
            <h5>Для жителей</h5>
            <a href="#">Выдача ключей</a>
            <a href="#">Рефинансирование</a>
            <a href="#">Переуступка прав</a>
            <a href="#">Публичные оферты</a>
            <a href="#">Документы по проектам</a>
            <a href="#">Аренда квартир </a>
          </div>
          <div class="side-menu__content__column" style="grid: 'E'">
            <h5>Другое</h5>
            <a href="#">Акции</a>
            <a href="#">Новости</a>
            <a href="#">Ход строительства</a>
            <a href="#">Документы</a>
            <a href="#">Земвлевладельцам и застройщикам</a>
          </div>
        </div>
        <div
          class="side-menu__content__information-row"
          style="grid-column-start: 2; grid-column-end: 4"
        >
          <hr />
          <div class="side-menu__header__component">
            <img
              src="./../icons/phone.svg"
              alt="Phone"
              width="32"
              height="32"
            />
            <a href="tel:+74956401180" class="side-menu__header__menu__phone"
              >+7 495 640-11-80</a
            >
          </div>
          <hr />
          <div class="side-menu__header__component">
            <img
              src="./../icons/email.svg"
              alt="Email"
              width="32"
              height="32"
            />
            <a
              href="mailto:info@rusich.group"
              class="side-menu__header__menu__phone"
              >info@rusich.group</a
            >
          </div>
          <hr />
          <p class="side-menu__content_information-row__address subtitle">
            Россия, Московская область, Новорижское шоссе, 26-й километр БЦ
            "Рига Ленд"
          </p>
        </div>
      </div>
      <hr />
      <div class="side-menu__footer">
        <div>
          <a href="#" class="side-menu__footer__link">
            <img src="./../icons/external/facebook.svg" alt="Facebook" />
          </a>
          <a href="#" class="side-menu__footer__link">
            <img src="./../icons/external/vk.svg" alt="VK" />
          </a>
          <a href="#" class="side-menu__footer__link">
            <img src="./../icons/external/telegram.svg" alt="Telegram" />
          </a>
          <a href="#" class="side-menu__footer__link">
            <img src="./../icons/external/youtube.svg" alt="YouTube" />
          </a>
        </div>
        <p class="side-menu__footer__address subtitle">
          Любая информация, представленная на данном сайте, носит исключительно
          информационный характер, не является публичной офертой, определяемой
          положениями статьи 437 ГК РФ.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkColor: "transparent",
      translateMenu: "translateX(100%)",
    };
  },
  mounted() {
    let _this = this;
    setTimeout(function () {
      _this.$nextTick(function () {
        _this.darkColor = "#0005";
        _this.translateMenu = "translateX(0px)";
      });
    }, 0);
  },
  methods: {
    handleCloseMenu() {
      let _this = this;
      _this.darkColor = "transparent";
      _this.translateMenu = "translateX(100%)";

      setTimeout(() => {
        this.closeMenu();
      }, 125);
    },
  },
};
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.dark {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--vt-c-divider-light-1);
  transition: var(--transition);
}

.side-menu {
  display: flex;
  gap: 24px;
  flex-direction: column;

  height: 100%;
  width: 0;

  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;

  padding: 24px 64px 24px 62px;

  background-color: var(--color-background);

  overflow-x: hidden;
  transition: 0.5s;

  width: 850px;

  transform: translateX(100%);
  transition: var(--transition);
}

.side-menu__header {
  display: flex;
  justify-content: space-between;
}

.side-menu__header > div {
  display: flex;
  flex-direction: row;

  gap: 32px;
}

.side-menu__header__component {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.side-menu__header__menu__container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
}

.side-menu__header__menu__button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  background-color: var(--vt-c-green-mute);
  border: none;
  color: var(--color-text-light);

  border-radius: 8px;

  text-align: center;
  text-decoration: none;

  font-size: 16px;
  cursor: pointer;

  box-shadow: 0 0 0 var(--vt-c-divider-light-1);
  transition: var(--transition);
}

.side-menu__header__menu__button:hover {
  box-shadow: 0 0 8px var(--vt-c-divider-light-1);
}

.side-menu__header__menu__button--outlined {
  background-color: transparent;
  border: 1.5px solid var(--vt-c-divider-light-2);
}

.side-menu__header__menu__phone {
  height: fit-content;

  color: var(--color-text-dark);
}

.side-menu__header__menu__phone:hover {
  text-decoration: underline;
  background-color: none;
}

.side-menu__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  gap: 16px;
}

.side-menu__content__column {
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
}

nav.side-menu__content__column > a {
  font-size: 20px;
  line-height: 24px;
  margin: 12px 0;
  font-weight: 500;
}

.side-menu__content__column > h5 {
  font-weight: 500;
  margin: 12px 0;
}

.side-menu__content__column > a {
  color: var(--color-text-dark);
  width: fit-content;
  margin: 6px 0;
  font-size: 14px;
}

.side-menu__content__column > a:hover {
  text-decoration: underline;
}

.side-menu__footer {
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 16px;
}

.side-menu__footer > div {
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 16px;
}

.side-menu__footer__link {
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 40px;
  height: 40px;
  background-color: var(--color-background-mute);
  border-radius: 50%;

  box-shadow: 0 0 0 var(--vt-c-divider-light-1);
  transition: var(--transition);
}

.side-menu__footer__link:hover {
  box-shadow: 0 0 8px var(--vt-c-divider-light-1);
}

.side-menu__header__logo {
  display: none;
}

.side-menu__content__information-row {
  display: none;
  flex-direction: column;
  gap: 16px;

  font-size: 20px;
}

.side-menu__content_information-row__address {
  width: 264px;
  color: var(--vt-c-divider-light-2);
}

.side-menu__footer__address {
  color: var(--vt-c-divider-light-2);
}

@media (max-width: 960px) {
  .side-menu {
    width: 100%;
  }
  .side-menu__content__column {
    width: 100%;
  }
  .side-menu__header__logo {
    display: inherit;
    width: 100px;
    height: 28px;
  }
  .side-menu__header .side-menu__header__component {
    display: none;
  }
  .side-menu__content__column {
    grid-row-end: 2 !important;
  }
  .side-menu__content__information-row {
    display: flex;
  }
}

@media (max-width: 640px) {
  .side-menu {
    padding: 16px 28px;
    gap: 16px;
  }
  .side-menu__content {
    grid-template-columns: repeat(2, 1fr);
  }
  .side-menu__content__information-row {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
  }
  .side-menu__content_information-row__address {
    margin-top: 24px;
    width: 100%;
  }
  .side-menu__content__information-row {
    gap: 8px;
  }
  .side-menu__content__column {
    margin-bottom: 24px;
  }
  .side-menu__content__information-row > hr:first-child {
    display: none;
  }
  nav.side-menu__content__column,
  .side-menu__content__information-row {
    margin-top: 24px;
  }
  .side-menu__content {
    gap: 0;
  }
  .side-menu__content__column__container
    .side-menu__content__column:last-child {
    margin-bottom: 0;
  }
  .side-menu__header__component {
    font-size: 16px;
    font-weight: 500;
    width: fit-content;
  }
  .side-menu__header__component > img {
    display: none;
  }
  .side-menu__content__information-row > hr {
    margin-right: 48px;
  }
  .side-menu__footer {
    display: flex;
    flex-direction: column;

    gap: 16px;
  }
}
</style>
