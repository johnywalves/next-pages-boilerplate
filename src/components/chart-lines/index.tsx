import { useEffect, useId } from 'react'

import * as d3 from 'd3'

import { WrapperChartLines } from './chart-lines.styles'

export { default as ChartLinesSkeleton } from './chart-lines.skeleton'

export type ChartLineData = {
  dimension: number
  fact: number
}

export type ChartLinesData = {
  name: string
  data: ChartLineData[]
}[]

export type ChartLinesProps = React.HTMLProps<HTMLDivElement> & {
  chartData: ChartLinesData
  width?: number
  height?: number
}

const ChartLines = ({ chartData, width, height, ...rest }: ChartLinesProps) => {
  const wrapperId = useId()

  useEffect(() => {
    // Criar um valor usável para CSS Selector
    const idSelector = CSS.escape(wrapperId)

    // Selecionar div para colocar o relatório gráfico dentro
    const wrapper = d3.select(`#${idSelector}`)

    if (wrapper.node() && !d3.select(`#${idSelector} svg`).node()) {
      // Selecionar a escala de cores
      const color = d3.scaleOrdinal(d3.schemeSet1)

      // Margens do gráfico
      const margin = { top: 10, right: 20, bottom: 30, left: 40 }

      // Pegar retângulo rendenizado
      const rect = (wrapper.node() as HTMLElement).getBoundingClientRect()

      // Criação da caixa do gráfico
      const chart = wrapper
        .append('svg')
        .attr('width', width || rect.width)
        .attr('height', height || rect.height)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      // Dimensão do gráfico (largura e altura)
      const widthGraph = (width || rect.width) - margin.left - margin.right
      const heightGraph = (height || rect.height) - margin.top - margin.bottom

      // Definição da escala das linhas
      const x = d3.scaleLinear().range([0, widthGraph]).domain([1970, 2020])
      const y = d3.scaleLinear().range([heightGraph, 0]).domain([0, 5])

      // Adicionar o eixo X - Dimensões
      chart
        .append('g')
        .call(
          d3
            .axisBottom(x)
            .ticks(chartData[0].data.length)
            .tickFormat((d) => d.toString())
        )
        .attr('transform', 'translate(0,' + heightGraph + ')')
        .attr('font-size', '0.75rem')
        .attr('font-weight', '500')
        .attr('color', '#fff')

      // Adicionar o eixo Y - Fatos
      chart
        .append('g')
        .call(d3.axisLeft(y))
        .attr('font-size', '0.75rem')
        .attr('font-weight', '500')
        .attr('color', '#fff')

      // Criação da função de geração de linha
      const lineGenerate = d3
        .line<ChartLineData>()
        .x((d) => x(d.dimension))
        .y((d) => y(d.fact))

      // Geração do caminho das linhas
      chartData.forEach(({ data }, index) => {
        chart
          .append('path')
          .data([data])
          .style('stroke', color(index.toString()))
          .style('stroke-width', '5')
          .style('fill', 'none')
          .attr('d', lineGenerate)
      })
    }
  }, [wrapperId, chartData, width, height])

  return <WrapperChartLines id={wrapperId} {...rest} />
}

export default ChartLines
