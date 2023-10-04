import React, { useState, useEffect } from "react";

const Item = ({ item, setChanged }, {checked, setChangedItems}) => {
  const [count, setCount] = useState(0);
  const [checkedItems, setCheckedItems] = useState(0);

  useEffect(() => {
    setChanged(item);
  }, [count]);

  useEffect(() => {
    setChangedItems(checked);
  }, [checkedItems]);
// 세션에서 배운 방식으로 체크박스 개수 세는 것을 구현해보려 노력했습니다 ..
// 체크박스 개수 세기를 구현할 때 체크된 박스 수를 어떻게 선언하고, 어떤 방식으로 개수를 셀 수 있는지 알아내지 못했습니다 ..
// 그리고 체크박스 개수는 아이템 수(count)와 달리 +,-가 아니라 조건문if로 구현해야 될 거 같은데,
// 이것도 위의 박스 개수를 어떻게 선언하는지가 해결된다면 해결해볼 수 있을 거 같습니다 !!
  return (
    <>
      <li>
        <input
            type='checkbox'
            onClick={() => {
              setCheckedItems();
            }}
        />
        <span>{item}</span>
        <div>
          <div>{count}</div>
          <div className={"button-list"}>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </li>
      <style jsx>{`
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: white;
          box-shadow: 0px 2px 10px 0px rgb(182 158 198 / 15%);
          height: 2rem;
        }
        li > span {
          font-size: 1.5rem;
          font-weight: 500;
        }
        li > div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        li > div > div:first-child {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 5px;
          background: #efeded;
          font-weight: 700;
        }
        li > div > div.button-list {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        li > div > div.button-list button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.7rem;
          height: 1.7rem;
          cursor: pointer;
          border-radius: 5px;
          border: none;
          background: #f6ecff;
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

export default Item;