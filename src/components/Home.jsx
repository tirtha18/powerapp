import React from 'react';
export default function Home() {
  return (
    <div className="h-full w-full bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="flex flex-col items-center justify-center h-full px-4 lg:px-0">
        <div className="w-full mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tighter mb-4 mt-80">
            Welcome to the Official Page of
          </h1>
          <h2 className="text-2xl font-bold mb-8">
            The Department of Power Engineering,
            <br />
            Jadavpur University
          </h2>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg leading-relaxed px-2 text-gray-200">
            The Department was established under the name of Power Plant Engineering in the year 1989 at the Salt Lake Campus of the University with a mission to produce specialized engineers in the field of power generation, transmission and distribution. Since the year 2003, it has been renamed as Power Engineering Department. Today, the Department offers both Bachelor of Power Engineering and Master of Power Engineering courses with student intakes of 43 and 18, respectively. The undergraduate course offers a diverse and interdisciplinary coverage of relevant mechanical and electrical engineering courses, and specialized courses on thermal, hydro, nuclear and renewable/non-conventional power generations. The course also contains a three-week credit-course on Power Plant Familiarization camp, where students get an intense practical training in operating power plants. The postgraduate course offers several elective courses on advanced topics on power generation, transmission and distribution, besides offering several interdisciplinary papers related to power engineering.
The Department boasts of an excellent faculty pool with rich and diverse backgrounds of mechanical engineering, electrical engineering and power engineering. Several laboratories equipped with modern equipment, a huge workshop and impressive computational facility for the students, faculty members and research scholars are the key to the active teaching and research environment of this small, but vibrant department.
          </p>
        </div>
      </div>
    </div>
  );
}
