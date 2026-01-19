import { MyComponent } from '@/components/MyComponent';
import Image from 'next/image';
import Link from 'next/link';

interface MDXComponents {
  [key: string]: React.ComponentType<any>;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use the custom components passed through the MDX content
    ...components,
    // Add your custom components here
    MyComponent,
    // Override default components
    img: (props) => (
      <div className="my-6 relative aspect-video rounded-lg overflow-hidden">
        <Image 
          alt={props.alt || ''} 
          src={props.src || ''} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
    ),
    a: (props) => (
      <Link 
        href={props.href || ''} 
        className="text-blue-400 hover:underline"
        {...props}
      />
    ),
    // Add more component overrides as needed
  };
}