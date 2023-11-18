function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeFontSize(size) {
    document.querySelector('section').style.fontSize = size + 'px';
  }