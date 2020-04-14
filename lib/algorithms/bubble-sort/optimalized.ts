const bubbleSortOptimalized = (list: Array<number>): Array<number> => {
  for (let i = 0; i < list.length; i++) {
    let swapped = false;

    for (let j = 0; j < list.length; j++) {
      if (list[j] > list[j + 1]) {
        swapped = true;

        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }

    if (!swapped) {
      return list;
    }
  }

  return list;
};

export { bubbleSortOptimalized };
