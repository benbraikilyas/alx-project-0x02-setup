import type { NextPage } from 'next'
import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'

const About: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="space-y-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Button Examples</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button size="small" shape="rounded-sm">Small</Button>
                <Button size="medium" shape="rounded-md">Medium</Button>
                <Button size="large" shape="rounded-full">Large</Button>
              </div>

              <div className="flex gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">About Our Company</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Learn more about our mission and values.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default About