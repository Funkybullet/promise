new Promise(resolve => {
    setTimeout(() => {
      resolve('hello')
    }, 2000)
  }).then(res => {
    console.log(res)
  })