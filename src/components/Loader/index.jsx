import styled from "./Loader.module.css";
export function Loader() {
  return (
    // This loader was taken from UIVERSE.IO
    // Created by Donewenfu
    <div className={styled.loader}>
      <div
        className={`${styled.justifyContentCenter} ${styled.jimuPrimaryLoading} `}
      ></div>
    </div>
  );
}
