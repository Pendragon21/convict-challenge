<template>
  <q-layout view="lHh lpR lff">
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <div class="drawer-content">
        <img src="icons/Logo-login.png" alt="logo" class="logo" />
        <div class="menu">
          <h1 class="menu-title">MENU</h1>
          <div class="menu-item">
            <img src="icons/office.png" alt="empresas" class="menu-icon" />
            <h1 class="menu-option">Empresas</h1>
          </div>
        </div>
        <div class="footer">
          <img
            src="icons/power-white.png"
            alt="sair"
            class="menu-icon-quit"
            @click="{{ this.$router.push('/'); }}"
          />
          <h1 class="menu-quit" @click="{{ this.$router.push('/'); }}">Sair</h1>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style scoped lang="scss">
.drawer-content {
  background-color: $BackgroundPrimary;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  text-align: center;
}

.logo {
  margin-top: 20px;
}

.menu {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -8rem;
}

.menu-title {
  font-size: 14px;
  color: white;
  align-self: flex-start;
  margin-bottom: 15px;
  margin-left: 2rem;
}

.menu-item {
  display: flex;
  width: 12rem;
  height: 3rem;
  align-items: center;
  cursor: pointer;
  background-color: white;
  margin-top: -2.5rem;
  justify-content: center;
  border-radius: 5px;
}

.menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 1rem;
  color: white;
}

.menu-option {
  font-size: 14px;
  margin-right: 3rem;
}

.footer {
  text-align: center;
  padding-top: 8rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
}

.menu-quit {
  font-size: 16px;
  margin-right: 3rem;
  margin-bottom: -1rem;
  color: white;
  cursor: pointer;
}

.menu-icon-quit {
  width: 16px;
  height: 16px;
  margin-bottom: -1.5rem;
  margin-right: 1rem;
  color: white;
  cursor: pointer;
}

.q-drawer {
  background-color: $BackgroundPrimary;
  width: 300px;
}
</style>
