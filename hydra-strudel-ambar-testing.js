// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

async function init() {
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
    return this.query(
      new strudel.State(new strudel.TimeSpan(window.time, window.time))
    )[0].value;
  };
  window.strudel = strudel
  shush = () => scheduler?.stop();
  console.log("Strudel loaded!");
}

if (window.strudel === undefined) {
  init();
}


