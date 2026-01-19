'use client';

interface MyComponentProps {
  name: string;
}

export function MyComponent({ name }: MyComponentProps) {
  return (
    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
      <p className="font-bold">Hello, {name}!</p>
      <p className="text-sm mt-2">This is a custom MDX component</p>
    </div>
  );
}