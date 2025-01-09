---
fileName: recording-guitar
description: Learn essential tips for recording guitar, from tuning and amp sims to DI, double tracking, mixing, and avoiding common pitfalls in your home studio!
pubDate: 2024-02-05
title: Recording Guitar
duration: 9
tags: ['producing', 'guitar']
resources: [ {title: "13 things to AVOID when Recording Amp Sims", url: "https://www.youtube.com/watch?v=MXElgek9J78&t=210s"},
{title: "13 Things to AVOID Recording Guitar in your Home Studio", url: "https://youtu.be/Mc8W-cSkZHo?si=IlWYpEqSJ6mvsfOR"}, {title: "13 Things to AVOID when Recording GUITAR at HOME", url: "https://youtu.be/RvRAL_q3csk?si=fodu-yvtPsApVZYa"}, {title: "Studio One Minute: The Right Way to Double Guitars - PreSonus", url: "https://youtu.be/3I-R9426CC8?si=OxNjUHBJa8EBjUkv"}]

---

Recording guitar can involve a lot of factors. So, I've created a small overall guide to the process! This ranges from picking the right guitar to all the small bits you need to know while tracking.

## Studio monitors

You're going to need to be able to properly listen to your mix. Headphones have a baked-in frequency response designed to enhance the listening experience. Something that is designed to relay the truth would be better. That's where studio monitors come in. The Kali Audio LP series has good ones but they can be pricey. When you set them up, angle them at 60 degrees each so that your head is at the apex of an equilateral triangle. The middle of the monitors should be at your ears.

Give your mix/song a real-world test as well. It may sound good in the mix room, but try it elsewhere. Try it with headphones after, in the car after, or even on your laptop.

## Guitar choice and tuning

It doesn't matter what it says on the headstock; it matters if it stays in tune. Feel free to pick a guitar to your preference. Just make sure it's quality, comfortable, and stays in tune! Get your guitar nicely set up before recording.

Check and re-check your tuning. You don't want to have to re-record a region just because you were out of tune. Software can fix a lot but it can't fix laziness and bad tuning. Make sure you have fresh strings on it for the best tone. Similarly, apply that concept to any other instrument you're working with. Also, retune after takes!

## Bad cables

There's no excuse for using bad cables. This is the one place you don't want to go wrong. They directly carry the signal from your guitar to your recording interface. So, they should be in top-notch state. If you're recording at home, a shorter cable is better since there will be a purer signal and less chance of things going awry.

## Interface paralysis

Personally, I use the 3rd Gen Scarlett Solo. Most converters on basic recording interfaces these days are quite good. For the Scarlett Solo, just make sure to turn on the "INST" option when recording guitar. This is short for "instrument" mode, and it increases the gain but also puts the port in high impedance (hi-Z) mode, which is suitable for guitar pickups.

## DI

Interface DI is alright, but having something like a direct box is very good. It bypasses the interface's DI and goes in through the mic preamps which are generally much cleaner. For example, a Countryman direct box is around the $150 price range.

The DI signals should not be noisy. You don't want electrical interference. Stay far back from the computer. Crank up the amp sim, turn off the noise gate, and try to listen to the sound that's being created. Turn your guitar slightly or move to a different part of the room. Getting this right will give your mix engineer the best source possible.

## Messing with amp sims

Recording a guitar off a real amp takes years of practice and experimenting. Also, you have to keep in mind you're recording with bass, drums, vocals, and more that are all competing for space in the mix. A huge hurdle to overcome is that sometimes a guitar can sound great in a mix, but not great by itself. That's totally okay.

You don't have to go too crazy with effects starting out. Choose a preset and play your guitar for God's sake! Let the amp sim do the heavy lifting for us. We mostly want to be worried about the performance/writing.

## Bad levels

Too quiet, your guitar sounds wimpy. Too loud, and we get digital clipping. The Scarlett Solo has plenty of headroom. There's room to raise the signal without the signal being clipped.

You should aim for your guitar to come through all green on the interface itself. Yellow is fine, but red on the interface means you're clipping. Chug on one string/chord as hard as you can until you start seeing some clipping and then back the fader off. **You should aim so your loudest sound hits around the -6db mark**. You want to leave headroom for the rest of the mix!

## Latency

Make sure you installed the drivers correctly for your interface. Normally on a Mac, you'd have to try to mess this up.

