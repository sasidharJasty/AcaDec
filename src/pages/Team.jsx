import { FiStar, FiHeart } from "react-icons/fi";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const MembersSection = ({ title, members, leadershipTeam }) => {
  return (
    <section className="mb-20 relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our diverse group of passionate scholars, each bringing unique strengths and perspectives.
        </p>
      </div>

      {/* Members Grid */}
      <div className="clean-card p-8 sm:p-12 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => {
            const isLeader = leadershipTeam?.some(
              (leader) => leader.name === member
            );
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 relative bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {member.split(" ").map((name) => name[0]).join("")}
                  {isLeader && (
                    <FiStar
                      title="Leadership Team"
                      className="ml-1 absolute top-0 left-0 text-yellow-400 text-base bg-yellow-100 rounded-full fill-yellow-400"
                    />
                  )}
                </div>
                <h3 className="text-black dark:text-white font-medium text-sm flex items-center justify-center gap-1">
                  {member}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


const Team = () => {
  const advisors = [
    { name: "Belle Andrade", position: "Advisor", department: "Math Department", initials: "BA" },
  ];


  
  const leadershipTeam = [
    { name: "Sai Sharan Nellutla", position: "President", initials: "SN" },
    { name: "Prajwal Nagendra", position: "Vice President", initials: "PN" },
    { name: "Sasidhar Jasty", position: "Treasurer", initials: "SJ" },
    { name: "Kashish Fnu", position: "Secretary", initials: "KF" },
    { name: "Sukhmandeep Kaur", position: "Publicity Commissioner", initials: "SK" },
  ];

  const classMembers = [
    "Abhimanyu Nair", "Andrea Jerald", "Andrea Posada Leiva", 
    "Arjun Yatish Prabhu", "Avtaj Khosa", "Ayush Kumar", "Brisia Salcedo", 
    "Colin Nguyen", "Devangana Milin Nair", "Gisella Jimenez", 
     "Kashish Fnu", 
    "Kushaagra Patel", "Oluwademilade Akinleye", 
    "Parteek Deol", "Prajwal Nagendra", "Ragavika Naramsetti", 
     "Saanika Purushotham",  "Sai Sharan Nellutla", 
    "Sasidhar Jasty", "Shaurya Khairmode", "Sorav Preet Singh", "Sukhmandeep Kaur", 
     "Tanavya Dubey", "Tanvir Kaur", 
    "Tripat Padda", "Xian Ylai Dimaandal"
  ];

  const clubMembers = [
    "Anmol Sidhu","Danett Alceena Cesante","Harshith Kumar", "Ikbaaj Singh","Kaustubh Anand", "Mina Boghdady","Nikitha Muruganagarajan", "Prithik Karthikeyan Manopriya", "Raunak Mahar", "Sagar Shah", "Syed Zainn Ali", "Tanvi Kapoor", "Varshith Gude", "Veeksha Sudireddy",
  ];

   const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  const { scrollY } = useScroll();

  // Combine scroll positions to show/hide key
  const keyOpacity = useTransform(
    scrollY,
    [
      firstSectionRef.current?.offsetTop || 0,
      secondSectionRef.current?.offsetTop || 0,
    ],
    [0, 1]
  );
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
        style={{ opacity: keyOpacity }}
        className="flex fixed bottom-8 right-4  z-20 flex-col items-start"
      >
        <div className="clean-card flex items-center gap-2 px-4 py-2 rounded-xl shadow-md bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700">
          
          <span className="text-sm text-gray-700 font-medium">
            Made with
          </span>
          <FiHeart className="text-red-400 text-lg rounded-full fill-red-400" />
          <span className="text-sm text-gray-700  font-medium">
            by Sasidhar Jasty
          </span>
        </div>
      </motion.div>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white my-6 ">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The dedicated scholars of Sierra High School Academic Decathlon
          </p>
        </div>

        {/* Team Photo Section */}
        <section className="mb-20">

          
          <div className="flex justify-center mb-12 !h-fit">
            <div className="clean-card rounded-2xl p-4  !h-fit">
              <div className="  bg-gray-200 dark:bg-neutral-700 rounded-xl flex items-center justify-center mb-4 ">
                <div className="text-center text-gray-500 dark:text-gray-400">
                 
                  <img src="/Picture1.jpg" alt="Team Photo" className="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advisors Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 max-w-4xl mx-auto">
            {/* Text on the left */}
            <div className="md:w-1/2 text-left mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                Our Advisors
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Dedicated faculty members who guide and support our team's academic journey.
              </p>
            </div>
            {/* Advisor card(s) on the right */}
            <div className="md:w-1/2 flex justify-center">
              {advisors.map((advisor, index) => (
                <div key={index} className="clean-card p-8 text-center px-12 rounded-2xl">
                  <div className="w-24 h-24 bg-black  text-white  rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {advisor.initials}
                  </div>
                  <h3 className="text-xl font-bold text-black  mb-2">{advisor.name}</h3>
                  <p className="text-gray-600  font-medium mb-1">{advisor.position}</p>
                  <p className="text-gray-500  text-sm">{advisor.department}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our student leaders guide the team with dedication, vision, and commitment to academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="clean-card !px-0 py-8 text-center rounded-2xl">
                <div className="w-20 h-20 bg-black  text-white  rounded-2xl flex items-center justify-center mx-auto mb-6 text-lg font-bold">
                  {leader.initials}
                </div>
                <h3 className="text-lg font-bold text-black  mb-2">{leader.name}</h3>
                <p className="text-gray-600  text-sm font-medium">{leader.position}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members Section */}
        <section className="mb-20 relative">
          {/* Floating Star Key */}
          <MembersSection
        title="Class Members"
        members={classMembers}
        leadershipTeam={leadershipTeam}
      />
      <MembersSection
        title="Club Members"
        members={clubMembers}
        leadershipTeam={leadershipTeam}
      />
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="clean-card rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-bold text-black  mb-4">{clubMembers.length+classMembers.length}</div>
                <h3 className="text-black  text-xl font-semibold mb-2">Total Members</h3>
                <p className="text-gray-600 ">Dedicated students committed to academic excellence</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-black  mb-4">5</div>
                <h3 className="text-black  text-xl font-semibold mb-2">Leadership Positions</h3>
                <p className="text-gray-600 ">Student leaders guiding our team to success</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-black  mb-4">10</div>
                <h3 className="text-black  text-xl font-semibold mb-2">Academic Subjects</h3>
                <p className="text-gray-600 ">Areas of study mastered by our team</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="clean-card p-8 sm:p-12 text-center rounded-2xl">
            <h2 className="text-3xl font-bold text-black mb-6">
              Join Our Academic Family
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in becoming part of our Academic Decathlon team? We welcome dedicated students who are passionate about learning and ready to challenge themselves across multiple disciplines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:bandrade@musd.net" 
                className="clean-btn px-8 py-4 text-lg rounded-lg"
              >
                Contact Our Coach
              </a>
              <a 
                href="/contact" 
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg rounded-lg transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
