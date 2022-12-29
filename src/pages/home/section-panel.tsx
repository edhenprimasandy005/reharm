import styles from '@styles/pages/home/sectionHeader.module.scss';
import React from 'react';
import { GiDrumKit, GiGoblinCamp, GiMusicalScore } from 'react-icons/gi';

import Button from '@/components/elements/button';

function SectionPanel() {
  return (
    <section className={styles.stickyComponent}>
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex flex-row justify-center">
          <div className="flex w-3/4 flex-col gap-4 rounded-3xl bg-white p-4 shadow-lg md:grid md:grid-cols-3">
            <div>
              <Button
                className={`flex flex-row items-center gap-4 rounded-2xl py-2 px-4 shadow-sm hover:shadow-lg`}
              >
                <div>
                  <GiDrumKit size={50} color={'#d3082e'} />
                </div>

                <div className="flex flex-col justify-start text-left">
                  <span className="font-bold">Instruments</span>
                  <span className="text-sm text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </span>
                </div>
              </Button>
            </div>
            <div>
              <Button
                className={`flex flex-row items-center gap-4 rounded-2xl py-2 px-4 shadow-sm hover:shadow-lg`}
              >
                <div>
                  <GiMusicalScore size={50} color={'#378ad3'} />
                </div>

                <div className="flex flex-col justify-start text-left">
                  <span className="font-bold">Courses</span>
                  <span className="text-sm text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </span>
                </div>
              </Button>
            </div>
            <div>
              <Button
                className={`flex flex-row items-center gap-4 rounded-2xl py-2 px-4 shadow-sm hover:shadow-lg`}
              >
                <div>
                  <GiGoblinCamp size={50} color={'#a76105'} />
                </div>

                <div className="flex flex-col justify-start text-left">
                  <span className="font-bold">Bootcamps</span>
                  <span className="text-sm text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </span>
                </div>
              </Button>
            </div>
            {/* {BootcampData.map((item, i) => {
              return (
                <div
                  key={i}
                  // style={{
                  //   backgroundImage: `url(${item.image})`,
                  //   backgroundSize: 'cover',
                  // }}
                >
                  <Button
                    className={`flex flex-col rounded-2xl py-2 px-4 shadow-sm hover:shadow-lg`}
                  >
                    <span className="font-bold">{item.name}</span>
                    <span className="text-gray-600">{item.instrument}</span>
                  </Button>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPanel;
