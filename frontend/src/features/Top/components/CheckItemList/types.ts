type TrainingMenuItemProps = {
  id: number;
  name: string; // メニュー名
  weight: number; // 1セットの重さ
  reps: number; // 1セットの回数
  set: number; // セット回数
  comment: string; // 備考欄
};

export const trainingMenuMock: TrainingMenuItemProps[] = [
  {
    id: 1,
    name: 'ベンチプレス',
    weight: 60,
    reps: 10,
    set: 3,
    comment: '胸を張り、肘の角度に注意',
  },
  {
    id: 2,
    name: 'スクワット',
    weight: 80,
    reps: 8,
    set: 4,
    comment: '膝が爪先より前に出ないように注意',
  },
  {
    id: 3,
    name: 'デッドリフト',
    weight: 100,
    reps: 6,
    set: 3,
    comment: '背中をまっすぐに保ち、腰を落として行う',
  },
  {
    id: 4,
    name: 'ラットプルダウン',
    weight: 45,
    reps: 12,
    set: 3,
    comment: '肩甲骨を寄せるイメージで引き下ろす',
  },
  {
    id: 5,
    name: 'ダンベルショルダープレス',
    weight: 20,
    reps: 10,
    set: 4,
    comment: '肘を90度に曲げてスタート、ゆっくりと上げ下げする',
  },
];
