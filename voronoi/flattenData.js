function flattenData (dataArray, accessor) {
  const nestedArray = dataArray.map(d => {
    return d[accessor]
  })
  return [].concat(...nestedArray)
}

export default flattenData
