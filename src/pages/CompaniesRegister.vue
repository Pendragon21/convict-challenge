<template>
  <div class="companies-register-modal">
    <div class="q-pa-md form-container">
    <h1 class="form-title">Cadastrar Empresas</h1>
    <q-form @submit="submitForm" class="form-grid">
      <div class="form-column">
        <p class="field-name">Nome</p>
        <q-input
          v-model="nome"
          required
          outlined
          class="input-field"
          no-bottom-space
        />

        <p class="field-name">CNPJ</p>
        <q-input
          v-model="cnpj"
          required
          outlined
          class="input-field"
          no-bottom-space
        />

        <p class="field-name">Email</p>
        <q-input
          v-model="email"
          required
          type="email"
          outlined
          class="input-field"
          no-bottom-space
        />

        <p class="field-name">WhatsApp</p>
        <q-input
          v-model="whatsapp"
          required
          outlined
          class="input-field"
          no-bottom-space
        />

        <p class="field-name">Representante</p>
        <q-input
          v-model="representante"
          outlined
          class="input-field"
          no-bottom-space
        />

        <div class="coordinates-wrap">
          <div class="coordinates-column">
            <p class="field-name">Latitude</p>
            <q-input
              v-model="lat"
              required
              outlined
              class="input-field-wrap"
              no-bottom-space
            />
          </div>
          <div class="coordinates-column">
            <p class="field-name">Longitude</p>
            <q-input
              v-model="long"
              required
              outlined
              class="input-field-wrap"
              no-bottom-space
            />
          </div>
        </div>

        <div class="coordinates-wrap">
          <div class="coordinates-column">
            <p class="field-name">Estado</p>
            <q-select
              v-model="estado"
              label="Estado"
              :options="estados"
              required
              outlined
              class="input-field-wrap"
            />
          </div>
          <div class="coordinates-column">
            <p class="field-name">Cidade</p>
            <q-select
              v-model="cidade"
              label="Cidade"
              :options="cidades"
              required
              outlined
              class="input-field-wrap"
            />
          </div>
        </div>
      </div>
      <div class="form-column">
        <p class="field-name">Observações</p>
        <q-input
          v-model="observacoes"
          type="text"
          outlined
          class="input-field"
        />

        <p class="field-name">Categoria</p>
        <q-select
          v-model="categoria"
          label="Categoria"
          :options="categorias"
          required
          outlined
          class="input-field"
        />
      </div>
      <div class="form-buttons">
        <q-btn class="q-btn-cancel" label="Cancelar" @click="{{ this.$router.push('/maps'); }}" />
        <q-btn
          class="q-btn-confirm"
          label="Cadastrar Empresa"
          type="submit"
          :disable="!formIsValid"
        />
      </div>
    </q-form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      cnpj: '',
      email: '',
      whatsapp: '',
      categoria: '',
      lat: '',
      long: '',
      cidade: '',
      estado: '',
      representante: '',
      observacoes: '',
      categorias: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
      cidades: ['Cidade 1', 'Cidade 2', 'Cidade 3'],
      estados: ['Estado 1', 'Estado 2', 'Estado 3'],
    };
  },
  computed: {
    formIsValid() {
      return (
        this.nome !== '' &&
        this.cnpj !== '' &&
        this.email !== '' &&
        this.whatsapp !== '' &&
        this.categoria !== '' &&
        this.lat !== '' &&
        this.long !== '' &&
        this.cidade !== '' &&
        this.estado !== ''
      );
    },
  },
  methods: {
    submitForm() {
      if (this.formIsValid) {
        console.log('Dados do formulário:', {
          nome: this.nome,
          cnpj: this.cnpj,
          email: this.email,
          whatsapp: this.whatsapp,
          categoria: this.categoria,
          lat: this.lat,
          long: this.long,
          cidade: this.cidade,
          estado: this.estado,
          representante: this.representante,
          observacoes: this.observacoes,
        });

        this.clearForm();
      }
    },
    cancelar() {
      this.clearForm();
    },
    clearForm() {
      this.nome = '';
      this.cnpj = '';
      this.email = '';
      this.whatsapp = '';
      this.categoria = '';
      this.lat = '';
      this.long = '';
      this.cidade = '';
      this.estado = '';
      this.representante = '';
      this.observacoes = '';
    },
  },
};

</script>

<style scoped lang="scss">
.form-container {
  max-height: 100vh;
  overflow: auto;
  margin-left: 2rem;
  background-color: #f8f8f8;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-field {
  width: 500px;
  height: 15px;
}
.input-field-wrap {
  width: 200px;
  height: 15px;
}

.coordinates-wrap {
  display: flex;
}

.coordinates-column {
  flex: 1;
}

.form-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10rem;
  margin-left: 30rem;
  border-radius: 20%;
}

.form-title {
  font-size: 20px;
  font-weight: 400;
  color: #2f4565;
}

.field-name {
  font-weight: 400;
  margin-top: 40px;
}

.q-btn-cancel {
  background-color: #f8f8f8;
  height: 4rem;
  width: 12rem;
}

.q-btn-confirm {
  background-color: #0e044a;
  height: 4rem;
  width: 12rem;
  color: white;
  margin-left: 2rem;
}
</style>
