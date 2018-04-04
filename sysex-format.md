Sysex Patch Dump Format
=======================
 
 ```
 Offset   Data      Bits Description
-------- ----------- --- ------ 
  0 0000 F0            8 System Exclusive
  1 0001 00 61 16     24 GliGli ID 
  3 0003 01            8 Command Code (1=Patch Dump, 2=Patch Dump Request)
  4 0004 ...             Encoded Dump Payload (n bytes, msb=0 for all bytes)
         F7              End of Exclusive             
```

Encoded Dump Payload
--------------------

Encoded dump payload encodes 4 8-bit values as 5 7-bit values. Each
4 or 5 byte segment is a "chunk". When encoding, the device takes the raw data 
representing the path 4 bytes at a time to produce a sequence of 5-byte 
encoded chunks. If the raw data is not an even multiple of 4, it is padded 
with additional zero bytes as needed. When decoding, the encoded data is taken 
5 bytes at a time to recover a sequence of original 4-byte chunks.

Given a chunk of raw 8-bit data
```
Aaaaaaaa Bbbbbbbb Cccccccc Dddddddd
```

where A-D represent the most significant bits of each 8-bit value, the 
resulting encoded chunk has the following form:
```
0aaaaaaa 0bbbbbbb 0ccccccc 0ddddddd 0000DCBA
```

Example
```
Raw:      F1 02 B3 84
Encoded:  71 02 33 04 0D
```

Raw Dump Payload Format
-----------------------

Dump format as of version 3. The following table gives the offset and length
of each field of the dump in bytes.

```
Offset Length Description
------ ------ ---------------------------
     0      1 Patch number (0-99)
     1      4 Magic
     5      1 Version
     6      2 Oscillator A Frequency
     8      2 Oscillator A Output Level
    10      2 Oscillator A Pulse Width
    12      2 Oscillator B Frequency
    14      2 Oscillator B Output Level
    16      2 Oscillator B Pulse Width
    18      2 Oscillator B Fine [0..65535] => [-32767..32768]
    20      2 Filter Cutoff
    22      2 Filter Resonance
    24      2 Filter Envelope Amount
    26      2 Filter Release
    28      2 Filter Sustain
    30      2 Filter Decay
    32      2 Filter Attack
    34      2 Amplifier Release
    36      2 Amplifier Sustain
    38      2 Amplifier Decay
    40      2 Amplifier Attack
    42      2 Poly-Mod Source Filter Env
    44      2 Poly-Mod Source Oscillator B
    46      2 LFO Frequency
    48      2 LFO Depth
    50      2 Keyboard Glide
    52      2 Amplifier Velocity
    54      2 Filter Velocity
    56      1 Sawtooth A (off=0, on=1)
    57      1 Triangle A (off=0, on=1)
    58      1 Pulse A (off=0, on=1)
    59      1 Sawtooth B (off=0, on=1)
    60      1 Triangle B (off=0, on=1)
    61      1 Pulse B (off=0, on=1)
    62      1 Sync A (off=0, on=1)
    63      1 Poly-Mod Destination Freq A (off=0, on=1)
    64      1 Poly-Mod Destination Filter (off=0, on=1)
    65      1 LFO Shape (pul=0, tri=1, ran=2, sin=3, noi=4, saw=5)
    66      1 LFO Frequency Range (low=0, high=1) 
    67      1 LFO Dest Mode (vco=1, vcf=2, vca=4, pw=8, a=16, b=32)
    68      1 Keyboard Track (off=0, 1/2=1, full=2) 
    69      1 Filter Curve (lin=0, exp=1)
    70      1 Filter Rate (fast=0, slow=1)
    71      1 Amplifier Curve (lin=0, exp=1)
    72      1 Amplifier Rate (fast=0, slow=1)
    73      1 Unison (off=0, on=1)
    74      1 Key Assign Mode (last=0, low=1, high=2)
    75      1 Bend Wheel Range (2nd=2, 3rd=5, 5th=7, oct=12)
    76      1 Bend Wheel Target (off=0, vco=1, vcf=2, vca=3)
    77      1 Mod wheel range (full=0, high=1, low=3, min=5)           
    78      1 Frequency Step (free=0, semi=1, oct=2) 
    79      2 LFO Delay
    81      2 Vibrato Frequency
    83      2 Vibrato Depth
    85      2 Unison Detune
    87      2 Appegiator/Sequencer clock
    88      1 Mod Wheel Target (lfo=0, vib=1)
    89      1 (padding)
    90      6 Unison Track Pattern
```

Full Example
------------

This example shows the patch dump system exclusive message with the
encoded payload, followed by the decoding for the patch data.

