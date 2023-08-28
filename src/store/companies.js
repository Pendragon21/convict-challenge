export const state = () => ({
  showCompaniesRegister: false,
});

export const mutations = {
  toggleCompaniesRegister(state) {
    state.showCompaniesRegister = !state.showCompaniesRegister;
  },
};
