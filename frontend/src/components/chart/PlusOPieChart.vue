<script>
import VueCharts from 'vue-chartjs'
import { Pie } from 'vue-chartjs'


export default {
  extends: Pie,
  props:['plusOvoteO','plusOvoteX','plusOContent'],
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
          data: [this.plusOvoteO,this.plusOvoteX]
        }
      ]
    }, 
    {
      responsive: false, 
      maintainAspectRatio: false,
      title:{
        display : true,
        text : this.plusOContent,
        position : 'bottom'
      }
    })
  }
}


</script>

<style>

</style>



