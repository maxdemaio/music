---
fileName: mixing-fundamentals
description: The fundamentals of mixing
pubDate: 'Jan 15 2024'
title: Mixing Fundamentals
duration: 9
tags: ['logic', 'producing']
draft: true
---

In addition to leveling, mastering the fundamentals of mixing involves four key elements:

1. **EQ (Equalization)** - EQ shapes instrument tones by boosting or cutting specific frequencies. For instance, enhance the high frequencies for vocals or high hats, but avoid them on a kick drum to maintain a solid foundation.
2. **Compression** - Compression balances volume by reducing loud peaks and boosting softer elements. Applied to drums or vocals, it ensures a consistent sound, adding punch and cohesion to the mix.
3. **Reverb** - Reverb adds space and ambiance, simulating different environments. Apply it subtly for a tight studio feel, creating a natural and immersive sound.
4. **Delay** - Delay introduces echoes, adding depth and dimension. Use it on guitars or vocals for a spacious effect, adjusting delay times and feedback for creative enhancements.

Understanding these four elements—EQ, compression, reverb, and delays lays the groundwork for crafting a professional and balanced mix, enhancing the quality of your music.

## What is mixing?

Taking multiple tracks and making them work/mix together is mixing. This involves turning the volume up/down on certain tracks to be level (leveling).

## Reference track

Having a north star of a production grade song for reference is extremely beneficial. Pick a song with a similar vibe, and use that as comparison throughout your mixing process.

## What mixing won’t do

Mixing won’t fix a bad song. Before you start mixing, all the pieces of your song should be in place from a production standpoint. For example, all instruments should be recorded and the song should be structurally complete.

## Keep an eye on the stereo output decibels

TODO: PROBABLY EXPLAIN THIS PART BETTER

The stereo output serves as the channel for all audio in the mix. Monitoring the stereo decibel output is crucial, indicating the overall volume of the song. Maintaining a level around `-5db` to `-6db` which is in the green ensures optimal headroom and space for subsequent mastering processes. We'd ideally like our resulting master level to end up being around `-3db`.

## Helpful tips for organization

- Utilize markers to delineate song sections such as verses, pre-choruses, choruses, and bridges. Begin mixing by focusing on specific sections. You could start with the most prominent, like the chorus. Or, picking the loudest section first is also a good strategy.
- Label your tracks correctly with meaningful names so people other than yourself can understand them. Also, when you label them in exporting, you should number them. That way if you drop them into a new DAW they're imported in the right order. Like `08 Tom 3.wav` or `07 Tom 2.wav`. You'll also need to learn how to consolidate export so they can line up properly when imported to a different DAW.
- Similarly, we can group tracks. For instance, combine drums, guitar, vocals, bass, etc. To create a track stack, use the “Create Track Stack” option in the right-click dropdown menu or `shift` + `option` + `d`. Folder stacks are ideal for organization, while a summing stack enables global effects, optimizing CPU usage since we won’t have an effect individually on each track.
- Simplify navigation and visual clarity by color coding tracks. Use `option` + `c` to apply colors either by selecting tracks or dragging over them.

## Mixing Order

We'll start with mixing the kick and the snare. This is because they are mainly the guide to how everything else will sit. Keep in mind, we'll be using a reference mix for comparison/guide via levels. After that we'll mix in the vocal.

## Bypass and compare at the same level

When it comes to EQ, compression, and other dynamic effects, if we increase the output volume, your ears perceive it to sound better. But, this may not be the case.

Make sure to adjust the output in the plugin's UI to match the original level without compression/EQ/etc. This is so you can bypass back and forth and compare with ease.

## Drums

Please note, these are all just examples. You don't have to apply all the same effects that I am, but these are just ideas.

### Kick

Honestly we only need two things in our kick, parallel compression and EQ.

For EQ, at around 60hz we boost about 1.5dB. You can mess around in the lower range for what sounds best. This adds a bit more thump to the kick. Compensate for the increase in volume by turning the gain down in the EQ's plugin UI as mentioned before. This is so we can bypass and compare easily.

Then, we apply parallel compression. We don't want to compress the actual audio of it bc it's probably came from some sample pack that's already processed it.With this, we take the original kick, copy it to another channel that is extremely compressed. You're gonna blend that in with the original kick so you don't damage the original signal. Check out [this video I linked in the resources below](https://youtu.be/iZT_1Gm8zik?si=6gzpBM-mAO87kbQ0).

Next, after the effects have been added to the kick, we want to level our kick. We turn it down until we have enough headroom on it. Like before, you want it around `-0.5db` to `-0.6db`. Also, use your headphones to judge this well.

