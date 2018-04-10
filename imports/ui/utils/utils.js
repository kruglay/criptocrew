//personal.profile.city
export function addFieldToObject(object = {}, {key, value}) {
  console.log(key, value, object)
  const segments = key.split('.'),
    segmentsAmount = segments.length-1
  let deep = 0
  function addSegment(segment, nestedObject) {
    deep += 1
    if(deep > segmentsAmount) {
      nestedObject[segment] = value
    } else {
      if(nestedObject[segment]) {
        addSegment(segments[deep], nestedObject[segment])
      } else {
        nestedObject[segment] = {}
        addSegment(segments[deep], nestedObject[segment])
      }
    }
  }

  addSegment(segments[deep], object)
}