<script>
import VueCharts from 'vue-chartjs'
import { Pie } from 'vue-chartjs'


export default {
  extends: Pie,
  props:['femaleO','femaleX'],
  mounted () {
    this.renderChart({
      labels: ['여자-O','여자-X'],
      datasets: [
        {
          backgroundColor: [ 
            '#41B883',
            '#E46651'
          ],
          data: [this.femaleO,this.femaleX]
        }
      ]
    }, {responsive: false, maintainAspectRatio: false})
  }
}


</script>

<style>

</style>