### Snares

- EQ to remove low-end frequencies, compression for consistency, subtle reverb.

To mix the snare with the kick, you kind of do it by ear changing the levels of both of them to your liking while keeping the overall stereo output around `-0.5db` to `-0.6db`.

### Hats

- EQ to remove low-end frequencies, compression for consistency, subtle reverb for dimension.

To mix the hats in with the snare/kick, you also just listen by ear/feel to make sure it all sounds good while keeping it at that overall stereo output decibel level. Keep in mind you can go back and adjust the leveling kick/snare too while also adjusting the hats.

### Overall

After you’re done mixing all the drums, feel free to add effects on the grouping as a whole. For example, you could add some distortion (makes it more punchy), slight compression, or slight reverb. Note, echo isn’t normally added on drums but you could experiment with it. Take all the outputs of the underlying tracks, putting it through a bus, and adding the effects on top of that. If the mix sounds good but there’s not enough headroom, you can lower the decibel level on the overall grouping.

This meticulous approach to drum mixing ensures each element contributes to a cohesive and impactful rhythm section. Remember to trust your ears and make adjustments based on the overall sound you aim to achieve.

## Mixing bass

- Apply effects and then level

Add your effects on the bass. For EQ’ing a bass guitar usually you don’t want to cut out a lot of lows. Just enough of a low eq cut to shape the frequency. If you don’t cut out the low ends on your tracks, those signals will affect your compressor bc it will increase them. Arrange effects with subtractive processes at the top for organizational clarity. Keep the whole drum group going/selected as you start mixing the bass and adjust the levels accordingly.

You can also side-chain your bass to your kick. What this means is you’re connecting your kick drum to your bass guitar. It’s very common to side-chain a kick with another instrument that shares those frequencies. Whenever the kick hits, you’ll want that space for the kick. But when the bass guitar comes in you also would like to hear that. What side-chaining does is whenever the kick happens, the bass guitar will just get a little bit quieter so you’ll hear more of the kick than you do the bass. You do it with multi-band compression. You can choose to sidechain inside the configuration of the compression effect on the bass. If you’re adding reverb probably add as much as the others so it sounds like its in the same room as the other instruments.

## Mixing electric guitar

- Apply effects and then level

If you have some hits on bass notes you could side-chain it with the kick again so it doesn’t overpower it. A strategy is to look away from the screen and move to level accordingly as you’re listening to choose the best spot you feel.

## Mixing Synths/Keys

- Apply effects and then level

If using preset instruments, you don’t need to adjust the effects much, given stock compression and EQ. Utilize Logic's cycle feature to ensure proper starting points for your mix.

Reverb adds spatial context, influencing perception of depth in the mix. Keep main song elements centered, enhancing focus. When panning, consider creating a stage-like atmosphere; for instance, pan a Wurlitzer Modern keyboard slightly left to envision a band on stage. Experiment with panning for different keys/synths to achieve a balanced spatial arrangement.

## Mixing atmospheric and background noise

You can use automation to have the audio come in and out and not be at just a certain level. For example, let’s say we had some background coffee shop chatter in the background. You could use automation to make that sound come in and out at a low volume throughout the track. This can be done w/ the automation view. You’d choose to automate the volume (default) and then click to add a baseline audio level. You can click to add different points on the line and drag them around. Or you could use “T-Latch” and play the audio section, changing the level as it plays and Logic will auto add the points for you.

## Adding automation to your mixes

You can use automation to control the audio's volume dynamically, allowing it to fade in and out rather than remain at a fixed level. For instance, imagine having background coffee shop chatter in a track. Automation enables you to seamlessly adjust the volume of this sound throughout the track. This can be achieved through the automation view. Select volume (default) for automation, then click to set a baseline audio level. Add different points on the line and adjust them by dragging. Alternatively, use "T-Latch" to play the audio section, changing the level as it plays, and let Logic automatically add the points for you.

## Conclusion

Incorporate these fundamental mixing principles to sculpt a professional and balanced sound in your music production journey. Mastering EQ, compression, reverb, and delay empowers you to create impactful mixes that elevate your music to new heights.

## Resources

- [ tom as mfer](https://youtu.be/azJPTYtwK_o?si=BAxxmUV6oAtL91wk)

- [Logic Tips - Parallel Compression by Music Tech](https://youtu.be/iZT_1Gm8zik?si=6gzpBM-mAO87kbQ0)

- [How To Make Your Kick Kick - Help me Devvon](https://youtu.be/-NxA3Yln67E?si=TxQo-U1-SE7OepQR)