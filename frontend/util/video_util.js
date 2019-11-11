export const videoShow = id => (
  $.ajax({
    url: `/api/videos/${id}`,
    method: 'GET',
  })
)

export const videoIndex = () => (
  $.ajax({
    url: `/api/videos`,
    method: 'GET',
  })
)