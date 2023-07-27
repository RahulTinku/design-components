import { BlogCard } from "@walmart/gtp-design";

function App() {
  return (
    <BlogCard
  avatarImage="static/media/src/components/BlogCard/Docker.svg"
  bottomTags={[
    {
      color: 'red',
      content: 'Action required by May 6th\'23',
      id: 0,
      variant: 'tertiary'
    },
    {
      color: 'blue',
      content: 'docker',
      id: 1,
      variant: 'tertiary'
    },
    {
      color: 'blue',
      content: 'docker desktop',
      id: 2,
      variant: 'tertiary'
    }
  ]}
  content={{
    author: 'Devang Tomar',
    authorTitle: 'Devang Tomar',
    body: 'For Windows user, Docker desktop is now available to download and install over from EDLF store (soon replaced)',
    dateAndTime: 'Feb. 20, 2017 by',
    hoverContent: 'Software Engineer III'
  }}
  heading="Docker Desktop is now available for download and install via the EDLP appstore"
  children
/>
  );
}

export default App;
