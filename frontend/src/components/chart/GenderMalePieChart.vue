<script>
import VueCharts from 'vue-chartjs'
import { Pie } from 'vue-chartjs'


export default {
  extends: Pie,
  props:['maleO','maleX'],
  mounted () {
    this.renderChart({
      labels: ['남자-O','남자-X'],
      datasets: [
        {
          backgroundColor: [ 
            '#41B883',
            '#E46651'
          ],
          data: [this.maleO,this.maleX]
        }
      ]
    }, {responsive: false, maintainAspectRatio: false})
  }
}


</script>

<style>

</style>



