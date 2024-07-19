import { useState } from 'react';
import logo from './assets/circle.png'
import styles from './HeroSection.module.css'

export default function StudentForm({ page, setPage, setMyFormData }) {
    const [formData, setFormData] = useState({
        name: '',
        rollNumber: '',
        course: 'BCA',
        section: '',
        semester: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        rollNumber: false,
        section: false,
        semester: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Reset the error for the current field
        setErrors({
            ...errors,
            [name]: false
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for empty fields
        const newErrors = {
            name: formData.name === '',
            rollNumber: formData.rollNumber === '',
            section: formData.section === '',
            semester: formData.semester === ''
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((error) => error);
        if (!hasErrors) {
            console.log(formData)
            setMyFormData(formData)
            setPage('questions')
            // Submit the form (e.g., send data to an API)
        }
    };

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only"></span>
                            <img
                                alt=""
                                src={logo}
                                className={`h-8 w-8 rounded-full ${styles.spin}`}
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        ></button>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-6 text-gray-700">Only for authenticity purpose</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`mt-1 p-2 block w-full shadow-sm sm:text-sm border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-500">Name is required</p>}
                        </div>
                        <div>
                            <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700">
                                Roll Number
                            </label>
                            <input
                                type="number"
                                id="rollNumber"
                                name="rollNumber"
                                value={formData.rollNumber}
                                onChange={handleChange}
                                className={`mt-1 p-2 block w-full shadow-sm sm:text-sm border ${errors.rollNumber ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.rollNumber && <p className="mt-1 text-sm text-red-500">Roll Number is required</p>}
                        </div>
                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                                Course
                            </label>
                            <input
                                type="text"
                                id="course"
                                name="course"
                                value={formData.course}
                                readOnly
                                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                            />
                        </div>
                        <div>
                            <label htmlFor="section" className="block text-sm font-medium text-gray-700">
                                Section
                            </label>
                            <select
                                id="section"
                                name="section"
                                value={formData.section}
                                onChange={handleChange}
                                className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border ${errors.section ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md`}
                            >
                                <option value="">Select a section</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                            {errors.section && <p className="mt-1 text-sm text-red-500">Section is required</p>}
                        </div>
                        <div>
                            <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
                                Semester
                            </label>
                            <select
                                id="semester"
                                name="semester"
                                value={formData.semester}
                                onChange={handleChange}
                                className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border ${errors.semester ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md`}
                            >
                                <option value="">Select a semester</option>
                                <option value="1">1</option>
                                <option value="3">3</option>
                                <option value="5">5</option>
                            </select>
                            {errors.semester && <p className="mt-1 text-sm text-red-500">Semester is required</p>}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </div>
    );
}
