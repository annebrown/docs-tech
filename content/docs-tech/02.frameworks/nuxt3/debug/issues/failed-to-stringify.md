---
title: Failed to Stringify
description: Failed to Stringify Server Logs
lastModified: '2025-03-22'
---

## Error

 Dev server warning:

 ```log
 WARN  [nuxt] Failed to stringify dev server logs. Received DevalueError: Cannot stringify a function. You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.
 ```

## Cause

 Nuxt tries to stringify a complex object or function using standard JSON serialization, during Nuxt's dev server log serialization process.

## Try Lazy Loading

Use useLazyAsyncData to handle data reactively, to mitigate serialization issues.

`useLazyAsyncData` is a wrapper for `useAsyncData`, that triggers data fetching wo blocking navi.  It allows navi to occur b4 finishing asynch data fetching.

Imporves user experience with faster navi, esp for data not immediately necessary for the initial render, such as a large, collapsable navi tree.

With useLazy, pending and error states need to be handled in the same component template.

## Solution

`s/useAsyncData/useLazyAsyncData/g`

## Status

SOLVED, CLOSED
