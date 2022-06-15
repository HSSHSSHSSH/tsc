function pick(todo,arr) {
    const obj = {}
    arr.forEach(el => {
        if(el in todo) {
            obj[el] = todo[el]
        }
    })
     console.log(obj);
  }

  const todo = {
    title: 'string',
    description: 'string',
    completed: 'boolean',
  }

  pick(todo,['title'])