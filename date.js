

exports.seeDate = function () {
  const today = new Date();
  var dayName = "";

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);

}

exports.seeDay = function () {
  const today = new Date();
  var dayName = "";

  var options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);

}
