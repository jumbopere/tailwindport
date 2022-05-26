import React from 'react';
import works from '../data/works';
import Section from './Section';
import WorkItem from './WorkItem';

const Works = () => {
  return (
    <div className="py-12">
    <Section id="works">Recent Works</Section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {works.map(work => (
            <WorkItem
                key={work.title}
                imgUrl={work.imgUrl}
                title={work.title}
                tech={work.tech}
                workUrl={work.workUrl}
            />
        ))}
    </div>
</div>
  )
}

export default Works