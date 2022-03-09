const isValid = function(s) {
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  const stack = [];
  let bracket;
  for (let i = 0; i < s.length; i++) {
    bracket = s[i];
    if ("({[".indexOf(bracket) !== -1) {
      stack.push(pairs[bracket])
    } else {
      if (bracket !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