**Set yourself to low latency monitoring mode. After, I'll set the I/O buffer size to 64 samples**. After, I set it back to 256 samples to save on CPU. Most DAWs will tell you what the latency will be around in milliseconds.

## Foam to control the strings

Sometimes after a chord even after palm muting you can hear the strings reverberate. You can really hear this when plugging into a high gain amp. The strings behind the nut, behind bridge if you have a tune-o-matic, or the springs on the back of your guitar.

Placing a bit of foam behind the nut to keep the strings from ringing out can really clean things up. Not just for resting measures, but for when you're playing as well. This is because you could get added overtones from previous chords played when transitioning to the next if the previous ones ring out. These trouble spots can vary from guitar to guitar based on its design. Foam behind the bridge could kill too much resonance/sustain so just play it by ear and do your research.

## Taping strings

Keep a roll of masking tape on hand. If you're playing high up on the strings with a lot of gain, chances are you might be letting the low strings are moving without you even realizing it. If you're having difficulties on a specific run, figure out what strings you don't need and tape them off.

## Double tracking

If you want a big wide guitar sound, you need at least two rhythm guitar tracks. **This does not mean recording one and then copying and pasting it**. Then, you'd get unintentional mono because there's no difference in the left/right tracks. Actually play the second track. After, you'll want to pan one to the left, and pan one to the right. Generally, this should be your starting point.

For example, James Hetfield from Metallica famously played three guitar tracks on the Ride the Lightning album. One track fully panned on the left, one track fully panned on the right, and one track down the center with the levels 6 decibels lower as a filler track.

By the way, double tracking is not easy. You'll have to play with precision to try and match your first track exactly. This takes practice.

You could also go with recording four tracks. Two panned full left/right, and two panned 80% left/right and it creates an amazing sound.

## Impulse inception

Some preset libraries have built-in impulses. Don't add extra on top of them! It'll basically sound like a mic'd up amp going into another mic'd up amp. Pretty bad! If you really wanted multiple, you'd have to do it in parallel and not in series.

## Stereo bus, mono effects

Do not use mono plugins on the guitar buses. This can be a really easy thing to miss and it'll turn your whole guitar track to be in mono and not stereo.

## Mixing

Mixing isn't just about turning the volume up. You don't want your song to be overpowered by the guitar. Try turning down the fader (volume level) to make sure it sits in the mix properly. It's all about give and take. Make decisions so the song as a whole sounds good.

Honestly, you could even use volume automation. Say, there's a guitar solo. You can automate the volume to duck in the rhythm guitars (generally around 2db lower) just for that portion while the lead guitar shreds through the mix.

## Guitar leveling

Track your guitars at the same level! If you don't, it'll pull to one side when you pan the multi-tracked guitar to the left/right.

## High pass

A high pass means we are not EQ'ing the high frequencies and instead only cutting the lows. You should be applying this on pretty much everything from guitars, bass, and kick drum very gently. The guitar is generally a mid-range instrument. The lead guitar is typically playing in a higher register so they don't need a lot of low frequencies. So applying a low cut will give more space for the kick/bass.

This is basically equivalent to turning your bass knob down on your guitar amp. Rhythm guitars you could apply a low cut around 80-90hz. Lead guitar you can take out up to 200-250hz. Kick drum/bass guitar you can cut out anything below 40hz. Drum overheads you could take out up to 600hz.

Think about it as "how much can I get away with?" It shouldn't be a "should I or shouldn't I?" This is because even with low cuts there can still be low-end buildup as you add tracks.

## SSL Bus Compressor

I haven't explored this all too much. However, you can add an SSL bus compressor to your mix as a whole. These first appeared in 1976 and probably all of your favorite mixes went through one. There are digital implementations of this nowadays. With it, you'd have the attack on 30ms, release to auto, 4:1 ratio, and you play with the threshold until you see it hitting 4 on the graph. This adds a subtle effect but glues the mix together. You can check this out in [this video](https://youtu.be/Mc8W-cSkZHo?si=yi_cNsCRxkk552r6&t=680) I watched to help make this article.

## Don't forget the bass

Without a bass guitar, your guitars will kinda sound thin and weak. Bass guitar is what gives gravity to your mix. Mess around with the levels and make sure it is at a reasonable presence.

## Take a break

Sometimes the easiest way to come back to a mix is taking a break and coming back to it. Mental clarity helps bring new perspectives and ideas. Don't feel guilty about taking a break.
