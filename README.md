# JSKeys
Helps interpret javascript keydown and keypress events

JSKeys_keyEventToPrintable(event)

    Returns the printable character that the combination of keys
    should yield. Particularly useful for the "keydown" event, which
    only returns key codes. 
    
    This function cannot take into account
    the state of the capslock key.

JSKeys_keyEventToDescription(event)

    Returns a textual description of the combination of keys pressed.
    For example, it may return "ctrl-shift-f6".

JSKeys_keyToCode

    A objects that lets you find key codes by textual description
    For exapmle JSKeys_keyToCode.left is 37

JSKeys_codeToKeyInfo

    An array of keycodes that contain information about the key.
    For example:
      JSKeys_codeToKeyInfo[188].description = "comma"
      JSKeys_codeToKeyInfo[188].print = ","
      JSKeys_codeToKeyInfo[188].shiftPrint = "<"
