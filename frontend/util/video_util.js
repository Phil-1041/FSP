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

export const videoCreate = (formData) => ( //might have to check what video is here
  $.ajax({
    url: `/api/videos`,
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
)