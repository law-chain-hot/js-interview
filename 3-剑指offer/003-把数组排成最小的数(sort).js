function printMinNumber(numbers) {
    numbers.sort((x, y) => {
      const s1 = x + "" + y,
            s2 = y + "" + x;
  
      if (s1 < s2) return -1;
      if (s1 > s2) return 1;
      return 0;
    });
  
    console.log(numbers.join(""));
  }
  
  /**
   * 测试代码
   */
  
  printMinNumber([3, 22, 321]);