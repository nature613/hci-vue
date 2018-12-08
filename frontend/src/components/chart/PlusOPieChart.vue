<script>
import VueCharts from 'vue-chartjs'
import { Pie } from 'vue-chartjs'


export default {
  extends: Pie,
  props:['plusOvoteO','plusOvoteX'],
  mounted () {
    this.renderChart({
      labels: ['O','X'],
      datasets: [
        {
          backgroundColor: [ 
            '#41B883',
            '#E46651'
          ],
          data: [this.plusOvoteO,this.plusOvoteX]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}


</script>

<style>

</style>



