<template>
  <SideMenu v-if="opened" :close-menu="closeMenu" />
  <header class="header compact">
    <img class="header__logo" src="../assets/logo.svg" />
    <a href="#" class="header__notification">Ипотека 6,2 %</a>
    <div class="header__projects">
      <a href="#">Проекты</a>
      <button class="header__projects__button"></button>
      <a href="#">Квартиры</a>
    </div>
    <div class="header__menu">
      <a href="tel:+74956401180" class="header__menu__phone"
        >+7 495 640-11-80</a
      >
      <button class="header__menu__button header__menu__button--outlined">
        <img src="./icons/like.svg" alt="Like" />
      </button>
      <button class="header__menu__button" @click="openMenu()">
        <img src="./icons/menu.svg" alt="Menu" />
      </button>
    </div>
  </header>
</template>

<script>
import SideMenu from "./subforms/SideMenu.vue";

export default {
  components: {
    SideMenu,
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    openMenu() {
      this.opened = true;
      document.body.style.overflow = "hidden";
    },
    closeMenu() {
      this.opened = false;
      document.body.style.overflow = "initial";
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 96px;

  color: var(--color-text-dark);
}

.header__logo {
  width: 130px;
  height: 36px;
}

.header__notification {
  padding: 4px 12px;
  background-color: var(--vt-c-red);
  border-radius: 6px;
  height: fit-content;

  color: var(--vt-c-white);
  text-decoration: none;

  transition: var(--transition);
  box-shadow: 0 0 0 var(--vt-c-divider-light-2);
}
.header__notification:hover {
  box-shadow: 0 0 8px var(--vt-c-divider-light-2);
}
.header__projects {
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 8px;
}

.header__projects__button {
  width: 32px;
  height: 32px;
  background-color: var(--vt-c-green);
  color: var(--color-text-light);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 0 var(--vt-c-divider-light-2);
  transition: var(--transition);
}

.header__projects__button:hover {
  box-shadow: 0 0 8px var(--vt-c-divider-light-2);
}

.header__projects__button::after {
  content: url("./icons/arrow-small.svg");
  position: relative;
  top: -1px;
}

.header__menu {
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 8px;
}

.header__menu__phone {
  height: fit-content;

  color: var(--color-text-dark);
}

.header__menu__phone:hover {
  text-decoration: underline;
  background-color: none;
}

.header__menu__button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  background-color: var(--vt-c-green);
  border: none;
  color: var(--color-text-light);

  border-radius: 8px;

  text-align: center;
  text-decoration: none;

  font-size: 16px;
  cursor: pointer;

  box-shadow: 0 0 0 var(--vt-c-divider-light-2);
  transition: var(--transition);
}

.header__menu__button:hover {
  box-shadow: 0 0 8px var(--vt-c-divider-light-2);
}

.header__menu__button--outlined {
  background-color: transparent;
  border: 1.5px solid var(--vt-c-divider-light-2);
}

@media (max-width: 960px) {
  .header__projects,
  .header__menu__phone {
    display: none;
  }
}

@media (max-width: 640px) {
  .header__notification {
    display: none;
  }
}
</style>
