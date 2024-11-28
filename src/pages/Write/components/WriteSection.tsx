import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const WriteSection = () => {
  const [content, setContent] = useState('');

  const contentChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const submitContentHandler = () => {
    console.log(content);
    setContent('');
  };

  return (
    <section className="py-4">
      <Textarea
        className="h-[400px]"
        value={content}
        onChange={contentChangeHandler}
      />
      <Button
        className="mt-4 w-full bg-blue-400"
        onClick={submitContentHandler}
      >
        작성하기
      </Button>
    </section>
  );
};

export default WriteSection;
