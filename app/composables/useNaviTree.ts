// composables/useDebugNaviTree.ts
import { computed, toValue, type Ref } from 'vue';

// Define a generic type for the input array
type MaybeRef<T> = T | Ref<T>;

/**
 * A composable that takes an array and returns a new array
 * with the first (apex) entry removed.
 *
 * @param someArray - The input array, which can be reactive (Ref) or plain.
 * @returns A computed Ref containing the new array with the first item removed.
 */
export function useNaviTree<T>(
  someArray: MaybeRef<T[]>
) {
  // Use computed to ensure reactivity and to create a new array
  // The value of this computed property will be the modified array.
  const modifiedArray = computed(() => {
    const currentArray = toValue(someArray); // Get the current value of the input array

    if (!Array.isArray(currentArray) || currentArray.length === 0) {
      return []; // Return an empty array if input is invalid or empty
    }

    // Create a shallow copy and remove the first element
    // This is crucial to avoid mutating the original array passed as a prop
    const copiedArray = currentArray.slice(1);

    return copiedArray;
  });

  // The composable simply returns the computed reactive array.
  return modifiedArray;
}
