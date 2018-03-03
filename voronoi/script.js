import flattenData from './flattenData'
const d3 = window.d3

d3.renderVoronoi = function renderVoronoi (bind, jsonUrl, config) {
  config = {
    img: null,
    imgOpacity: 0.7,
    radius: 5,
    width: 800,
    height: 600,
    colorPoints: '#e4bd0b',
    colorVoronoi: '#de3d83',
    ...config
  }
  const { width, height, radius, colorPoints, colorVoronoi } = config

  d3.json(jsonUrl, function (error, json) {
    if (error) return console.warn(error)

    const _data = flattenData(json.layers[0].paths, 'points')
      .map(d => { return {x: d[0], y: d[1]} })
    console.log('data', _data)
    // render img
    appendImg(config.img)
    // render chart
    points(bind, _data)
  })

  function appendImg (img) {
    d3.select(bind)
      .append('img')
      .attr('src', img)
      .style('position', 'fixed')
      .style('z-index', '-2')
      .style('top', 0)
      .style('width', width + 'px')
      .style('height', height + 'px')
      .style('opacity', config.imgOpacity)
  }

  function points (bind, data) {
    // create svg in passed in div
    const selection = d3.select(bind)
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    const voronoi = d3.voronoi()
      .x(d => d.x)
      .y(d => d.y)
      .extent([
          [-1, -1],
          [width + 1, height + 1]
      ])

    const point = selection.selectAll('g')
      .data(data)
      .enter().append('g')
      .attr('class', (d, i) => 'g g-' + i)
      .on('click', d => console.log(d))

    point.append('path')
      .data(voronoi.polygons(data))
      .attr('d', renderCell)
      .attr('class', 'voronoi')
      .attr('id', (d, i) => 'cell-' + i)
      .attr('stroke', colorVoronoi)

    point.append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', radius)
      .style('fill', colorPoints)

    function renderCell (d) {
      return d == null ? null : 'M' + d.join('L') + 'Z'
    }
  }
}