```
00  F0 00 61 16 01 00 25 16  61 02 00 03 00 30 00 7F  |  a   % a    0  |
10  7B 00 66 01 00 30 00 04  08 00 58 7F 7F 04 00 42  |{ f  0    X    B|
20  00 78 00 00 08 00 00 02  00 00 00 00 00 00 00 00  | x              |
30  00 00 00 20 00 37 02 00  00 00 00 08 00 00 40 64  |     7        @d|
40  0C 00 00 00 00 00 00 00  00 00 00 00 00 01 00 00  |                |
50  00 01 01 00 00 00 01 00  02 00 02 00 01 00 00 01  |                |
60  00 00 03 00 01 02 01 00  00 00 00 00 00 00 00 00  |                |
70  00 60 08 47 00 00 00 01  7F 7F 7F 7F 0F 7F 00 00  | ` G            |
80  00 01 F7                                          |   |
```

SysEx Message Decoding
```
Offset   Data           Description
------  --------------  --------------------------
     0  F0              System Exclusive 
     1  00 61 16        GliGli ID
     4  01              Command Code (Patch Dump)
     5  00 25 16 61 02  Patch data encoded in 5-byte chunks...
    10  00 03 00 30 00
    15  7F 7B 00 66 01
    20  00 30 00 04 08
    25  00 58 7F 7F 04
    30  00 42 00 78 00
    35  00 08 00 00 02
    40  00 00 00 00 00
    45  00 00 00 00 00
    50  00 20 00 37 02
    55  00 00 00 00 08
    60  00 00 40 64 0C
    65  00 00 00 00 00
    70  00 00 00 00 00
    75  00 00 01 00 00
    80  00 01 01 00 00
    85  00 01 00 02 00
    90  02 00 01 00 00
    95  01 00 00 03 00
   100  01 02 01 00 00
   105  00 00 00 00 00
   110  00 00 00 60 08
   115  47 00 00 00 01
   120  7F 7F 7F 7F 0F
   125  7F 00 00 00 01
   131  F7              End-of-Exclusive
```

Decoded patch data

```
Offset   Data      Bits Description
------ ----------- --- ----------------------
    0  00            8 Patch number 0
    1  A5 16 61 00  32 Magic
    5  03            8 Version 3
    6  00 30        16 Oscillator A Frequency [12288]
    8  FF 7B        16 Oscillator A Output Level [31743]
   10  00 66        16 Oscillator A Pulse Width [26112]
   12  00 30        16 Oscillator B Frequency [12288]
   14  00 84        16 Oscillator B Output Level [33792]
   16  00 58        16 Oscillator B Pulse Width [22528]
   18  FF 7F        16 Oscillator B Fine [0]
   20  00 42        16 Filter Cutoff
   22  00 78        16 Filter Resonance
   24  00 88        16 Filter Envelope Amount
   26  00 00        16 Filter Release
   28  00 00        16 Filter Sustain
   30  00 00        16 Filter Decay
   32  00 00        16 Filter Attack
   34  00 00        16 Amplifier Release
   36  00 A0        16 Amplifier Sustain
   38  00 37        16 Amplifier Decay
   40  00 00        16 Amplifier Attack
   42  00 80        16 Poly-Mod Source Filter Env
   44  00 00        16 Poly-Mod Source Oscillator B
   46  C0 E4        16 LFO Frequency
   48  00 00        16 LFO Depth
   50  00 00        16 Keyboard Glide
   52  00 00        16 Amplifier Velocity
   54  00 00        16 Filter Velocity
   56  00            8 Sawtooth A (off=0, on=1)
   57  00            8 Triangle A (off=0, on=1)
   58  01            8 Pulse A (off=0, on=1)
   59  00            8 Sawtooth B (off=0, on=1)
   60  00            8 Triangle B (off=0, on=1)
   61  01            8 Pulse B (off=0, on=1)
   62  01            8 Sync A (off=0, on=1)
   63  00            8 Poly-Mod Destination Freq A (off=0, on=1)
   64  00            8 Poly-Mod Destination Filter (off=0, on=1)
   65  01            8 LFO Shape (pul=0, tri=1, ran=2, sin=3, noi=4, saw=5)
   66  00            8 LFO Frequency Range (low=0, high=1) 
   67  02            8 LFO Dest Mode (vco=1, vcf=2, vca=4, pw=8, a=16, b=32)
   68  02            8 Keyboard Track (off=0, 1/2=1, full=2) 
   69  00            8 Filter Curve (lin=0, exp=1)
   70  01            8 Filter Rate (fast=0, slow=1)
   71  00            8 Amplifier Curve (lin=0, exp=1)
   72  01            8 Amplifier Rate (fast=0, slow=1)
   73  00            8 Unison (off=0, on=1)
   74  00            8 Key Assign Mode (last=0, low=1, high=2)
   75  03            8 Bend Wheel Range (2nd=2, 3rd=5, 5th=7, oct=12)
   76  01            8 Bend Wheel Target (off=0, vco=1, vcf=2, vca=3)
   77  02            8 Mod wheel range (full=0, high=1, low=3, min=5)           
   78  01            8 Frequency Step (free=0, semi=1, oct=2) 
   79  00 00         8 LFO Delay
   81  00 00        16 Vibrato Frequency
   83  00 00        16 Vibrato Depth
   85  00 00        16 Unison Detune
   87  E0 C7        16 Appegiator/Sequencer clock
   88  00            8 Mod Wheel Target (lfo=0, vib=1)
   89  00            8 (padding)
   90  00 FF FF FF  48 Unison Track Pattern
       FF FF        
   96  00 00 00     24 Chunk padding