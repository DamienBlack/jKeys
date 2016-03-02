# JSKeys
Helps interpret javascript keydown and keypress events.
JSKeys adds several functions to the KeybordEvent class as well as the jQuery.Event class, if it exists.

event.printable()

    Returns the printable character that the combination of keys
    should yield. Particularly useful for the "keydown" event, which
    only returns key codes. 
    
    This function cannot take into account
    the state of the capslock key.

event.description()

    Returns a textual description of the combination of keys pressed.
    For example, it may return "ctrl-shift-f6".

event.keyToCode

    An object that lets you find key codes by textual description
    For example event.keyToCode.left is 37

event.codeToKeyInfo

    An array of keycodes that contain information about the key.
    For example:
      event.codeToKeyInfo[188].description = "comma"
      event.codeToKeyInfo[188].print = ","
      event.codeToKeyInfo[188].shiftPrint = "<"
