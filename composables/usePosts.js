// composables/usePosts.js
import { onMounted, ref } from 'vue'

const usePosts = () => {
    const posts = ref([])
    const isLoading = ref(false)

    const fetchPosts = async () => {
        isLoading.value = true

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            posts.value = data



        }
        catch (error) {
            console.error('Error fetching posts:', error)
        }
        finally {
            isLoading.value = false
        }
    }


    onMounted(() => {
        fetchPosts()
    })

    return { posts, isLoading }
}

export default usePosts
