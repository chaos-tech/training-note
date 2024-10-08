import { trainingMenuMock, CheckItemProps } from './types';

export const CheckItemList = () => {
  const handleClick = () => {
    alert('種目を追加できます');
  };

  return (
    <section className="bg-primary-gray flex-1 rounded-2xl px-6 pb-4 pt-6">
      <div className="relative h-full">
        <div>
          {trainingMenuMock.map((data, index) => {
            return <CheckItem key={index} {...data} />;
          })}
        </div>
        <button
          className="bg-dark-gray absolute bottom-0 right-0 flex items-center justify-center gap-3 rounded-full py-2.5 pl-4 pr-6"
          onClick={() => handleClick()}
        >
          <PlusIcon />
          <p className="text-primary-white text-sm">種目を追加</p>
        </button>
      </div>
    </section>
  );
};

export const CheckItem = ({ name, weight, reps, set }: CheckItemProps) => {
  return (
    <div className="border-light-gray border-b p-2 last:border-none">
      <ul className="flex list-none justify-between">
        <li className="text-base">{name}</li>
        <li className="">
          <ul className="flex list-none gap-2">
            <li className="text-deep-gray text-sm tracking-wider">{`${weight}×${reps}×${set}`}</li>
            <input
              type="checkbox"
              className="accent-dark-gray scale-150 border-2"
            />
          </ul>
        </li>
      </ul>
    </div>
  );
};

const PlusIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25 6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75H6.75V11.25H5.25V6.75Z"
        fill="white"
      />
    </svg>
  );
};
