<script>
import VueCharts from 'vue-chartjs'
import { Pie } from 'vue-chartjs'


export default {
  extends: Pie,
  props:['maleO','maleX'],
  mounted () {
    this.renderChart({
      labels: ['O','X'],
      datasets: [
        {
          backgroundColor: [ 
            // '#41B883',
            // '#E46651'
            'rgba(179,181,198,1)',
            'rgba(255,99,132,1)'
          ],
          data: [this.maleO,this.maleX]
        }
      ]
    },
    {
      responsive: false, 
      maintainAspectRatio: false,
      title:{
        display : true,
        text : "남자",
        position : 'bottom'
      }
    })
  }
}


</script>

<style>

</style>



