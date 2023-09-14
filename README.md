# hydra-strudel
[WIP]

made by olivia & TACHA~

### Usage
```javascript
await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Hydra-strudel-extension@latest/hydra-strudel.js")
```

### Example
[live](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGY2RuLmpzZGVsaXZyLm5ldCUyRmdoJTJGYXRmb3JuZXMlMkZIeWRyYS1zdHJ1ZGVsLWV4dGVuc2lvbiU0MGxhdGVzdCUyRmh5ZHJhLXN0cnVkZWwuanMlMjIpJTBBYXdhaXQlMjBpbml0SHlkcmFTdHJ1ZGVsKCklMEElMEElMkYlMkYlMjBTdHJ1ZGVsJTIwbG9nbyUwQXMwLmluaXRJbWFnZSglMjJodHRwcyUzQSUyRiUyRnN0cnVkZWwudGlkYWxjeWNsZXMub3JnJTJGaWNvbnMlMkZzdHJ1ZGVsX2ljb24ucG5nJTIyKSUyMCUwQSUwQSUyRiUyRiUyMFN0cnVkZWwlMjBtaW5pLW5vdGF0aW9uJTIwcGF0dGVybiUwQW15UGF0dGVybiUyMCUzRCUyMG1pbmkoJzAlMjAxMCUyMCU1QjIlMjA1MSU1RCo0Jykuc2xvdygyKSUwQSUwQSUyRiUyRiUyMHBsYXklMjB0aGUlMjBwYXR0ZXJuJTBBbm90ZShteVBhdHRlcm4pLnBsYXkoKSUwQSUwQSUwQSUyRiUyRiUyMHJlcGVhdCUyMHRoZSUyMGxvZ28lMjBmb2xsb3dpbmclMjB0aGUlMjBwYXR0ZXJuJTBBc3JjKHMwKS5yZXBlYXQoKCklMjAlM0QlM0UlMjBteVBhdHRlcm4udmFsdWUoKSklMEElMjAlMjAub3V0KCklMEElMEElMkYlMkYlMjBTdG9wJTIwc291bmQlM0ElMEElMkYlMkYlMjBDdHJsJTIwJTJCJTIwLiUwQSUyRiUyRiUyMG9yJTBBJTJGJTJGJTIwc2h1c2goKQ%3D%3D)

```javascript
await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Hydra-strudel-extension@latest/hydra-strudel.js")
await initHydraStrudel()

myPattern = mini('0 10 [2 51]*4').slow(2)
note(myPattern).play()
osc(() => 10 * myPattern.value()).out()

// Stop sound:
// Ctrl + .
// or
// shush()
```
