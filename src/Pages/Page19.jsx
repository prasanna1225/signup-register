import React from 'react'
import Image1 from '../images/page19/Rectangle 236-2.png'
import Image2 from '../images/page19/Rectangle 236-3.png'
import Image3 from '../images/page19/Rectangle 236-4.png'
import Image4 from '../images/page19/Rectangle 236.png'
import CourseSection from '../Components/CourseSection'
import { useState } from 'react';

const Page19 = () => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchText);
    };

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };
    const courseData = [
        {
            id: 1,
            section: "Music Courses",
            courses: [
                {
                    id: 1,
                    image: Image1,
                    heading: "Introduction to Music Theory",
                    description: "Learn the fundamentals of music theory and build a strong foundation for your musical journey.",
                    skills: ["Music Theory", "Note Reading"],
                    areas: ["Music"],
                },
                {
                    id: 2,
                    image: Image2,
                    heading: "Guitar Mastery",
                    description: "Master the art of playing the guitar and learn various techniques and styles.",
                    skills: ["Guitar", "Chord Progressions"],
                    areas: ["Music"],
                },
                {
                    id: 3,
                    image: Image3,
                    heading: "Piano for Beginners",
                    description: "Get started with playing the piano and develop basic keyboard skills.",
                    skills: ["Piano", "Keyboard Techniques"],
                    areas: ["Music"],
                },
                {
                    id: 4,
                    image: Image4,
                    heading: "Music Production Essentials",
                    description: "Learn the basics of music production and create your own tracks.",
                    skills: ["Music Production", "Digital Audio Workstations"],
                    areas: ["Music"],
                },
            ],
        },
        {
            id: 2,
            section: "Graphic Design",
            courses: [
                {
                    id: 1,
                    image: Image1,
                    heading: "Adobe Photoshop Masterclass",
                    description: "Become proficient in Adobe Photoshop and learn essential graphic design skills.",
                    skills: ["Adobe Photoshop", "Image Editing"],
                    areas: ["Graphic Design"],
                },
                {
                    id: 2,
                    image: Image2,
                    heading: "Illustrator for Beginners",
                    description: "Get started with Adobe Illustrator and learn vector graphics design.",
                    skills: ["Adobe Illustrator", "Vector Graphics"],
                    areas: ["Graphic Design"],
                },
                {
                    id: 3,
                    image: Image3,
                    heading: "Typography Fundamentals",
                    description: "Explore the world of typography and learn how to create visually appealing text designs.",
                    skills: ["Typography", "Font Pairing"],
                    areas: ["Graphic Design"],
                },
                {
                    id: 4,
                    image: Image4,
                    heading: "Logo Design Workshop",
                    description: "Master the art of logo design and create impactful brand identities.",
                    skills: ["Logo Design", "Brand Identity"],
                    areas: ["Graphic Design"],
                },
            ],
        },
        {
            id: 3,
            section: "UI/UX Design",
            courses: [
                {
                    id: 1,
                    image: Image1,
                    heading: "User Interface Design Principles",
                    description: "Learn the fundamental principles of user interface design and create intuitive user experiences.",
                    skills: ["UI Design", "User Experience"],
                    areas: ["UI/UX Design"],
                },
                {
                    id: 2,
                    image: Image2,
                    heading: "Wireframing and Prototyping",
                    description: "Master the art of wireframing and create interactive prototypes for your designs.",
                    skills: ["Wireframing", "Prototyping Tools"],
                    areas: ["UI/UX Design"],
                },
                {
                    id: 3,
                    image: Image3,
                    heading: "Mobile App Design",
                    description: "Learn the essentials of designing user-friendly mobile applications.",
                    skills: ["Mobile App Design", "Responsive Design"],
                    areas: ["UI/UX Design"],
                },
                {
                    id: 4,
                    image: Image4,
                    heading: "Design Thinking for Innovation",
                    description: "Discover the power of design thinking and its role in driving innovation.",
                    skills: ["Design Thinking", "Problem Solving"],
                    areas: ["UI/UX Design"],
                },
            ],
        },
        {
            id: 4,
            section: "Marketing",
            courses: [
                {
                    id: 1,
                    image: Image1,
                    heading: "Digital Marketing Fundamentals",
                    description: "Learn the basics of digital marketing and explore different online marketing channels.",
                    skills: ["Digital Marketing", "Online Advertising"],
                    areas: ["Marketing"],
                },
                {
                    id: 2,
                    image: Image2,
                    heading: "Social Media Marketing Strategies",
                    description: "Master social media marketing techniques and leverage popular platforms for business growth.",
                    skills: ["Social Media Marketing", "Influencer Marketing"],
                    areas: ["Marketing"],
                },
                {
                    id: 3,
                    image: Image3,
                    heading: "Search Engine Optimization (SEO)",
                    description: "Learn the fundamentals of SEO and improve website visibility in search engine results.",
                    skills: ["SEO", "Keyword Research"],
                    areas: ["Marketing"],
                },
                {
                    id: 4,
                    image: Image4,
                    heading: "Email Marketing Mastery",
                    description: "Unlock the potential of email marketing and build effective email campaigns.",
                    skills: ["Email Marketing", "Lead Generation"],
                    areas: ["Marketing"],
                },
            ],
        },
        {
            id: 5,
            section: "Development",
            courses: [
                {
                    id: 1,
                    image: Image1,
                    heading: "JavaScript for Beginners",
                    description: "Get started with JavaScript programming language and build interactive web applications.",
                    skills: ["JavaScript", "Web Development"],
                    areas: ["Development"],
                },
                {
                    id: 2,
                    image: Image2,
                    heading: "React.js Fundamentals",
                    description: "Learn the basics of React.js and build reusable UI components.",
                    skills: ["React.js", "Front-end Development"],
                    areas: ["Development"],
                },
                {
                    id: 3,
                    image: Image3,
                    heading: "Node.js and Express.js",
                    description: "Explore server-side JavaScript with Node.js and build RESTful APIs using Express.js.",
                    skills: ["Node.js", "Express.js"],
                    areas: ["Development"],
                },
                {
                    id: 4,
                    image: Image4,
                    heading: "Full-Stack Web Development",
                    description: "Become a full-stack developer and learn both front-end and back-end web development.",
                    skills: ["Full-Stack Development", "Database Management"],
                    areas: ["Development"],
                },
            ],
        },
        {
            id: 6,
            section: "Personal Development",
            courses: [
                {
                    id: 1,
                    image: Image1,
                    heading: "Goal Setting and Time Management",
                    description: "Master the art of setting goals and managing your time effectively for personal growth.",
                    skills: ["Goal Setting", "Productivity"],
                    areas: ["Personal Development"],
                },
                {
                    id: 2,
                    image: Image2,
                    heading: "Building Self-Confidence",
                    description: "Boost your self-confidence and develop a positive mindset for personal success.",
                    skills: ["Self-Confidence", "Self-Esteem"],
                    areas: ["Personal Development"],
                },
                {
                    id: 3,
                    image: Image3,
                    heading: "Stress Management Techniques",
                    description: "Learn effective stress management techniques to maintain a healthy work-life balance.",
                    skills: ["Stress Management", "Well-being"],
                    areas: ["Personal Development"],
                },
                {
                    id: 4,
                    image: Image4,
                    heading: "Effective Communication Skills",
                    description: "Improve your communication skills and enhance your relationships both personally and professionally.",
                    skills: ["Communication", "Interpersonal Skills"],
                    areas: ["Personal Development"],
                },
            ],
        },
        {
            id: 7,
            section: "Business",
            courses: [
                {
                    id: 1,
                    image: Image1,
                    heading: "Entrepreneurship 101",
                    description: "Explore the fundamentals of entrepreneurship and learn how to start your own business.",
                    skills: ["Entrepreneurship", "Business Planning"],
                    areas: ["Business"],
                },
                {
                    id: 2,
                    image: Image2,
                    heading: "Financial Management for Small Businesses",
                    description: "Master financial management techniques to ensure the success of your small business.",
                    skills: ["Financial Management", "Budgeting"],
                    areas: ["Business"],
                },
                {
                    id: 3,
                    image: Image3,
                    heading: "Marketing Strategy and Planning",
                    description: "Develop effective marketing strategies and create a comprehensive marketing plan.",
                    skills: ["Marketing Strategy", "Market Research"],
                    areas: ["Business"],
                },
                {
                    id: 4,
                    image: Image4,
                    heading: "Leadership and Management Skills",
                    description: "Enhance your leadership and management skills to lead teams and achieve business objectives.",
                    skills: ["Leadership", "Team Management"],
                    areas: ["Business"],
                },
            ],
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <form className="flex items-center justify-center py-5">
                <div className="flex items-center w-full h-12 rounded-lg border border-[#215D4F66] rounded-md" style={{ maxWidth: 860 + 'px' }}>
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search mentor"
                        value={searchText}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="inline-flex items-center py-2.5 px-8 ml-2 text-xl font-medium text-white bg-[#215D4F] rounded-md hover:bg-[#45776B] focus:outline-none" onClick={handleSearch}>
                    Search
                </button>
            </form>

            <div>
                {courseData.map((section) => (
                    <CourseSection key={section.id} section={section.section} courses={section.courses} />
                ))}
            </div>
        </div>
    )
}

export default Page19