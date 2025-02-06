import Image from "next/image";

export interface AdvantageCardProps {
    image: string;
    title: string;
    description: string;
    imageAspectRatio?: string;
  }
  
  export interface AdvantagesData {
    title: string;
    cards: AdvantageCardProps[];
  }
  export const advantagesData: AdvantagesData = {
    title: "Advantages of JobSpring's AI Interview",
    cards: [
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/16397bc7-9607-42e6-81ea-dbf4ec116d1c?placeholderIfAbsent=true&apiKey=cbe44d5d18c2416e89f2f416cd321e9a",
        title: "Ultimate Interview Mastery",
        description: "Practice countless interviews easily. Upload your resume, job description, and role to start practicing. Hone skills, build confidence.",
        imageAspectRatio: "2.4"
      },
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/232bc53f-1aa0-4786-953c-a3f63e5b8ef5?placeholderIfAbsent=true&apiKey=cbe44d5d18c2416e89f2f416cd321e9a",
        title: "Targeted Company Practices",
        description: "Ace interviews at top companies like Google and Amazon. Our Interview Coach provides practice, mock interviews, and feedback to boost your confidence.",
        imageAspectRatio: "2.4"
      },
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/33821702fa2503ebaa3473b409f62446a9f6d6be3805f7edf2c831c231340428?placeholderIfAbsent=true&apiKey=cbe44d5d18c2416e89f2f416cd321e9a",
        title: "Resume-driven interview",
        description: "Practice interviewing with your own resume! Upload it, and we'll generate tailored interview questions based on your skills and experience.",
        imageAspectRatio: "1.5"
      },
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/89d56ba71943a15d55a04cb647e71f3182dab3d06008a30049ef6c21c3230f2d?placeholderIfAbsent=true&apiKey=cbe44d5d18c2416e89f2f416cd321e9a",
        title: "Insightful analytics",
        description: "Detailed interview analytics reveal your strengths and weaknesses in key areas like communication, knowledge, and word choice, helping you improve.",
        imageAspectRatio: "1.68"
      }
    ]
  };
  export const AdvantageCard: React.FC<AdvantageCardProps> = ({ image, title, description, imageAspectRatio = "2.4" }) => {
    return (
      <div className="flex flex-col grow shrink self-stretch my-auto rounded-none min-w-[240px] w-[451px] max-md:max-w-full">
        <div className="flex flex-col pb-9 bg-white rounded-xl border border-solid border-neutral-200 max-md:max-w-full">
          <div className="flex flex-col px-11 pt-12 pb-7 rounded-xl bg-blue-800 bg-opacity-0 max-md:px-5 max-md:max-w-full">
            <Image
              src={image}
              alt={title}
              className={`object-contain w-full rounded-lg aspect-[${imageAspectRatio}] bg-slate-50 max-md:max-w-full`}
            />
          </div>
          <div className="flex flex-col self-center mt-4 max-w-full min-h-[157px] w-[467px]">
            <div className="text-3xl font-semibold leading-loose text-slate-900 max-md:max-w-full">
              {title}
            </div>
            <div className="mt-4 text-lg leading-7 text-sky-950 text-opacity-80 max-md:max-w-full">
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export const Advantages: React.FC = () => {
    return (
      <div className="flex flex-col">
        <div className="self-center text-5xl font-semibold text-center text-blue-800 leading-[66px] w-[582px] max-md:max-w-full">
          {advantagesData.title}
        </div>
        <div className="flex flex-col mt-20 w-full shadow-[5px_4px_16px_rgba(0,0,0,0.05)] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-6 items-center w-full max-md:max-w-full">
            {advantagesData.cards.slice(0, 2).map((card, index) => (
              <AdvantageCard key={index} {...card} />
            ))}
          </div>
          <div className="flex flex-wrap gap-6 items-center mt-6 w-full max-md:max-w-full">
            {advantagesData.cards.slice(2, 4).map((card, index) => (
              <AdvantageCard key={index + 2} {...card} />
            ))}
          </div>
        </div>
      </div>
    );
  };
