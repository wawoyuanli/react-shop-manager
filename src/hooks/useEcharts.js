import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
export const useEcharts = (options, data) => {
  const mychart = useRef()
  const echartsRef = useRef()
  const echartsResize = () => {
    echartsRef && mychart?.current?.resize()
  }
  useEffect(() => {
    if (data.length) {
      mychart?.current?.setOption(options)
    }
  }, [data])

  useEffect(() => {
    if (echartsRef?.current) {
      mychart.current = echarts.init(echartsRef.current)
    }
    mychart?.current?.setOption(options)
    window.addEventListener('resize', echartsResize, false)
    return () => {
      window.removeEventListener('resize', echartsResize)
      mychart?.current?.dispose()
    }
  }, [])

  return [echartsRef]
}
