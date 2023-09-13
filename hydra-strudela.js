// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

async function initHydraStrudel() {
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

  document.addEventListener('keydown', function(event) {
    console.log(event, event.key)
  if (event.ctrlKey && event.key === '.') {
    shush();
  }
});
  
// TODO We should load all the samples strudel loads by default and figure out how to lazy load the remaining ones
// see https://github.com/tidalcycles/strudel/blob/6a427d6f893c4380e312fbf68f216f05c04b0723/website/src/repl/prebake.mjs#L18
  await samples(
    'https://strudel.tidalcycles.org/tidal-drum-machines.json',
    'github:ritchse/tidal-drum-machines/main/machines/'
  );
  await samples(
    'https://strudel.tidalcycles.org/EmuSP12.json',
    'https://strudel.tidalcycles.org/EmuSP12/'
  );

  console.log("Strudel loaded!");


  
}

if (window.strudel === undefined) {
  initHydraStrudel();
}

