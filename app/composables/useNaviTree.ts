import { computed, toValue, type Ref } from 'vue'

// Generic type for input array
type MaybeRef<T> = T | Ref<T>


export function useNaviTree<T>(
    someArray: MaybeRef<T[]>
    ) {

        const modifiedArray = computed(() => {
            const currentArray = toValue(someArray)
            if (!Array.isArray(currentArray) || currentArray.length === 0) {
            return [];
        }

            const copiedArray = currentArray.slice(1)

            return copiedArray
    });

return modifiedArray
}
