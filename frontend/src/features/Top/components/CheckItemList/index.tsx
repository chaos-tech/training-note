import { trainingMenuMock } from './types';

export const CheckItemList = () => {
  return (
    <div className="bg-primary-gray flex-1 rounded-2xl px-6 pt-6">
      {trainingMenuMock.map((data, index) => {
        return <CheckItem key={index} {...data} />;
      })}
    </div>
  );
};

type CheckItemProps = {
  name: string;
  weight: number; // 1セットの重さ
  reps: number; // 1セットの回数
  set: number; // セット回数
};

export const CheckItem = ({ name, weight, reps, set }: CheckItemProps) => {
  return (
    <div className="border-light-gray border-b p-2 last:border-none">
      <ul className="flex list-none justify-between">
        <li className="text-base">{name}</li>
        <li className="">
          <ul className="flex list-none gap-2">
            <li className="text-deep-gray text-sm tracking-wider">{`${weight}×${reps}×${set}`}</li>
            <input type="checkbox" />
          </ul>
        </li>
      </ul>
    </div>
  );
};
