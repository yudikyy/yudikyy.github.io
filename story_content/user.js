function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6XHvr8Zikhb":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('song');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.2;
}

