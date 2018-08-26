function changeValuetoLetter(value) {
  if (value > 90) {
    return 'A';
  }
  else if (value > 84) {
    return 'B';
  }
  else if (value > 74) {
    return 'C+';
  }
  else if (value > 69) {
    return 'C';
  }
  else if (value > 59) {
    return 'C-';
  }
  else if (value > 44) {
    return 'D';
  } else {
    return 'F';
  }

}

function getRatings(resourceId) {
  let promise = $.ajax({method: "GET", url: `/resources/${resourceId}/ratings`})
  .then((rating) => {
    console.log(rating);
    let letterGrade = changeValuetoLetter(rating);
    return letterGrade;
  })
  return promise;
}
