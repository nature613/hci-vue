<script>
import VueCharts from 'vue-chartjs'
import { Pie } from 'vue-chartjs'


export default {
  extends: Pie,
  props:['allO','allX'],
  mounted () {
    this.renderChart({
      labels: ['O','X'],
      datasets: [
        {
          backgroundColor: [ 
            '#41B883',
            '#E46651'
          ],
          data: [this.allO,this.allX]
        }
      ]
    }, {responsive: false, maintainAspectRatio: false})
  }
}


</script>

<style>

</style>



