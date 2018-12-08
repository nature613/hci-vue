<script>
import VueCharts from 'vue-chartjs'
import { Pie } from 'vue-chartjs'


export default {
  extends: Pie,
  props:['plusXvoteO','plusXvoteX'],
  mounted () {
    this.renderChart({
      labels: ['O','X'],
      datasets: [
        {
          backgroundColor: [ 
            '#41B883',
            '#E46651'
          ],
          data: [this.plusXvoteO,this.plusXvoteX]
        }
      ]
    }, {responsive: false, maintainAspectRatio: false})
  }
}


</script>

<style>

</style>



