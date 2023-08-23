import ChartLines from 'components/chart-lines'
import population from 'components/chart-lines/data/world-population'

const ComponentsSectorChartLines = () => {
  return (
    <li>
      <h3>Line´s Chart </h3>
      <div>
        <ChartLines chartData={population} width={200} height={150} />
      </div>
    </li>
  )
}

export default ComponentsSectorChartLines
