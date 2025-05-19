import { PlotParams } from 'react-plotly.js'
import createPlotlyComponent from './safe-react-plotly-factory'
import { lazy, Suspense } from 'react'

// Lazy-load plotly.js since it is very large!
const LazyLoadedPlot = lazy(async () => {
  const Plotly = await import('plotly.js-basic-dist')
  return { default: createPlotlyComponent(Plotly) }
})

/**
 * Wrapper around react-plotly.js, lazy loads the plotly.js library.
 * @param props
 * @constructor
 */
export function Plot(props: PlotParams) {
  return (
    <Suspense>
      <LazyLoadedPlot {...props} />
    </Suspense>
  )
}

export default Plot
