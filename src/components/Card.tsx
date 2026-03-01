import ghImage from "@/assets/images/ywwa.png";
import { age, arrContacts, currentWork } from "@/lib/data";
import CardLinkButton from "./CardLinkButton";
import ThemeToggle from "./ThemeToggle";
import { cn } from '@/lib/utils';

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2 gap-2">
      <div className="rounded-full overflow-hidden relative select-none">
        <ThemeToggle />
        <img src={ghImage} className="w-56 select-none" alt="ywwa" />
      </div>
      <div className="w-full">
        <div className="text-center">
          <h2 className="text-xl font-medium relative -mb-2">
            Gabriels Kukutis
            <sup className="font-nanum text-xl absolute text-zinc-600">
              (
              <span className="text-purple-400">{age}</span>
              )
            </sup>
          </h2>
          <h3>
            aka <span className="font-nanum text-xl text-purple-400">ywwa</span>
          </h3>
        </div>

        <div className="w-full flex p-2 items-center gap-3 justify-center">
          {arrContacts.map((entry, index) => (
            <CardLinkButton key={index} contact={entry} />
          ))}
        </div>
          {currentWork && (
            <div className='w-full flex flex-col items-center justify-center'>
            <p className="text-xs font-medium font-inter text-zinc-600 dark:text-zinc-400 mt-1">
              Currently working at
            </p>
              <a
                href={currentWork.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn('font-nanum text-xl font-black hover:underline align-middle', currentWork.color ? currentWork.color : 'text-purple-400')}
              >
                {currentWork.name}
              </a>
            </div>
          )}
      </div>
    </div>
  );
};

export default Card;
