<script>
import VueCharts from 'vue-chartjs'
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props:['ageZeroO','ageOneO','ageTwoO','ageThreeO','ageFourO','ageUpFiveO','ageZeroX','ageOneX','ageTwoX','ageThreeX','ageFourX','ageUpFiveX'],
  mounted () {
    this.renderChart({
      labels: ['10세 미만', '10대', '20대', '30대', '40대', '50대 이상'],
      datasets: [
        { 
          label: 'O',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [this.ageZeroO, this.ageOneO, this.ageTwoO, this.ageThreeO, this.ageFourO, this.ageUpFiveO]
        },
        {
          label: 'X',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [this.ageZeroX, this.ageOneX, this.ageTwoX, this.ageThreeX, this.ageFourX, this.ageUpFiveX]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}

</script>
