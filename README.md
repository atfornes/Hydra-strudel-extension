# hydra-strudel
[WIP]

made by olivia & TACHA~

### Usage
```javascript
await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Hydra-strudel-extension@latest/hydra-strudel.js")
```

### Example
[live](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGY2RuLmpzZGVsaXZyLm5ldCUyRmdoJTJGYXRmb3JuZXMlMkZIeWRyYS1zdHJ1ZGVsLWV4dGVuc2lvbiU0MGxhdGVzdCUyRmh5ZHJhLXN0cnVkZWwuanMlMjIpJTBBYXdhaXQlMjBpbml0SHlkcmFTdHJ1ZGVsKCklMEFzMC5pbml0SW1hZ2UoJTIyaHR0cHMlM0ElMkYlMkZzdHJ1ZGVsLnRpZGFsY3ljbGVzLm9yZyUyRmljb25zJTJGc3RydWRlbF9pY29uLnBuZyUyMiklMEElMEElMkYlMkYlMjBTdHJ1ZGVsJTIwbWluaS1ub3RhdGlvbiUyMHBhdHRlcm4lMEFteVBhdHRlcm4lMjAlM0QlMjAnMCUyMDEwJTIwJTVCMiUyMDUxJTVEKjQnLnNsb3coMiklMEElMEElMkYlMkYlMjBwbGF5JTIwdGhlJTIwcGF0dGVybiUwQW5vdGUobXlQYXR0ZXJuKSUwQSUwOS5wbGF5KCklMEElMEElMkYlMkYlMjByZXBlYXQlMjBTdHJ1ZGVsJTIwbG9nbyUyMGZvbGxvd2luZyUyMHRoZSUyMHBhdHRlcm4lMEFzcmMoczApJTBBJTA5LnJlcGVhdChQKG15UGF0dGVybikpJTBBJTA5Lm91dCgpJTBBJTBBJTJGJTJGJTIwU3RvcCUyMHNvdW5kJTNBJTBBJTJGJTJGJTIwQ3RybCUyMCUyQiUyMC4lMEElMkYlMkYlMjBvcg%3D%3D)

```javascript
await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Hydra-strudel-extension@latest/hydra-strudel.js")
await initHydraStrudel()

myPattern = '0 10 [2 51]*4'.slow(2)
note(myPattern).play()
osc(P(myPattern)).out()

// Stop sound:
// Ctrl + .
// or
// shush()
```
