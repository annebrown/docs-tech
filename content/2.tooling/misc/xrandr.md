---
title: xrandr
description: XWin Screen Utility
lastModified: '2025-01-07'
---

## Description

XWin screen config and mgmt tool

## Display Screen Deets

```bash
xrandr
```

Output looks like:

```txt
Screen 0: minimum 320 x 200, current 4920 x 1920, maximum 16384 x 16384
DP-1 connected primary 1080x1920+3840+0 right (normal left inverted right x axis y axis) 698mm x 393mm
   1920x1080     60.00*+ 180.00   143.99   120.00   119.88   119.98    50.00    59.94    60.00
   1680x1050     59.95    60.00
   1400x1050     60.00
   1600x900      60.00
   1280x1024     75.02    60.02    60.00
 ...
   320x200       60.00
   320x180       60.00
   320x175       60.00
HDMI-1 connected 1920x1080+1920+747 (normal left inverted right x axis y axis) 698mm x 393mm
   1920x1080     60.00*+ 180.00   143.99   120.00   119.88   119.98    50.00    59.94    60.00
   3200x1800     60.00
   2880x1620     60.00
   2560x1600     60.00
   2560x1440     60.00
   2048x1536     60.00
...
   320x180       60.00
   320x175       60.00
DP-2 disconnected (normal left inverted right x axis y axis)
HDMI-2 connected 1920x1080+0+747 (normal left inverted right x axis y axis) 698mm x 393mm
   1920x1080     60.00*+ 180.00   143.99   120.00   119.88   119.98    50.00    59.94    60.00
```

`:0` -  first X server
`:0.0` - first screen (usually primary) connected to X server
`:0.1` - second screen (HDMI-1)
`:0.1` - third screen (DPI-1)
