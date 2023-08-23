import { WrapperChartLines } from './chart-lines.styles'

export type GraphicLinesSkeletonProps = React.HTMLProps<HTMLDivElement>

const GraphicLinesSkeleton = (props: GraphicLinesSkeletonProps) => (
  <WrapperChartLines {...props} className="skeleton" />
)

export default GraphicLinesSkeleton
