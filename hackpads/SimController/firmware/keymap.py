# Keymap Autogenerated by Pog do not edit
from kmk.keys import KC
from kmk.modules.macros import Macros, Press, Release, Tap, Delay
from kmk.modules.combos import Chord, Sequence

import pog
import customkeys

keymap = [
    [KC.F1, KC.F2, KC.F3, KC.F4, KC.VOLU, KC.F5, KC.F6, KC.F7, KC.F8, KC.VOLD, KC.F9, KC.F10, KC.F11, KC.F12, KC.RELOAD]
]

encoderKeymap = []
for l, layer in enumerate(pog.config['encoderKeymap']):
    layerEncoders = []
    for e, encoder in enumerate(layer):
        layerEncoders.append(tuple(map(eval, encoder)))
    encoderKeymap.append(tuple(layerEncoders))
