<script lang="ts" setup>
import * as d3 from 'd3'
import tech from './tech.csv?url'

onMounted(async () => {
  // drawLineChart()
  const svg = d3
    .select('#bar-chart')
    .append('svg')
    .attr('viewBox', '0 0 600 700')

  // Load, format and measure the dataset
  const data = await d3.csv(tech, (d) => {
    // Format the dataset
    return {
      technology: d.technology,
      count: +d.count,
    }
  })
  // Log the full dataset
  console.log(data)
  // How many rows the dataset contains
  console.log(data.length) // => 33

  // Get the max and min values
  console.log(d3.max(data, (d) => d.count)) // => 1078
  console.log(d3.min(data, (d) => d.count)) // => 20
  console.log(d3.extent(data, (d) => d.count)) // => [20, 1078]

  // Sort the data in descending order
  data.sort((a, b) => b.count - a.count)

  // Pass the data to another function
  createViz(data)
  // Create the bar graph
  function createViz(data) {
    // Declare scales
    const xScale = d3.scaleLinear().domain([0, 1078]).range([0, 450])
    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.technology))
      .range([0, 700])
      .paddingInner(0.2)

    // Use data-binding to append rectangles
    const barAndLabel = svg
      .selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', (d) => `translate(0, ${yScale(d.technology)})`)

    barAndLabel
      .append('rect')
      .attr('width', (d) => xScale(d.count))
      .attr('height', yScale.bandwidth())
      .attr('x', 100)
      .attr('y', 0)
      .attr('fill', (d) =>
        d.technology === 'D3.js' ? 'yellowgreen' : 'skyblue',
      )

    // Append technology labels
    barAndLabel
      .append('text')
      .text((d) => d.technology)
      .attr('x', 96)
      .attr('y', 12)
      .attr('text-anchor', 'end')
      .style('font-family', 'sans-serif')
      .style('font-size', '11px')

    // Append count labels
    barAndLabel
      .append('text')
      .text((d) => d.count)
      .attr('x', (d) => 100 + xScale(d.count) + 4)
      .attr('y', 12)
      .style('font-family', 'sans-serif')
      .style('font-size', '9px')

    // Append vertical line
    svg
      .append('line')
      .attr('x1', 100)
      .attr('y1', 0)
      .attr('x2', 100)
      .attr('y2', 700)
      .attr('stroke', 'black')
  }
})
</script>

<template>
  <div>
    <div id="bar-chart" class="mx-auto max-w-3xl"></div>
  </div>
</template>
