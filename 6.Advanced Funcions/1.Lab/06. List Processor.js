function list(input) {
  let listObj = [];

  for (const cmd of input) {
    let command = cmd.split(' ')[0];
    let value = cmd.split(' ')[1];

    if (command == 'add') {
      add(value);
    } else if (command == 'remove') {
      remove(value);
    } else {
      print(listObj);
    }
  }

  function add(value) {
    listObj.push(value);
  }

  function remove(value) {
    listObj = listObj.filter((x) => x != value);
  }

  function print(value) {
    console.log(listObj.join(','));
  }
}

list(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
