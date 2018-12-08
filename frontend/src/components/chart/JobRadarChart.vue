<script>
import VueCharts from 'vue-chartjs'
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props:['jobNoneO','jobNoneX','jobMiddleO','jobMiddleX','jobHighO','jobHighX','jobUnivO','jobUnivX','jobHouseWifeO','jobHouseWifeX',
  'jobCompanyO','jobCompanyX','jobSelfO','jobSelfX','jobArtO','jobArtX','jobEtcO','jobEtcX'],
  mounted () {
    this.renderChart({
      labels: ['무직','중학생','고등학생','대학생','주부','회사원','자영업자','예체능계열','기타'],
      datasets: [
        {
          label: 'O',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [this.jobNoneO,this.jobMiddleO,this.jobHighO,this.jobUnivO,this.jobHouseWifeO,this.jobCompanyO,this.jobSelfO,this.jobArtO,this.jobEtcO]
        },
        {
          label: 'X',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [this.jobNoneX,this.jobMiddleX,this.jobHighX,this.jobUnivX,this.jobHouseWifeX,this.jobCompanyX,this.jobSelfX,this.jobArtX,this.jobEtcX]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}

</script>
