/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const AddCourse = ({ selectCourse,counting,remaining,price }) => {

    return (
        <div className="card card-compact w-[100%] bg-base-100 shadow-xl pl-6">
            <h1 className="text-blue-600 text-base font-bold pt-4">Total Credit Hour remaining : {remaining} HR</h1>
            <hr className="my-4" />
            <h1 className="text-2xl font-bold mb-5">Course Name</h1>
            {
                selectCourse.map((selectCourse, id) => (

                    <div key={id} >
                        <p className="opacity-60">{id+1}. {selectCourse.course_name}</p>
                    </div>
                ))
            }
            <hr className="my-4" />
            <h1 >Total Credit Hour : {counting}</h1>
            <hr className="my-4" />
            <h1 className="pb-4">Total Price: {price} USD</h1>
        </div>
    );
};

export default AddCourse;