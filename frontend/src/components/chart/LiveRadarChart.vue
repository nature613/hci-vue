<script>
import VueCharts from 'vue-chartjs'
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props:['liveSsO','liveGgO','liveGwO','liveCcO','liveGsO','liveJlO','liveJjO',
          'liveSsX','liveGgX','liveGwX','liveCcX','liveGsX','liveJlX','liveJjX'],
  mounted () {
    this.renderChart({
      labels: ['서울특별시','경기도(인천 포함)','강원도','충청도(대전,세종 포함)','경상도(대구,울산,부산 포함)','전라도(광주 포함)','제주도'],
      datasets: [
        {
          label: 'O',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [this.liveSsO,this.liveGgO,this.liveGwO,this.liveCcO,this.liveGsO,this.liveJlO,this.liveJjO]
        },
        {
          label: 'X',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [this.liveSsX,this.liveGgX,this.liveGwX,this.liveCcX,this.liveGsX,this.liveJlX,this.liveJjX]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}

</script>
