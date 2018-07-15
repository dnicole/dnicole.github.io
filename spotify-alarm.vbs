Set WshShell = WScript.CreateObject("WScript.Shell")
WshShell.run"%SystemRoot%\System32\SndVol.exe"
WScript.Sleep 1500
WshShell.SendKeys("{PGUP}")
WshShell.SendKeys("{PGUP}")
WshShell.SendKeys("{PGUP}")
WshShell.SendKeys("{PGUP}")
WshShell.SendKeys("{PGUP}")
WshShell.SendKeys"%{F4}"
WScript.Sleep 5000

Comandline = "<PATH\TO>\spotify.exe"
WScript.sleep 15000 ' Give Spotify time to start fully
CreateObject("WScript.Shell").Run("spotify:user:<YOUR-USERNAME>:playlist:<YOUR-PLAYLIST-ID>")
WScript.sleep 10000
WshShell.SendKeys "{ENTER}"
WScript.sleep 1000
WshShell.SendKeys "^+{Up}"
WScript.sleep 1000
WshShell.SendKeys "^{RIGHT}"
WScript.sleep 10000
WshShell.SendKeys "^{s}"
