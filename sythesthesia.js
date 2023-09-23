// "Synthesthesia: sharing patterns for a choreographic audio and visual live coding experience"
// @by Ámbar Tenorio-Fornés & Olivia Jack
// @license CC BY
// @url https://github.com/atfornes/Hydra-strudel-extension
// ----

// What if we could use the same patterns to produce audio and visuals?
// The desire was strong, so we developed an extension for the visuals live coding environment [Hydra](https://hydra.ojack.xyz/).
// This extension is available as a plugin in the development branch of hydra, and can be imported with the following statements:
await loadScript("https://cdn.jsdelivr.net/gh/atfornes/Hydra-strudel-extension@1/hydra-strudel.js")
await initHydraStrudel()

// Pattern languages are used to produce sound, but also to express graphic elements, like knitting desings.
// For instance, a pattern expressing 3, 4, 3, 5, 3, 6, 3, 7 can be written as:
pattern = "3 <4 5 6 7>"
// using [tidal mini notation](https://tidalcycles.org/docs/reference/mini_notation/)

// And we could use this pattern to produce triangles, then squares, then triangles and so on:
shape(P(pattern))
	.out(o0)

// However, our goal was not only to use patterns to produce visuals, but to be able to synchronize the  synthesis of audio and visuals, producing "synthesthesia".
// Thus, we can reuse the same pattern to produce sounds. This pattern can also refer to notes in a classical C major scale. With 0 mapped to C, 1 to D, and so on, it would sound like this:

n(pattern)
	.scale("C:major")
	.play()

// this is already producing some synesthetic experience where notes are linked to shapes, but lets make it better including colors!

src(o0)
	.color(
		() => P(pattern)() % 2,
		() => P(pattern)() % 3,
		() => P(pattern)() % 5)
	.out(o1)
render(o1)


// and stack some percussion on top of the notes...
percussionPattern = "bd sd, hh*2!3 <oh hh>"
stack(
		s(percussionPattern),
		n(pattern)
		.scale("C:major")
	)
	.play()

// we could also add some modulations responding to the bass drum.
src(o1)
	.modulate(osc(420),
		() => .1 * (P(percussionPattern)() === "bd")
	).out(o2)

// Finally, some scroll and blending can make the visuals glow!
src(o2).blend(src(o2).scrollY(.1,.2))
.out(o3)

render()
