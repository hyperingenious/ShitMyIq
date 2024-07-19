import { useState } from 'react';
import { guessTheIQ } from './formSubmission';

export default function Questionnaire({ myFormData }) {
    const [responses, setResponses] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        preferences: Array(30).fill('')
    });

    const [submitted, setSubmitted] = useState("idle");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResponses({
            ...responses,
            [name]: value
        });
    };

    const handlePreferenceChange = (index, value) => {
        const newPreferences = [...responses.preferences];
        newPreferences[index] = value;
        setResponses({
            ...responses,
            preferences: newPreferences
        });
    };

    const isFormComplete = () => {
        const { question1, question2, question3, question4, question5, preferences } = responses;
        if (!question1 || !question2 || !question3 || !question4 || !question5) {
            return false;
        }
        for (let preference of preferences) {
            if (!preference) {
                return false;
            }
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormComplete()) {
            guessTheIQ(setSubmitted, myFormData, responses)
        } else {
            alert('Please complete all fields and preferences before submitting.');
        }
    };

    const preferenceQuestions = [
        "Do you daydream often?",
        "Do you solve problems in unique ways?",
        "Do you like visiting new places?",
        "Can you think of different answers to a problem?",
        "Do you try new hobbies regularly?",
        "Do you imagine 'what if' scenarios?",
        "Do you enjoy making art or music?",
        "Do you get inspired by your environment?",
        "Do you see patterns others miss?",
        "Do you like variety in your daily routine?",
        "Do you enjoy sharing ideas with friends?",
        "Do you change your space often?",
        "Can you connect unrelated ideas easily?",
        "Do you like to write stories or poems?",
        "Do you enjoy shows with surprising plots?",
        "Do you get excited about new ideas?",
        "Do you prefer working with others on projects?",
        "Do you question traditional methods?",
        "Do you think about future inventions?",
        "Do you look for creative solutions when stuck?",
        "Do you enjoy brainstorming sessions?",
        "Do you like to experiment with new recipes?",
        "Do you often doodle or sketch?",
        "Do you find joy in solving puzzles?",
        "Do you like to learn about different cultures?",
        "Do you often rearrange your schedule?",
        "Do you feel inspired by nature?",
        "Do you enjoy playing games that require strategy?",
        "Do you often create lists of ideas?",
        "Do you like to express your thoughts through writing?"
    ];

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
            {submitted == 'idle' && (<h1 className="text-2xl font-bold mb-6 text-gray-700">
                Please Answer the Following Questions Genuinely, give descriptive answers.
            </h1>)}
            {submitted == 'idle' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            If you have given a chance to live 1000 years would you take it?
                            <input
                                type="text"
                                name="question1"
                                value={responses.question1}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            How are you seeing yourself in next 10 years?
                            <input
                                type="text"
                                name="question2"
                                value={responses.question2}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name the 5 best books you have read?
                            <input
                                type="text"
                                name="question3"
                                value={responses.question3}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Do you know Elon Musk, if yes, what you dislike about him vice-versa?
                            <input
                                type="text"
                                name="question4"
                                value={responses.question4}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Answer yes if you know any one of these:
                            OSHO, Jiddu Krishnamurti, Naval Ravikant, Richard Feynman, Fyodor Dostoevsky, Jordan Peterson, Richard Dawkins, Friedrich Nietzsche, Acharya Prashant, Alan Turing, Ada Lovelace?
                            <input
                                type="text"
                                name="question5"
                                value={responses.question5}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                required
                            />
                        </label>
                    </div>

                    {preferenceQuestions.map((question, index) => (
                        <div key={index}>
                            <p className="block text-sm font-medium text-gray-700">{question}</p>
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    onClick={() => handlePreferenceChange(index, 'Yes')}
                                    className={`mt-1 p-2 border rounded-md ${responses.preferences[index] === 'Yes' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handlePreferenceChange(index, 'No')}
                                    className={`mt-1 p-2 border rounded-md ${responses.preferences[index] === 'No' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    ))}

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>)}
            {
                submitted == 'loading' && (
                    <div className="relative mt-4 text-white p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg opacity-50 blur-lg"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                            <h2 className="text-3xl font-bold">It's loading</h2>
                            <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v4m0 4v8m0-8H8m4 0h4" />
                            </svg>
                            <div className="flex space-x-2">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-2 w-2 bg-white rounded-full animate-bounce delay-${i * 100}`}
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                    ></div>
                                ))}
                            </div>
                            <div className="text-center text-lg">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-[text_5s_ease_infinite]">
                                    Loading
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 animate-[text_5s_ease_infinite]">
                                    .............
                                </span>
                            </div>
                        </div>
                    </div>
                )



            }
            {submitted == "success" && (
                <div className="mt-4 text-green-500 p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Thank you for your responses!
                    </h2>
                    <svg className="mt-4 w-8 h-8 text-white animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

            )}
        </div>
    );
}
