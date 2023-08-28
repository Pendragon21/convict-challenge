<template>
  <q-layout view="lHh lpR lff">
    <q-page-container>
      <div class="header">
        <div class="search-input">
          <q-input
            outlined
            rounded="30px"
            dense
            v-model="searchQuery"
            placeholder="Pesquisar"
            class="q-input"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="add-company-button">
          <q-btn
            dense
            flat
            class="company-button"
            label="Adicionar Empresa"
            @click="addCompany"
          >
            <q-icon name="add" class="add-icon" />
          </q-btn>
        </div>
      </div>
      <div id="map" class="map-container"></div>
      <div class="company-card" v-if="selectedCompany">
        <p>{{ selectedCompany.name }}</p>
        <p>{{ selectedCompany.category }}</p>
        <p>{{ selectedCompany.city }}, {{ selectedCompany.state }}</p>
        <p>{{ selectedCompany.email }}</p>
        <p>{{ selectedCompany.representative }}</p>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay';

export default {
  setup() {
    const companies = [
      // Your list of companies with latitude and longitude
    ];
    const selectedCompany = ref(null);
    let map;

    onMounted(() => {
      map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });

      companies.forEach(company => {
        const marker = new Feature({
          geometry: new Point(fromLonLat([company.longitude, company.latitude])),
        });

        const markerLayer = new VectorLayer({
          source: new VectorSource({
            features: [marker],
          }),
        });

        map.addLayer(markerLayer);

        marker.on('click', () => {
          selectedCompany.value = company;
        });
      });
    });

    return {
      selectedCompany,
    };
  },
};
</script>


<style scoped lang="scss">
/* Your existing styles go here */

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 15vh;
  background-color: $Background;
}

.search-input {
  flex-grow: 1;
  margin-right: 10px;
}

.add-company-button {
  margin-left: 10px;
  display: flex;
  flex-direction: row-reverse;
}

.q-input {
  width: 20rem;
  background-color: $Background;
  border-radius: 20px;
  border: none;
}

.company-button {
  background-color: $BackgroundLight;
  height: 4rem;
  width: 12rem;
  border-radius: 10px;
}

.add-icon {
  margin-left: 0.5rem;
}
.lupe {
  width: 20px;
  height: 20px;
  align-self: flex-start;
  margin-bottom: -2.2rem;
}

.map-container {
  width: 95%;
  height: 80vh;
  margin-left: 2rem;
  margin-top: 0.5rem;
  border-radius: 20px;
}

.company-card {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>
