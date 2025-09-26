import type { NextPage, GetStaticProps } from 'next'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import type { PostProps } from '@/interfaces'

interface PostsPageProps {
  posts: PostProps[]
}

const Posts: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) throw new Error('Failed to fetch posts')
    
    const data = await response.json()
    const posts = data.map((post: any) => ({
      id: post.id,
      title: post.title,
      content: post.body,
      userId: post.userId
    }))

    return {
      props: {
        posts
      },
      revalidate: 60 // Regenerate page every 60 seconds
    }
  } catch (error) {
    return {
      props: {
        posts: []
      },
      revalidate: 60
    }
  }
}

export default Posts