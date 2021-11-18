import { DbMovies } from './movies.js';


const moviesApp = {
    data() {
        return {
            title: "Mes films",
            db: new DbMovies()
        }
    },
    mounted() {
        this.db.loadData();
    }
};

Vue.createApp(moviesApp).mount('#app');





const gameRes = {
    props: ['res'],
    template: `
        <div class="res anim" :class="res.name" :data-name="res.name" v-if="res.active">
            <span v-if="res.diff > 0" class="res-up">{{ res.current.toFixed(0) }}</span>
            <span v-else-if="res.diff < 0" class="res-down">{{ res.current.toFixed(0) }}</span>
            <span v-else>{{ res.current.toFixed(0) }}</span>
            <div class="res-descr">
              <img :src="'../assets/materials/' + res.name + '.png'">
              <table>
              <tr><td><i class="fa fa-archive"></i> {{ res.name }}</td></tr>
              <tr><td><i class="fa fa-money"></i> {{ res.price.toFixed(2) }}</td></tr>
              <tr><td><i class="fa fa-cubes"></i> {{ res.current.toFixed(2) }}</td></tr>
              <tr><td><i class="fa fa-line-chart"></i> {{ res.diff.toFixed(2) }}</td></tr>
              </table>
            </div>
        </div>`
  };
  