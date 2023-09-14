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
    'https://strudel.tidalcycles.org/tidal-drum-machines.json',
    'github:ritchse/tidal-drum-machines/main/machines/'
  );
  await samples(
    'https://strudel.tidalcycles.org/EmuSP12.json',
    'https://strudel.tidalcycles.org/EmuSP12/'
  );

  console.log("Strudel loaded!");
}
