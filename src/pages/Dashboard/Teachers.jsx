import React from "react";
import Title from "../../component/Title";
import Button from "../../component/Button";
import { NotificationIcon } from "../../assets/images/Icon";

function Teachers() {
  return <div className="mx-[32px] h-screen overflow-y-auto">
    <div className="flex items-center justify-end gap-[3px] mt-[19px]">
      <NotificationIcon/>
      <Button extraStyle={'w-fit text-black bg-transparent border-none py-3 px-[35px] hover:bg-primary-5 duration-300 hover:text-white'} title={'Log Out'}/>
    </div>
    <header className="flex items-center justify-between">
      <Title title={'Teachers'} extraStyle={'py-[22px] font-kubmh text-start font-medium leading-[24.8px] text-[20px]'}/>
      <Button extraStyle={'w-fit py-3 px-[14px]'} title={'Add Teachers'}/>
    </header>
  </div>;
}

export default Teachers;
