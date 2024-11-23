import React from 'react'
import { Button } from "@/components/ui/button"
const Home = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold'>shadecn Library Exmaple</h1>

      <Button>Change theme</Button>
      
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error of
        his ways and repealed the joke tax.
      </p>

      <blockquote className="mt-6 border-l-2 pl-6 italic">
        "After all," he said, "everyone enjoys a good joke, so it's only fair that
        they should pay for the privilege."
      </blockquote>

      <p className="text-xl text-muted-foreground">
        A modal dialog that interrupts the user with important content and expects
        a response.
      </p>

      <div className="text-lg font-semibold">Are you sure absolutely sure?</div>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">    
        this is H1 tag
      </h1>
    </div>
  )
}

export default Home