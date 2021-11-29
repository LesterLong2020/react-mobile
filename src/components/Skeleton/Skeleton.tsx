/**
 * @name Skeleton
 * @author Lester
 * @date 2021-11-29 10:24
 */
import React from 'react';
import style from './style.module.less';

interface SkeletonProps {
  active: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ active }) => {
  return (
    <>
      {active && (
        <div className={style.skeletonWrap}>
          <header className={style.header}>
            <span className={style.avatar} />
            <ul className={style.rowList}>
              <li className={style.row} />
              <li className={style.row} />
            </ul>
          </header>
          <ul className={style.rowList}>
            <li className={style.row} />
            <li className={style.row} />
            <li className={style.row} />
            <li className={style.row} />
            <li className={style.row} />
            <li className={style.row} />
            <li className={style.row} />
            <li className={style.row} />
            <li className={style.row} />
            <li className={style.row} />
            <li className={style.row} />
            <li className={style.row} />
          </ul>
        </div>
      )}
    </>
  );
};

export default Skeleton;
