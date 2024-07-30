import img1 from './assets/images/AI.jpg'
import img2 from './assets/images/popcorn.jpg'
import img3 from './assets/images/Images.jpg'

const logotext = "RIFATH";
const meta = {
    title: "Mohammed Rifath J",
    description: "I’m Mohammed Rifath J data scientist _ Full stack devloper",
};

const introdata = {
    title: "I’m Mohammed Rifath J",
    animated: {
        first: "I’m passionate about coding",
        second: "I have expertise in Full Stack Development.",
        third: "I am proficient in using AI for data analytics",
    },
    description: "Applying technical expertise to drive innovation and excel within a dynamic company.",
    // your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About about my self",
    aboutme: "As a driven and focused individual with a strong foundation in coding and technical skills, I am committed to delivering high-quality work without compromise. I am determined to leverage my technical expertise to make a positive impact and contribute to the growth and success of the company.",
};
const education = [{
    degree: "Pursuing B. Tech in Artificial Intelligence and Machine Learning",
    institution: "Kongu Engineering College, Perundurai",
    year: "Till III Semester",
    score: "CGPA of 8.25",
    },
    {
        degree: "Completed HSC",
        institution: "Velalar Vidhyalayaa Senior Secondary School, Thindal",
        year: "2022",
    },
    {
        degree: "Completed SSLC",
        institution: "Velalar Vidhyalayaa Senior Secondary School, Thindal",
        year: "2020",
    },
];

const skills = [
    { name: "Python", value: 90 },
    { name: "C", value: 85 },
    { name: "Java", value: 80 },
    { name: "HTML", value: 70 },
    { name: "JavaScript", value: 80 },
    { name: "SpringBoot", value: 75 },
    { name: "ReactJS", value: 70 },
    { name: "SQL", value: 80 },
    { name: "MongoDB", value: 75 },
    { name: "Beautiful Soup", value: 80 },
    { name: "Selenium", value: 75 },
    { name: "Puppeteer", value: 70 },
    { name: "PowerBI", value: 70 },
];

const services = [
    {
        title: "Web Development",
        description: "Passionate about creating dynamic and responsive web applications using modern technologies.",
    },
    {
        title: "Machine Learning",
        description: "Expertise in developing and deploying machine learning models to solve real-world problems.",
    },
    {
        title: "Data Analysis",
        description: "Proficient in data analysis and visualization to derive actionable insights using tools like PowerBI.",
    },
];

const projects = [
    {
        title: "Fraudulent Profiles Detection",
        description: "Developed an application to identify fraudulent profiles on social media platforms.",
    },
    {
        title: "Deepfake Images Detection",
        description: "Executed a project targeting the detection of Deepfake images.",
    },
    {
        title: "Eye Tech",
        description: "Developed the 'Eye Tech' project to aid visually impaired people on roads.",
    },
    {
        title: "Movie Details App",
        description: "Crafted an app where entering a film title reveals movie details and related titles instantly.",
    },
];

const papers = [
    {
        title: "DeepFake Images",
        event: "MIT Madras, Chennai",
    },
    {
        title: "Fake Social Media Detection",
        event: "Smart India Hackathon, ranked top 25 in college",
    },
    {
        title: "Docker",
        event: "MIT Madras, Chennai",
    },
];

const training = [
    {
        title: "Sea Blue Shipyard Ltd.",
        location: "Cochin",
        description: "Explored for a day.",
    },
    {
        title: "Backend Developer Intern",
        company: "You@ME",
        description: "Interned as a backend developer.",
    },
];

const workshops = [
    {
        title: "Flutter Workshop",
        description: "Attended and completed a workshop on Flutter.",
    },
    {
        title: "Cloud Terraform Workshop",
        description: "Successfully completed a workshop on Cloud Terraform, gaining hands-on experience.",
    },
];

const leadership = [
    {
        title: "Hackathon Team Leader",
        description: "Spearheaded a team for a hackathon and paper presentation.",
    },
];
const dataportfolio = [{
        img:img1,
        description: "🚀 ArtiDetect: Upload images to instantly detect AI-generated content with this intuitive app powered by Hugging Face API and Streamlit.",
        link: "https://github.com/Mohammedrifath7/DeepFakeyar",
    },
    {
        img: img2,
        description: "🍿 Discover your next favorite film with Popcorn: search movies, explore related titles, and get personalized recommendations effortlessly.",
        link: "https://github.com/Mohammedrifath7/Movie_App",
    },
    {
        img: img3,
        description: "Innovative React Native app to tackle the bus tracking challenge 🚌.",
        link: "https://github.com/Mohammedrifath7/Bus_Management",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "mohammedrifathj.22aim@kongu.edu",
    YOUR_FONE: "9043720850",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Mohammedrifath7",
    facebook: "https://www.instagram.com/_rifath_7_18_17/",
    linkedin: "https://www.linkedin.com/in/mohammed-rifath-872135245/",
    twitter: "https://x.com/_rifath_7_17_18",
};
export {
    meta,
    dataabout,
    dataportfolio,
    education,
    skills,
    services,
    projects,
    papers,
    training,
    workshops,
    leadership,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};