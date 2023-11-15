// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

async function initHydraStrudel() {
  if (window.strudel !== undefined) {
    return;
  }
  // to avoid multiple calls
  window.strudel = "";
  const hydraHush = hush;
  const strudel = await import("https://cdn.skypack.dev/@strudel.cycles/core");
  const webaudio = await import(
    "https://cdn.skypack.dev/@strudel.cycles/webaudio"
  );
  const mini = await import("https://cdn.skypack.dev/@strudel.cycles/mini");
  const { evalScope, controls } = strudel;
  const { registerSynthSounds, initAudioOnFirstClick, webaudioScheduler } =
    webaudio;
  const { miniAllStrings } = mini;
  const { src, shape, speed, ...otherControls } = strudel.controls;
  //initAudioOnFirstClick();
  miniAllStrings();
  console.log(Object.keys(otherControls));
  const loadModules = evalScope(
    evalScope,
    otherControls,
    strudel,
    mini,
    webaudio,
    import("https://cdn.skypack.dev/@strudel.cycles/tonal")
  );
  await Promise.all([loadModules, registerSynthSounds()]);
  const scheduler = webaudioScheduler();
  Pattern.prototype.play = function () {
    scheduler?.setPattern(this, true);
  };

 Pattern.prototype["value"] = function () {
   const t =  scheduler.now()
    return this.query(
      new strudel.State(new strudel.TimeSpan(t, t))
    )[0].value;
  };
  window.strudel = strudel
  shush = () => scheduler?.stop();

  hush = hydraHush;

  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === '.') {
      shush();
    }
  });

  await samples(
    'https://cdn.jsdelivr.net/gh/tidalcycles/strudel/website/public/tidal-drum-machines.json',
    'github:ritchse/tidal-drum-machines/main/machines/'
  );
  await samples(
    'https://cdn.jsdelivr.net/gh/tidalcycles/strudel/website/public/EmuSP12.json',
    'https://cdn.jsdelivr.net/gh/tidalcycles/strudel/website/public/EmuSP12/'
  );

  // enabling to use pattern functions to stringsm converting them to Patterns:
  // "10 20".slow(2)
  //  is the same as:
  //  mini("10 20").slow(2)
  Object.setPrototypeOf(String.prototype, Pattern.prototype);

  // function to use inside hydra code, syntax sugar of:
  // () => pattern.value(); // for Patterns
  // () => window.mini(pattern).value(); // for strings that have not been converted to Patterns
  window.P = (pattern)=> {
    if (pattern instanceof Pattern){
      return ()=> pattern.value();
    } else {
      return ()=> window.mini(pattern).value();
    }
  }

  console.log("Strudel loaded!");
}
