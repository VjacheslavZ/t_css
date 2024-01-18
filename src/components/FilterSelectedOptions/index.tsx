import React from "react";
import {ReactComponent as RemoveIcon} from "../../assets/icons/icon_close.svg";


const FilterSelectedOptions: React.FC = () => {
    return (
        <div className="px-2 pb-2 border border-solid border-gray-200 rounded-lg w-full flex flex-wrap">
            <div
                className='w-fit py-0.5 px-3 bg-blue-100 text-sm text-blue-500 flex justify-center align-baseline tracking-normal rounded-md mr-2 mt-2 font-medium'>
                <span>New York, NY</span>
                <button className='ml-1'><RemoveIcon className="fill-blue-500"/></button>
            </div>

            <div
                className='w-fit py-0.5 px-3 bg-blue-100 text-sm text-blue-500 flex justify-center align-baseline tracking-normal rounded-md mr-2 mt-2 font-medium'>
                <span>Cobb, CA</span>
                <button className='ml-2'><RemoveIcon className="fill-blue-500"/></button>
            </div>

            <div
                className='w-fit py-0.5 px-3 bg-purple-100 text-sm text-purple-500 flex justify-center align-baseline tracking-normal rounded-md mr-2 mt-2 font-medium'>
                <span>Electricians</span>
                <button className='ml-2'><RemoveIcon className="fill-purple-500"/></button>
            </div>

            <div
                className='w-fit py-0.5 px-3 bg-green-100 text-sm text-green-500 flex justify-center align-baseline tracking-normal rounded-md mr-2 mt-2 font-medium'>
                <span>Manager</span>
                <button className='ml-2'><RemoveIcon className="fill-green-500"/></button>
            </div>
        </div>
    )
};

export default FilterSelectedOptions;