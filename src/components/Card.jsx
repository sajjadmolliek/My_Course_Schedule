/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEffect } from "react";
import AddCourse from "./AddCourse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = () => {

    const [course, setCourse] = useState([]);
    const [selectCourse, setselectCourse] = useState([]);
    const [counting, setCounting] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        fetch('../../public/fakeData.json')
            .then(res => res.json())
            .then(data => setCourse(data));

    }, []);


    const clickButton = (btnSelectCourse) => {
        const isExect = selectCourse.find((item) => (item.id == btnSelectCourse.id));
        let count = btnSelectCourse.credit;
        let price = btnSelectCourse.price;
        if (isExect) {
            toast.warn("Exect");
        }
        else {
            selectCourse.forEach((selectCourse) => {
                count += selectCourse.credit;
                price += selectCourse.price;
            })
            let remain = 20 - count;
            if (count <= 20 || remain >= 0) {
                setCounting(count);
                setPrice(price);
                setRemaining(remain);
                console.log(counting, remaining);
                setselectCourse([...selectCourse, btnSelectCourse]);
            }
            else {
                toast.info("You Can't Add more")
            }


        }
    }

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start my-20">
                <div className="grid grid-cols-1 md:grid-cols-3  w-4/5 md:w-3/5">
                    {
                        course.map((course, id) => (
                            <div key={id} className="card mb-10 card-compact w-[100%] md:w-[95%] bg-base-100 shadow-xl">
                                <figure><img className="w-[90%]" src={course.course_img} alt="Shoes" /></figure>
                                <div className="card-body p-[8px]">
                                    <h2 className="font-bold text-lg">{course.course_name}</h2>
                                    <p className="opacity-50">{course.course_details}</p>
                                    <div className="flex justify-between mb-5">
                                        <div className="">$ Price: {course.price}</div>
                                        <figure className="flex">
                                            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                                <path d="M10 3.042C8.35161 1.56336 6.2144 0.746944 4 0.750001C2.948 0.750001 1.938 0.930002 1 1.262V15.512C1.96362 15.172 2.97816 14.9989 4 15C6.305 15 8.408 15.867 10 17.292M10 3.042C11.6483 1.56328 13.7856 0.746849 16 0.750001C17.052 0.750001 18.062 0.930002 19 1.262V15.512C18.0364 15.172 17.0218 14.9989 16 15C13.7856 14.9969 11.6484 15.8134 10 17.292M10 3.042V17.292" stroke="#1C1B1B" />
                                            </svg></div>
                                            <p> Credit: {course.credit}</p>
                                        </figure>
                                    </div>
                                    <div className="card-actions justify-center">
                                        <button onClick={() => clickButton(course)} className="px-20 py-2 rounded-lg btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-4/5 md:w-1/5">
                    <AddCourse selectCourse={selectCourse} counting={counting} remaining={remaining} price={price}></AddCourse>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default Card;