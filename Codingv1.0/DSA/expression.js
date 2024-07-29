function checkExpression(expression) {
  let operators = ["+", "-", "*", "/"];
  let closeBrases = ["}", ")", "]"];
  let hash = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let isVar = false;
  let isOperator = false;
  let value = expression.split("").reduce((stk, ele, i) => {
    stk.push(ele);
    console.log(stk);
    if (closeBrases.includes(ele)) {
      isVar = false;
      isOperator = false;
      if (hash[stk[stk.length - 2]] === ele) {
        stk.pop();
        stk.pop();
      }
    }
    if (operators.includes(ele)) {
      isOperator = true;
    }
    if (isVar && operators.includes(stk[stk.length - 2])) {
      stk.pop();
      stk.pop();
      stk.pop();
      isOperator = false;
    } else {
      isVar = true;
    }
    return stk;
  }, []);
  return value.length > 0 ? false : true;
}

// let ele = '{'
//  console.log(hash[ele])
console.log(checkExpression("(A+B(C+D)(Z-K)(])"));
