---
fileName: audio-file-speed-slow
description: How to Speed Up or Slow Down Tracks in Logic Pro
pubDate: 'Jan 20 2024'
title: How to Speed Up or Slow Down Tracks in Logic Pro
duration: 0
tags: ['logic', 'producing']
---

In this blog post, we'll go into how to speed up or slow down audio tracks in Logic Pro. I found there are two ways you could approach this, so let's get right into it!

## Loop Library

The first way I came across was exporting the audio file to the Loop Library and re-importing it. Afterwards, you should be able to change the global BPM of the project and have the track update accordingly.

So, start by highlighting the track you'd like to change, right click, `export`, `Add to Loop Library...`. Then enter in all the relevant information and add it! Keep in mind **it has to be of type "Loop"** to be able to change BPM/key in your global project when re-imported.

![loop lib screenshot](/blog/audio-file-speed-slow/loop-lib.png)

If you can't get it to be of type "Loop," I have some tips for you. First, check out this [official Apple article](https://discussions.apple.com/thread/4724207?sortBy=best).

- Try setting the global project BPM to match the audio track's BPM
- You must be very exact in your cuts when making/pulling your sample, especially if you are cutting in another program
- Even if it appears that it is right on, it may be too short or too long by less than the smallest increment available in the Logic Pro timeline so zoom to double check

After, just re-import it into your project and then you can change the BPM/key to update the track. Honestly, this seems like the best way to do it because you can easily change the BPM/key!

### Deleting User Created Loops

If you'd like to delete your loop, navigate to `/Audio/Apple Loops/User Loops/`. Your loop should be there. Go ahead and delete it! Once the loop library re-indexes, it should be gone.

## Flex Tool

The other way I found was using the flex tool. But, I found your global project BPM has to be the same as the original track BPM beforehand. Basically, double click your audio track so the audio track editor comes up in the bottom. There is a flex icon, click that. Then, directly to the right of the flex icon, you should have a drop down menu. Choose Flex Time - Polyphonic. You could also mess around with other flex times. Now changing the project BPM should update the track's BPM. You could also manually pitch things up/down semitones as needed.

If you wanted to do this on import, you could do so via global project "Smart Tempo" and adjust its settings. There's [a nice video](https://youtu.be/fJjnx7HQq0w?si=UhTVZ7bSTWAQfqJm) done on this as well.

## Resources

- [How to Speed up or Slow down Tracks in Logic Pro - John Mike](https://www.youtube.com/watch?v=XGw9-VMSvzA)
- [How To Make Any Sample or Loop Fit Your Project Tempo in Logic X - Echo Sound Works](https://youtu.be/fJjnx7HQq0w?si=V0s55NaPvsjwklVq)
- [Add to Loop Library Apple Article](https://discussions.apple.com/thread/4724207?sortBy=best)