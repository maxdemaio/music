---
fileName: vocals
description: Everything I know about mixing vocals
pubDate: 'Jan 28 2024'
title: Everything I Know About Mixing Vocals
duration: 3
draft: true
tags: ['logic', 'producing']
---

If you've made it here, you've found the right spot for learning how to mix/produce vocals. Over time, I'll add new knowledge I've found in this post too. By the way, honestly the stock plugins that come with your DAW are pretty sweet. I wouldn't reccomend buying plugins unless you really feel the need.

---

## Resources

- [The Secret To Beautiful Vocals - Alex Rome](https://youtu.be/ce7kEQecS-I?si=fs6TNNq_pAkAp7DW)
- [Getting your vocals production ready - Charlie Puth](https://youtu.be/Ja_emre9Wwc?si=eG3zZqDijzumgQzW) - Mainly about setting up vocal harmonies and how to record tricky vocal parts.
- [I Reveal How The Pro’s Mix Vocals - Streaky](https://youtu.be/Cf0DCaVa5sM?si=N7fGCCPqbUPo2lCq) - This one is mainly if you have a pre-existing beat just as an audio file and you want to blend your vocals into it via eq'ing/leveling so the vocal sits in the pockets. This makes a **huge** difference.
- [Noise Gate: 12 Tips For A Clean And Natural Tone - Drew Swisher](https://mastering.com/noise-gate/) - Goes over everything you need to know on noise gates.
- [Vocal Compression: Learn How To Mix Like The Pros - Rob Mayzes](https://mastering.com/vocal-compression-how-to-compress-vocals/) - Probably one of the best articles I could find on the internet. It also embeds YT videos in it.
- [How To Mix Vocals: The Definitive Guide in 15 Steps - Rob Mayzes](https://mastering.com/mixing-vocals-how-to-mix-vocals/) - Really good overall framework and has helpful graphics. Also, this guy is the CEO of mastering.com and is very knowledgable in production engineering.
- [The 3 Key Phases For Recording Vocals Like A Pro - Rob Mayzes](https://mastering.com/recording-vocals-how-to-record-vocals/)
- [How to Use Flex Pitch in Logic Pro X | Tutorial - Nathan James Larsen](https://youtu.be/uGScoEhjKus?si=SIr24y-4mXpiHCcK)
- [Flex Pitch vs. Pitch Correction (autotune) - The Band Guide](https://youtu.be/14sTNC0lCHQ?si=O_7Xd8J4WP134_Gg)
- [What's the Difference Between Gain and Volume? - Fender](https://www.fender.com/articles/setup/amp-basics-gain-vs-volume)
- [Recording Vocals with Scarlett (YT Short) - Scarlett](https://youtube.com/shorts/KqIZC38y5Pc?si=vEFELnDLkmFhdZnx)
- [How to not record vocals too loud (YT Short) - MrDifferentTv](https://youtube.com/shorts/59HxaDVPwUI?si=9hFa2LAasogtN8O6)
- [11 MISTAKES to AVOID when Recording Vocals at Home - SpectreSoundStudios](https://youtu.be/zljEd53T2HY?si=BkxErcsNDzSQD0vg)


## Recording always comes first

No matter what kind of vocal chain you add, you can't salvage bad vocals. Make sure the recording is near perfect without any effects and then you can start to add them in! Following the Pareto principle, a good vocal is 80% recording and 20% mixing. 

Then, experiment with the distance and height of the mic until you find the right tone. **Keep it consistent**. Microphone choice combined with mic position is 80% of your vocal sound. Skip over either of these steps, and your vocal is going to be a lot harder to mix.

Personally, I use a dynamic microphone, the Shure SM57. Dynamic microphones reject more background noise so are great if you are in a particularly bad sounding room. These microphones are designed to be used up close. The low end is artificially lowered to account for the proximity effect. For this reason, it makes things easy. Once again, it's what sounds good to you so mess around with different distances.

When you record, I use a Scarlett. You should aim for your vocals to come through all green on the interface itself. Yellow is fine but red on the interface means you're clipping.

## Editting

For editting, we want to go with our best takes and put them together. This is totally normal for pop songs and some may even do different takes for each word. You can skip this if you want to keep the original performance.

Once you're happy with all the takes, you need to check for clicks/pops and apply crossfades to mitigate them. Add a short crossfade between the clips of about 5 - 15ms.

If there’s any background noise between phrases, you can simply cut this out. Some people like to cut out the breaths, but I think this completely ruins the emotion of the performance. **My advice is to leave the breaths in**.

You can also go through and fix any timing issues. If a phrase comes in a little early or late – move it into place with the "Nudge Value" tool.

## Targeting the hardest parts first

According to Charlie Puth, from their [video on getting your vocals production read](https://youtu.be/Ja_emre9Wwc?si=eG3zZqDijzumgQzW), we should target the hardest vocals first and split up the hardest parts. For example if you have to do an octave jump “hopes up”, split it into “hopes” and “up” and record them separately. Sing the “up” a little bit so you can connect it in the software in the “hopes” part. Blend/combine them with cross fades.

## Applying subtle pitch correction

After putting together all the best takes there can still be imperfections. Keep in mind imperfections aren't always a bad thing - they can add raw emotion and energy.

When doing pitch correction, you could either manually correct notes "Flex Pitch" or use Logic's "Pitch Correction" plugin on the whole track. "Flex Pitch" can take more time, but it allows you to be more precise so the results could be worth it. "Pitch Correction" is easier to apply, but could work against you if it pulls a note in the wrong direction.

Personally, I've seen very good results with the "Pitch Correction" plugin. Basically, I make sure I get a near perfect vocal take and then the plugin will help taper anything out of tolerance. You can toggle the plugin on/off just to double check things.

### Flex Pitch

This is what the manual "Flex Pitch" looks like in the editor window:

![flex pitch image](/blog/vocals/flex-pitch.png)

The scissor tool will be your best friend in this. You can chop up the areas where you are `N` cents off the note within the scale you're trying to fit in and can pitch shift it. Note, it will tell you the average amount it's off so but you can tell with the lines where you were going off pitch.

For pitch, typically anywhere between 8 and -8 cents off is acceptable. But, sometimes you can get some popping/clicking when doing this and shifting cut parts up. This is the downfall of using this technique, but I've heard this rarely happens. You can try making minor adjustments to adjacent notes to mitigate this.

Scale quantize doesn't actually set the notes to the perfect pitch until you move the pitch correction slider. It will move them though so watch out. It just determines the reference for quantizing the pitch of notes. By default it's using the chromatic scale. For example, set the scale quantize to major and you'll see the notes jump to a major scale, but they still will keep their pitch offset from the reference note (if a note was 17 cents sharp it's still 17 cents sharp but maybe with another note for reference). Also, when you drag notes they'll also now only snap to notes in that scale.

The graph just looks like a large piecewise function and pitch shifting involves fast fourier transforms. I noticed that for lines with linear slope at the beginning/end shouldn't be worried about too much because that's just you leading/away to/from a note.

### Pitch Correction Plugin

![pitch correction plugin](/blog/vocals/pitch-plugin.png)

Setting the response and tolerance to 0 will set the plugin in full effect and you can tweak from there. Honestly it's all based on feel. For me, a tolerance of around 20 cents and a range of response from anywhere from 100ms to 200ms is usually good.

- Tolerance: how much you can go over/under before the plugin starts to tune the note
- Response: how quickly the note will be tuned

## Vocal Chain

I create the vocal chain in the order below. Like, we want to EQ before compressing because we don't want the compressor bringing out frequencies we don't want. Your vocal chain really will depend on what genre you're in and what you're trying to achieve.

Btw, right now my vocal chain is just Logic's "Warm Vocal" plus custom pitch correction.

## Vocal Chain - Noise Gate

I like the "Fast Gate" preset Logic gives you if I need it. This is optional and personally I don't use one.

A noise gate automatically mutes or reduces the volume of audio signals below a certain threshold, helping to eliminate unwanted background noise or hum during quiet passages. Keep in mind, noise gates can’t get rid of all background noise. If there's background noise during the vocal phrase, you won’t be able to get rid of it.

You play it by ear to make sure it works and isn't cutting the vocal too short. But, the noise gate will remove any spillage from after you're done singing. You could also get this done w/ the remove silence tool if you wanted though.

- Threshold: at what signal level the gate opens and closes
- Hold: How long it stays open
- Attack: How fast it opens
- Release: How fast it closes
- Lookahead: tells the gate to do everything `N`ms in advance by looking ahead to see how loud the instrument/vocal is going to be later. The gate can know ahead of time that it’ll need to open up. Then it’s less likely to chop off the beginning of a sound. You only need a few ms because it'll stress the CPU.
- Hysteresis: If the threshold is at -15db and the hysteresis is at -5db, the gate will open at any audio signal louder than -15db and only close when it falls below -20db. Turns the threshold into a range instead of a single number.
- Reduction: Amount of volume the audio signal is reduced by if it falls below the threshold.

## Vocal Chain - EQ

Personally, I don't mind the stock EQs from Logic's "Warm Vocal" sound. It takes out the lows, and boosts the high frequencies slightly.

## Vocal Chain - Gain staging + Compression

### Compression

A compressor reduces the dynamic range of an audio signal by reducing the loud parts and boosting the quiet ones, resulting in a more controlled and balanced sound. Our ears don't like recordings with too many loud and soft parts all throughout the recording.

## Vocal Chain - Reverb

(this is optional)

reverb is destructive btw

## Vocal Chain - Echo

(this is optional)

## Doubling vocals

### Two takes panned left/right

For this technique, you want two takes of your doubled vocals. Let's say they're both an octave lower. Then, what you'll want to do is pan one take to the left and the other to the right. This technique makes the vocal sound wide. Vocals are in mono so any time you can add width with doubles it adds a lot of energy.

So for example you could have two doubles one octave higher, two doubles one octave lower, and then the main vocals. 

## Harmonies

### Panned left/right

You could also do the same technique you use with doubling vocals. This is where you'd take two takes in the same pitch, and then pan them left and right. They'd sit under/below your main vocal.

### Character voices

From Charlie Puth's video on vocals, you can also sing it in kinds of character voices. For example, more open vowels helps with blending.

---
