import styles from '@styles/pages/home/sectionHeader.module.scss';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

import SectionCategories from './section-categories';
import SectionCourses from './section-courses';
import SectionPanel from './section-panel';

// type Props = {};

const Home = () => {
  return (
    <div>
      {/* first element */}
      <section className={`${styles.setionHeader}`}>
        <Fade duration={700} cascade direction="up">
          <div className="container mx-auto flex items-center justify-between py-5">
            <div className="flex flex-1 flex-col p-9">
              <div className="text-white">ARE YOU LOOKING FOR</div>
              <div className="text-5xl font-semibold text-white">
                Music Courses Just For You?
              </div>
              <div className="mt-2">
                <a
                  href="#_"
                  className="group relative inline-block rounded-full px-5 py-2.5 font-medium text-white"
                >
                  <span className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-50 blur-sm"></span>
                  <span className="absolute inset-0 mt-0.5 ml-0.5 h-full w-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-50 group-active:opacity-0"></span>
                  <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-xl transition-all duration-200 ease-out group-hover:blur-sm group-active:opacity-0"></span>
                  <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-br from-red-500 to-orange-400 transition duration-200 ease-out"></span>
                  <span className="relative font-sans text-lg">Join Us</span>
                </a>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-end justify-end">
              <div>
                {/* <Image
                src="https://edhenprimasandy.sirv.com/reharm/ilustration-1.png"
                alt=""
                width={300}
                height={300}
              /> */}
                <img src="https://edhenprimasandy.sirv.com/reharm/ilustration-2.png" />
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <SectionPanel />
      <SectionCourses />
      <SectionCategories />
    </div>
  );
};

export default Home;
