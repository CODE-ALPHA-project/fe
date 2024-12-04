import { guidelines } from '@/mock/guidelines';

const WarningSection = () => {
  return (
    <section className="flex flex-col justify-center border-b py-6 text-center font-pretendard text-gray-400">
      {guidelines.map((item, index) => (
        <p key={index}>
          {item.content}
          {item.subContent && (
            <>
              <br />
              {item.subContent}
            </>
          )}
        </p>
      ))}
    </section>
  );
};

export default WarningSection;
