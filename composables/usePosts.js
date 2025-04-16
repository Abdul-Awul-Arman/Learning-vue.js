// composables/usePosts.js
import { ref } from 'vue';

const usePosts = (id = "") => {
    let posts = ref([])
    let post = ref([])
    const isLoading = ref(false)


    const fetchPosts = async () => {
        isLoading.value = true

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await response.json()
            id ? post.value = data : posts.value = data;

        }
        catch (error) {
            console.error('Error fetching posts:', error)
        }
        finally {
            isLoading.value = false
        }
    }

    fetchPosts()

    // onMounted(() => {
    // fetchPosts()
    // })

    return { post, posts, isLoading }
};

export default usePosts;



